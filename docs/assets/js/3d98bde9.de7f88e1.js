"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[55771],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={slug:"/ru/sql-reference/data-types/datetime",sidebar_position:48,sidebar_label:"DateTime"},l="DateTime",o={unversionedId:"ru/sql-reference/data-types/datetime",id:"ru/sql-reference/data-types/datetime",title:"DateTime",description:"data_type-datetime}",source:"@site/docs/ru/sql-reference/data-types/datetime.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/datetime",permalink:"/docs/ru/sql-reference/data-types/datetime",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/datetime.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{slug:"/ru/sql-reference/data-types/datetime",sidebar_position:48,sidebar_label:"DateTime"},sidebar:"russia",previous:{title:"Date32",permalink:"/docs/ru/sql-reference/data-types/date32"},next:{title:"DateTime64",permalink:"/docs/ru/sql-reference/data-types/datetime64"}},p={},s=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"ispolzovanie",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"primery",level:2},{value:"See Also",id:"see-also",level:2}],m={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data_type-datetime"},"DateTime"),(0,r.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043a\u0430\u043a \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u043d\u0430\u044f \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f."),(0,r.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DateTime([timezone])\n")),(0,r.kt)("p",null,"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439: ","[","1970-01-01 00:00:00, 2106-02-07 06:28:15","]","."),(0,r.kt)("p",null,"\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c: 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0430."),(0,r.kt)("h2",{id:"ispolzovanie"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("p",null,"\u041c\u043e\u043c\u0435\u043d\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",(0,r.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/Unix-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F"},"Unix timestamp"),", \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u0447\u0430\u0441\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u044f\u0441\u0430 \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432 \u043d\u0430 \u043b\u0435\u0442\u043d\u0435\u0435/\u0437\u0438\u043c\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f. \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e, \u0442\u0438\u043f ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441, \u0435\u0434\u0438\u043d\u044b\u0439 \u0434\u043b\u044f \u0432\u0441\u0435\u0439 \u043a\u043e\u043b\u043e\u043d\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0442\u043e, \u043a\u0430\u043a \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c \u0432\u0438\u0434\u0435 \u0438 \u043a\u0430\u043a \u0431\u0443\u0434\u0443\u0442 \u043f\u0430\u0440\u0441\u0438\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a (\u20182020-01-01 05:00:01\u2019). \u0427\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441 \u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u044b (\u0432\u044b\u0431\u043e\u0440\u043a\u0438), \u0430 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043b\u043e\u043d\u043a\u0438.\n\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0447\u0430\u0441\u043e\u0432\u044b\u0445 \u043f\u043e\u044f\u0441\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0432 ",(0,r.kt)("a",{parentName:"p",href:"https://www.iana.org/time-zones"},"IANA Time Zone Database")," \u0438\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438\u0437 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM system.time_zones"),". \u0422\u0430\u043a\u0436\u0435 ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"\u0441\u043f\u0438\u0441\u043e\u043a")," \u0435\u0441\u0442\u044c \u0432 \u0412\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438."),(0,r.kt)("p",null,"\u0427\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441 \u0434\u043b\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," \u043c\u043e\u0436\u043d\u043e \u0432 \u044f\u0432\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0415\u0441\u043b\u0438 \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d, \u0442\u043e ClickHouse \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/datetime#server_configuration_parameters-timezone"},"timezone"),", \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0430 \u043c\u043e\u043c\u0435\u043d\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,r.kt)("p",null,"\u041a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442 ClickHouse \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0435\u0441\u043b\u0438 \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441 \u043d\u0435 \u0431\u044b\u043b \u0437\u0430\u0434\u0430\u043d \u0432 \u044f\u0432\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445. \u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/interfaces/cli"},"clickhouse-client")," \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"--use_client_time_zone"),"."),(0,r.kt)("p",null,"ClickHouse \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,r.kt)("a",{parentName:"p",href:"../../operations/settings/#settings-date_time_output_format"},"date","_","time","_","output","_","format"),". \u0422\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD hh:mm:ss"),". \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/date-time-functions#formatdatetime"},"formatDateTime"),"."),(0,r.kt)("p",null,"\u041f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 ClickHouse, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b \u0434\u0430\u0442\u044b \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,r.kt)("a",{parentName:"p",href:"../../operations/settings/#settings-date_time_input_format"},"date_time_input_format"),"."),(0,r.kt)("h2",{id:"primery"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u043c \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," \u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043d\u0435\u0451:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE dt\n(\n    `timestamp` DateTime('Europe/Moscow'),\n    `event_id` UInt8\n)\nENGINE = TinyLog;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO dt Values (1546300800, 1), ('2019-01-01 00:00:00', 2);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dt;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 03:00:00 \u2502        1 \u2502\n\u2502 2019-01-01 00:00:00 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0434\u0430\u0442\u044b-\u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043a\u0430\u043a \u0446\u0435\u043b\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430, \u043e\u043d\u043e \u0442\u0440\u0430\u043a\u0442\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a Unix Timestamp (UTC). Unix timestamp ",(0,r.kt)("inlineCode",{parentName:"li"},"1546300800")," \u0432 \u0447\u0430\u0441\u043e\u0432\u043e\u043c \u043f\u043e\u044f\u0441\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"Europe/London (UTC+0)")," \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0440\u0435\u043c\u044f ",(0,r.kt)("inlineCode",{parentName:"li"},"'2019-01-01 00:00:00'"),". \u041e\u0434\u043d\u0430\u043a\u043e, \u0441\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f ",(0,r.kt)("inlineCode",{parentName:"li"},"DateTime('Europe/Moscow (UTC+3)')"),", \u0442\u0430\u043a \u0447\u0442\u043e \u043f\u0440\u0438 \u0432\u044b\u0432\u043e\u0434\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u0441\u044f \u043a\u0430\u043a ",(0,r.kt)("inlineCode",{parentName:"li"},"2019-01-01 03:00:00"),"."),(0,r.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0434\u0430\u0442\u044b-\u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a\u0438, \u0432\u0440\u0435\u043c\u044f \u0442\u0440\u0430\u043a\u0442\u0443\u0435\u0442\u0441\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0447\u0430\u0441\u043e\u0432\u043e\u043c\u0443 \u043f\u043e\u044f\u0441\u0443 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u0434\u043b\u044f \u043a\u043e\u043b\u043e\u043d\u043a\u0438. ",(0,r.kt)("inlineCode",{parentName:"li"},"'2019-01-01 00:00:00'")," \u0442\u0440\u0430\u043a\u0442\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0432\u0440\u0435\u043c\u044f \u043f\u043e \u041c\u043e\u0441\u043a\u0432\u0435 (\u0438 \u0432 \u0431\u0430\u0437\u0443 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f ",(0,r.kt)("inlineCode",{parentName:"li"},"1546290000"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," \u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c \u0434\u0430\u0442\u044b-\u0432\u0440\u0435\u043c\u0435\u043d\u0438"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dt WHERE timestamp = toDateTime('2019-01-01 00:00:00', 'Europe/Moscow')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 00:00:00 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u043a\u043e\u043b\u043e\u043d\u043a\u0435 \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," \u043c\u043e\u0436\u043d\u043e, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u0444\u0438\u043b\u044c\u0442\u0440\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE"),". \u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dt WHERE timestamp = '2019-01-01 00:00:00'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 03:00:00 \u2502        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0447\u0430\u0441\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u044f\u0441\u0430 \u0434\u043b\u044f \u043a\u043e\u043b\u043e\u043d\u043a\u0438 \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDateTime(now(), 'Europe/Moscow') AS column, toTypeName(column) AS x\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500column\u2500\u252c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2019-10-16 04:12:04 \u2502 DateTime('Europe/Moscow') \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.")," \u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0447\u0430\u0441\u043e\u0432\u044b\u0445 \u043f\u043e\u044f\u0441\u043e\u0432"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\ntoDateTime(timestamp, 'Europe/London') as lon_time,\ntoDateTime(timestamp, 'Europe/Moscow') as mos_time\nFROM dt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500lon_time\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500mos_time\u2500\u2510\n\u2502 2019-01-01 00:00:00 \u2502 2019-01-01 03:00:00 \u2502\n\u2502 2018-12-31 21:00:00 \u2502 2019-01-01 00:00:00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/type-conversion-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0432")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/date-time-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0434\u0430\u0442\u043e\u0439 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/array-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u0430\u0441\u0441\u0438\u0432\u0430\u043c\u0438")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../operations/settings/#settings-date_time_input_format"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"a"},"date_time_input_format"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../operations/settings/"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"a"},"date_time_output_format"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-timezone"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ",(0,r.kt)("inlineCode",{parentName:"a"},"timezone"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/operators/#operators-datetime"},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0434\u0430\u0442\u043e\u0439 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date"},"\u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,r.kt)("inlineCode",{parentName:"a"},"Date"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime64"},"\u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,r.kt)("inlineCode",{parentName:"a"},"DateTime64")))))}c.isMDXComponent=!0}}]);