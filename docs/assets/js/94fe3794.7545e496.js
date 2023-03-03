"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[92795],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),g=a,m=f["".concat(i,".").concat(g)]||f[g]||p[g]||o;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=g;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[f]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},47499:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/max",sidebar_position:3,title:"max"},c=void 0,l={unversionedId:"en/sql-reference/aggregate-functions/reference/max",id:"en/sql-reference/aggregate-functions/reference/max",title:"max",description:"Aggregate function that calculates the maximum across a group of values.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/max.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/max",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/max",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/max.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/max",sidebar_position:3,title:"max"},sidebar:"english",previous:{title:"min",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/min"},next:{title:"sum",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/aggregate-functions/reference/sum"}},i={},s=[],u={toc:s},f="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aggregate function that calculates the maximum across a group of values."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT max(salary) FROM employees;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT department, max(salary) FROM employees GROUP BY department;\n")),(0,a.kt)("p",null,"If you need non-aggregate function to choose a maximum of two values, see ",(0,a.kt)("inlineCode",{parentName:"p"},"greatest"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT greatest(a, b) FROM table;\n")))}p.isMDXComponent=!0}}]);