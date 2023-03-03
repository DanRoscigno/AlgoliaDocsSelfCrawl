"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[98813],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=o(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||s;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var o=2;o<s;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const s={slug:"/en/sql-reference/statements/alter/view",sidebar_position:50,sidebar_label:"VIEW"},l="ALTER TABLE \u2026 MODIFY QUERY Statement",i={unversionedId:"en/sql-reference/statements/alter/view",id:"en/sql-reference/statements/alter/view",title:"ALTER TABLE \u2026 MODIFY QUERY Statement",description:"You can modify SELECT query that was specified when a materialized view was created with the ALTER TABLE \u2026 MODIFY QUERY statement. Use it when the materialized view was created without the TO [db.]name clause. The allowexperimentalaltermaterializedview_structure setting must be enabled.",source:"@site/docs/en/sql-reference/statements/alter/view.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/view",permalink:"/docs/en/sql-reference/statements/alter/view",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/view.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{slug:"/en/sql-reference/statements/alter/view",sidebar_position:50,sidebar_label:"VIEW"},sidebar:"english",previous:{title:"PROJECTION",permalink:"/docs/en/sql-reference/statements/alter/projection"},next:{title:"COMMENT",permalink:"/docs/en/sql-reference/statements/alter/comment"}},c={},o=[{value:"ALTER LIVE VIEW Statement",id:"alter-live-view-statement",level:2}],m={toc:o},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alter-table--modify-query-statement"},"ALTER TABLE \u2026 MODIFY QUERY Statement"),(0,a.kt)("p",null,"You can modify ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," query that was specified when a ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#materialized"},"materialized view")," was created with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE \u2026 MODIFY QUERY")," statement. Use it when the materialized view was created without the ",(0,a.kt)("inlineCode",{parentName:"p"},"TO [db.]name")," clause. The ",(0,a.kt)("inlineCode",{parentName:"p"},"allow_experimental_alter_materialized_view_structure")," setting must be enabled. "),(0,a.kt)("p",null,"If a materialized view uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"TO [db.]name")," construction, you must ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/detach"},"DETACH")," the view, run ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/"},"ALTER TABLE")," query for the target table, and then ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/attach"},"ATTACH")," the previously detached (",(0,a.kt)("inlineCode",{parentName:"p"},"DETACH"),") view."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE src_table (`a` UInt32) ENGINE = MergeTree ORDER BY a;\nCREATE MATERIALIZED VIEW mv (`a` UInt32) ENGINE = MergeTree ORDER BY a AS SELECT a FROM src_table; \nINSERT INTO src_table (a) VALUES (1), (2);\nSELECT * FROM mv;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE mv MODIFY QUERY SELECT a * 2 as a FROM src_table;\nINSERT INTO src_table (a) VALUES (3), (4);\nSELECT * FROM mv;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 6 \u2502\n\u2502 8 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u2510\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"alter-live-view-statement"},"ALTER LIVE VIEW Statement"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ALTER LIVE VIEW ... REFRESH")," statement refreshes a ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#live-view"},"Live view"),". See ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#live-view-alter-refresh"},"Force Live View Refresh"),"."))}u.isMDXComponent=!0}}]);