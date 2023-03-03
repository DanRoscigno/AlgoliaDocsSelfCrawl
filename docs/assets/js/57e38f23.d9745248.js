"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[58774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,y=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/zh/sql-reference/data-types/",sidebar_label:"\u6570\u636e\u7c7b\u578b",sidebar_position:37},i="\u6570\u636e\u7c7b\u578b",s={unversionedId:"zh/sql-reference/data-types/index",id:"zh/sql-reference/data-types/index",title:"\u6570\u636e\u7c7b\u578b",description:"data_types}",source:"@site/docs/zh/sql-reference/data-types/index.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/index.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{slug:"/zh/sql-reference/data-types/",sidebar_label:"\u6570\u636e\u7c7b\u578b",sidebar_position:37},sidebar:"chinese",previous:{title:"Polygon Dictionaries With Grids",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-polygon"},next:{title:"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"}},l={},c=[],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data_types"},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("p",null,"ClickHouse \u53ef\u4ee5\u5728\u6570\u636e\u8868\u4e2d\u5b58\u50a8\u591a\u79cd\u6570\u636e\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u672c\u8282\u63cf\u8ff0 ClickHouse \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4ee5\u53ca\u4f7f\u7528\u6216\u8005\u5b9e\u73b0\u5b83\u4eec\u65f6\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u7684\u6ce8\u610f\u4e8b\u9879\u3002\n\u4f60\u53ef\u4ee5\u5728\u7cfb\u7edf\u8868 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/operations/system-tables/data_type_families#system_tables-data_type_families"},"system.data_type_families")," \u4e2d\u68c0\u67e5\u6570\u636e\u7c7b\u578b\u540d\u79f0\u662f\u5426\u533a\u5206\u5927\u5c0f\u5199\u3002"))}f.isMDXComponent=!0}}]);