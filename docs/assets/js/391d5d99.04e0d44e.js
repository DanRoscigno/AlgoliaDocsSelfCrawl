"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[873],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67740:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={toc:[]},l="wrapper";function o(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,n.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To connect to ClickHouse with HTTP(S) you need this information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The HOST and PORT: typically, the port is 8443 when using TLS or 8123 when not using TLS.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The DATABASE NAME: out of the box, there is a database named ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),", use the name of the database that you want to connect to.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The USERNAME and PASSWORD: out of the box, the username is ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),". Use the username appropriate for your use case."))),(0,r.kt)("p",null,"The details for your ClickHouse Cloud service are available in the ClickHouse Cloud console.  Select the service that you will connect to and click ",(0,r.kt)("strong",{parentName:"p"},"Connect"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ClickHouse Cloud service connect button",src:a(51523).Z,width:"939",height:"474"})),(0,r.kt)("p",null,"Choose ",(0,r.kt)("strong",{parentName:"p"},"HTTPS"),", and the details are available in an example ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ClickHouse Cloud HTTPS connection details",src:a(5814).Z,width:"586",height:"470"})),(0,r.kt)("p",null,"If you are using self-managed ClickHouse, the connection details are set by your ClickHouse administrator."))}o.isMDXComponent=!0},75795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(67740);const l={sidebar_label:"NiFi",sidebar_position:12,keywords:["clickhouse","nifi","connect","integrate","etl","data integration"],slug:"/en/integrations/nifi-and-clickhouse",description:"Stream data into ClickHouse using NiFi data pipelines"},o="Connect Apache NiFi to ClickHouse",s={unversionedId:"en/integrations/data-ingestion/etl-tools/nifi-and-clickhouse",id:"en/integrations/data-ingestion/etl-tools/nifi-and-clickhouse",title:"Connect Apache NiFi to ClickHouse",description:"Stream data into ClickHouse using NiFi data pipelines",source:"@site/docs/en/integrations/data-ingestion/etl-tools/nifi-and-clickhouse.md",sourceDirName:"en/integrations/data-ingestion/etl-tools",slug:"/en/integrations/nifi-and-clickhouse",permalink:"/docs/en/integrations/nifi-and-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/etl-tools/nifi-and-clickhouse.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_label:"NiFi",sidebar_position:12,keywords:["clickhouse","nifi","connect","integrate","etl","data integration"],slug:"/en/integrations/nifi-and-clickhouse",description:"Stream data into ClickHouse using NiFi data pipelines"},sidebar:"english",previous:{title:"Airbyte",permalink:"/docs/en/integrations/airbyte-and-clickhouse"},next:{title:"dbt",permalink:"/docs/en/integrations/dbt"}},c={},p=[{value:"1. Gather your connection details",id:"1-gather-your-connection-details",level:2},{value:"2. Download and run Apache NiFi",id:"2-download-and-run-apache-nifi",level:2},{value:"3. Download the ClickHouse JDBC driver",id:"3-download-the-clickhouse-jdbc-driver",level:2},{value:"4. Add DBCPConnectionPool Controller Service and configure its properties",id:"4-add-dbcpconnectionpool-controller-service-and-configure-its-properties",level:2},{value:"5. Read from a table using the ExecuteSQL processor",id:"5-read-from-a-table-using-the-executesql-processor",level:2},{value:"6. Write to a table using MergeRecord and PutDatabaseRecord processor",id:"6-write-to-a-table-using-mergerecord-and-putdatabaserecord-processor",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-apache-nifi-to-clickhouse"},"Connect Apache NiFi to ClickHouse"),(0,r.kt)("a",{href:"https://nifi.apache.org/",target:"_blank"},"Apache NiFi")," is an open-source workflow management software designed to automate data flow between software systems. It allows the creation of ETL data pipelines and is shipped with more than 300 data processors. This step-by-step tutorial shows how to connect Apache NiFi to ClickHouse as both a source and destination, and to load a sample dataset.",(0,r.kt)("h2",{id:"1-gather-your-connection-details"},"1. Gather your connection details"),(0,r.kt)(i.ZP,{mdxType:"ConnectionDetails"}),(0,r.kt)("h2",{id:"2-download-and-run-apache-nifi"},"2. Download and run Apache NiFi"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For a new setup, download the binary from ",(0,r.kt)("a",{parentName:"li",href:"https://nifi.apache.org/download.html"},"https://nifi.apache.org/download.html")," and start by running ",(0,r.kt)("inlineCode",{parentName:"li"},"./bin/nifi.sh start"))),(0,r.kt)("h2",{id:"3-download-the-clickhouse-jdbc-driver"},"3. Download the ClickHouse JDBC driver"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit the ",(0,r.kt)("a",{href:"https://github.com/ClickHouse/clickhouse-java/releases",target:"_blank"},"ClickHouse JDBC driver release page")," on GitHub and look for  the latest JDBC release version"),(0,r.kt)("li",{parentName:"ol"},'In the release version, click on "Show all xx assets" and look for the JAR file containing the keyword "shaded", for example, ',(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-jdbc-0.4.0-shaded.jar")),(0,r.kt)("li",{parentName:"ol"},"Place the JAR file in a folder accessible by Apache NiFi and take note of the absolute path")),(0,r.kt)("h2",{id:"4-add-dbcpconnectionpool-controller-service-and-configure-its-properties"},"4. Add DBCPConnectionPool Controller Service and configure its properties"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'To configure a Controller Service in Apache NiFi, visit the NiFi Flow Configuration page by clicking on the "gear" button'),(0,r.kt)("img",{src:a(33994).Z,class:"image",alt:"Nifi Flow Configuration",style:{width:"50%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the Controller Services tab and add a new Controller Service by clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," button at the top right"),(0,r.kt)("img",{src:a(1834).Z,class:"image",alt:"Add Controller Service",style:{width:"80%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for ",(0,r.kt)("inlineCode",{parentName:"p"},"DBCPConnectionPool"),' and click on the "Add" button'),(0,r.kt)("img",{src:a(45347).Z,class:"image",alt:"Search for DBCPConnectionPool",style:{width:"80%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'The newly added DBCPConnectionPool will be in an Invalid state by default. Click on the "gear" button to start configuring'),(0,r.kt)("img",{src:a(39969).Z,class:"image",alt:"Nifi Flow Configuration",style:{width:"80%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Under the "Properties" section, input the following values'),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database Connection URL"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc:ch:https://HOSTNAME:8443/default?ssl=true"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace HOSTNAME in the connection URL accordingly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database Driver Class Name"),(0,r.kt)("td",{parentName:"tr",align:null},"com.clickhouse.jdbc.ClickHouseDriver"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database Driver Location(s)"),(0,r.kt)("td",{parentName:"tr",align:null},"/etc/nifi/nifi-X.XX.X/lib/clickhouse-jdbc-0.X.X-patchXX-shaded.jar"),(0,r.kt)("td",{parentName:"tr",align:null},"Absolute path to the ClickHouse JDBC driver JAR file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database User"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse password"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'In the Settings section, change the name of the Controller Service to "ClickHouse JDBC" for easy reference'),(0,r.kt)("img",{src:a(40405).Z,class:"image",alt:"Nifi Flow Configuration",style:{width:"80%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Activate the DBCPConnectionPool Controller Service by clicking on the "lightning\u201d button and then the "Enable" button'),(0,r.kt)("img",{src:a(60064).Z,class:"image",alt:"Nifi Flow Configuration",style:{width:"80%"}}),(0,r.kt)("br",null),(0,r.kt)("img",{src:a(18353).Z,class:"image",alt:"Nifi Flow Configuration",style:{width:"80%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the Controller Services tab and ensure that the Controller Service is enabled"),(0,r.kt)("img",{src:a(85381).Z,class:"image",alt:"Nifi Flow Configuration",style:{width:"80%"}}))),(0,r.kt)("h2",{id:"5-read-from-a-table-using-the-executesql-processor"},"5. Read from a table using the ExecuteSQL processor"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add an \u200b\u200bExecuteSQL processor, along with the appropriate upstream and downstream processors"),(0,r.kt)("img",{src:a(68271).Z,class:"image",alt:"\u200b\u200bExecuteSQL processor",style:{width:"50%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Under the "Properties\u201d section of the \u200b\u200bExecuteSQL processor, input the following values'),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database Connection Pooling Service"),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse JDBC"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the Controller Service configured for ClickHouse")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL select query"),(0,r.kt)("td",{parentName:"tr",align:null},"SELECT * FROM system.metrics"),(0,r.kt)("td",{parentName:"tr",align:null},"Input your query here"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the \u200b\u200bExecuteSQL processor"),(0,r.kt)("img",{src:a(5903).Z,class:"image",alt:"\u200b\u200bExecuteSQL processor",style:{width:"80%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To confirm that the query has been processed successfully, inspect one of the FlowFile in the output queue"),(0,r.kt)("img",{src:a(99472).Z,class:"image",alt:"\u200b\u200bExecuteSQL processor",style:{width:"80%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Switch view to "formatted\u201d to view the result of the output FlowFile'),(0,r.kt)("img",{src:a(55341).Z,class:"image",alt:"\u200b\u200bExecuteSQL processor",style:{width:"80%"}}))),(0,r.kt)("h2",{id:"6-write-to-a-table-using-mergerecord-and-putdatabaserecord-processor"},"6. Write to a table using MergeRecord and PutDatabaseRecord processor"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To write multiple rows in a single insert, we first need to merge multiple records into a single record. This can be done using the MergeRecord processor")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Under the "Properties\u201d section of the MergeRecord processor, input the following values'),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Record Reader"),(0,r.kt)("td",{parentName:"tr",align:null},"JSONTreeReader"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the appropriate record reader")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Record Writer"),(0,r.kt)("td",{parentName:"tr",align:null},"JSONReadSetWriter"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the appropriate record writer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Minimum Number of Records"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"Change this to a higher number so that the minimum number of rows are merged to form a single record. Default to 1 row")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Number of Records"),(0,r.kt)("td",{parentName:"tr",align:null},"10000"),(0,r.kt)("td",{parentName:"tr",align:null},"Change this to a higher number than \u201cMinimum Number of Records\u201d. Default to 1,000 rows"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To confirm that multiple records are merged into one, examine the input and output of the MergeRecord processor. Note that the output is an array of multiple input records"),(0,r.kt)("p",{parentName:"li"},"Input"),(0,r.kt)("img",{src:a(37648).Z,class:"image",alt:"\u200b\u200bExecuteSQL processor",style:{width:"50%"}}),(0,r.kt)("p",{parentName:"li"},"Ouput"),(0,r.kt)("img",{src:a(28442).Z,class:"image",alt:"\u200b\u200bExecuteSQL processor",style:{width:"50%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Under the "Properties" section of the PutDatabaseRecord processor, input the following values'),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Record Reader"),(0,r.kt)("td",{parentName:"tr",align:null},"JSONTreeReader"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the appropriate record reader")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Generic"),(0,r.kt)("td",{parentName:"tr",align:null},"Leave as default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Statement Type"),(0,r.kt)("td",{parentName:"tr",align:null},"INSERT"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database Connection Pooling Service"),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse JDBC"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the ClickHouse controller service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Table Name"),(0,r.kt)("td",{parentName:"tr",align:null},"tbl"),(0,r.kt)("td",{parentName:"tr",align:null},"Input your table name here")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Translate Field Names"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'Set to "false" so that field names inserted must match the column name')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Batch Size"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of rows per insert. This value should not be lower than the value of \u201cMinimum Number of Records\u201d in MergeRecord processor"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'To confirm that each insert contains multiple rows, check that the row count in the table is incrementing by at least the value of "Minimum Number of Records\u201d defined in MergeRecord.'),(0,r.kt)("img",{src:a(68267).Z,class:"image",alt:"\u200b\u200bExecuteSQL processor",style:{width:"50%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Congratulations - you have successfully loaded your data into ClickHouse using Apache Nifi!"))))}m.isMDXComponent=!0},33994:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_01-65aa9859381fd37944cdc52b7189b619.png"},1834:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_02-8a6f35d47a4b2975f730572b3354ea3b.png"},45347:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_03-fb09e0903fd7a059565ce08880cbd844.png"},39969:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_04-3574b471671c6218d7ed70b82113805e.png"},40405:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_05-43a1a4c3bcb3d884afcefc43aca702bb.png"},60064:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_06-fa86c8a1503255a103ef42aca6010cb3.png"},18353:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_07-698f6ff89cd7983273db589a841cffc3.png"},85381:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_08-8a6f35d47a4b2975f730572b3354ea3b.png"},68271:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_09-fd615556242f0361c571127f24ae77e7.png"},5903:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_10-02b1daff3a547bb20515e49b01280ff5.png"},99472:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_11-804f6c411bd1318f2387c509fc8a2fca.png"},55341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_12-3407b86201eb7878a3e53cd742f1d25f.png"},37648:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_13-922d258cfc79ad24ccdb76d0ca6737d7.png"},28442:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_14-67dd52a63b593a377997cb966c10690c.png"},68267:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nifi_15-ceabe4024fb31ff44a47f3889d783ce9.png"},51523:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-connect-button-e2247559831d9d3549387ddfb0deee9b.png"},5814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connection-details-https-6ceceb667ac0b41ab35a2ad390b7e2dc.png"}}]);