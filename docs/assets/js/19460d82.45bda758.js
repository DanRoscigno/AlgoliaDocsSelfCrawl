"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[8136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),g=l(n),u=i,m=g["".concat(c,".").concat(u)]||g[u]||d[u]||s;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[g]="string"==typeof e?e:i,o[1]=r;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10331:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),i=(n(67294),n(3905));const s={toc:[]},o="wrapper";function r(e){let{components:t,...n}=e;return(0,i.kt)(o,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This page is not applicable to ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),". The feature documented here is not available in ClickHouse Cloud services.\nSee the ClickHouse ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," guide for more information.")))}r.isMDXComponent=!0},2554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),s=n(10331);const o={sidebar_label:"GCS Backed MergeTree",sidebar_position:4,slug:"/en/integrations/s3/gcs-merge-tree",description:"Google Cloud Storage (GCS) Backed MergeTree"},r="GCS Backed MergeTree",c={unversionedId:"en/integrations/data-ingestion/s3/gcs-merge-tree",id:"en/integrations/data-ingestion/s3/gcs-merge-tree",title:"GCS Backed MergeTree",description:"Google Cloud Storage (GCS) Backed MergeTree",source:"@site/docs/en/integrations/data-ingestion/s3/gcs-merge-tree.md",sourceDirName:"en/integrations/data-ingestion/s3",slug:"/en/integrations/s3/gcs-merge-tree",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/s3/gcs-merge-tree",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/s3/gcs-merge-tree.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"GCS Backed MergeTree",sidebar_position:4,slug:"/en/integrations/s3/gcs-merge-tree",description:"Google Cloud Storage (GCS) Backed MergeTree"}},l={},p=[{value:"Creating a Disk",id:"creating-a-disk",level:2},{value:"storage_configuration &gt; disks &gt; gcs",id:"storage_configuration--disks--gcs",level:3},{value:"storage_configuration &gt; disks &gt; cache",id:"storage_configuration--disks--cache",level:3},{value:"storage_configuration &gt; policies &gt; gcs_main",id:"storage_configuration--policies--gcs_main",level:3},{value:"Creating a table",id:"creating-a-table",level:2},{value:"Handling Replication",id:"handling-replication",level:2},{value:"Learn More",id:"learn-more",level:2}],g={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gcs-backed-mergetree"},"GCS Backed MergeTree"),(0,i.kt)(s.ZP,{mdxType:"SelfManaged"}),(0,i.kt)("p",null,"ClickHouse recognizes that GCS represents an attractive storage solution for users seeking to separate storage and compute. To help achieve this, support is provided for using GCS as the storage for a MergeTree engine. This will enable users to exploit the scalability and cost benefits of GCS, and the insert and query performance of the MergeTree engine."),(0,i.kt)("h2",{id:"creating-a-disk"},"Creating a Disk"),(0,i.kt)("p",null,"To utilize a GCS bucket as a disk, we must first declare it within the ClickHouse configuration in a file under ",(0,i.kt)("inlineCode",{parentName:"p"},"conf.d"),'. An example of a GCS disk declaration is shown below.  This configuration includes multiple sections to configure the GCS "disk", the cache, and the policy that is specified in DDL queries when tables are to be created on the GCS disk.  Each of these are described below.'),(0,i.kt)("h3",{id:"storage_configuration--disks--gcs"},"storage_configuration > disks > gcs"),(0,i.kt)("p",null,"This part of the configuration is shown in the highlighted section and specifies that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Batch deletes are not to be performed.  GCS does not currently support batch deletes, so the autodetect is disabled to suppress error messages."),(0,i.kt)("li",{parentName:"ul"},"The type of the disk is ",(0,i.kt)("inlineCode",{parentName:"li"},"s3")," because the S3 API is in use."),(0,i.kt)("li",{parentName:"ul"},"The endpoint as provided by GCS"),(0,i.kt)("li",{parentName:"ul"},"The service account HMAC key and secret"),(0,i.kt)("li",{parentName:"ul"},"The metadata path on the local disk")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <gcs>\n        \x3c!--highlight-start--\x3e\n                <support_batch_delete>false</support_batch_delete>\n                <type>s3</type>\n                <endpoint>https://storage.googleapis.com/BUCKET NAME/FOLDER NAME/</endpoint>\n                <access_key_id>SERVICE ACCOUNT HMAC KEY</access_key_id>\n                <secret_access_key>SERVICE ACCOUNT HMAC SECRET</secret_access_key>\n                <metadata_path>/var/lib/clickhouse/disks/gcs/</metadata_path>\n        \x3c!--highlight-end--\x3e\n            </gcs>\n        </disks>\n        <policies>\n            <gcs_main>\n                <volumes>\n                    <main>\n                        <disk>gcs</disk>\n                    </main>\n                </volumes>\n            </gcs_main>\n        </policies>\n    </storage_configuration>\n</clickhouse>\n")),(0,i.kt)("h3",{id:"storage_configuration--disks--cache"},"storage_configuration > disks > cache"),(0,i.kt)("p",null,"The example configuration highlighted below enables a 10Gi memory cache for the disk ",(0,i.kt)("inlineCode",{parentName:"p"},"gcs"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <gcs>\n                <support_batch_delete>false</support_batch_delete>\n                <type>s3</type>\n                <endpoint>https://storage.googleapis.com/BUCKET NAME/FOLDER NAME/</endpoint>\n                <access_key_id>SERVICE ACCOUNT HMAC KEY</access_key_id>\n                <secret_access_key>SERVICE ACCOUNT HMAC SECRET</secret_access_key>\n                <metadata_path>/var/lib/clickhouse/disks/gcs/</metadata_path>\n            </gcs>\n        \x3c!--highlight-start--\x3e\n        <gcs_cache>\n                <type>cache</type>\n                <disk>gcs</disk>\n                <path>/var/lib/clickhouse/disks/gcs_cache/</path>\n                <max_size>10Gi</max_size>\n            </gcs_cache>\n        \x3c!--highlight-end--\x3e\n        </disks>\n        <policies>\n            <gcs_main>\n                <volumes>\n                    <main>\n                        <disk>gcs_cache</disk>\n                    </main>\n                </volumes>\n            </gcs_main>\n        </policies>\n    </storage_configuration>\n</clickhouse>\n")),(0,i.kt)("h3",{id:"storage_configuration--policies--gcs_main"},"storage_configuration > policies > gcs_main"),(0,i.kt)("p",null,"Storage configuration policies allow choosing where data is stored.  The policy highlighted below allows data to be stored on the disk ",(0,i.kt)("inlineCode",{parentName:"p"},"gcs")," by specifying the policy ",(0,i.kt)("inlineCode",{parentName:"p"},"gcs_main"),".  For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE ... SETTINGS storage_policy='gcs_main'"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <gcs>\n                <support_batch_delete>false</support_batch_delete>\n                <type>s3</type>\n                <endpoint>https://storage.googleapis.com/BUCKET NAME/FOLDER NAME/</endpoint>\n                <access_key_id>SERVICE ACCOUNT HMAC KEY</access_key_id>\n                <secret_access_key>SERVICE ACCOUNT HMAC SECRET</secret_access_key>\n                <metadata_path>/var/lib/clickhouse/disks/gcs/</metadata_path>\n            </gcs>\n        </disks>\n        <policies>\n        \x3c!--highlight-start--\x3e\n            <gcs_main>\n                <volumes>\n                    <main>\n                        <disk>gcs</disk>\n                    </main>\n                </volumes>\n            </gcs_main>\n        \x3c!--highlight-end--\x3e\n        </policies>\n    </storage_configuration>\n</clickhouse>\n")),(0,i.kt)("p",null,"A complete list of settings relevant to this disk declaration can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree.md/#table_engine-mergetree-s3"},"here"),"."),(0,i.kt)("h2",{id:"creating-a-table"},"Creating a table"),(0,i.kt)("p",null,"Assuming you have configured your disk to use a bucket with write access, you should be able to create a table such as in the example below. For purposes of brevity, we use a subset of the NYC taxi columns and stream data directly to the GCS-backed table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE trips_gcs\n(\n   `trip_id` UInt32,\n   `pickup_date` Date,\n   `pickup_datetime` DateTime,\n   `dropoff_datetime` DateTime,\n   `pickup_longitude` Float64,\n   `pickup_latitude` Float64,\n   `dropoff_longitude` Float64,\n   `dropoff_latitude` Float64,\n   `passenger_count` UInt8,\n   `trip_distance` Float64,\n   `tip_amount` Float32,\n   `total_amount` Float32,\n   `payment_type` Enum8('UNK' = 0, 'CSH' = 1, 'CRE' = 2, 'NOC' = 3, 'DIS' = 4)\n)\nENGINE = MergeTree\nPARTITION BY toYYYYMM(pickup_date)\nORDER BY pickup_datetime\n# highlight-next-line\nSETTINGS storage_policy='gcs_main'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO trips_gcs SELECT trip_id, pickup_date, pickup_datetime, dropoff_datetime, pickup_longitude, pickup_latitude, dropoff_longitude, dropoff_latitude, passenger_count, trip_distance, tip_amount, total_amount, payment_type FROM s3('https://ch-nyc-taxi.s3.eu-west-3.amazonaws.com/tsv/trips_{0..9}.tsv.gz', 'TabSeparatedWithNames') LIMIT 1000000;\n")),(0,i.kt)("p",null,"Depending on the hardware, this latter insert of 1m rows may take a few minutes to execute. You can confirm the progress via the system.processes table. Feel free to adjust the row count up to the limit of 10m and explore some sample queries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT passenger_count, avg(tip_amount) as avg_tip, avg(total_amount) as avg_amount FROM trips_gcs GROUP BY passenger_count;\n")),(0,i.kt)("h2",{id:"handling-replication"},"Handling Replication"),(0,i.kt)("p",null,"Replication with GCS disks can be accomplished by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," table engine.  See the ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/guides/sre/gcs-multi-region"},"replicating a single shard across two GCP regions using GCS")," guide for details."),(0,i.kt)("h2",{id:"learn-more"},"Learn More"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/xml-api/overview"},"Cloud Storage XML API")," is interoperable with some tools and libraries that work with services such as Amazon Simple Storage Service (Amazon S3)."),(0,i.kt)("p",null,"For further information on tuning threads, see ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/integrations/s3/s3-optimizing-performance"},"Optimizing for Performance"),"."))}u.isMDXComponent=!0}}]);