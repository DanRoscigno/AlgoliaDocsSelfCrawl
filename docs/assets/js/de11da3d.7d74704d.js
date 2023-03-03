"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[92161],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||l;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},67062:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const l={slug:"/ru/sql-reference/table-functions/generate",sidebar_position:47,sidebar_label:"generateRandom"},o="generateRandom",i={unversionedId:"ru/sql-reference/table-functions/generate",id:"ru/sql-reference/table-functions/generate",title:"generateRandom",description:"generaterandom}",source:"@site/docs/ru/sql-reference/table-functions/generate.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/generate",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/table-functions/generate",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/generate.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{slug:"/ru/sql-reference/table-functions/generate",sidebar_position:47,sidebar_label:"generateRandom"},sidebar:"russia",previous:{title:"input",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/table-functions/input"},next:{title:"cluster",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/table-functions/cluster"}},c={},s=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"primer",level:2}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generaterandom"},"generateRandom"),(0,a.kt)("p",null,"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u0445\u0435\u043c\u043e\u0439.\n\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0434\u0430\u043d\u043d\u044b\u043c\u0438.\n\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"LowCardinality")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"generateRandom('name TypeName[, name TypeName]...', [, 'random_seed'[, 'max_string_length'[, 'max_array_length']]])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," \u2014 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TypeName")," \u2014 \u0442\u0438\u043f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_array_length")," \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_string_length")," \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0441\u0442\u0440\u043e\u043a. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"random_seed")," \u2014 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b \u0432\u0440\u0443\u0447\u043d\u0443\u044e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b. \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0440\u0430\u0432\u043d\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," - \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,a.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u0437\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u043e\u0439 \u0441\u0445\u0435\u043c\u043e\u0439."),(0,a.kt)("h2",{id:"primer"},"\u041f\u0440\u0438\u043c\u0435\u0440"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM generateRandom('a Array(Int8), d Decimal32(4), c Tuple(DateTime64(3), UUID)', 1, 10, 2) LIMIT 3;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500d\u2500\u252c\u2500c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [77]     \u2502 -124167.6723 \u2502 ('2061-04-17 21:59:44.573','3f72f405-ec3e-13c8-44ca-66ef335f7835') \u2502\n\u2502 [32,110] \u2502 -141397.7312 \u2502 ('1979-02-09 03:43:48.526','982486d1-5a5d-a308-e525-7bd8b80ffa73') \u2502\n\u2502 [68]     \u2502  -67417.0770 \u2502 ('2080-03-12 14:17:31.269','110425e5-413f-10a6-05ba-fa6b3e929f15') \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);