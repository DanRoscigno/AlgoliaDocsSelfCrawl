"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[2408],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||r;return n?a.createElement(d,i(i({ref:e},c),{},{components:n})):a.createElement(d,i({ref:e},c))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11336:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={slug:"/en/native-protocol/hash",sidebar_position:5},i="CityHash",l={unversionedId:"en/native-protocol/hash",id:"en/native-protocol/hash",title:"CityHash",description:"ClickHouse uses one of previous versions of CityHash from Google.",source:"@site/docs/en/native-protocol/hash.md",sourceDirName:"en/native-protocol",slug:"/en/native-protocol/hash",permalink:"/AlgoliaDocsSelfCrawl/en/native-protocol/hash",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/native-protocol/hash.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/en/native-protocol/hash",sidebar_position:5}},s={},p=[{value:"Implementations",id:"implementations",level:2},{value:"Go",id:"go",level:3}],c={toc:p},u="wrapper";function h(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cityhash"},"CityHash"),(0,o.kt)("p",null,"ClickHouse uses ",(0,o.kt)("strong",{parentName:"p"},"one of previous")," versions of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/cityhash"},"CityHash from Google"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"CityHash has changed the algorithm after we have added it into ClickHouse."),(0,o.kt)("p",{parentName:"admonition"},"CityHash documentation specifically notes that the user should not rely to specific hash values and should not save it anywhere or use it as sharding key."),(0,o.kt)("p",{parentName:"admonition"},"But as we exposed this function to the user, we had to fix the version of CityHash (to 1.0.2). And now we guarantee that the behaviour of CityHash functions available in SQL will not change."),(0,o.kt)("p",{parentName:"admonition"},"\u2014 Alexey Milovidov")),(0,o.kt)("admonition",{title:"Note",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Current version of Google's CityHash ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues/8354"},"differs")," from ClickHouse ",(0,o.kt)("inlineCode",{parentName:"p"},"cityHash64")," variant."),(0,o.kt)("p",{parentName:"admonition"},"Don't use ",(0,o.kt)("inlineCode",{parentName:"p"},"farmHash64")," to get Google's CityHash value! ",(0,o.kt)("a",{parentName:"p",href:"https://opensource.googleblog.com/2014/03/introducing-farmhash.html"},"FarmHash")," is a successor to CityHash, but they are not fully compatible."),(0,o.kt)("table",{parentName:"admonition"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"String"),(0,o.kt)("th",{parentName:"tr",align:null},"ClickHouse64"),(0,o.kt)("th",{parentName:"tr",align:null},"CityHash64"),(0,o.kt)("th",{parentName:"tr",align:null},"FarmHash64"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Moscow")),(0,o.kt)("td",{parentName:"tr",align:null},"12507901496292878638"),(0,o.kt)("td",{parentName:"tr",align:null},"5992710078453357409"),(0,o.kt)("td",{parentName:"tr",align:null},"5992710078453357409")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"How can you write a big system without C++?  -Paul Glick")),(0,o.kt)("td",{parentName:"tr",align:null},"6237945311650045625"),(0,o.kt)("td",{parentName:"tr",align:null},"749291162957442504"),(0,o.kt)("td",{parentName:"tr",align:null},"11716470977470720228"))))),(0,o.kt)("p",null,"Also see ",(0,o.kt)("a",{parentName:"p",href:"https://opensource.googleblog.com/2011/04/introducing-cityhash.html"},"Introducing CityHash")," for description and\nreasoning behind creation. TL;DR ",(0,o.kt)("strong",{parentName:"p"},"non-cryptographic")," hash that is faster than ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/MurmurHash"},"MurmurHash"),", but more complex."),(0,o.kt)("h2",{id:"implementations"},"Implementations"),(0,o.kt)("h3",{id:"go"},"Go"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-faster/city"},"go-faster/city")," Go package that implements both variants."))}h.isMDXComponent=!0}}]);