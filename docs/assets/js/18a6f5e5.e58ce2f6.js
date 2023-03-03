"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[71301],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||c;return t?n.createElement(m,i(i({ref:r},f),{},{components:t})):n.createElement(m,i({ref:r},f))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=g;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},99443:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const c={slug:"/zh/sql-reference/aggregate-functions/reference/sumwithoverflow",sidebar_position:140},i="sumWithOverflow",a={unversionedId:"zh/sql-reference/aggregate-functions/reference/sumwithoverflow",id:"zh/sql-reference/aggregate-functions/reference/sumwithoverflow",title:"sumWithOverflow",description:"sumwithoverflowx}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/sumwithoverflow.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/sumwithoverflow",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/sumwithoverflow",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/sumwithoverflow.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/sumwithoverflow",sidebar_position:140},sidebar:"chinese",previous:{title:"groupBitmapXor",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/groupbitmapxor"},next:{title:"deltaSum",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/deltasum"}},l={},s=[],f={toc:s},u="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sumwithoverflowx"},"sumWithOverflow"),(0,o.kt)("p",null,"\u4f7f\u7528\u4e0e\u8f93\u5165\u53c2\u6570\u76f8\u540c\u7684\u6570\u636e\u7c7b\u578b\u8ba1\u7b97\u7ed3\u679c\u7684\u6570\u5b57\u603b\u548c\u3002\u5982\u679c\u603b\u548c\u8d85\u8fc7\u6b64\u6570\u636e\u7c7b\u578b\u7684\u6700\u5927\u503c\uff0c\u5219\u4f7f\u7528\u6ea2\u51fa\u8fdb\u884c\u8ba1\u7b97\u3002"),(0,o.kt)("p",null,"\u53ea\u9002\u7528\u4e8e\u6570\u5b57\u3002"))}p.isMDXComponent=!0}}]);