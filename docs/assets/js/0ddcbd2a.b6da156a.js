"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[44114],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>I});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=l(n),d=a,I=u["".concat(s,".").concat(d)]||u[d]||g[d]||i;return n?r.createElement(I,c(c({ref:e},p),{},{components:n})):r.createElement(I,c({ref:e},p))}));function I(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7738:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/zh/getting-started/example-datasets/criteo",sidebar_position:18,sidebar_label:"Terabyte Click Logs from Criteo"},c="Terabyte of Click Logs from Criteo",o={unversionedId:"zh/getting-started/example-datasets/criteo",id:"zh/getting-started/example-datasets/criteo",title:"Terabyte of Click Logs from Criteo",description:"criteo-tbji-bie-dian-ji-ri-zhi}",source:"@site/docs/zh/getting-started/example-datasets/criteo.md",sourceDirName:"zh/getting-started/example-datasets",slug:"/zh/getting-started/example-datasets/criteo",permalink:"/docs/zh/getting-started/example-datasets/criteo",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/getting-started/example-datasets/criteo.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{slug:"/zh/getting-started/example-datasets/criteo",sidebar_position:18,sidebar_label:"Terabyte Click Logs from Criteo"},sidebar:"chinese",previous:{title:"WikiStat",permalink:"/docs/zh/getting-started/example-datasets/wikistat"},next:{title:"AMPLab Big Data Benchmark",permalink:"/docs/zh/getting-started/example-datasets/amplab-benchmark"}},s={},l=[],p={toc:l},u="wrapper";function g(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"criteo-tbji-bie-dian-ji-ri-zhi"},"Terabyte of Click Logs from Criteo"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"http://labs.criteo.com/downloads/download-terabyte-click-logs/"},"http://labs.criteo.com/downloads/download-terabyte-click-logs/")," \u4e0a\u4e0b\u8f7d\u6570\u636e"),(0,a.kt)("p",null,"\u521b\u5efa\u539f\u59cb\u6570\u636e\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE criteo_log (date Date, clicked UInt8, int1 Int32, int2 Int32, int3 Int32, int4 Int32, int5 Int32, int6 Int32, int7 Int32, int8 Int32, int9 Int32, int10 Int32, int11 Int32, int12 Int32, int13 Int32, cat1 String, cat2 String, cat3 String, cat4 String, cat5 String, cat6 String, cat7 String, cat8 String, cat9 String, cat10 String, cat11 String, cat12 String, cat13 String, cat14 String, cat15 String, cat16 String, cat17 String, cat18 String, cat19 String, cat20 String, cat21 String, cat22 String, cat23 String, cat24 String, cat25 String, cat26 String) ENGINE = Log\n")),(0,a.kt)("p",null,"\u4e0b\u8f7d\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ for i in {00..23}; do echo $i; zcat datasets/criteo/day_${i#0}.gz | sed -r 's/^/2000-01-'${i/00/24}'\\t/' | clickhouse-client --host=example-perftest01j --query=\"INSERT INTO criteo_log FORMAT TabSeparated\"; done\n")),(0,a.kt)("p",null,"\u521b\u5efa\u8f6c\u6362\u540e\u7684\u6570\u636e\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE criteo\n(\n    date Date,\n    clicked UInt8,\n    int1 Int32,\n    int2 Int32,\n    int3 Int32,\n    int4 Int32,\n    int5 Int32,\n    int6 Int32,\n    int7 Int32,\n    int8 Int32,\n    int9 Int32,\n    int10 Int32,\n    int11 Int32,\n    int12 Int32,\n    int13 Int32,\n    icat1 UInt32,\n    icat2 UInt32,\n    icat3 UInt32,\n    icat4 UInt32,\n    icat5 UInt32,\n    icat6 UInt32,\n    icat7 UInt32,\n    icat8 UInt32,\n    icat9 UInt32,\n    icat10 UInt32,\n    icat11 UInt32,\n    icat12 UInt32,\n    icat13 UInt32,\n    icat14 UInt32,\n    icat15 UInt32,\n    icat16 UInt32,\n    icat17 UInt32,\n    icat18 UInt32,\n    icat19 UInt32,\n    icat20 UInt32,\n    icat21 UInt32,\n    icat22 UInt32,\n    icat23 UInt32,\n    icat24 UInt32,\n    icat25 UInt32,\n    icat26 UInt32\n) ENGINE = MergeTree(date, intHash32(icat1), (date, intHash32(icat1)), 8192)\n")),(0,a.kt)("p",null,"\u5c06\u7b2c\u4e00\u5f20\u8868\u4e2d\u7684\u539f\u59cb\u6570\u636e\u8f6c\u5316\u5199\u5165\u5230\u7b2c\u4e8c\u5f20\u8868\u4e2d\u53bb\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO criteo SELECT date, clicked, int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, reinterpretAsUInt32(unhex(cat1)) AS icat1, reinterpretAsUInt32(unhex(cat2)) AS icat2, reinterpretAsUInt32(unhex(cat3)) AS icat3, reinterpretAsUInt32(unhex(cat4)) AS icat4, reinterpretAsUInt32(unhex(cat5)) AS icat5, reinterpretAsUInt32(unhex(cat6)) AS icat6, reinterpretAsUInt32(unhex(cat7)) AS icat7, reinterpretAsUInt32(unhex(cat8)) AS icat8, reinterpretAsUInt32(unhex(cat9)) AS icat9, reinterpretAsUInt32(unhex(cat10)) AS icat10, reinterpretAsUInt32(unhex(cat11)) AS icat11, reinterpretAsUInt32(unhex(cat12)) AS icat12, reinterpretAsUInt32(unhex(cat13)) AS icat13, reinterpretAsUInt32(unhex(cat14)) AS icat14, reinterpretAsUInt32(unhex(cat15)) AS icat15, reinterpretAsUInt32(unhex(cat16)) AS icat16, reinterpretAsUInt32(unhex(cat17)) AS icat17, reinterpretAsUInt32(unhex(cat18)) AS icat18, reinterpretAsUInt32(unhex(cat19)) AS icat19, reinterpretAsUInt32(unhex(cat20)) AS icat20, reinterpretAsUInt32(unhex(cat21)) AS icat21, reinterpretAsUInt32(unhex(cat22)) AS icat22, reinterpretAsUInt32(unhex(cat23)) AS icat23, reinterpretAsUInt32(unhex(cat24)) AS icat24, reinterpretAsUInt32(unhex(cat25)) AS icat25, reinterpretAsUInt32(unhex(cat26)) AS icat26 FROM criteo_log;\n\nDROP TABLE criteo_log;\n")))}g.isMDXComponent=!0}}]);