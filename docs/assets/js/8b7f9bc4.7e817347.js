"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[41610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84453:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/ru/sql-reference/statements/create/dictionary",sidebar_position:38,sidebar_label:"\u0421\u043b\u043e\u0432\u0430\u0440\u044c"},i="CREATE DICTIONARY",c={unversionedId:"ru/sql-reference/statements/create/dictionary",id:"ru/sql-reference/statements/create/dictionary",title:"CREATE DICTIONARY",description:"create-dictionary-query}",source:"@site/docs/ru/sql-reference/statements/create/dictionary.md",sourceDirName:"ru/sql-reference/statements/create",slug:"/ru/sql-reference/statements/create/dictionary",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/create/dictionary",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/create/dictionary.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{slug:"/ru/sql-reference/statements/create/dictionary",sidebar_position:38,sidebar_label:"\u0421\u043b\u043e\u0432\u0430\u0440\u044c"},sidebar:"russia",previous:{title:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/create/view"},next:{title:"FUNCTION",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/statements/create/function"}},o={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-dictionary-query"},"CREATE DICTIONARY"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0451\u0442 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/dictionaries/external-dictionaries/external-dicts"},"\u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0441\u043b\u043e\u0432\u0430\u0440\u044c")," \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439"),", ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u043c"),", ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"\u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432 \u043f\u0430\u043c\u044f\u0442\u0438")," \u0438 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"\u043f\u0435\u0440\u0438\u043e\u0434\u043e\u043c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY [OR REPLACE][IF NOT EXISTS] [db.]dictionary_name [ON CLUSTER cluster]\n(\n    key1 type1  [DEFAULT|EXPRESSION expr1] [IS_OBJECT_ID],\n    key2 type2  [DEFAULT|EXPRESSION expr2],\n    attr1 type2 [DEFAULT|EXPRESSION expr3] [HIERARCHICAL|INJECTIVE],\n    attr2 type2 [DEFAULT|EXPRESSION expr4] [HIERARCHICAL|INJECTIVE]\n)\nPRIMARY KEY key1, key2\nSOURCE(SOURCE_NAME([param1 value1 ... paramN valueN]))\nLAYOUT(LAYOUT_NAME([param_name param_value]))\nLIFETIME({MIN min_val MAX max_val | max_val})\nSETTINGS(setting_name = setting_value, setting_name = setting_value, ...)\nCOMMENT 'Comment'\n")),(0,a.kt)("p",null,"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432. \u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044b \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0415\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0433\u043e \u0442\u0438\u043f, \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,a.kt)("p",null,"\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"\u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0432 \u043f\u0430\u043c\u044f\u0442\u0438"),", \u043a\u043b\u044e\u0447\u0430\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0434\u0438\u043d \u0438 \u0431\u043e\u043b\u0435\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432."),(0,a.kt)("p",null,"\u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/dictionaries/external-dictionaries/external-dicts"},"\u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438"),"."),(0,a.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0441\u043b\u043e\u0432\u0430\u0440\u044e \u043f\u0440\u0438 \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0435\u043a\u0446\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"COMMENT"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"source_table"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500value\u2500\u2500\u2510\n\u2502  1 \u2502 First  \u2502\n\u2502  2 \u2502 Second \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dictionary_with_comment\n(\n    id UInt64,\n    value String\n)\nPRIMARY KEY id\nSOURCE(CLICKHOUSE(HOST 'localhost' PORT tcpPort() TABLE 'source_table'))\nLAYOUT(FLAT())\nLIFETIME(MIN 0 MAX 1000)\nCOMMENT 'The temporary dictionary';\n")),(0,a.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434 \u0441\u043b\u043e\u0432\u0430\u0440\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE DICTIONARY dictionary_with_comment;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE DICTIONARY default.dictionary_with_comment\n(\n    `id` UInt64,\n    `value` String\n)\nPRIMARY KEY id\nSOURCE(CLICKHOUSE(HOST 'localhost' PORT tcpPort() TABLE 'source_table'))\nLIFETIME(MIN 0 MAX 1000)\nLAYOUT(FLAT())\nCOMMENT 'The temporary dictionary' \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f \u043a \u0441\u043b\u043e\u0432\u0430\u0440\u044e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT comment FROM system.dictionaries WHERE name == 'dictionary_with_comment' AND database == currentDatabase();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 The temporary dictionary \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/system-tables/dictionaries"},"system.dictionaries")," \u2014 \u044d\u0442\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e ",(0,a.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/dictionaries/external-dictionaries/external-dicts"},"\u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u0445"),".")))}m.isMDXComponent=!0}}]);