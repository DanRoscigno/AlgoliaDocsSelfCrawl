"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[75682],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>h});var r=l(67294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,r,i=function(e,t){if(null==e)return{};var l,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},v="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),v=c(l),d=i,h=v["".concat(u,".").concat(d)]||v[d]||p[d]||n;return l?r.createElement(h,a(a({ref:t},s),{},{components:l})):r.createElement(h,a({ref:t},s))}));function h(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=l.length,a=new Array(n);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[v]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<n;c++)a[c]=l[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},22910:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=l(87462),i=(l(67294),l(3905));const n={slug:"/ru/whats-new/security-changelog",sidebar_position:76,sidebar_label:"Security Changelog"},a="Security Changelog",o={unversionedId:"ru/whats-new/security-changelog",id:"ru/whats-new/security-changelog",title:"Security Changelog",description:"security-changelog}",source:"@site/docs/ru/whats-new/security-changelog.md",sourceDirName:"ru/whats-new",slug:"/ru/whats-new/security-changelog",permalink:"/AlgoliaDocsSelfCrawl/ru/whats-new/security-changelog",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/whats-new/security-changelog.md",tags:[],version:"current",sidebarPosition:76,frontMatter:{slug:"/ru/whats-new/security-changelog",sidebar_position:76,sidebar_label:"Security Changelog"},sidebar:"russia",previous:{title:"2017",permalink:"/AlgoliaDocsSelfCrawl/ru/whats-new/changelog/2017"},next:{title:"Roadmap",permalink:"/AlgoliaDocsSelfCrawl/ru/whats-new/roadmap"}},u={},c=[{value:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 21.4.3.21, 2021-04-12",id:"fixed-in-clickhouse-release-21-4-3-21-2019-09-10",level:2},{value:"CVE-2021-25263",id:"cve-2021-25263",level:3},{value:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 19.14.3.3, 2019-09-10",id:"ispravleno-v-relize-19-14-3-3-2019-09-10",level:2},{value:"CVE-2019-15024",id:"cve-2019-15024",level:3},{value:"CVE-2019-16535",id:"cve-2019-16535",level:3},{value:"CVE-2019-16536",id:"cve-2019-16536",level:3},{value:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 19.13.6.1 \u043e\u0442 20 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2019",id:"ispravleno-v-relize-19-13-6-1-ot-20-sentiabria-2019",level:2},{value:"CVE-2019-18657",id:"cve-2019-18657",level:3},{value:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 18.12.13 \u043e\u0442 10 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2018",id:"ispravleno-v-relize-18-12-13-ot-10-sentiabria-2018",level:2},{value:"CVE-2018-14672",id:"cve-2018-14672",level:3},{value:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 18.10.3 \u043e\u0442 13 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2018",id:"ispravleno-v-relize-18-10-3-ot-13-avgusta-2018",level:2},{value:"CVE-2018-14671",id:"cve-2018-14671",level:3},{value:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 1.1.54388 \u043e\u0442 28 \u0438\u044e\u043d\u044f 2018",id:"ispravleno-v-relize-1-1-54388-ot-28-iiunia-2018",level:2},{value:"CVE-2018-14668",id:"cve-2018-14668",level:3},{value:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 1.1.54390 \u043e\u0442 6 \u0438\u044e\u043b\u044f 2018",id:"ispravleno-v-relize-1-1-54390-ot-6-iiulia-2018",level:2},{value:"CVE-2018-14669",id:"cve-2018-14669",level:3},{value:"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 1.1.54131 \u043e\u0442 10 \u044f\u043d\u0432\u0430\u0440\u044f 2017",id:"ispravleno-v-relize-1-1-54131-ot-10-ianvaria-2017",level:2},{value:"CVE-2018-14670",id:"cve-2018-14670",level:3}],s={toc:c},v="wrapper";function p(e){let{components:t,...l}=e;return(0,i.kt)(v,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security-changelog"},"Security Changelog"),(0,i.kt)("h2",{id:"fixed-in-clickhouse-release-21-4-3-21-2019-09-10"},"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 21.4.3.21, 2021-04-12"),(0,i.kt)("h3",{id:"cve-2021-25263"},"CVE-2021-25263"),(0,i.kt)("p",null,"\u0417\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a \u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u043a \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Clickhouse.\n\u0417\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u043e\u0439\u0442\u0438 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u0443\u0442\u0438 \u043a \u0444\u0430\u0439\u043b\u0443 \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0447\u0430\u0441\u0442\u044c \u043b\u044e\u0431\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u0430\u043a \u0441\u043b\u043e\u0432\u0430\u0440\u044c. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u0443\u044f \u043e\u043f\u0446\u0438\u044f\u043c\u0438 \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0430 \u0444\u0430\u0439\u043b\u0430, \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u0444\u0430\u0439\u043b\u0430 \u0438 \u043f\u043e\u0448\u0430\u0433\u043e\u0432\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0432\u0435\u0441\u044c \u0444\u0430\u0439\u043b."),(0,i.kt)("p",null,"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0432 \u0432\u0435\u0440\u0441\u0438\u044f\u0445 20.8.18.32-lts, 21.1.9.41-stable, 21.2.9.41-stable, 21.3.6.55-lts, 21.4.3.21-stable \u0438 \u0432\u044b\u0448\u0435."),(0,i.kt)("p",null,"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f: ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/vegoshin"},"\u0412\u044f\u0447\u0435\u0441\u043b\u0430\u0432\u0443 \u0415\u0433\u043e\u0448\u0438\u043d\u0443")),(0,i.kt)("h2",{id:"ispravleno-v-relize-19-14-3-3-2019-09-10"},"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 19.14.3.3, 2019-09-10"),(0,i.kt)("h3",{id:"cve-2019-15024"},"CVE-2019-15024"),(0,i.kt)("p",null,"\u0417\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a \u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u043d\u0430 \u0437\u0430\u043f\u0438\u0441\u044c \u043a ZooKeeper \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432 \u0441\u0435\u0442\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0439 ClickHouse \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0432\u0440\u0435\u0434\u043e\u043d\u043e\u0441\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u0435\u0441\u0442\u0438 \u0441\u0435\u0431\u044f \u043a\u0430\u043a \u0440\u0435\u043f\u043b\u0438\u043a\u0430 ClickHouse \u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 ZooKeeper. \u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0432\u0440\u0435\u0434\u043e\u043d\u043e\u0441\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u043f\u0443\u0442\u044c \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435."),(0,i.kt)("p",null,"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f: \u042d\u043b\u044c\u0434\u0430\u0440\u0443 \u0417\u0430\u0438\u0442\u043e\u0432\u0443 \u0438\u0437 \u0421\u043b\u0443\u0436\u0431\u044b \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u042f\u043d\u0434\u0435\u043a\u0441\u0430"),(0,i.kt)("h3",{id:"cve-2019-16535"},"CVE-2019-16535"),(0,i.kt)("p",null,"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u0435\u043a\u043e\u043c\u043f\u0440\u0435\u0441\u0441\u0438\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u043b \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0442\u044c OOB \u0447\u0442\u0435\u043d\u0438\u044f \u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043f\u0430\u043c\u044f\u0442\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445, \u0447\u0442\u043e \u043c\u043e\u0433\u043b\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043a \u043e\u0442\u043a\u0430\u0437\u0443 \u0432 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0438. \u0422\u0430\u043a\u0436\u0435 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u043c\u043e\u0433\u043b\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u044c\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430."),(0,i.kt)("p",null,"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f: \u042d\u043b\u044c\u0434\u0430\u0440\u0443 \u0417\u0430\u0438\u0442\u043e\u0432\u0443 \u0438\u0437 \u0421\u043b\u0443\u0436\u0431\u044b \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u042f\u043d\u0434\u0435\u043a\u0441\u0430"),(0,i.kt)("h3",{id:"cve-2019-16536"},"CVE-2019-16536"),(0,i.kt)("p",null,"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442 \u0437\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a\u0430 \u0438\u043c\u0435\u043b \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0441\u0442\u0435\u043a\u0430, \u0447\u0442\u043e \u043c\u043e\u0433\u043b\u043e \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u043e\u0442\u043a\u0430\u0437\u0443 \u0432 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0438."),(0,i.kt)("p",null,"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f: \u042d\u043b\u044c\u0434\u0430\u0440\u0443 \u0417\u0430\u0438\u0442\u043e\u0432\u0443 \u0438\u0437 \u0421\u043b\u0443\u0436\u0431\u044b \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u042f\u043d\u0434\u0435\u043a\u0441\u0430"),(0,i.kt)("h2",{id:"ispravleno-v-relize-19-13-6-1-ot-20-sentiabria-2019"},"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 19.13.6.1 \u043e\u0442 20 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2019"),(0,i.kt)("h3",{id:"cve-2019-18657"},"CVE-2019-18657"),(0,i.kt)("p",null,"\u0423\u044f\u0437\u0432\u0438\u043c\u043e\u0441\u0442\u044c \u0432 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u043b\u0430 \u0437\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a\u0443 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0435 HTTP-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441."),(0,i.kt)("p",null,"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NSTikhomirov"},"\u041d\u0438\u043a\u0438\u0442\u0435 \u0422\u0438\u0445\u043e\u043c\u0438\u0440\u043e\u0432\u0443")),(0,i.kt)("h2",{id:"ispravleno-v-relize-18-12-13-ot-10-sentiabria-2018"},"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 18.12.13 \u043e\u0442 10 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2018"),(0,i.kt)("h3",{id:"cve-2018-14672"},"CVE-2018-14672"),(0,i.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 CatBoost \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043b\u0430 \u043f\u0443\u0442\u0438 \u043a \u0444\u0430\u0439\u043b\u0430\u043c, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u043b\u043e \u0447\u0438\u0442\u0430\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 Clickhouse \u0447\u0435\u0440\u0435\u0437 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0430\u0445."),(0,i.kt)("p",null,"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f: \u0410\u043d\u0434\u0440\u0435\u044e \u041a\u0440\u0430\u0441\u0438\u0447\u043a\u043e\u0432\u0443 \u0438\u0437 \u0421\u043b\u0443\u0436\u0431\u044b \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u042f\u043d\u0434\u0435\u043a\u0441\u0430"),(0,i.kt)("h2",{id:"ispravleno-v-relize-18-10-3-ot-13-avgusta-2018"},"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 18.10.3 \u043e\u0442 13 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2018"),(0,i.kt)("h3",{id:"cve-2018-14671"},"CVE-2018-14671"),(0,i.kt)("p",null,"unixODBC \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u043b \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0443\u0442\u044c \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e shared object \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u0447\u0442\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u043b\u043e \u043a \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0434 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ClickHouse."),(0,i.kt)("p",null,"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f: \u0410\u043d\u0434\u0440\u0435\u044e \u041a\u0440\u0430\u0441\u0438\u0447\u043a\u043e\u0432\u0443 \u0438 \u0415\u0432\u0433\u0435\u043d\u0438\u044e \u0421\u0438\u0434\u043e\u0440\u043e\u0432\u0443 \u0438\u0437 \u0421\u043b\u0443\u0436\u0431\u044b \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u042f\u043d\u0434\u0435\u043a\u0441\u0430"),(0,i.kt)("h2",{id:"ispravleno-v-relize-1-1-54388-ot-28-iiunia-2018"},"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 1.1.54388 \u043e\u0442 28 \u0438\u044e\u043d\u044f 2018"),(0,i.kt)("h3",{id:"cve-2018-14668"},"CVE-2018-14668"),(0,i.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \xabremote\xbb \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u043b\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0432 \u043f\u043e\u043b\u044f\u0445 \xabuser\xbb, \xabpassword\xbb \u0438 \xabdefault_database\xbb, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u043b\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u0430\u0442\u0430\u043a\u0438 \u043a\u043b\u0430\u0441\u0441\u0430 Cross Protocol Request Forgery."),(0,i.kt)("p",null,"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f: \u0410\u043d\u0434\u0440\u0435\u044e \u041a\u0440\u0430\u0441\u0438\u0447\u043a\u043e\u0432\u0443 \u0438\u0437 \u0421\u043b\u0443\u0436\u0431\u044b \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u042f\u043d\u0434\u0435\u043a\u0441\u0430"),(0,i.kt)("h2",{id:"ispravleno-v-relize-1-1-54390-ot-6-iiulia-2018"},"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 1.1.54390 \u043e\u0442 6 \u0438\u044e\u043b\u044f 2018"),(0,i.kt)("h3",{id:"cve-2018-14669"},"CVE-2018-14669"),(0,i.kt)("p",null,"\u0412 ClickHouse MySQL \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u0431\u044b\u043b\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \xabLOAD DATA LOCAL INFILE\xbb, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u043b\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043d\u0430 \u0447\u0442\u0435\u043d\u0438\u0435 \u043a \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u043c \u0444\u0430\u0439\u043b\u0430\u043c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0433\u0434\u0435 \u0437\u0430\u043f\u0443\u0449\u0435\u043d ClickHouse."),(0,i.kt)("p",null,"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f: \u0410\u043d\u0434\u0440\u0435\u044e \u041a\u0440\u0430\u0441\u0438\u0447\u043a\u043e\u0432\u0443 \u0438 \u0415\u0432\u0433\u0435\u043d\u0438\u044e \u0421\u0438\u0434\u043e\u0440\u043e\u0432\u0443 \u0438\u0437 \u0421\u043b\u0443\u0436\u0431\u044b \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u042f\u043d\u0434\u0435\u043a\u0441\u0430"),(0,i.kt)("h2",{id:"ispravleno-v-relize-1-1-54131-ot-10-ianvaria-2017"},"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0440\u0435\u043b\u0438\u0437\u0435 1.1.54131 \u043e\u0442 10 \u044f\u043d\u0432\u0430\u0440\u044f 2017"),(0,i.kt)("h3",{id:"cve-2018-14670"},"CVE-2018-14670"),(0,i.kt)("p",null,"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0432 deb \u043f\u0430\u043a\u0435\u0442\u0435 \u043c\u043e\u0433\u043b\u0430 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u043d\u0435\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u043c\u0443 \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u043a \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("p",null,"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f: the UK\u2019s National Cyber Security Centre (NCSC)"))}p.isMDXComponent=!0}}]);