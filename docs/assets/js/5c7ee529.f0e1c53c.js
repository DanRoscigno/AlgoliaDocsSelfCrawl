"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[16575,50831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=s,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:s,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const a={slug:"/en/sql-reference/statements/alter/sample-by",sidebar_position:41,sidebar_label:"SAMPLE BY",title:"Manipulating Sampling-Key Expressions"},l=void 0,i={unversionedId:"en/sql-reference/statements/alter/sample-by",id:"en/sql-reference/statements/alter/sample-by",title:"Manipulating Sampling-Key Expressions",description:"Syntax:",source:"@site/docs/en/sql-reference/statements/alter/sample-by.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/sample-by",permalink:"/docs/en/sql-reference/statements/alter/sample-by",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/sample-by.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{slug:"/en/sql-reference/statements/alter/sample-by",sidebar_position:41,sidebar_label:"SAMPLE BY",title:"Manipulating Sampling-Key Expressions"},sidebar:"english",previous:{title:"ORDER BY",permalink:"/docs/en/sql-reference/statements/alter/order-by"},next:{title:"INDEX",permalink:"/docs/en/sql-reference/statements/alter/skipping-index"}},o={},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db].name [ON CLUSTER cluster] MODIFY SAMPLE BY new_expression\n")),(0,s.kt)("p",null,"The command changes the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"sampling key")," of the table to ",(0,s.kt)("inlineCode",{parentName:"p"},"new_expression")," (an expression or a tuple of expressions)."),(0,s.kt)("p",null,"The command is lightweight in the sense that it only changes metadata. The primary key must contain the new sample key."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"It only works for tables in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family (including ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"replicated")," tables).")))}u.isMDXComponent=!0},34531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),s=(n(67294),n(3905)),a=n(74098);const l={slug:"/zh/sql-reference/statements/alter/sample-by",sidebar_position:41,sidebar_label:"SAMPLE BY",title:"Manipulating Sampling-Key Expressions"},i=void 0,o={unversionedId:"zh/sql-reference/statements/alter/sample-by",id:"zh/sql-reference/statements/alter/sample-by",title:"Manipulating Sampling-Key Expressions",description:"",source:"@site/docs/zh/sql-reference/statements/alter/sample-by.mdx",sourceDirName:"zh/sql-reference/statements/alter",slug:"/zh/sql-reference/statements/alter/sample-by",permalink:"/docs/zh/sql-reference/statements/alter/sample-by",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/alter/sample-by.mdx",tags:[],version:"current",sidebarPosition:41,frontMatter:{slug:"/zh/sql-reference/statements/alter/sample-by",sidebar_position:41,sidebar_label:"SAMPLE BY",title:"Manipulating Sampling-Key Expressions"},sidebar:"chinese",previous:{title:"ORDER BY",permalink:"/docs/zh/sql-reference/statements/alter/order-by"},next:{title:"INDEX",permalink:"/docs/zh/sql-reference/statements/alter/index"}},c={},p=[],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(a.default,{mdxType:"Content"}))}d.isMDXComponent=!0}}]);