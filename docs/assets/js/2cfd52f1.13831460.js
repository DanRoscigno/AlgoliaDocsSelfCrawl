"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[52829],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),l=a(67294),o=a(86010),i=a(12466),s=a(16550),r=a(91980),c=a(67392),u=a(50012);function d(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function h(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,r._X)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=h(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[r,c]=p({queryString:a,groupId:n}),[d,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=r??d;return m({value:e,tabValues:o})?e:null})();(0,l.useEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var g=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:s,selectValue:r,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),h=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(d(t),r(n))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:h},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return l.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},l.createElement(f,(0,n.Z)({},e,t)),l.createElement(y,(0,n.Z)({},e,t)))}function C(e){const t=(0,g.Z)();return l.createElement(v,(0,n.Z)({key:String(t)},e))}},34775:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(87462),l=(a(67294),a(3905));const o={toc:[]},i="wrapper";function s(e){let{components:t,...s}=e;return(0,l.kt)(i,(0,n.Z)({},o,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Manage your IP Access List"),(0,l.kt)("p",null,"From your ClickHouse Cloud services list choose the service that you will work with and switch to ",(0,l.kt)("strong",{parentName:"p"},"Security"),".  If the IP Access List does not contain the IP Address or range of the remote system that needs to connect to your ClickHouse Cloud service, then you can resolve the problem with ",(0,l.kt)("strong",{parentName:"p"},"Add entry"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Check to see if the service allows traffic",src:a(78889).Z,width:"999",height:"519"})),(0,l.kt)("p",null,"Add the individual IP Address, or the range of addresses that need to connect to your ClickHouse Cloud service. Modify the form as you see fit and then ",(0,l.kt)("strong",{parentName:"p"},"Add entry")," and ",(0,l.kt)("strong",{parentName:"p"},"Submit entry"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add your current IP address",src:a(39671).Z,width:"595",height:"523"}))))}s.isMDXComponent=!0},86081:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>r,metadata:()=>u,toc:()=>h});var n=a(87462),l=(a(67294),a(3905)),o=a(74866),i=a(85162),s=(a(90814),a(34775));const r={sidebar_label:"Using clickhouse-local",sidebar_position:20,keywords:["clickhouse","migrate","migration","migrating","data","etl","elt","clickhouse-local","clickhouse-client"],slug:"/en/integrations/migration/clickhouse-local"},c="Using clickhouse-local",u={unversionedId:"en/integrations/migration/clickhouse-local-etl",id:"en/integrations/migration/clickhouse-local-etl",title:"Using clickhouse-local",description:"You can use ClickHouse, or to be more specific,clickhouse-local",source:"@site/docs/en/integrations/migration/clickhouse-local-etl.md",sourceDirName:"en/integrations/migration",slug:"/en/integrations/migration/clickhouse-local",permalink:"/docs/en/integrations/migration/clickhouse-local",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/migration/clickhouse-local-etl.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Using clickhouse-local",sidebar_position:20,keywords:["clickhouse","migrate","migration","migrating","data","etl","elt","clickhouse-local","clickhouse-client"],slug:"/en/integrations/migration/clickhouse-local"},sidebar:"english",previous:{title:"ClickHouse to ClickHouse Cloud",permalink:"/docs/en/integrations/migration/clickhouse-to-cloud"},next:{title:"Using a 3rd-party ETL Tool",permalink:"/docs/en/integrations/migration/etl-tool-to-clickhouse"}},d={},h=[{value:"What is clickhouse-local?",id:"what-is-clickhouse-local",level:2},{value:"Installing clickhouse-local",id:"installing-clickhouse-local",level:2},{value:"Example 1: Migrating from MySQL to ClickHouse Cloud with an Integration engine",id:"example-1-migrating-from-mysql-to-clickhouse-cloud-with-an-integration-engine",level:2},{value:"On the destination ClickHouse Cloud service:",id:"on-the-destination-clickhouse-cloud-service",level:3},{value:"Create the destination database:",id:"create-the-destination-database",level:4},{value:"Create a destination table that has a schema equivalent to the MySQL table:",id:"create-a-destination-table-that-has-a-schema-equivalent-to-the-mysql-table",level:4},{value:"On the clickhouse-local host machine:",id:"on-the-clickhouse-local-host-machine",level:3},{value:"Run clickhouse-local with the migration query:",id:"run-clickhouse-local-with-the-migration-query",level:4},{value:"Example 2: Migrating from MySQL to ClickHouse Cloud with the JDBC bridge",id:"example-2-migrating-from-mysql-to-clickhouse-cloud-with-the-jdbc-bridge",level:2},{value:"On the destination ClickHouse Cloud service:",id:"on-the-destination-clickhouse-cloud-service-1",level:3},{value:"Create the destination database:",id:"create-the-destination-database-1",level:4},{value:"Create a destination table that has a schema equivalent to the MySQL table:",id:"create-a-destination-table-that-has-a-schema-equivalent-to-the-mysql-table-1",level:4},{value:"On the clickhouse-local host machine:",id:"on-the-clickhouse-local-host-machine-1",level:3},{value:"Install, configure, and start the ClickHouse JDBC Bridge locally:",id:"install-configure-and-start-the-clickhouse-jdbc-bridge-locally",level:4},{value:"Run clickhouse-local with the migration query:",id:"run-clickhouse-local-with-the-migration-query-1",level:4}],m={toc:h},p="wrapper";function k(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"using-clickhouse-local"},"Using clickhouse-local"),(0,l.kt)("img",{src:a(26449).Z,class:"image",alt:"Migrating Self-managed ClickHouse",style:{width:"40%",padding:"30px"}}),(0,l.kt)("p",null,"You can use ClickHouse, or to be more specific,",(0,l.kt)("a",{parentName:"p",href:"/docs/en/operations/utilities/clickhouse-local"},(0,l.kt)("inlineCode",{parentName:"a"},"clickhouse-local")),"\nas an ETL tool for migrating data from your current database system to ClickHouse Cloud, as long as for your current database system there is either a\nClickHouse-provided ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/#integration-engines"},"integration engine"),"  or ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/"},"table function"),", respectively,\nor a vendor provided JDBC driver or ODBC driver available."),(0,l.kt)("p",null,"ClickHouse provides integration engines and table functions (that create integration engines on-the-fly) for ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/mysql/"},"MySQL"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/postgresql"},"PostgreSQL"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/mongodb"},"MongoDB")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/sqlite"},"SQLite"),".\nFor all other popular database systems, there is JDBC driver or ODBC driver available from the vendor of the system."),(0,l.kt)("h2",{id:"what-is-clickhouse-local"},"What is clickhouse-local?"),(0,l.kt)("img",{src:a(41604).Z,class:"image",alt:"Migrating Self-managed ClickHouse",style:{width:"100%",padding:"30px"}}),(0,l.kt)("p",null,"Typically, ClickHouse is run in the form of a cluster, where several instances of the ClickHouse database engine are running in a distributed fashion on different servers."),(0,l.kt)("p",null,"On a single server, the ClickHouse database engine is run as part of the ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," program. Database access (paths, users, security, ...) is configured with a server configuration file."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," tool allows you to use the ClickHouse database engine isolated in a command-line utility fashion for blazing-fast SQL data processing on an ample amount of inputs and outputs, without having to configure and start a ClickHouse server."),(0,l.kt)("h2",{id:"installing-clickhouse-local"},"Installing clickhouse-local"),(0,l.kt)("p",null,"You need a host machine for ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," that has network access to both your current source database system and your ClickHouse Cloud target service."),(0,l.kt)("p",null,"On that host machine, download the appropriate build of ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," based on your computer's operating system:"),(0,l.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The simplest way to download ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," locally is to run the following command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://clickhouse.com/ | sh\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," (it will just print its version):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse-local\n"))))),(0,l.kt)(i.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The simplest way to download ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," locally is to run the following command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://clickhouse.com/ | sh\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," (it will just print its version):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse local\n")))))),(0,l.kt)("admonition",{title:"Important",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The examples throughout this guide use the Linux commands for running ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," (",(0,l.kt)("inlineCode",{parentName:"p"},"./clickhouse-local"),").\nTo run ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," on a Mac, use ",(0,l.kt)("inlineCode",{parentName:"p"},"./clickhouse local"),".")),(0,l.kt)("admonition",{title:"Add the remote system to your ClickHouse Cloud service IP Access List",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"In order for the ",(0,l.kt)("inlineCode",{parentName:"p"},"remoteSecure")," function to connect to your ClickHouse Cloud service, the IP address of the remote system needs to be allowed by the IP Access List.  Expand ",(0,l.kt)("strong",{parentName:"p"},"Manage your IP Access List")," below this tip for more information.")),(0,l.kt)(s.ZP,{mdxType:"AddARemoteSystem"}),(0,l.kt)("h2",{id:"example-1-migrating-from-mysql-to-clickhouse-cloud-with-an-integration-engine"},"Example 1: Migrating from MySQL to ClickHouse Cloud with an Integration engine"),(0,l.kt)("p",null,"We will use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/mysql/"},"integration table engine")," (created on-the-fly by the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/mysql/"},"mysql table function"),") for reading data from the source MySQL database and we will use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/remote/"},"remoteSecure table function"),"\nfor writing the data into a destination table on your ClickHouse cloud service."),(0,l.kt)("img",{src:a(19246).Z,class:"image",alt:"Migrating Self-managed ClickHouse",style:{width:"40%",padding:"30px"}}),(0,l.kt)("h3",{id:"on-the-destination-clickhouse-cloud-service"},"On the destination ClickHouse Cloud service:"),(0,l.kt)("h4",{id:"create-the-destination-database"},"Create the destination database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db\n")),(0,l.kt)("h4",{id:"create-a-destination-table-that-has-a-schema-equivalent-to-the-mysql-table"},"Create a destination table that has a schema equivalent to the MySQL table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db.table ...\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The schema of the ClickHouse Cloud destination table and schema of the source MySQL table must be aligned (the column names and order must be the same, and the column data types must be compatible).")),(0,l.kt)("h3",{id:"on-the-clickhouse-local-host-machine"},"On the clickhouse-local host machine:"),(0,l.kt)("h4",{id:"run-clickhouse-local-with-the-migration-query"},"Run clickhouse-local with the migration query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"./clickhouse-local --query \"\nINSERT INTO FUNCTION\nremoteSecure('HOSTNAME.clickhouse.cloud:9440', 'db.table', 'default', 'PASS')\nSELECT * FROM mysql('host:port', 'database', 'table', 'user', 'password');\"\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"No data is stored locally on the ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," host machine. Instead, the data is read from the source MySQL table\nand then immediately written to the destination table on the ClickHouse Cloud service.")),(0,l.kt)("h2",{id:"example-2-migrating-from-mysql-to-clickhouse-cloud-with-the-jdbc-bridge"},"Example 2: Migrating from MySQL to ClickHouse Cloud with the JDBC bridge"),(0,l.kt)("p",null,"We will use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/jdbc"},"JDBC integration table engine")," (created on-the-fly by the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/jdbc"},"jdbc table function"),") together with the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc-bridge"},"ClickHouse JDBC Bridge")," and the MySQL JDBC driver for reading data from the source MySQL database and we will use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/remote"},"remoteSecure table function"),"\nfor writing the data into a destination table on your ClickHouse cloud service."),(0,l.kt)("img",{src:a(93160).Z,class:"image",alt:"Migrating Self-managed ClickHouse",style:{width:"40%",padding:"30px"}}),(0,l.kt)("h3",{id:"on-the-destination-clickhouse-cloud-service-1"},"On the destination ClickHouse Cloud service:"),(0,l.kt)("h4",{id:"create-the-destination-database-1"},"Create the destination database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db\n")),(0,l.kt)("h4",{id:"create-a-destination-table-that-has-a-schema-equivalent-to-the-mysql-table-1"},"Create a destination table that has a schema equivalent to the MySQL table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db.table ...\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The schema of the ClickHouse Cloud destination table and schema of the source MySQL table must be aligned,\ne.g. the column names and order must be the same, and the column data types must be compatible.")),(0,l.kt)("h3",{id:"on-the-clickhouse-local-host-machine-1"},"On the clickhouse-local host machine:"),(0,l.kt)("h4",{id:"install-configure-and-start-the-clickhouse-jdbc-bridge-locally"},"Install, configure, and start the ClickHouse JDBC Bridge locally:"),(0,l.kt)("p",null,"Follow the steps from the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/integrations/jdbc/jdbc-with-clickhouse#install-the-clickhouse-jdbc-bridge-locally"},"guide"),".\nThe guide also contains steps for configuring a data source from MySQL."),(0,l.kt)("h4",{id:"run-clickhouse-local-with-the-migration-query-1"},"Run clickhouse-local with the migration query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"./clickhouse-local --query \"\nINSERT INTO FUNCTION\nremoteSecure('HOSTNAME.clickhouse.cloud:9440', 'db.table', 'default', 'PASS')\nSELECT * FROM jdbc('datasource', 'database', 'table');\"\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"No data is stored locally on the ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," host machine. Instead, the data is read from the MySQL source table\nand then immediately written to the destination table on the ClickHouse Cloud service.")))}k.isMDXComponent=!0},26449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ch-local-01-bc59493cb59081d6184e00fd0abdf8f4.png"},41604:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ch-local-02-aaec4e640f5b61d8661f5f5134fd4178.png"},19246:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ch-local-03-54bfd36aa8807473cc62a34de3a333bd.png"},93160:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ch-local-04-f1883ec8d6f4b85f6eee9595180a3f02.png"},39671:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ip-allow-list-add-current-ip-308aa8c2edde4c6d29569c209968ddbc.png"},78889:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ip-allow-list-check-list-a3ec1682582a2648eaa2c1727170f893.png"}}]);