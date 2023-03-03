"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[98230],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const i={slug:"/en/engines/table-engines/integrations/embedded-rocksdb",sidebar_position:9,sidebar_label:"EmbeddedRocksDB"},l="EmbeddedRocksDB Engine",o={unversionedId:"en/engines/table-engines/integrations/embedded-rocksdb",id:"en/engines/table-engines/integrations/embedded-rocksdb",title:"EmbeddedRocksDB Engine",description:"This engine allows integrating ClickHouse with rocksdb.",source:"@site/docs/en/engines/table-engines/integrations/embedded-rocksdb.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/embedded-rocksdb",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/integrations/embedded-rocksdb",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/embedded-rocksdb.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{slug:"/en/engines/table-engines/integrations/embedded-rocksdb",sidebar_position:9,sidebar_label:"EmbeddedRocksDB"},sidebar:"english",previous:{title:"Kafka",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/integrations/kafka"},next:{title:"RabbitMQ",permalink:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/integrations/rabbitmq"}},s={},d=[{value:"Creating a Table",id:"table_engine-EmbeddedRocksDB-creating-a-table",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Supported operations",id:"table_engine-EmbeddedRocksDB-supported-operations",level:2},{value:"Inserts",id:"inserts",level:3},{value:"Deletes",id:"deletes",level:3},{value:"Updates",id:"updates",level:3}],p={toc:d},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"embeddedrocksdb-engine"},"EmbeddedRocksDB Engine"),(0,r.kt)("p",null,"This engine allows integrating ClickHouse with ",(0,r.kt)("a",{parentName:"p",href:"http://rocksdb.org/"},"rocksdb"),"."),(0,r.kt)("h2",{id:"table_engine-EmbeddedRocksDB-creating-a-table"},"Creating a Table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = EmbeddedRocksDB([ttl, rocksdb_dir, read_only]) PRIMARY KEY(primary_key_name)\n")),(0,r.kt)("p",null,"Engine parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ttl")," - time to live for values. TTL is accepted in seconds. If TTL is 0, regular RocksDB instance is used (without TTL)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rocksdb_dir")," - path to the directory of an existed RocksDB or the destination path of the created RocksDB. Open the table with the specified ",(0,r.kt)("inlineCode",{parentName:"li"},"rocksdb_dir"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read_only")," - when ",(0,r.kt)("inlineCode",{parentName:"li"},"read_only")," is set to true, read-only mode is used. For storage with TTL, compaction will not be triggered (neither manual nor automatic), so no expired entries are removed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"primary_key_name")," \u2013 any column name in the column list."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"primary key")," must be specified, it supports only one column in the primary key. The primary key will be serialized in binary as a ",(0,r.kt)("inlineCode",{parentName:"li"},"rocksdb key"),"."),(0,r.kt)("li",{parentName:"ul"},"columns other than the primary key will be serialized in binary as ",(0,r.kt)("inlineCode",{parentName:"li"},"rocksdb")," value in corresponding order."),(0,r.kt)("li",{parentName:"ul"},"queries with key ",(0,r.kt)("inlineCode",{parentName:"li"},"equals")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"in")," filtering will be optimized to multi keys lookup from ",(0,r.kt)("inlineCode",{parentName:"li"},"rocksdb"),".")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test\n(\n    `key` String,\n    `v1` UInt32,\n    `v2` String,\n    `v3` Float32\n)\nENGINE = EmbeddedRocksDB\nPRIMARY KEY key\n")),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"There is also ",(0,r.kt)("inlineCode",{parentName:"p"},"system.rocksdb")," table, that expose rocksdb statistics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    name,\n    value\nFROM system.rocksdb\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2510\n\u2502 no.file.opens             \u2502     1 \u2502\n\u2502 number.block.decompressed \u2502     1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You can also change any ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/wiki/Option-String-and-Option-Map"},"rocksdb options")," using config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<rocksdb>\n    <options>\n        <max_background_jobs>8</max_background_jobs>\n    </options>\n    <column_family_options>\n        <num_levels>2</num_levels>\n    </column_family_options>\n    <tables>\n        <table>\n            <name>TABLE</name>\n            <options>\n                <max_background_jobs>8</max_background_jobs>\n            </options>\n            <column_family_options>\n                <num_levels>2</num_levels>\n            </column_family_options>\n        </table>\n    </tables>\n</rocksdb>\n")),(0,r.kt)("h2",{id:"table_engine-EmbeddedRocksDB-supported-operations"},"Supported operations"),(0,r.kt)("h3",{id:"inserts"},"Inserts"),(0,r.kt)("p",null,"When new rows are inserted into ",(0,r.kt)("inlineCode",{parentName:"p"},"EmbeddedRocksDB"),", if the key already exists, the value will be updated, otherwise a new key is created."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test VALUES ('some key', 1, 'value', 3.2);\n")),(0,r.kt)("h3",{id:"deletes"},"Deletes"),(0,r.kt)("p",null,"Rows can be deleted using ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," query or ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUNCATE"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM test WHERE key LIKE 'some%' AND v1 > 1;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE test DELETE WHERE key LIKE 'some%' AND v1 > 1;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE test;\n")),(0,r.kt)("h3",{id:"updates"},"Updates"),(0,r.kt)("p",null,"Values can be updated using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," query. The primary key cannot be updated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE test UPDATE v1 = v1 * 10 + 2 WHERE key LIKE 'some%' AND v3 > 3.1;\n")))}m.isMDXComponent=!0}}]);