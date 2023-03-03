"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[73616],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,h=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return r?i.createElement(h,a(a({ref:t},u),{},{components:r})):i.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"Push to ClickHouse",sidebar_position:2,slug:"/en/integrations/redshift/redshift-push-to-clickhouse",description:"Push Data from Redshift to ClickHouse"},a="Push Data from Redshift to ClickHouse",s={unversionedId:"en/integrations/migration/redshift/redshift-push-to-clickhouse",id:"en/integrations/migration/redshift/redshift-push-to-clickhouse",title:"Push Data from Redshift to ClickHouse",description:"Push Data from Redshift to ClickHouse",source:"@site/docs/en/integrations/migration/redshift/redshift-push-to-clickhouse.md",sourceDirName:"en/integrations/migration/redshift",slug:"/en/integrations/redshift/redshift-push-to-clickhouse",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/redshift/redshift-push-to-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/migration/redshift/redshift-push-to-clickhouse.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Push to ClickHouse",sidebar_position:2,slug:"/en/integrations/redshift/redshift-push-to-clickhouse",description:"Push Data from Redshift to ClickHouse"},sidebar:"english",previous:{title:"Migration Options",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/redshift/migrate-redshift-to-clickhouse"},next:{title:"Pull to ClickHouse",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/redshift/redshift-pull-to-clickhouse"}},c={},l=[{value:"Pros",id:"pros",level:4},{value:"Cons",id:"cons",level:4}],u={toc:l},p="wrapper";function f(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"push-data-from-redshift-to-clickhouse"},"Push Data from Redshift to ClickHouse"),(0,n.kt)("p",null,"In the push scenario, the idea is to leverage a third-party tool or service (either custom code or an ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Extract,_transform,_load#ETL_vs._ELT"},"ETL/ELT"),") to send your data to your ClickHouse instance. For example, you can use a software like ",(0,n.kt)("a",{parentName:"p",href:"https://www.airbyte.com/"},"Airbyte")," to move data between your Redshift instance (as a source) and ClickHouse as a destination (",(0,n.kt)("a",{parentName:"p",href:"../airbyte-and-clickhouse"},"see our integration guide for Airbyte"),")"),(0,n.kt)("img",{src:r(62958).Z,class:"image",alt:"PUSH Redshit to ClickHouse"}),(0,n.kt)("h4",{id:"pros"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It can leverage the existing catalog of connectors from the ETL/ELT software."),(0,n.kt)("li",{parentName:"ul"},"Built-in capabilities to keep data in sync (append/overwrite/increment logic)."),(0,n.kt)("li",{parentName:"ul"},"Enable data transformation scenarios (for example, see our ",(0,n.kt)("a",{parentName:"li",href:"../dbt"},"integration guide for dbt"),").")),(0,n.kt)("h4",{id:"cons"},"Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Users need to set up and maintain an ETL/ELT infrastructure."),(0,n.kt)("li",{parentName:"ul"},"Introduces a third-party element in the architecture which can turn into a potential scalability bottleneck.")))}f.isMDXComponent=!0},62958:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/push-7f0afefde34793a9510b8528823aca78.png"}}]);