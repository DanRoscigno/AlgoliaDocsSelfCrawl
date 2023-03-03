"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[29067],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=l.createContext({}),c=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return l.createElement(p.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},g=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,m=u["".concat(p,".").concat(g)]||u[g]||k[g]||a;return t?l.createElement(m,i(i({ref:n},s),{},{components:t})):l.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}g.displayName="MDXCreateElement"},35260:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var l=t(87462),r=(t(67294),t(3905));const a={slug:"/ru/sql-reference/functions/geo/coordinates",sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c\u0438",sidebar_position:62},i="\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c\u0438",o={unversionedId:"ru/sql-reference/functions/geo/coordinates",id:"ru/sql-reference/functions/geo/coordinates",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c\u0438",description:"geographical-coordinates}",source:"@site/docs/ru/sql-reference/functions/geo/coordinates.md",sourceDirName:"ru/sql-reference/functions/geo",slug:"/ru/sql-reference/functions/geo/coordinates",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/functions/geo/coordinates",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/geo/coordinates.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{slug:"/ru/sql-reference/functions/geo/coordinates",sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c\u0438",sidebar_position:62},sidebar:"russia",previous:{title:"\u0413\u0435\u043e-\u0434\u0430\u043d\u043d\u044b\u0435",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/functions/geo/"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 Geohash",permalink:"/AlgoliaDocsSelfCrawl/ru/sql-reference/functions/geo/geohash"}},p={},c=[{value:"greatCircleDistance",id:"greatcircledistance",level:2},{value:"greatCircleAngle",id:"greatcircleangle",level:2},{value:"pointInEllipses",id:"pointinellipses",level:2},{value:"pointInPolygon",id:"pointinpolygon",level:2}],s={toc:c},u="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geographical-coordinates"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c\u0438"),(0,r.kt)("h2",{id:"greatcircledistance"},"greatCircleDistance"),(0,r.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0442\u043e\u0447\u043a\u0430\u043c\u0438 \u043d\u0430 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438 \u0417\u0435\u043c\u043b\u0438 \u043f\u043e ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Great-circle_distance"},"\u0444\u043e\u0440\u043c\u0443\u043b\u0435 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u0440\u0443\u0433\u0430"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"greatCircleDistance(lon1Deg, lat1Deg, lon2Deg, lat2Deg)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u0445\u043e\u0434\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lon1Deg")," \u2014 \u0434\u043e\u043b\u0433\u043e\u0442\u0430 \u043f\u0435\u0440\u0432\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445. \u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lat1Deg")," \u2014 \u0448\u0438\u0440\u043e\u0442\u0430 \u043f\u0435\u0440\u0432\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445. \u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lon2Deg")," \u2014 \u0434\u043e\u043b\u0433\u043e\u0442\u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445. \u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lat2Deg")," \u2014 \u0448\u0438\u0440\u043e\u0442\u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445. \u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]"),".")),(0,r.kt)("p",null,"\u041f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u0435\u0432\u0435\u0440\u043d\u043e\u0439 \u0448\u0438\u0440\u043e\u0442\u0435 \u0438 \u0432\u043e\u0441\u0442\u043e\u0447\u043d\u043e\u0439 \u0434\u043e\u043b\u0433\u043e\u0442\u0435, \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u2014 \u044e\u0436\u043d\u043e\u0439 \u0448\u0438\u0440\u043e\u0442\u0435 \u0438 \u0437\u0430\u043f\u0430\u0434\u043d\u043e\u0439 \u0434\u043e\u043b\u0433\u043e\u0442\u0435."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,r.kt)("p",null,"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0442\u043e\u0447\u043a\u0430\u043c\u0438 \u043d\u0430 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438 \u0417\u0435\u043c\u043b\u0438 \u0432 \u043c\u0435\u0442\u0440\u0430\u0445."),(0,r.kt)("p",null,"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0433\u0434\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0432\u044b\u0445\u043e\u0434\u044f\u0442 \u0437\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u043e\u0432."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT greatCircleDistance(55.755831, 37.617673, -55.755831, -37.617673)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500greatCircleDistance(55.755831, 37.617673, -55.755831, -37.617673)\u2500\u2510\n\u2502                                                14132374.194975413 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"greatcircleangle"},"greatCircleAngle"),(0,r.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0443\u0433\u043b\u043e\u0432\u043e\u0435 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043d\u0430 \u0441\u0444\u0435\u0440\u0435 \u043f\u043e ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Great-circle_distance"},"\u0444\u043e\u0440\u043c\u0443\u043b\u0435 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u0440\u0443\u0433\u0430"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"greatCircleAngle(lon1Deg, lat1Deg, lon2Deg, lat2Deg)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u0445\u043e\u0434\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lon1Deg")," \u2014 \u0434\u043e\u043b\u0433\u043e\u0442\u0430 \u043f\u0435\u0440\u0432\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lat1Deg")," \u2014 \u0448\u0438\u0440\u043e\u0442\u0430 \u043f\u0435\u0440\u0432\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lon2Deg")," \u2014 \u0434\u043e\u043b\u0433\u043e\u0442\u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lat2Deg")," \u2014 \u0448\u0438\u0440\u043e\u0442\u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,r.kt)("p",null,"\u0414\u043b\u0438\u043d\u0430 \u0434\u0443\u0433\u0438 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u0440\u0443\u0433\u0430 \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0442\u043e\u0447\u043a\u0430\u043c\u0438 \u0432 \u0433\u0440\u0430\u0434\u0443\u0441\u0430\u0445."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT greatCircleAngle(0, 0, 45, 0) AS arc\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arc\u2500\u2510\n\u2502  45 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"pointinellipses"},"pointInEllipses"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043b\u0438 \u0442\u043e\u0447\u043a\u0430 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e\u043c\u0443 \u0438\u0437 \u044d\u043b\u043b\u0438\u043f\u0441\u043e\u0432.\n\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u2014 \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0432 \u0434\u0435\u043a\u0430\u0440\u0442\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pointInEllipses(x, y, x\u2080, y\u2080, a\u2080, b\u2080,...,x\u2099, y\u2099, a\u2099, b\u2099)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u0445\u043e\u0434\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x, y")," \u2014 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u0442\u043e\u0447\u043a\u0438 \u043d\u0430 \u043f\u043b\u043e\u0441\u043a\u043e\u0441\u0442\u0438."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x\u1d62, y\u1d62")," \u2014 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u0446\u0435\u043d\u0442\u0440\u0430 ",(0,r.kt)("inlineCode",{parentName:"li"},"i"),"-\u0433\u043e \u044d\u043b\u043b\u0438\u043f\u0441\u0430."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a\u1d62, b\u1d62")," \u2014 \u043f\u043e\u043b\u0443\u043e\u0441\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"i"),"-\u0433\u043e \u044d\u043b\u043b\u0438\u043f\u0441\u0430 (\u0432 \u0435\u0434\u0438\u043d\u0438\u0446\u0430\u0445 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442 x,y).")),(0,r.kt)("p",null,"\u0412\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"2+4\u22c5n"),", \u0433\u0434\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u043b\u0438\u043f\u0441\u043e\u0432."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1"),", \u0435\u0441\u043b\u0438 \u0442\u043e\u0447\u043a\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u044d\u043b\u043b\u0438\u043f\u0441\u043e\u0432, ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", \u0435\u0441\u043b\u0438 \u043d\u0435\u0442."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT pointInEllipses(10., 10., 10., 9.1, 1., 0.9999)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500pointInEllipses(10., 10., 10., 9.1, 1., 0.9999)\u2500\u2510\n\u2502                                               1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"pointinpolygon"},"pointInPolygon"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043b\u0438 \u0442\u043e\u0447\u043a\u0430 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0443 \u043d\u0430 \u043f\u043b\u043e\u0441\u043a\u043e\u0441\u0442\u0438."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"pointInPolygon((x, y), [(a, b), (c, d) ...], ...)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u0445\u043e\u0434\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(x, y)")," \u2014 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u0442\u043e\u0447\u043a\u0438 \u043d\u0430 \u043f\u043b\u043e\u0441\u043a\u043e\u0441\u0442\u0438. \u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/tuple"},"Tuple")," \u2014 \u043a\u043e\u0440\u0442\u0435\u0436 \u0438\u0437 \u0434\u0432\u0443\u0445 \u0447\u0438\u0441\u0435\u043b."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[(a, b), (c, d) ...]")," \u2014 \u0432\u0435\u0440\u0448\u0438\u043d\u044b \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0430. \u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/ru/sql-reference/data-types/array"},"Array"),". \u041a\u0430\u0436\u0434\u0430\u044f \u0432\u0435\u0440\u0448\u0438\u043d\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u0439 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442 ",(0,r.kt)("inlineCode",{parentName:"li"},"(a, b)"),". \u0412\u0435\u0440\u0448\u0438\u043d\u044b \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u043e\u0431\u0445\u043e\u0434\u0430 \u043f\u043e \u0438\u043b\u0438 \u043f\u0440\u043e\u0442\u0438\u0432 \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0435\u043b\u043a\u0438. \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0435\u0440\u0448\u0438\u043d \u2014 3. \u041c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u044b\u043c."),(0,r.kt)("li",{parentName:"ul"},"\u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u0430\u043a\u0436\u0435 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0438 \u0441 \u0434\u044b\u0440\u043a\u0430\u043c\u0438 (\u0432\u044b\u0440\u0435\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u043a\u0443\u0441\u043a\u0430\u043c\u0438). \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u043b\u0443\u0447\u0430\u044f, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0438, \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0438\u0435 \u0432\u044b\u0440\u0435\u0437\u0430\u043d\u043d\u044b\u0435 \u043a\u0443\u0441\u043a\u0438, \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438. \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043d\u0435 \u043e\u0434\u043d\u043e\u0441\u0432\u044f\u0437\u043d\u044b\u0435 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0438.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1"),", \u0435\u0441\u043b\u0438 \u0442\u043e\u0447\u043a\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0430, ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", \u0435\u0441\u043b\u0438 \u043d\u0435\u0442.\n\u0415\u0441\u043b\u0438 \u0442\u043e\u0447\u043a\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0435 \u043c\u043d\u043e\u0433\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0430, \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u043a\u0430\u043a 0, \u0442\u0430\u043a \u0438 1."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT pointInPolygon((3., 3.), [(6, 0), (8, 4), (5, 8), (0, 2)]) AS res\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")))}k.isMDXComponent=!0}}]);