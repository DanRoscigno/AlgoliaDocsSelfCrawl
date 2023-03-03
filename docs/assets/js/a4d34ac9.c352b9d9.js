"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[14401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||f[g]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},78978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/zh/sql-reference/aggregate-functions/reference/quantiletdigest",sidebar_position:207},i="quantileTDigest",o={unversionedId:"zh/sql-reference/aggregate-functions/reference/quantiletdigest",id:"zh/sql-reference/aggregate-functions/reference/quantiletdigest",title:"quantileTDigest",description:"quantiletdigest}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/quantiletdigest.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/quantiletdigest",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/quantiletdigest",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/quantiletdigest.md",tags:[],version:"current",sidebarPosition:207,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/quantiletdigest",sidebar_position:207},sidebar:"chinese",previous:{title:"quantileDeterministic",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/quantiledeterministic"},next:{title:"quantileTDigestWeighted",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/quantiletdigestweighted"}},s={},c=[],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quantiletdigest"},"quantileTDigest"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tdunning/t-digest/blob/master/docs/t-digest-paper/histo.pdf"},"t-digest")," \u7b97\u6cd5\u8ba1\u7b97\u6570\u5b57\u5e8f\u5217\u8fd1\u4f3c",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"\u5206\u4f4d\u6570"),"\u3002"),(0,a.kt)("p",null,"\u6700\u5927\u8bef\u5dee\u4e3a1%\u3002 \u5185\u5b58\u6d88\u8017\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"log(n)"),"\uff0c\u8fd9\u91cc ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u662f\u503c\u7684\u4e2a\u6570\u3002 \u7ed3\u679c\u53d6\u51b3\u4e8e\u8fd0\u884c\u67e5\u8be2\u7684\u987a\u5e8f\uff0c\u5e76\u4e14\u662f\u4e0d\u786e\u5b9a\u7684\u3002"),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u7684\u6027\u80fd\u4f4e\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/quantile#quantile"},"quantile")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/quantiletiming#quantiletiming"},"quantileTiming")," \u7684\u6027\u80fd\u3002 \u4ece\u72b6\u6001\u5927\u5c0f\u548c\u7cbe\u5ea6\u7684\u6bd4\u503c\u6765\u770b\uff0c\u8fd9\u4e2a\u51fd\u6570\u6bd4 ",(0,a.kt)("inlineCode",{parentName:"p"},"quantile")," \u66f4\u4f18\u79c0\u3002"),(0,a.kt)("p",null,"\u5f53\u5728\u4e00\u4e2a\u67e5\u8be2\u4e2d\u4f7f\u7528\u591a\u4e2a\u4e0d\u540c\u5c42\u6b21\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"quantile*")," \u65f6\uff0c\u5185\u90e8\u72b6\u6001\u4e0d\u4f1a\u88ab\u7ec4\u5408\uff08\u5373\u67e5\u8be2\u7684\u5de5\u4f5c\u6548\u7387\u4f4e\u4e8e\u7ec4\u5408\u60c5\u51b5\uff09\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," \u51fd\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"quantileTDigest(level)(expr)\n")),(0,a.kt)("p",null,"\u522b\u540d: ",(0,a.kt)("inlineCode",{parentName:"p"},"medianTDigest"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"level")," \u2014 \u5206\u4f4d\u6570\u5c42\u6b21\u3002\u53ef\u9009\u53c2\u6570\u3002\u4ece0\u52301\u7684\u4e00\u4e2afloat\u7c7b\u578b\u7684\u5e38\u91cf\u3002\u6211\u4eec\u63a8\u8350 ",(0,a.kt)("inlineCode",{parentName:"li"},"level")," \u503c\u7684\u8303\u56f4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]")," \u3002\u9ed8\u8ba4\u503c\uff1a0.5\u3002\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},"level=0.5")," \u65f6\uff0c\u8be5\u51fd\u6570\u8ba1\u7b97 ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"\u4e2d\u4f4d\u6570"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expr"),"  \u2014 \u6c42\u503c\u8868\u8fbe\u5f0f\uff0c\u7c7b\u578b\u4e3a\u6570\u503c\u7c7b\u578b",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/#data_types"},"data types"),", ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/date"},"Date")," \u6216 ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime"},"DateTime"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5c42\u6b21\u7684\u5206\u4f4d\u6570\u3002")),(0,a.kt)("p",null,"\u7c7b\u578b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/float"},"Float64")," \u7528\u4e8e\u6570\u5b57\u6570\u636e\u7c7b\u578b\u8f93\u5165\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/date"},"Date")," \u5982\u679c\u8f93\u5165\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"Date")," \u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime"},"DateTime")," \u5982\u679c\u8f93\u5165\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"DateTime")," \u7c7b\u578b\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileTDigest(number) FROM numbers(10)\n")),(0,a.kt)("p",null,"\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileTDigest(number)\u2500\u2510\n\u2502                     4.5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/median#median"},"\u4e2d\u4f4d\u6570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"\u5206\u4f4d\u6570"))))}f.isMDXComponent=!0}}]);