#!/usr/bin/env python3
"""Create a rendering-only copy of the 12-page OceanBase MCPAdvisor deck.

LibreOffice wraps the cover's auto-sized text boxes and cannot reliably resolve
the original PuHuiTi font aliases. Use PingFang SC, widen those four cover boxes
within the existing white area and allow extra width for other no-wrap,
auto-sized text boxes. The public PPTX is sanitized from the original,
not this copy; images and PDF use this copy. Embedded media is left untouched.
"""

import argparse
import re
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile

NS = {
    "p": "http://schemas.openxmlformats.org/presentationml/2006/main",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    if args.input.resolve() == args.output.resolve() or args.output.exists():
        parser.error("Use a new output path distinct from the original")
    with ZipFile(args.input) as source:
        slides = [name for name in source.namelist() if re.fullmatch(r"ppt/slides/slide\d+\.xml", name)]
        cover = ET.fromstring(source.read("ppt/slides/slide1.xml"))
        text = "".join(node.text or "" for node in cover.findall(".//a:t", NS))
        if len(slides) != 12 or "MCP advisor" not in text:
            parser.error("Expected the approved 12-page MCPAdvisor deck")
        args.output.parent.mkdir(parents=True, exist_ok=True)
        with ZipFile(args.output, "w") as output:
            for name in source.namelist():
                data = source.read(name)
                if name.endswith(".xml"):
                    data = re.sub(rb'typeface="Alibaba PuHuiTi[^"]*"', b'typeface="PingFang SC"', data)
                    if re.fullmatch(r"ppt/slides/slide\d+\.xml", name):
                        root = ET.fromstring(data)
                        for shape in root.findall(".//p:sp", NS):
                            extent = shape.find("./p:spPr/a:xfrm/a:ext", NS)
                            offset = shape.find("./p:spPr/a:xfrm/a:off", NS)
                            body = shape.find("./p:txBody/a:bodyPr", NS)
                            if extent is not None and name == "ppt/slides/slide1.xml":
                                extent.set("cx", "6500000")
                            elif (extent is not None and offset is not None and body is not None
                                  and body.get("wrap") == "none" and body.find("a:spAutoFit", NS) is not None):
                                # PowerPoint grows these boxes; Impress wraps them instead.
                                width = min(int(int(extent.get("cx")) * 1.25), 12192000 - int(offset.get("x")))
                                extent.set("cx", str(width))
                        data = ET.tostring(root, encoding="utf-8", xml_declaration=True)
                output.writestr(name, data)


if __name__ == "__main__":
    main()
