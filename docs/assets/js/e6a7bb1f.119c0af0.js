"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[44262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/en/operations/system-tables/columns"},l="columns",s={unversionedId:"en/operations/system-tables/columns",id:"en/operations/system-tables/columns",title:"columns",description:"Contains information about columns in all the tables.",source:"@site/docs/en/operations/system-tables/columns.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/columns",permalink:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/columns",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/columns.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/columns"},sidebar:"english",previous:{title:"clusters",permalink:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/clusters"},next:{title:"contributors",permalink:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/contributors"}},o={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"columns"},"columns"),(0,r.kt)("p",null,"Contains information about columns in all the tables."),(0,r.kt)("p",null,"You can use this table to get information similar to the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/describe-table"},"DESCRIBE TABLE")," query, but for multiple tables at once."),(0,r.kt)("p",null,"Columns from ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/create/table#temporary-tables"},"temporary tables")," are visible in the ",(0,r.kt)("inlineCode",{parentName:"p"},"system.columns")," only in those session where they have been created. They are shown with the empty ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," field."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"system.columns")," table contains the following columns (the column type is shown in brackets):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"database")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Database name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"table")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Table name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Column name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Column type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"position")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Ordinal position of a column in a table starting with 1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default_kind")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Expression type (",(0,r.kt)("inlineCode",{parentName:"li"},"DEFAULT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MATERIALIZED"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ALIAS"),") for the default value, or an empty string if it is not defined."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default_expression")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Expression for the default value, or an empty string if it is not defined."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data_compressed_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The size of compressed data, in bytes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data_uncompressed_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The size of decompressed data, in bytes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"marks_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The size of marks, in bytes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"comment")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Comment on the column, or an empty string if it is not defined."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_in_partition_key")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag that indicates whether the column is in the partition expression."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_in_sorting_key")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag that indicates whether the column is in the sorting key expression."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_in_primary_key")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag that indicates whether the column is in the primary key expression."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_in_sampling_key")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag that indicates whether the column is in the sampling key expression."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compression_codec")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Compression codec name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"character_octet_length")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum length in bytes for binary data, character data, or text data and images. In ClickHouse makes sense only for ",(0,r.kt)("inlineCode",{parentName:"li"},"FixedString")," data type. Otherwise, the ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")," value is returned."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"numeric_precision")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Accuracy of approximate numeric data, exact numeric data, integer data, or monetary data. In ClickHouse it is bitness for integer types and decimal precision for ",(0,r.kt)("inlineCode",{parentName:"li"},"Decimal")," types. Otherwise, the ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")," value is returned."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"numeric_precision_radix")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 The base of the number system is the accuracy of approximate numeric data, exact numeric data, integer data or monetary data. In ClickHouse it's 2 for integer types and 10 for ",(0,r.kt)("inlineCode",{parentName:"li"},"Decimal")," types. Otherwise, the ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")," value is returned."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"numeric_scale")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 The scale of approximate numeric data, exact numeric data, integer data, or monetary data. In ClickHouse makes sense only for ",(0,r.kt)("inlineCode",{parentName:"li"},"Decimal")," types. Otherwise, the ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")," value is returned."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"datetime_precision")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Decimal precision of ",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime64")," data type. For other data types, the ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")," value is returned.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.columns LIMIT 2 FORMAT Vertical;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                INFORMATION_SCHEMA\ntable:                   COLUMNS\nname:                    table_catalog\ntype:                    String\nposition:                1\ndefault_kind:\ndefault_expression:\ndata_compressed_bytes:   0\ndata_uncompressed_bytes: 0\nmarks_bytes:             0\ncomment:\nis_in_partition_key:     0\nis_in_sorting_key:       0\nis_in_primary_key:       0\nis_in_sampling_key:      0\ncompression_codec:\ncharacter_octet_length:  \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision:       \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision_radix: \u1d3a\u1d41\u1d38\u1d38\nnumeric_scale:           \u1d3a\u1d41\u1d38\u1d38\ndatetime_precision:      \u1d3a\u1d41\u1d38\u1d38\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                INFORMATION_SCHEMA\ntable:                   COLUMNS\nname:                    table_schema\ntype:                    String\nposition:                2\ndefault_kind:\ndefault_expression:\ndata_compressed_bytes:   0\ndata_uncompressed_bytes: 0\nmarks_bytes:             0\ncomment:\nis_in_partition_key:     0\nis_in_sorting_key:       0\nis_in_primary_key:       0\nis_in_sampling_key:      0\ncompression_codec:\ncharacter_octet_length:  \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision:       \u1d3a\u1d41\u1d38\u1d38\nnumeric_precision_radix: \u1d3a\u1d41\u1d38\u1d38\nnumeric_scale:           \u1d3a\u1d41\u1d38\u1d38\ndatetime_precision:      \u1d3a\u1d41\u1d38\u1d38\n")))}u.isMDXComponent=!0}}]);