"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[4876],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(a),u=s,f=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,l=new Array(i);l[0]=u;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[m]="string"==typeof e?e:s,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},47299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));const i={sidebar_label:"CSV and TSV",sidebar_position:1,slug:"/en/integrations/data-formats/csv-tsv"},l="Working with CSV and TSV data in ClickHouse",r={unversionedId:"en/integrations/data-ingestion/data-formats/csv-tsv",id:"en/integrations/data-ingestion/data-formats/csv-tsv",title:"Working with CSV and TSV data in ClickHouse",description:"ClickHouse supports importing data from and exporting to CSV. Since CSV files can come with different format specifics, including header rows, custom delimiters, and escape symbols, ClickHouse provides formats and settings to address each case efficiently.",source:"@site/docs/en/integrations/data-ingestion/data-formats/csv-tsv.md",sourceDirName:"en/integrations/data-ingestion/data-formats",slug:"/en/integrations/data-formats/csv-tsv",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/csv-tsv",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/data-formats/csv-tsv.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"CSV and TSV",sidebar_position:1,slug:"/en/integrations/data-formats/csv-tsv"}},o={},p=[{value:"Importing data from a CSV file",id:"importing-data-from-a-csv-file",level:2},{value:"CSV files with headers",id:"csv-files-with-headers",level:3},{value:"CSV files with custom delimiters",id:"csv-files-with-custom-delimiters",level:3},{value:"Skipping lines in a CSV file",id:"skipping-lines-in-a-csv-file",level:3},{value:"Treating NULL values in CSV files",id:"treating-null-values-in-csv-files",level:3},{value:"TSV (Tab-separated) files",id:"tsv-tab-separated-files",level:2},{value:"Raw TSV",id:"raw-tsv",level:3},{value:"Exporting to CSV",id:"exporting-to-csv",level:2},{value:"Saving exported data to a CSV file",id:"saving-exported-data-to-a-csv-file",level:3},{value:"Exporting CSV with custom delimiters",id:"exporting-csv-with-custom-delimiters",level:3},{value:"Exporting CSV for Windows",id:"exporting-csv-for-windows",level:3},{value:"Schema inference for CSV files",id:"schema-inference-for-csv-files",level:2},{value:"Exporting and importing CSV with explicit column types",id:"exporting-and-importing-csv-with-explicit-column-types",level:3},{value:"Custom delimiters, separators, and escaping rules",id:"custom-delimiters-separators-and-escaping-rules",level:2},{value:"Working with large CSV files",id:"working-with-large-csv-files",level:2},{value:"Other formats",id:"other-formats",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...i}=e;return(0,s.kt)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"working-with-csv-and-tsv-data-in-clickhouse"},"Working with CSV and TSV data in ClickHouse"),(0,s.kt)("p",null,"ClickHouse supports importing data from and exporting to CSV. Since CSV files can come with different format specifics, including header rows, custom delimiters, and escape symbols, ClickHouse provides formats and settings to address each case efficiently."),(0,s.kt)("h2",{id:"importing-data-from-a-csv-file"},"Importing data from a CSV file"),(0,s.kt)("p",null,"Before importing data, let\u2019s create a table with a relevant structure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sometable\n(\n    `path` String,\n    `month` Date,\n    `hits` UInt32\n)\nENGINE = MergeTree\nORDER BY tuple(month, path)\n")),(0,s.kt)("p",null,"To import data from the ",(0,s.kt)("a",{target:"_blank",href:a(81527).Z},"CSV file")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"sometable")," table, we can pipe our file directly to the clickhouse-client:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client -q "INSERT INTO sometable FORMAT CSV" < data_small.csv\n')),(0,s.kt)("p",null,"Note that we use ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#csv"},"FORMAT CSV")," to let ClickHouse know we\u2019re ingesting CSV formatted data. Alternatively, we can load data from a local file using the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/insert-into.md/#inserting-data-from-a-file"},"FROM INFILE")," clause:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO sometable\nFROM INFILE 'data_small.csv'\nFORMAT CSV\n")),(0,s.kt)("p",null,"Here, we use the ",(0,s.kt)("inlineCode",{parentName:"p"},"FORMAT CSV")," clause so ClickHouse understands the file format. We can also load data directly from URLs using ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/url.md/"},"url()")," function or from S3 files using ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/s3.md/"},"s3()")," function."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"We can skip explicit format setting for ",(0,s.kt)("inlineCode",{parentName:"p"},"file()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"INFILE"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"OUTFILE"),".\nIn that case, ClickHouse will automatically detect format based on file extension.")),(0,s.kt)("h3",{id:"csv-files-with-headers"},"CSV files with headers"),(0,s.kt)("p",null,"Suppose our ",(0,s.kt)("a",{target:"_blank",href:a(89170).Z},"CSV file has headers")," in it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"head data-small-headers.csv\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},'"path","month","hits"\n"Akiba_Hebrew_Academy","2017-08-01",241\n"Aegithina_tiphia","2018-02-01",34\n')),(0,s.kt)("p",null,"To import data from this file, we can use ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#csvwithnames"},"CSVWithNames")," format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client -q "INSERT INTO sometable FORMAT CSVWithNames" < data_small_headers.csv\n')),(0,s.kt)("p",null,"In this case, ClickHouse skips the first row while importing data from the file."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Starting from 23.1 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/releases"},"version")," ClickHouse will automatically detect headers in CSV files when ",(0,s.kt)("inlineCode",{parentName:"p"},"CSV")," type is used, so no need to use ",(0,s.kt)("inlineCode",{parentName:"p"},"CSVWithNames")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"CSVWithNamesAndTypes"),".")),(0,s.kt)("h3",{id:"csv-files-with-custom-delimiters"},"CSV files with custom delimiters"),(0,s.kt)("p",null,"In case the CSV file uses other than comma delimiter, we can use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings-formats.md/#format_csv_delimiter"},"format_csv_delimiter")," option to set the relevant symbol:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET format_csv_delimiter = ';'\n")),(0,s.kt)("p",null,"Now, when we import from a CSV file, ",(0,s.kt)("inlineCode",{parentName:"p"},";")," symbol is going to be used as a delimiter instead of a comma."),(0,s.kt)("h3",{id:"skipping-lines-in-a-csv-file"},"Skipping lines in a CSV file"),(0,s.kt)("p",null,"Sometimes, we might skip a certain number of lines while importing data from a CSV file. This can be done using ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings-formats.md/#input_format_csv_skip_first_lines"},"input_format_csv_skip_first_lines")," option:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET input_format_csv_skip_first_lines = 10\n")),(0,s.kt)("p",null,"In this case, we\u2019re going to skip the first ten lines from the CSV file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*) FROM file('data-small.csv', CSV)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500count()\u2500\u2510\n\u2502     990 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{target:"_blank",href:a(81527).Z},"file")," has 1k rows, but ClickHouse loaded only 990 since we\u2019ve asked to skip the first 10."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"When using the ",(0,s.kt)("inlineCode",{parentName:"p"},"file()")," function, with ClickHouse Cloud you will need to run the commands in ",(0,s.kt)("inlineCode",{parentName:"p"},"clickhouse client")," on the machine where the file resides. Another option is to use ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/utilities/clickhouse-local.md"},(0,s.kt)("inlineCode",{parentName:"a"},"clickhouse-local"))," to explore files locally.")),(0,s.kt)("h3",{id:"treating-null-values-in-csv-files"},"Treating NULL values in CSV files"),(0,s.kt)("p",null,"Null values can be encoded differently depending on the application that generated the file. By default, ClickHouse uses ",(0,s.kt)("inlineCode",{parentName:"p"},"\\N")," as a Null value in CSV. But we can change that using the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings-formats.md/#format_tsv_null_representation"},"format_csv_null_representation")," option."),(0,s.kt)("p",null,"Suppose we have the following CSV file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"> cat nulls.csv\nDonald,90\nJoe,Nothing\nNothing,70\n")),(0,s.kt)("p",null,"If we load data from this file, ClickHouse will treat ",(0,s.kt)("inlineCode",{parentName:"p"},"Nothing")," as a String (which is correct):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM file('nulls.csv')\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500c1\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500c2\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Donald  \u2502 90      \u2502\n\u2502 Joe     \u2502 Nothing \u2502\n\u2502 Nothing \u2502 70      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"If we want ClickHouse to treat ",(0,s.kt)("inlineCode",{parentName:"p"},"Nothing")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),", we can define that using the following option:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET format_csv_null_representation = 'Nothing'\n")),(0,s.kt)("p",null,"Now we have ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL")," where we expect it to be:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM file('nulls.csv')\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500c1\u2500\u2500\u2500\u2500\u2500\u252c\u2500c2\u2500\u2500\u2500\u2510\n\u2502 Donald \u2502 90   \u2502\n\u2502 Joe    \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 \u1d3a\u1d41\u1d38\u1d38   \u2502 70   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h2",{id:"tsv-tab-separated-files"},"TSV (Tab-separated) files"),(0,s.kt)("p",null,"Tab-separated data format is widely used as a data interchange format. To load data from a ",(0,s.kt)("a",{target:"_blank",href:a(5659).Z},"TSV file")," to ClickHouse, the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#tabseparated"},"TabSeparated")," format is used:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client -q "INSERT INTO sometable FORMAT TabSeparated" < data_small.tsv\n')),(0,s.kt)("p",null,"There\u2019s also a ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#tabseparatedwithnames"},"TabSeparatedWithNames")," format to allow working with TSV files that have headers. And, like for CSV, we can skip the first X lines using the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings-formats.md/#input_format_tsv_skip_first_lines"},"input_format_tsv_skip_first_lines")," option."),(0,s.kt)("h3",{id:"raw-tsv"},"Raw TSV"),(0,s.kt)("p",null,"Sometimes, TSV files are saved without escaping tabs and line breaks. We should use ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#tabseparatedraw"},"TabSeparatedRaw")," to handle such files."),(0,s.kt)("h2",{id:"exporting-to-csv"},"Exporting to CSV"),(0,s.kt)("p",null,"Any format in our previous examples can also be used to export data. To export data from a table (or a query) to a CSV format, we use the same ",(0,s.kt)("inlineCode",{parentName:"p"},"FORMAT")," clause:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM sometable\nLIMIT 5\nFORMAT CSV\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},'"Akiba_Hebrew_Academy","2017-08-01",241\n"Aegithina_tiphia","2018-02-01",34\n"1971-72_Utah_Stars_season","2016-10-01",1\n"2015_UEFA_European_Under-21_Championship_qualification_Group_8","2015-12-01",73\n"2016_Greater_Western_Sydney_Giants_season","2017-05-01",86\n')),(0,s.kt)("p",null,"To add a header to the CSV file, we use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#csvwithnames"},"CSVWithNames")," format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM sometable\nLIMIT 5\nFORMAT CSVWithNames\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},'"path","month","hits"\n"Akiba_Hebrew_Academy","2017-08-01",241\n"Aegithina_tiphia","2018-02-01",34\n"1971-72_Utah_Stars_season","2016-10-01",1\n"2015_UEFA_European_Under-21_Championship_qualification_Group_8","2015-12-01",73\n"2016_Greater_Western_Sydney_Giants_season","2017-05-01",86\n')),(0,s.kt)("h3",{id:"saving-exported-data-to-a-csv-file"},"Saving exported data to a CSV file"),(0,s.kt)("p",null,"To save exported data to a file, we can use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/into-outfile.md"},"INTO\u2026OUTFILE")," clause:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM sometable\nINTO OUTFILE 'out.csv'\nFORMAT CSVWithNames\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"36838935 rows in set. Elapsed: 1.304 sec. Processed 36.84 million rows, 1.42 GB (28.24 million rows/s., 1.09 GB/s.)\n")),(0,s.kt)("p",null,"Note how it took ClickHouse ",(0,s.kt)("strong",{parentName:"p"},"~1")," second to save 36m rows to a CSV file."),(0,s.kt)("h3",{id:"exporting-csv-with-custom-delimiters"},"Exporting CSV with custom delimiters"),(0,s.kt)("p",null,"If we want to have other than comma delimiters, we can use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings-formats.md/#format_csv_delimiter"},"format_csv_delimiter")," settings option for that:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET format_csv_delimiter = '|'\n")),(0,s.kt)("p",null,"Now ClickHouse will use ",(0,s.kt)("inlineCode",{parentName:"p"},"|")," as a delimiter for CSV format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM sometable\nLIMIT 5\nFORMAT CSV\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},'"Akiba_Hebrew_Academy"|"2017-08-01"|241\n"Aegithina_tiphia"|"2018-02-01"|34\n"1971-72_Utah_Stars_season"|"2016-10-01"|1\n"2015_UEFA_European_Under-21_Championship_qualification_Group_8"|"2015-12-01"|73\n"2016_Greater_Western_Sydney_Giants_season"|"2017-05-01"|86\n')),(0,s.kt)("h3",{id:"exporting-csv-for-windows"},"Exporting CSV for Windows"),(0,s.kt)("p",null,"If we want a CSV file to work fine in a Windows environment, we should consider enabling ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings-formats.md/#output_format_csv_crlf_end_of_line"},"output_format_csv_crlf_end_of_line")," option. This will use ",(0,s.kt)("inlineCode",{parentName:"p"},"\\r\\n")," as a line breaks instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"\\n"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET output_format_csv_crlf_end_of_line = 1;\n")),(0,s.kt)("h2",{id:"schema-inference-for-csv-files"},"Schema inference for CSV files"),(0,s.kt)("p",null,'We might work with unknown CSV files in many cases, so we have to explore which types to use for columns. Clickhouse, by default, will try to guess data formats based on its analysis of a given CSV file.  This is known as "Schema Inference". Detected data types can be explored using the ',(0,s.kt)("inlineCode",{parentName:"p"},"DESCRIBE")," statement in pair with the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/file.md"},"file()")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE file('data-small.csv', CSV)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500name\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u2510\n\u2502 c1   \u2502 Nullable(String) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 c2   \u2502 Nullable(Date)   \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 c3   \u2502 Nullable(Int64)  \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Here, ClickHouse could guess column types for our CSV file efficiently. If we don\u2019t want ClickHouse to guess, we can disable this with the following option:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET input_format_csv_use_best_effort_in_schema_inference = 0\n")),(0,s.kt)("p",null,"All column types will be treated as a ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," in this case."),(0,s.kt)("h3",{id:"exporting-and-importing-csv-with-explicit-column-types"},"Exporting and importing CSV with explicit column types"),(0,s.kt)("p",null,"ClickHouse also allows explicitly setting column types when exporting data using ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#csvwithnamesandtypes"},"CSVWithNamesAndTypes")," (and other *WithNames formats family):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM sometable\nLIMIT 5\nFORMAT CSVWithNamesAndTypes\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},'"path","month","hits"\n"String","Date","UInt32"\n"Akiba_Hebrew_Academy","2017-08-01",241\n"Aegithina_tiphia","2018-02-01",34\n"1971-72_Utah_Stars_season","2016-10-01",1\n"2015_UEFA_European_Under-21_Championship_qualification_Group_8","2015-12-01",73\n"2016_Greater_Western_Sydney_Giants_season","2017-05-01",86\n')),(0,s.kt)("p",null,"This format will include two header rows - one with column names and the other with column types. This will allow ClickHouse (and other apps) to identify column types when loading data from ",(0,s.kt)("a",{target:"_blank",href:a(61132).Z},"such files"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE file('data_csv_types.csv', CSVWithNamesAndTypes)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500name\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u2510\n\u2502 path  \u2502 String \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 month \u2502 Date   \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 hits  \u2502 UInt32 \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Now ClickHouse identifies column types based on a (second) header row instead of guessing."),(0,s.kt)("h2",{id:"custom-delimiters-separators-and-escaping-rules"},"Custom delimiters, separators, and escaping rules"),(0,s.kt)("p",null,"In sophisticated cases, text data can be formatted in a highly custom manner but still have a structure. ClickHouse has a special ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#format-customseparated"},"CustomSeparated")," format for such cases, which allows setting custom escaping rules, delimiters, line separators, and starting/ending symbols."),(0,s.kt)("p",null,"Suppose we have the following data in the file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"row('Akiba_Hebrew_Academy';'2017-08-01';241),row('Aegithina_tiphia';'2018-02-01';34),...\n")),(0,s.kt)("p",null,"We can see that individual rows are wrapped in ",(0,s.kt)("inlineCode",{parentName:"p"},"row()"),", lines are separated with ",(0,s.kt)("inlineCode",{parentName:"p"},",")," and individual values are delimited with ",(0,s.kt)("inlineCode",{parentName:"p"},";"),". In this case, we can use the following settings to read data from this file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET format_custom_row_before_delimiter = 'row(';\nSET format_custom_row_after_delimiter = ')';\nSET format_custom_field_delimiter = ';';\nSET format_custom_row_between_delimiter = ',';\nSET format_custom_escaping_rule = 'Quoted';\n")),(0,s.kt)("p",null,"Now we can load data from our custom formatted ",(0,s.kt)("a",{target:"_blank",href:a(40025).Z},"file"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM file('data_small_custom.txt', CustomSeparated)\nLIMIT 3\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500c1\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500c2\u2500\u252c\u2500\u2500c3\u2500\u2510\n\u2502 Akiba_Hebrew_Academy      \u2502 2017-08-01 \u2502 241 \u2502\n\u2502 Aegithina_tiphia          \u2502 2018-02-01 \u2502  34 \u2502\n\u2502 1971-72_Utah_Stars_season \u2502 2016-10-01 \u2502   1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"We can also use ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats.md/#customseparatedwithnames"},"CustomSeparatedWithNames")," to get headers exported and imported correctly. Explore ",(0,s.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/templates-regexp"},"regex and template")," formats to deal with even more complex cases."),(0,s.kt)("h2",{id:"working-with-large-csv-files"},"Working with large CSV files"),(0,s.kt)("p",null,"CSV files can be large, and ClickHouse works efficiently with files of any size. Large files usually come compressed, and ClickHouse covers this with no need for decompression before processing. We can use a ",(0,s.kt)("inlineCode",{parentName:"p"},"COMPRESSION")," clause during an insert:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO sometable\nFROM INFILE 'data_csv.csv.gz'\nCOMPRESSION 'gzip' FORMAT CSV\n")),(0,s.kt)("p",null,"If a ",(0,s.kt)("inlineCode",{parentName:"p"},"COMPRESSION")," clause is omitted, ClickHouse will still try to guess file compression based on its extension. The same approach can be used to export files directly to compressed formats:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM for_csv\nINTO OUTFILE 'data_csv.csv.gz'\nCOMPRESSION 'gzip' FORMAT CSV\n")),(0,s.kt)("p",null,"This will create a compressed ",(0,s.kt)("inlineCode",{parentName:"p"},"data_csv.csv.gz")," file."),(0,s.kt)("h2",{id:"other-formats"},"Other formats"),(0,s.kt)("p",null,"ClickHouse introduces support for many formats, both text, and binary, to cover various scenarios and platforms. Explore more formats and ways to work with them in the following articles:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"CSV and TSV formats")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/parquet-arrow-avro-orc"},"Parquet, Avro, Arrow and ORC")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/json"},"JSON formats")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/templates-regexp"},"Regex and templates")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/binary-native"},"Native and binary formats")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/integrations/data-formats/sql"},"SQL formats"))),(0,s.kt)("p",null,"And also check ",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/blog/extracting-converting-querying-local-files-with-sql-clickhouse-local"},"clickhouse-local")," - a portable full-featured tool to work on local/remote files without the need for Clickhouse server."))}d.isMDXComponent=!0},61132:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/data_csv_types-c74cceade0c1e9663917fce7866175d6.csv"},81527:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/data_small-221917c8bad6ba5f809d442a9e8e40b5.csv"},5659:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/data_small-71d90f4a40aa3cda835ab0feb8a7b588.tsv"},40025:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/data_small_custom-6bea557c59b2b53ef70ec3936afa7d8d.txt"},89170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/data_small_headers-a6392414b05dc22a901590ca85594a03.csv"}}]);