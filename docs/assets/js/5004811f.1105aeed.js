"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[10669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||f[g]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/en/sql-reference/aggregate-functions/reference/quantilebfloat16",sidebar_position:209,title:"quantileBFloat16"},i=void 0,o={unversionedId:"en/sql-reference/aggregate-functions/reference/quantilebfloat16",id:"en/sql-reference/aggregate-functions/reference/quantilebfloat16",title:"quantileBFloat16",description:"Computes an approximate quantile of a sample consisting of bfloat16 numbers. bfloat16 is a floating-point data type with 1 sign bit, 8 exponent bits and 7 fraction bits.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/quantilebfloat16.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/quantilebfloat16",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantilebfloat16",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/quantilebfloat16.md",tags:[],version:"current",sidebarPosition:209,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/quantilebfloat16",sidebar_position:209,title:"quantileBFloat16"},sidebar:"english",previous:{title:"quantileTDigestWeighted",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted"},next:{title:"median",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/median"}},s={},u=[],p={toc:u},c="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Computes an approximate ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a sample consisting of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bfloat16_floating-point_format"},"bfloat16")," numbers. ",(0,r.kt)("inlineCode",{parentName:"p"},"bfloat16")," is a floating-point data type with 1 sign bit, 8 exponent bits and 7 fraction bits.\nThe function converts input values to 32-bit floats and takes the most significant 16 bits. Then it calculates ",(0,r.kt)("inlineCode",{parentName:"p"},"bfloat16")," quantile value and converts the result to a 64-bit float by appending zero bits.\nThe function is a fast quantile estimator with a relative error no more than 0.390625%."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"quantileBFloat16[(level)](expr)\n")),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"medianBFloat16")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Column with numeric data. ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Level of quantile. Optional. Possible values are in the range from 0 to 1. Default value: 0.5. ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Approximate quantile of the specified level.")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Input table has an integer and a float columns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500\u2500\u2500\u2500\u2500b\u2500\u2510\n\u2502 1 \u2502 1.001 \u2502\n\u2502 2 \u2502 1.002 \u2502\n\u2502 3 \u2502 1.003 \u2502\n\u2502 4 \u2502 1.004 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query to calculate 0.75-quantile (third quartile):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileBFloat16(0.75)(a), quantileBFloat16(0.75)(b) FROM example_table;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileBFloat16(0.75)(a)\u2500\u252c\u2500quantileBFloat16(0.75)(b)\u2500\u2510\n\u2502                         3 \u2502                         1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Note that all floating point values in the example are truncated to 1.0 when converting to ",(0,r.kt)("inlineCode",{parentName:"p"},"bfloat16"),"."),(0,r.kt)("h1",{id:"quantilebfloat16weighted"},"quantileBFloat16Weighted"),(0,r.kt)("p",null,"Like ",(0,r.kt)("inlineCode",{parentName:"p"},"quantileBFloat16")," but takes into account the weight of each sequence member."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}f.isMDXComponent=!0}}]);