"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[30831],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var l=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=l.createContext({}),u=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=i,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?l.createElement(k,n(n({ref:t},p),{},{components:a})):l.createElement(k,n({ref:t},p))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,n[1]=o;for(var u=2;u<r;u++)n[u]=a[u];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=a(87462),i=(a(67294),a(3905));const r={slug:"/en/interfaces/third-party/gui",sidebar_position:28,sidebar_label:"Visual Interfaces"},n="Visual Interfaces from Third-party Developers",o={unversionedId:"en/interfaces/third-party/gui",id:"en/interfaces/third-party/gui",title:"Visual Interfaces from Third-party Developers",description:"Open-Source",source:"@site/docs/en/interfaces/third-party/gui.md",sourceDirName:"en/interfaces/third-party",slug:"/en/interfaces/third-party/gui",permalink:"/docs/en/interfaces/third-party/gui",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/interfaces/third-party/gui.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{slug:"/en/interfaces/third-party/gui",sidebar_position:28,sidebar_label:"Visual Interfaces"},sidebar:"english",previous:{title:"Integrations",permalink:"/docs/en/interfaces/third-party/integrations"},next:{title:"Proxies",permalink:"/docs/en/interfaces/third-party/proxy"}},s={},u=[{value:"Open-Source",id:"open-source",level:2},{value:"Tabix",id:"tabix",level:3},{value:"HouseOps",id:"houseops",level:3},{value:"LightHouse",id:"lighthouse",level:3},{value:"Redash",id:"redash",level:3},{value:"Grafana",id:"grafana",level:3},{value:"qryn (#qryn)",id:"qryn-qryn",level:3},{value:"DBeaver",id:"dbeaver",level:3},{value:"clickhouse-cli",id:"clickhouse-cli",level:3},{value:"clickhouse-flamegraph",id:"clickhouse-flamegraph",level:3},{value:"clickhouse-plantuml",id:"clickhouse-plantuml",level:3},{value:"xeus-clickhouse",id:"xeus-clickhouse",level:3},{value:"MindsDB Studio",id:"mindsdb",level:3},{value:"DBM",id:"dbm",level:3},{value:"Bytebase",id:"bytebase",level:3},{value:"Zeppelin-Interpreter-for-ClickHouse",id:"zeppelin-interpreter-for-clickhouse",level:3},{value:"ClickCat",id:"clickcat",level:3},{value:"ClickVisual",id:"clickvisual",level:3},{value:"ClickHouse-Mate",id:"clickmate",level:3},{value:"Uptrace",id:"uptrace",level:3},{value:"Commercial",id:"commercial",level:2},{value:"DataGrip",id:"datagrip",level:3},{value:"Yandex DataLens",id:"yandex-datalens",level:3},{value:"Holistics Software",id:"holistics-software",level:3},{value:"Looker",id:"looker",level:3},{value:"SeekTable",id:"seektable",level:3},{value:"Chadmin",id:"chadmin",level:3},{value:"TABLUM.IO",id:"tablum_io",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"visual-interfaces-from-third-party-developers"},"Visual Interfaces from Third-party Developers"),(0,i.kt)("h2",{id:"open-source"},"Open-Source"),(0,i.kt)("h3",{id:"tabix"},"Tabix"),(0,i.kt)("p",null,"Web interface for ClickHouse in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tabixio/tabix"},"Tabix")," project."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Works with ClickHouse directly from the browser, without the need to install additional software."),(0,i.kt)("li",{parentName:"ul"},"Query editor with syntax highlighting."),(0,i.kt)("li",{parentName:"ul"},"Auto-completion of commands."),(0,i.kt)("li",{parentName:"ul"},"Tools for graphical analysis of query execution."),(0,i.kt)("li",{parentName:"ul"},"Colour scheme options.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tabix.io/doc/"},"Tabix documentation"),"."),(0,i.kt)("h3",{id:"houseops"},"HouseOps"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/HouseOps/HouseOps"},"HouseOps")," is a UI/IDE for OSX, Linux and Windows."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Query builder with syntax highlighting. View the response in a table or JSON view."),(0,i.kt)("li",{parentName:"ul"},"Export query results as CSV or JSON."),(0,i.kt)("li",{parentName:"ul"},"List of processes with descriptions. Write mode. Ability to stop (",(0,i.kt)("inlineCode",{parentName:"li"},"KILL"),") a process."),(0,i.kt)("li",{parentName:"ul"},"Database graph. Shows all tables and their columns with additional information."),(0,i.kt)("li",{parentName:"ul"},"A quick view of the column size."),(0,i.kt)("li",{parentName:"ul"},"Server configuration.")),(0,i.kt)("p",null,"The following features are planned for development:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Database management."),(0,i.kt)("li",{parentName:"ul"},"User management."),(0,i.kt)("li",{parentName:"ul"},"Real-time data analysis."),(0,i.kt)("li",{parentName:"ul"},"Cluster monitoring."),(0,i.kt)("li",{parentName:"ul"},"Cluster management."),(0,i.kt)("li",{parentName:"ul"},"Monitoring replicated and Kafka tables.")),(0,i.kt)("h3",{id:"lighthouse"},"LightHouse"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/VKCOM/lighthouse"},"LightHouse")," is a lightweight web interface for ClickHouse."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Table list with filtering and metadata."),(0,i.kt)("li",{parentName:"ul"},"Table preview with filtering and sorting."),(0,i.kt)("li",{parentName:"ul"},"Read-only queries execution.")),(0,i.kt)("h3",{id:"redash"},"Redash"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/getredash/redash"},"Redash")," is a platform for data visualization."),(0,i.kt)("p",null,"Supports for multiple data sources including ClickHouse, Redash can join results of queries from different data sources into one final dataset."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Powerful editor of queries."),(0,i.kt)("li",{parentName:"ul"},"Database explorer."),(0,i.kt)("li",{parentName:"ul"},"Visualization tools, that allow you to represent data in different forms.")),(0,i.kt)("h3",{id:"grafana"},"Grafana"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/plugins/grafana-clickhouse-datasource/"},"Grafana")," is a platform for monitoring and visualization."),(0,i.kt)("p",null,'"Grafana allows you to query, visualize, alert on and understand your metrics no matter where they are stored. Create, explore, and share dashboards with your team and foster a data driven culture. Trusted and loved by the community" ',"\u2014"," grafana.com."),(0,i.kt)("p",null,"ClickHouse datasource plugin provides a support for ClickHouse as a backend database."),(0,i.kt)("h3",{id:"qryn-qryn"},"qryn (#qryn)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://metrico.in"},"qryn")," is a polyglot, high-performance observability stack for ClickHouse ",(0,i.kt)("em",{parentName:"p"},"(formerly cLoki)")," with native Grafana integrations allowing users to ingest and analyze logs, metrics and telemetry traces from any agent supporting Loki/LogQL, Prometheus/PromQL, OTLP/Tempo, Elastic, InfluxDB and many more."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Built in Explore UI and LogQL CLI for querying, extracting and visualizing data"),(0,i.kt)("li",{parentName:"ul"},"Native Grafana APIs support for querying, processing, ingesting, tracing and alerting without plugins"),(0,i.kt)("li",{parentName:"ul"},"Powerful pipeline to dynamically search, filter and extract data from logs, events, traces and beyond"),(0,i.kt)("li",{parentName:"ul"},"Ingestion and PUSH APIs transparently compatible with LogQL, PromQL, InfluxDB, Elastic and many more"),(0,i.kt)("li",{parentName:"ul"},"Ready to use with Agents such as Promtail, Grafana-Agent, Vector, Logstash, Telegraf and many others")),(0,i.kt)("h3",{id:"dbeaver"},"DBeaver"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dbeaver.io/"},"DBeaver")," - universal desktop database client with ClickHouse support."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Query development with syntax highlight and autocompletion."),(0,i.kt)("li",{parentName:"ul"},"Table list with filters and metadata search."),(0,i.kt)("li",{parentName:"ul"},"Table data preview."),(0,i.kt)("li",{parentName:"ul"},"Full-text search.")),(0,i.kt)("p",null,"By default, DBeaver does not connect using a session (the CLI for example does). If you require session support (for example to set settings for your session), edit the driver connection properties and set ",(0,i.kt)("inlineCode",{parentName:"p"},"session_id")," to a random string (it uses the http connection under the hood). Then you can use any setting from the query window."),(0,i.kt)("h3",{id:"clickhouse-cli"},"clickhouse-cli"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hatarist/clickhouse-cli"},"clickhouse-cli")," is an alternative command-line client for ClickHouse, written in Python 3."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Autocompletion."),(0,i.kt)("li",{parentName:"ul"},"Syntax highlighting for the queries and data output."),(0,i.kt)("li",{parentName:"ul"},"Pager support for the data output."),(0,i.kt)("li",{parentName:"ul"},"Custom PostgreSQL-like commands.")),(0,i.kt)("h3",{id:"clickhouse-flamegraph"},"clickhouse-flamegraph"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Slach/clickhouse-flamegraph"},"clickhouse-flamegraph")," is a specialized tool to visualize the ",(0,i.kt)("inlineCode",{parentName:"p"},"system.trace_log")," as ",(0,i.kt)("a",{parentName:"p",href:"http://www.brendangregg.com/flamegraphs.html"},"flamegraph"),"."),(0,i.kt)("h3",{id:"clickhouse-plantuml"},"clickhouse-plantuml"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/clickhouse-plantuml/"},"cickhouse-plantuml")," is a script to generate ",(0,i.kt)("a",{parentName:"p",href:"https://plantuml.com/"},"PlantUML")," diagram of tables\u2019 schemes."),(0,i.kt)("h3",{id:"xeus-clickhouse"},"xeus-clickhouse"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wangfenjin/xeus-clickhouse"},"xeus-clickhouse")," is a Jupyter kernal for ClickHouse, which supports query CH data using SQL in Jupyter."),(0,i.kt)("h3",{id:"mindsdb"},"MindsDB Studio"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mindsdb.com/"},"MindsDB")," is an open-source AI layer for databases including ClickHouse that allows you to effortlessly develop, train and deploy state-of-the-art machine learning models. MindsDB Studio(GUI) allows you to train new models from database, interpret predictions made by the model, identify potential data biases, and evaluate and visualize model accuracy using the Explainable AI function to adapt and tune your Machine Learning models faster."),(0,i.kt)("h3",{id:"dbm"},"DBM"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dbm.incubator.edurt.io/"},"DBM")," DBM is a visual management tool for ClickHouse!"),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support query history (pagination, clear all, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Support selected sql clauses query"),(0,i.kt)("li",{parentName:"ul"},"Support terminating query"),(0,i.kt)("li",{parentName:"ul"},"Support table management (metadata, delete, preview)"),(0,i.kt)("li",{parentName:"ul"},"Support database management (delete, create)"),(0,i.kt)("li",{parentName:"ul"},"Support custom query"),(0,i.kt)("li",{parentName:"ul"},"Support multiple data sources management(connection test, monitoring)"),(0,i.kt)("li",{parentName:"ul"},"Support monitor (processor, connection, query)"),(0,i.kt)("li",{parentName:"ul"},"Support migrate data")),(0,i.kt)("h3",{id:"bytebase"},"Bytebase"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://bytebase.com"},"Bytebase")," is a web-based, open source schema change and version control tool for teams. It supports various databases including ClickHouse."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Schema review between developers and DBAs."),(0,i.kt)("li",{parentName:"ul"},"Database-as-Code, version control the schema in VCS such GitLab and trigger the deployment upon code commit."),(0,i.kt)("li",{parentName:"ul"},"Streamlined deployment with per-environment policy."),(0,i.kt)("li",{parentName:"ul"},"Full migration history."),(0,i.kt)("li",{parentName:"ul"},"Schema drift detection."),(0,i.kt)("li",{parentName:"ul"},"Backup and restore."),(0,i.kt)("li",{parentName:"ul"},"RBAC.")),(0,i.kt)("h3",{id:"zeppelin-interpreter-for-clickhouse"},"Zeppelin-Interpreter-for-ClickHouse"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/SiderZhang/Zeppelin-Interpreter-for-ClickHouse"},"Zeppelin-Interpreter-for-ClickHouse")," is a ",(0,i.kt)("a",{parentName:"p",href:"https://zeppelin.apache.org"},"Zeppelin")," interpreter for ClickHouse. Compared with JDBC interpreter, it can provide better timeout control for long running queries."),(0,i.kt)("h3",{id:"clickcat"},"ClickCat"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/clickcat-project/ClickCat"},"ClickCat")," is a friendly user interface that lets you search, explore and visualize your ClickHouse Data."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An online SQL editor which can run your SQL code without any installing."),(0,i.kt)("li",{parentName:"ul"},"You can observe all processes and mutations. For those unfinished processes, you can kill them in ui."),(0,i.kt)("li",{parentName:"ul"},"The Metrics contains Cluster Analysis,Data Analysis,Query Analysis.")),(0,i.kt)("h3",{id:"clickvisual"},"ClickVisual"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickvisual.gocn.vip/"},"ClickVisual")," ClickVisual is a lightweight open source log query, analysis and alarm visualization platform."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supports one-click creation of analysis log libraries"),(0,i.kt)("li",{parentName:"ul"},"Supports log collection configuration management"),(0,i.kt)("li",{parentName:"ul"},"Supports user-defined index configuration"),(0,i.kt)("li",{parentName:"ul"},"Supports alarm configuration"),(0,i.kt)("li",{parentName:"ul"},"Support permission granularity to library and table permission configuration")),(0,i.kt)("h3",{id:"clickmate"},"ClickHouse-Mate"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/metrico/clickhouse-mate"},"ClickHouse-Mate")," is an angular web client + user interface to search and explore data in ClickHouse."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ClickHouse SQL Query autocompletion"),(0,i.kt)("li",{parentName:"ul"},"Fast Database and Table tree navigation"),(0,i.kt)("li",{parentName:"ul"},"Advanced result Filtering and Sorting"),(0,i.kt)("li",{parentName:"ul"},"Inline ClickHouse SQL documentation"),(0,i.kt)("li",{parentName:"ul"},"Query Presets and History"),(0,i.kt)("li",{parentName:"ul"},"100% browser based, no server/backend")),(0,i.kt)("p",null,"The client is available for instant usage through github pages: ",(0,i.kt)("a",{parentName:"p",href:"https://metrico.github.io/clickhouse-mate/"},"https://metrico.github.io/clickhouse-mate/")),(0,i.kt)("h3",{id:"uptrace"},"Uptrace"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/uptrace/uptrace"},"Uptrace")," is an APM tool that provides distributed tracing and metrics powered by OpenTelemetry and ClickHouse."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://uptrace.dev/opentelemetry/distributed-tracing.html"},"OpenTelemetry tracing"),", metrics, and logs."),(0,i.kt)("li",{parentName:"ul"},"Email/Slack/PagerDuty notifications using AlertManager."),(0,i.kt)("li",{parentName:"ul"},"SQL-like query language to aggregate spans."),(0,i.kt)("li",{parentName:"ul"},"Promql-like language to query metrics."),(0,i.kt)("li",{parentName:"ul"},"Pre-built metrics dashboards."),(0,i.kt)("li",{parentName:"ul"},"Multiple users/projects via YAML config.")),(0,i.kt)("h2",{id:"commercial"},"Commercial"),(0,i.kt)("h3",{id:"datagrip"},"DataGrip"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/datagrip/"},"DataGrip")," is a database IDE from JetBrains with dedicated support for ClickHouse. It is also embedded in other IntelliJ-based tools: PyCharm, IntelliJ IDEA, GoLand, PhpStorm and others."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Very fast code completion."),(0,i.kt)("li",{parentName:"ul"},"ClickHouse syntax highlighting."),(0,i.kt)("li",{parentName:"ul"},"Support for features specific to ClickHouse, for example, nested columns, table engines."),(0,i.kt)("li",{parentName:"ul"},"Data Editor."),(0,i.kt)("li",{parentName:"ul"},"Refactorings."),(0,i.kt)("li",{parentName:"ul"},"Search and Navigation.")),(0,i.kt)("h3",{id:"yandex-datalens"},"Yandex DataLens"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloud.yandex.ru/services/datalens"},"Yandex DataLens")," is a service of data visualization and analytics."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wide range of available visualizations, from simple bar charts to complex dashboards."),(0,i.kt)("li",{parentName:"ul"},"Dashboards could be made publicly available."),(0,i.kt)("li",{parentName:"ul"},"Support for multiple data sources including ClickHouse."),(0,i.kt)("li",{parentName:"ul"},"Storage for materialized data based on ClickHouse.")),(0,i.kt)("p",null,"DataLens is ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.yandex.com/docs/datalens/pricing"},"available for free")," for low-load projects, even for commercial use."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.yandex.com/docs/datalens/"},"DataLens documentation"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.yandex.com/docs/solutions/datalens/data-from-ch-visualization"},"Tutorial")," on visualizing data from a ClickHouse database.")),(0,i.kt)("h3",{id:"holistics-software"},"Holistics Software"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.holistics.io/"},"Holistics")," is a full-stack data platform and business intelligence tool."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automated email, Slack and Google Sheet schedules of reports."),(0,i.kt)("li",{parentName:"ul"},"SQL editor with visualizations, version control, auto-completion, reusable query components and dynamic filters."),(0,i.kt)("li",{parentName:"ul"},"Embedded analytics of reports and dashboards via iframe."),(0,i.kt)("li",{parentName:"ul"},"Data preparation and ETL capabilities."),(0,i.kt)("li",{parentName:"ul"},"SQL data modelling support for relational mapping of data.")),(0,i.kt)("h3",{id:"looker"},"Looker"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://looker.com"},"Looker")," is a data platform and business intelligence tool with support for 50+ database dialects including ClickHouse. Looker is available as a SaaS platform and self-hosted. Users can use Looker via the browser to explore data, build visualizations and dashboards, schedule reports, and share their insights with colleagues. Looker provides a rich set of tools to embed these features in other applications, and an API\nto integrate data with other applications."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Easy and agile development using LookML, a language which supports curated\n",(0,i.kt)("a",{parentName:"li",href:"https://looker.com/platform/data-modeling"},"Data Modeling")," to support report writers and end-users."),(0,i.kt)("li",{parentName:"ul"},"Powerful workflow integration via Looker\u2019s ",(0,i.kt)("a",{parentName:"li",href:"https://looker.com/platform/actions"},"Data Actions"),".")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.looker.com/setup-and-management/database-config/clickhouse"},"How to configure ClickHouse in Looker.")),(0,i.kt)("h3",{id:"seektable"},"SeekTable"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seektable.com"},"SeekTable")," is a self-service BI tool for data exploration and operational reporting. It is available both as a cloud service and a self-hosted version. Reports from SeekTable may be embedded into any web-app."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Business users-friendly reports builder."),(0,i.kt)("li",{parentName:"ul"},"Powerful report parameters for SQL filtering and report-specific query customizations."),(0,i.kt)("li",{parentName:"ul"},"Can connect to ClickHouse both with a native TCP/IP endpoint and a HTTP(S) interface (2 different drivers)."),(0,i.kt)("li",{parentName:"ul"},"It is possible to use all power of ClickHouse SQL dialect in dimensions/measures definitions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seektable.com/help/web-api-integration"},"Web API")," for automated reports generation."),(0,i.kt)("li",{parentName:"ul"},"Supports reports development flow with account data ",(0,i.kt)("a",{parentName:"li",href:"https://www.seektable.com/help/self-hosted-backup-restore"},"backup/restore"),"; data models (cubes) / reports configuration is a human-readable XML and can be stored under version control system.")),(0,i.kt)("p",null,"SeekTable is ",(0,i.kt)("a",{parentName:"p",href:"https://www.seektable.com/help/cloud-pricing"},"free")," for personal/individual usage."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seektable.com/help/clickhouse-pivot-table"},"How to configure ClickHouse connection in SeekTable.")),(0,i.kt)("h3",{id:"chadmin"},"Chadmin"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/bun4uk/chadmin"},"Chadmin")," is a simple UI where you can visualize your currently running queries on your ClickHouse cluster and info about them and kill them if you want."),(0,i.kt)("h3",{id:"tablum_io"},"TABLUM.IO"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tablum.io/"},"TABLUM.IO")," \u2014 an online query and analytics tool for ETL and visualization. It allows connecting to ClickHouse, query data via a versatile SQL console as well as to load data from static files and 3rd party services. TABLUM.IO can visualize data results as charts and tables."),(0,i.kt)("p",null,"Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ETL: data loading from popular databases, local and remote files, API invocations."),(0,i.kt)("li",{parentName:"ul"},"Versatile SQL console with syntax highlight and visual query builder."),(0,i.kt)("li",{parentName:"ul"},"Data visualization as charts and tables."),(0,i.kt)("li",{parentName:"ul"},"Data materialization and sub-queries."),(0,i.kt)("li",{parentName:"ul"},"Data reporting to Slack, Telegram or email."),(0,i.kt)("li",{parentName:"ul"},"Data pipelining via proprietary API."),(0,i.kt)("li",{parentName:"ul"},"Data export in JSON, CSV, SQL, HTML formats."),(0,i.kt)("li",{parentName:"ul"},"Web-based interface.")),(0,i.kt)("p",null,"TABLUM.IO can be run as a self-hosted solution (as a docker image) or in the cloud.\nLicense: ",(0,i.kt)("a",{parentName:"p",href:"https://tablum.io/pricing"},"commercial")," product with 3-month free period."),(0,i.kt)("p",null,"Try it out for free ",(0,i.kt)("a",{parentName:"p",href:"https://tablum.io/try"},"in the cloud"),".\nLearn more about the product at ",(0,i.kt)("a",{parentName:"p",href:"https://tablum.io/"},"TABLUM.IO")))}d.isMDXComponent=!0}}]);