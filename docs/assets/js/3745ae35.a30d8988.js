"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[21813],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const s={slug:"/en/faq/general/olap",title:"What is OLAP?",toc_hidden:!0,toc_priority:100},r="What Is OLAP?",i={unversionedId:"en/faq/general/olap",id:"en/faq/general/olap",title:"What is OLAP?",description:"what-is-olap}",source:"@site/docs/en/faq/general/olap.md",sourceDirName:"en/faq/general",slug:"/en/faq/general/olap",permalink:"/docs/en/faq/general/olap",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/general/olap.md",tags:[],version:"current",frontMatter:{slug:"/en/faq/general/olap",title:"What is OLAP?",toc_hidden:!0,toc_priority:100},sidebar:"english",previous:{title:"What does \u201c\u043d\u0435 \u0442\u043e\u0440\u043c\u043e\u0437\u0438\u0442\u201d mean?",permalink:"/docs/en/faq/general/ne-tormozit"},next:{title:"Who is using ClickHouse?",permalink:"/docs/en/faq/general/who-is-using-clickhouse"}},l={},c=[{value:"OLAP from the Business Perspective",id:"olap-from-the-business-perspective",level:2},{value:"OLAP from the Technical Perspective",id:"olap-from-the-technical-perspective",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-olap"},"What Is OLAP?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Online_analytical_processing"},"OLAP")," stands for Online Analytical Processing. It is a broad term that can be looked at from two perspectives: technical and business. But at the very high level, you can just read these words backward:"),(0,o.kt)("p",null,"Processing\n:   Some source data is processed\u2026"),(0,o.kt)("p",null,"Analytical\n:   \u2026to produce some analytical reports and insights\u2026"),(0,o.kt)("p",null,"Online\n:   \u2026in real-time."),(0,o.kt)("h2",{id:"olap-from-the-business-perspective"},"OLAP from the Business Perspective"),(0,o.kt)("p",null,"In recent years, business people started to realize the value of data. Companies who make their decisions blindly, more often than not fail to keep up with the competition. The data-driven approach of successful companies forces them to collect all data that might be remotely useful for making business decisions and need mechanisms to timely analyze them. Here\u2019s where OLAP database management systems (DBMS) come in."),(0,o.kt)("p",null,"In a business sense, OLAP allows companies to continuously plan, analyze, and report operational activities, thus maximizing efficiency, reducing expenses, and ultimately conquering the market share. It could be done either in an in-house system or outsourced to SaaS providers like web/mobile analytics services, CRM services, etc. OLAP is the technology behind many BI applications (Business Intelligence)."),(0,o.kt)("p",null,"ClickHouse is an OLAP database management system that is pretty often used as a backend for those SaaS solutions for analyzing domain-specific data. However, some businesses are still reluctant to share their data with third-party providers and an in-house data warehouse scenario is also viable."),(0,o.kt)("h2",{id:"olap-from-the-technical-perspective"},"OLAP from the Technical Perspective"),(0,o.kt)("p",null,"All database management systems could be classified into two groups: OLAP (Online ",(0,o.kt)("strong",{parentName:"p"},"Analytical")," Processing) and OLTP (Online ",(0,o.kt)("strong",{parentName:"p"},"Transactional")," Processing). Former focuses on building reports, each based on large volumes of historical data, but doing it not so frequently. While the latter usually handle a continuous stream of transactions, constantly modifying the current state of data."),(0,o.kt)("p",null,"In practice OLAP and OLTP are not categories, it\u2019s more like a spectrum. Most real systems usually focus on one of them but provide some solutions or workarounds if the opposite kind of workload is also desired. This situation often forces businesses to operate multiple storage systems integrated, which might be not so big deal but having more systems make it more expensive to maintain. So the trend of recent years is HTAP (",(0,o.kt)("strong",{parentName:"p"},"Hybrid Transactional/Analytical Processing"),") when both kinds of the workload are handled equally well by a single database management system."),(0,o.kt)("p",null,"Even if a DBMS started as a pure OLAP or pure OLTP, they are forced to move towards that HTAP direction to keep up with their competition. And ClickHouse is no exception, initially, it has been designed as ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/faq/general/why-clickhouse-is-so-fast"},"fast-as-possible OLAP system")," and it still does not have full-fledged transaction support, but some features like consistent read/writes and mutations for updating/deleting data had to be added."),(0,o.kt)("p",null,"The fundamental trade-off between OLAP and OLTP systems remains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To build analytical reports efficiently it\u2019s crucial to be able to read columns separately, thus most OLAP databases are ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/faq/general/columnar-database"},"columnar"),","),(0,o.kt)("li",{parentName:"ul"},"While storing columns separately increases costs of operations on rows, like append or in-place modification, proportionally to the number of columns (which can be huge if the systems try to collect all details of an event just in case). Thus, most OLTP systems store data arranged by rows.")))}d.isMDXComponent=!0}}]);