"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[51135],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4985:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={slug:"/en/intro",sidebar_label:"What is ClickHouse?",sidebar_position:1},o="What Is ClickHouse?",i={unversionedId:"en/coverpages/what-is-clickhouse",id:"en/coverpages/what-is-clickhouse",title:"What Is ClickHouse?",description:"ClickHouse\xae is a column-oriented SQL database management system (DBMS) for online analytical processing (OLAP). It is available as both an open-source software and a cloud offering.",source:"@site/docs/en/coverpages/what-is-clickhouse.md",sourceDirName:"en/coverpages",slug:"/en/intro",permalink:"/AlgoliaDocsSelfCrawl/en/intro",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/coverpages/what-is-clickhouse.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/en/intro",sidebar_label:"What is ClickHouse?",sidebar_position:1},sidebar:"english",next:{title:"Cloud Service",permalink:"/AlgoliaDocsSelfCrawl/en/about-us/cloud"}},s={},u=[{value:"What is OLAP?",id:"what-is-olap",level:2},{value:"Column-Oriented vs Row-Oriented Databases",id:"column-oriented-vs-row-oriented-databases",level:2},{value:"Why Column-Oriented Databases Work Better in the OLAP Scenario",id:"why-column-oriented-databases-work-better-in-the-olap-scenario",level:2},{value:"Why is ClickHouse so fast?",id:"why-is-clickhouse-so-fast",level:2},{value:"Processing Analytical Queries in Real Time",id:"processing-analytical-queries-in-real-time",level:2},{value:"Key Properties of OLAP Scenario",id:"key-properties-of-olap-scenario",level:3},{value:"Input/output",id:"inputoutput",level:3},{value:"CPU",id:"cpu",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-clickhouse"},"What Is ClickHouse?"),(0,r.kt)("p",null,"ClickHouse\xae is a column-oriented SQL database management system (DBMS) for online analytical processing (OLAP). It is available as both an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse"},"open-source software")," and a ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"cloud offering"),"."),(0,r.kt)("h2",{id:"what-is-olap"},"What is OLAP?"),(0,r.kt)("p",null,"OLAP scenarios require real-time responses on top of large datasets for complex analytical queries with the following characteristics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Datasets can be massive - billions or trillions of rows"),(0,r.kt)("li",{parentName:"ul"},"Data is organized in tables that contain many columns"),(0,r.kt)("li",{parentName:"ul"},"Only a few columns are selected to answer any particular query"),(0,r.kt)("li",{parentName:"ul"},"Results must be returned in milliseconds or seconds")),(0,r.kt)("h2",{id:"column-oriented-vs-row-oriented-databases"},"Column-Oriented vs Row-Oriented Databases"),(0,r.kt)("p",null,"In a row-oriented DBMS, data is stored in rows, with all the values related to a row physically stored next to each other."),(0,r.kt)("p",null,"In a column-oriented DBMS, data is stored in columns, with values from the same columns stored together."),(0,r.kt)("h2",{id:"why-column-oriented-databases-work-better-in-the-olap-scenario"},"Why Column-Oriented Databases Work Better in the OLAP Scenario"),(0,r.kt)("p",null,"Column-oriented databases are better suited to OLAP scenarios: they are at least 100 times faster in processing most queries. The reasons are explained in detail below, but the fact is easier to demonstrate visually:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Row-oriented DBMS")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Row-oriented",src:a(63809).Z+"#",width:"630",height:"258"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Column-oriented DBMS")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Column-oriented",src:a(96139).Z+"#",width:"630",height:"258"})),(0,r.kt)("p",null,"See the difference?"),(0,r.kt)("p",null,"The rest of this article explains why column-oriented databases work well for these scenarios, and why ClickHouse in particular ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/about-us/performance"},"outperforms")," others in this category."),(0,r.kt)("h2",{id:"why-is-clickhouse-so-fast"},"Why is ClickHouse so fast?"),(0,r.kt)("p",null,"ClickHouse uses all available system resources to their full potential to process each analytical query as fast as possible. This is made possible due to a unique combination of analytical capabilities and attention to the low-level details required to implement the fastest OLAP database."),(0,r.kt)("p",null,"Helpful articles to dive deeper into this topic include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/about-us/performance"},"ClickHouse Performance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/about-us/distinctive-features"},"Distinctive Features of ClickHouse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/faq/general/why-clickhouse-is-so-fast"},"FAQ: Why is ClickHouse so fast?"))),(0,r.kt)("h2",{id:"processing-analytical-queries-in-real-time"},"Processing Analytical Queries in Real Time"),(0,r.kt)("p",null,"In a row-oriented DBMS, data is stored in this order:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Row"),(0,r.kt)("th",{parentName:"tr",align:null},"WatchID"),(0,r.kt)("th",{parentName:"tr",align:null},"JavaEnable"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"GoodEvent"),(0,r.kt)("th",{parentName:"tr",align:null},"EventTime"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#0"),(0,r.kt)("td",{parentName:"tr",align:null},"89354350662"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Investor Relations"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2016-05-18 05:19:20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#1"),(0,r.kt)("td",{parentName:"tr",align:null},"90329509958"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Contact us"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2016-05-18 08:10:20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#2"),(0,r.kt)("td",{parentName:"tr",align:null},"89953706054"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Mission"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2016-05-18 07:38:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"#N"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2026"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2026"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2026"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2026"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2026")))),(0,r.kt)("p",null,"In other words, all the values related to a row are physically stored next to each other."),(0,r.kt)("p",null,"Examples of a row-oriented DBMS are MySQL, Postgres, and MS SQL Server."),(0,r.kt)("p",null,"In a column-oriented DBMS, data is stored like this:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Row:"),(0,r.kt)("th",{parentName:"tr",align:null},"#0"),(0,r.kt)("th",{parentName:"tr",align:null},"#1"),(0,r.kt)("th",{parentName:"tr",align:null},"#2"),(0,r.kt)("th",{parentName:"tr",align:null},"#N"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WatchID:"),(0,r.kt)("td",{parentName:"tr",align:null},"89354350662"),(0,r.kt)("td",{parentName:"tr",align:null},"90329509958"),(0,r.kt)("td",{parentName:"tr",align:null},"89953706054"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2026")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JavaEnable:"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2026")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Title:"),(0,r.kt)("td",{parentName:"tr",align:null},"Investor Relations"),(0,r.kt)("td",{parentName:"tr",align:null},"Contact us"),(0,r.kt)("td",{parentName:"tr",align:null},"Mission"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2026")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GoodEvent:"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2026")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EventTime:"),(0,r.kt)("td",{parentName:"tr",align:null},"2016-05-18 05:19:20"),(0,r.kt)("td",{parentName:"tr",align:null},"2016-05-18 08:10:20"),(0,r.kt)("td",{parentName:"tr",align:null},"2016-05-18 07:38:00"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2026")))),(0,r.kt)("p",null,"These examples only show the order that data is arranged in. The values from different columns are stored separately, and data from the same column is stored together."),(0,r.kt)("p",null,"Examples of a column-oriented DBMS: Vertica, Paraccel (Actian Matrix and Amazon Redshift), Sybase IQ, Exasol, Infobright, InfiniDB, MonetDB (VectorWise and Actian Vector), LucidDB, SAP HANA, Google Dremel, Google PowerDrill, Druid, and kdb+."),(0,r.kt)("p",null,"Different orders for storing data are better suited to different scenarios. The data access scenario refers to what queries are made, how often, and in what proportion; how much data is read for each type of query \u2013 rows, columns, and bytes; the relationship between reading and updating data; the working size of the data and how locally it is used; whether transactions are used, and how isolated they are; requirements for data replication and logical integrity; requirements for latency and throughput for each type of query, and so on."),(0,r.kt)("p",null,"The higher the load on the system, the more important it is to customize the system set up to match the requirements of the usage scenario, and the more fine grained this customization becomes. There is no system that is equally well-suited to significantly different scenarios. If a system is adaptable to a wide set of scenarios, under a high load, the system will handle all the scenarios equally poorly, or will work well for just one or few of possible scenarios."),(0,r.kt)("h3",{id:"key-properties-of-olap-scenario"},"Key Properties of OLAP Scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tables are \u201cwide,\u201d meaning they contain a large number of columns."),(0,r.kt)("li",{parentName:"ul"},"Datasets are large and queries require high throughput when processing a single query (up to billions of rows per second per server)."),(0,r.kt)("li",{parentName:"ul"},"Column values are fairly small: numbers and short strings (for example, 60 bytes per URL)."),(0,r.kt)("li",{parentName:"ul"},"Queries extract a large number of rows, but only a small subset of columns."),(0,r.kt)("li",{parentName:"ul"},"For simple queries, latencies around 50ms are allowed."),(0,r.kt)("li",{parentName:"ul"},"There is one large table per query; all tables are small, except for one."),(0,r.kt)("li",{parentName:"ul"},"A query result is significantly smaller than the source data. In other words, data is filtered or aggregated, so the result fits in a single server\u2019s RAM."),(0,r.kt)("li",{parentName:"ul"},"Queries are relatively rare (usually hundreds of queries per server or less per second)."),(0,r.kt)("li",{parentName:"ul"},"Inserts happen in fairly large batches (",">"," 1000 rows), not by single rows."),(0,r.kt)("li",{parentName:"ul"},"Transactions are not necessary.")),(0,r.kt)("p",null,"It is easy to see that the OLAP scenario is very different from other popular scenarios (such as OLTP or Key-Value access). So it does not make sense to try to use OLTP or a Key-Value DB for processing analytical queries if you want to get decent performance. For example, if you try to use MongoDB or Redis for analytics, you will get very poor performance compared to OLAP databases."),(0,r.kt)("h3",{id:"inputoutput"},"Input/output"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For an analytical query, only a small number of table columns need to be read. In a column-oriented database, you can read just the data you need. For example, if you need 5 columns out of 100, you can expect a 20-fold reduction in I/O."),(0,r.kt)("li",{parentName:"ol"},"Since data is read in packets, it is easier to compress. Data in columns is also easier to compress. This further reduces the I/O volume."),(0,r.kt)("li",{parentName:"ol"},"Due to the reduced I/O, more data fits in the system cache.")),(0,r.kt)("p",null,"For example, the query \u201ccount the number of records for each advertising platform\u201d requires reading one \u201cadvertising platform ID\u201d column, which takes up 1 byte uncompressed. If most of the traffic was not from advertising platforms, you can expect at least 10-fold compression of this column. When using a quick compression algorithm, data decompression is possible at a speed of at least several gigabytes of uncompressed data per second. In other words, this query can be processed at a speed of approximately several billion rows per second on a single server. This speed is actually achieved in practice."),(0,r.kt)("h3",{id:"cpu"},"CPU"),(0,r.kt)("p",null,"Since executing a query requires processing a large number of rows, it helps to dispatch all operations for entire vectors instead of for separate rows, or to implement the query engine so that there is almost no dispatching cost. If you do not do this, with any half-decent disk subsystem, the query interpreter inevitably stalls the CPU. It makes sense to both store data in columns and process it, when possible, by columns."),(0,r.kt)("p",null,"There are two ways to do this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A vector engine. All operations are written for vectors, instead of for separate values. This means you do not need to call operations very often, and dispatching costs are negligible. Operation code contains an optimized internal cycle.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Code generation. The code generated for the query has all the indirect calls in it."))),(0,r.kt)("p",null,"This is not done in row-oriented databases, because it does not make sense when running simple queries. However, there are exceptions. For example, MemSQL uses code generation to reduce latency when processing SQL queries. (For comparison, analytical DBMSs require optimization of throughput, not latency.)"),(0,r.kt)("p",null,"Note that for CPU efficiency, the query language must be declarative (SQL or MDX), or at least a vector (J, K). The query should only contain implicit loops, allowing for optimization."))}d.isMDXComponent=!0},96139:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/column-oriented-d082e49b7743d4ded32c7952bfdb028f.gif"},63809:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/row-oriented-3e6fd5aa48e3075202d242b4799da8fa.gif"}}]);