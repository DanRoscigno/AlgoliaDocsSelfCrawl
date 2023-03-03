"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[34298],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),s=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return l.createElement(i.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,g=m["".concat(i,".").concat(c)]||m[c]||k[c]||r;return a?l.createElement(g,p(p({ref:t},u),{},{components:a})):l.createElement(g,p({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:n,p[1]=o;for(var s=2;s<r;s++)p[s]=a[s];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},75655:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=a(87462),n=(a(67294),a(3905));const r={slug:"/en/sql-reference/functions/math-functions",sidebar_position:44,sidebar_label:"Mathematical"},p="Mathematical Functions",o={unversionedId:"en/sql-reference/functions/math-functions",id:"en/sql-reference/functions/math-functions",title:"Mathematical Functions",description:"All the functions return a Float64 number. The accuracy of the result is close to the maximum precision possible, but the result might not coincide with the machine representable number nearest to the corresponding real number.",source:"@site/docs/en/sql-reference/functions/math-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/math-functions",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/math-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/math-functions.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{slug:"/en/sql-reference/functions/math-functions",sidebar_position:44,sidebar_label:"Mathematical"},sidebar:"english",previous:{title:"Files",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/files"},next:{title:"Rounding",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/rounding-functions"}},i={},s=[{value:"e()",id:"e",level:2},{value:"pi()",id:"pi",level:2},{value:"exp(x)",id:"expx",level:2},{value:"log(x), ln(x)",id:"logx-lnx",level:2},{value:"exp2(x)",id:"exp2x",level:2},{value:"log2(x)",id:"log2x",level:2},{value:"exp10(x)",id:"exp10x",level:2},{value:"log10(x)",id:"log10x",level:2},{value:"sqrt(x)",id:"sqrtx",level:2},{value:"cbrt(x)",id:"cbrtx",level:2},{value:"erf(x)",id:"erfx",level:2},{value:"erfc(x)",id:"erfcx",level:2},{value:"lgamma(x)",id:"lgammax",level:2},{value:"tgamma(x)",id:"tgammax",level:2},{value:"sin(x)",id:"sinx",level:2},{value:"cos(x)",id:"cosx",level:2},{value:"tan(x)",id:"tanx",level:2},{value:"asin(x)",id:"asinx",level:2},{value:"acos(x)",id:"acosx",level:2},{value:"atan(x)",id:"atanx",level:2},{value:"pow(x, y), power(x, y)",id:"powx-y-powerx-y",level:2},{value:"intExp2",id:"intexp2",level:2},{value:"intExp10",id:"intexp10",level:2},{value:"cosh(x)",id:"coshx",level:2},{value:"acosh(x)",id:"acoshx",level:2},{value:"sinh(x)",id:"sinhx",level:2},{value:"asinh(x)",id:"asinhx",level:2},{value:"atanh(x)",id:"atanhx",level:2},{value:"atan2(y, x)",id:"atan2y-x",level:2},{value:"hypot(x, y)",id:"hypotx-y",level:2},{value:"log1p(x)",id:"log1px",level:2},{value:"sign(x)",id:"signx",level:2},{value:"degrees(x)",id:"degreesx",level:2},{value:"radians(x)",id:"radiansx",level:2},{value:"factorial(n)",id:"factorialn",level:2}],u={toc:s},m="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mathematical-functions"},"Mathematical Functions"),(0,n.kt)("p",null,"All the functions return a Float64 number. The accuracy of the result is close to the maximum precision possible, but the result might not coincide with the machine representable number nearest to the corresponding real number."),(0,n.kt)("h2",{id:"e"},"e()"),(0,n.kt)("p",null,"Returns a Float64 number that is close to the number e."),(0,n.kt)("h2",{id:"pi"},"pi()"),(0,n.kt)("p",null,"Returns a Float64 number that is close to the number \u03c0."),(0,n.kt)("h2",{id:"expx"},"exp(x)"),(0,n.kt)("p",null,"Accepts a numeric argument and returns a Float64 number close to the exponent of the argument."),(0,n.kt)("h2",{id:"logx-lnx"},"log(x), ln(x)"),(0,n.kt)("p",null,"Accepts a numeric argument and returns a Float64 number close to the natural logarithm of the argument."),(0,n.kt)("h2",{id:"exp2x"},"exp2(x)"),(0,n.kt)("p",null,"Accepts a numeric argument and returns a Float64 number close to 2 to the power of x."),(0,n.kt)("h2",{id:"log2x"},"log2(x)"),(0,n.kt)("p",null,"Accepts a numeric argument and returns a Float64 number close to the binary logarithm of the argument."),(0,n.kt)("h2",{id:"exp10x"},"exp10(x)"),(0,n.kt)("p",null,"Accepts a numeric argument and returns a Float64 number close to 10 to the power of x."),(0,n.kt)("h2",{id:"log10x"},"log10(x)"),(0,n.kt)("p",null,"Accepts a numeric argument and returns a Float64 number close to the decimal logarithm of the argument."),(0,n.kt)("h2",{id:"sqrtx"},"sqrt(x)"),(0,n.kt)("p",null,"Accepts a numeric argument and returns a Float64 number close to the square root of the argument."),(0,n.kt)("h2",{id:"cbrtx"},"cbrt(x)"),(0,n.kt)("p",null,"Accepts a numeric argument and returns a Float64 number close to the cubic root of the argument."),(0,n.kt)("h2",{id:"erfx"},"erf(x)"),(0,n.kt)("p",null,"If \u2018x\u2019 is non-negative, then ",(0,n.kt)("inlineCode",{parentName:"p"},"erf(x / \u03c3\u221a2)")," is the probability that a random variable having a normal distribution with standard deviation \u2018\u03c3\u2019 takes the value that is separated from the expected value by more than \u2018x\u2019."),(0,n.kt)("p",null,"Example (three sigma rule):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT erf(3 / sqrt(2));\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500erf(divide(3, sqrt(2)))\u2500\u2510\n\u2502      0.9973002039367398 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("h2",{id:"erfcx"},"erfc(x)"),(0,n.kt)("p",null,"Accepts a numeric argument and returns a Float64 number close to 1 - erf(x), but without loss of precision for large \u2018x\u2019 values."),(0,n.kt)("h2",{id:"lgammax"},"lgamma(x)"),(0,n.kt)("p",null,"The logarithm of the gamma function."),(0,n.kt)("h2",{id:"tgammax"},"tgamma(x)"),(0,n.kt)("p",null,"Gamma function."),(0,n.kt)("h2",{id:"sinx"},"sin(x)"),(0,n.kt)("p",null,"The sine."),(0,n.kt)("h2",{id:"cosx"},"cos(x)"),(0,n.kt)("p",null,"The cosine."),(0,n.kt)("h2",{id:"tanx"},"tan(x)"),(0,n.kt)("p",null,"The tangent."),(0,n.kt)("h2",{id:"asinx"},"asin(x)"),(0,n.kt)("p",null,"The arc sine."),(0,n.kt)("h2",{id:"acosx"},"acos(x)"),(0,n.kt)("p",null,"The arc cosine."),(0,n.kt)("h2",{id:"atanx"},"atan(x)"),(0,n.kt)("p",null,"The arc tangent."),(0,n.kt)("h2",{id:"powx-y-powerx-y"},"pow(x, y), power(x, y)"),(0,n.kt)("p",null,"Takes two numeric arguments x and y. Returns a Float64 number close to x to the power of y."),(0,n.kt)("h2",{id:"intexp2"},"intExp2"),(0,n.kt)("p",null,"Accepts a numeric argument and returns a UInt64 number close to 2 to the power of x."),(0,n.kt)("h2",{id:"intexp10"},"intExp10"),(0,n.kt)("p",null,"Accepts a numeric argument and returns a UInt64 number close to 10 to the power of x."),(0,n.kt)("h2",{id:"coshx"},"cosh(x)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://in.mathworks.com/help/matlab/ref/cosh.html"},"Hyperbolic cosine"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"cosh(x)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x")," \u2014 The angle, in radians. Values from the interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"-\u221e < x < +\u221e"),". ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Values from the interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"1 <= cosh(x) < +\u221e"),".")),(0,n.kt)("p",null,"Type: ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("p",null,"Query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT cosh(0);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500cosh(0)\u2500\u2500\u2510\n\u2502        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("h2",{id:"acoshx"},"acosh(x)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.mathworks.com/help/matlab/ref/acosh.html"},"Inverse hyperbolic cosine"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"acosh(x)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Hyperbolic cosine of angle. Values from the interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"1 <= x < +\u221e"),". ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The angle, in radians. Values from the interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"0 <= acosh(x) < +\u221e"),".")),(0,n.kt)("p",null,"Type: ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("p",null,"Query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT acosh(1);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500acosh(1)\u2500\u2510\n\u2502        0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See Also")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/math-functions#coshx"},"cosh(x)"))),(0,n.kt)("h2",{id:"sinhx"},"sinh(x)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.mathworks.com/help/matlab/ref/sinh.html"},"Hyperbolic sine"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"sinh(x)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x")," \u2014 The angle, in radians. Values from the interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"-\u221e < x < +\u221e"),". ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Values from the interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"-\u221e < sinh(x) < +\u221e"),".")),(0,n.kt)("p",null,"Type: ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("p",null,"Query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sinh(0);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sinh(0)\u2500\u2500\u2510\n\u2502        0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("h2",{id:"asinhx"},"asinh(x)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.mathworks.com/help/matlab/ref/asinh.html"},"Inverse hyperbolic sine"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"asinh(x)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Hyperbolic sine of angle. Values from the interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"-\u221e < x < +\u221e"),". ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The angle, in radians. Values from the interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"-\u221e < asinh(x) < +\u221e"),".")),(0,n.kt)("p",null,"Type: ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("p",null,"Query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT asinh(0);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500asinh(0)\u2500\u2510\n\u2502        0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See Also")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/math-functions#sinhx"},"sinh(x)"))),(0,n.kt)("h2",{id:"atanhx"},"atanh(x)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.mathworks.com/help/matlab/ref/atanh.html"},"Inverse hyperbolic tangent"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"atanh(x)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Hyperbolic tangent of angle. Values from the interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"\u20131 < x < 1"),". ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The angle, in radians. Values from the interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"-\u221e < atanh(x) < +\u221e"),".")),(0,n.kt)("p",null,"Type: ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("p",null,"Query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT atanh(0);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500atanh(0)\u2500\u2510\n\u2502        0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("h2",{id:"atan2y-x"},"atan2(y, x)"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Atan2"},"function")," calculates the angle in the Euclidean plane, given in radians, between the positive x axis and the ray to the point ",(0,n.kt)("inlineCode",{parentName:"p"},"(x, y) \u2260 (0, 0)"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"atan2(y, x)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y")," \u2014 y-coordinate of the point through which the ray passes. ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x")," \u2014 x-coordinate of the point through which the ray passes. ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The angle ",(0,n.kt)("inlineCode",{parentName:"li"},"\u03b8")," such that ",(0,n.kt)("inlineCode",{parentName:"li"},"\u2212\u03c0 < \u03b8 \u2264 \u03c0"),", in radians.")),(0,n.kt)("p",null,"Type: ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("p",null,"Query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT atan2(1, 1);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500atan2(1, 1)\u2500\u2510\n\u2502 0.7853981633974483 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("h2",{id:"hypotx-y"},"hypot(x, y)"),(0,n.kt)("p",null,"Calculates the length of the hypotenuse of a right-angle triangle. The ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hypot"},"function")," avoids problems that occur when squaring very large or very small numbers."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"hypot(x, y)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x")," \u2014 The first cathetus of a right-angle triangle. ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y")," \u2014 The second cathetus of a right-angle triangle. ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The length of the hypotenuse of a right-angle triangle.")),(0,n.kt)("p",null,"Type: ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("p",null,"Query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT hypot(1, 1);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500hypot(1, 1)\u2500\u2510\n\u2502 1.4142135623730951 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("h2",{id:"log1px"},"log1p(x)"),(0,n.kt)("p",null,"Calculates ",(0,n.kt)("inlineCode",{parentName:"p"},"log(1+x)"),". The ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Natural_logarithm#lnp1"},"function")," ",(0,n.kt)("inlineCode",{parentName:"p"},"log1p(x)")," is more accurate than ",(0,n.kt)("inlineCode",{parentName:"p"},"log(1+x)")," for small values of x."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"log1p(x)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Values from the interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"-1 < x < +\u221e"),". ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Values from the interval: ",(0,n.kt)("inlineCode",{parentName:"li"},"-\u221e < log1p(x) < +\u221e"),".")),(0,n.kt)("p",null,"Type: ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("p",null,"Query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT log1p(0);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500log1p(0)\u2500\u2510\n\u2502        0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See Also")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/math-functions#logx-lnx"},"log(x)"))),(0,n.kt)("h2",{id:"signx"},"sign(x)"),(0,n.kt)("p",null,"Returns the sign of a real number."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"sign(x)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Values from  ",(0,n.kt)("inlineCode",{parentName:"li"},"-\u221e")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"+\u221e"),". Support all numeric types in ClickHouse.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"-1 for ",(0,n.kt)("inlineCode",{parentName:"li"},"x < 0")),(0,n.kt)("li",{parentName:"ul"},"0 for ",(0,n.kt)("inlineCode",{parentName:"li"},"x = 0")),(0,n.kt)("li",{parentName:"ul"},"1 for ",(0,n.kt)("inlineCode",{parentName:"li"},"x > 0"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("p",null,"Sign for the zero value:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sign(0);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sign(0)\u2500\u2510\n\u2502       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,"Sign for the positive value:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sign(1);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sign(1)\u2500\u2510\n\u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,"Sign for the negative value:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sign(-1);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sign(-1)\u2500\u2510\n\u2502       -1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("h2",{id:"degreesx"},"degrees(x)"),(0,n.kt)("p",null,"Converts the input value in radians to degrees."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"degrees(x)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Input in radians. ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Value in degrees.")),(0,n.kt)("p",null,"Type: ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("p",null,"Query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT degrees(3.141592653589793);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500degrees(3.141592653589793)\u2500\u2510\n\u2502                        180 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("h2",{id:"radiansx"},"radians(x)"),(0,n.kt)("p",null,"Converts the input value in degrees to radians."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"radians(x)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Input in degrees. ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returned value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Value in radians.")),(0,n.kt)("p",null,"Type: ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("p",null,"Query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT radians(180);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500radians(180)\u2500\u2510\n\u2502 3.141592653589793 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("h2",{id:"factorialn"},"factorial(n)"),(0,n.kt)("p",null,"Computes the factorial of an integer value. It works with any native integer type including UInt(8|16|32|64) and Int(8|16|32|64). The return type is UInt64."),(0,n.kt)("p",null,"The factorial of 0 is 1. Likewise, the factorial() function returns 1 for any negative value. The maximum positive value for the input argument is 20, a value of 21 or greater will cause exception throw."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"factorial(n)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("p",null,"Query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT factorial(10);\n")),(0,n.kt)("p",null,"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500factorial(10)\u2500\u2510\n\u2502       3628800 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}k.isMDXComponent=!0}}]);