"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[22352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={slug:"/en/engines/table-engines/special/file",sidebar_position:40,sidebar_label:"File"},r="File Table Engine",o={unversionedId:"en/engines/table-engines/special/file",id:"en/engines/table-engines/special/file",title:"File Table Engine",description:"The File table engine keeps the data in a file in one of the supported file formats (TabSeparated, Native, etc.).",source:"@site/docs/en/engines/table-engines/special/file.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/file",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/special/file",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/file.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{slug:"/en/engines/table-engines/special/file",sidebar_position:40,sidebar_label:"File"},sidebar:"english",previous:{title:"Executable",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/special/executable"},next:{title:"Null",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/special/null"}},s={},p=[{value:"Usage in ClickHouse Server",id:"usage-in-clickhouse-server",level:2},{value:"Example",id:"example",level:2},{value:"Usage in ClickHouse-local",id:"usage-in-clickhouse-local",level:2},{value:"Details of Implementation",id:"details-of-implementation",level:2},{value:"PARTITION BY",id:"partition-by",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-table-engine"},"File Table Engine"),(0,i.kt)("p",null,"The File table engine keeps the data in a file in one of the supported ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats#formats"},"file formats")," (",(0,i.kt)("inlineCode",{parentName:"p"},"TabSeparated"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Native"),", etc.)."),(0,i.kt)("p",null,"Usage scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data export from ClickHouse to file."),(0,i.kt)("li",{parentName:"ul"},"Convert data from one format to another."),(0,i.kt)("li",{parentName:"ul"},"Updating data in ClickHouse via editing a file on a disk.")),(0,i.kt)("h2",{id:"usage-in-clickhouse-server"},"Usage in ClickHouse Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"File(Format)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Format")," parameter specifies one of the available file formats. To perform\n",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," queries, the format must be supported for input, and to perform\n",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," queries \u2013 for output. The available formats are listed in the\n",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats#formats"},"Formats")," section."),(0,i.kt)("p",null,"ClickHouse does not allow specifying filesystem path for ",(0,i.kt)("inlineCode",{parentName:"p"},"File"),". It will use folder defined by ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/server-configuration-parameters/settings"},"path")," setting in server configuration."),(0,i.kt)("p",null,"When creating table using ",(0,i.kt)("inlineCode",{parentName:"p"},"File(Format)")," it creates empty subdirectory in that folder. When data is written to that table, it\u2019s put into ",(0,i.kt)("inlineCode",{parentName:"p"},"data.Format")," file in that subdirectory."),(0,i.kt)("p",null,"You may manually create this subfolder and file in server filesystem and then ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/attach"},"ATTACH")," it to table information with matching name, so you can query data from that file."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Be careful with this functionality, because ClickHouse does not keep track of external changes to such files. The result of simultaneous writes via ClickHouse and outside of ClickHouse is undefined.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," Set up the ",(0,i.kt)("inlineCode",{parentName:"p"},"file_engine_table")," table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE file_engine_table (name String, value UInt32) ENGINE=File(TabSeparated)\n")),(0,i.kt)("p",null,"By default ClickHouse will create folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/data/default/file_engine_table"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," Manually create ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/data/default/file_engine_table/data.TabSeparated")," containing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat data.TabSeparated\none 1\ntwo 2\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3.")," Query the data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM file_engine_table\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500value\u2500\u2510\n\u2502 one  \u2502     1 \u2502\n\u2502 two  \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"usage-in-clickhouse-local"},"Usage in ClickHouse-local"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/utilities/clickhouse-local"},"clickhouse-local")," File engine accepts file path in addition to ",(0,i.kt)("inlineCode",{parentName:"p"},"Format"),". Default input/output streams can be specified using numeric or human-readable names like ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"stdin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout"),". It is possible to read and write compressed files based on an additional engine parameter or file extension (",(0,i.kt)("inlineCode",{parentName:"p"},"gz"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"br")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"xz"),")."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo -e "1,2\\n3,4" | clickhouse-local -q "CREATE TABLE table (a Int64, b Int64) ENGINE = File(CSV, stdin); SELECT a, b FROM table; DROP TABLE table"\n')),(0,i.kt)("h2",{id:"details-of-implementation"},"Details of Implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT")," queries can be performed concurrently, but ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")," queries will wait each other."),(0,i.kt)("li",{parentName:"ul"},"Supported creating new file by ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")," query."),(0,i.kt)("li",{parentName:"ul"},"If file exists, ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")," would append new values in it."),(0,i.kt)("li",{parentName:"ul"},"Not supported:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ALTER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SELECT ... SAMPLE")),(0,i.kt)("li",{parentName:"ul"},"Indices"),(0,i.kt)("li",{parentName:"ul"},"Replication")))),(0,i.kt)("h2",{id:"partition-by"},"PARTITION BY"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PARTITION BY")," \u2014 Optional.  It is possible to create separate files by partitioning the data on a partition key. In most cases, you don't need a partition key, and if it is needed you generally don't need a partition key more granular than by month. Partitioning does not speed up queries (in contrast to the ORDER BY expression). You should never use too granular partitioning. Don't partition your data by client identifiers or names (instead, make client identifier or name the first column in the ORDER BY expression)."),(0,i.kt)("p",null,"For partitioning by month, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"toYYYYMM(date_column)")," expression, where ",(0,i.kt)("inlineCode",{parentName:"p"},"date_column")," is a column with a date of the type ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date"),". The partition names here have the ",(0,i.kt)("inlineCode",{parentName:"p"},'"YYYYMM"')," format."))}m.isMDXComponent=!0}}]);