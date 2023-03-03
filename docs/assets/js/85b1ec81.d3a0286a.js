"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[50411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={slug:"/en/sql-reference/statements/alter/update",sidebar_position:40,sidebar_label:"UPDATE"},i="ALTER TABLE \u2026 UPDATE Statements",o={unversionedId:"en/sql-reference/statements/alter/update",id:"en/sql-reference/statements/alter/update",title:"ALTER TABLE \u2026 UPDATE Statements",description:"Manipulates data matching the specified filtering expression. Implemented as a mutation.",source:"@site/docs/en/sql-reference/statements/alter/update.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/update",permalink:"/docs/en/sql-reference/statements/alter/update",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/update.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{slug:"/en/sql-reference/statements/alter/update",sidebar_position:40,sidebar_label:"UPDATE"},sidebar:"english",previous:{title:"DELETE",permalink:"/docs/en/sql-reference/statements/alter/delete"},next:{title:"ORDER BY",permalink:"/docs/en/sql-reference/statements/alter/order-by"}},l={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alter-table--update-statements"},"ALTER TABLE \u2026 UPDATE Statements"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table [ON CLUSTER cluster] UPDATE column1 = expr1 [, ...] [IN PARTITION partition_id] WHERE filter_expr\n")),(0,a.kt)("p",null,"Manipulates data matching the specified filtering expression. Implemented as a ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#mutations"},"mutation"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," prefix makes this syntax different from most other systems supporting SQL. It is intended to signify that unlike similar queries in OLTP databases this is a heavy operation not designed for frequent use.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"filter_expr")," must be of type ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt8"),". This query updates values of specified columns to the values of corresponding expressions in rows for which the ",(0,a.kt)("inlineCode",{parentName:"p"},"filter_expr")," takes a non-zero value. Values are casted to the column type using the ",(0,a.kt)("inlineCode",{parentName:"p"},"CAST")," operator. Updating columns that are used in the calculation of the primary or the partition key is not supported."),(0,a.kt)("p",null,"One query can contain several commands separated by commas."),(0,a.kt)("p",null,"The synchronicity of the query processing is defined by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings/#mutations_sync"},"mutations_sync")," setting. By default, it is asynchronous."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/#mutations"},"Mutations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/#synchronicity-of-alter-queries"},"Synchronicity of ALTER Queries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings/#mutations_sync"},"mutations_sync")," setting")))}m.isMDXComponent=!0}}]);