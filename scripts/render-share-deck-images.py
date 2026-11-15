#!/usr/bin/env python3
"""Render an image-only PPTX (every slide is made of pictures) into PNG pages and a PDF.

Used by prepare-share-assets.mjs when LibreOffice is not installed. It refuses decks that
contain text or non-picture shapes, because those cannot be rendered faithfully here.
"""

from __future__ import annotations

import argparse
import posixpath
import re
import sys
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile

from PIL import Image

NS = {
    "p": "http://schemas.openxmlformats.org/presentationml/2006/main",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "rel": "http://schemas.openxmlformats.org/package/2006/relationships",
}
WIDTH, HEIGHT = 1920, 1080


def read_rels(archive: ZipFile, part: str) -> dict[str, str]:
    directory, name = posixpath.split(part)
    rels_path = posixpath.join(directory, "_rels", name + ".rels")
    root = ET.fromstring(archive.read(rels_path))
    base = posixpath.dirname(part)
    return {
        rel.get("Id", ""): posixpath.normpath(posixpath.join(base, rel.get("Target", "")))
        for rel in root.findall("rel:Relationship", NS)
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--pages-dir", type=Path, required=True)
    parser.add_argument("--pdf", type=Path, required=True)
    parser.add_argument("--expected-slides", type=int, required=True)
    arguments = parser.parse_args()

    with ZipFile(arguments.input) as archive:
        presentation = ET.fromstring(archive.read("ppt/presentation.xml"))
        size = presentation.find("p:sldSz", NS)
        if size is None:
            raise SystemExit("render-share-deck-images: presentation has no slide size")
        slide_w, slide_h = int(size.get("cx", "0")), int(size.get("cy", "0"))
        if slide_w * 9 != slide_h * 16:
            raise SystemExit("render-share-deck-images: slide size is not 16:9")
        presentation_rels = read_rels(archive, "ppt/presentation.xml")
        slide_parts = [
            presentation_rels[node.get(f"{{{NS['r']}}}id", "")]
            for node in presentation.findall("p:sldIdLst/p:sldId", NS)
        ]
        if len(slide_parts) != arguments.expected_slides:
            raise SystemExit(
                f"render-share-deck-images: expected {arguments.expected_slides} slides, found {len(slide_parts)}"
            )

        arguments.pages_dir.mkdir(parents=True, exist_ok=True)
        pages: list[Image.Image] = []
        for index, part in enumerate(slide_parts, start=1):
            root = ET.fromstring(archive.read(part))
            tree = root.find("p:cSld/p:spTree", NS)
            if tree is None:
                raise SystemExit(f"render-share-deck-images: slide {index} has no shape tree")
            if root.findall(".//a:t", NS):
                raise SystemExit(f"render-share-deck-images: slide {index} contains text; install LibreOffice instead")
            rels = read_rels(archive, part)
            canvas = Image.new("RGB", (WIDTH, HEIGHT), "white")
            picture_count = 0
            for child in tree:
                tag = child.tag.split("}")[-1]
                if tag in {"nvGrpSpPr", "grpSpPr"}:
                    continue
                if tag != "pic":
                    raise SystemExit(f"render-share-deck-images: slide {index} contains a non-picture shape ({tag})")
                blip = child.find("p:blipFill/a:blip", NS)
                xfrm = child.find("p:spPr/a:xfrm", NS)
                if blip is None or xfrm is None:
                    raise SystemExit(f"render-share-deck-images: slide {index} has an unplaceable picture")
                off, ext = xfrm.find("a:off", NS), xfrm.find("a:ext", NS)
                if off is None or ext is None or xfrm.get("rot") or xfrm.get("flipH") or xfrm.get("flipV"):
                    raise SystemExit(f"render-share-deck-images: slide {index} uses unsupported picture transforms")
                if child.find("p:spPr/a:srcRect", NS) is not None or blip.find("a:*", NS) is not None:
                    raise SystemExit(f"render-share-deck-images: slide {index} crops or recolors a picture")
                target = rels[blip.get(f"{{{NS['r']}}}embed", "")]
                with archive.open(target) as handle:
                    picture = Image.open(handle).convert("RGBA")
                    width = round(int(ext.get("cx", "0")) * WIDTH / slide_w)
                    height = round(int(ext.get("cy", "0")) * HEIGHT / slide_h)
                    picture = picture.resize((width, height), Image.LANCZOS)
                    canvas.paste(
                        picture,
                        (round(int(off.get("x", "0")) * WIDTH / slide_w), round(int(off.get("y", "0")) * HEIGHT / slide_h)),
                        picture,
                    )
                picture_count += 1
            if picture_count == 0:
                raise SystemExit(f"render-share-deck-images: slide {index} has no pictures")
            canvas.save(arguments.pages_dir / f"page-{index:03d}.png")
            pages.append(canvas)

    first, *rest = pages
    first.save(arguments.pdf, "PDF", resolution=144.0, save_all=True, append_images=rest, quality=92)
    print(f"rendered {len(pages)} pages")
    return 0


if __name__ == "__main__":
    sys.exit(main())
