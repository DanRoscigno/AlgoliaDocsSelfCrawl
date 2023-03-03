"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[53214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),y=s,d=u["".concat(i,".").concat(y)]||u[y]||m[y]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},10433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const a={slug:"/ru/operations/system-tables/processes"},o="system.processes",l={unversionedId:"ru/operations/system-tables/processes",id:"ru/operations/system-tables/processes",title:"system.processes",description:"system_tables-processes}",source:"@site/docs/ru/operations/system-tables/processes.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/processes",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/system-tables/processes",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/processes.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/processes"},sidebar:"russia",previous:{title:"system.parts_columns",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/system-tables/parts_columns"},next:{title:"system.query_log",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/system-tables/query_log"}},i={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-processes"},"system.processes"),(0,s.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,s.kt)("inlineCode",{parentName:"p"},"SHOW PROCESSLIST"),"."),(0,s.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"user")," (String) \u2013 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u0438\u043d\u0438\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u0432\u0448\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441. \u041f\u0440\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u044b \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ",(0,s.kt)("inlineCode",{parentName:"li"},"default"),". \u041f\u043e\u043b\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0430 \u043d\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u043d\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043b \u044d\u0442\u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"address")," (String) \u2013 IP-\u0430\u0434\u0440\u0435\u0441, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0440\u0438\u0448\u0451\u043b \u0437\u0430\u043f\u0440\u043e\u0441. \u041f\u0440\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e. \u0427\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0442\u043a\u0443\u0434\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u0438\u0448\u0435\u043b \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,s.kt)("inlineCode",{parentName:"li"},"system.processes")," \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435-\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"elapsed")," (Float64) \u2013 \u0432\u0440\u0435\u043c\u044f \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445 \u0441 \u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"rows_read")," (UInt64) \u2013 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a. \u041f\u0440\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435-\u0438\u043d\u0438\u0446\u0438\u0430\u0442\u043e\u0440\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0441\u0443\u043c\u043c\u0443 \u043f\u043e \u0432\u0441\u0435\u043c \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u044b\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bytes_read")," (UInt64) \u2013 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446 \u0431\u0430\u0439\u0442, \u0432 \u043d\u0435\u0441\u0436\u0430\u0442\u043e\u043c \u0432\u0438\u0434\u0435. \u041f\u0440\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435-\u0438\u043d\u0438\u0446\u0438\u0430\u0442\u043e\u0440\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0441\u0443\u043c\u043c\u0443 \u043f\u043e \u0432\u0441\u0435\u043c \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u044b\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"total_rows_approx")," (UInt64) \u2013 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043e\u0446\u0435\u043d\u043a\u0430 \u043e\u0431\u0449\u0435\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0442\u0440\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u044b. \u041f\u0440\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435-\u0438\u043d\u0438\u0446\u0438\u0430\u0442\u043e\u0440\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0441\u0443\u043c\u043c\u0443 \u043f\u043e \u0432\u0441\u0435\u043c \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u044b\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c. \u041c\u043e\u0436\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043a\u043e\u0433\u0434\u0430 \u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b \u043d\u043e\u0432\u044b\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"memory_usage")," (UInt64) \u2013 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u043c\u044f\u0442\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c. \u041c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0438\u0434\u044b \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,s.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/settings/query-complexity#settings_max_memory_usage"},"max_memory_usage"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"query")," (String) \u2013 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0414\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,s.kt)("inlineCode",{parentName:"li"},"INSERT")," \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0442\u0430\u044f\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"query_id")," (String) \u2013 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0435\u0441\u043b\u0438 \u0431\u044b\u043b \u0437\u0430\u0434\u0430\u043d.")))}m.isMDXComponent=!0}}]);