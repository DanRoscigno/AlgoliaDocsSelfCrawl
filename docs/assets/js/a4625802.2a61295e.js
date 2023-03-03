"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[58842],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,u=c["".concat(l,".").concat(d)]||c[d]||g[d]||o;return a?n.createElement(u,p(p({ref:t},s),{},{components:a})):n.createElement(u,p({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var m=2;m<o;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const o={slug:"/ru/sql-reference/data-types/geo",sidebar_position:62,sidebar_label:"\u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"},p="\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438",i={unversionedId:"ru/sql-reference/data-types/geo",id:"ru/sql-reference/data-types/geo",title:"\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438",description:"geo-data-types}",source:"@site/docs/ru/sql-reference/data-types/geo.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/geo",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/geo",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/geo.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{slug:"/ru/sql-reference/data-types/geo",sidebar_position:62,sidebar_label:"\u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"},sidebar:"russia",previous:{title:"\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/multiword-types"},next:{title:"Map(key, value)",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/map"}},l={},m=[],s={toc:m},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geo-data-types"},"\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438"),(0,r.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u2014 \u0442\u043e\u0447\u0435\u043a (\u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0439), \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439 \u0438 \u0442.\u043f."),(0,r.kt)("admonition",{title:'"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435"',type:"danger"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e. \u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 `allow_experimental_geo_types = 1`.\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/GeoJSON"},"\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"),"."),(0,r.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/operations/settings/settings#allow-experimental-geo-types"},"allow_experimental_geo_types"),".")),(0,r.kt)("h2",{parentName:"admonition",id:"point-data-type"},"Point"),(0,r.kt)("p",{parentName:"admonition"},"\u0422\u0438\u043f ",(0,r.kt)("inlineCode",{parentName:"p"},"Point")," (\u0442\u043e\u0447\u043a\u0430) \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0430\u0440\u043e\u0439 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442 X \u0438 Y \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043a\u043e\u0440\u0442\u0435\u0436\u0430 ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/tuple"},"Tuple"),"(",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/float"},"Float64"),", ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/float"},"Float64"),")."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",{parentName:"admonition"},"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_experimental_geo_types = 1;\nCREATE TABLE geo_point (p Point) ENGINE = Memory();\nINSERT INTO geo_point VALUES((10, 10));\nSELECT p, toTypeName(p) FROM geo_point;\n")),(0,r.kt)("p",{parentName:"admonition"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500p\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(p)\u2500\u2510\n\u2502 (10,10) \u2502 Point         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{parentName:"admonition",id:"ring-data-type"},"Ring"),(0,r.kt)("p",{parentName:"admonition"},"\u0422\u0438\u043f ",(0,r.kt)("inlineCode",{parentName:"p"},"Ring")," \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u0431\u0435\u0437 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u0435\u0439 (\u0434\u044b\u0440) \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0442\u043e\u0447\u0435\u043a: ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"#point-data-type"},"Point"),")."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",{parentName:"admonition"},"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_experimental_geo_types = 1;\nCREATE TABLE geo_ring (r Ring) ENGINE = Memory();\nINSERT INTO geo_ring VALUES([(0, 0), (10, 0), (10, 10), (0, 10)]);\nSELECT r, toTypeName(r) FROM geo_ring;\n")),(0,r.kt)("p",{parentName:"admonition"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500r\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(r)\u2500\u2510\n\u2502 [(0,0),(10,0),(10,10),(0,10)] \u2502 Ring          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{parentName:"admonition",id:"polygon-data-type"},"Polygon"),(0,r.kt)("p",{parentName:"admonition"},"\u0422\u0438\u043f ",(0,r.kt)("inlineCode",{parentName:"p"},"Polygon")," \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u0441 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u043c\u0438 \u043e\u0431\u043b\u0430\u0441\u0442\u044f\u043c\u0438 (\u0434\u044b\u0440\u0430\u043c\u0438) \u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430: ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"#ring-data-type"},"Ring"),"). \u041f\u0435\u0440\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a (\u043a\u043e\u043d\u0442\u0443\u0440), \u0430 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442 \u0434\u044b\u0440\u044b."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",{parentName:"admonition"},"\u0417\u0430\u043f\u0438\u0441\u044c \u0432 \u044d\u0442\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u0441 \u043e\u0434\u043d\u043e\u0439 \u0434\u044b\u0440\u043e\u0439:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_experimental_geo_types = 1;\nCREATE TABLE geo_polygon (pg Polygon) ENGINE = Memory();\nINSERT INTO geo_polygon VALUES([[(20, 20), (50, 20), (50, 50), (20, 50)], [(30, 30), (50, 50), (50, 30)]]);\nSELECT pg, toTypeName(pg) FROM geo_polygon;\n")),(0,r.kt)("p",{parentName:"admonition"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500pg\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(pg)\u2500\u2510\n\u2502 [[(20,20),(50,20),(50,50),(20,50)],[(30,30),(50,50),(50,30)]] \u2502 Polygon        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{parentName:"admonition",id:"multipolygon-data-type"},"MultiPolygon"),(0,r.kt)("p",{parentName:"admonition"},"\u0422\u0438\u043f ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiPolygon")," \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432 (\u043f\u043e\u043b\u0438\u0433\u043e\u043d\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0435\u0442\u043a\u0443). \u041e\u043d \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432: ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"#polygon-data-type"},"Polygon"),")."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",{parentName:"admonition"},"\u0417\u0430\u043f\u0438\u0441\u044c \u0432 \u044d\u0442\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u0434\u0432\u0443\u0445 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432 \u2014 \u043f\u0435\u0440\u0432\u044b\u0439 \u0431\u0435\u0437 \u0434\u044b\u0440, \u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u0441 \u043e\u0434\u043d\u043e\u0439 \u0434\u044b\u0440\u043e\u0439:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_experimental_geo_types = 1;\nCREATE TABLE geo_multipolygon (mpg MultiPolygon) ENGINE = Memory();\nINSERT INTO geo_multipolygon VALUES([[[(0, 0), (10, 0), (10, 10), (0, 10)]], [[(20, 20), (50, 20), (50, 50), (20, 50)],[(30, 30), (50, 50), (50, 30)]]]);\nSELECT mpg, toTypeName(mpg) FROM geo_multipolygon;\n")),(0,r.kt)("p",{parentName:"admonition"},"Result:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mpg\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(mpg)\u2500\u2510\n\u2502 [[[(0,0),(10,0),(10,10),(0,10)]],[[(20,20),(50,20),(50,50),(20,50)],[(30,30),(50,50),(50,30)]]] \u2502 MultiPolygon    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"))))}g.isMDXComponent=!0}}]);