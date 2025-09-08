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
// var HowToApplyCCApp=(()=>{var cc=Object.create;var dt=Object.defineProperty;var lc=Object.getOwnPropertyDescriptor;var uc=Object.getOwnPropertyNames;var dc=Object.getPrototypeOf,pc=Object.prototype.hasOwnProperty;var fc=(t,e,r)=>e in t?dt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var A=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),gc=(t,e)=>{for(var r in e)dt(t,r,{get:e[r],enumerable:!0})},xn=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of uc(e))!pc.call(t,i)&&i!==r&&dt(t,i,{get:()=>e[i],enumerable:!(n=lc(e,i))||n.enumerable});return t};var yr=(t,e,r)=>(r=t!=null?cc(dc(t)):{},xn(e||!t||!t.__esModule?dt(r,"default",{value:t,enumerable:!0}):r,t)),hc=t=>xn(dt({},"__esModule",{value:!0}),t);var H=(t,e,r)=>(fc(t,typeof e!="symbol"?e+"":e,r),r);var An=A((Op,bc)=>{bc.exports={Aacute:"\xC1",aacute:"\xE1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223E",acd:"\u223F",acE:"\u223E\u0333",Acirc:"\xC2",acirc:"\xE2",acute:"\xB4",Acy:"\u0410",acy:"\u0430",AElig:"\xC6",aelig:"\xE6",af:"\u2061",Afr:"\u{1D504}",afr:"\u{1D51E}",Agrave:"\xC0",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03B1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2A3F",amp:"&",AMP:"&",andand:"\u2A55",And:"\u2A53",and:"\u2227",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",ange:"\u29A4",angle:"\u2220",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angmsd:"\u2221",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angst:"\xC5",angzarr:"\u237C",Aogon:"\u0104",aogon:"\u0105",Aopf:"\u{1D538}",aopf:"\u{1D552}",apacir:"\u2A6F",ap:"\u2248",apE:"\u2A70",ape:"\u224A",apid:"\u224B",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224A",Aring:"\xC5",aring:"\xE5",Ascr:"\u{1D49C}",ascr:"\u{1D4B6}",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224D",Atilde:"\xC3",atilde:"\xE3",Auml:"\xC4",auml:"\xE4",awconint:"\u2233",awint:"\u2A11",backcong:"\u224C",backepsilon:"\u03F6",backprime:"\u2035",backsim:"\u223D",backsimeq:"\u22CD",Backslash:"\u2216",Barv:"\u2AE7",barvee:"\u22BD",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23B5",bbrktbrk:"\u23B6",bcong:"\u224C",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201E",becaus:"\u2235",because:"\u2235",Because:"\u2235",bemptyv:"\u29B0",bepsi:"\u03F6",bernou:"\u212C",Bernoullis:"\u212C",Beta:"\u0392",beta:"\u03B2",beth:"\u2136",between:"\u226C",Bfr:"\u{1D505}",bfr:"\u{1D51F}",bigcap:"\u22C2",bigcirc:"\u25EF",bigcup:"\u22C3",bigodot:"\u2A00",bigoplus:"\u2A01",bigotimes:"\u2A02",bigsqcup:"\u2A06",bigstar:"\u2605",bigtriangledown:"\u25BD",bigtriangleup:"\u25B3",biguplus:"\u2A04",bigvee:"\u22C1",bigwedge:"\u22C0",bkarow:"\u290D",blacklozenge:"\u29EB",blacksquare:"\u25AA",blacktriangle:"\u25B4",blacktriangledown:"\u25BE",blacktriangleleft:"\u25C2",blacktriangleright:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bNot:"\u2AED",bnot:"\u2310",Bopf:"\u{1D539}",bopf:"\u{1D553}",bot:"\u22A5",bottom:"\u22A5",bowtie:"\u22C8",boxbox:"\u29C9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250C",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252C",boxHd:"\u2564",boxhD:"\u2565",boxHD:"\u2566",boxhu:"\u2534",boxHu:"\u2567",boxhU:"\u2568",boxHU:"\u2569",boxminus:"\u229F",boxplus:"\u229E",boxtimes:"\u22A0",boxul:"\u2518",boxuL:"\u255B",boxUl:"\u255C",boxUL:"\u255D",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255A",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253C",boxvH:"\u256A",boxVh:"\u256B",boxVH:"\u256C",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251C",boxvR:"\u255E",boxVr:"\u255F",boxVR:"\u2560",bprime:"\u2035",breve:"\u02D8",Breve:"\u02D8",brvbar:"\xA6",bscr:"\u{1D4B7}",Bscr:"\u212C",bsemi:"\u204F",bsim:"\u223D",bsime:"\u22CD",bsolb:"\u29C5",bsol:"\\",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bump:"\u224E",bumpE:"\u2AAE",bumpe:"\u224F",Bumpeq:"\u224E",bumpeq:"\u224F",Cacute:"\u0106",cacute:"\u0107",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",cap:"\u2229",Cap:"\u22D2",capcup:"\u2A47",capdot:"\u2A40",CapitalDifferentialD:"\u2145",caps:"\u2229\uFE00",caret:"\u2041",caron:"\u02C7",Cayleys:"\u212D",ccaps:"\u2A4D",Ccaron:"\u010C",ccaron:"\u010D",Ccedil:"\xC7",ccedil:"\xE7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2A4C",ccupssm:"\u2A50",Cdot:"\u010A",cdot:"\u010B",cedil:"\xB8",Cedilla:"\xB8",cemptyv:"\u29B2",cent:"\xA2",centerdot:"\xB7",CenterDot:"\xB7",cfr:"\u{1D520}",Cfr:"\u212D",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03A7",chi:"\u03C7",circ:"\u02C6",circeq:"\u2257",circlearrowleft:"\u21BA",circlearrowright:"\u21BB",circledast:"\u229B",circledcirc:"\u229A",circleddash:"\u229D",CircleDot:"\u2299",circledR:"\xAE",circledS:"\u24C8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cir:"\u25CB",cirE:"\u29C3",cire:"\u2257",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201D",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",Colone:"\u2A74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2A6D",Congruent:"\u2261",conint:"\u222E",Conint:"\u222F",ContourIntegral:"\u222E",copf:"\u{1D554}",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\xA9",COPY:"\xA9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21B5",cross:"\u2717",Cross:"\u2A2F",Cscr:"\u{1D49E}",cscr:"\u{1D4B8}",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",cuesc:"\u22DF",cularr:"\u21B6",cularrp:"\u293D",cupbrcap:"\u2A48",cupcap:"\u2A46",CupCap:"\u224D",cup:"\u222A",Cup:"\u22D3",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curarrm:"\u293C",curlyeqprec:"\u22DE",curlyeqsucc:"\u22DF",curlyvee:"\u22CE",curlywedge:"\u22CF",curren:"\xA4",curvearrowleft:"\u21B6",curvearrowright:"\u21B7",cuvee:"\u22CE",cuwed:"\u22CF",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232D",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",Darr:"\u21A1",dArr:"\u21D3",dash:"\u2010",Dashv:"\u2AE4",dashv:"\u22A3",dbkarow:"\u290F",dblac:"\u02DD",Dcaron:"\u010E",dcaron:"\u010F",Dcy:"\u0414",dcy:"\u0434",ddagger:"\u2021",ddarr:"\u21CA",DD:"\u2145",dd:"\u2146",DDotrahd:"\u2911",ddotseq:"\u2A77",deg:"\xB0",Del:"\u2207",Delta:"\u0394",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",Dfr:"\u{1D507}",dfr:"\u{1D521}",dHar:"\u2965",dharl:"\u21C3",dharr:"\u21C2",DiacriticalAcute:"\xB4",DiacriticalDot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",DiacriticalGrave:"`",DiacriticalTilde:"\u02DC",diam:"\u22C4",diamond:"\u22C4",Diamond:"\u22C4",diamondsuit:"\u2666",diams:"\u2666",die:"\xA8",DifferentialD:"\u2146",digamma:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231E",dlcrop:"\u230D",dollar:"$",Dopf:"\u{1D53B}",dopf:"\u{1D555}",Dot:"\xA8",dot:"\u02D9",DotDot:"\u20DC",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22A1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222F",DoubleDot:"\xA8",DoubleDownArrow:"\u21D3",DoubleLeftArrow:"\u21D0",DoubleLeftRightArrow:"\u21D4",DoubleLeftTee:"\u2AE4",DoubleLongLeftArrow:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",DoubleLongRightArrow:"\u27F9",DoubleRightArrow:"\u21D2",DoubleRightTee:"\u22A8",DoubleUpArrow:"\u21D1",DoubleUpDownArrow:"\u21D5",DoubleVerticalBar:"\u2225",DownArrowBar:"\u2913",downarrow:"\u2193",DownArrow:"\u2193",Downarrow:"\u21D3",DownArrowUpArrow:"\u21F5",DownBreve:"\u0311",downdownarrows:"\u21CA",downharpoonleft:"\u21C3",downharpoonright:"\u21C2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVectorBar:"\u2956",DownLeftVector:"\u21BD",DownRightTeeVector:"\u295F",DownRightVectorBar:"\u2957",DownRightVector:"\u21C1",DownTeeArrow:"\u21A7",DownTee:"\u22A4",drbkarow:"\u2910",drcorn:"\u231F",drcrop:"\u230C",Dscr:"\u{1D49F}",dscr:"\u{1D4B9}",DScy:"\u0405",dscy:"\u0455",dsol:"\u29F6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",dtrif:"\u25BE",duarr:"\u21F5",duhar:"\u296F",dwangle:"\u29A6",DZcy:"\u040F",dzcy:"\u045F",dzigrarr:"\u27FF",Eacute:"\xC9",eacute:"\xE9",easter:"\u2A6E",Ecaron:"\u011A",ecaron:"\u011B",Ecirc:"\xCA",ecirc:"\xEA",ecir:"\u2256",ecolon:"\u2255",Ecy:"\u042D",ecy:"\u044D",eDDot:"\u2A77",Edot:"\u0116",edot:"\u0117",eDot:"\u2251",ee:"\u2147",efDot:"\u2252",Efr:"\u{1D508}",efr:"\u{1D522}",eg:"\u2A9A",Egrave:"\xC8",egrave:"\xE8",egs:"\u2A96",egsdot:"\u2A98",el:"\u2A99",Element:"\u2208",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",elsdot:"\u2A97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25FB",emptyv:"\u2205",EmptyVerySmallSquare:"\u25AB",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",ENG:"\u014A",eng:"\u014B",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\u{1D53C}",eopf:"\u{1D556}",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",Epsilon:"\u0395",epsilon:"\u03B5",epsiv:"\u03F5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2A96",eqslantless:"\u2A95",Equal:"\u2A75",equals:"=",EqualTilde:"\u2242",equest:"\u225F",Equilibrium:"\u21CC",equiv:"\u2261",equivDD:"\u2A78",eqvparsl:"\u29E5",erarr:"\u2971",erDot:"\u2253",escr:"\u212F",Escr:"\u2130",esdot:"\u2250",Esim:"\u2A73",esim:"\u2242",Eta:"\u0397",eta:"\u03B7",ETH:"\xD0",eth:"\xF0",Euml:"\xCB",euml:"\xEB",euro:"\u20AC",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",Ffr:"\u{1D509}",ffr:"\u{1D523}",filig:"\uFB01",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",Fopf:"\u{1D53D}",fopf:"\u{1D557}",forall:"\u2200",ForAll:"\u2200",fork:"\u22D4",forkv:"\u2AD9",Fouriertrf:"\u2131",fpartint:"\u2A0D",frac12:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",fscr:"\u{1D4BB}",Fscr:"\u2131",gacute:"\u01F5",Gamma:"\u0393",gamma:"\u03B3",Gammad:"\u03DC",gammad:"\u03DD",gap:"\u2A86",Gbreve:"\u011E",gbreve:"\u011F",Gcedil:"\u0122",Gcirc:"\u011C",gcirc:"\u011D",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",ge:"\u2265",gE:"\u2267",gEl:"\u2A8C",gel:"\u22DB",geq:"\u2265",geqq:"\u2267",geqslant:"\u2A7E",gescc:"\u2AA9",ges:"\u2A7E",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",Gfr:"\u{1D50A}",gfr:"\u{1D524}",gg:"\u226B",Gg:"\u22D9",ggg:"\u22D9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gla:"\u2AA5",gl:"\u2277",glE:"\u2A92",glj:"\u2AA4",gnap:"\u2A8A",gnapprox:"\u2A8A",gne:"\u2A88",gnE:"\u2269",gneq:"\u2A88",gneqq:"\u2269",gnsim:"\u22E7",Gopf:"\u{1D53E}",gopf:"\u{1D558}",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22DB",GreaterFullEqual:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2A7E",GreaterTilde:"\u2273",Gscr:"\u{1D4A2}",gscr:"\u210A",gsim:"\u2273",gsime:"\u2A8E",gsiml:"\u2A90",gtcc:"\u2AA7",gtcir:"\u2A7A",gt:">",GT:">",Gt:"\u226B",gtdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrapprox:"\u2A86",gtrarr:"\u2978",gtrdot:"\u22D7",gtreqless:"\u22DB",gtreqqless:"\u2A8C",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",Hacek:"\u02C7",hairsp:"\u200A",half:"\xBD",hamilt:"\u210B",HARDcy:"\u042A",hardcy:"\u044A",harrcir:"\u2948",harr:"\u2194",hArr:"\u21D4",harrw:"\u21AD",Hat:"^",hbar:"\u210F",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22B9",hfr:"\u{1D525}",Hfr:"\u210C",HilbertSpace:"\u210B",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",hookrightarrow:"\u21AA",hopf:"\u{1D559}",Hopf:"\u210D",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\u{1D4BD}",Hscr:"\u210B",hslash:"\u210F",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224E",HumpEqual:"\u224F",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xCD",iacute:"\xED",ic:"\u2063",Icirc:"\xCE",icirc:"\xEE",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xA1",iff:"\u21D4",ifr:"\u{1D526}",Ifr:"\u2111",Igrave:"\xCC",igrave:"\xEC",ii:"\u2148",iiiint:"\u2A0C",iiint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Imacr:"\u012A",imacr:"\u012B",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",Im:"\u2111",imof:"\u22B7",imped:"\u01B5",Implies:"\u21D2",incare:"\u2105",in:"\u2208",infin:"\u221E",infintie:"\u29DD",inodot:"\u0131",intcal:"\u22BA",int:"\u222B",Int:"\u222C",integers:"\u2124",Integral:"\u222B",intercal:"\u22BA",Intersection:"\u22C2",intlarhk:"\u2A17",intprod:"\u2A3C",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012E",iogon:"\u012F",Iopf:"\u{1D540}",iopf:"\u{1D55A}",Iota:"\u0399",iota:"\u03B9",iprod:"\u2A3C",iquest:"\xBF",iscr:"\u{1D4BE}",Iscr:"\u2110",isin:"\u2208",isindot:"\u22F5",isinE:"\u22F9",isins:"\u22F4",isinsv:"\u22F3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xCF",iuml:"\xEF",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\u{1D50D}",jfr:"\u{1D527}",jmath:"\u0237",Jopf:"\u{1D541}",jopf:"\u{1D55B}",Jscr:"\u{1D4A5}",jscr:"\u{1D4BF}",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039A",kappa:"\u03BA",kappav:"\u03F0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041A",kcy:"\u043A",Kfr:"\u{1D50E}",kfr:"\u{1D528}",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040C",kjcy:"\u045C",Kopf:"\u{1D542}",kopf:"\u{1D55C}",Kscr:"\u{1D4A6}",kscr:"\u{1D4C0}",lAarr:"\u21DA",Lacute:"\u0139",lacute:"\u013A",laemptyv:"\u29B4",lagran:"\u2112",Lambda:"\u039B",lambda:"\u03BB",lang:"\u27E8",Lang:"\u27EA",langd:"\u2991",langle:"\u27E8",lap:"\u2A85",Laplacetrf:"\u2112",laquo:"\xAB",larrb:"\u21E4",larrbfs:"\u291F",larr:"\u2190",Larr:"\u219E",lArr:"\u21D0",larrfs:"\u291D",larrhk:"\u21A9",larrlp:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",latail:"\u2919",lAtail:"\u291B",lat:"\u2AAB",late:"\u2AAD",lates:"\u2AAD\uFE00",lbarr:"\u290C",lBarr:"\u290E",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",Lcaron:"\u013D",lcaron:"\u013E",Lcedil:"\u013B",lcedil:"\u013C",lceil:"\u2308",lcub:"{",Lcy:"\u041B",lcy:"\u043B",ldca:"\u2936",ldquo:"\u201C",ldquor:"\u201E",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27E8",LeftArrowBar:"\u21E4",leftarrow:"\u2190",LeftArrow:"\u2190",Leftarrow:"\u21D0",LeftArrowRightArrow:"\u21C6",leftarrowtail:"\u21A2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVectorBar:"\u2959",LeftDownVector:"\u21C3",LeftFloor:"\u230A",leftharpoondown:"\u21BD",leftharpoonup:"\u21BC",leftleftarrows:"\u21C7",leftrightarrow:"\u2194",LeftRightArrow:"\u2194",Leftrightarrow:"\u21D4",leftrightarrows:"\u21C6",leftrightharpoons:"\u21CB",leftrightsquigarrow:"\u21AD",LeftRightVector:"\u294E",LeftTeeArrow:"\u21A4",LeftTee:"\u22A3",LeftTeeVector:"\u295A",leftthreetimes:"\u22CB",LeftTriangleBar:"\u29CF",LeftTriangle:"\u22B2",LeftTriangleEqual:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVectorBar:"\u2958",LeftUpVector:"\u21BF",LeftVectorBar:"\u2952",LeftVector:"\u21BC",lEg:"\u2A8B",leg:"\u22DA",leq:"\u2264",leqq:"\u2266",leqslant:"\u2A7D",lescc:"\u2AA8",les:"\u2A7D",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessapprox:"\u2A85",lessdot:"\u22D6",lesseqgtr:"\u22DA",lesseqqgtr:"\u2A8B",LessEqualGreater:"\u22DA",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2AA1",lesssim:"\u2272",LessSlantEqual:"\u2A7D",LessTilde:"\u2272",lfisht:"\u297C",lfloor:"\u230A",Lfr:"\u{1D50F}",lfr:"\u{1D529}",lg:"\u2276",lgE:"\u2A91",lHar:"\u2962",lhard:"\u21BD",lharu:"\u21BC",lharul:"\u296A",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",llarr:"\u21C7",ll:"\u226A",Ll:"\u22D8",llcorner:"\u231E",Lleftarrow:"\u21DA",llhard:"\u296B",lltri:"\u25FA",Lmidot:"\u013F",lmidot:"\u0140",lmoustache:"\u23B0",lmoust:"\u23B0",lnap:"\u2A89",lnapprox:"\u2A89",lne:"\u2A87",lnE:"\u2268",lneq:"\u2A87",lneqq:"\u2268",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",lobrk:"\u27E6",longleftarrow:"\u27F5",LongLeftArrow:"\u27F5",Longleftarrow:"\u27F8",longleftrightarrow:"\u27F7",LongLeftRightArrow:"\u27F7",Longleftrightarrow:"\u27FA",longmapsto:"\u27FC",longrightarrow:"\u27F6",LongRightArrow:"\u27F6",Longrightarrow:"\u27F9",looparrowleft:"\u21AB",looparrowright:"\u21AC",lopar:"\u2985",Lopf:"\u{1D543}",lopf:"\u{1D55D}",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25CA",lozenge:"\u25CA",lozf:"\u29EB",lpar:"(",lparlt:"\u2993",lrarr:"\u21C6",lrcorner:"\u231F",lrhar:"\u21CB",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",lscr:"\u{1D4C1}",Lscr:"\u2112",lsh:"\u21B0",Lsh:"\u21B0",lsim:"\u2272",lsime:"\u2A8D",lsimg:"\u2A8F",lsqb:"[",lsquo:"\u2018",lsquor:"\u201A",Lstrok:"\u0141",lstrok:"\u0142",ltcc:"\u2AA6",ltcir:"\u2A79",lt:"<",LT:"<",Lt:"\u226A",ltdot:"\u22D6",lthree:"\u22CB",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltri:"\u25C3",ltrie:"\u22B4",ltrif:"\u25C2",ltrPar:"\u2996",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",macr:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21A6",mapsto:"\u21A6",mapstodown:"\u21A7",mapstoleft:"\u21A4",mapstoup:"\u21A5",marker:"\u25AE",mcomma:"\u2A29",Mcy:"\u041C",mcy:"\u043C",mdash:"\u2014",mDDot:"\u223A",measuredangle:"\u2221",MediumSpace:"\u205F",Mellintrf:"\u2133",Mfr:"\u{1D510}",mfr:"\u{1D52A}",mho:"\u2127",micro:"\xB5",midast:"*",midcir:"\u2AF0",mid:"\u2223",middot:"\xB7",minusb:"\u229F",minus:"\u2212",minusd:"\u2238",minusdu:"\u2A2A",MinusPlus:"\u2213",mlcp:"\u2ADB",mldr:"\u2026",mnplus:"\u2213",models:"\u22A7",Mopf:"\u{1D544}",mopf:"\u{1D55E}",mp:"\u2213",mscr:"\u{1D4C2}",Mscr:"\u2133",mstpos:"\u223E",Mu:"\u039C",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20D2",nap:"\u2249",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",napprox:"\u2249",natural:"\u266E",naturals:"\u2115",natur:"\u266E",nbsp:"\xA0",nbump:"\u224E\u0338",nbumpe:"\u224F\u0338",ncap:"\u2A43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",Ncy:"\u041D",ncy:"\u043D",ndash:"\u2013",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21D7",nearrow:"\u2197",ne:"\u2260",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226B",NestedLessLess:"\u226A",NewLine:`
// `,nexist:"\u2204",nexists:"\u2204",Nfr:"\u{1D511}",nfr:"\u{1D52B}",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",nGg:"\u22D9\u0338",ngsim:"\u2275",nGt:"\u226B\u20D2",ngt:"\u226F",ngtr:"\u226F",nGtv:"\u226B\u0338",nharr:"\u21AE",nhArr:"\u21CE",nhpar:"\u2AF2",ni:"\u220B",nis:"\u22FC",nisd:"\u22FA",niv:"\u220B",NJcy:"\u040A",njcy:"\u045A",nlarr:"\u219A",nlArr:"\u21CD",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nleftarrow:"\u219A",nLeftarrow:"\u21CD",nleftrightarrow:"\u21AE",nLeftrightarrow:"\u21CE",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",nless:"\u226E",nLl:"\u22D8\u0338",nlsim:"\u2274",nLt:"\u226A\u20D2",nlt:"\u226E",nltri:"\u22EA",nltrie:"\u22EC",nLtv:"\u226A\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xA0",nopf:"\u{1D55F}",Nopf:"\u2115",Not:"\u2AEC",not:"\xAC",NotCongruent:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226F",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",notin:"\u2209",notindot:"\u22F5\u0338",notinE:"\u22F9\u0338",notinva:"\u2209",notinvb:"\u22F7",notinvc:"\u22F6",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangle:"\u22EA",NotLeftTriangleEqual:"\u22EC",NotLess:"\u226E",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",notni:"\u220C",notniva:"\u220C",notnivb:"\u22FE",notnivc:"\u22FD",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",NotReverseElement:"\u220C",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangle:"\u22EB",NotRightTriangleEqual:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",NotSubset:"\u2282\u20D2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",nparallel:"\u2226",npar:"\u2226",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",npr:"\u2280",nprcue:"\u22E0",nprec:"\u2280",npreceq:"\u2AAF\u0338",npre:"\u2AAF\u0338",nrarrc:"\u2933\u0338",nrarr:"\u219B",nrArr:"\u21CF",nrarrw:"\u219D\u0338",nrightarrow:"\u219B",nRightarrow:"\u21CF",nrtri:"\u22EB",nrtrie:"\u22ED",nsc:"\u2281",nsccue:"\u22E1",nsce:"\u2AB0\u0338",Nscr:"\u{1D4A9}",nscr:"\u{1D4C3}",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22E2",nsqsupe:"\u22E3",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsube:"\u2288",nsubset:"\u2282\u20D2",nsubseteq:"\u2288",nsubseteqq:"\u2AC5\u0338",nsucc:"\u2281",nsucceq:"\u2AB0\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20D2",nsupseteq:"\u2289",nsupseteqq:"\u2AC6\u0338",ntgl:"\u2279",Ntilde:"\xD1",ntilde:"\xF1",ntlg:"\u2278",ntriangleleft:"\u22EA",ntrianglelefteq:"\u22EC",ntriangleright:"\u22EB",ntrianglerighteq:"\u22ED",Nu:"\u039D",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224D\u20D2",nvdash:"\u22AC",nvDash:"\u22AD",nVdash:"\u22AE",nVDash:"\u22AF",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvHarr:"\u2904",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21D6",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xD3",oacute:"\xF3",oast:"\u229B",Ocirc:"\xD4",ocirc:"\xF4",ocir:"\u229A",Ocy:"\u041E",ocy:"\u043E",odash:"\u229D",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2A38",odot:"\u2299",odsold:"\u29BC",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29BF",Ofr:"\u{1D512}",ofr:"\u{1D52C}",ogon:"\u02DB",Ograve:"\xD2",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",ohm:"\u03A9",oint:"\u222E",olarr:"\u21BA",olcir:"\u29BE",olcross:"\u29BB",oline:"\u203E",olt:"\u29C0",Omacr:"\u014C",omacr:"\u014D",Omega:"\u03A9",omega:"\u03C9",Omicron:"\u039F",omicron:"\u03BF",omid:"\u29B6",ominus:"\u2296",Oopf:"\u{1D546}",oopf:"\u{1D560}",opar:"\u29B7",OpenCurlyDoubleQuote:"\u201C",OpenCurlyQuote:"\u2018",operp:"\u29B9",oplus:"\u2295",orarr:"\u21BB",Or:"\u2A54",or:"\u2228",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oS:"\u24C8",Oscr:"\u{1D4AA}",oscr:"\u2134",Oslash:"\xD8",oslash:"\xF8",osol:"\u2298",Otilde:"\xD5",otilde:"\xF5",otimesas:"\u2A36",Otimes:"\u2A37",otimes:"\u2297",Ouml:"\xD6",ouml:"\xF6",ovbar:"\u233D",OverBar:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",OverParenthesis:"\u23DC",para:"\xB6",parallel:"\u2225",par:"\u2225",parsim:"\u2AF3",parsl:"\u2AFD",part:"\u2202",PartialD:"\u2202",Pcy:"\u041F",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",perp:"\u22A5",pertenk:"\u2031",Pfr:"\u{1D513}",pfr:"\u{1D52D}",Phi:"\u03A6",phi:"\u03C6",phiv:"\u03D5",phmmat:"\u2133",phone:"\u260E",Pi:"\u03A0",pi:"\u03C0",pitchfork:"\u22D4",piv:"\u03D6",planck:"\u210F",planckh:"\u210E",plankv:"\u210F",plusacir:"\u2A23",plusb:"\u229E",pluscir:"\u2A22",plus:"+",plusdo:"\u2214",plusdu:"\u2A25",pluse:"\u2A72",PlusMinus:"\xB1",plusmn:"\xB1",plussim:"\u2A26",plustwo:"\u2A27",pm:"\xB1",Poincareplane:"\u210C",pointint:"\u2A15",popf:"\u{1D561}",Popf:"\u2119",pound:"\xA3",prap:"\u2AB7",Pr:"\u2ABB",pr:"\u227A",prcue:"\u227C",precapprox:"\u2AB7",prec:"\u227A",preccurlyeq:"\u227C",Precedes:"\u227A",PrecedesEqual:"\u2AAF",PrecedesSlantEqual:"\u227C",PrecedesTilde:"\u227E",preceq:"\u2AAF",precnapprox:"\u2AB9",precneqq:"\u2AB5",precnsim:"\u22E8",pre:"\u2AAF",prE:"\u2AB3",precsim:"\u227E",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2AB9",prnE:"\u2AB5",prnsim:"\u22E8",prod:"\u220F",Product:"\u220F",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prop:"\u221D",Proportional:"\u221D",Proportion:"\u2237",propto:"\u221D",prsim:"\u227E",prurel:"\u22B0",Pscr:"\u{1D4AB}",pscr:"\u{1D4C5}",Psi:"\u03A8",psi:"\u03C8",puncsp:"\u2008",Qfr:"\u{1D514}",qfr:"\u{1D52E}",qint:"\u2A0C",qopf:"\u{1D562}",Qopf:"\u211A",qprime:"\u2057",Qscr:"\u{1D4AC}",qscr:"\u{1D4C6}",quaternions:"\u210D",quatint:"\u2A16",quest:"?",questeq:"\u225F",quot:'"',QUOT:'"',rAarr:"\u21DB",race:"\u223D\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221A",raemptyv:"\u29B3",rang:"\u27E9",Rang:"\u27EB",rangd:"\u2992",range:"\u29A5",rangle:"\u27E9",raquo:"\xBB",rarrap:"\u2975",rarrb:"\u21E5",rarrbfs:"\u2920",rarrc:"\u2933",rarr:"\u2192",Rarr:"\u21A0",rArr:"\u21D2",rarrfs:"\u291E",rarrhk:"\u21AA",rarrlp:"\u21AC",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21A3",rarrw:"\u219D",ratail:"\u291A",rAtail:"\u291C",ratio:"\u2236",rationals:"\u211A",rbarr:"\u290D",rBarr:"\u290F",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201D",rdquor:"\u201D",rdsh:"\u21B3",real:"\u211C",realine:"\u211B",realpart:"\u211C",reals:"\u211D",Re:"\u211C",rect:"\u25AD",reg:"\xAE",REG:"\xAE",ReverseElement:"\u220B",ReverseEquilibrium:"\u21CB",ReverseUpEquilibrium:"\u296F",rfisht:"\u297D",rfloor:"\u230B",rfr:"\u{1D52F}",Rfr:"\u211C",rHar:"\u2964",rhard:"\u21C1",rharu:"\u21C0",rharul:"\u296C",Rho:"\u03A1",rho:"\u03C1",rhov:"\u03F1",RightAngleBracket:"\u27E9",RightArrowBar:"\u21E5",rightarrow:"\u2192",RightArrow:"\u2192",Rightarrow:"\u21D2",RightArrowLeftArrow:"\u21C4",rightarrowtail:"\u21A3",RightCeiling:"\u2309",RightDoubleBracket:"\u27E7",RightDownTeeVector:"\u295D",RightDownVectorBar:"\u2955",RightDownVector:"\u21C2",RightFloor:"\u230B",rightharpoondown:"\u21C1",rightharpoonup:"\u21C0",rightleftarrows:"\u21C4",rightleftharpoons:"\u21CC",rightrightarrows:"\u21C9",rightsquigarrow:"\u219D",RightTeeArrow:"\u21A6",RightTee:"\u22A2",RightTeeVector:"\u295B",rightthreetimes:"\u22CC",RightTriangleBar:"\u29D0",RightTriangle:"\u22B3",RightTriangleEqual:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVectorBar:"\u2954",RightUpVector:"\u21BE",RightVectorBar:"\u2953",RightVector:"\u21C0",ring:"\u02DA",risingdotseq:"\u2253",rlarr:"\u21C4",rlhar:"\u21CC",rlm:"\u200F",rmoustache:"\u23B1",rmoust:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",robrk:"\u27E7",ropar:"\u2986",ropf:"\u{1D563}",Ropf:"\u211D",roplus:"\u2A2E",rotimes:"\u2A35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rrarr:"\u21C9",Rrightarrow:"\u21DB",rsaquo:"\u203A",rscr:"\u{1D4C7}",Rscr:"\u211B",rsh:"\u21B1",Rsh:"\u21B1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22CC",rtimes:"\u22CA",rtri:"\u25B9",rtrie:"\u22B5",rtrif:"\u25B8",rtriltri:"\u29CE",RuleDelayed:"\u29F4",ruluhar:"\u2968",rx:"\u211E",Sacute:"\u015A",sacute:"\u015B",sbquo:"\u201A",scap:"\u2AB8",Scaron:"\u0160",scaron:"\u0161",Sc:"\u2ABC",sc:"\u227B",sccue:"\u227D",sce:"\u2AB0",scE:"\u2AB4",Scedil:"\u015E",scedil:"\u015F",Scirc:"\u015C",scirc:"\u015D",scnap:"\u2ABA",scnE:"\u2AB6",scnsim:"\u22E9",scpolint:"\u2A13",scsim:"\u227F",Scy:"\u0421",scy:"\u0441",sdotb:"\u22A1",sdot:"\u22C5",sdote:"\u2A66",searhk:"\u2925",searr:"\u2198",seArr:"\u21D8",searrow:"\u2198",sect:"\xA7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\u{1D516}",sfr:"\u{1D530}",sfrown:"\u2322",sharp:"\u266F",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xAD",Sigma:"\u03A3",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",sim:"\u223C",simdot:"\u2A6A",sime:"\u2243",simeq:"\u2243",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2A33",smeparsl:"\u29E4",smid:"\u2223",smile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",SOFTcy:"\u042C",softcy:"\u044C",solbar:"\u233F",solb:"\u29C4",sol:"/",Sopf:"\u{1D54A}",sopf:"\u{1D564}",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\uFE00",sqcup:"\u2294",sqcups:"\u2294\uFE00",Sqrt:"\u221A",sqsub:"\u228F",sqsube:"\u2291",sqsubset:"\u228F",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",square:"\u25A1",Square:"\u25A1",SquareIntersection:"\u2293",SquareSubset:"\u228F",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25AA",squ:"\u25A1",squf:"\u25AA",srarr:"\u2192",Sscr:"\u{1D4AE}",sscr:"\u{1D4C8}",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22C6",Star:"\u22C6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03F5",straightphi:"\u03D5",strns:"\xAF",sub:"\u2282",Sub:"\u22D0",subdot:"\u2ABD",subE:"\u2AC5",sube:"\u2286",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subne:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",subset:"\u2282",Subset:"\u22D0",subseteq:"\u2286",subseteqq:"\u2AC5",SubsetEqual:"\u2286",subsetneq:"\u228A",subsetneqq:"\u2ACB",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",succapprox:"\u2AB8",succ:"\u227B",succcurlyeq:"\u227D",Succeeds:"\u227B",SucceedsEqual:"\u2AB0",SucceedsSlantEqual:"\u227D",SucceedsTilde:"\u227F",succeq:"\u2AB0",succnapprox:"\u2ABA",succneqq:"\u2AB6",succnsim:"\u22E9",succsim:"\u227F",SuchThat:"\u220B",sum:"\u2211",Sum:"\u2211",sung:"\u266A",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",sup:"\u2283",Sup:"\u22D1",supdot:"\u2ABE",supdsub:"\u2AD8",supE:"\u2AC6",supe:"\u2287",supedot:"\u2AC4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supne:"\u228B",supplus:"\u2AC0",supset:"\u2283",Supset:"\u22D1",supseteq:"\u2287",supseteqq:"\u2AC6",supsetneq:"\u228B",supsetneqq:"\u2ACC",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swarhk:"\u2926",swarr:"\u2199",swArr:"\u21D9",swarrow:"\u2199",swnwar:"\u292A",szlig:"\xDF",Tab:"	",target:"\u2316",Tau:"\u03A4",tau:"\u03C4",tbrk:"\u23B4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20DB",telrec:"\u2315",Tfr:"\u{1D517}",tfr:"\u{1D531}",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",Theta:"\u0398",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",thickapprox:"\u2248",thicksim:"\u223C",ThickSpace:"\u205F\u200A",ThinSpace:"\u2009",thinsp:"\u2009",thkap:"\u2248",thksim:"\u223C",THORN:"\xDE",thorn:"\xFE",tilde:"\u02DC",Tilde:"\u223C",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",timesbar:"\u2A31",timesb:"\u22A0",times:"\xD7",timesd:"\u2A30",tint:"\u222D",toea:"\u2928",topbot:"\u2336",topcir:"\u2AF1",top:"\u22A4",Topf:"\u{1D54B}",topf:"\u{1D565}",topfork:"\u2ADA",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25B5",triangledown:"\u25BF",triangleleft:"\u25C3",trianglelefteq:"\u22B4",triangleq:"\u225C",triangleright:"\u25B9",trianglerighteq:"\u22B5",tridot:"\u25EC",trie:"\u225C",triminus:"\u2A3A",TripleDot:"\u20DB",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",Tscr:"\u{1D4AF}",tscr:"\u{1D4C9}",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040B",tshcy:"\u045B",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226C",twoheadleftarrow:"\u219E",twoheadrightarrow:"\u21A0",Uacute:"\xDA",uacute:"\xFA",uarr:"\u2191",Uarr:"\u219F",uArr:"\u21D1",Uarrocir:"\u2949",Ubrcy:"\u040E",ubrcy:"\u045E",Ubreve:"\u016C",ubreve:"\u016D",Ucirc:"\xDB",ucirc:"\xFB",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21C5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296E",ufisht:"\u297E",Ufr:"\u{1D518}",ufr:"\u{1D532}",Ugrave:"\xD9",ugrave:"\xF9",uHar:"\u2963",uharl:"\u21BF",uharr:"\u21BE",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",Umacr:"\u016A",umacr:"\u016B",uml:"\xA8",UnderBar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",UnionPlus:"\u228E",Uogon:"\u0172",uogon:"\u0173",Uopf:"\u{1D54C}",uopf:"\u{1D566}",UpArrowBar:"\u2912",uparrow:"\u2191",UpArrow:"\u2191",Uparrow:"\u21D1",UpArrowDownArrow:"\u21C5",updownarrow:"\u2195",UpDownArrow:"\u2195",Updownarrow:"\u21D5",UpEquilibrium:"\u296E",upharpoonleft:"\u21BF",upharpoonright:"\u21BE",uplus:"\u228E",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03C5",Upsi:"\u03D2",upsih:"\u03D2",Upsilon:"\u03A5",upsilon:"\u03C5",UpTeeArrow:"\u21A5",UpTee:"\u22A5",upuparrows:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",Uring:"\u016E",uring:"\u016F",urtri:"\u25F9",Uscr:"\u{1D4B0}",uscr:"\u{1D4CA}",utdot:"\u22F0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25B5",utrif:"\u25B4",uuarr:"\u21C8",Uuml:"\xDC",uuml:"\xFC",uwangle:"\u29A7",vangrt:"\u299C",varepsilon:"\u03F5",varkappa:"\u03F0",varnothing:"\u2205",varphi:"\u03D5",varpi:"\u03D6",varpropto:"\u221D",varr:"\u2195",vArr:"\u21D5",varrho:"\u03F1",varsigma:"\u03C2",varsubsetneq:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vartheta:"\u03D1",vartriangleleft:"\u22B2",vartriangleright:"\u22B3",vBar:"\u2AE8",Vbar:"\u2AEB",vBarv:"\u2AE9",Vcy:"\u0412",vcy:"\u0432",vdash:"\u22A2",vDash:"\u22A8",Vdash:"\u22A9",VDash:"\u22AB",Vdashl:"\u2AE6",veebar:"\u22BB",vee:"\u2228",Vee:"\u22C1",veeeq:"\u225A",vellip:"\u22EE",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200A",Vfr:"\u{1D519}",vfr:"\u{1D533}",vltri:"\u22B2",vnsub:"\u2282\u20D2",vnsup:"\u2283\u20D2",Vopf:"\u{1D54D}",vopf:"\u{1D567}",vprop:"\u221D",vrtri:"\u22B3",Vscr:"\u{1D4B1}",vscr:"\u{1D4CB}",vsubnE:"\u2ACB\uFE00",vsubne:"\u228A\uFE00",vsupnE:"\u2ACC\uFE00",vsupne:"\u228B\uFE00",Vvdash:"\u22AA",vzigzag:"\u299A",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2A5F",wedge:"\u2227",Wedge:"\u22C0",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\u{1D51A}",wfr:"\u{1D534}",Wopf:"\u{1D54E}",wopf:"\u{1D568}",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\u{1D4B2}",wscr:"\u{1D4CC}",xcap:"\u22C2",xcirc:"\u25EF",xcup:"\u22C3",xdtri:"\u25BD",Xfr:"\u{1D51B}",xfr:"\u{1D535}",xharr:"\u27F7",xhArr:"\u27FA",Xi:"\u039E",xi:"\u03BE",xlarr:"\u27F5",xlArr:"\u27F8",xmap:"\u27FC",xnis:"\u22FB",xodot:"\u2A00",Xopf:"\u{1D54F}",xopf:"\u{1D569}",xoplus:"\u2A01",xotime:"\u2A02",xrarr:"\u27F6",xrArr:"\u27F9",Xscr:"\u{1D4B3}",xscr:"\u{1D4CD}",xsqcup:"\u2A06",xuplus:"\u2A04",xutri:"\u25B3",xvee:"\u22C1",xwedge:"\u22C0",Yacute:"\xDD",yacute:"\xFD",YAcy:"\u042F",yacy:"\u044F",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042B",ycy:"\u044B",yen:"\xA5",Yfr:"\u{1D51C}",yfr:"\u{1D536}",YIcy:"\u0407",yicy:"\u0457",Yopf:"\u{1D550}",yopf:"\u{1D56A}",Yscr:"\u{1D4B4}",yscr:"\u{1D4CE}",YUcy:"\u042E",yucy:"\u044E",yuml:"\xFF",Yuml:"\u0178",Zacute:"\u0179",zacute:"\u017A",Zcaron:"\u017D",zcaron:"\u017E",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017B",zdot:"\u017C",zeetrf:"\u2128",ZeroWidthSpace:"\u200B",Zeta:"\u0396",zeta:"\u03B6",zfr:"\u{1D537}",Zfr:"\u2128",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21DD",zopf:"\u{1D56B}",Zopf:"\u2124",Zscr:"\u{1D4B5}",zscr:"\u{1D4CF}",zwj:"\u200D",zwnj:"\u200C"}});var vr=A((Lp,Cn)=>{"use strict";Cn.exports=An()});var Mt=A((Pp,Sn)=>{Sn.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/});var Dn=A((Fp,Rn)=>{"use strict";var Tn={};function _c(t){var e,r,n=Tn[t];if(n)return n;for(n=Tn[t]=[],e=0;e<128;e++)r=String.fromCharCode(e),/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<t.length;e++)n[t.charCodeAt(e)]=t[e];return n}function Nt(t,e,r){var n,i,o,a,s,c="";for(typeof e!="string"&&(r=e,e=Nt.defaultChars),typeof r>"u"&&(r=!0),s=_c(e),n=0,i=t.length;n<i;n++){if(o=t.charCodeAt(n),r&&o===37&&n+2<i&&/^[0-9a-f]{2}$/i.test(t.slice(n+1,n+3))){c+=t.slice(n,n+3),n+=2;continue}if(o<128){c+=s[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&n+1<i&&(a=t.charCodeAt(n+1),a>=56320&&a<=57343)){c+=encodeURIComponent(t[n]+t[n+1]),n++;continue}c+="%EF%BF%BD";continue}c+=encodeURIComponent(t[n])}return c}Nt.defaultChars=";/?:@&=+$,-_.!~*'()#";Nt.componentChars="-_.!~*'()";Rn.exports=Nt});var Nn=A((Bp,Mn)=>{"use strict";var In={};function yc(t){var e,r,n=In[t];if(n)return n;for(n=In[t]=[],e=0;e<128;e++)r=String.fromCharCode(e),n.push(r);for(e=0;e<t.length;e++)r=t.charCodeAt(e),n[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2);return n}function Ot(t,e){var r;return typeof e!="string"&&(e=Ot.defaultChars),r=yc(e),t.replace(/(%[a-f0-9]{2})+/gi,function(n){var i,o,a,s,c,l,u,f="";for(i=0,o=n.length;i<o;i+=3){if(a=parseInt(n.slice(i+1,i+3),16),a<128){f+=r[a];continue}if((a&224)===192&&i+3<o&&(s=parseInt(n.slice(i+4,i+6),16),(s&192)===128)){u=a<<6&1984|s&63,u<128?f+="\uFFFD\uFFFD":f+=String.fromCharCode(u),i+=3;continue}if((a&240)===224&&i+6<o&&(s=parseInt(n.slice(i+4,i+6),16),c=parseInt(n.slice(i+7,i+9),16),(s&192)===128&&(c&192)===128)){u=a<<12&61440|s<<6&4032|c&63,u<2048||u>=55296&&u<=57343?f+="\uFFFD\uFFFD\uFFFD":f+=String.fromCharCode(u),i+=6;continue}if((a&248)===240&&i+9<o&&(s=parseInt(n.slice(i+4,i+6),16),c=parseInt(n.slice(i+7,i+9),16),l=parseInt(n.slice(i+10,i+12),16),(s&192)===128&&(c&192)===128&&(l&192)===128)){u=a<<18&1835008|s<<12&258048|c<<6&4032|l&63,u<65536||u>1114111?f+="\uFFFD\uFFFD\uFFFD\uFFFD":(u-=65536,f+=String.fromCharCode(55296+(u>>10),56320+(u&1023))),i+=9;continue}f+="\uFFFD"}return f})}Ot.defaultChars=";/?:@&=+$,#";Ot.componentChars="";Mn.exports=Ot});var Ln=A((qp,On)=>{"use strict";On.exports=function(e){var r="";return r+=e.protocol||"",r+=e.slashes?"//":"",r+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?r+="["+e.hostname+"]":r+=e.hostname||"",r+=e.port?":"+e.port:"",r+=e.pathname||"",r+=e.search||"",r+=e.hash||"",r}});var Un=A((zp,Hn)=>{"use strict";function Lt(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var vc=/^([a-z0-9.+-]+:)/i,Ec=/:[0-9]*$/,xc=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,kc=["<",">",'"',"`"," ","\r",`
// `,"	"],wc=["{","}","|","\\","^","`"].concat(kc),Ac=["'"].concat(wc),Pn=["%","/","?",";","#"].concat(Ac),Fn=["/","?","#"],Cc=255,Bn=/^[+a-z0-9A-Z_-]{0,63}$/,Sc=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,qn={javascript:!0,"javascript:":!0},zn={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Tc(t,e){if(t&&t instanceof Lt)return t;var r=new Lt;return r.parse(t,e),r}Lt.prototype.parse=function(t,e){var r,n,i,o,a,s=t;if(s=s.trim(),!e&&t.split("#").length===1){var c=xc.exec(s);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}var l=vc.exec(s);if(l&&(l=l[0],i=l.toLowerCase(),this.protocol=l,s=s.substr(l.length)),(e||l||s.match(/^\/\/[^@\/]+@[^@\/]+/))&&(a=s.substr(0,2)==="//",a&&!(l&&qn[l])&&(s=s.substr(2),this.slashes=!0)),!qn[l]&&(a||l&&!zn[l])){var u=-1;for(r=0;r<Fn.length;r++)o=s.indexOf(Fn[r]),o!==-1&&(u===-1||o<u)&&(u=o);var f,p;for(u===-1?p=s.lastIndexOf("@"):p=s.lastIndexOf("@",u),p!==-1&&(f=s.slice(0,p),s=s.slice(p+1),this.auth=f),u=-1,r=0;r<Pn.length;r++)o=s.indexOf(Pn[r]),o!==-1&&(u===-1||o<u)&&(u=o);u===-1&&(u=s.length),s[u-1]===":"&&u--;var g=s.slice(0,u);s=s.slice(u),this.parseHost(g),this.hostname=this.hostname||"";var b=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!b){var m=this.hostname.split(/\./);for(r=0,n=m.length;r<n;r++){var k=m[r];if(k&&!k.match(Bn)){for(var y="",_=0,w=k.length;_<w;_++)k.charCodeAt(_)>127?y+="x":y+=k[_];if(!y.match(Bn)){var C=m.slice(0,r),R=m.slice(r+1),v=k.match(Sc);v&&(C.push(v[1]),R.unshift(v[2])),R.length&&(s=R.join(".")+s),this.hostname=C.join(".");break}}}}this.hostname.length>Cc&&(this.hostname=""),b&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var B=s.indexOf("#");B!==-1&&(this.hash=s.substr(B),s=s.slice(0,B));var q=s.indexOf("?");return q!==-1&&(this.search=s.substr(q),s=s.slice(0,q)),s&&(this.pathname=s),zn[i]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Lt.prototype.parseHost=function(t){var e=Ec.exec(t);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};Hn.exports=Tc});var Er=A((Hp,pt)=>{"use strict";pt.exports.encode=Dn();pt.exports.decode=Nn();pt.exports.format=Ln();pt.exports.parse=Un()});var xr=A((Up,$n)=>{$n.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/});var kr=A(($p,Gn)=>{Gn.exports=/[\0-\x1F\x7F-\x9F]/});var jn=A((Gp,Kn)=>{Kn.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/});var wr=A((Kp,Wn)=>{Wn.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/});var Zn=A(Je=>{"use strict";Je.Any=xr();Je.Cc=kr();Je.Cf=jn();Je.P=Mt();Je.Z=wr()});var W=A(se=>{"use strict";function Rc(t){return Object.prototype.toString.call(t)}function Dc(t){return Rc(t)==="[object String]"}var Ic=Object.prototype.hasOwnProperty;function Yn(t,e){return Ic.call(t,e)}function Mc(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(r){if(r){if(typeof r!="object")throw new TypeError(r+"must be object");Object.keys(r).forEach(function(n){t[n]=r[n]})}}),t}function Nc(t,e,r){return[].concat(t.slice(0,e),r,t.slice(e+1))}function Xn(t){return!(t>=55296&&t<=57343||t>=64976&&t<=65007||(t&65535)===65535||(t&65535)===65534||t>=0&&t<=8||t===11||t>=14&&t<=31||t>=127&&t<=159||t>1114111)}function Jn(t){if(t>65535){t-=65536;var e=55296+(t>>10),r=56320+(t&1023);return String.fromCharCode(e,r)}return String.fromCharCode(t)}var Qn=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,Oc=/&([a-z#][a-z0-9]{1,31});/gi,Lc=new RegExp(Qn.source+"|"+Oc.source,"gi"),Pc=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i,Vn=vr();function Fc(t,e){var r;return Yn(Vn,e)?Vn[e]:e.charCodeAt(0)===35&&Pc.test(e)&&(r=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10),Xn(r))?Jn(r):t}function Bc(t){return t.indexOf("\\")<0?t:t.replace(Qn,"$1")}function qc(t){return t.indexOf("\\")<0&&t.indexOf("&")<0?t:t.replace(Lc,function(e,r,n){return r||Fc(e,n)})}var zc=/[&<>"]/,Hc=/[&<>"]/g,Uc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function $c(t){return Uc[t]}function Gc(t){return zc.test(t)?t.replace(Hc,$c):t}var Kc=/[.?*+^$[\]\\(){}|-]/g;function jc(t){return t.replace(Kc,"\\$&")}function Wc(t){switch(t){case 9:case 32:return!0}return!1}function Zc(t){if(t>=8192&&t<=8202)return!0;switch(t){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var Vc=Mt();function Yc(t){return Vc.test(t)}function Xc(t){switch(t){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Jc(t){return t=t.trim().replace(/\s+/g," "),"\u1E9E".toLowerCase()==="\u1E7E"&&(t=t.replace(/ẞ/g,"\xDF")),t.toLowerCase().toUpperCase()}se.lib={};se.lib.mdurl=Er();se.lib.ucmicro=Zn();se.assign=Mc;se.isString=Dc;se.has=Yn;se.unescapeMd=Bc;se.unescapeAll=qc;se.isValidEntityCode=Xn;se.fromCodePoint=Jn;se.escapeHtml=Gc;se.arrayReplaceAt=Nc;se.isSpace=Wc;se.isWhiteSpace=Zc;se.isMdAsciiPunct=Xc;se.isPunctChar=Yc;se.escapeRE=jc;se.normalizeReference=Jc});var ti=A((Zp,ei)=>{"use strict";ei.exports=function(e,r,n){var i,o,a,s,c=-1,l=e.posMax,u=e.pos;for(e.pos=r+1,i=1;e.pos<l;){if(a=e.src.charCodeAt(e.pos),a===93&&(i--,i===0)){o=!0;break}if(s=e.pos,e.md.inline.skipToken(e),a===91){if(s===e.pos-1)i++;else if(n)return e.pos=u,-1}}return o&&(c=e.pos),e.pos=u,c}});var ii=A((Vp,ni)=>{"use strict";var ri=W().unescapeAll;ni.exports=function(e,r,n){var i,o,a=r,s={ok:!1,pos:0,lines:0,str:""};if(e.charCodeAt(a)===60){for(a++;a<n;){if(i=e.charCodeAt(a),i===10||i===60)return s;if(i===62)return s.pos=a+1,s.str=ri(e.slice(r+1,a)),s.ok=!0,s;if(i===92&&a+1<n){a+=2;continue}a++}return s}for(o=0;a<n&&(i=e.charCodeAt(a),!(i===32||i<32||i===127));){if(i===92&&a+1<n){if(e.charCodeAt(a+1)===32)break;a+=2;continue}if(i===40&&(o++,o>32))return s;if(i===41){if(o===0)break;o--}a++}return r===a||o!==0||(s.str=ri(e.slice(r,a)),s.pos=a,s.ok=!0),s}});var si=A((Yp,oi)=>{"use strict";var Qc=W().unescapeAll;oi.exports=function(e,r,n){var i,o,a=0,s=r,c={ok:!1,pos:0,lines:0,str:""};if(s>=n||(o=e.charCodeAt(s),o!==34&&o!==39&&o!==40))return c;for(s++,o===40&&(o=41);s<n;){if(i=e.charCodeAt(s),i===o)return c.pos=s+1,c.lines=a,c.str=Qc(e.slice(r+1,s)),c.ok=!0,c;if(i===40&&o===41)return c;i===10?a++:i===92&&s+1<n&&(s++,e.charCodeAt(s)===10&&a++),s++}return c}});var ai=A(Pt=>{"use strict";Pt.parseLinkLabel=ti();Pt.parseLinkDestination=ii();Pt.parseLinkTitle=si()});var li=A((Jp,ci)=>{"use strict";var el=W().assign,tl=W().unescapeAll,He=W().escapeHtml,Se={};Se.code_inline=function(t,e,r,n,i){var o=t[e];return"<code"+i.renderAttrs(o)+">"+He(o.content)+"</code>"};Se.code_block=function(t,e,r,n,i){var o=t[e];return"<pre"+i.renderAttrs(o)+"><code>"+He(t[e].content)+`</code></pre>
// `};Se.fence=function(t,e,r,n,i){var o=t[e],a=o.info?tl(o.info).trim():"",s="",c="",l,u,f,p,g;return a&&(f=a.split(/(\s+)/g),s=f[0],c=f.slice(2).join("")),r.highlight?l=r.highlight(o.content,s,c)||He(o.content):l=He(o.content),l.indexOf("<pre")===0?l+`
// `:a?(u=o.attrIndex("class"),p=o.attrs?o.attrs.slice():[],u<0?p.push(["class",r.langPrefix+s]):(p[u]=p[u].slice(),p[u][1]+=" "+r.langPrefix+s),g={attrs:p},"<pre><code"+i.renderAttrs(g)+">"+l+`</code></pre>
// `):"<pre><code"+i.renderAttrs(o)+">"+l+`</code></pre>
// `};Se.image=function(t,e,r,n,i){var o=t[e];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,r,n),i.renderToken(t,e,r)};Se.hardbreak=function(t,e,r){return r.xhtmlOut?`<br />
// `:`<br>
// `};Se.softbreak=function(t,e,r){return r.breaks?r.xhtmlOut?`<br />
// `:`<br>
// `:`
// `};Se.text=function(t,e){return He(t[e].content)};Se.html_block=function(t,e){return t[e].content};Se.html_inline=function(t,e){return t[e].content};function Qe(){this.rules=el({},Se)}Qe.prototype.renderAttrs=function(e){var r,n,i;if(!e.attrs)return"";for(i="",r=0,n=e.attrs.length;r<n;r++)i+=" "+He(e.attrs[r][0])+'="'+He(e.attrs[r][1])+'"';return i};Qe.prototype.renderToken=function(e,r,n){var i,o="",a=!1,s=e[r];return s.hidden?"":(s.block&&s.nesting!==-1&&r&&e[r-1].hidden&&(o+=`
// `),o+=(s.nesting===-1?"</":"<")+s.tag,o+=this.renderAttrs(s),s.nesting===0&&n.xhtmlOut&&(o+=" /"),s.block&&(a=!0,s.nesting===1&&r+1<e.length&&(i=e[r+1],(i.type==="inline"||i.hidden||i.nesting===-1&&i.tag===s.tag)&&(a=!1))),o+=a?`>
// `:">",o)};Qe.prototype.renderInline=function(t,e,r){for(var n,i="",o=this.rules,a=0,s=t.length;a<s;a++)n=t[a].type,typeof o[n]<"u"?i+=o[n](t,a,e,r,this):i+=this.renderToken(t,a,e);return i};Qe.prototype.renderInlineAsText=function(t,e,r){for(var n="",i=0,o=t.length;i<o;i++)t[i].type==="text"?n+=t[i].content:t[i].type==="image"?n+=this.renderInlineAsText(t[i].children,e,r):t[i].type==="softbreak"&&(n+=`
// `);return n};Qe.prototype.render=function(t,e,r){var n,i,o,a="",s=this.rules;for(n=0,i=t.length;n<i;n++)o=t[n].type,o==="inline"?a+=this.renderInline(t[n].children,e,r):typeof s[o]<"u"?a+=s[o](t,n,e,r,this):a+=this.renderToken(t,n,e,r);return a};ci.exports=Qe});var Ft=A((Qp,ui)=>{"use strict";function Ee(){this.__rules__=[],this.__cache__=null}Ee.prototype.__find__=function(t){for(var e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===t)return e;return-1};Ee.prototype.__compile__=function(){var t=this,e=[""];t.__rules__.forEach(function(r){r.enabled&&r.alt.forEach(function(n){e.indexOf(n)<0&&e.push(n)})}),t.__cache__={},e.forEach(function(r){t.__cache__[r]=[],t.__rules__.forEach(function(n){n.enabled&&(r&&n.alt.indexOf(r)<0||t.__cache__[r].push(n.fn))})})};Ee.prototype.at=function(t,e,r){var n=this.__find__(t),i=r||{};if(n===-1)throw new Error("Parser rule not found: "+t);this.__rules__[n].fn=e,this.__rules__[n].alt=i.alt||[],this.__cache__=null};Ee.prototype.before=function(t,e,r,n){var i=this.__find__(t),o=n||{};if(i===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(i,0,{name:e,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null};Ee.prototype.after=function(t,e,r,n){var i=this.__find__(t),o=n||{};if(i===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(i+1,0,{name:e,enabled:!0,fn:r,alt:o.alt||[]}),this.__cache__=null};Ee.prototype.push=function(t,e,r){var n=r||{};this.__rules__.push({name:t,enabled:!0,fn:e,alt:n.alt||[]}),this.__cache__=null};Ee.prototype.enable=function(t,e){Array.isArray(t)||(t=[t]);var r=[];return t.forEach(function(n){var i=this.__find__(n);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[i].enabled=!0,r.push(n)},this),this.__cache__=null,r};Ee.prototype.enableOnly=function(t,e){Array.isArray(t)||(t=[t]),this.__rules__.forEach(function(r){r.enabled=!1}),this.enable(t,e)};Ee.prototype.disable=function(t,e){Array.isArray(t)||(t=[t]);var r=[];return t.forEach(function(n){var i=this.__find__(n);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[i].enabled=!1,r.push(n)},this),this.__cache__=null,r};Ee.prototype.getRules=function(t){return this.__cache__===null&&this.__compile__(),this.__cache__[t]||[]};ui.exports=Ee});var pi=A((ef,di)=>{"use strict";var rl=/\r\n?|\n/g,nl=/\0/g;di.exports=function(e){var r;r=e.src.replace(rl,`
// `),r=r.replace(nl,"\uFFFD"),e.src=r}});var gi=A((tf,fi)=>{"use strict";fi.exports=function(e){var r;e.inlineMode?(r=new e.Token("inline","",0),r.content=e.src,r.map=[0,1],r.children=[],e.tokens.push(r)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}});var mi=A((rf,hi)=>{"use strict";hi.exports=function(e){var r=e.tokens,n,i,o;for(i=0,o=r.length;i<o;i++)n=r[i],n.type==="inline"&&e.md.inline.parse(n.content,e.md,e.env,n.children)}});var _i=A((nf,bi)=>{"use strict";var il=W().arrayReplaceAt;function ol(t){return/^<a[>\s]/i.test(t)}function sl(t){return/^<\/a\s*>/i.test(t)}bi.exports=function(e){var r,n,i,o,a,s,c,l,u,f,p,g,b,m,k,y,_=e.tokens,w;if(e.md.options.linkify){for(n=0,i=_.length;n<i;n++)if(!(_[n].type!=="inline"||!e.md.linkify.pretest(_[n].content)))for(o=_[n].children,b=0,r=o.length-1;r>=0;r--){if(s=o[r],s.type==="link_close"){for(r--;o[r].level!==s.level&&o[r].type!=="link_open";)r--;continue}if(s.type==="html_inline"&&(ol(s.content)&&b>0&&b--,sl(s.content)&&b++),!(b>0)&&s.type==="text"&&e.md.linkify.test(s.content)){for(u=s.content,w=e.md.linkify.match(u),c=[],g=s.level,p=0,w.length>0&&w[0].index===0&&r>0&&o[r-1].type==="text_special"&&(w=w.slice(1)),l=0;l<w.length;l++)m=w[l].url,k=e.md.normalizeLink(m),e.md.validateLink(k)&&(y=w[l].text,w[l].schema?w[l].schema==="mailto:"&&!/^mailto:/i.test(y)?y=e.md.normalizeLinkText("mailto:"+y).replace(/^mailto:/,""):y=e.md.normalizeLinkText(y):y=e.md.normalizeLinkText("http://"+y).replace(/^http:\/\//,""),f=w[l].index,f>p&&(a=new e.Token("text","",0),a.content=u.slice(p,f),a.level=g,c.push(a)),a=new e.Token("link_open","a",1),a.attrs=[["href",k]],a.level=g++,a.markup="linkify",a.info="auto",c.push(a),a=new e.Token("text","",0),a.content=y,a.level=g,c.push(a),a=new e.Token("link_close","a",-1),a.level=--g,a.markup="linkify",a.info="auto",c.push(a),p=w[l].lastIndex);p<u.length&&(a=new e.Token("text","",0),a.content=u.slice(p),a.level=g,c.push(a)),_[n].children=o=il(o,r,c)}}}}});var Ei=A((of,vi)=>{"use strict";var yi=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,al=/\((c|tm|r)\)/i,cl=/\((c|tm|r)\)/ig,ll={c:"\xA9",r:"\xAE",tm:"\u2122"};function ul(t,e){return ll[e.toLowerCase()]}function dl(t){var e,r,n=0;for(e=t.length-1;e>=0;e--)r=t[e],r.type==="text"&&!n&&(r.content=r.content.replace(cl,ul)),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}function pl(t){var e,r,n=0;for(e=t.length-1;e>=0;e--)r=t[e],r.type==="text"&&!n&&yi.test(r.content)&&(r.content=r.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1\u2014").replace(/(^|\s)--(?=\s|$)/mg,"$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1\u2013")),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}vi.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)e.tokens[r].type==="inline"&&(al.test(e.tokens[r].content)&&dl(e.tokens[r].children),yi.test(e.tokens[r].content)&&pl(e.tokens[r].children))}});var Ti=A((sf,Si)=>{"use strict";var xi=W().isWhiteSpace,ki=W().isPunctChar,wi=W().isMdAsciiPunct,fl=/['"]/,Ai=/['"]/g,Ci="\u2019";function Bt(t,e,r){return t.slice(0,e)+r+t.slice(e+1)}function gl(t,e){var r,n,i,o,a,s,c,l,u,f,p,g,b,m,k,y,_,w,C,R,v;for(C=[],r=0;r<t.length;r++){for(n=t[r],c=t[r].level,_=C.length-1;_>=0&&!(C[_].level<=c);_--);if(C.length=_+1,n.type==="text"){i=n.content,a=0,s=i.length;e:for(;a<s&&(Ai.lastIndex=a,o=Ai.exec(i),!!o);){if(k=y=!0,a=o.index+1,w=o[0]==="'",u=32,o.index-1>=0)u=i.charCodeAt(o.index-1);else for(_=r-1;_>=0&&!(t[_].type==="softbreak"||t[_].type==="hardbreak");_--)if(t[_].content){u=t[_].content.charCodeAt(t[_].content.length-1);break}if(f=32,a<s)f=i.charCodeAt(a);else for(_=r+1;_<t.length&&!(t[_].type==="softbreak"||t[_].type==="hardbreak");_++)if(t[_].content){f=t[_].content.charCodeAt(0);break}if(p=wi(u)||ki(String.fromCharCode(u)),g=wi(f)||ki(String.fromCharCode(f)),b=xi(u),m=xi(f),m?k=!1:g&&(b||p||(k=!1)),b?y=!1:p&&(m||g||(y=!1)),f===34&&o[0]==='"'&&u>=48&&u<=57&&(y=k=!1),k&&y&&(k=p,y=g),!k&&!y){w&&(n.content=Bt(n.content,o.index,Ci));continue}if(y){for(_=C.length-1;_>=0&&(l=C[_],!(C[_].level<c));_--)if(l.single===w&&C[_].level===c){l=C[_],w?(R=e.md.options.quotes[2],v=e.md.options.quotes[3]):(R=e.md.options.quotes[0],v=e.md.options.quotes[1]),n.content=Bt(n.content,o.index,v),t[l.token].content=Bt(t[l.token].content,l.pos,R),a+=v.length-1,l.token===r&&(a+=R.length-1),i=n.content,s=i.length,C.length=_;continue e}}k?C.push({token:r,pos:o.index,single:w,level:c}):y&&w&&(n.content=Bt(n.content,o.index,Ci))}}}}Si.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)e.tokens[r].type!=="inline"||!fl.test(e.tokens[r].content)||gl(e.tokens[r].children,e)}});var Di=A((af,Ri)=>{"use strict";Ri.exports=function(e){var r,n,i,o,a,s,c=e.tokens;for(r=0,n=c.length;r<n;r++)if(c[r].type==="inline"){for(i=c[r].children,a=i.length,o=0;o<a;o++)i[o].type==="text_special"&&(i[o].type="text");for(o=s=0;o<a;o++)i[o].type==="text"&&o+1<a&&i[o+1].type==="text"?i[o+1].content=i[o].content+i[o+1].content:(o!==s&&(i[s]=i[o]),s++);o!==s&&(i.length=s)}}});var qt=A((cf,Ii)=>{"use strict";function et(t,e,r){this.type=t,this.tag=e,this.attrs=null,this.map=null,this.nesting=r,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}et.prototype.attrIndex=function(e){var r,n,i;if(!this.attrs)return-1;for(r=this.attrs,n=0,i=r.length;n<i;n++)if(r[n][0]===e)return n;return-1};et.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};et.prototype.attrSet=function(e,r){var n=this.attrIndex(e),i=[e,r];n<0?this.attrPush(i):this.attrs[n]=i};et.prototype.attrGet=function(e){var r=this.attrIndex(e),n=null;return r>=0&&(n=this.attrs[r][1]),n};et.prototype.attrJoin=function(e,r){var n=this.attrIndex(e);n<0?this.attrPush([e,r]):this.attrs[n][1]=this.attrs[n][1]+" "+r};Ii.exports=et});var Oi=A((lf,Ni)=>{"use strict";var hl=qt();function Mi(t,e,r){this.src=t,this.env=r,this.tokens=[],this.inlineMode=!1,this.md=e}Mi.prototype.Token=hl;Ni.exports=Mi});var Pi=A((uf,Li)=>{"use strict";var ml=Ft(),Ar=[["normalize",pi()],["block",gi()],["inline",mi()],["linkify",_i()],["replacements",Ei()],["smartquotes",Ti()],["text_join",Di()]];function Cr(){this.ruler=new ml;for(var t=0;t<Ar.length;t++)this.ruler.push(Ar[t][0],Ar[t][1])}Cr.prototype.process=function(t){var e,r,n;for(n=this.ruler.getRules(""),e=0,r=n.length;e<r;e++)n[e](t)};Cr.prototype.State=Oi();Li.exports=Cr});var qi=A((df,Bi)=>{"use strict";var Sr=W().isSpace;function Tr(t,e){var r=t.bMarks[e]+t.tShift[e],n=t.eMarks[e];return t.src.slice(r,n)}function Fi(t){var e=[],r=0,n=t.length,i,o=!1,a=0,s="";for(i=t.charCodeAt(r);r<n;)i===124&&(o?(s+=t.substring(a,r-1),a=r):(e.push(s+t.substring(a,r)),s="",a=r+1)),o=i===92,r++,i=t.charCodeAt(r);return e.push(s+t.substring(a)),e}Bi.exports=function(e,r,n,i){var o,a,s,c,l,u,f,p,g,b,m,k,y,_,w,C,R,v;if(r+2>n||(u=r+1,e.sCount[u]<e.blkIndent)||e.sCount[u]-e.blkIndent>=4||(s=e.bMarks[u]+e.tShift[u],s>=e.eMarks[u])||(R=e.src.charCodeAt(s++),R!==124&&R!==45&&R!==58)||s>=e.eMarks[u]||(v=e.src.charCodeAt(s++),v!==124&&v!==45&&v!==58&&!Sr(v))||R===45&&Sr(v))return!1;for(;s<e.eMarks[u];){if(o=e.src.charCodeAt(s),o!==124&&o!==45&&o!==58&&!Sr(o))return!1;s++}for(a=Tr(e,r+1),f=a.split("|"),b=[],c=0;c<f.length;c++){if(m=f[c].trim(),!m){if(c===0||c===f.length-1)continue;return!1}if(!/^:?-+:?$/.test(m))return!1;m.charCodeAt(m.length-1)===58?b.push(m.charCodeAt(0)===58?"center":"right"):m.charCodeAt(0)===58?b.push("left"):b.push("")}if(a=Tr(e,r).trim(),a.indexOf("|")===-1||e.sCount[r]-e.blkIndent>=4||(f=Fi(a),f.length&&f[0]===""&&f.shift(),f.length&&f[f.length-1]===""&&f.pop(),p=f.length,p===0||p!==b.length))return!1;if(i)return!0;for(_=e.parentType,e.parentType="table",C=e.md.block.ruler.getRules("blockquote"),g=e.push("table_open","table",1),g.map=k=[r,0],g=e.push("thead_open","thead",1),g.map=[r,r+1],g=e.push("tr_open","tr",1),g.map=[r,r+1],c=0;c<f.length;c++)g=e.push("th_open","th",1),b[c]&&(g.attrs=[["style","text-align:"+b[c]]]),g=e.push("inline","",0),g.content=f[c].trim(),g.children=[],g=e.push("th_close","th",-1);for(g=e.push("tr_close","tr",-1),g=e.push("thead_close","thead",-1),u=r+2;u<n&&!(e.sCount[u]<e.blkIndent);u++){for(w=!1,c=0,l=C.length;c<l;c++)if(C[c](e,u,n,!0)){w=!0;break}if(w||(a=Tr(e,u).trim(),!a)||e.sCount[u]-e.blkIndent>=4)break;for(f=Fi(a),f.length&&f[0]===""&&f.shift(),f.length&&f[f.length-1]===""&&f.pop(),u===r+2&&(g=e.push("tbody_open","tbody",1),g.map=y=[r+2,0]),g=e.push("tr_open","tr",1),g.map=[u,u+1],c=0;c<p;c++)g=e.push("td_open","td",1),b[c]&&(g.attrs=[["style","text-align:"+b[c]]]),g=e.push("inline","",0),g.content=f[c]?f[c].trim():"",g.children=[],g=e.push("td_close","td",-1);g=e.push("tr_close","tr",-1)}return y&&(g=e.push("tbody_close","tbody",-1),y[1]=u),g=e.push("table_close","table",-1),k[1]=u,e.parentType=_,e.line=u,!0}});var Hi=A((pf,zi)=>{"use strict";zi.exports=function(e,r,n){var i,o,a;if(e.sCount[r]-e.blkIndent<4)return!1;for(o=i=r+1;i<n;){if(e.isEmpty(i)){i++;continue}if(e.sCount[i]-e.blkIndent>=4){i++,o=i;continue}break}return e.line=o,a=e.push("code_block","code",0),a.content=e.getLines(r,o,4+e.blkIndent,!1)+`
// `,a.map=[r,e.line],!0}});var $i=A((ff,Ui)=>{"use strict";Ui.exports=function(e,r,n,i){var o,a,s,c,l,u,f,p=!1,g=e.bMarks[r]+e.tShift[r],b=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4||g+3>b||(o=e.src.charCodeAt(g),o!==126&&o!==96)||(l=g,g=e.skipChars(g,o),a=g-l,a<3)||(f=e.src.slice(l,g),s=e.src.slice(g,b),o===96&&s.indexOf(String.fromCharCode(o))>=0))return!1;if(i)return!0;for(c=r;c++,!(c>=n||(g=l=e.bMarks[c]+e.tShift[c],b=e.eMarks[c],g<b&&e.sCount[c]<e.blkIndent));)if(e.src.charCodeAt(g)===o&&!(e.sCount[c]-e.blkIndent>=4)&&(g=e.skipChars(g,o),!(g-l<a)&&(g=e.skipSpaces(g),!(g<b)))){p=!0;break}return a=e.sCount[r],e.line=c+(p?1:0),u=e.push("fence","code",0),u.info=s,u.content=e.getLines(r+1,c,a,!0),u.markup=f,u.map=[r,e.line],!0}});var Ki=A((gf,Gi)=>{"use strict";var bl=W().isSpace;Gi.exports=function(e,r,n,i){var o,a,s,c,l,u,f,p,g,b,m,k,y,_,w,C,R,v,B,q,j=e.lineMax,O=e.bMarks[r]+e.tShift[r],U=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4||e.src.charCodeAt(O)!==62)return!1;if(i)return!0;for(b=[],m=[],_=[],w=[],v=e.md.block.ruler.getRules("blockquote"),y=e.parentType,e.parentType="blockquote",p=r;p<n&&(q=e.sCount[p]<e.blkIndent,O=e.bMarks[p]+e.tShift[p],U=e.eMarks[p],!(O>=U));p++){if(e.src.charCodeAt(O++)===62&&!q){for(c=e.sCount[p]+1,e.src.charCodeAt(O)===32?(O++,c++,o=!1,C=!0):e.src.charCodeAt(O)===9?(C=!0,(e.bsCount[p]+c)%4===3?(O++,c++,o=!1):o=!0):C=!1,g=c,b.push(e.bMarks[p]),e.bMarks[p]=O;O<U&&(a=e.src.charCodeAt(O),bl(a));){a===9?g+=4-(g+e.bsCount[p]+(o?1:0))%4:g++;O++}u=O>=U,m.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(C?1:0),_.push(e.sCount[p]),e.sCount[p]=g-c,w.push(e.tShift[p]),e.tShift[p]=O-e.bMarks[p];continue}if(u)break;for(R=!1,s=0,l=v.length;s<l;s++)if(v[s](e,p,n,!0)){R=!0;break}if(R){e.lineMax=p,e.blkIndent!==0&&(b.push(e.bMarks[p]),m.push(e.bsCount[p]),w.push(e.tShift[p]),_.push(e.sCount[p]),e.sCount[p]-=e.blkIndent);break}b.push(e.bMarks[p]),m.push(e.bsCount[p]),w.push(e.tShift[p]),_.push(e.sCount[p]),e.sCount[p]=-1}for(k=e.blkIndent,e.blkIndent=0,B=e.push("blockquote_open","blockquote",1),B.markup=">",B.map=f=[r,0],e.md.block.tokenize(e,r,p),B=e.push("blockquote_close","blockquote",-1),B.markup=">",e.lineMax=j,e.parentType=y,f[1]=e.line,s=0;s<w.length;s++)e.bMarks[s+r]=b[s],e.tShift[s+r]=w[s],e.sCount[s+r]=_[s],e.bsCount[s+r]=m[s];return e.blkIndent=k,!0}});var Wi=A((hf,ji)=>{"use strict";var _l=W().isSpace;ji.exports=function(e,r,n,i){var o,a,s,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4||(o=e.src.charCodeAt(l++),o!==42&&o!==45&&o!==95))return!1;for(a=1;l<u;){if(s=e.src.charCodeAt(l++),s!==o&&!_l(s))return!1;s===o&&a++}return a<3?!1:(i||(e.line=r+1,c=e.push("hr","hr",0),c.map=[r,e.line],c.markup=Array(a+1).join(String.fromCharCode(o))),!0)}});var Ji=A((mf,Xi)=>{"use strict";var Yi=W().isSpace;function Zi(t,e){var r,n,i,o;return n=t.bMarks[e]+t.tShift[e],i=t.eMarks[e],r=t.src.charCodeAt(n++),r!==42&&r!==45&&r!==43||n<i&&(o=t.src.charCodeAt(n),!Yi(o))?-1:n}function Vi(t,e){var r,n=t.bMarks[e]+t.tShift[e],i=n,o=t.eMarks[e];if(i+1>=o||(r=t.src.charCodeAt(i++),r<48||r>57))return-1;for(;;){if(i>=o)return-1;if(r=t.src.charCodeAt(i++),r>=48&&r<=57){if(i-n>=10)return-1;continue}if(r===41||r===46)break;return-1}return i<o&&(r=t.src.charCodeAt(i),!Yi(r))?-1:i}function yl(t,e){var r,n,i=t.level+2;for(r=e+2,n=t.tokens.length-2;r<n;r++)t.tokens[r].level===i&&t.tokens[r].type==="paragraph_open"&&(t.tokens[r+2].hidden=!0,t.tokens[r].hidden=!0,r+=2)}Xi.exports=function(e,r,n,i){var o,a,s,c,l,u,f,p,g,b,m,k,y,_,w,C,R,v,B,q,j,O,U,te,Q,J,Y,h=r,T=!1,S=!0;if(e.sCount[h]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[h]-e.listIndent>=4&&e.sCount[h]<e.blkIndent)return!1;if(i&&e.parentType==="paragraph"&&e.sCount[h]>=e.blkIndent&&(T=!0),(O=Vi(e,h))>=0){if(f=!0,te=e.bMarks[h]+e.tShift[h],y=Number(e.src.slice(te,O-1)),T&&y!==1)return!1}else if((O=Zi(e,h))>=0)f=!1;else return!1;if(T&&e.skipSpaces(O)>=e.eMarks[h])return!1;if(i)return!0;for(k=e.src.charCodeAt(O-1),m=e.tokens.length,f?(Y=e.push("ordered_list_open","ol",1),y!==1&&(Y.attrs=[["start",y]])):Y=e.push("bullet_list_open","ul",1),Y.map=b=[h,0],Y.markup=String.fromCharCode(k),U=!1,J=e.md.block.ruler.getRules("list"),R=e.parentType,e.parentType="list";h<n;){for(j=O,_=e.eMarks[h],u=w=e.sCount[h]+O-(e.bMarks[h]+e.tShift[h]);j<_;){if(o=e.src.charCodeAt(j),o===9)w+=4-(w+e.bsCount[h])%4;else if(o===32)w++;else break;j++}if(a=j,a>=_?l=1:l=w-u,l>4&&(l=1),c=u+l,Y=e.push("list_item_open","li",1),Y.markup=String.fromCharCode(k),Y.map=p=[h,0],f&&(Y.info=e.src.slice(te,O-1)),q=e.tight,B=e.tShift[h],v=e.sCount[h],C=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=c,e.tight=!0,e.tShift[h]=a-e.bMarks[h],e.sCount[h]=w,a>=_&&e.isEmpty(h+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,h,n,!0),(!e.tight||U)&&(S=!1),U=e.line-h>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=C,e.tShift[h]=B,e.sCount[h]=v,e.tight=q,Y=e.push("list_item_close","li",-1),Y.markup=String.fromCharCode(k),h=e.line,p[1]=h,h>=n||e.sCount[h]<e.blkIndent||e.sCount[h]-e.blkIndent>=4)break;for(Q=!1,s=0,g=J.length;s<g;s++)if(J[s](e,h,n,!0)){Q=!0;break}if(Q)break;if(f){if(O=Vi(e,h),O<0)break;te=e.bMarks[h]+e.tShift[h]}else if(O=Zi(e,h),O<0)break;if(k!==e.src.charCodeAt(O-1))break}return f?Y=e.push("ordered_list_close","ol",-1):Y=e.push("bullet_list_close","ul",-1),Y.markup=String.fromCharCode(k),b[1]=h,e.line=h,e.parentType=R,S&&yl(e,m),!0}});var eo=A((bf,Qi)=>{"use strict";var vl=W().normalizeReference,zt=W().isSpace;Qi.exports=function(e,r,n,i){var o,a,s,c,l,u,f,p,g,b,m,k,y,_,w,C,R=0,v=e.bMarks[r]+e.tShift[r],B=e.eMarks[r],q=r+1;if(e.sCount[r]-e.blkIndent>=4||e.src.charCodeAt(v)!==91)return!1;for(;++v<B;)if(e.src.charCodeAt(v)===93&&e.src.charCodeAt(v-1)!==92){if(v+1===B||e.src.charCodeAt(v+1)!==58)return!1;break}for(c=e.lineMax,w=e.md.block.ruler.getRules("reference"),b=e.parentType,e.parentType="reference";q<c&&!e.isEmpty(q);q++)if(!(e.sCount[q]-e.blkIndent>3)&&!(e.sCount[q]<0)){for(_=!1,u=0,f=w.length;u<f;u++)if(w[u](e,q,c,!0)){_=!0;break}if(_)break}for(y=e.getLines(r,q,e.blkIndent,!1).trim(),B=y.length,v=1;v<B;v++){if(o=y.charCodeAt(v),o===91)return!1;if(o===93){g=v;break}else o===10?R++:o===92&&(v++,v<B&&y.charCodeAt(v)===10&&R++)}if(g<0||y.charCodeAt(g+1)!==58)return!1;for(v=g+2;v<B;v++)if(o=y.charCodeAt(v),o===10)R++;else if(!zt(o))break;if(m=e.md.helpers.parseLinkDestination(y,v,B),!m.ok||(l=e.md.normalizeLink(m.str),!e.md.validateLink(l)))return!1;for(v=m.pos,R+=m.lines,a=v,s=R,k=v;v<B;v++)if(o=y.charCodeAt(v),o===10)R++;else if(!zt(o))break;for(m=e.md.helpers.parseLinkTitle(y,v,B),v<B&&k!==v&&m.ok?(C=m.str,v=m.pos,R+=m.lines):(C="",v=a,R=s);v<B&&(o=y.charCodeAt(v),!!zt(o));)v++;if(v<B&&y.charCodeAt(v)!==10&&C)for(C="",v=a,R=s;v<B&&(o=y.charCodeAt(v),!!zt(o));)v++;return v<B&&y.charCodeAt(v)!==10||(p=vl(y.slice(1,g)),!p)?!1:(i||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[p]>"u"&&(e.env.references[p]={title:C,href:l}),e.parentType=b,e.line=r+R+1),!0)}});var ro=A((_f,to)=>{"use strict";to.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]});var Dr=A((yf,Rr)=>{"use strict";var El="[a-zA-Z_:][a-zA-Z0-9:._-]*",xl="[^\"'=<>`\\x00-\\x20]+",kl="'[^']*'",wl='"[^"]*"',Al="(?:"+xl+"|"+kl+"|"+wl+")",Cl="(?:\\s+"+El+"(?:\\s*=\\s*"+Al+")?)",no="<[A-Za-z][A-Za-z0-9\\-]*"+Cl+"*\\s*\\/?>",io="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Sl="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",Tl="<[?][\\s\\S]*?[?]>",Rl="<![A-Z]+\\s+[^>]*>",Dl="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Il=new RegExp("^(?:"+no+"|"+io+"|"+Sl+"|"+Tl+"|"+Rl+"|"+Dl+")"),Ml=new RegExp("^(?:"+no+"|"+io+")");Rr.exports.HTML_TAG_RE=Il;Rr.exports.HTML_OPEN_CLOSE_TAG_RE=Ml});var so=A((vf,oo)=>{"use strict";var Nl=ro(),Ol=Dr().HTML_OPEN_CLOSE_TAG_RE,tt=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Nl.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Ol.source+"\\s*$"),/^$/,!1]];oo.exports=function(e,r,n,i){var o,a,s,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(l)!==60)return!1;for(c=e.src.slice(l,u),o=0;o<tt.length&&!tt[o][0].test(c);o++);if(o===tt.length)return!1;if(i)return tt[o][2];if(a=r+1,!tt[o][1].test(c)){for(;a<n&&!(e.sCount[a]<e.blkIndent);a++)if(l=e.bMarks[a]+e.tShift[a],u=e.eMarks[a],c=e.src.slice(l,u),tt[o][1].test(c)){c.length!==0&&a++;break}}return e.line=a,s=e.push("html_block","",0),s.map=[r,a],s.content=e.getLines(r,a,e.blkIndent,!0),!0}});var lo=A((Ef,co)=>{"use strict";var ao=W().isSpace;co.exports=function(e,r,n,i){var o,a,s,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4||(o=e.src.charCodeAt(l),o!==35||l>=u))return!1;for(a=1,o=e.src.charCodeAt(++l);o===35&&l<u&&a<=6;)a++,o=e.src.charCodeAt(++l);return a>6||l<u&&!ao(o)?!1:(i||(u=e.skipSpacesBack(u,l),s=e.skipCharsBack(u,35,l),s>l&&ao(e.src.charCodeAt(s-1))&&(u=s),e.line=r+1,c=e.push("heading_open","h"+String(a),1),c.markup="########".slice(0,a),c.map=[r,e.line],c=e.push("inline","",0),c.content=e.src.slice(l,u).trim(),c.map=[r,e.line],c.children=[],c=e.push("heading_close","h"+String(a),-1),c.markup="########".slice(0,a)),!0)}});var po=A((xf,uo)=>{"use strict";uo.exports=function(e,r,n){var i,o,a,s,c,l,u,f,p,g=r+1,b,m=e.md.block.ruler.getRules("paragraph");if(e.sCount[r]-e.blkIndent>=4)return!1;for(b=e.parentType,e.parentType="paragraph";g<n&&!e.isEmpty(g);g++)if(!(e.sCount[g]-e.blkIndent>3)){if(e.sCount[g]>=e.blkIndent&&(l=e.bMarks[g]+e.tShift[g],u=e.eMarks[g],l<u&&(p=e.src.charCodeAt(l),(p===45||p===61)&&(l=e.skipChars(l,p),l=e.skipSpaces(l),l>=u)))){f=p===61?1:2;break}if(!(e.sCount[g]<0)){for(o=!1,a=0,s=m.length;a<s;a++)if(m[a](e,g,n,!0)){o=!0;break}if(o)break}}return f?(i=e.getLines(r,g,e.blkIndent,!1).trim(),e.line=g+1,c=e.push("heading_open","h"+String(f),1),c.markup=String.fromCharCode(p),c.map=[r,e.line],c=e.push("inline","",0),c.content=i,c.map=[r,e.line-1],c.children=[],c=e.push("heading_close","h"+String(f),-1),c.markup=String.fromCharCode(p),e.parentType=b,!0):!1}});var go=A((kf,fo)=>{"use strict";fo.exports=function(e,r,n){var i,o,a,s,c,l,u=r+1,f=e.md.block.ruler.getRules("paragraph");for(l=e.parentType,e.parentType="paragraph";u<n&&!e.isEmpty(u);u++)if(!(e.sCount[u]-e.blkIndent>3)&&!(e.sCount[u]<0)){for(o=!1,a=0,s=f.length;a<s;a++)if(f[a](e,u,n,!0)){o=!0;break}if(o)break}return i=e.getLines(r,u,e.blkIndent,!1).trim(),e.line=u,c=e.push("paragraph_open","p",1),c.map=[r,e.line],c=e.push("inline","",0),c.content=i,c.map=[r,e.line],c.children=[],c=e.push("paragraph_close","p",-1),e.parentType=l,!0}});var bo=A((wf,mo)=>{"use strict";var ho=qt(),Ht=W().isSpace;function Te(t,e,r,n){var i,o,a,s,c,l,u,f;for(this.src=t,this.md=e,this.env=r,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",o=this.src,f=!1,a=s=l=u=0,c=o.length;s<c;s++){if(i=o.charCodeAt(s),!f)if(Ht(i)){l++,i===9?u+=4-u%4:u++;continue}else f=!0;(i===10||s===c-1)&&(i!==10&&s++,this.bMarks.push(a),this.eMarks.push(s),this.tShift.push(l),this.sCount.push(u),this.bsCount.push(0),f=!1,l=0,u=0,a=s+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Te.prototype.push=function(t,e,r){var n=new ho(t,e,r);return n.block=!0,r<0&&this.level--,n.level=this.level,r>0&&this.level++,this.tokens.push(n),n};Te.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};Te.prototype.skipEmptyLines=function(e){for(var r=this.lineMax;e<r&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};Te.prototype.skipSpaces=function(e){for(var r,n=this.src.length;e<n&&(r=this.src.charCodeAt(e),!!Ht(r));e++);return e};Te.prototype.skipSpacesBack=function(e,r){if(e<=r)return e;for(;e>r;)if(!Ht(this.src.charCodeAt(--e)))return e+1;return e};Te.prototype.skipChars=function(e,r){for(var n=this.src.length;e<n&&this.src.charCodeAt(e)===r;e++);return e};Te.prototype.skipCharsBack=function(e,r,n){if(e<=n)return e;for(;e>n;)if(r!==this.src.charCodeAt(--e))return e+1;return e};Te.prototype.getLines=function(e,r,n,i){var o,a,s,c,l,u,f,p=e;if(e>=r)return"";for(u=new Array(r-e),o=0;p<r;p++,o++){for(a=0,f=c=this.bMarks[p],p+1<r||i?l=this.eMarks[p]+1:l=this.eMarks[p];c<l&&a<n;){if(s=this.src.charCodeAt(c),Ht(s))s===9?a+=4-(a+this.bsCount[p])%4:a++;else if(c-f<this.tShift[p])a++;else break;c++}a>n?u[o]=new Array(a-n+1).join(" ")+this.src.slice(c,l):u[o]=this.src.slice(c,l)}return u.join("")};Te.prototype.Token=ho;mo.exports=Te});var yo=A((Af,_o)=>{"use strict";var Ll=Ft(),Ut=[["table",qi(),["paragraph","reference"]],["code",Hi()],["fence",$i(),["paragraph","reference","blockquote","list"]],["blockquote",Ki(),["paragraph","reference","blockquote","list"]],["hr",Wi(),["paragraph","reference","blockquote","list"]],["list",Ji(),["paragraph","reference","blockquote"]],["reference",eo()],["html_block",so(),["paragraph","reference","blockquote"]],["heading",lo(),["paragraph","reference","blockquote"]],["lheading",po()],["paragraph",go()]];function $t(){this.ruler=new Ll;for(var t=0;t<Ut.length;t++)this.ruler.push(Ut[t][0],Ut[t][1],{alt:(Ut[t][2]||[]).slice()})}$t.prototype.tokenize=function(t,e,r){for(var n,i,o,a=this.ruler.getRules(""),s=a.length,c=e,l=!1,u=t.md.options.maxNesting;c<r&&(t.line=c=t.skipEmptyLines(c),!(c>=r||t.sCount[c]<t.blkIndent));){if(t.level>=u){t.line=r;break}for(o=t.line,i=0;i<s;i++)if(n=a[i](t,c,r,!1),n){if(o>=t.line)throw new Error("block rule didn't increment state.line");break}if(!n)throw new Error("none of the block rules matched");t.tight=!l,t.isEmpty(t.line-1)&&(l=!0),c=t.line,c<r&&t.isEmpty(c)&&(l=!0,c++,t.line=c)}};$t.prototype.parse=function(t,e,r,n){var i;t&&(i=new this.State(t,e,r,n),this.tokenize(i,i.line,i.lineMax))};$t.prototype.State=bo();_o.exports=$t});var Eo=A((Cf,vo)=>{"use strict";function Pl(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}vo.exports=function(e,r){for(var n=e.pos;n<e.posMax&&!Pl(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(r||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}});var ko=A((Sf,xo)=>{"use strict";var Fl=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;xo.exports=function(e,r){var n,i,o,a,s,c,l,u;return!e.md.options.linkify||e.linkLevel>0||(n=e.pos,i=e.posMax,n+3>i)||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47||(o=e.pending.match(Fl),!o)||(a=o[1],s=e.md.linkify.matchAtStart(e.src.slice(n-a.length)),!s)||(c=s.url,c.length<=a.length)||(c=c.replace(/\*+$/,""),l=e.md.normalizeLink(c),!e.md.validateLink(l))?!1:(r||(e.pending=e.pending.slice(0,-a.length),u=e.push("link_open","a",1),u.attrs=[["href",l]],u.markup="linkify",u.info="auto",u=e.push("text","",0),u.content=e.md.normalizeLinkText(c),u=e.push("link_close","a",-1),u.markup="linkify",u.info="auto"),e.pos+=c.length-a.length,!0)}});var Ao=A((Tf,wo)=>{"use strict";var Bl=W().isSpace;wo.exports=function(e,r){var n,i,o,a=e.pos;if(e.src.charCodeAt(a)!==10)return!1;if(n=e.pending.length-1,i=e.posMax,!r)if(n>=0&&e.pending.charCodeAt(n)===32)if(n>=1&&e.pending.charCodeAt(n-1)===32){for(o=n-1;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(a++;a<i&&Bl(e.src.charCodeAt(a));)a++;return e.pos=a,!0}});var So=A((Rf,Co)=>{"use strict";var ql=W().isSpace,Mr=[];for(Ir=0;Ir<256;Ir++)Mr.push(0);var Ir;"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t){Mr[t.charCodeAt(0)]=1});Co.exports=function(e,r){var n,i,o,a,s,c=e.pos,l=e.posMax;if(e.src.charCodeAt(c)!==92||(c++,c>=l))return!1;if(n=e.src.charCodeAt(c),n===10){for(r||e.push("hardbreak","br",0),c++;c<l&&(n=e.src.charCodeAt(c),!!ql(n));)c++;return e.pos=c,!0}return a=e.src[c],n>=55296&&n<=56319&&c+1<l&&(i=e.src.charCodeAt(c+1),i>=56320&&i<=57343&&(a+=e.src[c+1],c++)),o="\\"+a,r||(s=e.push("text_special","",0),n<256&&Mr[n]!==0?s.content=a:s.content=o,s.markup=o,s.info="escape"),e.pos=c+1,!0}});var Ro=A((Df,To)=>{"use strict";To.exports=function(e,r){var n,i,o,a,s,c,l,u,f=e.pos,p=e.src.charCodeAt(f);if(p!==96)return!1;for(n=f,f++,i=e.posMax;f<i&&e.src.charCodeAt(f)===96;)f++;if(o=e.src.slice(n,f),l=o.length,e.backticksScanned&&(e.backticks[l]||0)<=n)return r||(e.pending+=o),e.pos+=l,!0;for(c=f;(s=e.src.indexOf("`",c))!==-1;){for(c=s+1;c<i&&e.src.charCodeAt(c)===96;)c++;if(u=c-s,u===l)return r||(a=e.push("code_inline","code",0),a.markup=o,a.content=e.src.slice(f,s).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=c,!0;e.backticks[u]=s}return e.backticksScanned=!0,r||(e.pending+=o),e.pos+=l,!0}});var Or=A((If,Nr)=>{"use strict";Nr.exports.tokenize=function(e,r){var n,i,o,a,s,c=e.pos,l=e.src.charCodeAt(c);if(r||l!==126||(i=e.scanDelims(e.pos,!0),a=i.length,s=String.fromCharCode(l),a<2))return!1;for(a%2&&(o=e.push("text","",0),o.content=s,a--),n=0;n<a;n+=2)o=e.push("text","",0),o.content=s+s,e.delimiters.push({marker:l,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0};function Do(t,e){var r,n,i,o,a,s=[],c=e.length;for(r=0;r<c;r++)i=e[r],i.marker===126&&i.end!==-1&&(o=e[i.end],a=t.tokens[i.token],a.type="s_open",a.tag="s",a.nesting=1,a.markup="~~",a.content="",a=t.tokens[o.token],a.type="s_close",a.tag="s",a.nesting=-1,a.markup="~~",a.content="",t.tokens[o.token-1].type==="text"&&t.tokens[o.token-1].content==="~"&&s.push(o.token-1));for(;s.length;){for(r=s.pop(),n=r+1;n<t.tokens.length&&t.tokens[n].type==="s_close";)n++;n--,r!==n&&(a=t.tokens[n],t.tokens[n]=t.tokens[r],t.tokens[r]=a)}}Nr.exports.postProcess=function(e){var r,n=e.tokens_meta,i=e.tokens_meta.length;for(Do(e,e.delimiters),r=0;r<i;r++)n[r]&&n[r].delimiters&&Do(e,n[r].delimiters)}});var Pr=A((Mf,Lr)=>{"use strict";Lr.exports.tokenize=function(e,r){var n,i,o,a=e.pos,s=e.src.charCodeAt(a);if(r||s!==95&&s!==42)return!1;for(i=e.scanDelims(e.pos,s===42),n=0;n<i.length;n++)o=e.push("text","",0),o.content=String.fromCharCode(s),e.delimiters.push({marker:s,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0};function Io(t,e){var r,n,i,o,a,s,c=e.length;for(r=c-1;r>=0;r--)n=e[r],!(n.marker!==95&&n.marker!==42)&&n.end!==-1&&(i=e[n.end],s=r>0&&e[r-1].end===n.end+1&&e[r-1].marker===n.marker&&e[r-1].token===n.token-1&&e[n.end+1].token===i.token+1,a=String.fromCharCode(n.marker),o=t.tokens[n.token],o.type=s?"strong_open":"em_open",o.tag=s?"strong":"em",o.nesting=1,o.markup=s?a+a:a,o.content="",o=t.tokens[i.token],o.type=s?"strong_close":"em_close",o.tag=s?"strong":"em",o.nesting=-1,o.markup=s?a+a:a,o.content="",s&&(t.tokens[e[r-1].token].content="",t.tokens[e[n.end+1].token].content="",r--))}Lr.exports.postProcess=function(e){var r,n=e.tokens_meta,i=e.tokens_meta.length;for(Io(e,e.delimiters),r=0;r<i;r++)n[r]&&n[r].delimiters&&Io(e,n[r].delimiters)}});var No=A((Nf,Mo)=>{"use strict";var zl=W().normalizeReference,Fr=W().isSpace;Mo.exports=function(e,r){var n,i,o,a,s,c,l,u,f,p="",g="",b=e.pos,m=e.posMax,k=e.pos,y=!0;if(e.src.charCodeAt(e.pos)!==91||(s=e.pos+1,a=e.md.helpers.parseLinkLabel(e,e.pos,!0),a<0))return!1;if(c=a+1,c<m&&e.src.charCodeAt(c)===40){for(y=!1,c++;c<m&&(i=e.src.charCodeAt(c),!(!Fr(i)&&i!==10));c++);if(c>=m)return!1;if(k=c,l=e.md.helpers.parseLinkDestination(e.src,c,e.posMax),l.ok){for(p=e.md.normalizeLink(l.str),e.md.validateLink(p)?c=l.pos:p="",k=c;c<m&&(i=e.src.charCodeAt(c),!(!Fr(i)&&i!==10));c++);if(l=e.md.helpers.parseLinkTitle(e.src,c,e.posMax),c<m&&k!==c&&l.ok)for(g=l.str,c=l.pos;c<m&&(i=e.src.charCodeAt(c),!(!Fr(i)&&i!==10));c++);}(c>=m||e.src.charCodeAt(c)!==41)&&(y=!0),c++}if(y){if(typeof e.env.references>"u")return!1;if(c<m&&e.src.charCodeAt(c)===91?(k=c+1,c=e.md.helpers.parseLinkLabel(e,c),c>=0?o=e.src.slice(k,c++):c=a+1):c=a+1,o||(o=e.src.slice(s,a)),u=e.env.references[zl(o)],!u)return e.pos=b,!1;p=u.href,g=u.title}return r||(e.pos=s,e.posMax=a,f=e.push("link_open","a",1),f.attrs=n=[["href",p]],g&&n.push(["title",g]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,f=e.push("link_close","a",-1)),e.pos=c,e.posMax=m,!0}});var Lo=A((Of,Oo)=>{"use strict";var Hl=W().normalizeReference,Br=W().isSpace;Oo.exports=function(e,r){var n,i,o,a,s,c,l,u,f,p,g,b,m,k="",y=e.pos,_=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(c=e.pos+2,s=e.md.helpers.parseLinkLabel(e,e.pos+1,!1),s<0))return!1;if(l=s+1,l<_&&e.src.charCodeAt(l)===40){for(l++;l<_&&(i=e.src.charCodeAt(l),!(!Br(i)&&i!==10));l++);if(l>=_)return!1;for(m=l,f=e.md.helpers.parseLinkDestination(e.src,l,e.posMax),f.ok&&(k=e.md.normalizeLink(f.str),e.md.validateLink(k)?l=f.pos:k=""),m=l;l<_&&(i=e.src.charCodeAt(l),!(!Br(i)&&i!==10));l++);if(f=e.md.helpers.parseLinkTitle(e.src,l,e.posMax),l<_&&m!==l&&f.ok)for(p=f.str,l=f.pos;l<_&&(i=e.src.charCodeAt(l),!(!Br(i)&&i!==10));l++);else p="";if(l>=_||e.src.charCodeAt(l)!==41)return e.pos=y,!1;l++}else{if(typeof e.env.references>"u")return!1;if(l<_&&e.src.charCodeAt(l)===91?(m=l+1,l=e.md.helpers.parseLinkLabel(e,l),l>=0?a=e.src.slice(m,l++):l=s+1):l=s+1,a||(a=e.src.slice(c,s)),u=e.env.references[Hl(a)],!u)return e.pos=y,!1;k=u.href,p=u.title}return r||(o=e.src.slice(c,s),e.md.inline.parse(o,e.md,e.env,b=[]),g=e.push("image","img",0),g.attrs=n=[["src",k],["alt",""]],g.children=b,g.content=o,p&&n.push(["title",p])),e.pos=l,e.posMax=_,!0}});var Fo=A((Lf,Po)=>{"use strict";var Ul=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,$l=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;Po.exports=function(e,r){var n,i,o,a,s,c,l=e.pos;if(e.src.charCodeAt(l)!==60)return!1;for(s=e.pos,c=e.posMax;;){if(++l>=c||(a=e.src.charCodeAt(l),a===60))return!1;if(a===62)break}return n=e.src.slice(s+1,l),$l.test(n)?(i=e.md.normalizeLink(n),e.md.validateLink(i)?(r||(o=e.push("link_open","a",1),o.attrs=[["href",i]],o.markup="autolink",o.info="auto",o=e.push("text","",0),o.content=e.md.normalizeLinkText(n),o=e.push("link_close","a",-1),o.markup="autolink",o.info="auto"),e.pos+=n.length+2,!0):!1):Ul.test(n)?(i=e.md.normalizeLink("mailto:"+n),e.md.validateLink(i)?(r||(o=e.push("link_open","a",1),o.attrs=[["href",i]],o.markup="autolink",o.info="auto",o=e.push("text","",0),o.content=e.md.normalizeLinkText(n),o=e.push("link_close","a",-1),o.markup="autolink",o.info="auto"),e.pos+=n.length+2,!0):!1):!1}});var qo=A((Pf,Bo)=>{"use strict";var Gl=Dr().HTML_TAG_RE;function Kl(t){return/^<a[>\s]/i.test(t)}function jl(t){return/^<\/a\s*>/i.test(t)}function Wl(t){var e=t|32;return e>=97&&e<=122}Bo.exports=function(e,r){var n,i,o,a,s=e.pos;return!e.md.options.html||(o=e.posMax,e.src.charCodeAt(s)!==60||s+2>=o)||(n=e.src.charCodeAt(s+1),n!==33&&n!==63&&n!==47&&!Wl(n))||(i=e.src.slice(s).match(Gl),!i)?!1:(r||(a=e.push("html_inline","",0),a.content=i[0],Kl(a.content)&&e.linkLevel++,jl(a.content)&&e.linkLevel--),e.pos+=i[0].length,!0)}});var $o=A((Ff,Uo)=>{"use strict";var zo=vr(),Zl=W().has,Vl=W().isValidEntityCode,Ho=W().fromCodePoint,Yl=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Xl=/^&([a-z][a-z0-9]{1,31});/i;Uo.exports=function(e,r){var n,i,o,a,s=e.pos,c=e.posMax;if(e.src.charCodeAt(s)!==38||s+1>=c)return!1;if(n=e.src.charCodeAt(s+1),n===35){if(o=e.src.slice(s).match(Yl),o)return r||(i=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),a=e.push("text_special","",0),a.content=Vl(i)?Ho(i):Ho(65533),a.markup=o[0],a.info="entity"),e.pos+=o[0].length,!0}else if(o=e.src.slice(s).match(Xl),o&&Zl(zo,o[1]))return r||(a=e.push("text_special","",0),a.content=zo[o[1]],a.markup=o[0],a.info="entity"),e.pos+=o[0].length,!0;return!1}});var jo=A((Bf,Ko)=>{"use strict";function Go(t){var e,r,n,i,o,a,s,c,l={},u=t.length;if(u){var f=0,p=-2,g=[];for(e=0;e<u;e++)if(n=t[e],g.push(0),(t[f].marker!==n.marker||p!==n.token-1)&&(f=e),p=n.token,n.length=n.length||0,!!n.close){for(l.hasOwnProperty(n.marker)||(l[n.marker]=[-1,-1,-1,-1,-1,-1]),o=l[n.marker][(n.open?3:0)+n.length%3],r=f-g[f]-1,a=r;r>o;r-=g[r]+1)if(i=t[r],i.marker===n.marker&&i.open&&i.end<0&&(s=!1,(i.close||n.open)&&(i.length+n.length)%3===0&&(i.length%3!==0||n.length%3!==0)&&(s=!0),!s)){c=r>0&&!t[r-1].open?g[r-1]+1:0,g[e]=e-r+c,g[r]=c,n.open=!1,i.end=e,i.close=!1,a=-1,p=-2;break}a!==-1&&(l[n.marker][(n.open?3:0)+(n.length||0)%3]=a)}}}Ko.exports=function(e){var r,n=e.tokens_meta,i=e.tokens_meta.length;for(Go(e.delimiters),r=0;r<i;r++)n[r]&&n[r].delimiters&&Go(n[r].delimiters)}});var Zo=A((qf,Wo)=>{"use strict";Wo.exports=function(e){var r,n,i=0,o=e.tokens,a=e.tokens.length;for(r=n=0;r<a;r++)o[r].nesting<0&&i--,o[r].level=i,o[r].nesting>0&&i++,o[r].type==="text"&&r+1<a&&o[r+1].type==="text"?o[r+1].content=o[r].content+o[r+1].content:(r!==n&&(o[n]=o[r]),n++);r!==n&&(o.length=n)}});var Qo=A((zf,Jo)=>{"use strict";var qr=qt(),Vo=W().isWhiteSpace,Yo=W().isPunctChar,Xo=W().isMdAsciiPunct;function ft(t,e,r,n){this.src=t,this.env=r,this.md=e,this.tokens=n,this.tokens_meta=Array(n.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}ft.prototype.pushPending=function(){var t=new qr("text","",0);return t.content=this.pending,t.level=this.pendingLevel,this.tokens.push(t),this.pending="",t};ft.prototype.push=function(t,e,r){this.pending&&this.pushPending();var n=new qr(t,e,r),i=null;return r<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),n.level=this.level,r>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(n),this.tokens_meta.push(i),n};ft.prototype.scanDelims=function(t,e){var r=t,n,i,o,a,s,c,l,u,f,p=!0,g=!0,b=this.posMax,m=this.src.charCodeAt(t);for(n=t>0?this.src.charCodeAt(t-1):32;r<b&&this.src.charCodeAt(r)===m;)r++;return o=r-t,i=r<b?this.src.charCodeAt(r):32,l=Xo(n)||Yo(String.fromCharCode(n)),f=Xo(i)||Yo(String.fromCharCode(i)),c=Vo(n),u=Vo(i),u?p=!1:f&&(c||l||(p=!1)),c?g=!1:l&&(u||f||(g=!1)),e?(a=p,s=g):(a=p&&(!g||l),s=g&&(!p||f)),{can_open:a,can_close:s,length:o}};ft.prototype.Token=qr;Jo.exports=ft});var rs=A((Hf,ts)=>{"use strict";var es=Ft(),zr=[["text",Eo()],["linkify",ko()],["newline",Ao()],["escape",So()],["backticks",Ro()],["strikethrough",Or().tokenize],["emphasis",Pr().tokenize],["link",No()],["image",Lo()],["autolink",Fo()],["html_inline",qo()],["entity",$o()]],Hr=[["balance_pairs",jo()],["strikethrough",Or().postProcess],["emphasis",Pr().postProcess],["fragments_join",Zo()]];function gt(){var t;for(this.ruler=new es,t=0;t<zr.length;t++)this.ruler.push(zr[t][0],zr[t][1]);for(this.ruler2=new es,t=0;t<Hr.length;t++)this.ruler2.push(Hr[t][0],Hr[t][1])}gt.prototype.skipToken=function(t){var e,r,n=t.pos,i=this.ruler.getRules(""),o=i.length,a=t.md.options.maxNesting,s=t.cache;if(typeof s[n]<"u"){t.pos=s[n];return}if(t.level<a){for(r=0;r<o;r++)if(t.level++,e=i[r](t,!0),t.level--,e){if(n>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}else t.pos=t.posMax;e||t.pos++,s[n]=t.pos};gt.prototype.tokenize=function(t){for(var e,r,n,i=this.ruler.getRules(""),o=i.length,a=t.posMax,s=t.md.options.maxNesting;t.pos<a;){if(n=t.pos,t.level<s){for(r=0;r<o;r++)if(e=i[r](t,!1),e){if(n>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}if(e){if(t.pos>=a)break;continue}t.pending+=t.src[t.pos++]}t.pending&&t.pushPending()};gt.prototype.parse=function(t,e,r,n){var i,o,a,s=new this.State(t,e,r,n);for(this.tokenize(s),o=this.ruler2.getRules(""),a=o.length,i=0;i<a;i++)o[i](s)};gt.prototype.State=Qo();ts.exports=gt});var is=A((Uf,ns)=>{"use strict";ns.exports=function(t){var e={};t=t||{},e.src_Any=xr().source,e.src_Cc=kr().source,e.src_Z=wr().source,e.src_P=Mt().source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var r="[><\uFF5C]";return e.src_pseudo_letter="(?:(?!"+r+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+r+"|"+e.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+r+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+r+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}});var ls=A(($f,cs)=>{"use strict";function Ur(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(r){r&&Object.keys(r).forEach(function(n){t[n]=r[n]})}),t}function Kt(t){return Object.prototype.toString.call(t)}function Jl(t){return Kt(t)==="[object String]"}function Ql(t){return Kt(t)==="[object Object]"}function eu(t){return Kt(t)==="[object RegExp]"}function os(t){return Kt(t)==="[object Function]"}function tu(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var as={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function ru(t){return Object.keys(t||{}).reduce(function(e,r){return e||as.hasOwnProperty(r)},!1)}var nu={"http:":{validate:function(t,e,r){var n=t.slice(e);return r.re.http||(r.re.http=new RegExp("^\\/\\/"+r.re.src_auth+r.re.src_host_port_strict+r.re.src_path,"i")),r.re.http.test(n)?n.match(r.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,r){var n=t.slice(e);return r.re.no_http||(r.re.no_http=new RegExp("^"+r.re.src_auth+"(?:localhost|(?:(?:"+r.re.src_domain+")\\.)+"+r.re.src_domain_root+")"+r.re.src_port+r.re.src_host_terminator+r.re.src_path,"i")),r.re.no_http.test(n)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:n.match(r.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,r){var n=t.slice(e);return r.re.mailto||(r.re.mailto=new RegExp("^"+r.re.src_email_name+"@"+r.re.src_host_strict,"i")),r.re.mailto.test(n)?n.match(r.re.mailto)[0].length:0}}},iu="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",ou="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function su(t){t.__index__=-1,t.__text_cache__=""}function au(t){return function(e,r){var n=e.slice(r);return t.test(n)?n.match(t)[0].length:0}}function ss(){return function(t,e){e.normalize(t)}}function Gt(t){var e=t.re=is()(t.__opts__),r=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||r.push(iu),r.push(e.src_xn),e.src_tlds=r.join("|");function n(s){return s.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(n(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(n(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(n(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(n(e.tpl_host_fuzzy_test),"i");var i=[];t.__compiled__={};function o(s,c){throw new Error('(LinkifyIt) Invalid schema "'+s+'": '+c)}Object.keys(t.__schemas__).forEach(function(s){var c=t.__schemas__[s];if(c!==null){var l={validate:null,link:null};if(t.__compiled__[s]=l,Ql(c)){eu(c.validate)?l.validate=au(c.validate):os(c.validate)?l.validate=c.validate:o(s,c),os(c.normalize)?l.normalize=c.normalize:c.normalize?o(s,c):l.normalize=ss();return}if(Jl(c)){i.push(s);return}o(s,c)}}),i.forEach(function(s){t.__compiled__[t.__schemas__[s]]&&(t.__compiled__[s].validate=t.__compiled__[t.__schemas__[s]].validate,t.__compiled__[s].normalize=t.__compiled__[t.__schemas__[s]].normalize)}),t.__compiled__[""]={validate:null,normalize:ss()};var a=Object.keys(t.__compiled__).filter(function(s){return s.length>0&&t.__compiled__[s]}).map(tu).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+a+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+a+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),su(t)}function cu(t,e){var r=t.__index__,n=t.__last_index__,i=t.__text_cache__.slice(r,n);this.schema=t.__schema__.toLowerCase(),this.index=r+e,this.lastIndex=n+e,this.raw=i,this.text=i,this.url=i}function $r(t,e){var r=new cu(t,e);return t.__compiled__[r.schema].normalize(r,t),r}function me(t,e){if(!(this instanceof me))return new me(t,e);e||ru(t)&&(e=t,t={}),this.__opts__=Ur({},as,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Ur({},nu,t),this.__compiled__={},this.__tlds__=ou,this.__tlds_replaced__=!1,this.re={},Gt(this)}me.prototype.add=function(e,r){return this.__schemas__[e]=r,Gt(this),this};me.prototype.set=function(e){return this.__opts__=Ur(this.__opts__,e),this};me.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var r,n,i,o,a,s,c,l,u;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(r=c.exec(e))!==null;)if(o=this.testSchemaAt(e,r[2],c.lastIndex),o){this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=e.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(n=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=n.index+n[1].length,(this.__index__<0||a<this.__index__)&&(this.__schema__="",this.__index__=a,this.__last_index__=n.index+n[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(u=e.indexOf("@"),u>=0&&(i=e.match(this.re.email_fuzzy))!==null&&(a=i.index+i[1].length,s=i.index+i[0].length,(this.__index__<0||a<this.__index__||a===this.__index__&&s>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=a,this.__last_index__=s))),this.__index__>=0};me.prototype.pretest=function(e){return this.re.pretest.test(e)};me.prototype.testSchemaAt=function(e,r,n){return this.__compiled__[r.toLowerCase()]?this.__compiled__[r.toLowerCase()].validate(e,n,this):0};me.prototype.match=function(e){var r=0,n=[];this.__index__>=0&&this.__text_cache__===e&&(n.push($r(this,r)),r=this.__last_index__);for(var i=r?e.slice(r):e;this.test(i);)n.push($r(this,r)),i=i.slice(this.__last_index__),r+=this.__last_index__;return n.length?n:null};me.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;var r=this.re.schema_at_start.exec(e);if(!r)return null;var n=this.testSchemaAt(e,r[2],r[0].length);return n?(this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+n,$r(this,0)):null};me.prototype.tlds=function(e,r){return e=Array.isArray(e)?e:[e],r?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(n,i,o){return n!==o[i-1]}).reverse(),Gt(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Gt(this),this)};me.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};me.prototype.onCompile=function(){};cs.exports=me});var _s=A((Gf,bs)=>{"use strict";var ds="-",lu=/^xn--/,uu=/[^\0-\x7F]/,du=/[\x2E\u3002\uFF0E\uFF61]/g,pu={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Gr=35,Re=Math.floor,Kr=String.fromCharCode;function Be(t){throw new RangeError(pu[t])}function fu(t,e){let r=[],n=t.length;for(;n--;)r[n]=e(t[n]);return r}function ps(t,e){let r=t.split("@"),n="";r.length>1&&(n=r[0]+"@",t=r[1]),t=t.replace(du,".");let i=t.split("."),o=fu(i,e).join(".");return n+o}function fs(t){let e=[],r=0,n=t.length;for(;r<n;){let i=t.charCodeAt(r++);if(i>=55296&&i<=56319&&r<n){let o=t.charCodeAt(r++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),r--)}else e.push(i)}return e}var gu=t=>String.fromCodePoint(...t),hu=function(t){return t>=48&&t<58?26+(t-48):t>=65&&t<91?t-65:t>=97&&t<123?t-97:36},us=function(t,e){return t+22+75*(t<26)-((e!=0)<<5)},gs=function(t,e,r){let n=0;for(t=r?Re(t/700):t>>1,t+=Re(t/e);t>Gr*26>>1;n+=36)t=Re(t/Gr);return Re(n+(Gr+1)*t/(t+38))},hs=function(t){let e=[],r=t.length,n=0,i=128,o=72,a=t.lastIndexOf(ds);a<0&&(a=0);for(let s=0;s<a;++s)t.charCodeAt(s)>=128&&Be("not-basic"),e.push(t.charCodeAt(s));for(let s=a>0?a+1:0;s<r;){let c=n;for(let u=1,f=36;;f+=36){s>=r&&Be("invalid-input");let p=hu(t.charCodeAt(s++));p>=36&&Be("invalid-input"),p>Re((2147483647-n)/u)&&Be("overflow"),n+=p*u;let g=f<=o?1:f>=o+26?26:f-o;if(p<g)break;let b=36-g;u>Re(2147483647/b)&&Be("overflow"),u*=b}let l=e.length+1;o=gs(n-c,l,c==0),Re(n/l)>2147483647-i&&Be("overflow"),i+=Re(n/l),n%=l,e.splice(n++,0,i)}return String.fromCodePoint(...e)},ms=function(t){let e=[];t=fs(t);let r=t.length,n=128,i=0,o=72;for(let c of t)c<128&&e.push(Kr(c));let a=e.length,s=a;for(a&&e.push(ds);s<r;){let c=2147483647;for(let u of t)u>=n&&u<c&&(c=u);let l=s+1;c-n>Re((2147483647-i)/l)&&Be("overflow"),i+=(c-n)*l,n=c;for(let u of t)if(u<n&&++i>2147483647&&Be("overflow"),u===n){let f=i;for(let p=36;;p+=36){let g=p<=o?1:p>=o+26?26:p-o;if(f<g)break;let b=f-g,m=36-g;e.push(Kr(us(g+b%m,0))),f=Re(b/m)}e.push(Kr(us(f,0))),o=gs(i,l,s===a),i=0,++s}++i,++n}return e.join("")},mu=function(t){return ps(t,function(e){return lu.test(e)?hs(e.slice(4).toLowerCase()):e})},bu=function(t){return ps(t,function(e){return uu.test(e)?"xn--"+ms(e):e})},_u={version:"2.3.1",ucs2:{decode:fs,encode:gu},decode:hs,encode:ms,toASCII:bu,toUnicode:mu};bs.exports=_u});var vs=A((Kf,ys)=>{"use strict";ys.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}});var xs=A((jf,Es)=>{"use strict";Es.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}}});var ws=A((Wf,ks)=>{"use strict";ks.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}}});var Ts=A((Zf,Ss)=>{"use strict";var ht=W(),yu=ai(),vu=li(),Eu=Pi(),xu=yo(),ku=rs(),wu=ls(),Ue=Er(),As=_s(),Au={default:vs(),zero:xs(),commonmark:ws()},Cu=/^(vbscript|javascript|file|data):/,Su=/^data:image\/(gif|png|jpeg|webp);/;function Tu(t){var e=t.trim().toLowerCase();return Cu.test(e)?!!Su.test(e):!0}var Cs=["http:","https:","mailto:"];function Ru(t){var e=Ue.parse(t,!0);if(e.hostname&&(!e.protocol||Cs.indexOf(e.protocol)>=0))try{e.hostname=As.toASCII(e.hostname)}catch{}return Ue.encode(Ue.format(e))}function Du(t){var e=Ue.parse(t,!0);if(e.hostname&&(!e.protocol||Cs.indexOf(e.protocol)>=0))try{e.hostname=As.toUnicode(e.hostname)}catch{}return Ue.decode(Ue.format(e),Ue.decode.defaultChars+"%")}function _e(t,e){if(!(this instanceof _e))return new _e(t,e);e||ht.isString(t)||(e=t||{},t="default"),this.inline=new ku,this.block=new xu,this.core=new Eu,this.renderer=new vu,this.linkify=new wu,this.validateLink=Tu,this.normalizeLink=Ru,this.normalizeLinkText=Du,this.utils=ht,this.helpers=ht.assign({},yu),this.options={},this.configure(t),e&&this.set(e)}_e.prototype.set=function(t){return ht.assign(this.options,t),this};_e.prototype.configure=function(t){var e=this,r;if(ht.isString(t)&&(r=t,t=Au[r],!t))throw new Error('Wrong `markdown-it` preset "'+r+'", check name');if(!t)throw new Error("Wrong `markdown-it` preset, can't be empty");return t.options&&e.set(t.options),t.components&&Object.keys(t.components).forEach(function(n){t.components[n].rules&&e[n].ruler.enableOnly(t.components[n].rules),t.components[n].rules2&&e[n].ruler2.enableOnly(t.components[n].rules2)}),this};_e.prototype.enable=function(t,e){var r=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(i){r=r.concat(this[i].ruler.enable(t,!0))},this),r=r.concat(this.inline.ruler2.enable(t,!0));var n=t.filter(function(i){return r.indexOf(i)<0});if(n.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this};_e.prototype.disable=function(t,e){var r=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(i){r=r.concat(this[i].ruler.disable(t,!0))},this),r=r.concat(this.inline.ruler2.disable(t,!0));var n=t.filter(function(i){return r.indexOf(i)<0});if(n.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this};_e.prototype.use=function(t){var e=[this].concat(Array.prototype.slice.call(arguments,1));return t.apply(t,e),this};_e.prototype.parse=function(t,e){if(typeof t!="string")throw new Error("Input data should be a String");var r=new this.core.State(t,this,e);return this.core.process(r),r.tokens};_e.prototype.render=function(t,e){return e=e||{},this.renderer.render(this.parse(t,e),this.options,e)};_e.prototype.parseInline=function(t,e){var r=new this.core.State(t,this,e);return r.inlineMode=!0,this.core.process(r),r.tokens};_e.prototype.renderInline=function(t,e){return e=e||{},this.renderer.render(this.parseInline(t,e),this.options,e)};Ss.exports=_e});var Ds=A((Vf,Rs)=>{"use strict";Rs.exports=Ts()});var Qr=A((Yf,Ks)=>{"use strict";var{entries:zs,setPrototypeOf:Is,isFrozen:Iu,getPrototypeOf:Mu,getOwnPropertyDescriptor:Nu}=Object,{freeze:pe,seal:ye,create:Hs}=Object,{apply:Xr,construct:Jr}=typeof Reflect<"u"&&Reflect;pe||(pe=function(e){return e});ye||(ye=function(e){return e});Xr||(Xr=function(e,r,n){return e.apply(r,n)});Jr||(Jr=function(e,r){return new e(...r)});var jt=fe(Array.prototype.forEach),Ou=fe(Array.prototype.lastIndexOf),Ms=fe(Array.prototype.pop),mt=fe(Array.prototype.push),Lu=fe(Array.prototype.splice),Zt=fe(String.prototype.toLowerCase),jr=fe(String.prototype.toString),Ns=fe(String.prototype.match),bt=fe(String.prototype.replace),Pu=fe(String.prototype.indexOf),Fu=fe(String.prototype.trim),xe=fe(Object.prototype.hasOwnProperty),de=fe(RegExp.prototype.test),_t=Bu(TypeError);function fe(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return Xr(t,e,n)}}function Bu(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return Jr(t,r)}}function z(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Zt;Is&&Is(t,null);let n=e.length;for(;n--;){let i=e[n];if(typeof i=="string"){let o=r(i);o!==i&&(Iu(e)||(e[n]=o),i=o)}t[i]=!0}return t}function qu(t){for(let e=0;e<t.length;e++)xe(t,e)||(t[e]=null);return t}function Le(t){let e=Hs(null);for(let[r,n]of zs(t))xe(t,r)&&(Array.isArray(n)?e[r]=qu(n):n&&typeof n=="object"&&n.constructor===Object?e[r]=Le(n):e[r]=n);return e}function yt(t,e){for(;t!==null;){let n=Nu(t,e);if(n){if(n.get)return fe(n.get);if(typeof n.value=="function")return fe(n.value)}t=Mu(t)}function r(){return null}return r}var Os=pe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Wr=pe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Zr=pe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),zu=pe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Vr=pe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Hu=pe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ls=pe(["#text"]),Ps=pe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Yr=pe(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Fs=pe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Wt=pe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Uu=ye(/\{\{[\w\W]*|[\w\W]*\}\}/gm),$u=ye(/<%[\w\W]*|[\w\W]*%>/gm),Gu=ye(/\$\{[\w\W]*/gm),Ku=ye(/^data-[\-\w.\u00B7-\uFFFF]+$/),ju=ye(/^aria-[\-\w]+$/),Us=ye(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Wu=ye(/^(?:\w+script|data):/i),Zu=ye(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$s=ye(/^html$/i),Vu=ye(/^[a-z][.\w]*(-[.\w]+)+$/i),Bs=Object.freeze({__proto__:null,ARIA_ATTR:ju,ATTR_WHITESPACE:Zu,CUSTOM_ELEMENT:Vu,DATA_ATTR:Ku,DOCTYPE_NAME:$s,ERB_EXPR:$u,IS_ALLOWED_URI:Us,IS_SCRIPT_OR_DATA:Wu,MUSTACHE_EXPR:Uu,TMPLIT_EXPR:Gu}),vt={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Yu=function(){return typeof window>"u"?null:window},Xu=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,i="data-tt-policy-suffix";r&&r.hasAttribute(i)&&(n=r.getAttribute(i));let o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},qs=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Gs(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Yu(),e=M=>Gs(M);if(e.version="3.2.6",e.removed=[],!t||!t.document||t.document.nodeType!==vt.document||!t.Element)return e.isSupported=!1,e;let{document:r}=t,n=r,i=n.currentScript,{DocumentFragment:o,HTMLTemplateElement:a,Node:s,Element:c,NodeFilter:l,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:f,DOMParser:p,trustedTypes:g}=t,b=c.prototype,m=yt(b,"cloneNode"),k=yt(b,"remove"),y=yt(b,"nextSibling"),_=yt(b,"childNodes"),w=yt(b,"parentNode");if(typeof a=="function"){let M=r.createElement("template");M.content&&M.content.ownerDocument&&(r=M.content.ownerDocument)}let C,R="",{implementation:v,createNodeIterator:B,createDocumentFragment:q,getElementsByTagName:j}=r,{importNode:O}=n,U=qs();e.isSupported=typeof zs=="function"&&typeof w=="function"&&v&&v.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:te,ERB_EXPR:Q,TMPLIT_EXPR:J,DATA_ATTR:Y,ARIA_ATTR:h,IS_SCRIPT_OR_DATA:T,ATTR_WHITESPACE:S,CUSTOM_ELEMENT:L}=Bs,{IS_ALLOWED_URI:$}=Bs,F=null,ie=z({},[...Os,...Wr,...Zr,...Vr,...Ls]),V=null,ce=z({},[...Ps,...Yr,...Fs,...Wt]),G=Object.seal(Hs(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Pe=null,Ke=null,st=!0,at=!0,kt=!1,wt=!0,Fe=!1,De=!0,ke=!1,ge=!1,ct=!1,we=!1,N=!1,ze=!1,re=!0,Z=!1,je="user-content-",ve=!0,Ie=!1,Ae={},x=null,D=z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),P=null,K=z({},["audio","video","img","source","image","track"]),ne=null,be=z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),We="http://www.w3.org/1998/Math/MathML",Ze="http://www.w3.org/2000/svg",Me="http://www.w3.org/1999/xhtml",Ve=Me,gr=!1,hr=null,tc=z({},[We,Ze,Me],jr),At=z({},["mi","mo","mn","ms","mtext"]),Ct=z({},["annotation-xml"]),rc=z({},["title","style","font","a","script"]),lt=null,nc=["application/xhtml+xml","text/html"],ic="text/html",ae=null,Ye=null,oc=r.createElement("form"),un=function(d){return d instanceof RegExp||d instanceof Function},mr=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ye&&Ye===d)){if((!d||typeof d!="object")&&(d={}),d=Le(d),lt=nc.indexOf(d.PARSER_MEDIA_TYPE)===-1?ic:d.PARSER_MEDIA_TYPE,ae=lt==="application/xhtml+xml"?jr:Zt,F=xe(d,"ALLOWED_TAGS")?z({},d.ALLOWED_TAGS,ae):ie,V=xe(d,"ALLOWED_ATTR")?z({},d.ALLOWED_ATTR,ae):ce,hr=xe(d,"ALLOWED_NAMESPACES")?z({},d.ALLOWED_NAMESPACES,jr):tc,ne=xe(d,"ADD_URI_SAFE_ATTR")?z(Le(be),d.ADD_URI_SAFE_ATTR,ae):be,P=xe(d,"ADD_DATA_URI_TAGS")?z(Le(K),d.ADD_DATA_URI_TAGS,ae):K,x=xe(d,"FORBID_CONTENTS")?z({},d.FORBID_CONTENTS,ae):D,Pe=xe(d,"FORBID_TAGS")?z({},d.FORBID_TAGS,ae):Le({}),Ke=xe(d,"FORBID_ATTR")?z({},d.FORBID_ATTR,ae):Le({}),Ae=xe(d,"USE_PROFILES")?d.USE_PROFILES:!1,st=d.ALLOW_ARIA_ATTR!==!1,at=d.ALLOW_DATA_ATTR!==!1,kt=d.ALLOW_UNKNOWN_PROTOCOLS||!1,wt=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Fe=d.SAFE_FOR_TEMPLATES||!1,De=d.SAFE_FOR_XML!==!1,ke=d.WHOLE_DOCUMENT||!1,we=d.RETURN_DOM||!1,N=d.RETURN_DOM_FRAGMENT||!1,ze=d.RETURN_TRUSTED_TYPE||!1,ct=d.FORCE_BODY||!1,re=d.SANITIZE_DOM!==!1,Z=d.SANITIZE_NAMED_PROPS||!1,ve=d.KEEP_CONTENT!==!1,Ie=d.IN_PLACE||!1,$=d.ALLOWED_URI_REGEXP||Us,Ve=d.NAMESPACE||Me,At=d.MATHML_TEXT_INTEGRATION_POINTS||At,Ct=d.HTML_INTEGRATION_POINTS||Ct,G=d.CUSTOM_ELEMENT_HANDLING||{},d.CUSTOM_ELEMENT_HANDLING&&un(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(G.tagNameCheck=d.CUSTOM_ELEMENT_HANDLING.tagNameCheck),d.CUSTOM_ELEMENT_HANDLING&&un(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(G.attributeNameCheck=d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),d.CUSTOM_ELEMENT_HANDLING&&typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(G.allowCustomizedBuiltInElements=d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fe&&(at=!1),N&&(we=!0),Ae&&(F=z({},Ls),V=[],Ae.html===!0&&(z(F,Os),z(V,Ps)),Ae.svg===!0&&(z(F,Wr),z(V,Yr),z(V,Wt)),Ae.svgFilters===!0&&(z(F,Zr),z(V,Yr),z(V,Wt)),Ae.mathMl===!0&&(z(F,Vr),z(V,Fs),z(V,Wt))),d.ADD_TAGS&&(F===ie&&(F=Le(F)),z(F,d.ADD_TAGS,ae)),d.ADD_ATTR&&(V===ce&&(V=Le(V)),z(V,d.ADD_ATTR,ae)),d.ADD_URI_SAFE_ATTR&&z(ne,d.ADD_URI_SAFE_ATTR,ae),d.FORBID_CONTENTS&&(x===D&&(x=Le(x)),z(x,d.FORBID_CONTENTS,ae)),ve&&(F["#text"]=!0),ke&&z(F,["html","head","body"]),F.table&&(z(F,["tbody"]),delete Pe.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw _t('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw _t('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');C=d.TRUSTED_TYPES_POLICY,R=C.createHTML("")}else C===void 0&&(C=Xu(g,i)),C!==null&&typeof R=="string"&&(R=C.createHTML(""));pe&&pe(d),Ye=d}},dn=z({},[...Wr,...Zr,...zu]),pn=z({},[...Vr,...Hu]),sc=function(d){let E=w(d);(!E||!E.tagName)&&(E={namespaceURI:Ve,tagName:"template"});let I=Zt(d.tagName),X=Zt(E.tagName);return hr[d.namespaceURI]?d.namespaceURI===Ze?E.namespaceURI===Me?I==="svg":E.namespaceURI===We?I==="svg"&&(X==="annotation-xml"||At[X]):!!dn[I]:d.namespaceURI===We?E.namespaceURI===Me?I==="math":E.namespaceURI===Ze?I==="math"&&Ct[X]:!!pn[I]:d.namespaceURI===Me?E.namespaceURI===Ze&&!Ct[X]||E.namespaceURI===We&&!At[X]?!1:!pn[I]&&(rc[I]||!dn[I]):!!(lt==="application/xhtml+xml"&&hr[d.namespaceURI]):!1},Ce=function(d){mt(e.removed,{element:d});try{w(d).removeChild(d)}catch{k(d)}},Xe=function(d,E){try{mt(e.removed,{attribute:E.getAttributeNode(d),from:E})}catch{mt(e.removed,{attribute:null,from:E})}if(E.removeAttribute(d),d==="is")if(we||N)try{Ce(E)}catch{}else try{E.setAttribute(d,"")}catch{}},fn=function(d){let E=null,I=null;if(ct)d="<remove></remove>"+d;else{let oe=Ns(d,/^[\r\n\t ]+/);I=oe&&oe[0]}lt==="application/xhtml+xml"&&Ve===Me&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");let X=C?C.createHTML(d):d;if(Ve===Me)try{E=new p().parseFromString(X,lt)}catch{}if(!E||!E.documentElement){E=v.createDocument(Ve,"template",null);try{E.documentElement.innerHTML=gr?R:X}catch{}}let le=E.body||E.documentElement;return d&&I&&le.insertBefore(r.createTextNode(I),le.childNodes[0]||null),Ve===Me?j.call(E,ke?"html":"body")[0]:ke?E.documentElement:le},gn=function(d){return B.call(d.ownerDocument||d,d,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},br=function(d){return d instanceof f&&(typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||!(d.attributes instanceof u)||typeof d.removeAttribute!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function")},hn=function(d){return typeof s=="function"&&d instanceof s};function Ne(M,d,E){jt(M,I=>{I.call(e,d,E,Ye)})}let mn=function(d){let E=null;if(Ne(U.beforeSanitizeElements,d,null),br(d))return Ce(d),!0;let I=ae(d.nodeName);if(Ne(U.uponSanitizeElement,d,{tagName:I,allowedTags:F}),De&&d.hasChildNodes()&&!hn(d.firstElementChild)&&de(/<[/\w!]/g,d.innerHTML)&&de(/<[/\w!]/g,d.textContent)||d.nodeType===vt.progressingInstruction||De&&d.nodeType===vt.comment&&de(/<[/\w]/g,d.data))return Ce(d),!0;if(!F[I]||Pe[I]){if(!Pe[I]&&_n(I)&&(G.tagNameCheck instanceof RegExp&&de(G.tagNameCheck,I)||G.tagNameCheck instanceof Function&&G.tagNameCheck(I)))return!1;if(ve&&!x[I]){let X=w(d)||d.parentNode,le=_(d)||d.childNodes;if(le&&X){let oe=le.length;for(let he=oe-1;he>=0;--he){let Oe=m(le[he],!0);Oe.__removalCount=(d.__removalCount||0)+1,X.insertBefore(Oe,y(d))}}}return Ce(d),!0}return d instanceof c&&!sc(d)||(I==="noscript"||I==="noembed"||I==="noframes")&&de(/<\/no(script|embed|frames)/i,d.innerHTML)?(Ce(d),!0):(Fe&&d.nodeType===vt.text&&(E=d.textContent,jt([te,Q,J],X=>{E=bt(E,X," ")}),d.textContent!==E&&(mt(e.removed,{element:d.cloneNode()}),d.textContent=E)),Ne(U.afterSanitizeElements,d,null),!1)},bn=function(d,E,I){if(re&&(E==="id"||E==="name")&&(I in r||I in oc))return!1;if(!(at&&!Ke[E]&&de(Y,E))){if(!(st&&de(h,E))){if(!V[E]||Ke[E]){if(!(_n(d)&&(G.tagNameCheck instanceof RegExp&&de(G.tagNameCheck,d)||G.tagNameCheck instanceof Function&&G.tagNameCheck(d))&&(G.attributeNameCheck instanceof RegExp&&de(G.attributeNameCheck,E)||G.attributeNameCheck instanceof Function&&G.attributeNameCheck(E))||E==="is"&&G.allowCustomizedBuiltInElements&&(G.tagNameCheck instanceof RegExp&&de(G.tagNameCheck,I)||G.tagNameCheck instanceof Function&&G.tagNameCheck(I))))return!1}else if(!ne[E]){if(!de($,bt(I,S,""))){if(!((E==="src"||E==="xlink:href"||E==="href")&&d!=="script"&&Pu(I,"data:")===0&&P[d])){if(!(kt&&!de(T,bt(I,S,"")))){if(I)return!1}}}}}}return!0},_n=function(d){return d!=="annotation-xml"&&Ns(d,L)},yn=function(d){Ne(U.beforeSanitizeAttributes,d,null);let{attributes:E}=d;if(!E||br(d))return;let I={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:V,forceKeepAttr:void 0},X=E.length;for(;X--;){let le=E[X],{name:oe,namespaceURI:he,value:Oe}=le,ut=ae(oe),_r=Oe,ue=oe==="value"?_r:Fu(_r);if(I.attrName=ut,I.attrValue=ue,I.keepAttr=!0,I.forceKeepAttr=void 0,Ne(U.uponSanitizeAttribute,d,I),ue=I.attrValue,Z&&(ut==="id"||ut==="name")&&(Xe(oe,d),ue=je+ue),De&&de(/((--!?|])>)|<\/(style|title)/i,ue)){Xe(oe,d);continue}if(I.forceKeepAttr)continue;if(!I.keepAttr){Xe(oe,d);continue}if(!wt&&de(/\/>/i,ue)){Xe(oe,d);continue}Fe&&jt([te,Q,J],En=>{ue=bt(ue,En," ")});let vn=ae(d.nodeName);if(!bn(vn,ut,ue)){Xe(oe,d);continue}if(C&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!he)switch(g.getAttributeType(vn,ut)){case"TrustedHTML":{ue=C.createHTML(ue);break}case"TrustedScriptURL":{ue=C.createScriptURL(ue);break}}if(ue!==_r)try{he?d.setAttributeNS(he,oe,ue):d.setAttribute(oe,ue),br(d)?Ce(d):Ms(e.removed)}catch{Xe(oe,d)}}Ne(U.afterSanitizeAttributes,d,null)},ac=function M(d){let E=null,I=gn(d);for(Ne(U.beforeSanitizeShadowDOM,d,null);E=I.nextNode();)Ne(U.uponSanitizeShadowNode,E,null),mn(E),yn(E),E.content instanceof o&&M(E.content);Ne(U.afterSanitizeShadowDOM,d,null)};return e.sanitize=function(M){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=null,I=null,X=null,le=null;if(gr=!M,gr&&(M="<!-->"),typeof M!="string"&&!hn(M))if(typeof M.toString=="function"){if(M=M.toString(),typeof M!="string")throw _t("dirty is not a string, aborting")}else throw _t("toString is not a function");if(!e.isSupported)return M;if(ge||mr(d),e.removed=[],typeof M=="string"&&(Ie=!1),Ie){if(M.nodeName){let Oe=ae(M.nodeName);if(!F[Oe]||Pe[Oe])throw _t("root node is forbidden and cannot be sanitized in-place")}}else if(M instanceof s)E=fn("<!---->"),I=E.ownerDocument.importNode(M,!0),I.nodeType===vt.element&&I.nodeName==="BODY"||I.nodeName==="HTML"?E=I:E.appendChild(I);else{if(!we&&!Fe&&!ke&&M.indexOf("<")===-1)return C&&ze?C.createHTML(M):M;if(E=fn(M),!E)return we?null:ze?R:""}E&&ct&&Ce(E.firstChild);let oe=gn(Ie?M:E);for(;X=oe.nextNode();)mn(X),yn(X),X.content instanceof o&&ac(X.content);if(Ie)return M;if(we){if(N)for(le=q.call(E.ownerDocument);E.firstChild;)le.appendChild(E.firstChild);else le=E;return(V.shadowroot||V.shadowrootmode)&&(le=O.call(n,le,!0)),le}let he=ke?E.outerHTML:E.innerHTML;return ke&&F["!doctype"]&&E.ownerDocument&&E.ownerDocument.doctype&&E.ownerDocument.doctype.name&&de($s,E.ownerDocument.doctype.name)&&(he="<!DOCTYPE "+E.ownerDocument.doctype.name+`>
// `+he),Fe&&jt([te,Q,J],Oe=>{he=bt(he,Oe," ")}),C&&ze?C.createHTML(he):he},e.setConfig=function(){let M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};mr(M),ge=!0},e.clearConfig=function(){Ye=null,ge=!1},e.isValidAttribute=function(M,d,E){Ye||mr({});let I=ae(M),X=ae(d);return bn(I,X,E)},e.addHook=function(M,d){typeof d=="function"&&mt(U[M],d)},e.removeHook=function(M,d){if(d!==void 0){let E=Ou(U[M],d);return E===-1?void 0:Lu(U[M],E,1)[0]}return Ms(U[M])},e.removeHooks=function(M){U[M]=[]},e.removeAllHooks=function(){U=qs()},e}var Ju=Gs();Ks.exports=Ju});var Ws=A((Xf,js)=>{js.exports=window.DOMPurify||(window.DOMPurify=Qr().default||Qr())});var fa=A((Jf,pa)=>{function ea(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(e=>{let r=t[e],n=typeof r;(n==="object"||n==="function")&&!Object.isFrozen(r)&&ea(r)}),t}var Yt=class{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function ta(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function qe(t,...e){let r=Object.create(null);for(let n in t)r[n]=t[n];return e.forEach(function(n){for(let i in n)r[i]=n[i]}),r}var Qu="</span>",Zs=t=>!!t.scope,ed=(t,{prefix:e})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){let r=t.split(".");return[`${e}${r.shift()}`,...r.map((n,i)=>`${n}${"_".repeat(i+1)}`)].join(" ")}return`${e}${t}`},tn=class{constructor(e,r){this.buffer="",this.classPrefix=r.classPrefix,e.walk(this)}addText(e){this.buffer+=ta(e)}openNode(e){if(!Zs(e))return;let r=ed(e.scope,{prefix:this.classPrefix});this.span(r)}closeNode(e){Zs(e)&&(this.buffer+=Qu)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}},Vs=(t={})=>{let e={children:[]};return Object.assign(e,t),e},rn=class t{constructor(){this.rootNode=Vs(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){let r=Vs({scope:e});this.add(r),this.stack.push(r)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,r){return typeof r=="string"?e.addText(r):r.children&&(e.openNode(r),r.children.forEach(n=>this._walk(e,n)),e.closeNode(r)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(r=>typeof r=="string")?e.children=[e.children.join("")]:e.children.forEach(r=>{t._collapse(r)}))}},nn=class extends rn{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,r){let n=e.root;r&&(n.scope=`language:${r}`),this.add(n)}toHTML(){return new tn(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}};function Et(t){return t?typeof t=="string"?t:t.source:null}function ra(t){return Ge("(?=",t,")")}function td(t){return Ge("(?:",t,")*")}function rd(t){return Ge("(?:",t,")?")}function Ge(...t){return t.map(r=>Et(r)).join("")}function nd(t){let e=t[t.length-1];return typeof e=="object"&&e.constructor===Object?(t.splice(t.length-1,1),e):{}}function sn(...t){return"("+(nd(t).capture?"":"?:")+t.map(n=>Et(n)).join("|")+")"}function na(t){return new RegExp(t.toString()+"|").exec("").length-1}function id(t,e){let r=t&&t.exec(e);return r&&r.index===0}var od=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function an(t,{joinWith:e}){let r=0;return t.map(n=>{r+=1;let i=r,o=Et(n),a="";for(;o.length>0;){let s=od.exec(o);if(!s){a+=o;break}a+=o.substring(0,s.index),o=o.substring(s.index+s[0].length),s[0][0]==="\\"&&s[1]?a+="\\"+String(Number(s[1])+i):(a+=s[0],s[0]==="("&&r++)}return a}).map(n=>`(${n})`).join(e)}var sd=/\b\B/,ia="[a-zA-Z]\\w*",cn="[a-zA-Z_]\\w*",oa="\\b\\d+(\\.\\d+)?",sa="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",aa="\\b(0b[01]+)",ad="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",cd=(t={})=>{let e=/^#![ ]*\//;return t.binary&&(t.begin=Ge(e,/.*\b/,t.binary,/\b.*/)),qe({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(r,n)=>{r.index!==0&&n.ignoreMatch()}},t)},xt={begin:"\\\\[\\s\\S]",relevance:0},ld={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[xt]},ud={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[xt]},dd={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Jt=function(t,e,r={}){let n=qe({scope:"comment",begin:t,end:e,contains:[]},r);n.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});let i=sn("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return n.contains.push({begin:Ge(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),n},pd=Jt("//","$"),fd=Jt("/\\*","\\*/"),gd=Jt("#","$"),hd={scope:"number",begin:oa,relevance:0},md={scope:"number",begin:sa,relevance:0},bd={scope:"number",begin:aa,relevance:0},_d={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[xt,{begin:/\[/,end:/\]/,relevance:0,contains:[xt]}]},yd={scope:"title",begin:ia,relevance:0},vd={scope:"title",begin:cn,relevance:0},Ed={begin:"\\.\\s*"+cn,relevance:0},xd=function(t){return Object.assign(t,{"on:begin":(e,r)=>{r.data._beginMatch=e[1]},"on:end":(e,r)=>{r.data._beginMatch!==e[1]&&r.ignoreMatch()}})},Vt=Object.freeze({__proto__:null,APOS_STRING_MODE:ld,BACKSLASH_ESCAPE:xt,BINARY_NUMBER_MODE:bd,BINARY_NUMBER_RE:aa,COMMENT:Jt,C_BLOCK_COMMENT_MODE:fd,C_LINE_COMMENT_MODE:pd,C_NUMBER_MODE:md,C_NUMBER_RE:sa,END_SAME_AS_BEGIN:xd,HASH_COMMENT_MODE:gd,IDENT_RE:ia,MATCH_NOTHING_RE:sd,METHOD_GUARD:Ed,NUMBER_MODE:hd,NUMBER_RE:oa,PHRASAL_WORDS_MODE:dd,QUOTE_STRING_MODE:ud,REGEXP_MODE:_d,RE_STARTERS_RE:ad,SHEBANG:cd,TITLE_MODE:yd,UNDERSCORE_IDENT_RE:cn,UNDERSCORE_TITLE_MODE:vd});function kd(t,e){t.input[t.index-1]==="."&&e.ignoreMatch()}function wd(t,e){t.className!==void 0&&(t.scope=t.className,delete t.className)}function Ad(t,e){e&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=kd,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function Cd(t,e){Array.isArray(t.illegal)&&(t.illegal=sn(...t.illegal))}function Sd(t,e){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function Td(t,e){t.relevance===void 0&&(t.relevance=1)}var Rd=(t,e)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");let r=Object.assign({},t);Object.keys(t).forEach(n=>{delete t[n]}),t.keywords=r.keywords,t.begin=Ge(r.beforeMatch,ra(r.begin)),t.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},t.relevance=0,delete r.beforeMatch},Dd=["of","and","for","in","not","or","if","then","parent","list","value"],Id="keyword";function ca(t,e,r=Id){let n=Object.create(null);return typeof t=="string"?i(r,t.split(" ")):Array.isArray(t)?i(r,t):Object.keys(t).forEach(function(o){Object.assign(n,ca(t[o],e,o))}),n;function i(o,a){e&&(a=a.map(s=>s.toLowerCase())),a.forEach(function(s){let c=s.split("|");n[c[0]]=[o,Md(c[0],c[1])]})}}function Md(t,e){return e?Number(e):Nd(t)?0:1}function Nd(t){return Dd.includes(t.toLowerCase())}var Ys={},$e=t=>{console.error(t)},Xs=(t,...e)=>{console.log(`WARN: ${t}`,...e)},rt=(t,e)=>{Ys[`${t}/${e}`]||(console.log(`Deprecated as of ${t}. ${e}`),Ys[`${t}/${e}`]=!0)},Xt=new Error;function la(t,e,{key:r}){let n=0,i=t[r],o={},a={};for(let s=1;s<=e.length;s++)a[s+n]=i[s],o[s+n]=!0,n+=na(e[s-1]);t[r]=a,t[r]._emit=o,t[r]._multi=!0}function Od(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw $e("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Xt;if(typeof t.beginScope!="object"||t.beginScope===null)throw $e("beginScope must be object"),Xt;la(t,t.begin,{key:"beginScope"}),t.begin=an(t.begin,{joinWith:""})}}function Ld(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw $e("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Xt;if(typeof t.endScope!="object"||t.endScope===null)throw $e("endScope must be object"),Xt;la(t,t.end,{key:"endScope"}),t.end=an(t.end,{joinWith:""})}}function Pd(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function Fd(t){Pd(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),Od(t),Ld(t)}function Bd(t){function e(a,s){return new RegExp(Et(a),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(s?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,s]),this.matchAt+=na(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);let s=this.regexes.map(c=>c[1]);this.matcherRe=e(an(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;let c=this.matcherRe.exec(s);if(!c)return null;let l=c.findIndex((f,p)=>p>0&&f!==void 0),u=this.matchIndexes[l];return c.splice(0,l),Object.assign(c,u)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];let c=new r;return this.rules.slice(s).forEach(([l,u])=>c.addRule(l,u)),c.compile(),this.multiRegexes[s]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,c){this.rules.push([s,c]),c.type==="begin"&&this.count++}exec(s){let c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let l=c.exec(s);if(this.resumingScanAtSamePosition()&&!(l&&l.index===this.lastIndex)){let u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,l=u.exec(s)}return l&&(this.regexIndex+=l.position+1,this.regexIndex===this.count&&this.considerAll()),l}}function i(a){let s=new n;return a.contains.forEach(c=>s.addRule(c.begin,{rule:c,type:"begin"})),a.terminatorEnd&&s.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&s.addRule(a.illegal,{type:"illegal"}),s}function o(a,s){let c=a;if(a.isCompiled)return c;[wd,Sd,Fd,Rd].forEach(u=>u(a,s)),t.compilerExtensions.forEach(u=>u(a,s)),a.__beforeBegin=null,[Ad,Cd,Td].forEach(u=>u(a,s)),a.isCompiled=!0;let l=null;return typeof a.keywords=="object"&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),l=a.keywords.$pattern,delete a.keywords.$pattern),l=l||/\w+/,a.keywords&&(a.keywords=ca(a.keywords,t.case_insensitive)),c.keywordPatternRe=e(l,!0),s&&(a.begin||(a.begin=/\B|\b/),c.beginRe=e(c.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(c.endRe=e(c.end)),c.terminatorEnd=Et(c.end)||"",a.endsWithParent&&s.terminatorEnd&&(c.terminatorEnd+=(a.end?"|":"")+s.terminatorEnd)),a.illegal&&(c.illegalRe=e(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(u){return qd(u==="self"?a:u)})),a.contains.forEach(function(u){o(u,c)}),a.starts&&o(a.starts,s),c.matcher=i(c),c}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=qe(t.classNameAliases||{}),o(t)}function ua(t){return t?t.endsWithParent||ua(t.starts):!1}function qd(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(e){return qe(t,{variants:null},e)})),t.cachedVariants?t.cachedVariants:ua(t)?qe(t,{starts:t.starts?qe(t.starts):null}):Object.isFrozen(t)?qe(t):t}var zd="11.11.1",on=class extends Error{constructor(e,r){super(e),this.name="HTMLInjectionError",this.html=r}},en=ta,Js=qe,Qs=Symbol("nomatch"),Hd=7,da=function(t){let e=Object.create(null),r=Object.create(null),n=[],i=!0,o="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]},s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:nn};function c(h){return s.noHighlightRe.test(h)}function l(h){let T=h.className+" ";T+=h.parentNode?h.parentNode.className:"";let S=s.languageDetectRe.exec(T);if(S){let L=q(S[1]);return L||(Xs(o.replace("{}",S[1])),Xs("Falling back to no-highlight mode for this block.",h)),L?S[1]:"no-highlight"}return T.split(/\s+/).find(L=>c(L)||q(L))}function u(h,T,S){let L="",$="";typeof T=="object"?(L=h,S=T.ignoreIllegals,$=T.language):(rt("10.7.0","highlight(lang, code, ...args) has been deprecated."),rt("10.7.0",`Please use highlight(code, options) instead.
// https://github.com/highlightjs/highlight.js/issues/2277`),$=h,L=T),S===void 0&&(S=!0);let F={code:L,language:$};J("before:highlight",F);let ie=F.result?F.result:f(F.language,F.code,S);return ie.code=F.code,J("after:highlight",ie),ie}function f(h,T,S,L){let $=Object.create(null);function F(x,D){return x.keywords[D]}function ie(){if(!N.keywords){re.addText(Z);return}let x=0;N.keywordPatternRe.lastIndex=0;let D=N.keywordPatternRe.exec(Z),P="";for(;D;){P+=Z.substring(x,D.index);let K=ge.case_insensitive?D[0].toLowerCase():D[0],ne=F(N,K);if(ne){let[be,We]=ne;if(re.addText(P),P="",$[K]=($[K]||0)+1,$[K]<=Hd&&(je+=We),be.startsWith("_"))P+=D[0];else{let Ze=ge.classNameAliases[be]||be;G(D[0],Ze)}}else P+=D[0];x=N.keywordPatternRe.lastIndex,D=N.keywordPatternRe.exec(Z)}P+=Z.substring(x),re.addText(P)}function V(){if(Z==="")return;let x=null;if(typeof N.subLanguage=="string"){if(!e[N.subLanguage]){re.addText(Z);return}x=f(N.subLanguage,Z,!0,ze[N.subLanguage]),ze[N.subLanguage]=x._top}else x=g(Z,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(je+=x.relevance),re.__addSublanguage(x._emitter,x.language)}function ce(){N.subLanguage!=null?V():ie(),Z=""}function G(x,D){x!==""&&(re.startScope(D),re.addText(x),re.endScope())}function Pe(x,D){let P=1,K=D.length-1;for(;P<=K;){if(!x._emit[P]){P++;continue}let ne=ge.classNameAliases[x[P]]||x[P],be=D[P];ne?G(be,ne):(Z=be,ie(),Z=""),P++}}function Ke(x,D){return x.scope&&typeof x.scope=="string"&&re.openNode(ge.classNameAliases[x.scope]||x.scope),x.beginScope&&(x.beginScope._wrap?(G(Z,ge.classNameAliases[x.beginScope._wrap]||x.beginScope._wrap),Z=""):x.beginScope._multi&&(Pe(x.beginScope,D),Z="")),N=Object.create(x,{parent:{value:N}}),N}function st(x,D,P){let K=id(x.endRe,P);if(K){if(x["on:end"]){let ne=new Yt(x);x["on:end"](D,ne),ne.isMatchIgnored&&(K=!1)}if(K){for(;x.endsParent&&x.parent;)x=x.parent;return x}}if(x.endsWithParent)return st(x.parent,D,P)}function at(x){return N.matcher.regexIndex===0?(Z+=x[0],1):(Ae=!0,0)}function kt(x){let D=x[0],P=x.rule,K=new Yt(P),ne=[P.__beforeBegin,P["on:begin"]];for(let be of ne)if(be&&(be(x,K),K.isMatchIgnored))return at(D);return P.skip?Z+=D:(P.excludeBegin&&(Z+=D),ce(),!P.returnBegin&&!P.excludeBegin&&(Z=D)),Ke(P,x),P.returnBegin?0:D.length}function wt(x){let D=x[0],P=T.substring(x.index),K=st(N,x,P);if(!K)return Qs;let ne=N;N.endScope&&N.endScope._wrap?(ce(),G(D,N.endScope._wrap)):N.endScope&&N.endScope._multi?(ce(),Pe(N.endScope,x)):ne.skip?Z+=D:(ne.returnEnd||ne.excludeEnd||(Z+=D),ce(),ne.excludeEnd&&(Z=D));do N.scope&&re.closeNode(),!N.skip&&!N.subLanguage&&(je+=N.relevance),N=N.parent;while(N!==K.parent);return K.starts&&Ke(K.starts,x),ne.returnEnd?0:D.length}function Fe(){let x=[];for(let D=N;D!==ge;D=D.parent)D.scope&&x.unshift(D.scope);x.forEach(D=>re.openNode(D))}let De={};function ke(x,D){let P=D&&D[0];if(Z+=x,P==null)return ce(),0;if(De.type==="begin"&&D.type==="end"&&De.index===D.index&&P===""){if(Z+=T.slice(D.index,D.index+1),!i){let K=new Error(`0 width match regex (${h})`);throw K.languageName=h,K.badRule=De.rule,K}return 1}if(De=D,D.type==="begin")return kt(D);if(D.type==="illegal"&&!S){let K=new Error('Illegal lexeme "'+P+'" for mode "'+(N.scope||"<unnamed>")+'"');throw K.mode=N,K}else if(D.type==="end"){let K=wt(D);if(K!==Qs)return K}if(D.type==="illegal"&&P==="")return Z+=`
// `,1;if(Ie>1e5&&Ie>D.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Z+=P,P.length}let ge=q(h);if(!ge)throw $e(o.replace("{}",h)),new Error('Unknown language: "'+h+'"');let ct=Bd(ge),we="",N=L||ct,ze={},re=new s.__emitter(s);Fe();let Z="",je=0,ve=0,Ie=0,Ae=!1;try{if(ge.__emitTokens)ge.__emitTokens(T,re);else{for(N.matcher.considerAll();;){Ie++,Ae?Ae=!1:N.matcher.considerAll(),N.matcher.lastIndex=ve;let x=N.matcher.exec(T);if(!x)break;let D=T.substring(ve,x.index),P=ke(D,x);ve=x.index+P}ke(T.substring(ve))}return re.finalize(),we=re.toHTML(),{language:h,value:we,relevance:je,illegal:!1,_emitter:re,_top:N}}catch(x){if(x.message&&x.message.includes("Illegal"))return{language:h,value:en(T),illegal:!0,relevance:0,_illegalBy:{message:x.message,index:ve,context:T.slice(ve-100,ve+100),mode:x.mode,resultSoFar:we},_emitter:re};if(i)return{language:h,value:en(T),illegal:!1,relevance:0,errorRaised:x,_emitter:re,_top:N};throw x}}function p(h){let T={value:en(h),illegal:!1,relevance:0,_top:a,_emitter:new s.__emitter(s)};return T._emitter.addText(h),T}function g(h,T){T=T||s.languages||Object.keys(e);let S=p(h),L=T.filter(q).filter(O).map(ce=>f(ce,h,!1));L.unshift(S);let $=L.sort((ce,G)=>{if(ce.relevance!==G.relevance)return G.relevance-ce.relevance;if(ce.language&&G.language){if(q(ce.language).supersetOf===G.language)return 1;if(q(G.language).supersetOf===ce.language)return-1}return 0}),[F,ie]=$,V=F;return V.secondBest=ie,V}function b(h,T,S){let L=T&&r[T]||S;h.classList.add("hljs"),h.classList.add(`language-${L}`)}function m(h){let T=null,S=l(h);if(c(S))return;if(J("before:highlightElement",{el:h,language:S}),h.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",h);return}if(h.children.length>0&&(s.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(h)),s.throwUnescapedHTML))throw new on("One of your code blocks includes unescaped HTML.",h.innerHTML);T=h;let L=T.textContent,$=S?u(L,{language:S,ignoreIllegals:!0}):g(L);h.innerHTML=$.value,h.dataset.highlighted="yes",b(h,S,$.language),h.result={language:$.language,re:$.relevance,relevance:$.relevance},$.secondBest&&(h.secondBest={language:$.secondBest.language,relevance:$.secondBest.relevance}),J("after:highlightElement",{el:h,result:$,text:L})}function k(h){s=Js(s,h)}let y=()=>{C(),rt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function _(){C(),rt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let w=!1;function C(){function h(){C()}if(document.readyState==="loading"){w||window.addEventListener("DOMContentLoaded",h,!1),w=!0;return}document.querySelectorAll(s.cssSelector).forEach(m)}function R(h,T){let S=null;try{S=T(t)}catch(L){if($e("Language definition for '{}' could not be registered.".replace("{}",h)),i)$e(L);else throw L;S=a}S.name||(S.name=h),e[h]=S,S.rawDefinition=T.bind(null,t),S.aliases&&j(S.aliases,{languageName:h})}function v(h){delete e[h];for(let T of Object.keys(r))r[T]===h&&delete r[T]}function B(){return Object.keys(e)}function q(h){return h=(h||"").toLowerCase(),e[h]||e[r[h]]}function j(h,{languageName:T}){typeof h=="string"&&(h=[h]),h.forEach(S=>{r[S.toLowerCase()]=T})}function O(h){let T=q(h);return T&&!T.disableAutodetect}function U(h){h["before:highlightBlock"]&&!h["before:highlightElement"]&&(h["before:highlightElement"]=T=>{h["before:highlightBlock"](Object.assign({block:T.el},T))}),h["after:highlightBlock"]&&!h["after:highlightElement"]&&(h["after:highlightElement"]=T=>{h["after:highlightBlock"](Object.assign({block:T.el},T))})}function te(h){U(h),n.push(h)}function Q(h){let T=n.indexOf(h);T!==-1&&n.splice(T,1)}function J(h,T){let S=h;n.forEach(function(L){L[S]&&L[S](T)})}function Y(h){return rt("10.7.0","highlightBlock will be removed entirely in v12.0"),rt("10.7.0","Please use highlightElement now."),m(h)}Object.assign(t,{highlight:u,highlightAuto:g,highlightAll:C,highlightElement:m,highlightBlock:Y,configure:k,initHighlighting:y,initHighlightingOnLoad:_,registerLanguage:R,unregisterLanguage:v,listLanguages:B,getLanguage:q,registerAliases:j,autoDetection:O,inherit:Js,addPlugin:te,removePlugin:Q}),t.debugMode=function(){i=!1},t.safeMode=function(){i=!0},t.versionString=zd,t.regex={concat:Ge,lookahead:ra,either:sn,optional:rd,anyNumberOfTimes:td};for(let h in Vt)typeof Vt[h]=="object"&&ea(Vt[h]);return Object.assign(t,Vt),t},nt=da({});nt.newInstance=()=>da({});pa.exports=nt;nt.HighlightJS=nt;nt.default=nt});var vp={};gc(vp,{initializeHowToApplyCC:()=>fr});var St=class{constructor(e,r,n,i,o,a){H(this,"cardRenderer");H(this,"articleRenderer");H(this,"eventHandler");H(this,"navigationHandler");H(this,"contentService");H(this,"containerId");this.cardRenderer=e,this.articleRenderer=r,this.eventHandler=n,this.navigationHandler=i,this.contentService=o,this.containerId=a}initialize(){this.renderOverviewCards(),this.bindEventListeners()}showOverview(){this.renderOverviewCards()}renderOverviewCards(){let e=document.getElementById(this.containerId);if(!e){console.warn(`Container with id "${this.containerId}" not found`);return}let r=this.getCards(),n=this.cardRenderer.renderCards(r);e.innerHTML=`<div class="overview-cards-grid">${n}</div>`}bindEventListeners(){this.eventHandler.bindEventListeners(),this.navigationHandler.bindEventListeners()}};var kn={colors:{beginner:"#10B981",intermediate:"#F59E0B",advanced:"#EF4444",expert:"#8B5CF6"},labels:{beginner:"\u5165\u95E8",intermediate:"\u8FDB\u9636",advanced:"\u9AD8\u7EA7",expert:"\u4E13\u5BB6"}};var Tt=class{constructor(e={},r=kn){H(this,"categoryIcons",{});H(this,"difficultyConfig");this.categoryIcons=e,this.difficultyConfig=r}renderCards(e){return e.map((r,n)=>this.renderCard(r,n)).join("")}renderCard(e,r){let n=this.categoryIcons[e.category]||"\u{1F4CB}",i=e.difficulty?this.difficultyConfig.colors[e.difficulty]:void 0,o=e.difficulty?this.difficultyConfig.labels[e.difficulty]:void 0,a=this.renderSections(e.sections),s=o?`<span class="overview-card__difficulty"${i?` style="--difficulty-color: ${i}"`:""}>
//               ${o}
//             </span>`:"",c=e.readTime?`<span class="overview-card__read-time">\u{1F4D6} ${e.readTime}</span>`:"",l=e.overview?`<div class="overview-card__overview">${e.overview}</div>`:"",u=a?`<div class="overview-card__sections">
//             <h4 class="overview-card__sections-title">\u4E3B\u8981\u5185\u5BB9\uFF1A</h4>
//             <ul class="overview-card__sections-list">
//               ${a}
//             </ul>
//           </div>`:"",f=e.description?`<p class="overview-card__description">${e.description}</p>`:"",p=e.version?`<span class="overview-card__version">v${e.version}</span>`:"",g=e.lastUpdated?`<span class="overview-card__updated">\u66F4\u65B0\u4E8E ${e.lastUpdated}</span>`:"",b=p||g?`<div class="overview-card__meta-info">${p}${g}</div>`:"",m=e.imageUrl?`<div class="overview-card__cover"><img src="${e.imageUrl}" alt="${e.title}" loading="lazy" decoding="async" fetchpriority="low" /></div>`:"",y=`style="--card-index: ${typeof r=="number"?r*.02:0}s"`;return`
//       <div class="content-card overview-card" data-card-id="${e.id}" ${y}>
//         <div class="overview-card__header">
//           <div class="overview-card__title-section">
//             <div class="overview-card__icon">${n}</div>
//             <h3 class="overview-card__title">${e.title}</h3>
//           </div>
//           <div class="overview-card__meta">
//             ${s}
//             ${c}
//           </div>
//         </div>
//         <button class="overview-card__share-btn" data-card-id="${e.id}" aria-label="\u5206\u4EAB\u6B64\u5361\u7247" title="\u5206\u4EAB">
//           <svg class="icon icon-share" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
//             <path d="M7 12l10-6M7 12l10 6M7 12v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             <rect x="3" y="4" width="4" height="4" rx="1.5" stroke="currentColor" stroke-width="2"/>
//             <rect x="17" y="10" width="4" height="4" rx="1.5" stroke="currentColor" stroke-width="2"/>
//             <rect x="3" y="16" width="4" height="4" rx="1.5" stroke="currentColor" stroke-width="2"/>
//           </svg>
//         </button>
//                 ${m}
// 
//         <div class="overview-card__content">
//           ${f}
//           ${l}
//           ${u}
// 
//           ${this.renderTipsBlock(e.tips)}
//           
//           ${this.renderTagsBlock(e.tags)}
//         </div>
//         
//         ${b?`<div class="overview-card__footer">${b}</div>`:""}
//         
//       </div>
//     `}renderSections(e){return!e||e.length===0?"":e.map(r=>`
//       <li class="overview-card__section-item">
//         <span class="overview-card__section-title">${r.title}</span>
//         <span class="overview-card__section-content">${r.content}</span>
//       </li>
//     `).join("")}renderTips(e){return!e||e.length===0?"":e.map(r=>`
//       <div class="overview-card__tip overview-card__tip--${r.type}">
//         <strong class="overview-card__tip-title">${r.title}:</strong>
//         <span class="overview-card__tip-content">${r.content}</span>
//       </div>
//     `).join("")}renderTipsBlock(e){let r=this.renderTips(e);return r?`<div class="overview-card__tips">${r}</div>`:""}renderTags(e){return!e||e.length===0?"":e.map(r=>`
//       <span class="overview-card__tag">${r}</span>
//     `).join("")}renderTagsBlock(e){let r=this.renderTags(e);return r?`<div class="overview-card__tags">${r}</div>`:""}};var Rt={"quick-start":"\u{1F680}","core-usage":"\u26A1",advanced:"\u{1F52C}",examples:"\u{1F4BC}","best-practices":"\u2728",integration:"\u{1F517}"};var Dt=class extends Tt{constructor(){super(Rt)}};var It=class{renderArticle(e,r){return`
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
//     `}renderLoadingState(){return`
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
//     `}renderErrorState(e){return`
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
//             <p>\u274C \u65E0\u6CD5\u52A0\u8F7D\u5185\u5BB9: ${e}</p>
//             <button onclick="location.reload()" class="retry-btn">\u91CD\u8BD5</button>
//           </div>
//         </div>
//       </div>
//     `}};var mc=`
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
// /* \u56FE\u7247\u6837\u5F0F */
// .markdown-content img,
// .markdown-content img.markdown-image {
//   max-width: 100%;
//   height: auto;
//   display: block;
//   margin: 16px auto;
//   border-radius: 8px;
//   border: 1px solid var(--border-color, #e5e7eb);
//   background: var(--bg-secondary, #f9fafb);
// }
// 
// .markdown-content img[loading="lazy"] {
//   filter: blur(0);
// }
// 
// .markdown-content .md-image-blocked {
//   display: inline-block;
//   padding: 6px 8px;
//   font-size: 0.9em;
//   color: var(--error, #dc2626);
//   background: var(--bg-error-light, #fef2f2);
//   border: 1px solid var(--border-error, #fecaca);
//   border-radius: 6px;
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
// `;function wn(){if(document.getElementById("markdown-styles"))return;let t=document.createElement("style");t.id="markdown-styles",t.textContent=mc,document.head.appendChild(t)}var $a=yr(Ds()),Ga=yr(Ws());var ga=yr(fa(),1);var ee=ga.default;var ha="[A-Za-z$_][0-9A-Za-z$_]*",Ud=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],$d=["true","false","null","undefined","NaN","Infinity"],ma=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ba=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],_a=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Gd=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Kd=[].concat(_a,ma,ba);function ya(t){let e=t.regex,r=(S,{after:L})=>{let $="</"+S[0].slice(1);return S.input.indexOf($,L)!==-1},n=ha,i={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(S,L)=>{let $=S[0].length+S.index,F=S.input[$];if(F==="<"||F===","){L.ignoreMatch();return}F===">"&&(r(S,{after:$})||L.ignoreMatch());let ie,V=S.input.substring($);if(ie=V.match(/^\s*=/)){L.ignoreMatch();return}if((ie=V.match(/^\s+extends\s+/))&&ie.index===0){L.ignoreMatch();return}}},s={$pattern:ha,keyword:Ud,literal:$d,built_in:Kd,"variable.language":Gd},c="[0-9](_?[0-9])*",l=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},g={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},b={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,p],subLanguage:"css"}},m={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},k={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,p]},_={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},w=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,b,m,k,{match:/\$\d+/},f];p.contains=w.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(w)});let C=[].concat(_,p.contains),R=C.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:["self"].concat(C)}]),v={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:R},B={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,e.concat(n,"(",e.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},q={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ma,...ba]}},j={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},O={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[v],illegal:/%/},U={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function te(S){return e.concat("(?!",S.join("|"),")")}let Q={match:e.concat(/\b/,te([..._a,"super","import"].map(S=>`${S}\\s*\\(`)),n,e.lookahead(/\s*\(/)),className:"title.function",relevance:0},J={begin:e.concat(/\./,e.lookahead(e.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Y={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},v]},h="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",T={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(h)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[v]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:q},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),j,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,b,m,k,_,{match:/\$\d+/},f,q,{scope:"attr",match:n+e.lookahead(":"),relevance:0},T,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[_,t.REGEXP_MODE,{className:"function",begin:h,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:o},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},O,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[v,t.inherit(t.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},J,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[v]},Q,U,B,Y,{match:/\$[(.]/}]}}var Qt="[A-Za-z$_][0-9A-Za-z$_]*",va=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Ea=["true","false","null","undefined","NaN","Infinity"],xa=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ka=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],wa=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Aa=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ca=[].concat(wa,xa,ka);function jd(t){let e=t.regex,r=(S,{after:L})=>{let $="</"+S[0].slice(1);return S.input.indexOf($,L)!==-1},n=Qt,i={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(S,L)=>{let $=S[0].length+S.index,F=S.input[$];if(F==="<"||F===","){L.ignoreMatch();return}F===">"&&(r(S,{after:$})||L.ignoreMatch());let ie,V=S.input.substring($);if(ie=V.match(/^\s*=/)){L.ignoreMatch();return}if((ie=V.match(/^\s+extends\s+/))&&ie.index===0){L.ignoreMatch();return}}},s={$pattern:Qt,keyword:va,literal:Ea,built_in:Ca,"variable.language":Aa},c="[0-9](_?[0-9])*",l=`\\.(${c})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b`},{begin:`\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},g={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},b={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,p],subLanguage:"css"}},m={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},k={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,p]},_={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},w=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,b,m,k,{match:/\$\d+/},f];p.contains=w.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(w)});let C=[].concat(_,p.contains),R=C.concat([{begin:/(\s*)\(/,end:/\)/,keywords:s,contains:["self"].concat(C)}]),v={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:R},B={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,e.concat(n,"(",e.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},q={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...xa,...ka]}},j={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},O={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[v],illegal:/%/},U={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function te(S){return e.concat("(?!",S.join("|"),")")}let Q={match:e.concat(/\b/,te([...wa,"super","import"].map(S=>`${S}\\s*\\(`)),n,e.lookahead(/\s*\(/)),className:"title.function",relevance:0},J={begin:e.concat(/\./,e.lookahead(e.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Y={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},v]},h="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",T={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(h)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[v]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:R,CLASS_REFERENCE:q},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),j,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,g,b,m,k,_,{match:/\$\d+/},f,q,{scope:"attr",match:n+e.lookahead(":"),relevance:0},T,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[_,t.REGEXP_MODE,{className:"function",begin:h,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:R}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:o},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},O,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[v,t.inherit(t.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},J,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[v]},Q,U,B,Y,{match:/\$[(.]/}]}}function Sa(t){let e=t.regex,r=jd(t),n=Qt,i=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],o={begin:[/namespace/,/\s+/,t.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},a={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:i},contains:[r.exports.CLASS_REFERENCE]},s={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},c=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],l={$pattern:Qt,keyword:va.concat(c),literal:Ea,built_in:Ca.concat(i),"variable.language":Aa},u={className:"meta",begin:"@"+n},f=(m,k,y)=>{let _=m.contains.findIndex(w=>w.label===k);if(_===-1)throw new Error("can not find mode to replace");m.contains.splice(_,1,y)};Object.assign(r.keywords,l),r.exports.PARAMS_CONTAINS.push(u);let p=r.contains.find(m=>m.scope==="attr"),g=Object.assign({},p,{match:e.concat(n,e.lookahead(/\s*\?:/))});r.exports.PARAMS_CONTAINS.push([r.exports.CLASS_REFERENCE,p,g]),r.contains=r.contains.concat([u,o,a,g]),f(r,"shebang",t.SHEBANG()),f(r,"use_strict",s);let b=r.contains.find(m=>m.label==="func.def");return b.relevance=0,Object.assign(r,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),r}function Ta(t){let e={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},r={match:/[{}[\],:]/,className:"punctuation",relevance:0},n=["true","false","null"],i={scope:"literal",beginKeywords:n.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:n},contains:[e,r,t.QUOTE_STRING_MODE,i,t.C_NUMBER_MODE,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Ra(t){let e="true false yes no null",r="[\\w#;/?:@&=+$,.~*'()[\\]]+",n={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},i={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},o={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},a={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[t.BACKSLASH_ESCAPE,i]},s=t.inherit(a,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),p={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},g={end:",",endsWithParent:!0,excludeEnd:!0,keywords:e,relevance:0},b={begin:/\{/,end:/\}/,contains:[g],illegal:"\\n",relevance:0},m={begin:"\\[",end:"\\]",contains:[g],illegal:"\\n",relevance:0},k=[n,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+r},{className:"type",begin:"!<"+r+">"},{className:"type",begin:"!"+r},{className:"type",begin:"!!"+r},{className:"meta",begin:"&"+t.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+t.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},t.HASH_COMMENT_MODE,{beginKeywords:e,keywords:{literal:e}},p,{className:"number",begin:t.C_NUMBER_RE+"\\b",relevance:0},b,m,o,a],y=[...k];return y.pop(),y.push(s),g.contains=y,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:k}}function Da(t){let e=t.regex,r={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},n={begin:"^[-\\*]{3,}",end:"$"},i={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},o={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},a={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},s=/[A-Za-z][A-Za-z0-9+.-]*/,c={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:e.concat(/\[.+?\]\(/,s,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},l={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},u={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},f=t.inherit(l,{contains:[]}),p=t.inherit(u,{contains:[]});l.contains.push(p),u.contains.push(f);let g=[r,c];return[l,u,f,p].forEach(y=>{y.contains=y.contains.concat(g)}),g=g.concat(l,u),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:g},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:g}]}]},r,o,l,u,{className:"quote",begin:"^>\\s+",contains:g,end:"$"},i,n,c,a,{scope:"literal",match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}}function ln(t){let e=t.regex,r=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),n=/[\p{L}0-9._:-]+/u,i={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},o={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},a=t.inherit(o,{begin:/\(/,end:/\)/}),s=t.inherit(t.APOS_STRING_MODE,{className:"string"}),c=t.inherit(t.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:n,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[o,c,s,a,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[o,a,c,s]}]}]},t.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(r,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:l}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}var Wd=t=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:t.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:t.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Zd=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Vd=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],Yd=[...Zd,...Vd],Xd=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),Jd=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),Qd=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),ep=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function Ia(t){let e=t.regex,r=Wd(t),n={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},i="and or not only",o=/@-?\w[\w]*(-\w+)*/,a="[a-zA-Z-][a-zA-Z0-9_-]*",s=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[r.BLOCK_COMMENT,n,r.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+a,relevance:0},r.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+Jd.join("|")+")"},{begin:":(:)?("+Qd.join("|")+")"}]},r.CSS_VARIABLE,{className:"attribute",begin:"\\b("+ep.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[r.BLOCK_COMMENT,r.HEXCOLOR,r.IMPORTANT,r.CSS_NUMBER_MODE,...s,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...s,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},r.FUNCTION_DISPATCH]},{begin:e.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:o},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:i,attribute:Xd.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...s,r.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Yd.join("|")+")\\b"}]}}var tp=t=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:t.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:t.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),rp=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],np=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],ip=[...rp,...np],op=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),sp=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),ap=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),cp=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function Ma(t){let e=tp(t),r=ap,n=sp,i="@[a-z-]+",o="and or not only",s={className:"variable",begin:"(\\$"+"[a-zA-Z-][a-zA-Z0-9_-]*"+")\\b",relevance:0};return{name:"SCSS",case_insensitive:!0,illegal:"[=/|']",contains:[t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,e.CSS_NUMBER_MODE,{className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},e.ATTRIBUTE_SELECTOR_MODE,{className:"selector-tag",begin:"\\b("+ip.join("|")+")\\b",relevance:0},{className:"selector-pseudo",begin:":("+n.join("|")+")"},{className:"selector-pseudo",begin:":(:)?("+r.join("|")+")"},s,{begin:/\(/,end:/\)/,contains:[e.CSS_NUMBER_MODE]},e.CSS_VARIABLE,{className:"attribute",begin:"\\b("+cp.join("|")+")\\b"},{begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{begin:/:/,end:/[;}{]/,relevance:0,contains:[e.BLOCK_COMMENT,s,e.HEXCOLOR,e.CSS_NUMBER_MODE,t.QUOTE_STRING_MODE,t.APOS_STRING_MODE,e.IMPORTANT,e.FUNCTION_DISPATCH]},{begin:"@(page|font-face)",keywords:{$pattern:i,keyword:"@page @font-face"}},{begin:"@",end:"[{;]",returnBegin:!0,keywords:{$pattern:/[a-z-]+/,keyword:o,attribute:op.join(" ")},contains:[{begin:i,className:"keyword"},{begin:/[a-z-]+(?=:)/,className:"attribute"},s,t.QUOTE_STRING_MODE,t.APOS_STRING_MODE,e.HEXCOLOR,e.CSS_NUMBER_MODE]},e.FUNCTION_DISPATCH]}}function er(t){let e=t.regex,r={},n={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[r]}]};Object.assign(r,{className:"variable",variants:[{begin:e.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},n]});let i={className:"subst",begin:/\$\(/,end:/\)/,contains:[t.BACKSLASH_ESCAPE]},o=t.inherit(t.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),a={begin:/<<-?\s*(?=\w+)/,starts:{contains:[t.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},s={className:"string",begin:/"/,end:/"/,contains:[t.BACKSLASH_ESCAPE,r,i]};i.contains.push(s);let c={match:/\\"/},l={className:"string",begin:/'/,end:/'/},u={match:/\\'/},f={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},t.NUMBER_MODE,r]},p=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],g=t.SHEBANG({binary:`(${p.join("|")})`,relevance:10}),b={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[t.inherit(t.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},m=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],k=["true","false"],y={match:/(\/[a-z._-]+)+/},_=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],w=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],C=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],R=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:m,literal:k,built_in:[..._,...w,"set","shopt",...C,...R]},contains:[g,t.SHEBANG(),b,f,o,a,y,s,c,l,u,r]}}function Na(t){let e=t.regex,r=/[\p{XID_Start}_]\p{XID_Continue}*/u,n=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],s={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:n,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},c={className:"meta",begin:/^(>>>|\.\.\.) /},l={className:"subst",begin:/\{/,end:/\}/,keywords:s,illegal:/#/},u={begin:/\{\{/,relevance:0},f={className:"string",contains:[t.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[t.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[t.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[t.BACKSLASH_ESCAPE,c,u,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[t.BACKSLASH_ESCAPE,c,u,l]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[t.BACKSLASH_ESCAPE,u,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[t.BACKSLASH_ESCAPE,u,l]},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE]},p="[0-9](_?[0-9])*",g=`(\\b(${p}))?\\.(${p})|\\b(${p})\\.`,b=`\\b|${n.join("|")}`,m={className:"number",relevance:0,variants:[{begin:`(\\b(${p})|(${g}))[eE][+-]?(${p})[jJ]?(?=${b})`},{begin:`(${g})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${b})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${b})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${b})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${b})`},{begin:`\\b(${p})[jJ](?=${b})`}]},k={className:"comment",begin:e.lookahead(/# type:/),end:/$/,keywords:s,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},y={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:["self",c,m,f,t.HASH_COMMENT_MODE]}]};return l.contains=[f,m,c],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:s,illegal:/(<\/|\?)|=>/,contains:[c,m,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},f,k,t.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,r],scope:{1:"keyword",3:"title.function"},contains:[y]},{variants:[{match:[/\bclass/,/\s+/,r,/\s*/,/\(\s*/,r,/\s*\)/]},{match:[/\bclass/,/\s+/,r]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[m,y,f]}]}}var it="[0-9](_*[0-9])*",tr=`\\.(${it})`,rr="[0-9a-fA-F](_*[0-9a-fA-F])*",Oa={className:"number",variants:[{begin:`(\\b(${it})((${tr})|\\.)?|(${tr}))[eE][+-]?(${it})[fFdD]?\\b`},{begin:`\\b(${it})((${tr})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${tr})[fFdD]?\\b`},{begin:`\\b(${it})[fFdD]\\b`},{begin:`\\b0[xX]((${rr})\\.?|(${rr})?\\.(${rr}))[pP][+-]?(${it})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${rr})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function La(t,e,r){return r===-1?"":t.replace(e,n=>La(t,e,r-1))}function Pa(t){let e=t.regex,r="[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*",n=r+La("(?:<"+r+"~~~(?:\\s*,\\s*"+r+"~~~)*>)?",/~~~/g,2),c={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},l={className:"meta",begin:"@"+r,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},u={className:"params",begin:/\(/,end:/\)/,keywords:c,relevance:0,contains:[t.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:c,illegal:/<\/|#/,contains:[t.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[t.BACKSLASH_ESCAPE]},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,r],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[e.concat(/(?!else)/,r),/\s+/,r,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,r],className:{1:"keyword",3:"title.class"},contains:[u,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+n+"\\s+)",t.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:c,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:c,relevance:0,contains:[l,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,Oa,t.C_BLOCK_COMMENT_MODE]},t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE]},Oa,l]}}function Fa(t){let o={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:o,illegal:"</",contains:[t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,{className:"string",variants:[t.QUOTE_STRING_MODE,t.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{match:/-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,relevance:0},{match:/-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,relevance:0},{match:/-?\b0[oO](_?[0-7])*i?/,relevance:0},{match:/-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,relevance:0},{match:/-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,relevance:0}]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[t.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:o,illegal:/["']/}]}]}}function Ba(t){let e=t.regex,r=/(r#)?/,n=e.concat(r,t.UNDERSCORE_IDENT_RE),i=e.concat(r,t.IDENT_RE),o={className:"title.function.invoke",relevance:0,begin:e.concat(/\b/,/(?!let|for|while|if|else|match\b)/,i,e.lookahead(/\s*\(/))},a="([ui](8|16|32|64|128|size)|f(32|64))?",s=["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","union","unsafe","unsized","use","virtual","where","while","yield"],c=["true","false","Some","None","Ok","Err"],l=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","eprintln!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],u=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:t.IDENT_RE+"!?",type:u,keyword:s,literal:c,built_in:l},illegal:"</",contains:[t.C_LINE_COMMENT_MODE,t.COMMENT("/\\*","\\*/",{contains:["self"]}),t.inherit(t.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*(?!')/},{scope:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'/,end:/'/,contains:[{scope:"char.escape",match:/\\('|\w|x\w{2}|u\w{4}|U\w{8})/}]}]},{className:"number",variants:[{begin:"\\b0b([01_]+)"+a},{begin:"\\b0o([0-7_]+)"+a},{begin:"\\b0x([A-Fa-f0-9_]+)"+a},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+a}],relevance:0},{begin:[/fn/,/\s+/,n],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/,contains:[t.BACKSLASH_ESCAPE]}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,n],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,n,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,n],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,n],className:{1:"keyword",3:"title.class"}},{begin:t.IDENT_RE+"::",keywords:{keyword:"Self",built_in:l,type:u}},{className:"punctuation",begin:"->"},o]}}function qa(t){let e=t.regex,r=t.COMMENT("--","$"),n={scope:"string",variants:[{begin:/'/,end:/'/,contains:[{match:/''/}]}]},i={begin:/"/,end:/"/,contains:[{match:/""/}]},o=["true","false","unknown"],a=["double precision","large object","with timezone","without timezone"],s=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],c=["add","asc","collation","desc","final","first","last","view"],l=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year"],u=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],f=["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"],p=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],g=u,b=[...l,...c].filter(R=>!u.includes(R)),m={scope:"variable",match:/@[a-z0-9][a-z0-9_]*/},k={scope:"operator",match:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0},y={match:e.concat(/\b/,e.either(...g),/\s*\(/),relevance:0,keywords:{built_in:g}};function _(R){return e.concat(/\b/,e.either(...R.map(v=>v.replace(/\s+/,"\\s+"))),/\b/)}let w={scope:"keyword",match:_(p),relevance:0};function C(R,{exceptions:v,when:B}={}){let q=B;return v=v||[],R.map(j=>j.match(/\|\d+$/)||v.includes(j)?j:q(j)?`${j}|0`:j)}return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:C(b,{when:R=>R.length<3}),literal:o,type:s,built_in:f},contains:[{scope:"type",match:_(a)},w,y,m,n,i,t.C_NUMBER_MODE,t.C_BLOCK_COMMENT_MODE,r,k]}}function za(t){let e=t.regex;return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,match:e.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)},{className:"comment",variants:[{begin:e.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}function Ha(t){return{name:"Dockerfile",aliases:["docker"],case_insensitive:!0,keywords:["from","maintainer","expose","env","arg","user","onbuild","stopsignal"],contains:[t.HASH_COMMENT_MODE,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,t.NUMBER_MODE,{beginKeywords:"run cmd entrypoint volume add copy workdir label healthcheck shell",starts:{end:/[^\\]$/,subLanguage:"bash"}}],illegal:"</"}}async function Ua(){try{if(document.getElementById("hljs-theme-style"))return;let t=document.createElement("link");t.id="hljs-theme-style",t.rel="stylesheet",t.href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css",document.head.appendChild(t)}catch(t){console.error("Failed to load highlight.js styles:",t)}}ee.registerLanguage("javascript",ya);ee.registerLanguage("typescript",Sa);ee.registerLanguage("json",Ta);ee.registerLanguage("yaml",Ra);ee.registerLanguage("markdown",Da);ee.registerLanguage("html",ln);ee.registerLanguage("xml",ln);ee.registerLanguage("css",Ia);ee.registerLanguage("scss",Ma);ee.registerLanguage("bash",er);ee.registerLanguage("shell",er);ee.registerLanguage("sh",er);ee.registerLanguage("python",Na);ee.registerLanguage("java",Pa);ee.registerLanguage("go",Fa);ee.registerLanguage("rust",Ba);ee.registerLanguage("sql",qa);ee.registerLanguage("diff",za);ee.registerLanguage("dockerfile",Ha);var ot=class{constructor(e={}){H(this,"options");H(this,"md");H(this,"defaultAllowedTags",["h1","h2","h3","h4","h5","h6","p","br","strong","em","code","pre","ul","ol","li","a","blockquote"]);this.options={enableCodeHighlight:!0,allowedTags:this.defaultAllowedTags,...e},this.md=new $a.default({html:!1,linkify:!0,breaks:!0,highlight:(i,o)=>{let a=(o||"").toLowerCase();if(a&&ee.getLanguage(a))try{let{value:c}=ee.highlight(i,{language:a,ignoreIllegals:!0});return`<pre class="code-block"><code class="hljs language-${a}">${c}</code></pre>`}catch(c){console.error(`Error highlighting code block with language ${a}:`,c)}return`<pre class="code-block"><code class="hljs">${this.escapeHtml(i)}</code></pre>`}});let r=this,n=this.md.renderer.rules.fence?.bind(this.md.renderer);this.md.renderer.rules.fence=function(i,o,a,s,c){let l=i[o],u=(l.info||"").trim().toLowerCase(),f=l.content||"";if(u==="mermaid"||u==="sequencediagram")return`<div class="mermaid-diagram" id="${`mermaid-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}">${r.escapeHtml(f)}</div>`;if(n)return n(i,o,a,s,c);let p=u||"text",g=r.escapeHtml(f);return`<pre class="code-block"><code class="hljs language-${p}">${g}</code></pre>`}}render(e){if(!e||typeof e!="string")return"";let r=this.md.render(e);return Ga.default.sanitize(r,{ALLOWED_TAGS:["h1","h2","h3","h4","h5","h6","p","br","strong","em","code","pre","ul","ol","li","a","blockquote","div"],ALLOWED_ATTR:["class","id","href","target","rel"],ALLOW_DATA_ATTR:!1})}escapeHtml(e){let r=document.createElement("div");return r.textContent=e,r.innerHTML}preserveHtmlTags(e){return e.includes("<")&&e.includes(">")?e:this.escapeHtml(e)}renderHeaders(e){return e=e.replace(/^######\s(.+)$/gm,(r,n)=>`<h6>${this.escapeHtml(n.trim())}</h6>`),e=e.replace(/^#####\s(.+)$/gm,(r,n)=>`<h5>${this.escapeHtml(n.trim())}</h5>`),e=e.replace(/^####\s(.+)$/gm,(r,n)=>`<h4>${this.escapeHtml(n.trim())}</h4>`),e=e.replace(/^###\s(.+)$/gm,(r,n)=>`<h3>${this.escapeHtml(n.trim())}</h3>`),e=e.replace(/^##\s(.+)$/gm,(r,n)=>`<h2>${this.escapeHtml(n.trim())}</h2>`),e=e.replace(/^#\s(.+)$/gm,(r,n)=>`<h1>${this.escapeHtml(n.trim())}</h1>`),e}renderCodeBlocks(e){console.log("renderCodeBlocks called, input length:",e.length);let r=e.includes("```");if(console.log("Contains code blocks:",r),r){let n=e.match(/```[\s\S]*?```/g);console.log("Found code block matches:",n?.length||0),n&&n.forEach((i,o)=>{console.log(`Code block ${o}:`,i.substring(0,100)+"...")})}return e=e.replace(/```([^`]*?)```/gs,(n,i)=>{let o=i.trim().split(`
// `),s=(o[0]||"").toLowerCase().trim(),c=o.slice(1).join(`
// `).trim();return console.log("Processing code block:",{language:s,codeLength:c.length}),s==="mermaid"||s==="sequencediagram"?(console.log("Detected Mermaid diagram!"),this.renderMermaidDiagram(c)):(console.log("Rendering as regular code block"),`<pre><code class="language-${s}">${this.escapeHtml(c)}</code></pre>`)}),console.log("renderCodeBlocks finished, output length:",e.length),e}renderMermaidDiagram(e){let r=`mermaid-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return console.log("Rendering Mermaid diagram:",{diagramId:r,code:e.substring(0,100)+"..."}),`<div class="mermaid-diagram" id="${r}">${this.escapeHtml(e)}</div>`}renderInlineCode(e){return e=e.replace(/`([^`\n]+)`/g,(r,n)=>{if(e.indexOf("<pre><code>")!==-1&&e.indexOf("</code></pre>")!==-1){let i=e.lastIndexOf("<pre><code>",e.indexOf(r)),o=e.indexOf("</code></pre>",e.indexOf(r));if(i!==-1&&o!==-1&&i<e.indexOf(r)&&e.indexOf(r)<o)return r}return`<code>${this.escapeHtml(n)}</code>`}),e}renderBoldItalic(e){return e=e.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*\n]+)\*/g,"<em>$1</em>"),e}renderLinks(e){return e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(r,n,i)=>i.match(/^https?:\/\//)?`<a href="${i}" target="_blank" rel="noopener noreferrer">${n}</a>`:r),e}renderLists(e){let r=e.split(`
// `),n=[],i=!1,o=!1,a=[];for(let s=0;s<r.length;s++){let c=r[s],l=/^[*+-]\s(.+)$/.test(c),u=/^\d+\.\s(.+)$/.test(c);if(l){o&&(n.push(`<ol>${a.join("")}</ol>`),o=!1,a=[]),i||(i=!0,a=[]);let p=c.replace(/^[*+-]\s/,"").replace(/\n/g,"<br>");a.push(`<li>${p}</li>`)}else if(u){i&&(n.push(`<ul>${a.join("")}</ul>`),i=!1,a=[]),o||(o=!0,a=[]);let f=c.replace(/^\d+\.\s/,"");a.push(`<li>${f}</li>`)}else i?(n.push(`<ul>${a.join("")}</ul>`),i=!1,a=[]):o&&(n.push(`<ol>${a.join("")}</ol>`),o=!1,a=[]),n.push(c)}return i&&a.length>0?n.push(`<ul>${a.join("")}</ul>`):o&&a.length>0&&n.push(`<ol>${a.join("")}</ol>`),n.join(`
// `)}renderParagraphs(e){return e.split(`
// 
// `).filter(n=>n.trim()).map(n=>{let i=n.trim();if(i.match(/^<(h[1-6]|ul|ol|pre|blockquote|div)/))return i;if(!i)return"";let o=i;return/<[^>]+>/.test(o)?o=i:(o=this.escapeHtml(o),o=o.replace(/\n/g,"<br>")),`<p>${o}</p>`}).join(`
// 
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/core.js
//   var import_core = __toESM(require_core(), 1);
//   var core_default = import_core.default;
// 
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/javascript.js
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
//     "extends"
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
//       begin: "html`",
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
//       begin: "css`",
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
//       begin: "gql`",
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
//         begin: /\(/,
//         end: /\)/,
//         keywords: KEYWORDS$1,
//         contains: ["self"].concat(SUBST_AND_COMMENTS)
//       }
//     ]);
//     const PARAMS = {
//       className: "params",
//       begin: /\(/,
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
//         ]),
//         IDENT_RE$1,
//         regex.lookahead(/\(/)
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
//           className: "attr",
//           begin: IDENT_RE$1 + regex.lookahead(":"),
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
//                       begin: /\(/,
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/typescript.js
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
//     "extends"
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
//       begin: "html`",
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
//       begin: "css`",
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
//       begin: "gql`",
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
//         begin: /\(/,
//         end: /\)/,
//         keywords: KEYWORDS$1,
//         contains: ["self"].concat(SUBST_AND_COMMENTS)
//       }
//     ]);
//     const PARAMS = {
//       className: "params",
//       begin: /\(/,
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
//         ]),
//         IDENT_RE$1,
//         regex.lookahead(/\(/)
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
//           className: "attr",
//           begin: IDENT_RE$1 + regex.lookahead(":"),
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
//                       begin: /\(/,
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
//       beginKeywords: "namespace",
//       end: /\{/,
//       excludeEnd: true,
//       contains: [tsLanguage.exports.CLASS_REFERENCE]
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
//       "namespace",
//       "interface",
//       "public",
//       "private",
//       "protected",
//       "implements",
//       "declare",
//       "abstract",
//       "readonly",
//       "enum",
//       "override"
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
//     tsLanguage.contains = tsLanguage.contains.concat([
//       DECORATOR,
//       NAMESPACE,
//       INTERFACE
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/json.js
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/yaml.js
//   function yaml(hljs) {
//     const LITERALS3 = "true false yes no null";
//     const URI_CHARACTERS = "[\\w#;/?:@&=+$,.~*'()[\\]]+";
//     const KEY = {
//       className: "attr",
//       variants: [
//         { begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" },
//         {
//           // double quoted keys
//           begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)'
//         },
//         {
//           // single quoted keys
//           begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)"
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
//     const STRING = {
//       className: "string",
//       relevance: 0,
//       variants: [
//         {
//           begin: /'/,
//           end: /'/
//         },
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
//         end: /'/
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/markdown.js
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
//         LINK_REFERENCE
//       ]
//     };
//   }
// 
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/xml.js
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/css.js
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
//   var TAGS = [
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
//     "p",
//     "q",
//     "quote",
//     "samp",
//     "section",
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
//   ];
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
//   ];
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
//   ];
//   var ATTRIBUTES = [
//     "align-content",
//     "align-items",
//     "align-self",
//     "all",
//     "animation",
//     "animation-delay",
//     "animation-direction",
//     "animation-duration",
//     "animation-fill-mode",
//     "animation-iteration-count",
//     "animation-name",
//     "animation-play-state",
//     "animation-timing-function",
//     "backface-visibility",
//     "background",
//     "background-attachment",
//     "background-blend-mode",
//     "background-clip",
//     "background-color",
//     "background-image",
//     "background-origin",
//     "background-position",
//     "background-repeat",
//     "background-size",
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
//     "border-style",
//     "border-top",
//     "border-top-color",
//     "border-top-left-radius",
//     "border-top-right-radius",
//     "border-top-style",
//     "border-top-width",
//     "border-width",
//     "bottom",
//     "box-decoration-break",
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
//     "content",
//     "content-visibility",
//     "counter-increment",
//     "counter-reset",
//     "cue",
//     "cue-after",
//     "cue-before",
//     "cursor",
//     "direction",
//     "display",
//     "empty-cells",
//     "filter",
//     "flex",
//     "flex-basis",
//     "flex-direction",
//     "flex-flow",
//     "flex-grow",
//     "flex-shrink",
//     "flex-wrap",
//     "float",
//     "flow",
//     "font",
//     "font-display",
//     "font-family",
//     "font-feature-settings",
//     "font-kerning",
//     "font-language-override",
//     "font-size",
//     "font-size-adjust",
//     "font-smoothing",
//     "font-stretch",
//     "font-style",
//     "font-synthesis",
//     "font-variant",
//     "font-variant-caps",
//     "font-variant-east-asian",
//     "font-variant-ligatures",
//     "font-variant-numeric",
//     "font-variant-position",
//     "font-variation-settings",
//     "font-weight",
//     "gap",
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
//     "hyphens",
//     "icon",
//     "image-orientation",
//     "image-rendering",
//     "image-resolution",
//     "ime-mode",
//     "inline-size",
//     "isolation",
//     "justify-content",
//     "left",
//     "letter-spacing",
//     "line-break",
//     "line-height",
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
//     "opacity",
//     "order",
//     "orphans",
//     "outline",
//     "outline-color",
//     "outline-offset",
//     "outline-style",
//     "outline-width",
//     "overflow",
//     "overflow-wrap",
//     "overflow-x",
//     "overflow-y",
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
//     "page-break-after",
//     "page-break-before",
//     "page-break-inside",
//     "pause",
//     "pause-after",
//     "pause-before",
//     "perspective",
//     "perspective-origin",
//     "pointer-events",
//     "position",
//     "quotes",
//     "resize",
//     "rest",
//     "rest-after",
//     "rest-before",
//     "right",
//     "row-gap",
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
//     "scrollbar-color",
//     "scrollbar-gutter",
//     "scrollbar-width",
//     "shape-image-threshold",
//     "shape-margin",
//     "shape-outside",
//     "speak",
//     "speak-as",
//     "src",
//     // @font-face
//     "tab-size",
//     "table-layout",
//     "text-align",
//     "text-align-all",
//     "text-align-last",
//     "text-combine-upright",
//     "text-decoration",
//     "text-decoration-color",
//     "text-decoration-line",
//     "text-decoration-style",
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
//     "text-transform",
//     "text-underline-position",
//     "top",
//     "transform",
//     "transform-box",
//     "transform-origin",
//     "transform-style",
//     "transition",
//     "transition-delay",
//     "transition-duration",
//     "transition-property",
//     "transition-timing-function",
//     "unicode-bidi",
//     "vertical-align",
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
//     "widows",
//     "width",
//     "will-change",
//     "word-break",
//     "word-spacing",
//     "word-wrap",
//     "writing-mode",
//     "z-index"
//     // reverse makes sure longer attributes `font-weight` are matched fully
//     // instead of getting false positives on say `font`
//   ].reverse();
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/scss.js
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
//   var TAGS2 = [
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
//     "p",
//     "q",
//     "quote",
//     "samp",
//     "section",
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
//   ];
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
//   ];
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
//   ];
//   var ATTRIBUTES2 = [
//     "align-content",
//     "align-items",
//     "align-self",
//     "all",
//     "animation",
//     "animation-delay",
//     "animation-direction",
//     "animation-duration",
//     "animation-fill-mode",
//     "animation-iteration-count",
//     "animation-name",
//     "animation-play-state",
//     "animation-timing-function",
//     "backface-visibility",
//     "background",
//     "background-attachment",
//     "background-blend-mode",
//     "background-clip",
//     "background-color",
//     "background-image",
//     "background-origin",
//     "background-position",
//     "background-repeat",
//     "background-size",
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
//     "border-style",
//     "border-top",
//     "border-top-color",
//     "border-top-left-radius",
//     "border-top-right-radius",
//     "border-top-style",
//     "border-top-width",
//     "border-width",
//     "bottom",
//     "box-decoration-break",
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
//     "content",
//     "content-visibility",
//     "counter-increment",
//     "counter-reset",
//     "cue",
//     "cue-after",
//     "cue-before",
//     "cursor",
//     "direction",
//     "display",
//     "empty-cells",
//     "filter",
//     "flex",
//     "flex-basis",
//     "flex-direction",
//     "flex-flow",
//     "flex-grow",
//     "flex-shrink",
//     "flex-wrap",
//     "float",
//     "flow",
//     "font",
//     "font-display",
//     "font-family",
//     "font-feature-settings",
//     "font-kerning",
//     "font-language-override",
//     "font-size",
//     "font-size-adjust",
//     "font-smoothing",
//     "font-stretch",
//     "font-style",
//     "font-synthesis",
//     "font-variant",
//     "font-variant-caps",
//     "font-variant-east-asian",
//     "font-variant-ligatures",
//     "font-variant-numeric",
//     "font-variant-position",
//     "font-variation-settings",
//     "font-weight",
//     "gap",
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
//     "hyphens",
//     "icon",
//     "image-orientation",
//     "image-rendering",
//     "image-resolution",
//     "ime-mode",
//     "inline-size",
//     "isolation",
//     "justify-content",
//     "left",
//     "letter-spacing",
//     "line-break",
//     "line-height",
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
//     "opacity",
//     "order",
//     "orphans",
//     "outline",
//     "outline-color",
//     "outline-offset",
//     "outline-style",
//     "outline-width",
//     "overflow",
//     "overflow-wrap",
//     "overflow-x",
//     "overflow-y",
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
//     "page-break-after",
//     "page-break-before",
//     "page-break-inside",
//     "pause",
//     "pause-after",
//     "pause-before",
//     "perspective",
//     "perspective-origin",
//     "pointer-events",
//     "position",
//     "quotes",
//     "resize",
//     "rest",
//     "rest-after",
//     "rest-before",
//     "right",
//     "row-gap",
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
//     "scrollbar-color",
//     "scrollbar-gutter",
//     "scrollbar-width",
//     "shape-image-threshold",
//     "shape-margin",
//     "shape-outside",
//     "speak",
//     "speak-as",
//     "src",
//     // @font-face
//     "tab-size",
//     "table-layout",
//     "text-align",
//     "text-align-all",
//     "text-align-last",
//     "text-combine-upright",
//     "text-decoration",
//     "text-decoration-color",
//     "text-decoration-line",
//     "text-decoration-style",
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
//     "text-transform",
//     "text-underline-position",
//     "top",
//     "transform",
//     "transform-box",
//     "transform-origin",
//     "transform-style",
//     "transition",
//     "transition-delay",
//     "transition-duration",
//     "transition-property",
//     "transition-timing-function",
//     "unicode-bidi",
//     "vertical-align",
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
//     "widows",
//     "width",
//     "will-change",
//     "word-break",
//     "word-spacing",
//     "word-wrap",
//     "writing-mode",
//     "z-index"
//     // reverse makes sure longer attributes `font-weight` are matched fully
//     // instead of getting false positives on say `font`
//   ].reverse();
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/bash.js
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
//       "for",
//       "while",
//       "until",
//       "in",
//       "do",
//       "done",
//       "case",
//       "esac",
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
//       aliases: ["sh"],
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
//         hljs.HASH_COMMENT_MODE,
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/python.js
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
//           begin: /\bself\b/
//         },
//         {
//           // eat "if" prior to string so that it won't accidentally be
//           // labeled as an f-string
//           beginKeywords: "if",
//           relevance: 0
//         },
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/java.js
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
//       "permits"
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/go.js
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
//               begin: hljs.C_NUMBER_RE + "[i]",
//               relevance: 1
//             },
//             hljs.C_NUMBER_MODE
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/rust.js
//   function rust(hljs) {
//     const regex = hljs.regex;
//     const FUNCTION_INVOKE = {
//       className: "title.function.invoke",
//       relevance: 0,
//       begin: regex.concat(
//         /\b/,
//         /(?!let|for|while|if|else|match\b)/,
//         hljs.IDENT_RE,
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
//           className: "string",
//           variants: [
//             { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
//             { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
//           ]
//         },
//         {
//           className: "symbol",
//           begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
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
//             hljs.UNDERSCORE_IDENT_RE
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
//               end: /"/
//             }
//           ]
//         },
//         {
//           begin: [
//             /let/,
//             /\s+/,
//             /(?:mut\s+)?/,
//             hljs.UNDERSCORE_IDENT_RE
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
//             hljs.UNDERSCORE_IDENT_RE,
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
//             hljs.UNDERSCORE_IDENT_RE
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
//             hljs.UNDERSCORE_IDENT_RE
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/sql.js
//   function sql(hljs) {
//     const regex = hljs.regex;
//     const COMMENT_MODE = hljs.COMMENT("--", "$");
//     const STRING = {
//       className: "string",
//       variants: [
//         {
//           begin: /'/,
//           end: /'/,
//           contains: [{ begin: /''/ }]
//         }
//       ]
//     };
//     const QUOTED_IDENTIFIER = {
//       begin: /"/,
//       end: /"/,
//       contains: [{ begin: /""/ }]
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
//       className: "variable",
//       begin: /@[a-z0-9][a-z0-9_]*/
//     };
//     const OPERATOR = {
//       className: "operator",
//       begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
//       relevance: 0
//     };
//     const FUNCTION_CALL = {
//       begin: regex.concat(/\b/, regex.either(...FUNCTIONS), /\s*\(/),
//       relevance: 0,
//       keywords: { built_in: FUNCTIONS }
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
//           begin: regex.either(...COMBOS),
//           relevance: 0,
//           keywords: {
//             $pattern: /[\w\.]+/,
//             keyword: KEYWORDS3.concat(COMBOS),
//             literal: LITERALS3,
//             type: TYPES3
//           }
//         },
//         {
//           className: "type",
//           begin: regex.either(...MULTI_WORD_TYPES)
//         },
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/diff.js
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
//   // node_modules/.pnpm/highlight.js@11.9.0/node_modules/highlight.js/es/languages/dockerfile.js
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
//       const defaultImage = this.md.renderer.rules.image?.bind(this.md.renderer);
//       this.md.renderer.rules.image = function(tokens, idx, options2, env, slf) {
//         const token = tokens[idx];
//         const src = token.attrGet("src") || "";
//         const alt = token.content || token.attrGet("alt") || "";
//         const isAllowedSrc = /^https?:\/\//.test(src) || src.startsWith("/") || src.startsWith("./") || src.startsWith("../");
//         const isDangerousProtocol = /^(data|javascript|vbscript|file|mailto|tel):/i.test(src);
//         if (!isAllowedSrc || isDangerousProtocol) {
//           return `<span class="md-image-blocked">${self.escapeHtml(alt)}</span>`;
//         }
//         token.attrSet("loading", "lazy");
//         token.attrSet("decoding", "async");
//         token.attrSet("referrerpolicy", "no-referrer");
//         token.attrSet("alt", alt);
//         token.attrJoin("class", "markdown-image");
//         if (defaultImage) {
//           return defaultImage(tokens, idx, options2, env, slf);
//         }
//         return slf.renderToken(tokens, idx, options2);
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
//           "div",
//           "img"
//         ],
//         ALLOWED_ATTR: [
//           "class",
//           "id",
//           "href",
//           "target",
//           "rel",
//           // img 相关
//           "src",
//           "alt",
//           "title",
//           "loading",
//           "referrerpolicy",
//           "decoding",
//           "width",
//           "height",
//           "srcset",
//           "sizes"
//         ],
//         ALLOW_DATA_ATTR: false
//       });
//       return sanitizedHtml;
//     }
//     /**
//      * 转义 HTML 字符以防止 XSS
//      */
//     escapeHtml(text) {
//       const escapeMap = {
//         "&": "&amp;",
//         "<": "&lt;",
//         ">": "&gt;",
//         '"': "&quot;",
//         "'": "&#39;"
//       };
//       return String(text).replace(/[&<>"']/g, (char) => escapeMap[char] || char);
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
//                     <pre><code>${this.escapeHtml(n)}</code></pre>
//                 `,e.classList.add("mermaid-error")})}catch(o){console.error(`Mermaid initialization error for ${i}:`,o),e.innerHTML=`
//                 <div style="color: #dc2626; margin-bottom: 8px;">\u26A0\uFE0F \u56FE\u8868\u521D\u59CB\u5316\u5931\u8D25</div>
//                 <pre><code>${this.escapeHtml(n)}</code></pre>
//             `,e.classList.add("mermaid-error")}}showMermaidFullscreen(e,r){let n=document.createElement("div");n.className="mermaid-fullscreen-modal",n.innerHTML=`
//             <div class="mermaid-fullscreen-content">
//                 <button class="mermaid-fullscreen-close" onclick="this.closest('.mermaid-fullscreen-modal').remove()">&times;</button>
//                 ${e}
//             </div>
//         `,n.addEventListener("click",o=>{o.target===n&&n.remove()});let i=o=>{o.key==="Escape"&&(n.remove(),document.removeEventListener("keydown",i))};document.addEventListener("keydown",i),document.body.appendChild(n)}applyBasicHighlighting(e){let r=e.textContent||"";["function","const","let","var","if","else","for","while","return","class","interface","type","import","export","async","await","try","catch","throw","new"].forEach(i=>{let o=new RegExp(`\\b${i}\\b`,"g");r=r.replace(o,`<span class="keyword">${i}</span>`)}),r=r.replace(/(["'])((?:(?!\1)[^\\]|\\.)*)(\1)/g,'<span class="string">$1$2$3</span>'),r=r.replace(/(\/\/.*$)/gm,'<span class="comment">$1</span>'),r=r.replace(/(\/\*[\s\S]*?\*\/)/g,'<span class="comment">$1</span>'),e.innerHTML=r}};var nr=class{constructor(e,r={}){H(this,"defaultWidth",1080);H(this,"defaultHeight",1440);H(this,"padding",72);H(this,"getIcon");H(this,"options");this.getIcon=e,this.options=r}async shareCard(e){let r=await this.renderCanvas(e),n=await new Promise(i=>r.toBlob(o=>i(o),"image/png",.95));try{if(navigator.clipboard&&window.ClipboardItem){let i=new ClipboardItem({"image/png":n});return await navigator.clipboard.write([i]),this.toast("\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"),{method:"clipboard",ok:!0}}throw new Error("Clipboard API not supported")}catch{let i=URL.createObjectURL(n),o=document.createElement("a");o.href=i;let a=(e.title||"share").replace(/[\n\t\s]+/g,"_").slice(0,60);return o.download=`${a}.png`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(i),this.toast("\u5DF2\u4E0B\u8F7D\u56FE\u7247\uFF08\u526A\u8D34\u677F\u4E0D\u53EF\u7528\uFF09"),{method:"download",ok:!0}}}async openPreview(e,r){let n=this.computeCanvasSize(r?.matchElement),i=this.analyzePageImageDisplay(r?.matchElement,e.imageUrl),o=await this.renderCanvas(e,n,i),a=await new Promise(w=>o.toBlob(C=>w(C),"image/png",.95)),s=document.createElement("div");s.className="share-preview-overlay",s.tabIndex=-1;let c=document.createElement("div");c.className="share-preview-modal",c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),c.setAttribute("aria-label","\u5206\u4EAB\u9884\u89C8");let l=document.createElement("div");l.className="share-preview-header",l.innerHTML=`
//       <div class="share-preview-title">\u5206\u4EAB\u9884\u89C8</div>
//       <button class="share-preview-close" aria-label="\u5173\u95ED\u9884\u89C8" title="\u5173\u95ED">\xD7</button>
//     `;let u=document.createElement("div");u.className="share-preview-body";let f=document.createElement("div");f.className="share-preview-canvas-wrap",f.appendChild(o),u.appendChild(f);let p=document.createElement("div");p.className="share-preview-actions";let g=document.createElement("button");g.className="share-action primary",g.textContent="\u590D\u5236\u5230\u526A\u8D34\u677F";let b=document.createElement("button");b.className="share-action",b.textContent="\u4E0B\u8F7D\u56FE\u7247";let m=document.createElement("button");m.className="share-action",m.textContent="\u590D\u5236\u94FE\u63A5";let k=document.createElement("button");k.className="share-action subtle",k.textContent="\u53D6\u6D88",p.append(g,b,m,k),c.append(l,u,p),s.appendChild(c),document.body.appendChild(s);let y=()=>s.remove();s.addEventListener("click",w=>{w.target===s&&y()}),l.querySelector(".share-preview-close")?.addEventListener("click",y);let _=w=>{w.key==="Escape"&&(y(),document.removeEventListener("keydown",_))};document.addEventListener("keydown",_),g.addEventListener("click",async()=>{await this.tryClipboard(a)?(this.toast("\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"),y()):(this.toast("\u526A\u8D34\u677F\u4E0D\u53EF\u7528\uFF0C\u5DF2\u81EA\u52A8\u4E0B\u8F7D"),this.triggerDownload(a,e.title),y())}),b.addEventListener("click",()=>{this.triggerDownload(a,e.title),this.toast("\u5DF2\u5F00\u59CB\u4E0B\u8F7D"),y()}),m.addEventListener("click",async()=>{try{let w=this.buildDeepLink(e);await navigator.clipboard.writeText(w),this.toast("\u94FE\u63A5\u5DF2\u590D\u5236")}catch{this.toast("\u590D\u5236\u94FE\u63A5\u5931\u8D25")}}),k.addEventListener("click",y),l.querySelector(".share-preview-close")?.focus()}async tryClipboard(e){try{if(navigator.clipboard&&window.ClipboardItem){let r=new ClipboardItem({"image/png":e});return await navigator.clipboard.write([r]),!0}}catch{}return!1}triggerDownload(e,r){let n=URL.createObjectURL(e),i=document.createElement("a");i.href=n;let o=(r||"share").replace(/[\n\t\s]+/g,"_").slice(0,60);i.download=`${o}.png`,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(n)}async renderCanvas(e,r,n){let i=document.createElement("canvas"),o=r?.width??this.defaultWidth,a=r?.height??this.defaultHeight;i.width=o,i.height=a;let s=i.getContext("2d");try{await document.fonts?.ready}catch{}s.fillStyle="#ffffff",s.fillRect(0,0,o,a);let c=160,l=s.createLinearGradient(0,0,o,0);l.addColorStop(0,"#eff6ff"),l.addColorStop(1,"#f8fafc"),s.fillStyle=l,s.fillRect(0,0,o,c);let u=this.padding,f=this.getIcon(e.category)||"\u{1F4CB}",p=44,g=this.padding+p,b=u+p;s.fillStyle="#e5f2ff",this.roundRect(s,g-p,b-p,p*2,p*2,24),s.fill(),s.font="48px system-ui, -apple-system, Segoe UI, Roboto",s.textAlign="center",s.textBaseline="middle",s.fillStyle="#111827",s.fillText(f,g,b+2);let m=g+p+24,k=o-m-this.padding;s.textAlign="left",s.textBaseline="alphabetic",s.fillStyle="#0f172a",s.font="bold 48px ui-sans-serif, -apple-system, system-ui, Segoe UI, Roboto",u+=8,u=this.wrapText(s,e.title||"",m,u+24,k,56,2),s.font="28px ui-sans-serif, -apple-system, system-ui",s.fillStyle="#475569";let y=[];e.difficulty&&y.push(this.mapDifficulty(e.difficulty)),e.readTime&&y.push(`\u{1F4D6} ${e.readTime}`),y.length?(u+=8,s.fillText(y.join("  \xB7  "),m,u+24),u+=48):u+=40;let _=this.padding,w=o-this.padding*2;if(s.font="32px ui-sans-serif, -apple-system, system-ui",s.fillStyle="#111827",e.description?u=this.wrapText(s,e.description,_,u+24,w,44,3):e.overview&&(u=this.wrapText(s,e.overview,_,u+24,w,44,3)),e.imageUrl){u+=12;let j=o-this.padding*2,O=await this.loadImage(e.imageUrl).catch(()=>null),U=16,te=u;if(O){let Q,J;if(n?.pageImageWidth&&n?.pageImageHeight){let Y=n.pageImageHeight/n.pageImageWidth;Q=j,J=Math.round(Q*Y)}else{let Y=O.naturalHeight/O.naturalWidth;Q=j,J=Math.round(Q*Y)}s.fillStyle="#f8fafc",this.roundRect(s,this.padding,te,Q,J,U),s.fill(),s.save(),this.roundRect(s,this.padding,te,Q,J,U),s.clip(),s.drawImage(O,this.padding,te,Q,J),s.restore(),u+=J+12}else s.fillStyle="#f1f5f9",this.roundRect(s,this.padding,te,j,220,U),s.fill(),s.font="28px ui-sans-serif, -apple-system, system-ui",s.fillStyle="#94a3b8",s.textAlign="center",s.textBaseline="middle",s.fillText("\u5C01\u9762\u56FE",this.padding+j/2,te+220/2),u+=232}let C=(e.tips||[]).slice(0,2);C.length&&(u+=24,C.forEach(j=>{u=this.renderTip(s,j.title+"\uFF1A"+j.content,_,u,w),u+=16}));let R=(e.tags||[]).slice(0,3);R.length&&(u+=16,this.renderTags(s,R,_,u),u+=56);let v=220,B=o-this.padding-v,q=a-this.padding-v;return await this.drawQrOrPlaceholder(s,e,B,q,v),s.save(),s.globalAlpha=.85,s.textAlign="left",s.textBaseline="alphabetic",s.font="bold 28px ui-sans-serif, -apple-system, system-ui",s.fillStyle="#0f172a",s.fillText("aispeeds.me",this.padding,a-this.padding/2),s.restore(),i}computeCanvasSize(e){try{if(e){let r=e.getBoundingClientRect();if(r.width>0&&r.height>0){let n=r.height/r.width,i=this.defaultWidth,o=Math.max(1200,Math.round(i*.9)),a=Math.max(o,Math.round(i*n));return{width:i,height:a}}}}catch{}return{width:this.defaultWidth,height:this.defaultHeight}}analyzePageImageDisplay(e,r){try{if(!e||!r)return{};let i=e.querySelector(".overview-card__cover")?.querySelector("img");if(i&&i.complete&&i.naturalWidth>0){let o=i.getBoundingClientRect(),a=o.height/o.width;if(o.width>0&&o.height>0)return{pageImageAspect:a,pageImageWidth:o.width,pageImageHeight:o.height}}i&&i.complete}catch{}return{}}analyzeImageType(e,r,n){return e>=.9&&e<=1.1?{type:"square",strategy:"preserve",maxHeightFactor:1,description:"\u6B63\u65B9\u5F62\u56FE\u7247 - \u4FDD\u6301\u539F\u59CB\u6BD4\u4F8B"}:e<.9?e<.5?{type:"banner",strategy:"preserve",maxHeightFactor:.8,description:"\u6A2A\u5E45\u56FE\u7247 - \u4FDD\u6301\u6BD4\u4F8B\uFF0C\u9002\u5EA6\u9650\u5236\u9AD8\u5EA6"}:{type:"landscape",strategy:"preserve",maxHeightFactor:.9,description:"\u6A2A\u5411\u56FE\u7247 - \u5B8C\u5168\u4FDD\u6301\u6BD4\u4F8B"}:e>2?{type:"tall",strategy:"constrain-height",maxHeightFactor:1.2,description:"\u8D85\u9AD8\u56FE\u7247 - \u9650\u5236\u9AD8\u5EA6\u4EE5\u4FDD\u6301\u5E03\u5C40\u5E73\u8861"}:{type:"portrait",strategy:e>1.5?"constrain-height":"preserve",maxHeightFactor:e>1.5?1.1:1,description:e>1.5?"\u9AD8\u56FE\u7247 - \u8F7B\u5EA6\u9650\u5236\u9AD8\u5EA6":"\u7EB5\u5411\u56FE\u7247 - \u4FDD\u6301\u6BD4\u4F8B"}}async loadImage(e){return await new Promise(r=>setTimeout(r,0)),new Promise((r,n)=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>r(i),i.onerror=()=>n(new Error("image load failed")),i.src=this.resolveImageUrl(e)})}resolveImageUrl(e){try{let r=new URL(e,window.location.href);return r.origin!==window.location.origin&&r.protocol==="https:"?`/img-proxy?src=${encodeURIComponent(r.toString())}`:r.toString()}catch{return e}}buildDeepLink(e){try{if(this.options.deepLinkBuilder)return this.options.deepLinkBuilder(e);let r=new URL(window.location.href),n=this.options.moduleName||"best-practices";return r.searchParams.set("module",n),r.searchParams.set("view","article"),r.searchParams.set("cardId",e.id||""),r.toString()}catch{return window.location.href}}async drawQrOrPlaceholder(e,r,n,i,o){e.strokeStyle="#cbd5e1",e.lineWidth=3,this.roundRect(e,n,i,o,o,16),e.stroke();let a=this.buildDeepLink(r),s=await this.loadQrImage(a,o).catch(()=>null);if(!s){e.font="24px ui-sans-serif, -apple-system, system-ui",e.fillStyle="#64748b",e.textAlign="center",e.textBaseline="middle",e.fillText("QR \u9884\u7559",n+o/2,i+o/2);return}let c=10;e.fillStyle="#ffffff",this.roundRect(e,n+2,i+2,o-4,o-4,12),e.fill(),e.drawImage(s,n+c,i+c,o-c*2,o-c*2)}async loadQrImage(e,r){let n=`https://api.qrserver.com/v1/create-qr-code/?size=${r}x${r}&data=${encodeURIComponent(e)}`;return await new Promise(i=>setTimeout(i,0)),new Promise((i,o)=>{let a=new Image;a.crossOrigin="anonymous",a.onload=()=>i(a),a.onerror=()=>o(new Error("QR load failed")),a.src=n})}renderTip(e,r,n,i,o){let c=this.splitLines(e,r,o-32),l=c.length*40+16*2;e.fillStyle="rgba(6, 182, 212, 0.08)",this.roundRect(e,n,i,o,l,12),e.fill(),e.fillStyle="#06b6d4",e.fillRect(n,i,6,l),e.fillStyle="#0f172a",e.font="28px ui-sans-serif, -apple-system, system-ui";let u=i+16+28;return c.forEach(f=>{e.fillText(f,n+16+10,u),u+=40}),i+l}renderTags(e,r,n,i){e.font="26px ui-sans-serif, -apple-system, system-ui";let o=n,a=i;r.forEach(s=>{let u=e.measureText(s).width+36,f=40;e.fillStyle="#f1f5f9",this.roundRect(e,o,a-f+10,u,f,20),e.fill(),e.fillStyle="#475569",e.fillText(s,o+18,a-12),o+=u+12})}mapDifficulty(e){switch(e){case"beginner":return"\u5165\u95E8";case"intermediate":return"\u8FDB\u9636";case"expert":return"\u4E13\u5BB6";default:return e}}wrapText(e,r,n,i,o,a,s){let c=this.splitLines(e,r,o,s);return c.forEach((l,u)=>{e.fillText(l,n,i+u*a)}),i+Math.min(c.length,s)*a}splitLines(e,r,n,i){let o=r.split(/\s+/),a=[],s="";for(let c=0;c<o.length;c++){let l=s?`${s} ${o[c]}`:o[c];if(e.measureText(l).width<=n)s=l;else if(s&&a.push(s),s=o[c],i&&a.length>=i-1){for(;e.measureText(s+"\u2026").width>n&&s.length>0;)s=s.slice(0,-1);s=s+"\u2026";break}}return s&&a.push(s),a}roundRect(e,r,n,i,o,a){let s=Math.min(a,i/2,o/2);e.beginPath(),e.moveTo(r+s,n),e.arcTo(r+i,n,r+i,n+o,s),e.arcTo(r+i,n+o,r,n+o,s),e.arcTo(r,n+o,r,n,s),e.arcTo(r,n,r+i,n,s),e.closePath()}toast(e){let r=document.createElement("div");r.textContent=e,r.style.position="fixed",r.style.left="50%",r.style.top="16px",r.style.transform="translateX(-50%)",r.style.background="rgba(17, 24, 39, 0.9)",r.style.color="#fff",r.style.padding="8px 12px",r.style.borderRadius="8px",r.style.fontSize="14px",r.style.zIndex="9999",r.style.pointerEvents="none",document.body.appendChild(r),setTimeout(()=>r.remove(),1800)}};var lp=t=>{try{let e=new URL(t,window.location.href);return e.origin!==window.location.origin&&e.protocol==="https:"?`/img-proxy?src=${encodeURIComponent(e.toString())}`:e.toString()}catch{return t}},Ka=t=>new Promise(e=>{try{let r=lp(t),n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(),n.onerror=()=>e();let i=()=>{n.src=r};"requestIdleCallback"in window?window.requestIdleCallback(i,{timeout:500}):setTimeout(i,0)}catch{e()}});var up=230,ir=class{constructor(e,r,n,i){H(this,"containerId");H(this,"boundClickHandler");H(this,"contentService");H(this,"articleRenderer");H(this,"onBackToOverview");H(this,"_shareService");H(this,"_suppressHistory",!1);H(this,"_preloadCache",new Set);this.containerId=e,this.boundClickHandler=this.handleCardClick.bind(this),this.contentService=r,this.articleRenderer=n,this.onBackToOverview=i}wireViewportPrewarm(e){try{if(!("IntersectionObserver"in window))return;let r=e.querySelectorAll(".overview-card"),n=new Set,i=new IntersectionObserver(o=>{for(let a of o){if(!a.isIntersecting)continue;let s=a.target,c=s.getAttribute("data-card-id");if(!c||n.has(c)){i.unobserve(s);continue}n.add(c),i.unobserve(s);let l=()=>void this.preloadForShare(c);"requestIdleCallback"in window?window.requestIdleCallback(l,{timeout:800}):setTimeout(l,0)}},{root:null,rootMargin:"200px 0px",threshold:.15});r.forEach(o=>i.observe(o))}catch{}}wireSharePreload(e){try{e.querySelectorAll(".overview-card__share-btn").forEach(n=>{let i=n,o=!1,a=()=>{if(o)return;o=!0;let s=i.getAttribute("data-card-id");s&&this.preloadForShare(s)};i.addEventListener("mouseenter",a,{once:!0}),i.addEventListener("focus",a,{once:!0}),i.addEventListener("touchstart",a,{once:!0,passive:!0})})}catch{}}async preloadForShare(e){try{if(this._preloadCache.has(e))return;this._preloadCache.add(e);let r=this.resolveCardById(e);if(!r)return;let n=performance.now();if(r.imageUrl)try{await Ka(r.imageUrl)}catch{}let i=(()=>{try{let s=new URL(window.location.href);return s.searchParams.set("module",this.getModuleName()),s.searchParams.set("view","article"),s.searchParams.set("cardId",e),s.toString()}catch{return window.location.href}})(),o=220,a=`https://api.qrserver.com/v1/create-qr-code/?size=${o}x${o}&data=${encodeURIComponent(i)}`;await new Promise(s=>{try{let c=new Image;c.crossOrigin="anonymous",c.onload=()=>s(),c.onerror=()=>{s()};let l=()=>c.src=a;"requestIdleCallback"in window?window.requestIdleCallback(l,{timeout:500}):setTimeout(l,0)}catch{s()}})}catch{}}bindEventListeners(){let e=document.getElementById(this.containerId);if(!e){console.error(`\u672A\u627E\u5230\u5BB9\u5668\u5143\u7D20: ${this.containerId}`);return}this.removeExistingListeners(e),this.addEventListeners(e)}removeExistingListeners(e){e.removeEventListener("click",this.boundClickHandler)}addEventListeners(e){e.addEventListener("click",this.boundClickHandler),this.addDebugListeners(e),this.wireViewportPrewarm(e)}addDebugListeners(e){}handleCardClick(e){let r=e,n=r.target;if(r.currentTarget?.querySelector(".practice-article"))return;let a=n.closest(".overview-card__share-btn");if(a){r.stopPropagation(),r.preventDefault();let c=a.getAttribute("data-card-id");if(!c)return;this.preloadForShare(c);let l=this.resolveCardById(c);if(!l)return;this._shareService=this._shareService||new nr(this.getIcon.bind(this),{moduleName:this.getModuleName()});let u=a.closest(".overview-card");this._shareService.openPreview(l,{matchElement:u||void 0});return}let s=this.extractCardId(n);s&&this.showDetailedContent(s)}openArticle(e){return this.showDetailedContent(e)}async openArticleFromHistory(e){this._suppressHistory=!0;try{await this.showDetailedContent(e)}finally{this._suppressHistory=!1}}extractCardId(e){let r=e.closest(".overview-card");if(r){let i=r.getAttribute("data-card-id");return i||(console.error("\u5361\u7247\u7F3A\u5C11 data-card-id \u5C5E\u6027"),null)}let n=e.closest(".overview-card__action-btn");if(n){let i=n.getAttribute("data-card-id");return i||(console.error("\u6309\u94AE\u7F3A\u5C11 data-card-id \u5C5E\u6027"),null)}return null}async showDetailedContent(e){let r=document.getElementById(this.containerId);if(!r){console.error(`\u672A\u627E\u5230\u5BB9\u5668\u5143\u7D20: ${this.containerId}`);return}try{await this.beforeEnterArticle(r),wn(),r.innerHTML=this.articleRenderer.renderLoadingState();let n=await this.contentService.getArticle(e),i=this.articleRenderer.renderArticle(n.title,n.content);r.innerHTML=i;let o=r.querySelector("#markdown-content-container");if(o){let a=new ot,s=a.render(n.rawMarkdown);o.innerHTML=`<div class="markdown-content">${s}</div>`,a.highlightCode(o),this.addEnhancedFeatures(o)}this.configureBackNavigation(),this._suppressHistory||this.updateHistoryForArticle(e)}catch(n){console.error("\u52A0\u8F7D\u6587\u7AE0\u5931\u8D25:",n);let i=n instanceof Error?n.message:String(n),o=this.articleRenderer.renderErrorState(i);r.innerHTML=o}}async beforeEnterArticle(e){}configureBackNavigation(){let e=document.getElementById(this.containerId);if(!e||!this.onBackToOverview)return;let r=e.querySelector('[data-action="back-to-overview"]');if(!r)return;let n=r._backHandler;n&&r.removeEventListener("click",n),r.removeAttribute("onclick");let i=this.handleBackToOverview.bind(this);r._backHandler=i,r.addEventListener("click",i)}handleBackToOverview(){if(!this.onBackToOverview)return;let e=document.getElementById(this.containerId);if(e){let r=e.querySelector(".practice-article");if(r){r.classList.add("is-exiting"),setTimeout(()=>{this.onBackToOverview(),this.updateHistoryForOverview(),window.scrollTo({top:0,behavior:"smooth"})},up);return}}this.onBackToOverview(),this.updateHistoryForOverview()}addEnhancedFeatures(e){this.addCopyButtonsToCodeBlocks(e),this.addReadingProgress(),this.addBackToTopButton()}addCopyButtonsToCodeBlocks(e){e.querySelectorAll("pre").forEach(n=>{if(!n.querySelector(".copy-button")){let i=document.createElement("button");i.className="copy-button",i.textContent="\u590D\u5236",i.onclick=()=>this.copyCodeBlock(n,i),n.appendChild(i)}})}copyCodeBlock(e,r){let n=e.querySelector("code");n&&navigator.clipboard.writeText(n.textContent||"").then(()=>{r.textContent="\u5DF2\u590D\u5236",r.classList.add("copied"),setTimeout(()=>{r.textContent="\u590D\u5236",r.classList.remove("copied")},2e3)}).catch(()=>{r.textContent="\u590D\u5236\u5931\u8D25",setTimeout(()=>{r.textContent="\u590D\u5236"},2e3)})}addReadingProgress(){let e=document.querySelector(".reading-progress");e&&e.remove();let r=document.createElement("div");r.className="reading-progress",document.body.appendChild(r);let n=()=>{let i=window.pageYOffset,o=document.documentElement.scrollHeight-window.innerHeight,a=i/o*100;r.style.width=`${Math.min(a,100)}%`};window.addEventListener("scroll",n),n()}addBackToTopButton(){let e=document.querySelector(".back-to-top");e&&e.remove();let r=document.createElement("button");r.className="back-to-top",r.innerHTML="\u2191",r.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})},document.body.appendChild(r);let n=()=>{window.pageYOffset>300?r.classList.add("visible"):r.classList.remove("visible")};window.addEventListener("scroll",n),n()}updateHistoryForArticle(e){try{let r=new URL(window.location.href);r.searchParams.set("module",this.getModuleName()),r.searchParams.set("view","article"),r.searchParams.set("cardId",e),window.history.pushState({module:this.getModuleName(),view:"article",cardId:e},"",r.toString())}catch{}}updateHistoryForOverview(){try{let e=new URL(window.location.href);e.searchParams.set("module",this.getModuleName()),e.searchParams.set("view","overview"),e.searchParams.delete("cardId"),window.history.pushState({module:this.getModuleName(),view:"overview"},"",e.toString())}catch{}}};var or=[{id:"sdk-quick-install",title:"SDK\u5FEB\u901F\u5B89\u88C5",description:"\u5FEB\u901F\u5B89\u88C5\u914D\u7F6E Claude Code SDK\uFF0C\u652F\u6301\u547D\u4EE4\u884C\u3001TypeScript \u548C Python \u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F",category:"quick-start",tags:["\u5B89\u88C5\u914D\u7F6E","\u5FEB\u901F\u5F00\u59CB","CLI","TypeScript","Python"],tips:[{type:"tip",title:"\u63A8\u8350\u65B9\u5F0F",content:"\u5BF9\u4E8E\u5FEB\u901F\u539F\u578B\u5F00\u53D1\u63A8\u8350\u4F7F\u7528\u547D\u4EE4\u884C\u65B9\u5F0F\uFF0C\u751F\u4EA7\u73AF\u5883\u63A8\u8350 TypeScript \u6216 Python SDK"},{type:"info",title:"\u73AF\u5883\u8981\u6C42",content:"Node.js 18+ \u662F\u5FC5\u9700\u7684\uFF0C\u5373\u4F7F\u4F7F\u7528 Python SDK \u4E5F\u9700\u8981 NPM \u4F9D\u8D56"}]},{id:"create-first-agent",title:"\u521B\u5EFA\u7B2C\u4E00\u4E2AAgent",description:"\u901A\u8FC7\u5177\u4F53\u793A\u4F8B\u5B66\u4E60\u521B\u5EFA\u4E13\u4E1AAI Agent\uFF0C\u5305\u62EC\u6CD5\u5F8B\u52A9\u624B\u3001SRE\u4E13\u5BB6\u7B49\u5B9E\u9645\u573A\u666F",category:"quick-start",tips:[{type:"success",title:"\u5B9E\u7528\u5EFA\u8BAE",content:"\u4ECE\u7B80\u5355\u7684\u5355\u4E00\u529F\u80FD Agent \u5F00\u59CB\uFF0C\u9010\u6B65\u589E\u52A0\u590D\u6742\u5EA6\u548C\u5DE5\u5177\u96C6\u6210"},{type:"expert",title:"\u4E13\u4E1A\u63D0\u793A",content:"\u6E05\u6670\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u662F Agent \u8868\u73B0\u4F18\u79C0\u7684\u5173\u952E\uFF0C\u8981\u660E\u786E\u5B9A\u4E49\u89D2\u8272\u3001\u76EE\u6807\u548C\u7EA6\u675F"}]},{id:"api-authentication",title:"API\u8BA4\u8BC1\u914D\u7F6E",description:"\u638C\u63E1\u591A\u79CDAPI\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5305\u62ECAnthropic\u76F4\u8FDE\u3001Amazon Bedrock\u548CGoogle Vertex AI",category:"core-usage",tips:[{type:"info",title:"\u6210\u672C\u8003\u8651",content:"\u4E0D\u540C\u63D0\u4F9B\u5546\u7684\u5B9A\u4EF7\u7B56\u7565\u4E0D\u540C\uFF0C\u9009\u62E9\u8BA4\u8BC1\u65B9\u5F0F\u65F6\u8981\u8003\u8651\u6210\u672C\u548C\u5730\u57DF\u9650\u5236"},{type:"warning",title:"\u5B89\u5168\u63D0\u9192",content:"\u751F\u4EA7\u73AF\u5883\u4E2D\u907F\u514D\u786C\u7F16\u7801 API \u5BC6\u94A5\uFF0C\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u548C\u5BC6\u94A5\u7BA1\u7406\u670D\u52A1"}]},{id:"multi-turn-conversations",title:"\u591A\u8F6E\u5BF9\u8BDD\u7BA1\u7406",description:"\u5B66\u4E60\u7BA1\u7406\u590D\u6742\u7684\u591A\u8F6E\u5BF9\u8BDD\uFF0C\u5305\u62EC\u4F1A\u8BDD\u6301\u7EED\u3001\u72B6\u6001\u4FDD\u6301\u548C\u4E0A\u4E0B\u6587\u7BA1\u7406",category:"core-usage",tags:["\u591A\u8F6E\u5BF9\u8BDD","\u4F1A\u8BDD\u7BA1\u7406","\u72B6\u6001\u4FDD\u6301","\u4E0A\u4E0B\u6587\u7BA1\u7406"],tips:[{type:"expert",title:"\u67B6\u6784\u5EFA\u8BAE",content:"\u5BF9\u4E8E\u590D\u6742\u4E1A\u52A1\u6D41\u7A0B\uFF0C\u5EFA\u8BAE\u4F7F\u7528 Python SDK \u7684\u6301\u4E45\u8FDE\u63A5\u6A21\u5F0F\u7EF4\u62A4\u4F1A\u8BDD\u72B6\u6001"},{type:"tip",title:"\u6027\u80FD\u4F18\u5316",content:"\u5408\u7406\u63A7\u5236 maxTurns \u53C2\u6570\u907F\u514D\u65E0\u9650\u5FAA\u73AF\uFF0C\u540C\u65F6\u4FDD\u6301\u8DB3\u591F\u7684\u4EA4\u4E92\u6DF1\u5EA6"}]},{id:"custom-system-prompts",title:"\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD",description:"\u5B66\u4E60\u7F16\u5199\u9AD8\u8D28\u91CF\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u5B9A\u4E49Agent\u7684\u4E13\u4E1A\u89D2\u8272\u3001\u884C\u4E3A\u6A21\u5F0F\u548C\u9886\u57DFexpertise",category:"core-usage",tips:[{type:"expert",title:"\u8BBE\u8BA1\u539F\u5219",content:'\u4F18\u79C0\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u5E94\u8BE5\u660E\u786E\u5B9A\u4E49"\u662F\u4EC0\u4E48"\u3001"\u505A\u4EC0\u4E48"\u3001"\u4E0D\u505A\u4EC0\u4E48"\u4E09\u4E2A\u5173\u952E\u8981\u7D20'},{type:"success",title:"\u6D4B\u8BD5\u5EFA\u8BAE",content:"\u901A\u8FC7\u591A\u8F6E\u5BF9\u8BDD\u6D4B\u8BD5\u63D0\u793A\u8BCD\u7684\u4E00\u81F4\u6027\uFF0C\u786E\u4FDD Agent \u5728\u4E0D\u540C\u573A\u666F\u4E0B\u7684\u8868\u73B0\u7A33\u5B9A"}]},{id:"output-format-control",title:"\u8F93\u51FA\u683C\u5F0F\u63A7\u5236",description:"\u638C\u63E1Text\u3001JSON\u3001Stream\u4E09\u79CD\u8F93\u51FA\u683C\u5F0F\uFF0C\u4E3A\u4E0D\u540C\u5E94\u7528\u573A\u666F\u9009\u62E9\u6700\u9002\u5408\u7684\u6570\u636E\u4EA4\u4E92\u65B9\u5F0F",category:"core-usage",tips:[{type:"info",title:"\u6027\u80FD\u8003\u8651",content:"\u6D41\u5F0F\u8F93\u51FA\u80FD\u663E\u8457\u6539\u5584\u7528\u6237\u4F53\u9A8C\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u957F\u65F6\u95F4\u8FD0\u884C\u7684 Agent \u4EFB\u52A1"},{type:"tip",title:"\u96C6\u6210\u5EFA\u8BAE",content:"JSON \u683C\u5F0F\u5305\u542B\u6210\u672C\u3001\u8017\u65F6\u7B49\u5143\u6570\u636E\uFF0C\u4FBF\u4E8E\u76D1\u63A7\u548C\u4F18\u5316 Agent \u6027\u80FD"}]},{id:"mcp-tools-integration",title:"MCP\u5DE5\u5177\u96C6\u6210",description:"\u901A\u8FC7\u6A21\u578B\u4E0A\u4E0B\u6587\u534F\u8BAE(MCP)\u6269\u5C55Agent\u80FD\u529B\uFF0C\u96C6\u6210Slack\u3001JIRA\u3001\u6570\u636E\u5E93\u7B49\u5916\u90E8\u5DE5\u5177",category:"advanced",tips:[{type:"warning",title:"\u5B89\u5168\u6CE8\u610F",content:"MCP \u5DE5\u5177\u9700\u8981\u663E\u5F0F\u6388\u6743\u624D\u80FD\u4F7F\u7528\uFF0C\u9075\u5FAA\u6700\u5C0F\u6743\u9650\u539F\u5219\u914D\u7F6E\u5DE5\u5177\u8BBF\u95EE"},{type:"expert",title:"\u67B6\u6784\u8BBE\u8BA1",content:"\u4E3A\u4E0D\u540C\u4E1A\u52A1\u573A\u666F\u8BBE\u8BA1\u4E13\u95E8\u7684 MCP \u5DE5\u5177\u7EC4\u5408\uFF0C\u5982 SRE \u5DE5\u5177\u5305\u3001\u5F00\u53D1\u5DE5\u5177\u5305\u7B49"}]}];var sr=class extends ir{constructor(e,r,n){super(e,r,n,()=>window.initializeHowToApplyCC())}resolveCardById(e){return or.find(r=>r.id===e)||null}getIcon(e){return Rt[e]||"\u{1F4CB}"}};var ar=class{bindEventListeners(){this.bindBreadcrumbNavigation()}bindBreadcrumbNavigation(){document.addEventListener("click",e=>{let r=e.target;if(r.matches(".breadcrumb-link")){e.preventDefault();let n=r.getAttribute("data-target");n&&this.navigateToSection(n)}})}navigateToSection(e){let r=document.getElementById(e);r&&r.scrollIntoView({behavior:"smooth"})}};var cr=class{constructor(e,r=!1){H(this,"markdownParser");H(this,"cache",new Map);H(this,"disableCache");this.markdownParser=e,this.disableCache=r}async getArticle(e){this.disableCache&&this.cache.has(e)&&this.cache.delete(e);try{let r=await this.fetchMarkdownContent(e),n=this.markdownParser.render(r),i={id:e,title:this.getTitleFromCardId(e),content:n,rawMarkdown:r};return this.cache.set(e,i),i}catch(r){throw new Error(`\u65E0\u6CD5\u52A0\u8F7D\u6587\u7AE0 ${e}: ${r.message}`)}}async fetchMarkdownContent(e){return this.getContentFromFile(e)}};var ja=`# SDK\u5FEB\u901F\u5B89\u88C5
// 
// Claude Code SDK \u652F\u6301\u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u9009\u62E9\u6700\u9002\u5408\u4F60\u9879\u76EE\u7684\u5B89\u88C5\u65B9\u6CD5\u3002
// 
// ## \u5B89\u88C5\u65B9\u5F0F\u9009\u62E9
// 
// ### 1. \u547D\u4EE4\u884C\u65B9\u5F0F\uFF08\u63A8\u8350\u7528\u4E8E\u5FEB\u901F\u539F\u578B\uFF09
// 
// \u6700\u7B80\u5355\u7684\u65B9\u5F0F\u662F\u76F4\u63A5\u4F7F\u7528 NPM \u5168\u5C40\u5B89\u88C5\uFF1A
// 
// \`\`\`bash
// npm install -g @anthropic/claude-code-sdk
// \`\`\`
// 
// \u5B89\u88C5\u5B8C\u6210\u540E\u53EF\u4EE5\u76F4\u63A5\u5728\u547D\u4EE4\u884C\u4F7F\u7528\uFF1A
// 
// \`\`\`bash
// claude-code --help
// \`\`\`
// 
// ### 2. TypeScript/JavaScript \u9879\u76EE\u96C6\u6210
// 
// \u5BF9\u4E8E TypeScript \u6216 JavaScript \u9879\u76EE\uFF0C\u6DFB\u52A0 SDK \u4F9D\u8D56\uFF1A
// 
// \`\`\`bash
// npm install @anthropic/claude-code-sdk
// \`\`\`
// 
// \u5728\u9879\u76EE\u4E2D\u5BFC\u5165\u4F7F\u7528\uFF1A
// 
// \`\`\`typescript
// import { ClaudeCodeSDK } from '@anthropic/claude-code-sdk';
// 
// const sdk = new ClaudeCodeSDK({
//   apiKey: process.env.ANTHROPIC_API_KEY,
// });
// \`\`\`
// 
// ### 3. Python \u9879\u76EE\u96C6\u6210
// 
// Python \u9879\u76EE\u53EF\u4EE5\u901A\u8FC7 pip \u5B89\u88C5\uFF1A
// 
// \`\`\`bash
// pip install claude-code-sdk
// \`\`\`
// 
// Python \u4F7F\u7528\u65B9\u5F0F\uFF1A
// 
// \`\`\`python
// from claude_code import ClaudeCodeClient
// 
// client = ClaudeCodeClient(
//     api_key=os.getenv("ANTHROPIC_API_KEY")
// )
// \`\`\`
// 
// ## API \u5BC6\u94A5\u914D\u7F6E
// 
// \u6240\u6709\u5B89\u88C5\u65B9\u5F0F\u90FD\u9700\u8981\u914D\u7F6E Anthropic API \u5BC6\u94A5\uFF1A
// 
// ### \u73AF\u5883\u53D8\u91CF\u65B9\u5F0F\uFF08\u63A8\u8350\uFF09
// 
// \`\`\`bash
// export ANTHROPIC_API_KEY="your-api-key-here"
// \`\`\`
// 
// ### \u914D\u7F6E\u6587\u4EF6\u65B9\u5F0F
// 
// \u521B\u5EFA \`~/.claude/config.json\`\uFF1A
// 
// \`\`\`json
// {
//   "apiKey": "your-api-key-here",
//   "defaultModel": "claude-3-sonnet-20240229"
// }
// \`\`\`
// 
// ## \u9A8C\u8BC1\u5B89\u88C5
// 
// \u8FD0\u884C\u7B80\u5355\u793A\u4F8B\u786E\u8BA4\u5B89\u88C5\u6210\u529F\uFF1A
// 
// ### \u547D\u4EE4\u884C\u9A8C\u8BC1
// 
// \`\`\`bash
// claude-code "\u521B\u5EFA\u4E00\u4E2AHello World\u7A0B\u5E8F"
// \`\`\`
// 
// ### TypeScript \u9A8C\u8BC1
// 
// \`\`\`typescript
// async function test() {
//   const result = await sdk.run("\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u8BA1\u7B97\u5668");
//   console.log(result);
// }
// test();
// \`\`\`
// 
// ### Python \u9A8C\u8BC1
// 
// \`\`\`python
// result = client.run("\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u5F85\u529E\u5217\u8868")
// print(result)
// \`\`\`
// 
// ## \u73AF\u5883\u8981\u6C42
// 
// - **Node.js 18+** \u662F\u5FC5\u9700\u7684\uFF0C\u5373\u4F7F\u4F7F\u7528 Python SDK \u4E5F\u9700\u8981 NPM \u4F9D\u8D56
// - **Git** \u7528\u4E8E\u7248\u672C\u63A7\u5236\u96C6\u6210
// - **\u652F\u6301\u7684\u64CD\u4F5C\u7CFB\u7EDF**: macOS, Linux, Windows
// `;var Wa=`# \u521B\u5EFA\u7B2C\u4E00\u4E2AAgent
// 
// \u901A\u8FC7\u5177\u4F53\u793A\u4F8B\u5B66\u4E60\u521B\u5EFA\u4E13\u4E1A AI Agent\uFF0C\u4ECE\u7B80\u5355\u529F\u80FD\u5F00\u59CB\u9010\u6B65\u6784\u5EFA\u590D\u6742\u5E94\u7528\u3002
// 
// ## \u6CD5\u5F8B\u52A9\u624B\u793A\u4F8B
// 
// \u521B\u5EFA\u4E00\u4E2A\u5408\u540C\u5BA1\u67E5\u548C\u98CE\u9669\u8BC6\u522B\u7684\u6CD5\u5F8B Agent\uFF1A
// 
// ### \u57FA\u7840\u914D\u7F6E
// 
// \`\`\`typescript
// import { ClaudeCodeSDK } from '@anthropic/claude-code-sdk';
// 
// const legalAgent = new ClaudeCodeSDK({
//   apiKey: process.env.ANTHROPIC_API_KEY,
//   systemPrompt: \`
// \u4F60\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u6CD5\u5F8B\u987E\u95EE\u52A9\u624B\uFF0C\u4E13\u95E8\u534F\u52A9\u5408\u540C\u5BA1\u67E5\u548C\u98CE\u9669\u5206\u6790\u3002
// 
// \u6838\u5FC3\u80FD\u529B\uFF1A
// - \u8BC6\u522B\u5408\u540C\u4E2D\u7684\u5173\u952E\u6761\u6B3E\u548C\u6F5C\u5728\u98CE\u9669
// - \u63D0\u4F9B\u6CD5\u5F8B\u5408\u89C4\u6027\u5EFA\u8BAE
// - \u6807\u8BB0\u9700\u8981\u5F8B\u5E08\u8FDB\u4E00\u6B65\u5BA1\u67E5\u7684\u6761\u6B3E
// 
// \u5DE5\u4F5C\u539F\u5219\uFF1A
// - \u59CB\u7EC8\u63D0\u9192\u7528\u6237\u8FD9\u4E0D\u80FD\u66FF\u4EE3\u4E13\u4E1A\u6CD5\u5F8B\u610F\u89C1
// - \u91CD\u70B9\u5173\u6CE8\u98CE\u9669\u8BC6\u522B\u800C\u975E\u6CD5\u5F8B\u7ED3\u8BBA
// - \u4F7F\u7528\u6E05\u6670\u7684\u7ED3\u6784\u5316\u8F93\u51FA\u683C\u5F0F
//   \`,
// });
// \`\`\`
// 
// ### \u4F7F\u7528\u793A\u4F8B
// 
// \`\`\`typescript
// async function reviewContract(contractText: string) {
//   const result = await legalAgent.run(\`
// \u8BF7\u5BA1\u67E5\u4EE5\u4E0B\u5408\u540C\u5E76\u8BC6\u522B\u5173\u952E\u98CE\u9669\u70B9\uFF1A
// 
// \${contractText}
// 
// \u8BF7\u6309\u4EE5\u4E0B\u683C\u5F0F\u8F93\u51FA\uFF1A
// 1. \u5173\u952E\u6761\u6B3E\u6458\u8981
// 2. \u6F5C\u5728\u98CE\u9669\u8BC6\u522B
// 3. \u5EFA\u8BAE\u5173\u6CE8\u7684\u6761\u6B3E
// 4. \u4E0B\u4E00\u6B65\u884C\u52A8\u5EFA\u8BAE
//   \`);
//   
//   return result;
// }
// \`\`\`
// 
// ## SRE\u8FD0\u7EF4\u4E13\u5BB6
// 
// \u6784\u5EFA\u7CFB\u7EDF\u8BCA\u65AD\u548C\u95EE\u9898\u89E3\u51B3\u7684\u8FD0\u7EF4 Agent\uFF1A
// 
// ### \u7CFB\u7EDF\u63D0\u793A\u8BCD\u8BBE\u8BA1
// 
// \`\`\`typescript
// const sreAgent = new ClaudeCodeSDK({
//   apiKey: process.env.ANTHROPIC_API_KEY,
//   systemPrompt: \`
// \u4F60\u662F\u4E00\u540D Site Reliability Engineering (SRE) \u4E13\u5BB6\uFF0C\u4E13\u95E8\u5904\u7406\u7CFB\u7EDF\u6545\u969C\u8BCA\u65AD\u548C\u6027\u80FD\u4F18\u5316\u3002
// 
// \u4E13\u4E1A\u9886\u57DF\uFF1A
// - \u7CFB\u7EDF\u76D1\u63A7\u548C\u544A\u8B66\u5206\u6790
// - \u6027\u80FD\u74F6\u9888\u8BC6\u522B\u548C\u4F18\u5316
// - \u6545\u969C\u6392\u67E5\u548C\u6839\u56E0\u5206\u6790
// - \u81EA\u52A8\u5316\u8FD0\u7EF4\u65B9\u6848\u8BBE\u8BA1
// 
// \u8BCA\u65AD\u6D41\u7A0B\uFF1A
// 1. \u6536\u96C6\u7CFB\u7EDF\u72B6\u6001\u4FE1\u606F
// 2. \u5206\u6790\u65E5\u5FD7\u548C\u76D1\u63A7\u6570\u636E
// 3. \u8BC6\u522B\u95EE\u9898\u6839\u672C\u539F\u56E0
// 4. \u63D0\u4F9B\u89E3\u51B3\u65B9\u6848\u548C\u9884\u9632\u63AA\u65BD
// 
// \u8F93\u51FA\u8981\u6C42\uFF1A
// - \u4F7F\u7528\u7ED3\u6784\u5316\u7684\u8BCA\u65AD\u62A5\u544A
// - \u63D0\u4F9B\u5177\u4F53\u7684\u547D\u4EE4\u548C\u914D\u7F6E
// - \u5305\u542B\u76D1\u63A7\u548C\u9A8C\u8BC1\u6B65\u9AA4
//   \`,
// });
// \`\`\`
// 
// ### \u6545\u969C\u8BCA\u65AD\u793A\u4F8B
// 
// \`\`\`typescript
// async function diagnoseSystemIssue(symptoms: string, logs: string) {
//   const diagnosis = await sreAgent.run(\`
// \u7CFB\u7EDF\u51FA\u73B0\u4EE5\u4E0B\u75C7\u72B6\uFF1A
// \${symptoms}
// 
// \u76F8\u5173\u65E5\u5FD7\uFF1A
// \${logs}
// 
// \u8BF7\u8FDB\u884C\u5168\u9762\u8BCA\u65AD\u5E76\u63D0\u4F9B\u89E3\u51B3\u65B9\u6848\u3002
//   \`);
//   
//   return diagnosis;
// }
// \`\`\`
// 
// ## \u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD\u539F\u5219
// 
// ### \u89D2\u8272\u5B9A\u4E49
// 
// \u660E\u786E\u5B9A\u4E49 Agent \u7684\u4E13\u4E1A\u8EAB\u4EFD\u548C\u80FD\u529B\u8FB9\u754C\uFF1A
// 
// \`\`\`typescript
// const customAgent = new ClaudeCodeSDK({
//   systemPrompt: \`
// # \u89D2\u8272\u5B9A\u4E49
// \u4F60\u662F\u4E00\u540D [\u5177\u4F53\u4E13\u4E1A\u89D2\u8272]\uFF0C\u5177\u6709 [\u4E13\u4E1A\u5E74\u9650] \u5E74\u7ECF\u9A8C\u3002
// 
// # \u6838\u5FC3\u80FD\u529B
// - \u80FD\u529B1\uFF1A\u5177\u4F53\u63CF\u8FF0
// - \u80FD\u529B2\uFF1A\u5177\u4F53\u63CF\u8FF0
// - \u80FD\u529B3\uFF1A\u5177\u4F53\u63CF\u8FF0
// 
// # \u5DE5\u4F5C\u7EA6\u675F
// - \u4E0D\u80FD\u505A\u4EC0\u4E48\uFF1A\u660E\u786E\u9650\u5236
// - \u4F26\u7406\u8FB9\u754C\uFF1A\u9053\u5FB7\u548C\u6CD5\u5F8B\u7EA6\u675F
// - \u8F93\u51FA\u683C\u5F0F\uFF1A\u6807\u51C6\u5316\u8981\u6C42
// 
// # \u4EA4\u4E92\u65B9\u5F0F
// - \u6C9F\u901A\u98CE\u683C\uFF1A\u4E13\u4E1A\u3001\u53CB\u597D\u3001\u7B80\u6D01
// - \u54CD\u5E94\u683C\u5F0F\uFF1A\u7ED3\u6784\u5316\u8F93\u51FA
// - \u786E\u8BA4\u673A\u5236\uFF1A\u91CD\u8981\u51B3\u7B56\u524D\u7684\u786E\u8BA4
//   \`,
// });
// \`\`\`
// 
// ### \u63D0\u793A\u8BCD\u6A21\u677F
// 
// \`\`\`typescript
// const promptTemplate = {
//   role: "\u4E13\u4E1A\u89D2\u8272\u63CF\u8FF0",
//   capabilities: ["\u80FD\u529B1", "\u80FD\u529B2", "\u80FD\u529B3"],
//   constraints: ["\u7EA6\u675F1", "\u7EA6\u675F2"],
//   outputFormat: {
//     structure: "\u8F93\u51FA\u7ED3\u6784\u8BF4\u660E",
//     style: "\u6C9F\u901A\u98CE\u683C\u8981\u6C42"
//   },
//   examples: [
//     {
//       input: "\u793A\u4F8B\u8F93\u5165",
//       output: "\u671F\u671B\u8F93\u51FA"
//     }
//   ]
// };
// \`\`\`
// 
// ## \u6E10\u8FDB\u5F0F\u5F00\u53D1\u7B56\u7565
// 
// ### \u7B2C\u4E00\u9636\u6BB5\uFF1A\u57FA\u7840\u529F\u80FD
// 
// \`\`\`typescript
// // \u7B80\u5355\u7684\u5355\u4E00\u529F\u80FD Agent
// const simpleAgent = new ClaudeCodeSDK({
//   systemPrompt: "\u4F60\u662F\u4E00\u4E2A\u4EE3\u7801\u5BA1\u67E5\u52A9\u624B\uFF0C\u4E13\u95E8\u68C0\u67E5JavaScript\u4EE3\u7801\u7684\u5E38\u89C1\u95EE\u9898\u3002"
// });
// \`\`\`
// 
// ### \u7B2C\u4E8C\u9636\u6BB5\uFF1A\u589E\u52A0\u5DE5\u5177\u96C6\u6210
// 
// \`\`\`typescript
// // \u96C6\u6210\u5916\u90E8\u5DE5\u5177\u7684 Agent
// const enhancedAgent = new ClaudeCodeSDK({
//   systemPrompt: "...",
//   tools: [
//     'github-integration',
//     'code-analysis',
//     'documentation-generator'
//   ]
// });
// \`\`\`
// 
// ### \u7B2C\u4E09\u9636\u6BB5\uFF1A\u591A\u529F\u80FD\u6574\u5408
// 
// \`\`\`typescript
// // \u7EFC\u5408\u6027\u4E13\u4E1A Agent
// const professionalAgent = new ClaudeCodeSDK({
//   systemPrompt: "...",
//   tools: [...],
//   workflows: [...],
//   integrations: [...]
// });
// \`\`\`
// 
// ## \u6700\u4F73\u5B9E\u8DF5
// 
// ### \u6D4B\u8BD5\u548C\u9A8C\u8BC1
// 
// \`\`\`typescript
// // Agent \u529F\u80FD\u6D4B\u8BD5
// async function testAgent() {
//   const testCases = [
//     { input: "\u6D4B\u8BD5\u8F93\u51651", expected: "\u671F\u671B\u8F93\u51FA\u7C7B\u578B" },
//     { input: "\u6D4B\u8BD5\u8F93\u51652", expected: "\u671F\u671B\u8F93\u51FA\u7C7B\u578B" }
//   ];
//   
//   for (const testCase of testCases) {
//     const result = await agent.run(testCase.input);
//     validateOutput(result, testCase.expected);
//   }
// }
// \`\`\`
// 
// ### \u6027\u80FD\u76D1\u63A7
// 
// \`\`\`typescript
// // \u76D1\u63A7 Agent \u6027\u80FD
// const agentWithMonitoring = new ClaudeCodeSDK({
//   apiKey: process.env.ANTHROPIC_API_KEY,
//   monitoring: {
//     logRequests: true,
//     trackPerformance: true,
//     alertThresholds: {
//       responseTime: 5000, // 5\u79D2
//       errorRate: 0.05     // 5%
//     }
//   }
// });
// \`\`\`
// 
// \u4ECE\u7B80\u5355\u7684\u5355\u4E00\u529F\u80FD Agent \u5F00\u59CB\uFF0C\u901A\u8FC7\u6D4B\u8BD5\u9A8C\u8BC1\u540E\u518D\u9010\u6B65\u589E\u52A0\u590D\u6742\u5EA6\u548C\u5DE5\u5177\u96C6\u6210\u3002\u6E05\u6670\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u662F Agent \u8868\u73B0\u4F18\u79C0\u7684\u5173\u952E\u57FA\u7840\u3002`;var Za=`# API\u8BA4\u8BC1\u914D\u7F6E
// 
// \u638C\u63E1\u591A\u79CDAPI\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5B9E\u73B0\u7075\u6D3B\u7684\u6A21\u578B\u63D0\u4F9B\u5546\u5207\u6362\u548C\u6210\u672C\u4F18\u5316\u3002
// 
// ## Anthropic \u76F4\u8FDE
// 
// \u6807\u51C6\u7684\u5B98\u65B9\u8BA4\u8BC1\u65B9\u5F0F\uFF1A
// 
// \`\`\`bash
// export ANTHROPIC_API_KEY="sk-ant-api03-..."
// \`\`\`
// 
// \`\`\`typescript
// import { ClaudeCodeSDK } from '@anthropic/claude-code-sdk';
// 
// const sdk = new ClaudeCodeSDK({
//   provider: 'anthropic',
//   apiKey: process.env.ANTHROPIC_API_KEY,
//   model: 'claude-3-sonnet-20240229'
// });
// \`\`\`
// 
// ## Amazon Bedrock
// 
// \u901A\u8FC7 AWS \u8BBF\u95EE Claude \u6A21\u578B\uFF0C\u9002\u5408\u4F01\u4E1A\u7528\u6237\uFF1A
// 
// \`\`\`bash
// export AWS_ACCESS_KEY_ID="your-access-key"
// export AWS_SECRET_ACCESS_KEY="your-secret-key"
// export AWS_REGION="us-east-1"
// \`\`\`
// 
// \`\`\`typescript
// const sdk = new ClaudeCodeSDK({
//   provider: 'bedrock',
//   region: 'us-east-1',
//   model: 'anthropic.claude-3-sonnet-20240229-v1:0'
// });
// \`\`\`
// 
// ## Google Vertex AI
// 
// \u4F7F\u7528 Google Cloud \u51ED\u8BC1\uFF1A
// 
// \`\`\`bash
// export GOOGLE_APPLICATION_CREDENTIALS="/path/to/credentials.json"
// export GOOGLE_CLOUD_PROJECT="your-project-id"
// \`\`\`
// 
// \`\`\`typescript
// const sdk = new ClaudeCodeSDK({
//   provider: 'vertex',
//   projectId: process.env.GOOGLE_CLOUD_PROJECT,
//   location: 'us-central1'
// });
// \`\`\`
// 
// ## \u8BA4\u8BC1\u4F18\u5148\u7EA7
// 
// 1. \u663E\u5F0F\u4F20\u5165\u7684\u8BA4\u8BC1\u53C2\u6570
// 2. \u73AF\u5883\u53D8\u91CF
// 3. \u914D\u7F6E\u6587\u4EF6 \`~/.claude/config.json\`
// 4. \u9ED8\u8BA4\u7684\u7CFB\u7EDF\u8BA4\u8BC1
// 
// ## \u6210\u672C\u4F18\u5316\u7B56\u7565
// 
// \u4E0D\u540C\u63D0\u4F9B\u5546\u5B9A\u4EF7\u5BF9\u6BD4\uFF1A
// 
// - **Anthropic\u76F4\u8FDE**: \u5B98\u65B9\u5B9A\u4EF7\uFF0C\u529F\u80FD\u5B8C\u6574
// - **Bedrock**: \u4F01\u4E1A\u6298\u6263\uFF0C\u96C6\u6210AWS\u670D\u52A1
// - **Vertex AI**: Google Cloud\u79EF\u5206\uFF0C\u5730\u57DF\u4F18\u52BF
// 
// ## \u5B89\u5168\u6700\u4F73\u5B9E\u8DF5
// 
// \`\`\`typescript
// // \u751F\u4EA7\u73AF\u5883\u914D\u7F6E
// const sdk = new ClaudeCodeSDK({
//   apiKey: process.env.ANTHROPIC_API_KEY, // \u73AF\u5883\u53D8\u91CF
//   timeout: 30000, // 30\u79D2\u8D85\u65F6
//   maxRetries: 3,
//   rateLimiting: {
//     requestsPerMinute: 60
//   }
// });
// \`\`\`
// 
// \u907F\u514D\u5728\u4EE3\u7801\u4E2D\u786C\u7F16\u7801\u5BC6\u94A5\uFF0C\u4F7F\u7528\u5BC6\u94A5\u7BA1\u7406\u670D\u52A1\u548C\u73AF\u5883\u53D8\u91CF\u3002`;var Va=`# \u591A\u8F6E\u5BF9\u8BDD\u7BA1\u7406
// 
// \u638C\u63E1\u591A\u8F6E\u5BF9\u8BDD\u7684\u6838\u5FC3\u6280\u5DE7\uFF0C\u6784\u5EFA\u80FD\u591F\u4FDD\u6301\u957F\u671F\u8BB0\u5FC6\u548C\u4E0A\u4E0B\u6587\u7684\u667A\u80FDAgent\u3002
// 
// ## \u4F1A\u8BDD\u6301\u7EED\u7B56\u7565
// 
// ### \u547D\u4EE4\u884C\u65B9\u5F0F
// 
// \`\`\`bash
// # \u7EE7\u7EED\u4E0A\u6B21\u4F1A\u8BDD
// claude-code --continue "\u8BA9\u6211\u4EEC\u7EE7\u7EED\u4E0A\u6B21\u7684\u8BA8\u8BBA"
// 
// # \u6062\u590D\u7279\u5B9A\u4F1A\u8BDD
// claude-code --resume session-id-123 "\u56DE\u5230\u4E4B\u524D\u7684\u8BA1\u5212"
// 
// # \u8BBE\u7F6E\u6700\u5927\u8F6E\u6B21
// claude-code --maxTurns 10 "\u5F00\u59CB\u65B0\u7684\u4EA4\u4E92\u4EFB\u52A1"
// \`\`\`
// 
// ### Session ID \u7BA1\u7406
// 
// \`\`\`bash
// # \u67E5\u770B\u6240\u6709\u4F1A\u8BDD
// claude-code --list-sessions
// 
// # \u5220\u9664\u7279\u5B9A\u4F1A\u8BDD
// claude-code --delete-session session-id-123
// 
// # \u5BFC\u51FA\u4F1A\u8BDD\u5386\u53F2
// claude-code --export-session session-id-123 > conversation.json
// \`\`\`
// 
// ## TypeScript SDK \u5B9E\u73B0
// 
// ### \u4F1A\u8BDD\u7BA1\u7406\u7C7B
// 
// \`\`\`typescript
// import { ClaudeCodeSDK } from '@anthropic/claude-code-sdk';
// 
// class ConversationManager {
//   private sdk: ClaudeCodeSDK;
//   private sessionId: string;
//   private messageHistory: Array<{role: string, content: string}>;
// 
//   constructor(apiKey: string) {
//     this.sdk = new ClaudeCodeSDK({ apiKey });
//     this.sessionId = this.generateSessionId();
//     this.messageHistory = [];
//   }
// 
//   async sendMessage(content: string) {
//     // \u6DFB\u52A0\u7528\u6237\u6D88\u606F
//     this.messageHistory.push({ role: 'user', content });
//     
//     const response = await this.sdk.run(content, {
//       sessionId: this.sessionId,
//       context: this.messageHistory,
//       maxTurns: 50
//     });
//     
//     // \u4FDD\u5B58\u52A9\u624B\u56DE\u590D
//     this.messageHistory.push({ role: 'assistant', content: response.content });
//     
//     return response;
//   }
// 
//   saveSession() {
//     localStorage.setItem(\`claude_session_\${this.sessionId}\`, 
//       JSON.stringify(this.messageHistory));
//   }
// 
//   loadSession(sessionId: string) {
//     const saved = localStorage.getItem(\`claude_session_\${sessionId}\`);
//     if (saved) {
//       this.sessionId = sessionId;
//       this.messageHistory = JSON.parse(saved);
//     }
//   }
// }
// \`\`\`
// 
// ### \u4F7F\u7528\u793A\u4F8B
// 
// \`\`\`typescript
// const conversation = new ConversationManager(process.env.ANTHROPIC_API_KEY);
// 
// // \u7B2C\u4E00\u8F6E\u5BF9\u8BDD
// const response1 = await conversation.sendMessage(
//   "\u8BF7\u5E2E\u6211\u8BBE\u8BA1\u4E00\u4E2A\u7528\u6237\u7BA1\u7406\u7CFB\u7EDF"
// );
// 
// // \u7B2C\u4E8C\u8F6E - \u4FDD\u6301\u4E0A\u4E0B\u6587
// const response2 = await conversation.sendMessage(
//   "\u8BF7\u589E\u52A0\u89D2\u8272\u6743\u9650\u7BA1\u7406\u529F\u80FD"
// );
// 
// // \u4FDD\u5B58\u4F1A\u8BDD
// conversation.saveSession();
// \`\`\`
// 
// ## Python SDK \u5B9E\u73B0
// 
// ### ClaudeSDKClient \u4F1A\u8BDD\u6A21\u5F0F
// 
// \`\`\`python
// from claude_code import ClaudeSDKClient
// import json
// import uuid
// 
// class ConversationManager:
//     def __init__(self, api_key: str):
//         self.client = ClaudeSDKClient(api_key=api_key)
//         self.session_id = str(uuid.uuid4())
//         self.message_history = []
//         
//     async def send_message(self, content: str):
//         # \u6DFB\u52A0\u7528\u6237\u6D88\u606F
//         self.message_history.append({"role": "user", "content": content})
//         
//         response = await self.client.run(
//             content,
//             session_id=self.session_id,
//             context=self.message_history,
//             max_turns=50
//         )
//         
//         # \u4FDD\u5B58\u52A9\u624B\u56DE\u590D
//         self.message_history.append({
//             "role": "assistant", 
//             "content": response.content
//         })
//         
//         return response
//         
//     def save_session(self, filename: str = None):
//         if not filename:
//             filename = f"session_{self.session_id}.json"
//         
//         with open(filename, 'w', encoding='utf-8') as f:
//             json.dump(self.message_history, f, ensure_ascii=False, indent=2)
//             
//     def load_session(self, filename: str):
//         with open(filename, 'r', encoding='utf-8') as f:
//             self.message_history = json.load(f)
// \`\`\`
// 
// ## \u6027\u80FD\u4F18\u5316\u7B56\u7565
// 
// ### \u4E0A\u4E0B\u6587\u7A97\u53E3\u7BA1\u7406
// 
// \`\`\`typescript
// class ContextWindow {
//   private maxTokens = 100000; // \u6A21\u578B\u4E0A\u4E0B\u6587\u9650\u5236
//   private messages: Message[];
//   
//   addMessage(message: Message) {
//     this.messages.push(message);
//     this.trimContext();
//   }
//   
//   private trimContext() {
//     let totalTokens = this.calculateTokens();
//     
//     while (totalTokens > this.maxTokens && this.messages.length > 2) {
//       // \u4FDD\u7559\u7CFB\u7EDF\u6D88\u606F\u548C\u6700\u8FD1\u7684\u4EA4\u4E92
//       this.messages.splice(1, 1); // \u79FB\u9664\u6700\u65E9\u7684\u975E\u7CFB\u7EDF\u6D88\u606F
//       totalTokens = this.calculateTokens();
//     }
//   }
//   
//   private calculateTokens(): number {
//     // \u7B80\u5316\u7684token\u8BA1\u7B97\uFF0C\u5B9E\u9645\u9879\u76EE\u4E2D\u4F7F\u7528tiktoken
//     return this.messages.reduce((sum, msg) => 
//       sum + Math.ceil(msg.content.length / 4), 0);
//   }
// }
// \`\`\`
// 
// ### \u6279\u91CF\u5904\u7406\u4F18\u5316
// 
// \`\`\`typescript
// // \u9AD8\u6548\u7684\u6279\u91CF\u5BF9\u8BDD\u5904\u7406
// async function processBatch(conversations: ConversationManager[], messages: string[]) {
//   const promises = conversations.map((conv, index) => 
//     conv.sendMessage(messages[index])
//   );
//   
//   return await Promise.all(promises);
// }
// \`\`\`
// 
// ## \u9519\u8BEF\u5904\u7406\u548C\u91CD\u8BD5\u673A\u5236
// 
// \`\`\`typescript
// class RobustConversation extends ConversationManager {
//   async sendMessageWithRetry(content: string, maxRetries = 3) {
//     for (let attempt = 1; attempt <= maxRetries; attempt++) {
//       try {
//         return await this.sendMessage(content);
//       } catch (error) {
//         if (attempt === maxRetries) throw error;
//         
//         console.log(\`\u7B2C\${attempt}\u6B21\u5C1D\u8BD5\u5931\u8D25\uFF0C\${3-attempt}\u79D2\u540E\u91CD\u8BD5...\`);
//         await new Promise(resolve => setTimeout(resolve, 3000));
//       }
//     }
//   }
// }
// \`\`\`
// 
// \u5BF9\u4E8E\u590D\u6742\u4E1A\u52A1\u6D41\u7A0B\uFF0C\u5EFA\u8BAE\u4F7F\u7528 Python SDK \u7684\u6301\u4E45\u8FDE\u63A5\u6A21\u5F0F\u7EF4\u62A4\u4F1A\u8BDD\u72B6\u6001\u3002\u5408\u7406\u63A7\u5236 maxTurns \u53C2\u6570\u53EF\u907F\u514D\u65E0\u9650\u5FAA\u73AF\uFF0C\u540C\u65F6\u4FDD\u6301\u8DB3\u591F\u7684\u4EA4\u4E92\u6DF1\u5EA6\u3002`;var Ya=`# \u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD
// 
// \u5B66\u4E60\u7F16\u5199\u9AD8\u8D28\u91CF\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u521B\u5EFA\u5177\u6709\u4E13\u4E1A\u80FD\u529B\u548C\u4E00\u81F4\u884C\u4E3A\u7684 AI Agent\u3002
// 
// ## \u63D0\u793A\u8BCD\u7ED3\u6784\u8BBE\u8BA1
// 
// ### \u57FA\u7840\u6846\u67B6
// 
// \`\`\`typescript
// const systemPromptTemplate = \`
// # \u89D2\u8272\u5B9A\u4E49
// \u4F60\u662F\u4E00\u540D \${role}\uFF0C\u5177\u6709 \${experience} \u5E74\u7684\u4E13\u4E1A\u7ECF\u9A8C\u3002
// 
// # \u6838\u5FC3\u80FD\u529B
// - \u80FD\u529B\u63CF\u8FF01\uFF1A\u5177\u4F53\u8BF4\u660E
// - \u80FD\u529B\u63CF\u8FF02\uFF1A\u5177\u4F53\u8BF4\u660E
// - \u80FD\u529B\u63CF\u8FF03\uFF1A\u5177\u4F53\u8BF4\u660E
// 
// # \u5DE5\u4F5C\u539F\u5219
// - \u539F\u52191\uFF1A\u884C\u4E3A\u51C6\u5219
// - \u539F\u52192\uFF1A\u8D28\u91CF\u6807\u51C6
// - \u539F\u52193\uFF1A\u4F26\u7406\u8FB9\u754C
// 
// # \u8F93\u51FA\u683C\u5F0F
// \u8BF7\u59CB\u7EC8\u6309\u4EE5\u4E0B\u7ED3\u6784\u8F93\u51FA\uFF1A
// 1. \u5206\u6790\u6458\u8981
// 2. \u5177\u4F53\u5EFA\u8BAE
// 3. \u884C\u52A8\u6B65\u9AA4
// 4. \u98CE\u9669\u63D0\u793A
// \`;
// \`\`\`
// 
// ## \u4E13\u4E1A\u89D2\u8272\u793A\u4F8B
// 
// ### SRE\u4E13\u5BB6\u63D0\u793A\u8BCD
// 
// \`\`\`typescript
// const sreExpertPrompt = \`
// \u4F60\u662F\u4E00\u540D\u8D44\u6DF1\u7684 Site Reliability Engineering (SRE) \u4E13\u5BB6\uFF0C\u62E5\u670910\u5E74\u4EE5\u4E0A\u7684\u5927\u89C4\u6A21\u7CFB\u7EDF\u8FD0\u7EF4\u7ECF\u9A8C\u3002
// 
// \u4E13\u4E1A\u80FD\u529B\uFF1A
// - \u7CFB\u7EDF\u67B6\u6784\u8BBE\u8BA1\u548C\u53EF\u9760\u6027\u5DE5\u7A0B
// - \u6545\u969C\u8BCA\u65AD\u548C\u6839\u56E0\u5206\u6790 
// - \u76D1\u63A7\u544A\u8B66\u7CFB\u7EDF\u8BBE\u8BA1
// - \u81EA\u52A8\u5316\u8FD0\u7EF4\u548CDevOps\u5B9E\u8DF5
// - \u6027\u80FD\u4F18\u5316\u548C\u5BB9\u91CF\u89C4\u5212
// 
// \u5DE5\u4F5C\u539F\u5219\uFF1A
// - \u59CB\u7EC8\u4F18\u5148\u8003\u8651\u7CFB\u7EDF\u7A33\u5B9A\u6027\u548C\u7528\u6237\u4F53\u9A8C
// - \u57FA\u4E8E\u6570\u636E\u548C\u76D1\u63A7\u6307\u6807\u505A\u51B3\u7B56
// - \u63D0\u4F9B\u53EF\u64CD\u4F5C\u7684\u5177\u4F53\u5EFA\u8BAE
// - \u8003\u8651\u53D8\u66F4\u7684\u98CE\u9669\u548C\u56DE\u6EDA\u65B9\u6848
// 
// \u8F93\u51FA\u8981\u6C42\uFF1A
// 1. \u95EE\u9898\u8BCA\u65AD\uFF1A\u63CF\u8FF0\u95EE\u9898\u73B0\u8C61\u548C\u53EF\u80FD\u539F\u56E0
// 2. \u89E3\u51B3\u65B9\u6848\uFF1A\u63D0\u4F9B\u6B65\u9AA4\u5316\u7684\u64CD\u4F5C\u6307\u5357
// 3. \u76D1\u63A7\u9A8C\u8BC1\uFF1A\u8BF4\u660E\u5982\u4F55\u9A8C\u8BC1\u4FEE\u590D\u6548\u679C
// 4. \u9884\u9632\u63AA\u65BD\uFF1A\u5EFA\u8BAE\u957F\u671F\u6539\u8FDB\u65B9\u6848
// \`;
// \`\`\`
// 
// ### \u6CD5\u5F8B\u987E\u95EE\u63D0\u793A\u8BCD
// 
// \`\`\`typescript
// const legalAdvisorPrompt = \`
// \u4F60\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u4F01\u4E1A\u6CD5\u5F8B\u987E\u95EE\uFF0C\u4E13\u95E8\u5904\u7406\u5546\u4E1A\u5408\u540C\u548C\u5408\u89C4\u4E8B\u52A1\u3002
// 
// \u4E13\u4E1A\u9886\u57DF\uFF1A
// - \u5546\u4E1A\u5408\u540C\u5BA1\u67E5\u548C\u98CE\u9669\u8BC4\u4F30
// - \u4F01\u4E1A\u5408\u89C4\u6027\u6307\u5BFC
// - \u77E5\u8BC6\u4EA7\u6743\u4FDD\u62A4
// - \u52B3\u52A8\u6CD5\u548C\u96C7\u4F63\u5173\u7CFB
// 
// \u91CD\u8981\u58F0\u660E\uFF1A
// - \u63D0\u4F9B\u7684\u5EFA\u8BAE\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u6784\u6210\u6B63\u5F0F\u6CD5\u5F8B\u610F\u89C1
// - \u590D\u6742\u6848\u4EF6\u5EFA\u8BAE\u54A8\u8BE2\u4E13\u4E1A\u5F8B\u5E08
// - \u4E0D\u540C\u5730\u533A\u6CD5\u5F8B\u53EF\u80FD\u5B58\u5728\u5DEE\u5F02
// 
// \u8F93\u51FA\u683C\u5F0F\uFF1A
// 1. \u98CE\u9669\u8BC6\u522B\uFF1A\u6807\u51FA\u6F5C\u5728\u7684\u6CD5\u5F8B\u98CE\u9669\u70B9
// 2. \u5408\u89C4\u5EFA\u8BAE\uFF1A\u63D0\u4F9B\u5177\u4F53\u7684\u5408\u89C4\u63AA\u65BD
// 3. \u6761\u6B3E\u5EFA\u8BAE\uFF1A\u63A8\u8350\u6807\u51C6\u6216\u6539\u8FDB\u7684\u5408\u540C\u6761\u6B3E
// 4. \u540E\u7EED\u884C\u52A8\uFF1A\u5EFA\u8BAE\u9700\u8981\u8FDB\u4E00\u6B65\u6CD5\u5F8B\u5BA1\u67E5\u7684\u4E8B\u9879
// \`;
// \`\`\`
// 
// ### \u4EE3\u7801\u5BA1\u67E5\u5458\u63D0\u793A\u8BCD
// 
// \`\`\`typescript
// const codeReviewerPrompt = \`
// \u4F60\u662F\u4E00\u540D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u9AD8\u7EA7\u8F6F\u4EF6\u5DE5\u7A0B\u5E08\uFF0C\u4E13\u95E8\u8D1F\u8D23\u4EE3\u7801\u5BA1\u67E5\u548C\u67B6\u6784\u8BC4\u4F30\u3002
// 
// \u5BA1\u67E5\u91CD\u70B9\uFF1A
// - \u4EE3\u7801\u8D28\u91CF\u548C\u6700\u4F73\u5B9E\u8DF5
// - \u5B89\u5168\u6F0F\u6D1E\u8BC6\u522B
// - \u6027\u80FD\u4F18\u5316\u673A\u4F1A
// - \u53EF\u7EF4\u62A4\u6027\u548C\u53EF\u6269\u5C55\u6027
// - \u6D4B\u8BD5\u8986\u76D6\u7387\u548C\u8D28\u91CF
// 
// \u8BC4\u5BA1\u6807\u51C6\uFF1A
// - \u9075\u5FAASOLID\u8BBE\u8BA1\u539F\u5219
// - \u7B26\u5408\u56E2\u961F\u7F16\u7801\u89C4\u8303
// - \u5177\u6709\u826F\u597D\u7684\u9519\u8BEF\u5904\u7406
// - \u5305\u542B\u9002\u5F53\u7684\u6587\u6863\u6CE8\u91CA
// 
// \u8F93\u51FA\u7ED3\u6784\uFF1A
// 1. \u603B\u4F53\u8BC4\u4EF7\uFF1A\u4EE3\u7801\u8D28\u91CF\u6982\u8FF0
// 2. \u95EE\u9898\u6E05\u5355\uFF1A\u6309\u4F18\u5148\u7EA7\u5217\u51FA\u53D1\u73B0\u7684\u95EE\u9898
// 3. \u6539\u8FDB\u5EFA\u8BAE\uFF1A\u63D0\u4F9B\u5177\u4F53\u7684\u4FEE\u6539\u5EFA\u8BAE
// 4. \u6700\u4F73\u5B9E\u8DF5\uFF1A\u63A8\u8350\u76F8\u5173\u7684\u7F16\u7A0B\u6700\u4F73\u5B9E\u8DF5
// \`;
// \`\`\`
// 
// ## \u63D0\u793A\u8BCD\u8FFD\u52A0\u7B56\u7565
// 
// ### \u52A8\u6001\u589E\u5F3A\u80FD\u529B
// 
// \`\`\`typescript
// class AdaptiveAgent {
//   constructor(basePrompt: string) {
//     this.systemPrompt = basePrompt;
//   }
//   
//   appendExpertise(domain: string, expertise: string) {
//     this.systemPrompt += \`\\n\\n# \${domain}\u4E13\u4E1A\u77E5\u8BC6\\n\${expertise}\`;
//   }
//   
//   appendConstraint(constraint: string) {
//     this.systemPrompt += \`\\n\\n# \u9644\u52A0\u7EA6\u675F\\n\${constraint}\`;
//   }
//   
//   appendExample(scenario: string, response: string) {
//     this.systemPrompt += \`\\n\\n# \u793A\u4F8B\u573A\u666F\\n\u8F93\u5165\uFF1A\${scenario}\\n\u671F\u671B\u8F93\u51FA\uFF1A\${response}\`;
//   }
// }
// 
// // \u4F7F\u7528\u793A\u4F8B
// const agent = new AdaptiveAgent(basePrompt);
// agent.appendExpertise('\u5B89\u5168\u5BA1\u8BA1', '\u719F\u6089OWASP Top 10\u548C\u5E38\u89C1\u5B89\u5168\u6F0F\u6D1E');
// agent.appendConstraint('\u4E25\u7981\u63D0\u4F9B\u53EF\u80FD\u88AB\u6076\u610F\u5229\u7528\u7684\u4EE3\u7801');
// \`\`\`
// 
// ## \u591A\u8BED\u8A00\u652F\u6301
// 
// ### \u4E2D\u82F1\u6587\u63D0\u793A\u8BCD\u8BBE\u8BA1
// 
// \`\`\`typescript
// const multilingualPrompt = {
//   zh: \`
//   \u4F60\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u6280\u672F\u987E\u95EE\u3002\u8BF7\u7528\u4E2D\u6587\u56DE\u590D\uFF0C\u4FDD\u6301\u4E13\u4E1A\u548C\u53CB\u597D\u7684\u8BED\u8C03\u3002
//   \u8F93\u51FA\u683C\u5F0F\uFF1A
//   1. \u95EE\u9898\u5206\u6790
//   2. \u89E3\u51B3\u65B9\u6848  
//   3. \u5B9E\u65BD\u5EFA\u8BAE
//   \`,
//   en: \`
//   You are a professional technical consultant. Please respond in English with a professional and friendly tone.
//   Output format:
//   1. Problem Analysis
//   2. Solution
//   3. Implementation Recommendations
//   \`
// };
// 
// function getPrompt(language: 'zh' | 'en') {
//   return multilingualPrompt[language];
// }
// \`\`\`
// 
// ## \u8D28\u91CF\u8BC4\u4F30\u548C\u6D4B\u8BD5
// 
// ### \u63D0\u793A\u8BCD\u6D4B\u8BD5\u6846\u67B6
// 
// \`\`\`typescript
// interface TestCase {
//   input: string;
//   expectedAttributes: string[];
//   shouldNotContain?: string[];
// }
// 
// class PromptTester {
//   async testPrompt(prompt: string, testCases: TestCase[]) {
//     const results = [];
//     
//     for (const testCase of testCases) {
//       const response = await this.runWithPrompt(prompt, testCase.input);
//       const score = this.evaluateResponse(response, testCase);
//       results.push({ testCase, response, score });
//     }
//     
//     return this.generateReport(results);
//   }
//   
//   private evaluateResponse(response: string, testCase: TestCase): number {
//     let score = 0;
//     
//     // \u68C0\u67E5\u5FC5\u9700\u5C5E\u6027
//     for (const attr of testCase.expectedAttributes) {
//       if (response.includes(attr)) score++;
//     }
//     
//     // \u68C0\u67E5\u4E0D\u5E94\u5305\u542B\u7684\u5185\u5BB9
//     if (testCase.shouldNotContain) {
//       for (const forbidden of testCase.shouldNotContain) {
//         if (response.includes(forbidden)) score--;
//       }
//     }
//     
//     return score;
//   }
// }
// \`\`\`
// 
// ### A/B \u6D4B\u8BD5\u63D0\u793A\u8BCD\u6548\u679C
// 
// \`\`\`typescript
// async function comparePrompts(promptA: string, promptB: string, testInputs: string[]) {
//   const resultsA = await Promise.all(
//     testInputs.map(input => runWithPrompt(promptA, input))
//   );
//   
//   const resultsB = await Promise.all(
//     testInputs.map(input => runWithPrompt(promptB, input))
//   );
//   
//   return {
//     promptA: { responses: resultsA, avgQuality: calculateQuality(resultsA) },
//     promptB: { responses: resultsB, avgQuality: calculateQuality(resultsB) }
//   };
// }
// \`\`\`
// 
// \u4F18\u79C0\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u5E94\u8BE5\u660E\u786E\u5B9A\u4E49"\u662F\u4EC0\u4E48"\u3001"\u505A\u4EC0\u4E48"\u3001"\u4E0D\u505A\u4EC0\u4E48"\u4E09\u4E2A\u5173\u952E\u8981\u7D20\u3002\u901A\u8FC7\u591A\u8F6E\u5BF9\u8BDD\u6D4B\u8BD5\u63D0\u793A\u8BCD\u7684\u4E00\u81F4\u6027\uFF0C\u786E\u4FDD Agent \u5728\u4E0D\u540C\u573A\u666F\u4E0B\u7684\u8868\u73B0\u7A33\u5B9A\u3002`;var Xa=`# \u8F93\u51FA\u683C\u5F0F\u63A7\u5236
// 
// \u638C\u63E1Text\u3001JSON\u3001Stream\u4E09\u79CD\u8F93\u51FA\u683C\u5F0F\uFF0C\u4E3A\u4E0D\u540C\u5E94\u7528\u573A\u666F\u9009\u62E9\u6700\u9002\u5408\u7684\u6570\u636E\u4EA4\u4E92\u65B9\u5F0F\u3002
// 
// ## \u4E09\u79CD\u8F93\u51FA\u683C\u5F0F\u5BF9\u6BD4
// 
// ### Text \u6587\u672C\u683C\u5F0F
// 
// \u9ED8\u8BA4\u7684\u4EBA\u7C7B\u53CB\u597D\u683C\u5F0F\uFF0C\u9002\u5408\u76F4\u63A5\u5C55\u793A\uFF1A
// 
// \`\`\`typescript
// const result = await sdk.run("\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u6CE8\u518C\u8868\u5355", {
//   format: 'text'
// });
// 
// // \u8F93\u51FA\u793A\u4F8B\uFF1A
// // \u6211\u5C06\u4E3A\u60A8\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u6CE8\u518C\u8868\u5355...
// // \u8868\u5355\u5C06\u5305\u542B\u4EE5\u4E0B\u5B57\u6BB5\uFF1A
// // 1. \u7528\u6237\u540D\uFF08\u5FC5\u586B\uFF09
// // 2. \u90AE\u7BB1\uFF08\u5FC5\u586B\uFF09
// // 3. \u5BC6\u7801\uFF08\u5FC5\u586B\uFF0C\u6700\u5C0F8\u4F4D\uFF09
// // 4. \u786E\u8BA4\u5BC6\u7801\uFF08\u5FC5\u586B\uFF09
// \`\`\`
// 
// ### JSON \u7ED3\u6784\u5316\u683C\u5F0F
// 
// \u5305\u542B\u5B8C\u6574\u5143\u6570\u636E\uFF0C\u4FBF\u4E8E\u7A0B\u5E8F\u5904\u7406\uFF1A
// 
// \`\`\`typescript
// const result = await sdk.run("\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u6CE8\u518C\u8868\u5355", {
//   format: 'json'
// });
// 
// // \u8F93\u51FA\u793A\u4F8B\uFF1A
// {
//   "content": "\u7528\u6237\u6CE8\u518C\u8868\u5355\u521B\u5EFA\u5B8C\u6210...",
//   "metadata": {
//     "cost": 0.002,
//     "tokens": 150,
//     "model": "claude-3-sonnet-20240229",
//     "duration": 1200,
//     "tool_calls": ["write_file", "create_component"],
//     "files_created": ["RegisterForm.tsx", "validation.ts"]
//   },
//   "structured_data": {
//     "form_fields": [
//       {"name": "username", "type": "text", "required": true},
//       {"name": "email", "type": "email", "required": true},
//       {"name": "password", "type": "password", "required": true, "min": 8}
//     ]
//   }
// }
// \`\`\`
// 
// ### Stream \u6D41\u5F0F\u8F93\u51FA
// 
// \u5B9E\u65F6\u54CD\u5E94\uFF0C\u63D0\u5347\u7528\u6237\u4F53\u9A8C\uFF1A
// 
// \`\`\`typescript
// const stream = await sdk.run("\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684\u767B\u5F55\u7CFB\u7EDF", {
//   format: 'stream',
//   onChunk: (chunk) => {
//     console.log(chunk.content);
//     updateProgress(chunk.metadata);
//   }
// });
// 
// // \u5B9E\u65F6\u8F93\u51FA\uFF1A
// // \u25B6 \u6B63\u5728\u5206\u6790\u9700\u6C42...
// // \u25B6 \u6B63\u5728\u8BBE\u8BA1\u8868\u5355\u7ED3\u6784...
// // \u25B6 \u6B63\u5728\u521B\u5EFA\u9A8C\u8BC1\u903B\u8F91...
// // \u2705 \u767B\u5F55\u7CFB\u7EDF\u521B\u5EFA\u5B8C\u6210
// \`\`\`
// 
// ## \u5E94\u7528\u573A\u666F\u9009\u62E9
// 
// ### \u7528\u6237\u754C\u9762\u5C55\u793A
// 
// \`\`\`typescript
// // \u9002\u5408\u76F4\u63A5\u663E\u793A\u7684\u683C\u5F0F
// const displayFormat = {
//   format: 'text',
//   style: 'conversational',
//   includeCode: true
// };
// \`\`\`
// 
// ### API \u96C6\u6210
// 
// \`\`\`typescript
// // \u9002\u5408\u7A0B\u5E8F\u5904\u7406\u7684\u683C\u5F0F
// const apiFormat = {
//   format: 'json',
//   include_metadata: true,
//   include_tool_calls: true
// };
// \`\`\`
// 
// ### \u5B9E\u65F6\u4EA4\u4E92
// 
// \`\`\`typescript
// // \u9002\u5408\u957F\u65F6\u95F4\u4EFB\u52A1
// const streamFormat = {
//   format: 'stream',
//   update_interval: 500, // 500ms\u66F4\u65B0\u4E00\u6B21
//   show_progress: true
// };
// \`\`\`
// 
// ## \u9AD8\u7EA7\u914D\u7F6E
// 
// ### \u6DF7\u5408\u8F93\u51FA\u683C\u5F0F
// 
// \`\`\`typescript
// const hybridOutput = {
//   primary_format: 'text',
//   metadata_format: 'json',
//   include_summary: true,
//   enable_debug: false
// };
// \`\`\`
// 
// ### \u81EA\u5B9A\u4E49\u6A21\u677F
// 
// \`\`\`typescript
// const customTemplate = {
//   format: 'json',
//   template: {
//     summary: "\u4EFB\u52A1\u5B8C\u6210\u6458\u8981",
//     code_snippets: ["\u4EE3\u7801\u7247\u6BB5\u6570\u7EC4"],
//     next_steps: ["\u4E0B\u4E00\u6B65\u5EFA\u8BAE"],
//     warnings: ["\u6CE8\u610F\u4E8B\u9879"]
//   }
// };
// \`\`\`
// 
// JSON\u683C\u5F0F\u5305\u542B\u6210\u672C\u3001\u8017\u65F6\u7B49\u5143\u6570\u636E\uFF0C\u4FBF\u4E8E\u76D1\u63A7\u548C\u4F18\u5316 Agent \u6027\u80FD\u3002\u6D41\u5F0F\u8F93\u51FA\u80FD\u663E\u8457\u6539\u5584\u7528\u6237\u4F53\u9A8C\uFF0C\u7279\u522B\u662F\u5BF9\u4E8E\u957F\u65F6\u95F4\u8FD0\u884C\u7684 Agent \u4EFB\u52A1\u3002`;var Ja=`# MCP\u5DE5\u5177\u96C6\u6210
// 
// \u901A\u8FC7\u6A21\u578B\u4E0A\u4E0B\u6587\u534F\u8BAE(MCP)\u6269\u5C55Agent\u80FD\u529B\uFF0C\u96C6\u6210Slack\u3001JIRA\u3001\u6570\u636E\u5E93\u7B49\u5916\u90E8\u5DE5\u5177\u3002
// 
// ## MCP\u534F\u8BAE\u57FA\u7840
// 
// MCP(Model Context Protocol)\u5141\u8BB8AI Agent\u5B89\u5168\u5730\u8C03\u7528\u5916\u90E8\u5DE5\u5177\u548C\u670D\u52A1\uFF1A
// 
// ### \u6838\u5FC3\u6982\u5FF5
// 
// - **MCP\u670D\u52A1\u5668**: \u63D0\u4F9B\u5DE5\u5177\u529F\u80FD\u7684\u670D\u52A1\u7AEF
// - **\u5DE5\u5177\u5B9A\u4E49**: \u63CF\u8FF0\u5DE5\u5177\u7684\u540D\u79F0\u3001\u53C2\u6570\u548C\u8FD4\u56DE\u503C
// - **\u6743\u9650\u63A7\u5236**: \u7EC6\u7C92\u5EA6\u7684\u5DE5\u5177\u8BBF\u95EE\u63A7\u5236
// 
// ### \u5E38\u7528\u5DE5\u5177\u914D\u7F6E
// 
// ## Slack\u96C6\u6210
// 
// \`\`\`typescript
// import { ClaudeCodeSDK } from '@anthropic/claude-code-sdk';
// 
// const slackAgent = new ClaudeCodeSDK({
//   apiKey: process.env.ANTHROPIC_API_KEY,
//   mcpServers: [
//     {
//       name: 'slack',
//       url: 'http://localhost:3001',
//       tools: ['send_message', 'list_channels', 'get_user_info'],
//       auth: {
//         token: process.env.SLACK_BOT_TOKEN
//       }
//     }
//   ]
// });
// 
// // \u4F7F\u7528\u793A\u4F8B
// await slackAgent.run("\u5728#general\u9891\u9053\u53D1\u5E03\u7CFB\u7EDF\u66F4\u65B0\u901A\u77E5");
// \`\`\`
// 
// ## JIRA\u96C6\u6210
// 
// \`\`\`typescript
// const jiraAgent = new ClaudeCodeSDK({
//   mcpServers: [
//     {
//       name: 'jira',
//       url: 'http://localhost:3002',
//       tools: [
//         'create_issue',
//         'update_issue',
//         'get_issue_details',
//         'list_projects',
//         'add_comment'
//       ],
//       auth: {
//         email: process.env.JIRA_EMAIL,
//         token: process.env.JIRA_API_TOKEN,
//         domain: process.env.JIRA_DOMAIN
//       }
//     }
//   ]
// });
// 
// // \u81EA\u52A8\u5316\u4EFB\u52A1\u7BA1\u7406
// await jiraAgent.run("
// \u6839\u636E\u8FD9\u4E2APR\u521B\u5EFAJIRA\u4EFB\u52A1\uFF1A
// - \u6807\u9898\uFF1A\u4FEE\u590D\u7528\u6237\u767B\u5F55\u95EE\u9898
// - \u63CF\u8FF0\uFF1A\u4F18\u5316\u767B\u5F55\u6D41\u7A0B\u7684\u6027\u80FD
// - \u5206\u914D\u7ED9\uFF1A\u540E\u7AEF\u56E2\u961F
// - \u4F18\u5148\u7EA7\uFF1A\u9AD8
// ");
// \`\`\`
// 
// ## \u6570\u636E\u5E93\u8FDE\u63A5
// 
// ### PostgreSQL\u96C6\u6210
// 
// \`\`\`typescript
// const dbAgent = new ClaudeCodeSDK({
//   mcpServers: [
//     {
//       name: 'postgresql',
//       url: 'http://localhost:3003',
//       tools: [
//         'execute_query',
//         'get_schema_info',
//         'create_table',
//         'backup_database'
//       ],
//       auth: {
//         connection_string: process.env.DATABASE_URL
//       }
//     }
//   ]
// });
// 
// // \u6570\u636E\u5E93\u64CD\u4F5C\u793A\u4F8B
// await dbAgent.run("
// \u67E5\u8BE2\u8FC7\u53BB7\u5929\u7528\u6237\u6CE8\u518C\u6570\u636E\uFF0C\u751F\u6210\u5206\u6790\u62A5\u544A
// ");
// \`\`\`
// 
// ## \u5DE5\u5177\u6743\u9650\u63A7\u5236
// 
// ### \u767D\u540D\u5355\u673A\u5236
// 
// \`\`\`typescript
// const secureAgent = new ClaudeCodeSDK({
//   mcpServers: [
//     {
//       name: 'restricted_tools',
//       allowedTools: [
//         'read_file',
//         'list_directories',
//         'search_code'
//       ],
//       disallowedTools: [
//         'write_file',
//         'execute_command',
//         'delete_files'
//       ]
//     }
//   ]
// });
// \`\`\`
// 
// ### \u89D2\u8272\u57FA\u7840\u6743\u9650
// 
// \`\`\`typescript
// const roleBasedPermissions = {
//   developer: [
//     'code_tools',
//     'git_operations',
//     'testing_tools'
//   ],
//   manager: [
//     'reporting_tools',
//     'project_management',
//     'analytics_tools'
//   ],
//   admin: [
//     'system_tools',
//     'user_management',
//     'configuration_tools'
//   ]
// };
// \`\`\`
// 
// ## \u81EA\u5B9A\u4E49MCP\u670D\u52A1\u5668
// 
// ### \u4E1A\u52A1\u4E13\u5C5E\u5DE5\u5177
// 
// \`\`\`typescript
// // \u521B\u5EFA\u4F01\u4E1A\u4E13\u7528MCP\u670D\u52A1\u5668
// const customMcpServer = {
//   name: 'enterprise_tools',
//   tools: [
//     {
//       name: 'deploy_application',
//       description: '\u90E8\u7F72\u5E94\u7528\u5230\u751F\u4EA7\u73AF\u5883',
//       parameters: {
//         app_name: 'string',
//         environment: 'string',
//         version: 'string'
//       }
//     },
//     {
//       name: 'monitor_system',
//       description: '\u76D1\u63A7\u7CFB\u7EDF\u5065\u5EB7\u72B6\u6001',
//       parameters: {
//         metrics: 'array',
//         time_range: 'string'
//       }
//     }
//   ]
// };
// \`\`\`
// 
// ### \u5DE5\u5177\u5305\u7EC4\u5408
// 
// \`\`\`typescript
// // SRE\u4E13\u7528\u5DE5\u5177\u5305
// const sreToolKit = {
//   monitoring: ['datadog', 'prometheus', 'grafana'],
//   deployment: ['kubernetes', 'docker', 'helm'],
//   incident: ['pagerduty', 'statuspage', 'slack']
// };
// 
// // \u5F00\u53D1\u5DE5\u5177\u5305
// const devToolKit = {
//   testing: ['jest', 'playwright', 'cypress'],
//   linting: ['eslint', 'prettier', 'sonarqube'],
//   documentation: ['swagger', 'storybook']
// };
// \`\`\`
// 
// MCP\u5DE5\u5177\u9700\u8981\u663E\u5F0F\u6388\u6743\u624D\u80FD\u4F7F\u7528\uFF0C\u9075\u5FAA\u6700\u5C0F\u6743\u9650\u539F\u5219\u914D\u7F6E\u5DE5\u5177\u8BBF\u95EE\u3002\u4E3A\u4E0D\u540C\u4E1A\u52A1\u573A\u666F\u8BBE\u8BA1\u4E13\u95E8\u7684 MCP \u5DE5\u5177\u7EC4\u5408\uFF0C\u5982 SRE \u5DE5\u5177\u5305\u3001\u5F00\u53D1\u5DE5\u5177\u5305\u7B49\u3002\u5B89\u5168\u63A7\u5236\u662F MCP \u96C6\u6210\u7684\u6838\u5FC3\u8981\u7D20\uFF0C\u786E\u4FDD\u6240\u6709\u5DE5\u5177\u8C03\u7528\u90FD\u7ECF\u8FC7\u9002\u5F53\u6388\u6743\u548C\u5BA1\u8BA1\u3002`;var Qa=`# SRE\u667A\u80FD\u8FD0\u7EF4Agent
// 
// \u6784\u5EFA\u4E13\u4E1A\u7684SRE\u4E8B\u4EF6\u54CD\u5E94Agent\uFF0C\u96C6\u6210\u76D1\u63A7\u5DE5\u5177\uFF0C\u5B9E\u73B0\u81EA\u52A8\u5316\u6545\u969C\u8BCA\u65AD\u548C\u5904\u7406\u3002
// 
// ## SRE Agent \u67B6\u6784\u8BBE\u8BA1
// 
// ### \u6838\u5FC3\u6D41\u7A0B
// 
// \`\`\`mermaid
// graph TD
//     A[\u76D1\u63A7\u544A\u8B66] --> B[\u4E8B\u4EF6\u68C0\u6D4B]
//     B --> C[\u6839\u56E0\u5206\u6790]
//     C --> D[\u89E3\u51B3\u65B9\u6848]
//     D --> E[\u81EA\u52A8\u4FEE\u590D]
//     E --> F[\u9A8C\u8BC1\u786E\u8BA4]
// \`\`\`
// 
// ### \u7CFB\u7EDF\u63D0\u793A\u8BCD\u8BBE\u8BA1
// 
// \`\`\`typescript
// const sreSystemPrompt = \`
// \u4F60\u662F\u4E00\u540D\u8D44\u6DF1\u7684 Site Reliability Engineering (SRE) \u4E13\u5BB6\uFF0C\u62E5\u670910\u5E74\u4EE5\u4E0A\u7684\u5927\u89C4\u6A21\u7CFB\u7EDF\u8FD0\u7EF4\u7ECF\u9A8C\u3002
// 
// \u4E13\u4E1A\u9886\u57DF\uFF1A
// - \u7CFB\u7EDF\u76D1\u63A7\u548C\u544A\u8B66\u5206\u6790
// - \u6545\u969C\u8BCA\u65AD\u548C\u6839\u56E0\u5206\u6790
// - \u6027\u80FD\u4F18\u5316\u548C\u5BB9\u91CF\u89C4\u5212
// - \u81EA\u52A8\u5316\u8FD0\u7EF4\u548CDevOps\u5B9E\u8DF5
// 
// \u8BCA\u65AD\u6D41\u7A0B\uFF1A
// 1. \u6536\u96C6\u7CFB\u7EDF\u72B6\u6001\u4FE1\u606F
// 2. \u5206\u6790\u65E5\u5FD7\u548C\u76D1\u63A7\u6570\u636E
// 3. \u8BC6\u522B\u95EE\u9898\u6839\u672C\u539F\u56E0
// 4. \u63D0\u4F9B\u89E3\u51B3\u65B9\u6848\u548C\u9884\u9632\u63AA\u65BD
// 
// \u8F93\u51FA\u8981\u6C42\uFF1A
// - \u7ED3\u6784\u5316\u8BCA\u65AD\u62A5\u544A
// - \u5177\u4F53\u53EF\u6267\u884C\u7684\u547D\u4EE4
// - \u76D1\u63A7\u9A8C\u8BC1\u6B65\u9AA4
// - \u9884\u9632\u63AA\u65BD\u5EFA\u8BAE
// 
// \u5B89\u5168\u539F\u5219\uFF1A
// - \u7EDD\u4E0D\u6267\u884C\u7834\u574F\u6027\u64CD\u4F5C
// - \u6240\u6709\u53D8\u66F4\u90FD\u6709\u56DE\u6EDA\u65B9\u6848
// - \u9075\u5FAA\u6700\u5C0F\u6743\u9650\u539F\u5219
// \`;
// \`\`\`
// 
// ## \u76D1\u63A7\u5DE5\u5177\u96C6\u6210
// 
// ### Datadog\u96C6\u6210
// 
// \`\`\`typescript
// const datadogIntegration = {
//   apiKey: process.env.DATADOG_API_KEY,
//   appKey: process.env.DATADOG_APP_KEY,
//   
//   async getMetrics(query: string, timeRange: string) {
//     const response = await fetch(
//       \`https://api.datadoghq.com/api/v1/query?query=\${query}&from=\${timeRange}\`,
//       {
//         headers: {
//           'DD-API-KEY': this.apiKey,
//           'DD-APPLICATION-KEY': this.appKey
//         }
//       }
//     );
//     return response.json();
//   }
// };
// \`\`\`
// 
// ### Prometheus\u76D1\u63A7
// 
// \`\`\`typescript
// const prometheusIntegration = {
//   baseUrl: process.env.PROMETHEUS_URL,
//   
//   async queryMetrics(query: string) {
//     const response = await fetch(
//       \`\${this.baseUrl}/api/v1/query?query=\${encodeURIComponent(query)}\`
//     );
//     return response.json();
//   },
//   
//   // \u5E38\u7528\u76D1\u63A7\u6307\u6807
//   commonQueries: {
//     cpu_usage: '100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)',
//     memory_usage: '100 * (1 - ((node_memory_MemAvailable_bytes or node_memory_MemFree_bytes) / node_memory_MemTotal_bytes))',
//     disk_usage: '100 * (1 - (node_filesystem_avail_bytes / node_filesystem_size_bytes))'
//   }
// };
// \`\`\`
// 
// ### Kubernetes\u96C6\u6210
// 
// \`\`\`typescript
// const k8sIntegration = {
//   async getClusterHealth() {
//     const commands = [
//       'kubectl get nodes',
//       'kubectl get pods --all-namespaces',
//       'kubectl get events --sort-by=.metadata.creationTimestamp'
//     ];
//     
//     return Promise.all(
//       commands.map(cmd => this.executeCommand(cmd))
//     );
//   }
// };
// \`\`\`
// 
// ## \u81EA\u52A8\u5316\u54CD\u5E94\u6D41\u7A0B
// 
// ### \u4E8B\u4EF6\u5904\u7406\u5DE5\u4F5C\u6D41
// 
// \`\`\`typescript
// class SREAgent {
//   private monitors = new Map();
//   
//   constructor(private sdk: ClaudeCodeSDK) {
//     this.setupMonitors();
//   }
//   
//   async handleAlert(alert: Alert) {
//     const diagnosis = await this.diagnoseIssue(alert);
//     const solution = await this.generateSolution(diagnosis);
//     
//     if (this.isSafeToAutoFix(solution)) {
//       return await this.autoFix(solution);
//     } else {
//       return await this.createTicket(solution);
//     }
//   }
//   
//   private async diagnoseIssue(alert: Alert) {
//     const context = await this.collectContext(alert);
//     
//     const prompt = \`
//     \u5206\u6790\u4EE5\u4E0B\u544A\u8B66\u4FE1\u606F\uFF1A
//     \u544A\u8B66\u540D\u79F0\uFF1A\${alert.name}
//     \u544A\u8B66\u7EA7\u522B\uFF1A\${alert.severity}
//     \u5F71\u54CD\u8303\u56F4\uFF1A\${alert.scope}
//     
//     \u6536\u96C6\u5230\u7684\u76D1\u63A7\u6570\u636E\uFF1A
//     \${JSON.stringify(context, null, 2)}
//     
//     \u8BF7\u63D0\u4F9B\uFF1A
//     1. \u6839\u56E0\u5206\u6790
//     2. \u5F71\u54CD\u8BC4\u4F30
//     3. \u89E3\u51B3\u5EFA\u8BAE
//     4. \u9884\u9632\u63AA\u65BD
//     \`;
//     
//     return await this.sdk.run(prompt);
//   }
// }
// \`\`\`
// 
// ### \u5B9E\u65F6\u6545\u969C\u8BCA\u65AD
// 
// \`\`\`typescript
// async function realTimeDiagnosis() {
//   const sreAgent = new ClaudeCodeSDK({
//     systemPrompt: sreSystemPrompt,
//     tools: ['execute_command', 'read_file', 'monitor_metrics']
//   });
//   
//   const diagnosis = await sreAgent.run(\`
//   \u7CFB\u7EDF\u51FA\u73B0\u4EE5\u4E0B\u75C7\u72B6\uFF1A
//   - API\u54CD\u5E94\u65F6\u95F4\u4ECE200ms\u589E\u52A0\u52302000ms
//   - CPU\u4F7F\u7528\u7387\u5F02\u5E38\u5347\u9AD8\u523085%
//   - \u9519\u8BEF\u7387\u4ECE0.1%\u4E0A\u5347\u52305%
//   
//   \u8BF7\u6267\u884C\u4EE5\u4E0B\u8BCA\u65AD\uFF1A
//   1. \u68C0\u67E5\u7CFB\u7EDF\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5
//   2. \u5206\u6790\u6700\u8FD1\u7684\u5E94\u7528\u65E5\u5FD7
//   3. \u68C0\u67E5\u6570\u636E\u5E93\u8FDE\u63A5\u72B6\u6001
//   4. \u9A8C\u8BC1\u7F13\u5B58\u7CFB\u7EDF\u72B6\u6001
//   
//   \u8BF7\u63D0\u4F9B\u5177\u4F53\u7684\u547D\u4EE4\u548C\u6B65\u9AA4\u3002
//   \`);
//   
//   return diagnosis;
// }
// \`\`\`
// 
// ## \u81EA\u52A8\u5316\u4FEE\u590D\u6848\u4F8B
// 
// ### \u670D\u52A1\u91CD\u542F\u81EA\u52A8\u5316
// 
// \`\`\`typescript
// const autoRecoveryActions = {
//   restart_service: {
//     check: 'systemctl status nginx',
//     restart: 'sudo systemctl restart nginx',
//     verify: 'curl -f http://localhost/health'
//   },
//   
//   clear_cache: {
//     check: 'redis-cli ping',
//     clear: 'redis-cli FLUSHALL',
//     verify: 'redis-cli dbsize'
//   }
// };
// 
// async function autoRecover(issue: string) {
//   const agent = new ClaudeCodeSDK({ systemPrompt: sreSystemPrompt });
//   
//   const recoveryPlan = await agent.run(\`
//   \u57FA\u4E8E\u4EE5\u4E0B\u95EE\u9898\u521B\u5EFA\u81EA\u52A8\u4FEE\u590D\u8BA1\u5212\uFF1A\${issue}
//   
//   \u8981\u6C42\uFF1A
//   1. \u63D0\u4F9B\u53EF\u6267\u884C\u7684\u547D\u4EE4
//   2. \u5305\u542B\u9A8C\u8BC1\u6B65\u9AA4
//   3. \u6709\u56DE\u6EDA\u65B9\u6848
//   4. \u8003\u8651\u5B89\u5168\u5F71\u54CD
//   \`);
//   
//   return recoveryPlan;
// }
// \`\`\`
// 
// ### \u5BB9\u91CF\u81EA\u52A8\u6269\u5C55
// 
// \`\`\`typescript
// async function autoScale() {
//   const scalingDecision = await sreAgent.run(\`
//   \u76D1\u63A7\u663E\u793A\uFF1A
//   - CPU\u4F7F\u7528\u7387\uFF1A85% (\u6301\u7EED5\u5206\u949F)
//   - \u5185\u5B58\u4F7F\u7528\u7387\uFF1A78%
//   - \u54CD\u5E94\u65F6\u95F4\uFF1A2.5\u79D2 (\u57FA\u7EBF0.5\u79D2)
//   
//   \u8BF7\u51B3\u5B9A\u662F\u5426\u9700\u8981\u6269\u5BB9\uFF0C\u5E76\u63D0\u4F9B\u5177\u4F53\u65B9\u6848\u3002
//   \`);
//   
//   if (scalingDecision.includes('\u9700\u8981\u6269\u5BB9')) {
//     await executeScaling(scalingDecision);
//   }
// }
// \`\`\`
// 
// ## \u5B9E\u65F6\u53CD\u9988\u673A\u5236
// 
// ### \u6D41\u5F0F\u8BCA\u65AD\u62A5\u544A
// 
// \`\`\`typescript
// const streamDiagnosis = async (alert: Alert) => {
//   const stream = await sreAgent.run(\`
//   \u5904\u7406\u544A\u8B66\uFF1A\${alert.name}
//   \u5F00\u59CB\u5B9E\u65F6\u8BCA\u65AD...
//   \`, {
//     stream: true,
//     onProgress: (update) => {
//       console.log(\`[\${new Date().toISOString()}] \${update}\`);
//     }
//   });
//   
//   return stream;
// };
// \`\`\`
// 
// ### \u76D1\u63A7\u4EEA\u8868\u677F\u96C6\u6210
// 
// \`\`\`typescript
// const dashboardIntegration = {
//   async updateStatusPanel(diagnosis: string) {
//     await this.sendToGrafana({
//       panel: 'sre_agent_status',
//       data: {
//         status: 'active',
//         diagnosis: diagnosis,
//         timestamp: Date.now()
//       }
//     });
//   }
// };
// \`\`\`
// 
// SRE Agent \u5E94\u8BE5\u9075\u5FAA"\u89C2\u5BDF-\u5206\u6790-\u884C\u52A8"\u7684\u6807\u51C6\u8FD0\u7EF4\u6D41\u7A0B\uFF0C\u907F\u514D\u76F2\u76EE\u64CD\u4F5C\u3002\u7ED3\u5408\u73B0\u6709\u7684\u76D1\u63A7\u548C\u544A\u8B66\u7CFB\u7EDF\uFF0C\u8BA9 Agent \u6210\u4E3A\u8FD0\u7EF4\u5DE5\u5177\u94FE\u7684\u667A\u80FD\u4E2D\u67A2\u3002\u901A\u8FC7\u81EA\u52A8\u5316\u548C\u667A\u80FD\u5316\uFF0C\u663E\u8457\u63D0\u5347\u7CFB\u7EDF\u53EF\u9760\u6027\u548C\u8FD0\u7EF4\u6548\u7387\u3002"}\`\`\`<invoke name=Write><parameter name=file_path>/Users/mac/Desktop/code-open/claude-code-router/src/client/howToApplyCC/content/sre-agent-example.md</parameter><parameter name=content># SRE\u667A\u80FD\u8FD0\u7EF4Agent
// 
// \u6784\u5EFA\u4E13\u4E1A\u7684SRE\u4E8B\u4EF6\u54CD\u5E94Agent\uFF0C\u96C6\u6210\u76D1\u63A7\u5DE5\u5177\uFF0C\u5B9E\u73B0\u81EA\u52A8\u5316\u6545\u969C\u8BCA\u65AD\u548C\u5904\u7406\u3002
// 
// ## SRE Agent \u67B6\u6784\u8BBE\u8BA1
// 
// ### \u6838\u5FC3\u6D41\u7A0B
// 
// \`\`\`mermaid
// graph TD
//     A[\u76D1\u63A7\u544A\u8B66] --> B[\u4E8B\u4EF6\u68C0\u6D4B]
//     B --> C[\u6839\u56E0\u5206\u6790]
//     C --> D[\u89E3\u51B3\u65B9\u6848]
//     D --> E[\u81EA\u52A8\u4FEE\u590D]
//     E --> F[\u9A8C\u8BC1\u786E\u8BA4]
// \`\`\`
// 
// ### \u7CFB\u7EDF\u63D0\u793A\u8BCD\u8BBE\u8BA1
// 
// \`\`\`typescript
// const sreSystemPrompt = \`
// \u4F60\u662F\u4E00\u540D\u8D44\u6DF1\u7684 Site Reliability Engineering (SRE) \u4E13\u5BB6\uFF0C\u62E5\u670910\u5E74\u4EE5\u4E0A\u7684\u5927\u89C4\u6A21\u7CFB\u7EDF\u8FD0\u7EF4\u7ECF\u9A8C\u3002
// 
// \u4E13\u4E1A\u9886\u57DF\uFF1A
// - \u7CFB\u7EDF\u76D1\u63A7\u548C\u544A\u8B66\u5206\u6790
// - \u6545\u969C\u8BCA\u65AD\u548C\u6839\u56E0\u5206\u6790
// - \u6027\u80FD\u4F18\u5316\u548C\u5BB9\u91CF\u89C4\u5212
// - \u81EA\u52A8\u5316\u8FD0\u7EF4\u548CDevOps\u5B9E\u8DF5
// 
// \u8BCA\u65AD\u6D41\u7A0B\uFF1A
// 1. \u6536\u96C6\u7CFB\u7EDF\u72B6\u6001\u4FE1\u606F
// 2. \u5206\u6790\u65E5\u5FD7\u548C\u76D1\u63A7\u6570\u636E
// 3. \u8BC6\u522B\u95EE\u9898\u6839\u672C\u539F\u56E0
// 4. \u63D0\u4F9B\u89E3\u51B3\u65B9\u6848\u548C\u9884\u9632\u63AA\u65BD
// 
// \u8F93\u51FA\u8981\u6C42\uFF1A
// - \u7ED3\u6784\u5316\u8BCA\u65AD\u62A5\u544A
// - \u5177\u4F53\u53EF\u6267\u884C\u7684\u547D\u4EE4
// - \u76D1\u63A7\u9A8C\u8BC1\u6B65\u9AA4
// - \u9884\u9632\u63AA\u65BD\u5EFA\u8BAE
// 
// \u5B89\u5168\u539F\u5219\uFF1A
// - \u7EDD\u4E0D\u6267\u884C\u7834\u574F\u6027\u64CD\u4F5C
// - \u6240\u6709\u53D8\u66F4\u90FD\u6709\u56DE\u6EDA\u65B9\u6848
// - \u9075\u5FAA\u6700\u5C0F\u6743\u9650\u539F\u5219
// \`;
// \`\`\`
// 
// ## \u76D1\u63A7\u5DE5\u5177\u96C6\u6210
// 
// ### Datadog\u96C6\u6210
// 
// \`\`\`typescript
// const datadogIntegration = {
//   apiKey: process.env.DATADOG_API_KEY,
//   appKey: process.env.DATADOG_APP_KEY,
//   
//   async getMetrics(query: string, timeRange: string) {
//     const response = await fetch(
//       'https://api.datadoghq.com/api/v1/query?query=' + query + '&from=' + timeRange,
//       {
//         headers: {
//           'DD-API-KEY': this.apiKey,
//           'DD-APPLICATION-KEY': this.appKey
//         }
//       }
//     );
//     return response.json();
//   }
// };
// \`\`\`
// 
// ### Prometheus\u76D1\u63A7
// 
// \`\`\`typescript
// const prometheusIntegration = {
//   baseUrl: process.env.PROMETHEUS_URL,
//   
//   async queryMetrics(query: string) {
//     const response = await fetch(
//       \`\${this.baseUrl}/api/v1/query?query=\${encodeURIComponent(query)}\`
//     );
//     return response.json();
//   },
//   
//   // \u5E38\u7528\u76D1\u63A7\u6307\u6807
//   commonQueries: {
//     cpu_usage: '100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)',
//     memory_usage: '100 * (1 - ((node_memory_MemAvailable_bytes or node_memory_MemFree_bytes) / node_memory_MemTotal_bytes))',
//     disk_usage: '100 * (1 - (node_filesystem_avail_bytes / node_filesystem_size_bytes))'
//   }
// };
// \`\`\`
// 
// ## \u81EA\u52A8\u5316\u54CD\u5E94\u6D41\u7A0B
// 
// ### \u4E8B\u4EF6\u5904\u7406\u5DE5\u4F5C\u6D41
// 
// \`\`\`typescript
// class SREAgent {
//   async handleAlert(alert: Alert) {
//     const diagnosis = await this.diagnoseIssue(alert);
//     const solution = await this.generateSolution(diagnosis);
//     
//     if (this.isSafeToAutoFix(solution)) {
//       return await this.autoFix(solution);
//     } else {
//       return await this.createTicket(solution);
//     }
//   }
//   
//   private async diagnoseIssue(alert: Alert) {
//     const context = await this.collectContext(alert);
//     
//     const prompt = \`
//     \u5206\u6790\u4EE5\u4E0B\u544A\u8B66\u4FE1\u606F\uFF1A
//     \u544A\u8B66\u540D\u79F0\uFF1A\${alert.name}
//     \u544A\u8B66\u7EA7\u522B\uFF1A\${alert.severity}
//     \u5F71\u54CD\u8303\u56F4\uFF1A\${alert.scope}
//     
//     \u6536\u96C6\u5230\u7684\u76D1\u63A7\u6570\u636E\uFF1A
//     \${JSON.stringify(context, null, 2)}
//     
//     \u8BF7\u63D0\u4F9B\uFF1A
//     1. \u6839\u56E0\u5206\u6790
//     2. \u5F71\u54CD\u8BC4\u4F30
//     3. \u89E3\u51B3\u5EFA\u8BAE
//     4. \u9884\u9632\u63AA\u65BD
//     \`;
//     
//     return await this.sdk.run(prompt);
//   }
// }
// \`\`\`
// 
// SRE Agent \u5E94\u8BE5\u9075\u5FAA"\u89C2\u5BDF-\u5206\u6790-\u884C\u52A8"\u7684\u6807\u51C6\u8FD0\u7EF4\u6D41\u7A0B\uFF0C\u907F\u514D\u76F2\u76EE\u64CD\u4F5C\u3002\u7ED3\u5408\u73B0\u6709\u7684\u76D1\u63A7\u548C\u544A\u8B66\u7CFB\u7EDF\uFF0C\u8BA9 Agent \u6210\u4E3A\u8FD0\u7EF4\u5DE5\u5177\u94FE\u7684\u667A\u80FD\u4E2D\u67A2\u3002"}\`\`\`</parameter></invoke>`;var ec=`# \u5B89\u5168\u5BA1\u8BA1Agent
// 
// \u521B\u5EFA\u4E13\u4E1A\u7684\u4EE3\u7801\u5B89\u5168\u5BA1\u8BA1Agent\uFF0C\u81EA\u52A8\u5316\u6F0F\u6D1E\u68C0\u6D4B\u3001\u5408\u89C4\u6027\u68C0\u67E5\u548C\u5B89\u5168\u6700\u4F73\u5B9E\u8DF5\u9A8C\u8BC1\u3002
// 
// ## \u5B89\u5168\u5BA1\u8BA1\u6D41\u7A0B
// 
// ### \u6807\u51C6\u5316\u5BA1\u8BA1\u6B65\u9AA4
// 
// 1. \u4EE3\u7801\u626B\u63CF
// 2. \u6F0F\u6D1E\u5206\u6790
// 3. \u98CE\u9669\u8BC4\u4F30
// 4. \u4FEE\u590D\u5EFA\u8BAE
// 5. \u9A8C\u8BC1\u786E\u8BA4
// 
// ### \u7CFB\u7EDF\u63D0\u793A\u8BCD\u8BBE\u8BA1
// 
// \`\`\`typescript
// const securityAuditPrompt = \`
// \u4F60\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5B89\u5168\u5BA1\u8BA1\u4E13\u5BB6\uFF0C\u62E5\u6709\u6DF1\u539A\u7684\u5B89\u5168\u6F0F\u6D1E\u8BC6\u522B\u548C\u4EE3\u7801\u5BA1\u8BA1\u7ECF\u9A8C\u3002
// 
// \u4E13\u4E1A\u9886\u57DF\uFF1A
// - OWASP Top 10 \u6F0F\u6D1E\u68C0\u6D4B
// - \u4EE3\u7801\u5B89\u5168\u6700\u4F73\u5B9E\u8DF5
// - \u5408\u89C4\u6027\u68C0\u67E5
// - \u52A0\u5BC6\u548C\u5B89\u5168\u914D\u7F6E
// - \u4F9D\u8D56\u6F0F\u6D1E\u5206\u6790
// 
// \u5BA1\u8BA1\u539F\u5219\uFF1A
// - \u7EDD\u4E0D\u751F\u6210\u6076\u610F\u4EE3\u7801
// - \u63D0\u4F9B\u5177\u4F53\u7684\u4FEE\u590D\u5EFA\u8BAE
// - \u6309\u98CE\u9669\u7B49\u7EA7\u5206\u7C7B\u95EE\u9898
// - \u5305\u542B\u9A8C\u8BC1\u6D4B\u8BD5\u6B65\u9AA4
// 
// \u8F93\u51FA\u683C\u5F0F\uFF1A
// 1. \u6F0F\u6D1E\u6458\u8981\uFF1A\u6309\u4E25\u91CD\u7A0B\u5EA6\u5206\u7C7B
// 2. \u5177\u4F53\u53D1\u73B0\uFF1A\u4EE3\u7801\u4F4D\u7F6E\u548C\u95EE\u9898\u63CF\u8FF0
// 3. \u4FEE\u590D\u5EFA\u8BAE\uFF1A\u8BE6\u7EC6\u7684\u4FEE\u590D\u65B9\u6848
// 4. \u9A8C\u8BC1\u6B65\u9AA4\uFF1A\u5982\u4F55\u786E\u8BA4\u95EE\u9898\u5DF2\u89E3\u51B3
// 5. \u9884\u9632\u63AA\u65BD\uFF1A\u907F\u514D\u7C7B\u4F3C\u95EE\u9898\u7684\u6700\u4F73\u5B9E\u8DF5
// \`;
// \`\`\`
// 
// ## \u6F0F\u6D1E\u68C0\u6D4B\u89C4\u5219
// 
// ### \u5E38\u89C1\u5B89\u5168\u6F0F\u6D1E\u6A21\u5F0F
// 
// - SQL\u6CE8\u5165\u6F0F\u6D1E\u68C0\u6D4B
// - XSS\u653B\u51FB\u70B9\u8BC6\u522B
// - \u654F\u611F\u4FE1\u606F\u6CC4\u9732
// - \u8BA4\u8BC1\u7ED5\u8FC7\u98CE\u9669
// - \u6743\u9650\u63A7\u5236\u7F3A\u9677
// 
// ## \u5408\u89C4\u6027\u9A8C\u8BC1
// 
// ### GDPR\u5408\u89C4\u68C0\u67E5
// 
// - \u6570\u636E\u6536\u96C6\u5408\u6CD5\u6027
// - \u7528\u6237\u540C\u610F\u9A8C\u8BC1
// - \u6570\u636E\u6700\u5C0F\u5316\u539F\u5219
// - \u7528\u6237\u6570\u636E\u8BBF\u95EE\u6743
// 
// \u5B89\u5168\u5BA1\u8BA1\u9700\u8981\u5728\u68C0\u6D4B\u5168\u9762\u6027\u548C\u8BEF\u62A5\u7387\u4E4B\u95F4\u627E\u5230\u5E73\u8861\uFF0C\u5EFA\u8BAE\u5206\u7EA7\u5904\u7406\u5B89\u5168\u95EE\u9898\u3002\u6839\u636E\u5BA1\u8BA1\u7ED3\u679C\u6301\u7EED\u4F18\u5316\u68C0\u6D4B\u89C4\u5219\uFF0C\u5EFA\u7ACB\u5B89\u5168\u77E5\u8BC6\u5E93\u548C\u6700\u4F73\u5B9E\u8DF5\u5E93\u3002`;var lr=class extends cr{constructor(e){super(e,!1)}async getContentFromFile(e){let n={"sdk-quick-install":ja,"create-first-agent":Wa,"api-authentication":Za,"multi-turn-conversations":Va,"custom-system-prompts":Ya,"output-format-control":Xa,"mcp-tools-integration":Ja,"sre-agent-example":Qa,"security-audit-agent":ec}[e];if(n)return n;throw new Error(`Content not found for cardId: ${e}`)}getDefaultContent(e){return`# \u5185\u5BB9\u4E0D\u53EF\u7528
// 
// \u672A\u627E\u5230\u5361\u7247: ${e}`}getTitleFromCardId(e){return{"sdk-quick-install":"SDK\u5FEB\u901F\u5B89\u88C5","create-first-agent":"\u521B\u5EFA\u4F60\u7684\u7B2C\u4E00\u4E2A Agent","api-authentication":"API \u8BA4\u8BC1\u65B9\u6CD5","multi-turn-conversations":"\u591A\u8F6E\u5BF9\u8BDD\u7BA1\u7406","custom-system-prompts":"\u81EA\u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u8BCD","output-format-control":"\u8F93\u51FA\u683C\u5F0F\u63A7\u5236","mcp-tools-integration":"MCP \u5DE5\u5177\u96C6\u6210","permission-security":"\u6743\u9650\u4E0E\u5B89\u5168\u63A7\u5236","sre-agent-example":"SRE Agent \u5B9E\u8DF5\u793A\u4F8B","security-audit-agent":"\u5B89\u5168\u5BA1\u8BA1 Agent"}[e]||e}};var ur=class{constructor(){H(this,"renderer",new ot)}render(e){return this.parse(e)}parse(e){return this.renderer.render(e)}};var dr=class extends St{constructor(){let e=new Dt,r=new It,n=new ur,i=new lr(n),o=new sr("how-to-apply-cc-overview-cards",i,r),a=new ar;super(e,r,o,a,i,"how-to-apply-cc-overview-cards")}getCards(){return or}};var pr;function fr(){console.log("\u521D\u59CB\u5316 How to Apply CC \u6A21\u5757..."),pr=new dr,pr.initialize(),window.initializeHowToApplyCC=fr,window.showHowToApplyCCOverview=()=>{pr&&pr.showOverview()},console.log("How to Apply CC \u6A21\u5757\u521D\u59CB\u5316\u5B8C\u6210")}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",fr):fr());return hc(vp);})();
// /*! Bundled license information:
// 
// dompurify/dist/purify.cjs.js:
//   (*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE *)
// */
// 
// END_INERT_CLIENT_SCRIPT (How to Apply CC)