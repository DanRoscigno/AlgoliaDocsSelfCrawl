"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[46185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={sidebar_label:"Vector with Kafka",sidebar_position:3,slug:"/en/integrations/kafka/self-managed/vector",description:"Using Vector with Kafka and ClickHouse"},o="Using Vector with Kafka and ClickHouse",i={unversionedId:"en/integrations/data-ingestion/kafka/self-managed/kafka-vector",id:"en/integrations/data-ingestion/kafka/self-managed/kafka-vector",title:"Using Vector with Kafka and ClickHouse",description:"Using Vector with Kafka and ClickHouse",source:"@site/docs/en/integrations/data-ingestion/kafka/self-managed/kafka-vector.md",sourceDirName:"en/integrations/data-ingestion/kafka/self-managed",slug:"/en/integrations/kafka/self-managed/vector",permalink:"/docs/en/integrations/kafka/self-managed/vector",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/kafka/self-managed/kafka-vector.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Vector with Kafka",sidebar_position:3,slug:"/en/integrations/kafka/self-managed/vector",description:"Using Vector with Kafka and ClickHouse"},sidebar:"english",previous:{title:"Kafka Connect JDBC Connector",permalink:"/docs/en/integrations/kafka/self-managed/jdbc"},next:{title:"Integrate with Kafka hosted on Cloud",permalink:"/docs/en/integrations/kafka/cloud"}},l={},c=[{value:"License",id:"license",level:2},{value:"Steps",id:"steps",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-vector-with-kafka-and-clickhouse"},"Using Vector with Kafka and ClickHouse"),(0,r.kt)("p",null," Vector is a vendor-agnostic data pipeline with the ability to read from Kafka and send events to ClickHouse."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/integrations/vector-to-clickhouse"},"getting started")," guide for Vector with ClickHouse focuses on the log use case and reading events from a file. We utilize the ",(0,r.kt)("a",{parentName:"p",href:"https://datasets-documentation.s3.eu-west-3.amazonaws.com/kafka/github_all_columns.ndjson"},"Github sample dataset")," with events held on a Kafka topic."),(0,r.kt)("p",null,"Vector utilizes ",(0,r.kt)("a",{parentName:"p",href:"https://vector.dev/docs/about/concepts/#sources"},"sources")," for retrieving data through a push or pull model. ",(0,r.kt)("a",{parentName:"p",href:"https://vector.dev/docs/about/concepts/#sinks"},"Sinks")," meanwhile provide a destination for events. We, therefore, utilize the Kafka source and ClickHouse sink. Note that whilst Kafka is supported as a Sink, a ClickHouse source is not available. Vector is as a result not appropriate for users wishing to transfer data to Kafka from ClickHouse."),(0,r.kt)("p",null,"Vector also supports the ",(0,r.kt)("a",{parentName:"p",href:"https://vector.dev/docs/reference/configuration/transforms/"},"transformation")," of data. This is beyond the scope of this guide. The user is referred to the Vector documentation should they need this on their dataset."),(0,r.kt)("p",null,"Note that the current implementation of the ClickHouse sink utilizes the HTTP interface. The ClickHouse sink does not support the use of a JSON schema at this time. Data must be published to Kafka in either plain JSON format or as Strings."),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"Vector is distributed under the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vectordotdev/vector/blob/master/LICENSE"},"MPL-2.0 License")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create the Kafka ",(0,r.kt)("inlineCode",{parentName:"li"},"github")," topic and insert the ",(0,r.kt)("a",{parentName:"li",href:"https://datasets-documentation.s3.eu-west-3.amazonaws.com/kafka/github_all_columns.ndjson"},"Github dataset"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /opt/data/github/github_all_columns.ndjson | kafkacat -b <host>:<port> -X security.protocol=sasl_ssl -X sasl.mechanisms=PLAIN -X sasl.username=<username> -X sasl.password=<password> -t github\n")),(0,r.kt)("p",null,"This dataset consists of 200,000 rows focused on the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse/ClickHouse")," repository."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Ensure the target table is created. Below we use the default database.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nCREATE TABLE github\n(\n    file_time DateTime,\n    event_type Enum('CommitCommentEvent' = 1, 'CreateEvent' = 2, 'DeleteEvent' = 3, 'ForkEvent' = 4,\n                    'GollumEvent' = 5, 'IssueCommentEvent' = 6, 'IssuesEvent' = 7, 'MemberEvent' = 8, 'PublicEvent' = 9, 'PullRequestEvent' = 10, 'PullRequestReviewCommentEvent' = 11, 'PushEvent' = 12, 'ReleaseEvent' = 13, 'SponsorshipEvent' = 14, 'WatchEvent' = 15, 'GistEvent' = 16, 'FollowEvent' = 17, 'DownloadEvent' = 18, 'PullRequestReviewEvent' = 19, 'ForkApplyEvent' = 20, 'Event' = 21, 'TeamAddEvent' = 22),\n    actor_login LowCardinality(String),\n    repo_name LowCardinality(String),\n    created_at DateTime,\n    updated_at DateTime,\n    action Enum('none' = 0, 'created' = 1, 'added' = 2, 'edited' = 3, 'deleted' = 4, 'opened' = 5, 'closed' = 6, 'reopened' = 7, 'assigned' = 8, 'unassigned' = 9, 'labeled' = 10, 'unlabeled' = 11, 'review_requested' = 12, 'review_request_removed' = 13, 'synchronize' = 14, 'started' = 15, 'published' = 16, 'update' = 17, 'create' = 18, 'fork' = 19, 'merged' = 20),\n    comment_id UInt64,\n    path String,\n    ref LowCardinality(String),\n    ref_type Enum('none' = 0, 'branch' = 1, 'tag' = 2, 'repository' = 3, 'unknown' = 4),\n    creator_user_login LowCardinality(String),\n    number UInt32,\n    title String,\n    labels Array(LowCardinality(String)),\n    state Enum('none' = 0, 'open' = 1, 'closed' = 2),\n    assignee LowCardinality(String),\n    assignees Array(LowCardinality(String)),\n    closed_at DateTime,\n    merged_at DateTime,\n    merge_commit_sha String,\n    requested_reviewers Array(LowCardinality(String)),\n    merged_by LowCardinality(String),\n    review_comments UInt32,\n    member_login LowCardinality(String)\n) ENGINE = MergeTree ORDER BY (event_type, repo_name, created_at);\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://vector.dev/docs/setup/quickstart/"},"Download and install Vector"),". Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.toml")," configuration file and modify the values for your Kafka and ClickHouse instances.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[sources.github]\ntype = "kafka"\nauto_offset_reset = "smallest"\nbootstrap_servers = "<kafka_host>:<kafka_port>"\ngroup_id = "vector"\ntopics = [ "github" ]\ntls.enabled = true\nsasl.enabled = true\nsasl.mechanism = "PLAIN"\nsasl.username = "<username>"\nsasl.password = "<password>"\ndecoding.codec = "json"\n\n[sinks.clickhouse]\ntype = "clickhouse"\ninputs = ["github"]\nendpoint = "http://localhost:8123"\ndatabase = "default"\ntable = "github"\nskip_unknown_fields = true\nauth.strategy = "basic"\nauth.user = "username"\nauth.password = "password"\nbuffer.max_events = 10000\nbatch.timeout_secs = 1\n')),(0,r.kt)("p",null,"A few important notes on this configuration and behavior of Vector:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This example has been tested against Confluent Cloud. Therefore, the ",(0,r.kt)("inlineCode",{parentName:"li"},"sasl.*")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ssl.enabled")," security options may not be appropriate in self-managed cases."),(0,r.kt)("li",{parentName:"ul"},"A protocol prefix is not required for the configuration parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap_servers")," e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"pkc-2396y.us-east-1.aws.confluent.cloud:9092")),(0,r.kt)("li",{parentName:"ul"},"The source parameter ",(0,r.kt)("inlineCode",{parentName:"li"},'decoding.codec = "json"')," ensures the message is passed to the ClickHouse sink as a single JSON object. If handling messages as Strings and using the default ",(0,r.kt)("inlineCode",{parentName:"li"},"bytes")," value, the contents of the message will be appended to a field ",(0,r.kt)("inlineCode",{parentName:"li"},"message"),". In most cases this will require processing in ClickHouse as described in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/vector-to-clickhouse/#4-parse-the-logs"},"Vector getting started")," guide."),(0,r.kt)("li",{parentName:"ul"},"Vector ",(0,r.kt)("a",{parentName:"li",href:"https://vector.dev/docs/reference/configuration/sources/kafka/#output-data"},"adds a number of fields")," to the messages. In our example, we ignore these fields in the ClickHouse sink via the configuration parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"skip_unknown_fields = true"),". This ignores fields that are not part of the target table schema. Feel free to adjust your schema to ensure these meta fields such as ",(0,r.kt)("inlineCode",{parentName:"li"},"offset")," are added."),(0,r.kt)("li",{parentName:"ul"},"Notice how the sink references of the source of events via the parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"inputs"),"."),(0,r.kt)("li",{parentName:"ul"},"Note the behavior of the ClickHouse sink as described ",(0,r.kt)("a",{parentName:"li",href:"https://vector.dev/docs/reference/configuration/sinks/clickhouse/#buffers-and-batches"},"here"),". For optimal throughput, users may wish to tune the ",(0,r.kt)("inlineCode",{parentName:"li"},"buffer.max_events"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"batch.timeout_secs")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"batch.max_bytes")," parameters. Per ClickHouse ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/introduction/performance/#performance-when-inserting-data"},"recommendations")," a value of 1000 is should be considered a minimum for the number of events in any single batch. For uniform high throughput use cases, users may increase the parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"buffer.max_events"),". More variable throughputs may require changes in the parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"batch.timeout_secs")),(0,r.kt)("li",{parentName:"ul"},"The parameter ",(0,r.kt)("inlineCode",{parentName:"li"},'auto_offset_reset = "smallest"')," forces the Kafka source to start from the start of the topic - thus ensuring we consume the messages published in step (1). Users may require different behavior. See ",(0,r.kt)("a",{parentName:"li",href:"https://vector.dev/docs/reference/configuration/sources/kafka/#auto_offset_reset"},"here")," for further details.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Start Vector")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vector --config ./kafka.toml\n")),(0,r.kt)("p",null,"By default, a ",(0,r.kt)("a",{parentName:"p",href:"https://vector.dev/docs/reference/configuration/sinks/clickhouse/#healthcheck"},"health check")," is required before insertions begin to ClickHouse. This ensures connectivity can be established and the schema read. Prepending ",(0,r.kt)("inlineCode",{parentName:"p"},"VECTOR_LOG=debug")," can be helpful to obtain further logging should you encounter issues."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Confirm the insertion of the data.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() as count FROM github;\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"count"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"200000")))))}p.isMDXComponent=!0}}]);