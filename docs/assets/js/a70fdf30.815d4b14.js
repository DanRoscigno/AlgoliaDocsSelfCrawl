"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[51480],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>y});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),s=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),k=r,y=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return t?n.createElement(y,p(p({ref:a},c),{},{components:t})):n.createElement(y,p({ref:a},c))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=k;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},83010:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const l={slug:"/zh/sql-reference/data-types/map",sidebar_position:65,sidebar_label:"Map(key, value)"},p="Map(key, value)",i={unversionedId:"zh/sql-reference/data-types/map",id:"zh/sql-reference/data-types/map",title:"Map(key, value)",description:"data_type-map}",source:"@site/docs/zh/sql-reference/data-types/map.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/map",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/map",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/map.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{slug:"/zh/sql-reference/data-types/map",sidebar_position:65,sidebar_label:"Map(key, value)"},sidebar:"chinese",previous:{title:"Geo",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/geo"},next:{title:"AggregateFunction(name, types_of_arguments\u2026)",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/aggregatefunction"}},o={},s=[{value:"\u5c06Tuple\u7c7b\u578b\u8f6c\u6362\u6210Map\u7c7b\u578b",id:"map-and-tuple",level:2},{value:"Map.keys \u548c Map.values \u5355\u72ec\u4f7f\u7528",id:"map-subcolumns",level:2}],c={toc:s},u="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data_type-map"},"Map(key, value)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Map(key, value)")," \u53ef\u4ee5\u5b58\u50a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"key:value")," \u952e\u503c\u5bf9\u7c7b\u578b\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," \u2014 \u952e\u503c\u5bf9\u7684key\uff0c\u7c7b\u578b\u53ef\u4ee5\u662f\uff1a",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),", ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Integer"),", ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/lowcardinality"},"LowCardinality"),", \u6216\u8005 ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/fixedstring"},"FixedString"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u2014 \u952e\u503c\u5bf9\u7684value\uff0c\u7c7b\u578b\u53ef\u4ee5\u662f\uff1a",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/string"},"String"),", ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/int-uint"},"Integer"),", ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/array"},"Array"),", ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/lowcardinality"},"LowCardinality"),", \u6216\u8005 ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/fixedstring"},"FixedString"),".")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"a['key']")," \u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"a Map('key', 'value')")," \u7c7b\u578b\u7684\u5217\u4e2d\u83b7\u53d6\u5230\u5bf9\u5e94\u7684\u503c\uff0c\u8fd9\u662f\u4e00\u4e2a\u7ebf\u6027\u590d\u6742\u5ea6\u7684\u67e5\u8be2\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("p",null,"\u793a\u4f8b\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_map (a Map(String, UInt64)) ENGINE=Memory;\nINSERT INTO table_map VALUES ({'key1':1, 'key2':10}), ({'key1':2,'key2':20}), ({'key1':3,'key2':30});\n")),(0,r.kt)("p",null,"\u67e5\u8be2 ",(0,r.kt)("inlineCode",{parentName:"p"},"key2")," \u7684\u6240\u6709\u503c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a['key2'] FROM table_map;\n")),(0,r.kt)("p",null,"\u67e5\u8be2\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key2')\u2500\u2510\n\u2502                      10 \u2502\n\u2502                      20 \u2502\n\u2502                      30 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u5982\u679c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Map()")," \u7c7b\u578b\u7684\u5217\u4e2d\uff0c\u67e5\u8be2\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," \u503c\u4e0d\u5b58\u5728\uff0c\u90a3\u4e48\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," \u7684\u7c7b\u578b\uff0c\u67e5\u8be2\u7ed3\u679c\u5c06\u4f1a\u662f\u6570\u5b570\uff0c\u7a7a\u5b57\u7b26\u4e32\u6216\u8005\u7a7a\u6570\u7ec4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_map VALUES ({'key3':100}), ({});\nSELECT a['key3'] FROM table_map;\n")),(0,r.kt)("p",null,"\u67e5\u8be2\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key3')\u2500\u2510\n\u2502                     100 \u2502\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500arrayElement(a, 'key3')\u2500\u2510\n\u2502                       0 \u2502\n\u2502                       0 \u2502\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"map-and-tuple"},"\u5c06Tuple\u7c7b\u578b\u8f6c\u6362\u6210Map\u7c7b\u578b"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"CAST")," \u65b9\u6cd5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Tuple()")," \u8f6c\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"Map()")," \uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CAST(([1, 2, 3], ['Ready', 'Steady', 'Go']), 'Map(UInt8, String)') AS map;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500map\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 {1:'Ready',2:'Steady',3:'Go'} \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"map-subcolumns"},"Map.keys \u548c Map.values \u5355\u72ec\u4f7f\u7528"),(0,r.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," \u7c7b\u578b\uff0c\u5728\u4e00\u5b9a\u7684\u573a\u666f\u4e0b\uff0c\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"values"),"\uff0c\u800c\u4e0d\u9700\u8981\u5c06\u6574\u4e2a\u5217\u7684\u6570\u636e\u90fd\u8bfb\u53d6\u51fa\u6765\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("p",null,"\u67e5\u8be2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_map (`a` Map(String, UInt64)) ENGINE = Memory;\nINSERT INTO t_map VALUES (map('key1', 1, 'key2', 2, 'key3', 3));\nSELECT a.keys FROM t_map;\nSELECT a.values FROM t_map;\n")),(0,r.kt)("p",null,"\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a.keys\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['key1','key2','key3'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500a.values\u2500\u2510\n\u2502 [1,2,3]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/tuple-map-functions#function-map"},"map()")," function"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"CAST()")," function")))}m.isMDXComponent=!0}}]);