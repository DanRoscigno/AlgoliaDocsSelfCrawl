"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[164],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=l,g=u["".concat(p,".").concat(m)]||u[m]||k[m]||i;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),l=(t(67294),t(3905));const i={slug:"/zh/engines/table-engines/special/file"},r="\u6587\u4ef6(\u8f93\u5165\u683c\u5f0f)",o={unversionedId:"zh/engines/table-engines/special/file",id:"zh/engines/table-engines/special/file",title:"\u6587\u4ef6(\u8f93\u5165\u683c\u5f0f)",description:"table_engines-file}",source:"@site/docs/zh/engines/table-engines/special/file.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/file",permalink:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/special/file",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/special/file.md",tags:[],version:"current",frontMatter:{slug:"/zh/engines/table-engines/special/file"},sidebar:"chinese",previous:{title:"\u7528\u4e8e\u67e5\u8be2\u5904\u7406\u7684\u5916\u90e8\u6570\u636e",permalink:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/special/external-data"},next:{title:"MaterializedView",permalink:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/special/materializedview"}},p={},s=[{value:"\u5728 ClickHouse \u670d\u52a1\u5668\u4e2d\u7684\u4f7f\u7528",id:"zai-clickhouse-fu-wu-qi-zhong-de-shi-yong",level:2},{value:"\u5728 Clickhouse-local \u4e2d\u7684\u4f7f\u7528",id:"zai-clickhouse-local-zhong-de-shi-yong",level:2},{value:"\u529f\u80fd\u5b9e\u73b0",id:"gong-neng-shi-xian",level:2}],c={toc:s},u="wrapper";function k(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"table_engines-file"},"\u6587\u4ef6(\u8f93\u5165\u683c\u5f0f)"),(0,l.kt)("p",null,"\u6570\u636e\u6e90\u662f\u4ee5 Clickhouse \u652f\u6301\u7684\u4e00\u79cd\u8f93\u5165\u683c\u5f0f\uff08TabSeparated\uff0cNative\u7b49\uff09\u5b58\u50a8\u6570\u636e\u7684\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u7528\u6cd5\u793a\u4f8b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ece ClickHouse \u5bfc\u51fa\u6570\u636e\u5230\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6570\u636e\u4ece\u4e00\u79cd\u683c\u5f0f\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u683c\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7f16\u8f91\u78c1\u76d8\u4e0a\u7684\u6587\u4ef6\u6765\u66f4\u65b0 ClickHouse \u4e2d\u7684\u6570\u636e\u3002")),(0,l.kt)("h2",{id:"zai-clickhouse-fu-wu-qi-zhong-de-shi-yong"},"\u5728 ClickHouse \u670d\u52a1\u5668\u4e2d\u7684\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"File(Format)\n")),(0,l.kt)("p",null,"\u9009\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Format")," \u9700\u8981\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u3002\u6709\u5173\u652f\u6301\u683c\u5f0f\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/interfaces/formats#formats"},"\u683c\u5f0f"),"\u3002"),(0,l.kt)("p",null,"ClickHouse \u4e0d\u652f\u6301\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"File")," \u6307\u5b9a\u6587\u4ef6\u7cfb\u7edf\u8def\u5f84\u3002\u5b83\u4f7f\u7528\u670d\u52a1\u5668\u914d\u7f6e\u4e2d ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/operations/server-configuration-parameters/settings"},"\u8def\u5f84")," \u8bbe\u5b9a\u7684\u6587\u4ef6\u5939\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"File(Format)")," \u521b\u5efa\u8868\u65f6\uff0c\u5b83\u4f1a\u5728\u8be5\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u7a7a\u7684\u5b50\u76ee\u5f55\u3002\u5f53\u6570\u636e\u5199\u5165\u8be5\u8868\u65f6\uff0c\u5b83\u4f1a\u5199\u5230\u8be5\u5b50\u76ee\u5f55\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"data.Format")," \u6587\u4ef6\u4e2d\u3002"),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u6587\u4ef6\u7cfb\u7edf\u4e2d\u624b\u52a8\u521b\u5efa\u8fd9\u4e9b\u5b50\u6587\u4ef6\u5939\u548c\u6587\u4ef6\uff0c\u7136\u540e\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/engines/table-engines/special/file"},"ATTACH")," \u5c06\u5176\u521b\u5efa\u4e3a\u5177\u6709\u5bf9\u5e94\u540d\u79f0\u7684\u8868\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u4ece\u8be5\u6587\u4ef6\u4e2d\u67e5\u8be2\u6570\u636e\u4e86\u3002"),(0,l.kt)("p",null,'!!! \u6ce8\u610f "\u6ce8\u610f"\n\u6ce8\u610f\u8fd9\u4e2a\u529f\u80fd\uff0c\u56e0\u4e3a ClickHouse \u4e0d\u4f1a\u8ddf\u8e2a\u8fd9\u4e9b\u6587\u4ef6\u5728\u5916\u90e8\u7684\u66f4\u6539\u3002\u5728 ClickHouse \u4e2d\u548c ClickHouse \u5916\u90e8\u540c\u65f6\u5199\u5165\u4f1a\u9020\u6210\u7ed3\u679c\u662f\u4e0d\u786e\u5b9a\u7684\u3002'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1.")," \u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"file_engine_table")," \u8868\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE file_engine_table (name String, value UInt32) ENGINE=File(TabSeparated)\n")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cClickhouse \u4f1a\u521b\u5efa\u76ee\u5f55 ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/data/default/file_engine_table")," \u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2.")," \u624b\u52a8\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/data/default/file_engine_table/data.TabSeparated")," \u6587\u4ef6\uff0c\u5e76\u4e14\u5305\u542b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat data.TabSeparated\none 1\ntwo 2\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3.")," \u67e5\u8be2\u8fd9\u4e9b\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM file_engine_table\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500name\u2500\u252c\u2500value\u2500\u2510\n\u2502 one  \u2502     1 \u2502\n\u2502 two  \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"zai-clickhouse-local-zhong-de-shi-yong"},"\u5728 Clickhouse-local \u4e2d\u7684\u4f7f\u7528"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/operations/utilities/clickhouse-local"},"clickhouse-local")," \u65f6\uff0cFile \u5f15\u64ce\u9664\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Format")," \u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u63a5\u6536\u6587\u4ef6\u8def\u5f84\u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528\u6570\u5b57\u6216\u540d\u79f0\u6765\u6307\u5b9a\u6807\u51c6\u8f93\u5165/\u8f93\u51fa\u6d41\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"stdin"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"1")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout"),"\u3002\n",(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5982\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo -e "1,2\\n3,4" | clickhouse-local -q "CREATE TABLE table (a Int64, b Int64) ENGINE = File(CSV, stdin); SELECT a, b FROM table; DROP TABLE table"\n')),(0,l.kt)("h2",{id:"gong-neng-shi-xian"},"\u529f\u80fd\u5b9e\u73b0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bfb\u64cd\u4f5c\u53ef\u652f\u6301\u5e76\u53d1\uff0c\u4f46\u5199\u64cd\u4f5c\u4e0d\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SELECT ... SAMPLE")),(0,l.kt)("li",{parentName:"ul"},"\u7d22\u5f15"),(0,l.kt)("li",{parentName:"ul"},"\u526f\u672c")))))}k.isMDXComponent=!0}}]);