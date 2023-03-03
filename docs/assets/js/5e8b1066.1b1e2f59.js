"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[30298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64167:(e,t,n)=>{n.d(t,{ZP:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={toc:[]},o="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(o,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are using a dictionary with ClickHouse Cloud please use the DDL query option to create your dictionaries, and create your dictionary as user ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),".\nAlso, verify the list of supported dictionary sources in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility guide"),".")))}c.isMDXComponent=!0},93811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),a=n(64167);const o={slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",sidebar_position:40,sidebar_label:"Configuring a Dictionary"},c="Configuring a Dictionary",l={unversionedId:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",id:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",title:"Configuring a Dictionary",description:"If dictionary is configured using xml file, than dictionary configuration has the following structure:",source:"@site/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict.md",sourceDirName:"en/sql-reference/dictionaries/external-dictionaries",slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",sidebar_position:40,sidebar_label:"Configuring a Dictionary"},sidebar:"english",previous:{title:"General Description",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts"},next:{title:"Storing Dictionaries in Memory",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"}},s={},d=[{value:"Related Content",id:"related-content",level:2}],u={toc:d},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-a-dictionary"},"Configuring a Dictionary"),(0,i.kt)(a.ZP,{mdxType:"CloudDetails"}),(0,i.kt)("p",null,"If dictionary is configured using xml file, than dictionary configuration has the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    <name>dict_name</name>\n\n    <structure>\n      \x3c!-- Complex key configuration --\x3e\n    </structure>\n\n    <source>\n      \x3c!-- Source configuration --\x3e\n    </source>\n\n    <layout>\n      \x3c!-- Memory layout configuration --\x3e\n    </layout>\n\n    <lifetime>\n      \x3c!-- Lifetime of dictionary in memory --\x3e\n    </lifetime>\n</dictionary>\n")),(0,i.kt)("p",null,"Corresponding ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/dictionary"},"DDL-query")," has the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dict_name\n(\n    ... -- attributes\n)\nPRIMARY KEY ... -- complex or single key configuration\nSOURCE(...) -- Source configuration\nLAYOUT(...) -- Memory layout configuration\nLIFETIME(...) -- Lifetime of dictionary in memory\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," \u2013 The identifier that can be used to access the dictionary. Use the characters ",(0,i.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_\\-]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"source")," \u2014 Source of the dictionary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"layout")," \u2014 Dictionary layout in memory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"structure")," \u2014 Structure of the dictionary . A key and attributes that can be retrieved by this key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"lifetime")," \u2014 Frequency of dictionary updates.")),(0,i.kt)("h2",{id:"related-content"},"Related Content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/faster-queries-dictionaries-clickhouse"},"Using dictionaries to accelerate queries"))))}f.isMDXComponent=!0}}]);