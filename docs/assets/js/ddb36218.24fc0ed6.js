"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[40200],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,f=u["".concat(l,".").concat(g)]||u[g]||m[g]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},88048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={slug:"/ru/operations/system-tables/graphite_retentions"},o="system.graphite_retentions",s={unversionedId:"ru/operations/system-tables/graphite_retentions",id:"ru/operations/system-tables/graphite_retentions",title:"system.graphite_retentions",description:"system-graphite-retentions}",source:"@site/docs/ru/operations/system-tables/graphite_retentions.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/graphite_retentions",permalink:"/docs/ru/operations/system-tables/graphite_retentions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/graphite_retentions.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/graphite_retentions"},sidebar:"russia",previous:{title:"system.grants",permalink:"/docs/ru/operations/system-tables/grants"},next:{title:"INFORMATION_SCHEMA",permalink:"/docs/ru/operations/system-tables/information_schema"}},l={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-graphite-retentions"},"system.graphite_retentions"),(0,a.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u043e\u043c, \u043a\u0430\u043a\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-graphite"},"graphite_rollup")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0445 \u0441 \u0434\u0432\u0438\u0436\u043a\u0430\u043c\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/mergetree-family/graphitemergetree"},"*","GraphiteMergeTree"),"."),(0,a.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config_name")," (String) - \u0418\u043c\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0433\u043e \u0434\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"li"},"graphite_rollup"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"regexp")," (String) - \u0428\u0430\u0431\u043b\u043e\u043d \u0438\u043c\u0435\u043d\u0438 \u043c\u0435\u0442\u0440\u0438\u043a\u0438."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"function")," (String) - \u0418\u043c\u044f \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0435\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"age")," (UInt64) - \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"precision")," (UInt64) - \u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"priority")," (UInt16) - \u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 pattern."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_default")," (UInt8) - \u042f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0440\u0430\u0437\u0434\u0435\u043b pattern \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u043c."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tables.database")," (Array(String)) - \u041c\u0430\u0441\u0441\u0438\u0432 \u0438\u043c\u0451\u043d \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.kt)("inlineCode",{parentName:"li"},"config_name"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tables.table")," (Array(String)) - \u041c\u0430\u0441\u0441\u0438\u0432 \u0438\u043c\u0451\u043d \u0442\u0430\u0431\u043b\u0438\u0446, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.kt)("inlineCode",{parentName:"li"},"config_name"),".")))}m.isMDXComponent=!0}}]);