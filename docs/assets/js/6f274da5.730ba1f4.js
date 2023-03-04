"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[1307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51908:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This page is not applicable to ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),". The feature documented here is not yet available in ClickHouse Cloud services.\nSee the ClickHouse ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility#roadmap"},"Cloud Compatibility")," guide for more information.")))}o.isMDXComponent=!0},48324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),r=n(51908);const l={sidebar_label:"S3 Table Engine",sidebar_position:3,slug:"/en/integrations/s3/s3-table-engine",description:"Users may naturally wish to treat an S3 bucket as a table, utilizing this within existing queries. To address this, ClickHouse provides the S3 table engine."},o="S3 Table Engines",s={unversionedId:"en/integrations/data-ingestion/s3/s3-table-engine",id:"en/integrations/data-ingestion/s3/s3-table-engine",title:"S3 Table Engines",description:"Users may naturally wish to treat an S3 bucket as a table, utilizing this within existing queries. To address this, ClickHouse provides the S3 table engine.",source:"@site/docs/en/integrations/data-ingestion/s3/s3-table-engine.md",sourceDirName:"en/integrations/data-ingestion/s3",slug:"/en/integrations/s3/s3-table-engine",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/s3/s3-table-engine",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/s3/s3-table-engine.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"S3 Table Engine",sidebar_position:3,slug:"/en/integrations/s3/s3-table-engine",description:"Users may naturally wish to treat an S3 bucket as a table, utilizing this within existing queries. To address this, ClickHouse provides the S3 table engine."}},p={},c=[{value:"Reading Data",id:"reading-data",level:2},{value:"Inserting Data",id:"inserting-data",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Managing Credentials",id:"managing-credentials",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"s3-table-engines"},"S3 Table Engines"),(0,i.kt)(r.ZP,{mdxType:"SelfManaged"}),(0,i.kt)("p",null,"While the ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," functions allow ad-hoc queries to be performed on data stored in S3, they are syntactically verbose for more complex queries. Users may naturally wish to treat an S3 bucket as a table, utilizing this within existing queries. To address this, ClickHouse provides the S3 table engine."),(0,i.kt)("p",null,"Creating tables backed by this engine uses the DDL syntax shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE s3_engine_table (name String, value UInt32)\n    ENGINE = S3(path, [aws_access_key_id, aws_secret_access_key,] format, [compression])\n    [SETTINGS ...]\n")),(0,i.kt)("p",null,"where,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"path \u2014 Bucket URL with a path to the file. Supports following wildcards in read-only mode: *, ?, {abc,def} and {N..M} where N, M \u2014 numbers, 'abc', 'def' \u2014 strings. For more information, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/s3.md/#wildcards-in-path"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"format \u2014 The",(0,i.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats.md/#formats"}," format")," of the file."),(0,i.kt)("li",{parentName:"ul"},"aws_access_key_id, aws_secret_access_key - Long-term credentials for the AWS account user. You can use these to authenticate your requests. The parameter is optional. If credentials are not specified, configuration file values are used. For more information, see ",(0,i.kt)("a",{parentName:"li",href:"#managing-credentials"},"Managing credentials"),"."),(0,i.kt)("li",{parentName:"ul"},"compression \u2014 Compression type. Supported values: none, gzip/gz, brotli/br, xz/LZMA, zstd/zst. The parameter is optional. By default, it will autodetect compression by file extension.")),(0,i.kt)("h2",{id:"reading-data"},"Reading Data"),(0,i.kt)("p",null,"In the following example, we create a table trips_raw using the first ten tsv files located within the ",(0,i.kt)("inlineCode",{parentName:"p"},"https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/")," bucket. Each of these contains 1m rows each."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE trips_raw\n(\n   `trip_id`               UInt32,\n   `vendor_id`             Enum8('1' = 1, '2' = 2, '3' = 3, '4' = 4, 'CMT' = 5, 'VTS' = 6, 'DDS' = 7, 'B02512' = 10, 'B02598' = 11, 'B02617' = 12, 'B02682' = 13, 'B02764' = 14, '' = 15),\n   `pickup_date`           Date,\n   `pickup_datetime`       DateTime,\n   `dropoff_date`          Date,\n   `dropoff_datetime`      DateTime,\n   `store_and_fwd_flag`    UInt8,\n   `rate_code_id`          UInt8,\n   `pickup_longitude`      Float64,\n   `pickup_latitude`       Float64,\n   `dropoff_longitude`     Float64,\n   `dropoff_latitude`      Float64,\n   `passenger_count`       UInt8,\n   `trip_distance`         Float64,\n   `fare_amount`           Float32,\n   `extra`                 Float32,\n   `mta_tax`               Float32,\n   `tip_amount`            Float32,\n   `tolls_amount`          Float32,\n   `ehail_fee`             Float32,\n   `improvement_surcharge` Float32,\n   `total_amount`          Float32,\n   `payment_type_`         Enum8('UNK' = 0, 'CSH' = 1, 'CRE' = 2, 'NOC' = 3, 'DIS' = 4),\n   `trip_type`             UInt8,\n   `pickup`                FixedString(25),\n   `dropoff`               FixedString(25),\n   `cab_type`              Enum8('yellow' = 1, 'green' = 2, 'uber' = 3),\n   `pickup_nyct2010_gid`   Int8,\n   `pickup_ctlabel`        Float32,\n   `pickup_borocode`       Int8,\n   `pickup_ct2010`         String,\n   `pickup_boroct2010`     FixedString(7),\n   `pickup_cdeligibil`     String,\n   `pickup_ntacode`        FixedString(4),\n   `pickup_ntaname`        String,\n   `pickup_puma`           UInt16,\n   `dropoff_nyct2010_gid`  UInt8,\n   `dropoff_ctlabel`       Float32,\n   `dropoff_borocode`      UInt8,\n   `dropoff_ct2010`        String,\n   `dropoff_boroct2010`    FixedString(7),\n   `dropoff_cdeligibil`    String,\n   `dropoff_ntacode`       FixedString(4),\n   `dropoff_ntaname`       String,\n   `dropoff_puma`          UInt16\n) ENGINE = S3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_{0..9}.gz', 'TabSeparatedWithNames', 'gzip');\n")),(0,i.kt)("p",null,"Notice the use of the {0..9} pattern to limit to the first ten files."),(0,i.kt)("p",null,"Once created, we can query this table like any other e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT(pickup_ntaname) FROM trips_raw LIMIT 10;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\n\u250c\u2500pickup_ntaname\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Lenox Hill-Roosevelt Island                      \u2502\n\u2502 Airport                                          \u2502\n\u2502 SoHo-TriBeCa-Civic Center-Little Italy           \u2502\n\u2502 West Village                                     \u2502\n\u2502 Chinatown                                        \u2502\n\u2502 Hudson Yards-Chelsea-Flatiron-Union Square       \u2502\n\u2502 Turtle Bay-East Midtown                          \u2502\n\u2502 Upper West Side                                  \u2502\n\u2502 Murray Hill-Kips Bay                             \u2502\n\u2502 DUMBO-Vinegar Hill-Downtown Brooklyn-Boerum Hill \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"inserting-data"},"Inserting Data"),(0,i.kt)("p",null,"Whilst this table engine supports parallel reads, writes are only supported if the table definition does not contain glob patterns. The above table, therefore, would block writes."),(0,i.kt)("p",null,"To illustrate writes, create the following table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE trips_dest\n(\n   `trip_id`               UInt32,\n   `pickup_date`           Date,\n   `pickup_datetime`       DateTime,\n   `dropoff_datetime`      DateTime,\n   `tip_amount`            Float32,\n   `total_amount`          Float32\n) ENGINE = S3('<bucket path>/trips.bin', 'Native');\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This query requires write access to the bucket")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO trips_dest SELECT trip_id, pickup_date, pickup_datetime, dropoff_datetime, tip_amount, total_amount FROM trips LIMIT 10;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM trips_dest LIMIT 5;\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"trip","_","id"),(0,i.kt)("th",{parentName:"tr",align:"left"},"pickup","_","date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"pickup","_","datetime"),(0,i.kt)("th",{parentName:"tr",align:"left"},"dropoff","_","datetime"),(0,i.kt)("th",{parentName:"tr",align:"left"},"tip","_","amount"),(0,i.kt)("th",{parentName:"tr",align:"left"},"total","_","amount"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"14"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02 09:43:58"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02 09:44:13"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"15"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02 09:44:43"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02 09:45:15"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"21"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02 11:30:00"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02 17:08:00"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"172")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"21"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02 12:30:00"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02 18:08:00"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"172")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"23"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02 18:00:50"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2013-08-02 18:01:55"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6.5")))),(0,i.kt)("p",null,"Note that rows can only be inserted into new files. There are no merge cycles or file split operations. Once a file is written, subsequent inserts will fail. Users have two options here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Specify the setting ",(0,i.kt)("inlineCode",{parentName:"li"},"s3_create_new_file_on_insert=1"),". This will cause the creation of new files on each insert. A numeric suffix will be appended to the end of each file that will monotonically increase for each insert operation. For the above example, a subsequent insert would cause the creation of a trips_1.bin file."),(0,i.kt)("li",{parentName:"ul"},"Specify the setting ",(0,i.kt)("inlineCode",{parentName:"li"},"s3_truncate_on_insert=1"),". This will cause a truncation of the file, i.e. it will only contain the newly inserted rows once complete.")),(0,i.kt)("p",null,"Both of these settings default to 0 - thus forcing the user to set one of them. s3_truncate_on_insert will take precedence if both are set."),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("p",null,"Unlike a traditional merge tree family table, dropping an s3 table will not delete the underlying data."),(0,i.kt)("p",null,"Full settings for this table type can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/s3.md/#settings"},"here"),"."),(0,i.kt)("p",null,"Be aware of the following caveats when using this engine:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ALTER queries are not supported"),(0,i.kt)("li",{parentName:"ul"},"SAMPLE operations are not supported"),(0,i.kt)("li",{parentName:"ul"},"There is no notion of indexes, i.e. primary or skip.")),(0,i.kt)("h2",{id:"managing-credentials"},"Managing Credentials"),(0,i.kt)("p",null,"In the previous examples, we have passed credentials in the s3 function or table definition. Whilst this may be acceptable for occasional usage, users require less explicit authentication mechanisms in production. To address this, ClickHouse has several options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Specify the connection details in the config.xml or an equivalent configuration file under conf.d. The contents of an example file are shown below, assuming installation using the debian package."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"ubuntu@single-node-clickhouse:/etc/clickhouse-server/config.d$ cat s3.xml\n<clickhouse>\n    <s3>\n        <endpoint-name>\n            <endpoint>https://dalem-files.s3.amazonaws.com/test/</endpoint>\n            <access_key_id>key</access_key_id>\n            <secret_access_key>secret</secret_access_key>\n            \x3c!-- <use_environment_credentials>false</use_environment_credentials> --\x3e\n            \x3c!-- <header>Authorization: Bearer SOME-TOKEN</header> --\x3e\n        </endpoint-name>\n    </s3>\n</clickhouse>\n")),(0,i.kt)("p",{parentName:"li"},"  These credentials will be used for any requests where the endpoint above is an exact prefix match for the requested URL. Also, note the ability in this example to declare an authorization header as an alternative to access and secret keys. A complete list of supported settings can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/s3.md/#settings"},"here"),"."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The example above highlights the availability of the configuration parameter use_environment_credentials. This configuration parameter can also be set globally at the s3 level i.e."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <s3>\n    <use_environment_credentials>true</use_environment_credentials>\n    </s3>\n</clickhouse>\n")),(0,i.kt)("p",{parentName:"li"},"  This setting turns on an attempt to retrieve s3 credentials from the environment, thus allowing access through IAM roles. Specifically, the following order of retrieval is performed:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A lookup for the environment variables AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN"),(0,i.kt)("li",{parentName:"ul"},"Check performed in $HOME/.aws"),(0,i.kt)("li",{parentName:"ul"},"Temporary credentials obtained via the AWS Security Token Service - i.e. via ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html"},"AssumeRole")," API"),(0,i.kt)("li",{parentName:"ul"},"Checks for credentials in the ECS environment variables AWS_CONTAINER_CREDENTIALS_RELATIVE_URI or AWS_CONTAINER_CREDENTIALS_FULL_URI and AWS_ECS_CONTAINER_AUTHORIZATION_TOKEN."),(0,i.kt)("li",{parentName:"ul"},"Obtains the credentials via ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-metadata.html"},"Amazon EC2 instance metadata")," provided ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html#envvars-list-AWS_EC2_METADATA_DISABLED"},"AWS_EC2_METADATA_DISABLED")," is not set to true.")))),(0,i.kt)("p",null,"These same settings can also be set for a specific endpoint, using the same prefix matching rule."))}m.isMDXComponent=!0}}]);