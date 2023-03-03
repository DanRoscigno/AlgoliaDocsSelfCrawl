"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[73882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||l;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var i=2;i<l;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/en/sql-reference/statements/exchange",sidebar_position:49,sidebar_label:"EXCHANGE"},s="EXCHANGE Statement",o={unversionedId:"en/sql-reference/statements/exchange",id:"en/sql-reference/statements/exchange",title:"EXCHANGE Statement",description:"Exchanges the names of two tables or dictionaries atomically.",source:"@site/docs/en/sql-reference/statements/exchange.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/exchange",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/exchange",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/exchange.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{slug:"/en/sql-reference/statements/exchange",sidebar_position:49,sidebar_label:"EXCHANGE"},sidebar:"english",previous:{title:"RENAME",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/rename"},next:{title:"SET",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/set"}},c={},i=[{value:"EXCHANGE TABLES",id:"exchange-tables",level:2},{value:"EXCHANGE DICTIONARIES",id:"exchange-dictionaries",level:2}],p={toc:i},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exchange-statement"},"EXCHANGE Statement"),(0,a.kt)("p",null,"Exchanges the names of two tables or dictionaries atomically.\nThis task can also be accomplished with a ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/rename"},"RENAME")," query using a temporary name, but the operation is not atomic in that case."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EXCHANGE")," query is supported by the ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/engines/database-engines/atomic"},"Atomic")," database engine only.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"EXCHANGE TABLES|DICTIONARIES [db0.]name_A AND [db1.]name_B [ON CLUSTER cluster]\n")),(0,a.kt)("h2",{id:"exchange-tables"},"EXCHANGE TABLES"),(0,a.kt)("p",null,"Exchanges the names of two tables."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"EXCHANGE TABLES [db0.]table_A AND [db1.]table_B [ON CLUSTER cluster]\n")),(0,a.kt)("h2",{id:"exchange-dictionaries"},"EXCHANGE DICTIONARIES"),(0,a.kt)("p",null,"Exchanges the names of two dictionaries."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"EXCHANGE DICTIONARIES [db0.]dict_A AND [db1.]dict_B [ON CLUSTER cluster]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/dictionaries/"},"Dictionaries"))))}u.isMDXComponent=!0}}]);