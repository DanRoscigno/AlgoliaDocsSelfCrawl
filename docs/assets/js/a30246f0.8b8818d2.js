"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[22156],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),d=a,y=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/zh/sql-reference/data-types/date"},c="\u65e5\u671f",l={unversionedId:"zh/sql-reference/data-types/date",id:"zh/sql-reference/data-types/date",title:"\u65e5\u671f",description:"date}",source:"@site/docs/zh/sql-reference/data-types/date.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/date",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/date",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/date.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/data-types/date"},sidebar:"chinese",previous:{title:"\u5e03\u5c14\u503c",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/boolean"},next:{title:"\u65e5\u671f\u65f6\u95f4",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/datetime"}},s={},i=[],p={toc:i},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"date"},"\u65e5\u671f"),(0,a.kt)("p",null,"\u65e5\u671f\u7c7b\u578b\uff0c\u7528\u4e24\u4e2a\u5b57\u8282\u5b58\u50a8\uff0c\u8868\u793a\u4ece 1970-01-01 (\u65e0\u7b26\u53f7) \u5230\u5f53\u524d\u7684\u65e5\u671f\u503c\u3002\u5141\u8bb8\u5b58\u50a8\u4ece Unix \u7eaa\u5143\u5f00\u59cb\u5230\u7f16\u8bd1\u9636\u6bb5\u5b9a\u4e49\u7684\u4e0a\u9650\u9608\u503c\u5e38\u91cf\uff08\u76ee\u524d\u4e0a\u9650\u662f2106\u5e74\uff0c\u4f46\u6700\u7ec8\u5b8c\u5168\u652f\u6301\u7684\u5e74\u4efd\u4e3a2105\uff09\u3002\u6700\u5c0f\u503c\u8f93\u51fa\u4e3a1970-01-01\u3002"),(0,a.kt)("p",null,"\u503c\u7684\u8303\u56f4: ","[","1970-01-01, 2149-06-06","]","\u3002"),(0,a.kt)("p",null,"\u65e5\u671f\u4e2d\u6ca1\u6709\u5b58\u50a8\u65f6\u533a\u4fe1\u606f\u3002"))}f.isMDXComponent=!0}}]);