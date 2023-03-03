"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[95471],{3905:(e,l,n)=>{n.d(l,{Zo:()=>s,kt:()=>c});var t=n(67294);function a(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function r(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?r(Object(n),!0).forEach((function(l){a(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function p(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),o=function(e){var l=t.useContext(i),n=l;return e&&(n="function"==typeof e?e(l):u(u({},l),e)),n},s=function(e){var l=o(e.components);return t.createElement(i.Provider,{value:l},e.children)},N="mdxType",k={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},m=t.forwardRef((function(e,l){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),N=o(n),m=a,c=N["".concat(i,".").concat(m)]||N[m]||k[m]||r;return n?t.createElement(c,u(u({ref:l},s),{},{components:n})):t.createElement(c,u({ref:l},s))}));function c(e,l){var n=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=m;var p={};for(var i in l)hasOwnProperty.call(l,i)&&(p[i]=l[i]);p.originalType=e,p[N]="string"==typeof e?e:a,u[1]=p;for(var o=2;o<r;o++)u[o]=n[o];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50174:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>i,contentTitle:()=>u,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var t=n(87462),a=(n(67294),n(3905));const r={slug:"/ru/sql-reference/functions/functions-for-nulls",sidebar_position:63,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Nullable-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438"},u="\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Nullable-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438",p={unversionedId:"ru/sql-reference/functions/functions-for-nulls",id:"ru/sql-reference/functions/functions-for-nulls",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Nullable-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438",description:"funktsii-dlia-raboty-s-nullable-argumentami}",source:"@site/docs/ru/sql-reference/functions/functions-for-nulls.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/functions-for-nulls",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/functions/functions-for-nulls",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/functions-for-nulls.md",tags:[],version:"current",sidebarPosition:63,frontMatter:{slug:"/ru/sql-reference/functions/functions-for-nulls",sidebar_position:63,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Nullable-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438"},sidebar:"russia",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u043c\u0438 S2",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/functions/geo/s2"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/functions/machine-learning-functions"}},i={},o=[{value:"isNull",id:"isnull",level:2},{value:"isNotNull",id:"isnotnull",level:2},{value:"coalesce",id:"coalesce",level:2},{value:"ifNull",id:"ifnull",level:2},{value:"nullIf",id:"nullif",level:2},{value:"assumeNotNull",id:"assumenotnull",level:2},{value:"toNullable",id:"tonullable",level:2}],s={toc:o},N="wrapper";function k(e){let{components:l,...n}=e;return(0,a.kt)(N,(0,t.Z)({},s,n,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"funktsii-dlia-raboty-s-nullable-argumentami"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Nullable-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438"),(0,a.kt)("h2",{id:"isnull"},"isNull"),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/syntax#null-literal"},"NULL"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"isNull(x)\n")),(0,a.kt)("p",null,"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: ",(0,a.kt)("inlineCode",{parentName:"p"},"ISNULL"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u043d\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1"),", \u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0"),", \u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT x FROM t_null WHERE isNull(y);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2510\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"isnotnull"},"isNotNull"),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/syntax#null-literal"},"NULL"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"isNotNull(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u043d\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0"),", \u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1"),", \u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT x FROM t_null WHERE isNotNull(y);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"coalesce"},"coalesce"),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043b\u0435\u0432\u0430-\u043d\u0430\u043f\u0440\u0430\u0432\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u044b\u0439 \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"coalesce(x,...)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043d\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430. \u0412\u0441\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b \u043f\u043e \u0442\u0438\u043f\u0443 \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u0435\u0440\u0432\u044b\u0439 \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),", \u0435\u0441\u043b\u0438 \u0432\u0441\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0430\u0434\u0440\u0435\u0441\u043d\u0443\u044e \u043a\u043d\u0438\u0433\u0443, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0441\u0432\u044f\u0437\u0438 \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500mail\u2500\u252c\u2500phone\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500icq\u2500\u2510\n\u2502 client 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 123-45-67 \u2502  123 \u2502\n\u2502 client 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 \u1d3a\u1d41\u1d38\u1d38      \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u041f\u043e\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"mail")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"phone")," \u0438\u043c\u0435\u044e\u0442 \u0442\u0438\u043f String, \u0430 \u043f\u043e\u043b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"icq")," \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt32"),", \u0435\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,a.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0438\u043c \u0438\u0437 \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0438 \u043f\u0435\u0440\u0432\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT coalesce(mail, phone, CAST(icq,'Nullable(String)')) FROM aBook;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500coalesce(mail, phone, CAST(icq, 'Nullable(String)'))\u2500\u2510\n\u2502 client 1 \u2502 123-45-67                                            \u2502\n\u2502 client 2 \u2502 \u1d3a\u1d41\u1d38\u1d38                                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"ifnull"},"ifNull"),(0,a.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ifNull(x,alt)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"alt")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u0435\u0440\u043d\u0451\u0442, \u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"x"),", \u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,a.kt)("li",{parentName:"ul"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"alt"),", \u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ifNull('a', 'b');\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500ifNull('a', 'b')\u2500\u2510\n\u2502 a                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ifNull(NULL, 'b');\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500ifNull(NULL, 'b')\u2500\u2510\n\u2502 b                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"nullif"},"nullIf"),(0,a.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),", \u0435\u0441\u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0440\u0430\u0432\u043d\u044b."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"nullIf(x, y)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u044f. \u041e\u043d\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u0445 \u0442\u0438\u043f\u043e\u0432, \u0438\u043d\u0430\u0447\u0435 ClickHouse \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),", \u0435\u0441\u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0440\u0430\u0432\u043d\u044b."),(0,a.kt)("li",{parentName:"ul"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"x"),", \u0435\u0441\u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u0440\u0430\u0432\u043d\u044b.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT nullIf(1, 1);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500nullIf(1, 1)\u2500\u2510\n\u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT nullIf(1, 2);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500nullIf(1, 2)\u2500\u2510\n\u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"assumenotnull"},"assumeNotNull"),(0,a.kt)("p",null,"\u041f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 ",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/functions/functions-for-nulls"},"Nullable")," \u043a \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"Nullable"),", \u0435\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"assumeNotNull(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0418\u0441\u0445\u043e\u0434\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"Nullable")," \u0442\u0438\u043f\u043e\u043c, \u0435\u0441\u043b\u0438 \u043e\u043d\u043e \u2014 \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,a.kt)("li",{parentName:"ul"},"\u041d\u0435\u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0438\u0439 \u043e\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u0435\u0441\u043b\u0438 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"t_null"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE t_null;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE default.t_null ( x Int8,  y Nullable(Int8)) ENGINE = TinyLog \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"assumeNotNull")," \u043a \u0441\u0442\u043e\u043b\u0431\u0446\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT assumeNotNull(y) FROM t_null;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500assumeNotNull(y)\u2500\u2510\n\u2502                0 \u2502\n\u2502                3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(assumeNotNull(y)) FROM t_null;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(assumeNotNull(y))\u2500\u2510\n\u2502 Int8                         \u2502\n\u2502 Int8                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"tonullable"},"toNullable"),(0,a.kt)("p",null,"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442 \u0442\u0438\u043f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"Nullable"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"toNullable(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043d\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0412\u0445\u043e\u0434\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u0442\u0438\u043f\u043e\u043c \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"Nullable"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(10);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(10)\u2500\u2510\n\u2502 UInt8          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(toNullable(10));\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(toNullable(10))\u2500\u2510\n\u2502 Nullable(UInt8)            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}k.isMDXComponent=!0}}]);