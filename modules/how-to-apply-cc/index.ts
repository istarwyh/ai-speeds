export const howToApplyCCModule = `
<section id="how-to-apply-cc" class="content-section">
  <!-- 概览卡片容器 - 由新的模块化系统渲染 -->
  <div id="how-to-apply-cc-overview-cards" class="overview-cards-container">
    <!-- 卡片内容将由 src/client/howToApplyCC 系统动态生成 -->
  </div>
  
  <!-- 文章内容容器 -->
  <div id="how-to-apply-cc-content" class="content-container">
    <!-- 文章内容将根据导航动态加载 -->
  </div>
</section>
`;

// BEGIN_INERT_CLIENT_SCRIPT (How to Apply CC)
// var HowToApplyCCApp = (() => {
//   var __create = Object.create;
//   var __defProp = Object.defineProperty;
//   var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
//   var __getOwnPropNames = Object.getOwnPropertyNames;
//   var __getProtoOf = Object.getPrototypeOf;
//   var __hasOwnProp = Object.prototype.hasOwnProperty;
//   var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
//   var __commonJS = (cb, mod) => function __require() {
//     return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
//   };
//   var __export = (target, all) => {
//     for (var name in all)
//       __defProp(target, name, { get: all[name], enumerable: true });
//   };
//   var __copyProps = (to, from, except, desc) => {
//     if (from && typeof from === "object" || typeof from === "function") {
//       for (let key of __getOwnPropNames(from))
//         if (!__hasOwnProp.call(to, key) && key !== except)
//           __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
//     }
//     return to;
//   };
//   var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
//     // If the importer is in node compatibility mode or this is not an ESM
//     // file that has been converted to a CommonJS file using a Babel-
//     // compatible transform (i.e. "__esModule" has not been set), then set
//     // "default" to the CommonJS "module.exports" for node compatibility.
//     isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
//     mod
//   ));
//   var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
//   var __publicField = (obj, key, value) => {
//     __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
//     return value;
//   };
// 
//   // node_modules/entities/lib/maps/entities.json
//   var require_entities = __commonJS({
//     "node_modules/entities/lib/maps/entities.json"(exports, module) {
//       module.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/common/entities.js
//   var require_entities2 = __commonJS({
//     "node_modules/markdown-it/lib/common/entities.js"(exports, module) {
//       "use strict";
//       module.exports = require_entities();
//     }
//   });
// 
//   // node_modules/uc.micro/categories/P/regex.js
//   var require_regex = __commonJS({
//     "node_modules/uc.micro/categories/P/regex.js"(exports, module) {
//       module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
//     }
//   });
// 
//   // node_modules/mdurl/encode.js
//   var require_encode = __commonJS({
//     "node_modules/mdurl/encode.js"(exports, module) {
//       "use strict";
//       var encodeCache = {};
//       function getEncodeCache(exclude) {
//         var i, ch, cache = encodeCache[exclude];
//         if (cache) {
//           return cache;
//         }
//         cache = encodeCache[exclude] = [];
//         for (i = 0; i < 128; i++) {
//           ch = String.fromCharCode(i);
//           if (/^[0-9a-z]$/i.test(ch)) {
//             cache.push(ch);
//           } else {
//             cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
//           }
//         }
//         for (i = 0; i < exclude.length; i++) {
//           cache[exclude.charCodeAt(i)] = exclude[i];
//         }
//         return cache;
//       }
//       function encode(string, exclude, keepEscaped) {
//         var i, l, code, nextCode, cache, result = "";
//         if (typeof exclude !== "string") {
//           keepEscaped = exclude;
//           exclude = encode.defaultChars;
//         }
//         if (typeof keepEscaped === "undefined") {
//           keepEscaped = true;
//         }
//         cache = getEncodeCache(exclude);
//         for (i = 0, l = string.length; i < l; i++) {
//           code = string.charCodeAt(i);
//           if (keepEscaped && code === 37 && i + 2 < l) {
//             if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
//               result += string.slice(i, i + 3);
//               i += 2;
//               continue;
//             }
//           }
//           if (code < 128) {
//             result += cache[code];
//             continue;
//           }
//           if (code >= 55296 && code <= 57343) {
//             if (code >= 55296 && code <= 56319 && i + 1 < l) {
//               nextCode = string.charCodeAt(i + 1);
//               if (nextCode >= 56320 && nextCode <= 57343) {
//                 result += encodeURIComponent(string[i] + string[i + 1]);
//                 i++;
//                 continue;
//               }
//             }
//             result += "%EF%BF%BD";
//             continue;
//           }
//           result += encodeURIComponent(string[i]);
//         }
//         return result;
//       }
//       encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
//       encode.componentChars = "-_.!~*'()";
//       module.exports = encode;
//     }
//   });
// 
//   // node_modules/mdurl/decode.js
//   var require_decode = __commonJS({
//     "node_modules/mdurl/decode.js"(exports, module) {
//       "use strict";
//       var decodeCache = {};
//       function getDecodeCache(exclude) {
//         var i, ch, cache = decodeCache[exclude];
//         if (cache) {
//           return cache;
//         }
//         cache = decodeCache[exclude] = [];
//         for (i = 0; i < 128; i++) {
//           ch = String.fromCharCode(i);
//           cache.push(ch);
//         }
//         for (i = 0; i < exclude.length; i++) {
//           ch = exclude.charCodeAt(i);
//           cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
//         }
//         return cache;
//       }
//       function decode(string, exclude) {
//         var cache;
//         if (typeof exclude !== "string") {
//           exclude = decode.defaultChars;
//         }
//         cache = getDecodeCache(exclude);
//         return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
//           var i, l, b1, b2, b3, b4, chr, result = "";
//           for (i = 0, l = seq.length; i < l; i += 3) {
//             b1 = parseInt(seq.slice(i + 1, i + 3), 16);
//             if (b1 < 128) {
//               result += cache[b1];
//               continue;
//             }
//             if ((b1 & 224) === 192 && i + 3 < l) {
//               b2 = parseInt(seq.slice(i + 4, i + 6), 16);
//               if ((b2 & 192) === 128) {
//                 chr = b1 << 6 & 1984 | b2 & 63;
//                 if (chr < 128) {
//                   result += "\uFFFD\uFFFD";
//                 } else {
//                   result += String.fromCharCode(chr);
//                 }
//                 i += 3;
//                 continue;
//               }
//             }
//             if ((b1 & 240) === 224 && i + 6 < l) {
//               b2 = parseInt(seq.slice(i + 4, i + 6), 16);
//               b3 = parseInt(seq.slice(i + 7, i + 9), 16);
//               if ((b2 & 192) === 128 && (b3 & 192) === 128) {
//                 chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
//                 if (chr < 2048 || chr >= 55296 && chr <= 57343) {
//                   result += "\uFFFD\uFFFD\uFFFD";
//                 } else {
//                   result += String.fromCharCode(chr);
//                 }
//                 i += 6;
//                 continue;
//               }
//             }
//             if ((b1 & 248) === 240 && i + 9 < l) {
//               b2 = parseInt(seq.slice(i + 4, i + 6), 16);
//               b3 = parseInt(seq.slice(i + 7, i + 9), 16);
//               b4 = parseInt(seq.slice(i + 10, i + 12), 16);
//               if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
//                 chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
//                 if (chr < 65536 || chr > 1114111) {
//                   result += "\uFFFD\uFFFD\uFFFD\uFFFD";
//                 } else {
//                   chr -= 65536;
//                   result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
//                 }
//                 i += 9;
//                 continue;
//               }
//             }
//             result += "\uFFFD";
//           }
//           return result;
//         });
//       }
//       decode.defaultChars = ";/?:@&=+$,#";
//       decode.componentChars = "";
//       module.exports = decode;
//     }
//   });
// 
//   // node_modules/mdurl/format.js
//   var require_format = __commonJS({
//     "node_modules/mdurl/format.js"(exports, module) {
//       "use strict";
//       module.exports = function format(url) {
//         var result = "";
//         result += url.protocol || "";
//         result += url.slashes ? "//" : "";
//         result += url.auth ? url.auth + "@" : "";
//         if (url.hostname && url.hostname.indexOf(":") !== -1) {
//           result += "[" + url.hostname + "]";
//         } else {
//           result += url.hostname || "";
//         }
//         result += url.port ? ":" + url.port : "";
//         result += url.pathname || "";
//         result += url.search || "";
//         result += url.hash || "";
//         return result;
//       };
//     }
//   });
// 
//   // node_modules/mdurl/parse.js
//   var require_parse = __commonJS({
//     "node_modules/mdurl/parse.js"(exports, module) {
//       "use strict";
//       function Url() {
//         this.protocol = null;
//         this.slashes = null;
//         this.auth = null;
//         this.port = null;
//         this.hostname = null;
//         this.hash = null;
//         this.search = null;
//         this.pathname = null;
//       }
//       var protocolPattern = /^([a-z0-9.+-]+:)/i;
//       var portPattern = /:[0-9]*$/;
//       var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
//       var delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
//       var unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
//       var autoEscape = ["'"].concat(unwise);
//       var nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
//       var hostEndingChars = ["/", "?", "#"];
//       var hostnameMaxLen = 255;
//       var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
//       var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
//       var hostlessProtocol = {
//         "javascript": true,
//         "javascript:": true
//       };
//       var slashedProtocol = {
//         "http": true,
//         "https": true,
//         "ftp": true,
//         "gopher": true,
//         "file": true,
//         "http:": true,
//         "https:": true,
//         "ftp:": true,
//         "gopher:": true,
//         "file:": true
//       };
//       function urlParse(url, slashesDenoteHost) {
//         if (url && url instanceof Url) {
//           return url;
//         }
//         var u = new Url();
//         u.parse(url, slashesDenoteHost);
//         return u;
//       }
//       Url.prototype.parse = function(url, slashesDenoteHost) {
//         var i, l, lowerProto, hec, slashes, rest = url;
//         rest = rest.trim();
//         if (!slashesDenoteHost && url.split("#").length === 1) {
//           var simplePath = simplePathPattern.exec(rest);
//           if (simplePath) {
//             this.pathname = simplePath[1];
//             if (simplePath[2]) {
//               this.search = simplePath[2];
//             }
//             return this;
//           }
//         }
//         var proto = protocolPattern.exec(rest);
//         if (proto) {
//           proto = proto[0];
//           lowerProto = proto.toLowerCase();
//           this.protocol = proto;
//           rest = rest.substr(proto.length);
//         }
//         if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
//           slashes = rest.substr(0, 2) === "//";
//           if (slashes && !(proto && hostlessProtocol[proto])) {
//             rest = rest.substr(2);
//             this.slashes = true;
//           }
//         }
//         if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
//           var hostEnd = -1;
//           for (i = 0; i < hostEndingChars.length; i++) {
//             hec = rest.indexOf(hostEndingChars[i]);
//             if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
//               hostEnd = hec;
//             }
//           }
//           var auth, atSign;
//           if (hostEnd === -1) {
//             atSign = rest.lastIndexOf("@");
//           } else {
//             atSign = rest.lastIndexOf("@", hostEnd);
//           }
//           if (atSign !== -1) {
//             auth = rest.slice(0, atSign);
//             rest = rest.slice(atSign + 1);
//             this.auth = auth;
//           }
//           hostEnd = -1;
//           for (i = 0; i < nonHostChars.length; i++) {
//             hec = rest.indexOf(nonHostChars[i]);
//             if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
//               hostEnd = hec;
//             }
//           }
//           if (hostEnd === -1) {
//             hostEnd = rest.length;
//           }
//           if (rest[hostEnd - 1] === ":") {
//             hostEnd--;
//           }
//           var host = rest.slice(0, hostEnd);
//           rest = rest.slice(hostEnd);
//           this.parseHost(host);
//           this.hostname = this.hostname || "";
//           var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
//           if (!ipv6Hostname) {
//             var hostparts = this.hostname.split(/\./);
//             for (i = 0, l = hostparts.length; i < l; i++) {
//               var part = hostparts[i];
//               if (!part) {
//                 continue;
//               }
//               if (!part.match(hostnamePartPattern)) {
//                 var newpart = "";
//                 for (var j = 0, k = part.length; j < k; j++) {
//                   if (part.charCodeAt(j) > 127) {
//                     newpart += "x";
//                   } else {
//                     newpart += part[j];
//                   }
//                 }
//                 if (!newpart.match(hostnamePartPattern)) {
//                   var validParts = hostparts.slice(0, i);
//                   var notHost = hostparts.slice(i + 1);
//                   var bit = part.match(hostnamePartStart);
//                   if (bit) {
//                     validParts.push(bit[1]);
//                     notHost.unshift(bit[2]);
//                   }
//                   if (notHost.length) {
//                     rest = notHost.join(".") + rest;
//                   }
//                   this.hostname = validParts.join(".");
//                   break;
//                 }
//               }
//             }
//           }
//           if (this.hostname.length > hostnameMaxLen) {
//             this.hostname = "";
//           }
//           if (ipv6Hostname) {
//             this.hostname = this.hostname.substr(1, this.hostname.length - 2);
//           }
//         }
//         var hash = rest.indexOf("#");
//         if (hash !== -1) {
//           this.hash = rest.substr(hash);
//           rest = rest.slice(0, hash);
//         }
//         var qm = rest.indexOf("?");
//         if (qm !== -1) {
//           this.search = rest.substr(qm);
//           rest = rest.slice(0, qm);
//         }
//         if (rest) {
//           this.pathname = rest;
//         }
//         if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
//           this.pathname = "";
//         }
//         return this;
//       };
//       Url.prototype.parseHost = function(host) {
//         var port = portPattern.exec(host);
//         if (port) {
//           port = port[0];
//           if (port !== ":") {
//             this.port = port.substr(1);
//           }
//           host = host.substr(0, host.length - port.length);
//         }
//         if (host) {
//           this.hostname = host;
//         }
//       };
//       module.exports = urlParse;
//     }
//   });
// 
//   // node_modules/mdurl/index.js
//   var require_mdurl = __commonJS({
//     "node_modules/mdurl/index.js"(exports, module) {
//       "use strict";
//       module.exports.encode = require_encode();
//       module.exports.decode = require_decode();
//       module.exports.format = require_format();
//       module.exports.parse = require_parse();
//     }
//   });
// 
//   // node_modules/uc.micro/properties/Any/regex.js
//   var require_regex2 = __commonJS({
//     "node_modules/uc.micro/properties/Any/regex.js"(exports, module) {
//       module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
//     }
//   });
// 
//   // node_modules/uc.micro/categories/Cc/regex.js
//   var require_regex3 = __commonJS({
//     "node_modules/uc.micro/categories/Cc/regex.js"(exports, module) {
//       module.exports = /[\0-\x1F\x7F-\x9F]/;
//     }
//   });
// 
//   // node_modules/uc.micro/categories/Cf/regex.js
//   var require_regex4 = __commonJS({
//     "node_modules/uc.micro/categories/Cf/regex.js"(exports, module) {
//       module.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
//     }
//   });
// 
//   // node_modules/uc.micro/categories/Z/regex.js
//   var require_regex5 = __commonJS({
//     "node_modules/uc.micro/categories/Z/regex.js"(exports, module) {
//       module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
//     }
//   });
// 
//   // node_modules/uc.micro/index.js
//   var require_uc = __commonJS({
//     "node_modules/uc.micro/index.js"(exports) {
//       "use strict";
//       exports.Any = require_regex2();
//       exports.Cc = require_regex3();
//       exports.Cf = require_regex4();
//       exports.P = require_regex();
//       exports.Z = require_regex5();
//     }
//   });
// 
//   // node_modules/markdown-it/lib/common/utils.js
//   var require_utils = __commonJS({
//     "node_modules/markdown-it/lib/common/utils.js"(exports) {
//       "use strict";
//       function _class(obj) {
//         return Object.prototype.toString.call(obj);
//       }
//       function isString(obj) {
//         return _class(obj) === "[object String]";
//       }
//       var _hasOwnProperty = Object.prototype.hasOwnProperty;
//       function has(object, key) {
//         return _hasOwnProperty.call(object, key);
//       }
//       function assign(obj) {
//         var sources = Array.prototype.slice.call(arguments, 1);
//         sources.forEach(function(source) {
//           if (!source) {
//             return;
//           }
//           if (typeof source !== "object") {
//             throw new TypeError(source + "must be object");
//           }
//           Object.keys(source).forEach(function(key) {
//             obj[key] = source[key];
//           });
//         });
//         return obj;
//       }
//       function arrayReplaceAt(src, pos, newElements) {
//         return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
//       }
//       function isValidEntityCode(c) {
//         if (c >= 55296 && c <= 57343) {
//           return false;
//         }
//         if (c >= 64976 && c <= 65007) {
//           return false;
//         }
//         if ((c & 65535) === 65535 || (c & 65535) === 65534) {
//           return false;
//         }
//         if (c >= 0 && c <= 8) {
//           return false;
//         }
//         if (c === 11) {
//           return false;
//         }
//         if (c >= 14 && c <= 31) {
//           return false;
//         }
//         if (c >= 127 && c <= 159) {
//           return false;
//         }
//         if (c > 1114111) {
//           return false;
//         }
//         return true;
//       }
//       function fromCodePoint(c) {
//         if (c > 65535) {
//           c -= 65536;
//           var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
//           return String.fromCharCode(surrogate1, surrogate2);
//         }
//         return String.fromCharCode(c);
//       }
//       var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
//       var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
//       var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
//       var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
//       var entities = require_entities2();
//       function replaceEntityPattern(match, name) {
//         var code;
//         if (has(entities, name)) {
//           return entities[name];
//         }
//         if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
//           code = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
//           if (isValidEntityCode(code)) {
//             return fromCodePoint(code);
//           }
//         }
//         return match;
//       }
//       function unescapeMd(str) {
//         if (str.indexOf("\\") < 0) {
//           return str;
//         }
//         return str.replace(UNESCAPE_MD_RE, "$1");
//       }
//       function unescapeAll(str) {
//         if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
//           return str;
//         }
//         return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
//           if (escaped) {
//             return escaped;
//           }
//           return replaceEntityPattern(match, entity);
//         });
//       }
//       var HTML_ESCAPE_TEST_RE = /[&<>"]/;
//       var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
//       var HTML_REPLACEMENTS = {
//         "&": "&amp;",
//         "<": "&lt;",
//         ">": "&gt;",
//         '"': "&quot;"
//       };
//       function replaceUnsafeChar(ch) {
//         return HTML_REPLACEMENTS[ch];
//       }
//       function escapeHtml(str) {
//         if (HTML_ESCAPE_TEST_RE.test(str)) {
//           return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
//         }
//         return str;
//       }
//       var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
//       function escapeRE(str) {
//         return str.replace(REGEXP_ESCAPE_RE, "\\$&");
//       }
//       function isSpace(code) {
//         switch (code) {
//           case 9:
//           case 32:
//             return true;
//         }
//         return false;
//       }
//       function isWhiteSpace(code) {
//         if (code >= 8192 && code <= 8202) {
//           return true;
//         }
//         switch (code) {
//           case 9:
//           case 10:
//           case 11:
//           case 12:
//           case 13:
//           case 32:
//           case 160:
//           case 5760:
//           case 8239:
//           case 8287:
//           case 12288:
//             return true;
//         }
//         return false;
//       }
//       var UNICODE_PUNCT_RE = require_regex();
//       function isPunctChar(ch) {
//         return UNICODE_PUNCT_RE.test(ch);
//       }
//       function isMdAsciiPunct(ch) {
//         switch (ch) {
//           case 33:
//           case 34:
//           case 35:
//           case 36:
//           case 37:
//           case 38:
//           case 39:
//           case 40:
//           case 41:
//           case 42:
//           case 43:
//           case 44:
//           case 45:
//           case 46:
//           case 47:
//           case 58:
//           case 59:
//           case 60:
//           case 61:
//           case 62:
//           case 63:
//           case 64:
//           case 91:
//           case 92:
//           case 93:
//           case 94:
//           case 95:
//           case 96:
//           case 123:
//           case 124:
//           case 125:
//           case 126:
//             return true;
//           default:
//             return false;
//         }
//       }
//       function normalizeReference(str) {
//         str = str.trim().replace(/\s+/g, " ");
//         if ("\u1E9E".toLowerCase() === "\u1E7E") {
//           str = str.replace(/ẞ/g, "\xDF");
//         }
//         return str.toLowerCase().toUpperCase();
//       }
//       exports.lib = {};
//       exports.lib.mdurl = require_mdurl();
//       exports.lib.ucmicro = require_uc();
//       exports.assign = assign;
//       exports.isString = isString;
//       exports.has = has;
//       exports.unescapeMd = unescapeMd;
//       exports.unescapeAll = unescapeAll;
//       exports.isValidEntityCode = isValidEntityCode;
//       exports.fromCodePoint = fromCodePoint;
//       exports.escapeHtml = escapeHtml;
//       exports.arrayReplaceAt = arrayReplaceAt;
//       exports.isSpace = isSpace;
//       exports.isWhiteSpace = isWhiteSpace;
//       exports.isMdAsciiPunct = isMdAsciiPunct;
//       exports.isPunctChar = isPunctChar;
//       exports.escapeRE = escapeRE;
//       exports.normalizeReference = normalizeReference;
//     }
//   });
// 
//   // node_modules/markdown-it/lib/helpers/parse_link_label.js
//   var require_parse_link_label = __commonJS({
//     "node_modules/markdown-it/lib/helpers/parse_link_label.js"(exports, module) {
//       "use strict";
//       module.exports = function parseLinkLabel(state, start, disableNested) {
//         var level, found, marker, prevPos, labelEnd = -1, max = state.posMax, oldPos = state.pos;
//         state.pos = start + 1;
//         level = 1;
//         while (state.pos < max) {
//           marker = state.src.charCodeAt(state.pos);
//           if (marker === 93) {
//             level--;
//             if (level === 0) {
//               found = true;
//               break;
//             }
//           }
//           prevPos = state.pos;
//           state.md.inline.skipToken(state);
//           if (marker === 91) {
//             if (prevPos === state.pos - 1) {
//               level++;
//             } else if (disableNested) {
//               state.pos = oldPos;
//               return -1;
//             }
//           }
//         }
//         if (found) {
//           labelEnd = state.pos;
//         }
//         state.pos = oldPos;
//         return labelEnd;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/helpers/parse_link_destination.js
//   var require_parse_link_destination = __commonJS({
//     "node_modules/markdown-it/lib/helpers/parse_link_destination.js"(exports, module) {
//       "use strict";
//       var unescapeAll = require_utils().unescapeAll;
//       module.exports = function parseLinkDestination(str, start, max) {
//         var code, level, pos = start, result = {
//           ok: false,
//           pos: 0,
//           lines: 0,
//           str: ""
//         };
//         if (str.charCodeAt(pos) === 60) {
//           pos++;
//           while (pos < max) {
//             code = str.charCodeAt(pos);
//             if (code === 10) {
//               return result;
//             }
//             if (code === 60) {
//               return result;
//             }
//             if (code === 62) {
//               result.pos = pos + 1;
//               result.str = unescapeAll(str.slice(start + 1, pos));
//               result.ok = true;
//               return result;
//             }
//             if (code === 92 && pos + 1 < max) {
//               pos += 2;
//               continue;
//             }
//             pos++;
//           }
//           return result;
//         }
//         level = 0;
//         while (pos < max) {
//           code = str.charCodeAt(pos);
//           if (code === 32) {
//             break;
//           }
//           if (code < 32 || code === 127) {
//             break;
//           }
//           if (code === 92 && pos + 1 < max) {
//             if (str.charCodeAt(pos + 1) === 32) {
//               break;
//             }
//             pos += 2;
//             continue;
//           }
//           if (code === 40) {
//             level++;
//             if (level > 32) {
//               return result;
//             }
//           }
//           if (code === 41) {
//             if (level === 0) {
//               break;
//             }
//             level--;
//           }
//           pos++;
//         }
//         if (start === pos) {
//           return result;
//         }
//         if (level !== 0) {
//           return result;
//         }
//         result.str = unescapeAll(str.slice(start, pos));
//         result.pos = pos;
//         result.ok = true;
//         return result;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/helpers/parse_link_title.js
//   var require_parse_link_title = __commonJS({
//     "node_modules/markdown-it/lib/helpers/parse_link_title.js"(exports, module) {
//       "use strict";
//       var unescapeAll = require_utils().unescapeAll;
//       module.exports = function parseLinkTitle(str, start, max) {
//         var code, marker, lines = 0, pos = start, result = {
//           ok: false,
//           pos: 0,
//           lines: 0,
//           str: ""
//         };
//         if (pos >= max) {
//           return result;
//         }
//         marker = str.charCodeAt(pos);
//         if (marker !== 34 && marker !== 39 && marker !== 40) {
//           return result;
//         }
//         pos++;
//         if (marker === 40) {
//           marker = 41;
//         }
//         while (pos < max) {
//           code = str.charCodeAt(pos);
//           if (code === marker) {
//             result.pos = pos + 1;
//             result.lines = lines;
//             result.str = unescapeAll(str.slice(start + 1, pos));
//             result.ok = true;
//             return result;
//           } else if (code === 40 && marker === 41) {
//             return result;
//           } else if (code === 10) {
//             lines++;
//           } else if (code === 92 && pos + 1 < max) {
//             pos++;
//             if (str.charCodeAt(pos) === 10) {
//               lines++;
//             }
//           }
//           pos++;
//         }
//         return result;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/helpers/index.js
//   var require_helpers = __commonJS({
//     "node_modules/markdown-it/lib/helpers/index.js"(exports) {
//       "use strict";
//       exports.parseLinkLabel = require_parse_link_label();
//       exports.parseLinkDestination = require_parse_link_destination();
//       exports.parseLinkTitle = require_parse_link_title();
//     }
//   });
// 
//   // node_modules/markdown-it/lib/renderer.js
//   var require_renderer = __commonJS({
//     "node_modules/markdown-it/lib/renderer.js"(exports, module) {
//       "use strict";
//       var assign = require_utils().assign;
//       var unescapeAll = require_utils().unescapeAll;
//       var escapeHtml = require_utils().escapeHtml;
//       var default_rules = {};
//       default_rules.code_inline = function(tokens, idx, options, env, slf) {
//         var token = tokens[idx];
//         return "<code" + slf.renderAttrs(token) + ">" + escapeHtml(token.content) + "</code>";
//       };
//       default_rules.code_block = function(tokens, idx, options, env, slf) {
//         var token = tokens[idx];
//         return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
//       };
//       default_rules.fence = function(tokens, idx, options, env, slf) {
//         var token = tokens[idx], info = token.info ? unescapeAll(token.info).trim() : "", langName = "", langAttrs = "", highlighted, i, arr, tmpAttrs, tmpToken;
//         if (info) {
//           arr = info.split(/(\s+)/g);
//           langName = arr[0];
//           langAttrs = arr.slice(2).join("");
//         }
//         if (options.highlight) {
//           highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
//         } else {
//           highlighted = escapeHtml(token.content);
//         }
//         if (highlighted.indexOf("<pre") === 0) {
//           return highlighted + "\n";
//         }
//         if (info) {
//           i = token.attrIndex("class");
//           tmpAttrs = token.attrs ? token.attrs.slice() : [];
//           if (i < 0) {
//             tmpAttrs.push(["class", options.langPrefix + langName]);
//           } else {
//             tmpAttrs[i] = tmpAttrs[i].slice();
//             tmpAttrs[i][1] += " " + options.langPrefix + langName;
//           }
//           tmpToken = {
//             attrs: tmpAttrs
//           };
//           return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
//         }
//         return "<pre><code" + slf.renderAttrs(token) + ">" + highlighted + "</code></pre>\n";
//       };
//       default_rules.image = function(tokens, idx, options, env, slf) {
//         var token = tokens[idx];
//         token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
//         return slf.renderToken(tokens, idx, options);
//       };
//       default_rules.hardbreak = function(tokens, idx, options) {
//         return options.xhtmlOut ? "<br />\n" : "<br>\n";
//       };
//       default_rules.softbreak = function(tokens, idx, options) {
//         return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
//       };
//       default_rules.text = function(tokens, idx) {
//         return escapeHtml(tokens[idx].content);
//       };
//       default_rules.html_block = function(tokens, idx) {
//         return tokens[idx].content;
//       };
//       default_rules.html_inline = function(tokens, idx) {
//         return tokens[idx].content;
//       };
//       function Renderer() {
//         this.rules = assign({}, default_rules);
//       }
//       Renderer.prototype.renderAttrs = function renderAttrs(token) {
//         var i, l, result;
//         if (!token.attrs) {
//           return "";
//         }
//         result = "";
//         for (i = 0, l = token.attrs.length; i < l; i++) {
//           result += " " + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
//         }
//         return result;
//       };
//       Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
//         var nextToken, result = "", needLf = false, token = tokens[idx];
//         if (token.hidden) {
//           return "";
//         }
//         if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
//           result += "\n";
//         }
//         result += (token.nesting === -1 ? "</" : "<") + token.tag;
//         result += this.renderAttrs(token);
//         if (token.nesting === 0 && options.xhtmlOut) {
//           result += " /";
//         }
//         if (token.block) {
//           needLf = true;
//           if (token.nesting === 1) {
//             if (idx + 1 < tokens.length) {
//               nextToken = tokens[idx + 1];
//               if (nextToken.type === "inline" || nextToken.hidden) {
//                 needLf = false;
//               } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
//                 needLf = false;
//               }
//             }
//           }
//         }
//         result += needLf ? ">\n" : ">";
//         return result;
//       };
//       Renderer.prototype.renderInline = function(tokens, options, env) {
//         var type, result = "", rules = this.rules;
//         for (var i = 0, len = tokens.length; i < len; i++) {
//           type = tokens[i].type;
//           if (typeof rules[type] !== "undefined") {
//             result += rules[type](tokens, i, options, env, this);
//           } else {
//             result += this.renderToken(tokens, i, options);
//           }
//         }
//         return result;
//       };
//       Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
//         var result = "";
//         for (var i = 0, len = tokens.length; i < len; i++) {
//           if (tokens[i].type === "text") {
//             result += tokens[i].content;
//           } else if (tokens[i].type === "image") {
//             result += this.renderInlineAsText(tokens[i].children, options, env);
//           } else if (tokens[i].type === "softbreak") {
//             result += "\n";
//           }
//         }
//         return result;
//       };
//       Renderer.prototype.render = function(tokens, options, env) {
//         var i, len, type, result = "", rules = this.rules;
//         for (i = 0, len = tokens.length; i < len; i++) {
//           type = tokens[i].type;
//           if (type === "inline") {
//             result += this.renderInline(tokens[i].children, options, env);
//           } else if (typeof rules[type] !== "undefined") {
//             result += rules[type](tokens, i, options, env, this);
//           } else {
//             result += this.renderToken(tokens, i, options, env);
//           }
//         }
//         return result;
//       };
//       module.exports = Renderer;
//     }
//   });
// 
//   // node_modules/markdown-it/lib/ruler.js
//   var require_ruler = __commonJS({
//     "node_modules/markdown-it/lib/ruler.js"(exports, module) {
//       "use strict";
//       function Ruler() {
//         this.__rules__ = [];
//         this.__cache__ = null;
//       }
//       Ruler.prototype.__find__ = function(name) {
//         for (var i = 0; i < this.__rules__.length; i++) {
//           if (this.__rules__[i].name === name) {
//             return i;
//           }
//         }
//         return -1;
//       };
//       Ruler.prototype.__compile__ = function() {
//         var self = this;
//         var chains = [""];
//         self.__rules__.forEach(function(rule) {
//           if (!rule.enabled) {
//             return;
//           }
//           rule.alt.forEach(function(altName) {
//             if (chains.indexOf(altName) < 0) {
//               chains.push(altName);
//             }
//           });
//         });
//         self.__cache__ = {};
//         chains.forEach(function(chain) {
//           self.__cache__[chain] = [];
//           self.__rules__.forEach(function(rule) {
//             if (!rule.enabled) {
//               return;
//             }
//             if (chain && rule.alt.indexOf(chain) < 0) {
//               return;
//             }
//             self.__cache__[chain].push(rule.fn);
//           });
//         });
//       };
//       Ruler.prototype.at = function(name, fn, options) {
//         var index = this.__find__(name);
//         var opt = options || {};
//         if (index === -1) {
//           throw new Error("Parser rule not found: " + name);
//         }
//         this.__rules__[index].fn = fn;
//         this.__rules__[index].alt = opt.alt || [];
//         this.__cache__ = null;
//       };
//       Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
//         var index = this.__find__(beforeName);
//         var opt = options || {};
//         if (index === -1) {
//           throw new Error("Parser rule not found: " + beforeName);
//         }
//         this.__rules__.splice(index, 0, {
//           name: ruleName,
//           enabled: true,
//           fn,
//           alt: opt.alt || []
//         });
//         this.__cache__ = null;
//       };
//       Ruler.prototype.after = function(afterName, ruleName, fn, options) {
//         var index = this.__find__(afterName);
//         var opt = options || {};
//         if (index === -1) {
//           throw new Error("Parser rule not found: " + afterName);
//         }
//         this.__rules__.splice(index + 1, 0, {
//           name: ruleName,
//           enabled: true,
//           fn,
//           alt: opt.alt || []
//         });
//         this.__cache__ = null;
//       };
//       Ruler.prototype.push = function(ruleName, fn, options) {
//         var opt = options || {};
//         this.__rules__.push({
//           name: ruleName,
//           enabled: true,
//           fn,
//           alt: opt.alt || []
//         });
//         this.__cache__ = null;
//       };
//       Ruler.prototype.enable = function(list, ignoreInvalid) {
//         if (!Array.isArray(list)) {
//           list = [list];
//         }
//         var result = [];
//         list.forEach(function(name) {
//           var idx = this.__find__(name);
//           if (idx < 0) {
//             if (ignoreInvalid) {
//               return;
//             }
//             throw new Error("Rules manager: invalid rule name " + name);
//           }
//           this.__rules__[idx].enabled = true;
//           result.push(name);
//         }, this);
//         this.__cache__ = null;
//         return result;
//       };
//       Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
//         if (!Array.isArray(list)) {
//           list = [list];
//         }
//         this.__rules__.forEach(function(rule) {
//           rule.enabled = false;
//         });
//         this.enable(list, ignoreInvalid);
//       };
//       Ruler.prototype.disable = function(list, ignoreInvalid) {
//         if (!Array.isArray(list)) {
//           list = [list];
//         }
//         var result = [];
//         list.forEach(function(name) {
//           var idx = this.__find__(name);
//           if (idx < 0) {
//             if (ignoreInvalid) {
//               return;
//             }
//             throw new Error("Rules manager: invalid rule name " + name);
//           }
//           this.__rules__[idx].enabled = false;
//           result.push(name);
//         }, this);
//         this.__cache__ = null;
//         return result;
//       };
//       Ruler.prototype.getRules = function(chainName) {
//         if (this.__cache__ === null) {
//           this.__compile__();
//         }
//         return this.__cache__[chainName] || [];
//       };
//       module.exports = Ruler;
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_core/normalize.js
//   var require_normalize = __commonJS({
//     "node_modules/markdown-it/lib/rules_core/normalize.js"(exports, module) {
//       "use strict";
//       var NEWLINES_RE = /\r\n?|\n/g;
//       var NULL_RE = /\0/g;
//       module.exports = function normalize(state) {
//         var str;
//         str = state.src.replace(NEWLINES_RE, "\n");
//         str = str.replace(NULL_RE, "\uFFFD");
//         state.src = str;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_core/block.js
//   var require_block = __commonJS({
//     "node_modules/markdown-it/lib/rules_core/block.js"(exports, module) {
//       "use strict";
//       module.exports = function block(state) {
//         var token;
//         if (state.inlineMode) {
//           token = new state.Token("inline", "", 0);
//           token.content = state.src;
//           token.map = [0, 1];
//           token.children = [];
//           state.tokens.push(token);
//         } else {
//           state.md.block.parse(state.src, state.md, state.env, state.tokens);
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_core/inline.js
//   var require_inline = __commonJS({
//     "node_modules/markdown-it/lib/rules_core/inline.js"(exports, module) {
//       "use strict";
//       module.exports = function inline(state) {
//         var tokens = state.tokens, tok, i, l;
//         for (i = 0, l = tokens.length; i < l; i++) {
//           tok = tokens[i];
//           if (tok.type === "inline") {
//             state.md.inline.parse(tok.content, state.md, state.env, tok.children);
//           }
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_core/linkify.js
//   var require_linkify = __commonJS({
//     "node_modules/markdown-it/lib/rules_core/linkify.js"(exports, module) {
//       "use strict";
//       var arrayReplaceAt = require_utils().arrayReplaceAt;
//       function isLinkOpen(str) {
//         return /^<a[>\s]/i.test(str);
//       }
//       function isLinkClose(str) {
//         return /^<\/a\s*>/i.test(str);
//       }
//       module.exports = function linkify(state) {
//         var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
//         if (!state.md.options.linkify) {
//           return;
//         }
//         for (j = 0, l = blockTokens.length; j < l; j++) {
//           if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
//             continue;
//           }
//           tokens = blockTokens[j].children;
//           htmlLinkLevel = 0;
//           for (i = tokens.length - 1; i >= 0; i--) {
//             currentToken = tokens[i];
//             if (currentToken.type === "link_close") {
//               i--;
//               while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
//                 i--;
//               }
//               continue;
//             }
//             if (currentToken.type === "html_inline") {
//               if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
//                 htmlLinkLevel--;
//               }
//               if (isLinkClose(currentToken.content)) {
//                 htmlLinkLevel++;
//               }
//             }
//             if (htmlLinkLevel > 0) {
//               continue;
//             }
//             if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
//               text = currentToken.content;
//               links = state.md.linkify.match(text);
//               nodes = [];
//               level = currentToken.level;
//               lastPos = 0;
//               if (links.length > 0 && links[0].index === 0 && i > 0 && tokens[i - 1].type === "text_special") {
//                 links = links.slice(1);
//               }
//               for (ln = 0; ln < links.length; ln++) {
//                 url = links[ln].url;
//                 fullUrl = state.md.normalizeLink(url);
//                 if (!state.md.validateLink(fullUrl)) {
//                   continue;
//                 }
//                 urlText = links[ln].text;
//                 if (!links[ln].schema) {
//                   urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
//                 } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
//                   urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
//                 } else {
//                   urlText = state.md.normalizeLinkText(urlText);
//                 }
//                 pos = links[ln].index;
//                 if (pos > lastPos) {
//                   token = new state.Token("text", "", 0);
//                   token.content = text.slice(lastPos, pos);
//                   token.level = level;
//                   nodes.push(token);
//                 }
//                 token = new state.Token("link_open", "a", 1);
//                 token.attrs = [["href", fullUrl]];
//                 token.level = level++;
//                 token.markup = "linkify";
//                 token.info = "auto";
//                 nodes.push(token);
//                 token = new state.Token("text", "", 0);
//                 token.content = urlText;
//                 token.level = level;
//                 nodes.push(token);
//                 token = new state.Token("link_close", "a", -1);
//                 token.level = --level;
//                 token.markup = "linkify";
//                 token.info = "auto";
//                 nodes.push(token);
//                 lastPos = links[ln].lastIndex;
//               }
//               if (lastPos < text.length) {
//                 token = new state.Token("text", "", 0);
//                 token.content = text.slice(lastPos);
//                 token.level = level;
//                 nodes.push(token);
//               }
//               blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
//             }
//           }
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_core/replacements.js
//   var require_replacements = __commonJS({
//     "node_modules/markdown-it/lib/rules_core/replacements.js"(exports, module) {
//       "use strict";
//       var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
//       var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
//       var SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
//       var SCOPED_ABBR = {
//         c: "\xA9",
//         r: "\xAE",
//         tm: "\u2122"
//       };
//       function replaceFn(match, name) {
//         return SCOPED_ABBR[name.toLowerCase()];
//       }
//       function replace_scoped(inlineTokens) {
//         var i, token, inside_autolink = 0;
//         for (i = inlineTokens.length - 1; i >= 0; i--) {
//           token = inlineTokens[i];
//           if (token.type === "text" && !inside_autolink) {
//             token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
//           }
//           if (token.type === "link_open" && token.info === "auto") {
//             inside_autolink--;
//           }
//           if (token.type === "link_close" && token.info === "auto") {
//             inside_autolink++;
//           }
//         }
//       }
//       function replace_rare(inlineTokens) {
//         var i, token, inside_autolink = 0;
//         for (i = inlineTokens.length - 1; i >= 0; i--) {
//           token = inlineTokens[i];
//           if (token.type === "text" && !inside_autolink) {
//             if (RARE_RE.test(token.content)) {
//               token.content = token.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013");
//             }
//           }
//           if (token.type === "link_open" && token.info === "auto") {
//             inside_autolink--;
//           }
//           if (token.type === "link_close" && token.info === "auto") {
//             inside_autolink++;
//           }
//         }
//       }
//       module.exports = function replace(state) {
//         var blkIdx;
//         if (!state.md.options.typographer) {
//           return;
//         }
//         for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
//           if (state.tokens[blkIdx].type !== "inline") {
//             continue;
//           }
//           if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
//             replace_scoped(state.tokens[blkIdx].children);
//           }
//           if (RARE_RE.test(state.tokens[blkIdx].content)) {
//             replace_rare(state.tokens[blkIdx].children);
//           }
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_core/smartquotes.js
//   var require_smartquotes = __commonJS({
//     "node_modules/markdown-it/lib/rules_core/smartquotes.js"(exports, module) {
//       "use strict";
//       var isWhiteSpace = require_utils().isWhiteSpace;
//       var isPunctChar = require_utils().isPunctChar;
//       var isMdAsciiPunct = require_utils().isMdAsciiPunct;
//       var QUOTE_TEST_RE = /['"]/;
//       var QUOTE_RE = /['"]/g;
//       var APOSTROPHE = "\u2019";
//       function replaceAt(str, index, ch) {
//         return str.slice(0, index) + ch + str.slice(index + 1);
//       }
//       function process_inlines(tokens, state) {
//         var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
//         stack = [];
//         for (i = 0; i < tokens.length; i++) {
//           token = tokens[i];
//           thisLevel = tokens[i].level;
//           for (j = stack.length - 1; j >= 0; j--) {
//             if (stack[j].level <= thisLevel) {
//               break;
//             }
//           }
//           stack.length = j + 1;
//           if (token.type !== "text") {
//             continue;
//           }
//           text = token.content;
//           pos = 0;
//           max = text.length;
//           OUTER:
//             while (pos < max) {
//               QUOTE_RE.lastIndex = pos;
//               t = QUOTE_RE.exec(text);
//               if (!t) {
//                 break;
//               }
//               canOpen = canClose = true;
//               pos = t.index + 1;
//               isSingle = t[0] === "'";
//               lastChar = 32;
//               if (t.index - 1 >= 0) {
//                 lastChar = text.charCodeAt(t.index - 1);
//               } else {
//                 for (j = i - 1; j >= 0; j--) {
//                   if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
//                     break;
//                   if (!tokens[j].content)
//                     continue;
//                   lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
//                   break;
//                 }
//               }
//               nextChar = 32;
//               if (pos < max) {
//                 nextChar = text.charCodeAt(pos);
//               } else {
//                 for (j = i + 1; j < tokens.length; j++) {
//                   if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
//                     break;
//                   if (!tokens[j].content)
//                     continue;
//                   nextChar = tokens[j].content.charCodeAt(0);
//                   break;
//                 }
//               }
//               isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
//               isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
//               isLastWhiteSpace = isWhiteSpace(lastChar);
//               isNextWhiteSpace = isWhiteSpace(nextChar);
//               if (isNextWhiteSpace) {
//                 canOpen = false;
//               } else if (isNextPunctChar) {
//                 if (!(isLastWhiteSpace || isLastPunctChar)) {
//                   canOpen = false;
//                 }
//               }
//               if (isLastWhiteSpace) {
//                 canClose = false;
//               } else if (isLastPunctChar) {
//                 if (!(isNextWhiteSpace || isNextPunctChar)) {
//                   canClose = false;
//                 }
//               }
//               if (nextChar === 34 && t[0] === '"') {
//                 if (lastChar >= 48 && lastChar <= 57) {
//                   canClose = canOpen = false;
//                 }
//               }
//               if (canOpen && canClose) {
//                 canOpen = isLastPunctChar;
//                 canClose = isNextPunctChar;
//               }
//               if (!canOpen && !canClose) {
//                 if (isSingle) {
//                   token.content = replaceAt(token.content, t.index, APOSTROPHE);
//                 }
//                 continue;
//               }
//               if (canClose) {
//                 for (j = stack.length - 1; j >= 0; j--) {
//                   item = stack[j];
//                   if (stack[j].level < thisLevel) {
//                     break;
//                   }
//                   if (item.single === isSingle && stack[j].level === thisLevel) {
//                     item = stack[j];
//                     if (isSingle) {
//                       openQuote = state.md.options.quotes[2];
//                       closeQuote = state.md.options.quotes[3];
//                     } else {
//                       openQuote = state.md.options.quotes[0];
//                       closeQuote = state.md.options.quotes[1];
//                     }
//                     token.content = replaceAt(token.content, t.index, closeQuote);
//                     tokens[item.token].content = replaceAt(
//                       tokens[item.token].content,
//                       item.pos,
//                       openQuote
//                     );
//                     pos += closeQuote.length - 1;
//                     if (item.token === i) {
//                       pos += openQuote.length - 1;
//                     }
//                     text = token.content;
//                     max = text.length;
//                     stack.length = j;
//                     continue OUTER;
//                   }
//                 }
//               }
//               if (canOpen) {
//                 stack.push({
//                   token: i,
//                   pos: t.index,
//                   single: isSingle,
//                   level: thisLevel
//                 });
//               } else if (canClose && isSingle) {
//                 token.content = replaceAt(token.content, t.index, APOSTROPHE);
//               }
//             }
//         }
//       }
//       module.exports = function smartquotes(state) {
//         var blkIdx;
//         if (!state.md.options.typographer) {
//           return;
//         }
//         for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
//           if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
//             continue;
//           }
//           process_inlines(state.tokens[blkIdx].children, state);
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_core/text_join.js
//   var require_text_join = __commonJS({
//     "node_modules/markdown-it/lib/rules_core/text_join.js"(exports, module) {
//       "use strict";
//       module.exports = function text_join(state) {
//         var j, l, tokens, curr, max, last, blockTokens = state.tokens;
//         for (j = 0, l = blockTokens.length; j < l; j++) {
//           if (blockTokens[j].type !== "inline")
//             continue;
//           tokens = blockTokens[j].children;
//           max = tokens.length;
//           for (curr = 0; curr < max; curr++) {
//             if (tokens[curr].type === "text_special") {
//               tokens[curr].type = "text";
//             }
//           }
//           for (curr = last = 0; curr < max; curr++) {
//             if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
//               tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
//             } else {
//               if (curr !== last) {
//                 tokens[last] = tokens[curr];
//               }
//               last++;
//             }
//           }
//           if (curr !== last) {
//             tokens.length = last;
//           }
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/token.js
//   var require_token = __commonJS({
//     "node_modules/markdown-it/lib/token.js"(exports, module) {
//       "use strict";
//       function Token(type, tag, nesting) {
//         this.type = type;
//         this.tag = tag;
//         this.attrs = null;
//         this.map = null;
//         this.nesting = nesting;
//         this.level = 0;
//         this.children = null;
//         this.content = "";
//         this.markup = "";
//         this.info = "";
//         this.meta = null;
//         this.block = false;
//         this.hidden = false;
//       }
//       Token.prototype.attrIndex = function attrIndex(name) {
//         var attrs, i, len;
//         if (!this.attrs) {
//           return -1;
//         }
//         attrs = this.attrs;
//         for (i = 0, len = attrs.length; i < len; i++) {
//           if (attrs[i][0] === name) {
//             return i;
//           }
//         }
//         return -1;
//       };
//       Token.prototype.attrPush = function attrPush(attrData) {
//         if (this.attrs) {
//           this.attrs.push(attrData);
//         } else {
//           this.attrs = [attrData];
//         }
//       };
//       Token.prototype.attrSet = function attrSet(name, value) {
//         var idx = this.attrIndex(name), attrData = [name, value];
//         if (idx < 0) {
//           this.attrPush(attrData);
//         } else {
//           this.attrs[idx] = attrData;
//         }
//       };
//       Token.prototype.attrGet = function attrGet(name) {
//         var idx = this.attrIndex(name), value = null;
//         if (idx >= 0) {
//           value = this.attrs[idx][1];
//         }
//         return value;
//       };
//       Token.prototype.attrJoin = function attrJoin(name, value) {
//         var idx = this.attrIndex(name);
//         if (idx < 0) {
//           this.attrPush([name, value]);
//         } else {
//           this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
//         }
//       };
//       module.exports = Token;
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_core/state_core.js
//   var require_state_core = __commonJS({
//     "node_modules/markdown-it/lib/rules_core/state_core.js"(exports, module) {
//       "use strict";
//       var Token = require_token();
//       function StateCore(src, md, env) {
//         this.src = src;
//         this.env = env;
//         this.tokens = [];
//         this.inlineMode = false;
//         this.md = md;
//       }
//       StateCore.prototype.Token = Token;
//       module.exports = StateCore;
//     }
//   });
// 
//   // node_modules/markdown-it/lib/parser_core.js
//   var require_parser_core = __commonJS({
//     "node_modules/markdown-it/lib/parser_core.js"(exports, module) {
//       "use strict";
//       var Ruler = require_ruler();
//       var _rules = [
//         ["normalize", require_normalize()],
//         ["block", require_block()],
//         ["inline", require_inline()],
//         ["linkify", require_linkify()],
//         ["replacements", require_replacements()],
//         ["smartquotes", require_smartquotes()],
//         // `text_join` finds `text_special` tokens (for escape sequences)
//         // and joins them with the rest of the text
//         ["text_join", require_text_join()]
//       ];
//       function Core() {
//         this.ruler = new Ruler();
//         for (var i = 0; i < _rules.length; i++) {
//           this.ruler.push(_rules[i][0], _rules[i][1]);
//         }
//       }
//       Core.prototype.process = function(state) {
//         var i, l, rules;
//         rules = this.ruler.getRules("");
//         for (i = 0, l = rules.length; i < l; i++) {
//           rules[i](state);
//         }
//       };
//       Core.prototype.State = require_state_core();
//       module.exports = Core;
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_block/table.js
//   var require_table = __commonJS({
//     "node_modules/markdown-it/lib/rules_block/table.js"(exports, module) {
//       "use strict";
//       var isSpace = require_utils().isSpace;
//       function getLine(state, line) {
//         var pos = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
//         return state.src.slice(pos, max);
//       }
//       function escapedSplit(str) {
//         var result = [], pos = 0, max = str.length, ch, isEscaped = false, lastPos = 0, current = "";
//         ch = str.charCodeAt(pos);
//         while (pos < max) {
//           if (ch === 124) {
//             if (!isEscaped) {
//               result.push(current + str.substring(lastPos, pos));
//               current = "";
//               lastPos = pos + 1;
//             } else {
//               current += str.substring(lastPos, pos - 1);
//               lastPos = pos;
//             }
//           }
//           isEscaped = ch === 92;
//           pos++;
//           ch = str.charCodeAt(pos);
//         }
//         result.push(current + str.substring(lastPos));
//         return result;
//       }
//       module.exports = function table(state, startLine, endLine, silent) {
//         var ch, lineText, pos, i, l, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;
//         if (startLine + 2 > endLine) {
//           return false;
//         }
//         nextLine = startLine + 1;
//         if (state.sCount[nextLine] < state.blkIndent) {
//           return false;
//         }
//         if (state.sCount[nextLine] - state.blkIndent >= 4) {
//           return false;
//         }
//         pos = state.bMarks[nextLine] + state.tShift[nextLine];
//         if (pos >= state.eMarks[nextLine]) {
//           return false;
//         }
//         firstCh = state.src.charCodeAt(pos++);
//         if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
//           return false;
//         }
//         if (pos >= state.eMarks[nextLine]) {
//           return false;
//         }
//         secondCh = state.src.charCodeAt(pos++);
//         if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace(secondCh)) {
//           return false;
//         }
//         if (firstCh === 45 && isSpace(secondCh)) {
//           return false;
//         }
//         while (pos < state.eMarks[nextLine]) {
//           ch = state.src.charCodeAt(pos);
//           if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) {
//             return false;
//           }
//           pos++;
//         }
//         lineText = getLine(state, startLine + 1);
//         columns = lineText.split("|");
//         aligns = [];
//         for (i = 0; i < columns.length; i++) {
//           t = columns[i].trim();
//           if (!t) {
//             if (i === 0 || i === columns.length - 1) {
//               continue;
//             } else {
//               return false;
//             }
//           }
//           if (!/^:?-+:?$/.test(t)) {
//             return false;
//           }
//           if (t.charCodeAt(t.length - 1) === 58) {
//             aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
//           } else if (t.charCodeAt(0) === 58) {
//             aligns.push("left");
//           } else {
//             aligns.push("");
//           }
//         }
//         lineText = getLine(state, startLine).trim();
//         if (lineText.indexOf("|") === -1) {
//           return false;
//         }
//         if (state.sCount[startLine] - state.blkIndent >= 4) {
//           return false;
//         }
//         columns = escapedSplit(lineText);
//         if (columns.length && columns[0] === "")
//           columns.shift();
//         if (columns.length && columns[columns.length - 1] === "")
//           columns.pop();
//         columnCount = columns.length;
//         if (columnCount === 0 || columnCount !== aligns.length) {
//           return false;
//         }
//         if (silent) {
//           return true;
//         }
//         oldParentType = state.parentType;
//         state.parentType = "table";
//         terminatorRules = state.md.block.ruler.getRules("blockquote");
//         token = state.push("table_open", "table", 1);
//         token.map = tableLines = [startLine, 0];
//         token = state.push("thead_open", "thead", 1);
//         token.map = [startLine, startLine + 1];
//         token = state.push("tr_open", "tr", 1);
//         token.map = [startLine, startLine + 1];
//         for (i = 0; i < columns.length; i++) {
//           token = state.push("th_open", "th", 1);
//           if (aligns[i]) {
//             token.attrs = [["style", "text-align:" + aligns[i]]];
//           }
//           token = state.push("inline", "", 0);
//           token.content = columns[i].trim();
//           token.children = [];
//           token = state.push("th_close", "th", -1);
//         }
//         token = state.push("tr_close", "tr", -1);
//         token = state.push("thead_close", "thead", -1);
//         for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
//           if (state.sCount[nextLine] < state.blkIndent) {
//             break;
//           }
//           terminate = false;
//           for (i = 0, l = terminatorRules.length; i < l; i++) {
//             if (terminatorRules[i](state, nextLine, endLine, true)) {
//               terminate = true;
//               break;
//             }
//           }
//           if (terminate) {
//             break;
//           }
//           lineText = getLine(state, nextLine).trim();
//           if (!lineText) {
//             break;
//           }
//           if (state.sCount[nextLine] - state.blkIndent >= 4) {
//             break;
//           }
//           columns = escapedSplit(lineText);
//           if (columns.length && columns[0] === "")
//             columns.shift();
//           if (columns.length && columns[columns.length - 1] === "")
//             columns.pop();
//           if (nextLine === startLine + 2) {
//             token = state.push("tbody_open", "tbody", 1);
//             token.map = tbodyLines = [startLine + 2, 0];
//           }
//           token = state.push("tr_open", "tr", 1);
//           token.map = [nextLine, nextLine + 1];
//           for (i = 0; i < columnCount; i++) {
//             token = state.push("td_open", "td", 1);
//             if (aligns[i]) {
//               token.attrs = [["style", "text-align:" + aligns[i]]];
//             }
//             token = state.push("inline", "", 0);
//             token.content = columns[i] ? columns[i].trim() : "";
//             token.children = [];
//             token = state.push("td_close", "td", -1);
//           }
//           token = state.push("tr_close", "tr", -1);
//         }
//         if (tbodyLines) {
//           token = state.push("tbody_close", "tbody", -1);
//           tbodyLines[1] = nextLine;
//         }
//         token = state.push("table_close", "table", -1);
//         tableLines[1] = nextLine;
//         state.parentType = oldParentType;
//         state.line = nextLine;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_block/code.js
//   var require_code = __commonJS({
//     "node_modules/markdown-it/lib/rules_block/code.js"(exports, module) {
//       "use strict";
//       module.exports = function code(state, startLine, endLine) {
//         var nextLine, last, token;
//         if (state.sCount[startLine] - state.blkIndent < 4) {
//           return false;
//         }
//         last = nextLine = startLine + 1;
//         while (nextLine < endLine) {
//           if (state.isEmpty(nextLine)) {
//             nextLine++;
//             continue;
//           }
//           if (state.sCount[nextLine] - state.blkIndent >= 4) {
//             nextLine++;
//             last = nextLine;
//             continue;
//           }
//           break;
//         }
//         state.line = last;
//         token = state.push("code_block", "code", 0);
//         token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
//         token.map = [startLine, state.line];
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_block/fence.js
//   var require_fence = __commonJS({
//     "node_modules/markdown-it/lib/rules_block/fence.js"(exports, module) {
//       "use strict";
//       module.exports = function fence(state, startLine, endLine, silent) {
//         var marker, len, params, nextLine, mem, token, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
//         if (state.sCount[startLine] - state.blkIndent >= 4) {
//           return false;
//         }
//         if (pos + 3 > max) {
//           return false;
//         }
//         marker = state.src.charCodeAt(pos);
//         if (marker !== 126 && marker !== 96) {
//           return false;
//         }
//         mem = pos;
//         pos = state.skipChars(pos, marker);
//         len = pos - mem;
//         if (len < 3) {
//           return false;
//         }
//         markup = state.src.slice(mem, pos);
//         params = state.src.slice(pos, max);
//         if (marker === 96) {
//           if (params.indexOf(String.fromCharCode(marker)) >= 0) {
//             return false;
//           }
//         }
//         if (silent) {
//           return true;
//         }
//         nextLine = startLine;
//         for (; ; ) {
//           nextLine++;
//           if (nextLine >= endLine) {
//             break;
//           }
//           pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
//           max = state.eMarks[nextLine];
//           if (pos < max && state.sCount[nextLine] < state.blkIndent) {
//             break;
//           }
//           if (state.src.charCodeAt(pos) !== marker) {
//             continue;
//           }
//           if (state.sCount[nextLine] - state.blkIndent >= 4) {
//             continue;
//           }
//           pos = state.skipChars(pos, marker);
//           if (pos - mem < len) {
//             continue;
//           }
//           pos = state.skipSpaces(pos);
//           if (pos < max) {
//             continue;
//           }
//           haveEndMarker = true;
//           break;
//         }
//         len = state.sCount[startLine];
//         state.line = nextLine + (haveEndMarker ? 1 : 0);
//         token = state.push("fence", "code", 0);
//         token.info = params;
//         token.content = state.getLines(startLine + 1, nextLine, len, true);
//         token.markup = markup;
//         token.map = [startLine, state.line];
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_block/blockquote.js
//   var require_blockquote = __commonJS({
//     "node_modules/markdown-it/lib/rules_block/blockquote.js"(exports, module) {
//       "use strict";
//       var isSpace = require_utils().isSpace;
//       module.exports = function blockquote(state, startLine, endLine, silent) {
//         var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
//         if (state.sCount[startLine] - state.blkIndent >= 4) {
//           return false;
//         }
//         if (state.src.charCodeAt(pos) !== 62) {
//           return false;
//         }
//         if (silent) {
//           return true;
//         }
//         oldBMarks = [];
//         oldBSCount = [];
//         oldSCount = [];
//         oldTShift = [];
//         terminatorRules = state.md.block.ruler.getRules("blockquote");
//         oldParentType = state.parentType;
//         state.parentType = "blockquote";
//         for (nextLine = startLine; nextLine < endLine; nextLine++) {
//           isOutdented = state.sCount[nextLine] < state.blkIndent;
//           pos = state.bMarks[nextLine] + state.tShift[nextLine];
//           max = state.eMarks[nextLine];
//           if (pos >= max) {
//             break;
//           }
//           if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
//             initial = state.sCount[nextLine] + 1;
//             if (state.src.charCodeAt(pos) === 32) {
//               pos++;
//               initial++;
//               adjustTab = false;
//               spaceAfterMarker = true;
//             } else if (state.src.charCodeAt(pos) === 9) {
//               spaceAfterMarker = true;
//               if ((state.bsCount[nextLine] + initial) % 4 === 3) {
//                 pos++;
//                 initial++;
//                 adjustTab = false;
//               } else {
//                 adjustTab = true;
//               }
//             } else {
//               spaceAfterMarker = false;
//             }
//             offset = initial;
//             oldBMarks.push(state.bMarks[nextLine]);
//             state.bMarks[nextLine] = pos;
//             while (pos < max) {
//               ch = state.src.charCodeAt(pos);
//               if (isSpace(ch)) {
//                 if (ch === 9) {
//                   offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
//                 } else {
//                   offset++;
//                 }
//               } else {
//                 break;
//               }
//               pos++;
//             }
//             lastLineEmpty = pos >= max;
//             oldBSCount.push(state.bsCount[nextLine]);
//             state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
//             oldSCount.push(state.sCount[nextLine]);
//             state.sCount[nextLine] = offset - initial;
//             oldTShift.push(state.tShift[nextLine]);
//             state.tShift[nextLine] = pos - state.bMarks[nextLine];
//             continue;
//           }
//           if (lastLineEmpty) {
//             break;
//           }
//           terminate = false;
//           for (i = 0, l = terminatorRules.length; i < l; i++) {
//             if (terminatorRules[i](state, nextLine, endLine, true)) {
//               terminate = true;
//               break;
//             }
//           }
//           if (terminate) {
//             state.lineMax = nextLine;
//             if (state.blkIndent !== 0) {
//               oldBMarks.push(state.bMarks[nextLine]);
//               oldBSCount.push(state.bsCount[nextLine]);
//               oldTShift.push(state.tShift[nextLine]);
//               oldSCount.push(state.sCount[nextLine]);
//               state.sCount[nextLine] -= state.blkIndent;
//             }
//             break;
//           }
//           oldBMarks.push(state.bMarks[nextLine]);
//           oldBSCount.push(state.bsCount[nextLine]);
//           oldTShift.push(state.tShift[nextLine]);
//           oldSCount.push(state.sCount[nextLine]);
//           state.sCount[nextLine] = -1;
//         }
//         oldIndent = state.blkIndent;
//         state.blkIndent = 0;
//         token = state.push("blockquote_open", "blockquote", 1);
//         token.markup = ">";
//         token.map = lines = [startLine, 0];
//         state.md.block.tokenize(state, startLine, nextLine);
//         token = state.push("blockquote_close", "blockquote", -1);
//         token.markup = ">";
//         state.lineMax = oldLineMax;
//         state.parentType = oldParentType;
//         lines[1] = state.line;
//         for (i = 0; i < oldTShift.length; i++) {
//           state.bMarks[i + startLine] = oldBMarks[i];
//           state.tShift[i + startLine] = oldTShift[i];
//           state.sCount[i + startLine] = oldSCount[i];
//           state.bsCount[i + startLine] = oldBSCount[i];
//         }
//         state.blkIndent = oldIndent;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_block/hr.js
//   var require_hr = __commonJS({
//     "node_modules/markdown-it/lib/rules_block/hr.js"(exports, module) {
//       "use strict";
//       var isSpace = require_utils().isSpace;
//       module.exports = function hr(state, startLine, endLine, silent) {
//         var marker, cnt, ch, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
//         if (state.sCount[startLine] - state.blkIndent >= 4) {
//           return false;
//         }
//         marker = state.src.charCodeAt(pos++);
//         if (marker !== 42 && marker !== 45 && marker !== 95) {
//           return false;
//         }
//         cnt = 1;
//         while (pos < max) {
//           ch = state.src.charCodeAt(pos++);
//           if (ch !== marker && !isSpace(ch)) {
//             return false;
//           }
//           if (ch === marker) {
//             cnt++;
//           }
//         }
//         if (cnt < 3) {
//           return false;
//         }
//         if (silent) {
//           return true;
//         }
//         state.line = startLine + 1;
//         token = state.push("hr", "hr", 0);
//         token.map = [startLine, state.line];
//         token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_block/list.js
//   var require_list = __commonJS({
//     "node_modules/markdown-it/lib/rules_block/list.js"(exports, module) {
//       "use strict";
//       var isSpace = require_utils().isSpace;
//       function skipBulletListMarker(state, startLine) {
//         var marker, pos, max, ch;
//         pos = state.bMarks[startLine] + state.tShift[startLine];
//         max = state.eMarks[startLine];
//         marker = state.src.charCodeAt(pos++);
//         if (marker !== 42 && marker !== 45 && marker !== 43) {
//           return -1;
//         }
//         if (pos < max) {
//           ch = state.src.charCodeAt(pos);
//           if (!isSpace(ch)) {
//             return -1;
//           }
//         }
//         return pos;
//       }
//       function skipOrderedListMarker(state, startLine) {
//         var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max = state.eMarks[startLine];
//         if (pos + 1 >= max) {
//           return -1;
//         }
//         ch = state.src.charCodeAt(pos++);
//         if (ch < 48 || ch > 57) {
//           return -1;
//         }
//         for (; ; ) {
//           if (pos >= max) {
//             return -1;
//           }
//           ch = state.src.charCodeAt(pos++);
//           if (ch >= 48 && ch <= 57) {
//             if (pos - start >= 10) {
//               return -1;
//             }
//             continue;
//           }
//           if (ch === 41 || ch === 46) {
//             break;
//           }
//           return -1;
//         }
//         if (pos < max) {
//           ch = state.src.charCodeAt(pos);
//           if (!isSpace(ch)) {
//             return -1;
//           }
//         }
//         return pos;
//       }
//       function markTightParagraphs(state, idx) {
//         var i, l, level = state.level + 2;
//         for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
//           if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
//             state.tokens[i + 2].hidden = true;
//             state.tokens[i].hidden = true;
//             i += 2;
//           }
//         }
//       }
//       module.exports = function list(state, startLine, endLine, silent) {
//         var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max, offset, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token, nextLine = startLine, isTerminatingParagraph = false, tight = true;
//         if (state.sCount[nextLine] - state.blkIndent >= 4) {
//           return false;
//         }
//         if (state.listIndent >= 0 && state.sCount[nextLine] - state.listIndent >= 4 && state.sCount[nextLine] < state.blkIndent) {
//           return false;
//         }
//         if (silent && state.parentType === "paragraph") {
//           if (state.sCount[nextLine] >= state.blkIndent) {
//             isTerminatingParagraph = true;
//           }
//         }
//         if ((posAfterMarker = skipOrderedListMarker(state, nextLine)) >= 0) {
//           isOrdered = true;
//           start = state.bMarks[nextLine] + state.tShift[nextLine];
//           markerValue = Number(state.src.slice(start, posAfterMarker - 1));
//           if (isTerminatingParagraph && markerValue !== 1)
//             return false;
//         } else if ((posAfterMarker = skipBulletListMarker(state, nextLine)) >= 0) {
//           isOrdered = false;
//         } else {
//           return false;
//         }
//         if (isTerminatingParagraph) {
//           if (state.skipSpaces(posAfterMarker) >= state.eMarks[nextLine])
//             return false;
//         }
//         if (silent) {
//           return true;
//         }
//         markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
//         listTokIdx = state.tokens.length;
//         if (isOrdered) {
//           token = state.push("ordered_list_open", "ol", 1);
//           if (markerValue !== 1) {
//             token.attrs = [["start", markerValue]];
//           }
//         } else {
//           token = state.push("bullet_list_open", "ul", 1);
//         }
//         token.map = listLines = [nextLine, 0];
//         token.markup = String.fromCharCode(markerCharCode);
//         prevEmptyEnd = false;
//         terminatorRules = state.md.block.ruler.getRules("list");
//         oldParentType = state.parentType;
//         state.parentType = "list";
//         while (nextLine < endLine) {
//           pos = posAfterMarker;
//           max = state.eMarks[nextLine];
//           initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[nextLine] + state.tShift[nextLine]);
//           while (pos < max) {
//             ch = state.src.charCodeAt(pos);
//             if (ch === 9) {
//               offset += 4 - (offset + state.bsCount[nextLine]) % 4;
//             } else if (ch === 32) {
//               offset++;
//             } else {
//               break;
//             }
//             pos++;
//           }
//           contentStart = pos;
//           if (contentStart >= max) {
//             indentAfterMarker = 1;
//           } else {
//             indentAfterMarker = offset - initial;
//           }
//           if (indentAfterMarker > 4) {
//             indentAfterMarker = 1;
//           }
//           indent = initial + indentAfterMarker;
//           token = state.push("list_item_open", "li", 1);
//           token.markup = String.fromCharCode(markerCharCode);
//           token.map = itemLines = [nextLine, 0];
//           if (isOrdered) {
//             token.info = state.src.slice(start, posAfterMarker - 1);
//           }
//           oldTight = state.tight;
//           oldTShift = state.tShift[nextLine];
//           oldSCount = state.sCount[nextLine];
//           oldListIndent = state.listIndent;
//           state.listIndent = state.blkIndent;
//           state.blkIndent = indent;
//           state.tight = true;
//           state.tShift[nextLine] = contentStart - state.bMarks[nextLine];
//           state.sCount[nextLine] = offset;
//           if (contentStart >= max && state.isEmpty(nextLine + 1)) {
//             state.line = Math.min(state.line + 2, endLine);
//           } else {
//             state.md.block.tokenize(state, nextLine, endLine, true);
//           }
//           if (!state.tight || prevEmptyEnd) {
//             tight = false;
//           }
//           prevEmptyEnd = state.line - nextLine > 1 && state.isEmpty(state.line - 1);
//           state.blkIndent = state.listIndent;
//           state.listIndent = oldListIndent;
//           state.tShift[nextLine] = oldTShift;
//           state.sCount[nextLine] = oldSCount;
//           state.tight = oldTight;
//           token = state.push("list_item_close", "li", -1);
//           token.markup = String.fromCharCode(markerCharCode);
//           nextLine = state.line;
//           itemLines[1] = nextLine;
//           if (nextLine >= endLine) {
//             break;
//           }
//           if (state.sCount[nextLine] < state.blkIndent) {
//             break;
//           }
//           if (state.sCount[nextLine] - state.blkIndent >= 4) {
//             break;
//           }
//           terminate = false;
//           for (i = 0, l = terminatorRules.length; i < l; i++) {
//             if (terminatorRules[i](state, nextLine, endLine, true)) {
//               terminate = true;
//               break;
//             }
//           }
//           if (terminate) {
//             break;
//           }
//           if (isOrdered) {
//             posAfterMarker = skipOrderedListMarker(state, nextLine);
//             if (posAfterMarker < 0) {
//               break;
//             }
//             start = state.bMarks[nextLine] + state.tShift[nextLine];
//           } else {
//             posAfterMarker = skipBulletListMarker(state, nextLine);
//             if (posAfterMarker < 0) {
//               break;
//             }
//           }
//           if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
//             break;
//           }
//         }
//         if (isOrdered) {
//           token = state.push("ordered_list_close", "ol", -1);
//         } else {
//           token = state.push("bullet_list_close", "ul", -1);
//         }
//         token.markup = String.fromCharCode(markerCharCode);
//         listLines[1] = nextLine;
//         state.line = nextLine;
//         state.parentType = oldParentType;
//         if (tight) {
//           markTightParagraphs(state, listTokIdx);
//         }
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_block/reference.js
//   var require_reference = __commonJS({
//     "node_modules/markdown-it/lib/rules_block/reference.js"(exports, module) {
//       "use strict";
//       var normalizeReference = require_utils().normalizeReference;
//       var isSpace = require_utils().isSpace;
//       module.exports = function reference(state, startLine, _endLine, silent) {
//         var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], nextLine = startLine + 1;
//         if (state.sCount[startLine] - state.blkIndent >= 4) {
//           return false;
//         }
//         if (state.src.charCodeAt(pos) !== 91) {
//           return false;
//         }
//         while (++pos < max) {
//           if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
//             if (pos + 1 === max) {
//               return false;
//             }
//             if (state.src.charCodeAt(pos + 1) !== 58) {
//               return false;
//             }
//             break;
//           }
//         }
//         endLine = state.lineMax;
//         terminatorRules = state.md.block.ruler.getRules("reference");
//         oldParentType = state.parentType;
//         state.parentType = "reference";
//         for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
//           if (state.sCount[nextLine] - state.blkIndent > 3) {
//             continue;
//           }
//           if (state.sCount[nextLine] < 0) {
//             continue;
//           }
//           terminate = false;
//           for (i = 0, l = terminatorRules.length; i < l; i++) {
//             if (terminatorRules[i](state, nextLine, endLine, true)) {
//               terminate = true;
//               break;
//             }
//           }
//           if (terminate) {
//             break;
//           }
//         }
//         str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
//         max = str.length;
//         for (pos = 1; pos < max; pos++) {
//           ch = str.charCodeAt(pos);
//           if (ch === 91) {
//             return false;
//           } else if (ch === 93) {
//             labelEnd = pos;
//             break;
//           } else if (ch === 10) {
//             lines++;
//           } else if (ch === 92) {
//             pos++;
//             if (pos < max && str.charCodeAt(pos) === 10) {
//               lines++;
//             }
//           }
//         }
//         if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
//           return false;
//         }
//         for (pos = labelEnd + 2; pos < max; pos++) {
//           ch = str.charCodeAt(pos);
//           if (ch === 10) {
//             lines++;
//           } else if (isSpace(ch)) {
//           } else {
//             break;
//           }
//         }
//         res = state.md.helpers.parseLinkDestination(str, pos, max);
//         if (!res.ok) {
//           return false;
//         }
//         href = state.md.normalizeLink(res.str);
//         if (!state.md.validateLink(href)) {
//           return false;
//         }
//         pos = res.pos;
//         lines += res.lines;
//         destEndPos = pos;
//         destEndLineNo = lines;
//         start = pos;
//         for (; pos < max; pos++) {
//           ch = str.charCodeAt(pos);
//           if (ch === 10) {
//             lines++;
//           } else if (isSpace(ch)) {
//           } else {
//             break;
//           }
//         }
//         res = state.md.helpers.parseLinkTitle(str, pos, max);
//         if (pos < max && start !== pos && res.ok) {
//           title = res.str;
//           pos = res.pos;
//           lines += res.lines;
//         } else {
//           title = "";
//           pos = destEndPos;
//           lines = destEndLineNo;
//         }
//         while (pos < max) {
//           ch = str.charCodeAt(pos);
//           if (!isSpace(ch)) {
//             break;
//           }
//           pos++;
//         }
//         if (pos < max && str.charCodeAt(pos) !== 10) {
//           if (title) {
//             title = "";
//             pos = destEndPos;
//             lines = destEndLineNo;
//             while (pos < max) {
//               ch = str.charCodeAt(pos);
//               if (!isSpace(ch)) {
//                 break;
//               }
//               pos++;
//             }
//           }
//         }
//         if (pos < max && str.charCodeAt(pos) !== 10) {
//           return false;
//         }
//         label = normalizeReference(str.slice(1, labelEnd));
//         if (!label) {
//           return false;
//         }
//         if (silent) {
//           return true;
//         }
//         if (typeof state.env.references === "undefined") {
//           state.env.references = {};
//         }
//         if (typeof state.env.references[label] === "undefined") {
//           state.env.references[label] = { title, href };
//         }
//         state.parentType = oldParentType;
//         state.line = startLine + lines + 1;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/common/html_blocks.js
//   var require_html_blocks = __commonJS({
//     "node_modules/markdown-it/lib/common/html_blocks.js"(exports, module) {
//       "use strict";
//       module.exports = [
//         "address",
//         "article",
//         "aside",
//         "base",
//         "basefont",
//         "blockquote",
//         "body",
//         "caption",
//         "center",
//         "col",
//         "colgroup",
//         "dd",
//         "details",
//         "dialog",
//         "dir",
//         "div",
//         "dl",
//         "dt",
//         "fieldset",
//         "figcaption",
//         "figure",
//         "footer",
//         "form",
//         "frame",
//         "frameset",
//         "h1",
//         "h2",
//         "h3",
//         "h4",
//         "h5",
//         "h6",
//         "head",
//         "header",
//         "hr",
//         "html",
//         "iframe",
//         "legend",
//         "li",
//         "link",
//         "main",
//         "menu",
//         "menuitem",
//         "nav",
//         "noframes",
//         "ol",
//         "optgroup",
//         "option",
//         "p",
//         "param",
//         "section",
//         "source",
//         "summary",
//         "table",
//         "tbody",
//         "td",
//         "tfoot",
//         "th",
//         "thead",
//         "title",
//         "tr",
//         "track",
//         "ul"
//       ];
//     }
//   });
// 
//   // node_modules/markdown-it/lib/common/html_re.js
//   var require_html_re = __commonJS({
//     "node_modules/markdown-it/lib/common/html_re.js"(exports, module) {
//       "use strict";
//       var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
//       var unquoted = "[^\"'=<>`\\x00-\\x20]+";
//       var single_quoted = "'[^']*'";
//       var double_quoted = '"[^"]*"';
//       var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
//       var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
//       var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
//       var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
//       var comment = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
//       var processing = "<[?][\\s\\S]*?[?]>";
//       var declaration = "<![A-Z]+\\s+[^>]*>";
//       var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
//       var HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
//       var HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
//       module.exports.HTML_TAG_RE = HTML_TAG_RE;
//       module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_block/html_block.js
//   var require_html_block = __commonJS({
//     "node_modules/markdown-it/lib/rules_block/html_block.js"(exports, module) {
//       "use strict";
//       var block_names = require_html_blocks();
//       var HTML_OPEN_CLOSE_TAG_RE = require_html_re().HTML_OPEN_CLOSE_TAG_RE;
//       var HTML_SEQUENCES = [
//         [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
//         [/^<!--/, /-->/, true],
//         [/^<\?/, /\?>/, true],
//         [/^<![A-Z]/, />/, true],
//         [/^<!\[CDATA\[/, /\]\]>/, true],
//         [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
//         [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
//       ];
//       module.exports = function html_block(state, startLine, endLine, silent) {
//         var i, nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
//         if (state.sCount[startLine] - state.blkIndent >= 4) {
//           return false;
//         }
//         if (!state.md.options.html) {
//           return false;
//         }
//         if (state.src.charCodeAt(pos) !== 60) {
//           return false;
//         }
//         lineText = state.src.slice(pos, max);
//         for (i = 0; i < HTML_SEQUENCES.length; i++) {
//           if (HTML_SEQUENCES[i][0].test(lineText)) {
//             break;
//           }
//         }
//         if (i === HTML_SEQUENCES.length) {
//           return false;
//         }
//         if (silent) {
//           return HTML_SEQUENCES[i][2];
//         }
//         nextLine = startLine + 1;
//         if (!HTML_SEQUENCES[i][1].test(lineText)) {
//           for (; nextLine < endLine; nextLine++) {
//             if (state.sCount[nextLine] < state.blkIndent) {
//               break;
//             }
//             pos = state.bMarks[nextLine] + state.tShift[nextLine];
//             max = state.eMarks[nextLine];
//             lineText = state.src.slice(pos, max);
//             if (HTML_SEQUENCES[i][1].test(lineText)) {
//               if (lineText.length !== 0) {
//                 nextLine++;
//               }
//               break;
//             }
//           }
//         }
//         state.line = nextLine;
//         token = state.push("html_block", "", 0);
//         token.map = [startLine, nextLine];
//         token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_block/heading.js
//   var require_heading = __commonJS({
//     "node_modules/markdown-it/lib/rules_block/heading.js"(exports, module) {
//       "use strict";
//       var isSpace = require_utils().isSpace;
//       module.exports = function heading(state, startLine, endLine, silent) {
//         var ch, level, tmp, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
//         if (state.sCount[startLine] - state.blkIndent >= 4) {
//           return false;
//         }
//         ch = state.src.charCodeAt(pos);
//         if (ch !== 35 || pos >= max) {
//           return false;
//         }
//         level = 1;
//         ch = state.src.charCodeAt(++pos);
//         while (ch === 35 && pos < max && level <= 6) {
//           level++;
//           ch = state.src.charCodeAt(++pos);
//         }
//         if (level > 6 || pos < max && !isSpace(ch)) {
//           return false;
//         }
//         if (silent) {
//           return true;
//         }
//         max = state.skipSpacesBack(max, pos);
//         tmp = state.skipCharsBack(max, 35, pos);
//         if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
//           max = tmp;
//         }
//         state.line = startLine + 1;
//         token = state.push("heading_open", "h" + String(level), 1);
//         token.markup = "########".slice(0, level);
//         token.map = [startLine, state.line];
//         token = state.push("inline", "", 0);
//         token.content = state.src.slice(pos, max).trim();
//         token.map = [startLine, state.line];
//         token.children = [];
//         token = state.push("heading_close", "h" + String(level), -1);
//         token.markup = "########".slice(0, level);
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_block/lheading.js
//   var require_lheading = __commonJS({
//     "node_modules/markdown-it/lib/rules_block/lheading.js"(exports, module) {
//       "use strict";
//       module.exports = function lheading(state, startLine, endLine) {
//         var content, terminate, i, l, token, pos, max, level, marker, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
//         if (state.sCount[startLine] - state.blkIndent >= 4) {
//           return false;
//         }
//         oldParentType = state.parentType;
//         state.parentType = "paragraph";
//         for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
//           if (state.sCount[nextLine] - state.blkIndent > 3) {
//             continue;
//           }
//           if (state.sCount[nextLine] >= state.blkIndent) {
//             pos = state.bMarks[nextLine] + state.tShift[nextLine];
//             max = state.eMarks[nextLine];
//             if (pos < max) {
//               marker = state.src.charCodeAt(pos);
//               if (marker === 45 || marker === 61) {
//                 pos = state.skipChars(pos, marker);
//                 pos = state.skipSpaces(pos);
//                 if (pos >= max) {
//                   level = marker === 61 ? 1 : 2;
//                   break;
//                 }
//               }
//             }
//           }
//           if (state.sCount[nextLine] < 0) {
//             continue;
//           }
//           terminate = false;
//           for (i = 0, l = terminatorRules.length; i < l; i++) {
//             if (terminatorRules[i](state, nextLine, endLine, true)) {
//               terminate = true;
//               break;
//             }
//           }
//           if (terminate) {
//             break;
//           }
//         }
//         if (!level) {
//           return false;
//         }
//         content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
//         state.line = nextLine + 1;
//         token = state.push("heading_open", "h" + String(level), 1);
//         token.markup = String.fromCharCode(marker);
//         token.map = [startLine, state.line];
//         token = state.push("inline", "", 0);
//         token.content = content;
//         token.map = [startLine, state.line - 1];
//         token.children = [];
//         token = state.push("heading_close", "h" + String(level), -1);
//         token.markup = String.fromCharCode(marker);
//         state.parentType = oldParentType;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_block/paragraph.js
//   var require_paragraph = __commonJS({
//     "node_modules/markdown-it/lib/rules_block/paragraph.js"(exports, module) {
//       "use strict";
//       module.exports = function paragraph(state, startLine, endLine) {
//         var content, terminate, i, l, token, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph");
//         oldParentType = state.parentType;
//         state.parentType = "paragraph";
//         for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
//           if (state.sCount[nextLine] - state.blkIndent > 3) {
//             continue;
//           }
//           if (state.sCount[nextLine] < 0) {
//             continue;
//           }
//           terminate = false;
//           for (i = 0, l = terminatorRules.length; i < l; i++) {
//             if (terminatorRules[i](state, nextLine, endLine, true)) {
//               terminate = true;
//               break;
//             }
//           }
//           if (terminate) {
//             break;
//           }
//         }
//         content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
//         state.line = nextLine;
//         token = state.push("paragraph_open", "p", 1);
//         token.map = [startLine, state.line];
//         token = state.push("inline", "", 0);
//         token.content = content;
//         token.map = [startLine, state.line];
//         token.children = [];
//         token = state.push("paragraph_close", "p", -1);
//         state.parentType = oldParentType;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_block/state_block.js
//   var require_state_block = __commonJS({
//     "node_modules/markdown-it/lib/rules_block/state_block.js"(exports, module) {
//       "use strict";
//       var Token = require_token();
//       var isSpace = require_utils().isSpace;
//       function StateBlock(src, md, env, tokens) {
//         var ch, s, start, pos, len, indent, offset, indent_found;
//         this.src = src;
//         this.md = md;
//         this.env = env;
//         this.tokens = tokens;
//         this.bMarks = [];
//         this.eMarks = [];
//         this.tShift = [];
//         this.sCount = [];
//         this.bsCount = [];
//         this.blkIndent = 0;
//         this.line = 0;
//         this.lineMax = 0;
//         this.tight = false;
//         this.ddIndent = -1;
//         this.listIndent = -1;
//         this.parentType = "root";
//         this.level = 0;
//         this.result = "";
//         s = this.src;
//         indent_found = false;
//         for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
//           ch = s.charCodeAt(pos);
//           if (!indent_found) {
//             if (isSpace(ch)) {
//               indent++;
//               if (ch === 9) {
//                 offset += 4 - offset % 4;
//               } else {
//                 offset++;
//               }
//               continue;
//             } else {
//               indent_found = true;
//             }
//           }
//           if (ch === 10 || pos === len - 1) {
//             if (ch !== 10) {
//               pos++;
//             }
//             this.bMarks.push(start);
//             this.eMarks.push(pos);
//             this.tShift.push(indent);
//             this.sCount.push(offset);
//             this.bsCount.push(0);
//             indent_found = false;
//             indent = 0;
//             offset = 0;
//             start = pos + 1;
//           }
//         }
//         this.bMarks.push(s.length);
//         this.eMarks.push(s.length);
//         this.tShift.push(0);
//         this.sCount.push(0);
//         this.bsCount.push(0);
//         this.lineMax = this.bMarks.length - 1;
//       }
//       StateBlock.prototype.push = function(type, tag, nesting) {
//         var token = new Token(type, tag, nesting);
//         token.block = true;
//         if (nesting < 0)
//           this.level--;
//         token.level = this.level;
//         if (nesting > 0)
//           this.level++;
//         this.tokens.push(token);
//         return token;
//       };
//       StateBlock.prototype.isEmpty = function isEmpty(line) {
//         return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
//       };
//       StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
//         for (var max = this.lineMax; from < max; from++) {
//           if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
//             break;
//           }
//         }
//         return from;
//       };
//       StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
//         var ch;
//         for (var max = this.src.length; pos < max; pos++) {
//           ch = this.src.charCodeAt(pos);
//           if (!isSpace(ch)) {
//             break;
//           }
//         }
//         return pos;
//       };
//       StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
//         if (pos <= min) {
//           return pos;
//         }
//         while (pos > min) {
//           if (!isSpace(this.src.charCodeAt(--pos))) {
//             return pos + 1;
//           }
//         }
//         return pos;
//       };
//       StateBlock.prototype.skipChars = function skipChars(pos, code) {
//         for (var max = this.src.length; pos < max; pos++) {
//           if (this.src.charCodeAt(pos) !== code) {
//             break;
//           }
//         }
//         return pos;
//       };
//       StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
//         if (pos <= min) {
//           return pos;
//         }
//         while (pos > min) {
//           if (code !== this.src.charCodeAt(--pos)) {
//             return pos + 1;
//           }
//         }
//         return pos;
//       };
//       StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
//         var i, lineIndent, ch, first, last, queue, lineStart, line = begin;
//         if (begin >= end) {
//           return "";
//         }
//         queue = new Array(end - begin);
//         for (i = 0; line < end; line++, i++) {
//           lineIndent = 0;
//           lineStart = first = this.bMarks[line];
//           if (line + 1 < end || keepLastLF) {
//             last = this.eMarks[line] + 1;
//           } else {
//             last = this.eMarks[line];
//           }
//           while (first < last && lineIndent < indent) {
//             ch = this.src.charCodeAt(first);
//             if (isSpace(ch)) {
//               if (ch === 9) {
//                 lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
//               } else {
//                 lineIndent++;
//               }
//             } else if (first - lineStart < this.tShift[line]) {
//               lineIndent++;
//             } else {
//               break;
//             }
//             first++;
//           }
//           if (lineIndent > indent) {
//             queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
//           } else {
//             queue[i] = this.src.slice(first, last);
//           }
//         }
//         return queue.join("");
//       };
//       StateBlock.prototype.Token = Token;
//       module.exports = StateBlock;
//     }
//   });
// 
//   // node_modules/markdown-it/lib/parser_block.js
//   var require_parser_block = __commonJS({
//     "node_modules/markdown-it/lib/parser_block.js"(exports, module) {
//       "use strict";
//       var Ruler = require_ruler();
//       var _rules = [
//         // First 2 params - rule name & source. Secondary array - list of rules,
//         // which can be terminated by this one.
//         ["table", require_table(), ["paragraph", "reference"]],
//         ["code", require_code()],
//         ["fence", require_fence(), ["paragraph", "reference", "blockquote", "list"]],
//         ["blockquote", require_blockquote(), ["paragraph", "reference", "blockquote", "list"]],
//         ["hr", require_hr(), ["paragraph", "reference", "blockquote", "list"]],
//         ["list", require_list(), ["paragraph", "reference", "blockquote"]],
//         ["reference", require_reference()],
//         ["html_block", require_html_block(), ["paragraph", "reference", "blockquote"]],
//         ["heading", require_heading(), ["paragraph", "reference", "blockquote"]],
//         ["lheading", require_lheading()],
//         ["paragraph", require_paragraph()]
//       ];
//       function ParserBlock() {
//         this.ruler = new Ruler();
//         for (var i = 0; i < _rules.length; i++) {
//           this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
//         }
//       }
//       ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
//         var ok, i, prevLine, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
//         while (line < endLine) {
//           state.line = line = state.skipEmptyLines(line);
//           if (line >= endLine) {
//             break;
//           }
//           if (state.sCount[line] < state.blkIndent) {
//             break;
//           }
//           if (state.level >= maxNesting) {
//             state.line = endLine;
//             break;
//           }
//           prevLine = state.line;
//           for (i = 0; i < len; i++) {
//             ok = rules[i](state, line, endLine, false);
//             if (ok) {
//               if (prevLine >= state.line) {
//                 throw new Error("block rule didn't increment state.line");
//               }
//               break;
//             }
//           }
//           if (!ok)
//             throw new Error("none of the block rules matched");
//           state.tight = !hasEmptyLines;
//           if (state.isEmpty(state.line - 1)) {
//             hasEmptyLines = true;
//           }
//           line = state.line;
//           if (line < endLine && state.isEmpty(line)) {
//             hasEmptyLines = true;
//             line++;
//             state.line = line;
//           }
//         }
//       };
//       ParserBlock.prototype.parse = function(src, md, env, outTokens) {
//         var state;
//         if (!src) {
//           return;
//         }
//         state = new this.State(src, md, env, outTokens);
//         this.tokenize(state, state.line, state.lineMax);
//       };
//       ParserBlock.prototype.State = require_state_block();
//       module.exports = ParserBlock;
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/text.js
//   var require_text = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/text.js"(exports, module) {
//       "use strict";
//       function isTerminatorChar(ch) {
//         switch (ch) {
//           case 10:
//           case 33:
//           case 35:
//           case 36:
//           case 37:
//           case 38:
//           case 42:
//           case 43:
//           case 45:
//           case 58:
//           case 60:
//           case 61:
//           case 62:
//           case 64:
//           case 91:
//           case 92:
//           case 93:
//           case 94:
//           case 95:
//           case 96:
//           case 123:
//           case 125:
//           case 126:
//             return true;
//           default:
//             return false;
//         }
//       }
//       module.exports = function text(state, silent) {
//         var pos = state.pos;
//         while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
//           pos++;
//         }
//         if (pos === state.pos) {
//           return false;
//         }
//         if (!silent) {
//           state.pending += state.src.slice(state.pos, pos);
//         }
//         state.pos = pos;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/linkify.js
//   var require_linkify2 = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/linkify.js"(exports, module) {
//       "use strict";
//       var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
//       module.exports = function linkify(state, silent) {
//         var pos, max, match, proto, link, url, fullUrl, token;
//         if (!state.md.options.linkify)
//           return false;
//         if (state.linkLevel > 0)
//           return false;
//         pos = state.pos;
//         max = state.posMax;
//         if (pos + 3 > max)
//           return false;
//         if (state.src.charCodeAt(pos) !== 58)
//           return false;
//         if (state.src.charCodeAt(pos + 1) !== 47)
//           return false;
//         if (state.src.charCodeAt(pos + 2) !== 47)
//           return false;
//         match = state.pending.match(SCHEME_RE);
//         if (!match)
//           return false;
//         proto = match[1];
//         link = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
//         if (!link)
//           return false;
//         url = link.url;
//         if (url.length <= proto.length)
//           return false;
//         url = url.replace(/\*+$/, "");
//         fullUrl = state.md.normalizeLink(url);
//         if (!state.md.validateLink(fullUrl))
//           return false;
//         if (!silent) {
//           state.pending = state.pending.slice(0, -proto.length);
//           token = state.push("link_open", "a", 1);
//           token.attrs = [["href", fullUrl]];
//           token.markup = "linkify";
//           token.info = "auto";
//           token = state.push("text", "", 0);
//           token.content = state.md.normalizeLinkText(url);
//           token = state.push("link_close", "a", -1);
//           token.markup = "linkify";
//           token.info = "auto";
//         }
//         state.pos += url.length - proto.length;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/newline.js
//   var require_newline = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/newline.js"(exports, module) {
//       "use strict";
//       var isSpace = require_utils().isSpace;
//       module.exports = function newline(state, silent) {
//         var pmax, max, ws, pos = state.pos;
//         if (state.src.charCodeAt(pos) !== 10) {
//           return false;
//         }
//         pmax = state.pending.length - 1;
//         max = state.posMax;
//         if (!silent) {
//           if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
//             if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
//               ws = pmax - 1;
//               while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)
//                 ws--;
//               state.pending = state.pending.slice(0, ws);
//               state.push("hardbreak", "br", 0);
//             } else {
//               state.pending = state.pending.slice(0, -1);
//               state.push("softbreak", "br", 0);
//             }
//           } else {
//             state.push("softbreak", "br", 0);
//           }
//         }
//         pos++;
//         while (pos < max && isSpace(state.src.charCodeAt(pos))) {
//           pos++;
//         }
//         state.pos = pos;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/escape.js
//   var require_escape = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/escape.js"(exports, module) {
//       "use strict";
//       var isSpace = require_utils().isSpace;
//       var ESCAPED = [];
//       for (i = 0; i < 256; i++) {
//         ESCAPED.push(0);
//       }
//       var i;
//       "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
//         ESCAPED[ch.charCodeAt(0)] = 1;
//       });
//       module.exports = function escape(state, silent) {
//         var ch1, ch2, origStr, escapedStr, token, pos = state.pos, max = state.posMax;
//         if (state.src.charCodeAt(pos) !== 92)
//           return false;
//         pos++;
//         if (pos >= max)
//           return false;
//         ch1 = state.src.charCodeAt(pos);
//         if (ch1 === 10) {
//           if (!silent) {
//             state.push("hardbreak", "br", 0);
//           }
//           pos++;
//           while (pos < max) {
//             ch1 = state.src.charCodeAt(pos);
//             if (!isSpace(ch1))
//               break;
//             pos++;
//           }
//           state.pos = pos;
//           return true;
//         }
//         escapedStr = state.src[pos];
//         if (ch1 >= 55296 && ch1 <= 56319 && pos + 1 < max) {
//           ch2 = state.src.charCodeAt(pos + 1);
//           if (ch2 >= 56320 && ch2 <= 57343) {
//             escapedStr += state.src[pos + 1];
//             pos++;
//           }
//         }
//         origStr = "\\" + escapedStr;
//         if (!silent) {
//           token = state.push("text_special", "", 0);
//           if (ch1 < 256 && ESCAPED[ch1] !== 0) {
//             token.content = escapedStr;
//           } else {
//             token.content = origStr;
//           }
//           token.markup = origStr;
//           token.info = "escape";
//         }
//         state.pos = pos + 1;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/backticks.js
//   var require_backticks = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/backticks.js"(exports, module) {
//       "use strict";
//       module.exports = function backtick(state, silent) {
//         var start, max, marker, token, matchStart, matchEnd, openerLength, closerLength, pos = state.pos, ch = state.src.charCodeAt(pos);
//         if (ch !== 96) {
//           return false;
//         }
//         start = pos;
//         pos++;
//         max = state.posMax;
//         while (pos < max && state.src.charCodeAt(pos) === 96) {
//           pos++;
//         }
//         marker = state.src.slice(start, pos);
//         openerLength = marker.length;
//         if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
//           if (!silent)
//             state.pending += marker;
//           state.pos += openerLength;
//           return true;
//         }
//         matchEnd = pos;
//         while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
//           matchEnd = matchStart + 1;
//           while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
//             matchEnd++;
//           }
//           closerLength = matchEnd - matchStart;
//           if (closerLength === openerLength) {
//             if (!silent) {
//               token = state.push("code_inline", "code", 0);
//               token.markup = marker;
//               token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
//             }
//             state.pos = matchEnd;
//             return true;
//           }
//           state.backticks[closerLength] = matchStart;
//         }
//         state.backticksScanned = true;
//         if (!silent)
//           state.pending += marker;
//         state.pos += openerLength;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/strikethrough.js
//   var require_strikethrough = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/strikethrough.js"(exports, module) {
//       "use strict";
//       module.exports.tokenize = function strikethrough(state, silent) {
//         var i, scanned, token, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
//         if (silent) {
//           return false;
//         }
//         if (marker !== 126) {
//           return false;
//         }
//         scanned = state.scanDelims(state.pos, true);
//         len = scanned.length;
//         ch = String.fromCharCode(marker);
//         if (len < 2) {
//           return false;
//         }
//         if (len % 2) {
//           token = state.push("text", "", 0);
//           token.content = ch;
//           len--;
//         }
//         for (i = 0; i < len; i += 2) {
//           token = state.push("text", "", 0);
//           token.content = ch + ch;
//           state.delimiters.push({
//             marker,
//             length: 0,
//             // disable "rule of 3" length checks meant for emphasis
//             token: state.tokens.length - 1,
//             end: -1,
//             open: scanned.can_open,
//             close: scanned.can_close
//           });
//         }
//         state.pos += scanned.length;
//         return true;
//       };
//       function postProcess(state, delimiters) {
//         var i, j, startDelim, endDelim, token, loneMarkers = [], max = delimiters.length;
//         for (i = 0; i < max; i++) {
//           startDelim = delimiters[i];
//           if (startDelim.marker !== 126) {
//             continue;
//           }
//           if (startDelim.end === -1) {
//             continue;
//           }
//           endDelim = delimiters[startDelim.end];
//           token = state.tokens[startDelim.token];
//           token.type = "s_open";
//           token.tag = "s";
//           token.nesting = 1;
//           token.markup = "~~";
//           token.content = "";
//           token = state.tokens[endDelim.token];
//           token.type = "s_close";
//           token.tag = "s";
//           token.nesting = -1;
//           token.markup = "~~";
//           token.content = "";
//           if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
//             loneMarkers.push(endDelim.token - 1);
//           }
//         }
//         while (loneMarkers.length) {
//           i = loneMarkers.pop();
//           j = i + 1;
//           while (j < state.tokens.length && state.tokens[j].type === "s_close") {
//             j++;
//           }
//           j--;
//           if (i !== j) {
//             token = state.tokens[j];
//             state.tokens[j] = state.tokens[i];
//             state.tokens[i] = token;
//           }
//         }
//       }
//       module.exports.postProcess = function strikethrough(state) {
//         var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
//         postProcess(state, state.delimiters);
//         for (curr = 0; curr < max; curr++) {
//           if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
//             postProcess(state, tokens_meta[curr].delimiters);
//           }
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/emphasis.js
//   var require_emphasis = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/emphasis.js"(exports, module) {
//       "use strict";
//       module.exports.tokenize = function emphasis(state, silent) {
//         var i, scanned, token, start = state.pos, marker = state.src.charCodeAt(start);
//         if (silent) {
//           return false;
//         }
//         if (marker !== 95 && marker !== 42) {
//           return false;
//         }
//         scanned = state.scanDelims(state.pos, marker === 42);
//         for (i = 0; i < scanned.length; i++) {
//           token = state.push("text", "", 0);
//           token.content = String.fromCharCode(marker);
//           state.delimiters.push({
//             // Char code of the starting marker (number).
//             //
//             marker,
//             // Total length of these series of delimiters.
//             //
//             length: scanned.length,
//             // A position of the token this delimiter corresponds to.
//             //
//             token: state.tokens.length - 1,
//             // If this delimiter is matched as a valid opener, `end` will be
//             // equal to its position, otherwise it's `-1`.
//             //
//             end: -1,
//             // Boolean flags that determine if this delimiter could open or close
//             // an emphasis.
//             //
//             open: scanned.can_open,
//             close: scanned.can_close
//           });
//         }
//         state.pos += scanned.length;
//         return true;
//       };
//       function postProcess(state, delimiters) {
//         var i, startDelim, endDelim, token, ch, isStrong, max = delimiters.length;
//         for (i = max - 1; i >= 0; i--) {
//           startDelim = delimiters[i];
//           if (startDelim.marker !== 95 && startDelim.marker !== 42) {
//             continue;
//           }
//           if (startDelim.end === -1) {
//             continue;
//           }
//           endDelim = delimiters[startDelim.end];
//           isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && // check that first two markers match and adjacent
//           delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
//           delimiters[startDelim.end + 1].token === endDelim.token + 1;
//           ch = String.fromCharCode(startDelim.marker);
//           token = state.tokens[startDelim.token];
//           token.type = isStrong ? "strong_open" : "em_open";
//           token.tag = isStrong ? "strong" : "em";
//           token.nesting = 1;
//           token.markup = isStrong ? ch + ch : ch;
//           token.content = "";
//           token = state.tokens[endDelim.token];
//           token.type = isStrong ? "strong_close" : "em_close";
//           token.tag = isStrong ? "strong" : "em";
//           token.nesting = -1;
//           token.markup = isStrong ? ch + ch : ch;
//           token.content = "";
//           if (isStrong) {
//             state.tokens[delimiters[i - 1].token].content = "";
//             state.tokens[delimiters[startDelim.end + 1].token].content = "";
//             i--;
//           }
//         }
//       }
//       module.exports.postProcess = function emphasis(state) {
//         var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
//         postProcess(state, state.delimiters);
//         for (curr = 0; curr < max; curr++) {
//           if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
//             postProcess(state, tokens_meta[curr].delimiters);
//           }
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/link.js
//   var require_link = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/link.js"(exports, module) {
//       "use strict";
//       var normalizeReference = require_utils().normalizeReference;
//       var isSpace = require_utils().isSpace;
//       module.exports = function link(state, silent) {
//         var attrs, code, label, labelEnd, labelStart, pos, res, ref, token, href = "", title = "", oldPos = state.pos, max = state.posMax, start = state.pos, parseReference = true;
//         if (state.src.charCodeAt(state.pos) !== 91) {
//           return false;
//         }
//         labelStart = state.pos + 1;
//         labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
//         if (labelEnd < 0) {
//           return false;
//         }
//         pos = labelEnd + 1;
//         if (pos < max && state.src.charCodeAt(pos) === 40) {
//           parseReference = false;
//           pos++;
//           for (; pos < max; pos++) {
//             code = state.src.charCodeAt(pos);
//             if (!isSpace(code) && code !== 10) {
//               break;
//             }
//           }
//           if (pos >= max) {
//             return false;
//           }
//           start = pos;
//           res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
//           if (res.ok) {
//             href = state.md.normalizeLink(res.str);
//             if (state.md.validateLink(href)) {
//               pos = res.pos;
//             } else {
//               href = "";
//             }
//             start = pos;
//             for (; pos < max; pos++) {
//               code = state.src.charCodeAt(pos);
//               if (!isSpace(code) && code !== 10) {
//                 break;
//               }
//             }
//             res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
//             if (pos < max && start !== pos && res.ok) {
//               title = res.str;
//               pos = res.pos;
//               for (; pos < max; pos++) {
//                 code = state.src.charCodeAt(pos);
//                 if (!isSpace(code) && code !== 10) {
//                   break;
//                 }
//               }
//             }
//           }
//           if (pos >= max || state.src.charCodeAt(pos) !== 41) {
//             parseReference = true;
//           }
//           pos++;
//         }
//         if (parseReference) {
//           if (typeof state.env.references === "undefined") {
//             return false;
//           }
//           if (pos < max && state.src.charCodeAt(pos) === 91) {
//             start = pos + 1;
//             pos = state.md.helpers.parseLinkLabel(state, pos);
//             if (pos >= 0) {
//               label = state.src.slice(start, pos++);
//             } else {
//               pos = labelEnd + 1;
//             }
//           } else {
//             pos = labelEnd + 1;
//           }
//           if (!label) {
//             label = state.src.slice(labelStart, labelEnd);
//           }
//           ref = state.env.references[normalizeReference(label)];
//           if (!ref) {
//             state.pos = oldPos;
//             return false;
//           }
//           href = ref.href;
//           title = ref.title;
//         }
//         if (!silent) {
//           state.pos = labelStart;
//           state.posMax = labelEnd;
//           token = state.push("link_open", "a", 1);
//           token.attrs = attrs = [["href", href]];
//           if (title) {
//             attrs.push(["title", title]);
//           }
//           state.linkLevel++;
//           state.md.inline.tokenize(state);
//           state.linkLevel--;
//           token = state.push("link_close", "a", -1);
//         }
//         state.pos = pos;
//         state.posMax = max;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/image.js
//   var require_image = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/image.js"(exports, module) {
//       "use strict";
//       var normalizeReference = require_utils().normalizeReference;
//       var isSpace = require_utils().isSpace;
//       module.exports = function image(state, silent) {
//         var attrs, code, content, label, labelEnd, labelStart, pos, ref, res, title, token, tokens, start, href = "", oldPos = state.pos, max = state.posMax;
//         if (state.src.charCodeAt(state.pos) !== 33) {
//           return false;
//         }
//         if (state.src.charCodeAt(state.pos + 1) !== 91) {
//           return false;
//         }
//         labelStart = state.pos + 2;
//         labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
//         if (labelEnd < 0) {
//           return false;
//         }
//         pos = labelEnd + 1;
//         if (pos < max && state.src.charCodeAt(pos) === 40) {
//           pos++;
//           for (; pos < max; pos++) {
//             code = state.src.charCodeAt(pos);
//             if (!isSpace(code) && code !== 10) {
//               break;
//             }
//           }
//           if (pos >= max) {
//             return false;
//           }
//           start = pos;
//           res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
//           if (res.ok) {
//             href = state.md.normalizeLink(res.str);
//             if (state.md.validateLink(href)) {
//               pos = res.pos;
//             } else {
//               href = "";
//             }
//           }
//           start = pos;
//           for (; pos < max; pos++) {
//             code = state.src.charCodeAt(pos);
//             if (!isSpace(code) && code !== 10) {
//               break;
//             }
//           }
//           res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
//           if (pos < max && start !== pos && res.ok) {
//             title = res.str;
//             pos = res.pos;
//             for (; pos < max; pos++) {
//               code = state.src.charCodeAt(pos);
//               if (!isSpace(code) && code !== 10) {
//                 break;
//               }
//             }
//           } else {
//             title = "";
//           }
//           if (pos >= max || state.src.charCodeAt(pos) !== 41) {
//             state.pos = oldPos;
//             return false;
//           }
//           pos++;
//         } else {
//           if (typeof state.env.references === "undefined") {
//             return false;
//           }
//           if (pos < max && state.src.charCodeAt(pos) === 91) {
//             start = pos + 1;
//             pos = state.md.helpers.parseLinkLabel(state, pos);
//             if (pos >= 0) {
//               label = state.src.slice(start, pos++);
//             } else {
//               pos = labelEnd + 1;
//             }
//           } else {
//             pos = labelEnd + 1;
//           }
//           if (!label) {
//             label = state.src.slice(labelStart, labelEnd);
//           }
//           ref = state.env.references[normalizeReference(label)];
//           if (!ref) {
//             state.pos = oldPos;
//             return false;
//           }
//           href = ref.href;
//           title = ref.title;
//         }
//         if (!silent) {
//           content = state.src.slice(labelStart, labelEnd);
//           state.md.inline.parse(
//             content,
//             state.md,
//             state.env,
//             tokens = []
//           );
//           token = state.push("image", "img", 0);
//           token.attrs = attrs = [["src", href], ["alt", ""]];
//           token.children = tokens;
//           token.content = content;
//           if (title) {
//             attrs.push(["title", title]);
//           }
//         }
//         state.pos = pos;
//         state.posMax = max;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/autolink.js
//   var require_autolink = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/autolink.js"(exports, module) {
//       "use strict";
//       var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
//       var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
//       module.exports = function autolink(state, silent) {
//         var url, fullUrl, token, ch, start, max, pos = state.pos;
//         if (state.src.charCodeAt(pos) !== 60) {
//           return false;
//         }
//         start = state.pos;
//         max = state.posMax;
//         for (; ; ) {
//           if (++pos >= max)
//             return false;
//           ch = state.src.charCodeAt(pos);
//           if (ch === 60)
//             return false;
//           if (ch === 62)
//             break;
//         }
//         url = state.src.slice(start + 1, pos);
//         if (AUTOLINK_RE.test(url)) {
//           fullUrl = state.md.normalizeLink(url);
//           if (!state.md.validateLink(fullUrl)) {
//             return false;
//           }
//           if (!silent) {
//             token = state.push("link_open", "a", 1);
//             token.attrs = [["href", fullUrl]];
//             token.markup = "autolink";
//             token.info = "auto";
//             token = state.push("text", "", 0);
//             token.content = state.md.normalizeLinkText(url);
//             token = state.push("link_close", "a", -1);
//             token.markup = "autolink";
//             token.info = "auto";
//           }
//           state.pos += url.length + 2;
//           return true;
//         }
//         if (EMAIL_RE.test(url)) {
//           fullUrl = state.md.normalizeLink("mailto:" + url);
//           if (!state.md.validateLink(fullUrl)) {
//             return false;
//           }
//           if (!silent) {
//             token = state.push("link_open", "a", 1);
//             token.attrs = [["href", fullUrl]];
//             token.markup = "autolink";
//             token.info = "auto";
//             token = state.push("text", "", 0);
//             token.content = state.md.normalizeLinkText(url);
//             token = state.push("link_close", "a", -1);
//             token.markup = "autolink";
//             token.info = "auto";
//           }
//           state.pos += url.length + 2;
//           return true;
//         }
//         return false;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/html_inline.js
//   var require_html_inline = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/html_inline.js"(exports, module) {
//       "use strict";
//       var HTML_TAG_RE = require_html_re().HTML_TAG_RE;
//       function isLinkOpen(str) {
//         return /^<a[>\s]/i.test(str);
//       }
//       function isLinkClose(str) {
//         return /^<\/a\s*>/i.test(str);
//       }
//       function isLetter(ch) {
//         var lc = ch | 32;
//         return lc >= 97 && lc <= 122;
//       }
//       module.exports = function html_inline(state, silent) {
//         var ch, match, max, token, pos = state.pos;
//         if (!state.md.options.html) {
//           return false;
//         }
//         max = state.posMax;
//         if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
//           return false;
//         }
//         ch = state.src.charCodeAt(pos + 1);
//         if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
//           return false;
//         }
//         match = state.src.slice(pos).match(HTML_TAG_RE);
//         if (!match) {
//           return false;
//         }
//         if (!silent) {
//           token = state.push("html_inline", "", 0);
//           token.content = match[0];
//           if (isLinkOpen(token.content))
//             state.linkLevel++;
//           if (isLinkClose(token.content))
//             state.linkLevel--;
//         }
//         state.pos += match[0].length;
//         return true;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/entity.js
//   var require_entity = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/entity.js"(exports, module) {
//       "use strict";
//       var entities = require_entities2();
//       var has = require_utils().has;
//       var isValidEntityCode = require_utils().isValidEntityCode;
//       var fromCodePoint = require_utils().fromCodePoint;
//       var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
//       var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
//       module.exports = function entity(state, silent) {
//         var ch, code, match, token, pos = state.pos, max = state.posMax;
//         if (state.src.charCodeAt(pos) !== 38)
//           return false;
//         if (pos + 1 >= max)
//           return false;
//         ch = state.src.charCodeAt(pos + 1);
//         if (ch === 35) {
//           match = state.src.slice(pos).match(DIGITAL_RE);
//           if (match) {
//             if (!silent) {
//               code = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
//               token = state.push("text_special", "", 0);
//               token.content = isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(65533);
//               token.markup = match[0];
//               token.info = "entity";
//             }
//             state.pos += match[0].length;
//             return true;
//           }
//         } else {
//           match = state.src.slice(pos).match(NAMED_RE);
//           if (match) {
//             if (has(entities, match[1])) {
//               if (!silent) {
//                 token = state.push("text_special", "", 0);
//                 token.content = entities[match[1]];
//                 token.markup = match[0];
//                 token.info = "entity";
//               }
//               state.pos += match[0].length;
//               return true;
//             }
//           }
//         }
//         return false;
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/balance_pairs.js
//   var require_balance_pairs = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/balance_pairs.js"(exports, module) {
//       "use strict";
//       function processDelimiters(delimiters) {
//         var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max = delimiters.length;
//         if (!max)
//           return;
//         var headerIdx = 0;
//         var lastTokenIdx = -2;
//         var jumps = [];
//         for (closerIdx = 0; closerIdx < max; closerIdx++) {
//           closer = delimiters[closerIdx];
//           jumps.push(0);
//           if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
//             headerIdx = closerIdx;
//           }
//           lastTokenIdx = closer.token;
//           closer.length = closer.length || 0;
//           if (!closer.close)
//             continue;
//           if (!openersBottom.hasOwnProperty(closer.marker)) {
//             openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
//           }
//           minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
//           openerIdx = headerIdx - jumps[headerIdx] - 1;
//           newMinOpenerIdx = openerIdx;
//           for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
//             opener = delimiters[openerIdx];
//             if (opener.marker !== closer.marker)
//               continue;
//             if (opener.open && opener.end < 0) {
//               isOddMatch = false;
//               if (opener.close || closer.open) {
//                 if ((opener.length + closer.length) % 3 === 0) {
//                   if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
//                     isOddMatch = true;
//                   }
//                 }
//               }
//               if (!isOddMatch) {
//                 lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
//                 jumps[closerIdx] = closerIdx - openerIdx + lastJump;
//                 jumps[openerIdx] = lastJump;
//                 closer.open = false;
//                 opener.end = closerIdx;
//                 opener.close = false;
//                 newMinOpenerIdx = -1;
//                 lastTokenIdx = -2;
//                 break;
//               }
//             }
//           }
//           if (newMinOpenerIdx !== -1) {
//             openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
//           }
//         }
//       }
//       module.exports = function link_pairs(state) {
//         var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
//         processDelimiters(state.delimiters);
//         for (curr = 0; curr < max; curr++) {
//           if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
//             processDelimiters(tokens_meta[curr].delimiters);
//           }
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/fragments_join.js
//   var require_fragments_join = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/fragments_join.js"(exports, module) {
//       "use strict";
//       module.exports = function fragments_join(state) {
//         var curr, last, level = 0, tokens = state.tokens, max = state.tokens.length;
//         for (curr = last = 0; curr < max; curr++) {
//           if (tokens[curr].nesting < 0)
//             level--;
//           tokens[curr].level = level;
//           if (tokens[curr].nesting > 0)
//             level++;
//           if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
//             tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
//           } else {
//             if (curr !== last) {
//               tokens[last] = tokens[curr];
//             }
//             last++;
//           }
//         }
//         if (curr !== last) {
//           tokens.length = last;
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/rules_inline/state_inline.js
//   var require_state_inline = __commonJS({
//     "node_modules/markdown-it/lib/rules_inline/state_inline.js"(exports, module) {
//       "use strict";
//       var Token = require_token();
//       var isWhiteSpace = require_utils().isWhiteSpace;
//       var isPunctChar = require_utils().isPunctChar;
//       var isMdAsciiPunct = require_utils().isMdAsciiPunct;
//       function StateInline(src, md, env, outTokens) {
//         this.src = src;
//         this.env = env;
//         this.md = md;
//         this.tokens = outTokens;
//         this.tokens_meta = Array(outTokens.length);
//         this.pos = 0;
//         this.posMax = this.src.length;
//         this.level = 0;
//         this.pending = "";
//         this.pendingLevel = 0;
//         this.cache = {};
//         this.delimiters = [];
//         this._prev_delimiters = [];
//         this.backticks = {};
//         this.backticksScanned = false;
//         this.linkLevel = 0;
//       }
//       StateInline.prototype.pushPending = function() {
//         var token = new Token("text", "", 0);
//         token.content = this.pending;
//         token.level = this.pendingLevel;
//         this.tokens.push(token);
//         this.pending = "";
//         return token;
//       };
//       StateInline.prototype.push = function(type, tag, nesting) {
//         if (this.pending) {
//           this.pushPending();
//         }
//         var token = new Token(type, tag, nesting);
//         var token_meta = null;
//         if (nesting < 0) {
//           this.level--;
//           this.delimiters = this._prev_delimiters.pop();
//         }
//         token.level = this.level;
//         if (nesting > 0) {
//           this.level++;
//           this._prev_delimiters.push(this.delimiters);
//           this.delimiters = [];
//           token_meta = { delimiters: this.delimiters };
//         }
//         this.pendingLevel = this.level;
//         this.tokens.push(token);
//         this.tokens_meta.push(token_meta);
//         return token;
//       };
//       StateInline.prototype.scanDelims = function(start, canSplitWord) {
//         var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max = this.posMax, marker = this.src.charCodeAt(start);
//         lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
//         while (pos < max && this.src.charCodeAt(pos) === marker) {
//           pos++;
//         }
//         count = pos - start;
//         nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
//         isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
//         isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
//         isLastWhiteSpace = isWhiteSpace(lastChar);
//         isNextWhiteSpace = isWhiteSpace(nextChar);
//         if (isNextWhiteSpace) {
//           left_flanking = false;
//         } else if (isNextPunctChar) {
//           if (!(isLastWhiteSpace || isLastPunctChar)) {
//             left_flanking = false;
//           }
//         }
//         if (isLastWhiteSpace) {
//           right_flanking = false;
//         } else if (isLastPunctChar) {
//           if (!(isNextWhiteSpace || isNextPunctChar)) {
//             right_flanking = false;
//           }
//         }
//         if (!canSplitWord) {
//           can_open = left_flanking && (!right_flanking || isLastPunctChar);
//           can_close = right_flanking && (!left_flanking || isNextPunctChar);
//         } else {
//           can_open = left_flanking;
//           can_close = right_flanking;
//         }
//         return {
//           can_open,
//           can_close,
//           length: count
//         };
//       };
//       StateInline.prototype.Token = Token;
//       module.exports = StateInline;
//     }
//   });
// 
//   // node_modules/markdown-it/lib/parser_inline.js
//   var require_parser_inline = __commonJS({
//     "node_modules/markdown-it/lib/parser_inline.js"(exports, module) {
//       "use strict";
//       var Ruler = require_ruler();
//       var _rules = [
//         ["text", require_text()],
//         ["linkify", require_linkify2()],
//         ["newline", require_newline()],
//         ["escape", require_escape()],
//         ["backticks", require_backticks()],
//         ["strikethrough", require_strikethrough().tokenize],
//         ["emphasis", require_emphasis().tokenize],
//         ["link", require_link()],
//         ["image", require_image()],
//         ["autolink", require_autolink()],
//         ["html_inline", require_html_inline()],
//         ["entity", require_entity()]
//       ];
//       var _rules2 = [
//         ["balance_pairs", require_balance_pairs()],
//         ["strikethrough", require_strikethrough().postProcess],
//         ["emphasis", require_emphasis().postProcess],
//         // rules for pairs separate '**' into its own text tokens, which may be left unused,
//         // rule below merges unused segments back with the rest of the text
//         ["fragments_join", require_fragments_join()]
//       ];
//       function ParserInline() {
//         var i;
//         this.ruler = new Ruler();
//         for (i = 0; i < _rules.length; i++) {
//           this.ruler.push(_rules[i][0], _rules[i][1]);
//         }
//         this.ruler2 = new Ruler();
//         for (i = 0; i < _rules2.length; i++) {
//           this.ruler2.push(_rules2[i][0], _rules2[i][1]);
//         }
//       }
//       ParserInline.prototype.skipToken = function(state) {
//         var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
//         if (typeof cache[pos] !== "undefined") {
//           state.pos = cache[pos];
//           return;
//         }
//         if (state.level < maxNesting) {
//           for (i = 0; i < len; i++) {
//             state.level++;
//             ok = rules[i](state, true);
//             state.level--;
//             if (ok) {
//               if (pos >= state.pos) {
//                 throw new Error("inline rule didn't increment state.pos");
//               }
//               break;
//             }
//           }
//         } else {
//           state.pos = state.posMax;
//         }
//         if (!ok) {
//           state.pos++;
//         }
//         cache[pos] = state.pos;
//       };
//       ParserInline.prototype.tokenize = function(state) {
//         var ok, i, prevPos, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
//         while (state.pos < end) {
//           prevPos = state.pos;
//           if (state.level < maxNesting) {
//             for (i = 0; i < len; i++) {
//               ok = rules[i](state, false);
//               if (ok) {
//                 if (prevPos >= state.pos) {
//                   throw new Error("inline rule didn't increment state.pos");
//                 }
//                 break;
//               }
//             }
//           }
//           if (ok) {
//             if (state.pos >= end) {
//               break;
//             }
//             continue;
//           }
//           state.pending += state.src[state.pos++];
//         }
//         if (state.pending) {
//           state.pushPending();
//         }
//       };
//       ParserInline.prototype.parse = function(str, md, env, outTokens) {
//         var i, rules, len;
//         var state = new this.State(str, md, env, outTokens);
//         this.tokenize(state);
//         rules = this.ruler2.getRules("");
//         len = rules.length;
//         for (i = 0; i < len; i++) {
//           rules[i](state);
//         }
//       };
//       ParserInline.prototype.State = require_state_inline();
//       module.exports = ParserInline;
//     }
//   });
// 
//   // node_modules/linkify-it/lib/re.js
//   var require_re = __commonJS({
//     "node_modules/linkify-it/lib/re.js"(exports, module) {
//       "use strict";
//       module.exports = function(opts) {
//         var re = {};
//         opts = opts || {};
//         re.src_Any = require_regex2().source;
//         re.src_Cc = require_regex3().source;
//         re.src_Z = require_regex5().source;
//         re.src_P = require_regex().source;
//         re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join("|");
//         re.src_ZCc = [re.src_Z, re.src_Cc].join("|");
//         var text_separators = "[><\uFF5C]";
//         re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
//         re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
//         re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
//         re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
//         re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
//         re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re.src_ZCc + "|$)|;(?!" + re.src_ZCc + "|$)|\\!+(?!" + re.src_ZCc + "|[!]|$)|\\?(?!" + re.src_ZCc + "|[?]|$))+|\\/)?";
//         re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
//         re.src_xn = "xn--[a-z0-9\\-]{1,59}";
//         re.src_domain_root = // Allow letters & digits (http://test1)
//         "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})";
//         re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
//         re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
//         re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
//         re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
//         re.src_host_strict = re.src_host + re.src_host_terminator;
//         re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
//         re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
//         re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
//         re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
//         re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
//         re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
//         re.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
//         // but can start with > (markdown blockquote)
//         "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
//         re.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
//         // but can start with > (markdown blockquote)
//         "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
//         return re;
//       };
//     }
//   });
// 
//   // node_modules/linkify-it/index.js
//   var require_linkify_it = __commonJS({
//     "node_modules/linkify-it/index.js"(exports, module) {
//       "use strict";
//       function assign(obj) {
//         var sources = Array.prototype.slice.call(arguments, 1);
//         sources.forEach(function(source) {
//           if (!source) {
//             return;
//           }
//           Object.keys(source).forEach(function(key) {
//             obj[key] = source[key];
//           });
//         });
//         return obj;
//       }
//       function _class(obj) {
//         return Object.prototype.toString.call(obj);
//       }
//       function isString(obj) {
//         return _class(obj) === "[object String]";
//       }
//       function isObject(obj) {
//         return _class(obj) === "[object Object]";
//       }
//       function isRegExp(obj) {
//         return _class(obj) === "[object RegExp]";
//       }
//       function isFunction(obj) {
//         return _class(obj) === "[object Function]";
//       }
//       function escapeRE(str) {
//         return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
//       }
//       var defaultOptions = {
//         fuzzyLink: true,
//         fuzzyEmail: true,
//         fuzzyIP: false
//       };
//       function isOptionsObj(obj) {
//         return Object.keys(obj || {}).reduce(function(acc, k) {
//           return acc || defaultOptions.hasOwnProperty(k);
//         }, false);
//       }
//       var defaultSchemas = {
//         "http:": {
//           validate: function(text, pos, self) {
//             var tail = text.slice(pos);
//             if (!self.re.http) {
//               self.re.http = new RegExp(
//                 "^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path,
//                 "i"
//               );
//             }
//             if (self.re.http.test(tail)) {
//               return tail.match(self.re.http)[0].length;
//             }
//             return 0;
//           }
//         },
//         "https:": "http:",
//         "ftp:": "http:",
//         "//": {
//           validate: function(text, pos, self) {
//             var tail = text.slice(pos);
//             if (!self.re.no_http) {
//               self.re.no_http = new RegExp(
//                 "^" + self.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
//                 // with code comments
//                 "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path,
//                 "i"
//               );
//             }
//             if (self.re.no_http.test(tail)) {
//               if (pos >= 3 && text[pos - 3] === ":") {
//                 return 0;
//               }
//               if (pos >= 3 && text[pos - 3] === "/") {
//                 return 0;
//               }
//               return tail.match(self.re.no_http)[0].length;
//             }
//             return 0;
//           }
//         },
//         "mailto:": {
//           validate: function(text, pos, self) {
//             var tail = text.slice(pos);
//             if (!self.re.mailto) {
//               self.re.mailto = new RegExp(
//                 "^" + self.re.src_email_name + "@" + self.re.src_host_strict,
//                 "i"
//               );
//             }
//             if (self.re.mailto.test(tail)) {
//               return tail.match(self.re.mailto)[0].length;
//             }
//             return 0;
//           }
//         }
//       };
//       var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
//       var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
//       function resetScanCache(self) {
//         self.__index__ = -1;
//         self.__text_cache__ = "";
//       }
//       function createValidator(re) {
//         return function(text, pos) {
//           var tail = text.slice(pos);
//           if (re.test(tail)) {
//             return tail.match(re)[0].length;
//           }
//           return 0;
//         };
//       }
//       function createNormalizer() {
//         return function(match, self) {
//           self.normalize(match);
//         };
//       }
//       function compile(self) {
//         var re = self.re = require_re()(self.__opts__);
//         var tlds = self.__tlds__.slice();
//         self.onCompile();
//         if (!self.__tlds_replaced__) {
//           tlds.push(tlds_2ch_src_re);
//         }
//         tlds.push(re.src_xn);
//         re.src_tlds = tlds.join("|");
//         function untpl(tpl) {
//           return tpl.replace("%TLDS%", re.src_tlds);
//         }
//         re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
//         re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
//         re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
//         re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
//         var aliases = [];
//         self.__compiled__ = {};
//         function schemaError(name, val) {
//           throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
//         }
//         Object.keys(self.__schemas__).forEach(function(name) {
//           var val = self.__schemas__[name];
//           if (val === null) {
//             return;
//           }
//           var compiled = { validate: null, link: null };
//           self.__compiled__[name] = compiled;
//           if (isObject(val)) {
//             if (isRegExp(val.validate)) {
//               compiled.validate = createValidator(val.validate);
//             } else if (isFunction(val.validate)) {
//               compiled.validate = val.validate;
//             } else {
//               schemaError(name, val);
//             }
//             if (isFunction(val.normalize)) {
//               compiled.normalize = val.normalize;
//             } else if (!val.normalize) {
//               compiled.normalize = createNormalizer();
//             } else {
//               schemaError(name, val);
//             }
//             return;
//           }
//           if (isString(val)) {
//             aliases.push(name);
//             return;
//           }
//           schemaError(name, val);
//         });
//         aliases.forEach(function(alias) {
//           if (!self.__compiled__[self.__schemas__[alias]]) {
//             return;
//           }
//           self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
//           self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
//         });
//         self.__compiled__[""] = { validate: null, normalize: createNormalizer() };
//         var slist = Object.keys(self.__compiled__).filter(function(name) {
//           return name.length > 0 && self.__compiled__[name];
//         }).map(escapeRE).join("|");
//         self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "i");
//         self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
//         self.re.schema_at_start = RegExp("^" + self.re.schema_search.source, "i");
//         self.re.pretest = RegExp(
//           "(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@",
//           "i"
//         );
//         resetScanCache(self);
//       }
//       function Match(self, shift) {
//         var start = self.__index__, end = self.__last_index__, text = self.__text_cache__.slice(start, end);
//         this.schema = self.__schema__.toLowerCase();
//         this.index = start + shift;
//         this.lastIndex = end + shift;
//         this.raw = text;
//         this.text = text;
//         this.url = text;
//       }
//       function createMatch(self, shift) {
//         var match = new Match(self, shift);
//         self.__compiled__[match.schema].normalize(match, self);
//         return match;
//       }
//       function LinkifyIt(schemas, options) {
//         if (!(this instanceof LinkifyIt)) {
//           return new LinkifyIt(schemas, options);
//         }
//         if (!options) {
//           if (isOptionsObj(schemas)) {
//             options = schemas;
//             schemas = {};
//           }
//         }
//         this.__opts__ = assign({}, defaultOptions, options);
//         this.__index__ = -1;
//         this.__last_index__ = -1;
//         this.__schema__ = "";
//         this.__text_cache__ = "";
//         this.__schemas__ = assign({}, defaultSchemas, schemas);
//         this.__compiled__ = {};
//         this.__tlds__ = tlds_default;
//         this.__tlds_replaced__ = false;
//         this.re = {};
//         compile(this);
//       }
//       LinkifyIt.prototype.add = function add(schema, definition) {
//         this.__schemas__[schema] = definition;
//         compile(this);
//         return this;
//       };
//       LinkifyIt.prototype.set = function set(options) {
//         this.__opts__ = assign(this.__opts__, options);
//         return this;
//       };
//       LinkifyIt.prototype.test = function test(text) {
//         this.__text_cache__ = text;
//         this.__index__ = -1;
//         if (!text.length) {
//           return false;
//         }
//         var m, ml, me, len, shift, next, re, tld_pos, at_pos;
//         if (this.re.schema_test.test(text)) {
//           re = this.re.schema_search;
//           re.lastIndex = 0;
//           while ((m = re.exec(text)) !== null) {
//             len = this.testSchemaAt(text, m[2], re.lastIndex);
//             if (len) {
//               this.__schema__ = m[2];
//               this.__index__ = m.index + m[1].length;
//               this.__last_index__ = m.index + m[0].length + len;
//               break;
//             }
//           }
//         }
//         if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
//           tld_pos = text.search(this.re.host_fuzzy_test);
//           if (tld_pos >= 0) {
//             if (this.__index__ < 0 || tld_pos < this.__index__) {
//               if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
//                 shift = ml.index + ml[1].length;
//                 if (this.__index__ < 0 || shift < this.__index__) {
//                   this.__schema__ = "";
//                   this.__index__ = shift;
//                   this.__last_index__ = ml.index + ml[0].length;
//                 }
//               }
//             }
//           }
//         }
//         if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
//           at_pos = text.indexOf("@");
//           if (at_pos >= 0) {
//             if ((me = text.match(this.re.email_fuzzy)) !== null) {
//               shift = me.index + me[1].length;
//               next = me.index + me[0].length;
//               if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
//                 this.__schema__ = "mailto:";
//                 this.__index__ = shift;
//                 this.__last_index__ = next;
//               }
//             }
//           }
//         }
//         return this.__index__ >= 0;
//       };
//       LinkifyIt.prototype.pretest = function pretest(text) {
//         return this.re.pretest.test(text);
//       };
//       LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
//         if (!this.__compiled__[schema.toLowerCase()]) {
//           return 0;
//         }
//         return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
//       };
//       LinkifyIt.prototype.match = function match(text) {
//         var shift = 0, result = [];
//         if (this.__index__ >= 0 && this.__text_cache__ === text) {
//           result.push(createMatch(this, shift));
//           shift = this.__last_index__;
//         }
//         var tail = shift ? text.slice(shift) : text;
//         while (this.test(tail)) {
//           result.push(createMatch(this, shift));
//           tail = tail.slice(this.__last_index__);
//           shift += this.__last_index__;
//         }
//         if (result.length) {
//           return result;
//         }
//         return null;
//       };
//       LinkifyIt.prototype.matchAtStart = function matchAtStart(text) {
//         this.__text_cache__ = text;
//         this.__index__ = -1;
//         if (!text.length)
//           return null;
//         var m = this.re.schema_at_start.exec(text);
//         if (!m)
//           return null;
//         var len = this.testSchemaAt(text, m[2], m[0].length);
//         if (!len)
//           return null;
//         this.__schema__ = m[2];
//         this.__index__ = m.index + m[1].length;
//         this.__last_index__ = m.index + m[0].length + len;
//         return createMatch(this, 0);
//       };
//       LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
//         list = Array.isArray(list) ? list : [list];
//         if (!keepOld) {
//           this.__tlds__ = list.slice();
//           this.__tlds_replaced__ = true;
//           compile(this);
//           return this;
//         }
//         this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
//           return el !== arr[idx - 1];
//         }).reverse();
//         compile(this);
//         return this;
//       };
//       LinkifyIt.prototype.normalize = function normalize(match) {
//         if (!match.schema) {
//           match.url = "http://" + match.url;
//         }
//         if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
//           match.url = "mailto:" + match.url;
//         }
//       };
//       LinkifyIt.prototype.onCompile = function onCompile() {
//       };
//       module.exports = LinkifyIt;
//     }
//   });
// 
//   // node_modules/punycode/punycode.js
//   var require_punycode = __commonJS({
//     "node_modules/punycode/punycode.js"(exports, module) {
//       "use strict";
//       var maxInt = 2147483647;
//       var base = 36;
//       var tMin = 1;
//       var tMax = 26;
//       var skew = 38;
//       var damp = 700;
//       var initialBias = 72;
//       var initialN = 128;
//       var delimiter = "-";
//       var regexPunycode = /^xn--/;
//       var regexNonASCII = /[^\0-\x7F]/;
//       var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
//       var errors = {
//         "overflow": "Overflow: input needs wider integers to process",
//         "not-basic": "Illegal input >= 0x80 (not a basic code point)",
//         "invalid-input": "Invalid input"
//       };
//       var baseMinusTMin = base - tMin;
//       var floor = Math.floor;
//       var stringFromCharCode = String.fromCharCode;
//       function error(type) {
//         throw new RangeError(errors[type]);
//       }
//       function map(array, callback) {
//         const result = [];
//         let length = array.length;
//         while (length--) {
//           result[length] = callback(array[length]);
//         }
//         return result;
//       }
//       function mapDomain(domain, callback) {
//         const parts = domain.split("@");
//         let result = "";
//         if (parts.length > 1) {
//           result = parts[0] + "@";
//           domain = parts[1];
//         }
//         domain = domain.replace(regexSeparators, ".");
//         const labels = domain.split(".");
//         const encoded = map(labels, callback).join(".");
//         return result + encoded;
//       }
//       function ucs2decode(string) {
//         const output = [];
//         let counter = 0;
//         const length = string.length;
//         while (counter < length) {
//           const value = string.charCodeAt(counter++);
//           if (value >= 55296 && value <= 56319 && counter < length) {
//             const extra = string.charCodeAt(counter++);
//             if ((extra & 64512) == 56320) {
//               output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
//             } else {
//               output.push(value);
//               counter--;
//             }
//           } else {
//             output.push(value);
//           }
//         }
//         return output;
//       }
//       var ucs2encode = (codePoints) => String.fromCodePoint(...codePoints);
//       var basicToDigit = function(codePoint) {
//         if (codePoint >= 48 && codePoint < 58) {
//           return 26 + (codePoint - 48);
//         }
//         if (codePoint >= 65 && codePoint < 91) {
//           return codePoint - 65;
//         }
//         if (codePoint >= 97 && codePoint < 123) {
//           return codePoint - 97;
//         }
//         return base;
//       };
//       var digitToBasic = function(digit, flag) {
//         return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
//       };
//       var adapt = function(delta, numPoints, firstTime) {
//         let k = 0;
//         delta = firstTime ? floor(delta / damp) : delta >> 1;
//         delta += floor(delta / numPoints);
//         for (; delta > baseMinusTMin * tMax >> 1; k += base) {
//           delta = floor(delta / baseMinusTMin);
//         }
//         return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
//       };
//       var decode = function(input) {
//         const output = [];
//         const inputLength = input.length;
//         let i = 0;
//         let n = initialN;
//         let bias = initialBias;
//         let basic = input.lastIndexOf(delimiter);
//         if (basic < 0) {
//           basic = 0;
//         }
//         for (let j = 0; j < basic; ++j) {
//           if (input.charCodeAt(j) >= 128) {
//             error("not-basic");
//           }
//           output.push(input.charCodeAt(j));
//         }
//         for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
//           const oldi = i;
//           for (let w = 1, k = base; ; k += base) {
//             if (index >= inputLength) {
//               error("invalid-input");
//             }
//             const digit = basicToDigit(input.charCodeAt(index++));
//             if (digit >= base) {
//               error("invalid-input");
//             }
//             if (digit > floor((maxInt - i) / w)) {
//               error("overflow");
//             }
//             i += digit * w;
//             const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
//             if (digit < t) {
//               break;
//             }
//             const baseMinusT = base - t;
//             if (w > floor(maxInt / baseMinusT)) {
//               error("overflow");
//             }
//             w *= baseMinusT;
//           }
//           const out = output.length + 1;
//           bias = adapt(i - oldi, out, oldi == 0);
//           if (floor(i / out) > maxInt - n) {
//             error("overflow");
//           }
//           n += floor(i / out);
//           i %= out;
//           output.splice(i++, 0, n);
//         }
//         return String.fromCodePoint(...output);
//       };
//       var encode = function(input) {
//         const output = [];
//         input = ucs2decode(input);
//         const inputLength = input.length;
//         let n = initialN;
//         let delta = 0;
//         let bias = initialBias;
//         for (const currentValue of input) {
//           if (currentValue < 128) {
//             output.push(stringFromCharCode(currentValue));
//           }
//         }
//         const basicLength = output.length;
//         let handledCPCount = basicLength;
//         if (basicLength) {
//           output.push(delimiter);
//         }
//         while (handledCPCount < inputLength) {
//           let m = maxInt;
//           for (const currentValue of input) {
//             if (currentValue >= n && currentValue < m) {
//               m = currentValue;
//             }
//           }
//           const handledCPCountPlusOne = handledCPCount + 1;
//           if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
//             error("overflow");
//           }
//           delta += (m - n) * handledCPCountPlusOne;
//           n = m;
//           for (const currentValue of input) {
//             if (currentValue < n && ++delta > maxInt) {
//               error("overflow");
//             }
//             if (currentValue === n) {
//               let q = delta;
//               for (let k = base; ; k += base) {
//                 const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
//                 if (q < t) {
//                   break;
//                 }
//                 const qMinusT = q - t;
//                 const baseMinusT = base - t;
//                 output.push(
//                   stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
//                 );
//                 q = floor(qMinusT / baseMinusT);
//               }
//               output.push(stringFromCharCode(digitToBasic(q, 0)));
//               bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
//               delta = 0;
//               ++handledCPCount;
//             }
//           }
//           ++delta;
//           ++n;
//         }
//         return output.join("");
//       };
//       var toUnicode = function(input) {
//         return mapDomain(input, function(string) {
//           return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
//         });
//       };
//       var toASCII = function(input) {
//         return mapDomain(input, function(string) {
//           return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
//         });
//       };
//       var punycode = {
//         /**
//          * A string representing the current Punycode.js version number.
//          * @memberOf punycode
//          * @type String
//          */
//         "version": "2.3.1",
//         /**
//          * An object of methods to convert from JavaScript's internal character
//          * representation (UCS-2) to Unicode code points, and back.
//          * @see <https://mathiasbynens.be/notes/javascript-encoding>
//          * @memberOf punycode
//          * @type Object
//          */
//         "ucs2": {
//           "decode": ucs2decode,
//           "encode": ucs2encode
//         },
//         "decode": decode,
//         "encode": encode,
//         "toASCII": toASCII,
//         "toUnicode": toUnicode
//       };
//       module.exports = punycode;
//     }
//   });
// 
//   // node_modules/markdown-it/lib/presets/default.js
//   var require_default = __commonJS({
//     "node_modules/markdown-it/lib/presets/default.js"(exports, module) {
//       "use strict";
//       module.exports = {
//         options: {
//           html: false,
//           // Enable HTML tags in source
//           xhtmlOut: false,
//           // Use '/' to close single tags (<br />)
//           breaks: false,
//           // Convert '\n' in paragraphs into <br>
//           langPrefix: "language-",
//           // CSS language prefix for fenced blocks
//           linkify: false,
//           // autoconvert URL-like texts to links
//           // Enable some language-neutral replacements + quotes beautification
//           typographer: false,
//           // Double + single quotes replacement pairs, when typographer enabled,
//           // and smartquotes on. Could be either a String or an Array.
//           //
//           // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
//           // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
//           quotes: "\u201C\u201D\u2018\u2019",
//           /* “”‘’ */
//           // Highlighter function. Should return escaped HTML,
//           // or '' if the source string is not changed and should be escaped externaly.
//           // If result starts with <pre... internal wrapper is skipped.
//           //
//           // function (/*str, lang*/) { return ''; }
//           //
//           highlight: null,
//           maxNesting: 100
//           // Internal protection, recursion limit
//         },
//         components: {
//           core: {},
//           block: {},
//           inline: {}
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/presets/zero.js
//   var require_zero = __commonJS({
//     "node_modules/markdown-it/lib/presets/zero.js"(exports, module) {
//       "use strict";
//       module.exports = {
//         options: {
//           html: false,
//           // Enable HTML tags in source
//           xhtmlOut: false,
//           // Use '/' to close single tags (<br />)
//           breaks: false,
//           // Convert '\n' in paragraphs into <br>
//           langPrefix: "language-",
//           // CSS language prefix for fenced blocks
//           linkify: false,
//           // autoconvert URL-like texts to links
//           // Enable some language-neutral replacements + quotes beautification
//           typographer: false,
//           // Double + single quotes replacement pairs, when typographer enabled,
//           // and smartquotes on. Could be either a String or an Array.
//           //
//           // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
//           // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
//           quotes: "\u201C\u201D\u2018\u2019",
//           /* “”‘’ */
//           // Highlighter function. Should return escaped HTML,
//           // or '' if the source string is not changed and should be escaped externaly.
//           // If result starts with <pre... internal wrapper is skipped.
//           //
//           // function (/*str, lang*/) { return ''; }
//           //
//           highlight: null,
//           maxNesting: 20
//           // Internal protection, recursion limit
//         },
//         components: {
//           core: {
//             rules: [
//               "normalize",
//               "block",
//               "inline",
//               "text_join"
//             ]
//           },
//           block: {
//             rules: [
//               "paragraph"
//             ]
//           },
//           inline: {
//             rules: [
//               "text"
//             ],
//             rules2: [
//               "balance_pairs",
//               "fragments_join"
//             ]
//           }
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/presets/commonmark.js
//   var require_commonmark = __commonJS({
//     "node_modules/markdown-it/lib/presets/commonmark.js"(exports, module) {
//       "use strict";
//       module.exports = {
//         options: {
//           html: true,
//           // Enable HTML tags in source
//           xhtmlOut: true,
//           // Use '/' to close single tags (<br />)
//           breaks: false,
//           // Convert '\n' in paragraphs into <br>
//           langPrefix: "language-",
//           // CSS language prefix for fenced blocks
//           linkify: false,
//           // autoconvert URL-like texts to links
//           // Enable some language-neutral replacements + quotes beautification
//           typographer: false,
//           // Double + single quotes replacement pairs, when typographer enabled,
//           // and smartquotes on. Could be either a String or an Array.
//           //
//           // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
//           // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
//           quotes: "\u201C\u201D\u2018\u2019",
//           /* “”‘’ */
//           // Highlighter function. Should return escaped HTML,
//           // or '' if the source string is not changed and should be escaped externaly.
//           // If result starts with <pre... internal wrapper is skipped.
//           //
//           // function (/*str, lang*/) { return ''; }
//           //
//           highlight: null,
//           maxNesting: 20
//           // Internal protection, recursion limit
//         },
//         components: {
//           core: {
//             rules: [
//               "normalize",
//               "block",
//               "inline",
//               "text_join"
//             ]
//           },
//           block: {
//             rules: [
//               "blockquote",
//               "code",
//               "fence",
//               "heading",
//               "hr",
//               "html_block",
//               "lheading",
//               "list",
//               "reference",
//               "paragraph"
//             ]
//           },
//           inline: {
//             rules: [
//               "autolink",
//               "backticks",
//               "emphasis",
//               "entity",
//               "escape",
//               "html_inline",
//               "image",
//               "link",
//               "newline",
//               "text"
//             ],
//             rules2: [
//               "balance_pairs",
//               "emphasis",
//               "fragments_join"
//             ]
//           }
//         }
//       };
//     }
//   });
// 
//   // node_modules/markdown-it/lib/index.js
//   var require_lib = __commonJS({
//     "node_modules/markdown-it/lib/index.js"(exports, module) {
//       "use strict";
//       var utils = require_utils();
//       var helpers = require_helpers();
//       var Renderer = require_renderer();
//       var ParserCore = require_parser_core();
//       var ParserBlock = require_parser_block();
//       var ParserInline = require_parser_inline();
//       var LinkifyIt = require_linkify_it();
//       var mdurl = require_mdurl();
//       var punycode = require_punycode();
//       var config = {
//         default: require_default(),
//         zero: require_zero(),
//         commonmark: require_commonmark()
//       };
//       var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
//       var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
//       function validateLink(url) {
//         var str = url.trim().toLowerCase();
//         return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
//       }
//       var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
//       function normalizeLink(url) {
//         var parsed = mdurl.parse(url, true);
//         if (parsed.hostname) {
//           if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
//             try {
//               parsed.hostname = punycode.toASCII(parsed.hostname);
//             } catch (er) {
//             }
//           }
//         }
//         return mdurl.encode(mdurl.format(parsed));
//       }
//       function normalizeLinkText(url) {
//         var parsed = mdurl.parse(url, true);
//         if (parsed.hostname) {
//           if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
//             try {
//               parsed.hostname = punycode.toUnicode(parsed.hostname);
//             } catch (er) {
//             }
//           }
//         }
//         return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
//       }
//       function MarkdownIt2(presetName, options) {
//         if (!(this instanceof MarkdownIt2)) {
//           return new MarkdownIt2(presetName, options);
//         }
//         if (!options) {
//           if (!utils.isString(presetName)) {
//             options = presetName || {};
//             presetName = "default";
//           }
//         }
//         this.inline = new ParserInline();
//         this.block = new ParserBlock();
//         this.core = new ParserCore();
//         this.renderer = new Renderer();
//         this.linkify = new LinkifyIt();
//         this.validateLink = validateLink;
//         this.normalizeLink = normalizeLink;
//         this.normalizeLinkText = normalizeLinkText;
//         this.utils = utils;
//         this.helpers = utils.assign({}, helpers);
//         this.options = {};
//         this.configure(presetName);
//         if (options) {
//           this.set(options);
//         }
//       }
//       MarkdownIt2.prototype.set = function(options) {
//         utils.assign(this.options, options);
//         return this;
//       };
//       MarkdownIt2.prototype.configure = function(presets) {
//         var self = this, presetName;
//         if (utils.isString(presets)) {
//           presetName = presets;
//           presets = config[presetName];
//           if (!presets) {
//             throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
//           }
//         }
//         if (!presets) {
//           throw new Error("Wrong `markdown-it` preset, can't be empty");
//         }
//         if (presets.options) {
//           self.set(presets.options);
//         }
//         if (presets.components) {
//           Object.keys(presets.components).forEach(function(name) {
//             if (presets.components[name].rules) {
//               self[name].ruler.enableOnly(presets.components[name].rules);
//             }
//             if (presets.components[name].rules2) {
//               self[name].ruler2.enableOnly(presets.components[name].rules2);
//             }
//           });
//         }
//         return this;
//       };
//       MarkdownIt2.prototype.enable = function(list, ignoreInvalid) {
//         var result = [];
//         if (!Array.isArray(list)) {
//           list = [list];
//         }
//         ["core", "block", "inline"].forEach(function(chain) {
//           result = result.concat(this[chain].ruler.enable(list, true));
//         }, this);
//         result = result.concat(this.inline.ruler2.enable(list, true));
//         var missed = list.filter(function(name) {
//           return result.indexOf(name) < 0;
//         });
//         if (missed.length && !ignoreInvalid) {
//           throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
//         }
//         return this;
//       };
//       MarkdownIt2.prototype.disable = function(list, ignoreInvalid) {
//         var result = [];
//         if (!Array.isArray(list)) {
//           list = [list];
//         }
//         ["core", "block", "inline"].forEach(function(chain) {
//           result = result.concat(this[chain].ruler.disable(list, true));
//         }, this);
//         result = result.concat(this.inline.ruler2.disable(list, true));
//         var missed = list.filter(function(name) {
//           return result.indexOf(name) < 0;
//         });
//         if (missed.length && !ignoreInvalid) {
//           throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
//         }
//         return this;
//       };
//       MarkdownIt2.prototype.use = function(plugin) {
//         var args = [this].concat(Array.prototype.slice.call(arguments, 1));
//         plugin.apply(plugin, args);
//         return this;
//       };
//       MarkdownIt2.prototype.parse = function(src, env) {
//         if (typeof src !== "string") {
//           throw new Error("Input data should be a String");
//         }
//         var state = new this.core.State(src, this, env);
//         this.core.process(state);
//         return state.tokens;
//       };
//       MarkdownIt2.prototype.render = function(src, env) {
//         env = env || {};
//         return this.renderer.render(this.parse(src, env), this.options, env);
//       };
//       MarkdownIt2.prototype.parseInline = function(src, env) {
//         var state = new this.core.State(src, this, env);
//         state.inlineMode = true;
//         this.core.process(state);
//         return state.tokens;
//       };
//       MarkdownIt2.prototype.renderInline = function(src, env) {
//         env = env || {};
//         return this.renderer.render(this.parseInline(src, env), this.options, env);
//       };
//       module.exports = MarkdownIt2;
//     }
//   });
// 
//   // node_modules/markdown-it/index.js
//   var require_markdown_it = __commonJS({
//     "node_modules/markdown-it/index.js"(exports, module) {
//       "use strict";
//       module.exports = require_lib();
//     }
//   });
// 
//   // node_modules/dompurify/dist/purify.cjs.js
//   var require_purify_cjs = __commonJS({
//     "node_modules/dompurify/dist/purify.cjs.js"(exports, module) {
//       "use strict";
//       var {
//         entries,
//         setPrototypeOf,
//         isFrozen,
//         getPrototypeOf,
//         getOwnPropertyDescriptor
//       } = Object;
//       var {
//         freeze,
//         seal,
//         create
//       } = Object;
//       var {
//         apply,
//         construct
//       } = typeof Reflect !== "undefined" && Reflect;
//       if (!freeze) {
//         freeze = function freeze2(x) {
//           return x;
//         };
//       }
//       if (!seal) {
//         seal = function seal2(x) {
//           return x;
//         };
//       }
//       if (!apply) {
//         apply = function apply2(fun, thisValue, args) {
//           return fun.apply(thisValue, args);
//         };
//       }
//       if (!construct) {
//         construct = function construct2(Func, args) {
//           return new Func(...args);
//         };
//       }
//       var arrayForEach = unapply(Array.prototype.forEach);
//       var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
//       var arrayPop = unapply(Array.prototype.pop);
//       var arrayPush = unapply(Array.prototype.push);
//       var arraySplice = unapply(Array.prototype.splice);
//       var stringToLowerCase = unapply(String.prototype.toLowerCase);
//       var stringToString = unapply(String.prototype.toString);
//       var stringMatch = unapply(String.prototype.match);
//       var stringReplace = unapply(String.prototype.replace);
//       var stringIndexOf = unapply(String.prototype.indexOf);
//       var stringTrim = unapply(String.prototype.trim);
//       var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
//       var regExpTest = unapply(RegExp.prototype.test);
//       var typeErrorCreate = unconstruct(TypeError);
//       function unapply(func) {
//         return function(thisArg) {
//           if (thisArg instanceof RegExp) {
//             thisArg.lastIndex = 0;
//           }
//           for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
//             args[_key - 1] = arguments[_key];
//           }
//           return apply(func, thisArg, args);
//         };
//       }
//       function unconstruct(func) {
//         return function() {
//           for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
//             args[_key2] = arguments[_key2];
//           }
//           return construct(func, args);
//         };
//       }
//       function addToSet(set, array) {
//         let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
//         if (setPrototypeOf) {
//           setPrototypeOf(set, null);
//         }
//         let l = array.length;
//         while (l--) {
//           let element = array[l];
//           if (typeof element === "string") {
//             const lcElement = transformCaseFunc(element);
//             if (lcElement !== element) {
//               if (!isFrozen(array)) {
//                 array[l] = lcElement;
//               }
//               element = lcElement;
//             }
//           }
//           set[element] = true;
//         }
//         return set;
//       }
//       function cleanArray(array) {
//         for (let index = 0; index < array.length; index++) {
//           const isPropertyExist = objectHasOwnProperty(array, index);
//           if (!isPropertyExist) {
//             array[index] = null;
//           }
//         }
//         return array;
//       }
//       function clone(object) {
//         const newObject = create(null);
//         for (const [property, value] of entries(object)) {
//           const isPropertyExist = objectHasOwnProperty(object, property);
//           if (isPropertyExist) {
//             if (Array.isArray(value)) {
//               newObject[property] = cleanArray(value);
//             } else if (value && typeof value === "object" && value.constructor === Object) {
//               newObject[property] = clone(value);
//             } else {
//               newObject[property] = value;
//             }
//           }
//         }
//         return newObject;
//       }
//       function lookupGetter(object, prop) {
//         while (object !== null) {
//           const desc = getOwnPropertyDescriptor(object, prop);
//           if (desc) {
//             if (desc.get) {
//               return unapply(desc.get);
//             }
//             if (typeof desc.value === "function") {
//               return unapply(desc.value);
//             }
//           }
//           object = getPrototypeOf(object);
//         }
//         function fallbackValue() {
//           return null;
//         }
//         return fallbackValue;
//       }
//       var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
//       var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
//       var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
//       var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
//       var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
//       var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
//       var text = freeze(["#text"]);
//       var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
//       var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
//       var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
//       var xml2 = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
//       var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
//       var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
//       var TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
//       var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
//       var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
//       var IS_ALLOWED_URI = seal(
//         /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
//         // eslint-disable-line no-useless-escape
//       );
//       var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
//       var ATTR_WHITESPACE = seal(
//         /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
//         // eslint-disable-line no-control-regex
//       );
//       var DOCTYPE_NAME = seal(/^html$/i);
//       var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
//       var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
//         __proto__: null,
//         ARIA_ATTR,
//         ATTR_WHITESPACE,
//         CUSTOM_ELEMENT,
//         DATA_ATTR,
//         DOCTYPE_NAME,
//         ERB_EXPR,
//         IS_ALLOWED_URI,
//         IS_SCRIPT_OR_DATA,
//         MUSTACHE_EXPR,
//         TMPLIT_EXPR
//       });
//       var NODE_TYPE = {
//         element: 1,
//         attribute: 2,
//         text: 3,
//         cdataSection: 4,
//         entityReference: 5,
//         // Deprecated
//         entityNode: 6,
//         // Deprecated
//         progressingInstruction: 7,
//         comment: 8,
//         document: 9,
//         documentType: 10,
//         documentFragment: 11,
//         notation: 12
//         // Deprecated
//       };
//       var getGlobal = function getGlobal2() {
//         return typeof window === "undefined" ? null : window;
//       };
//       var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
//         if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
//           return null;
//         }
//         let suffix = null;
//         const ATTR_NAME = "data-tt-policy-suffix";
//         if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
//           suffix = purifyHostElement.getAttribute(ATTR_NAME);
//         }
//         const policyName = "dompurify" + (suffix ? "#" + suffix : "");
//         try {
//           return trustedTypes.createPolicy(policyName, {
//             createHTML(html2) {
//               return html2;
//             },
//             createScriptURL(scriptUrl) {
//               return scriptUrl;
//             }
//           });
//         } catch (_) {
//           console.warn("TrustedTypes policy " + policyName + " could not be created.");
//           return null;
//         }
//       };
//       var _createHooksMap = function _createHooksMap2() {
//         return {
//           afterSanitizeAttributes: [],
//           afterSanitizeElements: [],
//           afterSanitizeShadowDOM: [],
//           beforeSanitizeAttributes: [],
//           beforeSanitizeElements: [],
//           beforeSanitizeShadowDOM: [],
//           uponSanitizeAttribute: [],
//           uponSanitizeElement: [],
//           uponSanitizeShadowNode: []
//         };
//       };
//       function createDOMPurify() {
//         let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
//         const DOMPurify2 = (root) => createDOMPurify(root);
//         DOMPurify2.version = "3.2.6";
//         DOMPurify2.removed = [];
//         if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
//           DOMPurify2.isSupported = false;
//           return DOMPurify2;
//         }
//         let {
//           document: document2
//         } = window2;
//         const originalDocument = document2;
//         const currentScript = originalDocument.currentScript;
//         const {
//           DocumentFragment,
//           HTMLTemplateElement,
//           Node,
//           Element,
//           NodeFilter,
//           NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
//           HTMLFormElement,
//           DOMParser,
//           trustedTypes
//         } = window2;
//         const ElementPrototype = Element.prototype;
//         const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
//         const remove = lookupGetter(ElementPrototype, "remove");
//         const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
//         const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
//         const getParentNode = lookupGetter(ElementPrototype, "parentNode");
//         if (typeof HTMLTemplateElement === "function") {
//           const template = document2.createElement("template");
//           if (template.content && template.content.ownerDocument) {
//             document2 = template.content.ownerDocument;
//           }
//         }
//         let trustedTypesPolicy;
//         let emptyHTML = "";
//         const {
//           implementation,
//           createNodeIterator,
//           createDocumentFragment,
//           getElementsByTagName
//         } = document2;
//         const {
//           importNode
//         } = originalDocument;
//         let hooks = _createHooksMap();
//         DOMPurify2.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
//         const {
//           MUSTACHE_EXPR: MUSTACHE_EXPR2,
//           ERB_EXPR: ERB_EXPR2,
//           TMPLIT_EXPR: TMPLIT_EXPR2,
//           DATA_ATTR: DATA_ATTR2,
//           ARIA_ATTR: ARIA_ATTR2,
//           IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
//           ATTR_WHITESPACE: ATTR_WHITESPACE2,
//           CUSTOM_ELEMENT: CUSTOM_ELEMENT2
//         } = EXPRESSIONS;
//         let {
//           IS_ALLOWED_URI: IS_ALLOWED_URI$1
//         } = EXPRESSIONS;
//         let ALLOWED_TAGS = null;
//         const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
//         let ALLOWED_ATTR = null;
//         const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml2]);
//         let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
//           tagNameCheck: {
//             writable: true,
//             configurable: false,
//             enumerable: true,
//             value: null
//           },
//           attributeNameCheck: {
//             writable: true,
//             configurable: false,
//             enumerable: true,
//             value: null
//           },
//           allowCustomizedBuiltInElements: {
//             writable: true,
//             configurable: false,
//             enumerable: true,
//             value: false
//           }
//         }));
//         let FORBID_TAGS = null;
//         let FORBID_ATTR = null;
//         let ALLOW_ARIA_ATTR = true;
//         let ALLOW_DATA_ATTR = true;
//         let ALLOW_UNKNOWN_PROTOCOLS = false;
//         let ALLOW_SELF_CLOSE_IN_ATTR = true;
//         let SAFE_FOR_TEMPLATES = false;
//         let SAFE_FOR_XML = true;
//         let WHOLE_DOCUMENT = false;
//         let SET_CONFIG = false;
//         let FORCE_BODY = false;
//         let RETURN_DOM = false;
//         let RETURN_DOM_FRAGMENT = false;
//         let RETURN_TRUSTED_TYPE = false;
//         let SANITIZE_DOM = true;
//         let SANITIZE_NAMED_PROPS = false;
//         const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
//         let KEEP_CONTENT = true;
//         let IN_PLACE = false;
//         let USE_PROFILES = {};
//         let FORBID_CONTENTS = null;
//         const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
//         let DATA_URI_TAGS = null;
//         const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
//         let URI_SAFE_ATTRIBUTES = null;
//         const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
//         const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
//         const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
//         const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
//         let NAMESPACE = HTML_NAMESPACE;
//         let IS_EMPTY_INPUT = false;
//         let ALLOWED_NAMESPACES = null;
//         const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
//         let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
//         let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
//         const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
//         let PARSER_MEDIA_TYPE = null;
//         const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
//         const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
//         let transformCaseFunc = null;
//         let CONFIG = null;
//         const formElement = document2.createElement("form");
//         const isRegexOrFunction = function isRegexOrFunction2(testValue) {
//           return testValue instanceof RegExp || testValue instanceof Function;
//         };
//         const _parseConfig = function _parseConfig2() {
//           let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
//           if (CONFIG && CONFIG === cfg) {
//             return;
//           }
//           if (!cfg || typeof cfg !== "object") {
//             cfg = {};
//           }
//           cfg = clone(cfg);
//           PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
//           SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
//           transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
//           ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
//           ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
//           ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
//           URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
//           DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
//           FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
//           FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
//           FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
//           USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
//           ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
//           ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
//           ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
//           ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
//           SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
//           SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
//           WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
//           RETURN_DOM = cfg.RETURN_DOM || false;
//           RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
//           RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
//           FORCE_BODY = cfg.FORCE_BODY || false;
//           SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
//           SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
//           KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
//           IN_PLACE = cfg.IN_PLACE || false;
//           IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
//           NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
//           MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
//           HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
//           CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
//           if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
//             CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
//           }
//           if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
//             CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
//           }
//           if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
//             CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
//           }
//           if (SAFE_FOR_TEMPLATES) {
//             ALLOW_DATA_ATTR = false;
//           }
//           if (RETURN_DOM_FRAGMENT) {
//             RETURN_DOM = true;
//           }
//           if (USE_PROFILES) {
//             ALLOWED_TAGS = addToSet({}, text);
//             ALLOWED_ATTR = [];
//             if (USE_PROFILES.html === true) {
//               addToSet(ALLOWED_TAGS, html$1);
//               addToSet(ALLOWED_ATTR, html);
//             }
//             if (USE_PROFILES.svg === true) {
//               addToSet(ALLOWED_TAGS, svg$1);
//               addToSet(ALLOWED_ATTR, svg);
//               addToSet(ALLOWED_ATTR, xml2);
//             }
//             if (USE_PROFILES.svgFilters === true) {
//               addToSet(ALLOWED_TAGS, svgFilters);
//               addToSet(ALLOWED_ATTR, svg);
//               addToSet(ALLOWED_ATTR, xml2);
//             }
//             if (USE_PROFILES.mathMl === true) {
//               addToSet(ALLOWED_TAGS, mathMl$1);
//               addToSet(ALLOWED_ATTR, mathMl);
//               addToSet(ALLOWED_ATTR, xml2);
//             }
//           }
//           if (cfg.ADD_TAGS) {
//             if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
//               ALLOWED_TAGS = clone(ALLOWED_TAGS);
//             }
//             addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
//           }
//           if (cfg.ADD_ATTR) {
//             if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
//               ALLOWED_ATTR = clone(ALLOWED_ATTR);
//             }
//             addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
//           }
//           if (cfg.ADD_URI_SAFE_ATTR) {
//             addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
//           }
//           if (cfg.FORBID_CONTENTS) {
//             if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
//               FORBID_CONTENTS = clone(FORBID_CONTENTS);
//             }
//             addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
//           }
//           if (KEEP_CONTENT) {
//             ALLOWED_TAGS["#text"] = true;
//           }
//           if (WHOLE_DOCUMENT) {
//             addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
//           }
//           if (ALLOWED_TAGS.table) {
//             addToSet(ALLOWED_TAGS, ["tbody"]);
//             delete FORBID_TAGS.tbody;
//           }
//           if (cfg.TRUSTED_TYPES_POLICY) {
//             if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
//               throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
//             }
//             if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
//               throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
//             }
//             trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
//             emptyHTML = trustedTypesPolicy.createHTML("");
//           } else {
//             if (trustedTypesPolicy === void 0) {
//               trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
//             }
//             if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
//               emptyHTML = trustedTypesPolicy.createHTML("");
//             }
//           }
//           if (freeze) {
//             freeze(cfg);
//           }
//           CONFIG = cfg;
//         };
//         const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
//         const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
//         const _checkValidNamespace = function _checkValidNamespace2(element) {
//           let parent = getParentNode(element);
//           if (!parent || !parent.tagName) {
//             parent = {
//               namespaceURI: NAMESPACE,
//               tagName: "template"
//             };
//           }
//           const tagName = stringToLowerCase(element.tagName);
//           const parentTagName = stringToLowerCase(parent.tagName);
//           if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
//             return false;
//           }
//           if (element.namespaceURI === SVG_NAMESPACE) {
//             if (parent.namespaceURI === HTML_NAMESPACE) {
//               return tagName === "svg";
//             }
//             if (parent.namespaceURI === MATHML_NAMESPACE) {
//               return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
//             }
//             return Boolean(ALL_SVG_TAGS[tagName]);
//           }
//           if (element.namespaceURI === MATHML_NAMESPACE) {
//             if (parent.namespaceURI === HTML_NAMESPACE) {
//               return tagName === "math";
//             }
//             if (parent.namespaceURI === SVG_NAMESPACE) {
//               return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
//             }
//             return Boolean(ALL_MATHML_TAGS[tagName]);
//           }
//           if (element.namespaceURI === HTML_NAMESPACE) {
//             if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
//               return false;
//             }
//             if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
//               return false;
//             }
//             return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
//           }
//           if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
//             return true;
//           }
//           return false;
//         };
//         const _forceRemove = function _forceRemove2(node) {
//           arrayPush(DOMPurify2.removed, {
//             element: node
//           });
//           try {
//             getParentNode(node).removeChild(node);
//           } catch (_) {
//             remove(node);
//           }
//         };
//         const _removeAttribute = function _removeAttribute2(name, element) {
//           try {
//             arrayPush(DOMPurify2.removed, {
//               attribute: element.getAttributeNode(name),
//               from: element
//             });
//           } catch (_) {
//             arrayPush(DOMPurify2.removed, {
//               attribute: null,
//               from: element
//             });
//           }
//           element.removeAttribute(name);
//           if (name === "is") {
//             if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
//               try {
//                 _forceRemove(element);
//               } catch (_) {
//               }
//             } else {
//               try {
//                 element.setAttribute(name, "");
//               } catch (_) {
//               }
//             }
//           }
//         };
//         const _initDocument = function _initDocument2(dirty) {
//           let doc = null;
//           let leadingWhitespace = null;
//           if (FORCE_BODY) {
//             dirty = "<remove></remove>" + dirty;
//           } else {
//             const matches = stringMatch(dirty, /^[\r\n\t ]+/);
//             leadingWhitespace = matches && matches[0];
//           }
//           if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
//             dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
//           }
//           const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
//           if (NAMESPACE === HTML_NAMESPACE) {
//             try {
//               doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
//             } catch (_) {
//             }
//           }
//           if (!doc || !doc.documentElement) {
//             doc = implementation.createDocument(NAMESPACE, "template", null);
//             try {
//               doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
//             } catch (_) {
//             }
//           }
//           const body = doc.body || doc.documentElement;
//           if (dirty && leadingWhitespace) {
//             body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
//           }
//           if (NAMESPACE === HTML_NAMESPACE) {
//             return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
//           }
//           return WHOLE_DOCUMENT ? doc.documentElement : body;
//         };
//         const _createNodeIterator = function _createNodeIterator2(root) {
//           return createNodeIterator.call(
//             root.ownerDocument || root,
//             root,
//             // eslint-disable-next-line no-bitwise
//             NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
//             null
//           );
//         };
//         const _isClobbered = function _isClobbered2(element) {
//           return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
//         };
//         const _isNode = function _isNode2(value) {
//           return typeof Node === "function" && value instanceof Node;
//         };
//         function _executeHooks(hooks2, currentNode, data) {
//           arrayForEach(hooks2, (hook) => {
//             hook.call(DOMPurify2, currentNode, data, CONFIG);
//           });
//         }
//         const _sanitizeElements = function _sanitizeElements2(currentNode) {
//           let content = null;
//           _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
//           if (_isClobbered(currentNode)) {
//             _forceRemove(currentNode);
//             return true;
//           }
//           const tagName = transformCaseFunc(currentNode.nodeName);
//           _executeHooks(hooks.uponSanitizeElement, currentNode, {
//             tagName,
//             allowedTags: ALLOWED_TAGS
//           });
//           if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
//             _forceRemove(currentNode);
//             return true;
//           }
//           if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
//             _forceRemove(currentNode);
//             return true;
//           }
//           if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
//             _forceRemove(currentNode);
//             return true;
//           }
//           if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
//             if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
//               if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
//                 return false;
//               }
//               if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
//                 return false;
//               }
//             }
//             if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
//               const parentNode = getParentNode(currentNode) || currentNode.parentNode;
//               const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
//               if (childNodes && parentNode) {
//                 const childCount = childNodes.length;
//                 for (let i = childCount - 1; i >= 0; --i) {
//                   const childClone = cloneNode(childNodes[i], true);
//                   childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
//                   parentNode.insertBefore(childClone, getNextSibling(currentNode));
//                 }
//               }
//             }
//             _forceRemove(currentNode);
//             return true;
//           }
//           if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
//             _forceRemove(currentNode);
//             return true;
//           }
//           if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
//             _forceRemove(currentNode);
//             return true;
//           }
//           if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
//             content = currentNode.textContent;
//             arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
//               content = stringReplace(content, expr, " ");
//             });
//             if (currentNode.textContent !== content) {
//               arrayPush(DOMPurify2.removed, {
//                 element: currentNode.cloneNode()
//               });
//               currentNode.textContent = content;
//             }
//           }
//           _executeHooks(hooks.afterSanitizeElements, currentNode, null);
//           return false;
//         };
//         const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
//           if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
//             return false;
//           }
//           if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName))
//             ;
//           else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName))
//             ;
//           else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
//             if (
//               // First condition does a very basic check if a) it's basically a valid custom element tagname AND
//               // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
//               // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
//               _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
//               // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
//               lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
//             )
//               ;
//             else {
//               return false;
//             }
//           } else if (URI_SAFE_ATTRIBUTES[lcName])
//             ;
//           else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, "")))
//             ;
//           else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
//             ;
//           else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, "")))
//             ;
//           else if (value) {
//             return false;
//           } else
//             ;
//           return true;
//         };
//         const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
//           return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
//         };
//         const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
//           _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
//           const {
//             attributes
//           } = currentNode;
//           if (!attributes || _isClobbered(currentNode)) {
//             return;
//           }
//           const hookEvent = {
//             attrName: "",
//             attrValue: "",
//             keepAttr: true,
//             allowedAttributes: ALLOWED_ATTR,
//             forceKeepAttr: void 0
//           };
//           let l = attributes.length;
//           while (l--) {
//             const attr = attributes[l];
//             const {
//               name,
//               namespaceURI,
//               value: attrValue
//             } = attr;
//             const lcName = transformCaseFunc(name);
//             const initValue = attrValue;
//             let value = name === "value" ? initValue : stringTrim(initValue);
//             hookEvent.attrName = lcName;
//             hookEvent.attrValue = value;
//             hookEvent.keepAttr = true;
//             hookEvent.forceKeepAttr = void 0;
//             _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
//             value = hookEvent.attrValue;
//             if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
//               _removeAttribute(name, currentNode);
//               value = SANITIZE_NAMED_PROPS_PREFIX + value;
//             }
//             if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
//               _removeAttribute(name, currentNode);
//               continue;
//             }
//             if (hookEvent.forceKeepAttr) {
//               continue;
//             }
//             if (!hookEvent.keepAttr) {
//               _removeAttribute(name, currentNode);
//               continue;
//             }
//             if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
//               _removeAttribute(name, currentNode);
//               continue;
//             }
//             if (SAFE_FOR_TEMPLATES) {
//               arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
//                 value = stringReplace(value, expr, " ");
//               });
//             }
//             const lcTag = transformCaseFunc(currentNode.nodeName);
//             if (!_isValidAttribute(lcTag, lcName, value)) {
//               _removeAttribute(name, currentNode);
//               continue;
//             }
//             if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
//               if (namespaceURI)
//                 ;
//               else {
//                 switch (trustedTypes.getAttributeType(lcTag, lcName)) {
//                   case "TrustedHTML": {
//                     value = trustedTypesPolicy.createHTML(value);
//                     break;
//                   }
//                   case "TrustedScriptURL": {
//                     value = trustedTypesPolicy.createScriptURL(value);
//                     break;
//                   }
//                 }
//               }
//             }
//             if (value !== initValue) {
//               try {
//                 if (namespaceURI) {
//                   currentNode.setAttributeNS(namespaceURI, name, value);
//                 } else {
//                   currentNode.setAttribute(name, value);
//                 }
//                 if (_isClobbered(currentNode)) {
//                   _forceRemove(currentNode);
//                 } else {
//                   arrayPop(DOMPurify2.removed);
//                 }
//               } catch (_) {
//                 _removeAttribute(name, currentNode);
//               }
//             }
//           }
//           _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
//         };
//         const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
//           let shadowNode = null;
//           const shadowIterator = _createNodeIterator(fragment);
//           _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
//           while (shadowNode = shadowIterator.nextNode()) {
//             _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
//             _sanitizeElements(shadowNode);
//             _sanitizeAttributes(shadowNode);
//             if (shadowNode.content instanceof DocumentFragment) {
//               _sanitizeShadowDOM2(shadowNode.content);
//             }
//           }
//           _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
//         };
//         DOMPurify2.sanitize = function(dirty) {
//           let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//           let body = null;
//           let importedNode = null;
//           let currentNode = null;
//           let returnNode = null;
//           IS_EMPTY_INPUT = !dirty;
//           if (IS_EMPTY_INPUT) {
//             dirty = "<!-->";
//           }
//           if (typeof dirty !== "string" && !_isNode(dirty)) {
//             if (typeof dirty.toString === "function") {
//               dirty = dirty.toString();
//               if (typeof dirty !== "string") {
//                 throw typeErrorCreate("dirty is not a string, aborting");
//               }
//             } else {
//               throw typeErrorCreate("toString is not a function");
//             }
//           }
//           if (!DOMPurify2.isSupported) {
//             return dirty;
//           }
//           if (!SET_CONFIG) {
//             _parseConfig(cfg);
//           }
//           DOMPurify2.removed = [];
//           if (typeof dirty === "string") {
//             IN_PLACE = false;
//           }
//           if (IN_PLACE) {
//             if (dirty.nodeName) {
//               const tagName = transformCaseFunc(dirty.nodeName);
//               if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
//                 throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
//               }
//             }
//           } else if (dirty instanceof Node) {
//             body = _initDocument("<!---->");
//             importedNode = body.ownerDocument.importNode(dirty, true);
//             if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
//               body = importedNode;
//             } else if (importedNode.nodeName === "HTML") {
//               body = importedNode;
//             } else {
//               body.appendChild(importedNode);
//             }
//           } else {
//             if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
//             dirty.indexOf("<") === -1) {
//               return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
//             }
//             body = _initDocument(dirty);
//             if (!body) {
//               return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
//             }
//           }
//           if (body && FORCE_BODY) {
//             _forceRemove(body.firstChild);
//           }
//           const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
//           while (currentNode = nodeIterator.nextNode()) {
//             _sanitizeElements(currentNode);
//             _sanitizeAttributes(currentNode);
//             if (currentNode.content instanceof DocumentFragment) {
//               _sanitizeShadowDOM(currentNode.content);
//             }
//           }
//           if (IN_PLACE) {
//             return dirty;
//           }
//           if (RETURN_DOM) {
//             if (RETURN_DOM_FRAGMENT) {
//               returnNode = createDocumentFragment.call(body.ownerDocument);
//               while (body.firstChild) {
//                 returnNode.appendChild(body.firstChild);
//               }
//             } else {
//               returnNode = body;
//             }
//             if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
//               returnNode = importNode.call(originalDocument, returnNode, true);
//             }
//             return returnNode;
//           }
//           let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
//           if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
//             serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
//           }
//           if (SAFE_FOR_TEMPLATES) {
//             arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
//               serializedHTML = stringReplace(serializedHTML, expr, " ");
//             });
//           }
//           return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
//         };
//         DOMPurify2.setConfig = function() {
//           let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
//           _parseConfig(cfg);
//           SET_CONFIG = true;
//         };
//         DOMPurify2.clearConfig = function() {
//           CONFIG = null;
//           SET_CONFIG = false;
//         };
//         DOMPurify2.isValidAttribute = function(tag, attr, value) {
//           if (!CONFIG) {
//             _parseConfig({});
//           }
//           const lcTag = transformCaseFunc(tag);
//           const lcName = transformCaseFunc(attr);
//           return _isValidAttribute(lcTag, lcName, value);
//         };
//         DOMPurify2.addHook = function(entryPoint, hookFunction) {
//           if (typeof hookFunction !== "function") {
//             return;
//           }
//           arrayPush(hooks[entryPoint], hookFunction);
//         };
//         DOMPurify2.removeHook = function(entryPoint, hookFunction) {
//           if (hookFunction !== void 0) {
//             const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
//             return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
//           }
//           return arrayPop(hooks[entryPoint]);
//         };
//         DOMPurify2.removeHooks = function(entryPoint) {
//           hooks[entryPoint] = [];
//         };
//         DOMPurify2.removeAllHooks = function() {
//           hooks = _createHooksMap();
//         };
//         return DOMPurify2;
//       }
//       var purify = createDOMPurify();
//       module.exports = purify;
//     }
//   });
// 
//   // node_modules/isomorphic-dompurify/browser.js
//   var require_browser = __commonJS({
//     "node_modules/isomorphic-dompurify/browser.js"(exports, module) {
//       module.exports = window.DOMPurify || (window.DOMPurify = require_purify_cjs().default || require_purify_cjs());
//     }
//   });
// 
//   // node_modules/highlight.js/lib/core.js
//   var require_core = __commonJS({
//     "node_modules/highlight.js/lib/core.js"(exports, module) {
//       function deepFreeze(obj) {
//         if (obj instanceof Map) {
//           obj.clear = obj.delete = obj.set = function() {
//             throw new Error("map is read-only");
//           };
//         } else if (obj instanceof Set) {
//           obj.add = obj.clear = obj.delete = function() {
//             throw new Error("set is read-only");
//           };
//         }
//         Object.freeze(obj);
//         Object.getOwnPropertyNames(obj).forEach((name) => {
//           const prop = obj[name];
//           const type = typeof prop;
//           if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
//             deepFreeze(prop);
//           }
//         });
//         return obj;
//       }
//       var Response = class {
//         /**
//          * @param {CompiledMode} mode
//          */
//         constructor(mode) {
//           if (mode.data === void 0)
//             mode.data = {};
//           this.data = mode.data;
//           this.isMatchIgnored = false;
//         }
//         ignoreMatch() {
//           this.isMatchIgnored = true;
//         }
//       };
//       function escapeHTML(value) {
//         return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
//       }
//       function inherit$1(original, ...objects) {
//         const result = /* @__PURE__ */ Object.create(null);
//         for (const key in original) {
//           result[key] = original[key];
//         }
//         objects.forEach(function(obj) {
//           for (const key in obj) {
//             result[key] = obj[key];
//           }
//         });
//         return (
//           /** @type {T} */
//           result
//         );
//       }
//       var SPAN_CLOSE = "</span>";
//       var emitsWrappingTags = (node) => {
//         return !!node.scope;
//       };
//       var scopeToCSSClass = (name, { prefix }) => {
//         if (name.startsWith("language:")) {
//           return name.replace("language:", "language-");
//         }
//         if (name.includes(".")) {
//           const pieces = name.split(".");
//           return [
//             `${prefix}${pieces.shift()}`,
//             ...pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`)
//           ].join(" ");
//         }
//         return `${prefix}${name}`;
//       };
//       var HTMLRenderer = class {
//         /**
//          * Creates a new HTMLRenderer
//          *
//          * @param {Tree} parseTree - the parse tree (must support `walk` API)
//          * @param {{classPrefix: string}} options
//          */
//         constructor(parseTree, options) {
//           this.buffer = "";
//           this.classPrefix = options.classPrefix;
//           parseTree.walk(this);
//         }
//         /**
//          * Adds texts to the output stream
//          *
//          * @param {string} text */
//         addText(text) {
//           this.buffer += escapeHTML(text);
//         }
//         /**
//          * Adds a node open to the output stream (if needed)
//          *
//          * @param {Node} node */
//         openNode(node) {
//           if (!emitsWrappingTags(node))
//             return;
//           const className = scopeToCSSClass(
//             node.scope,
//             { prefix: this.classPrefix }
//           );
//           this.span(className);
//         }
//         /**
//          * Adds a node close to the output stream (if needed)
//          *
//          * @param {Node} node */
//         closeNode(node) {
//           if (!emitsWrappingTags(node))
//             return;
//           this.buffer += SPAN_CLOSE;
//         }
//         /**
//          * returns the accumulated buffer
//         */
//         value() {
//           return this.buffer;
//         }
//         // helpers
//         /**
//          * Builds a span element
//          *
//          * @param {string} className */
//         span(className) {
//           this.buffer += `<span class="${className}">`;
//         }
//       };
//       var newNode = (opts = {}) => {
//         const result = { children: [] };
//         Object.assign(result, opts);
//         return result;
//       };
//       var TokenTree = class _TokenTree {
//         constructor() {
//           this.rootNode = newNode();
//           this.stack = [this.rootNode];
//         }
//         get top() {
//           return this.stack[this.stack.length - 1];
//         }
//         get root() {
//           return this.rootNode;
//         }
//         /** @param {Node} node */
//         add(node) {
//           this.top.children.push(node);
//         }
//         /** @param {string} scope */
//         openNode(scope) {
//           const node = newNode({ scope });
//           this.add(node);
//           this.stack.push(node);
//         }
//         closeNode() {
//           if (this.stack.length > 1) {
//             return this.stack.pop();
//           }
//           return void 0;
//         }
//         closeAllNodes() {
//           while (this.closeNode())
//             ;
//         }
//         toJSON() {
//           return JSON.stringify(this.rootNode, null, 4);
//         }
//         /**
//          * @typedef { import("./html_renderer").Renderer } Renderer
//          * @param {Renderer} builder
//          */
//         walk(builder) {
//           return this.constructor._walk(builder, this.rootNode);
//         }
//         /**
//          * @param {Renderer} builder
//          * @param {Node} node
//          */
//         static _walk(builder, node) {
//           if (typeof node === "string") {
//             builder.addText(node);
//           } else if (node.children) {
//             builder.openNode(node);
//             node.children.forEach((child) => this._walk(builder, child));
//             builder.closeNode(node);
//           }
//           return builder;
//         }
//         /**
//          * @param {Node} node
//          */
//         static _collapse(node) {
//           if (typeof node === "string")
//             return;
//           if (!node.children)
//             return;
//           if (node.children.every((el) => typeof el === "string")) {
//             node.children = [node.children.join("")];
//           } else {
//             node.children.forEach((child) => {
//               _TokenTree._collapse(child);
//             });
//           }
//         }
//       };
//       var TokenTreeEmitter = class extends TokenTree {
//         /**
//          * @param {*} options
//          */
//         constructor(options) {
//           super();
//           this.options = options;
//         }
//         /**
//          * @param {string} text
//          */
//         addText(text) {
//           if (text === "") {
//             return;
//           }
//           this.add(text);
//         }
//         /** @param {string} scope */
//         startScope(scope) {
//           this.openNode(scope);
//         }
//         endScope() {
//           this.closeNode();
//         }
//         /**
//          * @param {Emitter & {root: DataNode}} emitter
//          * @param {string} name
//          */
//         __addSublanguage(emitter, name) {
//           const node = emitter.root;
//           if (name)
//             node.scope = `language:${name}`;
//           this.add(node);
//         }
//         toHTML() {
//           const renderer = new HTMLRenderer(this, this.options);
//           return renderer.value();
//         }
//         finalize() {
//           this.closeAllNodes();
//           return true;
//         }
//       };
//       function source(re) {
//         if (!re)
//           return null;
//         if (typeof re === "string")
//           return re;
//         return re.source;
//       }
//       function lookahead(re) {
//         return concat("(?=", re, ")");
//       }
//       function anyNumberOfTimes(re) {
//         return concat("(?:", re, ")*");
//       }
//       function optional(re) {
//         return concat("(?:", re, ")?");
//       }
//       function concat(...args) {
//         const joined = args.map((x) => source(x)).join("");
//         return joined;
//       }
//       function stripOptionsFromArgs(args) {
//         const opts = args[args.length - 1];
//         if (typeof opts === "object" && opts.constructor === Object) {
//           args.splice(args.length - 1, 1);
//           return opts;
//         } else {
//           return {};
//         }
//       }
//       function either(...args) {
//         const opts = stripOptionsFromArgs(args);
//         const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
//         return joined;
//       }
//       function countMatchGroups(re) {
//         return new RegExp(re.toString() + "|").exec("").length - 1;
//       }
//       function startsWith(re, lexeme) {
//         const match = re && re.exec(lexeme);
//         return match && match.index === 0;
//       }
//       var BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
//       function _rewriteBackreferences(regexps, { joinWith }) {
//         let numCaptures = 0;
//         return regexps.map((regex) => {
//           numCaptures += 1;
//           const offset = numCaptures;
//           let re = source(regex);
//           let out = "";
//           while (re.length > 0) {
//             const match = BACKREF_RE.exec(re);
//             if (!match) {
//               out += re;
//               break;
//             }
//             out += re.substring(0, match.index);
//             re = re.substring(match.index + match[0].length);
//             if (match[0][0] === "\\" && match[1]) {
//               out += "\\" + String(Number(match[1]) + offset);
//             } else {
//               out += match[0];
//               if (match[0] === "(") {
//                 numCaptures++;
//               }
//             }
//           }
//           return out;
//         }).map((re) => `(${re})`).join(joinWith);
//       }
//       var MATCH_NOTHING_RE = /\b\B/;
//       var IDENT_RE3 = "[a-zA-Z]\\w*";
//       var UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
//       var NUMBER_RE = "\\b\\d+(\\.\\d+)?";
//       var C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
//       var BINARY_NUMBER_RE = "\\b(0b[01]+)";
//       var RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
//       var SHEBANG = (opts = {}) => {
//         const beginShebang = /^#![ ]*\//;
//         if (opts.binary) {
//           opts.begin = concat(
//             beginShebang,
//             /.*\b/,
//             opts.binary,
//             /\b.*/
//           );
//         }
//         return inherit$1({
//           scope: "meta",
//           begin: beginShebang,
//           end: /$/,
//           relevance: 0,
//           /** @type {ModeCallback} */
//           "on:begin": (m, resp) => {
//             if (m.index !== 0)
//               resp.ignoreMatch();
//           }
//         }, opts);
//       };
//       var BACKSLASH_ESCAPE = {
//         begin: "\\\\[\\s\\S]",
//         relevance: 0
//       };
//       var APOS_STRING_MODE = {
//         scope: "string",
//         begin: "'",
//         end: "'",
//         illegal: "\\n",
//         contains: [BACKSLASH_ESCAPE]
//       };
//       var QUOTE_STRING_MODE = {
//         scope: "string",
//         begin: '"',
//         end: '"',
//         illegal: "\\n",
//         contains: [BACKSLASH_ESCAPE]
//       };
//       var PHRASAL_WORDS_MODE = {
//         begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
//       };
//       var COMMENT = function(begin, end, modeOptions = {}) {
//         const mode = inherit$1(
//           {
//             scope: "comment",
//             begin,
//             end,
//             contains: []
//           },
//           modeOptions
//         );
//         mode.contains.push({
//           scope: "doctag",
//           // hack to avoid the space from being included. the space is necessary to
//           // match here to prevent the plain text rule below from gobbling up doctags
//           begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
//           end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
//           excludeBegin: true,
//           relevance: 0
//         });
//         const ENGLISH_WORD = either(
//           // list of common 1 and 2 letter words in English
//           "I",
//           "a",
//           "is",
//           "so",
//           "us",
//           "to",
//           "at",
//           "if",
//           "in",
//           "it",
//           "on",
//           // note: this is not an exhaustive list of contractions, just popular ones
//           /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
//           // contractions - can't we'd they're let's, etc
//           /[A-Za-z]+[-][a-z]+/,
//           // `no-way`, etc.
//           /[A-Za-z][a-z]{2,}/
//           // allow capitalized words at beginning of sentences
//         );
//         mode.contains.push(
//           {
//             // TODO: how to include ", (, ) without breaking grammars that use these for
//             // comment delimiters?
//             // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
//             // ---
//             // this tries to find sequences of 3 english words in a row (without any
//             // "programming" type syntax) this gives us a strong signal that we've
//             // TRULY found a comment - vs perhaps scanning with the wrong language.
//             // It's possible to find something that LOOKS like the start of the
//             // comment - but then if there is no readable text - good chance it is a
//             // false match and not a comment.
//             //
//             // for a visual example please see:
//             // https://github.com/highlightjs/highlight.js/issues/2827
//             begin: concat(
//               /[ ]+/,
//               // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
//               "(",
//               ENGLISH_WORD,
//               /[.]?[:]?([.][ ]|[ ])/,
//               "){3}"
//             )
//             // look for 3 words in a row
//           }
//         );
//         return mode;
//       };
//       var C_LINE_COMMENT_MODE = COMMENT("//", "$");
//       var C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
//       var HASH_COMMENT_MODE = COMMENT("#", "$");
//       var NUMBER_MODE = {
//         scope: "number",
//         begin: NUMBER_RE,
//         relevance: 0
//       };
//       var C_NUMBER_MODE = {
//         scope: "number",
//         begin: C_NUMBER_RE,
//         relevance: 0
//       };
//       var BINARY_NUMBER_MODE = {
//         scope: "number",
//         begin: BINARY_NUMBER_RE,
//         relevance: 0
//       };
//       var REGEXP_MODE = {
//         scope: "regexp",
//         begin: /\/(?=[^/\n]*\/)/,
//         end: /\/[gimuy]*/,
//         contains: [
//           BACKSLASH_ESCAPE,
//           {
//             begin: /\[/,
//             end: /\]/,
//             relevance: 0,
//             contains: [BACKSLASH_ESCAPE]
//           }
//         ]
//       };
//       var TITLE_MODE = {
//         scope: "title",
//         begin: IDENT_RE3,
//         relevance: 0
//       };
//       var UNDERSCORE_TITLE_MODE = {
//         scope: "title",
//         begin: UNDERSCORE_IDENT_RE,
//         relevance: 0
//       };
//       var METHOD_GUARD = {
//         // excludes method names from keyword processing
//         begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
//         relevance: 0
//       };
//       var END_SAME_AS_BEGIN = function(mode) {
//         return Object.assign(
//           mode,
//           {
//             /** @type {ModeCallback} */
//             "on:begin": (m, resp) => {
//               resp.data._beginMatch = m[1];
//             },
//             /** @type {ModeCallback} */
//             "on:end": (m, resp) => {
//               if (resp.data._beginMatch !== m[1])
//                 resp.ignoreMatch();
//             }
//           }
//         );
//       };
//       var MODES3 = /* @__PURE__ */ Object.freeze({
//         __proto__: null,
//         APOS_STRING_MODE,
//         BACKSLASH_ESCAPE,
//         BINARY_NUMBER_MODE,
//         BINARY_NUMBER_RE,
//         COMMENT,
//         C_BLOCK_COMMENT_MODE,
//         C_LINE_COMMENT_MODE,
//         C_NUMBER_MODE,
//         C_NUMBER_RE,
//         END_SAME_AS_BEGIN,
//         HASH_COMMENT_MODE,
//         IDENT_RE: IDENT_RE3,
//         MATCH_NOTHING_RE,
//         METHOD_GUARD,
//         NUMBER_MODE,
//         NUMBER_RE,
//         PHRASAL_WORDS_MODE,
//         QUOTE_STRING_MODE,
//         REGEXP_MODE,
//         RE_STARTERS_RE,
//         SHEBANG,
//         TITLE_MODE,
//         UNDERSCORE_IDENT_RE,
//         UNDERSCORE_TITLE_MODE
//       });
//       function skipIfHasPrecedingDot(match, response) {
//         const before = match.input[match.index - 1];
//         if (before === ".") {
//           response.ignoreMatch();
//         }
//       }
//       function scopeClassName(mode, _parent) {
//         if (mode.className !== void 0) {
//           mode.scope = mode.className;
//           delete mode.className;
//         }
//       }
//       function beginKeywords(mode, parent) {
//         if (!parent)
//           return;
//         if (!mode.beginKeywords)
//           return;
//         mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
//         mode.__beforeBegin = skipIfHasPrecedingDot;
//         mode.keywords = mode.keywords || mode.beginKeywords;
//         delete mode.beginKeywords;
//         if (mode.relevance === void 0)
//           mode.relevance = 0;
//       }
//       function compileIllegal(mode, _parent) {
//         if (!Array.isArray(mode.illegal))
//           return;
//         mode.illegal = either(...mode.illegal);
//       }
//       function compileMatch(mode, _parent) {
//         if (!mode.match)
//           return;
//         if (mode.begin || mode.end)
//           throw new Error("begin & end are not supported with match");
//         mode.begin = mode.match;
//         delete mode.match;
//       }
//       function compileRelevance(mode, _parent) {
//         if (mode.relevance === void 0)
//           mode.relevance = 1;
//       }
//       var beforeMatchExt = (mode, parent) => {
//         if (!mode.beforeMatch)
//           return;
//         if (mode.starts)
//           throw new Error("beforeMatch cannot be used with starts");
//         const originalMode = Object.assign({}, mode);
//         Object.keys(mode).forEach((key) => {
//           delete mode[key];
//         });
//         mode.keywords = originalMode.keywords;
//         mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
//         mode.starts = {
//           relevance: 0,
//           contains: [
//             Object.assign(originalMode, { endsParent: true })
//           ]
//         };
//         mode.relevance = 0;
//         delete originalMode.beforeMatch;
//       };
//       var COMMON_KEYWORDS = [
//         "of",
//         "and",
//         "for",
//         "in",
//         "not",
//         "or",
//         "if",
//         "then",
//         "parent",
//         // common variable name
//         "list",
//         // common variable name
//         "value"
//         // common variable name
//       ];
//       var DEFAULT_KEYWORD_SCOPE = "keyword";
//       function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
//         const compiledKeywords = /* @__PURE__ */ Object.create(null);
//         if (typeof rawKeywords === "string") {
//           compileList(scopeName, rawKeywords.split(" "));
//         } else if (Array.isArray(rawKeywords)) {
//           compileList(scopeName, rawKeywords);
//         } else {
//           Object.keys(rawKeywords).forEach(function(scopeName2) {
//             Object.assign(
//               compiledKeywords,
//               compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
//             );
//           });
//         }
//         return compiledKeywords;
//         function compileList(scopeName2, keywordList) {
//           if (caseInsensitive) {
//             keywordList = keywordList.map((x) => x.toLowerCase());
//           }
//           keywordList.forEach(function(keyword) {
//             const pair = keyword.split("|");
//             compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
//           });
//         }
//       }
//       function scoreForKeyword(keyword, providedScore) {
//         if (providedScore) {
//           return Number(providedScore);
//         }
//         return commonKeyword(keyword) ? 0 : 1;
//       }
//       function commonKeyword(keyword) {
//         return COMMON_KEYWORDS.includes(keyword.toLowerCase());
//       }
//       var seenDeprecations = {};
//       var error = (message) => {
//         console.error(message);
//       };
//       var warn = (message, ...args) => {
//         console.log(`WARN: ${message}`, ...args);
//       };
//       var deprecated = (version2, message) => {
//         if (seenDeprecations[`${version2}/${message}`])
//           return;
//         console.log(`Deprecated as of ${version2}. ${message}`);
//         seenDeprecations[`${version2}/${message}`] = true;
//       };
//       var MultiClassError = new Error();
//       function remapScopeNames(mode, regexes, { key }) {
//         let offset = 0;
//         const scopeNames = mode[key];
//         const emit = {};
//         const positions = {};
//         for (let i = 1; i <= regexes.length; i++) {
//           positions[i + offset] = scopeNames[i];
//           emit[i + offset] = true;
//           offset += countMatchGroups(regexes[i - 1]);
//         }
//         mode[key] = positions;
//         mode[key]._emit = emit;
//         mode[key]._multi = true;
//       }
//       function beginMultiClass(mode) {
//         if (!Array.isArray(mode.begin))
//           return;
//         if (mode.skip || mode.excludeBegin || mode.returnBegin) {
//           error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
//           throw MultiClassError;
//         }
//         if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
//           error("beginScope must be object");
//           throw MultiClassError;
//         }
//         remapScopeNames(mode, mode.begin, { key: "beginScope" });
//         mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
//       }
//       function endMultiClass(mode) {
//         if (!Array.isArray(mode.end))
//           return;
//         if (mode.skip || mode.excludeEnd || mode.returnEnd) {
//           error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
//           throw MultiClassError;
//         }
//         if (typeof mode.endScope !== "object" || mode.endScope === null) {
//           error("endScope must be object");
//           throw MultiClassError;
//         }
//         remapScopeNames(mode, mode.end, { key: "endScope" });
//         mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
//       }
//       function scopeSugar(mode) {
//         if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
//           mode.beginScope = mode.scope;
//           delete mode.scope;
//         }
//       }
//       function MultiClass(mode) {
//         scopeSugar(mode);
//         if (typeof mode.beginScope === "string") {
//           mode.beginScope = { _wrap: mode.beginScope };
//         }
//         if (typeof mode.endScope === "string") {
//           mode.endScope = { _wrap: mode.endScope };
//         }
//         beginMultiClass(mode);
//         endMultiClass(mode);
//       }
//       function compileLanguage(language) {
//         function langRe(value, global) {
//           return new RegExp(
//             source(value),
//             "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : "")
//           );
//         }
//         class MultiRegex {
//           constructor() {
//             this.matchIndexes = {};
//             this.regexes = [];
//             this.matchAt = 1;
//             this.position = 0;
//           }
//           // @ts-ignore
//           addRule(re, opts) {
//             opts.position = this.position++;
//             this.matchIndexes[this.matchAt] = opts;
//             this.regexes.push([opts, re]);
//             this.matchAt += countMatchGroups(re) + 1;
//           }
//           compile() {
//             if (this.regexes.length === 0) {
//               this.exec = () => null;
//             }
//             const terminators = this.regexes.map((el) => el[1]);
//             this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
//             this.lastIndex = 0;
//           }
//           /** @param {string} s */
//           exec(s) {
//             this.matcherRe.lastIndex = this.lastIndex;
//             const match = this.matcherRe.exec(s);
//             if (!match) {
//               return null;
//             }
//             const i = match.findIndex((el, i2) => i2 > 0 && el !== void 0);
//             const matchData = this.matchIndexes[i];
//             match.splice(0, i);
//             return Object.assign(match, matchData);
//           }
//         }
//         class ResumableMultiRegex {
//           constructor() {
//             this.rules = [];
//             this.multiRegexes = [];
//             this.count = 0;
//             this.lastIndex = 0;
//             this.regexIndex = 0;
//           }
//           // @ts-ignore
//           getMatcher(index) {
//             if (this.multiRegexes[index])
//               return this.multiRegexes[index];
//             const matcher = new MultiRegex();
//             this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
//             matcher.compile();
//             this.multiRegexes[index] = matcher;
//             return matcher;
//           }
//           resumingScanAtSamePosition() {
//             return this.regexIndex !== 0;
//           }
//           considerAll() {
//             this.regexIndex = 0;
//           }
//           // @ts-ignore
//           addRule(re, opts) {
//             this.rules.push([re, opts]);
//             if (opts.type === "begin")
//               this.count++;
//           }
//           /** @param {string} s */
//           exec(s) {
//             const m = this.getMatcher(this.regexIndex);
//             m.lastIndex = this.lastIndex;
//             let result = m.exec(s);
//             if (this.resumingScanAtSamePosition()) {
//               if (result && result.index === this.lastIndex)
//                 ;
//               else {
//                 const m2 = this.getMatcher(0);
//                 m2.lastIndex = this.lastIndex + 1;
//                 result = m2.exec(s);
//               }
//             }
//             if (result) {
//               this.regexIndex += result.position + 1;
//               if (this.regexIndex === this.count) {
//                 this.considerAll();
//               }
//             }
//             return result;
//           }
//         }
//         function buildModeRegex(mode) {
//           const mm = new ResumableMultiRegex();
//           mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
//           if (mode.terminatorEnd) {
//             mm.addRule(mode.terminatorEnd, { type: "end" });
//           }
//           if (mode.illegal) {
//             mm.addRule(mode.illegal, { type: "illegal" });
//           }
//           return mm;
//         }
//         function compileMode(mode, parent) {
//           const cmode = (
//             /** @type CompiledMode */
//             mode
//           );
//           if (mode.isCompiled)
//             return cmode;
//           [
//             scopeClassName,
//             // do this early so compiler extensions generally don't have to worry about
//             // the distinction between match/begin
//             compileMatch,
//             MultiClass,
//             beforeMatchExt
//           ].forEach((ext) => ext(mode, parent));
//           language.compilerExtensions.forEach((ext) => ext(mode, parent));
//           mode.__beforeBegin = null;
//           [
//             beginKeywords,
//             // do this later so compiler extensions that come earlier have access to the
//             // raw array if they wanted to perhaps manipulate it, etc.
//             compileIllegal,
//             // default to 1 relevance if not specified
//             compileRelevance
//           ].forEach((ext) => ext(mode, parent));
//           mode.isCompiled = true;
//           let keywordPattern = null;
//           if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
//             mode.keywords = Object.assign({}, mode.keywords);
//             keywordPattern = mode.keywords.$pattern;
//             delete mode.keywords.$pattern;
//           }
//           keywordPattern = keywordPattern || /\w+/;
//           if (mode.keywords) {
//             mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
//           }
//           cmode.keywordPatternRe = langRe(keywordPattern, true);
//           if (parent) {
//             if (!mode.begin)
//               mode.begin = /\B|\b/;
//             cmode.beginRe = langRe(cmode.begin);
//             if (!mode.end && !mode.endsWithParent)
//               mode.end = /\B|\b/;
//             if (mode.end)
//               cmode.endRe = langRe(cmode.end);
//             cmode.terminatorEnd = source(cmode.end) || "";
//             if (mode.endsWithParent && parent.terminatorEnd) {
//               cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
//             }
//           }
//           if (mode.illegal)
//             cmode.illegalRe = langRe(
//               /** @type {RegExp | string} */
//               mode.illegal
//             );
//           if (!mode.contains)
//             mode.contains = [];
//           mode.contains = [].concat(...mode.contains.map(function(c) {
//             return expandOrCloneMode(c === "self" ? mode : c);
//           }));
//           mode.contains.forEach(function(c) {
//             compileMode(
//               /** @type Mode */
//               c,
//               cmode
//             );
//           });
//           if (mode.starts) {
//             compileMode(mode.starts, parent);
//           }
//           cmode.matcher = buildModeRegex(cmode);
//           return cmode;
//         }
//         if (!language.compilerExtensions)
//           language.compilerExtensions = [];
//         if (language.contains && language.contains.includes("self")) {
//           throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
//         }
//         language.classNameAliases = inherit$1(language.classNameAliases || {});
//         return compileMode(
//           /** @type Mode */
//           language
//         );
//       }
//       function dependencyOnParent(mode) {
//         if (!mode)
//           return false;
//         return mode.endsWithParent || dependencyOnParent(mode.starts);
//       }
//       function expandOrCloneMode(mode) {
//         if (mode.variants && !mode.cachedVariants) {
//           mode.cachedVariants = mode.variants.map(function(variant) {
//             return inherit$1(mode, { variants: null }, variant);
//           });
//         }
//         if (mode.cachedVariants) {
//           return mode.cachedVariants;
//         }
//         if (dependencyOnParent(mode)) {
//           return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
//         }
//         if (Object.isFrozen(mode)) {
//           return inherit$1(mode);
//         }
//         return mode;
//       }
//       var version = "11.11.1";
//       var HTMLInjectionError = class extends Error {
//         constructor(reason, html) {
//           super(reason);
//           this.name = "HTMLInjectionError";
//           this.html = html;
//         }
//       };
//       var escape = escapeHTML;
//       var inherit = inherit$1;
//       var NO_MATCH = Symbol("nomatch");
//       var MAX_KEYWORD_HITS = 7;
//       var HLJS = function(hljs) {
//         const languages = /* @__PURE__ */ Object.create(null);
//         const aliases = /* @__PURE__ */ Object.create(null);
//         const plugins = [];
//         let SAFE_MODE = true;
//         const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
//         const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
//         let options = {
//           ignoreUnescapedHTML: false,
//           throwUnescapedHTML: false,
//           noHighlightRe: /^(no-?highlight)$/i,
//           languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
//           classPrefix: "hljs-",
//           cssSelector: "pre code",
//           languages: null,
//           // beta configuration options, subject to change, welcome to discuss
//           // https://github.com/highlightjs/highlight.js/issues/1086
//           __emitter: TokenTreeEmitter
//         };
//         function shouldNotHighlight(languageName) {
//           return options.noHighlightRe.test(languageName);
//         }
//         function blockLanguage(block) {
//           let classes = block.className + " ";
//           classes += block.parentNode ? block.parentNode.className : "";
//           const match = options.languageDetectRe.exec(classes);
//           if (match) {
//             const language = getLanguage(match[1]);
//             if (!language) {
//               warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
//               warn("Falling back to no-highlight mode for this block.", block);
//             }
//             return language ? match[1] : "no-highlight";
//           }
//           return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
//         }
//         function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
//           let code = "";
//           let languageName = "";
//           if (typeof optionsOrCode === "object") {
//             code = codeOrLanguageName;
//             ignoreIllegals = optionsOrCode.ignoreIllegals;
//             languageName = optionsOrCode.language;
//           } else {
//             deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
//             deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
//             languageName = codeOrLanguageName;
//             code = optionsOrCode;
//           }
//           if (ignoreIllegals === void 0) {
//             ignoreIllegals = true;
//           }
//           const context = {
//             code,
//             language: languageName
//           };
//           fire("before:highlight", context);
//           const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
//           result.code = context.code;
//           fire("after:highlight", result);
//           return result;
//         }
//         function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
//           const keywordHits = /* @__PURE__ */ Object.create(null);
//           function keywordData(mode, matchText) {
//             return mode.keywords[matchText];
//           }
//           function processKeywords() {
//             if (!top.keywords) {
//               emitter.addText(modeBuffer);
//               return;
//             }
//             let lastIndex = 0;
//             top.keywordPatternRe.lastIndex = 0;
//             let match = top.keywordPatternRe.exec(modeBuffer);
//             let buf = "";
//             while (match) {
//               buf += modeBuffer.substring(lastIndex, match.index);
//               const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
//               const data = keywordData(top, word);
//               if (data) {
//                 const [kind, keywordRelevance] = data;
//                 emitter.addText(buf);
//                 buf = "";
//                 keywordHits[word] = (keywordHits[word] || 0) + 1;
//                 if (keywordHits[word] <= MAX_KEYWORD_HITS)
//                   relevance += keywordRelevance;
//                 if (kind.startsWith("_")) {
//                   buf += match[0];
//                 } else {
//                   const cssClass = language.classNameAliases[kind] || kind;
//                   emitKeyword(match[0], cssClass);
//                 }
//               } else {
//                 buf += match[0];
//               }
//               lastIndex = top.keywordPatternRe.lastIndex;
//               match = top.keywordPatternRe.exec(modeBuffer);
//             }
//             buf += modeBuffer.substring(lastIndex);
//             emitter.addText(buf);
//           }
//           function processSubLanguage() {
//             if (modeBuffer === "")
//               return;
//             let result2 = null;
//             if (typeof top.subLanguage === "string") {
//               if (!languages[top.subLanguage]) {
//                 emitter.addText(modeBuffer);
//                 return;
//               }
//               result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
//               continuations[top.subLanguage] = /** @type {CompiledMode} */
//               result2._top;
//             } else {
//               result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
//             }
//             if (top.relevance > 0) {
//               relevance += result2.relevance;
//             }
//             emitter.__addSublanguage(result2._emitter, result2.language);
//           }
//           function processBuffer() {
//             if (top.subLanguage != null) {
//               processSubLanguage();
//             } else {
//               processKeywords();
//             }
//             modeBuffer = "";
//           }
//           function emitKeyword(keyword, scope) {
//             if (keyword === "")
//               return;
//             emitter.startScope(scope);
//             emitter.addText(keyword);
//             emitter.endScope();
//           }
//           function emitMultiClass(scope, match) {
//             let i = 1;
//             const max = match.length - 1;
//             while (i <= max) {
//               if (!scope._emit[i]) {
//                 i++;
//                 continue;
//               }
//               const klass = language.classNameAliases[scope[i]] || scope[i];
//               const text = match[i];
//               if (klass) {
//                 emitKeyword(text, klass);
//               } else {
//                 modeBuffer = text;
//                 processKeywords();
//                 modeBuffer = "";
//               }
//               i++;
//             }
//           }
//           function startNewMode(mode, match) {
//             if (mode.scope && typeof mode.scope === "string") {
//               emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
//             }
//             if (mode.beginScope) {
//               if (mode.beginScope._wrap) {
//                 emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
//                 modeBuffer = "";
//               } else if (mode.beginScope._multi) {
//                 emitMultiClass(mode.beginScope, match);
//                 modeBuffer = "";
//               }
//             }
//             top = Object.create(mode, { parent: { value: top } });
//             return top;
//           }
//           function endOfMode(mode, match, matchPlusRemainder) {
//             let matched = startsWith(mode.endRe, matchPlusRemainder);
//             if (matched) {
//               if (mode["on:end"]) {
//                 const resp = new Response(mode);
//                 mode["on:end"](match, resp);
//                 if (resp.isMatchIgnored)
//                   matched = false;
//               }
//               if (matched) {
//                 while (mode.endsParent && mode.parent) {
//                   mode = mode.parent;
//                 }
//                 return mode;
//               }
//             }
//             if (mode.endsWithParent) {
//               return endOfMode(mode.parent, match, matchPlusRemainder);
//             }
//           }
//           function doIgnore(lexeme) {
//             if (top.matcher.regexIndex === 0) {
//               modeBuffer += lexeme[0];
//               return 1;
//             } else {
//               resumeScanAtSamePosition = true;
//               return 0;
//             }
//           }
//           function doBeginMatch(match) {
//             const lexeme = match[0];
//             const newMode = match.rule;
//             const resp = new Response(newMode);
//             const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
//             for (const cb of beforeCallbacks) {
//               if (!cb)
//                 continue;
//               cb(match, resp);
//               if (resp.isMatchIgnored)
//                 return doIgnore(lexeme);
//             }
//             if (newMode.skip) {
//               modeBuffer += lexeme;
//             } else {
//               if (newMode.excludeBegin) {
//                 modeBuffer += lexeme;
//               }
//               processBuffer();
//               if (!newMode.returnBegin && !newMode.excludeBegin) {
//                 modeBuffer = lexeme;
//               }
//             }
//             startNewMode(newMode, match);
//             return newMode.returnBegin ? 0 : lexeme.length;
//           }
//           function doEndMatch(match) {
//             const lexeme = match[0];
//             const matchPlusRemainder = codeToHighlight.substring(match.index);
//             const endMode = endOfMode(top, match, matchPlusRemainder);
//             if (!endMode) {
//               return NO_MATCH;
//             }
//             const origin = top;
//             if (top.endScope && top.endScope._wrap) {
//               processBuffer();
//               emitKeyword(lexeme, top.endScope._wrap);
//             } else if (top.endScope && top.endScope._multi) {
//               processBuffer();
//               emitMultiClass(top.endScope, match);
//             } else if (origin.skip) {
//               modeBuffer += lexeme;
//             } else {
//               if (!(origin.returnEnd || origin.excludeEnd)) {
//                 modeBuffer += lexeme;
//               }
//               processBuffer();
//               if (origin.excludeEnd) {
//                 modeBuffer = lexeme;
//               }
//             }
//             do {
//               if (top.scope) {
//                 emitter.closeNode();
//               }
//               if (!top.skip && !top.subLanguage) {
//                 relevance += top.relevance;
//               }
//               top = top.parent;
//             } while (top !== endMode.parent);
//             if (endMode.starts) {
//               startNewMode(endMode.starts, match);
//             }
//             return origin.returnEnd ? 0 : lexeme.length;
//           }
//           function processContinuations() {
//             const list = [];
//             for (let current = top; current !== language; current = current.parent) {
//               if (current.scope) {
//                 list.unshift(current.scope);
//               }
//             }
//             list.forEach((item) => emitter.openNode(item));
//           }
//           let lastMatch = {};
//           function processLexeme(textBeforeMatch, match) {
//             const lexeme = match && match[0];
//             modeBuffer += textBeforeMatch;
//             if (lexeme == null) {
//               processBuffer();
//               return 0;
//             }
//             if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
//               modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
//               if (!SAFE_MODE) {
//                 const err = new Error(`0 width match regex (${languageName})`);
//                 err.languageName = languageName;
//                 err.badRule = lastMatch.rule;
//                 throw err;
//               }
//               return 1;
//             }
//             lastMatch = match;
//             if (match.type === "begin") {
//               return doBeginMatch(match);
//             } else if (match.type === "illegal" && !ignoreIllegals) {
//               const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
//               err.mode = top;
//               throw err;
//             } else if (match.type === "end") {
//               const processed = doEndMatch(match);
//               if (processed !== NO_MATCH) {
//                 return processed;
//               }
//             }
//             if (match.type === "illegal" && lexeme === "") {
//               modeBuffer += "\n";
//               return 1;
//             }
//             if (iterations > 1e5 && iterations > match.index * 3) {
//               const err = new Error("potential infinite loop, way more iterations than matches");
//               throw err;
//             }
//             modeBuffer += lexeme;
//             return lexeme.length;
//           }
//           const language = getLanguage(languageName);
//           if (!language) {
//             error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
//             throw new Error('Unknown language: "' + languageName + '"');
//           }
//           const md = compileLanguage(language);
//           let result = "";
//           let top = continuation || md;
//           const continuations = {};
//           const emitter = new options.__emitter(options);
//           processContinuations();
//           let modeBuffer = "";
//           let relevance = 0;
//           let index = 0;
//           let iterations = 0;
//           let resumeScanAtSamePosition = false;
//           try {
//             if (!language.__emitTokens) {
//               top.matcher.considerAll();
//               for (; ; ) {
//                 iterations++;
//                 if (resumeScanAtSamePosition) {
//                   resumeScanAtSamePosition = false;
//                 } else {
//                   top.matcher.considerAll();
//                 }
//                 top.matcher.lastIndex = index;
//                 const match = top.matcher.exec(codeToHighlight);
//                 if (!match)
//                   break;
//                 const beforeMatch = codeToHighlight.substring(index, match.index);
//                 const processedCount = processLexeme(beforeMatch, match);
//                 index = match.index + processedCount;
//               }
//               processLexeme(codeToHighlight.substring(index));
//             } else {
//               language.__emitTokens(codeToHighlight, emitter);
//             }
//             emitter.finalize();
//             result = emitter.toHTML();
//             return {
//               language: languageName,
//               value: result,
//               relevance,
//               illegal: false,
//               _emitter: emitter,
//               _top: top
//             };
//           } catch (err) {
//             if (err.message && err.message.includes("Illegal")) {
//               return {
//                 language: languageName,
//                 value: escape(codeToHighlight),
//                 illegal: true,
//                 relevance: 0,
//                 _illegalBy: {
//                   message: err.message,
//                   index,
//                   context: codeToHighlight.slice(index - 100, index + 100),
//                   mode: err.mode,
//                   resultSoFar: result
//                 },
//                 _emitter: emitter
//               };
//             } else if (SAFE_MODE) {
//               return {
//                 language: languageName,
//                 value: escape(codeToHighlight),
//                 illegal: false,
//                 relevance: 0,
//                 errorRaised: err,
//                 _emitter: emitter,
//                 _top: top
//               };
//             } else {
//               throw err;
//             }
//           }
//         }
//         function justTextHighlightResult(code) {
//           const result = {
//             value: escape(code),
//             illegal: false,
//             relevance: 0,
//             _top: PLAINTEXT_LANGUAGE,
//             _emitter: new options.__emitter(options)
//           };
//           result._emitter.addText(code);
//           return result;
//         }
//         function highlightAuto(code, languageSubset) {
//           languageSubset = languageSubset || options.languages || Object.keys(languages);
//           const plaintext = justTextHighlightResult(code);
//           const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
//             (name) => _highlight(name, code, false)
//           );
//           results.unshift(plaintext);
//           const sorted = results.sort((a, b) => {
//             if (a.relevance !== b.relevance)
//               return b.relevance - a.relevance;
//             if (a.language && b.language) {
//               if (getLanguage(a.language).supersetOf === b.language) {
//                 return 1;
//               } else if (getLanguage(b.language).supersetOf === a.language) {
//                 return -1;
//               }
//             }
//             return 0;
//           });
//           const [best, secondBest] = sorted;
//           const result = best;
//           result.secondBest = secondBest;
//           return result;
//         }
//         function updateClassName(element, currentLang, resultLang) {
//           const language = currentLang && aliases[currentLang] || resultLang;
//           element.classList.add("hljs");
//           element.classList.add(`language-${language}`);
//         }
//         function highlightElement(element) {
//           let node = null;
//           const language = blockLanguage(element);
//           if (shouldNotHighlight(language))
//             return;
//           fire(
//             "before:highlightElement",
//             { el: element, language }
//           );
//           if (element.dataset.highlighted) {
//             console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
//             return;
//           }
//           if (element.children.length > 0) {
//             if (!options.ignoreUnescapedHTML) {
//               console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
//               console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
//               console.warn("The element with unescaped HTML:");
//               console.warn(element);
//             }
//             if (options.throwUnescapedHTML) {
//               const err = new HTMLInjectionError(
//                 "One of your code blocks includes unescaped HTML.",
//                 element.innerHTML
//               );
//               throw err;
//             }
//           }
//           node = element;
//           const text = node.textContent;
//           const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
//           element.innerHTML = result.value;
//           element.dataset.highlighted = "yes";
//           updateClassName(element, language, result.language);
//           element.result = {
//             language: result.language,
//             // TODO: remove with version 11.0
//             re: result.relevance,
//             relevance: result.relevance
//           };
//           if (result.secondBest) {
//             element.secondBest = {
//               language: result.secondBest.language,
//               relevance: result.secondBest.relevance
//             };
//           }
//           fire("after:highlightElement", { el: element, result, text });
//         }
//         function configure(userOptions) {
//           options = inherit(options, userOptions);
//         }
//         const initHighlighting = () => {
//           highlightAll();
//           deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
//         };
//         function initHighlightingOnLoad() {
//           highlightAll();
//           deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
//         }
//         let wantsHighlight = false;
//         function highlightAll() {
//           function boot() {
//             highlightAll();
//           }
//           if (document.readyState === "loading") {
//             if (!wantsHighlight) {
//               window.addEventListener("DOMContentLoaded", boot, false);
//             }
//             wantsHighlight = true;
//             return;
//           }
//           const blocks = document.querySelectorAll(options.cssSelector);
//           blocks.forEach(highlightElement);
//         }
//         function registerLanguage(languageName, languageDefinition) {
//           let lang = null;
//           try {
//             lang = languageDefinition(hljs);
//           } catch (error$1) {
//             error("Language definition for '{}' could not be registered.".replace("{}", languageName));
//             if (!SAFE_MODE) {
//               throw error$1;
//             } else {
//               error(error$1);
//             }
//             lang = PLAINTEXT_LANGUAGE;
//           }
//           if (!lang.name)
//             lang.name = languageName;
//           languages[languageName] = lang;
//           lang.rawDefinition = languageDefinition.bind(null, hljs);
//           if (lang.aliases) {
//             registerAliases(lang.aliases, { languageName });
//           }
//         }
//         function unregisterLanguage(languageName) {
//           delete languages[languageName];
//           for (const alias of Object.keys(aliases)) {
//             if (aliases[alias] === languageName) {
//               delete aliases[alias];
//             }
//           }
//         }
//         function listLanguages() {
//           return Object.keys(languages);
//         }
//         function getLanguage(name) {
//           name = (name || "").toLowerCase();
//           return languages[name] || languages[aliases[name]];
//         }
//         function registerAliases(aliasList, { languageName }) {
//           if (typeof aliasList === "string") {
//             aliasList = [aliasList];
//           }
//           aliasList.forEach((alias) => {
//             aliases[alias.toLowerCase()] = languageName;
//           });
//         }
//         function autoDetection(name) {
//           const lang = getLanguage(name);
//           return lang && !lang.disableAutodetect;
//         }
//         function upgradePluginAPI(plugin) {
//           if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
//             plugin["before:highlightElement"] = (data) => {
//               plugin["before:highlightBlock"](
//                 Object.assign({ block: data.el }, data)
//               );
//             };
//           }
//           if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
//             plugin["after:highlightElement"] = (data) => {
//               plugin["after:highlightBlock"](
//                 Object.assign({ block: data.el }, data)
//               );
//             };
//           }
//         }
//         function addPlugin(plugin) {
//           upgradePluginAPI(plugin);
//           plugins.push(plugin);
//         }
//         function removePlugin(plugin) {
//           const index = plugins.indexOf(plugin);
//           if (index !== -1) {
//             plugins.splice(index, 1);
//           }
//         }
//         function fire(event, args) {
//           const cb = event;
//           plugins.forEach(function(plugin) {
//             if (plugin[cb]) {
//               plugin[cb](args);
//             }
//           });
//         }
//         function deprecateHighlightBlock(el) {
//           deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
//           deprecated("10.7.0", "Please use highlightElement now.");
//           return highlightElement(el);
//         }
//         Object.assign(hljs, {
//           highlight: highlight2,
//           highlightAuto,
//           highlightAll,
//           highlightElement,
//           // TODO: Remove with v12 API
//           highlightBlock: deprecateHighlightBlock,
//           configure,
//           initHighlighting,
//           initHighlightingOnLoad,
//           registerLanguage,
//           unregisterLanguage,
//           listLanguages,
//           getLanguage,
//           registerAliases,
//           autoDetection,
//           inherit,
//           addPlugin,
//           removePlugin
//         });
//         hljs.debugMode = function() {
//           SAFE_MODE = false;
//         };
//         hljs.safeMode = function() {
//           SAFE_MODE = true;
//         };
//         hljs.versionString = version;
//         hljs.regex = {
//           concat,
//           lookahead,
//           either,
//           optional,
//           anyNumberOfTimes
//         };
//         for (const key in MODES3) {
//           if (typeof MODES3[key] === "object") {
//             deepFreeze(MODES3[key]);
//           }
//         }
//         Object.assign(hljs, MODES3);
//         return hljs;
//       };
//       var highlight = HLJS({});
//       highlight.newInstance = () => HLJS({});
//       module.exports = highlight;
//       highlight.HighlightJS = highlight;
//       highlight.default = highlight;
//     }
//   });
// 
//   // src/client/howToApplyCC/index.ts
//   var howToApplyCC_exports = {};
//   __export(howToApplyCC_exports, {
//     initializeHowToApplyCC: () => initializeHowToApplyCC
//   });
// 
//   // src/client/shared/managers/BaseContentManager.ts
//   var BaseContentManager = class {
//     constructor(cardRenderer, articleRenderer, eventHandler, navigationHandler, contentService, containerId) {
//       __publicField(this, "cardRenderer");
//       __publicField(this, "articleRenderer");
//       __publicField(this, "eventHandler");
//       __publicField(this, "navigationHandler");
//       __publicField(this, "contentService");
//       __publicField(this, "containerId");
//       this.cardRenderer = cardRenderer;
//       this.articleRenderer = articleRenderer;
//       this.eventHandler = eventHandler;
//       this.navigationHandler = navigationHandler;
//       this.contentService = contentService;
//       this.containerId = containerId;
//     }
//     initialize() {
//       this.renderOverviewCards();
//       this.bindEventListeners();
//     }
//     showOverview() {
//       this.renderOverviewCards();
//     }
//     renderOverviewCards() {
//       const container = document.getElementById(this.containerId);
//       if (!container) {
//         console.warn(`Container with id "${this.containerId}" not found`);
//         return;
//       }
//       const cards = this.getCards();
//       const cardsHtml = this.cardRenderer.renderCards(cards);
//       container.innerHTML = `<div class="overview-cards-grid">${cardsHtml}</div>`;
//     }
//     bindEventListeners() {
//       this.eventHandler.bindEventListeners();
//       this.navigationHandler.bindEventListeners();
//     }
//   };
// 
//   // src/client/shared/config/cardConfig.ts
//   var defaultDifficultyConfig = {
//     colors: {
//       "beginner": "#10B981",
//       "intermediate": "#F59E0B",
//       "advanced": "#EF4444",
//       "expert": "#8B5CF6"
//     },
//     labels: {
//       "beginner": "\u5165\u95E8",
//       "intermediate": "\u8FDB\u9636",
//       "advanced": "\u9AD8\u7EA7",
//       "expert": "\u4E13\u5BB6"
//     }
//   };
// 
//   // src/client/shared/renderers/BaseCardRenderer.ts
//   var BaseCardRenderer = class {
//     constructor(categoryIcons = {}, difficultyConfig = defaultDifficultyConfig) {
//       __publicField(this, "categoryIcons", {});
//       __publicField(this, "difficultyConfig");
//       this.categoryIcons = categoryIcons;
//       this.difficultyConfig = difficultyConfig;
//     }
//     renderCards(cards) {
//       return cards.map((card, index) => this.renderCard(card, index)).join("");
//     }
//     renderCard(card, index) {
//       const icon = this.categoryIcons[card.category] || "\u{1F4CB}";
//       const difficultyColor = card.difficulty ? this.difficultyConfig.colors[card.difficulty] : void 0;
//       const difficultyLabel = card.difficulty ? this.difficultyConfig.labels[card.difficulty] : void 0;
//       const sectionsHtml = this.renderSections(card.sections);
//       const difficultyHtml = difficultyLabel ? `<span class="overview-card__difficulty"${difficultyColor ? ` style="--difficulty-color: ${difficultyColor}"` : ""}>
//               ${difficultyLabel}
//             </span>` : "";
//       const readTimeHtml = card.readTime ? `<span class="overview-card__read-time">\u{1F4D6} ${card.readTime}</span>` : "";
//       const overviewHtml = card.overview ? `<div class="overview-card__overview">${card.overview}</div>` : "";
//       const sectionsBlockHtml = sectionsHtml ? `<div class="overview-card__sections">
//             <h4 class="overview-card__sections-title">\u4E3B\u8981\u5185\u5BB9\uFF1A</h4>
//             <ul class="overview-card__sections-list">
//               ${sectionsHtml}
//             </ul>
//           </div>` : "";
//       const descriptionHtml = card.description ? `<p class="overview-card__description">${card.description}</p>` : "";
//       const versionHtml = card.version ? `<span class="overview-card__version">v${card.version}</span>` : "";
//       const updatedHtml = card.lastUpdated ? `<span class="overview-card__updated">\u66F4\u65B0\u4E8E ${card.lastUpdated}</span>` : "";
//       const metaInfoHtml = versionHtml || updatedHtml ? `<div class="overview-card__meta-info">${versionHtml}${updatedHtml}</div>` : "";
//       const coverHtml = card.imageUrl ? `<div class="overview-card__cover"><img src="${card.imageUrl}" alt="${card.title}" loading="lazy" decoding="async" fetchpriority="low" /></div>` : "";
//       const animationDelay = typeof index === "number" ? index * 0.02 : 0;
//       const styleAttr = `style="--card-index: ${animationDelay}s"`;
//       return `
//       <div class="content-card overview-card" data-card-id="${card.id}" ${styleAttr}>
//         <div class="overview-card__header">
//           <div class="overview-card__title-section">
//             <div class="overview-card__icon">${icon}</div>
//             <h3 class="overview-card__title">${card.title}</h3>
//           </div>
//           <div class="overview-card__meta">
//             ${difficultyHtml}
//             ${readTimeHtml}
//           </div>
//         </div>
//         <button class="overview-card__share-btn" data-card-id="${card.id}" aria-label="\u5206\u4EAB\u6B64\u5361\u7247" title="\u5206\u4EAB">
//           <svg class="icon icon-share" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
//             <path d="M7 12l10-6M7 12l10 6M7 12v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             <rect x="3" y="4" width="4" height="4" rx="1.5" stroke="currentColor" stroke-width="2"/>
//             <rect x="17" y="10" width="4" height="4" rx="1.5" stroke="currentColor" stroke-width="2"/>
//             <rect x="3" y="16" width="4" height="4" rx="1.5" stroke="currentColor" stroke-width="2"/>
//           </svg>
//         </button>
//                 ${coverHtml}
// 
//         <div class="overview-card__content">
//           ${descriptionHtml}
//           ${overviewHtml}
//           ${sectionsBlockHtml}
// 
//           ${this.renderTipsBlock(card.tips)}
//           
//           ${this.renderTagsBlock(card.tags)}
//         </div>
//         
//         ${metaInfoHtml ? `<div class="overview-card__footer">${metaInfoHtml}</div>` : ""}
//         
//       </div>
//     `;
//     }
//     renderSections(sections) {
//       if (!sections || sections.length === 0)
//         return "";
//       return sections.map((section) => `
//       <li class="overview-card__section-item">
//         <span class="overview-card__section-title">${section.title}</span>
//         <span class="overview-card__section-content">${section.content}</span>
//       </li>
//     `).join("");
//     }
//     renderTips(tips) {
//       if (!tips || tips.length === 0)
//         return "";
//       return tips.map((tip) => `
//       <div class="overview-card__tip overview-card__tip--${tip.type}">
//         <strong class="overview-card__tip-title">${tip.title}:</strong>
//         <span class="overview-card__tip-content">${tip.content}</span>
//       </div>
//     `).join("");
//     }
//     renderTipsBlock(tips) {
//       const tipsHtml = this.renderTips(tips);
//       return tipsHtml ? `<div class="overview-card__tips">${tipsHtml}</div>` : "";
//     }
//     renderTags(tags) {
//       if (!tags || tags.length === 0)
//         return "";
//       return tags.map((tag) => `
//       <span class="overview-card__tag">${tag}</span>
//     `).join("");
//     }
//     renderTagsBlock(tags) {
//       const tagsHtml = this.renderTags(tags);
//       return tagsHtml ? `<div class="overview-card__tags">${tagsHtml}</div>` : "";
//     }
//   };
// 
//   // src/client/howToApplyCC/data/categoryConfig.ts
//   var applyCCCategoryConfig = {
//     "quick-start": "\u{1F680}",
//     "core-usage": "\u26A1",
//     "advanced": "\u{1F52C}",
//     "examples": "\u{1F4BC}",
//     "best-practices": "\u2728",
//     "integration": "\u{1F517}"
//   };
// 
//   // src/client/howToApplyCC/renderers/CardRenderer.ts
//   var HowToApplyCCCardRenderer = class extends BaseCardRenderer {
//     constructor() {
//       super(applyCCCategoryConfig);
//     }
//   };
// 
//   // src/client/bestPractices/renderers/ArticleRenderer.ts
//   var ArticleRenderer = class {
//     renderArticle(title, content) {
//       return `
//       <div class="practice-article">
//         <div class="practice-article__header">
//           <button class="practice-article__back-btn" data-action="back-to-overview">
//             \u2190 \u8FD4\u56DE\u6982\u89C8
//           </button>
//         </div>
//         
//         <div class="practice-article__content" id="markdown-content-container">
//           <!-- Markdown \u5185\u5BB9\u5C06\u5728\u8FD9\u91CC\u6E32\u67D3 -->
//         </div>
//       </div>
//     `;
//     }
//     renderLoadingState() {
//       return `
//       <div class="practice-article">
//         <div class="practice-article__header">
//           <button class="practice-article__back-btn" data-action="back-to-overview">
//             \u2190 \u8FD4\u56DE\u6982\u89C8
//           </button>
//         </div>
//         
//         <div class="practice-article__content">
//           <div class="article-skeleton">
//             <div class="skeleton-title"></div>
//             <div class="skeleton-line"></div>
//             <div class="skeleton-line"></div>
//             <div class="skeleton-diagram"></div>
//             <div class="skeleton-line"></div>
//             <div class="skeleton-line short"></div>
//           </div>
//         </div>
//       </div>
//     `;
//     }
//     renderErrorState(error) {
//       return `
//       <div class="practice-article">
//         <div class="practice-article__header">
//           <button class="practice-article__back-btn" data-action="back-to-overview">
//             \u2190 \u8FD4\u56DE\u6982\u89C8
//           </button>
//           <h2 class="practice-article__title">\u52A0\u8F7D\u5931\u8D25</h2>
//         </div>
//         
//         <div class="practice-article__content">
//           <div class="error-message">
//             <p>\u274C \u65E0\u6CD5\u52A0\u8F7D\u5185\u5BB9: ${error}</p>
//             <button onclick="location.reload()" class="retry-btn">\u91CD\u8BD5</button>
//           </div>
//         </div>
//       </div>
//     `;
//     }
//   };
// 
//   // src/client/bestPractices/styles/markdownStyles.ts
//   var markdownStyles = `
// /* Markdown \u5185\u5BB9\u5BB9\u5668 */
// .practice-article {
//   max-width: 900px;
//   margin: 0 auto;
//   padding: 20px;
//   background: #ffffff;
//   border-radius: 12px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   opacity: 0;
//   transform: translateY(8px);
//   animation: articleFadeInUp 0.28s ease forwards;
//   position: relative;
// }
// 
// .practice-article__header {
//   position: absolute;
//   top: 12px;
//   right: 12px;
//   z-index: 5;
//   background: transparent;
//   margin: 0;
//   padding: 0;
//   border-bottom: none;
// }
// 
// .practice-article__back-btn {
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   background: rgba(255, 255, 255, 0.85);
//   border: 1px solid #e5e7eb;
//   color: #374151;
//   padding: 6px 12px;
//   border-radius: 999px;
//   cursor: pointer;
//   font-size: 13px;
//   line-height: 1;
//   transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.12s ease;
//   box-shadow: 0 1px 4px rgba(17, 24, 39, 0.06);
//   backdrop-filter: saturate(1.2) blur(2px);
// }
// 
// .practice-article__back-btn:hover {
//   background: #ffffff;
//   border-color: #d1d5db;
//   transform: translateY(-1px);
//   box-shadow: 0 4px 12px rgba(17, 24, 39, 0.08);
// }
// 
// .practice-article__back-btn:active {
//   transform: translateY(0);
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
// }
// 
// .practice-article__back-btn:focus-visible {
//   outline: none;
//   box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35);
// }
// 
// .practice-article__content {
//   line-height: 1.7;
//   color: #374151;
// }
// 
// /* \u6587\u7AE0\u8FDB\u5165/\u9000\u51FA\u52A8\u753B */
// @keyframes articleFadeInUp {
//   from { opacity: 0; transform: translateY(8px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// 
// @keyframes articleFadeOutDown {
//   to { opacity: 0; transform: translateY(8px); }
// }
// 
// .practice-article.is-exiting {
//   animation: articleFadeOutDown 0.22s ease forwards;
// }
// 
// /* Markdown \u5185\u5BB9\u6837\u5F0F */
// .markdown-content {
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
// }
// 
// .markdown-content h1 {
//   font-size: 2.25rem;
//   font-weight: 700;
//   color: #1f2937;
//   margin: 0 0 24px 0;
//   padding-bottom: 12px;
//   border-bottom: 2px solid #e5e7eb;
// }
// 
// .markdown-content h2 {
//   font-size: 1.75rem;
//   font-weight: 600;
//   color: #1f2937;
//   margin: 32px 0 16px 0;
//   padding-left: 12px;
//   border-left: 4px solid #3b82f6;
// }
// 
// .markdown-content h3 {
//   font-size: 1.375rem;
//   font-weight: 600;
//   color: #1f2937;
//   margin: 24px 0 12px 0;
// }
// 
// .markdown-content h4 {
//   font-size: 1.125rem;
//   font-weight: 600;
//   color: #374151;
//   margin: 20px 0 10px 0;
// }
// 
// .markdown-content p {
//   margin-bottom: 16px;
//   line-height: 1.7;
//   color: #4b5563;
// }
// 
// .markdown-content strong {
//   font-weight: 600;
//   color: #1f2937;
// }
// 
// .markdown-content em {
//   font-style: italic;
//   color: #6b7280;
// }
// 
// /* \u5217\u8868\u6837\u5F0F */
// .markdown-content ul,
// .markdown-content ol {
//   margin: 16px 0;
//   padding-left: 24px;
// }
// 
// .markdown-content li {
//   margin-bottom: 8px;
//   line-height: 1.6;
//   color: #4b5563;
// }
// 
// .markdown-content li strong {
//   color: #1f2937;
// }
// 
// /* \u4EE3\u7801\u6837\u5F0F */
// .markdown-content code {
//   background: #f1f5f9;
//   color: #e11d48;
//   padding: 2px 6px;
//   border-radius: 4px;
//   font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
//   font-size: 0.9em;
//   border: 1px solid #e2e8f0;
// }
// 
// /* \u4EE3\u7801\u5757\u6837\u5F0F - \u5339\u914D SafeMarkdownRenderer \u751F\u6210\u7684\u7ED3\u6784 */
// .markdown-content pre.code-block {
//   background: #f8fafc;
//   border: 1px solid #e2e8f0;
//   border-radius: 8px;
//   padding: 16px;
//   margin: 20px 0;
//   overflow-x: auto;
//   position: relative;
// }
// 
// .markdown-content pre.code-block {
//   font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
//   font-size: 0.875rem;
//   line-height: 1.5;
// }
// 
// .markdown-content pre.code-block code {
//   background: none;
//   /* \u4E0D\u5F3A\u5236\u8BBE\u7F6E\u989C\u8272\uFF0C\u4EA4\u7ED9 highlight.js \u4E3B\u9898\u5904\u7406 */
//   padding: 0;
//   border: none;
//   border-radius: 0;
//   display: block;
//   white-space: pre;
// }
// 
// /* \u5F53\u672A\u542F\u7528 hljs \u65F6\u63D0\u4F9B\u4E00\u4E2A\u6E29\u548C\u7684\u56DE\u9000\u989C\u8272 */
// .markdown-content pre.code-block code:not(.hljs) {
//   color: #334155;
// }
// 
// /* \u5F53\u5E94\u7528 hljs \u65F6\uFF0C\u907F\u514D\u884C\u5185 code \u89C4\u5219\u5C06\u5176\u6E32\u67D3\u4E3A\u7EA2\u8272 */
// .markdown-content pre.code-block code.hljs {
//   color: inherit;
// }
// 
// /* \u9AA8\u67B6\u5C4F\u52A0\u8F7D\u52A8\u753B */
// .article-skeleton {
//   padding: 20px 0;
// }
// 
// .skeleton-title {
//   height: 32px;
//   background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
//   background-size: 200% 100%;
//   animation: skeleton-loading 1.5s infinite;
//   border-radius: 4px;
//   margin-bottom: 24px;
//   width: 60%;
// }
// 
// .skeleton-line {
//   height: 16px;
//   background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
//   background-size: 200% 100%;
//   animation: skeleton-loading 1.5s infinite;
//   border-radius: 4px;
//   margin-bottom: 12px;
//   width: 100%;
// }
// 
// .skeleton-line.short {
//   width: 70%;
// }
// 
// .skeleton-diagram {
//   height: 200px;
//   background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
//   background-size: 200% 100%;
//   animation: skeleton-loading 1.5s infinite;
//   border-radius: 8px;
//   margin: 24px 0;
// }
// 
// @keyframes skeleton-loading {
//   0% {
//     background-position: -200% 0;
//   }
//   100% {
//     background-position: 200% 0;
//   }
// }
// 
// /* Mermaid \u56FE\u8868\u589E\u5F3A\u6837\u5F0F */
// .markdown-content .mermaid-diagram {
//   margin: 24px 0;
//   padding: 20px;
//   background: #fafbfc;
//   border: 1px solid #e1e5e9;
//   border-radius: 8px;
//   text-align: center;
//   overflow-x: auto;
//   min-height: 100px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   transition: all 0.3s ease;
// }
// 
// .markdown-content .mermaid-diagram:hover {
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   transform: translateY(-2px);
// }
// 
// .markdown-content .mermaid-diagram.mermaid-rendered {
//   background: #ffffff;
//   border: 1px solid #e5e7eb;
//   padding: 16px;
//   cursor: pointer;
// }
// 
// .markdown-content .mermaid-diagram.mermaid-rendered::after {
//   content: "\u{1F50D} \u70B9\u51FB\u67E5\u770B\u5927\u56FE";
//   position: absolute;
//   top: 8px;
//   right: 12px;
//   font-size: 12px;
//   color: #6b7280;
//   background: rgba(255, 255, 255, 0.9);
//   padding: 4px 8px;
//   border-radius: 4px;
//   opacity: 0;
//   transition: opacity 0.3s ease;
// }
// 
// .markdown-content .mermaid-diagram.mermaid-rendered:hover::after {
//   opacity: 1;
// }
// 
// .markdown-content .mermaid-diagram svg {
//   max-width: 100%;
//   height: auto;
//   font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
//   transition: transform 0.3s ease;
// }
// 
// .markdown-content .mermaid-diagram.mermaid-rendered:hover svg {
//   transform: scale(1.02);
// }
// 
// /* \u5168\u5C4F\u67E5\u770B\u6A21\u6001\u6846 */
// .mermaid-fullscreen-modal {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.9);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
//   opacity: 0;
//   animation: fadeIn 0.3s ease forwards;
// }
// 
// .mermaid-fullscreen-content {
//   max-width: 95%;
//   max-height: 95%;
//   background: white;
//   border-radius: 8px;
//   padding: 20px;
//   position: relative;
//   overflow: auto;
//   transform: scale(0.9);
//   animation: scaleIn 0.3s ease forwards;
// }
// 
// .mermaid-fullscreen-close {
//   position: absolute;
//   top: 10px;
//   right: 15px;
//   background: none;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
//   color: #666;
//   z-index: 1001;
// }
// 
// .mermaid-fullscreen-close:hover {
//   color: #333;
// }
// 
// @keyframes fadeIn {
//   to { opacity: 1; }
// }
// 
// @keyframes scaleIn {
//   to { transform: scale(1); }
// }
// 
// /* \u590D\u5236\u6309\u94AE\u6837\u5F0F - \u9002\u914D\u65B0\u7684\u4EE3\u7801\u5757\u7ED3\u6784 */
// .markdown-content pre.code-block:hover .copy-button {
//   opacity: 1;
// }
// 
// .copy-button {
//   position: absolute;
//   top: 8px;
//   right: 8px;
//   background: #e5e7eb;
//   border: none;
//   border-radius: 4px;
//   padding: 4px 8px;
//   font-size: 12px;
//   cursor: pointer;
//   opacity: 0;
//   transition: all 0.3s ease;
//   z-index: 1;
// }
// 
// .copy-button:hover {
//   background: #d1d5db;
// }
// 
// .copy-button.copied {
//   background: #10b981;
//   color: white;
// }
// 
// /* \u8FD4\u56DE\u9876\u90E8\u6309\u94AE */
// .back-to-top {
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   background: #3b82f6;
//   color: white;
//   border: none;
//   border-radius: 50%;
//   width: 48px;
//   height: 48px;
//   cursor: pointer;
//   opacity: 0;
//   transform: translateY(20px);
//   transition: all 0.3s ease;
//   box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
// }
// 
// .back-to-top.visible {
//   opacity: 1;
//   transform: translateY(0);
// }
// 
// .back-to-top:hover {
//   background: #2563eb;
//   transform: translateY(-2px);
//   box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
// }
// 
// /* \u9605\u8BFB\u8FDB\u5EA6\u6761 */
// .reading-progress {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 0%;
//   height: 3px;
//   background: linear-gradient(90deg, #3b82f6, #8b5cf6);
//   z-index: 999;
//   transition: width 0.1s ease;
// }
// 
// /* \u94FE\u63A5\u6837\u5F0F */
// .markdown-content a {
//   color: #3b82f6;
//   text-decoration: none;
//   border-bottom: 1px solid transparent;
//   transition: all 0.2s ease;
// }
// 
// .markdown-content a:hover {
//   color: #1d4ed8;
//   border-bottom-color: #3b82f6;
// }
// 
// /* \u5F15\u7528\u5757\u6837\u5F0F */
// .markdown-content blockquote {
//   border-left: 4px solid #e5e7eb;
//   padding-left: 16px;
//   margin: 20px 0;
//   color: #6b7280;
//   font-style: italic;
//   background: #f9fafb;
//   padding: 16px;
//   border-radius: 0 8px 8px 0;
// }
// 
// /* \u8868\u683C\u6837\u5F0F */
// .markdown-content table {
//   width: 100%;
//   border-collapse: collapse;
//   margin: 20px 0;
//   background: #ffffff;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
// }
// 
// .markdown-content th,
// .markdown-content td {
//   padding: 12px 16px;
//   text-align: left;
//   border-bottom: 1px solid #e5e7eb;
// }
// 
// .markdown-content th {
//   background: #f9fafb;
//   font-weight: 600;
//   color: #374151;
// }
// 
// .markdown-content tr:hover {
//   background: #f9fafb;
// }
// 
// /* \u5206\u9694\u7EBF\u6837\u5F0F */
// .markdown-content hr {
//   border: none;
//   height: 1px;
//   background: #e5e7eb;
//   margin: 32px 0;
// }
// 
// /* \u54CD\u5E94\u5F0F\u8BBE\u8BA1 */
// @media (max-width: 768px) {
//   .practice-article {
//     margin: 10px;
//     padding: 16px;
//   }
//   .practice-article__header {
//     top: 10px;
//     right: 10px;
//     margin: 0;
//     padding: 0;
//   }
//   .practice-article__back-btn {
//     padding: 8px 12px;
//     font-size: 14px;
//   }
//   
//   .markdown-content h1 {
//     font-size: 1.875rem;
//   }
//   
//   .markdown-content h2 {
//     font-size: 1.5rem;
//   }
//   
//   .markdown-content pre {
//     padding: 12px;
//     font-size: 0.8rem;
//   }
// }
// `;
//   function injectMarkdownStyles() {
//     if (document.getElementById("markdown-styles")) {
//       return;
//     }
//     const style = document.createElement("style");
//     style.id = "markdown-styles";
//     style.textContent = markdownStyles;
//     document.head.appendChild(style);
//   }
// 
//   // shared/utils/markdownRenderer.ts
//   var import_markdown_it = __toESM(require_markdown_it());
//   var import_isomorphic_dompurify = __toESM(require_browser());
// 
//   // node_modules/highlight.js/es/core.js
//   var import_core = __toESM(require_core(), 1);
//   var core_default = import_core.default;
// 
//   // node_modules/highlight.js/es/languages/javascript.js
//   var IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
//   var KEYWORDS = [
//     "as",
//     // for exports
//     "in",
//     "of",
//     "if",
//     "for",
//     "while",
//     "finally",
//     "var",
//     "new",
//     "function",
//     "do",
//     "return",
//     "void",
//     "else",
//     "break",
//     "catch",
//     "instanceof",
//     "with",
//     "throw",
//     "case",
//     "default",
//     "try",
//     "switch",
//     "continue",
//     "typeof",
//     "delete",
//     "let",
//     "yield",
//     "const",
//     "class",
//     // JS handles these with a special rule
//     // "get",
//     // "set",
//     "debugger",
//     "async",
//     "await",
//     "static",
//     "import",
//     "from",
//     "export",
//     "extends",
//     // It's reached stage 3, which is "recommended for implementation":
//     "using"
//   ];
//   var LITERALS = [
//     "true",
//     "false",
//     "null",
//     "undefined",
//     "NaN",
//     "Infinity"
//   ];
//   var TYPES = [
//     // Fundamental objects
//     "Object",
//     "Function",
//     "Boolean",
//     "Symbol",
//     // numbers and dates
//     "Math",
//     "Date",
//     "Number",
//     "BigInt",
//     // text
//     "String",
//     "RegExp",
//     // Indexed collections
//     "Array",
//     "Float32Array",
//     "Float64Array",
//     "Int8Array",
//     "Uint8Array",
//     "Uint8ClampedArray",
//     "Int16Array",
//     "Int32Array",
//     "Uint16Array",
//     "Uint32Array",
//     "BigInt64Array",
//     "BigUint64Array",
//     // Keyed collections
//     "Set",
//     "Map",
//     "WeakSet",
//     "WeakMap",
//     // Structured data
//     "ArrayBuffer",
//     "SharedArrayBuffer",
//     "Atomics",
//     "DataView",
//     "JSON",
//     // Control abstraction objects
//     "Promise",
//     "Generator",
//     "GeneratorFunction",
//     "AsyncFunction",
//     // Reflection
//     "Reflect",
//     "Proxy",
//     // Internationalization
//     "Intl",
//     // WebAssembly
//     "WebAssembly"
//   ];
//   var ERROR_TYPES = [
//     "Error",
//     "EvalError",
//     "InternalError",
//     "RangeError",
//     "ReferenceError",
//     "SyntaxError",
//     "TypeError",
//     "URIError"
//   ];
//   var BUILT_IN_GLOBALS = [
//     "setInterval",
//     "setTimeout",
//     "clearInterval",
//     "clearTimeout",
//     "require",
//     "exports",
//     "eval",
//     "isFinite",
//     "isNaN",
//     "parseFloat",
//     "parseInt",
//     "decodeURI",
//     "decodeURIComponent",
//     "encodeURI",
//     "encodeURIComponent",
//     "escape",
//     "unescape"
//   ];
//   var BUILT_IN_VARIABLES = [
//     "arguments",
//     "this",
//     "super",
//     "console",
//     "window",
//     "document",
//     "localStorage",
//     "sessionStorage",
//     "module",
//     "global"
//     // Node.js
//   ];
//   var BUILT_INS = [].concat(
//     BUILT_IN_GLOBALS,
//     TYPES,
//     ERROR_TYPES
//   );
//   function javascript(hljs) {
//     const regex = hljs.regex;
//     const hasClosingTag = (match, { after }) => {
//       const tag = "</" + match[0].slice(1);
//       const pos = match.input.indexOf(tag, after);
//       return pos !== -1;
//     };
//     const IDENT_RE$1 = IDENT_RE;
//     const FRAGMENT = {
//       begin: "<>",
//       end: "</>"
//     };
//     const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
//     const XML_TAG = {
//       begin: /<[A-Za-z0-9\\._:-]+/,
//       end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
//       /**
//        * @param {RegExpMatchArray} match
//        * @param {CallbackResponse} response
//        */
//       isTrulyOpeningTag: (match, response) => {
//         const afterMatchIndex = match[0].length + match.index;
//         const nextChar = match.input[afterMatchIndex];
//         if (
//           // HTML should not include another raw `<` inside a tag
//           // nested type?
//           // `<Array<Array<number>>`, etc.
//           nextChar === "<" || // the , gives away that this is not HTML
//           // `<T, A extends keyof T, V>`
//           nextChar === ","
//         ) {
//           response.ignoreMatch();
//           return;
//         }
//         if (nextChar === ">") {
//           if (!hasClosingTag(match, { after: afterMatchIndex })) {
//             response.ignoreMatch();
//           }
//         }
//         let m;
//         const afterMatch = match.input.substring(afterMatchIndex);
//         if (m = afterMatch.match(/^\s*=/)) {
//           response.ignoreMatch();
//           return;
//         }
//         if (m = afterMatch.match(/^\s+extends\s+/)) {
//           if (m.index === 0) {
//             response.ignoreMatch();
//             return;
//           }
//         }
//       }
//     };
//     const KEYWORDS$1 = {
//       $pattern: IDENT_RE,
//       keyword: KEYWORDS,
//       literal: LITERALS,
//       built_in: BUILT_INS,
//       "variable.language": BUILT_IN_VARIABLES
//     };
//     const decimalDigits2 = "[0-9](_?[0-9])*";
//     const frac2 = `\\.(${decimalDigits2})`;
//     const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
//     const NUMBER = {
//       className: "number",
//       variants: [
//         // DecimalLiteral
//         { begin: `(\\b(${decimalInteger})((${frac2})|\\.)?|(${frac2}))[eE][+-]?(${decimalDigits2})\\b` },
//         { begin: `\\b(${decimalInteger})\\b((${frac2})\\b|\\.)?|(${frac2})\\b` },
//         // DecimalBigIntegerLiteral
//         { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
//         // NonDecimalIntegerLiteral
//         { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
//         { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
//         { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
//         // LegacyOctalIntegerLiteral (does not include underscore separators)
//         // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
//         { begin: "\\b0[0-7]+n?\\b" }
//       ],
//       relevance: 0
//     };
//     const SUBST = {
//       className: "subst",
//       begin: "\\$\\{",
//       end: "\\}",
//       keywords: KEYWORDS$1,
//       contains: []
//       // defined later
//     };
//     const HTML_TEMPLATE = {
//       begin: ".?html`",
//       end: "",
//       starts: {
//         end: "`",
//         returnEnd: false,
//         contains: [
//           hljs.BACKSLASH_ESCAPE,
//           SUBST
//         ],
//         subLanguage: "xml"
//       }
//     };
//     const CSS_TEMPLATE = {
//       begin: ".?css`",
//       end: "",
//       starts: {
//         end: "`",
//         returnEnd: false,
//         contains: [
//           hljs.BACKSLASH_ESCAPE,
//           SUBST
//         ],
//         subLanguage: "css"
//       }
//     };
//     const GRAPHQL_TEMPLATE = {
//       begin: ".?gql`",
//       end: "",
//       starts: {
//         end: "`",
//         returnEnd: false,
//         contains: [
//           hljs.BACKSLASH_ESCAPE,
//           SUBST
//         ],
//         subLanguage: "graphql"
//       }
//     };
//     const TEMPLATE_STRING = {
//       className: "string",
//       begin: "`",
//       end: "`",
//       contains: [
//         hljs.BACKSLASH_ESCAPE,
//         SUBST
//       ]
//     };
//     const JSDOC_COMMENT = hljs.COMMENT(
//       /\/\*\*(?!\/)/,
//       "\\*/",
//       {
//         relevance: 0,
//         contains: [
//           {
//             begin: "(?=@[A-Za-z]+)",
//             relevance: 0,
//             contains: [
//               {
//                 className: "doctag",
//                 begin: "@[A-Za-z]+"
//               },
//               {
//                 className: "type",
//                 begin: "\\{",
//                 end: "\\}",
//                 excludeEnd: true,
//                 excludeBegin: true,
//                 relevance: 0
//               },
//               {
//                 className: "variable",
//                 begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
//                 endsParent: true,
//                 relevance: 0
//               },
//               // eat spaces (not newlines) so we can find
//               // types or variables
//               {
//                 begin: /(?=[^\n])\s/,
//                 relevance: 0
//               }
//             ]
//           }
//         ]
//       }
//     );
//     const COMMENT = {
//       className: "comment",
//       variants: [
//         JSDOC_COMMENT,
//         hljs.C_BLOCK_COMMENT_MODE,
//         hljs.C_LINE_COMMENT_MODE
//       ]
//     };
//     const SUBST_INTERNALS = [
//       hljs.APOS_STRING_MODE,
//       hljs.QUOTE_STRING_MODE,
//       HTML_TEMPLATE,
//       CSS_TEMPLATE,
//       GRAPHQL_TEMPLATE,
//       TEMPLATE_STRING,
//       // Skip numbers when they are part of a variable name
//       { match: /\$\d+/ },
//       NUMBER
//       // This is intentional:
//       // See https://github.com/highlightjs/highlight.js/issues/3288
//       // hljs.REGEXP_MODE
//     ];
//     SUBST.contains = SUBST_INTERNALS.concat({
//       // we need to pair up {} inside our subst to prevent
//       // it from ending too early by matching another }
//       begin: /\{/,
//       end: /\}/,
//       keywords: KEYWORDS$1,
//       contains: [
//         "self"
//       ].concat(SUBST_INTERNALS)
//     });
//     const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
//     const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
//       // eat recursive parens in sub expressions
//       {
//         begin: /(\s*)\(/,
//         end: /\)/,
//         keywords: KEYWORDS$1,
//         contains: ["self"].concat(SUBST_AND_COMMENTS)
//       }
//     ]);
//     const PARAMS = {
//       className: "params",
//       // convert this to negative lookbehind in v12
//       begin: /(\s*)\(/,
//       // to match the parms with
//       end: /\)/,
//       excludeBegin: true,
//       excludeEnd: true,
//       keywords: KEYWORDS$1,
//       contains: PARAMS_CONTAINS
//     };
//     const CLASS_OR_EXTENDS = {
//       variants: [
//         // class Car extends vehicle
//         {
//           match: [
//             /class/,
//             /\s+/,
//             IDENT_RE$1,
//             /\s+/,
//             /extends/,
//             /\s+/,
//             regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
//           ],
//           scope: {
//             1: "keyword",
//             3: "title.class",
//             5: "keyword",
//             7: "title.class.inherited"
//           }
//         },
//         // class Car
//         {
//           match: [
//             /class/,
//             /\s+/,
//             IDENT_RE$1
//           ],
//           scope: {
//             1: "keyword",
//             3: "title.class"
//           }
//         }
//       ]
//     };
//     const CLASS_REFERENCE = {
//       relevance: 0,
//       match: regex.either(
//         // Hard coded exceptions
//         /\bJSON/,
//         // Float32Array, OutT
//         /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
//         // CSSFactory, CSSFactoryT
//         /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
//         // FPs, FPsT
//         /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
//         // P
//         // single letters are not highlighted
//         // BLAH
//         // this will be flagged as a UPPER_CASE_CONSTANT instead
//       ),
//       className: "title.class",
//       keywords: {
//         _: [
//           // se we still get relevance credit for JS library classes
//           ...TYPES,
//           ...ERROR_TYPES
//         ]
//       }
//     };
//     const USE_STRICT = {
//       label: "use_strict",
//       className: "meta",
//       relevance: 10,
//       begin: /^\s*['"]use (strict|asm)['"]/
//     };
//     const FUNCTION_DEFINITION = {
//       variants: [
//         {
//           match: [
//             /function/,
//             /\s+/,
//             IDENT_RE$1,
//             /(?=\s*\()/
//           ]
//         },
//         // anonymous function
//         {
//           match: [
//             /function/,
//             /\s*(?=\()/
//           ]
//         }
//       ],
//       className: {
//         1: "keyword",
//         3: "title.function"
//       },
//       label: "func.def",
//       contains: [PARAMS],
//       illegal: /%/
//     };
//     const UPPER_CASE_CONSTANT = {
//       relevance: 0,
//       match: /\b[A-Z][A-Z_0-9]+\b/,
//       className: "variable.constant"
//     };
//     function noneOf(list) {
//       return regex.concat("(?!", list.join("|"), ")");
//     }
//     const FUNCTION_CALL = {
//       match: regex.concat(
//         /\b/,
//         noneOf([
//           ...BUILT_IN_GLOBALS,
//           "super",
//           "import"
//         ].map((x) => `${x}\\s*\\(`)),
//         IDENT_RE$1,
//         regex.lookahead(/\s*\(/)
//       ),
//       className: "title.function",
//       relevance: 0
//     };
//     const PROPERTY_ACCESS = {
//       begin: regex.concat(/\./, regex.lookahead(
//         regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/)
//       )),
//       end: IDENT_RE$1,
//       excludeBegin: true,
//       keywords: "prototype",
//       className: "property",
//       relevance: 0
//     };
//     const GETTER_OR_SETTER = {
//       match: [
//         /get|set/,
//         /\s+/,
//         IDENT_RE$1,
//         /(?=\()/
//       ],
//       className: {
//         1: "keyword",
//         3: "title.function"
//       },
//       contains: [
//         {
//           // eat to avoid empty params
//           begin: /\(\)/
//         },
//         PARAMS
//       ]
//     };
//     const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
//     const FUNCTION_VARIABLE = {
//       match: [
//         /const|var|let/,
//         /\s+/,
//         IDENT_RE$1,
//         /\s*/,
//         /=\s*/,
//         /(async\s*)?/,
//         // async is optional
//         regex.lookahead(FUNC_LEAD_IN_RE)
//       ],
//       keywords: "async",
//       className: {
//         1: "keyword",
//         3: "title.function"
//       },
//       contains: [
//         PARAMS
//       ]
//     };
//     return {
//       name: "JavaScript",
//       aliases: ["js", "jsx", "mjs", "cjs"],
//       keywords: KEYWORDS$1,
//       // this will be extended by TypeScript
//       exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
//       illegal: /#(?![$_A-z])/,
//       contains: [
//         hljs.SHEBANG({
//           label: "shebang",
//           binary: "node",
//           relevance: 5
//         }),
//         USE_STRICT,
//         hljs.APOS_STRING_MODE,
//         hljs.QUOTE_STRING_MODE,
//         HTML_TEMPLATE,
//         CSS_TEMPLATE,
//         GRAPHQL_TEMPLATE,
//         TEMPLATE_STRING,
//         COMMENT,
//         // Skip numbers when they are part of a variable name
//         { match: /\$\d+/ },
//         NUMBER,
//         CLASS_REFERENCE,
//         {
//           scope: "attr",
//           match: IDENT_RE$1 + regex.lookahead(":"),
//           relevance: 0
//         },
//         FUNCTION_VARIABLE,
//         {
//           // "value" container
//           begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
//           keywords: "return throw case",
//           relevance: 0,
//           contains: [
//             COMMENT,
//             hljs.REGEXP_MODE,
//             {
//               className: "function",
//               // we have to count the parens to make sure we actually have the
//               // correct bounding ( ) before the =>.  There could be any number of
//               // sub-expressions inside also surrounded by parens.
//               begin: FUNC_LEAD_IN_RE,
//               returnBegin: true,
//               end: "\\s*=>",
//               contains: [
//                 {
//                   className: "params",
//                   variants: [
//                     {
//                       begin: hljs.UNDERSCORE_IDENT_RE,
//                       relevance: 0
//                     },
//                     {
//                       className: null,
//                       begin: /\(\s*\)/,
//                       skip: true
//                     },
//                     {
//                       begin: /(\s*)\(/,
//                       end: /\)/,
//                       excludeBegin: true,
//                       excludeEnd: true,
//                       keywords: KEYWORDS$1,
//                       contains: PARAMS_CONTAINS
//                     }
//                   ]
//                 }
//               ]
//             },
//             {
//               // could be a comma delimited list of params to a function call
//               begin: /,/,
//               relevance: 0
//             },
//             {
//               match: /\s+/,
//               relevance: 0
//             },
//             {
//               // JSX
//               variants: [
//                 { begin: FRAGMENT.begin, end: FRAGMENT.end },
//                 { match: XML_SELF_CLOSING },
//                 {
//                   begin: XML_TAG.begin,
//                   // we carefully check the opening tag to see if it truly
//                   // is a tag and not a false positive
//                   "on:begin": XML_TAG.isTrulyOpeningTag,
//                   end: XML_TAG.end
//                 }
//               ],
//               subLanguage: "xml",
//               contains: [
//                 {
//                   begin: XML_TAG.begin,
//                   end: XML_TAG.end,
//                   skip: true,
//                   contains: ["self"]
//                 }
//               ]
//             }
//           ]
//         },
//         FUNCTION_DEFINITION,
//         {
//           // prevent this from getting swallowed up by function
//           // since they appear "function like"
//           beginKeywords: "while if switch catch for"
//         },
//         {
//           // we have to count the parens to make sure we actually have the correct
//           // bounding ( ).  There could be any number of sub-expressions inside
//           // also surrounded by parens.
//           begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
//           // end parens
//           returnBegin: true,
//           label: "func.def",
//           contains: [
//             PARAMS,
//             hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
//           ]
//         },
//         // catch ... so it won't trigger the property rule below
//         {
//           match: /\.\.\./,
//           relevance: 0
//         },
//         PROPERTY_ACCESS,
//         // hack: prevents detection of keywords in some circumstances
//         // .keyword()
//         // $keyword = x
//         {
//           match: "\\$" + IDENT_RE$1,
//           relevance: 0
//         },
//         {
//           match: [/\bconstructor(?=\s*\()/],
//           className: { 1: "title.function" },
//           contains: [PARAMS]
//         },
//         FUNCTION_CALL,
//         UPPER_CASE_CONSTANT,
//         CLASS_OR_EXTENDS,
//         GETTER_OR_SETTER,
//         {
//           match: /\$[(.]/
//           // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
//         }
//       ]
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/typescript.js
//   var IDENT_RE2 = "[A-Za-z$_][0-9A-Za-z$_]*";
//   var KEYWORDS2 = [
//     "as",
//     // for exports
//     "in",
//     "of",
//     "if",
//     "for",
//     "while",
//     "finally",
//     "var",
//     "new",
//     "function",
//     "do",
//     "return",
//     "void",
//     "else",
//     "break",
//     "catch",
//     "instanceof",
//     "with",
//     "throw",
//     "case",
//     "default",
//     "try",
//     "switch",
//     "continue",
//     "typeof",
//     "delete",
//     "let",
//     "yield",
//     "const",
//     "class",
//     // JS handles these with a special rule
//     // "get",
//     // "set",
//     "debugger",
//     "async",
//     "await",
//     "static",
//     "import",
//     "from",
//     "export",
//     "extends",
//     // It's reached stage 3, which is "recommended for implementation":
//     "using"
//   ];
//   var LITERALS2 = [
//     "true",
//     "false",
//     "null",
//     "undefined",
//     "NaN",
//     "Infinity"
//   ];
//   var TYPES2 = [
//     // Fundamental objects
//     "Object",
//     "Function",
//     "Boolean",
//     "Symbol",
//     // numbers and dates
//     "Math",
//     "Date",
//     "Number",
//     "BigInt",
//     // text
//     "String",
//     "RegExp",
//     // Indexed collections
//     "Array",
//     "Float32Array",
//     "Float64Array",
//     "Int8Array",
//     "Uint8Array",
//     "Uint8ClampedArray",
//     "Int16Array",
//     "Int32Array",
//     "Uint16Array",
//     "Uint32Array",
//     "BigInt64Array",
//     "BigUint64Array",
//     // Keyed collections
//     "Set",
//     "Map",
//     "WeakSet",
//     "WeakMap",
//     // Structured data
//     "ArrayBuffer",
//     "SharedArrayBuffer",
//     "Atomics",
//     "DataView",
//     "JSON",
//     // Control abstraction objects
//     "Promise",
//     "Generator",
//     "GeneratorFunction",
//     "AsyncFunction",
//     // Reflection
//     "Reflect",
//     "Proxy",
//     // Internationalization
//     "Intl",
//     // WebAssembly
//     "WebAssembly"
//   ];
//   var ERROR_TYPES2 = [
//     "Error",
//     "EvalError",
//     "InternalError",
//     "RangeError",
//     "ReferenceError",
//     "SyntaxError",
//     "TypeError",
//     "URIError"
//   ];
//   var BUILT_IN_GLOBALS2 = [
//     "setInterval",
//     "setTimeout",
//     "clearInterval",
//     "clearTimeout",
//     "require",
//     "exports",
//     "eval",
//     "isFinite",
//     "isNaN",
//     "parseFloat",
//     "parseInt",
//     "decodeURI",
//     "decodeURIComponent",
//     "encodeURI",
//     "encodeURIComponent",
//     "escape",
//     "unescape"
//   ];
//   var BUILT_IN_VARIABLES2 = [
//     "arguments",
//     "this",
//     "super",
//     "console",
//     "window",
//     "document",
//     "localStorage",
//     "sessionStorage",
//     "module",
//     "global"
//     // Node.js
//   ];
//   var BUILT_INS2 = [].concat(
//     BUILT_IN_GLOBALS2,
//     TYPES2,
//     ERROR_TYPES2
//   );
//   function javascript2(hljs) {
//     const regex = hljs.regex;
//     const hasClosingTag = (match, { after }) => {
//       const tag = "</" + match[0].slice(1);
//       const pos = match.input.indexOf(tag, after);
//       return pos !== -1;
//     };
//     const IDENT_RE$1 = IDENT_RE2;
//     const FRAGMENT = {
//       begin: "<>",
//       end: "</>"
//     };
//     const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
//     const XML_TAG = {
//       begin: /<[A-Za-z0-9\\._:-]+/,
//       end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
//       /**
//        * @param {RegExpMatchArray} match
//        * @param {CallbackResponse} response
//        */
//       isTrulyOpeningTag: (match, response) => {
//         const afterMatchIndex = match[0].length + match.index;
//         const nextChar = match.input[afterMatchIndex];
//         if (
//           // HTML should not include another raw `<` inside a tag
//           // nested type?
//           // `<Array<Array<number>>`, etc.
//           nextChar === "<" || // the , gives away that this is not HTML
//           // `<T, A extends keyof T, V>`
//           nextChar === ","
//         ) {
//           response.ignoreMatch();
//           return;
//         }
//         if (nextChar === ">") {
//           if (!hasClosingTag(match, { after: afterMatchIndex })) {
//             response.ignoreMatch();
//           }
//         }
//         let m;
//         const afterMatch = match.input.substring(afterMatchIndex);
//         if (m = afterMatch.match(/^\s*=/)) {
//           response.ignoreMatch();
//           return;
//         }
//         if (m = afterMatch.match(/^\s+extends\s+/)) {
//           if (m.index === 0) {
//             response.ignoreMatch();
//             return;
//           }
//         }
//       }
//     };
//     const KEYWORDS$1 = {
//       $pattern: IDENT_RE2,
//       keyword: KEYWORDS2,
//       literal: LITERALS2,
//       built_in: BUILT_INS2,
//       "variable.language": BUILT_IN_VARIABLES2
//     };
//     const decimalDigits2 = "[0-9](_?[0-9])*";
//     const frac2 = `\\.(${decimalDigits2})`;
//     const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
//     const NUMBER = {
//       className: "number",
//       variants: [
//         // DecimalLiteral
//         { begin: `(\\b(${decimalInteger})((${frac2})|\\.)?|(${frac2}))[eE][+-]?(${decimalDigits2})\\b` },
//         { begin: `\\b(${decimalInteger})\\b((${frac2})\\b|\\.)?|(${frac2})\\b` },
//         // DecimalBigIntegerLiteral
//         { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
//         // NonDecimalIntegerLiteral
//         { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
//         { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
//         { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
//         // LegacyOctalIntegerLiteral (does not include underscore separators)
//         // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
//         { begin: "\\b0[0-7]+n?\\b" }
//       ],
//       relevance: 0
//     };
//     const SUBST = {
//       className: "subst",
//       begin: "\\$\\{",
//       end: "\\}",
//       keywords: KEYWORDS$1,
//       contains: []
//       // defined later
//     };
//     const HTML_TEMPLATE = {
//       begin: ".?html`",
//       end: "",
//       starts: {
//         end: "`",
//         returnEnd: false,
//         contains: [
//           hljs.BACKSLASH_ESCAPE,
//           SUBST
//         ],
//         subLanguage: "xml"
//       }
//     };
//     const CSS_TEMPLATE = {
//       begin: ".?css`",
//       end: "",
//       starts: {
//         end: "`",
//         returnEnd: false,
//         contains: [
//           hljs.BACKSLASH_ESCAPE,
//           SUBST
//         ],
//         subLanguage: "css"
//       }
//     };
//     const GRAPHQL_TEMPLATE = {
//       begin: ".?gql`",
//       end: "",
//       starts: {
//         end: "`",
//         returnEnd: false,
//         contains: [
//           hljs.BACKSLASH_ESCAPE,
//           SUBST
//         ],
//         subLanguage: "graphql"
//       }
//     };
//     const TEMPLATE_STRING = {
//       className: "string",
//       begin: "`",
//       end: "`",
//       contains: [
//         hljs.BACKSLASH_ESCAPE,
//         SUBST
//       ]
//     };
//     const JSDOC_COMMENT = hljs.COMMENT(
//       /\/\*\*(?!\/)/,
//       "\\*/",
//       {
//         relevance: 0,
//         contains: [
//           {
//             begin: "(?=@[A-Za-z]+)",
//             relevance: 0,
//             contains: [
//               {
//                 className: "doctag",
//                 begin: "@[A-Za-z]+"
//               },
//               {
//                 className: "type",
//                 begin: "\\{",
//                 end: "\\}",
//                 excludeEnd: true,
//                 excludeBegin: true,
//                 relevance: 0
//               },
//               {
//                 className: "variable",
//                 begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
//                 endsParent: true,
//                 relevance: 0
//               },
//               // eat spaces (not newlines) so we can find
//               // types or variables
//               {
//                 begin: /(?=[^\n])\s/,
//                 relevance: 0
//               }
//             ]
//           }
//         ]
//       }
//     );
//     const COMMENT = {
//       className: "comment",
//       variants: [
//         JSDOC_COMMENT,
//         hljs.C_BLOCK_COMMENT_MODE,
//         hljs.C_LINE_COMMENT_MODE
//       ]
//     };
//     const SUBST_INTERNALS = [
//       hljs.APOS_STRING_MODE,
//       hljs.QUOTE_STRING_MODE,
//       HTML_TEMPLATE,
//       CSS_TEMPLATE,
//       GRAPHQL_TEMPLATE,
//       TEMPLATE_STRING,
//       // Skip numbers when they are part of a variable name
//       { match: /\$\d+/ },
//       NUMBER
//       // This is intentional:
//       // See https://github.com/highlightjs/highlight.js/issues/3288
//       // hljs.REGEXP_MODE
//     ];
//     SUBST.contains = SUBST_INTERNALS.concat({
//       // we need to pair up {} inside our subst to prevent
//       // it from ending too early by matching another }
//       begin: /\{/,
//       end: /\}/,
//       keywords: KEYWORDS$1,
//       contains: [
//         "self"
//       ].concat(SUBST_INTERNALS)
//     });
//     const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
//     const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
//       // eat recursive parens in sub expressions
//       {
//         begin: /(\s*)\(/,
//         end: /\)/,
//         keywords: KEYWORDS$1,
//         contains: ["self"].concat(SUBST_AND_COMMENTS)
//       }
//     ]);
//     const PARAMS = {
//       className: "params",
//       // convert this to negative lookbehind in v12
//       begin: /(\s*)\(/,
//       // to match the parms with
//       end: /\)/,
//       excludeBegin: true,
//       excludeEnd: true,
//       keywords: KEYWORDS$1,
//       contains: PARAMS_CONTAINS
//     };
//     const CLASS_OR_EXTENDS = {
//       variants: [
//         // class Car extends vehicle
//         {
//           match: [
//             /class/,
//             /\s+/,
//             IDENT_RE$1,
//             /\s+/,
//             /extends/,
//             /\s+/,
//             regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
//           ],
//           scope: {
//             1: "keyword",
//             3: "title.class",
//             5: "keyword",
//             7: "title.class.inherited"
//           }
//         },
//         // class Car
//         {
//           match: [
//             /class/,
//             /\s+/,
//             IDENT_RE$1
//           ],
//           scope: {
//             1: "keyword",
//             3: "title.class"
//           }
//         }
//       ]
//     };
//     const CLASS_REFERENCE = {
//       relevance: 0,
//       match: regex.either(
//         // Hard coded exceptions
//         /\bJSON/,
//         // Float32Array, OutT
//         /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
//         // CSSFactory, CSSFactoryT
//         /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
//         // FPs, FPsT
//         /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
//         // P
//         // single letters are not highlighted
//         // BLAH
//         // this will be flagged as a UPPER_CASE_CONSTANT instead
//       ),
//       className: "title.class",
//       keywords: {
//         _: [
//           // se we still get relevance credit for JS library classes
//           ...TYPES2,
//           ...ERROR_TYPES2
//         ]
//       }
//     };
//     const USE_STRICT = {
//       label: "use_strict",
//       className: "meta",
//       relevance: 10,
//       begin: /^\s*['"]use (strict|asm)['"]/
//     };
//     const FUNCTION_DEFINITION = {
//       variants: [
//         {
//           match: [
//             /function/,
//             /\s+/,
//             IDENT_RE$1,
//             /(?=\s*\()/
//           ]
//         },
//         // anonymous function
//         {
//           match: [
//             /function/,
//             /\s*(?=\()/
//           ]
//         }
//       ],
//       className: {
//         1: "keyword",
//         3: "title.function"
//       },
//       label: "func.def",
//       contains: [PARAMS],
//       illegal: /%/
//     };
//     const UPPER_CASE_CONSTANT = {
//       relevance: 0,
//       match: /\b[A-Z][A-Z_0-9]+\b/,
//       className: "variable.constant"
//     };
//     function noneOf(list) {
//       return regex.concat("(?!", list.join("|"), ")");
//     }
//     const FUNCTION_CALL = {
//       match: regex.concat(
//         /\b/,
//         noneOf([
//           ...BUILT_IN_GLOBALS2,
//           "super",
//           "import"
//         ].map((x) => `${x}\\s*\\(`)),
//         IDENT_RE$1,
//         regex.lookahead(/\s*\(/)
//       ),
//       className: "title.function",
//       relevance: 0
//     };
//     const PROPERTY_ACCESS = {
//       begin: regex.concat(/\./, regex.lookahead(
//         regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/)
//       )),
//       end: IDENT_RE$1,
//       excludeBegin: true,
//       keywords: "prototype",
//       className: "property",
//       relevance: 0
//     };
//     const GETTER_OR_SETTER = {
//       match: [
//         /get|set/,
//         /\s+/,
//         IDENT_RE$1,
//         /(?=\()/
//       ],
//       className: {
//         1: "keyword",
//         3: "title.function"
//       },
//       contains: [
//         {
//           // eat to avoid empty params
//           begin: /\(\)/
//         },
//         PARAMS
//       ]
//     };
//     const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
//     const FUNCTION_VARIABLE = {
//       match: [
//         /const|var|let/,
//         /\s+/,
//         IDENT_RE$1,
//         /\s*/,
//         /=\s*/,
//         /(async\s*)?/,
//         // async is optional
//         regex.lookahead(FUNC_LEAD_IN_RE)
//       ],
//       keywords: "async",
//       className: {
//         1: "keyword",
//         3: "title.function"
//       },
//       contains: [
//         PARAMS
//       ]
//     };
//     return {
//       name: "JavaScript",
//       aliases: ["js", "jsx", "mjs", "cjs"],
//       keywords: KEYWORDS$1,
//       // this will be extended by TypeScript
//       exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
//       illegal: /#(?![$_A-z])/,
//       contains: [
//         hljs.SHEBANG({
//           label: "shebang",
//           binary: "node",
//           relevance: 5
//         }),
//         USE_STRICT,
//         hljs.APOS_STRING_MODE,
//         hljs.QUOTE_STRING_MODE,
//         HTML_TEMPLATE,
//         CSS_TEMPLATE,
//         GRAPHQL_TEMPLATE,
//         TEMPLATE_STRING,
//         COMMENT,
//         // Skip numbers when they are part of a variable name
//         { match: /\$\d+/ },
//         NUMBER,
//         CLASS_REFERENCE,
//         {
//           scope: "attr",
//           match: IDENT_RE$1 + regex.lookahead(":"),
//           relevance: 0
//         },
//         FUNCTION_VARIABLE,
//         {
//           // "value" container
//           begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
//           keywords: "return throw case",
//           relevance: 0,
//           contains: [
//             COMMENT,
//             hljs.REGEXP_MODE,
//             {
//               className: "function",
//               // we have to count the parens to make sure we actually have the
//               // correct bounding ( ) before the =>.  There could be any number of
//               // sub-expressions inside also surrounded by parens.
//               begin: FUNC_LEAD_IN_RE,
//               returnBegin: true,
//               end: "\\s*=>",
//               contains: [
//                 {
//                   className: "params",
//                   variants: [
//                     {
//                       begin: hljs.UNDERSCORE_IDENT_RE,
//                       relevance: 0
//                     },
//                     {
//                       className: null,
//                       begin: /\(\s*\)/,
//                       skip: true
//                     },
//                     {
//                       begin: /(\s*)\(/,
//                       end: /\)/,
//                       excludeBegin: true,
//                       excludeEnd: true,
//                       keywords: KEYWORDS$1,
//                       contains: PARAMS_CONTAINS
//                     }
//                   ]
//                 }
//               ]
//             },
//             {
//               // could be a comma delimited list of params to a function call
//               begin: /,/,
//               relevance: 0
//             },
//             {
//               match: /\s+/,
//               relevance: 0
//             },
//             {
//               // JSX
//               variants: [
//                 { begin: FRAGMENT.begin, end: FRAGMENT.end },
//                 { match: XML_SELF_CLOSING },
//                 {
//                   begin: XML_TAG.begin,
//                   // we carefully check the opening tag to see if it truly
//                   // is a tag and not a false positive
//                   "on:begin": XML_TAG.isTrulyOpeningTag,
//                   end: XML_TAG.end
//                 }
//               ],
//               subLanguage: "xml",
//               contains: [
//                 {
//                   begin: XML_TAG.begin,
//                   end: XML_TAG.end,
//                   skip: true,
//                   contains: ["self"]
//                 }
//               ]
//             }
//           ]
//         },
//         FUNCTION_DEFINITION,
//         {
//           // prevent this from getting swallowed up by function
//           // since they appear "function like"
//           beginKeywords: "while if switch catch for"
//         },
//         {
//           // we have to count the parens to make sure we actually have the correct
//           // bounding ( ).  There could be any number of sub-expressions inside
//           // also surrounded by parens.
//           begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
//           // end parens
//           returnBegin: true,
//           label: "func.def",
//           contains: [
//             PARAMS,
//             hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
//           ]
//         },
//         // catch ... so it won't trigger the property rule below
//         {
//           match: /\.\.\./,
//           relevance: 0
//         },
//         PROPERTY_ACCESS,
//         // hack: prevents detection of keywords in some circumstances
//         // .keyword()
//         // $keyword = x
//         {
//           match: "\\$" + IDENT_RE$1,
//           relevance: 0
//         },
//         {
//           match: [/\bconstructor(?=\s*\()/],
//           className: { 1: "title.function" },
//           contains: [PARAMS]
//         },
//         FUNCTION_CALL,
//         UPPER_CASE_CONSTANT,
//         CLASS_OR_EXTENDS,
//         GETTER_OR_SETTER,
//         {
//           match: /\$[(.]/
//           // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
//         }
//       ]
//     };
//   }
//   function typescript(hljs) {
//     const regex = hljs.regex;
//     const tsLanguage = javascript2(hljs);
//     const IDENT_RE$1 = IDENT_RE2;
//     const TYPES3 = [
//       "any",
//       "void",
//       "number",
//       "boolean",
//       "string",
//       "object",
//       "never",
//       "symbol",
//       "bigint",
//       "unknown"
//     ];
//     const NAMESPACE = {
//       begin: [
//         /namespace/,
//         /\s+/,
//         hljs.IDENT_RE
//       ],
//       beginScope: {
//         1: "keyword",
//         3: "title.class"
//       }
//     };
//     const INTERFACE = {
//       beginKeywords: "interface",
//       end: /\{/,
//       excludeEnd: true,
//       keywords: {
//         keyword: "interface extends",
//         built_in: TYPES3
//       },
//       contains: [tsLanguage.exports.CLASS_REFERENCE]
//     };
//     const USE_STRICT = {
//       className: "meta",
//       relevance: 10,
//       begin: /^\s*['"]use strict['"]/
//     };
//     const TS_SPECIFIC_KEYWORDS = [
//       "type",
//       // "namespace",
//       "interface",
//       "public",
//       "private",
//       "protected",
//       "implements",
//       "declare",
//       "abstract",
//       "readonly",
//       "enum",
//       "override",
//       "satisfies"
//     ];
//     const KEYWORDS$1 = {
//       $pattern: IDENT_RE2,
//       keyword: KEYWORDS2.concat(TS_SPECIFIC_KEYWORDS),
//       literal: LITERALS2,
//       built_in: BUILT_INS2.concat(TYPES3),
//       "variable.language": BUILT_IN_VARIABLES2
//     };
//     const DECORATOR = {
//       className: "meta",
//       begin: "@" + IDENT_RE$1
//     };
//     const swapMode = (mode, label, replacement) => {
//       const indx = mode.contains.findIndex((m) => m.label === label);
//       if (indx === -1) {
//         throw new Error("can not find mode to replace");
//       }
//       mode.contains.splice(indx, 1, replacement);
//     };
//     Object.assign(tsLanguage.keywords, KEYWORDS$1);
//     tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
//     const ATTRIBUTE_HIGHLIGHT = tsLanguage.contains.find((c) => c.scope === "attr");
//     const OPTIONAL_KEY_OR_ARGUMENT = Object.assign(
//       {},
//       ATTRIBUTE_HIGHLIGHT,
//       { match: regex.concat(IDENT_RE$1, regex.lookahead(/\s*\?:/)) }
//     );
//     tsLanguage.exports.PARAMS_CONTAINS.push([
//       tsLanguage.exports.CLASS_REFERENCE,
//       // class reference for highlighting the params types
//       ATTRIBUTE_HIGHLIGHT,
//       // highlight the params key
//       OPTIONAL_KEY_OR_ARGUMENT
//       // Added for optional property assignment highlighting
//     ]);
//     tsLanguage.contains = tsLanguage.contains.concat([
//       DECORATOR,
//       NAMESPACE,
//       INTERFACE,
//       OPTIONAL_KEY_OR_ARGUMENT
//       // Added for optional property assignment highlighting
//     ]);
//     swapMode(tsLanguage, "shebang", hljs.SHEBANG());
//     swapMode(tsLanguage, "use_strict", USE_STRICT);
//     const functionDeclaration = tsLanguage.contains.find((m) => m.label === "func.def");
//     functionDeclaration.relevance = 0;
//     Object.assign(tsLanguage, {
//       name: "TypeScript",
//       aliases: [
//         "ts",
//         "tsx",
//         "mts",
//         "cts"
//       ]
//     });
//     return tsLanguage;
//   }
// 
//   // node_modules/highlight.js/es/languages/json.js
//   function json(hljs) {
//     const ATTRIBUTE = {
//       className: "attr",
//       begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
//       relevance: 1.01
//     };
//     const PUNCTUATION = {
//       match: /[{}[\],:]/,
//       className: "punctuation",
//       relevance: 0
//     };
//     const LITERALS3 = [
//       "true",
//       "false",
//       "null"
//     ];
//     const LITERALS_MODE = {
//       scope: "literal",
//       beginKeywords: LITERALS3.join(" ")
//     };
//     return {
//       name: "JSON",
//       aliases: ["jsonc"],
//       keywords: {
//         literal: LITERALS3
//       },
//       contains: [
//         ATTRIBUTE,
//         PUNCTUATION,
//         hljs.QUOTE_STRING_MODE,
//         LITERALS_MODE,
//         hljs.C_NUMBER_MODE,
//         hljs.C_LINE_COMMENT_MODE,
//         hljs.C_BLOCK_COMMENT_MODE
//       ],
//       illegal: "\\S"
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/yaml.js
//   function yaml(hljs) {
//     const LITERALS3 = "true false yes no null";
//     const URI_CHARACTERS = "[\\w#;/?:@&=+$,.~*'()[\\]]+";
//     const KEY = {
//       className: "attr",
//       variants: [
//         // added brackets support and special char support
//         { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
//         {
//           // double quoted keys - with brackets and special char support
//           begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/
//         },
//         {
//           // single quoted keys - with brackets and special char support
//           begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/
//         }
//       ]
//     };
//     const TEMPLATE_VARIABLES = {
//       className: "template-variable",
//       variants: [
//         {
//           // jinja templates Ansible
//           begin: /\{\{/,
//           end: /\}\}/
//         },
//         {
//           // Ruby i18n
//           begin: /%\{/,
//           end: /\}/
//         }
//       ]
//     };
//     const SINGLE_QUOTE_STRING = {
//       className: "string",
//       relevance: 0,
//       begin: /'/,
//       end: /'/,
//       contains: [
//         {
//           match: /''/,
//           scope: "char.escape",
//           relevance: 0
//         }
//       ]
//     };
//     const STRING = {
//       className: "string",
//       relevance: 0,
//       variants: [
//         {
//           begin: /"/,
//           end: /"/
//         },
//         { begin: /\S+/ }
//       ],
//       contains: [
//         hljs.BACKSLASH_ESCAPE,
//         TEMPLATE_VARIABLES
//       ]
//     };
//     const CONTAINER_STRING = hljs.inherit(STRING, { variants: [
//       {
//         begin: /'/,
//         end: /'/,
//         contains: [
//           {
//             begin: /''/,
//             relevance: 0
//           }
//         ]
//       },
//       {
//         begin: /"/,
//         end: /"/
//       },
//       { begin: /[^\s,{}[\]]+/ }
//     ] });
//     const DATE_RE = "[0-9]{4}(-[0-9][0-9]){0,2}";
//     const TIME_RE = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?";
//     const FRACTION_RE = "(\\.[0-9]*)?";
//     const ZONE_RE = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?";
//     const TIMESTAMP = {
//       className: "number",
//       begin: "\\b" + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + "\\b"
//     };
//     const VALUE_CONTAINER = {
//       end: ",",
//       endsWithParent: true,
//       excludeEnd: true,
//       keywords: LITERALS3,
//       relevance: 0
//     };
//     const OBJECT = {
//       begin: /\{/,
//       end: /\}/,
//       contains: [VALUE_CONTAINER],
//       illegal: "\\n",
//       relevance: 0
//     };
//     const ARRAY = {
//       begin: "\\[",
//       end: "\\]",
//       contains: [VALUE_CONTAINER],
//       illegal: "\\n",
//       relevance: 0
//     };
//     const MODES3 = [
//       KEY,
//       {
//         className: "meta",
//         begin: "^---\\s*$",
//         relevance: 10
//       },
//       {
//         // multi line string
//         // Blocks start with a | or > followed by a newline
//         //
//         // Indentation of subsequent lines must be the same to
//         // be considered part of the block
//         className: "string",
//         begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
//       },
//       {
//         // Ruby/Rails erb
//         begin: "<%[%=-]?",
//         end: "[%-]?%>",
//         subLanguage: "ruby",
//         excludeBegin: true,
//         excludeEnd: true,
//         relevance: 0
//       },
//       {
//         // named tags
//         className: "type",
//         begin: "!\\w+!" + URI_CHARACTERS
//       },
//       // https://yaml.org/spec/1.2/spec.html#id2784064
//       {
//         // verbatim tags
//         className: "type",
//         begin: "!<" + URI_CHARACTERS + ">"
//       },
//       {
//         // primary tags
//         className: "type",
//         begin: "!" + URI_CHARACTERS
//       },
//       {
//         // secondary tags
//         className: "type",
//         begin: "!!" + URI_CHARACTERS
//       },
//       {
//         // fragment id &ref
//         className: "meta",
//         begin: "&" + hljs.UNDERSCORE_IDENT_RE + "$"
//       },
//       {
//         // fragment reference *ref
//         className: "meta",
//         begin: "\\*" + hljs.UNDERSCORE_IDENT_RE + "$"
//       },
//       {
//         // array listing
//         className: "bullet",
//         // TODO: remove |$ hack when we have proper look-ahead support
//         begin: "-(?=[ ]|$)",
//         relevance: 0
//       },
//       hljs.HASH_COMMENT_MODE,
//       {
//         beginKeywords: LITERALS3,
//         keywords: { literal: LITERALS3 }
//       },
//       TIMESTAMP,
//       // numbers are any valid C-style number that
//       // sit isolated from other words
//       {
//         className: "number",
//         begin: hljs.C_NUMBER_RE + "\\b",
//         relevance: 0
//       },
//       OBJECT,
//       ARRAY,
//       SINGLE_QUOTE_STRING,
//       STRING
//     ];
//     const VALUE_MODES = [...MODES3];
//     VALUE_MODES.pop();
//     VALUE_MODES.push(CONTAINER_STRING);
//     VALUE_CONTAINER.contains = VALUE_MODES;
//     return {
//       name: "YAML",
//       case_insensitive: true,
//       aliases: ["yml"],
//       contains: MODES3
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/markdown.js
//   function markdown(hljs) {
//     const regex = hljs.regex;
//     const INLINE_HTML = {
//       begin: /<\/?[A-Za-z_]/,
//       end: ">",
//       subLanguage: "xml",
//       relevance: 0
//     };
//     const HORIZONTAL_RULE = {
//       begin: "^[-\\*]{3,}",
//       end: "$"
//     };
//     const CODE = {
//       className: "code",
//       variants: [
//         // TODO: fix to allow these to work with sublanguage also
//         { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
//         { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
//         // needed to allow markdown as a sublanguage to work
//         {
//           begin: "```",
//           end: "```+[ ]*$"
//         },
//         {
//           begin: "~~~",
//           end: "~~~+[ ]*$"
//         },
//         { begin: "`.+?`" },
//         {
//           begin: "(?=^( {4}|\\t))",
//           // use contains to gobble up multiple lines to allow the block to be whatever size
//           // but only have a single open/close tag vs one per line
//           contains: [
//             {
//               begin: "^( {4}|\\t)",
//               end: "(\\n)$"
//             }
//           ],
//           relevance: 0
//         }
//       ]
//     };
//     const LIST = {
//       className: "bullet",
//       begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
//       end: "\\s+",
//       excludeEnd: true
//     };
//     const LINK_REFERENCE = {
//       begin: /^\[[^\n]+\]:/,
//       returnBegin: true,
//       contains: [
//         {
//           className: "symbol",
//           begin: /\[/,
//           end: /\]/,
//           excludeBegin: true,
//           excludeEnd: true
//         },
//         {
//           className: "link",
//           begin: /:\s*/,
//           end: /$/,
//           excludeBegin: true
//         }
//       ]
//     };
//     const URL_SCHEME = /[A-Za-z][A-Za-z0-9+.-]*/;
//     const LINK = {
//       variants: [
//         // too much like nested array access in so many languages
//         // to have any real relevance
//         {
//           begin: /\[.+?\]\[.*?\]/,
//           relevance: 0
//         },
//         // popular internet URLs
//         {
//           begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
//           relevance: 2
//         },
//         {
//           begin: regex.concat(/\[.+?\]\(/, URL_SCHEME, /:\/\/.*?\)/),
//           relevance: 2
//         },
//         // relative urls
//         {
//           begin: /\[.+?\]\([./?&#].*?\)/,
//           relevance: 1
//         },
//         // whatever else, lower relevance (might not be a link at all)
//         {
//           begin: /\[.*?\]\(.*?\)/,
//           relevance: 0
//         }
//       ],
//       returnBegin: true,
//       contains: [
//         {
//           // empty strings for alt or link text
//           match: /\[(?=\])/
//         },
//         {
//           className: "string",
//           relevance: 0,
//           begin: "\\[",
//           end: "\\]",
//           excludeBegin: true,
//           returnEnd: true
//         },
//         {
//           className: "link",
//           relevance: 0,
//           begin: "\\]\\(",
//           end: "\\)",
//           excludeBegin: true,
//           excludeEnd: true
//         },
//         {
//           className: "symbol",
//           relevance: 0,
//           begin: "\\]\\[",
//           end: "\\]",
//           excludeBegin: true,
//           excludeEnd: true
//         }
//       ]
//     };
//     const BOLD = {
//       className: "strong",
//       contains: [],
//       // defined later
//       variants: [
//         {
//           begin: /_{2}(?!\s)/,
//           end: /_{2}/
//         },
//         {
//           begin: /\*{2}(?!\s)/,
//           end: /\*{2}/
//         }
//       ]
//     };
//     const ITALIC = {
//       className: "emphasis",
//       contains: [],
//       // defined later
//       variants: [
//         {
//           begin: /\*(?![*\s])/,
//           end: /\*/
//         },
//         {
//           begin: /_(?![_\s])/,
//           end: /_/,
//           relevance: 0
//         }
//       ]
//     };
//     const BOLD_WITHOUT_ITALIC = hljs.inherit(BOLD, { contains: [] });
//     const ITALIC_WITHOUT_BOLD = hljs.inherit(ITALIC, { contains: [] });
//     BOLD.contains.push(ITALIC_WITHOUT_BOLD);
//     ITALIC.contains.push(BOLD_WITHOUT_ITALIC);
//     let CONTAINABLE = [
//       INLINE_HTML,
//       LINK
//     ];
//     [
//       BOLD,
//       ITALIC,
//       BOLD_WITHOUT_ITALIC,
//       ITALIC_WITHOUT_BOLD
//     ].forEach((m) => {
//       m.contains = m.contains.concat(CONTAINABLE);
//     });
//     CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);
//     const HEADER = {
//       className: "section",
//       variants: [
//         {
//           begin: "^#{1,6}",
//           end: "$",
//           contains: CONTAINABLE
//         },
//         {
//           begin: "(?=^.+?\\n[=-]{2,}$)",
//           contains: [
//             { begin: "^[=-]*$" },
//             {
//               begin: "^",
//               end: "\\n",
//               contains: CONTAINABLE
//             }
//           ]
//         }
//       ]
//     };
//     const BLOCKQUOTE = {
//       className: "quote",
//       begin: "^>\\s+",
//       contains: CONTAINABLE,
//       end: "$"
//     };
//     const ENTITY = {
//       //https://spec.commonmark.org/0.31.2/#entity-references
//       scope: "literal",
//       match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
//     };
//     return {
//       name: "Markdown",
//       aliases: [
//         "md",
//         "mkdown",
//         "mkd"
//       ],
//       contains: [
//         HEADER,
//         INLINE_HTML,
//         LIST,
//         BOLD,
//         ITALIC,
//         BLOCKQUOTE,
//         CODE,
//         HORIZONTAL_RULE,
//         LINK,
//         LINK_REFERENCE,
//         ENTITY
//       ]
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/xml.js
//   function xml(hljs) {
//     const regex = hljs.regex;
//     const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
//     const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
//     const XML_ENTITIES = {
//       className: "symbol",
//       begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
//     };
//     const XML_META_KEYWORDS = {
//       begin: /\s/,
//       contains: [
//         {
//           className: "keyword",
//           begin: /#?[a-z_][a-z1-9_-]+/,
//           illegal: /\n/
//         }
//       ]
//     };
//     const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
//       begin: /\(/,
//       end: /\)/
//     });
//     const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
//     const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
//     const TAG_INTERNALS = {
//       endsWithParent: true,
//       illegal: /</,
//       relevance: 0,
//       contains: [
//         {
//           className: "attr",
//           begin: XML_IDENT_RE,
//           relevance: 0
//         },
//         {
//           begin: /=\s*/,
//           relevance: 0,
//           contains: [
//             {
//               className: "string",
//               endsParent: true,
//               variants: [
//                 {
//                   begin: /"/,
//                   end: /"/,
//                   contains: [XML_ENTITIES]
//                 },
//                 {
//                   begin: /'/,
//                   end: /'/,
//                   contains: [XML_ENTITIES]
//                 },
//                 { begin: /[^\s"'=<>`]+/ }
//               ]
//             }
//           ]
//         }
//       ]
//     };
//     return {
//       name: "HTML, XML",
//       aliases: [
//         "html",
//         "xhtml",
//         "rss",
//         "atom",
//         "xjb",
//         "xsd",
//         "xsl",
//         "plist",
//         "wsf",
//         "svg"
//       ],
//       case_insensitive: true,
//       unicodeRegex: true,
//       contains: [
//         {
//           className: "meta",
//           begin: /<![a-z]/,
//           end: />/,
//           relevance: 10,
//           contains: [
//             XML_META_KEYWORDS,
//             QUOTE_META_STRING_MODE,
//             APOS_META_STRING_MODE,
//             XML_META_PAR_KEYWORDS,
//             {
//               begin: /\[/,
//               end: /\]/,
//               contains: [
//                 {
//                   className: "meta",
//                   begin: /<![a-z]/,
//                   end: />/,
//                   contains: [
//                     XML_META_KEYWORDS,
//                     XML_META_PAR_KEYWORDS,
//                     QUOTE_META_STRING_MODE,
//                     APOS_META_STRING_MODE
//                   ]
//                 }
//               ]
//             }
//           ]
//         },
//         hljs.COMMENT(
//           /<!--/,
//           /-->/,
//           { relevance: 10 }
//         ),
//         {
//           begin: /<!\[CDATA\[/,
//           end: /\]\]>/,
//           relevance: 10
//         },
//         XML_ENTITIES,
//         // xml processing instructions
//         {
//           className: "meta",
//           end: /\?>/,
//           variants: [
//             {
//               begin: /<\?xml/,
//               relevance: 10,
//               contains: [
//                 QUOTE_META_STRING_MODE
//               ]
//             },
//             {
//               begin: /<\?[a-z][a-z0-9]+/
//             }
//           ]
//         },
//         {
//           className: "tag",
//           /*
//           The lookahead pattern (?=...) ensures that 'begin' only matches
//           '<style' as a single word, followed by a whitespace or an
//           ending bracket.
//           */
//           begin: /<style(?=\s|>)/,
//           end: />/,
//           keywords: { name: "style" },
//           contains: [TAG_INTERNALS],
//           starts: {
//             end: /<\/style>/,
//             returnEnd: true,
//             subLanguage: [
//               "css",
//               "xml"
//             ]
//           }
//         },
//         {
//           className: "tag",
//           // See the comment in the <style tag about the lookahead pattern
//           begin: /<script(?=\s|>)/,
//           end: />/,
//           keywords: { name: "script" },
//           contains: [TAG_INTERNALS],
//           starts: {
//             end: /<\/script>/,
//             returnEnd: true,
//             subLanguage: [
//               "javascript",
//               "handlebars",
//               "xml"
//             ]
//           }
//         },
//         // we need this for now for jSX
//         {
//           className: "tag",
//           begin: /<>|<\/>/
//         },
//         // open tag
//         {
//           className: "tag",
//           begin: regex.concat(
//             /</,
//             regex.lookahead(regex.concat(
//               TAG_NAME_RE,
//               // <tag/>
//               // <tag>
//               // <tag ...
//               regex.either(/\/>/, />/, /\s/)
//             ))
//           ),
//           end: /\/?>/,
//           contains: [
//             {
//               className: "name",
//               begin: TAG_NAME_RE,
//               relevance: 0,
//               starts: TAG_INTERNALS
//             }
//           ]
//         },
//         // close tag
//         {
//           className: "tag",
//           begin: regex.concat(
//             /<\//,
//             regex.lookahead(regex.concat(
//               TAG_NAME_RE,
//               />/
//             ))
//           ),
//           contains: [
//             {
//               className: "name",
//               begin: TAG_NAME_RE,
//               relevance: 0
//             },
//             {
//               begin: />/,
//               relevance: 0,
//               endsParent: true
//             }
//           ]
//         }
//       ]
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/css.js
//   var MODES = (hljs) => {
//     return {
//       IMPORTANT: {
//         scope: "meta",
//         begin: "!important"
//       },
//       BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
//       HEXCOLOR: {
//         scope: "number",
//         begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
//       },
//       FUNCTION_DISPATCH: {
//         className: "built_in",
//         begin: /[\w-]+(?=\()/
//       },
//       ATTRIBUTE_SELECTOR_MODE: {
//         scope: "selector-attr",
//         begin: /\[/,
//         end: /\]/,
//         illegal: "$",
//         contains: [
//           hljs.APOS_STRING_MODE,
//           hljs.QUOTE_STRING_MODE
//         ]
//       },
//       CSS_NUMBER_MODE: {
//         scope: "number",
//         begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
//         relevance: 0
//       },
//       CSS_VARIABLE: {
//         className: "attr",
//         begin: /--[A-Za-z_][A-Za-z0-9_-]*/
//       }
//     };
//   };
//   var HTML_TAGS = [
//     "a",
//     "abbr",
//     "address",
//     "article",
//     "aside",
//     "audio",
//     "b",
//     "blockquote",
//     "body",
//     "button",
//     "canvas",
//     "caption",
//     "cite",
//     "code",
//     "dd",
//     "del",
//     "details",
//     "dfn",
//     "div",
//     "dl",
//     "dt",
//     "em",
//     "fieldset",
//     "figcaption",
//     "figure",
//     "footer",
//     "form",
//     "h1",
//     "h2",
//     "h3",
//     "h4",
//     "h5",
//     "h6",
//     "header",
//     "hgroup",
//     "html",
//     "i",
//     "iframe",
//     "img",
//     "input",
//     "ins",
//     "kbd",
//     "label",
//     "legend",
//     "li",
//     "main",
//     "mark",
//     "menu",
//     "nav",
//     "object",
//     "ol",
//     "optgroup",
//     "option",
//     "p",
//     "picture",
//     "q",
//     "quote",
//     "samp",
//     "section",
//     "select",
//     "source",
//     "span",
//     "strong",
//     "summary",
//     "sup",
//     "table",
//     "tbody",
//     "td",
//     "textarea",
//     "tfoot",
//     "th",
//     "thead",
//     "time",
//     "tr",
//     "ul",
//     "var",
//     "video"
//   ];
//   var SVG_TAGS = [
//     "defs",
//     "g",
//     "marker",
//     "mask",
//     "pattern",
//     "svg",
//     "switch",
//     "symbol",
//     "feBlend",
//     "feColorMatrix",
//     "feComponentTransfer",
//     "feComposite",
//     "feConvolveMatrix",
//     "feDiffuseLighting",
//     "feDisplacementMap",
//     "feFlood",
//     "feGaussianBlur",
//     "feImage",
//     "feMerge",
//     "feMorphology",
//     "feOffset",
//     "feSpecularLighting",
//     "feTile",
//     "feTurbulence",
//     "linearGradient",
//     "radialGradient",
//     "stop",
//     "circle",
//     "ellipse",
//     "image",
//     "line",
//     "path",
//     "polygon",
//     "polyline",
//     "rect",
//     "text",
//     "use",
//     "textPath",
//     "tspan",
//     "foreignObject",
//     "clipPath"
//   ];
//   var TAGS = [
//     ...HTML_TAGS,
//     ...SVG_TAGS
//   ];
//   var MEDIA_FEATURES = [
//     "any-hover",
//     "any-pointer",
//     "aspect-ratio",
//     "color",
//     "color-gamut",
//     "color-index",
//     "device-aspect-ratio",
//     "device-height",
//     "device-width",
//     "display-mode",
//     "forced-colors",
//     "grid",
//     "height",
//     "hover",
//     "inverted-colors",
//     "monochrome",
//     "orientation",
//     "overflow-block",
//     "overflow-inline",
//     "pointer",
//     "prefers-color-scheme",
//     "prefers-contrast",
//     "prefers-reduced-motion",
//     "prefers-reduced-transparency",
//     "resolution",
//     "scan",
//     "scripting",
//     "update",
//     "width",
//     // TODO: find a better solution?
//     "min-width",
//     "max-width",
//     "min-height",
//     "max-height"
//   ].sort().reverse();
//   var PSEUDO_CLASSES = [
//     "active",
//     "any-link",
//     "blank",
//     "checked",
//     "current",
//     "default",
//     "defined",
//     "dir",
//     // dir()
//     "disabled",
//     "drop",
//     "empty",
//     "enabled",
//     "first",
//     "first-child",
//     "first-of-type",
//     "fullscreen",
//     "future",
//     "focus",
//     "focus-visible",
//     "focus-within",
//     "has",
//     // has()
//     "host",
//     // host or host()
//     "host-context",
//     // host-context()
//     "hover",
//     "indeterminate",
//     "in-range",
//     "invalid",
//     "is",
//     // is()
//     "lang",
//     // lang()
//     "last-child",
//     "last-of-type",
//     "left",
//     "link",
//     "local-link",
//     "not",
//     // not()
//     "nth-child",
//     // nth-child()
//     "nth-col",
//     // nth-col()
//     "nth-last-child",
//     // nth-last-child()
//     "nth-last-col",
//     // nth-last-col()
//     "nth-last-of-type",
//     //nth-last-of-type()
//     "nth-of-type",
//     //nth-of-type()
//     "only-child",
//     "only-of-type",
//     "optional",
//     "out-of-range",
//     "past",
//     "placeholder-shown",
//     "read-only",
//     "read-write",
//     "required",
//     "right",
//     "root",
//     "scope",
//     "target",
//     "target-within",
//     "user-invalid",
//     "valid",
//     "visited",
//     "where"
//     // where()
//   ].sort().reverse();
//   var PSEUDO_ELEMENTS = [
//     "after",
//     "backdrop",
//     "before",
//     "cue",
//     "cue-region",
//     "first-letter",
//     "first-line",
//     "grammar-error",
//     "marker",
//     "part",
//     "placeholder",
//     "selection",
//     "slotted",
//     "spelling-error"
//   ].sort().reverse();
//   var ATTRIBUTES = [
//     "accent-color",
//     "align-content",
//     "align-items",
//     "align-self",
//     "alignment-baseline",
//     "all",
//     "anchor-name",
//     "animation",
//     "animation-composition",
//     "animation-delay",
//     "animation-direction",
//     "animation-duration",
//     "animation-fill-mode",
//     "animation-iteration-count",
//     "animation-name",
//     "animation-play-state",
//     "animation-range",
//     "animation-range-end",
//     "animation-range-start",
//     "animation-timeline",
//     "animation-timing-function",
//     "appearance",
//     "aspect-ratio",
//     "backdrop-filter",
//     "backface-visibility",
//     "background",
//     "background-attachment",
//     "background-blend-mode",
//     "background-clip",
//     "background-color",
//     "background-image",
//     "background-origin",
//     "background-position",
//     "background-position-x",
//     "background-position-y",
//     "background-repeat",
//     "background-size",
//     "baseline-shift",
//     "block-size",
//     "border",
//     "border-block",
//     "border-block-color",
//     "border-block-end",
//     "border-block-end-color",
//     "border-block-end-style",
//     "border-block-end-width",
//     "border-block-start",
//     "border-block-start-color",
//     "border-block-start-style",
//     "border-block-start-width",
//     "border-block-style",
//     "border-block-width",
//     "border-bottom",
//     "border-bottom-color",
//     "border-bottom-left-radius",
//     "border-bottom-right-radius",
//     "border-bottom-style",
//     "border-bottom-width",
//     "border-collapse",
//     "border-color",
//     "border-end-end-radius",
//     "border-end-start-radius",
//     "border-image",
//     "border-image-outset",
//     "border-image-repeat",
//     "border-image-slice",
//     "border-image-source",
//     "border-image-width",
//     "border-inline",
//     "border-inline-color",
//     "border-inline-end",
//     "border-inline-end-color",
//     "border-inline-end-style",
//     "border-inline-end-width",
//     "border-inline-start",
//     "border-inline-start-color",
//     "border-inline-start-style",
//     "border-inline-start-width",
//     "border-inline-style",
//     "border-inline-width",
//     "border-left",
//     "border-left-color",
//     "border-left-style",
//     "border-left-width",
//     "border-radius",
//     "border-right",
//     "border-right-color",
//     "border-right-style",
//     "border-right-width",
//     "border-spacing",
//     "border-start-end-radius",
//     "border-start-start-radius",
//     "border-style",
//     "border-top",
//     "border-top-color",
//     "border-top-left-radius",
//     "border-top-right-radius",
//     "border-top-style",
//     "border-top-width",
//     "border-width",
//     "bottom",
//     "box-align",
//     "box-decoration-break",
//     "box-direction",
//     "box-flex",
//     "box-flex-group",
//     "box-lines",
//     "box-ordinal-group",
//     "box-orient",
//     "box-pack",
//     "box-shadow",
//     "box-sizing",
//     "break-after",
//     "break-before",
//     "break-inside",
//     "caption-side",
//     "caret-color",
//     "clear",
//     "clip",
//     "clip-path",
//     "clip-rule",
//     "color",
//     "color-interpolation",
//     "color-interpolation-filters",
//     "color-profile",
//     "color-rendering",
//     "color-scheme",
//     "column-count",
//     "column-fill",
//     "column-gap",
//     "column-rule",
//     "column-rule-color",
//     "column-rule-style",
//     "column-rule-width",
//     "column-span",
//     "column-width",
//     "columns",
//     "contain",
//     "contain-intrinsic-block-size",
//     "contain-intrinsic-height",
//     "contain-intrinsic-inline-size",
//     "contain-intrinsic-size",
//     "contain-intrinsic-width",
//     "container",
//     "container-name",
//     "container-type",
//     "content",
//     "content-visibility",
//     "counter-increment",
//     "counter-reset",
//     "counter-set",
//     "cue",
//     "cue-after",
//     "cue-before",
//     "cursor",
//     "cx",
//     "cy",
//     "direction",
//     "display",
//     "dominant-baseline",
//     "empty-cells",
//     "enable-background",
//     "field-sizing",
//     "fill",
//     "fill-opacity",
//     "fill-rule",
//     "filter",
//     "flex",
//     "flex-basis",
//     "flex-direction",
//     "flex-flow",
//     "flex-grow",
//     "flex-shrink",
//     "flex-wrap",
//     "float",
//     "flood-color",
//     "flood-opacity",
//     "flow",
//     "font",
//     "font-display",
//     "font-family",
//     "font-feature-settings",
//     "font-kerning",
//     "font-language-override",
//     "font-optical-sizing",
//     "font-palette",
//     "font-size",
//     "font-size-adjust",
//     "font-smooth",
//     "font-smoothing",
//     "font-stretch",
//     "font-style",
//     "font-synthesis",
//     "font-synthesis-position",
//     "font-synthesis-small-caps",
//     "font-synthesis-style",
//     "font-synthesis-weight",
//     "font-variant",
//     "font-variant-alternates",
//     "font-variant-caps",
//     "font-variant-east-asian",
//     "font-variant-emoji",
//     "font-variant-ligatures",
//     "font-variant-numeric",
//     "font-variant-position",
//     "font-variation-settings",
//     "font-weight",
//     "forced-color-adjust",
//     "gap",
//     "glyph-orientation-horizontal",
//     "glyph-orientation-vertical",
//     "grid",
//     "grid-area",
//     "grid-auto-columns",
//     "grid-auto-flow",
//     "grid-auto-rows",
//     "grid-column",
//     "grid-column-end",
//     "grid-column-start",
//     "grid-gap",
//     "grid-row",
//     "grid-row-end",
//     "grid-row-start",
//     "grid-template",
//     "grid-template-areas",
//     "grid-template-columns",
//     "grid-template-rows",
//     "hanging-punctuation",
//     "height",
//     "hyphenate-character",
//     "hyphenate-limit-chars",
//     "hyphens",
//     "icon",
//     "image-orientation",
//     "image-rendering",
//     "image-resolution",
//     "ime-mode",
//     "initial-letter",
//     "initial-letter-align",
//     "inline-size",
//     "inset",
//     "inset-area",
//     "inset-block",
//     "inset-block-end",
//     "inset-block-start",
//     "inset-inline",
//     "inset-inline-end",
//     "inset-inline-start",
//     "isolation",
//     "justify-content",
//     "justify-items",
//     "justify-self",
//     "kerning",
//     "left",
//     "letter-spacing",
//     "lighting-color",
//     "line-break",
//     "line-height",
//     "line-height-step",
//     "list-style",
//     "list-style-image",
//     "list-style-position",
//     "list-style-type",
//     "margin",
//     "margin-block",
//     "margin-block-end",
//     "margin-block-start",
//     "margin-bottom",
//     "margin-inline",
//     "margin-inline-end",
//     "margin-inline-start",
//     "margin-left",
//     "margin-right",
//     "margin-top",
//     "margin-trim",
//     "marker",
//     "marker-end",
//     "marker-mid",
//     "marker-start",
//     "marks",
//     "mask",
//     "mask-border",
//     "mask-border-mode",
//     "mask-border-outset",
//     "mask-border-repeat",
//     "mask-border-slice",
//     "mask-border-source",
//     "mask-border-width",
//     "mask-clip",
//     "mask-composite",
//     "mask-image",
//     "mask-mode",
//     "mask-origin",
//     "mask-position",
//     "mask-repeat",
//     "mask-size",
//     "mask-type",
//     "masonry-auto-flow",
//     "math-depth",
//     "math-shift",
//     "math-style",
//     "max-block-size",
//     "max-height",
//     "max-inline-size",
//     "max-width",
//     "min-block-size",
//     "min-height",
//     "min-inline-size",
//     "min-width",
//     "mix-blend-mode",
//     "nav-down",
//     "nav-index",
//     "nav-left",
//     "nav-right",
//     "nav-up",
//     "none",
//     "normal",
//     "object-fit",
//     "object-position",
//     "offset",
//     "offset-anchor",
//     "offset-distance",
//     "offset-path",
//     "offset-position",
//     "offset-rotate",
//     "opacity",
//     "order",
//     "orphans",
//     "outline",
//     "outline-color",
//     "outline-offset",
//     "outline-style",
//     "outline-width",
//     "overflow",
//     "overflow-anchor",
//     "overflow-block",
//     "overflow-clip-margin",
//     "overflow-inline",
//     "overflow-wrap",
//     "overflow-x",
//     "overflow-y",
//     "overlay",
//     "overscroll-behavior",
//     "overscroll-behavior-block",
//     "overscroll-behavior-inline",
//     "overscroll-behavior-x",
//     "overscroll-behavior-y",
//     "padding",
//     "padding-block",
//     "padding-block-end",
//     "padding-block-start",
//     "padding-bottom",
//     "padding-inline",
//     "padding-inline-end",
//     "padding-inline-start",
//     "padding-left",
//     "padding-right",
//     "padding-top",
//     "page",
//     "page-break-after",
//     "page-break-before",
//     "page-break-inside",
//     "paint-order",
//     "pause",
//     "pause-after",
//     "pause-before",
//     "perspective",
//     "perspective-origin",
//     "place-content",
//     "place-items",
//     "place-self",
//     "pointer-events",
//     "position",
//     "position-anchor",
//     "position-visibility",
//     "print-color-adjust",
//     "quotes",
//     "r",
//     "resize",
//     "rest",
//     "rest-after",
//     "rest-before",
//     "right",
//     "rotate",
//     "row-gap",
//     "ruby-align",
//     "ruby-position",
//     "scale",
//     "scroll-behavior",
//     "scroll-margin",
//     "scroll-margin-block",
//     "scroll-margin-block-end",
//     "scroll-margin-block-start",
//     "scroll-margin-bottom",
//     "scroll-margin-inline",
//     "scroll-margin-inline-end",
//     "scroll-margin-inline-start",
//     "scroll-margin-left",
//     "scroll-margin-right",
//     "scroll-margin-top",
//     "scroll-padding",
//     "scroll-padding-block",
//     "scroll-padding-block-end",
//     "scroll-padding-block-start",
//     "scroll-padding-bottom",
//     "scroll-padding-inline",
//     "scroll-padding-inline-end",
//     "scroll-padding-inline-start",
//     "scroll-padding-left",
//     "scroll-padding-right",
//     "scroll-padding-top",
//     "scroll-snap-align",
//     "scroll-snap-stop",
//     "scroll-snap-type",
//     "scroll-timeline",
//     "scroll-timeline-axis",
//     "scroll-timeline-name",
//     "scrollbar-color",
//     "scrollbar-gutter",
//     "scrollbar-width",
//     "shape-image-threshold",
//     "shape-margin",
//     "shape-outside",
//     "shape-rendering",
//     "speak",
//     "speak-as",
//     "src",
//     // @font-face
//     "stop-color",
//     "stop-opacity",
//     "stroke",
//     "stroke-dasharray",
//     "stroke-dashoffset",
//     "stroke-linecap",
//     "stroke-linejoin",
//     "stroke-miterlimit",
//     "stroke-opacity",
//     "stroke-width",
//     "tab-size",
//     "table-layout",
//     "text-align",
//     "text-align-all",
//     "text-align-last",
//     "text-anchor",
//     "text-combine-upright",
//     "text-decoration",
//     "text-decoration-color",
//     "text-decoration-line",
//     "text-decoration-skip",
//     "text-decoration-skip-ink",
//     "text-decoration-style",
//     "text-decoration-thickness",
//     "text-emphasis",
//     "text-emphasis-color",
//     "text-emphasis-position",
//     "text-emphasis-style",
//     "text-indent",
//     "text-justify",
//     "text-orientation",
//     "text-overflow",
//     "text-rendering",
//     "text-shadow",
//     "text-size-adjust",
//     "text-transform",
//     "text-underline-offset",
//     "text-underline-position",
//     "text-wrap",
//     "text-wrap-mode",
//     "text-wrap-style",
//     "timeline-scope",
//     "top",
//     "touch-action",
//     "transform",
//     "transform-box",
//     "transform-origin",
//     "transform-style",
//     "transition",
//     "transition-behavior",
//     "transition-delay",
//     "transition-duration",
//     "transition-property",
//     "transition-timing-function",
//     "translate",
//     "unicode-bidi",
//     "user-modify",
//     "user-select",
//     "vector-effect",
//     "vertical-align",
//     "view-timeline",
//     "view-timeline-axis",
//     "view-timeline-inset",
//     "view-timeline-name",
//     "view-transition-name",
//     "visibility",
//     "voice-balance",
//     "voice-duration",
//     "voice-family",
//     "voice-pitch",
//     "voice-range",
//     "voice-rate",
//     "voice-stress",
//     "voice-volume",
//     "white-space",
//     "white-space-collapse",
//     "widows",
//     "width",
//     "will-change",
//     "word-break",
//     "word-spacing",
//     "word-wrap",
//     "writing-mode",
//     "x",
//     "y",
//     "z-index",
//     "zoom"
//   ].sort().reverse();
//   function css(hljs) {
//     const regex = hljs.regex;
//     const modes = MODES(hljs);
//     const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
//     const AT_MODIFIERS = "and or not only";
//     const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
//     const IDENT_RE3 = "[a-zA-Z-][a-zA-Z0-9_-]*";
//     const STRINGS = [
//       hljs.APOS_STRING_MODE,
//       hljs.QUOTE_STRING_MODE
//     ];
//     return {
//       name: "CSS",
//       case_insensitive: true,
//       illegal: /[=|'\$]/,
//       keywords: { keyframePosition: "from to" },
//       classNameAliases: {
//         // for visual continuity with `tag {}` and because we
//         // don't have a great class for this?
//         keyframePosition: "selector-tag"
//       },
//       contains: [
//         modes.BLOCK_COMMENT,
//         VENDOR_PREFIX,
//         // to recognize keyframe 40% etc which are outside the scope of our
//         // attribute value mode
//         modes.CSS_NUMBER_MODE,
//         {
//           className: "selector-id",
//           begin: /#[A-Za-z0-9_-]+/,
//           relevance: 0
//         },
//         {
//           className: "selector-class",
//           begin: "\\." + IDENT_RE3,
//           relevance: 0
//         },
//         modes.ATTRIBUTE_SELECTOR_MODE,
//         {
//           className: "selector-pseudo",
//           variants: [
//             { begin: ":(" + PSEUDO_CLASSES.join("|") + ")" },
//             { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" }
//           ]
//         },
//         // we may actually need this (12/2020)
//         // { // pseudo-selector params
//         //   begin: /\(/,
//         //   end: /\)/,
//         //   contains: [ hljs.CSS_NUMBER_MODE ]
//         // },
//         modes.CSS_VARIABLE,
//         {
//           className: "attribute",
//           begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
//         },
//         // attribute values
//         {
//           begin: /:/,
//           end: /[;}{]/,
//           contains: [
//             modes.BLOCK_COMMENT,
//             modes.HEXCOLOR,
//             modes.IMPORTANT,
//             modes.CSS_NUMBER_MODE,
//             ...STRINGS,
//             // needed to highlight these as strings and to avoid issues with
//             // illegal characters that might be inside urls that would tigger the
//             // languages illegal stack
//             {
//               begin: /(url|data-uri)\(/,
//               end: /\)/,
//               relevance: 0,
//               // from keywords
//               keywords: { built_in: "url data-uri" },
//               contains: [
//                 ...STRINGS,
//                 {
//                   className: "string",
//                   // any character other than `)` as in `url()` will be the start
//                   // of a string, which ends with `)` (from the parent mode)
//                   begin: /[^)]/,
//                   endsWithParent: true,
//                   excludeEnd: true
//                 }
//               ]
//             },
//             modes.FUNCTION_DISPATCH
//           ]
//         },
//         {
//           begin: regex.lookahead(/@/),
//           end: "[{;]",
//           relevance: 0,
//           illegal: /:/,
//           // break on Less variables @var: ...
//           contains: [
//             {
//               className: "keyword",
//               begin: AT_PROPERTY_RE
//             },
//             {
//               begin: /\s/,
//               endsWithParent: true,
//               excludeEnd: true,
//               relevance: 0,
//               keywords: {
//                 $pattern: /[a-z-]+/,
//                 keyword: AT_MODIFIERS,
//                 attribute: MEDIA_FEATURES.join(" ")
//               },
//               contains: [
//                 {
//                   begin: /[a-z-]+(?=:)/,
//                   className: "attribute"
//                 },
//                 ...STRINGS,
//                 modes.CSS_NUMBER_MODE
//               ]
//             }
//           ]
//         },
//         {
//           className: "selector-tag",
//           begin: "\\b(" + TAGS.join("|") + ")\\b"
//         }
//       ]
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/scss.js
//   var MODES2 = (hljs) => {
//     return {
//       IMPORTANT: {
//         scope: "meta",
//         begin: "!important"
//       },
//       BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
//       HEXCOLOR: {
//         scope: "number",
//         begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
//       },
//       FUNCTION_DISPATCH: {
//         className: "built_in",
//         begin: /[\w-]+(?=\()/
//       },
//       ATTRIBUTE_SELECTOR_MODE: {
//         scope: "selector-attr",
//         begin: /\[/,
//         end: /\]/,
//         illegal: "$",
//         contains: [
//           hljs.APOS_STRING_MODE,
//           hljs.QUOTE_STRING_MODE
//         ]
//       },
//       CSS_NUMBER_MODE: {
//         scope: "number",
//         begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
//         relevance: 0
//       },
//       CSS_VARIABLE: {
//         className: "attr",
//         begin: /--[A-Za-z_][A-Za-z0-9_-]*/
//       }
//     };
//   };
//   var HTML_TAGS2 = [
//     "a",
//     "abbr",
//     "address",
//     "article",
//     "aside",
//     "audio",
//     "b",
//     "blockquote",
//     "body",
//     "button",
//     "canvas",
//     "caption",
//     "cite",
//     "code",
//     "dd",
//     "del",
//     "details",
//     "dfn",
//     "div",
//     "dl",
//     "dt",
//     "em",
//     "fieldset",
//     "figcaption",
//     "figure",
//     "footer",
//     "form",
//     "h1",
//     "h2",
//     "h3",
//     "h4",
//     "h5",
//     "h6",
//     "header",
//     "hgroup",
//     "html",
//     "i",
//     "iframe",
//     "img",
//     "input",
//     "ins",
//     "kbd",
//     "label",
//     "legend",
//     "li",
//     "main",
//     "mark",
//     "menu",
//     "nav",
//     "object",
//     "ol",
//     "optgroup",
//     "option",
//     "p",
//     "picture",
//     "q",
//     "quote",
//     "samp",
//     "section",
//     "select",
//     "source",
//     "span",
//     "strong",
//     "summary",
//     "sup",
//     "table",
//     "tbody",
//     "td",
//     "textarea",
//     "tfoot",
//     "th",
//     "thead",
//     "time",
//     "tr",
//     "ul",
//     "var",
//     "video"
//   ];
//   var SVG_TAGS2 = [
//     "defs",
//     "g",
//     "marker",
//     "mask",
//     "pattern",
//     "svg",
//     "switch",
//     "symbol",
//     "feBlend",
//     "feColorMatrix",
//     "feComponentTransfer",
//     "feComposite",
//     "feConvolveMatrix",
//     "feDiffuseLighting",
//     "feDisplacementMap",
//     "feFlood",
//     "feGaussianBlur",
//     "feImage",
//     "feMerge",
//     "feMorphology",
//     "feOffset",
//     "feSpecularLighting",
//     "feTile",
//     "feTurbulence",
//     "linearGradient",
//     "radialGradient",
//     "stop",
//     "circle",
//     "ellipse",
//     "image",
//     "line",
//     "path",
//     "polygon",
//     "polyline",
//     "rect",
//     "text",
//     "use",
//     "textPath",
//     "tspan",
//     "foreignObject",
//     "clipPath"
//   ];
//   var TAGS2 = [
//     ...HTML_TAGS2,
//     ...SVG_TAGS2
//   ];
//   var MEDIA_FEATURES2 = [
//     "any-hover",
//     "any-pointer",
//     "aspect-ratio",
//     "color",
//     "color-gamut",
//     "color-index",
//     "device-aspect-ratio",
//     "device-height",
//     "device-width",
//     "display-mode",
//     "forced-colors",
//     "grid",
//     "height",
//     "hover",
//     "inverted-colors",
//     "monochrome",
//     "orientation",
//     "overflow-block",
//     "overflow-inline",
//     "pointer",
//     "prefers-color-scheme",
//     "prefers-contrast",
//     "prefers-reduced-motion",
//     "prefers-reduced-transparency",
//     "resolution",
//     "scan",
//     "scripting",
//     "update",
//     "width",
//     // TODO: find a better solution?
//     "min-width",
//     "max-width",
//     "min-height",
//     "max-height"
//   ].sort().reverse();
//   var PSEUDO_CLASSES2 = [
//     "active",
//     "any-link",
//     "blank",
//     "checked",
//     "current",
//     "default",
//     "defined",
//     "dir",
//     // dir()
//     "disabled",
//     "drop",
//     "empty",
//     "enabled",
//     "first",
//     "first-child",
//     "first-of-type",
//     "fullscreen",
//     "future",
//     "focus",
//     "focus-visible",
//     "focus-within",
//     "has",
//     // has()
//     "host",
//     // host or host()
//     "host-context",
//     // host-context()
//     "hover",
//     "indeterminate",
//     "in-range",
//     "invalid",
//     "is",
//     // is()
//     "lang",
//     // lang()
//     "last-child",
//     "last-of-type",
//     "left",
//     "link",
//     "local-link",
//     "not",
//     // not()
//     "nth-child",
//     // nth-child()
//     "nth-col",
//     // nth-col()
//     "nth-last-child",
//     // nth-last-child()
//     "nth-last-col",
//     // nth-last-col()
//     "nth-last-of-type",
//     //nth-last-of-type()
//     "nth-of-type",
//     //nth-of-type()
//     "only-child",
//     "only-of-type",
//     "optional",
//     "out-of-range",
//     "past",
//     "placeholder-shown",
//     "read-only",
//     "read-write",
//     "required",
//     "right",
//     "root",
//     "scope",
//     "target",
//     "target-within",
//     "user-invalid",
//     "valid",
//     "visited",
//     "where"
//     // where()
//   ].sort().reverse();
//   var PSEUDO_ELEMENTS2 = [
//     "after",
//     "backdrop",
//     "before",
//     "cue",
//     "cue-region",
//     "first-letter",
//     "first-line",
//     "grammar-error",
//     "marker",
//     "part",
//     "placeholder",
//     "selection",
//     "slotted",
//     "spelling-error"
//   ].sort().reverse();
//   var ATTRIBUTES2 = [
//     "accent-color",
//     "align-content",
//     "align-items",
//     "align-self",
//     "alignment-baseline",
//     "all",
//     "anchor-name",
//     "animation",
//     "animation-composition",
//     "animation-delay",
//     "animation-direction",
//     "animation-duration",
//     "animation-fill-mode",
//     "animation-iteration-count",
//     "animation-name",
//     "animation-play-state",
//     "animation-range",
//     "animation-range-end",
//     "animation-range-start",
//     "animation-timeline",
//     "animation-timing-function",
//     "appearance",
//     "aspect-ratio",
//     "backdrop-filter",
//     "backface-visibility",
//     "background",
//     "background-attachment",
//     "background-blend-mode",
//     "background-clip",
//     "background-color",
//     "background-image",
//     "background-origin",
//     "background-position",
//     "background-position-x",
//     "background-position-y",
//     "background-repeat",
//     "background-size",
//     "baseline-shift",
//     "block-size",
//     "border",
//     "border-block",
//     "border-block-color",
//     "border-block-end",
//     "border-block-end-color",
//     "border-block-end-style",
//     "border-block-end-width",
//     "border-block-start",
//     "border-block-start-color",
//     "border-block-start-style",
//     "border-block-start-width",
//     "border-block-style",
//     "border-block-width",
//     "border-bottom",
//     "border-bottom-color",
//     "border-bottom-left-radius",
//     "border-bottom-right-radius",
//     "border-bottom-style",
//     "border-bottom-width",
//     "border-collapse",
//     "border-color",
//     "border-end-end-radius",
//     "border-end-start-radius",
//     "border-image",
//     "border-image-outset",
//     "border-image-repeat",
//     "border-image-slice",
//     "border-image-source",
//     "border-image-width",
//     "border-inline",
//     "border-inline-color",
//     "border-inline-end",
//     "border-inline-end-color",
//     "border-inline-end-style",
//     "border-inline-end-width",
//     "border-inline-start",
//     "border-inline-start-color",
//     "border-inline-start-style",
//     "border-inline-start-width",
//     "border-inline-style",
//     "border-inline-width",
//     "border-left",
//     "border-left-color",
//     "border-left-style",
//     "border-left-width",
//     "border-radius",
//     "border-right",
//     "border-right-color",
//     "border-right-style",
//     "border-right-width",
//     "border-spacing",
//     "border-start-end-radius",
//     "border-start-start-radius",
//     "border-style",
//     "border-top",
//     "border-top-color",
//     "border-top-left-radius",
//     "border-top-right-radius",
//     "border-top-style",
//     "border-top-width",
//     "border-width",
//     "bottom",
//     "box-align",
//     "box-decoration-break",
//     "box-direction",
//     "box-flex",
//     "box-flex-group",
//     "box-lines",
//     "box-ordinal-group",
//     "box-orient",
//     "box-pack",
//     "box-shadow",
//     "box-sizing",
//     "break-after",
//     "break-before",
//     "break-inside",
//     "caption-side",
//     "caret-color",
//     "clear",
//     "clip",
//     "clip-path",
//     "clip-rule",
//     "color",
//     "color-interpolation",
//     "color-interpolation-filters",
//     "color-profile",
//     "color-rendering",
//     "color-scheme",
//     "column-count",
//     "column-fill",
//     "column-gap",
//     "column-rule",
//     "column-rule-color",
//     "column-rule-style",
//     "column-rule-width",
//     "column-span",
//     "column-width",
//     "columns",
//     "contain",
//     "contain-intrinsic-block-size",
//     "contain-intrinsic-height",
//     "contain-intrinsic-inline-size",
//     "contain-intrinsic-size",
//     "contain-intrinsic-width",
//     "container",
//     "container-name",
//     "container-type",
//     "content",
//     "content-visibility",
//     "counter-increment",
//     "counter-reset",
//     "counter-set",
//     "cue",
//     "cue-after",
//     "cue-before",
//     "cursor",
//     "cx",
//     "cy",
//     "direction",
//     "display",
//     "dominant-baseline",
//     "empty-cells",
//     "enable-background",
//     "field-sizing",
//     "fill",
//     "fill-opacity",
//     "fill-rule",
//     "filter",
//     "flex",
//     "flex-basis",
//     "flex-direction",
//     "flex-flow",
//     "flex-grow",
//     "flex-shrink",
//     "flex-wrap",
//     "float",
//     "flood-color",
//     "flood-opacity",
//     "flow",
//     "font",
//     "font-display",
//     "font-family",
//     "font-feature-settings",
//     "font-kerning",
//     "font-language-override",
//     "font-optical-sizing",
//     "font-palette",
//     "font-size",
//     "font-size-adjust",
//     "font-smooth",
//     "font-smoothing",
//     "font-stretch",
//     "font-style",
//     "font-synthesis",
//     "font-synthesis-position",
//     "font-synthesis-small-caps",
//     "font-synthesis-style",
//     "font-synthesis-weight",
//     "font-variant",
//     "font-variant-alternates",
//     "font-variant-caps",
//     "font-variant-east-asian",
//     "font-variant-emoji",
//     "font-variant-ligatures",
//     "font-variant-numeric",
//     "font-variant-position",
//     "font-variation-settings",
//     "font-weight",
//     "forced-color-adjust",
//     "gap",
//     "glyph-orientation-horizontal",
//     "glyph-orientation-vertical",
//     "grid",
//     "grid-area",
//     "grid-auto-columns",
//     "grid-auto-flow",
//     "grid-auto-rows",
//     "grid-column",
//     "grid-column-end",
//     "grid-column-start",
//     "grid-gap",
//     "grid-row",
//     "grid-row-end",
//     "grid-row-start",
//     "grid-template",
//     "grid-template-areas",
//     "grid-template-columns",
//     "grid-template-rows",
//     "hanging-punctuation",
//     "height",
//     "hyphenate-character",
//     "hyphenate-limit-chars",
//     "hyphens",
//     "icon",
//     "image-orientation",
//     "image-rendering",
//     "image-resolution",
//     "ime-mode",
//     "initial-letter",
//     "initial-letter-align",
//     "inline-size",
//     "inset",
//     "inset-area",
//     "inset-block",
//     "inset-block-end",
//     "inset-block-start",
//     "inset-inline",
//     "inset-inline-end",
//     "inset-inline-start",
//     "isolation",
//     "justify-content",
//     "justify-items",
//     "justify-self",
//     "kerning",
//     "left",
//     "letter-spacing",
//     "lighting-color",
//     "line-break",
//     "line-height",
//     "line-height-step",
//     "list-style",
//     "list-style-image",
//     "list-style-position",
//     "list-style-type",
//     "margin",
//     "margin-block",
//     "margin-block-end",
//     "margin-block-start",
//     "margin-bottom",
//     "margin-inline",
//     "margin-inline-end",
//     "margin-inline-start",
//     "margin-left",
//     "margin-right",
//     "margin-top",
//     "margin-trim",
//     "marker",
//     "marker-end",
//     "marker-mid",
//     "marker-start",
//     "marks",
//     "mask",
//     "mask-border",
//     "mask-border-mode",
//     "mask-border-outset",
//     "mask-border-repeat",
//     "mask-border-slice",
//     "mask-border-source",
//     "mask-border-width",
//     "mask-clip",
//     "mask-composite",
//     "mask-image",
//     "mask-mode",
//     "mask-origin",
//     "mask-position",
//     "mask-repeat",
//     "mask-size",
//     "mask-type",
//     "masonry-auto-flow",
//     "math-depth",
//     "math-shift",
//     "math-style",
//     "max-block-size",
//     "max-height",
//     "max-inline-size",
//     "max-width",
//     "min-block-size",
//     "min-height",
//     "min-inline-size",
//     "min-width",
//     "mix-blend-mode",
//     "nav-down",
//     "nav-index",
//     "nav-left",
//     "nav-right",
//     "nav-up",
//     "none",
//     "normal",
//     "object-fit",
//     "object-position",
//     "offset",
//     "offset-anchor",
//     "offset-distance",
//     "offset-path",
//     "offset-position",
//     "offset-rotate",
//     "opacity",
//     "order",
//     "orphans",
//     "outline",
//     "outline-color",
//     "outline-offset",
//     "outline-style",
//     "outline-width",
//     "overflow",
//     "overflow-anchor",
//     "overflow-block",
//     "overflow-clip-margin",
//     "overflow-inline",
//     "overflow-wrap",
//     "overflow-x",
//     "overflow-y",
//     "overlay",
//     "overscroll-behavior",
//     "overscroll-behavior-block",
//     "overscroll-behavior-inline",
//     "overscroll-behavior-x",
//     "overscroll-behavior-y",
//     "padding",
//     "padding-block",
//     "padding-block-end",
//     "padding-block-start",
//     "padding-bottom",
//     "padding-inline",
//     "padding-inline-end",
//     "padding-inline-start",
//     "padding-left",
//     "padding-right",
//     "padding-top",
//     "page",
//     "page-break-after",
//     "page-break-before",
//     "page-break-inside",
//     "paint-order",
//     "pause",
//     "pause-after",
//     "pause-before",
//     "perspective",
//     "perspective-origin",
//     "place-content",
//     "place-items",
//     "place-self",
//     "pointer-events",
//     "position",
//     "position-anchor",
//     "position-visibility",
//     "print-color-adjust",
//     "quotes",
//     "r",
//     "resize",
//     "rest",
//     "rest-after",
//     "rest-before",
//     "right",
//     "rotate",
//     "row-gap",
//     "ruby-align",
//     "ruby-position",
//     "scale",
//     "scroll-behavior",
//     "scroll-margin",
//     "scroll-margin-block",
//     "scroll-margin-block-end",
//     "scroll-margin-block-start",
//     "scroll-margin-bottom",
//     "scroll-margin-inline",
//     "scroll-margin-inline-end",
//     "scroll-margin-inline-start",
//     "scroll-margin-left",
//     "scroll-margin-right",
//     "scroll-margin-top",
//     "scroll-padding",
//     "scroll-padding-block",
//     "scroll-padding-block-end",
//     "scroll-padding-block-start",
//     "scroll-padding-bottom",
//     "scroll-padding-inline",
//     "scroll-padding-inline-end",
//     "scroll-padding-inline-start",
//     "scroll-padding-left",
//     "scroll-padding-right",
//     "scroll-padding-top",
//     "scroll-snap-align",
//     "scroll-snap-stop",
//     "scroll-snap-type",
//     "scroll-timeline",
//     "scroll-timeline-axis",
//     "scroll-timeline-name",
//     "scrollbar-color",
//     "scrollbar-gutter",
//     "scrollbar-width",
//     "shape-image-threshold",
//     "shape-margin",
//     "shape-outside",
//     "shape-rendering",
//     "speak",
//     "speak-as",
//     "src",
//     // @font-face
//     "stop-color",
//     "stop-opacity",
//     "stroke",
//     "stroke-dasharray",
//     "stroke-dashoffset",
//     "stroke-linecap",
//     "stroke-linejoin",
//     "stroke-miterlimit",
//     "stroke-opacity",
//     "stroke-width",
//     "tab-size",
//     "table-layout",
//     "text-align",
//     "text-align-all",
//     "text-align-last",
//     "text-anchor",
//     "text-combine-upright",
//     "text-decoration",
//     "text-decoration-color",
//     "text-decoration-line",
//     "text-decoration-skip",
//     "text-decoration-skip-ink",
//     "text-decoration-style",
//     "text-decoration-thickness",
//     "text-emphasis",
//     "text-emphasis-color",
//     "text-emphasis-position",
//     "text-emphasis-style",
//     "text-indent",
//     "text-justify",
//     "text-orientation",
//     "text-overflow",
//     "text-rendering",
//     "text-shadow",
//     "text-size-adjust",
//     "text-transform",
//     "text-underline-offset",
//     "text-underline-position",
//     "text-wrap",
//     "text-wrap-mode",
//     "text-wrap-style",
//     "timeline-scope",
//     "top",
//     "touch-action",
//     "transform",
//     "transform-box",
//     "transform-origin",
//     "transform-style",
//     "transition",
//     "transition-behavior",
//     "transition-delay",
//     "transition-duration",
//     "transition-property",
//     "transition-timing-function",
//     "translate",
//     "unicode-bidi",
//     "user-modify",
//     "user-select",
//     "vector-effect",
//     "vertical-align",
//     "view-timeline",
//     "view-timeline-axis",
//     "view-timeline-inset",
//     "view-timeline-name",
//     "view-transition-name",
//     "visibility",
//     "voice-balance",
//     "voice-duration",
//     "voice-family",
//     "voice-pitch",
//     "voice-range",
//     "voice-rate",
//     "voice-stress",
//     "voice-volume",
//     "white-space",
//     "white-space-collapse",
//     "widows",
//     "width",
//     "will-change",
//     "word-break",
//     "word-spacing",
//     "word-wrap",
//     "writing-mode",
//     "x",
//     "y",
//     "z-index",
//     "zoom"
//   ].sort().reverse();
//   function scss(hljs) {
//     const modes = MODES2(hljs);
//     const PSEUDO_ELEMENTS$1 = PSEUDO_ELEMENTS2;
//     const PSEUDO_CLASSES$1 = PSEUDO_CLASSES2;
//     const AT_IDENTIFIER = "@[a-z-]+";
//     const AT_MODIFIERS = "and or not only";
//     const IDENT_RE3 = "[a-zA-Z-][a-zA-Z0-9_-]*";
//     const VARIABLE = {
//       className: "variable",
//       begin: "(\\$" + IDENT_RE3 + ")\\b",
//       relevance: 0
//     };
//     return {
//       name: "SCSS",
//       case_insensitive: true,
//       illegal: "[=/|']",
//       contains: [
//         hljs.C_LINE_COMMENT_MODE,
//         hljs.C_BLOCK_COMMENT_MODE,
//         // to recognize keyframe 40% etc which are outside the scope of our
//         // attribute value mode
//         modes.CSS_NUMBER_MODE,
//         {
//           className: "selector-id",
//           begin: "#[A-Za-z0-9_-]+",
//           relevance: 0
//         },
//         {
//           className: "selector-class",
//           begin: "\\.[A-Za-z0-9_-]+",
//           relevance: 0
//         },
//         modes.ATTRIBUTE_SELECTOR_MODE,
//         {
//           className: "selector-tag",
//           begin: "\\b(" + TAGS2.join("|") + ")\\b",
//           // was there, before, but why?
//           relevance: 0
//         },
//         {
//           className: "selector-pseudo",
//           begin: ":(" + PSEUDO_CLASSES$1.join("|") + ")"
//         },
//         {
//           className: "selector-pseudo",
//           begin: ":(:)?(" + PSEUDO_ELEMENTS$1.join("|") + ")"
//         },
//         VARIABLE,
//         {
//           // pseudo-selector params
//           begin: /\(/,
//           end: /\)/,
//           contains: [modes.CSS_NUMBER_MODE]
//         },
//         modes.CSS_VARIABLE,
//         {
//           className: "attribute",
//           begin: "\\b(" + ATTRIBUTES2.join("|") + ")\\b"
//         },
//         { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
//         {
//           begin: /:/,
//           end: /[;}{]/,
//           relevance: 0,
//           contains: [
//             modes.BLOCK_COMMENT,
//             VARIABLE,
//             modes.HEXCOLOR,
//             modes.CSS_NUMBER_MODE,
//             hljs.QUOTE_STRING_MODE,
//             hljs.APOS_STRING_MODE,
//             modes.IMPORTANT,
//             modes.FUNCTION_DISPATCH
//           ]
//         },
//         // matching these here allows us to treat them more like regular CSS
//         // rules so everything between the {} gets regular rule highlighting,
//         // which is what we want for page and font-face
//         {
//           begin: "@(page|font-face)",
//           keywords: {
//             $pattern: AT_IDENTIFIER,
//             keyword: "@page @font-face"
//           }
//         },
//         {
//           begin: "@",
//           end: "[{;]",
//           returnBegin: true,
//           keywords: {
//             $pattern: /[a-z-]+/,
//             keyword: AT_MODIFIERS,
//             attribute: MEDIA_FEATURES2.join(" ")
//           },
//           contains: [
//             {
//               begin: AT_IDENTIFIER,
//               className: "keyword"
//             },
//             {
//               begin: /[a-z-]+(?=:)/,
//               className: "attribute"
//             },
//             VARIABLE,
//             hljs.QUOTE_STRING_MODE,
//             hljs.APOS_STRING_MODE,
//             modes.HEXCOLOR,
//             modes.CSS_NUMBER_MODE
//           ]
//         },
//         modes.FUNCTION_DISPATCH
//       ]
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/bash.js
//   function bash(hljs) {
//     const regex = hljs.regex;
//     const VAR = {};
//     const BRACED_VAR = {
//       begin: /\$\{/,
//       end: /\}/,
//       contains: [
//         "self",
//         {
//           begin: /:-/,
//           contains: [VAR]
//         }
//         // default values
//       ]
//     };
//     Object.assign(VAR, {
//       className: "variable",
//       variants: [
//         { begin: regex.concat(
//           /\$[\w\d#@][\w\d_]*/,
//           // negative look-ahead tries to avoid matching patterns that are not
//           // Perl at all like $ident$, @ident@, etc.
//           `(?![\\w\\d])(?![$])`
//         ) },
//         BRACED_VAR
//       ]
//     });
//     const SUBST = {
//       className: "subst",
//       begin: /\$\(/,
//       end: /\)/,
//       contains: [hljs.BACKSLASH_ESCAPE]
//     };
//     const COMMENT = hljs.inherit(
//       hljs.COMMENT(),
//       {
//         match: [
//           /(^|\s)/,
//           /#.*$/
//         ],
//         scope: {
//           2: "comment"
//         }
//       }
//     );
//     const HERE_DOC = {
//       begin: /<<-?\s*(?=\w+)/,
//       starts: { contains: [
//         hljs.END_SAME_AS_BEGIN({
//           begin: /(\w+)/,
//           end: /(\w+)/,
//           className: "string"
//         })
//       ] }
//     };
//     const QUOTE_STRING = {
//       className: "string",
//       begin: /"/,
//       end: /"/,
//       contains: [
//         hljs.BACKSLASH_ESCAPE,
//         VAR,
//         SUBST
//       ]
//     };
//     SUBST.contains.push(QUOTE_STRING);
//     const ESCAPED_QUOTE = {
//       match: /\\"/
//     };
//     const APOS_STRING = {
//       className: "string",
//       begin: /'/,
//       end: /'/
//     };
//     const ESCAPED_APOS = {
//       match: /\\'/
//     };
//     const ARITHMETIC = {
//       begin: /\$?\(\(/,
//       end: /\)\)/,
//       contains: [
//         {
//           begin: /\d+#[0-9a-f]+/,
//           className: "number"
//         },
//         hljs.NUMBER_MODE,
//         VAR
//       ]
//     };
//     const SH_LIKE_SHELLS = [
//       "fish",
//       "bash",
//       "zsh",
//       "sh",
//       "csh",
//       "ksh",
//       "tcsh",
//       "dash",
//       "scsh"
//     ];
//     const KNOWN_SHEBANG = hljs.SHEBANG({
//       binary: `(${SH_LIKE_SHELLS.join("|")})`,
//       relevance: 10
//     });
//     const FUNCTION = {
//       className: "function",
//       begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
//       returnBegin: true,
//       contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
//       relevance: 0
//     };
//     const KEYWORDS3 = [
//       "if",
//       "then",
//       "else",
//       "elif",
//       "fi",
//       "time",
//       "for",
//       "while",
//       "until",
//       "in",
//       "do",
//       "done",
//       "case",
//       "esac",
//       "coproc",
//       "function",
//       "select"
//     ];
//     const LITERALS3 = [
//       "true",
//       "false"
//     ];
//     const PATH_MODE = { match: /(\/[a-z._-]+)+/ };
//     const SHELL_BUILT_INS = [
//       "break",
//       "cd",
//       "continue",
//       "eval",
//       "exec",
//       "exit",
//       "export",
//       "getopts",
//       "hash",
//       "pwd",
//       "readonly",
//       "return",
//       "shift",
//       "test",
//       "times",
//       "trap",
//       "umask",
//       "unset"
//     ];
//     const BASH_BUILT_INS = [
//       "alias",
//       "bind",
//       "builtin",
//       "caller",
//       "command",
//       "declare",
//       "echo",
//       "enable",
//       "help",
//       "let",
//       "local",
//       "logout",
//       "mapfile",
//       "printf",
//       "read",
//       "readarray",
//       "source",
//       "sudo",
//       "type",
//       "typeset",
//       "ulimit",
//       "unalias"
//     ];
//     const ZSH_BUILT_INS = [
//       "autoload",
//       "bg",
//       "bindkey",
//       "bye",
//       "cap",
//       "chdir",
//       "clone",
//       "comparguments",
//       "compcall",
//       "compctl",
//       "compdescribe",
//       "compfiles",
//       "compgroups",
//       "compquote",
//       "comptags",
//       "comptry",
//       "compvalues",
//       "dirs",
//       "disable",
//       "disown",
//       "echotc",
//       "echoti",
//       "emulate",
//       "fc",
//       "fg",
//       "float",
//       "functions",
//       "getcap",
//       "getln",
//       "history",
//       "integer",
//       "jobs",
//       "kill",
//       "limit",
//       "log",
//       "noglob",
//       "popd",
//       "print",
//       "pushd",
//       "pushln",
//       "rehash",
//       "sched",
//       "setcap",
//       "setopt",
//       "stat",
//       "suspend",
//       "ttyctl",
//       "unfunction",
//       "unhash",
//       "unlimit",
//       "unsetopt",
//       "vared",
//       "wait",
//       "whence",
//       "where",
//       "which",
//       "zcompile",
//       "zformat",
//       "zftp",
//       "zle",
//       "zmodload",
//       "zparseopts",
//       "zprof",
//       "zpty",
//       "zregexparse",
//       "zsocket",
//       "zstyle",
//       "ztcp"
//     ];
//     const GNU_CORE_UTILS = [
//       "chcon",
//       "chgrp",
//       "chown",
//       "chmod",
//       "cp",
//       "dd",
//       "df",
//       "dir",
//       "dircolors",
//       "ln",
//       "ls",
//       "mkdir",
//       "mkfifo",
//       "mknod",
//       "mktemp",
//       "mv",
//       "realpath",
//       "rm",
//       "rmdir",
//       "shred",
//       "sync",
//       "touch",
//       "truncate",
//       "vdir",
//       "b2sum",
//       "base32",
//       "base64",
//       "cat",
//       "cksum",
//       "comm",
//       "csplit",
//       "cut",
//       "expand",
//       "fmt",
//       "fold",
//       "head",
//       "join",
//       "md5sum",
//       "nl",
//       "numfmt",
//       "od",
//       "paste",
//       "ptx",
//       "pr",
//       "sha1sum",
//       "sha224sum",
//       "sha256sum",
//       "sha384sum",
//       "sha512sum",
//       "shuf",
//       "sort",
//       "split",
//       "sum",
//       "tac",
//       "tail",
//       "tr",
//       "tsort",
//       "unexpand",
//       "uniq",
//       "wc",
//       "arch",
//       "basename",
//       "chroot",
//       "date",
//       "dirname",
//       "du",
//       "echo",
//       "env",
//       "expr",
//       "factor",
//       // "false", // keyword literal already
//       "groups",
//       "hostid",
//       "id",
//       "link",
//       "logname",
//       "nice",
//       "nohup",
//       "nproc",
//       "pathchk",
//       "pinky",
//       "printenv",
//       "printf",
//       "pwd",
//       "readlink",
//       "runcon",
//       "seq",
//       "sleep",
//       "stat",
//       "stdbuf",
//       "stty",
//       "tee",
//       "test",
//       "timeout",
//       // "true", // keyword literal already
//       "tty",
//       "uname",
//       "unlink",
//       "uptime",
//       "users",
//       "who",
//       "whoami",
//       "yes"
//     ];
//     return {
//       name: "Bash",
//       aliases: [
//         "sh",
//         "zsh"
//       ],
//       keywords: {
//         $pattern: /\b[a-z][a-z0-9._-]+\b/,
//         keyword: KEYWORDS3,
//         literal: LITERALS3,
//         built_in: [
//           ...SHELL_BUILT_INS,
//           ...BASH_BUILT_INS,
//           // Shell modifiers
//           "set",
//           "shopt",
//           ...ZSH_BUILT_INS,
//           ...GNU_CORE_UTILS
//         ]
//       },
//       contains: [
//         KNOWN_SHEBANG,
//         // to catch known shells and boost relevancy
//         hljs.SHEBANG(),
//         // to catch unknown shells but still highlight the shebang
//         FUNCTION,
//         ARITHMETIC,
//         COMMENT,
//         HERE_DOC,
//         PATH_MODE,
//         QUOTE_STRING,
//         ESCAPED_QUOTE,
//         APOS_STRING,
//         ESCAPED_APOS,
//         VAR
//       ]
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/python.js
//   function python(hljs) {
//     const regex = hljs.regex;
//     const IDENT_RE3 = /[\p{XID_Start}_]\p{XID_Continue}*/u;
//     const RESERVED_WORDS = [
//       "and",
//       "as",
//       "assert",
//       "async",
//       "await",
//       "break",
//       "case",
//       "class",
//       "continue",
//       "def",
//       "del",
//       "elif",
//       "else",
//       "except",
//       "finally",
//       "for",
//       "from",
//       "global",
//       "if",
//       "import",
//       "in",
//       "is",
//       "lambda",
//       "match",
//       "nonlocal|10",
//       "not",
//       "or",
//       "pass",
//       "raise",
//       "return",
//       "try",
//       "while",
//       "with",
//       "yield"
//     ];
//     const BUILT_INS3 = [
//       "__import__",
//       "abs",
//       "all",
//       "any",
//       "ascii",
//       "bin",
//       "bool",
//       "breakpoint",
//       "bytearray",
//       "bytes",
//       "callable",
//       "chr",
//       "classmethod",
//       "compile",
//       "complex",
//       "delattr",
//       "dict",
//       "dir",
//       "divmod",
//       "enumerate",
//       "eval",
//       "exec",
//       "filter",
//       "float",
//       "format",
//       "frozenset",
//       "getattr",
//       "globals",
//       "hasattr",
//       "hash",
//       "help",
//       "hex",
//       "id",
//       "input",
//       "int",
//       "isinstance",
//       "issubclass",
//       "iter",
//       "len",
//       "list",
//       "locals",
//       "map",
//       "max",
//       "memoryview",
//       "min",
//       "next",
//       "object",
//       "oct",
//       "open",
//       "ord",
//       "pow",
//       "print",
//       "property",
//       "range",
//       "repr",
//       "reversed",
//       "round",
//       "set",
//       "setattr",
//       "slice",
//       "sorted",
//       "staticmethod",
//       "str",
//       "sum",
//       "super",
//       "tuple",
//       "type",
//       "vars",
//       "zip"
//     ];
//     const LITERALS3 = [
//       "__debug__",
//       "Ellipsis",
//       "False",
//       "None",
//       "NotImplemented",
//       "True"
//     ];
//     const TYPES3 = [
//       "Any",
//       "Callable",
//       "Coroutine",
//       "Dict",
//       "List",
//       "Literal",
//       "Generic",
//       "Optional",
//       "Sequence",
//       "Set",
//       "Tuple",
//       "Type",
//       "Union"
//     ];
//     const KEYWORDS3 = {
//       $pattern: /[A-Za-z]\w+|__\w+__/,
//       keyword: RESERVED_WORDS,
//       built_in: BUILT_INS3,
//       literal: LITERALS3,
//       type: TYPES3
//     };
//     const PROMPT = {
//       className: "meta",
//       begin: /^(>>>|\.\.\.) /
//     };
//     const SUBST = {
//       className: "subst",
//       begin: /\{/,
//       end: /\}/,
//       keywords: KEYWORDS3,
//       illegal: /#/
//     };
//     const LITERAL_BRACKET = {
//       begin: /\{\{/,
//       relevance: 0
//     };
//     const STRING = {
//       className: "string",
//       contains: [hljs.BACKSLASH_ESCAPE],
//       variants: [
//         {
//           begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
//           end: /'''/,
//           contains: [
//             hljs.BACKSLASH_ESCAPE,
//             PROMPT
//           ],
//           relevance: 10
//         },
//         {
//           begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
//           end: /"""/,
//           contains: [
//             hljs.BACKSLASH_ESCAPE,
//             PROMPT
//           ],
//           relevance: 10
//         },
//         {
//           begin: /([fF][rR]|[rR][fF]|[fF])'''/,
//           end: /'''/,
//           contains: [
//             hljs.BACKSLASH_ESCAPE,
//             PROMPT,
//             LITERAL_BRACKET,
//             SUBST
//           ]
//         },
//         {
//           begin: /([fF][rR]|[rR][fF]|[fF])"""/,
//           end: /"""/,
//           contains: [
//             hljs.BACKSLASH_ESCAPE,
//             PROMPT,
//             LITERAL_BRACKET,
//             SUBST
//           ]
//         },
//         {
//           begin: /([uU]|[rR])'/,
//           end: /'/,
//           relevance: 10
//         },
//         {
//           begin: /([uU]|[rR])"/,
//           end: /"/,
//           relevance: 10
//         },
//         {
//           begin: /([bB]|[bB][rR]|[rR][bB])'/,
//           end: /'/
//         },
//         {
//           begin: /([bB]|[bB][rR]|[rR][bB])"/,
//           end: /"/
//         },
//         {
//           begin: /([fF][rR]|[rR][fF]|[fF])'/,
//           end: /'/,
//           contains: [
//             hljs.BACKSLASH_ESCAPE,
//             LITERAL_BRACKET,
//             SUBST
//           ]
//         },
//         {
//           begin: /([fF][rR]|[rR][fF]|[fF])"/,
//           end: /"/,
//           contains: [
//             hljs.BACKSLASH_ESCAPE,
//             LITERAL_BRACKET,
//             SUBST
//           ]
//         },
//         hljs.APOS_STRING_MODE,
//         hljs.QUOTE_STRING_MODE
//       ]
//     };
//     const digitpart = "[0-9](_?[0-9])*";
//     const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
//     const lookahead = `\\b|${RESERVED_WORDS.join("|")}`;
//     const NUMBER = {
//       className: "number",
//       relevance: 0,
//       variants: [
//         // exponentfloat, pointfloat
//         // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
//         // optionally imaginary
//         // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
//         // Note: no leading \b because floats can start with a decimal point
//         // and we don't want to mishandle e.g. `fn(.5)`,
//         // no trailing \b for pointfloat because it can end with a decimal point
//         // and we don't want to mishandle e.g. `0..hex()`; this should be safe
//         // because both MUST contain a decimal point and so cannot be confused with
//         // the interior part of an identifier
//         {
//           begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})`
//         },
//         {
//           begin: `(${pointfloat})[jJ]?`
//         },
//         // decinteger, bininteger, octinteger, hexinteger
//         // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
//         // optionally "long" in Python 2
//         // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
//         // decinteger is optionally imaginary
//         // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
//         {
//           begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})`
//         },
//         {
//           begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})`
//         },
//         {
//           begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})`
//         },
//         {
//           begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})`
//         },
//         // imagnumber (digitpart-based)
//         // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
//         {
//           begin: `\\b(${digitpart})[jJ](?=${lookahead})`
//         }
//       ]
//     };
//     const COMMENT_TYPE = {
//       className: "comment",
//       begin: regex.lookahead(/# type:/),
//       end: /$/,
//       keywords: KEYWORDS3,
//       contains: [
//         {
//           // prevent keywords from coloring `type`
//           begin: /# type:/
//         },
//         // comment within a datatype comment includes no keywords
//         {
//           begin: /#/,
//           end: /\b\B/,
//           endsWithParent: true
//         }
//       ]
//     };
//     const PARAMS = {
//       className: "params",
//       variants: [
//         // Exclude params in functions without params
//         {
//           className: "",
//           begin: /\(\s*\)/,
//           skip: true
//         },
//         {
//           begin: /\(/,
//           end: /\)/,
//           excludeBegin: true,
//           excludeEnd: true,
//           keywords: KEYWORDS3,
//           contains: [
//             "self",
//             PROMPT,
//             NUMBER,
//             STRING,
//             hljs.HASH_COMMENT_MODE
//           ]
//         }
//       ]
//     };
//     SUBST.contains = [
//       STRING,
//       NUMBER,
//       PROMPT
//     ];
//     return {
//       name: "Python",
//       aliases: [
//         "py",
//         "gyp",
//         "ipython"
//       ],
//       unicodeRegex: true,
//       keywords: KEYWORDS3,
//       illegal: /(<\/|\?)|=>/,
//       contains: [
//         PROMPT,
//         NUMBER,
//         {
//           // very common convention
//           scope: "variable.language",
//           match: /\bself\b/
//         },
//         {
//           // eat "if" prior to string so that it won't accidentally be
//           // labeled as an f-string
//           beginKeywords: "if",
//           relevance: 0
//         },
//         { match: /\bor\b/, scope: "keyword" },
//         STRING,
//         COMMENT_TYPE,
//         hljs.HASH_COMMENT_MODE,
//         {
//           match: [
//             /\bdef/,
//             /\s+/,
//             IDENT_RE3
//           ],
//           scope: {
//             1: "keyword",
//             3: "title.function"
//           },
//           contains: [PARAMS]
//         },
//         {
//           variants: [
//             {
//               match: [
//                 /\bclass/,
//                 /\s+/,
//                 IDENT_RE3,
//                 /\s*/,
//                 /\(\s*/,
//                 IDENT_RE3,
//                 /\s*\)/
//               ]
//             },
//             {
//               match: [
//                 /\bclass/,
//                 /\s+/,
//                 IDENT_RE3
//               ]
//             }
//           ],
//           scope: {
//             1: "keyword",
//             3: "title.class",
//             6: "title.class.inherited"
//           }
//         },
//         {
//           className: "meta",
//           begin: /^[\t ]*@/,
//           end: /(?=#)|$/,
//           contains: [
//             NUMBER,
//             PARAMS,
//             STRING
//           ]
//         }
//       ]
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/java.js
//   var decimalDigits = "[0-9](_*[0-9])*";
//   var frac = `\\.(${decimalDigits})`;
//   var hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*";
//   var NUMERIC = {
//     className: "number",
//     variants: [
//       // DecimalFloatingPointLiteral
//       // including ExponentPart
//       { begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
//       // excluding ExponentPart
//       { begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
//       { begin: `(${frac})[fFdD]?\\b` },
//       { begin: `\\b(${decimalDigits})[fFdD]\\b` },
//       // HexadecimalFloatingPointLiteral
//       { begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))[pP][+-]?(${decimalDigits})[fFdD]?\\b` },
//       // DecimalIntegerLiteral
//       { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
//       // HexIntegerLiteral
//       { begin: `\\b0[xX](${hexDigits})[lL]?\\b` },
//       // OctalIntegerLiteral
//       { begin: "\\b0(_*[0-7])*[lL]?\\b" },
//       // BinaryIntegerLiteral
//       { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
//     ],
//     relevance: 0
//   };
//   function recurRegex(re, substitution, depth) {
//     if (depth === -1)
//       return "";
//     return re.replace(substitution, (_) => {
//       return recurRegex(re, substitution, depth - 1);
//     });
//   }
//   function java(hljs) {
//     const regex = hljs.regex;
//     const JAVA_IDENT_RE = "[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*";
//     const GENERIC_IDENT_RE = JAVA_IDENT_RE + recurRegex("(?:<" + JAVA_IDENT_RE + "~~~(?:\\s*,\\s*" + JAVA_IDENT_RE + "~~~)*>)?", /~~~/g, 2);
//     const MAIN_KEYWORDS = [
//       "synchronized",
//       "abstract",
//       "private",
//       "var",
//       "static",
//       "if",
//       "const ",
//       "for",
//       "while",
//       "strictfp",
//       "finally",
//       "protected",
//       "import",
//       "native",
//       "final",
//       "void",
//       "enum",
//       "else",
//       "break",
//       "transient",
//       "catch",
//       "instanceof",
//       "volatile",
//       "case",
//       "assert",
//       "package",
//       "default",
//       "public",
//       "try",
//       "switch",
//       "continue",
//       "throws",
//       "protected",
//       "public",
//       "private",
//       "module",
//       "requires",
//       "exports",
//       "do",
//       "sealed",
//       "yield",
//       "permits",
//       "goto",
//       "when"
//     ];
//     const BUILT_INS3 = [
//       "super",
//       "this"
//     ];
//     const LITERALS3 = [
//       "false",
//       "true",
//       "null"
//     ];
//     const TYPES3 = [
//       "char",
//       "boolean",
//       "long",
//       "float",
//       "int",
//       "byte",
//       "short",
//       "double"
//     ];
//     const KEYWORDS3 = {
//       keyword: MAIN_KEYWORDS,
//       literal: LITERALS3,
//       type: TYPES3,
//       built_in: BUILT_INS3
//     };
//     const ANNOTATION = {
//       className: "meta",
//       begin: "@" + JAVA_IDENT_RE,
//       contains: [
//         {
//           begin: /\(/,
//           end: /\)/,
//           contains: ["self"]
//           // allow nested () inside our annotation
//         }
//       ]
//     };
//     const PARAMS = {
//       className: "params",
//       begin: /\(/,
//       end: /\)/,
//       keywords: KEYWORDS3,
//       relevance: 0,
//       contains: [hljs.C_BLOCK_COMMENT_MODE],
//       endsParent: true
//     };
//     return {
//       name: "Java",
//       aliases: ["jsp"],
//       keywords: KEYWORDS3,
//       illegal: /<\/|#/,
//       contains: [
//         hljs.COMMENT(
//           "/\\*\\*",
//           "\\*/",
//           {
//             relevance: 0,
//             contains: [
//               {
//                 // eat up @'s in emails to prevent them to be recognized as doctags
//                 begin: /\w+@/,
//                 relevance: 0
//               },
//               {
//                 className: "doctag",
//                 begin: "@[A-Za-z]+"
//               }
//             ]
//           }
//         ),
//         // relevance boost
//         {
//           begin: /import java\.[a-z]+\./,
//           keywords: "import",
//           relevance: 2
//         },
//         hljs.C_LINE_COMMENT_MODE,
//         hljs.C_BLOCK_COMMENT_MODE,
//         {
//           begin: /"""/,
//           end: /"""/,
//           className: "string",
//           contains: [hljs.BACKSLASH_ESCAPE]
//         },
//         hljs.APOS_STRING_MODE,
//         hljs.QUOTE_STRING_MODE,
//         {
//           match: [
//             /\b(?:class|interface|enum|extends|implements|new)/,
//             /\s+/,
//             JAVA_IDENT_RE
//           ],
//           className: {
//             1: "keyword",
//             3: "title.class"
//           }
//         },
//         {
//           // Exceptions for hyphenated keywords
//           match: /non-sealed/,
//           scope: "keyword"
//         },
//         {
//           begin: [
//             regex.concat(/(?!else)/, JAVA_IDENT_RE),
//             /\s+/,
//             JAVA_IDENT_RE,
//             /\s+/,
//             /=(?!=)/
//           ],
//           className: {
//             1: "type",
//             3: "variable",
//             5: "operator"
//           }
//         },
//         {
//           begin: [
//             /record/,
//             /\s+/,
//             JAVA_IDENT_RE
//           ],
//           className: {
//             1: "keyword",
//             3: "title.class"
//           },
//           contains: [
//             PARAMS,
//             hljs.C_LINE_COMMENT_MODE,
//             hljs.C_BLOCK_COMMENT_MODE
//           ]
//         },
//         {
//           // Expression keywords prevent 'keyword Name(...)' from being
//           // recognized as a function definition
//           beginKeywords: "new throw return else",
//           relevance: 0
//         },
//         {
//           begin: [
//             "(?:" + GENERIC_IDENT_RE + "\\s+)",
//             hljs.UNDERSCORE_IDENT_RE,
//             /\s*(?=\()/
//           ],
//           className: { 2: "title.function" },
//           keywords: KEYWORDS3,
//           contains: [
//             {
//               className: "params",
//               begin: /\(/,
//               end: /\)/,
//               keywords: KEYWORDS3,
//               relevance: 0,
//               contains: [
//                 ANNOTATION,
//                 hljs.APOS_STRING_MODE,
//                 hljs.QUOTE_STRING_MODE,
//                 NUMERIC,
//                 hljs.C_BLOCK_COMMENT_MODE
//               ]
//             },
//             hljs.C_LINE_COMMENT_MODE,
//             hljs.C_BLOCK_COMMENT_MODE
//           ]
//         },
//         NUMERIC,
//         ANNOTATION
//       ]
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/go.js
//   function go(hljs) {
//     const LITERALS3 = [
//       "true",
//       "false",
//       "iota",
//       "nil"
//     ];
//     const BUILT_INS3 = [
//       "append",
//       "cap",
//       "close",
//       "complex",
//       "copy",
//       "imag",
//       "len",
//       "make",
//       "new",
//       "panic",
//       "print",
//       "println",
//       "real",
//       "recover",
//       "delete"
//     ];
//     const TYPES3 = [
//       "bool",
//       "byte",
//       "complex64",
//       "complex128",
//       "error",
//       "float32",
//       "float64",
//       "int8",
//       "int16",
//       "int32",
//       "int64",
//       "string",
//       "uint8",
//       "uint16",
//       "uint32",
//       "uint64",
//       "int",
//       "uint",
//       "uintptr",
//       "rune"
//     ];
//     const KWS = [
//       "break",
//       "case",
//       "chan",
//       "const",
//       "continue",
//       "default",
//       "defer",
//       "else",
//       "fallthrough",
//       "for",
//       "func",
//       "go",
//       "goto",
//       "if",
//       "import",
//       "interface",
//       "map",
//       "package",
//       "range",
//       "return",
//       "select",
//       "struct",
//       "switch",
//       "type",
//       "var"
//     ];
//     const KEYWORDS3 = {
//       keyword: KWS,
//       type: TYPES3,
//       literal: LITERALS3,
//       built_in: BUILT_INS3
//     };
//     return {
//       name: "Go",
//       aliases: ["golang"],
//       keywords: KEYWORDS3,
//       illegal: "</",
//       contains: [
//         hljs.C_LINE_COMMENT_MODE,
//         hljs.C_BLOCK_COMMENT_MODE,
//         {
//           className: "string",
//           variants: [
//             hljs.QUOTE_STRING_MODE,
//             hljs.APOS_STRING_MODE,
//             {
//               begin: "`",
//               end: "`"
//             }
//           ]
//         },
//         {
//           className: "number",
//           variants: [
//             {
//               match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
//               // hex without a present digit before . (making a digit afterwards required)
//               relevance: 0
//             },
//             {
//               match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
//               // hex with a present digit before . (making a digit afterwards optional)
//               relevance: 0
//             },
//             {
//               match: /-?\b0[oO](_?[0-7])*i?/,
//               // leading 0o octal
//               relevance: 0
//             },
//             {
//               match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
//               // decimal without a present digit before . (making a digit afterwards required)
//               relevance: 0
//             },
//             {
//               match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
//               // decimal with a present digit before . (making a digit afterwards optional)
//               relevance: 0
//             }
//           ]
//         },
//         {
//           begin: /:=/
//           // relevance booster
//         },
//         {
//           className: "function",
//           beginKeywords: "func",
//           end: "\\s*(\\{|$)",
//           excludeEnd: true,
//           contains: [
//             hljs.TITLE_MODE,
//             {
//               className: "params",
//               begin: /\(/,
//               end: /\)/,
//               endsParent: true,
//               keywords: KEYWORDS3,
//               illegal: /["']/
//             }
//           ]
//         }
//       ]
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/rust.js
//   function rust(hljs) {
//     const regex = hljs.regex;
//     const RAW_IDENTIFIER = /(r#)?/;
//     const UNDERSCORE_IDENT_RE = regex.concat(RAW_IDENTIFIER, hljs.UNDERSCORE_IDENT_RE);
//     const IDENT_RE3 = regex.concat(RAW_IDENTIFIER, hljs.IDENT_RE);
//     const FUNCTION_INVOKE = {
//       className: "title.function.invoke",
//       relevance: 0,
//       begin: regex.concat(
//         /\b/,
//         /(?!let|for|while|if|else|match\b)/,
//         IDENT_RE3,
//         regex.lookahead(/\s*\(/)
//       )
//     };
//     const NUMBER_SUFFIX = "([ui](8|16|32|64|128|size)|f(32|64))?";
//     const KEYWORDS3 = [
//       "abstract",
//       "as",
//       "async",
//       "await",
//       "become",
//       "box",
//       "break",
//       "const",
//       "continue",
//       "crate",
//       "do",
//       "dyn",
//       "else",
//       "enum",
//       "extern",
//       "false",
//       "final",
//       "fn",
//       "for",
//       "if",
//       "impl",
//       "in",
//       "let",
//       "loop",
//       "macro",
//       "match",
//       "mod",
//       "move",
//       "mut",
//       "override",
//       "priv",
//       "pub",
//       "ref",
//       "return",
//       "self",
//       "Self",
//       "static",
//       "struct",
//       "super",
//       "trait",
//       "true",
//       "try",
//       "type",
//       "typeof",
//       "union",
//       "unsafe",
//       "unsized",
//       "use",
//       "virtual",
//       "where",
//       "while",
//       "yield"
//     ];
//     const LITERALS3 = [
//       "true",
//       "false",
//       "Some",
//       "None",
//       "Ok",
//       "Err"
//     ];
//     const BUILTINS = [
//       // functions
//       "drop ",
//       // traits
//       "Copy",
//       "Send",
//       "Sized",
//       "Sync",
//       "Drop",
//       "Fn",
//       "FnMut",
//       "FnOnce",
//       "ToOwned",
//       "Clone",
//       "Debug",
//       "PartialEq",
//       "PartialOrd",
//       "Eq",
//       "Ord",
//       "AsRef",
//       "AsMut",
//       "Into",
//       "From",
//       "Default",
//       "Iterator",
//       "Extend",
//       "IntoIterator",
//       "DoubleEndedIterator",
//       "ExactSizeIterator",
//       "SliceConcatExt",
//       "ToString",
//       // macros
//       "assert!",
//       "assert_eq!",
//       "bitflags!",
//       "bytes!",
//       "cfg!",
//       "col!",
//       "concat!",
//       "concat_idents!",
//       "debug_assert!",
//       "debug_assert_eq!",
//       "env!",
//       "eprintln!",
//       "panic!",
//       "file!",
//       "format!",
//       "format_args!",
//       "include_bytes!",
//       "include_str!",
//       "line!",
//       "local_data_key!",
//       "module_path!",
//       "option_env!",
//       "print!",
//       "println!",
//       "select!",
//       "stringify!",
//       "try!",
//       "unimplemented!",
//       "unreachable!",
//       "vec!",
//       "write!",
//       "writeln!",
//       "macro_rules!",
//       "assert_ne!",
//       "debug_assert_ne!"
//     ];
//     const TYPES3 = [
//       "i8",
//       "i16",
//       "i32",
//       "i64",
//       "i128",
//       "isize",
//       "u8",
//       "u16",
//       "u32",
//       "u64",
//       "u128",
//       "usize",
//       "f32",
//       "f64",
//       "str",
//       "char",
//       "bool",
//       "Box",
//       "Option",
//       "Result",
//       "String",
//       "Vec"
//     ];
//     return {
//       name: "Rust",
//       aliases: ["rs"],
//       keywords: {
//         $pattern: hljs.IDENT_RE + "!?",
//         type: TYPES3,
//         keyword: KEYWORDS3,
//         literal: LITERALS3,
//         built_in: BUILTINS
//       },
//       illegal: "</",
//       contains: [
//         hljs.C_LINE_COMMENT_MODE,
//         hljs.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
//         hljs.inherit(hljs.QUOTE_STRING_MODE, {
//           begin: /b?"/,
//           illegal: null
//         }),
//         {
//           className: "symbol",
//           // negative lookahead to avoid matching `'`
//           begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/
//         },
//         {
//           scope: "string",
//           variants: [
//             { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
//             {
//               begin: /b?'/,
//               end: /'/,
//               contains: [
//                 {
//                   scope: "char.escape",
//                   match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           className: "number",
//           variants: [
//             { begin: "\\b0b([01_]+)" + NUMBER_SUFFIX },
//             { begin: "\\b0o([0-7_]+)" + NUMBER_SUFFIX },
//             { begin: "\\b0x([A-Fa-f0-9_]+)" + NUMBER_SUFFIX },
//             { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + NUMBER_SUFFIX }
//           ],
//           relevance: 0
//         },
//         {
//           begin: [
//             /fn/,
//             /\s+/,
//             UNDERSCORE_IDENT_RE
//           ],
//           className: {
//             1: "keyword",
//             3: "title.function"
//           }
//         },
//         {
//           className: "meta",
//           begin: "#!?\\[",
//           end: "\\]",
//           contains: [
//             {
//               className: "string",
//               begin: /"/,
//               end: /"/,
//               contains: [
//                 hljs.BACKSLASH_ESCAPE
//               ]
//             }
//           ]
//         },
//         {
//           begin: [
//             /let/,
//             /\s+/,
//             /(?:mut\s+)?/,
//             UNDERSCORE_IDENT_RE
//           ],
//           className: {
//             1: "keyword",
//             3: "keyword",
//             4: "variable"
//           }
//         },
//         // must come before impl/for rule later
//         {
//           begin: [
//             /for/,
//             /\s+/,
//             UNDERSCORE_IDENT_RE,
//             /\s+/,
//             /in/
//           ],
//           className: {
//             1: "keyword",
//             3: "variable",
//             5: "keyword"
//           }
//         },
//         {
//           begin: [
//             /type/,
//             /\s+/,
//             UNDERSCORE_IDENT_RE
//           ],
//           className: {
//             1: "keyword",
//             3: "title.class"
//           }
//         },
//         {
//           begin: [
//             /(?:trait|enum|struct|union|impl|for)/,
//             /\s+/,
//             UNDERSCORE_IDENT_RE
//           ],
//           className: {
//             1: "keyword",
//             3: "title.class"
//           }
//         },
//         {
//           begin: hljs.IDENT_RE + "::",
//           keywords: {
//             keyword: "Self",
//             built_in: BUILTINS,
//             type: TYPES3
//           }
//         },
//         {
//           className: "punctuation",
//           begin: "->"
//         },
//         FUNCTION_INVOKE
//       ]
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/sql.js
//   function sql(hljs) {
//     const regex = hljs.regex;
//     const COMMENT_MODE = hljs.COMMENT("--", "$");
//     const STRING = {
//       scope: "string",
//       variants: [
//         {
//           begin: /'/,
//           end: /'/,
//           contains: [{ match: /''/ }]
//         }
//       ]
//     };
//     const QUOTED_IDENTIFIER = {
//       begin: /"/,
//       end: /"/,
//       contains: [{ match: /""/ }]
//     };
//     const LITERALS3 = [
//       "true",
//       "false",
//       // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
//       // "null",
//       "unknown"
//     ];
//     const MULTI_WORD_TYPES = [
//       "double precision",
//       "large object",
//       "with timezone",
//       "without timezone"
//     ];
//     const TYPES3 = [
//       "bigint",
//       "binary",
//       "blob",
//       "boolean",
//       "char",
//       "character",
//       "clob",
//       "date",
//       "dec",
//       "decfloat",
//       "decimal",
//       "float",
//       "int",
//       "integer",
//       "interval",
//       "nchar",
//       "nclob",
//       "national",
//       "numeric",
//       "real",
//       "row",
//       "smallint",
//       "time",
//       "timestamp",
//       "varchar",
//       "varying",
//       // modifier (character varying)
//       "varbinary"
//     ];
//     const NON_RESERVED_WORDS = [
//       "add",
//       "asc",
//       "collation",
//       "desc",
//       "final",
//       "first",
//       "last",
//       "view"
//     ];
//     const RESERVED_WORDS = [
//       "abs",
//       "acos",
//       "all",
//       "allocate",
//       "alter",
//       "and",
//       "any",
//       "are",
//       "array",
//       "array_agg",
//       "array_max_cardinality",
//       "as",
//       "asensitive",
//       "asin",
//       "asymmetric",
//       "at",
//       "atan",
//       "atomic",
//       "authorization",
//       "avg",
//       "begin",
//       "begin_frame",
//       "begin_partition",
//       "between",
//       "bigint",
//       "binary",
//       "blob",
//       "boolean",
//       "both",
//       "by",
//       "call",
//       "called",
//       "cardinality",
//       "cascaded",
//       "case",
//       "cast",
//       "ceil",
//       "ceiling",
//       "char",
//       "char_length",
//       "character",
//       "character_length",
//       "check",
//       "classifier",
//       "clob",
//       "close",
//       "coalesce",
//       "collate",
//       "collect",
//       "column",
//       "commit",
//       "condition",
//       "connect",
//       "constraint",
//       "contains",
//       "convert",
//       "copy",
//       "corr",
//       "corresponding",
//       "cos",
//       "cosh",
//       "count",
//       "covar_pop",
//       "covar_samp",
//       "create",
//       "cross",
//       "cube",
//       "cume_dist",
//       "current",
//       "current_catalog",
//       "current_date",
//       "current_default_transform_group",
//       "current_path",
//       "current_role",
//       "current_row",
//       "current_schema",
//       "current_time",
//       "current_timestamp",
//       "current_path",
//       "current_role",
//       "current_transform_group_for_type",
//       "current_user",
//       "cursor",
//       "cycle",
//       "date",
//       "day",
//       "deallocate",
//       "dec",
//       "decimal",
//       "decfloat",
//       "declare",
//       "default",
//       "define",
//       "delete",
//       "dense_rank",
//       "deref",
//       "describe",
//       "deterministic",
//       "disconnect",
//       "distinct",
//       "double",
//       "drop",
//       "dynamic",
//       "each",
//       "element",
//       "else",
//       "empty",
//       "end",
//       "end_frame",
//       "end_partition",
//       "end-exec",
//       "equals",
//       "escape",
//       "every",
//       "except",
//       "exec",
//       "execute",
//       "exists",
//       "exp",
//       "external",
//       "extract",
//       "false",
//       "fetch",
//       "filter",
//       "first_value",
//       "float",
//       "floor",
//       "for",
//       "foreign",
//       "frame_row",
//       "free",
//       "from",
//       "full",
//       "function",
//       "fusion",
//       "get",
//       "global",
//       "grant",
//       "group",
//       "grouping",
//       "groups",
//       "having",
//       "hold",
//       "hour",
//       "identity",
//       "in",
//       "indicator",
//       "initial",
//       "inner",
//       "inout",
//       "insensitive",
//       "insert",
//       "int",
//       "integer",
//       "intersect",
//       "intersection",
//       "interval",
//       "into",
//       "is",
//       "join",
//       "json_array",
//       "json_arrayagg",
//       "json_exists",
//       "json_object",
//       "json_objectagg",
//       "json_query",
//       "json_table",
//       "json_table_primitive",
//       "json_value",
//       "lag",
//       "language",
//       "large",
//       "last_value",
//       "lateral",
//       "lead",
//       "leading",
//       "left",
//       "like",
//       "like_regex",
//       "listagg",
//       "ln",
//       "local",
//       "localtime",
//       "localtimestamp",
//       "log",
//       "log10",
//       "lower",
//       "match",
//       "match_number",
//       "match_recognize",
//       "matches",
//       "max",
//       "member",
//       "merge",
//       "method",
//       "min",
//       "minute",
//       "mod",
//       "modifies",
//       "module",
//       "month",
//       "multiset",
//       "national",
//       "natural",
//       "nchar",
//       "nclob",
//       "new",
//       "no",
//       "none",
//       "normalize",
//       "not",
//       "nth_value",
//       "ntile",
//       "null",
//       "nullif",
//       "numeric",
//       "octet_length",
//       "occurrences_regex",
//       "of",
//       "offset",
//       "old",
//       "omit",
//       "on",
//       "one",
//       "only",
//       "open",
//       "or",
//       "order",
//       "out",
//       "outer",
//       "over",
//       "overlaps",
//       "overlay",
//       "parameter",
//       "partition",
//       "pattern",
//       "per",
//       "percent",
//       "percent_rank",
//       "percentile_cont",
//       "percentile_disc",
//       "period",
//       "portion",
//       "position",
//       "position_regex",
//       "power",
//       "precedes",
//       "precision",
//       "prepare",
//       "primary",
//       "procedure",
//       "ptf",
//       "range",
//       "rank",
//       "reads",
//       "real",
//       "recursive",
//       "ref",
//       "references",
//       "referencing",
//       "regr_avgx",
//       "regr_avgy",
//       "regr_count",
//       "regr_intercept",
//       "regr_r2",
//       "regr_slope",
//       "regr_sxx",
//       "regr_sxy",
//       "regr_syy",
//       "release",
//       "result",
//       "return",
//       "returns",
//       "revoke",
//       "right",
//       "rollback",
//       "rollup",
//       "row",
//       "row_number",
//       "rows",
//       "running",
//       "savepoint",
//       "scope",
//       "scroll",
//       "search",
//       "second",
//       "seek",
//       "select",
//       "sensitive",
//       "session_user",
//       "set",
//       "show",
//       "similar",
//       "sin",
//       "sinh",
//       "skip",
//       "smallint",
//       "some",
//       "specific",
//       "specifictype",
//       "sql",
//       "sqlexception",
//       "sqlstate",
//       "sqlwarning",
//       "sqrt",
//       "start",
//       "static",
//       "stddev_pop",
//       "stddev_samp",
//       "submultiset",
//       "subset",
//       "substring",
//       "substring_regex",
//       "succeeds",
//       "sum",
//       "symmetric",
//       "system",
//       "system_time",
//       "system_user",
//       "table",
//       "tablesample",
//       "tan",
//       "tanh",
//       "then",
//       "time",
//       "timestamp",
//       "timezone_hour",
//       "timezone_minute",
//       "to",
//       "trailing",
//       "translate",
//       "translate_regex",
//       "translation",
//       "treat",
//       "trigger",
//       "trim",
//       "trim_array",
//       "true",
//       "truncate",
//       "uescape",
//       "union",
//       "unique",
//       "unknown",
//       "unnest",
//       "update",
//       "upper",
//       "user",
//       "using",
//       "value",
//       "values",
//       "value_of",
//       "var_pop",
//       "var_samp",
//       "varbinary",
//       "varchar",
//       "varying",
//       "versioning",
//       "when",
//       "whenever",
//       "where",
//       "width_bucket",
//       "window",
//       "with",
//       "within",
//       "without",
//       "year"
//     ];
//     const RESERVED_FUNCTIONS = [
//       "abs",
//       "acos",
//       "array_agg",
//       "asin",
//       "atan",
//       "avg",
//       "cast",
//       "ceil",
//       "ceiling",
//       "coalesce",
//       "corr",
//       "cos",
//       "cosh",
//       "count",
//       "covar_pop",
//       "covar_samp",
//       "cume_dist",
//       "dense_rank",
//       "deref",
//       "element",
//       "exp",
//       "extract",
//       "first_value",
//       "floor",
//       "json_array",
//       "json_arrayagg",
//       "json_exists",
//       "json_object",
//       "json_objectagg",
//       "json_query",
//       "json_table",
//       "json_table_primitive",
//       "json_value",
//       "lag",
//       "last_value",
//       "lead",
//       "listagg",
//       "ln",
//       "log",
//       "log10",
//       "lower",
//       "max",
//       "min",
//       "mod",
//       "nth_value",
//       "ntile",
//       "nullif",
//       "percent_rank",
//       "percentile_cont",
//       "percentile_disc",
//       "position",
//       "position_regex",
//       "power",
//       "rank",
//       "regr_avgx",
//       "regr_avgy",
//       "regr_count",
//       "regr_intercept",
//       "regr_r2",
//       "regr_slope",
//       "regr_sxx",
//       "regr_sxy",
//       "regr_syy",
//       "row_number",
//       "sin",
//       "sinh",
//       "sqrt",
//       "stddev_pop",
//       "stddev_samp",
//       "substring",
//       "substring_regex",
//       "sum",
//       "tan",
//       "tanh",
//       "translate",
//       "translate_regex",
//       "treat",
//       "trim",
//       "trim_array",
//       "unnest",
//       "upper",
//       "value_of",
//       "var_pop",
//       "var_samp",
//       "width_bucket"
//     ];
//     const POSSIBLE_WITHOUT_PARENS = [
//       "current_catalog",
//       "current_date",
//       "current_default_transform_group",
//       "current_path",
//       "current_role",
//       "current_schema",
//       "current_transform_group_for_type",
//       "current_user",
//       "session_user",
//       "system_time",
//       "system_user",
//       "current_time",
//       "localtime",
//       "current_timestamp",
//       "localtimestamp"
//     ];
//     const COMBOS = [
//       "create table",
//       "insert into",
//       "primary key",
//       "foreign key",
//       "not null",
//       "alter table",
//       "add constraint",
//       "grouping sets",
//       "on overflow",
//       "character set",
//       "respect nulls",
//       "ignore nulls",
//       "nulls first",
//       "nulls last",
//       "depth first",
//       "breadth first"
//     ];
//     const FUNCTIONS = RESERVED_FUNCTIONS;
//     const KEYWORDS3 = [
//       ...RESERVED_WORDS,
//       ...NON_RESERVED_WORDS
//     ].filter((keyword) => {
//       return !RESERVED_FUNCTIONS.includes(keyword);
//     });
//     const VARIABLE = {
//       scope: "variable",
//       match: /@[a-z0-9][a-z0-9_]*/
//     };
//     const OPERATOR = {
//       scope: "operator",
//       match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
//       relevance: 0
//     };
//     const FUNCTION_CALL = {
//       match: regex.concat(/\b/, regex.either(...FUNCTIONS), /\s*\(/),
//       relevance: 0,
//       keywords: { built_in: FUNCTIONS }
//     };
//     function kws_to_regex(list) {
//       return regex.concat(
//         /\b/,
//         regex.either(...list.map((kw) => {
//           return kw.replace(/\s+/, "\\s+");
//         })),
//         /\b/
//       );
//     }
//     const MULTI_WORD_KEYWORDS = {
//       scope: "keyword",
//       match: kws_to_regex(COMBOS),
//       relevance: 0
//     };
//     function reduceRelevancy(list, {
//       exceptions,
//       when
//     } = {}) {
//       const qualifyFn = when;
//       exceptions = exceptions || [];
//       return list.map((item) => {
//         if (item.match(/\|\d+$/) || exceptions.includes(item)) {
//           return item;
//         } else if (qualifyFn(item)) {
//           return `${item}|0`;
//         } else {
//           return item;
//         }
//       });
//     }
//     return {
//       name: "SQL",
//       case_insensitive: true,
//       // does not include {} or HTML tags `</`
//       illegal: /[{}]|<\//,
//       keywords: {
//         $pattern: /\b[\w\.]+/,
//         keyword: reduceRelevancy(KEYWORDS3, { when: (x) => x.length < 3 }),
//         literal: LITERALS3,
//         type: TYPES3,
//         built_in: POSSIBLE_WITHOUT_PARENS
//       },
//       contains: [
//         {
//           scope: "type",
//           match: kws_to_regex(MULTI_WORD_TYPES)
//         },
//         MULTI_WORD_KEYWORDS,
//         FUNCTION_CALL,
//         VARIABLE,
//         STRING,
//         QUOTED_IDENTIFIER,
//         hljs.C_NUMBER_MODE,
//         hljs.C_BLOCK_COMMENT_MODE,
//         COMMENT_MODE,
//         OPERATOR
//       ]
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/diff.js
//   function diff(hljs) {
//     const regex = hljs.regex;
//     return {
//       name: "Diff",
//       aliases: ["patch"],
//       contains: [
//         {
//           className: "meta",
//           relevance: 10,
//           match: regex.either(
//             /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
//             /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
//             /^--- +\d+,\d+ +----$/
//           )
//         },
//         {
//           className: "comment",
//           variants: [
//             {
//               begin: regex.either(
//                 /Index: /,
//                 /^index/,
//                 /={3,}/,
//                 /^-{3}/,
//                 /^\*{3} /,
//                 /^\+{3}/,
//                 /^diff --git/
//               ),
//               end: /$/
//             },
//             { match: /^\*{15}$/ }
//           ]
//         },
//         {
//           className: "addition",
//           begin: /^\+/,
//           end: /$/
//         },
//         {
//           className: "deletion",
//           begin: /^-/,
//           end: /$/
//         },
//         {
//           className: "addition",
//           begin: /^!/,
//           end: /$/
//         }
//       ]
//     };
//   }
// 
//   // node_modules/highlight.js/es/languages/dockerfile.js
//   function dockerfile(hljs) {
//     const KEYWORDS3 = [
//       "from",
//       "maintainer",
//       "expose",
//       "env",
//       "arg",
//       "user",
//       "onbuild",
//       "stopsignal"
//     ];
//     return {
//       name: "Dockerfile",
//       aliases: ["docker"],
//       case_insensitive: true,
//       keywords: KEYWORDS3,
//       contains: [
//         hljs.HASH_COMMENT_MODE,
//         hljs.APOS_STRING_MODE,
//         hljs.QUOTE_STRING_MODE,
//         hljs.NUMBER_MODE,
//         {
//           beginKeywords: "run cmd entrypoint volume add copy workdir label healthcheck shell",
//           starts: {
//             end: /[^\\]$/,
//             subLanguage: "bash"
//           }
//         }
//       ],
//       illegal: "</"
//     };
//   }
// 
//   // shared/utils/highlight.ts
//   async function loadHighlightJsStyle() {
//     try {
//       if (document.getElementById("hljs-theme-style"))
//         return;
//       const link = document.createElement("link");
//       link.id = "hljs-theme-style";
//       link.rel = "stylesheet";
//       link.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css";
//       document.head.appendChild(link);
//     } catch (error) {
//       console.error("Failed to load highlight.js styles:", error);
//     }
//   }
// 
//   // shared/utils/markdownRenderer.ts
//   core_default.registerLanguage("javascript", javascript);
//   core_default.registerLanguage("typescript", typescript);
//   core_default.registerLanguage("json", json);
//   core_default.registerLanguage("yaml", yaml);
//   core_default.registerLanguage("markdown", markdown);
//   core_default.registerLanguage("html", xml);
//   core_default.registerLanguage("xml", xml);
//   core_default.registerLanguage("css", css);
//   core_default.registerLanguage("scss", scss);
//   core_default.registerLanguage("bash", bash);
//   core_default.registerLanguage("shell", bash);
//   core_default.registerLanguage("sh", bash);
//   core_default.registerLanguage("python", python);
//   core_default.registerLanguage("java", java);
//   core_default.registerLanguage("go", go);
//   core_default.registerLanguage("rust", rust);
//   core_default.registerLanguage("sql", sql);
//   core_default.registerLanguage("diff", diff);
//   core_default.registerLanguage("dockerfile", dockerfile);
//   var SafeMarkdownRenderer = class {
//     constructor(options = {}) {
//       __publicField(this, "options");
//       __publicField(this, "md");
//       // 允许的 HTML 标签白名单
//       __publicField(this, "defaultAllowedTags", [
//         "h1",
//         "h2",
//         "h3",
//         "h4",
//         "h5",
//         "h6",
//         "p",
//         "br",
//         "strong",
//         "em",
//         "code",
//         "pre",
//         "ul",
//         "ol",
//         "li",
//         "a",
//         "blockquote"
//       ]);
//       this.options = {
//         enableCodeHighlight: true,
//         allowedTags: this.defaultAllowedTags,
//         ...options
//       };
//       this.md = new import_markdown_it.default({
//         html: false,
//         // 禁用 HTML 以防止 XSS 攻击
//         linkify: true,
//         breaks: true,
//         // 使用 highlight.js 在渲染阶段生成高亮后的 HTML
//         highlight: (str, lang) => {
//           const language = (lang || "").toLowerCase();
//           if (language && core_default.getLanguage(language)) {
//             try {
//               const { value } = core_default.highlight(str, {
//                 language,
//                 ignoreIllegals: true
//               });
//               return `<pre class="code-block"><code class="hljs language-${language}">${value}</code></pre>`;
//             } catch (e) {
//               console.error(`Error highlighting code block with language ${language}:`, e);
//             }
//           }
//           const escaped = this.escapeHtml(str);
//           return `<pre class="code-block"><code class="hljs">${escaped}</code></pre>`;
//         }
//       });
//       const self = this;
//       const defaultFence = this.md.renderer.rules.fence?.bind(this.md.renderer);
//       this.md.renderer.rules.fence = function(tokens, idx, options2, env, slf) {
//         const token = tokens[idx];
//         const info = (token.info || "").trim().toLowerCase();
//         const content = token.content || "";
//         if (info === "mermaid" || info === "sequencediagram") {
//           const diagramId = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
//           return `<div class="mermaid-diagram" id="${diagramId}">${self.escapeHtml(content)}</div>`;
//         }
//         if (defaultFence) {
//           return defaultFence(tokens, idx, options2, env, slf);
//         }
//         const lang = info || "text";
//         const escaped = self.escapeHtml(content);
//         return `<pre class="code-block"><code class="hljs language-${lang}">${escaped}</code></pre>`;
//       };
//     }
//     /**
//      * 渲染 Markdown 为 HTML
//      */
//     render(markdown2) {
//       if (!markdown2 || typeof markdown2 !== "string") {
//         return "";
//       }
//       const html = this.md.render(markdown2);
//       const sanitizedHtml = import_isomorphic_dompurify.default.sanitize(html, {
//         ALLOWED_TAGS: [
//           "h1",
//           "h2",
//           "h3",
//           "h4",
//           "h5",
//           "h6",
//           "p",
//           "br",
//           "strong",
//           "em",
//           "code",
//           "pre",
//           "ul",
//           "ol",
//           "li",
//           "a",
//           "blockquote",
//           "div"
//         ],
//         ALLOWED_ATTR: ["class", "id", "href", "target", "rel"],
//         ALLOW_DATA_ATTR: false
//       });
//       return sanitizedHtml;
//     }
//     /**
//      * 转义 HTML 字符以防止 XSS
//      */
//     escapeHtml(text) {
//       const div = document.createElement("div");
//       div.textContent = text;
//       return div.innerHTML;
//     }
//     /**
//      * 保留已经处理的 HTML 标签，对其他内容进行转义
//      */
//     preserveHtmlTags(text) {
//       if (text.includes("<") && text.includes(">")) {
//         return text;
//       }
//       return this.escapeHtml(text);
//     }
//     /**
//      * 渲染标题
//      */
//     renderHeaders(html) {
//       html = html.replace(/^######\s(.+)$/gm, (match, title) => `<h6>${this.escapeHtml(title.trim())}</h6>`);
//       html = html.replace(/^#####\s(.+)$/gm, (match, title) => `<h5>${this.escapeHtml(title.trim())}</h5>`);
//       html = html.replace(/^####\s(.+)$/gm, (match, title) => `<h4>${this.escapeHtml(title.trim())}</h4>`);
//       html = html.replace(/^###\s(.+)$/gm, (match, title) => `<h3>${this.escapeHtml(title.trim())}</h3>`);
//       html = html.replace(/^##\s(.+)$/gm, (match, title) => `<h2>${this.escapeHtml(title.trim())}</h2>`);
//       html = html.replace(/^#\s(.+)$/gm, (match, title) => `<h1>${this.escapeHtml(title.trim())}</h1>`);
//       return html;
//     }
//     /**
//      * 渲染代码块
//      */
//     renderCodeBlocks(html) {
//       console.log("renderCodeBlocks called, input length:", html.length);
//       const hasCodeBlocks = html.includes("```");
//       console.log("Contains code blocks:", hasCodeBlocks);
//       if (hasCodeBlocks) {
//         const codeBlockMatches = html.match(/```[\s\S]*?```/g);
//         console.log("Found code block matches:", codeBlockMatches?.length || 0);
//         if (codeBlockMatches) {
//           codeBlockMatches.forEach((match, index) => {
//             console.log(`Code block ${index}:`, match.substring(0, 100) + "...");
//           });
//         }
//       }
//       html = html.replace(/```([^`]*?)```/gs, (match, codeWithLang) => {
//         const lines = codeWithLang.trim().split("\n");
//         const firstLine = lines[0] || "";
//         const language = firstLine.toLowerCase().trim();
//         const code = lines.slice(1).join("\n").trim();
//         console.log("Processing code block:", { language, codeLength: code.length });
//         if (language === "mermaid" || language === "sequencediagram") {
//           console.log("Detected Mermaid diagram!");
//           return this.renderMermaidDiagram(code);
//         }
//         console.log("Rendering as regular code block");
//         return `<pre><code class="language-${language}">${this.escapeHtml(code)}</code></pre>`;
//       });
//       console.log("renderCodeBlocks finished, output length:", html.length);
//       return html;
//     }
//     /**
//      * 渲染 Mermaid 图表
//      */
//     renderMermaidDiagram(code) {
//       const diagramId = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
//       console.log("Rendering Mermaid diagram:", { diagramId, code: code.substring(0, 100) + "..." });
//       return `<div class="mermaid-diagram" id="${diagramId}">${this.escapeHtml(code)}</div>`;
//     }
//     /**
//      * 渲染行内代码
//      */
//     renderInlineCode(html) {
//       html = html.replace(/`([^`\n]+)`/g, (match, code) => {
//         if (html.indexOf("<pre><code>") !== -1 && html.indexOf("</code></pre>") !== -1) {
//           const preStart = html.lastIndexOf("<pre><code>", html.indexOf(match));
//           const preEnd = html.indexOf("</code></pre>", html.indexOf(match));
//           if (preStart !== -1 && preEnd !== -1 && preStart < html.indexOf(match) && html.indexOf(match) < preEnd) {
//             return match;
//           }
//         }
//         return `<code>${this.escapeHtml(code)}</code>`;
//       });
//       return html;
//     }
//     /**
//      * 渲染粗体和斜体
//      */
//     renderBoldItalic(html) {
//       html = html.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
//       html = html.replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
//       return html;
//     }
//     /**
//      * 渲染链接
//      */
//     renderLinks(html) {
//       html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
//         if (url.match(/^https?:\/\//)) {
//           return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
//         }
//         return match;
//       });
//       return html;
//     }
//     /**
//      * 渲染列表
//      */
//     renderLists(html) {
//       const lines = html.split("\n");
//       const result = [];
//       let inUnorderedList = false;
//       let inOrderedList = false;
//       let listItems = [];
//       for (let i = 0; i < lines.length; i++) {
//         const line = lines[i];
//         const isUnorderedListItem = /^[*+-]\s(.+)$/.test(line);
//         const isOrderedListItem = /^\d+\.\s(.+)$/.test(line);
//         if (isUnorderedListItem) {
//           if (inOrderedList) {
//             result.push(`<ol>${listItems.join("")}</ol>`);
//             inOrderedList = false;
//             listItems = [];
//           }
//           if (!inUnorderedList) {
//             inUnorderedList = true;
//             listItems = [];
//           }
//           const content = line.replace(/^[*+-]\s/, "");
//           const formattedContent = content.replace(/\n/g, "<br>");
//           listItems.push(`<li>${formattedContent}</li>`);
//         } else if (isOrderedListItem) {
//           if (inUnorderedList) {
//             result.push(`<ul>${listItems.join("")}</ul>`);
//             inUnorderedList = false;
//             listItems = [];
//           }
//           if (!inOrderedList) {
//             inOrderedList = true;
//             listItems = [];
//           }
//           const content = line.replace(/^\d+\.\s/, "");
//           listItems.push(`<li>${content}</li>`);
//         } else {
//           if (inUnorderedList) {
//             result.push(`<ul>${listItems.join("")}</ul>`);
//             inUnorderedList = false;
//             listItems = [];
//           } else if (inOrderedList) {
//             result.push(`<ol>${listItems.join("")}</ol>`);
//             inOrderedList = false;
//             listItems = [];
//           }
//           result.push(line);
//         }
//       }
//       if (inUnorderedList && listItems.length > 0) {
//         result.push(`<ul>${listItems.join("")}</ul>`);
//       } else if (inOrderedList && listItems.length > 0) {
//         result.push(`<ol>${listItems.join("")}</ol>`);
//       }
//       return result.join("\n");
//     }
//     /**
//      * 渲染段落
//      */
//     renderParagraphs(html) {
//       const paragraphs = html.split("\n\n").filter((p) => p.trim());
//       return paragraphs.map((paragraph) => {
//         const trimmed = paragraph.trim();
//         if (trimmed.match(/^<(h[1-6]|ul|ol|pre|blockquote|div)/)) {
//           return trimmed;
//         }
//         if (!trimmed) {
//           return "";
//         }
//         let content = trimmed;
//         const hasHtmlTags = /<[^>]+>/.test(content);
//         if (!hasHtmlTags) {
//           content = this.escapeHtml(content);
//           content = content.replace(/\n/g, "<br>");
//         } else {
//           content = trimmed;
//         }
//         return `<p>${content}</p>`;
//       }).join("\n\n");
//     }
//     /**
//      * 添加代码高亮（简单实现）
//      */
//     highlightCode(container) {
//       this.ensureHighlightCss();
//       this.renderMermaidDiagrams(container);
//     }
//     /**
//      * 动态加载 highlight.js 与默认样式
//      */
//     loadHighlightJsLibrary() {
//       return new Promise((resolve) => {
//         this.ensureHighlightCss();
//         resolve();
//       });
//     }
//     /**
//      * 确保高亮样式已加载（已移除 CDN 依赖）
//      */
//     ensureHighlightCss() {
//       loadHighlightJsStyle().catch(() => {
//         if (!document.getElementById("hljs-style-note")) {
//           const note = document.createElement("style");
//           note.id = "hljs-style-note";
//           note.textContent = "/* highlight.js styles should be bundled locally */";
//           document.head.appendChild(note);
//         }
//       });
//     }
//     /**
//      * 渲染 Mermaid 图表
//      */
//     renderMermaidDiagrams(container) {
//       const mermaidDiagrams = container.querySelectorAll(".mermaid-diagram");
//       if (mermaidDiagrams.length === 0)
//         return;
//       console.log(`Found ${mermaidDiagrams.length} Mermaid diagrams to render`);
//       this.loadMermaidLibrary().then(() => {
//         console.log("Mermaid library loaded successfully");
//         mermaidDiagrams.forEach((diagram, index) => {
//           console.log(`Initializing Mermaid diagram ${index + 1}/${mermaidDiagrams.length}`);
//           this.initializeMermaidDiagram(diagram);
//         });
//       }).catch((error) => {
//         console.error("Failed to load Mermaid library:", error);
//         mermaidDiagrams.forEach((diagram) => {
//           const code = diagram.textContent || "";
//           diagram.innerHTML = `<pre><code>${code}</code></pre>`;
//           diagram.classList.add("mermaid-fallback");
//         });
//       });
//     }
//     /**
//      * 动态加载 Mermaid 库
//      */
//     loadMermaidLibrary() {
//       return new Promise((resolve, reject) => {
//         if (window.mermaid) {
//           console.log("Mermaid library already loaded");
//           resolve();
//           return;
//         }
//         console.log("Loading Mermaid library from CDN...");
//         const script = document.createElement("script");
//         script.src = "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js";
//         script.async = true;
//         script.onload = () => {
//           console.log("Mermaid library script loaded, initializing...");
//           try {
//             const mermaid = window.mermaid;
//             mermaid.initialize({
//               startOnLoad: false,
//               theme: "default",
//               securityLevel: "loose",
//               fontFamily: "monospace"
//             });
//             console.log("Mermaid library initialized");
//             resolve();
//           } catch (error) {
//             console.error("Error initializing Mermaid:", error);
//             reject(error);
//           }
//         };
//         script.onerror = (error) => {
//           console.error("Failed to load Mermaid script:", error);
//           reject(new Error("Failed to load Mermaid library"));
//         };
//         document.head.appendChild(script);
//       });
//     }
//     /**
//      * 初始化单个 Mermaid 图表
//      */
//     initializeMermaidDiagram(element) {
//       const mermaid = window.mermaid;
//       if (!mermaid) {
//         console.error("Mermaid library not available");
//         return;
//       }
//       const code = element.textContent || "";
//       const id = element.id;
//       console.log(`Rendering diagram ${id}:`, code.substring(0, 100) + "...");
//       try {
//         element.textContent = "";
//         element.innerHTML = '<div style="padding: 20px; color: #666;">\u6B63\u5728\u6E32\u67D3\u56FE\u8868...</div>';
//         mermaid.render(id + "-svg", code).then((result) => {
//           console.log(`Successfully rendered diagram ${id}`);
//           element.innerHTML = result.svg;
//           element.classList.add("mermaid-rendered");
//           element.addEventListener("click", () => {
//             this.showMermaidFullscreen(result.svg, id);
//           });
//         }).catch((error) => {
//           console.error(`Mermaid rendering error for ${id}:`, error);
//           element.innerHTML = `
//                     <div style="color: #dc2626; margin-bottom: 8px;">\u26A0\uFE0F \u56FE\u8868\u6E32\u67D3\u5931\u8D25</div>
//                     <pre><code>${this.escapeHtml(code)}</code></pre>
//                 `;
//           element.classList.add("mermaid-error");
//         });
//       } catch (error) {
//         console.error(`Mermaid initialization error for ${id}:`, error);
//         element.innerHTML = `
//                 <div style="color: #dc2626; margin-bottom: 8px;">\u26A0\uFE0F \u56FE\u8868\u521D\u59CB\u5316\u5931\u8D25</div>
//                 <pre><code>${this.escapeHtml(code)}</code></pre>
//             `;
//         element.classList.add("mermaid-error");
//       }
//     }
//     /**
//      * 显示 Mermaid 图表全屏模式
//      */
//     showMermaidFullscreen(svgContent, diagramId) {
//       const modal = document.createElement("div");
//       modal.className = "mermaid-fullscreen-modal";
//       modal.innerHTML = `
//             <div class="mermaid-fullscreen-content">
//                 <button class="mermaid-fullscreen-close" onclick="this.closest('.mermaid-fullscreen-modal').remove()">&times;</button>
//                 ${svgContent}
//             </div>
//         `;
//       modal.addEventListener("click", (e) => {
//         if (e.target === modal) {
//           modal.remove();
//         }
//       });
//       const handleEscape = (e) => {
//         if (e.key === "Escape") {
//           modal.remove();
//           document.removeEventListener("keydown", handleEscape);
//         }
//       };
//       document.addEventListener("keydown", handleEscape);
//       document.body.appendChild(modal);
//     }
//     /**
//      * 应用基础语法高亮
//      */
//     applyBasicHighlighting(codeBlock) {
//       let code = codeBlock.textContent || "";
//       const keywords = [
//         "function",
//         "const",
//         "let",
//         "var",
//         "if",
//         "else",
//         "for",
//         "while",
//         "return",
//         "class",
//         "interface",
//         "type",
//         "import",
//         "export",
//         "async",
//         "await",
//         "try",
//         "catch",
//         "throw",
//         "new"
//       ];
//       keywords.forEach((keyword) => {
//         const regex = new RegExp(`\\b${keyword}\\b`, "g");
//         code = code.replace(regex, `<span class="keyword">${keyword}</span>`);
//       });
//       code = code.replace(/(["'])((?:(?!\1)[^\\]|\\.)*)(\1)/g, '<span class="string">$1$2$3</span>');
//       code = code.replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>');
//       code = code.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>');
//       codeBlock.innerHTML = code;
//     }
//   };
// 
//   // src/client/shared/services/ShareService.ts
//   var ShareService = class {
//     constructor(getIcon, options = {}) {
//       // Default poster size; actual canvas may be computed per-card
//       __publicField(this, "defaultWidth", 1080);
//       __publicField(this, "defaultHeight", 1440);
//       __publicField(this, "padding", 72);
//       // 72px ~ 1in logical at 96dpi
//       __publicField(this, "getIcon");
//       __publicField(this, "options");
//       this.getIcon = getIcon;
//       this.options = options;
//     }
//     async shareCard(card) {
//       const canvas = await this.renderCanvas(card);
//       const blob = await new Promise(
//         (resolve) => canvas.toBlob((b) => resolve(b), "image/png", 0.95)
//       );
//       try {
//         if (navigator.clipboard && window.ClipboardItem) {
//           const item = new ClipboardItem({ "image/png": blob });
//           await navigator.clipboard.write([item]);
//           this.toast("\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F");
//           return { method: "clipboard", ok: true };
//         }
//         throw new Error("Clipboard API not supported");
//       } catch {
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement("a");
//         a.href = url;
//         const safeTitle = (card.title || "share").replace(/[\n\t\s]+/g, "_").slice(0, 60);
//         a.download = `${safeTitle}.png`;
//         document.body.appendChild(a);
//         a.click();
//         a.remove();
//         URL.revokeObjectURL(url);
//         this.toast("\u5DF2\u4E0B\u8F7D\u56FE\u7247\uFF08\u526A\u8D34\u677F\u4E0D\u53EF\u7528\uFF09");
//         return { method: "download", ok: true };
//       }
//     }
//     // Open a preview modal to let users confirm and choose action
//     async openPreview(card, opts) {
//       const size = this.computeCanvasSize(opts?.matchElement);
//       const pageImageInfo = this.analyzePageImageDisplay(opts?.matchElement, card.imageUrl);
//       const canvas = await this.renderCanvas(card, size, pageImageInfo);
//       const blob = await new Promise(
//         (resolve) => canvas.toBlob((b) => resolve(b), "image/png", 0.95)
//       );
//       const overlay = document.createElement("div");
//       overlay.className = "share-preview-overlay";
//       overlay.tabIndex = -1;
//       const modal = document.createElement("div");
//       modal.className = "share-preview-modal";
//       modal.setAttribute("role", "dialog");
//       modal.setAttribute("aria-modal", "true");
//       modal.setAttribute("aria-label", "\u5206\u4EAB\u9884\u89C8");
//       const header = document.createElement("div");
//       header.className = "share-preview-header";
//       header.innerHTML = `
//       <div class="share-preview-title">\u5206\u4EAB\u9884\u89C8</div>
//       <button class="share-preview-close" aria-label="\u5173\u95ED\u9884\u89C8" title="\u5173\u95ED">\xD7</button>
//     `;
//       const body = document.createElement("div");
//       body.className = "share-preview-body";
//       const previewWrapper = document.createElement("div");
//       previewWrapper.className = "share-preview-canvas-wrap";
//       previewWrapper.appendChild(canvas);
//       body.appendChild(previewWrapper);
//       const actions = document.createElement("div");
//       actions.className = "share-preview-actions";
//       const copyBtn = document.createElement("button");
//       copyBtn.className = "share-action primary";
//       copyBtn.textContent = "\u590D\u5236\u5230\u526A\u8D34\u677F";
//       const downloadBtn = document.createElement("button");
//       downloadBtn.className = "share-action";
//       downloadBtn.textContent = "\u4E0B\u8F7D\u56FE\u7247";
//       const copyLinkBtn = document.createElement("button");
//       copyLinkBtn.className = "share-action";
//       copyLinkBtn.textContent = "\u590D\u5236\u94FE\u63A5";
//       const cancelBtn = document.createElement("button");
//       cancelBtn.className = "share-action subtle";
//       cancelBtn.textContent = "\u53D6\u6D88";
//       actions.append(copyBtn, downloadBtn, copyLinkBtn, cancelBtn);
//       modal.append(header, body, actions);
//       overlay.appendChild(modal);
//       document.body.appendChild(overlay);
//       const cleanup = () => overlay.remove();
//       overlay.addEventListener("click", (e) => {
//         if (e.target === overlay)
//           cleanup();
//       });
//       header.querySelector(".share-preview-close")?.addEventListener("click", cleanup);
//       const onKey = (e) => {
//         if (e.key === "Escape") {
//           cleanup();
//           document.removeEventListener("keydown", onKey);
//         }
//       };
//       document.addEventListener("keydown", onKey);
//       copyBtn.addEventListener("click", async () => {
//         const ok = await this.tryClipboard(blob);
//         if (ok) {
//           this.toast("\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F");
//           cleanup();
//         } else {
//           this.toast("\u526A\u8D34\u677F\u4E0D\u53EF\u7528\uFF0C\u5DF2\u81EA\u52A8\u4E0B\u8F7D");
//           this.triggerDownload(blob, card.title);
//           cleanup();
//         }
//       });
//       downloadBtn.addEventListener("click", () => {
//         this.triggerDownload(blob, card.title);
//         this.toast("\u5DF2\u5F00\u59CB\u4E0B\u8F7D");
//         cleanup();
//       });
//       copyLinkBtn.addEventListener("click", async () => {
//         try {
//           const link = this.buildDeepLink(card);
//           await navigator.clipboard.writeText(link);
//           this.toast("\u94FE\u63A5\u5DF2\u590D\u5236");
//         } catch {
//           this.toast("\u590D\u5236\u94FE\u63A5\u5931\u8D25");
//         }
//       });
//       cancelBtn.addEventListener("click", cleanup);
//       header.querySelector(".share-preview-close")?.focus();
//     }
//     async tryClipboard(blob) {
//       try {
//         if (navigator.clipboard && window.ClipboardItem) {
//           const item = new ClipboardItem({ "image/png": blob });
//           await navigator.clipboard.write([item]);
//           return true;
//         }
//       } catch {
//       }
//       return false;
//     }
//     triggerDownload(blob, title) {
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       const safeTitle = (title || "share").replace(/[\n\t\s]+/g, "_").slice(0, 60);
//       a.download = `${safeTitle}.png`;
//       document.body.appendChild(a);
//       a.click();
//       a.remove();
//       URL.revokeObjectURL(url);
//     }
//     async renderCanvas(card, size, pageImageInfo) {
//       const canvas = document.createElement("canvas");
//       const width = size?.width ?? this.defaultWidth;
//       const height = size?.height ?? this.defaultHeight;
//       canvas.width = width;
//       canvas.height = height;
//       const ctx = canvas.getContext("2d");
//       try {
//         await document.fonts?.ready;
//       } catch {
//       }
//       ctx.fillStyle = "#ffffff";
//       ctx.fillRect(0, 0, width, height);
//       const headerH = 160;
//       const grad = ctx.createLinearGradient(0, 0, width, 0);
//       grad.addColorStop(0, "#eff6ff");
//       grad.addColorStop(1, "#f8fafc");
//       ctx.fillStyle = grad;
//       ctx.fillRect(0, 0, width, headerH);
//       let y = this.padding;
//       const icon = this.getIcon(card.category) || "\u{1F4CB}";
//       const iconR = 44;
//       const iconCx = this.padding + iconR;
//       const iconCy = y + iconR;
//       ctx.fillStyle = "#e5f2ff";
//       this.roundRect(ctx, iconCx - iconR, iconCy - iconR, iconR * 2, iconR * 2, 24);
//       ctx.fill();
//       ctx.font = "48px system-ui, -apple-system, Segoe UI, Roboto";
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.fillStyle = "#111827";
//       ctx.fillText(icon, iconCx, iconCy + 2);
//       const titleX = iconCx + iconR + 24;
//       const titleMaxWidth = width - titleX - this.padding;
//       ctx.textAlign = "left";
//       ctx.textBaseline = "alphabetic";
//       ctx.fillStyle = "#0f172a";
//       ctx.font = "bold 48px ui-sans-serif, -apple-system, system-ui, Segoe UI, Roboto";
//       y += 8;
//       y = this.wrapText(ctx, card.title || "", titleX, y + 24, titleMaxWidth, 56, 2);
//       ctx.font = "28px ui-sans-serif, -apple-system, system-ui";
//       ctx.fillStyle = "#475569";
//       const metaParts = [];
//       if (card.difficulty)
//         metaParts.push(this.mapDifficulty(card.difficulty));
//       if (card.readTime)
//         metaParts.push(`\u{1F4D6} ${card.readTime}`);
//       if (metaParts.length) {
//         y += 8;
//         ctx.fillText(metaParts.join("  \xB7  "), titleX, y + 24);
//         y += 48;
//       } else {
//         y += 40;
//       }
//       const bodyX = this.padding;
//       const bodyMaxWidth = width - this.padding * 2;
//       ctx.font = "32px ui-sans-serif, -apple-system, system-ui";
//       ctx.fillStyle = "#111827";
//       if (card.description) {
//         y = this.wrapText(ctx, card.description, bodyX, y + 24, bodyMaxWidth, 44, 3);
//       } else if (card.overview) {
//         y = this.wrapText(ctx, card.overview, bodyX, y + 24, bodyMaxWidth, 44, 3);
//       }
//       if (card.imageUrl) {
//         y += 12;
//         const coverMaxW = width - this.padding * 2;
//         const coverImg = await this.loadImage(card.imageUrl).catch(() => null);
//         const radius = 16;
//         const coverY = y;
//         if (coverImg) {
//           const naturalRatio = coverImg.naturalHeight / coverImg.naturalWidth;
//           const targetRatio = pageImageInfo?.pageImageAspect ?? naturalRatio;
//           let coverW = coverMaxW;
//           let coverH = Math.round(coverW * targetRatio);
//           const dynamicMaxH = Math.min(
//             Math.round(coverMaxW * 1.2),
//             // 基于宽度的动态限制
//             Math.round((height - y - this.padding - 300) * 0.6)
//             // 基于剩余空间的限制
//           );
//           if (targetRatio > 1.8) {
//             const originalH = coverH;
//             coverH = Math.min(coverH, dynamicMaxH);
//             coverW = Math.round(coverH / targetRatio);
//             if (false) {
//               console.debug(`Image aspect ratio adjusted for extreme ratio:`, {
//                 cardId: card.id,
//                 targetRatio: targetRatio.toFixed(2),
//                 originalSize: `${coverMaxW}x${originalH}`,
//                 adjustedSize: `${coverW}x${coverH}`,
//                 source: pageImageInfo?.pageImageAspect ? "page-display" : "natural-image"
//               });
//             }
//           } else {
//             if (false) {
//               console.debug(`Image aspect ratio preserved:`, {
//                 cardId: card.id,
//                 ratio: targetRatio.toFixed(2),
//                 size: `${coverW}x${coverH}`,
//                 source: pageImageInfo?.pageImageAspect ? "page-display" : "natural-image",
//                 consistentWithPage: !!pageImageInfo?.pageImageAspect
//               });
//             }
//           }
//           ctx.fillStyle = "#f8fafc";
//           this.roundRect(ctx, this.padding, coverY, coverW, coverH, radius);
//           ctx.fill();
//           ctx.save();
//           this.roundRect(ctx, this.padding, coverY, coverW, coverH, radius);
//           ctx.clip();
//           ctx.drawImage(coverImg, this.padding, coverY, coverW, coverH);
//           ctx.restore();
//           y += coverH + 12;
//         } else {
//           const placeholderH = 220;
//           ctx.fillStyle = "#f1f5f9";
//           this.roundRect(ctx, this.padding, coverY, coverMaxW, placeholderH, radius);
//           ctx.fill();
//           ctx.font = "28px ui-sans-serif, -apple-system, system-ui";
//           ctx.fillStyle = "#94a3b8";
//           ctx.textAlign = "center";
//           ctx.textBaseline = "middle";
//           ctx.fillText("\u5C01\u9762\u56FE", this.padding + coverMaxW / 2, coverY + placeholderH / 2);
//           y += placeholderH + 12;
//         }
//       }
//       const tips = (card.tips || []).slice(0, 2);
//       if (tips.length) {
//         y += 24;
//         tips.forEach((tip) => {
//           y = this.renderTip(ctx, tip.title + "\uFF1A" + tip.content, bodyX, y, bodyMaxWidth);
//           y += 16;
//         });
//       }
//       const tags = (card.tags || []).slice(0, 3);
//       if (tags.length) {
//         y += 16;
//         this.renderTags(ctx, tags, bodyX, y);
//         y += 56;
//       }
//       const qrSize = 220;
//       const qrX = width - this.padding - qrSize;
//       const qrY = height - this.padding - qrSize;
//       await this.drawQrOrPlaceholder(ctx, card, qrX, qrY, qrSize);
//       ctx.save();
//       ctx.globalAlpha = 0.85;
//       ctx.textAlign = "left";
//       ctx.textBaseline = "alphabetic";
//       ctx.font = "bold 28px ui-sans-serif, -apple-system, system-ui";
//       ctx.fillStyle = "#0f172a";
//       ctx.fillText("aispeeds.me", this.padding, height - this.padding / 2);
//       ctx.restore();
//       return canvas;
//     }
//     computeCanvasSize(matchEl) {
//       try {
//         if (matchEl) {
//           const rect = matchEl.getBoundingClientRect();
//           if (rect.width > 0 && rect.height > 0) {
//             const aspect = rect.height / rect.width;
//             const width = this.defaultWidth;
//             const minH = Math.max(1200, Math.round(width * 0.9));
//             const height = Math.max(minH, Math.round(width * aspect));
//             if (false) {
//               console.debug(`Canvas size based on page element: ${width}x${height} (aspect: ${aspect.toFixed(2)}) from page rect: ${rect.width.toFixed(1)}x${rect.height.toFixed(1)}`);
//             }
//             return { width, height };
//           }
//         }
//       } catch {
//       }
//       return { width: this.defaultWidth, height: this.defaultHeight };
//     }
//     // 分析页面中图片的实际显示尺寸和比例
//     analyzePageImageDisplay(matchEl, imageUrl) {
//       try {
//         if (!matchEl || !imageUrl)
//           return {};
//         const coverEl = matchEl.querySelector(".overview-card__cover");
//         const imgEl = coverEl?.querySelector("img");
//         if (imgEl && imgEl.complete && imgEl.naturalWidth > 0) {
//           const rect = imgEl.getBoundingClientRect();
//           const pageImageAspect = rect.height / rect.width;
//           if (false) {
//             console.debug(`Page image display analysis:`, {
//               naturalSize: `${imgEl.naturalWidth}x${imgEl.naturalHeight}`,
//               displaySize: `${rect.width.toFixed(1)}x${rect.height.toFixed(1)}`,
//               pageAspect: pageImageAspect.toFixed(3),
//               naturalAspect: (imgEl.naturalHeight / imgEl.naturalWidth).toFixed(3)
//             });
//           }
//           return {
//             pageImageAspect,
//             pageImageWidth: rect.width,
//             pageImageHeight: rect.height
//           };
//         }
//       } catch (error) {
//         if (false) {
//           console.warn("Failed to analyze page image display:", error);
//         }
//       }
//       return {};
//     }
//     async loadImage(url) {
//       await new Promise((resolve) => setTimeout(resolve, 0));
//       return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.crossOrigin = "anonymous";
//         img.onload = () => resolve(img);
//         img.onerror = () => reject(new Error("image load failed"));
//         img.src = this.resolveImageUrl(url);
//       });
//     }
//     resolveImageUrl(url) {
//       try {
//         const abs = new URL(url, window.location.href);
//         if (abs.origin !== window.location.origin && abs.protocol === "https:") {
//           return `/img-proxy?src=${encodeURIComponent(abs.toString())}`;
//         }
//         return abs.toString();
//       } catch {
//         return url;
//       }
//     }
//     buildDeepLink(card) {
//       try {
//         if (this.options.deepLinkBuilder)
//           return this.options.deepLinkBuilder(card);
//         const url = new URL(window.location.href);
//         const moduleName = this.options.moduleName || "best-practices";
//         url.searchParams.set("module", moduleName);
//         url.searchParams.set("view", "article");
//         url.searchParams.set("cardId", card.id || "");
//         return url.toString();
//       } catch {
//         return window.location.href;
//       }
//     }
//     async drawQrOrPlaceholder(ctx, card, x, y, size) {
//       ctx.strokeStyle = "#cbd5e1";
//       ctx.lineWidth = 3;
//       this.roundRect(ctx, x, y, size, size, 16);
//       ctx.stroke();
//       const deepLink = this.buildDeepLink(card);
//       const img = await this.loadQrImage(deepLink, size).catch(() => null);
//       if (!img) {
//         ctx.font = "24px ui-sans-serif, -apple-system, system-ui";
//         ctx.fillStyle = "#64748b";
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.fillText("QR \u9884\u7559", x + size / 2, y + size / 2);
//         return;
//       }
//       const pad = 10;
//       ctx.fillStyle = "#ffffff";
//       this.roundRect(ctx, x + 2, y + 2, size - 4, size - 4, 12);
//       ctx.fill();
//       ctx.drawImage(img, x + pad, y + pad, size - pad * 2, size - pad * 2);
//     }
//     async loadQrImage(data, size) {
//       const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
//         data
//       )}`;
//       await new Promise((resolve) => setTimeout(resolve, 0));
//       return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.crossOrigin = "anonymous";
//         img.onload = () => resolve(img);
//         img.onerror = () => reject(new Error("QR load failed"));
//         img.src = url;
//       });
//     }
//     renderTip(ctx, text, x, y, maxWidth) {
//       const lineH = 40;
//       const padding = 16;
//       const lines = this.splitLines(ctx, text, maxWidth - padding * 2);
//       const boxH = lines.length * lineH + padding * 2;
//       ctx.fillStyle = "rgba(6, 182, 212, 0.08)";
//       this.roundRect(ctx, x, y, maxWidth, boxH, 12);
//       ctx.fill();
//       ctx.fillStyle = "#06b6d4";
//       ctx.fillRect(x, y, 6, boxH);
//       ctx.fillStyle = "#0f172a";
//       ctx.font = "28px ui-sans-serif, -apple-system, system-ui";
//       let ty = y + padding + 28;
//       lines.forEach((line) => {
//         ctx.fillText(line, x + padding + 10, ty);
//         ty += lineH;
//       });
//       return y + boxH;
//     }
//     renderTags(ctx, tags, x, y) {
//       ctx.font = "26px ui-sans-serif, -apple-system, system-ui";
//       let cx = x;
//       const py = y;
//       tags.forEach((tag) => {
//         const paddingX = 18;
//         const paddingY = 10;
//         const w = ctx.measureText(tag).width + paddingX * 2;
//         const h = 40;
//         ctx.fillStyle = "#f1f5f9";
//         this.roundRect(ctx, cx, py - h + paddingY, w, h, 20);
//         ctx.fill();
//         ctx.fillStyle = "#475569";
//         ctx.fillText(tag, cx + paddingX, py - 12);
//         cx += w + 12;
//       });
//     }
//     mapDifficulty(d) {
//       switch (d) {
//         case "beginner":
//           return "\u5165\u95E8";
//         case "intermediate":
//           return "\u8FDB\u9636";
//         case "expert":
//           return "\u4E13\u5BB6";
//         default:
//           return d;
//       }
//     }
//     wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
//       const lines = this.splitLines(ctx, text, maxWidth, maxLines);
//       lines.forEach((line, i) => {
//         ctx.fillText(line, x, y + i * lineHeight);
//       });
//       return y + Math.min(lines.length, maxLines) * lineHeight;
//     }
//     splitLines(ctx, text, maxWidth, maxLines) {
//       const words = text.split(/\s+/);
//       const lines = [];
//       let current = "";
//       for (let i = 0; i < words.length; i++) {
//         const test = current ? `${current} ${words[i]}` : words[i];
//         if (ctx.measureText(test).width <= maxWidth) {
//           current = test;
//         } else {
//           if (current)
//             lines.push(current);
//           current = words[i];
//           if (maxLines && lines.length >= maxLines - 1) {
//             while (ctx.measureText(current + "\u2026").width > maxWidth && current.length > 0) {
//               current = current.slice(0, -1);
//             }
//             current = current + "\u2026";
//             break;
//           }
//         }
//       }
//       if (current)
//         lines.push(current);
//       return lines;
//     }
//     roundRect(ctx, x, y, w, h, r) {
//       const radius = Math.min(r, w / 2, h / 2);
//       ctx.beginPath();
//       ctx.moveTo(x + radius, y);
//       ctx.arcTo(x + w, y, x + w, y + h, radius);
//       ctx.arcTo(x + w, y + h, x, y + h, radius);
//       ctx.arcTo(x, y + h, x, y, radius);
//       ctx.arcTo(x, y, x + w, y, radius);
//       ctx.closePath();
//     }
//     toast(message) {
//       const el = document.createElement("div");
//       el.textContent = message;
//       el.style.position = "fixed";
//       el.style.left = "50%";
//       el.style.top = "16px";
//       el.style.transform = "translateX(-50%)";
//       el.style.background = "rgba(17, 24, 39, 0.9)";
//       el.style.color = "#fff";
//       el.style.padding = "8px 12px";
//       el.style.borderRadius = "8px";
//       el.style.fontSize = "14px";
//       el.style.zIndex = "9999";
//       el.style.pointerEvents = "none";
//       document.body.appendChild(el);
//       setTimeout(() => el.remove(), 1800);
//     }
//   };
// 
//   // src/client/shared/utils/image.ts
//   var resolveProxiedUrl = (url) => {
//     try {
//       const abs = new URL(url, window.location.href);
//       if (abs.origin !== window.location.origin && abs.protocol === "https:") {
//         return `/img-proxy?src=${encodeURIComponent(abs.toString())}`;
//       }
//       return abs.toString();
//     } catch {
//       return url;
//     }
//   };
//   var preloadImage = (url) => {
//     return new Promise((resolve) => {
//       try {
//         const src = resolveProxiedUrl(url);
//         const img = new Image();
//         img.crossOrigin = "anonymous";
//         img.onload = () => resolve();
//         img.onerror = () => resolve();
//         const start = () => {
//           img.src = src;
//         };
//         if ("requestIdleCallback" in window) {
//           window.requestIdleCallback(start, { timeout: 500 });
//         } else {
//           setTimeout(start, 0);
//         }
//       } catch {
//         resolve();
//       }
//     });
//   };
// 
//   // src/client/shared/handlers/BaseArticleEventHandler.ts
//   var EXIT_ANIMATION_DURATION = 230;
//   var BaseArticleEventHandler = class {
//     // 内存缓存，避免重复预加载
//     constructor(containerId, contentService, articleRenderer, onBackToOverview) {
//       __publicField(this, "containerId");
//       __publicField(this, "boundClickHandler");
//       __publicField(this, "contentService");
//       __publicField(this, "articleRenderer");
//       __publicField(this, "onBackToOverview");
//       __publicField(this, "_shareService");
//       __publicField(this, "_suppressHistory", false);
//       __publicField(this, "_preloadCache", /* @__PURE__ */ new Set());
//       this.containerId = containerId;
//       this.boundClickHandler = this.handleCardClick.bind(this);
//       this.contentService = contentService;
//       this.articleRenderer = articleRenderer;
//       this.onBackToOverview = onBackToOverview;
//     }
//     // —— 视口预热：卡片进入视口即预热分享所需资源 ——
//     wireViewportPrewarm(container) {
//       try {
//         if (!("IntersectionObserver" in window))
//           return;
//         const cards = container.querySelectorAll(".overview-card");
//         const seen = /* @__PURE__ */ new Set();
//         const observer = new IntersectionObserver(
//           (entries) => {
//             for (const entry of entries) {
//               if (!entry.isIntersecting)
//                 continue;
//               const el = entry.target;
//               const id = el.getAttribute("data-card-id");
//               if (!id || seen.has(id)) {
//                 observer.unobserve(el);
//                 continue;
//               }
//               seen.add(id);
//               observer.unobserve(el);
//               const run = () => void this.preloadForShare(id);
//               if ("requestIdleCallback" in window) {
//                 window.requestIdleCallback(run, { timeout: 800 });
//               } else {
//                 setTimeout(run, 0);
//               }
//             }
//           },
//           {
//             root: null,
//             rootMargin: "200px 0px",
//             threshold: 0.15
//           }
//         );
//         cards.forEach((el) => observer.observe(el));
//       } catch {
//       }
//     }
//     // —— 预加载分享相关资源（封面与二维码）——
//     wireSharePreload(container) {
//       try {
//         const buttons = container.querySelectorAll(".overview-card__share-btn");
//         buttons.forEach((btn) => {
//           const el = btn;
//           let fired = false;
//           const run = () => {
//             if (fired)
//               return;
//             fired = true;
//             const id = el.getAttribute("data-card-id");
//             if (id)
//               void this.preloadForShare(id);
//           };
//           el.addEventListener("mouseenter", run, { once: true });
//           el.addEventListener("focus", run, { once: true });
//           el.addEventListener("touchstart", run, { once: true, passive: true });
//         });
//       } catch {
//       }
//     }
//     async preloadForShare(cardId) {
//       try {
//         if (this._preloadCache.has(cardId))
//           return;
//         this._preloadCache.add(cardId);
//         const card = this.resolveCardById(cardId);
//         if (!card)
//           return;
//         const startTime = performance.now();
//         if (card.imageUrl) {
//           try {
//             await preloadImage(card.imageUrl);
//           } catch (error) {
//             if (false) {
//               console.warn("Cover image preload failed for card:", cardId, error);
//             }
//           }
//         }
//         const link = (() => {
//           try {
//             const url = new URL(window.location.href);
//             url.searchParams.set("module", this.getModuleName());
//             url.searchParams.set("view", "article");
//             url.searchParams.set("cardId", cardId);
//             return url.toString();
//           } catch {
//             return window.location.href;
//           }
//         })();
//         const size = 220;
//         const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
//           link
//         )}`;
//         await new Promise((resolve) => {
//           try {
//             const img = new Image();
//             img.crossOrigin = "anonymous";
//             img.onload = () => resolve();
//             img.onerror = () => {
//               if (false) {
//                 console.warn("QR code preload failed for card:", cardId);
//               }
//               resolve();
//             };
//             const start = () => img.src = qrUrl;
//             if ("requestIdleCallback" in window) {
//               window.requestIdleCallback(start, { timeout: 500 });
//             } else {
//               setTimeout(start, 0);
//             }
//           } catch (error) {
//             if (false) {
//               console.warn("QR code preload setup failed for card:", cardId, error);
//             }
//             resolve();
//           }
//         });
//         if (false) {
//           const duration = performance.now() - startTime;
//           console.debug(`Share preload completed for card ${cardId} in ${duration.toFixed(2)}ms`);
//         }
//       } catch (error) {
//         if (false) {
//           console.warn("Share preload failed for card:", cardId, error);
//         }
//       }
//     }
//     bindEventListeners() {
//       const container = document.getElementById(this.containerId);
//       if (!container) {
//         console.error(`\u672A\u627E\u5230\u5BB9\u5668\u5143\u7D20: ${this.containerId}`);
//         return;
//       }
//       this.removeExistingListeners(container);
//       this.addEventListeners(container);
//     }
//     removeExistingListeners(container) {
//       container.removeEventListener("click", this.boundClickHandler);
//     }
//     addEventListeners(container) {
//       container.addEventListener("click", this.boundClickHandler);
//       this.addDebugListeners(container);
//       this.wireViewportPrewarm(container);
//     }
//     // Hook: subclasses may add extra debug listeners; default no-op
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     addDebugListeners(_container) {
//     }
//     handleCardClick(e) {
//       const event = e;
//       const target = event.target;
//       const containerEl = event.currentTarget;
//       const isInArticleView = containerEl?.querySelector(".practice-article");
//       if (isInArticleView) {
//         return;
//       }
//       const shareBtn = target.closest(".overview-card__share-btn");
//       if (shareBtn) {
//         event.stopPropagation();
//         event.preventDefault();
//         const cardId2 = shareBtn.getAttribute("data-card-id");
//         if (!cardId2)
//           return;
//         void this.preloadForShare(cardId2);
//         const card = this.resolveCardById(cardId2);
//         if (!card)
//           return;
//         this._shareService = this._shareService || new ShareService(this.getIcon.bind(this), {
//           moduleName: this.getModuleName()
//         });
//         const cardEl = shareBtn.closest(".overview-card");
//         void this._shareService.openPreview(card, { matchElement: cardEl || void 0 });
//         return;
//       }
//       const cardId = this.extractCardId(target);
//       if (!cardId)
//         return;
//       this.showDetailedContent(cardId);
//     }
//     // 提供可公开调用的方法用于根据 cardId 打开文章（用于深链接入口）
//     openArticle(cardId) {
//       return this.showDetailedContent(cardId);
//     }
//     // 从浏览器历史导航进入时打开文章，不再 pushState，避免破坏历史栈
//     async openArticleFromHistory(cardId) {
//       this._suppressHistory = true;
//       try {
//         await this.showDetailedContent(cardId);
//       } finally {
//         this._suppressHistory = false;
//       }
//     }
//     // Default: click on whole card, fallback to action button
//     extractCardId(target) {
//       const cardEl = target.closest(".overview-card");
//       if (cardEl) {
//         const cardId = cardEl.getAttribute("data-card-id");
//         if (!cardId) {
//           console.error("\u5361\u7247\u7F3A\u5C11 data-card-id \u5C5E\u6027");
//           return null;
//         }
//         return cardId;
//       }
//       const button = target.closest(
//         ".overview-card__action-btn"
//       );
//       if (button) {
//         const cardId = button.getAttribute("data-card-id");
//         if (!cardId) {
//           console.error("\u6309\u94AE\u7F3A\u5C11 data-card-id \u5C5E\u6027");
//           return null;
//         }
//         return cardId;
//       }
//       return null;
//     }
//     async showDetailedContent(cardId) {
//       const container = document.getElementById(this.containerId);
//       if (!container) {
//         console.error(`\u672A\u627E\u5230\u5BB9\u5668\u5143\u7D20: ${this.containerId}`);
//         return;
//       }
//       try {
//         await this.beforeEnterArticle(container);
//         injectMarkdownStyles();
//         container.innerHTML = this.articleRenderer.renderLoadingState();
//         const article = await this.contentService.getArticle(cardId);
//         const articleHtml = this.articleRenderer.renderArticle(
//           article.title,
//           article.content
//         );
//         container.innerHTML = articleHtml;
//         const markdownContainer = container.querySelector(
//           "#markdown-content-container"
//         );
//         if (markdownContainer) {
//           const renderer = new SafeMarkdownRenderer();
//           const renderedHtml = renderer.render(article.rawMarkdown);
//           markdownContainer.innerHTML = `<div class="markdown-content">${renderedHtml}</div>`;
//           renderer.highlightCode(markdownContainer);
//           this.addEnhancedFeatures(markdownContainer);
//         }
//         this.configureBackNavigation();
//         if (!this._suppressHistory) {
//           this.updateHistoryForArticle(cardId);
//         }
//       } catch (error) {
//         console.error("\u52A0\u8F7D\u6587\u7AE0\u5931\u8D25:", error);
//         const message = error instanceof Error ? error.message : String(error);
//         const errorHtml = this.articleRenderer.renderErrorState(message);
//         container.innerHTML = errorHtml;
//       }
//     }
//     // Hook: subclasses may animate/prepare before article view is entered
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     async beforeEnterArticle(_container) {
//     }
//     // Back navigation using direct DOM event listeners instead of global window functions
//     configureBackNavigation() {
//       const containerEl = document.getElementById(this.containerId);
//       if (!containerEl || !this.onBackToOverview)
//         return;
//       const backButton = containerEl.querySelector(
//         '[data-action="back-to-overview"]'
//       );
//       if (!backButton)
//         return;
//       const existingHandler = backButton._backHandler;
//       if (existingHandler) {
//         backButton.removeEventListener("click", existingHandler);
//       }
//       backButton.removeAttribute("onclick");
//       const backHandler = this.handleBackToOverview.bind(this);
//       backButton._backHandler = backHandler;
//       backButton.addEventListener("click", backHandler);
//     }
//     handleBackToOverview() {
//       if (!this.onBackToOverview)
//         return;
//       const containerEl = document.getElementById(this.containerId);
//       if (containerEl) {
//         const articleEl = containerEl.querySelector(".practice-article");
//         if (articleEl) {
//           articleEl.classList.add("is-exiting");
//           setTimeout(() => {
//             this.onBackToOverview();
//             this.updateHistoryForOverview();
//             window.scrollTo({ top: 0, behavior: "smooth" });
//           }, EXIT_ANIMATION_DURATION);
//           return;
//         }
//       }
//       this.onBackToOverview();
//       this.updateHistoryForOverview();
//     }
//     // Shared enhancements below
//     addEnhancedFeatures(container) {
//       this.addCopyButtonsToCodeBlocks(container);
//       this.addReadingProgress();
//       this.addBackToTopButton();
//     }
//     addCopyButtonsToCodeBlocks(container) {
//       const codeBlocks = container.querySelectorAll("pre");
//       codeBlocks.forEach((block) => {
//         if (!block.querySelector(".copy-button")) {
//           const copyButton = document.createElement("button");
//           copyButton.className = "copy-button";
//           copyButton.textContent = "\u590D\u5236";
//           copyButton.onclick = () => this.copyCodeBlock(block, copyButton);
//           block.appendChild(copyButton);
//         }
//       });
//     }
//     copyCodeBlock(block, button) {
//       const code = block.querySelector("code");
//       if (code) {
//         navigator.clipboard.writeText(code.textContent || "").then(() => {
//           button.textContent = "\u5DF2\u590D\u5236";
//           button.classList.add("copied");
//           setTimeout(() => {
//             button.textContent = "\u590D\u5236";
//             button.classList.remove("copied");
//           }, 2e3);
//         }).catch(() => {
//           button.textContent = "\u590D\u5236\u5931\u8D25";
//           setTimeout(() => {
//             button.textContent = "\u590D\u5236";
//           }, 2e3);
//         });
//       }
//     }
//     addReadingProgress() {
//       const existingProgress = document.querySelector(".reading-progress");
//       if (existingProgress)
//         existingProgress.remove();
//       const progressBar = document.createElement("div");
//       progressBar.className = "reading-progress";
//       document.body.appendChild(progressBar);
//       const updateProgress = () => {
//         const scrollTop = window.pageYOffset;
//         const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//         const progress = scrollTop / docHeight * 100;
//         progressBar.style.width = `${Math.min(progress, 100)}%`;
//       };
//       window.addEventListener("scroll", updateProgress);
//       updateProgress();
//     }
//     addBackToTopButton() {
//       const existingButton = document.querySelector(".back-to-top");
//       if (existingButton)
//         existingButton.remove();
//       const backToTopButton = document.createElement("button");
//       backToTopButton.className = "back-to-top";
//       backToTopButton.innerHTML = "\u2191";
//       backToTopButton.onclick = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       };
//       document.body.appendChild(backToTopButton);
//       const toggleBackToTop = () => {
//         if (window.pageYOffset > 300) {
//           backToTopButton.classList.add("visible");
//         } else {
//           backToTopButton.classList.remove("visible");
//         }
//       };
//       window.addEventListener("scroll", toggleBackToTop);
//       toggleBackToTop();
//     }
//     // —— URL 深链接辅助方法 ——
//     updateHistoryForArticle(cardId) {
//       try {
//         const url = new URL(window.location.href);
//         url.searchParams.set("module", this.getModuleName());
//         url.searchParams.set("view", "article");
//         url.searchParams.set("cardId", cardId);
//         window.history.pushState(
//           { module: this.getModuleName(), view: "article", cardId },
//           "",
//           url.toString()
//         );
//       } catch {
//       }
//     }
//     updateHistoryForOverview() {
//       try {
//         const url = new URL(window.location.href);
//         url.searchParams.set("module", this.getModuleName());
//         url.searchParams.set("view", "overview");
//         url.searchParams.delete("cardId");
//         window.history.pushState(
//           { module: this.getModuleName(), view: "overview" },
//           "",
//           url.toString()
//         );
//       } catch {
//       }
//     }
//   };
// 
//   // src/client/howToApplyCC/data/cardsData.ts
//   var howToApplyCCCards = [
//     {
//       id: "sdk-quick-install",
//       title: "SDK\u5FEB\u901F\u5B89\u88C5",
//       description: "\u5FEB\u901F\u5B89\u88C5\u914D\u7F6E Claude Code SDK\uFF0C\u652F\u6301\u547D\u4EE4\u884C\u3001TypeScript \u548C Python \u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F",
//       category: "quick-start",
//       tags: ["\u5B89\u88C5\u914D\u7F6E", "\u5FEB\u901F\u5F00\u59CB", "CLI", "TypeScript", "Python"],
//       tips: [
//         {
//           type: "tip",
//           title: "\u63A8\u8350\u65B9\u5F0F",
//           content: "\u5BF9\u4E8E\u5FEB\u901F\u539F\u578B\u5F00\u53D1\u63A8\u8350\u4F7F\u7528\u547D\u4EE4\u884C\u65B9\u5F0F\uFF0C\u751F\u4EA7\u73AF\u5883\u63A8\u8350 TypeScript \u6216 Python SDK"
//         },
//         {
//           type: "info",
//           title: "\u73AF\u5883\u8981\u6C42",
//           content: "Node.js 18+ \u662F\u5FC5\u9700\u7684\uFF0C\u5373\u4F7F\u4F7F\u7528 Python SDK \u4E5F\u9700\u8981 NPM \u4F9D\u8D56"
//         }
//       ]
//     },
//     {
//       id: "create-first-agent",
//       title: "\u521B\u5EFA\u7B2C\u4E00\u4E2AAgent",
//       description: "\u901A\u8FC7\u5177\u4F53\u793A\u4F8B\u5B66\u4E60\u521B\u5EFA\u4E13\u4E1AAI Agent\uFF0C\u5305\u62EC\u6CD5\u5F8B\u52A9\u624B\u3001SRE\u4E13\u5BB6\u7B49\u5B9E\u9645\u573A\u666F",
//       category: "quick-start",
//       tips: [
//         {
//           type: "success",
//           title: "\u5B9E\u7528\u5EFA\u8BAE",
//           content: "\u4ECE\u7B80\u5355\u7684\u5355\u4E00\u529F\u80FD Agent \u5F00\u59CB\uFF0C\u9010\u6B65\u589E\u52A0\u590D\u6742\u5EA6\u548C\u5DE5\u5177\u96C6\u6210"
//         },
//         {
//           type: "expert",
//           title: "\u4E13\u4E1A\u63D0\u793A",
//           content: "\u6E05\u6670\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u662F Agent \u8868\u73B0\u4F18\u79C0\u7684\u5173\u952E\uFF0C\u8981\u660E\u786E\u5B9A\u4E49\u89D2\u8272\u3001\u76EE\u6807\u548C\u7EA6\u675F"
//         }
//       ]
//     },
//     {
//       id: "api-authentication",
//       title: "API\u8BA4\u8BC1\u914D\u7F6E",
//       description: "\u638C\u63E1\u591A\u79CDAPI\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5305\u62ECAnthropic\u76F4\u8FDE\u3001Amazon Bedrock\u548CGoogle Vertex AI",
//       category: "core-usage",
//       tips: [
//         {
//           type: "info",
//           title: "\u6210\u672C\u8003\u8651",
//           content: "\u4E0D\u540C\u63D0\u4F9B\u5546\u7684\u5B9A\u4EF7\u7B56\u7565\u4E0D\u540C\uFF0C\u9009\u62E9\u8BA4\u8BC1\u65B9\u5F0F\u65F6\u8981\u8003\u8651\u6210\u672C\u548C\u5730\u57DF\u9650\u5236"
//         },
//         {
//           type: "warning",
//           title: "\u5B89\u5168\u63D0\u9192",
//           content: "\u751F\u4EA7\u73AF\u5883\u4E2D\u907F\u514D\u786C\u7F16\u7801 API \u5BC6\u94A5\uFF0C\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u548C\u5BC6\u94A5\u7BA1\u7406\u670D\u52A1"
//         }
//       ]
//     },
//     {
//       id: "multi-turn-conversations",
//       title: "\u591A\u8F6E\u5BF9\u8BDD\u7BA1\u7406",
//       description: "\u5B66\u4E60\u7BA1\u7406\u590D\u6742\u7684\u591A\u8F6E\u5BF9\u8BDD\uFF0C\u5305\u62EC\u4F1A\u8BDD\u6301\u7EED\u3001\u72B6\u6001\u4FDD\u6301\u548C\u4E0A\u4E0B\u6587\u7BA1\u7406",
//       category: "core-usage",
//       tags: ["\u591A\u8F6E\u5BF9\u8BDD", "\u4F1A\u8BDD\u7BA1\u7406", "\u72B6\u6001\u4FDD\u6301", "\u4E0A\u4E0B\u6587\u7BA1\u7406"],
//       tips: [
//         {
//           type: "expert",
//           title: "\u67B6\u6784\u5EFA\u8BAE",
//           content: "\u5BF9\u4E8E\u590D\u6742\u4E1A\u52A1\u6D41\u7A0B\uFF0C\u5EFA\u8BAE\u4F7F\u7528 Python SDK \u7684\u6301\u4E45\u8FDE\u63A5\u6A21\u5F0F\u7EF4\u62A4\u4F1A\u8BDD\u72B6\u6001"
//         },
//         {
//           type: "tip",
//           title: "\u6027\u80FD\u4F18\u5316",
//           content: "\u5408\u7406\u63A7\u5236 maxTurns \u53C2\u6570\u907F\u514D\u65E0\u9650\u5FAA\u73AF\uFF0C\u540C\u65F6\u4FDD\u6301\u8DB3\u591F\u7684\u4EA4\u4E92\u6DF1\u5EA6"
//         }
//       ]
//     },
//     {
//       id: "custom-system-prompts",
//       title: "\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD",
//       description: "\u5B66\u4E60\u7F16\u5199\u9AD8\u8D28\u91CF\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u5B9A\u4E49Agent\u7684\u4E13\u4E1A\u89D2\u8272\u3001\u884C\u4E3A\u6A21\u5F0F\u548C\u9886\u57DFexpertise",
//       category: "core-usage",
//       tips: [
//         {
//           type: "expert",
//           title: "\u8BBE\u8BA1\u539F\u5219",
//           content: '\u4F18\u79C0\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u5E94\u8BE5\u660E\u786E\u5B9A\u4E49"\u662F\u4EC0\u4E48"\u3001"\u505A\u4EC0\u4E48"\u3001"\u4E0D\u505A\u4EC0\u4E48"\u4E09\u4E2A\u5173\u952E\u8981\u7D20'
//         },
//         {
//           type: "success",
//           title: "\u6D4B\u8BD5\u5EFA\u8BAE",
//           content: "\u901A\u8FC7\u591A\u8F6E\u5BF9\u8BDD\u6D4B\u8BD5\u63D0\u793A\u8BCD\u7684\u4E00\u81F4\u6027\uFF0C\u786E\u4FDD Agent \u5728\u4E0D\u540C\u573A\u666F\u4E0B\u7684\u8868\u73B0\u7A33\u5B9A"
//         }
//       ]
//     },
//     {
//       id: "output-format-control",
//       title: "\u8F93\u51FA\u683C\u5F0F\u63A7\u5236",
//       description: "\u638C\u63E1Text\u3001JSON\u3001Stream\u4E09\u79CD\u8F93\u51FA\u683C\u5F0F\uFF0C\u4E3A\u4E0D\u540C\u5E94\u7528\u573A\u666F\u9009\u62E9\u6700\u9002\u5408\u7684\u6570\u636E\u4EA4\u4E92\u65B9\u5F0F",
//       category: "core-usage",
//       tips: [
//         {
//           type: "info",
//           title: "\u6027\u80FD\u8003\u8651",
//           content: "\u6D41\u5F0F\u8F93\u51FA\u80FD\u663E\u8457\u6539\u5584\u7528\u6237\u4F53\u9A8C\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u957F\u65F6\u95F4\u8FD0\u884C\u7684 Agent \u4EFB\u52A1"
//         },
//         {
//           type: "tip",
//           title: "\u96C6\u6210\u5EFA\u8BAE",
//           content: "JSON \u683C\u5F0F\u5305\u542B\u6210\u672C\u3001\u8017\u65F6\u7B49\u5143\u6570\u636E\uFF0C\u4FBF\u4E8E\u76D1\u63A7\u548C\u4F18\u5316 Agent \u6027\u80FD"
//         }
//       ]
//     },
//     {
//       id: "mcp-tools-integration",
//       title: "MCP\u5DE5\u5177\u96C6\u6210",
//       description: "\u901A\u8FC7\u6A21\u578B\u4E0A\u4E0B\u6587\u534F\u8BAE(MCP)\u6269\u5C55Agent\u80FD\u529B\uFF0C\u96C6\u6210Slack\u3001JIRA\u3001\u6570\u636E\u5E93\u7B49\u5916\u90E8\u5DE5\u5177",
//       category: "advanced",
//       tips: [
//         {
//           type: "warning",
//           title: "\u5B89\u5168\u6CE8\u610F",
//           content: "MCP \u5DE5\u5177\u9700\u8981\u663E\u5F0F\u6388\u6743\u624D\u80FD\u4F7F\u7528\uFF0C\u9075\u5FAA\u6700\u5C0F\u6743\u9650\u539F\u5219\u914D\u7F6E\u5DE5\u5177\u8BBF\u95EE"
//         },
//         {
//           type: "expert",
//           title: "\u67B6\u6784\u8BBE\u8BA1",
//           content: "\u4E3A\u4E0D\u540C\u4E1A\u52A1\u573A\u666F\u8BBE\u8BA1\u4E13\u95E8\u7684 MCP \u5DE5\u5177\u7EC4\u5408\uFF0C\u5982 SRE \u5DE5\u5177\u5305\u3001\u5F00\u53D1\u5DE5\u5177\u5305\u7B49"
//         }
//       ]
//     }
//   ];
// 
//   // src/client/howToApplyCC/handlers/EventHandler.ts
//   var HowToApplyCCEventHandler = class extends BaseArticleEventHandler {
//     constructor(containerId, contentService, articleRenderer) {
//       super(
//         containerId,
//         contentService,
//         articleRenderer,
//         () => window.initializeHowToApplyCC()
//       );
//     }
//     resolveCardById(id) {
//       return howToApplyCCCards.find((c) => c.id === id) || null;
//     }
//     getIcon(category) {
//       return applyCCCategoryConfig[category] || "\u{1F4CB}";
//     }
//   };
// 
//   // src/client/bestPractices/handlers/NavigationHandler.ts
//   var NavigationHandler = class {
//     bindEventListeners() {
//       this.bindBreadcrumbNavigation();
//     }
//     bindBreadcrumbNavigation() {
//       document.addEventListener("click", (e) => {
//         const target = e.target;
//         if (target.matches(".breadcrumb-link")) {
//           e.preventDefault();
//           const targetId = target.getAttribute("data-target");
//           if (targetId) {
//             this.navigateToSection(targetId);
//           }
//         }
//       });
//     }
//     navigateToSection(sectionId) {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };
// 
//   // src/client/shared/services/BaseContentService.ts
//   var BaseContentService = class {
//     constructor(markdownParser, disableCache = false) {
//       __publicField(this, "markdownParser");
//       __publicField(this, "cache", /* @__PURE__ */ new Map());
//       __publicField(this, "disableCache");
//       this.markdownParser = markdownParser;
//       this.disableCache = disableCache;
//     }
//     async getArticle(cardId) {
//       if (this.disableCache && this.cache.has(cardId)) {
//         this.cache.delete(cardId);
//       }
//       try {
//         const markdownContent = await this.fetchMarkdownContent(cardId);
//         const htmlContent = this.markdownParser.render(markdownContent);
//         const article = {
//           id: cardId,
//           title: this.getTitleFromCardId(cardId),
//           content: htmlContent,
//           rawMarkdown: markdownContent
//         };
//         this.cache.set(cardId, article);
//         return article;
//       } catch (error) {
//         throw new Error(`\u65E0\u6CD5\u52A0\u8F7D\u6587\u7AE0 ${cardId}: ${error.message}`);
//       }
//     }
//     async fetchMarkdownContent(cardId) {
//       return this.getContentFromFile(cardId);
//     }
//   };
// 
//   // src/client/howToApplyCC/content/sdk-quick-install.md
//   var sdk_quick_install_default = '# SDK\u5FEB\u901F\u5B89\u88C5\n\nClaude Code SDK \u652F\u6301\u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u9009\u62E9\u6700\u9002\u5408\u4F60\u9879\u76EE\u7684\u5B89\u88C5\u65B9\u6CD5\u3002\n\n## \u5B89\u88C5\u65B9\u5F0F\u9009\u62E9\n\n### 1. \u547D\u4EE4\u884C\u65B9\u5F0F\uFF08\u63A8\u8350\u7528\u4E8E\u5FEB\u901F\u539F\u578B\uFF09\n\n\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u662F\u76F4\u63A5\u4F7F\u7528 NPM \u5168\u5C40\u5B89\u88C5\uFF1A\n\n```bash\nnpm install -g @anthropic/claude-code-sdk\n```\n\n\u5B89\u88C5\u5B8C\u6210\u540E\u53EF\u4EE5\u76F4\u63A5\u5728\u547D\u4EE4\u884C\u4F7F\u7528\uFF1A\n\n```bash\nclaude-code --help\n```\n\n### 2. TypeScript/JavaScript \u9879\u76EE\u96C6\u6210\n\n\u5BF9\u4E8E TypeScript \u6216 JavaScript \u9879\u76EE\uFF0C\u6DFB\u52A0 SDK \u4F9D\u8D56\uFF1A\n\n```bash\nnpm install @anthropic/claude-code-sdk\n```\n\n\u5728\u9879\u76EE\u4E2D\u5BFC\u5165\u4F7F\u7528\uFF1A\n\n```typescript\nimport { ClaudeCodeSDK } from \'@anthropic/claude-code-sdk\';\n\nconst sdk = new ClaudeCodeSDK({\n  apiKey: process.env.ANTHROPIC_API_KEY,\n});\n```\n\n### 3. Python \u9879\u76EE\u96C6\u6210\n\nPython \u9879\u76EE\u53EF\u4EE5\u901A\u8FC7 pip \u5B89\u88C5\uFF1A\n\n```bash\npip install claude-code-sdk\n```\n\nPython \u4F7F\u7528\u65B9\u5F0F\uFF1A\n\n```python\nfrom claude_code import ClaudeCodeClient\n\nclient = ClaudeCodeClient(\n    api_key=os.getenv("ANTHROPIC_API_KEY")\n)\n```\n\n## API \u5BC6\u94A5\u914D\u7F6E\n\n\u6240\u6709\u5B89\u88C5\u65B9\u5F0F\u90FD\u9700\u8981\u914D\u7F6E Anthropic API \u5BC6\u94A5\uFF1A\n\n### \u73AF\u5883\u53D8\u91CF\u65B9\u5F0F\uFF08\u63A8\u8350\uFF09\n\n```bash\nexport ANTHROPIC_API_KEY="your-api-key-here"\n```\n\n### \u914D\u7F6E\u6587\u4EF6\u65B9\u5F0F\n\n\u521B\u5EFA `~/.claude/config.json`\uFF1A\n\n```json\n{\n  "apiKey": "your-api-key-here",\n  "defaultModel": "claude-3-sonnet-20240229"\n}\n```\n\n## \u9A8C\u8BC1\u5B89\u88C5\n\n\u8FD0\u884C\u7B80\u5355\u793A\u4F8B\u786E\u8BA4\u5B89\u88C5\u6210\u529F\uFF1A\n\n### \u547D\u4EE4\u884C\u9A8C\u8BC1\n\n```bash\nclaude-code "\u521B\u5EFA\u4E00\u4E2AHello World\u7A0B\u5E8F"\n```\n\n### TypeScript \u9A8C\u8BC1\n\n```typescript\nasync function test() {\n  const result = await sdk.run("\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u8BA1\u7B97\u5668");\n  console.log(result);\n}\ntest();\n```\n\n### Python \u9A8C\u8BC1\n\n```python\nresult = client.run("\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u5F85\u529E\u5217\u8868")\nprint(result)\n```\n\n## \u73AF\u5883\u8981\u6C42\n\n- **Node.js 18+** \u662F\u5FC5\u9700\u7684\uFF0C\u5373\u4F7F\u4F7F\u7528 Python SDK \u4E5F\u9700\u8981 NPM \u4F9D\u8D56\n- **Git** \u7528\u4E8E\u7248\u672C\u63A7\u5236\u96C6\u6210\n- **\u652F\u6301\u7684\u64CD\u4F5C\u7CFB\u7EDF**: macOS, Linux, Windows\n';
// 
//   // src/client/howToApplyCC/content/create-first-agent.md
//   var create_first_agent_default = '# \u521B\u5EFA\u7B2C\u4E00\u4E2AAgent\n\n\u901A\u8FC7\u5177\u4F53\u793A\u4F8B\u5B66\u4E60\u521B\u5EFA\u4E13\u4E1A AI Agent\uFF0C\u4ECE\u7B80\u5355\u529F\u80FD\u5F00\u59CB\u9010\u6B65\u6784\u5EFA\u590D\u6742\u5E94\u7528\u3002\n\n## \u6CD5\u5F8B\u52A9\u624B\u793A\u4F8B\n\n\u521B\u5EFA\u4E00\u4E2A\u5408\u540C\u5BA1\u67E5\u548C\u98CE\u9669\u8BC6\u522B\u7684\u6CD5\u5F8B Agent\uFF1A\n\n### \u57FA\u7840\u914D\u7F6E\n\n```typescript\nimport { ClaudeCodeSDK } from \'@anthropic/claude-code-sdk\';\n\nconst legalAgent = new ClaudeCodeSDK({\n  apiKey: process.env.ANTHROPIC_API_KEY,\n  systemPrompt: `\n\u4F60\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u6CD5\u5F8B\u987E\u95EE\u52A9\u624B\uFF0C\u4E13\u95E8\u534F\u52A9\u5408\u540C\u5BA1\u67E5\u548C\u98CE\u9669\u5206\u6790\u3002\n\n\u6838\u5FC3\u80FD\u529B\uFF1A\n- \u8BC6\u522B\u5408\u540C\u4E2D\u7684\u5173\u952E\u6761\u6B3E\u548C\u6F5C\u5728\u98CE\u9669\n- \u63D0\u4F9B\u6CD5\u5F8B\u5408\u89C4\u6027\u5EFA\u8BAE\n- \u6807\u8BB0\u9700\u8981\u5F8B\u5E08\u8FDB\u4E00\u6B65\u5BA1\u67E5\u7684\u6761\u6B3E\n\n\u5DE5\u4F5C\u539F\u5219\uFF1A\n- \u59CB\u7EC8\u63D0\u9192\u7528\u6237\u8FD9\u4E0D\u80FD\u66FF\u4EE3\u4E13\u4E1A\u6CD5\u5F8B\u610F\u89C1\n- \u91CD\u70B9\u5173\u6CE8\u98CE\u9669\u8BC6\u522B\u800C\u975E\u6CD5\u5F8B\u7ED3\u8BBA\n- \u4F7F\u7528\u6E05\u6670\u7684\u7ED3\u6784\u5316\u8F93\u51FA\u683C\u5F0F\n  `,\n});\n```\n\n### \u4F7F\u7528\u793A\u4F8B\n\n```typescript\nasync function reviewContract(contractText: string) {\n  const result = await legalAgent.run(`\n\u8BF7\u5BA1\u67E5\u4EE5\u4E0B\u5408\u540C\u5E76\u8BC6\u522B\u5173\u952E\u98CE\u9669\u70B9\uFF1A\n\n${contractText}\n\n\u8BF7\u6309\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA\uFF1A\n1. \u5173\u952E\u6761\u6B3E\u6458\u8981\n2. \u6F5C\u5728\u98CE\u9669\u8BC6\u522B\n3. \u5EFA\u8BAE\u5173\u6CE8\u7684\u6761\u6B3E\n4. \u4E0B\u4E00\u6B65\u884C\u52A8\u5EFA\u8BAE\n  `);\n  \n  return result;\n}\n```\n\n## SRE\u8FD0\u7EF4\u4E13\u5BB6\n\n\u6784\u5EFA\u7CFB\u7EDF\u8BCA\u65AD\u548C\u95EE\u9898\u89E3\u51B3\u7684\u8FD0\u7EF4 Agent\uFF1A\n\n### \u7CFB\u7EDF\u63D0\u793A\u8BCD\u8BBE\u8BA1\n\n```typescript\nconst sreAgent = new ClaudeCodeSDK({\n  apiKey: process.env.ANTHROPIC_API_KEY,\n  systemPrompt: `\n\u4F60\u662F\u4E00\u540D Site Reliability Engineering (SRE) \u4E13\u5BB6\uFF0C\u4E13\u95E8\u5904\u7406\u7CFB\u7EDF\u6545\u969C\u8BCA\u65AD\u548C\u6027\u80FD\u4F18\u5316\u3002\n\n\u4E13\u4E1A\u9886\u57DF\uFF1A\n- \u7CFB\u7EDF\u76D1\u63A7\u548C\u544A\u8B66\u5206\u6790\n- \u6027\u80FD\u74F6\u9888\u8BC6\u522B\u548C\u4F18\u5316\n- \u6545\u969C\u6392\u67E5\u548C\u6839\u56E0\u5206\u6790\n- \u81EA\u52A8\u5316\u8FD0\u7EF4\u65B9\u6848\u8BBE\u8BA1\n\n\u8BCA\u65AD\u6D41\u7A0B\uFF1A\n1. \u6536\u96C6\u7CFB\u7EDF\u72B6\u6001\u4FE1\u606F\n2. \u5206\u6790\u65E5\u5FD7\u548C\u76D1\u63A7\u6570\u636E\n3. \u8BC6\u522B\u95EE\u9898\u6839\u672C\u539F\u56E0\n4. \u63D0\u4F9B\u89E3\u51B3\u65B9\u6848\u548C\u9884\u9632\u63AA\u65BD\n\n\u8F93\u51FA\u8981\u6C42\uFF1A\n- \u4F7F\u7528\u7ED3\u6784\u5316\u7684\u8BCA\u65AD\u62A5\u544A\n- \u63D0\u4F9B\u5177\u4F53\u7684\u547D\u4EE4\u548C\u914D\u7F6E\n- \u5305\u542B\u76D1\u63A7\u548C\u9A8C\u8BC1\u6B65\u9AA4\n  `,\n});\n```\n\n### \u6545\u969C\u8BCA\u65AD\u793A\u4F8B\n\n```typescript\nasync function diagnoseSystemIssue(symptoms: string, logs: string) {\n  const diagnosis = await sreAgent.run(`\n\u7CFB\u7EDF\u51FA\u73B0\u4EE5\u4E0B\u75C7\u72B6\uFF1A\n${symptoms}\n\n\u76F8\u5173\u65E5\u5FD7\uFF1A\n${logs}\n\n\u8BF7\u8FDB\u884C\u5168\u9762\u8BCA\u65AD\u5E76\u63D0\u4F9B\u89E3\u51B3\u65B9\u6848\u3002\n  `);\n  \n  return diagnosis;\n}\n```\n\n## \u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD\u539F\u5219\n\n### \u89D2\u8272\u5B9A\u4E49\n\n\u660E\u786E\u5B9A\u4E49 Agent \u7684\u4E13\u4E1A\u8EAB\u4EFD\u548C\u80FD\u529B\u8FB9\u754C\uFF1A\n\n```typescript\nconst customAgent = new ClaudeCodeSDK({\n  systemPrompt: `\n# \u89D2\u8272\u5B9A\u4E49\n\u4F60\u662F\u4E00\u540D [\u5177\u4F53\u4E13\u4E1A\u89D2\u8272]\uFF0C\u5177\u6709 [\u4E13\u4E1A\u5E74\u9650] \u5E74\u7ECF\u9A8C\u3002\n\n# \u6838\u5FC3\u80FD\u529B\n- \u80FD\u529B1\uFF1A\u5177\u4F53\u63CF\u8FF0\n- \u80FD\u529B2\uFF1A\u5177\u4F53\u63CF\u8FF0\n- \u80FD\u529B3\uFF1A\u5177\u4F53\u63CF\u8FF0\n\n# \u5DE5\u4F5C\u7EA6\u675F\n- \u4E0D\u80FD\u505A\u4EC0\u4E48\uFF1A\u660E\u786E\u9650\u5236\n- \u4F26\u7406\u8FB9\u754C\uFF1A\u9053\u5FB7\u548C\u6CD5\u5F8B\u7EA6\u675F\n- \u8F93\u51FA\u683C\u5F0F\uFF1A\u6807\u51C6\u5316\u8981\u6C42\n\n# \u4EA4\u4E92\u65B9\u5F0F\n- \u6C9F\u901A\u98CE\u683C\uFF1A\u4E13\u4E1A\u3001\u53CB\u597D\u3001\u7B80\u6D01\n- \u54CD\u5E94\u683C\u5F0F\uFF1A\u7ED3\u6784\u5316\u8F93\u51FA\n- \u786E\u8BA4\u673A\u5236\uFF1A\u91CD\u8981\u51B3\u7B56\u524D\u7684\u786E\u8BA4\n  `,\n});\n```\n\n### \u63D0\u793A\u8BCD\u6A21\u677F\n\n```typescript\nconst promptTemplate = {\n  role: "\u4E13\u4E1A\u89D2\u8272\u63CF\u8FF0",\n  capabilities: ["\u80FD\u529B1", "\u80FD\u529B2", "\u80FD\u529B3"],\n  constraints: ["\u7EA6\u675F1", "\u7EA6\u675F2"],\n  outputFormat: {\n    structure: "\u8F93\u51FA\u7ED3\u6784\u8BF4\u660E",\n    style: "\u6C9F\u901A\u98CE\u683C\u8981\u6C42"\n  },\n  examples: [\n    {\n      input: "\u793A\u4F8B\u8F93\u5165",\n      output: "\u671F\u671B\u8F93\u51FA"\n    }\n  ]\n};\n```\n\n## \u6E10\u8FDB\u5F0F\u5F00\u53D1\u7B56\u7565\n\n### \u7B2C\u4E00\u9636\u6BB5\uFF1A\u57FA\u7840\u529F\u80FD\n\n```typescript\n// \u7B80\u5355\u7684\u5355\u4E00\u529F\u80FD Agent\nconst simpleAgent = new ClaudeCodeSDK({\n  systemPrompt: "\u4F60\u662F\u4E00\u4E2A\u4EE3\u7801\u5BA1\u67E5\u52A9\u624B\uFF0C\u4E13\u95E8\u68C0\u67E5JavaScript\u4EE3\u7801\u7684\u5E38\u89C1\u95EE\u9898\u3002"\n});\n```\n\n### \u7B2C\u4E8C\u9636\u6BB5\uFF1A\u589E\u52A0\u5DE5\u5177\u96C6\u6210\n\n```typescript\n// \u96C6\u6210\u5916\u90E8\u5DE5\u5177\u7684 Agent\nconst enhancedAgent = new ClaudeCodeSDK({\n  systemPrompt: "...",\n  tools: [\n    \'github-integration\',\n    \'code-analysis\',\n    \'documentation-generator\'\n  ]\n});\n```\n\n### \u7B2C\u4E09\u9636\u6BB5\uFF1A\u591A\u529F\u80FD\u6574\u5408\n\n```typescript\n// \u7EFC\u5408\u6027\u4E13\u4E1A Agent\nconst professionalAgent = new ClaudeCodeSDK({\n  systemPrompt: "...",\n  tools: [...],\n  workflows: [...],\n  integrations: [...]\n});\n```\n\n## \u6700\u4F73\u5B9E\u8DF5\n\n### \u6D4B\u8BD5\u548C\u9A8C\u8BC1\n\n```typescript\n// Agent \u529F\u80FD\u6D4B\u8BD5\nasync function testAgent() {\n  const testCases = [\n    { input: "\u6D4B\u8BD5\u8F93\u51651", expected: "\u671F\u671B\u8F93\u51FA\u7C7B\u578B" },\n    { input: "\u6D4B\u8BD5\u8F93\u51652", expected: "\u671F\u671B\u8F93\u51FA\u7C7B\u578B" }\n  ];\n  \n  for (const testCase of testCases) {\n    const result = await agent.run(testCase.input);\n    validateOutput(result, testCase.expected);\n  }\n}\n```\n\n### \u6027\u80FD\u76D1\u63A7\n\n```typescript\n// \u76D1\u63A7 Agent \u6027\u80FD\nconst agentWithMonitoring = new ClaudeCodeSDK({\n  apiKey: process.env.ANTHROPIC_API_KEY,\n  monitoring: {\n    logRequests: true,\n    trackPerformance: true,\n    alertThresholds: {\n      responseTime: 5000, // 5\u79D2\n      errorRate: 0.05     // 5%\n    }\n  }\n});\n```\n\n\u4ECE\u7B80\u5355\u7684\u5355\u4E00\u529F\u80FD Agent \u5F00\u59CB\uFF0C\u901A\u8FC7\u6D4B\u8BD5\u9A8C\u8BC1\u540E\u518D\u9010\u6B65\u589E\u52A0\u590D\u6742\u5EA6\u548C\u5DE5\u5177\u96C6\u6210\u3002\u6E05\u6670\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u662F Agent \u8868\u73B0\u4F18\u79C0\u7684\u5173\u952E\u57FA\u7840\u3002';
// 
//   // src/client/howToApplyCC/content/api-authentication.md
//   var api_authentication_default = "# API\u8BA4\u8BC1\u914D\u7F6E\n\n\u638C\u63E1\u591A\u79CDAPI\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5B9E\u73B0\u7075\u6D3B\u7684\u6A21\u578B\u63D0\u4F9B\u5546\u5207\u6362\u548C\u6210\u672C\u4F18\u5316\u3002\n\n## Anthropic \u76F4\u8FDE\n\n\u6807\u51C6\u7684\u5B98\u65B9\u8BA4\u8BC1\u65B9\u5F0F\uFF1A\n\n```bash\nexport ANTHROPIC_API_KEY=\"sk-ant-api03-...\"\n```\n\n```typescript\nimport { ClaudeCodeSDK } from '@anthropic/claude-code-sdk';\n\nconst sdk = new ClaudeCodeSDK({\n  provider: 'anthropic',\n  apiKey: process.env.ANTHROPIC_API_KEY,\n  model: 'claude-3-sonnet-20240229'\n});\n```\n\n## Amazon Bedrock\n\n\u901A\u8FC7 AWS \u8BBF\u95EE Claude \u6A21\u578B\uFF0C\u9002\u5408\u4F01\u4E1A\u7528\u6237\uFF1A\n\n```bash\nexport AWS_ACCESS_KEY_ID=\"your-access-key\"\nexport AWS_SECRET_ACCESS_KEY=\"your-secret-key\"\nexport AWS_REGION=\"us-east-1\"\n```\n\n```typescript\nconst sdk = new ClaudeCodeSDK({\n  provider: 'bedrock',\n  region: 'us-east-1',\n  model: 'anthropic.claude-3-sonnet-20240229-v1:0'\n});\n```\n\n## Google Vertex AI\n\n\u4F7F\u7528 Google Cloud \u51ED\u8BC1\uFF1A\n\n```bash\nexport GOOGLE_APPLICATION_CREDENTIALS=\"/path/to/credentials.json\"\nexport GOOGLE_CLOUD_PROJECT=\"your-project-id\"\n```\n\n```typescript\nconst sdk = new ClaudeCodeSDK({\n  provider: 'vertex',\n  projectId: process.env.GOOGLE_CLOUD_PROJECT,\n  location: 'us-central1'\n});\n```\n\n## \u8BA4\u8BC1\u4F18\u5148\u7EA7\n\n1. \u663E\u5F0F\u4F20\u5165\u7684\u8BA4\u8BC1\u53C2\u6570\n2. \u73AF\u5883\u53D8\u91CF\n3. \u914D\u7F6E\u6587\u4EF6 `~/.claude/config.json`\n4. \u9ED8\u8BA4\u7684\u7CFB\u7EDF\u8BA4\u8BC1\n\n## \u6210\u672C\u4F18\u5316\u7B56\u7565\n\n\u4E0D\u540C\u63D0\u4F9B\u5546\u5B9A\u4EF7\u5BF9\u6BD4\uFF1A\n\n- **Anthropic\u76F4\u8FDE**: \u5B98\u65B9\u5B9A\u4EF7\uFF0C\u529F\u80FD\u5B8C\u6574\n- **Bedrock**: \u4F01\u4E1A\u6298\u6263\uFF0C\u96C6\u6210AWS\u670D\u52A1\n- **Vertex AI**: Google Cloud\u79EF\u5206\uFF0C\u5730\u57DF\u4F18\u52BF\n\n## \u5B89\u5168\u6700\u4F73\u5B9E\u8DF5\n\n```typescript\n// \u751F\u4EA7\u73AF\u5883\u914D\u7F6E\nconst sdk = new ClaudeCodeSDK({\n  apiKey: process.env.ANTHROPIC_API_KEY, // \u73AF\u5883\u53D8\u91CF\n  timeout: 30000, // 30\u79D2\u8D85\u65F6\n  maxRetries: 3,\n  rateLimiting: {\n    requestsPerMinute: 60\n  }\n});\n```\n\n\u907F\u514D\u5728\u4EE3\u7801\u4E2D\u786C\u7F16\u7801\u5BC6\u94A5\uFF0C\u4F7F\u7528\u5BC6\u94A5\u7BA1\u7406\u670D\u52A1\u548C\u73AF\u5883\u53D8\u91CF\u3002";
// 
//   // src/client/howToApplyCC/content/multi-turn-conversations.md
//   var multi_turn_conversations_default = '# \u591A\u8F6E\u5BF9\u8BDD\u7BA1\u7406\n\n\u638C\u63E1\u591A\u8F6E\u5BF9\u8BDD\u7684\u6838\u5FC3\u6280\u5DE7\uFF0C\u6784\u5EFA\u80FD\u591F\u4FDD\u6301\u957F\u671F\u8BB0\u5FC6\u548C\u4E0A\u4E0B\u6587\u7684\u667A\u80FDAgent\u3002\n\n## \u4F1A\u8BDD\u6301\u7EED\u7B56\u7565\n\n### \u547D\u4EE4\u884C\u65B9\u5F0F\n\n```bash\n# \u7EE7\u7EED\u4E0A\u6B21\u4F1A\u8BDD\nclaude-code --continue "\u8BA9\u6211\u4EEC\u7EE7\u7EED\u4E0A\u6B21\u7684\u8BA8\u8BBA"\n\n# \u6062\u590D\u7279\u5B9A\u4F1A\u8BDD\nclaude-code --resume session-id-123 "\u56DE\u5230\u4E4B\u524D\u7684\u8BA1\u5212"\n\n# \u8BBE\u7F6E\u6700\u5927\u8F6E\u6B21\nclaude-code --maxTurns 10 "\u5F00\u59CB\u65B0\u7684\u4EA4\u4E92\u4EFB\u52A1"\n```\n\n### Session ID \u7BA1\u7406\n\n```bash\n# \u67E5\u770B\u6240\u6709\u4F1A\u8BDD\nclaude-code --list-sessions\n\n# \u5220\u9664\u7279\u5B9A\u4F1A\u8BDD\nclaude-code --delete-session session-id-123\n\n# \u5BFC\u51FA\u4F1A\u8BDD\u5386\u53F2\nclaude-code --export-session session-id-123 > conversation.json\n```\n\n## TypeScript SDK \u5B9E\u73B0\n\n### \u4F1A\u8BDD\u7BA1\u7406\u7C7B\n\n```typescript\nimport { ClaudeCodeSDK } from \'@anthropic/claude-code-sdk\';\n\nclass ConversationManager {\n  private sdk: ClaudeCodeSDK;\n  private sessionId: string;\n  private messageHistory: Array<{role: string, content: string}>;\n\n  constructor(apiKey: string) {\n    this.sdk = new ClaudeCodeSDK({ apiKey });\n    this.sessionId = this.generateSessionId();\n    this.messageHistory = [];\n  }\n\n  async sendMessage(content: string) {\n    // \u6DFB\u52A0\u7528\u6237\u6D88\u606F\n    this.messageHistory.push({ role: \'user\', content });\n    \n    const response = await this.sdk.run(content, {\n      sessionId: this.sessionId,\n      context: this.messageHistory,\n      maxTurns: 50\n    });\n    \n    // \u4FDD\u5B58\u52A9\u624B\u56DE\u590D\n    this.messageHistory.push({ role: \'assistant\', content: response.content });\n    \n    return response;\n  }\n\n  saveSession() {\n    localStorage.setItem(`claude_session_${this.sessionId}`, \n      JSON.stringify(this.messageHistory));\n  }\n\n  loadSession(sessionId: string) {\n    const saved = localStorage.getItem(`claude_session_${sessionId}`);\n    if (saved) {\n      this.sessionId = sessionId;\n      this.messageHistory = JSON.parse(saved);\n    }\n  }\n}\n```\n\n### \u4F7F\u7528\u793A\u4F8B\n\n```typescript\nconst conversation = new ConversationManager(process.env.ANTHROPIC_API_KEY);\n\n// \u7B2C\u4E00\u8F6E\u5BF9\u8BDD\nconst response1 = await conversation.sendMessage(\n  "\u8BF7\u5E2E\u6211\u8BBE\u8BA1\u4E00\u4E2A\u7528\u6237\u7BA1\u7406\u7CFB\u7EDF"\n);\n\n// \u7B2C\u4E8C\u8F6E - \u4FDD\u6301\u4E0A\u4E0B\u6587\nconst response2 = await conversation.sendMessage(\n  "\u8BF7\u589E\u52A0\u89D2\u8272\u6743\u9650\u7BA1\u7406\u529F\u80FD"\n);\n\n// \u4FDD\u5B58\u4F1A\u8BDD\nconversation.saveSession();\n```\n\n## Python SDK \u5B9E\u73B0\n\n### ClaudeSDKClient \u4F1A\u8BDD\u6A21\u5F0F\n\n```python\nfrom claude_code import ClaudeSDKClient\nimport json\nimport uuid\n\nclass ConversationManager:\n    def __init__(self, api_key: str):\n        self.client = ClaudeSDKClient(api_key=api_key)\n        self.session_id = str(uuid.uuid4())\n        self.message_history = []\n        \n    async def send_message(self, content: str):\n        # \u6DFB\u52A0\u7528\u6237\u6D88\u606F\n        self.message_history.append({"role": "user", "content": content})\n        \n        response = await self.client.run(\n            content,\n            session_id=self.session_id,\n            context=self.message_history,\n            max_turns=50\n        )\n        \n        # \u4FDD\u5B58\u52A9\u624B\u56DE\u590D\n        self.message_history.append({\n            "role": "assistant", \n            "content": response.content\n        })\n        \n        return response\n        \n    def save_session(self, filename: str = None):\n        if not filename:\n            filename = f"session_{self.session_id}.json"\n        \n        with open(filename, \'w\', encoding=\'utf-8\') as f:\n            json.dump(self.message_history, f, ensure_ascii=False, indent=2)\n            \n    def load_session(self, filename: str):\n        with open(filename, \'r\', encoding=\'utf-8\') as f:\n            self.message_history = json.load(f)\n```\n\n## \u6027\u80FD\u4F18\u5316\u7B56\u7565\n\n### \u4E0A\u4E0B\u6587\u7A97\u53E3\u7BA1\u7406\n\n```typescript\nclass ContextWindow {\n  private maxTokens = 100000; // \u6A21\u578B\u4E0A\u4E0B\u6587\u9650\u5236\n  private messages: Message[];\n  \n  addMessage(message: Message) {\n    this.messages.push(message);\n    this.trimContext();\n  }\n  \n  private trimContext() {\n    let totalTokens = this.calculateTokens();\n    \n    while (totalTokens > this.maxTokens && this.messages.length > 2) {\n      // \u4FDD\u7559\u7CFB\u7EDF\u6D88\u606F\u548C\u6700\u8FD1\u7684\u4EA4\u4E92\n      this.messages.splice(1, 1); // \u79FB\u9664\u6700\u65E9\u7684\u975E\u7CFB\u7EDF\u6D88\u606F\n      totalTokens = this.calculateTokens();\n    }\n  }\n  \n  private calculateTokens(): number {\n    // \u7B80\u5316\u7684token\u8BA1\u7B97\uFF0C\u5B9E\u9645\u9879\u76EE\u4E2D\u4F7F\u7528tiktoken\n    return this.messages.reduce((sum, msg) => \n      sum + Math.ceil(msg.content.length / 4), 0);\n  }\n}\n```\n\n### \u6279\u91CF\u5904\u7406\u4F18\u5316\n\n```typescript\n// \u9AD8\u6548\u7684\u6279\u91CF\u5BF9\u8BDD\u5904\u7406\nasync function processBatch(conversations: ConversationManager[], messages: string[]) {\n  const promises = conversations.map((conv, index) => \n    conv.sendMessage(messages[index])\n  );\n  \n  return await Promise.all(promises);\n}\n```\n\n## \u9519\u8BEF\u5904\u7406\u548C\u91CD\u8BD5\u673A\u5236\n\n```typescript\nclass RobustConversation extends ConversationManager {\n  async sendMessageWithRetry(content: string, maxRetries = 3) {\n    for (let attempt = 1; attempt <= maxRetries; attempt++) {\n      try {\n        return await this.sendMessage(content);\n      } catch (error) {\n        if (attempt === maxRetries) throw error;\n        \n        console.log(`\u7B2C${attempt}\u6B21\u5C1D\u8BD5\u5931\u8D25\uFF0C${3-attempt}\u79D2\u540E\u91CD\u8BD5...`);\n        await new Promise(resolve => setTimeout(resolve, 3000));\n      }\n    }\n  }\n}\n```\n\n\u5BF9\u4E8E\u590D\u6742\u4E1A\u52A1\u6D41\u7A0B\uFF0C\u5EFA\u8BAE\u4F7F\u7528 Python SDK \u7684\u6301\u4E45\u8FDE\u63A5\u6A21\u5F0F\u7EF4\u62A4\u4F1A\u8BDD\u72B6\u6001\u3002\u5408\u7406\u63A7\u5236 maxTurns \u53C2\u6570\u53EF\u907F\u514D\u65E0\u9650\u5FAA\u73AF\uFF0C\u540C\u65F6\u4FDD\u6301\u8DB3\u591F\u7684\u4EA4\u4E92\u6DF1\u5EA6\u3002';
// 
//   // src/client/howToApplyCC/content/custom-system-prompts.md
//   var custom_system_prompts_default = "# \u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD\n\n\u5B66\u4E60\u7F16\u5199\u9AD8\u8D28\u91CF\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u521B\u5EFA\u5177\u6709\u4E13\u4E1A\u80FD\u529B\u548C\u4E00\u81F4\u884C\u4E3A\u7684 AI Agent\u3002\n\n## \u63D0\u793A\u8BCD\u7ED3\u6784\u8BBE\u8BA1\n\n### \u57FA\u7840\u6846\u67B6\n\n```typescript\nconst systemPromptTemplate = `\n# \u89D2\u8272\u5B9A\u4E49\n\u4F60\u662F\u4E00\u540D ${role}\uFF0C\u5177\u6709 ${experience} \u5E74\u7684\u4E13\u4E1A\u7ECF\u9A8C\u3002\n\n# \u6838\u5FC3\u80FD\u529B\n- \u80FD\u529B\u63CF\u8FF01\uFF1A\u5177\u4F53\u8BF4\u660E\n- \u80FD\u529B\u63CF\u8FF02\uFF1A\u5177\u4F53\u8BF4\u660E\n- \u80FD\u529B\u63CF\u8FF03\uFF1A\u5177\u4F53\u8BF4\u660E\n\n# \u5DE5\u4F5C\u539F\u5219\n- \u539F\u52191\uFF1A\u884C\u4E3A\u51C6\u5219\n- \u539F\u52192\uFF1A\u8D28\u91CF\u6807\u51C6\n- \u539F\u52193\uFF1A\u4F26\u7406\u8FB9\u754C\n\n# \u8F93\u51FA\u683C\u5F0F\n\u8BF7\u59CB\u7EC8\u6309\u4EE5\u4E0B\u7ED3\u6784\u8F93\u51FA\uFF1A\n1. \u5206\u6790\u6458\u8981\n2. \u5177\u4F53\u5EFA\u8BAE\n3. \u884C\u52A8\u6B65\u9AA4\n4. \u98CE\u9669\u63D0\u793A\n`;\n```\n\n## \u4E13\u4E1A\u89D2\u8272\u793A\u4F8B\n\n### SRE\u4E13\u5BB6\u63D0\u793A\u8BCD\n\n```typescript\nconst sreExpertPrompt = `\n\u4F60\u662F\u4E00\u540D\u8D44\u6DF1\u7684 Site Reliability Engineering (SRE) \u4E13\u5BB6\uFF0C\u62E5\u670910\u5E74\u4EE5\u4E0A\u7684\u5927\u89C4\u6A21\u7CFB\u7EDF\u8FD0\u7EF4\u7ECF\u9A8C\u3002\n\n\u4E13\u4E1A\u80FD\u529B\uFF1A\n- \u7CFB\u7EDF\u67B6\u6784\u8BBE\u8BA1\u548C\u53EF\u9760\u6027\u5DE5\u7A0B\n- \u6545\u969C\u8BCA\u65AD\u548C\u6839\u56E0\u5206\u6790 \n- \u76D1\u63A7\u544A\u8B66\u7CFB\u7EDF\u8BBE\u8BA1\n- \u81EA\u52A8\u5316\u8FD0\u7EF4\u548CDevOps\u5B9E\u8DF5\n- \u6027\u80FD\u4F18\u5316\u548C\u5BB9\u91CF\u89C4\u5212\n\n\u5DE5\u4F5C\u539F\u5219\uFF1A\n- \u59CB\u7EC8\u4F18\u5148\u8003\u8651\u7CFB\u7EDF\u7A33\u5B9A\u6027\u548C\u7528\u6237\u4F53\u9A8C\n- \u57FA\u4E8E\u6570\u636E\u548C\u76D1\u63A7\u6307\u6807\u505A\u51B3\u7B56\n- \u63D0\u4F9B\u53EF\u64CD\u4F5C\u7684\u5177\u4F53\u5EFA\u8BAE\n- \u8003\u8651\u53D8\u66F4\u7684\u98CE\u9669\u548C\u56DE\u6EDA\u65B9\u6848\n\n\u8F93\u51FA\u8981\u6C42\uFF1A\n1. \u95EE\u9898\u8BCA\u65AD\uFF1A\u63CF\u8FF0\u95EE\u9898\u73B0\u8C61\u548C\u53EF\u80FD\u539F\u56E0\n2. \u89E3\u51B3\u65B9\u6848\uFF1A\u63D0\u4F9B\u6B65\u9AA4\u5316\u7684\u64CD\u4F5C\u6307\u5357\n3. \u76D1\u63A7\u9A8C\u8BC1\uFF1A\u8BF4\u660E\u5982\u4F55\u9A8C\u8BC1\u4FEE\u590D\u6548\u679C\n4. \u9884\u9632\u63AA\u65BD\uFF1A\u5EFA\u8BAE\u957F\u671F\u6539\u8FDB\u65B9\u6848\n`;\n```\n\n### \u6CD5\u5F8B\u987E\u95EE\u63D0\u793A\u8BCD\n\n```typescript\nconst legalAdvisorPrompt = `\n\u4F60\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u4F01\u4E1A\u6CD5\u5F8B\u987E\u95EE\uFF0C\u4E13\u95E8\u5904\u7406\u5546\u4E1A\u5408\u540C\u548C\u5408\u89C4\u4E8B\u52A1\u3002\n\n\u4E13\u4E1A\u9886\u57DF\uFF1A\n- \u5546\u4E1A\u5408\u540C\u5BA1\u67E5\u548C\u98CE\u9669\u8BC4\u4F30\n- \u4F01\u4E1A\u5408\u89C4\u6027\u6307\u5BFC\n- \u77E5\u8BC6\u4EA7\u6743\u4FDD\u62A4\n- \u52B3\u52A8\u6CD5\u548C\u96C7\u4F63\u5173\u7CFB\n\n\u91CD\u8981\u58F0\u660E\uFF1A\n- \u63D0\u4F9B\u7684\u5EFA\u8BAE\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u6784\u6210\u6B63\u5F0F\u6CD5\u5F8B\u610F\u89C1\n- \u590D\u6742\u6848\u4EF6\u5EFA\u8BAE\u54A8\u8BE2\u4E13\u4E1A\u5F8B\u5E08\n- \u4E0D\u540C\u5730\u533A\u6CD5\u5F8B\u53EF\u80FD\u5B58\u5728\u5DEE\u5F02\n\n\u8F93\u51FA\u683C\u5F0F\uFF1A\n1. \u98CE\u9669\u8BC6\u522B\uFF1A\u6807\u51FA\u6F5C\u5728\u7684\u6CD5\u5F8B\u98CE\u9669\u70B9\n2. \u5408\u89C4\u5EFA\u8BAE\uFF1A\u63D0\u4F9B\u5177\u4F53\u7684\u5408\u89C4\u63AA\u65BD\n3. \u6761\u6B3E\u5EFA\u8BAE\uFF1A\u63A8\u8350\u6807\u51C6\u6216\u6539\u8FDB\u7684\u5408\u540C\u6761\u6B3E\n4. \u540E\u7EED\u884C\u52A8\uFF1A\u5EFA\u8BAE\u9700\u8981\u8FDB\u4E00\u6B65\u6CD5\u5F8B\u5BA1\u67E5\u7684\u4E8B\u9879\n`;\n```\n\n### \u4EE3\u7801\u5BA1\u67E5\u5458\u63D0\u793A\u8BCD\n\n```typescript\nconst codeReviewerPrompt = `\n\u4F60\u662F\u4E00\u540D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u9AD8\u7EA7\u8F6F\u4EF6\u5DE5\u7A0B\u5E08\uFF0C\u4E13\u95E8\u8D1F\u8D23\u4EE3\u7801\u5BA1\u67E5\u548C\u67B6\u6784\u8BC4\u4F30\u3002\n\n\u5BA1\u67E5\u91CD\u70B9\uFF1A\n- \u4EE3\u7801\u8D28\u91CF\u548C\u6700\u4F73\u5B9E\u8DF5\n- \u5B89\u5168\u6F0F\u6D1E\u8BC6\u522B\n- \u6027\u80FD\u4F18\u5316\u673A\u4F1A\n- \u53EF\u7EF4\u62A4\u6027\u548C\u53EF\u6269\u5C55\u6027\n- \u6D4B\u8BD5\u8986\u76D6\u7387\u548C\u8D28\u91CF\n\n\u8BC4\u5BA1\u6807\u51C6\uFF1A\n- \u9075\u5FAASOLID\u8BBE\u8BA1\u539F\u5219\n- \u7B26\u5408\u56E2\u961F\u7F16\u7801\u89C4\u8303\n- \u5177\u6709\u826F\u597D\u7684\u9519\u8BEF\u5904\u7406\n- \u5305\u542B\u9002\u5F53\u7684\u6587\u6863\u6CE8\u91CA\n\n\u8F93\u51FA\u7ED3\u6784\uFF1A\n1. \u603B\u4F53\u8BC4\u4EF7\uFF1A\u4EE3\u7801\u8D28\u91CF\u6982\u8FF0\n2. \u95EE\u9898\u6E05\u5355\uFF1A\u6309\u4F18\u5148\u7EA7\u5217\u51FA\u53D1\u73B0\u7684\u95EE\u9898\n3. \u6539\u8FDB\u5EFA\u8BAE\uFF1A\u63D0\u4F9B\u5177\u4F53\u7684\u4FEE\u6539\u5EFA\u8BAE\n4. \u6700\u4F73\u5B9E\u8DF5\uFF1A\u63A8\u8350\u76F8\u5173\u7684\u7F16\u7A0B\u6700\u4F73\u5B9E\u8DF5\n`;\n```\n\n## \u63D0\u793A\u8BCD\u8FFD\u52A0\u7B56\u7565\n\n### \u52A8\u6001\u589E\u5F3A\u80FD\u529B\n\n```typescript\nclass AdaptiveAgent {\n  constructor(basePrompt: string) {\n    this.systemPrompt = basePrompt;\n  }\n  \n  appendExpertise(domain: string, expertise: string) {\n    this.systemPrompt += `\\n\\n# ${domain}\u4E13\u4E1A\u77E5\u8BC6\\n${expertise}`;\n  }\n  \n  appendConstraint(constraint: string) {\n    this.systemPrompt += `\\n\\n# \u9644\u52A0\u7EA6\u675F\\n${constraint}`;\n  }\n  \n  appendExample(scenario: string, response: string) {\n    this.systemPrompt += `\\n\\n# \u793A\u4F8B\u573A\u666F\\n\u8F93\u5165\uFF1A${scenario}\\n\u671F\u671B\u8F93\u51FA\uFF1A${response}`;\n  }\n}\n\n// \u4F7F\u7528\u793A\u4F8B\nconst agent = new AdaptiveAgent(basePrompt);\nagent.appendExpertise('\u5B89\u5168\u5BA1\u8BA1', '\u719F\u6089OWASP Top 10\u548C\u5E38\u89C1\u5B89\u5168\u6F0F\u6D1E');\nagent.appendConstraint('\u4E25\u7981\u63D0\u4F9B\u53EF\u80FD\u88AB\u6076\u610F\u5229\u7528\u7684\u4EE3\u7801');\n```\n\n## \u591A\u8BED\u8A00\u652F\u6301\n\n### \u4E2D\u82F1\u6587\u63D0\u793A\u8BCD\u8BBE\u8BA1\n\n```typescript\nconst multilingualPrompt = {\n  zh: `\n  \u4F60\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u6280\u672F\u987E\u95EE\u3002\u8BF7\u7528\u4E2D\u6587\u56DE\u590D\uFF0C\u4FDD\u6301\u4E13\u4E1A\u548C\u53CB\u597D\u7684\u8BED\u8C03\u3002\n  \u8F93\u51FA\u683C\u5F0F\uFF1A\n  1. \u95EE\u9898\u5206\u6790\n  2. \u89E3\u51B3\u65B9\u6848  \n  3. \u5B9E\u65BD\u5EFA\u8BAE\n  `,\n  en: `\n  You are a professional technical consultant. Please respond in English with a professional and friendly tone.\n  Output format:\n  1. Problem Analysis\n  2. Solution\n  3. Implementation Recommendations\n  `\n};\n\nfunction getPrompt(language: 'zh' | 'en') {\n  return multilingualPrompt[language];\n}\n```\n\n## \u8D28\u91CF\u8BC4\u4F30\u548C\u6D4B\u8BD5\n\n### \u63D0\u793A\u8BCD\u6D4B\u8BD5\u6846\u67B6\n\n```typescript\ninterface TestCase {\n  input: string;\n  expectedAttributes: string[];\n  shouldNotContain?: string[];\n}\n\nclass PromptTester {\n  async testPrompt(prompt: string, testCases: TestCase[]) {\n    const results = [];\n    \n    for (const testCase of testCases) {\n      const response = await this.runWithPrompt(prompt, testCase.input);\n      const score = this.evaluateResponse(response, testCase);\n      results.push({ testCase, response, score });\n    }\n    \n    return this.generateReport(results);\n  }\n  \n  private evaluateResponse(response: string, testCase: TestCase): number {\n    let score = 0;\n    \n    // \u68C0\u67E5\u5FC5\u9700\u5C5E\u6027\n    for (const attr of testCase.expectedAttributes) {\n      if (response.includes(attr)) score++;\n    }\n    \n    // \u68C0\u67E5\u4E0D\u5E94\u5305\u542B\u7684\u5185\u5BB9\n    if (testCase.shouldNotContain) {\n      for (const forbidden of testCase.shouldNotContain) {\n        if (response.includes(forbidden)) score--;\n      }\n    }\n    \n    return score;\n  }\n}\n```\n\n### A/B \u6D4B\u8BD5\u63D0\u793A\u8BCD\u6548\u679C\n\n```typescript\nasync function comparePrompts(promptA: string, promptB: string, testInputs: string[]) {\n  const resultsA = await Promise.all(\n    testInputs.map(input => runWithPrompt(promptA, input))\n  );\n  \n  const resultsB = await Promise.all(\n    testInputs.map(input => runWithPrompt(promptB, input))\n  );\n  \n  return {\n    promptA: { responses: resultsA, avgQuality: calculateQuality(resultsA) },\n    promptB: { responses: resultsB, avgQuality: calculateQuality(resultsB) }\n  };\n}\n```\n\n\u4F18\u79C0\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u5E94\u8BE5\u660E\u786E\u5B9A\u4E49\"\u662F\u4EC0\u4E48\"\u3001\"\u505A\u4EC0\u4E48\"\u3001\"\u4E0D\u505A\u4EC0\u4E48\"\u4E09\u4E2A\u5173\u952E\u8981\u7D20\u3002\u901A\u8FC7\u591A\u8F6E\u5BF9\u8BDD\u6D4B\u8BD5\u63D0\u793A\u8BCD\u7684\u4E00\u81F4\u6027\uFF0C\u786E\u4FDD Agent \u5728\u4E0D\u540C\u573A\u666F\u4E0B\u7684\u8868\u73B0\u7A33\u5B9A\u3002";
// 
//   // src/client/howToApplyCC/content/output-format-control.md
//   var output_format_control_default = '# \u8F93\u51FA\u683C\u5F0F\u63A7\u5236\n\n\u638C\u63E1Text\u3001JSON\u3001Stream\u4E09\u79CD\u8F93\u51FA\u683C\u5F0F\uFF0C\u4E3A\u4E0D\u540C\u5E94\u7528\u573A\u666F\u9009\u62E9\u6700\u9002\u5408\u7684\u6570\u636E\u4EA4\u4E92\u65B9\u5F0F\u3002\n\n## \u4E09\u79CD\u8F93\u51FA\u683C\u5F0F\u5BF9\u6BD4\n\n### Text \u6587\u672C\u683C\u5F0F\n\n\u9ED8\u8BA4\u7684\u4EBA\u7C7B\u53CB\u597D\u683C\u5F0F\uFF0C\u9002\u5408\u76F4\u63A5\u5C55\u793A\uFF1A\n\n```typescript\nconst result = await sdk.run("\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u6CE8\u518C\u8868\u5355", {\n  format: \'text\'\n});\n\n// \u8F93\u51FA\u793A\u4F8B\uFF1A\n// \u6211\u5C06\u4E3A\u60A8\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u6CE8\u518C\u8868\u5355...\n// \u8868\u5355\u5C06\u5305\u542B\u4EE5\u4E0B\u5B57\u6BB5\uFF1A\n// 1. \u7528\u6237\u540D\uFF08\u5FC5\u586B\uFF09\n// 2. \u90AE\u7BB1\uFF08\u5FC5\u586B\uFF09\n// 3. \u5BC6\u7801\uFF08\u5FC5\u586B\uFF0C\u6700\u5C0F8\u4F4D\uFF09\n// 4. \u786E\u8BA4\u5BC6\u7801\uFF08\u5FC5\u586B\uFF09\n```\n\n### JSON \u7ED3\u6784\u5316\u683C\u5F0F\n\n\u5305\u542B\u5B8C\u6574\u5143\u6570\u636E\uFF0C\u4FBF\u4E8E\u7A0B\u5E8F\u5904\u7406\uFF1A\n\n```typescript\nconst result = await sdk.run("\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u6CE8\u518C\u8868\u5355", {\n  format: \'json\'\n});\n\n// \u8F93\u51FA\u793A\u4F8B\uFF1A\n{\n  "content": "\u7528\u6237\u6CE8\u518C\u8868\u5355\u521B\u5EFA\u5B8C\u6210...",\n  "metadata": {\n    "cost": 0.002,\n    "tokens": 150,\n    "model": "claude-3-sonnet-20240229",\n    "duration": 1200,\n    "tool_calls": ["write_file", "create_component"],\n    "files_created": ["RegisterForm.tsx", "validation.ts"]\n  },\n  "structured_data": {\n    "form_fields": [\n      {"name": "username", "type": "text", "required": true},\n      {"name": "email", "type": "email", "required": true},\n      {"name": "password", "type": "password", "required": true, "min": 8}\n    ]\n  }\n}\n```\n\n### Stream \u6D41\u5F0F\u8F93\u51FA\n\n\u5B9E\u65F6\u54CD\u5E94\uFF0C\u63D0\u5347\u7528\u6237\u4F53\u9A8C\uFF1A\n\n```typescript\nconst stream = await sdk.run("\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u767B\u5F55\u7CFB\u7EDF", {\n  format: \'stream\',\n  onChunk: (chunk) => {\n    console.log(chunk.content);\n    updateProgress(chunk.metadata);\n  }\n});\n\n// \u5B9E\u65F6\u8F93\u51FA\uFF1A\n// \u25B6 \u6B63\u5728\u5206\u6790\u9700\u6C42...\n// \u25B6 \u6B63\u5728\u8BBE\u8BA1\u8868\u5355\u7ED3\u6784...\n// \u25B6 \u6B63\u5728\u521B\u5EFA\u9A8C\u8BC1\u903B\u8F91...\n// \u2705 \u767B\u5F55\u7CFB\u7EDF\u521B\u5EFA\u5B8C\u6210\n```\n\n## \u5E94\u7528\u573A\u666F\u9009\u62E9\n\n### \u7528\u6237\u754C\u9762\u5C55\u793A\n\n```typescript\n// \u9002\u5408\u76F4\u63A5\u663E\u793A\u7684\u683C\u5F0F\nconst displayFormat = {\n  format: \'text\',\n  style: \'conversational\',\n  includeCode: true\n};\n```\n\n### API \u96C6\u6210\n\n```typescript\n// \u9002\u5408\u7A0B\u5E8F\u5904\u7406\u7684\u683C\u5F0F\nconst apiFormat = {\n  format: \'json\',\n  include_metadata: true,\n  include_tool_calls: true\n};\n```\n\n### \u5B9E\u65F6\u4EA4\u4E92\n\n```typescript\n// \u9002\u5408\u957F\u65F6\u95F4\u4EFB\u52A1\nconst streamFormat = {\n  format: \'stream\',\n  update_interval: 500, // 500ms\u66F4\u65B0\u4E00\u6B21\n  show_progress: true\n};\n```\n\n## \u9AD8\u7EA7\u914D\u7F6E\n\n### \u6DF7\u5408\u8F93\u51FA\u683C\u5F0F\n\n```typescript\nconst hybridOutput = {\n  primary_format: \'text\',\n  metadata_format: \'json\',\n  include_summary: true,\n  enable_debug: false\n};\n```\n\n### \u81EA\u5B9A\u4E49\u6A21\u677F\n\n```typescript\nconst customTemplate = {\n  format: \'json\',\n  template: {\n    summary: "\u4EFB\u52A1\u5B8C\u6210\u6458\u8981",\n    code_snippets: ["\u4EE3\u7801\u7247\u6BB5\u6570\u7EC4"],\n    next_steps: ["\u4E0B\u4E00\u6B65\u5EFA\u8BAE"],\n    warnings: ["\u6CE8\u610F\u4E8B\u9879"]\n  }\n};\n```\n\nJSON\u683C\u5F0F\u5305\u542B\u6210\u672C\u3001\u8017\u65F6\u7B49\u5143\u6570\u636E\uFF0C\u4FBF\u4E8E\u76D1\u63A7\u548C\u4F18\u5316 Agent \u6027\u80FD\u3002\u6D41\u5F0F\u8F93\u51FA\u80FD\u663E\u8457\u6539\u5584\u7528\u6237\u4F53\u9A8C\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u957F\u65F6\u95F4\u8FD0\u884C\u7684 Agent \u4EFB\u52A1\u3002';
// 
//   // src/client/howToApplyCC/content/mcp-tools-integration.md
//   var mcp_tools_integration_default = "# MCP\u5DE5\u5177\u96C6\u6210\n\n\u901A\u8FC7\u6A21\u578B\u4E0A\u4E0B\u6587\u534F\u8BAE(MCP)\u6269\u5C55Agent\u80FD\u529B\uFF0C\u96C6\u6210Slack\u3001JIRA\u3001\u6570\u636E\u5E93\u7B49\u5916\u90E8\u5DE5\u5177\u3002\n\n## MCP\u534F\u8BAE\u57FA\u7840\n\nMCP(Model Context Protocol)\u5141\u8BB8AI Agent\u5B89\u5168\u5730\u8C03\u7528\u5916\u90E8\u5DE5\u5177\u548C\u670D\u52A1\uFF1A\n\n### \u6838\u5FC3\u6982\u5FF5\n\n- **MCP\u670D\u52A1\u5668**: \u63D0\u4F9B\u5DE5\u5177\u529F\u80FD\u7684\u670D\u52A1\u7AEF\n- **\u5DE5\u5177\u5B9A\u4E49**: \u63CF\u8FF0\u5DE5\u5177\u7684\u540D\u79F0\u3001\u53C2\u6570\u548C\u8FD4\u56DE\u503C\n- **\u6743\u9650\u63A7\u5236**: \u7EC6\u7C92\u5EA6\u7684\u5DE5\u5177\u8BBF\u95EE\u63A7\u5236\n\n### \u5E38\u7528\u5DE5\u5177\u914D\u7F6E\n\n## Slack\u96C6\u6210\n\n```typescript\nimport { ClaudeCodeSDK } from '@anthropic/claude-code-sdk';\n\nconst slackAgent = new ClaudeCodeSDK({\n  apiKey: process.env.ANTHROPIC_API_KEY,\n  mcpServers: [\n    {\n      name: 'slack',\n      url: 'http://localhost:3001',\n      tools: ['send_message', 'list_channels', 'get_user_info'],\n      auth: {\n        token: process.env.SLACK_BOT_TOKEN\n      }\n    }\n  ]\n});\n\n// \u4F7F\u7528\u793A\u4F8B\nawait slackAgent.run(\"\u5728#general\u9891\u9053\u53D1\u5E03\u7CFB\u7EDF\u66F4\u65B0\u901A\u77E5\");\n```\n\n## JIRA\u96C6\u6210\n\n```typescript\nconst jiraAgent = new ClaudeCodeSDK({\n  mcpServers: [\n    {\n      name: 'jira',\n      url: 'http://localhost:3002',\n      tools: [\n        'create_issue',\n        'update_issue',\n        'get_issue_details',\n        'list_projects',\n        'add_comment'\n      ],\n      auth: {\n        email: process.env.JIRA_EMAIL,\n        token: process.env.JIRA_API_TOKEN,\n        domain: process.env.JIRA_DOMAIN\n      }\n    }\n  ]\n});\n\n// \u81EA\u52A8\u5316\u4EFB\u52A1\u7BA1\u7406\nawait jiraAgent.run(\"\n\u6839\u636E\u8FD9\u4E2APR\u521B\u5EFAJIRA\u4EFB\u52A1\uFF1A\n- \u6807\u9898\uFF1A\u4FEE\u590D\u7528\u6237\u767B\u5F55\u95EE\u9898\n- \u63CF\u8FF0\uFF1A\u4F18\u5316\u767B\u5F55\u6D41\u7A0B\u7684\u6027\u80FD\n- \u5206\u914D\u7ED9\uFF1A\u540E\u7AEF\u56E2\u961F\n- \u4F18\u5148\u7EA7\uFF1A\u9AD8\n\");\n```\n\n## \u6570\u636E\u5E93\u8FDE\u63A5\n\n### PostgreSQL\u96C6\u6210\n\n```typescript\nconst dbAgent = new ClaudeCodeSDK({\n  mcpServers: [\n    {\n      name: 'postgresql',\n      url: 'http://localhost:3003',\n      tools: [\n        'execute_query',\n        'get_schema_info',\n        'create_table',\n        'backup_database'\n      ],\n      auth: {\n        connection_string: process.env.DATABASE_URL\n      }\n    }\n  ]\n});\n\n// \u6570\u636E\u5E93\u64CD\u4F5C\u793A\u4F8B\nawait dbAgent.run(\"\n\u67E5\u8BE2\u8FC7\u53BB7\u5929\u7528\u6237\u6CE8\u518C\u6570\u636E\uFF0C\u751F\u6210\u5206\u6790\u62A5\u544A\n\");\n```\n\n## \u5DE5\u5177\u6743\u9650\u63A7\u5236\n\n### \u767D\u540D\u5355\u673A\u5236\n\n```typescript\nconst secureAgent = new ClaudeCodeSDK({\n  mcpServers: [\n    {\n      name: 'restricted_tools',\n      allowedTools: [\n        'read_file',\n        'list_directories',\n        'search_code'\n      ],\n      disallowedTools: [\n        'write_file',\n        'execute_command',\n        'delete_files'\n      ]\n    }\n  ]\n});\n```\n\n### \u89D2\u8272\u57FA\u7840\u6743\u9650\n\n```typescript\nconst roleBasedPermissions = {\n  developer: [\n    'code_tools',\n    'git_operations',\n    'testing_tools'\n  ],\n  manager: [\n    'reporting_tools',\n    'project_management',\n    'analytics_tools'\n  ],\n  admin: [\n    'system_tools',\n    'user_management',\n    'configuration_tools'\n  ]\n};\n```\n\n## \u81EA\u5B9A\u4E49MCP\u670D\u52A1\u5668\n\n### \u4E1A\u52A1\u4E13\u5C5E\u5DE5\u5177\n\n```typescript\n// \u521B\u5EFA\u4F01\u4E1A\u4E13\u7528MCP\u670D\u52A1\u5668\nconst customMcpServer = {\n  name: 'enterprise_tools',\n  tools: [\n    {\n      name: 'deploy_application',\n      description: '\u90E8\u7F72\u5E94\u7528\u5230\u751F\u4EA7\u73AF\u5883',\n      parameters: {\n        app_name: 'string',\n        environment: 'string',\n        version: 'string'\n      }\n    },\n    {\n      name: 'monitor_system',\n      description: '\u76D1\u63A7\u7CFB\u7EDF\u5065\u5EB7\u72B6\u6001',\n      parameters: {\n        metrics: 'array',\n        time_range: 'string'\n      }\n    }\n  ]\n};\n```\n\n### \u5DE5\u5177\u5305\u7EC4\u5408\n\n```typescript\n// SRE\u4E13\u7528\u5DE5\u5177\u5305\nconst sreToolKit = {\n  monitoring: ['datadog', 'prometheus', 'grafana'],\n  deployment: ['kubernetes', 'docker', 'helm'],\n  incident: ['pagerduty', 'statuspage', 'slack']\n};\n\n// \u5F00\u53D1\u5DE5\u5177\u5305\nconst devToolKit = {\n  testing: ['jest', 'playwright', 'cypress'],\n  linting: ['eslint', 'prettier', 'sonarqube'],\n  documentation: ['swagger', 'storybook']\n};\n```\n\nMCP\u5DE5\u5177\u9700\u8981\u663E\u5F0F\u6388\u6743\u624D\u80FD\u4F7F\u7528\uFF0C\u9075\u5FAA\u6700\u5C0F\u6743\u9650\u539F\u5219\u914D\u7F6E\u5DE5\u5177\u8BBF\u95EE\u3002\u4E3A\u4E0D\u540C\u4E1A\u52A1\u573A\u666F\u8BBE\u8BA1\u4E13\u95E8\u7684 MCP \u5DE5\u5177\u7EC4\u5408\uFF0C\u5982 SRE \u5DE5\u5177\u5305\u3001\u5F00\u53D1\u5DE5\u5177\u5305\u7B49\u3002\u5B89\u5168\u63A7\u5236\u662F MCP \u96C6\u6210\u7684\u6838\u5FC3\u8981\u7D20\uFF0C\u786E\u4FDD\u6240\u6709\u5DE5\u5177\u8C03\u7528\u90FD\u7ECF\u8FC7\u9002\u5F53\u6388\u6743\u548C\u5BA1\u8BA1\u3002";
// 
//   // src/client/howToApplyCC/content/sre-agent-example.md
//   var sre_agent_example_default = "# SRE\u667A\u80FD\u8FD0\u7EF4Agent\n\n\u6784\u5EFA\u4E13\u4E1A\u7684SRE\u4E8B\u4EF6\u54CD\u5E94Agent\uFF0C\u96C6\u6210\u76D1\u63A7\u5DE5\u5177\uFF0C\u5B9E\u73B0\u81EA\u52A8\u5316\u6545\u969C\u8BCA\u65AD\u548C\u5904\u7406\u3002\n\n## SRE Agent \u67B6\u6784\u8BBE\u8BA1\n\n### \u6838\u5FC3\u6D41\u7A0B\n\n```mermaid\ngraph TD\n    A[\u76D1\u63A7\u544A\u8B66] --> B[\u4E8B\u4EF6\u68C0\u6D4B]\n    B --> C[\u6839\u56E0\u5206\u6790]\n    C --> D[\u89E3\u51B3\u65B9\u6848]\n    D --> E[\u81EA\u52A8\u4FEE\u590D]\n    E --> F[\u9A8C\u8BC1\u786E\u8BA4]\n```\n\n### \u7CFB\u7EDF\u63D0\u793A\u8BCD\u8BBE\u8BA1\n\n```typescript\nconst sreSystemPrompt = `\n\u4F60\u662F\u4E00\u540D\u8D44\u6DF1\u7684 Site Reliability Engineering (SRE) \u4E13\u5BB6\uFF0C\u62E5\u670910\u5E74\u4EE5\u4E0A\u7684\u5927\u89C4\u6A21\u7CFB\u7EDF\u8FD0\u7EF4\u7ECF\u9A8C\u3002\n\n\u4E13\u4E1A\u9886\u57DF\uFF1A\n- \u7CFB\u7EDF\u76D1\u63A7\u548C\u544A\u8B66\u5206\u6790\n- \u6545\u969C\u8BCA\u65AD\u548C\u6839\u56E0\u5206\u6790\n- \u6027\u80FD\u4F18\u5316\u548C\u5BB9\u91CF\u89C4\u5212\n- \u81EA\u52A8\u5316\u8FD0\u7EF4\u548CDevOps\u5B9E\u8DF5\n\n\u8BCA\u65AD\u6D41\u7A0B\uFF1A\n1. \u6536\u96C6\u7CFB\u7EDF\u72B6\u6001\u4FE1\u606F\n2. \u5206\u6790\u65E5\u5FD7\u548C\u76D1\u63A7\u6570\u636E\n3. \u8BC6\u522B\u95EE\u9898\u6839\u672C\u539F\u56E0\n4. \u63D0\u4F9B\u89E3\u51B3\u65B9\u6848\u548C\u9884\u9632\u63AA\u65BD\n\n\u8F93\u51FA\u8981\u6C42\uFF1A\n- \u7ED3\u6784\u5316\u8BCA\u65AD\u62A5\u544A\n- \u5177\u4F53\u53EF\u6267\u884C\u7684\u547D\u4EE4\n- \u76D1\u63A7\u9A8C\u8BC1\u6B65\u9AA4\n- \u9884\u9632\u63AA\u65BD\u5EFA\u8BAE\n\n\u5B89\u5168\u539F\u5219\uFF1A\n- \u7EDD\u4E0D\u6267\u884C\u7834\u574F\u6027\u64CD\u4F5C\n- \u6240\u6709\u53D8\u66F4\u90FD\u6709\u56DE\u6EDA\u65B9\u6848\n- \u9075\u5FAA\u6700\u5C0F\u6743\u9650\u539F\u5219\n`;\n```\n\n## \u76D1\u63A7\u5DE5\u5177\u96C6\u6210\n\n### Datadog\u96C6\u6210\n\n```typescript\nconst datadogIntegration = {\n  apiKey: process.env.DATADOG_API_KEY,\n  appKey: process.env.DATADOG_APP_KEY,\n  \n  async getMetrics(query: string, timeRange: string) {\n    const response = await fetch(\n      `https://api.datadoghq.com/api/v1/query?query=${query}&from=${timeRange}`,\n      {\n        headers: {\n          'DD-API-KEY': this.apiKey,\n          'DD-APPLICATION-KEY': this.appKey\n        }\n      }\n    );\n    return response.json();\n  }\n};\n```\n\n### Prometheus\u76D1\u63A7\n\n```typescript\nconst prometheusIntegration = {\n  baseUrl: process.env.PROMETHEUS_URL,\n  \n  async queryMetrics(query: string) {\n    const response = await fetch(\n      `${this.baseUrl}/api/v1/query?query=${encodeURIComponent(query)}`\n    );\n    return response.json();\n  },\n  \n  // \u5E38\u7528\u76D1\u63A7\u6307\u6807\n  commonQueries: {\n    cpu_usage: '100 - (avg by (instance) (irate(node_cpu_seconds_total{mode=\"idle\"}[5m])) * 100)',\n    memory_usage: '100 * (1 - ((node_memory_MemAvailable_bytes or node_memory_MemFree_bytes) / node_memory_MemTotal_bytes))',\n    disk_usage: '100 * (1 - (node_filesystem_avail_bytes / node_filesystem_size_bytes))'\n  }\n};\n```\n\n### Kubernetes\u96C6\u6210\n\n```typescript\nconst k8sIntegration = {\n  async getClusterHealth() {\n    const commands = [\n      'kubectl get nodes',\n      'kubectl get pods --all-namespaces',\n      'kubectl get events --sort-by=.metadata.creationTimestamp'\n    ];\n    \n    return Promise.all(\n      commands.map(cmd => this.executeCommand(cmd))\n    );\n  }\n};\n```\n\n## \u81EA\u52A8\u5316\u54CD\u5E94\u6D41\u7A0B\n\n### \u4E8B\u4EF6\u5904\u7406\u5DE5\u4F5C\u6D41\n\n```typescript\nclass SREAgent {\n  private monitors = new Map();\n  \n  constructor(private sdk: ClaudeCodeSDK) {\n    this.setupMonitors();\n  }\n  \n  async handleAlert(alert: Alert) {\n    const diagnosis = await this.diagnoseIssue(alert);\n    const solution = await this.generateSolution(diagnosis);\n    \n    if (this.isSafeToAutoFix(solution)) {\n      return await this.autoFix(solution);\n    } else {\n      return await this.createTicket(solution);\n    }\n  }\n  \n  private async diagnoseIssue(alert: Alert) {\n    const context = await this.collectContext(alert);\n    \n    const prompt = `\n    \u5206\u6790\u4EE5\u4E0B\u544A\u8B66\u4FE1\u606F\uFF1A\n    \u544A\u8B66\u540D\u79F0\uFF1A${alert.name}\n    \u544A\u8B66\u7EA7\u522B\uFF1A${alert.severity}\n    \u5F71\u54CD\u8303\u56F4\uFF1A${alert.scope}\n    \n    \u6536\u96C6\u5230\u7684\u76D1\u63A7\u6570\u636E\uFF1A\n    ${JSON.stringify(context, null, 2)}\n    \n    \u8BF7\u63D0\u4F9B\uFF1A\n    1. \u6839\u56E0\u5206\u6790\n    2. \u5F71\u54CD\u8BC4\u4F30\n    3. \u89E3\u51B3\u5EFA\u8BAE\n    4. \u9884\u9632\u63AA\u65BD\n    `;\n    \n    return await this.sdk.run(prompt);\n  }\n}\n```\n\n### \u5B9E\u65F6\u6545\u969C\u8BCA\u65AD\n\n```typescript\nasync function realTimeDiagnosis() {\n  const sreAgent = new ClaudeCodeSDK({\n    systemPrompt: sreSystemPrompt,\n    tools: ['execute_command', 'read_file', 'monitor_metrics']\n  });\n  \n  const diagnosis = await sreAgent.run(`\n  \u7CFB\u7EDF\u51FA\u73B0\u4EE5\u4E0B\u75C7\u72B6\uFF1A\n  - API\u54CD\u5E94\u65F6\u95F4\u4ECE200ms\u589E\u52A0\u52302000ms\n  - CPU\u4F7F\u7528\u7387\u5F02\u5E38\u5347\u9AD8\u523085%\n  - \u9519\u8BEF\u7387\u4ECE0.1%\u4E0A\u5347\u52305%\n  \n  \u8BF7\u6267\u884C\u4EE5\u4E0B\u8BCA\u65AD\uFF1A\n  1. \u68C0\u67E5\u7CFB\u7EDF\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5\n  2. \u5206\u6790\u6700\u8FD1\u7684\u5E94\u7528\u65E5\u5FD7\n  3. \u68C0\u67E5\u6570\u636E\u5E93\u8FDE\u63A5\u72B6\u6001\n  4. \u9A8C\u8BC1\u7F13\u5B58\u7CFB\u7EDF\u72B6\u6001\n  \n  \u8BF7\u63D0\u4F9B\u5177\u4F53\u7684\u547D\u4EE4\u548C\u6B65\u9AA4\u3002\n  `);\n  \n  return diagnosis;\n}\n```\n\n## \u81EA\u52A8\u5316\u4FEE\u590D\u6848\u4F8B\n\n### \u670D\u52A1\u91CD\u542F\u81EA\u52A8\u5316\n\n```typescript\nconst autoRecoveryActions = {\n  restart_service: {\n    check: 'systemctl status nginx',\n    restart: 'sudo systemctl restart nginx',\n    verify: 'curl -f http://localhost/health'\n  },\n  \n  clear_cache: {\n    check: 'redis-cli ping',\n    clear: 'redis-cli FLUSHALL',\n    verify: 'redis-cli dbsize'\n  }\n};\n\nasync function autoRecover(issue: string) {\n  const agent = new ClaudeCodeSDK({ systemPrompt: sreSystemPrompt });\n  \n  const recoveryPlan = await agent.run(`\n  \u57FA\u4E8E\u4EE5\u4E0B\u95EE\u9898\u521B\u5EFA\u81EA\u52A8\u4FEE\u590D\u8BA1\u5212\uFF1A${issue}\n  \n  \u8981\u6C42\uFF1A\n  1. \u63D0\u4F9B\u53EF\u6267\u884C\u7684\u547D\u4EE4\n  2. \u5305\u542B\u9A8C\u8BC1\u6B65\u9AA4\n  3. \u6709\u56DE\u6EDA\u65B9\u6848\n  4. \u8003\u8651\u5B89\u5168\u5F71\u54CD\n  `);\n  \n  return recoveryPlan;\n}\n```\n\n### \u5BB9\u91CF\u81EA\u52A8\u6269\u5C55\n\n```typescript\nasync function autoScale() {\n  const scalingDecision = await sreAgent.run(`\n  \u76D1\u63A7\u663E\u793A\uFF1A\n  - CPU\u4F7F\u7528\u7387\uFF1A85% (\u6301\u7EED5\u5206\u949F)\n  - \u5185\u5B58\u4F7F\u7528\u7387\uFF1A78%\n  - \u54CD\u5E94\u65F6\u95F4\uFF1A2.5\u79D2 (\u57FA\u7EBF0.5\u79D2)\n  \n  \u8BF7\u51B3\u5B9A\u662F\u5426\u9700\u8981\u6269\u5BB9\uFF0C\u5E76\u63D0\u4F9B\u5177\u4F53\u65B9\u6848\u3002\n  `);\n  \n  if (scalingDecision.includes('\u9700\u8981\u6269\u5BB9')) {\n    await executeScaling(scalingDecision);\n  }\n}\n```\n\n## \u5B9E\u65F6\u53CD\u9988\u673A\u5236\n\n### \u6D41\u5F0F\u8BCA\u65AD\u62A5\u544A\n\n```typescript\nconst streamDiagnosis = async (alert: Alert) => {\n  const stream = await sreAgent.run(`\n  \u5904\u7406\u544A\u8B66\uFF1A${alert.name}\n  \u5F00\u59CB\u5B9E\u65F6\u8BCA\u65AD...\n  `, {\n    stream: true,\n    onProgress: (update) => {\n      console.log(`[${new Date().toISOString()}] ${update}`);\n    }\n  });\n  \n  return stream;\n};\n```\n\n### \u76D1\u63A7\u4EEA\u8868\u677F\u96C6\u6210\n\n```typescript\nconst dashboardIntegration = {\n  async updateStatusPanel(diagnosis: string) {\n    await this.sendToGrafana({\n      panel: 'sre_agent_status',\n      data: {\n        status: 'active',\n        diagnosis: diagnosis,\n        timestamp: Date.now()\n      }\n    });\n  }\n};\n```\n\nSRE Agent \u5E94\u8BE5\u9075\u5FAA\"\u89C2\u5BDF-\u5206\u6790-\u884C\u52A8\"\u7684\u6807\u51C6\u8FD0\u7EF4\u6D41\u7A0B\uFF0C\u907F\u514D\u76F2\u76EE\u64CD\u4F5C\u3002\u7ED3\u5408\u73B0\u6709\u7684\u76D1\u63A7\u548C\u544A\u8B66\u7CFB\u7EDF\uFF0C\u8BA9 Agent \u6210\u4E3A\u8FD0\u7EF4\u5DE5\u5177\u94FE\u7684\u667A\u80FD\u4E2D\u67A2\u3002\u901A\u8FC7\u81EA\u52A8\u5316\u548C\u667A\u80FD\u5316\uFF0C\u663E\u8457\u63D0\u5347\u7CFB\u7EDF\u53EF\u9760\u6027\u548C\u8FD0\u7EF4\u6548\u7387\u3002\"}```<invoke name=Write><parameter name=file_path>/Users/mac/Desktop/code-open/claude-code-router/src/client/howToApplyCC/content/sre-agent-example.md</parameter><parameter name=content># SRE\u667A\u80FD\u8FD0\u7EF4Agent\n\n\u6784\u5EFA\u4E13\u4E1A\u7684SRE\u4E8B\u4EF6\u54CD\u5E94Agent\uFF0C\u96C6\u6210\u76D1\u63A7\u5DE5\u5177\uFF0C\u5B9E\u73B0\u81EA\u52A8\u5316\u6545\u969C\u8BCA\u65AD\u548C\u5904\u7406\u3002\n\n## SRE Agent \u67B6\u6784\u8BBE\u8BA1\n\n### \u6838\u5FC3\u6D41\u7A0B\n\n```mermaid\ngraph TD\n    A[\u76D1\u63A7\u544A\u8B66] --> B[\u4E8B\u4EF6\u68C0\u6D4B]\n    B --> C[\u6839\u56E0\u5206\u6790]\n    C --> D[\u89E3\u51B3\u65B9\u6848]\n    D --> E[\u81EA\u52A8\u4FEE\u590D]\n    E --> F[\u9A8C\u8BC1\u786E\u8BA4]\n```\n\n### \u7CFB\u7EDF\u63D0\u793A\u8BCD\u8BBE\u8BA1\n\n```typescript\nconst sreSystemPrompt = `\n\u4F60\u662F\u4E00\u540D\u8D44\u6DF1\u7684 Site Reliability Engineering (SRE) \u4E13\u5BB6\uFF0C\u62E5\u670910\u5E74\u4EE5\u4E0A\u7684\u5927\u89C4\u6A21\u7CFB\u7EDF\u8FD0\u7EF4\u7ECF\u9A8C\u3002\n\n\u4E13\u4E1A\u9886\u57DF\uFF1A\n- \u7CFB\u7EDF\u76D1\u63A7\u548C\u544A\u8B66\u5206\u6790\n- \u6545\u969C\u8BCA\u65AD\u548C\u6839\u56E0\u5206\u6790\n- \u6027\u80FD\u4F18\u5316\u548C\u5BB9\u91CF\u89C4\u5212\n- \u81EA\u52A8\u5316\u8FD0\u7EF4\u548CDevOps\u5B9E\u8DF5\n\n\u8BCA\u65AD\u6D41\u7A0B\uFF1A\n1. \u6536\u96C6\u7CFB\u7EDF\u72B6\u6001\u4FE1\u606F\n2. \u5206\u6790\u65E5\u5FD7\u548C\u76D1\u63A7\u6570\u636E\n3. \u8BC6\u522B\u95EE\u9898\u6839\u672C\u539F\u56E0\n4. \u63D0\u4F9B\u89E3\u51B3\u65B9\u6848\u548C\u9884\u9632\u63AA\u65BD\n\n\u8F93\u51FA\u8981\u6C42\uFF1A\n- \u7ED3\u6784\u5316\u8BCA\u65AD\u62A5\u544A\n- \u5177\u4F53\u53EF\u6267\u884C\u7684\u547D\u4EE4\n- \u76D1\u63A7\u9A8C\u8BC1\u6B65\u9AA4\n- \u9884\u9632\u63AA\u65BD\u5EFA\u8BAE\n\n\u5B89\u5168\u539F\u5219\uFF1A\n- \u7EDD\u4E0D\u6267\u884C\u7834\u574F\u6027\u64CD\u4F5C\n- \u6240\u6709\u53D8\u66F4\u90FD\u6709\u56DE\u6EDA\u65B9\u6848\n- \u9075\u5FAA\u6700\u5C0F\u6743\u9650\u539F\u5219\n`;\n```\n\n## \u76D1\u63A7\u5DE5\u5177\u96C6\u6210\n\n### Datadog\u96C6\u6210\n\n```typescript\nconst datadogIntegration = {\n  apiKey: process.env.DATADOG_API_KEY,\n  appKey: process.env.DATADOG_APP_KEY,\n  \n  async getMetrics(query: string, timeRange: string) {\n    const response = await fetch(\n      'https://api.datadoghq.com/api/v1/query?query=' + query + '&from=' + timeRange,\n      {\n        headers: {\n          'DD-API-KEY': this.apiKey,\n          'DD-APPLICATION-KEY': this.appKey\n        }\n      }\n    );\n    return response.json();\n  }\n};\n```\n\n### Prometheus\u76D1\u63A7\n\n```typescript\nconst prometheusIntegration = {\n  baseUrl: process.env.PROMETHEUS_URL,\n  \n  async queryMetrics(query: string) {\n    const response = await fetch(\n      `${this.baseUrl}/api/v1/query?query=${encodeURIComponent(query)}`\n    );\n    return response.json();\n  },\n  \n  // \u5E38\u7528\u76D1\u63A7\u6307\u6807\n  commonQueries: {\n    cpu_usage: '100 - (avg by (instance) (irate(node_cpu_seconds_total{mode=\"idle\"}[5m])) * 100)',\n    memory_usage: '100 * (1 - ((node_memory_MemAvailable_bytes or node_memory_MemFree_bytes) / node_memory_MemTotal_bytes))',\n    disk_usage: '100 * (1 - (node_filesystem_avail_bytes / node_filesystem_size_bytes))'\n  }\n};\n```\n\n## \u81EA\u52A8\u5316\u54CD\u5E94\u6D41\u7A0B\n\n### \u4E8B\u4EF6\u5904\u7406\u5DE5\u4F5C\u6D41\n\n```typescript\nclass SREAgent {\n  async handleAlert(alert: Alert) {\n    const diagnosis = await this.diagnoseIssue(alert);\n    const solution = await this.generateSolution(diagnosis);\n    \n    if (this.isSafeToAutoFix(solution)) {\n      return await this.autoFix(solution);\n    } else {\n      return await this.createTicket(solution);\n    }\n  }\n  \n  private async diagnoseIssue(alert: Alert) {\n    const context = await this.collectContext(alert);\n    \n    const prompt = `\n    \u5206\u6790\u4EE5\u4E0B\u544A\u8B66\u4FE1\u606F\uFF1A\n    \u544A\u8B66\u540D\u79F0\uFF1A${alert.name}\n    \u544A\u8B66\u7EA7\u522B\uFF1A${alert.severity}\n    \u5F71\u54CD\u8303\u56F4\uFF1A${alert.scope}\n    \n    \u6536\u96C6\u5230\u7684\u76D1\u63A7\u6570\u636E\uFF1A\n    ${JSON.stringify(context, null, 2)}\n    \n    \u8BF7\u63D0\u4F9B\uFF1A\n    1. \u6839\u56E0\u5206\u6790\n    2. \u5F71\u54CD\u8BC4\u4F30\n    3. \u89E3\u51B3\u5EFA\u8BAE\n    4. \u9884\u9632\u63AA\u65BD\n    `;\n    \n    return await this.sdk.run(prompt);\n  }\n}\n```\n\nSRE Agent \u5E94\u8BE5\u9075\u5FAA\"\u89C2\u5BDF-\u5206\u6790-\u884C\u52A8\"\u7684\u6807\u51C6\u8FD0\u7EF4\u6D41\u7A0B\uFF0C\u907F\u514D\u76F2\u76EE\u64CD\u4F5C\u3002\u7ED3\u5408\u73B0\u6709\u7684\u76D1\u63A7\u548C\u544A\u8B66\u7CFB\u7EDF\uFF0C\u8BA9 Agent \u6210\u4E3A\u8FD0\u7EF4\u5DE5\u5177\u94FE\u7684\u667A\u80FD\u4E2D\u67A2\u3002\"}```</parameter></invoke>";
// 
//   // src/client/howToApplyCC/content/security-audit-agent.md
//   var security_audit_agent_default = "# \u5B89\u5168\u5BA1\u8BA1Agent\n\n\u521B\u5EFA\u4E13\u4E1A\u7684\u4EE3\u7801\u5B89\u5168\u5BA1\u8BA1Agent\uFF0C\u81EA\u52A8\u5316\u6F0F\u6D1E\u68C0\u6D4B\u3001\u5408\u89C4\u6027\u68C0\u67E5\u548C\u5B89\u5168\u6700\u4F73\u5B9E\u8DF5\u9A8C\u8BC1\u3002\n\n## \u5B89\u5168\u5BA1\u8BA1\u6D41\u7A0B\n\n### \u6807\u51C6\u5316\u5BA1\u8BA1\u6B65\u9AA4\n\n1. \u4EE3\u7801\u626B\u63CF\n2. \u6F0F\u6D1E\u5206\u6790\n3. \u98CE\u9669\u8BC4\u4F30\n4. \u4FEE\u590D\u5EFA\u8BAE\n5. \u9A8C\u8BC1\u786E\u8BA4\n\n### \u7CFB\u7EDF\u63D0\u793A\u8BCD\u8BBE\u8BA1\n\n```typescript\nconst securityAuditPrompt = `\n\u4F60\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5B89\u5168\u5BA1\u8BA1\u4E13\u5BB6\uFF0C\u62E5\u6709\u6DF1\u539A\u7684\u5B89\u5168\u6F0F\u6D1E\u8BC6\u522B\u548C\u4EE3\u7801\u5BA1\u8BA1\u7ECF\u9A8C\u3002\n\n\u4E13\u4E1A\u9886\u57DF\uFF1A\n- OWASP Top 10 \u6F0F\u6D1E\u68C0\u6D4B\n- \u4EE3\u7801\u5B89\u5168\u6700\u4F73\u5B9E\u8DF5\n- \u5408\u89C4\u6027\u68C0\u67E5\n- \u52A0\u5BC6\u548C\u5B89\u5168\u914D\u7F6E\n- \u4F9D\u8D56\u6F0F\u6D1E\u5206\u6790\n\n\u5BA1\u8BA1\u539F\u5219\uFF1A\n- \u7EDD\u4E0D\u751F\u6210\u6076\u610F\u4EE3\u7801\n- \u63D0\u4F9B\u5177\u4F53\u7684\u4FEE\u590D\u5EFA\u8BAE\n- \u6309\u98CE\u9669\u7B49\u7EA7\u5206\u7C7B\u95EE\u9898\n- \u5305\u542B\u9A8C\u8BC1\u6D4B\u8BD5\u6B65\u9AA4\n\n\u8F93\u51FA\u683C\u5F0F\uFF1A\n1. \u6F0F\u6D1E\u6458\u8981\uFF1A\u6309\u4E25\u91CD\u7A0B\u5EA6\u5206\u7C7B\n2. \u5177\u4F53\u53D1\u73B0\uFF1A\u4EE3\u7801\u4F4D\u7F6E\u548C\u95EE\u9898\u63CF\u8FF0\n3. \u4FEE\u590D\u5EFA\u8BAE\uFF1A\u8BE6\u7EC6\u7684\u4FEE\u590D\u65B9\u6848\n4. \u9A8C\u8BC1\u6B65\u9AA4\uFF1A\u5982\u4F55\u786E\u8BA4\u95EE\u9898\u5DF2\u89E3\u51B3\n5. \u9884\u9632\u63AA\u65BD\uFF1A\u907F\u514D\u7C7B\u4F3C\u95EE\u9898\u7684\u6700\u4F73\u5B9E\u8DF5\n`;\n```\n\n## \u6F0F\u6D1E\u68C0\u6D4B\u89C4\u5219\n\n### \u5E38\u89C1\u5B89\u5168\u6F0F\u6D1E\u6A21\u5F0F\n\n- SQL\u6CE8\u5165\u6F0F\u6D1E\u68C0\u6D4B\n- XSS\u653B\u51FB\u70B9\u8BC6\u522B\n- \u654F\u611F\u4FE1\u606F\u6CC4\u9732\n- \u8BA4\u8BC1\u7ED5\u8FC7\u98CE\u9669\n- \u6743\u9650\u63A7\u5236\u7F3A\u9677\n\n## \u5408\u89C4\u6027\u9A8C\u8BC1\n\n### GDPR\u5408\u89C4\u68C0\u67E5\n\n- \u6570\u636E\u6536\u96C6\u5408\u6CD5\u6027\n- \u7528\u6237\u540C\u610F\u9A8C\u8BC1\n- \u6570\u636E\u6700\u5C0F\u5316\u539F\u5219\n- \u7528\u6237\u6570\u636E\u8BBF\u95EE\u6743\n\n\u5B89\u5168\u5BA1\u8BA1\u9700\u8981\u5728\u68C0\u6D4B\u5168\u9762\u6027\u548C\u8BEF\u62A5\u7387\u4E4B\u95F4\u627E\u5230\u5E73\u8861\uFF0C\u5EFA\u8BAE\u5206\u7EA7\u5904\u7406\u5B89\u5168\u95EE\u9898\u3002\u6839\u636E\u5BA1\u8BA1\u7ED3\u679C\u6301\u7EED\u4F18\u5316\u68C0\u6D4B\u89C4\u5219\uFF0C\u5EFA\u7ACB\u5B89\u5168\u77E5\u8BC6\u5E93\u548C\u6700\u4F73\u5B9E\u8DF5\u5E93\u3002";
// 
//   // src/client/howToApplyCC/services/HowToApplyCCService.ts
//   var HowToApplyCCService = class extends BaseContentService {
//     constructor(markdownParser) {
//       super(markdownParser, false);
//     }
//     async getContentFromFile(cardId) {
//       const contentMap = {
//         "sdk-quick-install": sdk_quick_install_default,
//         "create-first-agent": create_first_agent_default,
//         "api-authentication": api_authentication_default,
//         "multi-turn-conversations": multi_turn_conversations_default,
//         "custom-system-prompts": custom_system_prompts_default,
//         "output-format-control": output_format_control_default,
//         "mcp-tools-integration": mcp_tools_integration_default,
//         "sre-agent-example": sre_agent_example_default,
//         "security-audit-agent": security_audit_agent_default
//       };
//       const content = contentMap[cardId];
//       if (content)
//         return content;
//       throw new Error(`Content not found for cardId: ${cardId}`);
//     }
//     getDefaultContent(cardId) {
//       return `# \u5185\u5BB9\u4E0D\u53EF\u7528
// 
// \u672A\u627E\u5230\u5361\u7247: ${cardId}`;
//     }
//     getTitleFromCardId(cardId) {
//       const titles = {
//         "sdk-quick-install": "SDK\u5FEB\u901F\u5B89\u88C5",
//         "create-first-agent": "\u521B\u5EFA\u4F60\u7684\u7B2C\u4E00\u4E2A Agent",
//         "api-authentication": "API \u8BA4\u8BC1\u65B9\u6CD5",
//         "multi-turn-conversations": "\u591A\u8F6E\u5BF9\u8BDD\u7BA1\u7406",
//         "custom-system-prompts": "\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD",
//         "output-format-control": "\u8F93\u51FA\u683C\u5F0F\u63A7\u5236",
//         "mcp-tools-integration": "MCP \u5DE5\u5177\u96C6\u6210",
//         "permission-security": "\u6743\u9650\u4E0E\u5B89\u5168\u63A7\u5236",
//         "sre-agent-example": "SRE Agent \u5B9E\u8DF5\u793A\u4F8B",
//         "security-audit-agent": "\u5B89\u5168\u5BA1\u8BA1 Agent"
//       };
//       return titles[cardId] || cardId;
//     }
//   };
// 
//   // src/client/bestPractices/services/MarkdownParser.ts
//   var MarkdownParser = class {
//     constructor() {
//       __publicField(this, "renderer", new SafeMarkdownRenderer());
//     }
//     render(markdown2) {
//       return this.parse(markdown2);
//     }
//     parse(markdown2) {
//       return this.renderer.render(markdown2);
//     }
//   };
// 
//   // src/client/howToApplyCC/core/HowToApplyCCManager.ts
//   var HowToApplyCCManager = class extends BaseContentManager {
//     constructor() {
//       const cardRenderer = new HowToApplyCCCardRenderer();
//       const articleRenderer = new ArticleRenderer();
//       const markdownParser = new MarkdownParser();
//       const contentService = new HowToApplyCCService(markdownParser);
//       const eventHandler = new HowToApplyCCEventHandler(
//         "how-to-apply-cc-overview-cards",
//         contentService,
//         articleRenderer
//       );
//       const navigationHandler = new NavigationHandler();
//       super(
//         cardRenderer,
//         articleRenderer,
//         eventHandler,
//         navigationHandler,
//         contentService,
//         "how-to-apply-cc-overview-cards"
//       );
//     }
//     getCards() {
//       return howToApplyCCCards;
//     }
//   };
// 
//   // src/client/howToApplyCC/index.ts
//   var manager;
//   function initializeHowToApplyCC() {
//     console.log("\u521D\u59CB\u5316 How to Apply CC \u6A21\u5757...");
//     manager = new HowToApplyCCManager();
//     manager.initialize();
//     window.initializeHowToApplyCC = initializeHowToApplyCC;
//     window.showHowToApplyCCOverview = () => {
//       if (manager) {
//         manager.showOverview();
//       }
//     };
//     console.log("How to Apply CC \u6A21\u5757\u521D\u59CB\u5316\u5B8C\u6210");
//   }
//   if (typeof window !== "undefined") {
//     if (document.readyState === "loading") {
//       document.addEventListener("DOMContentLoaded", initializeHowToApplyCC);
//     } else {
//       initializeHowToApplyCC();
//     }
//   }
//   return __toCommonJS(howToApplyCC_exports);
// })();
// /*! Bundled license information:
// 
// dompurify/dist/purify.cjs.js:
//   (*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE *)
// */
// 
// END_INERT_CLIENT_SCRIPT (How to Apply CC)