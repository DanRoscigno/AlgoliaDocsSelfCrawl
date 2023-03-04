"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[3616],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_label:"Push to ClickHouse",sidebar_position:2,slug:"/en/integrations/redshift/redshift-push-to-clickhouse",description:"Push Data from Redshift to ClickHouse"},a="Push Data from Redshift to ClickHouse",s={unversionedId:"en/integrations/migration/redshift/redshift-push-to-clickhouse",id:"en/integrations/migration/redshift/redshift-push-to-clickhouse",title:"Push Data from Redshift to ClickHouse",description:"Push Data from Redshift to ClickHouse",source:"@site/docs/en/integrations/migration/redshift/redshift-push-to-clickhouse.md",sourceDirName:"en/integrations/migration/redshift",slug:"/en/integrations/redshift/redshift-push-to-clickhouse",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/redshift/redshift-push-to-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/migration/redshift/redshift-push-to-clickhouse.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Push to ClickHouse",sidebar_position:2,slug:"/en/integrations/redshift/redshift-push-to-clickhouse",description:"Push Data from Redshift to ClickHouse"}},c={},l=[{value:"Pros",id:"pros",level:4},{value:"Cons",id:"cons",level:4}],u={toc:l},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"push-data-from-redshift-to-clickhouse"},"Push Data from Redshift to ClickHouse"),(0,o.kt)("p",null,"In the push scenario, the idea is to leverage a third-party tool or service (either custom code or an ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Extract,_transform,_load#ETL_vs._ELT"},"ETL/ELT"),") to send your data to your ClickHouse instance. For example, you can use a software like ",(0,o.kt)("a",{parentName:"p",href:"https://www.airbyte.com/"},"Airbyte")," to move data between your Redshift instance (as a source) and ClickHouse as a destination (",(0,o.kt)("a",{parentName:"p",href:"../airbyte-and-clickhouse"},"see our integration guide for Airbyte"),")"),(0,o.kt)("img",{src:r(62958).Z,class:"image",alt:"PUSH Redshit to ClickHouse"}),(0,o.kt)("h4",{id:"pros"},"Pros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It can leverage the existing catalog of connectors from the ETL/ELT software."),(0,o.kt)("li",{parentName:"ul"},"Built-in capabilities to keep data in sync (append/overwrite/increment logic)."),(0,o.kt)("li",{parentName:"ul"},"Enable data transformation scenarios (for example, see our ",(0,o.kt)("a",{parentName:"li",href:"../dbt"},"integration guide for dbt"),").")),(0,o.kt)("h4",{id:"cons"},"Cons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users need to set up and maintain an ETL/ELT infrastructure."),(0,o.kt)("li",{parentName:"ul"},"Introduces a third-party element in the architecture which can turn into a potential scalability bottleneck.")))}d.isMDXComponent=!0},62958:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/push-7f0afefde34793a9510b8528823aca78.png"}}]);