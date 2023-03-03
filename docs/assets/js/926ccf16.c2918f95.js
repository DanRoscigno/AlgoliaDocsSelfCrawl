"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[30612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={slug:"/en/operations/utilities/clickhouse-copier",sidebar_position:59,sidebar_label:"clickhouse-copier"},s="clickhouse-copier",a={unversionedId:"en/operations/utilities/clickhouse-copier",id:"en/operations/utilities/clickhouse-copier",title:"clickhouse-copier",description:"Copies data from the tables in one cluster to tables in another (or the same) cluster.",source:"@site/docs/en/operations/utilities/clickhouse-copier.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/clickhouse-copier",permalink:"/AlgoliaDocsSelfCrawl/en/operations/utilities/clickhouse-copier",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/utilities/clickhouse-copier.md",tags:[],version:"current",sidebarPosition:59,frontMatter:{slug:"/en/operations/utilities/clickhouse-copier",sidebar_position:59,sidebar_label:"clickhouse-copier"},sidebar:"english",previous:{title:"Overview",permalink:"/AlgoliaDocsSelfCrawl/en/operations/utilities/"},next:{title:"clickhouse-local",permalink:"/AlgoliaDocsSelfCrawl/en/operations/utilities/clickhouse-local"}},l={},c=[{value:"Running Clickhouse-copier",id:"running-clickhouse-copier",level:2},{value:"Format of keeper.xml",id:"format-of-zookeeper-xml",level:2},{value:"Configuration of Copying Tasks",id:"configuration-of-copying-tasks",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clickhouse-copier"},"clickhouse-copier"),(0,o.kt)("p",null,"Copies data from the tables in one cluster to tables in another (or the same) cluster."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"To get a consistent copy, the data in the source tables and partitions should not change during the entire process.")),(0,o.kt)("p",null,"You can run multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," instances on different servers to perform the same job. ClickHouse Keeper, or ZooKeeper, is used for syncing the processes."),(0,o.kt)("p",null,"After starting, ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Connects to ClickHouse Keeper and receives:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Copying jobs."),(0,o.kt)("li",{parentName:"ul"},"The state of the copying jobs."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It performs the jobs."),(0,o.kt)("p",{parentName:"li"},"Each running process chooses the \u201cclosest\u201d shard of the source cluster and copies the data into the destination cluster, resharding the data if necessary."))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," tracks the changes in ClickHouse Keeper and applies them on the fly."),(0,o.kt)("p",null,"To reduce network traffic, we recommend running ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," on the same server where the source data is located."),(0,o.kt)("h2",{id:"running-clickhouse-copier"},"Running Clickhouse-copier"),(0,o.kt)("p",null,"The utility should be run manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse-copier --daemon --config keeper.xml --task-path /task/path --base-dir /path/to/dir\n")),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"daemon")," \u2014 Starts ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier")," in daemon mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config")," \u2014 The path to the ",(0,o.kt)("inlineCode",{parentName:"li"},"keeper.xml")," file with the parameters for the connection to ClickHouse Keeper."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task-path")," \u2014 The path to the ClickHouse Keeper node. This node is used for syncing ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier")," processes and storing tasks. Tasks are stored in ",(0,o.kt)("inlineCode",{parentName:"li"},"$task-path/description"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task-file")," \u2014 Optional path to file with task configuration for initial upload to ClickHouse Keeper."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task-upload-force")," \u2014 Force upload ",(0,o.kt)("inlineCode",{parentName:"li"},"task-file")," even if node already exists."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"base-dir")," \u2014 The path to logs and auxiliary files. When it starts, ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier")," creates ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier_YYYYMMHHSS_<PID>")," subdirectories in ",(0,o.kt)("inlineCode",{parentName:"li"},"$base-dir"),". If this parameter is omitted, the directories are created in the directory where ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier")," was launched.")),(0,o.kt)("h2",{id:"format-of-zookeeper-xml"},"Format of keeper.xml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<clickhouse>\n    <logger>\n        <level>trace</level>\n        <size>100M</size>\n        <count>3</count>\n    </logger>\n\n    <zookeeper>\n        <node index="1">\n            <host>127.0.0.1</host>\n            <port>2181</port>\n        </node>\n    </zookeeper>\n</clickhouse>\n')),(0,o.kt)("h2",{id:"configuration-of-copying-tasks"},"Configuration of Copying Tasks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    \x3c!-- Configuration of clusters as in an ordinary server config --\x3e\n    <remote_servers>\n        <source_cluster>\n            \x3c!--\n                source cluster & destination clusters accept exactly the same\n                parameters as parameters for the usual Distributed table\n                see https://clickhouse.com/docs/en/engines/table-engines/special/distributed/\n            --\x3e\n            <shard>\n                <internal_replication>false</internal_replication>\n                    <replica>\n                        <host>127.0.0.1</host>\n                        <port>9000</port>\n                        \x3c!--\n                        <user>default</user>\n                        <password>default</password>\n                        <secure>1</secure>\n                        --\x3e\n                    </replica>\n            </shard>\n            ...\n        </source_cluster>\n\n        <destination_cluster>\n        ...\n        </destination_cluster>\n    </remote_servers>\n\n    \x3c!-- How many simultaneously active workers are possible. If you run more workers superfluous workers will sleep. --\x3e\n    <max_workers>2</max_workers>\n\n    \x3c!-- Setting used to fetch (pull) data from source cluster tables --\x3e\n    <settings_pull>\n        <readonly>1</readonly>\n    </settings_pull>\n\n    \x3c!-- Setting used to insert (push) data to destination cluster tables --\x3e\n    <settings_push>\n        <readonly>0</readonly>\n    </settings_push>\n\n    \x3c!-- Common setting for fetch (pull) and insert (push) operations. Also, copier process context uses it.\n         They are overlaid by <settings_pull/> and <settings_push/> respectively. --\x3e\n    <settings>\n        <connect_timeout>3</connect_timeout>\n        \x3c!-- Sync insert is set forcibly, leave it here just in case. --\x3e\n        <insert_distributed_sync>1</insert_distributed_sync>\n    </settings>\n\n    \x3c!-- Copying tasks description.\n         You could specify several table task in the same task description (in the same ZooKeeper node), they will be performed\n         sequentially.\n    --\x3e\n    <tables>\n        \x3c!-- A table task, copies one table. --\x3e\n        <table_hits>\n            \x3c!-- Source cluster name (from <remote_servers/> section) and tables in it that should be copied --\x3e\n            <cluster_pull>source_cluster</cluster_pull>\n            <database_pull>test</database_pull>\n            <table_pull>hits</table_pull>\n\n            \x3c!-- Destination cluster name and tables in which the data should be inserted --\x3e\n            <cluster_push>destination_cluster</cluster_push>\n            <database_push>test</database_push>\n            <table_push>hits2</table_push>\n\n            \x3c!-- Engine of destination tables.\n                 If destination tables have not be created, workers create them using columns definition from source tables and engine\n                 definition from here.\n\n                 NOTE: If the first worker starts insert data and detects that destination partition is not empty then the partition will\n                 be dropped and refilled, take it into account if you already have some data in destination tables. You could directly\n                 specify partitions that should be copied in <enabled_partitions/>, they should be in quoted format like partition column of\n                 system.parts table.\n            --\x3e\n            <engine>\n            ENGINE=ReplicatedMergeTree('/clickhouse/tables/{cluster}/{shard}/hits2', '{replica}')\n            PARTITION BY toMonday(date)\n            ORDER BY (CounterID, EventDate)\n            </engine>\n\n            \x3c!-- Sharding key used to insert data to destination cluster --\x3e\n            <sharding_key>jumpConsistentHash(intHash64(UserID), 2)</sharding_key>\n\n            \x3c!-- Optional expression that filter data while pull them from source servers --\x3e\n            <where_condition>CounterID != 0</where_condition>\n\n            \x3c!-- This section specifies partitions that should be copied, other partition will be ignored.\n                 Partition names should have the same format as\n                 partition column of system.parts table (i.e. a quoted text).\n                 Since partition key of source and destination cluster could be different,\n                 these partition names specify destination partitions.\n\n                 NOTE: In spite of this section is optional (if it is not specified, all partitions will be copied),\n                 it is strictly recommended to specify them explicitly.\n                 If you already have some ready partitions on destination cluster they\n                 will be removed at the start of the copying since they will be interpeted\n                 as unfinished data from the previous copying!!!\n            --\x3e\n            <enabled_partitions>\n                <partition>'2018-02-26'</partition>\n                <partition>'2018-03-05'</partition>\n                ...\n            </enabled_partitions>\n        </table_hits>\n\n        \x3c!-- Next table to copy. It is not copied until previous table is copying. --\x3e\n        <table_visits>\n        ...\n        </table_visits>\n        ...\n    </tables>\n</clickhouse>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," tracks the changes in ",(0,o.kt)("inlineCode",{parentName:"p"},"/task/path/description")," and applies them on the fly. For instance, if you change the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"max_workers"),", the number of processes running tasks will also change."))}d.isMDXComponent=!0}}]);