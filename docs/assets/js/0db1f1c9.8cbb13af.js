"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[70146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=l,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={slug:"/en/sql-reference/table-functions/null",sidebar_position:53,sidebar_label:"null function",title:"null"},i=void 0,o={unversionedId:"en/sql-reference/table-functions/null",id:"en/sql-reference/table-functions/null",title:"null",description:"Creates a temporary table of the specified structure with the Null table engine. According to the Null-engine properties, the table data is ignored and the table itself is immediately dropped right after the query execution. The function is used for the convenience of test writing and demonstrations.",source:"@site/docs/en/sql-reference/table-functions/null.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/null",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/table-functions/null",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/null.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{slug:"/en/sql-reference/table-functions/null",sidebar_position:53,sidebar_label:"null function",title:"null"},sidebar:"english",previous:{title:"view",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/table-functions/view"},next:{title:"dictionary function",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/table-functions/dictionary"}},s={},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Creates a temporary table of the specified structure with the ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/special/null"},"Null")," table engine. According to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Null"),"-engine properties, the table data is ignored and the table itself is immediately dropped right after the query execution. The function is used for the convenience of test writing and demonstrations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"null('structure')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameter")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 A list of columns and column types. ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"A temporary ",(0,l.kt)("inlineCode",{parentName:"p"},"Null"),"-engine table with the specified structure."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query with the ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO function null('x UInt64') SELECT * FROM numbers_mt(1000000000);\n")),(0,l.kt)("p",null,"can replace three queries:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t (x UInt64) ENGINE = Null;\nINSERT INTO t SELECT * FROM numbers_mt(1000000000);\nDROP TABLE IF EXISTS t;\n")),(0,l.kt)("p",null,"See also:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/special/null"},"Null table engine"))))}f.isMDXComponent=!0}}]);