"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[57852],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={slug:"/en/operations/system-tables/query_log"},l="query_log",o={unversionedId:"en/operations/system-tables/query_log",id:"en/operations/system-tables/query_log",title:"query_log",description:"Contains information about executed queries, for example, start time, duration of processing, error messages.",source:"@site/docs/en/operations/system-tables/query_log.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/query_log",permalink:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/query_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/query_log.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/query_log"},sidebar:"english",previous:{title:"system.processors_profile_log",permalink:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/processors_profile_log"},next:{title:"query_thread_log",permalink:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/query_thread_log"}},s={},u=[],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query_log"},"query_log"),(0,r.kt)("p",null,"Contains information about executed queries, for example, start time, duration of processing, error messages."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This table does not contain the ingested data for ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," queries.")),(0,r.kt)("p",null,"You can change settings of queries logging in the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/server-configuration-parameters/settings#server_configuration_parameters-query-log"},"query_log")," section of the server configuration."),(0,r.kt)("p",null,"You can disable queries logging by setting ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings#settings-log-queries"},"log_queries = 0"),". We do not recommend to turn off logging because information in this table is important for solving issues."),(0,r.kt)("p",null,"The flushing period of data is set in ",(0,r.kt)("inlineCode",{parentName:"p"},"flush_interval_milliseconds")," parameter of the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/server-configuration-parameters/settings#server_configuration_parameters-query-log"},"query_log")," server settings section. To force flushing, use the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/system#query_language-system-flush_logs"},"SYSTEM FLUSH LOGS")," query."),(0,r.kt)("p",null,"ClickHouse does not delete data from the table automatically. See ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/#system-tables-introduction"},"Introduction")," for more details."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"system.query_log")," table registers two kinds of queries:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initial queries that were run directly by the client."),(0,r.kt)("li",{parentName:"ol"},"Child queries that were initiated by other queries (for distributed query execution). For these types of queries, information about the parent queries is shown in the ",(0,r.kt)("inlineCode",{parentName:"li"},"initial_*")," columns.")),(0,r.kt)("p",null,"Each query creates one or two rows in the ",(0,r.kt)("inlineCode",{parentName:"p"},"query_log")," table, depending on the status (see the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," column) of the query:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the query execution was successful, two rows with the ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryStart")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryFinish")," types are created."),(0,r.kt)("li",{parentName:"ol"},"If an error occurred during query processing, two events with the ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryStart")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ExceptionWhileProcessing")," types are created."),(0,r.kt)("li",{parentName:"ol"},"If an error occurred before launching the query, a single event with the ",(0,r.kt)("inlineCode",{parentName:"li"},"ExceptionBeforeStart")," type is created.")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings#log-queries-probability"},"log_queries_probability")," setting to reduce the number of queries, registered in the ",(0,r.kt)("inlineCode",{parentName:"p"},"query_log")," table."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings#settings-log-formatted-queries"},"log_formatted_queries")," setting to log formatted queries to the ",(0,r.kt)("inlineCode",{parentName:"p"},"formatted_query")," column."),(0,r.kt)("p",null,"Columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Type of an event that occurred when executing the query. Values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'QueryStart' = 1")," \u2014 Successful start of query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'QueryFinish' = 2")," \u2014 Successful end of query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'ExceptionBeforeStart' = 3")," \u2014 Exception before the start of query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'ExceptionWhileProcessing' = 4")," \u2014 Exception during the query execution."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/date"},"Date"),") \u2014 Query starting date."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Query starting time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Query starting time with microseconds precision."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_start_time")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Start time of query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_start_time_microseconds")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 Start time of query execution with microsecond precision."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_duration_ms")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Duration of query execution in milliseconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Total number of rows read from all tables and table functions participated in query. It includes usual subqueries, subqueries for ",(0,r.kt)("inlineCode",{parentName:"li"},"IN")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"JOIN"),". For distributed queries ",(0,r.kt)("inlineCode",{parentName:"li"},"read_rows")," includes the total number of rows read at all replicas. Each replica sends it\u2019s ",(0,r.kt)("inlineCode",{parentName:"li"},"read_rows")," value, and the server-initiator of the query summarizes all received and local values. The cache volumes do not affect this value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Total number of bytes read from all tables and table functions participated in query. It includes usual subqueries, subqueries for ",(0,r.kt)("inlineCode",{parentName:"li"},"IN")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"JOIN"),". For distributed queries ",(0,r.kt)("inlineCode",{parentName:"li"},"read_bytes")," includes the total number of rows read at all replicas. Each replica sends it\u2019s ",(0,r.kt)("inlineCode",{parentName:"li"},"read_bytes")," value, and the server-initiator of the query summarizes all received and local values. The cache volumes do not affect this value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"written_rows")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 For ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT")," queries, the number of written rows. For other queries, the column value is 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"written_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 For ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT")," queries, the number of written bytes. For other queries, the column value is 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"result_rows")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Number of rows in a result of the ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT")," query, or a number of rows in the ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT")," query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"result_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 RAM volume in bytes used to store a query result."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memory_usage")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Memory consumption by the query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"current_database")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the current database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Query string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formatted_query")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Formatted query string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"normalized_query_hash")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 Identical hash value without the values of literals for similar queries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_kind")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),") \u2014 Type of the query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"databases")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),")) \u2014 Names of the databases present in the query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tables")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),")) \u2014 Names of the tables present in the query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"views")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),")) \u2014 Names of the (materialized or live) views present in the query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"columns")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),")) \u2014 Names of the columns present in the query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"projections")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Names of the projections used during the query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exception_code")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"Int32"),") \u2014 Code of an exception."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exception")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Exception message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stack_trace")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Stack_trace"},"Stack trace"),". An empty string, if the query was completed successfully."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_initial_query")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Query type. Possible values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1 \u2014 Query was initiated by the client."),(0,r.kt)("li",{parentName:"ul"},"0 \u2014 Query was initiated by another query as part of distributed query execution."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the user who initiated the current query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 ID of the query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 IP address that was used to make the query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 The client port that was used to make the query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_user")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the user who ran the initial query (for distributed query execution)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_query_id")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 ID of the initial query (for distributed query execution)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_address")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 IP address that the parent query was launched from."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_port")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 The client port that was used to make the parent query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_query_start_time")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Initial query starting time (for distributed query execution)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initial_query_start_time_microseconds")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 Initial query starting time with microseconds precision (for distributed query execution)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Interface that the query was initiated from. Possible values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1 \u2014 TCP."),(0,r.kt)("li",{parentName:"ul"},"2 \u2014 HTTP."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"os_user")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Operating system username who runs ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/interfaces/cli"},"clickhouse-client"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_hostname")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Hostname of the client machine where the ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/interfaces/cli"},"clickhouse-client")," or another TCP client is run."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_name")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 The ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/interfaces/cli"},"clickhouse-client")," or another TCP client name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_revision")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Revision of the ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/interfaces/cli"},"clickhouse-client")," or another TCP client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_major")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Major version of the ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/interfaces/cli"},"clickhouse-client")," or another TCP client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_minor")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Minor version of the ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/interfaces/cli"},"clickhouse-client")," or another TCP client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_patch")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Patch component of the ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/interfaces/cli"},"clickhouse-client")," or another TCP client version."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http_method")," (UInt8) \u2014 HTTP method that initiated the query. Possible values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"0 \u2014 The query was launched from the TCP interface."),(0,r.kt)("li",{parentName:"ul"},"1 \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," method was used."),(0,r.kt)("li",{parentName:"ul"},"2 \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," method was used."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http_user_agent")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 HTTP header ",(0,r.kt)("inlineCode",{parentName:"li"},"UserAgent")," passed in the HTTP query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http_referer")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 HTTP header ",(0,r.kt)("inlineCode",{parentName:"li"},"Referer")," passed in the HTTP query (contains an absolute or partial address of the page making the query)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"forwarded_for")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 HTTP header ",(0,r.kt)("inlineCode",{parentName:"li"},"X-Forwarded-For")," passed in the HTTP query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quota_key")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 The ",(0,r.kt)("inlineCode",{parentName:"li"},"quota key")," specified in the ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/operations/quotas"},"quotas")," setting (see ",(0,r.kt)("inlineCode",{parentName:"li"},"keyed"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"revision")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ClickHouse revision."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ProfileEvents")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Map(String, UInt64)"),") \u2014 ProfileEvents that measure different metrics. The description of them could be found in the table ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/events#system_tables-events"},"system.events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Map(String, String)"),") \u2014 Settings that were changed when the client ran the query. To enable logging changes to settings, set the ",(0,r.kt)("inlineCode",{parentName:"li"},"log_query_settings")," parameter to 1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"log_comment")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/string"},"String"),") \u2014 Log comment. It can be set to arbitrary string no longer than ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/operations/settings/settings#settings-max_query_size"},"max_query_size"),". An empty string if it is not defined."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread_ids")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array(UInt64)"),") \u2014 Thread ids that are participating in query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"used_aggregate_functions")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array(String)"),") \u2014 Canonical names of ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregate functions"),", which were used during query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"used_aggregate_function_combinators")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array(String)"),") \u2014 Canonical names of ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregate functions combinators"),", which were used during query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"used_database_engines")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array(String)"),") \u2014 Canonical names of ",(0,r.kt)("inlineCode",{parentName:"li"},"database engines"),", which were used during query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"used_data_type_families")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array(String)"),") \u2014 Canonical names of ",(0,r.kt)("inlineCode",{parentName:"li"},"data type families"),", which were used during query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"used_dictionaries")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array(String)"),") \u2014 Canonical names of ",(0,r.kt)("inlineCode",{parentName:"li"},"dictionaries"),", which were used during query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"used_formats")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array(String)"),") \u2014 Canonical names of ",(0,r.kt)("inlineCode",{parentName:"li"},"formats"),", which were used during query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"used_functions")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array(String)"),") \u2014 Canonical names of ",(0,r.kt)("inlineCode",{parentName:"li"},"functions"),", which were used during query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"used_storages")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array(String)"),") \u2014 Canonical names of ",(0,r.kt)("inlineCode",{parentName:"li"},"storages"),", which were used during query execution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"used_table_functions")," (",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/data-types/array"},"Array(String)"),") \u2014 Canonical names of ",(0,r.kt)("inlineCode",{parentName:"li"},"table functions"),", which were used during query execution.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.query_log WHERE type = 'QueryFinish' ORDER BY query_start_time DESC LIMIT 1 FORMAT Vertical;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntype:                                  QueryFinish\nevent_date:                            2021-11-03\nevent_time:                            2021-11-03 16:13:54\nevent_time_microseconds:               2021-11-03 16:13:54.953024\nquery_start_time:                      2021-11-03 16:13:54\nquery_start_time_microseconds:         2021-11-03 16:13:54.952325\nquery_duration_ms:                     0\nread_rows:                             69\nread_bytes:                            6187\nwritten_rows:                          0\nwritten_bytes:                         0\nresult_rows:                           69\nresult_bytes:                          48256\nmemory_usage:                          0\ncurrent_database:                      default\nquery:                                 DESCRIBE TABLE system.query_log\nformatted_query:\nnormalized_query_hash:                 8274064835331539124\nquery_kind:\ndatabases:                             []\ntables:                                []\ncolumns:                               []\nprojections:                           []\nviews:                                 []\nexception_code:                        0\nexception:\nstack_trace:\nis_initial_query:                      1\nuser:                                  default\nquery_id:                              7c28bbbb-753b-4eba-98b1-efcbe2b9bdf6\naddress:                               ::ffff:127.0.0.1\nport:                                  40452\ninitial_user:                          default\ninitial_query_id:                      7c28bbbb-753b-4eba-98b1-efcbe2b9bdf6\ninitial_address:                       ::ffff:127.0.0.1\ninitial_port:                          40452\ninitial_query_start_time:              2021-11-03 16:13:54\ninitial_query_start_time_microseconds: 2021-11-03 16:13:54.952325\ninterface:                             1\nos_user:                               sevirov\nclient_hostname:                       clickhouse.ru-central1.internal\nclient_name:                           ClickHouse\nclient_revision:                       54449\nclient_version_major:                  21\nclient_version_minor:                  10\nclient_version_patch:                  1\nhttp_method:                           0\nhttp_user_agent:\nhttp_referer:\nforwarded_for:\nquota_key:\nrevision:                              54456\nlog_comment:\nthread_ids:                            [30776,31174]\nProfileEvents:                         {'Query':1,'NetworkSendElapsedMicroseconds':59,'NetworkSendBytes':2643,'SelectedRows':69,'SelectedBytes':6187,'ContextLock':9,'RWLockAcquiredReadLocks':1,'RealTimeMicroseconds':817,'UserTimeMicroseconds':427,'SystemTimeMicroseconds':212,'OSCPUVirtualTimeMicroseconds':639,'OSReadChars':894,'OSWriteChars':319}\nSettings:                              {'load_balancing':'random','max_memory_usage':'10000000000'}\nused_aggregate_functions:              []\nused_aggregate_function_combinators:   []\nused_database_engines:                 []\nused_data_type_families:               []\nused_dictionaries:                     []\nused_formats:                          []\nused_functions:                        []\nused_storages:                         []\nused_table_functions:                  []\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/operations/system-tables/query_thread_log#system_tables-query_thread_log"},"system.query_thread_log")," \u2014 This table contains information about each query execution thread.")))}m.isMDXComponent=!0}}]);