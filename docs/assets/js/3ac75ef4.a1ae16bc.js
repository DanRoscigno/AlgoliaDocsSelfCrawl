"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[4436],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},67740:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),o=(a(67294),a(3905));const s={toc:[]},r="wrapper";function i(e){let{components:t,...i}=e;return(0,o.kt)(r,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To connect to ClickHouse with HTTP(S) you need this information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The HOST and PORT: typically, the port is 8443 when using TLS or 8123 when not using TLS.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The DATABASE NAME: out of the box, there is a database named ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", use the name of the database that you want to connect to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The USERNAME and PASSWORD: out of the box, the username is ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),". Use the username appropriate for your use case."))),(0,o.kt)("p",null,"The details for your ClickHouse Cloud service are available in the ClickHouse Cloud console.  Select the service that you will connect to and click ",(0,o.kt)("strong",{parentName:"p"},"Connect"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ClickHouse Cloud service connect button",src:a(51523).Z,width:"939",height:"474"})),(0,o.kt)("p",null,"Choose ",(0,o.kt)("strong",{parentName:"p"},"HTTPS"),", and the details are available in an example ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ClickHouse Cloud HTTPS connection details",src:a(5814).Z,width:"586",height:"470"})),(0,o.kt)("p",null,"If you are using self-managed ClickHouse, the connection details are set by your ClickHouse administrator."))}i.isMDXComponent=!0},32731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),s=a(67740);const r={sidebar_label:"Superset",sidebar_position:198,slug:"/en/connect-a-ui/superset-and-clickhouse",keywords:["clickhouse","superset","connect","integrate","ui"],description:"Apache Superset is an open-source data exploration and visualization platform."},i="Connect Superset to ClickHouse",l={unversionedId:"en/integrations/data-visualization/superset-and-clickhouse",id:"en/integrations/data-visualization/superset-and-clickhouse",title:"Connect Superset to ClickHouse",description:"Apache Superset is an open-source data exploration and visualization platform.",source:"@site/docs/en/integrations/data-visualization/superset-and-clickhouse.md",sourceDirName:"en/integrations/data-visualization",slug:"/en/connect-a-ui/superset-and-clickhouse",permalink:"/AlgoliaDocsSelfCrawl/en/connect-a-ui/superset-and-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-visualization/superset-and-clickhouse.md",tags:[],version:"current",sidebarPosition:198,frontMatter:{sidebar_label:"Superset",sidebar_position:198,slug:"/en/connect-a-ui/superset-and-clickhouse",keywords:["clickhouse","superset","connect","integrate","ui"],description:"Apache Superset is an open-source data exploration and visualization platform."}},c={},p=[{value:"Goal",id:"goal",level:2},{value:"1. Gather your connection details",id:"1-gather-your-connection-details",level:2},{value:"2. Install the Driver",id:"2-install-the-driver",level:2},{value:"3. Connect Superset to ClickHouse",id:"3-connect-superset-to-clickhouse",level:2},{value:"4. Add a Dataset",id:"4-add-a-dataset",level:2},{value:"5.  Creating charts and a dashboard in Superset",id:"5--creating-charts-and-a-dashboard-in-superset",level:2},{value:"Related Content",id:"related-content",level:2}],d={toc:p},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-superset-to-clickhouse"},"Connect Superset to ClickHouse"),(0,o.kt)("a",{href:"https://superset.apache.org/",target:"_blank"},"Apache Superset")," is an open-source data exploration and visualization platform written in Python. Superset connects to ClickHouse using a Python driver provided by ClickHouse. Let's see how it works...",(0,o.kt)("h2",{id:"goal"},"Goal"),(0,o.kt)("p",null,"In this guide you will build a dashboard in Superset with data from a ClickHouse database.  The dashboard will look like this:"),(0,o.kt)("img",{src:a(71089).Z,class:"image",alt:"New Dashboard"}),(0,o.kt)("p",null),(0,o.kt)("admonition",{title:"Add some data",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you do not have a dataset to work with you can add one of the examples.  This guide uses the ",(0,o.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/getting-started/example-datasets/uk-price-paid"},"UK Price Paid")," dataset, so you might choose that one.  There are several others to look at in the same documentation category.")),(0,o.kt)("h2",{id:"1-gather-your-connection-details"},"1. Gather your connection details"),(0,o.kt)(s.ZP,{mdxType:"ConnectionDetails"}),(0,o.kt)("h2",{id:"2-install-the-driver"},"2. Install the Driver"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Superset uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-connect")," driver to connect to ClickHouse. The details of ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-connect")," are at ",(0,o.kt)("a",{href:"https://pypi.org/project/clickhouse-connect/",target:"_blank"},(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/clickhouse-connect/"},"https://pypi.org/project/clickhouse-connect/"))," and it can be installed with the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install clickhouse-connect \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start (or restart) Superset."))),(0,o.kt)("h2",{id:"3-connect-superset-to-clickhouse"},"3. Connect Superset to ClickHouse"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within Superset, select ",(0,o.kt)("strong",{parentName:"p"},"Data")," from the top menu and then ",(0,o.kt)("strong",{parentName:"p"},"Databases")," from the drop-down menu. Add a new database by clicking the ",(0,o.kt)("strong",{parentName:"p"},"+ Database")," button:"),(0,o.kt)("img",{src:a(2410).Z,class:"image",alt:"Add a new database"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the first step, select ",(0,o.kt)("strong",{parentName:"p"},"ClickHouse Connect")," as the type of database:"),(0,o.kt)("img",{src:a(65595).Z,class:"image",alt:"Select ClickHouse"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the second step:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set SSL on or off.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter the connection information that you collected earlier")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specify the ",(0,o.kt)("strong",{parentName:"p"},"DISPLAY NAME"),": this can be any name you prefer. If you will be connecting to multiple ClickHouse databases then make the name more descriptive."),(0,o.kt)("img",{src:a(8129).Z,class:"image",alt:"Test the connection"}))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"CONNECT")," and then ",(0,o.kt)("strong",{parentName:"li"},"FINISH")," buttons to complete the setup wizard, and you should see your database in the list of databases.")),(0,o.kt)("h2",{id:"4-add-a-dataset"},"4. Add a Dataset"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To interact with your ClickHouse data with Superset, you need to define a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"dataset")),". From the top menu in Superset, select ",(0,o.kt)("strong",{parentName:"p"},"Data"),", then ",(0,o.kt)("strong",{parentName:"p"},"Datasets")," from the drop-down menu. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the button for adding a dataset. Select your new database as the datasource and you should see the tables defined in your database:"),(0,o.kt)("img",{src:a(1011).Z,class:"image",alt:"New dataset"}))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"ADD")," button at the bottom of the dialog window and your table appears in the list of datasets. You are ready to build a dashboard and analyze your ClickHouse data!")),(0,o.kt)("h2",{id:"5--creating-charts-and-a-dashboard-in-superset"},"5.  Creating charts and a dashboard in Superset"),(0,o.kt)("p",null,"If you are familiar with Superset, then you will feel right at home with this next section. If you are new to Superset, well...it's like a lot of the other cool visualization tools out there in the world - it doesn't take long to get started, but the details and nuances get learned over time as you use the tool. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You start with a dashboard. From the top menu in Superset, select ",(0,o.kt)("strong",{parentName:"p"},"Dashboards"),". Click the button in the upper-right to add a new dashboard. The following dashboard is named ",(0,o.kt)("strong",{parentName:"p"},"UK property prices"),":"),(0,o.kt)("img",{src:a(13057).Z,class:"image",alt:"New dashboard"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To create a new chart, select ",(0,o.kt)("strong",{parentName:"p"},"Charts")," from the top menu and click the button to add a new chart. You will be shown a lot of options. The following example shows a ",(0,o.kt)("strong",{parentName:"p"},"Pie Chart")," chart using the ",(0,o.kt)("strong",{parentName:"p"},"uk_price_paid")," dataset from the ",(0,o.kt)("strong",{parentName:"p"},"CHOOSE A DATASET")," drop-down:"),(0,o.kt)("img",{src:a(96270).Z,class:"image",alt:"New chart"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Superset pie charts need a ",(0,o.kt)("strong",{parentName:"p"},"Dimension")," and a ",(0,o.kt)("strong",{parentName:"p"},"Metric"),", the rest of the settings are optional.  You can pick your own fields for the dimension and metric, this example uses the ClickHouse field ",(0,o.kt)("inlineCode",{parentName:"p"},"district")," as the dimension and ",(0,o.kt)("inlineCode",{parentName:"p"},"AVG(price)")," as the metric."),(0,o.kt)("img",{src:a(76288).Z,class:"image",alt:"The SUM metric"}),(0,o.kt)("img",{src:a(98244).Z,class:"image",alt:"The SUM metric"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you prefer donut charts over pie, then you can set that and other options  under ",(0,o.kt)("strong",{parentName:"p"},"CUSTOMIZE"),":"),(0,o.kt)("img",{src:a(45681).Z,class:"image",alt:"Add Chart to Dashboard"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"SAVE")," button to save the chart, then select ",(0,o.kt)("strong",{parentName:"p"},"UK property prices")," under the ",(0,o.kt)("strong",{parentName:"p"},"ADD TO DASHBOARD")," drop-down, then ",(0,o.kt)("strong",{parentName:"p"},"SAVE & GO TO DASHBOARD")," saves the chart and adds it to the dashboard:"),(0,o.kt)("img",{src:a(97778).Z,class:"image",alt:"Add Chart to Dashboard"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"That's it. Building dashboards in Superset based on data in ClickHouse opens up a whole world of blazing fast data analytics!"),(0,o.kt)("img",{src:a(71089).Z,class:"image",alt:"New Dashboard"}))),(0,o.kt)("h2",{id:"related-content"},"Related Content"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Blog: ",(0,o.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/visualizing-data-with-superset"},"Visualizing Data with ClickHouse - Part 2 - Superset"))))}h.isMDXComponent=!0},2410:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/superset_01-b375dc667020baf9e8afc89927fd75ca.png"},65595:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/superset_02-4c32bae678c1c8cbfa2e6d69ec9e693b.png"},8129:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/superset_03-be574f74c11c7b49af79e5b42694f62d.png"},1011:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/superset_04-edb64a65bcf32ac156811e7d96e411b8.png"},13057:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/superset_05-88879b215d5c217179d8aa6bfad34b85.png"},96270:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/superset_06-31c3daf5d88b57a6c36acc624e655c2f.png"},76288:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/superset_08-e115c0083500fbcdea0413033418e513.png"},98244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/superset_09-fe7876cbfc15e4aabd3e0ccac60d6863.png"},45681:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/superset_10-1a55d64d050d8f8d02eed4be8c1798b7.png"},97778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/superset_11-06c768546f4f918ad743cf32a4a3f265.png"},71089:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/superset_12-b03495a8fd323e23346ed72e107f17fc.png"},51523:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-connect-button-e2247559831d9d3549387ddfb0deee9b.png"},5814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connection-details-https-6ceceb667ac0b41ab35a2ad390b7e2dc.png"}}]);