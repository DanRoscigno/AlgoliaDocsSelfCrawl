"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[55027],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),m=o(n),c=l,g=m["".concat(u,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(g,i(i({ref:e},k),{},{components:n})):a.createElement(g,i({ref:e},k))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[m]="string"==typeof t?t:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11792:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={slug:"/zh/",sidebar_position:0,sidebar_label:"\u4ec0\u4e48\u662fClickHouse\uff1f"},i="\u4ec0\u4e48\u662fClickHouse\uff1f",p={unversionedId:"zh/index",id:"zh/index",title:"\u4ec0\u4e48\u662fClickHouse\uff1f",description:"shi-yao-shi-clickhouse}",source:"@site/docs/zh/index.md",sourceDirName:"zh",slug:"/zh/",permalink:"/docs/zh/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/zh/",sidebar_position:0,sidebar_label:"\u4ec0\u4e48\u662fClickHouse\uff1f"},sidebar:"chinese",next:{title:"\u7b80\u4ecb",permalink:"/docs/category/\u7b80\u4ecb"}},u={},o=[{value:"OLAP\u573a\u666f\u7684\u5173\u952e\u7279\u5f81",id:"olapchang-jing-de-guan-jian-te-zheng",level:2},{value:"\u5217\u5f0f\u6570\u636e\u5e93\u66f4\u9002\u5408OLAP\u573a\u666f\u7684\u539f\u56e0",id:"lie-shi-shu-ju-ku-geng-gua-he-olapchang-jing-de-yuan-yin",level:2},{value:"\u8f93\u5165/\u8f93\u51fa",id:"inputoutput",level:3},{value:"CPU",id:"cpu",level:3}],k={toc:o},m="wrapper";function d(t){let{components:e,...r}=t;return(0,l.kt)(m,(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"shi-yao-shi-clickhouse"},"\u4ec0\u4e48\u662fClickHouse\uff1f"),(0,l.kt)("p",null,"ClickHouse\u662f\u4e00\u4e2a\u7528\u4e8e\u8054\u673a\u5206\u6790(OLAP)\u7684\u5217\u5f0f\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf(DBMS)\u3002"),(0,l.kt)("p",null,"\u5728\u4f20\u7edf\u7684\u884c\u5f0f\u6570\u636e\u5e93\u7cfb\u7edf\u4e2d\uff0c\u6570\u636e\u6309\u5982\u4e0b\u987a\u5e8f\u5b58\u50a8\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Row"),(0,l.kt)("th",{parentName:"tr",align:null},"WatchID"),(0,l.kt)("th",{parentName:"tr",align:null},"JavaEnable"),(0,l.kt)("th",{parentName:"tr",align:null},"Title"),(0,l.kt)("th",{parentName:"tr",align:null},"GoodEvent"),(0,l.kt)("th",{parentName:"tr",align:null},"EventTime"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#0"),(0,l.kt)("td",{parentName:"tr",align:null},"89354350662"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Investor Relations"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05-18 05:19:20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#1"),(0,l.kt)("td",{parentName:"tr",align:null},"90329509958"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Contact us"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05-18 08:10:20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#2"),(0,l.kt)("td",{parentName:"tr",align:null},"89953706054"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Mission"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05-18 07:38:00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#N"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026")))),(0,l.kt)("p",null,"\u5904\u4e8e\u540c\u4e00\u884c\u4e2d\u7684\u6570\u636e\u603b\u662f\u88ab\u7269\u7406\u7684\u5b58\u50a8\u5728\u4e00\u8d77\u3002"),(0,l.kt)("p",null,"\u5e38\u89c1\u7684\u884c\u5f0f\u6570\u636e\u5e93\u7cfb\u7edf\u6709\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"MySQL"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Postgres"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"MS SQL Server"),"\u3002"),(0,l.kt)("p",null,"\u5728\u5217\u5f0f\u6570\u636e\u5e93\u7cfb\u7edf\u4e2d\uff0c\u6570\u636e\u6309\u5982\u4e0b\u7684\u987a\u5e8f\u5b58\u50a8\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Row:"),(0,l.kt)("th",{parentName:"tr",align:null},"#0"),(0,l.kt)("th",{parentName:"tr",align:null},"#1"),(0,l.kt)("th",{parentName:"tr",align:null},"#2"),(0,l.kt)("th",{parentName:"tr",align:null},"#N"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WatchID:"),(0,l.kt)("td",{parentName:"tr",align:null},"89354350662"),(0,l.kt)("td",{parentName:"tr",align:null},"90329509958"),(0,l.kt)("td",{parentName:"tr",align:null},"89953706054"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JavaEnable:"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Title:"),(0,l.kt)("td",{parentName:"tr",align:null},"Investor Relations"),(0,l.kt)("td",{parentName:"tr",align:null},"Contact us"),(0,l.kt)("td",{parentName:"tr",align:null},"Mission"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GoodEvent:"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EventTime:"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05-18 05:19:20"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05-18 08:10:20"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05-18 07:38:00"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026")))),(0,l.kt)("p",null,"\u8fd9\u4e9b\u793a\u4f8b\u53ea\u663e\u793a\u4e86\u6570\u636e\u7684\u6392\u5217\u987a\u5e8f\u3002\u6765\u81ea\u4e0d\u540c\u5217\u7684\u503c\u88ab\u5355\u72ec\u5b58\u50a8\uff0c\u6765\u81ea\u540c\u4e00\u5217\u7684\u6570\u636e\u88ab\u5b58\u50a8\u5728\u4e00\u8d77\u3002"),(0,l.kt)("p",null,"\u5e38\u89c1\u7684\u5217\u5f0f\u6570\u636e\u5e93\u6709\uff1a Vertica\u3001 Paraccel (Actian Matrix\uff0cAmazon Redshift)\u3001 Sybase IQ\u3001 Exasol\u3001 Infobright\u3001 InfiniDB\u3001 MonetDB (VectorWise\uff0c Actian Vector)\u3001 LucidDB\u3001 SAP HANA\u3001 Google Dremel\u3001 Google PowerDrill\u3001 Druid\u3001 kdb+\u3002"),(0,l.kt)("p",null,"\u4e0d\u540c\u7684\u6570\u636e\u5b58\u50a8\u65b9\u5f0f\u9002\u7528\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u6570\u636e\u8bbf\u95ee\u7684\u573a\u666f\u5305\u62ec\uff1a\u8fdb\u884c\u4e86\u4f55\u79cd\u67e5\u8be2\u3001\u591a\u4e45\u67e5\u8be2\u4e00\u6b21\u4ee5\u53ca\u5404\u7c7b\u67e5\u8be2\u7684\u6bd4\u4f8b\uff1b\u6bcf\u79cd\u7c7b\u578b\u7684\u67e5\u8be2(\u884c\u3001\u5217\u548c\u5b57\u8282)\u8bfb\u53d6\u591a\u5c11\u6570\u636e\uff1b\u8bfb\u53d6\u6570\u636e\u548c\u66f4\u65b0\u4e4b\u95f4\u7684\u5173\u7cfb\uff1b\u4f7f\u7528\u7684\u6570\u636e\u96c6\u5927\u5c0f\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u672c\u5730\u7684\u6570\u636e\u96c6\uff1b\u662f\u5426\u4f7f\u7528\u4e8b\u52a1,\u4ee5\u53ca\u5b83\u4eec\u662f\u5982\u4f55\u8fdb\u884c\u9694\u79bb\u7684\uff1b\u6570\u636e\u7684\u590d\u5236\u673a\u5236\u4e0e\u6570\u636e\u7684\u5b8c\u6574\u6027\u8981\u6c42\uff1b\u6bcf\u79cd\u7c7b\u578b\u7684\u67e5\u8be2\u8981\u6c42\u7684\u5ef6\u8fdf\u4e0e\u541e\u5410\u91cf\u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u7cfb\u7edf\u8d1f\u8f7d\u8d8a\u9ad8\uff0c\u4f9d\u636e\u4f7f\u7528\u573a\u666f\u8fdb\u884c\u5b9a\u5236\u5316\u5c31\u8d8a\u91cd\u8981\uff0c\u5e76\u4e14\u5b9a\u5236\u5c06\u4f1a\u53d8\u7684\u8d8a\u7cbe\u7ec6\u3002\u6ca1\u6709\u4e00\u4e2a\u7cfb\u7edf\u80fd\u591f\u540c\u65f6\u9002\u7528\u6240\u6709\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u3002\u5982\u679c\u7cfb\u7edf\u9002\u7528\u4e8e\u5e7f\u6cdb\u7684\u573a\u666f\uff0c\u5728\u8d1f\u8f7d\u9ad8\u7684\u60c5\u51b5\u4e0b\uff0c\u8981\u517c\u987e\u6240\u6709\u7684\u573a\u666f\uff0c\u90a3\u4e48\u5c06\u4e0d\u5f97\u4e0d\u505a\u51fa\u9009\u62e9\u3002\u662f\u8981\u5e73\u8861\u8fd8\u662f\u8981\u6548\u7387\uff1f"),(0,l.kt)("h2",{id:"olapchang-jing-de-guan-jian-te-zheng"},"OLAP\u573a\u666f\u7684\u5173\u952e\u7279\u5f81"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7edd\u5927\u591a\u6570\u662f\u8bfb\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u4ee5\u76f8\u5f53\u5927\u7684\u6279\u6b21(",">"," 1000\u884c)\u66f4\u65b0\uff0c\u800c\u4e0d\u662f\u5355\u884c\u66f4\u65b0;\u6216\u8005\u6839\u672c\u6ca1\u6709\u66f4\u65b0\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6dfb\u52a0\u5230\u6570\u636e\u5e93\u7684\u6570\u636e\u4e0d\u80fd\u4fee\u6539\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u8bfb\u53d6\uff0c\u4ece\u6570\u636e\u5e93\u4e2d\u63d0\u53d6\u76f8\u5f53\u591a\u7684\u884c\uff0c\u4f46\u53ea\u63d0\u53d6\u5217\u7684\u4e00\u5c0f\u90e8\u5206\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bbd\u8868\uff0c\u5373\u6bcf\u4e2a\u8868\u5305\u542b\u7740\u5927\u91cf\u7684\u5217"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u76f8\u5bf9\u8f83\u5c11(\u901a\u5e38\u6bcf\u53f0\u670d\u52a1\u5668\u6bcf\u79d2\u67e5\u8be2\u6570\u767e\u6b21\u6216\u66f4\u5c11)"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7b80\u5355\u67e5\u8be2\uff0c\u5141\u8bb8\u5ef6\u8fdf\u5927\u7ea650\u6beb\u79d2"),(0,l.kt)("li",{parentName:"ul"},"\u5217\u4e2d\u7684\u6570\u636e\u76f8\u5bf9\u8f83\u5c0f\uff1a\u6570\u5b57\u548c\u77ed\u5b57\u7b26\u4e32(\u4f8b\u5982\uff0c\u6bcf\u4e2aURL 60\u4e2a\u5b57\u8282)"),(0,l.kt)("li",{parentName:"ul"},"\u5904\u7406\u5355\u4e2a\u67e5\u8be2\u65f6\u9700\u8981\u9ad8\u541e\u5410\u91cf(\u6bcf\u53f0\u670d\u52a1\u5668\u6bcf\u79d2\u53ef\u8fbe\u6570\u5341\u4ebf\u884c)"),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u4e0d\u662f\u5fc5\u987b\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6570\u636e\u4e00\u81f4\u6027\u8981\u6c42\u4f4e"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u67e5\u8be2\u6709\u4e00\u4e2a\u5927\u8868\u3002\u9664\u4e86\u4ed6\u4ee5\u5916\uff0c\u5176\u4ed6\u7684\u90fd\u5f88\u5c0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u7ed3\u679c\u660e\u663e\u5c0f\u4e8e\u6e90\u6570\u636e\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u6570\u636e\u7ecf\u8fc7\u8fc7\u6ee4\u6216\u805a\u5408\uff0c\u56e0\u6b64\u7ed3\u679c\u9002\u5408\u4e8e\u5355\u4e2a\u670d\u52a1\u5668\u7684RAM\u4e2d")),(0,l.kt)("p",null,"\u5f88\u5bb9\u6613\u53ef\u4ee5\u770b\u51fa\uff0cOLAP\u573a\u666f\u4e0e\u5176\u4ed6\u901a\u5e38\u4e1a\u52a1\u573a\u666f(\u4f8b\u5982,OLTP\u6216K/V)\u6709\u5f88\u5927\u7684\u4e0d\u540c\uff0c \u56e0\u6b64\u60f3\u8981\u4f7f\u7528OLTP\u6216Key-Value\u6570\u636e\u5e93\u53bb\u9ad8\u6548\u7684\u5904\u7406\u5206\u6790\u67e5\u8be2\u573a\u666f\uff0c\u5e76\u4e0d\u662f\u975e\u5e38\u5b8c\u7f8e\u7684\u9002\u7528\u65b9\u6848\u3002\u4f8b\u5982\uff0c\u4f7f\u7528OLAP\u6570\u636e\u5e93\u53bb\u5904\u7406\u5206\u6790\u8bf7\u6c42\u901a\u5e38\u8981\u4f18\u4e8e\u4f7f\u7528MongoDB\u6216Redis\u53bb\u5904\u7406\u5206\u6790\u8bf7\u6c42\u3002"),(0,l.kt)("h2",{id:"lie-shi-shu-ju-ku-geng-gua-he-olapchang-jing-de-yuan-yin"},"\u5217\u5f0f\u6570\u636e\u5e93\u66f4\u9002\u5408OLAP\u573a\u666f\u7684\u539f\u56e0"),(0,l.kt)("p",null,"\u5217\u5f0f\u6570\u636e\u5e93\u66f4\u9002\u5408\u4e8eOLAP\u573a\u666f(\u5bf9\u4e8e\u5927\u591a\u6570\u67e5\u8be2\u800c\u8a00\uff0c\u5904\u7406\u901f\u5ea6\u81f3\u5c11\u63d0\u9ad8\u4e86100\u500d)\uff0c\u4e0b\u9762\u8be6\u7ec6\u89e3\u91ca\u4e86\u539f\u56e0(\u901a\u8fc7\u56fe\u7247\u66f4\u6709\u5229\u4e8e\u76f4\u89c2\u7406\u89e3)\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u884c\u5f0f")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Row oriented",src:n(82738).Z+"#",width:"630",height:"258"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5217\u5f0f")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Column oriented",src:n(98486).Z+"#",width:"630",height:"258"})),(0,l.kt)("p",null,"\u770b\u5230\u5dee\u522b\u4e86\u4e48\uff1f\u4e0b\u9762\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u4e3a\u4ec0\u4e48\u4f1a\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,l.kt)("h3",{id:"inputoutput"},"\u8f93\u5165/\u8f93\u51fa"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9488\u5bf9\u5206\u6790\u7c7b\u67e5\u8be2\uff0c\u901a\u5e38\u53ea\u9700\u8981\u8bfb\u53d6\u8868\u7684\u4e00\u5c0f\u90e8\u5206\u5217\u3002\u5728\u5217\u5f0f\u6570\u636e\u5e93\u4e2d\u4f60\u53ef\u4ee5\u53ea\u8bfb\u53d6\u4f60\u9700\u8981\u7684\u6570\u636e\u3002\u4f8b\u5982\uff0c\u5982\u679c\u53ea\u9700\u8981\u8bfb\u53d6100\u5217\u4e2d\u76845\u5217\uff0c\u8fd9\u5c06\u5e2e\u52a9\u4f60\u6700\u5c11\u51cf\u5c1120\u500d\u7684I/O\u6d88\u8017\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u6570\u636e\u603b\u662f\u6253\u5305\u6210\u6279\u91cf\u8bfb\u53d6\u7684\uff0c\u6240\u4ee5\u538b\u7f29\u662f\u975e\u5e38\u5bb9\u6613\u7684\u3002\u540c\u65f6\u6570\u636e\u6309\u5217\u5206\u522b\u5b58\u50a8\u8fd9\u4e5f\u66f4\u5bb9\u6613\u538b\u7f29\u3002\u8fd9\u8fdb\u4e00\u6b65\u964d\u4f4e\u4e86I/O\u7684\u4f53\u79ef\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7531\u4e8eI/O\u7684\u964d\u4f4e\uff0c\u8fd9\u5c06\u5e2e\u52a9\u66f4\u591a\u7684\u6570\u636e\u88ab\u7cfb\u7edf\u7f13\u5b58\u3002")),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u67e5\u8be2\xab\u7edf\u8ba1\u6bcf\u4e2a\u5e7f\u544a\u5e73\u53f0\u7684\u8bb0\u5f55\u6570\u91cf\xbb\u9700\u8981\u8bfb\u53d6\xab\u5e7f\u544a\u5e73\u53f0ID\xbb\u8fd9\u4e00\u5217\uff0c\u5b83\u5728\u672a\u538b\u7f29\u7684\u60c5\u51b5\u4e0b\u9700\u89811\u4e2a\u5b57\u8282\u8fdb\u884c\u5b58\u50a8\u3002\u5982\u679c\u5927\u90e8\u5206\u6d41\u91cf\u4e0d\u662f\u6765\u81ea\u5e7f\u544a\u5e73\u53f0\uff0c\u90a3\u4e48\u8fd9\u4e00\u5217\u81f3\u5c11\u53ef\u4ee5\u4ee5\u5341\u500d\u7684\u538b\u7f29\u7387\u88ab\u538b\u7f29\u3002\u5f53\u91c7\u7528\u5feb\u901f\u538b\u7f29\u7b97\u6cd5\uff0c\u5b83\u7684\u89e3\u538b\u901f\u5ea6\u6700\u5c11\u5728\u5341\u4ebf\u5b57\u8282(\u672a\u538b\u7f29\u6570\u636e)\u6bcf\u79d2\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u8fd9\u4e2a\u67e5\u8be2\u53ef\u4ee5\u5728\u5355\u4e2a\u670d\u52a1\u5668\u4e0a\u4ee5\u6bcf\u79d2\u5927\u7ea6\u51e0\u5341\u4ebf\u884c\u7684\u901f\u5ea6\u8fdb\u884c\u5904\u7406\u3002\u8fd9\u5b9e\u9645\u4e0a\u662f\u5f53\u524d\u5b9e\u73b0\u7684\u901f\u5ea6\u3002"),(0,l.kt)("h3",{id:"cpu"},"CPU"),(0,l.kt)("p",null,"\u7531\u4e8e\u6267\u884c\u4e00\u4e2a\u67e5\u8be2\u9700\u8981\u5904\u7406\u5927\u91cf\u7684\u884c\uff0c\u56e0\u6b64\u5728\u6574\u4e2a\u5411\u91cf\u4e0a\u6267\u884c\u6240\u6709\u64cd\u4f5c\u5c06\u6bd4\u5728\u6bcf\u4e00\u884c\u4e0a\u6267\u884c\u6240\u6709\u64cd\u4f5c\u66f4\u52a0\u9ad8\u6548\u3002\u540c\u65f6\u8fd9\u5c06\u6709\u52a9\u4e8e\u5b9e\u73b0\u4e00\u4e2a\u51e0\u4e4e\u6ca1\u6709\u8c03\u7528\u6210\u672c\u7684\u67e5\u8be2\u5f15\u64ce\u3002\u5982\u679c\u4f60\u4e0d\u8fd9\u6837\u505a\uff0c\u4f7f\u7528\u4efb\u4f55\u4e00\u4e2a\u673a\u68b0\u786c\u76d8\uff0c\u67e5\u8be2\u5f15\u64ce\u90fd\u4e0d\u53ef\u907f\u514d\u7684\u505c\u6b62CPU\u8fdb\u884c\u7b49\u5f85\u3002\u6240\u4ee5\uff0c\u5728\u6570\u636e\u6309\u5217\u5b58\u50a8\u5e76\u4e14\u6309\u5217\u6267\u884c\u662f\u5f88\u6709\u610f\u4e49\u7684\u3002"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u505a\u5230\u8fd9\u4e00\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5411\u91cf\u5f15\u64ce\uff1a\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u662f\u4e3a\u5411\u91cf\u800c\u4e0d\u662f\u4e3a\u5355\u4e2a\u503c\u7f16\u5199\u7684\u3002\u8fd9\u610f\u5473\u7740\u591a\u4e2a\u64cd\u4f5c\u4e4b\u95f4\u7684\u4e0d\u518d\u9700\u8981\u9891\u7e41\u7684\u8c03\u7528\uff0c\u5e76\u4e14\u8c03\u7528\u7684\u6210\u672c\u57fa\u672c\u53ef\u4ee5\u5ffd\u7565\u4e0d\u8ba1\u3002\u64cd\u4f5c\u4ee3\u7801\u5305\u542b\u4e00\u4e2a\u4f18\u5316\u7684\u5185\u90e8\u5faa\u73af\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4ee3\u7801\u751f\u6210\uff1a\u751f\u6210\u4e00\u6bb5\u4ee3\u7801\uff0c\u5305\u542b\u67e5\u8be2\u4e2d\u7684\u6240\u6709\u64cd\u4f5c\u3002"))),(0,l.kt)("p",null,"\u8fd9\u662f\u4e0d\u5e94\u8be5\u5728\u4e00\u4e2a\u901a\u7528\u6570\u636e\u5e93\u4e2d\u5b9e\u73b0\u7684\uff0c\u56e0\u4e3a\u8fd9\u5728\u8fd0\u884c\u7b80\u5355\u67e5\u8be2\u65f6\u662f\u6ca1\u6709\u610f\u4e49\u7684\u3002\u4f46\u662f\u4e5f\u6709\u4f8b\u5916\uff0c\u4f8b\u5982\uff0cMemSQL\u4f7f\u7528\u4ee3\u7801\u751f\u6210\u6765\u51cf\u5c11\u5904\u7406SQL\u67e5\u8be2\u7684\u5ef6\u8fdf(\u53ea\u662f\u4e3a\u4e86\u6bd4\u8f83\uff0c\u5206\u6790\u578b\u6570\u636e\u5e93\u901a\u5e38\u9700\u8981\u4f18\u5316\u7684\u662f\u541e\u5410\u800c\u4e0d\u662f\u5ef6\u8fdf)\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u4e3a\u4e86\u63d0\u9ad8CPU\u6548\u7387\uff0c\u67e5\u8be2\u8bed\u8a00\u5fc5\u987b\u662f\u58f0\u660e\u578b\u7684(SQL\u6216MDX)\uff0c \u6216\u8005\u81f3\u5c11\u4e00\u4e2a\u5411\u91cf(J\uff0cK)\u3002 \u67e5\u8be2\u5e94\u8be5\u53ea\u5305\u542b\u9690\u5f0f\u5faa\u73af\uff0c\u5141\u8bb8\u8fdb\u884c\u4f18\u5316\u3002"))}d.isMDXComponent=!0},98486:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/column-oriented-b992c529fa4085b63b57452fbbeb27ba.gif"},82738:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/row-oriented-d515facb5bffb48cbd09dc7d064c8816.gif"}}]);