"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[92725],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const a={slug:"/en/engines/table-engines/special/view",sidebar_position:90,sidebar_label:"View"},o="View Table Engine",s={unversionedId:"en/engines/table-engines/special/view",id:"en/engines/table-engines/special/view",title:"View Table Engine",description:"Used for implementing views (for more information, see the CREATE VIEW query). It does not store data, but only stores the specified SELECT query. When reading from a table, it runs this query (and deletes all unnecessary columns from the query).",source:"@site/docs/en/engines/table-engines/special/view.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/view",permalink:"/docs/en/engines/table-engines/special/view",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/view.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{slug:"/en/engines/table-engines/special/view",sidebar_position:90,sidebar_label:"View"},sidebar:"english",previous:{title:"URL",permalink:"/docs/en/engines/table-engines/special/url"},next:{title:"MaterializedView",permalink:"/docs/en/engines/table-engines/special/materializedview"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"view-table-engine"},"View Table Engine"),(0,i.kt)("p",null,"Used for implementing views (for more information, see the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE VIEW query"),"). It does not store data, but only stores the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query. When reading from a table, it runs this query (and deletes all unnecessary columns from the query)."))}d.isMDXComponent=!0}}]);