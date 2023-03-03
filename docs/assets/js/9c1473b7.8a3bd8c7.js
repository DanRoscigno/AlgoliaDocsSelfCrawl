"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[72798],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(t),g=a,m=f["".concat(l,".").concat(g)]||f[g]||u[g]||o;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[f]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},24356:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/zh/sql-reference/aggregate-functions/reference/covarsamp",sidebar_position:37},c="covarSamp",i={unversionedId:"zh/sql-reference/aggregate-functions/reference/covarsamp",id:"zh/sql-reference/aggregate-functions/reference/covarsamp",title:"covarSamp",description:"covarsamp}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/covarsamp.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/covarsamp",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/covarsamp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/covarsamp.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/covarsamp",sidebar_position:37},sidebar:"chinese",previous:{title:"covarPop",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/covarpop"},next:{title:"anyHeavy",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/aggregate-functions/reference/anyheavy"}},l={},s=[],p={toc:s},f="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"covarsamp"},"covarSamp"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"covarSamp(x, y)\n")),(0,a.kt)("p",null,"\u8ba1\u7b97 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u03a3((x - x\u0305)(y - y\u0305)) / (n - 1)")," \u7684\u503c\u3002"),(0,a.kt)("p",null,"\u8fd4\u56deFloat64\u3002 \u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"n <= 1"),", \u8fd4\u56de +\u221e\u3002"),(0,a.kt)("p",null,'!!! note "\u6ce8"\n\u8be5\u51fd\u6570\u4f7f\u7528\u6570\u503c\u4e0d\u7a33\u5b9a\u7684\u7b97\u6cd5\u3002 \u5982\u679c\u4f60\u9700\u8981 ',(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Numerical_stability"},"\u6570\u503c\u7a33\u5b9a\u6027")," \u5728\u8ba1\u7b97\u4e2d\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"covarSampStable")," \u51fd\u6570\u3002 \u5b83\u7684\u5de5\u4f5c\u901f\u5ea6\u8f83\u6162\uff0c\u4f46\u63d0\u4f9b\u8f83\u4f4e\u7684\u8ba1\u7b97\u9519\u8bef\u3002"))}u.isMDXComponent=!0}}]);