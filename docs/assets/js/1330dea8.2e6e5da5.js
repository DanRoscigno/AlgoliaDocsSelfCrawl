"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[91391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={slug:"/en/sql-reference/aggregate-functions/reference/welchttest",sidebar_position:301,sidebar_label:"welchTTest"},s="welchTTest",o={unversionedId:"en/sql-reference/aggregate-functions/reference/welchttest",id:"en/sql-reference/aggregate-functions/reference/welchttest",title:"welchTTest",description:"Applies Welch's t-test to samples from two populations.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/welchttest.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/welchttest",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/welchttest",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/welchttest.md",tags:[],version:"current",sidebarPosition:301,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/welchttest",sidebar_position:301,sidebar_label:"welchTTest"},sidebar:"english",previous:{title:"studentTTest",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/studentttest"},next:{title:"entropy",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/entropy"}},i={},c=[],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"welchttest"},"welchTTest"),(0,l.kt)("p",null,"Applies Welch's t-test to samples from two populations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"welchTTest([confidence_level])(sample_data, sample_index)\n")),(0,l.kt)("p",null,"Values of both samples are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_data")," column. If ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_index")," equals to 0 then the value in that row belongs to the sample from the first population. Otherwise it belongs to the sample from the second population.\nThe null hypothesis is that means of populations are equal. Normal distribution is assumed. Populations may have unequal variance."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sample_data")," \u2014 Sample data. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float")," or ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sample_index")," \u2014 Sample index. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"Integer"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"confidence_level")," \u2014 Confidence level in order to calculate confidence intervals. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/tuple"},"Tuple")," with two or four elements (if the optional ",(0,l.kt)("inlineCode",{parentName:"p"},"confidence_level")," is specified)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"calculated t-statistic. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("li",{parentName:"ul"},"calculated p-value. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("li",{parentName:"ul"},"calculated confidence-interval-low. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("li",{parentName:"ul"},"calculated confidence-interval-high. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/float"},"Float64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Input table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sample_data\u2500\u252c\u2500sample_index\u2500\u2510\n\u2502        20.3 \u2502            0 \u2502\n\u2502        22.1 \u2502            0 \u2502\n\u2502        21.9 \u2502            0 \u2502\n\u2502        18.9 \u2502            1 \u2502\n\u2502        20.3 \u2502            1 \u2502\n\u2502          19 \u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT welchTTest(sample_data, sample_index) FROM welch_ttest;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500welchTTest(sample_data, sample_index)\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (2.7988719532211235,0.051807360348581945) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Welch%27s_t-test"},"Welch's t-test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/studentttest#studentttest"},"studentTTest function"))))}f.isMDXComponent=!0}}]);