"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[60310],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),k=o,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},67740:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={toc:[]},i="wrapper";function l(e){let{components:t,...l}=e;return(0,o.kt)(i,(0,n.Z)({},r,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To connect to ClickHouse with HTTP(S) you need this information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The HOST and PORT: typically, the port is 8443 when using TLS or 8123 when not using TLS.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The DATABASE NAME: out of the box, there is a database named ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", use the name of the database that you want to connect to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The USERNAME and PASSWORD: out of the box, the username is ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),". Use the username appropriate for your use case."))),(0,o.kt)("p",null,"The details for your ClickHouse Cloud service are available in the ClickHouse Cloud console.  Select the service that you will connect to and click ",(0,o.kt)("strong",{parentName:"p"},"Connect"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ClickHouse Cloud service connect button",src:a(51523).Z,width:"939",height:"474"})),(0,o.kt)("p",null,"Choose ",(0,o.kt)("strong",{parentName:"p"},"HTTPS"),", and the details are available in an example ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ClickHouse Cloud HTTPS connection details",src:a(5814).Z,width:"586",height:"470"})),(0,o.kt)("p",null,"If you are using self-managed ClickHouse, the connection details are set by your ClickHouse administrator."))}l.isMDXComponent=!0},92932:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905)),r=a(67740);const i={sidebar_label:"Tableau",sidebar_position:205,slug:"/en/connect-a-ui/tableau-and-clickhouse",keywords:["clickhouse","tableau","connect","integrate","ui"],description:"Tableau can use ClickHouse databases and tables as a data source."},l="Connecting Tableau to ClickHouse",s={unversionedId:"en/integrations/data-visualization/tableau-and-clickhouse",id:"en/integrations/data-visualization/tableau-and-clickhouse",title:"Connecting Tableau to ClickHouse",description:"Tableau can use ClickHouse databases and tables as a data source.",source:"@site/docs/en/integrations/data-visualization/tableau-and-clickhouse.md",sourceDirName:"en/integrations/data-visualization",slug:"/en/connect-a-ui/tableau-and-clickhouse",permalink:"/docs/en/connect-a-ui/tableau-and-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-visualization/tableau-and-clickhouse.md",tags:[],version:"current",sidebarPosition:205,frontMatter:{sidebar_label:"Tableau",sidebar_position:205,slug:"/en/connect-a-ui/tableau-and-clickhouse",keywords:["clickhouse","tableau","connect","integrate","ui"],description:"Tableau can use ClickHouse databases and tables as a data source."},sidebar:"english",previous:{title:"Superset",permalink:"/docs/en/connect-a-ui/superset-and-clickhouse"},next:{title:"Overview",permalink:"/docs/en/integrations/migration/"}},u={},c=[{value:"How to connect",id:"how-to-connect",level:2},{value:"Configure a ClickHouse data source in Tableau",id:"configure-a-clickhouse-data-source-in-tableau",level:2},{value:"Building Visualizations in Tableau",id:"building-visualizations-in-tableau",level:2}],p={toc:c},d="wrapper";function k(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-tableau-to-clickhouse"},"Connecting Tableau to ClickHouse"),(0,o.kt)("p",null,"Tableau can use ClickHouse databases and tables as a data source. This requires a special JDBC driver to be downloaded and saved into a specific location where Tableau can find it."),(0,o.kt)("h2",{id:"how-to-connect"},"How to connect"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Gather your connection details"),(0,o.kt)(r.ZP,{mdxType:"ConnectionDetails"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download and install  ",(0,o.kt)("a",{href:"https://www.tableau.com/products/desktop/download",target:"_blank"},"Tableau desktop"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the latest version of the ANALYTIKA PLUS ",(0,o.kt)("a",{href:"https://github.com/analytikaplus/clickhouse-tableau-connector-jdbc/releases",target:"_blank"},"clickhouse-tableau-connector-jdbc")," TACO connector.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Store the TACO connector in the following folder (based on your OS):"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"macOS: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/Documents/My Tableau Repository/Connectors")),(0,o.kt)("li",{parentName:"ul"},"Windows: ",(0,o.kt)("inlineCode",{parentName:"li"},"C:\\Users[Windows User]\\Documents\\My Tableau Repository\\Connectors")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-tableau-connector-jdbc")," instructions to download the compatible version of ",(0,o.kt)("a",{href:"https://github.com/ClickHouse/clickhouse-java/releases/",target:"_blank"},"ClickHouse JDBC driver"),"."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you download the ",(0,o.kt)("strong",{parentName:"p"},"clickhouse-jdbc-x.x.x-shaded.jar")," JAR file.")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Store the JDBC driver in the following folder (based on your OS, if the folder doesn't exist you can create it):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"macOS: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/Library/Tableau/Drivers")),(0,o.kt)("li",{parentName:"ul"},"Windows: ",(0,o.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\Tableau\\Drivers")))),(0,o.kt)("li",{parentName:"ol"},"Configure a ClickHouse data source in Tableau and start building data visualizations!")),(0,o.kt)("h2",{id:"configure-a-clickhouse-data-source-in-tableau"},"Configure a ClickHouse data source in Tableau"),(0,o.kt)("p",null,"Now that you have the driver and connector in the appropriate folders on your machine, let's see how to define a data source in Tableau that connects to the ",(0,o.kt)("strong",{parentName:"p"},"TPCD")," database in ClickHouse."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start Tableau. (If you already had it running, then restart it.)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the left-side menu, click on ",(0,o.kt)("strong",{parentName:"p"},"More")," under the ",(0,o.kt)("strong",{parentName:"p"},"To a Server")," section. If everything worked properly, you should see ",(0,o.kt)("strong",{parentName:"p"},"ClickHouse (JDBC) by ANALYTIKA PLUS")," in the list of installed connectors:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"ClickHouse (JDBC) by ANALYTIKA PLUS",src:a(90729).Z,width:"1982",height:"1448"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"ClickHouse (JDBC) by ANALYTIKA PLUS"),"  and a dialog window pops up. Enter the following details:"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Setting"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Server"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"localhost"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Port"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"8123"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Database"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"default"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Username"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"default"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Password"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"leave blank"))))))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Your settings should look like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&quot;ClickHouse Settings&quot;",src:a(29437).Z,width:"511",height:"487"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Our ClickHouse database is named ",(0,o.kt)("strong",{parentName:"p"},"TPCD"),", but you must set the ",(0,o.kt)("strong",{parentName:"p"},"Database")," to ",(0,o.kt)("strong",{parentName:"p"},"default")," in the dialog above, then select ",(0,o.kt)("strong",{parentName:"p"},"TPCD")," for the ",(0,o.kt)("strong",{parentName:"p"},"Schema")," in the next step. (This is likely due to a bug in the connector, so this behavior could change, but for now you must use ",(0,o.kt)("strong",{parentName:"p"},"default")," as the database.)")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Sign In")," button and you should see a new Tableau workbook:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"&quot;New Workbook&quot;",src:a(77162).Z,width:"810",height:"451"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"TPCD")," from the ",(0,o.kt)("strong",{parentName:"p"},"Schema")," dropdown and you should see the list of tables in ",(0,o.kt)("strong",{parentName:"p"},"TPCD"),":"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"&quot;Select TPCD for the Schema&quot;",src:a(69254).Z,width:"719",height:"572"})))),(0,o.kt)("p",null,"You are now ready to build some visualizations in Tableau!"),(0,o.kt)("h2",{id:"building-visualizations-in-tableau"},"Building Visualizations in Tableau"),(0,o.kt)("p",null,"Now that have a ClickHouse data source configured in Tableau, let's visualize the data..."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Drag the ",(0,o.kt)("strong",{parentName:"p"},"CUSTOMER")," table onto the workbook. Notice the columns appear, but the data table is empty:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"&quot;&quot;",src:a(25723).Z,width:"959",height:"626"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Update Now")," button and 100 rows from ",(0,o.kt)("strong",{parentName:"p"},"CUSTOMER")," will populate the table."))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Drag the ",(0,o.kt)("strong",{parentName:"p"},"ORDERS")," table into the workbook, then set ",(0,o.kt)("strong",{parentName:"p"},"Custkey")," as the relationship field between the two tables:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"&quot;&quot;",src:a(40671).Z,width:"885",height:"644"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You now have the ",(0,o.kt)("strong",{parentName:"p"},"ORDERS")," and ",(0,o.kt)("strong",{parentName:"p"},"LINEITEM")," tables associated with each other as your data source, so you can use this relationship to answer questions about the data. Select the ",(0,o.kt)("strong",{parentName:"p"},"Sheet 1")," tab at the bottom of the workbook."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"&quot;&quot;",src:a(15184).Z,width:"1151",height:"723"})))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Suppose you want to know how many specific items were ordered each year. Drag ",(0,o.kt)("strong",{parentName:"p"},"Orderdate")," from ",(0,o.kt)("strong",{parentName:"p"},"ORDERS")," into the ",(0,o.kt)("strong",{parentName:"p"},"Columns")," section (the horizontal field), then drag ",(0,o.kt)("strong",{parentName:"p"},"Quantity")," from ",(0,o.kt)("strong",{parentName:"p"},"LINEITEM")," into the ",(0,o.kt)("strong",{parentName:"p"},"Rows"),". Tableau will generate the following line chart:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"&quot;&quot;",src:a(73170).Z,width:"541",height:"526"})))),(0,o.kt)("p",null,"Not a very exciting line chart, but the dataset was generated by a script and built for testing query performance, so you will notice there is not a lot of variations in the simulated orders of the TCPD data."),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Suppose you want to know the average order amount (in dollars) by quarter and also by shipping mode (air, mail, ship, truck, etc.):"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"New Worksheet")," tab create a new sheet"),(0,o.kt)("li",{parentName:"ul"},"Drag ",(0,o.kt)("strong",{parentName:"li"},"OrderDate")," from ",(0,o.kt)("strong",{parentName:"li"},"ORDERS")," into ",(0,o.kt)("strong",{parentName:"li"},"Columns")," and change it from ",(0,o.kt)("strong",{parentName:"li"},"Year")," to ",(0,o.kt)("strong",{parentName:"li"},"Quarter")),(0,o.kt)("li",{parentName:"ul"},"Drag ",(0,o.kt)("strong",{parentName:"li"},"Shipmode")," from ",(0,o.kt)("strong",{parentName:"li"},"LINEITEM")," into ",(0,o.kt)("strong",{parentName:"li"},"Rows"))))),(0,o.kt)("p",null,"You should see the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&quot;&quot;",src:a(6498).Z,width:"368",height:"313"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Abc")," values are just filling in the space until you drag a metric onto the table. Drag ",(0,o.kt)("strong",{parentName:"p"},"Totalprice")," from ",(0,o.kt)("strong",{parentName:"p"},"ORDERS")," onto the table. Notice the default calculation is to ",(0,o.kt)("strong",{parentName:"p"},"SUM")," the ",(0,o.kt)("strong",{parentName:"p"},"Totalpricess"),":"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"&quot;&quot;",src:a(14783).Z,width:"665",height:"383"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"SUM")," and change the ",(0,o.kt)("strong",{parentName:"p"},"Measure")," to ",(0,o.kt)("strong",{parentName:"p"},"Average"),". From the same dropdown menu, select ",(0,o.kt)("strong",{parentName:"p"},"Format")," change the ",(0,o.kt)("strong",{parentName:"p"},"Numbers")," to ",(0,o.kt)("strong",{parentName:"p"},"Currency (Standard)"),":"),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{alt:"&quot;&quot;",src:a(86958).Z,width:"804",height:"379"})),(0,o.kt)("p",{parentName:"li"},"Well done! You have successfully connected Tableau to ClickHouse, and you have opened up a whole world of possibilities for analyzing and visualizing your ClickHouse data."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Tableau is great, and we love that it connects so nicely to ClickHouse! If you are new to Tableau, ",(0,o.kt)("a",{href:"https://help.tableau.com/current/pro/desktop/en-us/gettingstarted_overview.htm",target:"_blank"},"check out their documentation")," for help on building dashboards and visualizations.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Summary:")," You can connect Tableau to ClickHouse using the generic ODBC/JDBC ClickHouse driver, but we really like how this tool from ANALYTIKA PLUS simplifies the process of setting up the connection. If you have any issues with the connector, feel free to reach out to ANALYTIKA PLUS on ",(0,o.kt)("a",{href:"https://github.com/analytikaplus/clickhouse-tableau-connector-jdbc/issues",target:"_blank"},"GitHub"),"."))}k.isMDXComponent=!0},51523:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-connect-button-e2247559831d9d3549387ddfb0deee9b.png"},5814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connection-details-https-6ceceb667ac0b41ab35a2ad390b7e2dc.png"},29437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableau_clickhousesettings-5b4bf50e3224584fcbaee7afabff606b.png"},90729:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableau_connecttoserver-36e16b7e61feb9cec4949cc40cde5d2b.png"},77162:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableau_newworkbook-14fee27354e38083bb1242b847a439a3.png"},69254:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableau_tpcdschema-a5b9148a0a208310be6b3e767ca7a8c8.png"},25723:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableau_workbook1-368282a1dc991a4edd2a1c337bd20279.png"},40671:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableau_workbook2-c0006e97a92ef9dc7b0b2f56506693b0.png"},15184:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableau_workbook3-508c26f9bd2c3238ac16a0e3f87bad44.png"},73170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableau_workbook4-f7e57376cdc9855e3af9e3ae1dbc603a.png"},6498:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableau_workbook5-e4e402168f0836d2e07a6ac4e729cf96.png"},14783:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableau_workbook6-054eaa78d35df915bf128cd8ed015245.png"},86958:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tableau_workbook7-7595170eaefc7cbf7c1bef32d0d75cb1.png"}}]);