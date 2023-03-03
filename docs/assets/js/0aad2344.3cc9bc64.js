"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[59001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(d,i(i({ref:t},o),{},{components:n})):a.createElement(d,i({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},85086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/zh/sql-reference/statements/insert-into"},i=void 0,s={unversionedId:"zh/sql-reference/statements/insert-into",id:"zh/sql-reference/statements/insert-into",title:"insert-into",description:"INSERT INTO \u8bed\u53e5",source:"@site/docs/zh/sql-reference/statements/insert-into.md",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/insert-into",permalink:"/docs/zh/sql-reference/statements/insert-into",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/insert-into.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/statements/insert-into"},sidebar:"chinese",previous:{title:"create",permalink:"/docs/zh/sql-reference/statements/create"},next:{title:"SQL\u8bed\u6cd5",permalink:"/docs/zh/sql-reference/syntax"}},p={},c=[{value:"INSERT INTO \u8bed\u53e5",id:"insert",level:2},{value:"\u9650\u5236",id:"constraints",level:3},{value:"\u4f7f\u7528<code>SELECT</code>\u7684\u7ed3\u679c\u5199\u5165",id:"inserting-the-results-of-select",level:3},{value:"\u4ece\u6587\u4ef6\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e",id:"inserting-data-from-a-file",level:3},{value:"\u63d2\u5165\u8868\u51fd\u6570",id:"inserting-into-table-function",level:3},{value:"\u6027\u80fd\u7684\u6ce8\u610f\u4e8b\u9879",id:"xing-neng-de-zhu-yi-shi-xiang",level:3}],o={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"insert"},"INSERT INTO \u8bed\u53e5"),(0,r.kt)("p",null,"INSERT INTO \u8bed\u53e5\u4e3b\u8981\u7528\u4e8e\u5411\u7cfb\u7edf\u4e2d\u6dfb\u52a0\u6570\u636e."),(0,r.kt)("p",null,"\u67e5\u8be2\u7684\u57fa\u672c\u683c\u5f0f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] VALUES (v11, v12, v13), (v21, v22, v23), ...\n")),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u67e5\u8be2\u4e2d\u6307\u5b9a\u8981\u63d2\u5165\u7684\u5217\u7684\u5217\u8868\uff0c\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"[(c1, c2, c3)]"),"\u3002\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5217",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/#asterisk"},"\u5339\u914d\u5668"),"\u7684\u8868\u8fbe\u5f0f\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"\u548c/\u6216",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/#select-modifiers"},"\u4fee\u9970\u7b26"),"\uff0c\u4f8b\u5982 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/#apply-modifier"},"APPLY"),"\uff0c ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/#apply-modifier"},"EXCEPT"),"\uff0c ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/#replace-modifier"},"REPLACE"),"\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u8003\u8651\u8be5\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE insert_select_testtable;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"CREATE TABLE insert_select_testtable\n(\n    `a` Int8,\n    `b` String,\n    `c` Int8\n)\nENGINE = MergeTree()\nORDER BY a\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO insert_select_testtable (*) VALUES (1, 'a', 1) ;\n")),(0,r.kt)("p",null,"\u5982\u679c\u8981\u5728\u9664\u4e86'b'\u5217\u4ee5\u5916\u7684\u6240\u6709\u5217\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u60a8\u9700\u8981\u4f20\u9012\u548c\u62ec\u53f7\u4e2d\u9009\u62e9\u7684\u5217\u6570\u4e00\u6837\u591a\u7684\u503c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO insert_select_testtable (* EXCEPT(b)) Values (2, 2);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM insert_select_testtable;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500c\u2500\u2510\n\u2502 2 \u2502   \u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500c\u2500\u2510\n\u2502 1 \u2502 a \u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u770b\u5230\u63d2\u5165\u7684\u7b2c\u4e8c\u884c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"c"),"\u5217\u7684\u503c\u7531\u4f20\u9012\u7684\u503c\u586b\u5145\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"\u5217\u7531\u9ed8\u8ba4\u503c\u586b\u5145\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5b58\u5728\u4e8e\u8868\u7ed3\u6784\u4e2d\u4f46\u4e0d\u5b58\u5728\u4e8e\u63d2\u5165\u5217\u8868\u4e2d\u7684\u5217\uff0c\u5b83\u4eec\u5c06\u4f1a\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u586b\u5145\u6570\u636e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b58\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"DEFAULT"),"\u8868\u8fbe\u5f0f\uff0c\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"li"},"DEFAULT"),"\u8868\u8fbe\u5f0f\u8ba1\u7b97\u88ab\u586b\u5145\u7684\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u5b9a\u4e49",(0,r.kt)("inlineCode",{parentName:"li"},"DEFAULT"),"\u8868\u8fbe\u5f0f\uff0c\u5219\u586b\u5145\u96f6\u6216\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings"},"strict_insert_defaults=1"),"\uff0c\u4f60\u5fc5\u987b\u5728\u67e5\u8be2\u4e2d\u5217\u51fa\u6240\u6709\u6ca1\u6709\u5b9a\u4e49",(0,r.kt)("inlineCode",{parentName:"p"},"DEFAULT"),"\u8868\u8fbe\u5f0f\u7684\u5217\u3002"),(0,r.kt)("p",null,"\u6570\u636e\u53ef\u4ee5\u4ee5ClickHouse\u652f\u6301\u7684\u4efb\u4f55 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/interfaces/formats#formats"},"\u8f93\u5165\u8f93\u51fa\u683c\u5f0f")," \u4f20\u9012\u7ed9INSERT\u3002\u683c\u5f0f\u7684\u540d\u79f0\u5fc5\u987b\u663e\u793a\u7684\u6307\u5b9a\u5728\u67e5\u8be2\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] FORMAT format_name data_set\n")),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u67e5\u8be2\u6240\u4f7f\u7528\u7684\u8f93\u5165\u683c\u5f0f\u5c31\u4e0e\u4e0a\u9762INSERT \u2026 VALUES\u7684\u4e2d\u4f7f\u7528\u7684\u8f93\u5165\u683c\u5f0f\u76f8\u540c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] FORMAT Values (v11, v12, v13), (v21, v22, v23), ...\n")),(0,r.kt)("p",null,"ClickHouse\u4f1a\u6e05\u9664\u6570\u636e\u524d\u6240\u6709\u7684\u7a7a\u767d\u5b57\u7b26\u4e0e\u4e00\u4e2a\u6362\u884c\u7b26\uff08\u5982\u679c\u6709\u6362\u884c\u7b26\u7684\u8bdd\uff09\u3002\u6240\u4ee5\u5728\u8fdb\u884c\u67e5\u8be2\u65f6\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u5c06\u6570\u636e\u653e\u5165\u5230\u8f93\u5165\u8f93\u51fa\u683c\u5f0f\u540d\u79f0\u540e\u7684\u65b0\u7684\u4e00\u884c\u4e2d\u53bb\uff08\u5982\u679c\u6570\u636e\u662f\u4ee5\u7a7a\u767d\u5b57\u7b26\u5f00\u59cb\u7684\uff0c\u8fd9\u5c06\u975e\u5e38\u91cd\u8981\uff09\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t FORMAT TabSeparated\n11  Hello, world!\n22  Qwerty\n")),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u547d\u4ee4\u884c\u5ba2\u6237\u7aef\u6216HTTP\u5ba2\u6237\u7aef\u65f6\uff0c\u4f60\u53ef\u4ee5\u5c06\u5177\u4f53\u7684\u67e5\u8be2\u8bed\u53e5\u4e0e\u6570\u636e\u5206\u5f00\u53d1\u9001\u3002\u66f4\u591a\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\xab",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/interfaces/#interfaces"},"\u5ba2\u6237\u7aef"),"\xbb\u90e8\u5206\u3002"),(0,r.kt)("h3",{id:"constraints"},"\u9650\u5236"),(0,r.kt)("p",null,"\u5982\u679c\u8868\u4e2d\u6709\u4e00\u4e9b",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create/table#constraints"},"\u9650\u5236"),",\uff0c\u6570\u636e\u63d2\u5165\u65f6\u4f1a\u9010\u884c\u8fdb\u884c\u6570\u636e\u6821\u9a8c\uff0c\u5982\u679c\u8fd9\u91cc\u9762\u5305\u542b\u4e86\u4e0d\u7b26\u5408\u9650\u5236\u6761\u4ef6\u7684\u6570\u636e\uff0c\u670d\u52a1\u5c06\u4f1a\u629b\u51fa\u5305\u542b\u9650\u5236\u4fe1\u606f\u7684\u5f02\u5e38\uff0c\u8fd9\u4e2a\u8bed\u53e5\u4e5f\u4f1a\u88ab\u505c\u6b62\u6267\u884c\u3002"),(0,r.kt)("h3",{id:"inserting-the-results-of-select"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"h3"},"SELECT"),"\u7684\u7ed3\u679c\u5199\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] SELECT ...\n")),(0,r.kt)("p",null,"\u5199\u5165\u4e0eSELECT\u7684\u5217\u7684\u5bf9\u5e94\u5173\u7cfb\u662f\u4f7f\u7528\u4f4d\u7f6e\u6765\u8fdb\u884c\u5bf9\u5e94\u7684\uff0c\u5c3d\u7ba1\u5b83\u4eec\u5728SELECT\u8868\u8fbe\u5f0f\u4e0eINSERT\u4e2d\u7684\u540d\u79f0\u53ef\u80fd\u662f\u4e0d\u540c\u7684\u3002\u5982\u679c\u9700\u8981\uff0c\u4f1a\u5bf9\u5b83\u4eec\u6267\u884c\u5bf9\u5e94\u7684\u7c7b\u578b\u8f6c\u6362\u3002"),(0,r.kt)("p",null,"\u9664\u4e86VALUES\u683c\u5f0f\u4e4b\u5916\uff0c\u5176\u4ed6\u683c\u5f0f\u4e2d\u7684\u6570\u636e\u90fd\u4e0d\u5141\u8bb8\u51fa\u73b0\u8bf8\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"now()"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 2"),"\u7b49\u8868\u8fbe\u5f0f\u3002VALUES\u683c\u5f0f\u5141\u8bb8\u60a8\u6709\u9650\u5ea6\u7684\u4f7f\u7528\u8fd9\u4e9b\u8868\u8fbe\u5f0f\uff0c\u4f46\u662f\u4e0d\u5efa\u8bae\u60a8\u8fd9\u4e48\u505a\uff0c\u56e0\u4e3a\u6267\u884c\u8fd9\u4e9b\u8868\u8fbe\u5f0f\u603b\u662f\u4f4e\u6548\u7684\u3002"),(0,r.kt)("p",null,"\u7cfb\u7edf\u4e0d\u652f\u6301\u7684\u5176\u4ed6\u7528\u4e8e\u4fee\u6539\u6570\u636e\u7684\u67e5\u8be2\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MERGE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UPSERT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT UPDATE"),"\u3002\n\u4f46\u662f\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... DROP PARTITION"),"\u67e5\u8be2\u6765\u5220\u9664\u4e00\u4e9b\u65e7\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u4e2d\u5305\u542b\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/table-functions/input"},"input()")," \u51fd\u6570\uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT")," \u5fc5\u987b\u51fa\u73b0\u5728\u67e5\u8be2\u8bed\u53e5\u7684\u6700\u540e\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u67d0\u4e00\u5217\u9650\u5236\u4e86\u503c\u4e0d\u80fd\u662fNULL\uff0c\u90a3\u4e48\u63d2\u5165NULL\u7684\u65f6\u5019\u5c31\u4f1a\u63d2\u5165\u8fd9\u4e2a\u5217\u7c7b\u578b\u7684\u9ed8\u8ba4\u6570\u636e\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings#insert_null_as_default"},"insert_null_as_default")," \u63d2\u5165NULL\u3002"),(0,r.kt)("h3",{id:"inserting-data-from-a-file"},"\u4ece\u6587\u4ef6\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] FROM INFILE file_name [COMPRESSION type] FORMAT format_name\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u4e0a\u9762\u7684\u8bed\u53e5\u53ef\u4ee5\u4ece\u5ba2\u6237\u7aef\u7684\u6587\u4ef6\u4e0a\u8bfb\u53d6\u6570\u636e\u5e76\u63d2\u5165\u8868\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"file_name")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," \u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," \u7c7b\u578b\uff0c\u8f93\u5165\u6587\u4ef6\u7684",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/interfaces/formats"},"\u683c\u5f0f")," \u4e00\u5b9a\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT")," \u8bed\u53e5\u4e2d\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u8bfb\u53d6\u538b\u7f29\u6587\u4ef6\u3002\u9ed8\u8ba4\u4f1a\u53bb\u8bfb\u6587\u4ef6\u7684\u62d3\u5c55\u540d\u4f5c\u4e3a\u6587\u4ef6\u7684\u538b\u7f29\u65b9\u5f0f\uff0c\u6216\u8005\u4e5f\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPRESSION")," \u8bed\u53e5\u4e2d\u6307\u660e\uff0c\u652f\u6301\u7684\u6587\u4ef6\u538b\u7f29\u683c\u5f0f\u5982\u4e0b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"'none'"),"\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"'gzip'"),"\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"'deflate'"),"\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"'br'"),"\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"'xz'"),"\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"'zstd'"),"\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"'lz4'"),"\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"'bz2'"),"\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/interfaces/cli"},"command-line client")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/operations/utilities/clickhouse-local"},"clickhouse-local")," \u662f\u53ef\u7528\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6837\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo 1,A > input.csv ; echo 2,B >> input.csv\nclickhouse-client --query="CREATE TABLE table_from_file (id UInt32, text String) ENGINE=MergeTree() ORDER BY id;"\nclickhouse-client --query="INSERT INTO table_from_file FROM INFILE \'input.csv\' FORMAT CSV;"\nclickhouse-client --query="SELECT * FROM table_from_file FORMAT PrettyCompact;"\n')),(0,r.kt)("p",null,"\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500text\u2500\u2510\n\u2502  1 \u2502 A    \u2502\n\u2502  2 \u2502 B    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h3",{id:"inserting-into-table-function"},"\u63d2\u5165\u8868\u51fd\u6570"),(0,r.kt)("p",null,"\u6570\u636e\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/table-functions/"},"table functions")," \u65b9\u6cd5\u63d2\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [TABLE] FUNCTION table_func ...\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f8b\u5982")),(0,r.kt)("p",null,"\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/table-functions/#remote"},"remote")," \u8868\u51fd\u6570:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE simple_table (id UInt32, text String) ENGINE=MergeTree() ORDER BY id;\nINSERT INTO TABLE FUNCTION remote('localhost', default.simple_table) \n    VALUES (100, 'inserted via remote()');\nSELECT * FROM simple_table;\n")),(0,r.kt)("p",null,"\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500id\u2500\u252c\u2500text\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 100 \u2502 inserted via remote() \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h3",{id:"xing-neng-de-zhu-yi-shi-xiang"},"\u6027\u80fd\u7684\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"\u5728\u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u65f6\u5c06\u4f1a\u5bf9\u5199\u5165\u7684\u6570\u636e\u8fdb\u884c\u4e00\u4e9b\u5904\u7406\uff0c\u6309\u7167\u4e3b\u952e\u6392\u5e8f\uff0c\u6309\u7167\u6708\u4efd\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u533a\u7b49\u3002\u6240\u4ee5\u5982\u679c\u5728\u60a8\u7684\u5199\u5165\u6570\u636e\u4e2d\u5305\u542b\u591a\u4e2a\u6708\u4efd\u7684\u6df7\u5408\u6570\u636e\u65f6\uff0c\u5c06\u4f1a\u663e\u8457\u7684\u964d\u4f4e",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u7684\u6027\u80fd\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u603b\u662f\u4ee5\u5c3d\u91cf\u5927\u7684batch\u8fdb\u884c\u5199\u5165\uff0c\u5982\u6bcf\u6b21\u5199\u5165100,000\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5728\u5199\u5165ClickHouse\u524d\u9884\u5148\u7684\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u7ec4\u3002")),(0,r.kt)("p",null,"\u5728\u4ee5\u4e0b\u7684\u60c5\u51b5\u4e0b\uff0c\u6027\u80fd\u4e0d\u4f1a\u4e0b\u964d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u603b\u662f\u88ab\u5b9e\u65f6\u7684\u5199\u5165\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5199\u5165\u7684\u6570\u636e\u5df2\u7ecf\u6309\u7167\u65f6\u95f4\u6392\u5e8f\u3002")),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5f02\u6b65\u7684\u3001\u5c0f\u89c4\u6a21\u7684\u63d2\u5165\u6570\u636e\uff0c\u8fd9\u4e9b\u6570\u636e\u4f1a\u88ab\u5408\u5e76\u6210\u591a\u4e2a\u6279\u6b21\uff0c\u7136\u540e\u5b89\u5168\u5730\u5199\u5165\u5230\u8868\u4e2d\uff0c\u901a\u8fc7\u8bbe\u7f6e",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings#async-insert"},"async_insert"),"\uff0c\u53ef\u4ee5\u4f7f\u7528\u5f02\u6b65\u63d2\u5165\u7684\u65b9\u5f0f\uff0c\u8bf7\u6ce8\u610f\uff0c\u5f02\u6b65\u63d2\u5165\u7684\u65b9\u5f0f\u53ea\u652f\u6301HTTP\u534f\u8bae\uff0c\u5e76\u4e14\u4e0d\u652f\u6301\u6570\u636e\u53bb\u91cd\u3002"))}m.isMDXComponent=!0}}]);