"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[46755],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={slug:"/en/about-us/performance",sidebar_label:"Performance",sidebar_position:70,description:"ClickHouse shows the best performance with the highest throughput for long queries and the lowest latency on short queries"},s="Performance",i={unversionedId:"en/about-us/performance",id:"en/about-us/performance",title:"Performance",description:"ClickHouse shows the best performance with the highest throughput for long queries and the lowest latency on short queries",source:"@site/docs/en/about-us/performance.md",sourceDirName:"en/about-us",slug:"/en/about-us/performance",permalink:"/AlgoliaDocsSelfCrawl/en/about-us/performance",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/about-us/performance.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{slug:"/en/about-us/performance",sidebar_label:"Performance",sidebar_position:70,description:"ClickHouse shows the best performance with the highest throughput for long queries and the lowest latency on short queries"},sidebar:"english",previous:{title:"Adopters",permalink:"/AlgoliaDocsSelfCrawl/en/about-us/adopters"},next:{title:"Cloud Quick Start",permalink:"/AlgoliaDocsSelfCrawl/en/quick-start"}},c={},l=[{value:"Throughput for a Single Large Query",id:"throughput-for-a-single-large-query",level:2},{value:"Latency When Processing Short Queries",id:"latency-when-processing-short-queries",level:2},{value:"Throughput When Processing a Large Quantity of Short Queries",id:"throughput-when-processing-a-large-quantity-of-short-queries",level:2},{value:"Performance When Inserting Data",id:"performance-when-inserting-data",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"performance"},"Performance"),(0,o.kt)("p",null,"According to the ",(0,o.kt)("a",{parentName:"p",href:"https://benchmark.clickhouse.com/"},"benchmark results")," of an open source benchmark for analytical databases (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickBench"},"ClickBench"),"), ClickHouse shows the best performance - both the highest throughput for long queries and the lowest latency on short queries - for comparable operating scenarios among systems of its class that were available for testing. "),(0,o.kt)("p",null,"Numerous independent benchmarks came to similar conclusions. They are not difficult to find using an internet search, or you can see ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/#independent-benchmarks"},"our small collection of related links"),"."),(0,o.kt)("h2",{id:"throughput-for-a-single-large-query"},"Throughput for a Single Large Query"),(0,o.kt)("p",null,"Throughput can be measured in rows per second or megabytes per second. If the data is placed in the page cache, a query that is not too complex is processed on modern hardware at a speed of approximately 2-10 GB/s of uncompressed data on a single server (for the most straightforward cases, the speed may reach 30 GB/s). If data is not placed in the page cache, the speed depends on the disk subsystem and the data compression rate. For example, if the disk subsystem allows reading data at 400 MB/s, and the data compression rate is 3, the speed is expected to be around 1.2 GB/s. To get the speed in rows per second, divide the speed in bytes per second by the total size of the columns used in the query. For example, if 10 bytes of columns are extracted, the speed is expected to be around 100-200 million rows per second."),(0,o.kt)("p",null,"The processing speed increases almost linearly for distributed processing, but only if the number of rows resulting from aggregation or sorting is not too large."),(0,o.kt)("h2",{id:"latency-when-processing-short-queries"},"Latency When Processing Short Queries"),(0,o.kt)("p",null,"If a query uses a primary key and does not select too many columns and rows to process (hundreds of thousands), you can expect less than 50 milliseconds of latency (single digits of milliseconds in the best case) if data is placed in the page cache. Otherwise, latency is mostly dominated by the number of seeks. If you use rotating disk drives, for a system that is not overloaded, the latency can be estimated with this formula: ",(0,o.kt)("inlineCode",{parentName:"p"},"seek time (10 ms) * count of columns queried * count of data parts"),"."),(0,o.kt)("h2",{id:"throughput-when-processing-a-large-quantity-of-short-queries"},"Throughput When Processing a Large Quantity of Short Queries"),(0,o.kt)("p",null,"ClickHouse can handle very high query per second (QPS) rates, compared to traditional data warehouses. On a single server, it can run sustain hundreds to thousands QPS, depending on query complexity. We recommend starting at a maximum of 100 queries per second, and tuning this number as needed from there."),(0,o.kt)("h2",{id:"performance-when-inserting-data"},"Performance When Inserting Data"),(0,o.kt)("p",null,"We recommend inserting data in packets of at least 1000 rows, or no more than a single request per second. When inserting to a MergeTree table from a tab-separated dump, the insertion speed can be from 50 to 200 MB/s. If the inserted rows are around 1 KB in size, the speed will be from 50,000 to 200,000 rows per second. If the rows are small, the performance can be higher in rows per second (on Banner System data -",(0,o.kt)("inlineCode",{parentName:"p"},">")," 500,000 rows per second; on Graphite data -",(0,o.kt)("inlineCode",{parentName:"p"},">")," 1,000,000 rows per second). To improve performance, you can make multiple INSERT queries in parallel, which scales linearly."))}h.isMDXComponent=!0}}]);