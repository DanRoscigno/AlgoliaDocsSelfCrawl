"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[96917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_label:"Workflow Samples",sidebar_position:5,slug:"/en/integrations/emqx/workflow-samples",description:"Introduction to Workflow Samples"},r="Saving Data into ClickHouse",l={unversionedId:"en/integrations/data-ingestion/emqx/workflow-samples",id:"en/integrations/data-ingestion/emqx/workflow-samples",title:"Saving Data into ClickHouse",description:"Introduction to Workflow Samples",source:"@site/docs/en/integrations/data-ingestion/emqx/workflow-samples.md",sourceDirName:"en/integrations/data-ingestion/emqx",slug:"/en/integrations/emqx/workflow-samples",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/emqx/workflow-samples",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/emqx/workflow-samples.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Workflow Samples",sidebar_position:5,slug:"/en/integrations/emqx/workflow-samples",description:"Introduction to Workflow Samples"},sidebar:"english",previous:{title:"EMQX Cloud Data Integration",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/emqx/emqx-cloud-data-integration"},next:{title:"Overview",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/data-visualization"}},s={},u=[{value:"Publish MQTT messages to EMQX Cloud",id:"publish-mqtt-messages-to-emqx-cloud",level:2},{value:"View rules monitoring",id:"view-rules-monitoring",level:2},{value:"Check the data persisted",id:"check-the-data-persisted",level:2},{value:"Summary",id:"summary",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"saving-data-into-clickhouse"},"Saving Data into ClickHouse"),(0,a.kt)("p",null,"We will simulate temperature and humidity data and report these data to EMQX Cloud via the MQTT X and then use the EMQX Cloud Data Integrations to save the data into ClickHouse Cloud."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"work-flow",src:n(14488).Z,width:"1209",height:"559"})),(0,a.kt)("h2",{id:"publish-mqtt-messages-to-emqx-cloud"},"Publish MQTT messages to EMQX Cloud"),(0,a.kt)("p",null,"You can use any MQTT client or SDK to publish the message. In this tutorial, we will use ",(0,a.kt)("a",{parentName:"p",href:"https://mqttx.app/"},"MQTT X"),", a user friendly MQTT client application provided by EMQ."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mqttx-overview",src:n(41690).Z,width:"2880",height:"1800"})),(0,a.kt)("p",null,'Click "New Connection" on MQTTX and fill the connection form:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Connection name. Use whatever name you want."),(0,a.kt)("li",{parentName:"ul"},"Host: the MQTT broker connection address. You can get it from the EMQX Cloud overview page."),(0,a.kt)("li",{parentName:"ul"},"Port: MQTT broker connection port. You can get it from the EMQX Cloud overview page."),(0,a.kt)("li",{parentName:"ul"},'Username/Password: Use the credential created above, which should be "emqx" and "xxxxxx" in this tutorial.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mqttx-new",src:n(95275).Z,width:"2174",height:"1696"})),(0,a.kt)("p",null,'Click the "Connect" button on top right and the connection should be established.'),(0,a.kt)("p",null,'Now you can send messages to the MQTT broker using this tool.\nInputs:\n1.\xa0Set payload format to "JSON".\n2.\xa0Set to topic: temp_hum/emqx (the topic we just set in the rule)\n3.\xa0JSON body:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{"temp": 23.1, "hum": 0.68}\n')),(0,a.kt)("p",null,"Click the send button on the right. You can change the temperature value and send more data to MQTT broker."),(0,a.kt)("p",null,"The data sent to EMQX Cloud should be processed by the rule engine and inserted into ClickHouse Cloud automatically."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mqttx-publish",src:n(60193).Z,width:"2880",height:"1800"})),(0,a.kt)("h2",{id:"view-rules-monitoring"},"View rules monitoring"),(0,a.kt)("p",null,"Check the rule monitoring and add one to the number of success."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rule_monitor",src:n(3458).Z,width:"2866",height:"1066"})),(0,a.kt)("h2",{id:"check-the-data-persisted"},"Check the data persisted"),(0,a.kt)("p",null,"Now it\u2019s time to take a look at the data on the ClickHouse Cloud. Ideally, the data you send using MQTTX will go to the EMQX Cloud and persist to the ClickHouse Cloud\u2019s database with the help of native data integration."),(0,a.kt)("p",null,"You can connect to the SQL console on ClickHouse Cloud panel or use any client tool to fetch data from your ClickHouse. In this tutorial, we used the SQL console.\nBy executing the SQL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"SELECT * FROM emqx.temp_hum;\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"clickhouse_result",src:n(21026).Z,width:"3830",height:"900"})),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"You didn\u2019t write any piece of code, and now have the MQTT data move from EMQX cloud to ClickHouse Cloud. With EMQX Cloud and ClickHouse Cloud, you don\u2019t need to manage the infra and just focus on writing you IoT applications with data storied securely in ClickHouse Cloud."))}p.isMDXComponent=!0},21026:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/clickhouse_result-7cf4d417506c56fd7dc878ebaec82295.png"},95275:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mqttx-new-1b07b89d531e69b155d7255f6f5c77a6.png"},41690:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mqttx-overview-2c5accf252aa9e7da8047333b35aff3f.png"},60193:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mqttx-publish-a2d4811d42fbef881973fbc8ad19e3f9.png"},3458:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/rule_monitor-b4ab523139d05c934a4d81b337e9ca9f.png"},14488:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/work-flow-e2030e23eb18a198d03394ca140085b4.png"}}]);