"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[30485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||p[d]||s;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={slug:"/en/engines/table-engines/integrations/nats",sidebar_position:14,sidebar_label:"NATS"},i="NATS Engine",l={unversionedId:"en/engines/table-engines/integrations/nats",id:"en/engines/table-engines/integrations/nats",title:"NATS Engine",description:"redisstreams-engine}",source:"@site/docs/en/engines/table-engines/integrations/nats.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/nats",permalink:"/docs/en/engines/table-engines/integrations/nats",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/nats.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{slug:"/en/engines/table-engines/integrations/nats",sidebar_position:14,sidebar_label:"NATS"},sidebar:"english",previous:{title:"MaterializedPostgreSQL",permalink:"/docs/en/engines/table-engines/integrations/materialized-postgresql"},next:{title:"DeltaLake",permalink:"/docs/en/engines/table-engines/integrations/deltalake"}},o={},u=[{value:"Creating a Table",id:"table_engine-redisstreams-creating-a-table",level:2},{value:"Description",id:"description",level:2},{value:"Virtual Columns",id:"virtual-columns",level:2},{value:"Data formats support",id:"data-formats-support",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redisstreams-engine"},"NATS Engine"),(0,r.kt)("p",null,"This engine allows integrating ClickHouse with ",(0,r.kt)("a",{parentName:"p",href:"https://nats.io/"},"NATS"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NATS")," lets you:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Publish or subcribe to message subjects."),(0,r.kt)("li",{parentName:"ul"},"Process new messages as they become available.")),(0,r.kt)("h2",{id:"table_engine-redisstreams-creating-a-table"},"Creating a Table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = NATS SETTINGS\n    nats_url = 'host:port',\n    nats_subjects = 'subject1,subject2,...',\n    nats_format = 'data_format'[,]\n    [nats_row_delimiter = 'delimiter_symbol',]\n    [nats_schema = '',]\n    [nats_num_consumers = N,]\n    [nats_queue_group = 'group_name',]\n    [nats_secure = false,]\n    [nats_max_reconnect = N,]\n    [nats_reconnect_wait = N,]\n    [nats_server_list = 'host1:port1,host2:port2,...',]\n    [nats_skip_broken_messages = N,]\n    [nats_max_block_size = N,]\n    [nats_flush_interval_ms = N,]\n    [nats_username = 'user',]\n    [nats_password = 'password',]\n    [nats_token = 'clickhouse',]\n    [nats_startup_connect_tries = '5']\n    [nats_max_rows_per_message = 1]\n")),(0,r.kt)("p",null,"Required parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_url")," \u2013 host:port (for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:5672"),").."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_subjects")," \u2013 List of subject for NATS table to subscribe/publsh to. Supports wildcard subjects like ",(0,r.kt)("inlineCode",{parentName:"li"},"foo.*.bar")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"baz.>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_format")," \u2013 Message format. Uses the same notation as the SQL ",(0,r.kt)("inlineCode",{parentName:"li"},"FORMAT")," function, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"JSONEachRow"),". For more information, see the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats"},"Formats")," section.")),(0,r.kt)("p",null,"Optional parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_row_delimiter")," \u2013 Delimiter character, which ends the message.  ",(0,r.kt)("strong",{parentName:"li"},"This setting is deprecated and is no longer used, not left for compatibility reasons.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_schema")," \u2013 Parameter that must be used if the format requires a schema definition. For example, ",(0,r.kt)("a",{parentName:"li",href:"https://capnproto.org/"},"Cap\u2019n Proto")," requires the path to the schema file and the name of the root ",(0,r.kt)("inlineCode",{parentName:"li"},"schema.capnp:Message")," object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_num_consumers")," \u2013 The number of consumers per table. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),". Specify more consumers if the throughput of one consumer is insufficient."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_queue_group")," \u2013 Name for queue group of NATS subscribers. Default is the table name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_max_reconnect")," \u2013 Maximum amount of reconnection attempts per try to connect to NATS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_reconnect_wait")," \u2013 Amount of time in milliseconds to sleep between each reconnect attempt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_server_list")," - Server list for connection. Can be specified to connect to NATS cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_skip_broken_messages")," - NATS message parser tolerance to schema-incompatible messages per block. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),". If ",(0,r.kt)("inlineCode",{parentName:"li"},"nats_skip_broken_messages = N")," then the engine skips ",(0,r.kt)("em",{parentName:"li"},"N")," RabbitMQ messages that cannot be parsed (a message equals a row of data)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_max_block_size")," - Number of row collected by poll(s) for flushing data from NATS. Default: ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#setting-max_insert_block_size"},"max_insert_block_size"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_flush_interval_ms")," - Timeout for flushing data read from NATS. Default: ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#stream-flush-interval-ms"},"stream_flush_interval_ms"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_username")," - NATS username."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_password")," - NATS password."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_token")," - NATS auth token."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_startup_connect_tries")," - Number of connect tries at startup. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats_max_rows_per_message")," \u2014 The maximum number of rows written in one NATS message for row-based formats. (default : ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),").")),(0,r.kt)("p",null,"SSL connection:"),(0,r.kt)("p",null,"For secure connection use ",(0,r.kt)("inlineCode",{parentName:"p"},"nats_secure = 1"),".\nThe default behaviour of the used library is not to check if the created TLS connection is sufficiently secure. Whether the certificate is expired, self-signed, missing or invalid: the connection is simply permitted. More strict checking of certificates can possibly be implemented in the future."),(0,r.kt)("p",null,"Writing to NATS table:"),(0,r.kt)("p",null,"If table reads only from one subject, any insert will publish to the same subject.\nHowever, if table reads from multiple subjects, we need to specify which subject we want to publish to.\nThat is why whenever inserting into table with multiple subjects, setting ",(0,r.kt)("inlineCode",{parentName:"p"},"stream_like_engine_insert_queue")," is needed.\nYou can select one of the subjects the table reads from and publish your data there. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE queue (\n    key UInt64,\n    value UInt64\n  ) ENGINE = NATS \n    SETTINGS nats_url = 'localhost:4444',\n             nats_subjects = 'subject1,subject2',\n             nats_format = 'JSONEachRow';\n\n  INSERT INTO queue \n  SETTINGS stream_like_engine_insert_queue = 'subject2'\n  VALUES (1, 1);\n")),(0,r.kt)("p",null,"Also format settings can be added along with nats-related settings."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE queue (\n    key UInt64,\n    value UInt64,\n    date DateTime\n  ) ENGINE = NATS \n    SETTINGS nats_url = 'localhost:4444',\n             nats_subjects = 'subject1',\n             nats_format = 'JSONEachRow',\n             date_time_input_format = 'best_effort';\n")),(0,r.kt)("p",null,"The NATS server configuration can be added using the ClickHouse config file.\nMore specifically you can add Redis password for NATS engine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<nats>\n    <user>click</user>\n    <password>house</password>\n    <token>clickhouse</token>\n</nats>\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," is not particularly useful for reading messages (except for debugging), because each message can be read only once. It is more practical to create real-time threads using ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view"},"materialized views"),". To do this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use the engine to create a NATS consumer and consider it a data stream."),(0,r.kt)("li",{parentName:"ol"},"Create a table with the desired structure."),(0,r.kt)("li",{parentName:"ol"},"Create a materialized view that converts data from the engine and puts it into a previously created table.")),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"MATERIALIZED VIEW")," joins the engine, it starts collecting data in the background. This allows you to continually receive messages from NATS and convert them to the required format using ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),".\nOne NATS table can have as many materialized views as you like, they do not read data from the table directly, but receive new records (in blocks), this way you can write to several tables with different detail level (with grouping - aggregation and without)."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"  CREATE TABLE queue (\n    key UInt64,\n    value UInt64\n  ) ENGINE = NATS \n    SETTINGS nats_url = 'localhost:4444',\n             nats_subjects = 'subject1',\n             nats_format = 'JSONEachRow',\n             date_time_input_format = 'best_effort';\n\n  CREATE TABLE daily (key UInt64, value UInt64)\n    ENGINE = MergeTree() ORDER BY key;\n\n  CREATE MATERIALIZED VIEW consumer TO daily\n    AS SELECT key, value FROM queue;\n\n  SELECT key, value FROM daily ORDER BY key;\n")),(0,r.kt)("p",null,"To stop receiving streams data or to change the conversion logic, detach the materialized view:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"  DETACH TABLE consumer;\n  ATTACH TABLE consumer;\n")),(0,r.kt)("p",null,"If you want to change the target table by using ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER"),", we recommend disabling the material view to avoid discrepancies between the target table and the data from the view."),(0,r.kt)("h2",{id:"virtual-columns"},"Virtual Columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_subject")," - NATS message subject.")),(0,r.kt)("h2",{id:"data-formats-support"},"Data formats support"),(0,r.kt)("p",null,"NATS engine supports all ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats"},"formats")," supported in ClickHouse.\nThe number of rows in one NATS message depends on whether the format is row-based or block-based:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For row-based formats the number of rows in one NATS message can be controlled by setting ",(0,r.kt)("inlineCode",{parentName:"li"},"nats_max_rows_per_message"),"."),(0,r.kt)("li",{parentName:"ul"},"For block-based formats we cannot divide block into smaller parts, but the number of rows in one block can be controlled by general setting ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#setting-max_block_size"},"max_block_size"),".")))}p.isMDXComponent=!0}}]);