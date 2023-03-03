"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[80569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,f=c["".concat(o,".").concat(g)]||c[g]||m[g]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},92042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/en/sql-reference/aggregate-functions/reference/quantiletimingweighted",sidebar_position:205},l="quantileTimingWeighted",s={unversionedId:"en/sql-reference/aggregate-functions/reference/quantiletimingweighted",id:"en/sql-reference/aggregate-functions/reference/quantiletimingweighted",title:"quantileTimingWeighted",description:"With the determined precision computes the quantile of a numeric data sequence according to the weight of each sequence member.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/quantiletimingweighted.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/quantiletimingweighted",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletimingweighted",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/quantiletimingweighted.md",tags:[],version:"current",sidebarPosition:205,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/quantiletimingweighted",sidebar_position:205},sidebar:"english",previous:{title:"quantileTiming",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletiming"},next:{title:"quantileDeterministic",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiledeterministic"}},o={},u=[],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quantiletimingweighted"},"quantileTimingWeighted"),(0,r.kt)("p",null,"With the determined precision computes the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence according to the weight of each sequence member."),(0,r.kt)("p",null,"The result is deterministic (it does not depend on the query processing order). The function is optimized for working with sequences which describe distributions like loading web pages times or backend response times."),(0,r.kt)("p",null,"When using multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"quantile*")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," function."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"quantileTimingWeighted(level)(expr, weight)\n")),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"medianTimingWeighted"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"level")," \u2014 Level of quantile. Optional parameter. Constant floating-point number from 0 to 1. We recommend using a ",(0,r.kt)("inlineCode",{parentName:"p"},"level")," value in the range of ",(0,r.kt)("inlineCode",{parentName:"p"},"[0.01, 0.99]"),". Default value: 0.5. At ",(0,r.kt)("inlineCode",{parentName:"p"},"level=0.5")," the function calculates ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Median"},"median"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," over a column values returning a ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float","*"),"-type number."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"- If negative values are passed to the function, the behavior is undefined.\n- If the value is greater than 30,000 (a page loading time of more than 30 seconds), it is assumed to be 30,000.\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"weight")," \u2014 Column with weights of sequence elements. Weight is a number of value occurrences."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Accuracy")),(0,r.kt)("p",null,"The calculation is accurate if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Total number of values does not exceed 5670."),(0,r.kt)("li",{parentName:"ul"},"Total number of values exceeds 5670, but the page loading time is less than 1024ms.")),(0,r.kt)("p",null,"Otherwise, the result of the calculation is rounded to the nearest multiple of 16 ms."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For calculating page loading time quantiles, this function is more effective and accurate than ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantile#quantile"},"quantile"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quantile of the specified level.")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Float32"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If no values are passed to the function (when using ",(0,r.kt)("inlineCode",{parentName:"p"},"quantileTimingIf"),"), ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float#data_type-float-nan-inf"},"NaN")," is returned. The purpose of this is to differentiate these cases from cases that result in zero. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY clause")," for notes on sorting ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," values.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Input table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500response_time\u2500\u252c\u2500weight\u2500\u2510\n\u2502            68 \u2502      1 \u2502\n\u2502           104 \u2502      2 \u2502\n\u2502           112 \u2502      3 \u2502\n\u2502           126 \u2502      2 \u2502\n\u2502           138 \u2502      1 \u2502\n\u2502           162 \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileTimingWeighted(response_time, weight) FROM t\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileTimingWeighted(response_time, weight)\u2500\u2510\n\u2502                                           112 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h1",{id:"quantilestimingweighted"},"quantilesTimingWeighted"),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"quantileTimingWeighted"),", but accept multiple parameters with quantile levels and return an Array filled with many values of that quantiles."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Input table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500response_time\u2500\u252c\u2500weight\u2500\u2510\n\u2502            68 \u2502      1 \u2502\n\u2502           104 \u2502      2 \u2502\n\u2502           112 \u2502      3 \u2502\n\u2502           126 \u2502      2 \u2502\n\u2502           138 \u2502      1 \u2502\n\u2502           162 \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantilesTimingWeighted(0,5, 0.99)(response_time, weight) FROM t\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantilesTimingWeighted(0.5, 0.99)(response_time, weight)\u2500\u2510\n\u2502 [112,162]                                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}m.isMDXComponent=!0}}]);