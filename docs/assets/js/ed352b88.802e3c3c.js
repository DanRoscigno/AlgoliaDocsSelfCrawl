"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[1629,16067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),a=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=a(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=a(n),g=s,h=p["".concat(c,".").concat(g)]||p[g]||u[g]||i;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,l=new Array(i);l[0]=g;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:s,l[1]=r;for(var a=2;a<i;a++)l[a]=n[a];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},95101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var o=n(87462),s=(n(67294),n(3905));const i={slug:"/en/get-started/sql-console/opening",pagination_next:"en/get-started/sql-console/exploring-tables"},l="Opening the SQL Console",r={unversionedId:"en/get-started/sql-console/opening",id:"en/get-started/sql-console/opening",title:"Opening the SQL Console",description:"SQL console is the fastest and easiest way to explore and query your databases in ClickHouse Cloud.  You can use the SQL console to:",source:"@site/docs/en/get-started/sql-console/01-opening.md",sourceDirName:"en/get-started/sql-console",slug:"/en/get-started/sql-console/opening",permalink:"/docs/en/get-started/sql-console/opening",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/get-started/sql-console/01-opening.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/en/get-started/sql-console/opening",pagination_next:"en/get-started/sql-console/exploring-tables"},sidebar:"english",previous:{title:"Cloud Quick Start",permalink:"/docs/en/quick-start"},next:{title:"Exploring Tables",permalink:"/docs/en/get-started/sql-console/exploring-tables"}},c={},a=[{value:"Opening SQL Console from Control Plane",id:"opening-sql-console-from-control-plane",level:2},{value:"Loading the SQL Console Directly",id:"loading-the-sql-console-directly",level:2},{value:"Using the service switcher",id:"using-the-service-switcher",level:2}],d={toc:a},p="wrapper";function u(e){let{components:t,...i}=e;return(0,s.kt)(p,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"opening-the-sql-console"},"Opening the SQL Console"),(0,s.kt)("p",null,"SQL console is the fastest and easiest way to explore and query your databases in ClickHouse Cloud.  You can use the SQL console to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Connect to your ClickHouse Cloud Services"),(0,s.kt)("li",{parentName:"ul"},"View, filter, and sort table data"),(0,s.kt)("li",{parentName:"ul"},"Execute queries and visualize result data in just a few clicks"),(0,s.kt)("li",{parentName:"ul"},"Share queries with team members and collaborate more effectively.")),(0,s.kt)("h2",{id:"opening-sql-console-from-control-plane"},"Opening SQL Console from Control Plane"),(0,s.kt)("p",null,"The SQL console can be opened directly from your Service overview screen.  Simply click the \u2018Connect\u2019 button and select \u2018Open SQL console\u2019."),(0,s.kt)("p",null,"  ",(0,s.kt)("img",{alt:"Open the SQL console from a service",src:n(736).Z,width:"1757",height:"888"})),(0,s.kt)("p",null,"The SQL Console will open in a new tab and prompt you to input your service credentials:"),(0,s.kt)("p",null,"  ",(0,s.kt)("img",{alt:"Enter credentials",src:n(38871).Z,width:"798",height:"427"})),(0,s.kt)("p",null,"After inputting your credentials, click \u2018Connect\u2019 and the SQL Console will attempt to connect and authenticate.  If this is successful, you should now be able to see the SQL Console interface:"),(0,s.kt)("p",null,"  ",(0,s.kt)("img",{alt:"Authentication success",src:n(69478).Z,width:"1756",height:"888"})),(0,s.kt)("h2",{id:"loading-the-sql-console-directly"},"Loading the SQL Console Directly"),(0,s.kt)("p",null,"The SQL Console can also be loaded directly by navigating to ",(0,s.kt)("a",{parentName:"p",href:"https://console.clickhouse.cloud."},"https://console.clickhouse.cloud."),"  After logging into your ClickHouse Cloud account, you will be presented with a list of services.  Select one and enter your service credentials on the service authentication screen:"),(0,s.kt)("p",null,"  ",(0,s.kt)("img",{alt:"Select a service",src:n(2888).Z,width:"624",height:"408"})),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If only one service exists in your organization, the SQL Console will immediately direct you to the service authentication screen")),(0,s.kt)("h2",{id:"using-the-service-switcher"},"Using the service switcher"),(0,s.kt)("p",null,"You can easily switch between your services directly from the SQL Console.  Simply open the service switcher in the top right corner of the Console and select a different service:"),(0,s.kt)("p",null,"  ",(0,s.kt)("img",{alt:"Switch services",src:n(46182).Z,width:"1757",height:"890"})))}u.isMDXComponent=!0},61880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=n(87462),s=(n(67294),n(3905)),i=n(95101);const l={sidebar_label:"SQL Console",sidebar_position:1,hide_title:!0,pagination_next:"en/get-started/sql-console/exploring-tables"},r=void 0,c={unversionedId:"en/integrations/sql-clients/sql-console",id:"en/integrations/sql-clients/sql-console",title:"sql-console",description:"",source:"@site/docs/en/integrations/sql-clients/sql-console.md",sourceDirName:"en/integrations/sql-clients",slug:"/en/integrations/sql-clients/sql-console",permalink:"/docs/en/integrations/sql-clients/sql-console",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/sql-clients/sql-console.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"SQL Console",sidebar_position:1,hide_title:!0,pagination_next:"en/get-started/sql-console/exploring-tables"},sidebar:"english",previous:{title:"SQL Clients",permalink:"/docs/en/integrations/sql-clients"},next:{title:"Exploring Tables",permalink:"/docs/en/get-started/sql-console/exploring-tables"}},a={},d=[],p={toc:d},u="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.default,{mdxType:"Content"}))}g.isMDXComponent=!0},69478:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/authentication-success-b15490d6fcbc56d2e40d279d8a15c3ac.png"},38871:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/enter-credentials-5923a45c32b12767f46afa814c3eb178.png"},736:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/open-sql-console-from-service-45849c7ce4c8882df3ceb36d273a024b.png"},2888:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/select-a-service-9304b1dbae1cb91413752f746a38d4fd.png"},46182:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/switch-services-040df358bc93c7c88f407bed863a1818.png"}}]);