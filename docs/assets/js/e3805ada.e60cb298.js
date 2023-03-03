"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[47817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=i,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||l;return n?r.createElement(c,a(a({ref:t},u),{},{components:n})):r.createElement(c,a({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},36448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const l={slug:"/ru/operations/settings/permissions-for-queries",sidebar_position:58,sidebar_label:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"},a="\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",o={unversionedId:"ru/operations/settings/permissions-for-queries",id:"ru/operations/settings/permissions-for-queries",title:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",description:"permissionsforqueries}",source:"@site/docs/ru/operations/settings/permissions-for-queries.md",sourceDirName:"ru/operations/settings",slug:"/ru/operations/settings/permissions-for-queries",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/settings/permissions-for-queries",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/settings/permissions-for-queries.md",tags:[],version:"current",sidebarPosition:58,frontMatter:{slug:"/ru/operations/settings/permissions-for-queries",sidebar_position:58,sidebar_label:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"},sidebar:"russia",previous:{title:"Settings",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/settings/"},next:{title:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u0430",permalink:"/AlgoliaDocsSelfCrawl/ru/operations/settings/query-complexity"}},p={},s=[{value:"readonly",id:"settings_readonly",level:2},{value:"allow_ddl",id:"settings_allow_ddl",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"permissions_for_queries"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0432 ClickHouse \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u0438\u043f\u043e\u0432:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0447\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445: ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"SHOW"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DESCRIBE"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"EXISTS"),"."),(0,i.kt)("li",{parentName:"ol"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0437\u0430 \u0437\u0430\u043f\u0438\u0441\u044c \u0434\u0430\u043d\u043d\u044b\u0445: ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"OPTIMIZE"),"."),(0,i.kt)("li",{parentName:"ol"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a: ",(0,i.kt)("inlineCode",{parentName:"li"},"SET"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"USE"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/Data_Definition_Language"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b DDL"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ALTER"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"RENAME"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ATTACH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DETACH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DROP")," ",(0,i.kt)("inlineCode",{parentName:"li"},"TRUNCATE"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"KILL QUERY"),".")),(0,i.kt)("p",null,"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u043e \u0442\u0438\u043f\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#settings_readonly"},"readonly")," \u2014 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0442\u0438\u043f\u043e\u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043a\u0440\u043e\u043c\u0435 DDL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#settings_allow_ddl"},"allow_ddl")," \u2014 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f DDL \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"KILL QUERY")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0441 \u043b\u044e\u0431\u044b\u043c\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438."),(0,i.kt)("h2",{id:"settings_readonly"},"readonly"),(0,i.kt)("p",null,"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0447\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u0437\u0430\u043f\u0438\u0441\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432."),(0,i.kt)("p",null,"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u043e \u0442\u0438\u043f\u0430\u043c \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u0443 ",(0,i.kt)("a",{parentName:"p",href:"#permissions_for_queries"},"\u0432\u044b\u0448\u0435")," \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u0443."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 \u2014 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u044b \u0432\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b."),(0,i.kt)("li",{parentName:"ul"},"1 \u2014 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0447\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("li",{parentName:"ul"},"2 \u2014 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0447\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a.")),(0,i.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly = 1")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_ddl")," \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438."),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," \u0432 ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/interfaces/http#http-interface"},"HTTP \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly = 1")," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438. \u0414\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043c\u0435\u0442\u043e\u0434 ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),"."),(0,i.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly = 1")," \u0437\u0430\u043f\u0440\u0435\u0449\u0430\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043f\u043e\u0441\u043e\u0431 \u0437\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a, \u0441\u043c. ",(0,i.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/operations/settings/constraints-on-settings"},"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e")),(0,i.kt)("p",null,"0"),(0,i.kt)("h2",{id:"settings_allow_ddl"},"allow_ddl"),(0,i.kt)("p",null,"\u0420\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442/\u0437\u0430\u043f\u0440\u0435\u0449\u0430\u0435\u0442 ",(0,i.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/Data_Definition_Language"},"DDL")," \u0437\u0430\u043f\u0440\u043e\u0441\u044b."),(0,i.kt)("p",null,"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u043e \u0442\u0438\u043f\u0430\u043c \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u0443 ",(0,i.kt)("a",{parentName:"p",href:"#permissions_for_queries"},"\u0432\u044b\u0448\u0435")," \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u0443."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 \u2014 DDL \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u044b."),(0,i.kt)("li",{parentName:"ul"},"1 \u2014 DDL \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u044b.")),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_ddl = 0"),", \u0442\u043e \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"SET allow_ddl = 1")," \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e")),(0,i.kt)("p",null,"1"))}d.isMDXComponent=!0}}]);