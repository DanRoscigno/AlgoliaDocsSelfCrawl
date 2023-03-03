"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[98216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},93281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Advanced Querying Features",s={unversionedId:"en/get-started/sql-console/advanced",id:"en/get-started/sql-console/advanced",title:"Advanced Querying Features",description:"Searching query results",source:"@site/docs/en/get-started/sql-console/05-advanced.md",sourceDirName:"en/get-started/sql-console",slug:"/en/get-started/sql-console/advanced",permalink:"/AlgoliaDocsSelfCrawl/en/get-started/sql-console/advanced",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/get-started/sql-console/05-advanced.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"english",previous:{title:"Creating and Running a Query",permalink:"/AlgoliaDocsSelfCrawl/en/get-started/sql-console/creating"},next:{title:"Visualizing Query Data",permalink:"/AlgoliaDocsSelfCrawl/en/get-started/sql-console/visualizing"}},l={},c=[{value:"Searching query results",id:"searching-query-results",level:2},{value:"Adjusting pagination settings",id:"adjusting-pagination-settings",level:2},{value:"Exporting query result data",id:"exporting-query-result-data",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-querying-features"},"Advanced Querying Features"),(0,r.kt)("h2",{id:"searching-query-results"},"Searching query results"),(0,r.kt)("p",null,"After a query is executed, you can quickly search through the returned result set using the search input in the result pane. This feature assists in previewing the results of an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause or simply checking to ensure that specific data is included in the result set. After inputting a value into the search input, the result pane will update and return records containing an entry that matches the inputted value. In this example, we\u2019ll look for all instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"alexey-milovidov")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"github_events")," table for the ClickHouse repo:"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Search GitHub data",src:n(36197).Z,width:"1699",height:"865"})),(0,r.kt)("p",null,"Note: Any field matching the inputted value will be returned. For example, the third record in the above screenshot does not match \u2018alexey-milovidov\u2019 in the ",(0,r.kt)("inlineCode",{parentName:"p"},"actor_login")," field, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," field does:"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Match in body",src:n(39222).Z,width:"1831",height:"869"})),(0,r.kt)("h2",{id:"adjusting-pagination-settings"},"Adjusting pagination settings"),(0,r.kt)("p",null,"By default, the query result pane will display every result record on a single page.  For larger result sets, it may be preferable to paginate results for easier viewing.  This can be accomplished using the pagination selector in the bottom right corner of the result pane:\n",(0,r.kt)("img",{alt:"Pagination options",src:n(54581).Z,width:"1760",height:"841"})),(0,r.kt)("p",null,"Selecting a page size will immediately apply pagination to the result set and navigation options will appear in the middle of the result pane footer"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Pagination navigation",src:n(86266).Z,width:"1761",height:"843"})),(0,r.kt)("h2",{id:"exporting-query-result-data"},"Exporting query result data"),(0,r.kt)("p",null,"Query result sets can be easily exported to CSV format directly from the SQL console.  To do so, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2022\u2022\u2022")," menu on the right side of the result pane toolbar and select \u2018Download as CSV\u2019."),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Download as CSV",src:n(42027).Z,width:"1761",height:"842"})))}p.isMDXComponent=!0},42027:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/download-as-csv-a72144f2146aa08a5016088f84d1653a.png"},39222:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/match-in-body-60a2d67bc335e10c0cfd62257755f33e.png"},86266:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pagination-nav-9ac159d1e83b97eb08c1dbc918895b34.png"},54581:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pagination-79e102a8104014a5133b3141fe175dce.png"},36197:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/search-github-bad4edebbb108abe3af8665d63dc88f7.png"}}]);