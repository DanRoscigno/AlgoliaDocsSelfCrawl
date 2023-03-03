"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[63468],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>b});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},p=Object.keys(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),u=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},k=function(t){var e=u(t.components);return n.createElement(m.Provider,{value:e},t.children)},o="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,p=t.originalType,m=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),o=u(a),d=l,b=o["".concat(m,".").concat(d)]||o[d]||s[d]||p;return a?n.createElement(b,r(r({ref:e},k),{},{components:a})):n.createElement(b,r({ref:e},k))}));function b(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var p=a.length,r=new Array(p);r[0]=d;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[o]="string"==typeof t?t:l,r[1]=i;for(var u=2;u<p;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86569:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const p={slug:"/zh/sql-reference/functions/bitmap-functions"},r="\u4f4d\u56fe\u51fd\u6570",i={unversionedId:"zh/sql-reference/functions/bitmap-functions",id:"zh/sql-reference/functions/bitmap-functions",title:"\u4f4d\u56fe\u51fd\u6570",description:"wei-tu-han-shu}",source:"@site/docs/zh/sql-reference/functions/bitmap-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/bitmap-functions",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/bitmap-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/bitmap-functions.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/functions/bitmap-functions"},sidebar:"chinese",previous:{title:"\u4f4d\u64cd\u4f5c\u51fd\u6570",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/bit-functions"},next:{title:"\u6761\u4ef6\u51fd\u6570",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/conditional-functions"}},m={},u=[{value:"bitmapBuild",id:"bitmapbuild",level:2},{value:"bitmapToArray",id:"bitmaptoarray",level:2},{value:"bitmapSubsetInRange",id:"bitmapsubsetinrange",level:2},{value:"bitmapSubsetLimit",id:"bitmapsubsetlimit",level:2},{value:"subBitmap",id:"subBitmap",level:2},{value:"bitmapContains",id:"bitmapcontains",level:2},{value:"bitmapHasAny",id:"bitmaphasany",level:2},{value:"bitmapHasAll",id:"bitmaphasall",level:2},{value:"\u4f4d\u56fe\u548c",id:"bitmapand",level:2},{value:"\u4f4d\u56fe\u6216",id:"bitmapor",level:2},{value:"bitmapXor",id:"bitmapxor",level:2},{value:"bitmapAndnot",id:"bitmapandnot",level:2},{value:"bitmapCardinality",id:"bitmapcardinality",level:2},{value:"bitmapMin",id:"bitmapmin",level:2},{value:"bitmapMax",id:"bitmapmax",level:2},{value:"\u4f4d\u56fe\u548c\u6807\u51c6\u6027",id:"bitmapandcardinality",level:2},{value:"bitmapOrCardinality",id:"bitmaporcardinality",level:2},{value:"bitmapXorCardinality",id:"bitmapxorcardinality",level:2},{value:"\u4f4d\u56fe\u548c\u975e\u6807\u51c6\u6027",id:"bitmapandnotcardinality",level:2}],k={toc:u},o="wrapper";function s(t){let{components:e,...a}=t;return(0,l.kt)(o,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wei-tu-han-shu"},"\u4f4d\u56fe\u51fd\u6570"),(0,l.kt)("p",null,"\u4f4d\u56fe\u51fd\u6570\u7528\u4e8e\u5bf9\u4e24\u4e2a\u4f4d\u56fe\u5bf9\u8c61\u8fdb\u884c\u8ba1\u7b97\uff0c\u5bf9\u4e8e\u4efb\u4f55\u4e00\u4e2a\u4f4d\u56fe\u51fd\u6570\uff0c\u5b83\u90fd\u5c06\u8fd4\u56de\u4e00\u4e2a\u4f4d\u56fe\u5bf9\u8c61\uff0c\u4f8b\u5982and\uff0cor\uff0cxor\uff0cnot\u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u4f4d\u56fe\u5bf9\u8c61\u6709\u4e24\u79cd\u6784\u9020\u65b9\u6cd5\u3002\u4e00\u4e2a\u662f\u7531\u805a\u5408\u51fd\u6570groupBitmapState\u6784\u9020\u7684\uff0c\u53e6\u4e00\u4e2a\u662f\u7531Array Object\u6784\u9020\u7684\u3002\u540c\u65f6\u8fd8\u53ef\u4ee5\u5c06\u4f4d\u56fe\u5bf9\u8c61\u8f6c\u5316\u4e3a\u6570\u7ec4\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528RoaringBitmap\u5b9e\u9645\u5b58\u50a8\u4f4d\u56fe\u5bf9\u8c61\uff0c\u5f53\u57fa\u6570\u5c0f\u4e8e\u6216\u7b49\u4e8e32\u65f6\uff0c\u5b83\u4f7f\u7528Set\u4fdd\u5b58\u3002\u5f53\u57fa\u6570\u5927\u4e8e32\u65f6\uff0c\u5b83\u4f7f\u7528RoaringBitmap\u4fdd\u5b58\u3002\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u4f4e\u57fa\u6570\u96c6\u7684\u5b58\u50a8\u66f4\u5feb\u7684\u539f\u56e0\u3002"),(0,l.kt)("p",null,"\u6709\u5173RoaringBitmap\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/RoaringBitmap/CRoaring"},"RoaringBitmap"),"\u3002"),(0,l.kt)("h2",{id:"bitmapbuild"},"bitmapBuild"),(0,l.kt)("p",null,"\u4ece\u65e0\u7b26\u53f7\u6574\u6570\u6570\u7ec4\u6784\u5efa\u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapBuild(array)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"array")," \u2013 \u65e0\u7b26\u53f7\u6574\u6570\u6570\u7ec4.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapBuild([1, 2, 3, 4, 5]) AS res\n")),(0,l.kt)("h2",{id:"bitmaptoarray"},"bitmapToArray"),(0,l.kt)("p",null,"\u5c06\u4f4d\u56fe\u8f6c\u6362\u4e3a\u6574\u6570\u6570\u7ec4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapToArray(bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u4f4d\u56fe\u5bf9\u8c61.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapBuild([1, 2, 3, 4, 5])) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,2,3,4,5] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapsubsetinrange"},"bitmapSubsetInRange"),(0,l.kt)("p",null,"\u5c06\u4f4d\u56fe\u6307\u5b9a\u8303\u56f4\uff08\u4e0d\u5305\u542brange_end\uff09\u8f6c\u6362\u4e3a\u53e6\u4e00\u4e2a\u4f4d\u56fe\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapSubsetInRange(bitmap, range_start, range_end)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u4f4d\u56fe\u5bf9\u8c61."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range_start")," \u2013 \u8303\u56f4\u8d77\u59cb\u70b9\uff08\u542b\uff09."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range_end")," \u2013 \u8303\u56f4\u7ed3\u675f\u70b9\uff08\u4e0d\u542b\uff09.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapSubsetInRange(bitmapBuild([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,100,200,500]), toUInt32(30), toUInt32(200))) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [30,31,32,33,100] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapsubsetlimit"},"bitmapSubsetLimit"),(0,l.kt)("p",null,"\u5c06\u4f4d\u56fe\u6307\u5b9a\u8303\u56f4\uff08\u8d77\u59cb\u70b9\u548c\u6570\u76ee\u4e0a\u9650\uff09\u8f6c\u6362\u4e3a\u53e6\u4e00\u4e2a\u4f4d\u56fe\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapSubsetLimit(bitmap, range_start, limit)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u4f4d\u56fe\u5bf9\u8c61."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range_start")," \u2013 \u8303\u56f4\u8d77\u59cb\u70b9\uff08\u542b\uff09."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"limit")," \u2013 \u5b50\u4f4d\u56fe\u57fa\u6570\u4e0a\u9650.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapSubsetLimit(bitmapBuild([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,100,200,500]), toUInt32(30), toUInt32(200))) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [30,31,32,33,100,200,500] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"subBitmap"},"subBitmap"),(0,l.kt)("p",null,"\u5c06\u4f4d\u56fe\u8df3\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"offset"),"\u4e2a\u5143\u7d20\uff0c\u9650\u5236\u5927\u5c0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"limit"),"\u4e2a\u7684\u7ed3\u679c\u8f6c\u6362\u4e3a\u53e6\u4e00\u4e2a\u4f4d\u56fe\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"subBitmap(bitmap, offset, limit)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u4f4d\u56fe\u5bf9\u8c61."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offset")," \u2013 \u8df3\u8fc7\u591a\u5c11\u4e2a\u5143\u7d20."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"limit")," \u2013 \u5b50\u4f4d\u56fe\u57fa\u6570\u4e0a\u9650.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(subBitmap(bitmapBuild([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,100,200,500]), toUInt32(10), toUInt32(10))) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [10,11,12,13,14,15,16,17,18,19] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapcontains"},"bitmapContains"),(0,l.kt)("p",null,"\u68c0\u67e5\u4f4d\u56fe\u662f\u5426\u5305\u542b\u6307\u5b9a\u5143\u7d20\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapContains(haystack, needle)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"haystack")," \u2013 \u4f4d\u56fe\u5bf9\u8c61."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"needle")," \u2013 \u5143\u7d20\uff0c\u7c7b\u578bUInt32.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapContains(bitmapBuild([1,5,7,9]), toUInt32(9)) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502  1  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmaphasany"},"bitmapHasAny"),(0,l.kt)("p",null,"\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"hasAny(array\uff0carray)"),"\u7c7b\u4f3c\uff0c\u5982\u679c\u4f4d\u56fe\u6709\u4efb\u4f55\u516c\u5171\u5143\u7d20\u5219\u8fd4\u56de1\uff0c\u5426\u5219\u8fd4\u56de0\u3002\n\u5bf9\u4e8e\u7a7a\u4f4d\u56fe\uff0c\u8fd4\u56de0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapHasAny(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 bitmap\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapHasAny(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2510\n\u2502  1  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmaphasall"},"bitmapHasAll"),(0,l.kt)("p",null,"\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"hasAll(array\uff0carray)"),"\u7c7b\u4f3c\uff0c\u5982\u679c\u7b2c\u4e00\u4e2a\u4f4d\u56fe\u5305\u542b\u7b2c\u4e8c\u4e2a\u4f4d\u56fe\u7684\u6240\u6709\u5143\u7d20\uff0c\u5219\u8fd4\u56de1\uff0c\u5426\u5219\u8fd4\u56de0\u3002\n\u5982\u679c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u7a7a\u4f4d\u56fe\uff0c\u5219\u8fd4\u56de1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapHasAll(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 bitmap \u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapHasAll(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2510\n\u2502  0  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapand"},"\u4f4d\u56fe\u548c"),(0,l.kt)("p",null,"\u4e3a\u4e24\u4e2a\u4f4d\u56fe\u5bf9\u8c61\u8fdb\u884c\u4e0e\u64cd\u4f5c\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapAnd(bitmap1,bitmap2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap1")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap2")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapAnd(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2510\n\u2502 [3] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapor"},"\u4f4d\u56fe\u6216"),(0,l.kt)("p",null,"\u4e3a\u4e24\u4e2a\u4f4d\u56fe\u5bf9\u8c61\u8fdb\u884c\u6216\u64cd\u4f5c\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapOr(bitmap1,bitmap2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap1")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap2")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapOr(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,2,3,4,5] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapxor"},"bitmapXor"),(0,l.kt)("p",null,"\u4e3a\u4e24\u4e2a\u4f4d\u56fe\u5bf9\u8c61\u8fdb\u884c\u5f02\u6216\u64cd\u4f5c\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapXor(bitmap1,bitmap2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap1")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap2")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapXor(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,2,4,5] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapandnot"},"bitmapAndnot"),(0,l.kt)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u4f4d\u56fe\u7684\u5dee\u5f02\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapAndnot(bitmap1,bitmap2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap1")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap2")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapAndnot(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2500\u2500\u2510\n\u2502 [1,2] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapcardinality"},"bitmapCardinality"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2aUInt64\u7c7b\u578b\u7684\u6570\u503c\uff0c\u8868\u793a\u4f4d\u56fe\u5bf9\u8c61\u7684\u57fa\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapCardinality(bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapCardinality(bitmapBuild([1, 2, 3, 4, 5])) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2510\n\u2502   5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapmin"},"bitmapMin"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2aUInt64\u7c7b\u578b\u7684\u6570\u503c\uff0c\u8868\u793a\u4f4d\u56fe\u4e2d\u7684\u6700\u5c0f\u503c\u3002\u5982\u679c\u4f4d\u56fe\u4e3a\u7a7a\u5219\u8fd4\u56deUINT32_MAX\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapMin(bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapMin(bitmapBuild([1, 2, 3, 4, 5])) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2510\n\u2502   1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapmax"},"bitmapMax"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2aUInt64\u7c7b\u578b\u7684\u6570\u503c\uff0c\u8868\u793a\u4f4d\u56fe\u4e2d\u7684\u6700\u5927\u503c\u3002\u5982\u679c\u4f4d\u56fe\u4e3a\u7a7a\u5219\u8fd4\u56de0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapMax(bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapMax(bitmapBuild([1, 2, 3, 4, 5])) AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2510\n\u2502   5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapandcardinality"},"\u4f4d\u56fe\u548c\u6807\u51c6\u6027"),(0,l.kt)("p",null,"\u4e3a\u4e24\u4e2a\u4f4d\u56fe\u5bf9\u8c61\u8fdb\u884c\u4e0e\u64cd\u4f5c\uff0c\u8fd4\u56de\u7ed3\u679c\u4f4d\u56fe\u7684\u57fa\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapAndCardinality(bitmap1,bitmap2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap1")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap2")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapAndCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2510\n\u2502   1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmaporcardinality"},"bitmapOrCardinality"),(0,l.kt)("p",null,"\u4e3a\u4e24\u4e2a\u4f4d\u56fe\u8fdb\u884c\u6216\u8fd0\u7b97\uff0c\u8fd4\u56de\u7ed3\u679c\u4f4d\u56fe\u7684\u57fa\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapOrCardinality(bitmap1,bitmap2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap1")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap2")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapOrCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2510\n\u2502   5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapxorcardinality"},"bitmapXorCardinality"),(0,l.kt)("p",null,"\u4e3a\u4e24\u4e2a\u4f4d\u56fe\u8fdb\u884c\u5f02\u6216\u8fd0\u7b97\uff0c\u8fd4\u56de\u7ed3\u679c\u4f4d\u56fe\u7684\u57fa\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapXorCardinality(bitmap1,bitmap2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap1")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap2")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapXorCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2510\n\u2502   4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapandnotcardinality"},"\u4f4d\u56fe\u548c\u975e\u6807\u51c6\u6027"),(0,l.kt)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u4f4d\u56fe\u7684\u5dee\u5f02\uff0c\u8fd4\u56de\u7ed3\u679c\u4f4d\u56fe\u7684\u57fa\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapAndnotCardinality(bitmap1,bitmap2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap1")," \u2013 \u4f4d\u56fe\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap2")," - \u4f4d\u56fe\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapAndnotCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500res\u2500\u2510\n\u2502   2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")))}s.isMDXComponent=!0}}]);