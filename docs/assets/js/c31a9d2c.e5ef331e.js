"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[6726],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(g,s(s({ref:n},p),{},{components:t})):i.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<r;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10331:(e,n,t)=>{t.d(n,{ZP:()=>a});var i=t(87462),o=(t(67294),t(3905));const r={toc:[]},s="wrapper";function a(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,i.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This page is not applicable to ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),". The feature documented here is not available in ClickHouse Cloud services.\nSee the ClickHouse ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," guide for more information.")))}a.isMDXComponent=!0},56587:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=t(87462),o=(t(67294),t(3905)),r=t(10331);const s={sidebar_label:"Using MinIO",sidebar_position:6,slug:"/en/integrations/s3/s3-minio",description:"Using MinIO"},a="Using MinIO",c={unversionedId:"en/integrations/data-ingestion/s3/s3-minio",id:"en/integrations/data-ingestion/s3/s3-minio",title:"Using MinIO",description:"Using MinIO",source:"@site/docs/en/integrations/data-ingestion/s3/s3-minio.md",sourceDirName:"en/integrations/data-ingestion/s3",slug:"/en/integrations/s3/s3-minio",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/s3/s3-minio",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/s3/s3-minio.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Using MinIO",sidebar_position:6,slug:"/en/integrations/s3/s3-minio",description:"Using MinIO"}},l={},p=[],u={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-minio"},"Using MinIO"),(0,o.kt)(r.ZP,{mdxType:"SelfManaged"}),(0,o.kt)("p",null,"All S3 functions and tables and compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://min.io/"},"MinIO"),". Users may experience superior throughput on self-hosted MinIO stores, especially in the event of optimal network locality."),(0,o.kt)("p",null,"Also backed merge tree configuration is compatible too, with some minor changes in configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        ...\n        <disks>\n            <s3>\n                <type>s3</type>\n                <endpoint>https://min.io/tables//</endpoint>\n                <access_key_id>your_access_key_id</access_key_id>\n                <secret_access_key>your_secret_access_key</secret_access_key>\n                <region></region>\n                <metadata_path>/var/lib/clickhouse/disks/s3/</metadata_path>\n            </s3>\n            <s3_cache>\n                <type>cache</type>\n                <disk>s3</disk>\n                <path>/var/lib/clickhouse/disks/s3_cache/</path>\n                <max_size>10Gi</max_size>\n            </s3_cache>\n        </disks>\n        ...\n    </storage_configuration>\n</clickhouse>\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Note the double slash in the endpoint tag, this is needed to designate the bucket root.")))}m.isMDXComponent=!0}}]);