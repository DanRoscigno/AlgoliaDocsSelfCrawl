"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[3179],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10331:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),i=(a(67294),a(3905));const r={toc:[]},s="wrapper";function o(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This page is not applicable to ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),". The feature documented here is not available in ClickHouse Cloud services.\nSee the ClickHouse ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," guide for more information.")))}o.isMDXComponent=!0},16690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),r=a(10331);const s={sidebar_label:"S3 Backed MergeTree",sidebar_position:4,slug:"/en/integrations/s3/s3-merge-tree",description:"S3 Backed MergeTree"},o="S3 Backed MergeTree",l={unversionedId:"en/integrations/data-ingestion/s3/s3-merge-tree",id:"en/integrations/data-ingestion/s3/s3-merge-tree",title:"S3 Backed MergeTree",description:"S3 Backed MergeTree",source:"@site/docs/en/integrations/data-ingestion/s3/s3-merge-tree.md",sourceDirName:"en/integrations/data-ingestion/s3",slug:"/en/integrations/s3/s3-merge-tree",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/s3/s3-merge-tree",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/s3/s3-merge-tree.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"S3 Backed MergeTree",sidebar_position:4,slug:"/en/integrations/s3/s3-merge-tree",description:"S3 Backed MergeTree"}},c={},d=[{value:"Storage Tiers",id:"storage-tiers",level:2},{value:"Creating a Disk",id:"creating-a-disk",level:2},{value:"Creating a Storage Policy",id:"creating-a-storage-policy",level:2},{value:"Creating a table",id:"creating-a-table",level:2},{value:"Modifying a Table",id:"modifying-a-table",level:2},{value:"Handling Replication",id:"handling-replication",level:2},{value:"Internals",id:"internals",level:2},{value:"Read &amp; Writes",id:"read--writes",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"s3-backed-mergetree"},"S3 Backed MergeTree"),(0,i.kt)(r.ZP,{mdxType:"SelfManaged"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," functions and associated table engine allow us to query data in S3 using familiar ClickHouse syntax. However, concerning data management features and performance, they are limited. There is no support for primary indexes, no-cache support, and files inserts need to be managed by the user."),(0,i.kt)("p",null,"ClickHouse recognizes that S3 represents an attractive storage solution, especially where query performance on \u201ccolder\u201d data is less critical, and users seek to separate storage and compute. To help achieve this, support is provided for using S3 as the storage for a MergeTree engine. This will enable users to exploit the scalability and cost benefits of S3, and the insert and query performance of the MergeTree engine."),(0,i.kt)("h2",{id:"storage-tiers"},"Storage Tiers"),(0,i.kt)("p",null,"ClickHouse storage volumes allow physical disks to be abstracted from the MergeTree table engine. Any single volume can be composed of an ordered set of disks. Whilst principally allowing multiple block devices to be potentially used for data storage, this abstraction also allows other storage types, including S3. ClickHouse data parts can be moved between volumes and fill rates according to storage policies, thus creating the concept of storage tiers."),(0,i.kt)("p",null,"Storage tiers unlock hot-cold architectures where the most recent data, which is typically also the most queried, requires only a small amount of space on high-performing storage, e.g., NVMe SSDs. As the data ages, SLAs for query times increase, as does query frequency. This fat tail of data can be stored on slower, less performant storage such as HDD or object storage such as S3."),(0,i.kt)("h2",{id:"creating-a-disk"},"Creating a Disk"),(0,i.kt)("p",null,"To utilize an S3 bucket as a disk, we must first declare it within the ClickHouse configuration file. Either extend config.xml or preferably provide a new file under conf.d. An example of an S3 disk declaration is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        ...\n        <disks>\n            <s3>\n                <type>s3</type>\n                <endpoint>https://sample-bucket.s3.us-east-2.amazonaws.com/tables/</endpoint>\n                <access_key_id>your_access_key_id</access_key_id>\n                <secret_access_key>your_secret_access_key</secret_access_key>\n                <region></region>\n                <metadata_path>/var/lib/clickhouse/disks/s3/</metadata_path>\n            </s3>\n            <s3_cache>\n                <type>cache</type>\n                <disk>s3</disk>\n                <path>/var/lib/clickhouse/disks/s3_cache/</path>\n                <max_size>10Gi</max_size>\n            </s3_cache>\n        </disks>\n        ...\n    </storage_configuration>\n</clickhouse>\n\n")),(0,i.kt)("p",null,"A complete list of settings relevant to this disk declaration can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree.md/#table_engine-mergetree-s3"},"here"),". Note that credentials can be managed here using the same approaches described in ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/integrations/s3/s3-table-engine/#managing-credentials"},"Managing credentials"),", i.e., the use_environment_credentials can be set to true in the above settings block to use IAM roles."),(0,i.kt)("h2",{id:"creating-a-storage-policy"},"Creating a Storage Policy"),(0,i.kt)("p",null,"Once configured, this \u201cdisk\u201d can be used by a storage volume declared within a policy. For the example below, we assume s3 is our only storage. This ignores more complex hot-cold architectures where data can be relocated based on TTLs and fill rates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <s3>\n            ...\n            </s3>\n            <s3_cache>\n            ...\n            </s3_cache>\n        </disks>\n        <policies>\n            <s3_main>\n                <volumes>\n                    <main>\n                        <disk>s3</disk>\n                    </main>\n                </volumes>\n            </s3_main>\n        </policies>\n    </storage_configuration>\n</clickhouse>\n")),(0,i.kt)("h2",{id:"creating-a-table"},"Creating a table"),(0,i.kt)("p",null,"Assuming you have configured your disk to use a bucket with write access, you should be able to create a table such as in the example below. For purposes of brevity, we use a subset of the NYC taxi columns and stream data directly to the s3 backed table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE trips_s3\n(\n   `trip_id` UInt32,\n   `pickup_date` Date,\n   `pickup_datetime` DateTime,\n   `dropoff_datetime` DateTime,\n   `pickup_longitude` Float64,\n   `pickup_latitude` Float64,\n   `dropoff_longitude` Float64,\n   `dropoff_latitude` Float64,\n   `passenger_count` UInt8,\n   `trip_distance` Float64,\n   `tip_amount` Float32,\n   `total_amount` Float32,\n   `payment_type` Enum8('UNK' = 0, 'CSH' = 1, 'CRE' = 2, 'NOC' = 3, 'DIS' = 4)\n)\nENGINE = MergeTree\nPARTITION BY toYYYYMM(pickup_date)\nORDER BY pickup_datetime\nSETTINGS index_granularity = 8192, storage_policy='s3_main'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO trips_s3 SELECT trip_id, pickup_date, pickup_datetime, dropoff_datetime, pickup_longitude, pickup_latitude, dropoff_longitude, dropoff_latitude, passenger_count, trip_distance, tip_amount, total_amount, payment_type FROM s3('https://ch-nyc-taxi.s3.eu-west-3.amazonaws.com/tsv/trips_{0..9}.tsv.gz', 'TabSeparatedWithNames') LIMIT 1000000;\n")),(0,i.kt)("p",null,"Depending on the hardware, this latter insert of 1m rows may take a few minutes to execute. You can confirm the progress via the system.processes table. Feel free to adjust the row count up to the limit of 10m and explore some sample queries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT passenger_count, avg(tip_amount) as avg_tip, avg(total_amount) as avg_amount FROM trips_s3 GROUP BY passenger_count;\n")),(0,i.kt)("h2",{id:"modifying-a-table"},"Modifying a Table"),(0,i.kt)("p",null,"Occasionally users may need to modify the storage policy of a specific table. Whilst this is possible, it comes with limitations. The new target policy must contain all of the disks and volumes of the previous policy, i.e., data will not be migrated to satisfy a policy change. When validating these constraints, volumes and disks will be identified by their name, with attempts to violate resulting in an error. However, assuming you use the previous examples, the following changes are valid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<policies>\n   <s3_main>\n       <volumes>\n           <main>\n               <disk>s3</disk>\n           </main>\n       </volumes>\n   </s3_main>\n   <s3_tiered>\n       <volumes>\n           <hot>\n               <disk>default</disk>\n           </hot>\n           <main>\n               <disk>s3</disk>\n           </main>\n       </volumes>\n       <move_factor>0.2</move_factor>\n   </s3_tiered>\n</policies>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE trips_s3 MODIFY SETTING storage_policy='s3_tiered'\n")),(0,i.kt)("p",null,"Here we reuse the main volume in our new s3_tiered policy and introduce a new hot volume. This uses the default disk, which consists of only one disk configured via the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"<path>"),". Note that our volume names and disks do not change.  New inserts to our table will reside on the default disk until this reaches move_factor * disk_size - at which data will be relocated to S3."),(0,i.kt)("h2",{id:"handling-replication"},"Handling Replication"),(0,i.kt)("p",null,"Replication with S3 disks can be accomplished by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," table engine.  See the ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/guides/sre/s3-multi-region"},"replicating a single shard across two AWS regions using S3 Object Storage")," guide for details."),(0,i.kt)("h2",{id:"internals"},"Internals"),(0,i.kt)("h2",{id:"read--writes"},"Read & Writes"),(0,i.kt)("p",null,"The following notes cover the implementation of S3 interactions with ClickHouse. Whilst generally only informative, it may help the readers when ",(0,i.kt)("a",{parentName:"p",href:"./s3-optimizing-performance"},"Optimizing for Performance"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By default, the maximum number of query processing threads used by any stage of the query processing pipeline is equal to the number of cores. Some stages are more parallelizable than others, so this value provides an upper bound.  Multiple query stages may execute at once since data is streamed from the disk. The exact number of threads used for a query may thus exceed this. Modify through the setting ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings.md/#settings-max_threads"},"max_threads"),"."),(0,i.kt)("li",{parentName:"ul"},"Reads on S3 are asynchronous by default. This behavior is determined by setting ",(0,i.kt)("inlineCode",{parentName:"li"},"remote_filesystem_read_method"),", set to the value ",(0,i.kt)("inlineCode",{parentName:"li"},"threadpool")," by default. When serving a request, ClickHouse reads granules in stripes. Each of these stripes potentially contain many columns. A thread will read the columns for their granules one by one. Rather than doing this synchronously, a prefetch is made for all columns before waiting for the data. This offers significant performance improvements over synchronous waits on each column. Users will not need to change this setting in most cases - see ",(0,i.kt)("a",{parentName:"li",href:"./s3-optimizing-performance"},"Optimizing for Performance"),"."),(0,i.kt)("li",{parentName:"ul"},"For the s3 function and table, parallel downloading is determined by the values ",(0,i.kt)("inlineCode",{parentName:"li"},"max_download_threads")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"max_download_buffer_size"),". Files will only be downloaded in parallel if their size is greater than the total buffer size combined across all threads. This is only available on versions > 22.3.1."),(0,i.kt)("li",{parentName:"ul"},"Writes are performed in parallel, with a maximum of 100 concurrent file writing threads. ",(0,i.kt)("inlineCode",{parentName:"li"},"max_insert_delayed_streams_for_parallel_write"),", which has a default value of 1000,  controls the number of S3 blobs written in parallel. Since a buffer is required for each file being written (~1MB), this effectively limits the memory consumption of an INSERT. It may be appropriate to lower this value in low server memory scenarios.")),(0,i.kt)("p",null,"For further information on tuning threads, see ",(0,i.kt)("a",{parentName:"p",href:"./s3-optimizing-performance"},"Optimizing for Performance"),"."))}m.isMDXComponent=!0}}]);