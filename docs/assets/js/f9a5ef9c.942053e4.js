"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[89273,17523],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>N});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,N=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return t?a.createElement(N,i(i({ref:n},m),{},{components:t})):a.createElement(N,i({ref:n},m))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},92193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={slug:"/en/sql-reference/statements/explain",sidebar_position:39,sidebar_label:"EXPLAIN",title:"EXPLAIN Statement"},i=void 0,s={unversionedId:"en/sql-reference/statements/explain",id:"en/sql-reference/statements/explain",title:"EXPLAIN Statement",description:"Shows the execution plan of a statement.",source:"@site/docs/en/sql-reference/statements/explain.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/explain",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/explain",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/explain.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/en/sql-reference/statements/explain",sidebar_position:39,sidebar_label:"EXPLAIN",title:"EXPLAIN Statement"},sidebar:"english",previous:{title:"GRANT",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/grant"},next:{title:"REVOKE",permalink:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/revoke"}},o={},p=[{value:"EXPLAIN Types",id:"explain-types",level:2},{value:"EXPLAIN AST",id:"explain-ast",level:3},{value:"EXPLAIN SYNTAX",id:"explain-syntax",level:3},{value:"EXPLAIN QUERY TREE",id:"explain-query-tree",level:3},{value:"EXPLAIN PLAN",id:"explain-plan",level:3},{value:"EXPLAIN PIPELINE",id:"explain-pipeline",level:3},{value:"EXPLAIN ESTIMATE",id:"explain-estimate",level:3},{value:"EXPLAIN TABLE OVERRIDE",id:"explain-table-override",level:3}],m={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Shows the execution plan of a statement."),(0,r.kt)("p",null,"Syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN [AST | SYNTAX | QUERY TREE | PLAN | PIPELINE | ESTIMATE | TABLE OVERRIDE] [setting = value, ...]\n    [\n      SELECT ... |\n      tableFunction(...) [COLUMNS (...)] [ORDER BY ...] [PARTITION BY ...] [PRIMARY KEY] [SAMPLE BY ...] [TTL ...]\n    ]\n    [FORMAT ...]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SELECT sum(number) FROM numbers(10) UNION ALL SELECT sum(number) FROM numbers(10) ORDER BY sum(number) ASC FORMAT TSV;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Union\n  Expression (Projection)\n    Expression (Before ORDER BY and SELECT)\n      Aggregating\n        Expression (Before GROUP BY)\n          SettingQuotaAndLimits (Set limits and quota after reading from storage)\n            ReadFromStorage (SystemNumbers)\n  Expression (Projection)\n    MergingSorted (Merge sorted streams for ORDER BY)\n      MergeSorting (Merge sorted blocks for ORDER BY)\n        PartialSorting (Sort each block for ORDER BY)\n          Expression (Before ORDER BY and SELECT)\n            Aggregating\n              Expression (Before GROUP BY)\n                SettingQuotaAndLimits (Set limits and quota after reading from storage)\n                  ReadFromStorage (SystemNumbers)\n")),(0,r.kt)("h2",{id:"explain-types"},"EXPLAIN Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AST")," \u2014 Abstract syntax tree."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SYNTAX")," \u2014 Query text after AST-level optimizations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"QUERY TREE")," \u2014 Query tree after Query Tree level optimizations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PLAN")," \u2014 Query execution plan."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PIPELINE")," \u2014 Query execution pipeline.")),(0,r.kt)("h3",{id:"explain-ast"},"EXPLAIN AST"),(0,r.kt)("p",null,"Dump query AST. Supports all types of queries, not only ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),"."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN AST SELECT 1;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SelectWithUnionQuery (children 1)\n ExpressionList (children 1)\n  SelectQuery (children 1)\n   ExpressionList (children 1)\n    Literal UInt64_1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN AST ALTER TABLE t1 DELETE WHERE date = today();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"  explain\n  AlterQuery  t1 (children 1)\n   ExpressionList (children 1)\n    AlterCommand 27 (children 1)\n     Function equals (children 1)\n      ExpressionList (children 2)\n       Identifier date\n       Function today (children 1)\n        ExpressionList\n")),(0,r.kt)("h3",{id:"explain-syntax"},"EXPLAIN SYNTAX"),(0,r.kt)("p",null,"Returns query after syntax optimizations."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SYNTAX SELECT * FROM system.numbers AS a, system.numbers AS b, system.numbers AS c;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    `--a.number` AS `a.number`,\n    `--b.number` AS `b.number`,\n    number AS `c.number`\nFROM\n(\n    SELECT\n        number AS `--a.number`,\n        b.number AS `--b.number`\n    FROM system.numbers AS a\n    CROSS JOIN system.numbers AS b\n) AS `--.s`\nCROSS JOIN system.numbers AS c\n")),(0,r.kt)("h3",{id:"explain-query-tree"},"EXPLAIN QUERY TREE"),(0,r.kt)("p",null,"Settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"run_passes")," \u2014 Run all query tree passes before dumping the query tree. Defaul: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dump_passes")," \u2014 Dump information about used passes before dumping the query tree. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"passes")," \u2014 Specifies how many passes to run. If set to ",(0,r.kt)("inlineCode",{parentName:"li"},"-1"),", runs all the passes. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"-1"),".")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN QUERY TREE SELECT id, value FROM test_table;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"QUERY id: 0\n  PROJECTION COLUMNS\n    id UInt64\n    value String\n  PROJECTION\n    LIST id: 1, nodes: 2\n      COLUMN id: 2, column_name: id, result_type: UInt64, source_id: 3\n      COLUMN id: 4, column_name: value, result_type: String, source_id: 3\n  JOIN TREE\n    TABLE id: 3, table_name: default.test_table\n")),(0,r.kt)("h3",{id:"explain-plan"},"EXPLAIN PLAN"),(0,r.kt)("p",null,"Dump query plan steps."),(0,r.kt)("p",null,"Settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"header")," \u2014 Prints output header for step. Default: 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description")," \u2014 Prints step description. Default: 1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"indexes")," \u2014 Shows used indexes, the number of filtered parts and the number of filtered granules for every index applied. Default: 0. Supported for ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," tables."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"actions")," \u2014 Prints detailed information about step actions. Default: 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"json")," \u2014 Prints query plan steps as a row in ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats#json"},"JSON")," format. Default: 0. It is recommended to use ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/interfaces/formats#tabseparatedraw"},"TSVRaw")," format to avoid unnecessary escaping.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SELECT sum(number) FROM numbers(10) GROUP BY number % 4;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Union\n  Expression (Projection)\n  Expression (Before ORDER BY and SELECT)\n    Aggregating\n      Expression (Before GROUP BY)\n        SettingQuotaAndLimits (Set limits and quota after reading from storage)\n          ReadFromStorage (SystemNumbers)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Step and query cost estimation is not supported.")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"json = 1"),", the query plan is represented in JSON format. Every node is a dictionary that always has the keys ",(0,r.kt)("inlineCode",{parentName:"p"},"Node Type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Plans"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Node Type")," is a string with a step name. ",(0,r.kt)("inlineCode",{parentName:"p"},"Plans")," is an array with child step descriptions. Other optional keys may be added depending on node type and settings."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN json = 1, description = 0 SELECT 1 UNION ALL SELECT 2 FORMAT TSVRaw;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Plan": {\n      "Node Type": "Union",\n      "Plans": [\n        {\n          "Node Type": "Expression",\n          "Plans": [\n            {\n              "Node Type": "SettingQuotaAndLimits",\n              "Plans": [\n                {\n                  "Node Type": "ReadFromStorage"\n                }\n              ]\n            }\n          ]\n        },\n        {\n          "Node Type": "Expression",\n          "Plans": [\n            {\n              "Node Type": "SettingQuotaAndLimits",\n              "Plans": [\n                {\n                  "Node Type": "ReadFromStorage"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n]\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," = 1, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Description")," key is added to the step:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Node Type": "ReadFromStorage",\n  "Description": "SystemOne"\n}\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," = 1, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," key is added to the step as an array of columns."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN json = 1, description = 0, header = 1 SELECT 1, 2 + dummy;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Plan": {\n      "Node Type": "Expression",\n      "Header": [\n        {\n          "Name": "1",\n          "Type": "UInt8"\n        },\n        {\n          "Name": "plus(2, dummy)",\n          "Type": "UInt16"\n        }\n      ],\n      "Plans": [\n        {\n          "Node Type": "SettingQuotaAndLimits",\n          "Header": [\n            {\n              "Name": "dummy",\n              "Type": "UInt8"\n            }\n          ],\n          "Plans": [\n            {\n              "Node Type": "ReadFromStorage",\n              "Header": [\n                {\n                  "Name": "dummy",\n                  "Type": "UInt8"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n]\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"indexes")," = 1, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Indexes")," key is added. It contains an array of used indexes. Each index is described as JSON with ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," key (a string ",(0,r.kt)("inlineCode",{parentName:"p"},"MinMax"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Partition"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Skip"),") and optional keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name")," \u2014 The index name (currently only used for ",(0,r.kt)("inlineCode",{parentName:"li"},"Skip")," indexes)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Keys")," \u2014 The array of columns used by the index."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Condition")," \u2014  The used condition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Description")," \u2014 The index description (currently only used for ",(0,r.kt)("inlineCode",{parentName:"li"},"Skip")," indexes)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Parts")," \u2014 The number of parts before/after the index is applied."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Granules")," \u2014 The number of granules before/after the index is applied.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"Node Type": "ReadFromMergeTree",\n"Indexes": [\n  {\n    "Type": "MinMax",\n    "Keys": ["y"],\n    "Condition": "(y in [1, +inf))",\n    "Parts": 5/4,\n    "Granules": 12/11\n  },\n  {\n    "Type": "Partition",\n    "Keys": ["y", "bitAnd(z, 3)"],\n    "Condition": "and((bitAnd(z, 3) not in [1, 1]), and((y in [1, +inf)), (bitAnd(z, 3) not in [1, 1])))",\n    "Parts": 4/3,\n    "Granules": 11/10\n  },\n  {\n    "Type": "PrimaryKey",\n    "Keys": ["x", "y"],\n    "Condition": "and((x in [11, +inf)), (y in [1, +inf)))",\n    "Parts": 3/2,\n    "Granules": 10/6\n  },\n  {\n    "Type": "Skip",\n    "Name": "t_minmax",\n    "Description": "minmax GRANULARITY 2",\n    "Parts": 2/1,\n    "Granules": 6/2\n  },\n  {\n    "Type": "Skip",\n    "Name": "t_set",\n    "Description": "set GRANULARITY 2",\n    "": 1/1,\n    "Granules": 2/1\n  }\n]\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," = 1, added keys depend on step type."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN json = 1, actions = 1, description = 0 SELECT 1 FORMAT TSVRaw;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Plan": {\n      "Node Type": "Expression",\n      "Expression": {\n        "Inputs": [],\n        "Actions": [\n          {\n            "Node Type": "Column",\n            "Result Type": "UInt8",\n            "Result Type": "Column",\n            "Column": "Const(UInt8)",\n            "Arguments": [],\n            "Removed Arguments": [],\n            "Result": 0\n          }\n        ],\n        "Outputs": [\n          {\n            "Name": "1",\n            "Type": "UInt8"\n          }\n        ],\n        "Positions": [0],\n        "Project Input": true\n      },\n      "Plans": [\n        {\n          "Node Type": "SettingQuotaAndLimits",\n          "Plans": [\n            {\n              "Node Type": "ReadFromStorage"\n            }\n          ]\n        }\n      ]\n    }\n  }\n]\n')),(0,r.kt)("h3",{id:"explain-pipeline"},"EXPLAIN PIPELINE"),(0,r.kt)("p",null,"Settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"header")," \u2014 Prints header for each output port. Default: 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"graph")," \u2014 Prints a graph described in the ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/DOT_(graph_description_language)"},"DOT")," graph description language. Default: 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compact")," \u2014 Prints graph in compact mode if ",(0,r.kt)("inlineCode",{parentName:"li"},"graph")," setting is enabled. Default: 1.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN PIPELINE SELECT sum(number) FROM numbers_mt(100000) GROUP BY number % 4;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"(Union)\n(Expression)\nExpressionTransform\n  (Expression)\n  ExpressionTransform\n    (Aggregating)\n    Resize 2 \u2192 1\n      AggregatingTransform \xd7 2\n        (Expression)\n        ExpressionTransform \xd7 2\n          (SettingQuotaAndLimits)\n            (ReadFromStorage)\n            NumbersMt \xd7 2 0 \u2192 1\n")),(0,r.kt)("h3",{id:"explain-estimate"},"EXPLAIN ESTIMATE"),(0,r.kt)("p",null,"Shows the estimated number of rows, marks and parts to be read from the tables while processing the query. Works with tables in the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/engines/table-engines/mergetree-family/mergetree#table_engines-mergetree"},"MergeTree")," family. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Creating a table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE ttt (i Int64) ENGINE = MergeTree() ORDER BY i SETTINGS index_granularity = 16, write_final_mark = 0;\nINSERT INTO ttt SELECT number FROM numbers(128);\nOPTIMIZE TABLE ttt;\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN ESTIMATE SELECT * FROM ttt;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500database\u2500\u252c\u2500table\u2500\u252c\u2500parts\u2500\u252c\u2500rows\u2500\u252c\u2500marks\u2500\u2510\n\u2502 default  \u2502 ttt   \u2502     1 \u2502  128 \u2502     8 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h3",{id:"explain-table-override"},"EXPLAIN TABLE OVERRIDE"),(0,r.kt)("p",null,"Shows the result of a table override on a table schema accessed through a table function.\nAlso does some validation, throwing an exception if the override would have caused some kind of failure."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Assume you have a remote MySQL table like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db.tbl (\n    id INT PRIMARY KEY,\n    created DATETIME DEFAULT now()\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN TABLE OVERRIDE mysql('127.0.0.1:3306', 'db', 'tbl', 'root', 'clickhouse')\nPARTITION BY toYYYYMM(assumeNotNull(created))\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500explain\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 PARTITION BY uses columns: `created` Nullable(DateTime) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The validation is not complete, so a successfull query does not guarantee that the override would not cause issues.")))}d.isMDXComponent=!0},58381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=t(87462),r=(t(67294),t(3905)),l=t(92193);const i={slug:"/zh/sql-reference/statements/explain",sidebar_position:39,sidebar_label:"EXPLAIN",title:"EXPLAIN Statement"},s=void 0,o={unversionedId:"zh/sql-reference/statements/explain",id:"zh/sql-reference/statements/explain",title:"EXPLAIN Statement",description:"",source:"@site/docs/zh/sql-reference/statements/explain.mdx",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/explain",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/statements/explain",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/explain.mdx",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/zh/sql-reference/statements/explain",sidebar_position:39,sidebar_label:"EXPLAIN",title:"EXPLAIN Statement"},sidebar:"chinese",previous:{title:"SHOW",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/statements/show"},next:{title:"\u6388\u6743\u64cd\u4f5c",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/statements/grant"}},p={},m=[],u={toc:m},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l.default,{mdxType:"Content"}))}c.isMDXComponent=!0}}]);