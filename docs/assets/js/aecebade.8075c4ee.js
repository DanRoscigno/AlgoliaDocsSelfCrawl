"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[51947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},45928:(e,t,n)=>{n.d(t,{ZP:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This page is not applicable to ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),". The procedure documented here is automated in ClickHouse Cloud services.")))}l.isMDXComponent=!0},46692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905)),a=n(45928);const i={slug:"/en/operations/ssl-zookeeper",sidebar_position:45,sidebar_label:"Secured Communication with Zookeeper"},l="Optional secured communication between ClickHouse and Zookeeper",s={unversionedId:"en/operations/ssl-zookeeper",id:"en/operations/ssl-zookeeper",title:"Optional secured communication between ClickHouse and Zookeeper",description:"You should specify ssl.keyStore.location, ssl.keyStore.password and ssl.trustStore.location, ssl.trustStore.password for communication with ClickHouse client over SSL. These options are available from Zookeeper version 3.5.2.",source:"@site/docs/en/operations/ssl-zookeeper.md",sourceDirName:"en/operations",slug:"/en/operations/ssl-zookeeper",permalink:"/AlgoliaDocsSelfCrawl/en/operations/ssl-zookeeper",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/ssl-zookeeper.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{slug:"/en/operations/ssl-zookeeper",sidebar_position:45,sidebar_label:"Secured Communication with Zookeeper"},sidebar:"english",previous:{title:"Creating unique ClickHouse Keeper entries",permalink:"/AlgoliaDocsSelfCrawl/en/guides/sre/keeper/clickhouse-keeper-uuid"},next:{title:"Rebalancing Shards",permalink:"/AlgoliaDocsSelfCrawl/en/guides/sre/scaling-clusters"}},c={},p=[],u={toc:p},d="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"optional-secured-communication-between-clickhouse-and-zookeeper"},"Optional secured communication between ClickHouse and Zookeeper"),(0,r.kt)(a.ZP,{mdxType:"SelfManaged"}),(0,r.kt)("p",null,"You should specify ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl.keyStore.location"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl.keyStore.password")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl.trustStore.location"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl.trustStore.password")," for communication with ClickHouse client over SSL. These options are available from Zookeeper version 3.5.2."),(0,r.kt)("p",null,"You can add ",(0,r.kt)("inlineCode",{parentName:"p"},"zookeeper.crt")," to trusted certificates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp zookeeper.crt /usr/local/share/ca-certificates/zookeeper.crt\nsudo update-ca-certificates\n")),(0,r.kt)("p",null,"Client section in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.xml")," will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<client>\n    <certificateFile>/etc/clickhouse-server/client.crt</certificateFile>\n    <privateKeyFile>/etc/clickhouse-server/client.key</privateKeyFile>\n    <loadDefaultCAFile>true</loadDefaultCAFile>\n    <cacheSessions>true</cacheSessions>\n    <disableProtocols>sslv2,sslv3</disableProtocols>\n    <preferServerCiphers>true</preferServerCiphers>\n    <invalidCertificateHandler>\n        <name>RejectCertificateHandler</name>\n    </invalidCertificateHandler>\n</client>\n")),(0,r.kt)("p",null,"Add Zookeeper to ClickHouse config with some cluster and macros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <zookeeper>\n        <node>\n            <host>localhost</host>\n            <port>2281</port>\n            <secure>1</secure>\n        </node>\n    </zookeeper>\n</clickhouse>\n")),(0,r.kt)("p",null,"Start ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),". In logs you should see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<Trace> ZooKeeper: initialized, hosts: secure://localhost:2281\n")),(0,r.kt)("p",null,"Prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"secure://")," indicates that connection is secured by SSL."),(0,r.kt)("p",null,"To ensure traffic is encrypted run ",(0,r.kt)("inlineCode",{parentName:"p"},"tcpdump")," on secured port:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tcpdump -i any dst port 2281 -nnXS\n")),(0,r.kt)("p",null,"And query in ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.zookeeper WHERE path = '/';\n")),(0,r.kt)("p",null,"On unencrypted connection you will see in ",(0,r.kt)("inlineCode",{parentName:"p"},"tcpdump")," output something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"..../zookeeper/quota.\n")),(0,r.kt)("p",null,"On encrypted connection you should not see this."))}k.isMDXComponent=!0}}]);