"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[23797],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,p=u["".concat(c,".").concat(m)]||u[m]||g[m]||i;return t?r.createElement(p,l(l({ref:n},f),{},{components:t})):r.createElement(p,l({ref:n},f))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={slug:"/en/sql-reference/aggregate-functions/reference/median",sidebar_position:212},l="median",o={unversionedId:"en/sql-reference/aggregate-functions/reference/median",id:"en/sql-reference/aggregate-functions/reference/median",title:"median",description:"The median functions are the aliases for the corresponding quantile functions. They calculate median of a numeric data sample.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/median.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/median",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/median",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/median.md",tags:[],version:"current",sidebarPosition:212,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/median",sidebar_position:212},sidebar:"english",previous:{title:"quantileBFloat16",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantilebfloat16"},next:{title:"simpleLinearRegression",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/simplelinearregression"}},c={},s=[],f={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"median"},"median"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"median*")," functions are the aliases for the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"quantile*")," functions. They calculate median of a numeric data sample."),(0,a.kt)("p",null,"Functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"median")," \u2014 Alias for ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantile#quantile"},"quantile"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"medianDeterministic")," \u2014 Alias for ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiledeterministic#quantiledeterministic"},"quantileDeterministic"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"medianExact")," \u2014 Alias for ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantileexact#quantileexact"},"quantileExact"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"medianExactWeighted")," \u2014 Alias for ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantileexactweighted#quantileexactweighted"},"quantileExactWeighted"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"medianTiming")," \u2014 Alias for ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiletiming#quantiletiming"},"quantileTiming"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"medianTimingWeighted")," \u2014 Alias for ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiletimingweighted#quantiletimingweighted"},"quantileTimingWeighted"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"medianTDigest")," \u2014 Alias for ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiletdigest#quantiletdigest"},"quantileTDigest"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"medianTDigestWeighted")," \u2014 Alias for ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted#quantiletdigestweighted"},"quantileTDigestWeighted"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"medianBFloat16")," \u2014 Alias for ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/quantilebfloat16#quantilebfloat16"},"quantileBFloat16"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Input table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500val\u2500\u2510\n\u2502   1 \u2502\n\u2502   1 \u2502\n\u2502   2 \u2502\n\u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT medianDeterministic(val, 1) FROM t;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500medianDeterministic(val, 1)\u2500\u2510\n\u2502                         1.5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);