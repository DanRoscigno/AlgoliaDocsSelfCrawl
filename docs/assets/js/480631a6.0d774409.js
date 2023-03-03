"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[93550],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},40745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const l={slug:"/en/engines/table-engines/special/join",sidebar_position:70,sidebar_label:"Join"},r="Join Table Engine",o={unversionedId:"en/engines/table-engines/special/join",id:"en/engines/table-engines/special/join",title:"Join Table Engine",description:"Optional prepared data structure for usage in JOIN operations.",source:"@site/docs/en/engines/table-engines/special/join.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/join",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/special/join",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/join.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{slug:"/en/engines/table-engines/special/join",sidebar_position:70,sidebar_label:"Join"},sidebar:"english",previous:{title:"Set",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/special/set"},next:{title:"URL",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/special/url"}},s={},p=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Engine Parameters",id:"engine-parameters",level:2},{value:"join_strictness",id:"join_strictness",level:3},{value:"join_type",id:"join_type",level:3},{value:"Key columns",id:"key-columns",level:3},{value:"Specifics and Recommendations",id:"specifics-and-recommendations",level:2},{value:"Data Storage",id:"data-storage",level:3},{value:"Selecting and Inserting Data",id:"selecting-and-inserting-data",level:3},{value:"Deleting Data",id:"deleting-data",level:3},{value:"Limitations and Settings",id:"join-limitations-and-settings",level:3},{value:"join_use_nulls",id:"join_use_nulls",level:4},{value:"max_rows_in_join",id:"max_rows_in_join",level:4},{value:"max_bytes_in_join",id:"max_bytes_in_join",level:4},{value:"join_overflow_mode",id:"join_overflow_mode",level:4},{value:"join_any_take_last_row",id:"join_any_take_last_row",level:4},{value:"join_use_nulls",id:"join_use_nulls-1",level:4},{value:"persistent",id:"persistent",level:4},{value:"Usage Examples",id:"example",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"join-table-engine"},"Join Table Engine"),(0,i.kt)("p",null,"Optional prepared data structure for usage in ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/select/join/#select-join"},"JOIN")," operations."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This is not an article about the ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/select/join/#select-join"},"JOIN clause")," itself.")),(0,i.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [TTL expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2] [TTL expr2],\n) ENGINE = Join(join_strictness, join_type, k1[, k2, ...])\n")),(0,i.kt)("p",null,"See the detailed description of the ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/create/table/#create-table-query"},"CREATE TABLE")," query."),(0,i.kt)("h2",{id:"engine-parameters"},"Engine Parameters"),(0,i.kt)("h3",{id:"join_strictness"},"join_strictness"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"join_strictness")," \u2013 ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/select/join/#select-join-types"},"JOIN strictness"),"."),(0,i.kt)("h3",{id:"join_type"},"join_type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"join_type")," \u2013 ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/select/join/#select-join-types"},"JOIN type"),"."),(0,i.kt)("h3",{id:"key-columns"},"Key columns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"k1[, k2, ...]")," \u2013 Key columns from the ",(0,i.kt)("inlineCode",{parentName:"p"},"USING")," clause that the ",(0,i.kt)("inlineCode",{parentName:"p"},"JOIN")," operation is made with."),(0,i.kt)("p",null,"Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"join_strictness")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"join_type")," parameters without quotes, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Join(ANY, LEFT, col1)"),". They must match the ",(0,i.kt)("inlineCode",{parentName:"p"},"JOIN")," operation that the table will be used for. If the parameters do not match, ClickHouse does not throw an exception and may return incorrect data."),(0,i.kt)("h2",{id:"specifics-and-recommendations"},"Specifics and Recommendations"),(0,i.kt)("h3",{id:"data-storage"},"Data Storage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Join")," table data is always located in the RAM. When inserting rows into a table, ClickHouse writes data blocks to the directory on the disk so that they can be restored when the server restarts."),(0,i.kt)("p",null,"If the server restarts incorrectly, the data block on the disk might get lost or damaged. In this case, you may need to manually delete the file with damaged data."),(0,i.kt)("h3",{id:"selecting-and-inserting-data"},"Selecting and Inserting Data"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," queries to add data to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Join"),"-engine tables. If the table was created with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ANY")," strictness, data for duplicate keys are ignored. With the ",(0,i.kt)("inlineCode",{parentName:"p"},"ALL")," strictness, all rows are added."),(0,i.kt)("p",null,"Main use-cases for ",(0,i.kt)("inlineCode",{parentName:"p"},"Join"),"-engine tables are following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Place the table to the right side in a ",(0,i.kt)("inlineCode",{parentName:"li"},"JOIN")," clause."),(0,i.kt)("li",{parentName:"ul"},"Call the ",(0,i.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/functions/other-functions/#joinget"},"joinGet")," function, which lets you extract data from the table the same way as from a dictionary.")),(0,i.kt)("h3",{id:"deleting-data"},"Deleting Data"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ALTER DELETE")," queries for ",(0,i.kt)("inlineCode",{parentName:"p"},"Join"),"-engine tables are implemented as ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/alter/#mutations"},"mutations"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," mutation reads filtered data and overwrites data of memory and disk."),(0,i.kt)("h3",{id:"join-limitations-and-settings"},"Limitations and Settings"),(0,i.kt)("p",null,"When creating a table, the following settings are applied:"),(0,i.kt)("h4",{id:"join_use_nulls"},"join_use_nulls"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings/#join_use_nulls"},"join_use_nulls")),(0,i.kt)("h4",{id:"max_rows_in_join"},"max_rows_in_join"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/query-complexity/#settings-max_rows_in_join"},"max_rows_in_join")),(0,i.kt)("h4",{id:"max_bytes_in_join"},"max_bytes_in_join"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/query-complexity/#settings-max_bytes_in_join"},"max_bytes_in_join")),(0,i.kt)("h4",{id:"join_overflow_mode"},"join_overflow_mode"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/query-complexity/#settings-join_overflow_mode"},"join_overflow_mode")),(0,i.kt)("h4",{id:"join_any_take_last_row"},"join_any_take_last_row"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings/#settings-join_any_take_last_row"},"join_any_take_last_row")),(0,i.kt)("h4",{id:"join_use_nulls-1"},"join_use_nulls"),(0,i.kt)("h4",{id:"persistent"},"persistent"),(0,i.kt)("p",null,"Disables persistency for the Join and ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/special/set"},"Set")," table engines."),(0,i.kt)("p",null,"Reduces the I/O overhead. Suitable for scenarios that pursue performance and do not require persistence."),(0,i.kt)("p",null,"Possible values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 \u2014 Enabled."),(0,i.kt)("li",{parentName:"ul"},"0 \u2014 Disabled.")),(0,i.kt)("p",null,"Default value: ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Join"),"-engine tables can\u2019t be used in ",(0,i.kt)("inlineCode",{parentName:"p"},"GLOBAL JOIN")," operations."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Join"),"-engine allows to specify ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings/#join_use_nulls"},"join_use_nulls")," setting in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement. ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/select/"},"SELECT")," query should have the same ",(0,i.kt)("inlineCode",{parentName:"p"},"join_use_nulls")," value."),(0,i.kt)("h2",{id:"example"},"Usage Examples"),(0,i.kt)("p",null,"Creating the left-side table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE id_val(`id` UInt32, `val` UInt32) ENGINE = TinyLog;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO id_val VALUES (1,11)(2,12)(3,13);\n")),(0,i.kt)("p",null,"Creating the right-side ",(0,i.kt)("inlineCode",{parentName:"p"},"Join")," table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE id_val_join(`id` UInt32, `val` UInt8) ENGINE = Join(ANY, LEFT, id);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO id_val_join VALUES (1,21)(1,22)(3,23);\n")),(0,i.kt)("p",null,"Joining the tables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM id_val ANY LEFT JOIN id_val_join USING (id);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u252c\u2500id_val_join.val\u2500\u2510\n\u2502  1 \u2502  11 \u2502              21 \u2502\n\u2502  2 \u2502  12 \u2502               0 \u2502\n\u2502  3 \u2502  13 \u2502              23 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"As an alternative, you can retrieve data from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Join")," table, specifying the join key value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT joinGet('id_val_join', 'val', toUInt32(1));\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500joinGet('id_val_join', 'val', toUInt32(1))\u2500\u2510\n\u2502                                         21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Deleting a row from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Join")," table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE id_val_join DELETE WHERE id = 3;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u2510\n\u2502  1 \u2502  21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")))}u.isMDXComponent=!0}}]);