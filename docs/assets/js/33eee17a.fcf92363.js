"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[97531],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>k});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},i=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,k=u["".concat(p,".").concat(g)]||u[g]||f[g]||o;return t?n.createElement(k,l(l({ref:r},i),{},{components:t})):n.createElement(k,l({ref:r},i))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},44223:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/zh/sql-reference/aggregate-functions/reference/kurtpop",sidebar_position:153},l="kurtPop",c={unversionedId:"zh/sql-reference/aggregate-functions/reference/kurtpop",id:"zh/sql-reference/aggregate-functions/reference/kurtpop",title:"kurtPop",description:"kurtpop}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/kurtpop.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/kurtpop",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/kurtpop",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/kurtpop.md",tags:[],version:"current",sidebarPosition:153,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/kurtpop",sidebar_position:153},sidebar:"chinese",previous:{title:"skewSamp",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/skewsamp"},next:{title:"kurtSamp",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/kurtsamp"}},p={},s=[],i={toc:s},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kurtpop"},"kurtPop"),(0,a.kt)("p",null,"\u8ba1\u7b97\u7ed9\u5b9a\u5e8f\u5217\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kurtosis"},"\u5cf0\u5ea6"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"kurtPop(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2014  \u7ed3\u679c\u4e3a\u6570\u5b57\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",null,"\u7ed9\u5b9a\u5206\u5e03\u7684\u5cf0\u5ea6\u3002 \u7c7b\u578b \u2014 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/float"},"Float64")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT kurtPop(value) FROM series_with_value_column;\n")))}f.isMDXComponent=!0}}]);