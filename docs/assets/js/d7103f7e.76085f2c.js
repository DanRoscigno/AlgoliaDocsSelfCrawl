"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[76178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/ru/operations/system-tables/session_log"},l="system.session_log",s={unversionedId:"ru/operations/system-tables/session_log",id:"ru/operations/system-tables/session_log",title:"system.session_log",description:"systemtables-sessionlog}",source:"@site/docs/ru/operations/system-tables/session_log.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/session_log",permalink:"/docs/ru/operations/system-tables/session_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/session_log.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/session_log"},sidebar:"russia",previous:{title:"system.server_settings",permalink:"/docs/ru/operations/system-tables/server_settings"},next:{title:"system.settings",permalink:"/docs/ru/operations/system-tables/settings"}},o={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system_tables-session_log"},"system.session_log"),(0,r.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0432\u0441\u0435\u0445 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0445 \u0438 \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u044b\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0445 \u0432\u0445\u043e\u0434\u0430 \u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."),(0,r.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LoginFailure")," \u2014 \u043e\u0448\u0438\u0431\u043a\u0430 \u0432\u0445\u043e\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LoginSuccess")," \u2014 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0432\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Logout")," \u2014 \u0432\u044b\u0445\u043e\u0434 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auth_id")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/uuid"},"UUID"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u0441\u043e\u0431\u043e\u0439 UUID, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0432\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session_id")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0441\u0435\u0441\u0441\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0447\u0435\u0440\u0435\u0437 ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/http"},"HTTP"),"-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date"},"Date"),") \u2014 \u0434\u0430\u0442\u0430 \u0432\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u0432\u0440\u0435\u043c\u044f \u0432\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u043e \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u043a\u0443\u043d\u0434."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auth_type")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u0442\u0438\u043f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NO_PASSWORD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PLAINTEXT_PASSWORD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SHA256_PASSWORD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DOUBLE_SHA1_PASSWORD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LDAP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KERBEROS")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"profiles")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),")) \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0444\u0438\u043b\u0435\u0439, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0440\u043e\u043b\u0435\u0439 \u0438 (\u0438\u043b\u0438) \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roles")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),")) \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u043e\u043b\u0435\u0439, \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"settings")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/tuple"},"Tuple"),"(",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/lowcardinality"},"LowCardinality(String)"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),"))) \u2014 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u044b \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_address")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 IP-\u0430\u0434\u0440\u0435\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0441\u044f \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_port")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 \u043f\u043e\u0440\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0441\u044f \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u044b\u043b \u0438\u043d\u0438\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u043d \u0432\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TCP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HTTP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gRPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MySQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PostgreSQL")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_hostname")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0445\u043e\u0441\u0442\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u044b, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b\u0441\u044f ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/cli"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0439 TCP \u043a\u043b\u0438\u0435\u043d\u0442."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_name")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0439 TCP \u043a\u043b\u0438\u0435\u043d\u0442."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_revision")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0440\u0435\u0432\u0438\u0437\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e TCP \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_major")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0441\u0442\u0430\u0440\u0448\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e TCP \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_minor")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043c\u043b\u0430\u0434\u0448\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e TCP \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_version_patch")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043f\u0430\u0442\u0447 ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e TCP \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"failure_reason")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u0441\u0431\u043e\u044f \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u0438\u043b\u0438 \u0432\u044b\u0445\u043e\u0434\u0435 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.session_log LIMIT 1 FORMAT Vertical;\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntype:                    LoginSuccess\nauth_id:                 45e6bd83-b4aa-4a23-85e6-bd83b4aa1a23\nsession_id:\nevent_date:              2021-10-14\nevent_time:              2021-10-14 20:33:52\nevent_time_microseconds: 2021-10-14 20:33:52.104247\nuser:                    default\nauth_type:               PLAINTEXT_PASSWORD\nprofiles:                ['default']\nroles:                   []\nsettings:                [('load_balancing','random'),('max_memory_usage','10000000000')]\nclient_address:          ::ffff:127.0.0.1\nclient_port:             38490\ninterface:               TCP\nclient_hostname:\nclient_name:             ClickHouse client\nclient_revision:         54449\nclient_version_major:    21\nclient_version_minor:    10\nclient_version_patch:    0\nfailure_reason:\n")))}u.isMDXComponent=!0}}]);