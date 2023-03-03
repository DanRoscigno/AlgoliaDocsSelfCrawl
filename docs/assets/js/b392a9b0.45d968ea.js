"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[90658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,m=c["".concat(o,".").concat(d)]||c[d]||g[d]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/ru/engines/table-engines/integrations/ExternalDistributed",sidebar_position:12,sidebar_label:"ExternalDistributed"},l="ExternalDistributed",s={unversionedId:"ru/engines/table-engines/integrations/ExternalDistributed",id:"ru/engines/table-engines/integrations/ExternalDistributed",title:"ExternalDistributed",description:"externaldistributed}",source:"@site/docs/ru/engines/table-engines/integrations/ExternalDistributed.md",sourceDirName:"ru/engines/table-engines/integrations",slug:"/ru/engines/table-engines/integrations/ExternalDistributed",permalink:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/integrations/ExternalDistributed",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/integrations/ExternalDistributed.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{slug:"/ru/engines/table-engines/integrations/ExternalDistributed",sidebar_position:12,sidebar_label:"ExternalDistributed"},sidebar:"russia",previous:{title:"PostgreSQL",permalink:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/integrations/postgresql"},next:{title:"MaterializedPostgreSQL",permalink:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/integrations/materialized-postgresql"}},o={},u=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"creating-a-table",level:2},{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"implementation-details",level:2}],p={toc:u},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"externaldistributed"},"ExternalDistributed"),(0,a.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"ExternalDistributed")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435 MySQL \u0438\u043b\u0438 PostgreSQL. \u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0434\u0432\u0438\u0436\u043a\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/integrations/mysql"},"MySQL")," \u0438\u043b\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/integrations/postgresql"},"PostgreSQL"),", \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0448\u0430\u0440\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."),(0,a.kt)("h2",{id:"creating-a-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [TTL expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2] [TTL expr2],\n    ...\n) ENGINE = ExternalDistributed('engine', 'host:port', 'database', 'table', 'user', 'password');\n")),(0,a.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/create/table#create-table-query"},"CREATE TABLE"),"."),(0,a.kt)("p",null,"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0418\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0442\u0430\u043a\u0438\u043c\u0438 \u0436\u0435, \u043a\u0430\u043a \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435, \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u044d\u0442\u0438\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0438 \u0432 \u043b\u044e\u0431\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435."),(0,a.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f\u044b \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0442\u0438\u043f\u043e\u0432 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435. ClickHouse \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"\u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a \u0442\u0438\u043f\u0430\u043c \u0434\u0430\u043d\u043d\u044b\u0445 ClickHouse.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"engine")," \u2014 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0434\u0432\u0438\u0436\u043e\u043a ",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"PostgreSQL"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 MySQL \u0438\u043b\u0438 PostgreSQL."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"database")," \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"table")," \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")," \u2014 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password")," \u2014 \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,a.kt)("h2",{id:"implementation-details"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,a.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u043f\u043b\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u0447\u0435\u0440\u0435\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"|"),", \u0430 \u0448\u0430\u0440\u0434\u044b \u2014 \u0447\u0435\u0440\u0435\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},","),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_shards (id UInt32, name String, age UInt32, money UInt32) ENGINE = ExternalDistributed('MySQL', `mysql{1|2}:3306,mysql{3|4}:3306`, 'clickhouse', 'test_replicas', 'root', 'clickhouse');\n")),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0438 \u0440\u0435\u043f\u043b\u0438\u043a \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u0448\u0430\u0440\u0434\u043e\u0432 \u043f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u0430 \u0438\u0437 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0440\u0435\u043f\u043b\u0438\u043a. \u0415\u0441\u043b\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c, \u0442\u043e \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u0440\u0435\u043f\u043b\u0438\u043a\u0430, \u0438 \u0442\u0430\u043a \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0440\u0435\u043f\u043b\u0438\u043a. \u0415\u0441\u043b\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0440\u0435\u043f\u043b\u0438\u043a, \u0442\u043e \u0441\u0435\u0440\u0432\u0435\u0440 ClickHouse \u0441\u043d\u043e\u0432\u0430 \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u0441 \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u0440\u0435\u043f\u043b\u0438\u043a, \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u044f \u0438\u0445 \u043f\u043e \u043a\u0440\u0443\u0433\u0443, \u0438 \u0442\u0430\u043a \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437."),(0,a.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0430\u0440\u0434\u043e\u0432 \u0438 \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0435\u043f\u043b\u0438\u043a \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0448\u0430\u0440\u0434\u0430."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/integrations/mysql"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0434\u0432\u0438\u0436\u043e\u043a MySQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/integrations/postgresql"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0434\u0432\u0438\u0436\u043e\u043a PostgreSQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/special/distributed"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0434\u0432\u0438\u0436\u043e\u043a Distributed"))))}g.isMDXComponent=!0}}]);