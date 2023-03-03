"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[16746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,k=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?i.createElement(k,a(a({ref:t},p),{},{components:n})):i.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={slug:"/zh/operations/utilities/clickhouse-copier"},a="clickhouse-copier",l={unversionedId:"zh/operations/utilities/clickhouse-copier",id:"zh/operations/utilities/clickhouse-copier",title:"clickhouse-copier",description:"clickhouse-copier}",source:"@site/docs/zh/operations/utilities/clickhouse-copier.md",sourceDirName:"zh/operations/utilities",slug:"/zh/operations/utilities/clickhouse-copier",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/utilities/clickhouse-copier",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/utilities/clickhouse-copier.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/utilities/clickhouse-copier"},sidebar:"chinese",previous:{title:"clickhouse-compressor",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/utilities/clickhouse-compressor"},next:{title:"clickhouse-format",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/utilities/clickhouse-format"}},s={},c=[{value:"\u8fd0\u884cClickhouse-copier",id:"running-clickhouse-copier",level:2},{value:"Zookeeper.xml\u683c\u5f0f",id:"format-of-zookeeper-xml",level:2},{value:"\u590d\u5236\u4efb\u52a1\u7684\u914d\u7f6e",id:"configuration-of-copying-tasks",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clickhouse-copier"},"clickhouse-copier"),(0,o.kt)("p",null,"\u5c06\u6570\u636e\u4ece\u4e00\u4e2a\u7fa4\u96c6\u4e2d\u7684\u8868\u590d\u5236\u5230\u53e6\u4e00\u4e2a\uff08\u6216\u76f8\u540c\uff09\u7fa4\u96c6\u4e2d\u7684\u8868\u3002"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u8fd0\u884c\u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," \u4e0d\u540c\u670d\u52a1\u5668\u4e0a\u7684\u5b9e\u4f8b\u6267\u884c\u76f8\u540c\u7684\u4f5c\u4e1a\u3002 ZooKeeper\u7528\u4e8e\u540c\u6b65\u8fdb\u7a0b\u3002"),(0,o.kt)("p",null,"\u5f00\u59cb\u540e, ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8fde\u63a5\u5230ZooKeeper\u5e76\u4e14\u63a5\u6536:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u590d\u5236\u4f5c\u4e1a\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u590d\u5236\u4f5c\u4e1a\u7684\u72b6\u6001\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b83\u6267\u884c\u7684\u5de5\u4f5c\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\u6bcf\u4e2a\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\u90fd\u4f1a\u9009\u62e9\u6e90\u96c6\u7fa4\u7684\u201c\u6700\u63a5\u8fd1\u201d\u5206\u7247\uff0c\u7136\u540e\u5c06\u6570\u636e\u590d\u5236\u5230\u76ee\u6807\u96c6\u7fa4\uff0c\u5e76\u5728\u5fc5\u8981\u65f6\u91cd\u65b0\u5206\u7247\u6570\u636e\u3002\n")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," \u8ddf\u8e2aZooKeeper\u4e2d\u7684\u66f4\u6539\uff0c\u5e76\u5b9e\u65f6\u5e94\u7528\u5b83\u4eec\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u51cf\u5c11\u7f51\u7edc\u6d41\u91cf\uff0c\u6211\u4eec\u5efa\u8bae\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," \u5728\u6e90\u6570\u636e\u6240\u5728\u7684\u540c\u4e00\u670d\u52a1\u5668\u4e0a\u3002"),(0,o.kt)("h2",{id:"running-clickhouse-copier"},"\u8fd0\u884cClickhouse-copier"),(0,o.kt)("p",null,"\u8be5\u5b9e\u7528\u7a0b\u5e8f\u5e94\u624b\u52a8\u8fd0\u884c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-copier --daemon --config zookeeper.xml --task-path /task/path --base-dir /path/to/dir\n")),(0,o.kt)("p",null,"\u53c2\u6570:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"daemon")," \u2014 \u5728\u5b88\u62a4\u8fdb\u7a0b\u6a21\u5f0f\u4e0b\u542f\u52a8",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config")," \u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"zookeeper.xml"),"\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u5176\u4e2d\u5305\u542b\u7528\u4e8e\u8fde\u63a5ZooKeeper\u7684\u53c2\u6570\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task-path")," \u2014 ZooKeeper\u8282\u70b9\u7684\u8def\u5f84\u3002 \u8be5\u8282\u70b9\u7528\u4e8e\u540c\u6b65",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier"),"\u8fdb\u7a0b\u548c\u5b58\u50a8\u4efb\u52a1\u3002 \u4efb\u52a1\u5b58\u50a8\u5728",(0,o.kt)("inlineCode",{parentName:"li"},"$task-path/description"),"\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task-file")," \u2014 \u53ef\u9009\u7684\u975e\u5fc5\u987b\u53c2\u6570, \u6307\u5b9a\u4e00\u4e2a\u5305\u542b\u4efb\u52a1\u914d\u7f6e\u7684\u53c2\u6570\u6587\u4ef6, \u7528\u4e8e\u521d\u59cb\u4e0a\u4f20\u5230ZooKeeper\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task-upload-force")," \u2014 \u5373\u4f7f\u8282\u70b9\u5df2\u7ecf\u5b58\u5728\uff0c\u4e5f\u5f3a\u5236\u4e0a\u8f7d",(0,o.kt)("inlineCode",{parentName:"li"},"task-file"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"base-dir")," \u2014 \u65e5\u5fd7\u548c\u8f85\u52a9\u6587\u4ef6\u7684\u8def\u5f84\u3002 \u542f\u52a8\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier"),"\u5728",(0,o.kt)("inlineCode",{parentName:"li"},"$base-dir"),"\u4e2d\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier_YYYYMMHHSS_<PID>"),"\u5b50\u76ee\u5f55\u3002 \u5982\u679c\u7701\u7565\u6b64\u53c2\u6570\uff0c\u5219\u4f1a\u5728\u542f\u52a8",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-copier"),"\u7684\u76ee\u5f55\u4e2d\u521b\u5efa\u76ee\u5f55\u3002")),(0,o.kt)("h2",{id:"format-of-zookeeper-xml"},"Zookeeper.xml\u683c\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<clickhouse>\n    <logger>\n        <level>trace</level>\n        <size>100M</size>\n        <count>3</count>\n    </logger>\n\n    <zookeeper>\n        <node index="1">\n            <host>127.0.0.1</host>\n            <port>2181</port>\n        </node>\n    </zookeeper>\n</clickhouse>\n')),(0,o.kt)("h2",{id:"configuration-of-copying-tasks"},"\u590d\u5236\u4efb\u52a1\u7684\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    \x3c!-- Configuration of clusters as in an ordinary server config --\x3e\n    <remote_servers>\n        <source_cluster>\n            <shard>\n                <internal_replication>false</internal_replication>\n                    <replica>\n                        <host>127.0.0.1</host>\n                        <port>9000</port>\n                    </replica>\n            </shard>\n            ...\n        </source_cluster>\n\n        <destination_cluster>\n        ...\n        </destination_cluster>\n    </remote_servers>\n\n    \x3c!-- How many simultaneously active workers are possible. If you run more workers superfluous workers will sleep. --\x3e\n    <max_workers>2</max_workers>\n\n    \x3c!-- Setting used to fetch (pull) data from source cluster tables --\x3e\n    <settings_pull>\n        <readonly>1</readonly>\n    </settings_pull>\n\n    \x3c!-- Setting used to insert (push) data to destination cluster tables --\x3e\n    <settings_push>\n        <readonly>0</readonly>\n    </settings_push>\n\n    \x3c!-- Common setting for fetch (pull) and insert (push) operations. Also, copier process context uses it.\n         They are overlaid by <settings_pull/> and <settings_push/> respectively. --\x3e\n    <settings>\n        <connect_timeout>3</connect_timeout>\n        \x3c!-- Sync insert is set forcibly, leave it here just in case. --\x3e\n        <insert_distributed_sync>1</insert_distributed_sync>\n    </settings>\n\n    \x3c!-- Copying tasks description.\n         You could specify several table task in the same task description (in the same ZooKeeper node), they will be performed\n         sequentially.\n    --\x3e\n    <tables>\n        \x3c!-- A table task, copies one table. --\x3e\n        <table_hits>\n            \x3c!-- Source cluster name (from <remote_servers/> section) and tables in it that should be copied --\x3e\n            <cluster_pull>source_cluster</cluster_pull>\n            <database_pull>test</database_pull>\n            <table_pull>hits</table_pull>\n\n            \x3c!-- Destination cluster name and tables in which the data should be inserted --\x3e\n            <cluster_push>destination_cluster</cluster_push>\n            <database_push>test</database_push>\n            <table_push>hits2</table_push>\n\n            \x3c!-- Engine of destination tables.\n                 If destination tables have not be created, workers create them using columns definition from source tables and engine\n                 definition from here.\n\n                 NOTE: If the first worker starts insert data and detects that destination partition is not empty then the partition will\n                 be dropped and refilled, take it into account if you already have some data in destination tables. You could directly\n                 specify partitions that should be copied in <enabled_partitions/>, they should be in quoted format like partition column of\n                 system.parts table.\n            --\x3e\n            <engine>\n            ENGINE=ReplicatedMergeTree('/clickhouse/tables/{cluster}/{shard}/hits2', '{replica}')\n            PARTITION BY toMonday(date)\n            ORDER BY (CounterID, EventDate)\n            </engine>\n\n            \x3c!-- Sharding key used to insert data to destination cluster --\x3e\n            <sharding_key>jumpConsistentHash(intHash64(UserID), 2)</sharding_key>\n\n            \x3c!-- Optional expression that filter data while pull them from source servers --\x3e\n            <where_condition>CounterID != 0</where_condition>\n\n            \x3c!-- This section specifies partitions that should be copied, other partition will be ignored.\n                 Partition names should have the same format as\n                 partition column of system.parts table (i.e. a quoted text).\n                 Since partition key of source and destination cluster could be different,\n                 these partition names specify destination partitions.\n\n                 NOTE: In spite of this section is optional (if it is not specified, all partitions will be copied),\n                 it is strictly recommended to specify them explicitly.\n                 If you already have some ready partitions on destination cluster they\n                 will be removed at the start of the copying since they will be interpeted\n                 as unfinished data from the previous copying!!!\n            --\x3e\n            <enabled_partitions>\n                <partition>'2018-02-26'</partition>\n                <partition>'2018-03-05'</partition>\n                ...\n            </enabled_partitions>\n        </table_hits>\n\n        \x3c!-- Next table to copy. It is not copied until previous table is copying. --\x3e\n        <table_visits>\n        ...\n        </table_visits>\n        ...\n    </tables>\n</clickhouse>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-copier")," \u8ddf\u8e2a\u66f4\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"/task/path/description")," \u5e76\u5728\u98de\u884c\u4e2d\u5e94\u7528\u5b83\u4eec\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u4f60\u6539\u53d8\u7684\u503c ",(0,o.kt)("inlineCode",{parentName:"p"},"max_workers"),"\uff0c\u8fd0\u884c\u4efb\u52a1\u7684\u8fdb\u7a0b\u6570\u4e5f\u4f1a\u53d1\u751f\u53d8\u5316\u3002"))}d.isMDXComponent=!0}}]);