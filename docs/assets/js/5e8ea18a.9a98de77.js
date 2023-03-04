"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[7833],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),k=r,d=f["".concat(s,".").concat(k)]||f[k]||p[k]||a;return t?o.createElement(d,i(i({ref:n},l),{},{components:t})):o.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=k;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[f]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},29268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=t(87462),r=(t(67294),t(3905));const a={slug:"/en/integrations/data-ingestion/kafka/code/connectors/"},i="Kafka Connect Configurations",c={unversionedId:"en/integrations/data-ingestion/kafka/code/connectors/README",id:"en/integrations/data-ingestion/kafka/code/connectors/README",title:"Kafka Connect Configurations",description:"Kafka Connect configurations supporting ClickHouse documentation on Kafka.",source:"@site/docs/en/integrations/data-ingestion/kafka/code/connectors/README.md",sourceDirName:"en/integrations/data-ingestion/kafka/code/connectors",slug:"/en/integrations/data-ingestion/kafka/code/connectors/",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/data-ingestion/kafka/code/connectors/",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/kafka/code/connectors/README.md",tags:[],version:"current",frontMatter:{slug:"/en/integrations/data-ingestion/kafka/code/connectors/"}},s={},u=[],l={toc:u},f="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kafka-connect-configurations"},"Kafka Connect Configurations"),(0,r.kt)("p",null,"Kafka Connect configurations supporting ",(0,r.kt)("a",{parentName:"p",href:"/en/integrations/kafka"},"ClickHouse documentation on Kafka"),"."),(0,r.kt)("p",null,"Configuration files support the Github dataset. These assume Kafka Connect is run in standalone mode and the use of Confluent Cloud."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/kafka-samples/tree/main/github_events/jdbc_sink"},"JDBC Sink Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/kafka-samples/tree/main/github_events/http_sink"},"HTTP Sink Configuration"))),(0,r.kt)("p",null,"Configurations include comments regards settings which require environment specific modification."))}p.isMDXComponent=!0}}]);