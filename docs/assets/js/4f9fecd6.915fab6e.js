"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[72104],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=l,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,u(u({ref:t},s),{},{components:r})):n.createElement(f,u({ref:t},s))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,u=new Array(a);u[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:l,u[1]=i;for(var c=2;c<a;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={slug:"/zh/sql-reference/functions/url-functions"},u="URL\u51fd\u6570",i={unversionedId:"zh/sql-reference/functions/url-functions",id:"zh/sql-reference/functions/url-functions",title:"URL\u51fd\u6570",description:"urlhan-shu}",source:"@site/docs/zh/sql-reference/functions/url-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/url-functions",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/url-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/url-functions.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/functions/url-functions"},sidebar:"chinese",previous:{title:"\u5b57\u7b26\u4e32\u641c\u7d22\u51fd\u6570",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/string-search-functions"},next:{title:"UUID\u51fd\u6570",permalink:"/AlgoliaDocsSelfCrawl/zh/sql-reference/functions/uuid-functions"}},o={},c=[{value:"URL\u622a\u53d6\u51fd\u6570",id:"urljie-qu-han-shu",level:2},{value:"\u534f\u8bae",id:"protocol",level:3},{value:"\u57df",id:"domain",level:3},{value:"domainwithoutww",id:"domainwithoutwww",level:3},{value:"topLevelDomain",id:"topleveldomain",level:3},{value:"\u7b2c\u4e00\u91cd\u8981\u7684\u5143\u7d20\u5206\u533a\u57df",id:"firstsignificantsubdomain",level:3},{value:"cutToFirstSignificantSubdomain",id:"cuttofirstsignificantsubdomain",level:3},{value:"\u8def\u5f84",id:"path",level:3},{value:"pathFull",id:"pathfull",level:3},{value:"\u67e5\u8be2\u5b57\u7b26\u4e32",id:"querystring",level:3},{value:"\u7247\u6bb5",id:"fragment",level:3},{value:"querystring andfragment",id:"querystringandfragment",level:3},{value:"extractURLParameter(URL,name)",id:"extracturlparameterurl-name",level:3},{value:"extractURLParameters(URL)",id:"extracturlparametersurl",level:3},{value:"extractURLParameterNames(URL)",id:"extracturlparameternamesurl",level:3},{value:"URLHierarchy(URL)",id:"urlhierarchyurl",level:3},{value:"Urlpathhierarchy(URL)",id:"urlpathhierarchyurl",level:3},{value:"decodeURLComponent(URL)",id:"decodeurlcomponenturl",level:3},{value:"\u5220\u9664URL\u4e2d\u7684\u90e8\u5206\u5185\u5bb9",id:"shan-chu-urlzhong-de-bu-fen-nei-rong",level:2},{value:"cutWWW",id:"cutwww",level:3},{value:"cutQueryString",id:"cutquerystring",level:3},{value:"cutFragment",id:"cutfragment",level:3},{value:"cutquerystring andfragment",id:"cutquerystringandfragment",level:3},{value:"cutURLParameter(URL,name)",id:"cuturlparameterurl-name",level:3}],s={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"urlhan-shu"},"URL\u51fd\u6570"),(0,l.kt)("p",null,"\u6240\u6709\u8fd9\u4e9b\u529f\u80fd\u90fd\u4e0d\u9075\u5faaRFC\u3002\u5b83\u4eec\u88ab\u6700\u5927\u7a0b\u5ea6\u7b80\u5316\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002"),(0,l.kt)("h2",{id:"urljie-qu-han-shu"},"URL\u622a\u53d6\u51fd\u6570"),(0,l.kt)("p",null,"\u5982\u679cURL\u4e2d\u6ca1\u6709\u8981\u622a\u53d6\u7684\u5185\u5bb9\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("h3",{id:"protocol"},"\u534f\u8bae"),(0,l.kt)("p",null,"\u8fd4\u56deURL\u7684\u534f\u8bae\u3002\u4f8b\u5982\uff1a http\u3001ftp\u3001mailto\u3001magnet\u2026"),(0,l.kt)("h3",{id:"domain"},"\u57df"),(0,l.kt)("p",null,"\u83b7\u53d6\u57df\u540d\u3002"),(0,l.kt)("h3",{id:"domainwithoutwww"},"domainwithoutww"),(0,l.kt)("p",null,"\u8fd4\u56de\u57df\u540d\u5e76\u5220\u9664\u7b2c\u4e00\u4e2a\u2019www.\u2019\u3002"),(0,l.kt)("h3",{id:"topleveldomain"},"topLevelDomain"),(0,l.kt)("p",null,"\u8fd4\u56de\u9876\u7ea7\u57df\u540d\u3002\u4f8b\u5982\uff1a.ru\u3002"),(0,l.kt)("h3",{id:"firstsignificantsubdomain"},"\u7b2c\u4e00\u91cd\u8981\u7684\u5143\u7d20\u5206\u533a\u57df"),(0,l.kt)("p",null,"\u8fd4\u56de\xab\u7b2c\u4e00\u4e2a\u6709\u6548\u5b50\u57df\u540d\xbb\u3002\u8fd9\u5e76\u4e0d\u662f\u4e00\u4e2a\u6807\u51c6\u6982\u5ff5\uff0c\u4ec5\u7528\u4e8eYandex.Metrica\u3002\u5982\u679c\u9876\u7ea7\u57df\u540d\u4e3a\u2019com\u2019\uff0c\u2018net\u2019\uff0c\u2018org\u2019\u6216\u8005\u2018co\u2019\u5219\u7b2c\u4e00\u4e2a\u6709\u6548\u5b50\u57df\u540d\u4e3a\u4e8c\u7ea7\u57df\u540d\u3002\u5426\u5219\u5219\u8fd4\u56de\u4e09\u7ea7\u57df\u540d\u3002\u4f8b\u5982\uff0cirstSignificantSubdomain (\u2019",(0,l.kt)("a",{parentName:"p",href:"https://news.yandex.ru/%E2%80%98"},"https://news.yandex.ru/\u2018"),") = \u2019yandex\u2019\uff0c firstSignificantSubdomain (\u2018",(0,l.kt)("a",{parentName:"p",href:"https://news.yandex.com.tr/%E2%80%99"},"https://news.yandex.com.tr/\u2019"),") = \u2018yandex\u2019\u3002\u4e00\u4e9b\u5b9e\u73b0\u7ec6\u8282\u5728\u672a\u6765\u53ef\u80fd\u4f1a\u8fdb\u884c\u6539\u53d8\u3002"),(0,l.kt)("h3",{id:"cuttofirstsignificantsubdomain"},"cutToFirstSignificantSubdomain"),(0,l.kt)("p",null,"\u8fd4\u56de\u5305\u542b\u9876\u7ea7\u57df\u540d\u4e0e\u7b2c\u4e00\u4e2a\u6709\u6548\u5b50\u57df\u540d\u4e4b\u95f4\u7684\u5185\u5bb9\uff08\u8bf7\u53c2\u9605\u4e0a\u9762\u7684\u5185\u5bb9\uff09\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"cutToFirstSignificantSubdomain('https://news.yandex.com.tr/') = 'yandex.com.tr'"),"."),(0,l.kt)("h3",{id:"path"},"\u8def\u5f84"),(0,l.kt)("p",null,"\u8fd4\u56deURL\u8def\u5f84\u3002\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"/top/news.html"),"\uff0c\u4e0d\u5305\u542b\u8bf7\u6c42\u53c2\u6570\u3002"),(0,l.kt)("h3",{id:"pathfull"},"pathFull"),(0,l.kt)("p",null,"\u4e0e\u4e0a\u9762\u76f8\u540c\uff0c\u4f46\u5305\u62ec\u8bf7\u6c42\u53c2\u6570\u548cfragment\u3002\u4f8b\u5982\uff1a/top/news.html?page=2#comments"),(0,l.kt)("h3",{id:"querystring"},"\u67e5\u8be2\u5b57\u7b26\u4e32"),(0,l.kt)("p",null,"\u8fd4\u56de\u8bf7\u6c42\u53c2\u6570\u3002\u4f8b\u5982\uff1apage=1&lr=213\u3002\u8bf7\u6c42\u53c2\u6570\u4e0d\u5305\u542b\u95ee\u53f7\u5df2\u7ecf# \u4ee5\u53ca# \u4e4b\u540e\u6240\u6709\u7684\u5185\u5bb9\u3002"),(0,l.kt)("h3",{id:"fragment"},"\u7247\u6bb5"),(0,l.kt)("p",null,"\u8fd4\u56deURL\u7684fragment\u6807\u8bc6\u3002fragment\u4e0d\u5305\u542b#\u3002"),(0,l.kt)("h3",{id:"querystringandfragment"},"querystring andfragment"),(0,l.kt)("p",null,"\u8fd4\u56de\u8bf7\u6c42\u53c2\u6570\u548cfragment\u6807\u8bc6\u3002\u4f8b\u5982\uff1apage=1#29390\u3002"),(0,l.kt)("h3",{id:"extracturlparameterurl-name"},"extractURLParameter(URL,name)"),(0,l.kt)("p",null,"\u8fd4\u56deURL\u8bf7\u6c42\u53c2\u6570\u4e2d\u540d\u79f0\u4e3a\u2019name\u2019\u7684\u53c2\u6570\u3002\u5982\u679c\u4e0d\u5b58\u5728\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002\u5982\u679c\u5b58\u5728\u591a\u4e2a\u5339\u914d\u9879\u5219\u8fd4\u56de\u7b2c\u4e00\u4e2a\u76f8\u5339\u914d\u7684\u3002\u6b64\u51fd\u6570\u5047\u8bbe\u53c2\u6570\u540d\u79f0\u4e0e\u53c2\u6570\u503c\u5728url\u4e2d\u7684\u7f16\u7801\u65b9\u5f0f\u76f8\u540c\u3002"),(0,l.kt)("h3",{id:"extracturlparametersurl"},"extractURLParameters(URL)"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u4e2d\u4ee5name=value\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\u8fd4\u56deurl\u7684\u6240\u6709\u8bf7\u6c42\u53c2\u6570\u3002\u4e0d\u4ee5\u4efb\u4f55\u7f16\u7801\u89e3\u6790\u4efb\u4f55\u5185\u5bb9\u3002"),(0,l.kt)("h3",{id:"extracturlparameternamesurl"},"extractURLParameterNames(URL)"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u4e2d\u5305\u542burl\u7684\u6240\u6709\u8bf7\u6c42\u53c2\u6570\u7684\u540d\u79f0\u3002\u4e0d\u4ee5\u4efb\u4f55\u7f16\u7801\u89e3\u6790\u4efb\u4f55\u5185\u5bb9\u3002"),(0,l.kt)("h3",{id:"urlhierarchyurl"},"URLHierarchy(URL)"),(0,l.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u4e2d\u5305\u542b\u4ee5/\u5207\u5272\u7684URL\u7684\u6240\u6709\u5185\u5bb9\u3002\uff1f\u5c06\u88ab\u5305\u542b\u5728URL\u8def\u5f84\u4ee5\u53ca\u8bf7\u6c42\u53c2\u6570\u4e2d\u3002\u8fde\u7eed\u7684\u5206\u5272\u7b26\u53f7\u88ab\u8bb0\u4e3a\u4e00\u4e2a\u3002"),(0,l.kt)("h3",{id:"urlpathhierarchyurl"},"Urlpathhierarchy(URL)"),(0,l.kt)("p",null,"\u4e0e\u4e0a\u9762\u76f8\u540c\uff0c\u4f46\u7ed3\u679c\u4e0d\u5305\u542b\u534f\u8bae\u548chost\u90e8\u5206\u3002 /element(root)\u4e0d\u5305\u62ec\u5728\u5185\u3002\u8be5\u51fd\u6570\u7528\u4e8e\u5728Yandex.Metric\u4e2d\u5b9e\u73b0\u5bfc\u51faURL\u7684\u6811\u5f62\u7ed3\u6784\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"URLPathHierarchy('https://example.com/browse/CONV-6788') =\n[\n    '/browse/',\n    '/browse/CONV-6788'\n]\n")),(0,l.kt)("h3",{id:"decodeurlcomponenturl"},"decodeURLComponent(URL)"),(0,l.kt)("p",null,"\u8fd4\u56de\u5df2\u7ecf\u89e3\u7801\u7684URL\u3002\n\u4f8b\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT decodeURLComponent('http://127.0.0.1:8123/?query=SELECT%201%3B') AS DecodedURL;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500DecodedURL\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 http://127.0.0.1:8123/?query=SELECT 1; \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"shan-chu-urlzhong-de-bu-fen-nei-rong"},"\u5220\u9664URL\u4e2d\u7684\u90e8\u5206\u5185\u5bb9"),(0,l.kt)("p",null,"\u5982\u679cURL\u4e2d\u4e0d\u5305\u542b\u6307\u5b9a\u7684\u90e8\u5206\uff0c\u5219URL\u4e0d\u53d8\u3002"),(0,l.kt)("h3",{id:"cutwww"},"cutWWW"),(0,l.kt)("p",null,"\u5220\u9664\u5f00\u59cb\u7684\u7b2c\u4e00\u4e2a\u2019www.\u2019\u3002"),(0,l.kt)("h3",{id:"cutquerystring"},"cutQueryString"),(0,l.kt)("p",null,"\u5220\u9664\u8bf7\u6c42\u53c2\u6570\u3002\u95ee\u53f7\u4e5f\u5c06\u88ab\u5220\u9664\u3002"),(0,l.kt)("h3",{id:"cutfragment"},"cutFragment"),(0,l.kt)("p",null,"\u5220\u9664fragment\u6807\u8bc6\u3002#\u540c\u6837\u4e5f\u4f1a\u88ab\u5220\u9664\u3002"),(0,l.kt)("h3",{id:"cutquerystringandfragment"},"cutquerystring andfragment"),(0,l.kt)("p",null,"\u5220\u9664\u8bf7\u6c42\u53c2\u6570\u4ee5\u53cafragment\u6807\u8bc6\u3002\u95ee\u53f7\u4ee5\u53ca#\u4e5f\u4f1a\u88ab\u5220\u9664\u3002"),(0,l.kt)("h3",{id:"cuturlparameterurl-name"},"cutURLParameter(URL,name)"),(0,l.kt)("p",null,"\u5220\u9664URL\u4e2d\u540d\u79f0\u4e3a\u2019name\u2019\u7684\u53c2\u6570\u3002\u6539\u51fd\u6570\u5047\u8bbe\u53c2\u6570\u540d\u79f0\u4ee5\u53ca\u53c2\u6570\u503c\u7ecf\u8fc7URL\u76f8\u540c\u7684\u7f16\u7801\u3002"))}d.isMDXComponent=!0}}]);