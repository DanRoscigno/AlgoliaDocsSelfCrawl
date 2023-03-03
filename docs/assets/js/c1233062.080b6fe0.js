"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[73598],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),u=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=u(e.components);return l.createElement(o.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,k=s["".concat(o,".").concat(d)]||s[d]||c[d]||r;return t?l.createElement(k,p(p({ref:n},m),{},{components:t})):l.createElement(k,p({ref:n},m))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[s]="string"==typeof e?e:a,p[1]=i;for(var u=2;u<r;u++)p[u]=t[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=t(87462),a=(t(67294),t(3905));const r={slug:"/zh/sql-reference/data-types/enum"},p="Enum8,Enum16",i={unversionedId:"zh/sql-reference/data-types/enum",id:"zh/sql-reference/data-types/enum",title:"Enum8,Enum16",description:"enum8-enum16}",source:"@site/docs/zh/sql-reference/data-types/enum.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/enum",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/enum",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/enum.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/data-types/enum"},sidebar:"chinese",previous:{title:"Decimal(P,S),Decimal32(S),Decimal64(S),Decimal128(S)",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/decimal"},next:{title:"\u56fa\u5b9a\u5b57\u7b26\u4e32",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/fixedstring"}},o={},u=[{value:"\u7528\u6cd5\u793a\u4f8b",id:"yong-fa-shi-li",level:2},{value:"\u89c4\u5219\u53ca\u7528\u6cd5",id:"gui-ze-ji-yong-fa",level:2}],m={toc:u},s="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enum8-enum16"},"Enum8,Enum16"),(0,a.kt)("p",null,"\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"Enum8")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Enum16")," \u7c7b\u578b\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"Enum")," \u4fdd\u5b58 ",(0,a.kt)("inlineCode",{parentName:"p"},"'string'= integer")," \u7684\u5bf9\u5e94\u5173\u7cfb\u3002\u5728 ClickHouse \u4e2d\uff0c\u5c3d\u7ba1\u7528\u6237\u4f7f\u7528\u7684\u662f\u5b57\u7b26\u4e32\u5e38\u91cf\uff0c\u4f46\u6240\u6709\u542b\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enum")," \u6570\u636e\u7c7b\u578b\u7684\u64cd\u4f5c\u90fd\u662f\u6309\u7167\u5305\u542b\u6574\u6570\u7684\u503c\u6765\u6267\u884c\u3002\u8fd9\u5728\u6027\u80fd\u65b9\u9762\u6bd4\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," \u6570\u636e\u7c7b\u578b\u66f4\u6709\u6548\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Enum8")," \u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"'String'= Int8")," \u5bf9\u63cf\u8ff0\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Enum16")," \u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"'String'= Int16")," \u5bf9\u63cf\u8ff0\u3002")),(0,a.kt)("h2",{id:"yong-fa-shi-li"},"\u7528\u6cd5\u793a\u4f8b"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u4e00\u4e2a\u679a\u4e3e ",(0,a.kt)("inlineCode",{parentName:"p"},"Enum8('hello' = 1, 'world' = 2)")," \u7c7b\u578b\u7684\u5217\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE TABLE t_enum\n(\n    x Enum8('hello' = 1, 'world' = 2)\n)\nENGINE = TinyLog\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," \u5217\u53ea\u80fd\u5b58\u50a8\u7c7b\u578b\u5b9a\u4e49\u4e2d\u5217\u51fa\u7684\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"'hello'"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"'world'"),"\u3002\u5982\u679c\u60a8\u5c1d\u8bd5\u4fdd\u5b58\u4efb\u4f55\u5176\u4ed6\u503c\uff0cClickHouse \u629b\u51fa\u5f02\u5e38\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t_enum VALUES ('hello'), ('world'), ('hello')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"Ok.\n\n3 rows in set. Elapsed: 0.002 sec.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t_enum VALUES('a')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"Exception on client:\nCode: 49. DB::Exception: Unknown element 'a' for type Enum8('hello' = 1, 'world' = 2)\n")),(0,a.kt)("p",null,"\u5f53\u60a8\u4ece\u8868\u4e2d\u67e5\u8be2\u6570\u636e\u65f6\uff0cClickHouse \u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"Enum")," \u4e2d\u8f93\u51fa\u5b57\u7b26\u4e32\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM t_enum\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 hello \u2502\n\u2502 world \u2502\n\u2502 hello \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u770b\u5230\u5bf9\u5e94\u884c\u7684\u6570\u503c\uff0c\u5219\u5fc5\u987b\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enum")," \u503c\u8f6c\u6362\u4e3a\u6574\u6570\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CAST(x, 'Int8') FROM t_enum\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500CAST(x, 'Int8')\u2500\u2510\n\u2502               1 \u2502\n\u2502               2 \u2502\n\u2502               1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u5728\u67e5\u8be2\u4e2d\u521b\u5efa\u679a\u4e3e\u503c\uff0c\u60a8\u8fd8\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"CAST"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(CAST('a', 'Enum8(\\'a\\' = 1, \\'b\\' = 2)'))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500toTypeName(CAST('a', 'Enum8(\\'a\\' = 1, \\'b\\' = 2)'))\u2500\u2510\n\u2502 Enum8('a' = 1, 'b' = 2)                              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"gui-ze-ji-yong-fa"},"\u89c4\u5219\u53ca\u7528\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Enum8")," \u7c7b\u578b\u7684\u6bcf\u4e2a\u503c\u8303\u56f4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"-128 ... 127"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Enum16")," \u7c7b\u578b\u7684\u6bcf\u4e2a\u503c\u8303\u56f4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"-32768 ... 32767"),"\u3002\u6240\u6709\u7684\u5b57\u7b26\u4e32\u6216\u8005\u6570\u5b57\u90fd\u5fc5\u987b\u662f\u4e0d\u4e00\u6837\u7684\u3002\u5141\u8bb8\u5b58\u5728\u7a7a\u5b57\u7b26\u4e32\u3002\u5982\u679c\u67d0\u4e2a Enum \u7c7b\u578b\u88ab\u6307\u5b9a\u4e86\uff08\u5728\u8868\u5b9a\u4e49\u7684\u65f6\u5019\uff09\uff0c\u6570\u5b57\u53ef\u4ee5\u662f\u4efb\u610f\u987a\u5e8f\u3002\u7136\u800c\uff0c\u987a\u5e8f\u5e76\u4e0d\u91cd\u8981\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Enum")," \u4e2d\u7684\u5b57\u7b26\u4e32\u548c\u6570\u503c\u90fd\u4e0d\u80fd\u662f ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/enum"},"NULL"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Enum")," \u5305\u542b\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/sql-reference/data-types/nullable"},"\u53ef\u4e3a\u7a7a")," \u7c7b\u578b\u4e2d\u3002\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u6b64\u67e5\u8be2\u521b\u5efa\u4e00\u4e2a\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_enum_nullable\n(\n    x Nullable( Enum8('hello' = 1, 'world' = 2) )\n)\nENGINE = TinyLog\n")),(0,a.kt)("p",null,"\u4e0d\u4ec5\u53ef\u4ee5\u5b58\u50a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"'hello'")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"'world'")," \uff0c\u8fd8\u53ef\u4ee5\u5b58\u50a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t_enum_nullable Values('hello'),('world'),(NULL)\n")),(0,a.kt)("p",null,"\u5728\u5185\u5b58\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Enum")," \u5217\u7684\u5b58\u50a8\u65b9\u5f0f\u4e0e\u76f8\u5e94\u6570\u503c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Int8")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"Int16")," \u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u5f53\u4ee5\u6587\u672c\u65b9\u5f0f\u8bfb\u53d6\u7684\u65f6\u5019\uff0cClickHouse \u5c06\u503c\u89e3\u6790\u6210\u5b57\u7b26\u4e32\u7136\u540e\u53bb\u679a\u4e3e\u503c\u7684\u96c6\u5408\u4e2d\u641c\u7d22\u5bf9\u5e94\u5b57\u7b26\u4e32\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0c\u4f1a\u629b\u51fa\u5f02\u5e38\u3002\u5f53\u8bfb\u53d6\u6587\u672c\u683c\u5f0f\u7684\u65f6\u5019\uff0c\u4f1a\u6839\u636e\u8bfb\u53d6\u5230\u7684\u5b57\u7b26\u4e32\u53bb\u627e\u5bf9\u5e94\u7684\u6570\u503c\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0c\u4f1a\u629b\u51fa\u5f02\u5e38\u3002"),(0,a.kt)("p",null,"\u5f53\u4ee5\u6587\u672c\u5f62\u5f0f\u5199\u5165\u65f6\uff0cClickHouse \u5c06\u503c\u89e3\u6790\u6210\u5b57\u7b26\u4e32\u5199\u5165\u3002\u5982\u679c\u5217\u6570\u636e\u5305\u542b\u5783\u573e\u6570\u636e\uff08\u4e0d\u662f\u6765\u81ea\u6709\u6548\u96c6\u5408\u7684\u6570\u5b57\uff09\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002Enum \u7c7b\u578b\u4ee5\u4e8c\u8fdb\u5236\u8bfb\u53d6\u548c\u5199\u5165\u7684\u65b9\u5f0f\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"Int8")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Int16")," \u7c7b\u578b\u4e00\u6837\u7684\u3002"),(0,a.kt)("p",null,"\u9690\u5f0f\u9ed8\u8ba4\u503c\u662f\u6570\u503c\u6700\u5c0f\u7684\u503c\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"IN"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u7b49\u7b49\u4e2d\uff0cEnum \u7684\u884c\u4e3a\u4e0e\u76f8\u5e94\u7684\u6570\u5b57\u76f8\u540c\u3002\u4f8b\u5982\uff0c\u6309\u6570\u5b57\u6392\u5e8f\u3002\u5bf9\u4e8e\u7b49\u5f0f\u8fd0\u7b97\u7b26\u548c\u6bd4\u8f83\u8fd0\u7b97\u7b26\uff0cEnum \u7684\u5de5\u4f5c\u673a\u5236\u4e0e\u5b83\u4eec\u5728\u5e95\u5c42\u6570\u503c\u4e0a\u7684\u5de5\u4f5c\u673a\u5236\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u679a\u4e3e\u503c\u4e0d\u80fd\u4e0e\u6570\u5b57\u8fdb\u884c\u6bd4\u8f83\u3002\u679a\u4e3e\u53ef\u4ee5\u4e0e\u5e38\u91cf\u5b57\u7b26\u4e32\u8fdb\u884c\u6bd4\u8f83\u3002\u5982\u679c\u4e0e\u4e4b\u6bd4\u8f83\u7684\u5b57\u7b26\u4e32\u4e0d\u662f\u6709\u6548Enum\u503c\uff0c\u5219\u5c06\u5f15\u53d1\u5f02\u5e38\u3002\u53ef\u4ee5\u4f7f\u7528 IN \u8fd0\u7b97\u7b26\u6765\u5224\u65ad\u4e00\u4e2a Enum \u662f\u5426\u5b58\u5728\u4e8e\u67d0\u4e2a Enum \u96c6\u5408\u4e2d\uff0c\u5176\u4e2d\u96c6\u5408\u4e2d\u7684 Enum \u9700\u8981\u7528\u5b57\u7b26\u4e32\u8868\u793a\u3002"),(0,a.kt)("p",null,"\u5927\u591a\u6570\u5177\u6709\u6570\u5b57\u548c\u5b57\u7b26\u4e32\u7684\u8fd0\u7b97\u5e76\u4e0d\u9002\u7528\u4e8eEnums\uff1b\u4f8b\u5982\uff0cEnum \u7c7b\u578b\u4e0d\u80fd\u548c\u4e00\u4e2a\u6570\u503c\u76f8\u52a0\u3002\u4f46\u662f\uff0cEnum\u6709\u4e00\u4e2a\u539f\u751f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"toString")," \u51fd\u6570\uff0c\u5b83\u8fd4\u56de\u5b83\u7684\u5b57\u7b26\u4e32\u503c\u3002"),(0,a.kt)("p",null,"Enum \u503c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"toT")," \u51fd\u6570\u53ef\u4ee5\u8f6c\u6362\u6210\u6570\u503c\u7c7b\u578b\uff0c\u5176\u4e2d T \u662f\u4e00\u4e2a\u6570\u503c\u7c7b\u578b\u3002\u82e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u6070\u597d\u5bf9\u5e94 Enum \u7684\u5e95\u5c42\u6570\u503c\u7c7b\u578b\uff0c\u8fd9\u4e2a\u8f6c\u6362\u662f\u96f6\u6d88\u8017\u7684\u3002"),(0,a.kt)("p",null,"Enum \u7c7b\u578b\u53ef\u4ee5\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER")," \u65e0\u6210\u672c\u5730\u4fee\u6539\u5bf9\u5e94\u96c6\u5408\u7684\u503c\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER")," \u64cd\u4f5c\u6765\u589e\u52a0\u6216\u5220\u9664 Enum \u7684\u6210\u5458\uff08\u53ea\u8981\u8868\u6ca1\u6709\u7528\u5230\u8be5\u503c\uff0c\u5220\u9664\u90fd\u662f\u5b89\u5168\u7684\uff09\u3002\u4f5c\u4e3a\u5b89\u5168\u4fdd\u969c\uff0c\u6539\u53d8\u4e4b\u524d\u4f7f\u7528\u8fc7\u7684 Enum \u6210\u5458\u5c06\u629b\u51fa\u5f02\u5e38\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER")," \u64cd\u4f5c\uff0c\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enum8")," \u8f6c\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enum16"),"\uff0c\u53cd\u4e4b\u4ea6\u7136\uff0c\u5c31\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"Int8")," \u8f6c ",(0,a.kt)("inlineCode",{parentName:"p"},"Int16"),"\u4e00\u6837\u3002"))}c.isMDXComponent=!0}}]);