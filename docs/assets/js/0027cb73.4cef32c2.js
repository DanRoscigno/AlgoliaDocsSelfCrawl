"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[56834],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||l;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={slug:"/ru/faq/general/columnar-database",title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445?",sidebar_position:101},o="\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u0430\u044f (\u043a\u043e\u043b\u043e\u043d\u043e\u0447\u043d\u0430\u044f) \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445?",i={unversionedId:"ru/faq/general/columnar-database",id:"ru/faq/general/columnar-database",title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445?",description:"what-is-a-columnar-database}",source:"@site/docs/ru/faq/general/columnar-database.md",sourceDirName:"ru/faq/general",slug:"/ru/faq/general/columnar-database",permalink:"/AlgoliaDocsSelfCrawl/ru/faq/general/columnar-database",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/faq/general/columnar-database.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{slug:"/ru/faq/general/columnar-database",title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445?",sidebar_position:101},sidebar:"russia",previous:{title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 OLAP?",permalink:"/AlgoliaDocsSelfCrawl/ru/faq/general/olap"},next:{title:"Why not use something like MapReduce?",permalink:"/AlgoliaDocsSelfCrawl/ru/faq/general/mapreduce"}},c={},s=[],u={toc:s},p="wrapper";function f(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-a-columnar-database"},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u0430\u044f (\u043a\u043e\u043b\u043e\u043d\u043e\u0447\u043d\u0430\u044f) \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445?"),(0,n.kt)("p",null,"\u0412 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u043e\u0439 \u0411\u0414 \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e (\u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e) \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432. \u0422\u0430\u043a\u043e\u0439 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0441 \u0434\u0438\u0441\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u044d\u0442\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043d\u0430\u0434 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u043d\u044b\u043c. ClickHouse \u2014 \u0442\u0438\u043f\u0438\u0447\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u043e\u0439 \u0421\u0423\u0411\u0414."),(0,n.kt)("p",null,"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u043e\u0439 \u0421\u0423\u0411\u0414:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430\u0434 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0430 \u043d\u0435 \u043d\u0430\u0434 \u0432\u0441\u0435\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435\u0439 \u0441\u0440\u0430\u0437\u0443;"),(0,n.kt)("li",{parentName:"ul"},"\u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043c\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445;"),(0,n.kt)("li",{parentName:"ul"},"\u0441\u0436\u0430\u0442\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445.")),(0,n.kt)("p",null,"\u041d\u0438\u0436\u0435 \u2014 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u044e\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043e\u0442\u0447\u0435\u0442\u043e\u0432 \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043e\u0431\u044b\u0447\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u043e\u0439 \u0421\u0423\u0411\u0414 \u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u043e\u0439 \u0421\u0423\u0411\u0414:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u0430\u044f \u0421\u0423\u0411\u0414"),"\n",(0,n.kt)("img",{alt:"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u0430\u044f \u0421\u0423\u0411\u0414",src:r(63809).Z,width:"630",height:"258"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u0421\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u0430\u044f \u0421\u0423\u0411\u0414"),"\n",(0,n.kt)("img",{alt:"\u0421\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u0430\u044f \u0421\u0423\u0411\u0414",src:r(96139).Z,width:"630",height:"258"})),(0,n.kt)("p",null,"\u0414\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u044b\u0435 \u0421\u0423\u0411\u0414 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u0435\u0435, \u0442\u0430\u043a \u043a\u0430\u043a \u0432 \u043d\u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430 \u0432\u0441\u044f\u043a\u0438\u0439 \u0441\u043b\u0443\u0447\u0430\u0439, \u0438 \u044d\u0442\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u0447\u0442\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445. \u0421\u0442\u043e\u043b\u0431\u0446\u043e\u0432\u044b\u0435 \u0421\u0423\u0411\u0414 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u043d\u0438 \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u043e \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u043d\u0430 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435\u0434\u043e\u0440\u043e\u0433\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 \u2014 \u0434\u043b\u044f \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \u0412 ClickHouse \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/special/distributed"},"\u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435")," \u0438 ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/engines/table-engines/mergetree-family/replication"},"\u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435")," \u0442\u0430\u0431\u043b\u0438\u0446\u044b."))}f.isMDXComponent=!0},96139:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/column-oriented-d082e49b7743d4ded32c7952bfdb028f.gif"},63809:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/row-oriented-3e6fd5aa48e3075202d242b4799da8fa.gif"}}]);