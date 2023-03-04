"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[8932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"Advanced Queries",sidebar_position:30,keywords:["clickhouse","python","client","connect","integrate","query"],slug:"/en/integrations/language-clients/python/queries",description:"ClickHouse Connect Queries In Depth"},i="Querying Data with ClickHouse Connect:  Advanced Usage",o={unversionedId:"en/integrations/language-clients/python/queries",id:"en/integrations/language-clients/python/queries",title:"Querying Data with ClickHouse Connect:  Advanced Usage",description:"ClickHouse Connect Queries In Depth",source:"@site/docs/en/integrations/language-clients/python/queries.md",sourceDirName:"en/integrations/language-clients/python",slug:"/en/integrations/language-clients/python/queries",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/language-clients/python/queries",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/language-clients/python/queries.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_label:"Advanced Queries",sidebar_position:30,keywords:["clickhouse","python","client","connect","integrate","query"],slug:"/en/integrations/language-clients/python/queries",description:"ClickHouse Connect Queries In Depth"}},s={},d=[{value:"QueryContexts",id:"querycontexts",level:2},{value:"Streaming Queries",id:"streaming-queries",level:2},{value:"Data Blocks",id:"data-blocks",level:3},{value:"StreamContexts",id:"streamcontexts",level:3},{value:"Stream Types",id:"stream-types",level:3},{value:"Read Formats",id:"read-formats",level:2},{value:"Read Format Options (Python Types)",id:"read-format-options-python-types",level:3}],u={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"querying-data-with-clickhouse-connect--advanced-usage"},"Querying Data with ClickHouse Connect:  Advanced Usage"),(0,r.kt)("h2",{id:"querycontexts"},"QueryContexts"),(0,r.kt)("p",null,"ClickHouse Connect executes standard queries within a QueryContext.  The QueryContext contains the key structures that are used\nto build queries against the ClickHouse database, and the configuration used to process the result into a QueryResult or other\nresponse data structure.  That includes the query itself, parameters, settings, read formats, and other properties."),(0,r.kt)("p",null,"A QueryContext can be acquired using the client ",(0,r.kt)("inlineCode",{parentName:"p"},"create_query_context")," method.  This method takes the same parameters\nas the core query method.  This query context can then be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"query_df"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"query_np")," methods as the ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"\nkeyword argument instead of any or all of the other arguments to those methods.  Note that additional arguments specified for the\nmethod call will override any properties of QueryContext."),(0,r.kt)("p",null,"The clearest use case for a QueryContext is to send the same query with different binding parameter values.  All parameter values can\nbe updated by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryContext.set_parameters")," method with a dictionary, or any single value can be updated by calling\n",(0,r.kt)("inlineCode",{parentName:"p"},"QueryContext.set_parameter")," with the desired ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," pair."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"client.create_query_context(query='SELECT value1, value2 FROM data_table WHERE key = {k:Int32}',\n                            parameters={'k': 2},\n                            column_oriented=True)\nresult = client.query(context=qc)\nassert result.result_set[1][0] == 'second_value2'\nqc.set_parameter('k', 1)\nresult = test_client.query(context=qc)\nassert result.result_set[1][0] == 'first_value2'                                        \n")),(0,r.kt)("p",null,"Note that QueryContexts are not thread safe, but a copy can be obtained in a multithreaded environment by calling the\n",(0,r.kt)("inlineCode",{parentName:"p"},"QueryContext.updated_copy")," method."),(0,r.kt)("h2",{id:"streaming-queries"},"Streaming Queries"),(0,r.kt)("h3",{id:"data-blocks"},"Data Blocks"),(0,r.kt)("p",null,"ClickHouse Connect processes all data from the primary ",(0,r.kt)("inlineCode",{parentName:"p"},"query"),' method as a stream of blocks received from the ClickHouse server.\nThese blocks are transmitted in the custom "Native" format to and from ClickHouse. A "block" is simply a sequence of columns of binary data,\nwhere each column contains an equal number of data values of the specified data type. (As a columnar database, ClickHouse stores this data\nin a similar form.)  The size of a block returned from a query is governed by two user settings that can be set at several levels\n(user profile, user, session, or query).  They are:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/settings/settings/#setting-max_block_size"},"max_block_size")," -- Limit on the size of the block in rows.  Default 65536."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/settings/settings/#preferred-block-size-bytes"},"preferred_block_size_bytes")," -- Soft limit on the size of the block in bytes.  Default 1,000,0000.")),(0,r.kt)("p",null,"Regardless of the ",(0,r.kt)("inlineCode",{parentName:"p"},"preferred_block_size_setting"),", each block will never be more than ",(0,r.kt)("inlineCode",{parentName:"p"},"max_block_size")," rows.  Depending on the\ntype of query, the actual blocks returned can be of any size.  For example, queries to a distributed table covering many shards\nmay contain smaller blocks retrieved directly from each shard."),(0,r.kt)("p",null,"When using one of the Client ",(0,r.kt)("inlineCode",{parentName:"p"},"query_*_stream")," methods, results are returned on a block by block basis.  ClickHouse Connect only\nloads a single block at a time.  This allows processing large amounts of data without the need to load all of a large result\nset into memory.  Note the application should be prepared to process any number of blocks and the exact size of each block\ncannot be controlled."),(0,r.kt)("h3",{id:"streamcontexts"},"StreamContexts"),(0,r.kt)("p",null,"Each of the ",(0,r.kt)("inlineCode",{parentName:"p"},"query_*_stream")," methods (like ",(0,r.kt)("inlineCode",{parentName:"p"},"query_row_block_stream"),") returns a ClickHouse ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamContext")," object, which\nis a combined Python context/generator.  This is the basic usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"with client.query_row_block_stream('SELECT pickup, dropoff, pickup_longitude, pickup_latitude FROM taxi_trips') as stream:\n    for block in stream:\n        for row in block:\n            <do something with each row of Python trip data>\n")),(0,r.kt)("p",null,"Note that trying to use a StreamContext without a ",(0,r.kt)("inlineCode",{parentName:"p"},"with")," statement will raise an error.  The use of a Python context ensures\nthat the stream (in this case, a streaming HTTP response) will be properly closed even if not all the data is consumed and/or\nan exception is raised during processing.  Also, StreamContexts can only be used once to consume the stream.  Trying to use a StreamContext\nafter it has exited will produce a ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamClosedError"),"."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," property of the StreamContext to access the parent ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryResult")," object, which includes column names\nand types."),(0,r.kt)("h3",{id:"stream-types"},"Stream Types"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"query_column_block_stream")," method returns the block as a sequence of column data stored as native Python data types.  Using\nthe above ",(0,r.kt)("inlineCode",{parentName:"p"},"taxi_trips")," queries, the data returned will be a list where each element of the list is another list (or tuple)\ncontaining all the data for the  associated column.  So ",(0,r.kt)("inlineCode",{parentName:"p"},"block[0]")," would be a tuple containing nothing but strings.  Column\noriented formats are most used for doing aggregate operations for all the values in a column, like adding up total fairs."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"query_row_block_stream")," method returns the block as a sequence of rows like a traditional relational database.  For taxi\ntrips, the data returned will be a list where each element of the list is another list representing a row of data.  So ",(0,r.kt)("inlineCode",{parentName:"p"},"block[0]"),"\nwould contain all the fields (in order) for the first taxi trip , ",(0,r.kt)("inlineCode",{parentName:"p"},"block[1]")," would contain a row for all the fields in\nthe second taxi trip, and so on.  Row oriented results are normally used for display or transformation processes."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"query_row_stream")," is a convenience method that automatically moves to the next block when iterating through the stream.\nOtherwise, it is identical to ",(0,r.kt)("inlineCode",{parentName:"p"},"query_row_block_stream"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"query_np_stream"),' method return each block as a two-dimensional Numpy Array.  Internally Numpy arrays are (usually) stored as columns,\nso no distinct row or column methods are needed.  The "shape" of the numpy array will be expressed as (columns, rows).  The Numpy\nlibrary provides many methods of manipulating numpy arrays.  Note that if all columns in the query share the same Numpy dtype,\nthe returned numpy array will only have one dtype as well, and can be reshaped/rotated without actually changing its internal structure.'),(0,r.kt)("p",null,"Finally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"query_df_stream")," method returns each ClickHouse Block as a two-dimensional Pandas Dataframe.  Here's an example\nwhich shows that the StreamContext object can be used as a context in a deferred fashion (but only once)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df_stream = client.query_df_stream('SELECT * FROM hits')\ncolumn_names = df_stream.source.column_names\nwith df_stream:\n    for df in df_stream:\n        <do something with the pandas DataFrame>\n")),(0,r.kt)("h2",{id:"read-formats"},"Read Formats"),(0,r.kt)("p",null,"Read formats control the data types of values returned from the client ",(0,r.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"query_np"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"query_df")," methods.  (The ",(0,r.kt)("inlineCode",{parentName:"p"},"raw_query"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"query_arrow")," do not modify incoming data from ClickHouse, so format control does not apply.)  For example, if the read format\nfor a UUID is changed from the default ",(0,r.kt)("inlineCode",{parentName:"p"},"native")," format to the alternative ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," format, a ClickHouse query of ",(0,r.kt)("inlineCode",{parentName:"p"},"UUID")," column will be\nreturned as string values (using the standard 8-4-4-4-12 RFC 1422 format) instead of Python UUID objects."),(0,r.kt)("p",null,'The "data type" argument for any formatting function can include wildcards.  The format is a single lower case string.'),(0,r.kt)("p",null,"Read formats can be set at several levels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Globally, using the methods defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse_connect.datatypes.format")," package.  This will control the format of the\nconfigured datatype for all queries.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from clickhouse_connect.datatypes.format import set_read_format\n\n# Return both IPv6 and IPv4 values as strings\nset_read_format('IPv*', 'string')\n\n# Return all Date types as the underlying epoch second or epoch day\nset_read_format('Date*', 'int')\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For an entire query, using the optional ",(0,r.kt)("inlineCode",{parentName:"li"},"query_formats")," dictionary argument.  In that case any column (or subcolumn) of the\nspecified data types(s) will use the configured format.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Return any UUID column as a string\nclient.query('SELECT user_id, user_uuid, device_uuid from users', query_formats={'UUID': 'string'})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the values in a specific column, using the optional ",(0,r.kt)("inlineCode",{parentName:"li"},"column_formats"),' dictionary argument.  The key is the column named as\nreturn by ClickHouse, and format for the data column or a second level "format" dictionary of a ClickHouse type name and a value\nof query formats.  This secondary dictionary can be used for nested column types such as Tuples or Maps.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Return IPv6 values in the `dev_address` column as strings\nclient.query('SELECT device_id, dev_address, gw_address from devices', column_formats={'dev_address', 'string'})\n")),(0,r.kt)("h3",{id:"read-format-options-python-types"},"Read Format Options (Python Types)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ClickHouse Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Native Python Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Read Formats"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int","[8-64]",", UInt","[8-32]"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UInt64"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"signed"),(0,r.kt)("td",{parentName:"tr",align:null},"Superset does not currently handle large unsigned UInt64 values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[U]","Int","[128,256]"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Pandas and Numpy int values are 64 bits maximum, so these can be returned as strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Float32"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"All Python floats are 64 bits internally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Float64"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal.Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FixedString"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"FixedStrings are fixed size byte arrays, but sometimes are treated as Python strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enum","[8,16]"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"string, int"),(0,r.kt)("td",{parentName:"tr",align:null},"Python enums don't accept empty strings, so all enums are rendered as either strings or the underlying int value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime.date"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse stores Dates as days since 01/01/1970.  This value is available as an int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date32"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime.date"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as Date, but for a wider range of dates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime.datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse stores DateTime in epoch seconds.  This value is available as an int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateTime64"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime.datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Python datetime.datetime is limited to microsecond precision. The raw 64 bit int value is available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IPv4"),(0,r.kt)("td",{parentName:"tr",align:null},"ipaddress.IPv4Address"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"IP addresses can be read as strings and properly formatted strings can be inserted as IP addresses")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IPv6"),(0,r.kt)("td",{parentName:"tr",align:null},"ipaddress.IPv6Address"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"IP addresses can be read as strings and properly formatted can be inserted as IP addresses")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tuple"),(0,r.kt)("td",{parentName:"tr",align:null},"dict or tuple"),(0,r.kt)("td",{parentName:"tr",align:null},"tuple, json"),(0,r.kt)("td",{parentName:"tr",align:null},"Named tuples returned as dictionaries by default.  Named tuples can also be returned as JSON strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Map"),(0,r.kt)("td",{parentName:"tr",align:null},"dict"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nested"),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence","[dict]"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"uuid.UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"UUIDs can be read as strings formatted as per RFC 4122")))))}m.isMDXComponent=!0}}]);