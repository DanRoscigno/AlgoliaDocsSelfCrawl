"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[4058],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(a),k=r,d=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(d,p(p({ref:t},u),{},{components:a})):n.createElement(d,p({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3675:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={slug:"/ru/sql-reference/data-types/map",sidebar_position:65,sidebar_label:"Map(key, value)"},p="Map(key, value)",s={unversionedId:"ru/sql-reference/data-types/map",id:"ru/sql-reference/data-types/map",title:"Map(key, value)",description:"data_type-map}",source:"@site/docs/ru/sql-reference/data-types/map.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/map",permalink:"/docs/ru/sql-reference/data-types/map",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/map.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{slug:"/ru/sql-reference/data-types/map",sidebar_position:65,sidebar_label:"Map(key, value)"},sidebar:"russia",previous:{title:"\u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",permalink:"/docs/ru/sql-reference/data-types/geo"},next:{title:"SimpleAggregateFunction(func, type)",permalink:"/docs/ru/sql-reference/data-types/simpleaggregatefunction"}},o={},i=[{value:"\u041f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0446\u044b Map.keys \u0438 Map.values",id:"map-subcolumns",level:2}],u={toc:i},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data_type-map"},"Map(key, value)"),(0,r.kt)("p",null,"\u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,r.kt)("inlineCode",{parentName:"p"},"Map(key, value)")," \u0445\u0440\u0430\u043d\u0438\u0442 \u043f\u0430\u0440\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"\u043a\u043b\u044e\u0447:\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," \u2014 \u043a\u043b\u044e\u0447. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"Integer"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/lowcardinality"},"LowCardinality"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/fixedstring"},"FixedString"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/uuid"},"UUID"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date"},"Date"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date32"},"Date32"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/enum"},"Enum"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041b\u044e\u0431\u043e\u0439 \u0442\u0438\u043f, \u0432\u043a\u043b\u044e\u0447\u0430\u044f ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/map"},"Map")," \u0438 ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"Array"),".")),(0,r.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u043a\u043e\u043b\u043e\u043d\u043a\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"a Map('key', 'value')"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"a['key']"),". \u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0442\u0430\u043a\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u043e \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0443 \u0441 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,r.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_map (a Map(String, UInt64)) ENGINE=Memory;\nINSERT INTO table_map VALUES ({'key1':1, 'key2':10}), ({'key1':2,'key2':20}), ({'key1':3,'key2':30});\n")),(0,r.kt)("p",null,"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 \u0432\u0441\u0435\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043a\u043b\u044e\u0447\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"key2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a['key2'] FROM table_map;\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key2')\u2500\u2510\n\u2502                      10 \u2502\n\u2502                      20 \u2502\n\u2502                      30 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0434\u043b\u044f \u043a\u0430\u043a\u043e\u0433\u043e-\u0442\u043e \u043a\u043b\u044e\u0447\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," \u0432 \u043a\u043e\u043b\u043e\u043d\u043a\u0435 \u0441 \u0442\u0438\u043f\u043e\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"Map()")," \u043d\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043d\u0443\u043b\u0438 \u0434\u043b\u044f \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a, \u043f\u0443\u0441\u0442\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0438\u043b\u0438 \u043f\u0443\u0441\u0442\u044b\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u044b."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_map VALUES ({'key3':100}), ({});\nSELECT a['key3'] FROM table_map;\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key3')\u2500\u2510\n\u2502                     100 \u2502\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500arrayElement(a, 'key3')\u2500\u2510\n\u2502                       0 \u2502\n\u2502                       0 \u2502\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"map-subcolumns"},"\u041f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0446\u044b Map.keys \u0438 Map.values"),(0,r.kt)("p",null,"\u0414\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0446\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," \u0432\u043c\u0435\u0441\u0442\u043e \u0447\u0442\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_map (`a` Map(String, UInt64)) ENGINE = Memory;\n\nINSERT INTO t_map VALUES (map('key1', 1, 'key2', 2, 'key3', 3));\n\nSELECT a.keys FROM t_map;\n\nSELECT a.values FROM t_map;\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a.keys\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['key1','key2','key3'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u250c\u2500a.values\u2500\u2510\n\u2502 [1,2,3]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/tuple-map-functions#function-map"},"map()")),(0,r.kt)("li",{parentName:"ul"},"\u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"CAST()"))))}m.isMDXComponent=!0}}]);