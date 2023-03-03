"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[59376],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},T=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),T=l,f=p["".concat(o,".").concat(T)]||p[T]||m[T]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,s=new Array(a);s[0]=T;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:l,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}T.displayName="MDXCreateElement"},74941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const a={slug:"/ru/sql-reference/statements/alter/ttl",sidebar_position:44,sidebar_label:"TTL"},s="\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 TTL \u0442\u0430\u0431\u043b\u0438\u0446\u044b",i={unversionedId:"ru/sql-reference/statements/alter/ttl",id:"ru/sql-reference/statements/alter/ttl",title:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 TTL \u0442\u0430\u0431\u043b\u0438\u0446\u044b",description:"manipuliatsii-s-ttl-tablitsy}",source:"@site/docs/ru/sql-reference/statements/alter/ttl.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/ttl",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/alter/ttl",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/alter/ttl.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{slug:"/ru/sql-reference/statements/alter/ttl",sidebar_position:44,sidebar_label:"TTL"},sidebar:"russia",previous:{title:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u043c\u0438",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/alter/constraint"},next:{title:"USER",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/alter/user"}},o={},u=[{value:"MODIFY TTL",id:"modify-ttl",level:2},{value:"REMOVE TTL",id:"remove-ttl",level:2},{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435-\u0442\u0430\u043a\u0436\u0435",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"manipuliatsii-s-ttl-tablitsy"},"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 TTL \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,l.kt)("h2",{id:"modify-ttl"},"MODIFY TTL"),(0,l.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/mergetree-family/mergetree#mergetree-column-ttl"},"TTL \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b")," \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0432\u0438\u0434\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table-name [ON CLUSTER cluster] MODIFY TTL ttl-expression\n")),(0,l.kt)("h2",{id:"remove-ttl"},"REMOVE TTL"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0439 TTL \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0432\u0438\u0434\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table_name [ON CLUSTER cluster] REMOVE TTL\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL")," \u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u043c \u0435\u0451 \u0434\u0430\u043d\u043d\u044b\u043c\u0438:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_ttl\n(\n    event_time DateTime,\n    UserID UInt64,\n    Comment String\n)\nENGINE MergeTree()\nORDER BY tuple()\nTTL event_time + INTERVAL 3 MONTH;\nSETTINGS min_bytes_for_wide_part = 0;\n\nINSERT INTO table_with_ttl VALUES (now(), 1, 'username1');\n\nINSERT INTO table_with_ttl VALUES (now() - INTERVAL 4 MONTH, 2, 'username2');\n")),(0,l.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," \u0434\u043b\u044f \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u043f\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE table_with_ttl FINAL;\nSELECT * FROM table_with_ttl;\n")),(0,l.kt)("p",null,"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0432\u0438\u0434\u043d\u043e, \u0447\u0442\u043e \u0432\u0442\u043e\u0440\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u2500\u2500\u2500\u252c\u2500\u2500UserID\u2500\u252c\u2500\u2500\u2500\u2500\u2500Comment\u2500\u2500\u2510\n\u2502   2020-12-11 12:44:57 \u2502       1 \u2502    username1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u043c \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_with_ttl REMOVE TTL;\n")),(0,l.kt)("p",null,"\u0417\u0430\u043d\u043e\u0432\u043e \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u0438 \u0441\u043d\u043e\u0432\u0430 \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043e\u0447\u0438\u0441\u0442\u043a\u0443 \u043f\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL")," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIMIZE"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_with_ttl VALUES (now() - INTERVAL 4 MONTH, 2, 'username2');\nOPTIMIZE TABLE table_with_ttl FINAL;\nSELECT * FROM table_with_ttl;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TTL")," \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u044e\u0442\u0441\u044f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u2500\u2500\u2500\u252c\u2500\u2500UserID\u2500\u252c\u2500\u2500\u2500\u2500\u2500Comment\u2500\u2500\u2510\n\u2502   2020-12-11 12:44:57 \u2502       1 \u2502    username1 \u2502\n\u2502   2020-08-11 12:44:57 \u2502       2 \u2502    username2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h3",{id:"\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435-\u0442\u0430\u043a\u0436\u0435"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/mergetree-family/mergetree#mergetree-column-ttl"},"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0435 TTL"),"."),(0,l.kt)("li",{parentName:"ul"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,l.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/alter/column#alter_modify-column"},"\u0441 TTL"),".")))}m.isMDXComponent=!0}}]);