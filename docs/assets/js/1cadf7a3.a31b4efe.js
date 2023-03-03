"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[11572],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,d=u["".concat(o,".").concat(h)]||u[h]||m[h]||l;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},35691:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={slug:"/en/sql-reference/statements/check-table",sidebar_position:41,sidebar_label:"CHECK TABLE",title:"CHECK TABLE Statement"},i=void 0,s={unversionedId:"en/sql-reference/statements/check-table",id:"en/sql-reference/statements/check-table",title:"CHECK TABLE Statement",description:"Checks if the data in the table is corrupted.",source:"@site/docs/en/sql-reference/statements/check-table.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/check-table",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/check-table",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/check-table.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{slug:"/en/sql-reference/statements/check-table",sidebar_position:41,sidebar_label:"CHECK TABLE",title:"CHECK TABLE Statement"},sidebar:"english",previous:{title:"ATTACH",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/attach"},next:{title:"DESCRIBE TABLE",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/describe-table"}},o={},c=[{value:"Checking the MergeTree Family Tables",id:"checking-the-mergetree-family-tables",level:2},{value:"If the Data Is Corrupted",id:"if-the-data-is-corrupted",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Checks if the data in the table is corrupted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CHECK TABLE [db.]name [PARTITION partition_expr]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," query compares actual file sizes with the expected values which are stored on the server. If the file sizes do not match the stored values, it means the data is corrupted. This can be caused, for example, by a system crash during query execution."),(0,r.kt)("p",null,"The query response contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," column with a single row. The row has a value of\n",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/boolean"},"Boolean")," type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0 - The data in the table is corrupted."),(0,r.kt)("li",{parentName:"ul"},"1 - The data maintains integrity.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," query supports the following table engines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/log-family/log"},"Log")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/log-family/tinylog"},"TinyLog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/log-family/stripelog"},"StripeLog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree family"))),(0,r.kt)("p",null,"Performed over the tables with another table engines causes an exception."),(0,r.kt)("p",null,"Engines from the ",(0,r.kt)("inlineCode",{parentName:"p"},"*Log")," family do not provide automatic data recovery on failure. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," query to track data loss in a timely manner."),(0,r.kt)("h2",{id:"checking-the-mergetree-family-tables"},"Checking the MergeTree Family Tables"),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," family engines, if ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings#check_query_single_value_result"},"check_query_single_value_result")," = 0, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," query shows a check status for every individual data part of a table on the local server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET check_query_single_value_result = 0;\nCHECK TABLE test_table;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500part_path\u2500\u252c\u2500is_passed\u2500\u252c\u2500message\u2500\u2510\n\u2502 all_1_4_1 \u2502         1 \u2502         \u2502\n\u2502 all_1_4_2 \u2502         1 \u2502         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"check_query_single_value_result")," = 1, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," query shows the general table check status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET check_query_single_value_result = 1;\nCHECK TABLE test_table;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500result\u2500\u2510\n\u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"if-the-data-is-corrupted"},"If the Data Is Corrupted"),(0,r.kt)("p",null,"If the table is corrupted, you can copy the non-corrupted data to another table. To do this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new table with the same structure as damaged table. To do this execute the query ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE TABLE <new_table_name> AS <damaged_table_name>"),"."),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings#settings-max_threads"},"max_threads")," value to 1 to process the next query in a single thread. To do this run the query ",(0,r.kt)("inlineCode",{parentName:"li"},"SET max_threads = 1"),"."),(0,r.kt)("li",{parentName:"ol"},"Execute the query ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT INTO <new_table_name> SELECT * FROM <damaged_table_name>"),". This request copies the non-corrupted data from the damaged table to another table. Only the data before the corrupted part will be copied."),(0,r.kt)("li",{parentName:"ol"},"Restart the ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," to reset the ",(0,r.kt)("inlineCode",{parentName:"li"},"max_threads")," value.")))}m.isMDXComponent=!0}}]);