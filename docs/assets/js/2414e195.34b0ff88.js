"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[69383],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||l;return t?n.createElement(d,o(o({ref:r},p),{},{components:t})):n.createElement(d,o({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34932:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const l={slug:"/ru/operations/caches",sidebar_position:65,sidebar_label:"\u041a\u0435\u0448\u0438"},o="\u0422\u0438\u043f\u044b \u043a\u0435\u0448\u0430",i={unversionedId:"ru/operations/caches",id:"ru/operations/caches",title:"\u0422\u0438\u043f\u044b \u043a\u0435\u0448\u0430",description:"cache-types}",source:"@site/docs/ru/operations/caches.md",sourceDirName:"ru/operations",slug:"/ru/operations/caches",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/caches",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/caches.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{slug:"/ru/operations/caches",sidebar_position:65,sidebar_label:"\u041a\u0435\u0448\u0438"},sidebar:"russia",previous:{title:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 OpenTelemetry",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/opentelemetry"},next:{title:"ClickHouse Keeper",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/clickhouse-keeper"}},c={},s=[],p={toc:s},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cache-types"},"\u0422\u0438\u043f\u044b \u043a\u0435\u0448\u0430"),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ClickHouse \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u043a\u0435\u0448\u0430."),(0,a.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u043a\u0435\u0448\u0430:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mark_cache")," \u2014 \u043a\u0435\u0448 \u0437\u0430\u0441\u0435\u0447\u0435\u043a, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0434\u0432\u0438\u0436\u043a\u0430\u043c\u0438 \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uncompressed_cache")," \u2014 \u043a\u0435\u0448 \u043d\u0435\u0441\u0436\u0430\u0442\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0434\u0432\u0438\u0436\u043a\u0430\u043c\u0438 \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),".")),(0,a.kt)("p",null,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u043a\u0435\u0448\u0430:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DNS-\u043a\u0435\u0448."),(0,a.kt)("li",{parentName:"ul"},"\u041a\u0435\u0448 \u0434\u0430\u043d\u043d\u044b\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/interfaces/formats#data-format-regexp"},"regexp"),"."),(0,a.kt)("li",{parentName:"ul"},"\u041a\u0435\u0448 \u0441\u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439."),(0,a.kt)("li",{parentName:"ul"},"\u041a\u0435\u0448 \u0441\u0445\u0435\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0430 ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/interfaces/formats#data-format-avro"},"Avro"),"."),(0,a.kt)("li",{parentName:"ul"},"\u041a\u0435\u0448 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/dictionaries/"},"\u0441\u043b\u043e\u0432\u0430\u0440\u044f\u0445"),".")),(0,a.kt)("p",null,"\u041d\u0435\u043f\u0440\u044f\u043c\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041a\u0435\u0448 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u041e\u0421.")),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u0435\u0448, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/system"},"SYSTEM DROP ... CACHE"),"."))}f.isMDXComponent=!0}}]);