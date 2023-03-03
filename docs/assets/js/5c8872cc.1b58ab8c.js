"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[4235],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=l,y=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:l,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const o={slug:"/zh/operations/system-tables/roles"},a="system.roles",s={unversionedId:"zh/operations/system-tables/roles",id:"zh/operations/system-tables/roles",title:"system.roles",description:"system_tables-roles}",source:"@site/docs/zh/operations/system-tables/roles.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/roles",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/system-tables/roles",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/roles.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/roles"},sidebar:"chinese",previous:{title:"role-grants",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/system-tables/role-grants"},next:{title:"system.row_policies",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/system-tables/row_policies"}},i={},c=[{value:"\u53e6\u8bf7\u53c2\u9605",id:"see-also",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"system_tables-roles"},"system.roles"),(0,l.kt)("p",null,"\u5305\u542b\u6709\u5173\u5df2\u914d\u7f6e\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/operations/access-rights#role-management"},"\u89d2\u8272")," \u4fe1\u606f."),(0,l.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2014 \u89d2\u8272\u540d\u79f0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/uuid"},"UUID"),") \u2014 \u89d2\u8272 ID."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"storage")," (",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),") \u2014 \u89d2\u8272\u5b58\u50a8\u7684\u8def\u5f84. \u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"access_control_path")," \u53c2\u6570\u4e2d\u914d\u7f6e.")),(0,l.kt)("h2",{id:"see-also"},"\u53e6\u8bf7\u53c2\u9605"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/statements/show#show-roles-statement"},"\u67e5\u770b\u89d2\u8272\u4fe1\u606f"))))}m.isMDXComponent=!0}}]);