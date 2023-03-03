"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[80081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,O=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(O,s(s({ref:t},d),{},{components:n})):r.createElement(O,s({ref:t},d))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/en/sql-reference/statements/drop",sidebar_position:44,sidebar_label:"DROP"},s="DROP Statements",i={unversionedId:"en/sql-reference/statements/drop",id:"en/sql-reference/statements/drop",title:"DROP Statements",description:"Deletes existing entity. If the IF EXISTS clause is specified, these queries do not return an error if the entity does not exist. If the SYNC modifier is specified, the entity is dropped without delay.",source:"@site/docs/en/sql-reference/statements/drop.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/drop",permalink:"/docs/en/sql-reference/statements/drop",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/drop.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{slug:"/en/sql-reference/statements/drop",sidebar_position:44,sidebar_label:"DROP"},sidebar:"english",previous:{title:"DETACH",permalink:"/docs/en/sql-reference/statements/detach"},next:{title:"EXISTS",permalink:"/docs/en/sql-reference/statements/exists"}},o={},p=[{value:"DROP DATABASE",id:"drop-database",level:2},{value:"DROP TABLE",id:"drop-table",level:2},{value:"DROP DICTIONARY",id:"drop-dictionary",level:2},{value:"DROP USER",id:"drop-user",level:2},{value:"DROP ROLE",id:"drop-role",level:2},{value:"DROP ROW POLICY",id:"drop-row-policy",level:2},{value:"DROP QUOTA",id:"drop-quota",level:2},{value:"DROP SETTINGS PROFILE",id:"drop-settings-profile",level:2},{value:"DROP VIEW",id:"drop-view",level:2},{value:"DROP FUNCTION",id:"drop-function",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drop-statements"},"DROP Statements"),(0,a.kt)("p",null,"Deletes existing entity. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"IF EXISTS")," clause is specified, these queries do not return an error if the entity does not exist. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"SYNC")," modifier is specified, the entity is dropped without delay."),(0,a.kt)("h2",{id:"drop-database"},"DROP DATABASE"),(0,a.kt)("p",null,"Deletes all tables inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," database, then deletes the ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," database itself."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE [IF EXISTS] db [ON CLUSTER cluster] [SYNC]\n")),(0,a.kt)("h2",{id:"drop-table"},"DROP TABLE"),(0,a.kt)("p",null,"Deletes the table."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [TEMPORARY] TABLE [IF EXISTS] [db.]name [ON CLUSTER cluster] [SYNC]\n")),(0,a.kt)("h2",{id:"drop-dictionary"},"DROP DICTIONARY"),(0,a.kt)("p",null,"Deletes the dictionary."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DICTIONARY [IF EXISTS] [db.]name [SYNC]\n")),(0,a.kt)("h2",{id:"drop-user"},"DROP USER"),(0,a.kt)("p",null,"Deletes a user."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP USER [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,a.kt)("h2",{id:"drop-role"},"DROP ROLE"),(0,a.kt)("p",null,"Deletes a role. The deleted role is revoked from all the entities where it was assigned."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP ROLE [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,a.kt)("h2",{id:"drop-row-policy"},"DROP ROW POLICY"),(0,a.kt)("p",null,"Deletes a row policy. Deleted row policy is revoked from all the entities where it was assigned."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [ROW] POLICY [IF EXISTS] name [,...] ON [database.]table [,...] [ON CLUSTER cluster_name]\n")),(0,a.kt)("h2",{id:"drop-quota"},"DROP QUOTA"),(0,a.kt)("p",null,"Deletes a quota. The deleted quota is revoked from all the entities where it was assigned."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP QUOTA [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,a.kt)("h2",{id:"drop-settings-profile"},"DROP SETTINGS PROFILE"),(0,a.kt)("p",null,"Deletes a settings profile. The deleted settings profile is revoked from all the entities where it was assigned."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [SETTINGS] PROFILE [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,a.kt)("h2",{id:"drop-view"},"DROP VIEW"),(0,a.kt)("p",null,"Deletes a view. Views can be deleted by a ",(0,a.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," command as well but ",(0,a.kt)("inlineCode",{parentName:"p"},"DROP VIEW")," checks that ",(0,a.kt)("inlineCode",{parentName:"p"},"[db.]name")," is a view."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP VIEW [IF EXISTS] [db.]name [ON CLUSTER cluster] [SYNC]\n")),(0,a.kt)("h2",{id:"drop-function"},"DROP FUNCTION"),(0,a.kt)("p",null,"Deletes a user defined function created by ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/function"},"CREATE FUNCTION"),".\nSystem functions can not be dropped."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP FUNCTION [IF EXISTS] function_name [on CLUSTER cluster]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION linear_equation AS (x, k, b) -> k*x + b;\nDROP FUNCTION linear_equation;\n")))}u.isMDXComponent=!0}}]);