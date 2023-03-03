"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[38810],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?i.createElement(f,o(o({ref:t},d),{},{components:a})):i.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=a(87462),n=(a(67294),a(3905));const r={slug:"/en/whats-new/cloud-compatibility",sidebar_label:"Cloud Compatibility",title:"Cloud Compatibility"},o="ClickHouse Cloud \u2014 Compatibility Guide",l={unversionedId:"en/cloud/reference/cloud-compatibility",id:"en/cloud/reference/cloud-compatibility",title:"Cloud Compatibility",description:"This guide provides an overview of what to expect functionally and operationally in ClickHouse Cloud.",source:"@site/docs/en/cloud/reference/cloud-compatibility.md",sourceDirName:"en/cloud/reference",slug:"/en/whats-new/cloud-compatibility",permalink:"/AlgoliaDocsSelfCrawl/en/whats-new/cloud-compatibility",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/cloud/reference/cloud-compatibility.md",tags:[],version:"current",frontMatter:{slug:"/en/whats-new/cloud-compatibility",sidebar_label:"Cloud Compatibility",title:"Cloud Compatibility"},sidebar:"english",previous:{title:"Cloud Changelog",permalink:"/AlgoliaDocsSelfCrawl/en/whats-new/cloud"},next:{title:"Supported Cloud Regions",permalink:"/AlgoliaDocsSelfCrawl/en/cloud/reference/supported-regions"}},s={},u=[{value:"ClickHouse Cloud Architecture",id:"clickhouse-cloud-architecture",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"DDL syntax",id:"ddl-syntax",level:3},{value:"Database and table engines",id:"database-and-table-engines",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Dictionaries",id:"dictionaries",level:3},{value:"Federated queries",id:"federated-queries",level:3},{value:"User defined functions",id:"user-defined-functions",level:3},{value:"Experimental features",id:"experimental-features",level:3},{value:"Kafka",id:"kafka",level:3},{value:"Operational Defaults and Considerations",id:"operational-defaults-and-considerations",level:2},{value:"Operational limits",id:"operational-limits",level:3},{value:"<code>max_parts_in_total: 10,000</code>",id:"max_parts_in_total-10000",level:3},{value:"<code>max_concurrent_queries: 1,000</code>",id:"max_concurrent_queries-1000",level:3},{value:"<code>max_table_size_to_drop: 1,000,000,000,000</code>",id:"max_table_size_to_drop-1000000000000",level:3},{value:"System settings",id:"system-settings",level:3},{value:"Advanced security administration",id:"advanced-security-administration",level:3},{value:"Roadmap",id:"roadmap",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"clickhouse-cloud--compatibility-guide"},"ClickHouse Cloud \u2014 Compatibility Guide"),(0,n.kt)("p",null,"This guide provides an overview of what to expect functionally and operationally in ClickHouse Cloud."),(0,n.kt)("h2",{id:"clickhouse-cloud-architecture"},"ClickHouse Cloud Architecture"),(0,n.kt)("p",null,"ClickHouse Cloud significantly simplifies operational overhead and reduces the costs of running ClickHouse at scale. There is no need to size your deployment upfront, set up replication for high availability, manually shard your data, scale up your servers when your workload increases, or scale them down when you are not using them \u2014 we handle this for you."),(0,n.kt)("p",null,"These benefits come as a result of architectural choices underlying ClickHouse Cloud:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Compute and storage are separated and thus can be automatically scaled along separate dimensions, so you do not have to over-provision either storage or compute in static instance configurations."),(0,n.kt)("li",{parentName:"ul"},"Tiered storage on top of object store and multi-level caching provides virtually limitless scaling and good price/performance ratio, so you do not have to size your storage partition upfront and worry about high storage costs."),(0,n.kt)("li",{parentName:"ul"},"High availability is on by default and replication is transparently managed, so you can focus on building your applications or analyzing your data."),(0,n.kt)("li",{parentName:"ul"},"Automatic scaling for variable continuous workloads is on by default, so you don\u2019t have to size your service upfront, scale up your servers when your workload increases, or manually scale down your servers when you have less activity"),(0,n.kt)("li",{parentName:"ul"},"Seamless hibernation for intermittent workloads is on by default. We automatically pause your compute resources after a period of inactivity and transparently start it again when a new query arrives, so you don\u2019t have to pay for idle resources."),(0,n.kt)("li",{parentName:"ul"},"Advanced scaling controls provide the ability to set an auto-scaling maximum for additional cost control or an auto-scaling minimum to reserve compute resources for applications with specialized performance requirements.")),(0,n.kt)("h2",{id:"capabilities"},"Capabilities"),(0,n.kt)("p",null,"ClickHouse Cloud provides access to a curated set of capabilities in the open source distribution of ClickHouse. Tables below describe some features that are disabled in ClickHouse Cloud at this time."),(0,n.kt)("h3",{id:"ddl-syntax"},"DDL syntax"),(0,n.kt)("p",null,"For the most part, the DDL syntax of ClickHouse Cloud should match what is available in self-managed installs. A few notable exceptions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support for ",(0,n.kt)("inlineCode",{parentName:"li"},"CREATE AS SELECT"),", which is currently not available. As a workaround, we suggest using ",(0,n.kt)("inlineCode",{parentName:"li"},"CREATE ... EMPTY ... AS SELECT")," and then inserting into that table (see ",(0,n.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/getting-data-into-clickhouse-part-1"},"this blog")," for an example)."),(0,n.kt)("li",{parentName:"ul"},"Some experimental syntax may be disabled, for instance, ",(0,n.kt)("inlineCode",{parentName:"li"},"ALTER TABLE \u2026 MODIFY QUERY")," statement."),(0,n.kt)("li",{parentName:"ul"},"Some introspection functionality may be disabled for security purposes, for example, the ",(0,n.kt)("inlineCode",{parentName:"li"},"addressToLine")," SQL function.")),(0,n.kt)("h3",{id:"database-and-table-engines"},"Database and table engines"),(0,n.kt)("p",null,"ClickHouse Cloud provides a highly-available, replicated service by default. As a result, the database engine is Replicated and the following table engines are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ReplicatedMergeTree (default, when none is specified)"),(0,n.kt)("li",{parentName:"ul"},"ReplicatedSummingMergeTree"),(0,n.kt)("li",{parentName:"ul"},"ReplicatedAggregatingMergeTree"),(0,n.kt)("li",{parentName:"ul"},"ReplicatedReplacingMergeTree"),(0,n.kt)("li",{parentName:"ul"},"ReplicatedCollapsingMergeTree"),(0,n.kt)("li",{parentName:"ul"},"ReplicatedVersionedCollapsingMergeTree"),(0,n.kt)("li",{parentName:"ul"},"MergeTree (converted to ReplicatedMergeTree)"),(0,n.kt)("li",{parentName:"ul"},"SummingMergeTree (converted to ReplicatedSummingMergeTree)"),(0,n.kt)("li",{parentName:"ul"},"AggregatingMergeTree (converted to ReplicatedAggregatingMergeTree)"),(0,n.kt)("li",{parentName:"ul"},"ReplacingMergeTree (converted to ReplicatedReplacingMergeTree)"),(0,n.kt)("li",{parentName:"ul"},"CollapsingMergeTree (converted to ReplicatedCollapsingMergeTree)"),(0,n.kt)("li",{parentName:"ul"},"VersionedCollapsingMergeTree (converted to ReplicatedVersionedCollapsingMergeTree)"),(0,n.kt)("li",{parentName:"ul"},"S3"),(0,n.kt)("li",{parentName:"ul"},"URL"),(0,n.kt)("li",{parentName:"ul"},"View"),(0,n.kt)("li",{parentName:"ul"},"MaterializedView"),(0,n.kt)("li",{parentName:"ul"},"GenerateRandom"),(0,n.kt)("li",{parentName:"ul"},"Null"),(0,n.kt)("li",{parentName:"ul"},"Buffer")),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("p",null,"ClickHouse Cloud supports HTTPS and Native interfaces. Support for more interfaces such as MySQL and Postgres is coming soon."),(0,n.kt)("h3",{id:"dictionaries"},"Dictionaries"),(0,n.kt)("p",null,"Dictionaries are a popular way to speed up lookups in ClickHouse.  ClickHouse Cloud currently supports dictionaries from PostgreSQL, MySQL, remote and local ClickHouse servers, Redis, MongoDB and HTTP sources."),(0,n.kt)("h3",{id:"federated-queries"},"Federated queries"),(0,n.kt)("p",null,"We support federated ClickHouse queries for cross-cluster communication in the cloud, and for communication with external self-managed ClickHouse clusters. ClickHouse Cloud currently supports federated queries with S3, MySQL, and Postgres engines. Federated queries with some external database and table engines, such as SQLite, ODBC, JDBC, MongoDB, Redis, RabbitMQ, HDFS and Hive are not yet supported."),(0,n.kt)("h3",{id:"user-defined-functions"},"User defined functions"),(0,n.kt)("p",null,"User-defined functions are a recent feature in ClickHouse. ClickHouse Cloud currently supports SQL UDFs only."),(0,n.kt)("h3",{id:"experimental-features"},"Experimental features"),(0,n.kt)("p",null,"Experimental features can be self-enabled by users in Development services. They are disabled in ClickHouse Cloud Production services by default to ensure the stability of production deployments. If you would like to enable an experimental feature in one of your Production services, please reach out to ClickHouse support to discuss."),(0,n.kt)("h3",{id:"kafka"},"Kafka"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/integrations/kafka/kafka-table-engine"},"Kafka Table Engine")," is not available in ClickHouse Cloud. Instead, we recommend relying on architectures that decouple the Kafka connectivity components from the ClickHouse service to achieve a separation of concerns. We recommend considering the alternatives listed in the ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/integrations/kafka/kafka-choosing-an-approach"},"Kafka User Guide")),(0,n.kt)("h2",{id:"operational-defaults-and-considerations"},"Operational Defaults and Considerations"),(0,n.kt)("p",null,"The following are default settings for ClickHouse Cloud services. In some cases, these settings are fixed to ensure the correct operation of the service, and in others, they can be adjusted."),(0,n.kt)("h3",{id:"operational-limits"},"Operational limits"),(0,n.kt)("h3",{id:"max_parts_in_total-10000"},(0,n.kt)("inlineCode",{parentName:"h3"},"max_parts_in_total: 10,000")),(0,n.kt)("p",null,"The default value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"max_parts_in_total")," setting for MergeTree tables has been lowered from 100,000 to 10,000. The reason for this change is that we observed that a large number of data parts is likely to cause a slow startup time of services in the cloud. A large number of parts usually indicate a choice of too granular partition key, which is typically done accidentally and should be avoided. The change of default will allow the detection of these cases earlier."),(0,n.kt)("h3",{id:"max_concurrent_queries-1000"},(0,n.kt)("inlineCode",{parentName:"h3"},"max_concurrent_queries: 1,000")),(0,n.kt)("p",null,"Increased this per-server setting from the default of 100 to 1000 to allow for more concurrency. This will result in 2,000 concurrent queries for development services and 3,000 for production."),(0,n.kt)("h3",{id:"max_table_size_to_drop-1000000000000"},(0,n.kt)("inlineCode",{parentName:"h3"},"max_table_size_to_drop: 1,000,000,000,000")),(0,n.kt)("p",null,"Increased this setting from 50GB to allow for dropping of tables/partitions up to 1TB."),(0,n.kt)("h3",{id:"system-settings"},"System settings"),(0,n.kt)("p",null,"ClickHouse Cloud is tuned for variable workloads, and for that reason most system settings are not configurable at this time. We do not anticipate the need to tune system settings for most users, but if you have a question about advanced system tuning, please contact ClickHouse Cloud Support."),(0,n.kt)("h3",{id:"advanced-security-administration"},"Advanced security administration"),(0,n.kt)("p",null,"As part of creating the ClickHouse service, we create a default database, and the default user that has broad permissions to this database. This initial user can create additional users and assign their permissions to this database. Beyond this, the ability to enable the following security features within the database using Kerberos, LDAP, or SSL X.509 certificate authentication are not supported at this time."),(0,n.kt)("h2",{id:"roadmap"},"Roadmap"),(0,n.kt)("p",null,"The table below summarizes our efforts to expand some of the capabilities described above. If you have feedback, please ",(0,n.kt)("a",{parentName:"p",href:"mailto:feedback@clickhouse.com"},"submit it here")," or fill out ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSftNYPGnqTCtf6x4x3NbTTJiT7O85kufcToa40GrQH3dlGj6Q/viewform"},"ClickHouse Cloud Roadmap")," Survey."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Capability"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Coming soon?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dictionary support: PostgreSQL, MySQL, remote and local ClickHouse servers, Redis, MongoDB and HTTP sources"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Added in GA"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQL user-defined functions (UDFs)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Added in GA"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MySQL and Postgres engine"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Added in GA"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Engines for SQLite, ODBC, JDBC, MongoDB, Redis, RabbitMQ, HDFS, and Hive"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MySQL & Postgres interfaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Kafka Table Engine"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not recommended; see alternatives above")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EmbeddedRocksDB Engine"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Evaluating demand")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Executable user-defined functions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Evaluating demand")))))}p.isMDXComponent=!0}}]);