"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[7149],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>f});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=n,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return t?r.createElement(f,i(i({ref:a},m),{},{components:t})):r.createElement(f,i({ref:a},m))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12338:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const o={sidebar_label:"Parquet, Avro, Arrow and ORC",sidebar_position:4,slug:"/en/integrations/data-formats/parquet-arrow-avro-orc"},i="Working with Parquet, Avro, Arrow, and ORC data in ClickHouse",l={unversionedId:"en/integrations/data-ingestion/data-formats/parquet-arrow-avro-orc",id:"en/integrations/data-ingestion/data-formats/parquet-arrow-avro-orc",title:"Working with Parquet, Avro, Arrow, and ORC data in ClickHouse",description:"Apache has released multiple data formats actively used in analytics environments, including the most popular Parquet, Avro, Arrow, and Orc. ClickHouse supports importing and exporting data using any from that list.",source:"@site/docs/en/integrations/data-ingestion/data-formats/parquet-arrow-avro-orc.md",sourceDirName:"en/integrations/data-ingestion/data-formats",slug:"/en/integrations/data-formats/parquet-arrow-avro-orc",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/parquet-arrow-avro-orc",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/data-formats/parquet-arrow-avro-orc.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Parquet, Avro, Arrow and ORC",sidebar_position:4,slug:"/en/integrations/data-formats/parquet-arrow-avro-orc"}},s={},p=[{value:"Working with Parquet data",id:"working-with-parquet-data",level:2},{value:"Importing from Parquet",id:"importing-from-parquet",level:3},{value:"Importing to an existing table",id:"importing-to-an-existing-table",level:3},{value:"Creating new tables from parquet files",id:"creating-new-tables-from-parquet-files",level:3},{value:"Exporting to Parquet format",id:"exporting-to-parquet-format",level:3},{value:"ClickHouse and Parquet data types",id:"clickhouse-and-parquet-data-types",level:3},{value:"Importing and exporting in Avro format",id:"importing-and-exporting-in-avro-format",level:2},{value:"Avro and ClickHouse data types",id:"avro-and-clickhouse-data-types",level:3},{value:"Avro messages in Kafka",id:"avro-messages-in-kafka",level:3},{value:"Working with Arrow format",id:"working-with-arrow-format",level:2},{value:"Arrow data streaming",id:"arrow-data-streaming",level:3},{value:"Importing and exporting ORC data",id:"importing-and-exporting-orc-data",level:2},{value:"Further reading",id:"further-reading",level:2}],m={toc:p},c="wrapper";function u(e){let{components:a,...o}=e;return(0,n.kt)(c,(0,r.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"working-with-parquet-avro-arrow-and-orc-data-in-clickhouse"},"Working with Parquet, Avro, Arrow, and ORC data in ClickHouse"),(0,n.kt)("p",null,"Apache has released multiple data formats actively used in analytics environments, including the most popular ",(0,n.kt)("a",{parentName:"p",href:"https://parquet.apache.org/"},"Parquet"),", ",(0,n.kt)("a",{parentName:"p",href:"https://avro.apache.org/"},"Avro"),", ",(0,n.kt)("a",{parentName:"p",href:"https://arrow.apache.org/"},"Arrow"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://orc.apache.org/"},"Orc"),". ClickHouse supports importing and exporting data using any from that list."),(0,n.kt)("h2",{id:"working-with-parquet-data"},"Working with Parquet data"),(0,n.kt)("p",null,"Parquet is an efficient file format to store data in a column-oriented way."),(0,n.kt)("h3",{id:"importing-from-parquet"},"Importing from Parquet"),(0,n.kt)("p",null,"Before loading data, we can use ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/files.md/#file"},"file()")," function to explore an ",(0,n.kt)("a",{target:"_blank",href:t(3890).Z},"example parquet file")," structure:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE TABLE file('data.parquet', Parquet)\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"When using the ",(0,n.kt)("inlineCode",{parentName:"p"},"file()")," function, with ClickHouse Cloud you will need to run the commands in ",(0,n.kt)("inlineCode",{parentName:"p"},"clickhouse client")," on the machine where the file resides. Another option is to use ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/operations/utilities/clickhouse-local.md"},(0,n.kt)("inlineCode",{parentName:"a"},"clickhouse-local"))," to explore files locally.")),(0,n.kt)("p",null,"We've used ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#data-format-parquet"},"Parquet")," as a second argument, so ClickHouse knows the file format. This will print columns with the types:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500name\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u2510\n\u2502 path \u2502 Nullable(String) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 date \u2502 Nullable(String) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 hits \u2502 Nullable(Int64)  \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,"We can also explore files before actually importing data using all power of SQL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM file('data.parquet', Parquet)\nLIMIT 3\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500date\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500hits\u2500\u2510\n\u2502 Akiba_Hebrew_Academy      \u2502 2017-08-01 \u2502  241 \u2502\n\u2502 Aegithina_tiphia          \u2502 2018-02-01 \u2502   34 \u2502\n\u2502 1971-72_Utah_Stars_season \u2502 2016-10-01 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We can skip explicit format setting for ",(0,n.kt)("inlineCode",{parentName:"p"},"file()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"INFILE"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"OUTFILE"),".\nIn that case, ClickHouse will automatically detect format based on file extension.")),(0,n.kt)("h3",{id:"importing-to-an-existing-table"},"Importing to an existing table"),(0,n.kt)("p",null,"Let's create a table to import parquet data to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sometable\n(\n    `path` String,\n    `date` Date,\n    `hits` UInt32\n)\nENGINE = MergeTree\nORDER BY (date, path)\n")),(0,n.kt)("p",null,"Now we can import data using a ",(0,n.kt)("inlineCode",{parentName:"p"},"FROM INFILE")," clause:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO sometable\nFROM INFILE 'data.parquet' FORMAT Parquet;\n\nSELECT *\nFROM sometable\nLIMIT 5;\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500date\u2500\u252c\u2500hits\u2500\u2510\n\u2502 1988_in_philosophy            \u2502 2015-05-01 \u2502   70 \u2502\n\u2502 2004_Green_Bay_Packers_season \u2502 2015-05-01 \u2502  970 \u2502\n\u2502 24_hours_of_lemans            \u2502 2015-05-01 \u2502   37 \u2502\n\u2502 25604_Karlin                  \u2502 2015-05-01 \u2502   20 \u2502\n\u2502 ASCII_ART                     \u2502 2015-05-01 \u2502    9 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,"Note how ClickHouse automatically converted parquet strings (in the ",(0,n.kt)("inlineCode",{parentName:"p"},"date")," column) to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Date")," type. This is because ClickHouse does a typecast automatically based on the types in the target table."),(0,n.kt)("h3",{id:"creating-new-tables-from-parquet-files"},"Creating new tables from parquet files"),(0,n.kt)("p",null,"Since ClickHouse reads parquet file schema, we can create tables on the fly:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE imported_from_parquet\nENGINE = MergeTree\nORDER BY tuple() AS\nSELECT *\nFROM file('data.parquet', Parquet)\n")),(0,n.kt)("p",null,"This will automatically create and populate a table from a given parquet file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE TABLE imported_from_parquet;\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500name\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u2510\n\u2502 path \u2502 Nullable(String) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 date \u2502 Nullable(String) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 hits \u2502 Nullable(Int64)  \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,"By default, ClickHouse is strict with column names, types, and values. But sometimes, we can skip unexistent columns or unsupported values during import. This can be managed with ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#parquet-format-settings"},"Parquet settings"),"."),(0,n.kt)("h3",{id:"exporting-to-parquet-format"},"Exporting to Parquet format"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"When using ",(0,n.kt)("inlineCode",{parentName:"p"},"INTO OUTFILE")," with ClickHouse Cloud you will need to run the commands in ",(0,n.kt)("inlineCode",{parentName:"p"},"clickhouse client")," on the machine where the file will be written to.")),(0,n.kt)("p",null,"To export any table or query result to the Parquet file, we can use an ",(0,n.kt)("inlineCode",{parentName:"p"},"INTO OUTFILE")," clause:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM sometable\nINTO OUTFILE 'export.parquet'\nFORMAT Parquet\n")),(0,n.kt)("p",null,"This will create the ",(0,n.kt)("inlineCode",{parentName:"p"},"export.parquet")," file in a working directory."),(0,n.kt)("h3",{id:"clickhouse-and-parquet-data-types"},"ClickHouse and Parquet data types"),(0,n.kt)("p",null,"ClickHouse and Parquet data types are mostly identical but still ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#data-types-matching-parquet"},"differ a bit"),". For example, ClickHouse will export ",(0,n.kt)("inlineCode",{parentName:"p"},"DateTime")," type as a Parquets' ",(0,n.kt)("inlineCode",{parentName:"p"},"int64"),". If we then import that back to ClickHouse, we're going to see numbers (",(0,n.kt)("a",{target:"_blank",href:t(80108).Z},"time.parquet file"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM file('time.parquet', Parquet);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500n\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500time\u2500\u2510\n\u2502 0 \u2502 1673622611 \u2502\n\u2502 1 \u2502 1673622610 \u2502\n\u2502 2 \u2502 1673622609 \u2502\n\u2502 3 \u2502 1673622608 \u2502\n\u2502 4 \u2502 1673622607 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,"In this case ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/type-conversion-functions.md"},"type conversion")," can be used:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    n,\n    toDateTime(time)                 <--- int to time\nFROM file('time.parquet', Parquet);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500n\u2500\u252c\u2500\u2500\u2500\u2500toDateTime(time)\u2500\u2510\n\u2502 0 \u2502 2023-01-13 15:10:11 \u2502\n\u2502 1 \u2502 2023-01-13 15:10:10 \u2502\n\u2502 2 \u2502 2023-01-13 15:10:09 \u2502\n\u2502 3 \u2502 2023-01-13 15:10:08 \u2502\n\u2502 4 \u2502 2023-01-13 15:10:07 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("h2",{id:"importing-and-exporting-in-avro-format"},"Importing and exporting in Avro format"),(0,n.kt)("p",null,"ClickHouse supports reading and writing ",(0,n.kt)("a",{parentName:"p",href:"https://avro.apache.org/"},"Apache Avro")," data files, which are widely used in Hadoop systems."),(0,n.kt)("p",null,"To import from an ",(0,n.kt)("a",{target:"_blank",href:t(5266).Z},"avro file"),", we should use ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#data-format-avro"},"Avro")," format in the ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT")," statement:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO sometable\nFROM INFILE 'data.avro'\nFORMAT Avro\n")),(0,n.kt)("p",null,"With the ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/files.md/#file"},"file()")," function, we can also explore Avro files before actually importing data:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT path, hits\nFROM file('data.avro', Avro)\nORDER BY hits DESC\nLIMIT 5;\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500hits\u2500\u2510\n\u2502 Amy_Poehler     \u2502 62732 \u2502\n\u2502 Adam_Goldberg   \u2502 42338 \u2502\n\u2502 Aaron_Spelling  \u2502 25128 \u2502\n\u2502 Absence_seizure \u2502 18152 \u2502\n\u2502 Ammon_Bundy     \u2502 11890 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,"To export to Avro file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM sometable\nINTO OUTFILE 'export.avro'\nFORMAT Avro;\n")),(0,n.kt)("h3",{id:"avro-and-clickhouse-data-types"},"Avro and ClickHouse data types"),(0,n.kt)("p",null,"Consider ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#data_types-matching"},"data types matching")," when importing or exporting Avro files. Use explicit type casting to convert when loading data from Avro files:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    date,\n    toDate(date)\nFROM file('data.avro', Avro)\nLIMIT 3;\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500\u2500date\u2500\u252c\u2500toDate(date)\u2500\u2510\n\u2502 16556 \u2502   2015-05-01 \u2502\n\u2502 16556 \u2502   2015-05-01 \u2502\n\u2502 16556 \u2502   2015-05-01 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("h3",{id:"avro-messages-in-kafka"},"Avro messages in Kafka"),(0,n.kt)("p",null,"When Kafka messages use Avro format, ClickHouse can read such streams using ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#data-format-avro-confluent"},"AvroConfluent")," format and ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/kafka.md"},"Kafka")," engine:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE some_topic_stream\n(\n    field1 UInt32,\n    field2 String\n)\nENGINE = Kafka() SETTINGS\nkafka_broker_list = 'localhost',\nkafka_topic_list = 'some_topic',\nkafka_group_name = 'some_group',\nkafka_format = 'AvroConfluent';\n")),(0,n.kt)("h2",{id:"working-with-arrow-format"},"Working with Arrow format"),(0,n.kt)("p",null,"Another columnar format is ",(0,n.kt)("a",{parentName:"p",href:"https://arrow.apache.org/"},"Apache Arrow"),", also supported by ClickHouse for import and export. To import data from an ",(0,n.kt)("a",{target:"_blank",href:t(85963).Z},"Arrow file"),", we use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#data-format-arrow"},"Arrow")," format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO sometable\nFROM INFILE 'data.arrow'\nFORMAT Arrow\n")),(0,n.kt)("p",null,"Exporting to Arrow file works the same way:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM sometable\nINTO OUTFILE 'export.arrow'\nFORMAT Arrow\n")),(0,n.kt)("p",null,"Also, check ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#data-types-matching-arrow"},"data types matching")," to know if any should be converted manually."),(0,n.kt)("h3",{id:"arrow-data-streaming"},"Arrow data streaming"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#data-format-arrow-stream"},"ArrowStream")," format can be used to work with Arrow streaming (used for in-memory processing). ClickHouse can read and write Arrow streams."),(0,n.kt)("p",null,"To demonstrate how ClickHouse can stream Arrow data, let's pipe it to the following python script (it reads input stream in Arrow streaming format and outputs the result as a Pandas table):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import sys, pyarrow as pa\n\nwith pa.ipc.open_stream(sys.stdin.buffer) as reader:\n  print(reader.read_pandas())\n")),(0,n.kt)("p",null,"Now we can stream data from ClickHouse by piping its output to the script:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client -q "SELECT path, hits FROM some_data LIMIT 3 FORMAT ArrowStream" | python3 arrow.py\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-response"},"                           path  hits\n0       b'Akiba_Hebrew_Academy'   241\n1           b'Aegithina_tiphia'    34\n2  b'1971-72_Utah_Stars_season'     1\n")),(0,n.kt)("p",null,"ClickHouse can read Arrow streams as well using the same ArrowStream format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'arrow-stream | clickhouse-client -q "INSERT INTO sometable FORMAT ArrowStream"\n')),(0,n.kt)("p",null,"We've used ",(0,n.kt)("inlineCode",{parentName:"p"},"arrow-stream")," as a possible source of Arrow streaming data."),(0,n.kt)("h2",{id:"importing-and-exporting-orc-data"},"Importing and exporting ORC data"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://orc.apache.org/"},"Apache ORC")," format is a columnar storage format typically used for Hadoop. ClickHouse supports importing as well as exporting ",(0,n.kt)("a",{target:"_blank",href:t(93605).Z},"Orc data")," using ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#data-format-orc"},"ORC format"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM sometable\nINTO OUTFILE 'data.orc'\nFORMAT ORC;\n\nINSERT INTO sometable\nFROM INFILE 'data.orc'\nFORMAT ORC;\n")),(0,n.kt)("p",null,"Also, check ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#data-types-matching-orc"},"data types matching")," as well as ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#parquet-format-settings"},"additional settings")," to tune export and import."),(0,n.kt)("h2",{id:"further-reading"},"Further reading"),(0,n.kt)("p",null,"ClickHouse introduces support for many formats, both text, and binary, to cover various scenarios and platforms. Explore more formats and ways to work with them in the following articles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/csv-tsv"},"CSV and TSV formats")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parquet, Avro, Arrow and ORC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/json"},"JSON formats")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/templates-regexp"},"Regex and templates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/binary-native"},"Native and binary formats")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/sql"},"SQL formats"))),(0,n.kt)("p",null,"And also check ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.com/blog/extracting-converting-querying-local-files-with-sql-clickhouse-local"},"clickhouse-local")," - a portable full-featured tool to work on local/remote files without the need for Clickhouse server."))}u.isMDXComponent=!0},85963:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/data-e34efb7c41390a44e4db06cf14dd539b.arrow"},5266:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/data-a7ef352ad979099ce4ec4baf4fa54710.avro"},93605:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/data-9ff869bfbcdf168bdfe4eb08f7a8fd50.orc"},3890:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/data-afb67b42d91da5fef56d4de3d5ce6d73.parquet"},80108:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/time-c76d9f13086ac7bec7b861291d1494eb.parquet"}}]);