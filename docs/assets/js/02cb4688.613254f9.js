"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[51012,34404],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,u=d["".concat(o,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(u,s(s({ref:t},g),{},{components:a})):n.createElement(u,s({ref:t},g))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={slug:"/en/engines/table-engines/integrations/materialized-postgresql",sidebar_position:12,sidebar_label:"MaterializedPostgreSQL",title:"MaterializedPostgreSQL"},s=void 0,l={unversionedId:"en/engines/table-engines/integrations/materialized-postgresql",id:"en/engines/table-engines/integrations/materialized-postgresql",title:"MaterializedPostgreSQL",description:"Creates ClickHouse table with an initial data dump of PostgreSQL table and starts replication process, i.e. executes background job to apply new changes as they happen on PostgreSQL table in the remote PostgreSQL database.",source:"@site/docs/en/engines/table-engines/integrations/materialized-postgresql.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/materialized-postgresql",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/integrations/materialized-postgresql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/materialized-postgresql.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{slug:"/en/engines/table-engines/integrations/materialized-postgresql",sidebar_position:12,sidebar_label:"MaterializedPostgreSQL",title:"MaterializedPostgreSQL"},sidebar:"english",previous:{title:"ExternalDistributed",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/integrations/ExternalDistributed"},next:{title:"NATS",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/integrations/nats"}},o={},p=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Virtual columns",id:"virtual-columns",level:2}],g={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Creates ClickHouse table with an initial data dump of PostgreSQL table and starts replication process, i.e. executes background job to apply new changes as they happen on PostgreSQL table in the remote PostgreSQL database."),(0,i.kt)("p",null,"If more than one table is required, it is highly recommended to use the ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/engines/database-engines/materialized-postgresql"},"MaterializedPostgreSQL")," database engine instead of the table engine and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_tables_list")," setting, which specifies the tables to be replicated (will also be possible to add database ",(0,i.kt)("inlineCode",{parentName:"p"},"schema"),"). It will be much better in terms of CPU, fewer connections and fewer replication slots inside the remote PostgreSQL database."),(0,i.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE postgresql_db.postgresql_replica (key UInt64, value UInt64)\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgresql_replica', 'postgres_user', 'postgres_password')\nPRIMARY KEY key;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 PostgreSQL server address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," \u2014 Remote database name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," \u2014 Remote table name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," \u2014 PostgreSQL user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," \u2014 User password.")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/runtime-config-wal.html"},"wal_level")," setting must have a value ",(0,i.kt)("inlineCode",{parentName:"p"},"logical")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max_replication_slots")," parameter must have a value at least ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," in the PostgreSQL config file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A table with ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterializedPostgreSQL")," engine must have a primary key \u2014 the same as a replica identity index (by default: primary key) of a PostgreSQL table (see ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/engines/database-engines/materialized-postgresql#requirements"},"details on replica identity index"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Only database ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Atomicity_(database_systems)"},"Atomic")," is allowed."))),(0,i.kt)("h2",{id:"virtual-columns"},"Virtual columns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"_version")," \u2014 Transaction counter. Type: ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"_sign")," \u2014 Deletion mark. Type: ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"Int8"),". Possible values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," \u2014 Row is not deleted,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-1")," \u2014 Row is deleted.")))),(0,i.kt)("p",null,"These columns do not need to be added when a table is created. They are always accessible in ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query.\n",(0,i.kt)("inlineCode",{parentName:"p"},"_version")," column equals ",(0,i.kt)("inlineCode",{parentName:"p"},"LSN")," position in ",(0,i.kt)("inlineCode",{parentName:"p"},"WAL"),", so it might be used to check how up-to-date replication is."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE postgresql_db.postgresql_replica (key UInt64, value UInt64)\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgresql_replica', 'postgres_user', 'postgres_password')\nPRIMARY KEY key;\n\nSELECT key, value, _version FROM postgresql_db.postgresql_replica;\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Replication of ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.5/storage-toast.html"},(0,i.kt)("strong",{parentName:"a"},"TOAST"))," values is not supported. The default value for the data type will be used.")))}c.isMDXComponent=!0},67672:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>g});var n=a(87462),i=(a(67294),a(3905)),r=a(91343);const s={slug:"/zh/engines/table-engines/integrations/materialized-postgresql",sidebar_position:12,sidebar_label:"MaterializedPostgreSQL",title:"MaterializedPostgreSQL"},l=void 0,o={unversionedId:"zh/engines/table-engines/integrations/materialized-postgresql",id:"zh/engines/table-engines/integrations/materialized-postgresql",title:"MaterializedPostgreSQL",description:"",source:"@site/docs/zh/engines/table-engines/integrations/materialized-postgresql.mdx",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/materialized-postgresql",permalink:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/integrations/materialized-postgresql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/materialized-postgresql.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{slug:"/zh/engines/table-engines/integrations/materialized-postgresql",sidebar_position:12,sidebar_label:"MaterializedPostgreSQL",title:"MaterializedPostgreSQL"},sidebar:"chinese",previous:{title:"ExternalDistributed",permalink:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/integrations/ExternalDistributed"},next:{title:"JDBC\u8868\u5f15\u64ce",permalink:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/integrations/jdbc"}},p={},g=[],d={toc:g},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.default,{mdxType:"Content"}))}m.isMDXComponent=!0}}]);