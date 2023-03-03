"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[90285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},67740:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={toc:[]},r="wrapper";function l(e){let{components:t,...l}=e;return(0,o.kt)(r,(0,a.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To connect to ClickHouse with HTTP(S) you need this information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The HOST and PORT: typically, the port is 8443 when using TLS or 8123 when not using TLS.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The DATABASE NAME: out of the box, there is a database named ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", use the name of the database that you want to connect to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The USERNAME and PASSWORD: out of the box, the username is ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),". Use the username appropriate for your use case."))),(0,o.kt)("p",null,"The details for your ClickHouse Cloud service are available in the ClickHouse Cloud console.  Select the service that you will connect to and click ",(0,o.kt)("strong",{parentName:"p"},"Connect"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ClickHouse Cloud service connect button",src:n(51523).Z,width:"939",height:"474"})),(0,o.kt)("p",null,"Choose ",(0,o.kt)("strong",{parentName:"p"},"HTTPS"),", and the details are available in an example ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ClickHouse Cloud HTTPS connection details",src:n(5814).Z,width:"586",height:"470"})),(0,o.kt)("p",null,"If you are using self-managed ClickHouse, the connection details are set by your ClickHouse administrator."))}l.isMDXComponent=!0},66654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),i=n(67740);const r={sidebar_label:"HTTP Sink Connector for Confluent Platform",sidebar_position:1,slug:"/en/integrations/kafka/cloud/confluent/",description:"Using HTTP Connector Sink with Kafka Connect and ClickHouse"},l="Confluent HTTP Sink Connector",s={unversionedId:"en/integrations/data-ingestion/kafka/cloud/confluent/index",id:"en/integrations/data-ingestion/kafka/cloud/confluent/index",title:"Confluent HTTP Sink Connector",description:"Using HTTP Connector Sink with Kafka Connect and ClickHouse",source:"@site/docs/en/integrations/data-ingestion/kafka/cloud/confluent/index.md",sourceDirName:"en/integrations/data-ingestion/kafka/cloud/confluent",slug:"/en/integrations/kafka/cloud/confluent/",permalink:"/docs/en/integrations/kafka/cloud/confluent/",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/kafka/cloud/confluent/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"HTTP Sink Connector for Confluent Platform",sidebar_position:1,slug:"/en/integrations/kafka/cloud/confluent/",description:"Using HTTP Connector Sink with Kafka Connect and ClickHouse"},sidebar:"english",previous:{title:"Integrate with Kafka hosted on Cloud",permalink:"/docs/en/integrations/kafka/cloud"},next:{title:"Amazon MSK",permalink:"/docs/en/integrations/kafka/cloud/amazon-msk/"}},c={},u=[{value:"Quick start steps",id:"quick-start-steps",level:2},{value:"1. Gather your connection details",id:"1-gather-your-connection-details",level:3},{value:"2. Run Kafka Connect and the HTTP Sink Connector",id:"2-run-kafka-connect-and-the-http-sink-connector",level:3},{value:"3. Create destination table in ClickHouse",id:"3-create-destination-table-in-clickhouse",level:3},{value:"4. Configure HTTP Sink",id:"4-configure-http-sink",level:3},{value:"5. Testing the connectivity",id:"5-testing-the-connectivity",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"HTTP Sink doesn&#39;t batch messages",id:"http-sink-doesnt-batch-messages",level:3},{value:"400 Bad Request",id:"400-bad-request",level:3},{value:"CANNOT_PARSE_QUOTED_STRING",id:"cannot_parse_quoted_string",level:4},{value:"Load the GitHub dataset (optional)",id:"load-the-github-dataset-optional",level:2},{value:"1. Prepare Configuration",id:"1-prepare-configuration",level:4},{value:"2. Create the ClickHouse table",id:"2-create-the-clickhouse-table",level:4},{value:"3. Add data to Kafka",id:"3-add-data-to-kafka",level:4}],d={toc:u},p="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"confluent-http-sink-connector"},"Confluent HTTP Sink Connector"),(0,o.kt)("p",null,"The HTTP Sink Connector is data type agnostic and thus does not need a Kafka schema as well as supporting ClickHouse specific data types such as Maps and Arrays. This additional flexibility comes at a slight increase in configuration complexity."),(0,o.kt)("p",null,"Below we describe a simple installation, pulling messages from a single Kafka topic and inserting rows into a ClickHouse table. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"  The HTTP Connector is distributed under the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/kafka-connect-http/current/overview.html#license"},"Confluent Enterprise License"),".")),(0,o.kt)("h2",{id:"quick-start-steps"},"Quick start steps"),(0,o.kt)("h3",{id:"1-gather-your-connection-details"},"1. Gather your connection details"),(0,o.kt)(i.ZP,{mdxType:"ConnectionDetails"}),(0,o.kt)("h3",{id:"2-run-kafka-connect-and-the-http-sink-connector"},"2. Run Kafka Connect and the HTTP Sink Connector"),(0,o.kt)("p",null,"You have two options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Self-managed:")," Download the Confluent package and install it locally. Follow the installation instructions for installing the connector as documented ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/kafka-connect-http/current/overview.html"},"here"),".\nIf you use the confluent-hub installation method, your local configuration files will be updated.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Confluent Cloud:")," A fully managed version of HTTP Sink is available for those using Confluent Cloud for their Kafka hosting. This requires your ClickHouse environment to be accessible from Confluent Cloud."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"  The following examples are using Confluent Cloud.")),(0,o.kt)("h3",{id:"3-create-destination-table-in-clickhouse"},"3. Create destination table in ClickHouse"),(0,o.kt)("p",null,"Before the connectivity test, let's start by creating a test table in ClickHouse Cloud, this table will receive the data from Kafka:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE default.my_table\n(\n    `side` String,\n    `quantity` Int32,\n    `symbol` String,\n    `price` Int32,\n    `account` String,\n    `userid` String\n)\nORDER BY tuple()\n")),(0,o.kt)("h3",{id:"4-configure-http-sink"},"4. Configure HTTP Sink"),(0,o.kt)("p",null,"Create a Kafka topic and an instance of HTTP Sink Connector:"),(0,o.kt)("img",{src:n(19816).Z,class:"image",alt:"Create HTTP Sink",style:{width:"50%"}}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Configure HTTP Sink Connector:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide the topic name you created"),(0,o.kt)("li",{parentName:"ul"},"Authentication",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HTTP Url")," - ClickHouse Cloud URL with a ",(0,o.kt)("inlineCode",{parentName:"li"},"INSERT")," query specified ",(0,o.kt)("inlineCode",{parentName:"li"},"<protocol>://<clickhouse_host>:<clickhouse_port>?query=INSERT%20INTO%20<database>.<table>%20FORMAT%20JSONEachRow"),". ",(0,o.kt)("strong",{parentName:"li"},"Note"),": the query must be encoded."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Endpoint Authentication type")," - BASIC"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Auth username")," - ClickHouse username"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Auth password")," - ClickHouse password")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"  This HTTP Url is error-prone. Ensure escaping is precise to avoid issues.")),(0,o.kt)("img",{src:n(43024).Z,class:"image",alt:"Auth options for Confluent HTTP Sink",style:{width:"70%"}}),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configuration",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Input Kafka record value format"),"Depends on your source data but in most cases JSON or Avro. We assume ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON")," in the following settings."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"advanced configurations")," section:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HTTP Request Method")," - Set to POST"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Request Body Format")," - json"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Batch batch size")," - Per ClickHouse recommendations, set this to ",(0,o.kt)("strong",{parentName:"li"},"at least 1000"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Batch json as array")," - true"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Retry on HTTP codes")," - 400-500 but adapt as required e.g. this may change if you have an HTTP proxy in front of ClickHouse."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Maximum Reties")," - the default (10) is appropriate but feel to adjust for more robust retries.")))))),(0,o.kt)("img",{src:n(26115).Z,class:"image",alt:"Advanced options for Confluent HTTP Sink",style:{width:"50%"}}),(0,o.kt)("h3",{id:"5-testing-the-connectivity"},"5. Testing the connectivity"),(0,o.kt)("p",null,"Create an message in a topic configured by your HTTP Sink"),(0,o.kt)("img",{src:n(97191).Z,class:"image",alt:"Create a message in the topic",style:{width:"50%"}}),(0,o.kt)("br",null),(0,o.kt)("p",null,"and verify the created message's been written to your ClickHouse instance."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"http-sink-doesnt-batch-messages"},"HTTP Sink doesn't batch messages"),(0,o.kt)("p",null,"From the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/kafka-connectors/http/current/overview.html#http-sink-connector-for-cp"},"Sink documentation"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The HTTP Sink connector does not batch requests for messages containing Kafka header values that are different.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Verify your Kafka records have the same key."),(0,o.kt)("li",{parentName:"ol"},"When you add parameters to the HTTP API URL, each record can result in a unique URL. For this reason, batching is disabled when using additional URL parameters.")),(0,o.kt)("h3",{id:"400-bad-request"},"400 Bad Request"),(0,o.kt)("h4",{id:"cannot_parse_quoted_string"},"CANNOT_PARSE_QUOTED_STRING"),(0,o.kt)("p",null,"If HTTP Sink fails with the following message when inserting a JSON object into a ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," column:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Code: 26. DB::ParsingException: Cannot parse JSON string: expected opening quote: (while reading the value of key key_name): While executing JSONEachRowRowInputFormat: (at row 1). (CANNOT_PARSE_QUOTED_STRING)\n")),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"input_format_json_read_objects_as_strings=1")," setting in URL as encoded string ",(0,o.kt)("inlineCode",{parentName:"p"},"SETTINGS%20input_format_json_read_objects_as_strings%3D1")),(0,o.kt)("h2",{id:"load-the-github-dataset-optional"},"Load the GitHub dataset (optional)"),(0,o.kt)("p",null,"Note that this example preserves the Array fields of the Github dataset. We assume you have an empty github topic in the examples and use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/edenhill/kcat"},"kcat")," for message insertion to Kafka."),(0,o.kt)("h4",{id:"1-prepare-configuration"},"1. Prepare Configuration"),(0,o.kt)("p",null,"Follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/cloud/current/cp-component/connect-cloud-config.html#set-up-a-local-connect-worker-with-cp-install"},"these instructions")," for setting up Connect relevant to your installation type, noting the differences between a standalone and distributed cluster. If using Confluent Cloud, the distributed setup is relevant."),(0,o.kt)("p",null,"The most important parameter is the ",(0,o.kt)("inlineCode",{parentName:"p"},"http.api.url"),". The ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/http/"},"HTTP interface")," for ClickHouse requires you to encode the INSERT statement as a parameter in the URL. This must include the format (",(0,o.kt)("inlineCode",{parentName:"p"},"JSONEachRow")," in this case) and target database. The format must be consistent with the Kafka data, which will be converted to a string in the HTTP payload. These parameters must be URL escaped. An example of this format for the Github dataset (assuming you are running ClickHouse locally) is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<protocol>://<clickhouse_host>:<clickhouse_port>?query=INSERT%20INTO%20<database>.<table>%20FORMAT%20JSONEachRow\n\nhttp://localhost:8123?query=INSERT%20INTO%20default.github%20FORMAT%20JSONEachRow\n")),(0,o.kt)("p",null,"The following additional parameters are relevant to using the HTTP Sink with ClickHouse. A complete parameter list can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/kafka-connect-http/current/connector_config.html"},"here"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"request.method")," - Set to ",(0,o.kt)("strong",{parentName:"li"},"POST")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"retry.on.status.codes")," - Set to 400-500 to retry on any error codes. Refine based expected errors in data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"request.body.format")," - In most cases this will be JSON."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auth.type")," - Set to BASIC if you security with ClickHouse. Other ClickHouse compatible authentication mechanisms are not currently supported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ssl.enabled")," - set to true if using SSL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connection.user")," - username for ClickHouse."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connection.password")," - password for ClickHouse."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"batch.max.size")," - The number of rows to send in a single batch. Ensure this set is to an appropriately large number. Per ClickHouse ",(0,o.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/introduction/performance/#performance-when-inserting-data"},"recommendations")," a value of 1000 is should be considered a minimum."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tasks.max")," - The HTTP Sink connector supports running one or more tasks. This can be used to increase performance. Along with batch size this represents your primary means of improving performance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key.converter")," - set according to the types of your keys."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value.converter")," - set based on the type of data on your topic. This data does not need a schema. The format here must be consistent with the FORMAT specified in the parameter ",(0,o.kt)("inlineCode",{parentName:"li"},"http.api.url"),". The simplest here is to use JSON and the org.apache.kafka.connect.json.JsonConverter converter. Treating the value as a string, via the converter org.apache.kafka.connect.storage.StringConverter, is also possible - although this will require the user to extract a value in the insert statement using functions. Avro format is also supported in ",(0,o.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/interfaces/formats/#data-format-avro"},"ClickHouse")," if using the io.confluent.connect.avro.AvroConverter converter.  ")),(0,o.kt)("p",null,"A full list of settings, including how to configure a proxy, retries, and advanced SSL, can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/kafka-connect-http/current/connector_config.html"},"here"),"."),(0,o.kt)("p",null,"Example configuration files for the Github sample data can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/integrations/data-ingestion/kafka/code/connectors/http_sink"},"here"),", assuming Connect is run in standalone mode and Kafka is hosted in Confluent Cloud."),(0,o.kt)("h4",{id:"2-create-the-clickhouse-table"},"2. Create the ClickHouse table"),(0,o.kt)("p",null,"Ensure the table has been created. An example for a minimal github dataset using a standard MergeTree is shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE github\n(\n    file_time DateTime,\n    event_type Enum('CommitCommentEvent' = 1, 'CreateEvent' = 2, 'DeleteEvent' = 3, 'ForkEvent' = 4,'GollumEvent' = 5, 'IssueCommentEvent' = 6, 'IssuesEvent' = 7, 'MemberEvent' = 8, 'PublicEvent' = 9, 'PullRequestEvent' = 10, 'PullRequestReviewCommentEvent' = 11, 'PushEvent' = 12, 'ReleaseEvent' = 13, 'SponsorshipEvent' = 14, 'WatchEvent' = 15, 'GistEvent' = 16, 'FollowEvent' = 17, 'DownloadEvent' = 18, 'PullRequestReviewEvent' = 19, 'ForkApplyEvent' = 20, 'Event' = 21, 'TeamAddEvent' = 22),\n    actor_login LowCardinality(String),\n    repo_name LowCardinality(String),\n    created_at DateTime,\n    updated_at DateTime,\n    action Enum('none' = 0, 'created' = 1, 'added' = 2, 'edited' = 3, 'deleted' = 4, 'opened' = 5, 'closed' = 6, 'reopened' = 7, 'assigned' = 8, 'unassigned' = 9, 'labeled' = 10, 'unlabeled' = 11, 'review_requested' = 12, 'review_request_removed' = 13, 'synchronize' = 14, 'started' = 15, 'published' = 16, 'update' = 17, 'create' = 18, 'fork' = 19, 'merged' = 20),\n    comment_id UInt64,\n    path String,\n    ref LowCardinality(String),\n    ref_type Enum('none' = 0, 'branch' = 1, 'tag' = 2, 'repository' = 3, 'unknown' = 4),\n    creator_user_login LowCardinality(String),\n    number UInt32,\n    title String,\n    labels Array(LowCardinality(String)),\n    state Enum('none' = 0, 'open' = 1, 'closed' = 2),\n    assignee LowCardinality(String),\n    assignees Array(LowCardinality(String)),\n    closed_at DateTime,\n    merged_at DateTime,\n    merge_commit_sha String,\n    requested_reviewers Array(LowCardinality(String)),\n    merged_by LowCardinality(String),\n    review_comments UInt32,\n    member_login LowCardinality(String)\n) ENGINE = MergeTree ORDER BY (event_type, repo_name, created_at)\n\n")),(0,o.kt)("h4",{id:"3-add-data-to-kafka"},"3. Add data to Kafka"),(0,o.kt)("p",null,"Insert messages to Kafka. Below we use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/edenhill/kcat"},"kcat")," to insert 10k messages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"head -n 10000 github_all_columns.ndjson | kafkacat -b <host>:<port> -X security.protocol=sasl_ssl -X sasl.mechanisms=PLAIN -X sasl.username=<username>  -X sasl.password=<password> -t github\n")),(0,o.kt)("p",null,"A simple read on the target table \u201cGithub\u201d should confirm the insertion of data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM default.github;\n\n| count\\(\\) |\n| :--- |\n| 10000 |\n\n")))}k.isMDXComponent=!0},19816:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_http_sink-230cd9e6f03f322e307e836f73ab46cb.png"},97191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_message_in_topic-b85cfe0b819c7dd9a6aa9f88ce6752d1.png"},26115:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/http_advanced-e53cd4fca399d87fae472de605a7f833.png"},43024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/http_auth-c845388340c06571d094f14bd7e09e0f.png"},51523:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud-connect-button-e2247559831d9d3549387ddfb0deee9b.png"},5814:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connection-details-https-6ceceb667ac0b41ab35a2ad390b7e2dc.png"}}]);