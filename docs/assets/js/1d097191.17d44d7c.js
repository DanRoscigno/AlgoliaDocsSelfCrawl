"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[58298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||g[b]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},65021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/ru/engines/table-engines/integrations/sqlite",sidebar_position:7,sidebar_label:"SQLite"},i="SQLite",s={unversionedId:"ru/engines/table-engines/integrations/sqlite",id:"ru/engines/table-engines/integrations/sqlite",title:"SQLite",description:"sqlite}",source:"@site/docs/ru/engines/table-engines/integrations/sqlite.md",sourceDirName:"ru/engines/table-engines/integrations",slug:"/ru/engines/table-engines/integrations/sqlite",permalink:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/integrations/sqlite",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/integrations/sqlite.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"/ru/engines/table-engines/integrations/sqlite",sidebar_position:7,sidebar_label:"SQLite"},sidebar:"russia",previous:{title:"HDFS",permalink:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/integrations/hdfs"},next:{title:"Kafka",permalink:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/integrations/kafka"}},o={},c=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"creating-a-table",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"usage-example",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sqlite"},"SQLite"),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 SQLite, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c SQLite \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0438\u0437 ClickHouse."),(0,a.kt)("h2",{id:"creating-a-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"    CREATE TABLE [IF NOT EXISTS] [db.]table_name \n    (\n        name1 [type1], \n        name2 [type2], ...\n    ) ENGINE = SQLite('db_path', 'table')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"db_path")," \u2014 \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u0441 \u0431\u0430\u0437\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 SQLite."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"table")," \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 SQLite.")),(0,a.kt)("h2",{id:"usage-example"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,a.kt)("p",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u043c \u0437\u0430\u043f\u0440\u043e\u0441, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 SQLite:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE sqlite_db.table2;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"CREATE TABLE SQLite.table2\n( \n    `col1` Nullable(Int32), \n    `col2` Nullable(String)\n) \nENGINE = SQLite('sqlite.db','table2');\n")),(0,a.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0438\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM sqlite_db.table2 ORDER BY col1;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500col1\u2500\u252c\u2500col2\u2500\u2500\u2510\n\u2502    1 \u2502 text1 \u2502\n\u2502    2 \u2502 text2 \u2502\n\u2502    3 \u2502 text3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/engines/database-engines/sqlite"},"SQLite")," \u0434\u0432\u0438\u0436\u043e\u043a \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/table-functions/sqlite"},"sqlite")," \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f")))}g.isMDXComponent=!0}}]);