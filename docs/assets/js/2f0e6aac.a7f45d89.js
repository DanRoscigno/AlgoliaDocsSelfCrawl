"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[49948],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,d=m["".concat(s,".").concat(u)]||m[u]||f[u]||o;return t?n.createElement(d,i(i({ref:a},c),{},{components:t})):n.createElement(d,i({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73646:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const o={sidebar_label:"Binary and native",sidebar_position:5,slug:"/en/integrations/data-formats/binary-native"},i="Using native and binary formats in ClickHouse",l={unversionedId:"en/integrations/data-ingestion/data-formats/binary",id:"en/integrations/data-ingestion/data-formats/binary",title:"Using native and binary formats in ClickHouse",description:"ClickHouse supports multiple binary formats, which result in better performance and space efficiency. Binary formats are also safe in character encoding since data is saved in a binary form.",source:"@site/docs/en/integrations/data-ingestion/data-formats/binary.md",sourceDirName:"en/integrations/data-ingestion/data-formats",slug:"/en/integrations/data-formats/binary-native",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/binary-native",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/data-formats/binary.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Binary and native",sidebar_position:5,slug:"/en/integrations/data-formats/binary-native"},sidebar:"english",previous:{title:"Parquet, Avro, Arrow and ORC",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/parquet-arrow-avro-orc"},next:{title:"SQL dumps",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/sql"}},s={},p=[{value:"Exporting in a Native ClickHouse format",id:"exporting-in-a-native-clickhouse-format",level:2},{value:"Importing from a Native format",id:"importing-from-a-native-format",level:3},{value:"Native format compression",id:"native-format-compression",level:3},{value:"Exporting to RowBinary",id:"exporting-to-rowbinary",level:2},{value:"Exploring RowBinary files",id:"exploring-rowbinary-files",level:3},{value:"Importing from RowBinary files",id:"importing-from-rowbinary-files",level:3},{value:"Importing single binary value using RawBLOB",id:"importing-single-binary-value-using-rawblob",level:2},{value:"Exporting RawBLOB data",id:"exporting-rawblob-data",level:3},{value:"MessagePack",id:"messagepack",level:2},{value:"Protocol Buffers",id:"protocol-buffers",level:2},{value:"Cap\u2019n Proto",id:"capn-proto",level:2},{value:"Other formats",id:"other-formats",level:2}],c={toc:p},m="wrapper";function f(e){let{components:a,...o}=e;return(0,r.kt)(m,(0,n.Z)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-native-and-binary-formats-in-clickhouse"},"Using native and binary formats in ClickHouse"),(0,r.kt)("p",null,"ClickHouse supports multiple binary formats, which result in better performance and space efficiency. Binary formats are also safe in character encoding since data is saved in a binary form."),(0,r.kt)("p",null,"We're going to use some_data ",(0,r.kt)("a",{target:"_blank",href:t(22645).Z},"table")," and ",(0,r.kt)("a",{target:"_blank",href:t(98756).Z},"data")," for demonstration, feel free to reproduce that on your ClickHouse instance."),(0,r.kt)("h2",{id:"exporting-in-a-native-clickhouse-format"},"Exporting in a Native ClickHouse format"),(0,r.kt)("p",null,"The most efficient data format to export and import data between ClickHouse nodes is ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats/#native"},"Native")," format. Exporting is done using ",(0,r.kt)("inlineCode",{parentName:"p"},"INTO OUTFILE")," clause:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM some_data\nINTO OUTFILE 'data.clickhouse' FORMAT Native\n")),(0,r.kt)("p",null,"This will create ",(0,r.kt)("a",{target:"_blank",href:t(5957).Z},"data.clickhouse")," file in a native format."),(0,r.kt)("h3",{id:"importing-from-a-native-format"},"Importing from a Native format"),(0,r.kt)("p",null,"To import data, we can use ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/table-functions/file"},"file()")," for smaller files or exploration purposes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE file('data.clickhouse', Native);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500name\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u2510\n\u2502 path  \u2502 String \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 month \u2502 Date   \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 hits  \u2502 UInt32 \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"file()")," function, with ClickHouse Cloud you will need to run the commands in ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse client")," on the machine where the file resides. Another option is to use ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/utilities/clickhouse-local"},(0,r.kt)("inlineCode",{parentName:"a"},"clickhouse-local"))," to explore files locally.")),(0,r.kt)("p",null,"In production, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM INFILE")," to import data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO sometable\nFROM INFILE 'data.clickhouse'\nFORMAT Native\n")),(0,r.kt)("h3",{id:"native-format-compression"},"Native format compression"),(0,r.kt)("p",null,"We can also enable compression while exporting data to Native format (as well as most other formats) using a ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPRESSION")," clause:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM some_data\nINTO OUTFILE 'data.clickhouse'\nCOMPRESSION 'lz4'\nFORMAT Native\n")),(0,r.kt)("p",null,"We've used LZ4 compression for export. We'll have to specify it while importing data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO sometable\nFROM INFILE 'data.clickhouse'\nCOMPRESSION 'lz4'\nFORMAT Native\n")),(0,r.kt)("h2",{id:"exporting-to-rowbinary"},"Exporting to RowBinary"),(0,r.kt)("p",null,"Another binary format supported is ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats/#rowbinary"},"RowBinary"),", which allows importing and exporting data in binary-represented rows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM some_data\nINTO OUTFILE 'data.binary' FORMAT RowBinary\n")),(0,r.kt)("p",null,"This will generate ",(0,r.kt)("a",{target:"_blank",href:t(52480).Z},"data.binary")," file in a binary rows format."),(0,r.kt)("h3",{id:"exploring-rowbinary-files"},"Exploring RowBinary files"),(0,r.kt)("p",null,"Automatic schema inference is not supported for this format, so to explore before loading, we have to define schema explicitly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM file('data.binary', RowBinary, 'path String, month Date, hits UInt32')\nLIMIT 5\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500month\u2500\u252c\u2500hits\u2500\u2510\n\u2502 Bangor_City_Forest             \u2502 2015-07-01 \u2502   34 \u2502\n\u2502 Alireza_Afzal                  \u2502 2017-02-01 \u2502   24 \u2502\n\u2502 Akhaura-Laksam-Chittagong_Line \u2502 2015-09-01 \u2502   30 \u2502\n\u2502 1973_National_500              \u2502 2017-10-01 \u2502   80 \u2502\n\u2502 Attachment                     \u2502 2017-09-01 \u2502 1356 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Consider using ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats/#rowbinarywithnames"},"RowBinaryWithNames"),", which also adds a header row with a columns list. ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats/#rowbinarywithnamesandtypes"},"RowBinaryWithNamesAndTypes")," will also add an additional header row with column types."),(0,r.kt)("h3",{id:"importing-from-rowbinary-files"},"Importing from RowBinary files"),(0,r.kt)("p",null,"To load data from a RowBinary file, we can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM INFILE")," clause:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO sometable\nFROM INFILE 'data.binary'\nFORMAT RowBinary\n")),(0,r.kt)("h2",{id:"importing-single-binary-value-using-rawblob"},"Importing single binary value using RawBLOB"),(0,r.kt)("p",null,"Suppose we want to read an entire binary file and save it into a field in a table.\nThis is the case when the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats/#rawblob"},"RawBLOB format")," can be used. This format can be directly used with a single-column table only:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE images(data String) Engine = Memory\n")),(0,r.kt)("p",null,"Let's save an image file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"images")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cat image.jpg | clickhouse-client -q "INSERT INTO images FORMAT RawBLOB"\n')),(0,r.kt)("p",null,"We can check the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field length which will be equal to the original file size:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT length(data) FROM images\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500length(data)\u2500\u2510\n\u2502         6121 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h3",{id:"exporting-rawblob-data"},"Exporting RawBLOB data"),(0,r.kt)("p",null,"This format can also be used to export data using an ",(0,r.kt)("inlineCode",{parentName:"p"},"INTO OUTFILE")," clause:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM images LIMIT 1\nINTO OUTFILE 'out.jpg'\nFORMAT RawBLOB\n")),(0,r.kt)("p",null,"Note that we had to use ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT 1")," because exporting more than a single value will create a corrupted file."),(0,r.kt)("h2",{id:"messagepack"},"MessagePack"),(0,r.kt)("p",null,"ClickHouse supports importing and exporting to ",(0,r.kt)("a",{parentName:"p",href:"https://msgpack.org/"},"MessagePack")," using the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats/#msgpack"},"MsgPack"),". To export to MessagePack format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM some_data\nINTO OUTFILE 'data.msgpk'\nFORMAT MsgPack\n")),(0,r.kt)("p",null,"To import data from a ",(0,r.kt)("a",{target:"_blank",href:t(28349).Z},"MessagePack file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO sometable\nFROM INFILE 'data.msgpk'\nFORMAT MsgPack\n")),(0,r.kt)("h2",{id:"protocol-buffers"},"Protocol Buffers"),(0,r.kt)("p",null,"To work with ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats/#protobuf"},"Protocol Buffers")," we first need to define a ",(0,r.kt)("a",{target:"_blank",href:t(98616).Z},"schema file"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\nmessage MessageType {\n  string path = 1;\n  date month = 2;\n  uint32 hits = 3;\n};\n')),(0,r.kt)("p",null,"Path to this schema file (",(0,r.kt)("inlineCode",{parentName:"p"},"schema.proto")," in our case) is set in a ",(0,r.kt)("inlineCode",{parentName:"p"},"format_schema")," settings option for the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats/#protobuf"},"Protobuf")," format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM some_data\nINTO OUTFILE 'proto.bin'\nFORMAT Protobuf\nSETTINGS format_schema = 'schema:MessageType'\n")),(0,r.kt)("p",null,"This saves data to the ",(0,r.kt)("a",{target:"_blank",href:t(20984).Z},"proto.bin")," file. ClickHouse also supports importing Protobuf data as well as nested messages. Consider using ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats/#protobufsingle"},"ProtobufSingle")," to work with a single Protocol Buffer message (length delimiters will be omitted in this case)."),(0,r.kt)("h2",{id:"capn-proto"},"Cap\u2019n Proto"),(0,r.kt)("p",null,"Another popular binary serialization format supported by ClickHouse is ",(0,r.kt)("a",{parentName:"p",href:"https://capnproto.org/"},"Cap\u2019n Proto"),". Similarly to ",(0,r.kt)("inlineCode",{parentName:"p"},"Protobuf")," format, we have to define a schema file (",(0,r.kt)("a",{target:"_blank",href:t(89577).Z},"schema.capnp"),") in our example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@0xec8ff1a10aa10dbe;\n\nstruct PathStats {\n  path @0 :Text;\n  month @1 :UInt32;\n  hits @2 :UInt32;\n}\n")),(0,r.kt)("p",null,"Now we can import and export using ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats/#capnproto"},"CapnProto")," format and this schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    path,\n    CAST(month, 'UInt32') AS month,\n    hits\nFROM some_data\nINTO OUTFILE 'capnp.bin'\nFORMAT CapnProto\nSETTINGS format_schema = 'schema:PathStats'\n")),(0,r.kt)("p",null,"Note that we had to cast the ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," column as ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt32")," to ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats/#data_types-matching-capnproto"},"match corresponding types"),"."),(0,r.kt)("h2",{id:"other-formats"},"Other formats"),(0,r.kt)("p",null,"ClickHouse introduces support for many formats, both text, and binary, to cover various scenarios and platforms. Explore more formats and ways to work with them in the following articles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/csv-tsv"},"CSV and TSV formats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/parquet-arrow-avro-orc"},"Parquet, Avro, Arrow and ORC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/json"},"JSON formats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/templates-regexp"},"Regex and templates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Native and binary formats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/sql"},"SQL formats"))),(0,r.kt)("p",null,"And also check ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/blog/extracting-converting-querying-local-files-with-sql-clickhouse-local"},"clickhouse-local")," - a portable full-featured tool to work on local/remote files without starting ClickHouse server."))}f.isMDXComponent=!0},52480:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/data-d3411acf564d94b5474ec82061d4fc7b.binary"},5957:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/data-bf32b3ff4cbe28d7b4ae0b810eef9861.clickhouse"},28349:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/data-52382c91f64279d4cc08a203c8d033b7.msgpk"},20984:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/proto-64c1444bf8a54cf03e6fa5c4925b11f6.bin"},89577:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/schema-eb595147f6142930f144316cbe1707e3.capnp"},98616:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/schema-389da5b0925fda6e0f06c944f9427e3d.proto"},22645:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/some_data-a632dc4a002ca619e7c3c4cbeedb744f.sql"},98756:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/some_data-d46c76038ba8bd91e24d9ff9e4a8b8f9.tsv"}}]);