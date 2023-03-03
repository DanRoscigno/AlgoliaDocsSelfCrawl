"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[21507],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=m(a),c=o,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,i[1]=r;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},70614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var n=a(87462),o=(a(67294),a(3905));const l={slug:"/en/guides/developer/ttl",sidebar_label:"Manage Data with TTL",sidebar_position:2,keywords:["ttl","time to live","clickhouse","old","data"]},i="Manage Data with TTL (Time-to-live)",r={unversionedId:"en/guides/developer/ttl",id:"en/guides/developer/ttl",title:"Manage Data with TTL (Time-to-live)",description:"Overview of TTL",source:"@site/docs/en/guides/developer/ttl.md",sourceDirName:"en/guides/developer",slug:"/en/guides/developer/ttl",permalink:"/AlgoliaDocsSelfCrawl/en/guides/developer/ttl",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/developer/ttl.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/en/guides/developer/ttl",sidebar_label:"Manage Data with TTL",sidebar_position:2,keywords:["ttl","time to live","clickhouse","old","data"]},sidebar:"english",previous:{title:"Deduplication Strategies",permalink:"/AlgoliaDocsSelfCrawl/en/guides/developer/deduplication"},next:{title:"Updating and Deleting Data",permalink:"/AlgoliaDocsSelfCrawl/en/guides/developer/mutations"}},s={},m=[{value:"Overview of TTL",id:"overview-of-ttl",level:2},{value:"TTL Syntax",id:"ttl-syntax",level:2},{value:"Triggering TTL Events",id:"triggering-ttl-events",level:2},{value:"Removing Rows",id:"removing-rows",level:2},{value:"Removing Columns",id:"removing-columns",level:2},{value:"Implementing a Rollup",id:"implementing-a-rollup",level:2},{value:"Implementing a hot/warm/cold architecture",id:"implementing-a-hotwarmcold-architecture",level:2}],d={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manage-data-with-ttl-time-to-live"},"Manage Data with TTL (Time-to-live)"),(0,o.kt)("h2",{id:"overview-of-ttl"},"Overview of TTL"),(0,o.kt)("p",null,'TTL (time-to-live) refers to the capability of having rows or columns moved, deleted, or rolled up after a certain interval of time has passed. While the expression "time-to-live" sounds like it only applies to deleting old data, TTL has several use cases:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Removing old data: no surprise, you can delete rows or columns after a specified time interval"),(0,o.kt)("li",{parentName:"ul"},"Moving data between disks: after a certain amount of time, you can move data between storage volumes - useful for deploying a hot/warm/cold architecture"),(0,o.kt)("li",{parentName:"ul"},"Data rollup: rollup your older data into various useful aggregations and computations before deleting it")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"TTL can be applied to entire tables or specific columns.")),(0,o.kt)("h2",{id:"ttl-syntax"},"TTL Syntax"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TTL")," clause can appear after a column definition and/or at the end of the table definition. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"INTERVAL")," clause to define a length of time (which needs to be a ",(0,o.kt)("inlineCode",{parentName:"p"},"Date")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"DateTime")," data type). For example, the following table has two columns\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"TTL")," clauses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE example1 (\n   timestamp DateTime,\n   x UInt32 TTL now() + INTERVAL 1 MONTH,\n   y String TTL timestamp + INTERVAL 1 DAY,\n   z String\n)\nENGINE = MergeTree\nORDER BY tuple()\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The x column has a time to live of 1 month from now"),(0,o.kt)("li",{parentName:"ul"},"The y column has a time to live of 1 day from the timestamp column:"),(0,o.kt)("li",{parentName:"ul"},"When the interval lapses, the column expires. ClickHouse replaces the column value with the default value of its data type. If all the column values in the data part expire, ClickHouse deletes this column from the data part in the filesystem.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"TTL rules can be altered or deleted. See the ",(0,o.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/sql-reference/statements/alter/ttl"},"Manipulations with Table TTL")," page for more details.")),(0,o.kt)("h2",{id:"triggering-ttl-events"},"Triggering TTL Events"),(0,o.kt)("p",null,"The deleting or aggregating of expired rows is not immediate - it only occurs during table merges. If you have a table that's not actively merging (for whatever reason), there are two settings that trigger TTL events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"merge_with_ttl_timeout"),": the minimum delay in seconds before repeating a merge with delete TTL. The default is 14400 seconds (4 hours)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"merge_with_recompression_ttl_timeout"),": the minimum delay in seconds before repeating a merge with recompression TTL (rules that roll up data before deleting). Default value: 14400 seconds (4 hours).")),(0,o.kt)("p",null,"So by default, your TTL rules will be applied to your table at least once every 4 hours. Just modify the settings above if you need your TTL rules applied more frequently."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Not a great solution (or one that we recommend you use frequently), but you can also force a merge using ",(0,o.kt)("inlineCode",{parentName:"p"},"OPTIMIZE"),":"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example1 FINAL\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," initializes an unscheduled merge of the parts of your table, and ",(0,o.kt)("inlineCode",{parentName:"p"},"FINAL")," forces a reoptimization if your table is already a single part.")),(0,o.kt)("h2",{id:"removing-rows"},"Removing Rows"),(0,o.kt)("p",null,"To remove entire rows from a table after a certain amount of time, define the TTL rule at the table level:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE customers (\ntimestamp DateTime,\nname String,\nbalance Int32,\naddress String\n)\nENGINE = MergeTree\nORDER BY timestamp\nTTL timestamp + INTERVAL 12 HOUR\n")),(0,o.kt)("h2",{id:"removing-columns"},"Removing Columns"),(0,o.kt)("p",null,"Instead of deleting the entire row, suppose you want just the balance and address columns to expire. Let's modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"customers")," table and add a TTL for both columns to be 2 hours:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE customers\nMODIFY COLUMN balance Int32 TTL timestamp + INTERVAL 2 HOUR,\nMODIFY COLUMN address String TTL timestamp + INTERVAL 2 HOUR\n")),(0,o.kt)("h2",{id:"implementing-a-rollup"},"Implementing a Rollup"),(0,o.kt)("p",null,"Suppose we want to delete rows after a certain amount of time but hang on to some of the data for reporting purposes. We don't want all the details - just a few aggregated results of historical data. This can be implemented by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause to your ",(0,o.kt)("inlineCode",{parentName:"p"},"TTL")," expression, along with some columns in your table to store the aggregated results."),(0,o.kt)("p",null,"Suppose in the following ",(0,o.kt)("inlineCode",{parentName:"p"},"hits")," table we want to delete old rows, but hang on to the sum and maximum of the ",(0,o.kt)("inlineCode",{parentName:"p"},"hits")," columns before removing the rows. We will need a field to store those values in, and we will need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause to the ",(0,o.kt)("inlineCode",{parentName:"p"},"TTL")," clause that rolls up the sum and maximum:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hits (\n   timestamp DateTime,\n   id String,\n   hits Int32,\n   max_hits Int32 DEFAULT hits,\n   sum_hits Int64 DEFAULT hits\n)\nENGINE = MergeTree\nPRIMARY KEY (id, toStartOfDay(timestamp), timestamp)\nTTL timestamp + INTERVAL 1 DAY\n    GROUP BY id, toStartOfDay(timestamp)\n    SET\n        max_hits = max(max_hits),\n        sum_hits = sum(sum_hits);\n")),(0,o.kt)("p",null,"Some notes on the ",(0,o.kt)("inlineCode",{parentName:"p"},"hits")," table:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"GROUP BY")," columns in the ",(0,o.kt)("inlineCode",{parentName:"li"},"TTL")," clause must be a prefix of the ",(0,o.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY"),", and we want to group our results by the start of the day. Therefore, ",(0,o.kt)("inlineCode",{parentName:"li"},"toStartOfDay(timestamp)")," was added to the primary key"),(0,o.kt)("li",{parentName:"ul"},"We added two fields to store the aggregated results: ",(0,o.kt)("inlineCode",{parentName:"li"},"max_hits")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"sum_hits")),(0,o.kt)("li",{parentName:"ul"},"Setting the default value of ",(0,o.kt)("inlineCode",{parentName:"li"},"max_hits")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"sum_hits")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"hits")," is necessary for our logic to work, based on how the ",(0,o.kt)("inlineCode",{parentName:"li"},"SET")," clause is defined")),(0,o.kt)("h2",{id:"implementing-a-hotwarmcold-architecture"},"Implementing a hot/warm/cold architecture"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are using ClickHouse Cloud, the steps in the lesson are not applicable. You do not need to worry about moving old data around in ClickHouse Cloud.")),(0,o.kt)("p",null,"A common practice when working with large amounts of data is to move that data around as it gets older. Here are the steps for implementing a hot/warm/cold architecture in ClickHouse using the ",(0,o.kt)("inlineCode",{parentName:"p"},"TO DISK")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TO VOLUME")," clauses of the ",(0,o.kt)("inlineCode",{parentName:"p"},"TTL")," command. (By the way, it doesn't have to be a hot and cold thing - you can use TTL to move data around for whatever use case you have.)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"TO DISK")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"TO VOLUME")," options refer to the names of disks or volumes defined in your ClickHouse configuration files. Create a new file named ",(0,o.kt)("inlineCode",{parentName:"li"},"my_system.xml")," (or any file name) that defines your disks, then define volumes that use your disks.  Place the XML file in ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/clickhouse-server/config.d/")," to have the configuration applied to your system:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <default>\n            </default>\n           <hot_disk>\n              <path>./hot/</path>\n           </hot_disk>\n           <warm_disk>\n              <path>./warm/</path>\n           </warm_disk>\n           <cold_disk>\n              <path>./cold/</path>\n           </cold_disk>\n        </disks>\n        <policies>\n            <default>\n                <volumes>\n                    <default>\n                        <disk>default</disk>\n                    </default>\n                    <hot_volume>\n                        <disk>hot_disk</disk>\n                    </hot_volume>\n                    <warm_volume>\n                        <disk>warm_disk</disk>\n                    </warm_volume>\n                    <cold_volume>\n                        <disk>cold_disk</disk>\n                    </cold_volume>\n                </volumes>\n            </default>\n        </policies>\n    </storage_configuration>\n</clickhouse>\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"The configuration above refers to three disks that point to folders that ClickHouse can read from and write to. Volumes can contain one or more disks - we defined a volume for each of the three disks. Let's view the disks:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, path, free_space, total_space\nFROM system.disks\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500free_space\u2500\u252c\u2500\u2500total_space\u2500\u2510\n\u2502 cold_disk   \u2502 ./data/cold/   \u2502 179143311360 \u2502 494384795648 \u2502\n\u2502 default     \u2502 ./             \u2502 179143311360 \u2502 494384795648 \u2502\n\u2502 hot_disk    \u2502 ./data/hot/    \u2502 179143311360 \u2502 494384795648 \u2502\n\u2502 medium_disk \u2502 ./data/medium/ \u2502 179143311360 \u2502 494384795648 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"And\u2026let's verify the volumes:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    volume_name,\n    disks\nFROM system.storage_policies\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500volume_name\u2500\u252c\u2500disks\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 default     \u2502 ['default']   \u2502\n\u2502 hot_volume  \u2502 ['hot_disk']  \u2502\n\u2502 warm_volume \u2502 ['warm_disk'] \u2502\n\u2502 cold_volume \u2502 ['cold_disk'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Now we will add a ",(0,o.kt)("inlineCode",{parentName:"li"},"TTL")," rule that moves the data between the hot, warm and cold volumes:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE my_table\n   MODIFY TTL\n      trade_date TO VOLUME 'hot_volume',\n      trade_date + INTERVAL 2 YEAR TO VOLUME 'warm_volume',\n      trade_date + INTERVAL 4 YEAR TO VOLUME 'cold_volume';\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"The new ",(0,o.kt)("inlineCode",{parentName:"li"},"TTL")," rule should materialize, but you can force it to make sure:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE my_table\n    MATERIALIZE TTL\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Verify your data has moved to its expected disks using the ",(0,o.kt)("inlineCode",{parentName:"li"},"system.parts")," table:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"Using the system.parts table, view which disks the parts are on for the crypto_prices table:\n\nSELECT\n    name,\n    disk_name\nFROM system.parts\nWHERE (table = 'my_table') AND (active = 1)\n")),(0,o.kt)("p",null,"The response will look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500disk_name\u2500\u2510\n\u2502 all_1_3_1_5 \u2502 warm_disk \u2502\n\u2502 all_2_2_0   \u2502 hot_disk  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}p.isMDXComponent=!0}}]);