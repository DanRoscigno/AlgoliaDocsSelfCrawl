"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[3595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(g,l(l({ref:t},s),{},{components:n})):o.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Create EMQX Cloud Deployment",sidebar_position:3,slug:"/en/integrations/emqx/create-emqx-cloud-deployment",description:"Introduction to Create EMQX Cloud Deployment"},l="Create an MQTT service on EMQX Cloud",i={unversionedId:"en/integrations/data-ingestion/emqx/create-emqx-cloud-deployment",id:"en/integrations/data-ingestion/emqx/create-emqx-cloud-deployment",title:"Create an MQTT service on EMQX Cloud",description:"Introduction to Create EMQX Cloud Deployment",source:"@site/docs/en/integrations/data-ingestion/emqx/create-emqx-cloud-deployment.md",sourceDirName:"en/integrations/data-ingestion/emqx",slug:"/en/integrations/emqx/create-emqx-cloud-deployment",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/emqx/create-emqx-cloud-deployment",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/emqx/create-emqx-cloud-deployment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Create EMQX Cloud Deployment",sidebar_position:3,slug:"/en/integrations/emqx/create-emqx-cloud-deployment",description:"Introduction to Create EMQX Cloud Deployment"}},c={},d=[{value:"Get an account",id:"get-an-account",level:2},{value:"Create an MQTT cluster",id:"create-an-mqtt-cluster",level:2},{value:"Add Client Credential",id:"add-client-credential",level:2},{value:"Enable NAT gateway",id:"enable-nat-gateway",level:2}],s={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-an-mqtt-service-on-emqx-cloud"},"Create an MQTT service on EMQX Cloud"),(0,a.kt)("p",null,"Creating a dedicated MQTT broker on EMQX Cloud is as easy as a few clicks."),(0,a.kt)("h2",{id:"get-an-account"},"Get an account"),(0,a.kt)("p",null,"EMQX Cloud provides a 14-day free trial for both standard deployment and professional deployment for every account."),(0,a.kt)("p",null,"Start at the ",(0,a.kt)("a",{parentName:"p",href:"https://accounts.emqx.com/signup?continue=https%3A%2F%2Fwww.emqx.com%2Fen%2Fcloud"},"EMQX Cloud sign up")," page and click start free to register an account if you are new to EMQX Cloud."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"emqx_cloud_sign_up",src:n(946).Z,width:"2744",height:"1832"})),(0,a.kt)("h2",{id:"create-an-mqtt-cluster"},"Create an MQTT cluster"),(0,a.kt)("p",null,'Once logged in, click on "Cloud Console" under the account menu and you will be able to see the green button to create a new deployment.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"emqx_cloud_create_1",src:n(50763).Z,width:"3078",height:"1844"})),(0,a.kt)("p",null,"In this tutorial, we will use the Professional deployment because only Pro version provides the data integration functionality, which can send MQTT data directly to ClickHouse without a single line of code."),(0,a.kt)("p",null,"Select Pro version and choose \u2018N.Virginial\u2019 region and click \u2018Create Now\u2019. In just\xa0a few minutes, you will get a fully managed MQTT broker:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"emqx_cloud_create_2",src:n(64567).Z,width:"3062",height:"830"})),(0,a.kt)("p",null,"Now click the panel to go to the cluster view. On this dashboard, you will see the overview of your MQTT broker."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"emqx_cloud_overview",src:n(91418).Z,width:"3162",height:"1840"})),(0,a.kt)("h2",{id:"add-client-credential"},"Add Client Credential"),(0,a.kt)("p",null,"EMQX Cloud does not allow anonymous connections by default\uff0cso you need add a client credential so you can use the MQTT client tool to send data to this broker."),(0,a.kt)("p",null,'Click \u2018Authentication & ACL\u2019 on the left menu and click \u2018Authentication\u2019 in the submenu. Click the \u2018Add\u2019 button on the right and give a username and password for the MQTT connection later. Here we will use "emqx" and "xxxxxx" for the username and password.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"emqx_cloud_auth",src:n(27675).Z,width:"3164",height:"1400"})),(0,a.kt)("p",null,"Click \u2018Confirm\u2019 and now we have a fully managed MQTT broker ready."),(0,a.kt)("h2",{id:"enable-nat-gateway"},"Enable NAT gateway"),(0,a.kt)("p",null,"Before we can start setting up the ClickHouse integration, we need to enable the NAT gateway first. By default, the MQTT broker is deployed in a private VPC, which can not send data to third-party systems over the public network."),(0,a.kt)("p",null,"Go back to the Overview page and scroll down to the bottom of the page where you will see the NAT gateway widget. Click the Subscribe button and follow the instructions. Note that NAT Gateway is a value-added service, but it also offers a 14-day free trial."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"emqx_cloud_nat_gateway",src:n(28538).Z,width:"2358",height:"364"})),(0,a.kt)("p",null,"Once it has been created, you will find the public IP address in the widget. Please note that if you select \u201cConnect from a specific location\u201d during ClickHouse Cloud setup, you will need to add this IP address to the whitelist."))}p.isMDXComponent=!0},27675:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/emqx_cloud_auth-1df9fa711b99e497339016a977c7d5d1.png"},50763:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/emqx_cloud_create_1-b2dc63287d86cc59a8ac7df62f87bd28.png"},64567:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/emqx_cloud_create_2-250389798b388247e0e06be6f6debd1f.png"},28538:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/emqx_cloud_nat_gateway-47d34d5913bc93204f6eb38c2083542e.png"},91418:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/emqx_cloud_overview-bbcd665f3fd42c9f8fbfec05305ddc23.png"},946:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/emqx_cloud_sign_up-fd58caf96f574e3aa1c51763d5b8584d.png"}}]);