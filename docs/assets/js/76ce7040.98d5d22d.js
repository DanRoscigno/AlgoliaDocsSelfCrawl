"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[71556],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=m(n),N=r,g=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},98356:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/en/native-protocol/server",sidebar_position:3},i="Server packets",p={unversionedId:"en/native-protocol/server",id:"en/native-protocol/server",title:"Server packets",description:"| value | name                             | description                                                     |",source:"@site/docs/en/native-protocol/server.md",sourceDirName:"en/native-protocol",slug:"/en/native-protocol/server",permalink:"/AlgoliaDocsSelfCrawl/en/native-protocol/server",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/native-protocol/server.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/en/native-protocol/server",sidebar_position:3},sidebar:"english",previous:{title:"Client packets",permalink:"/AlgoliaDocsSelfCrawl/en/native-protocol/client"},next:{title:"Column Types",permalink:"/AlgoliaDocsSelfCrawl/en/native-protocol/columns"}},o={},m=[{value:"Hello",id:"hello",level:2},{value:"Exception",id:"exception",level:2},{value:"Progress",id:"progress",level:2},{value:"Pong",id:"pong",level:2},{value:"End of stream",id:"end-of-stream",level:2},{value:"Profile info",id:"profile-info",level:2},{value:"Log",id:"log",level:2},{value:"Profile events",id:"profile-events",level:2}],d={toc:m},k="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"server-packets"},"Server packets"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"value"),(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#hello"},"Hello")),(0,r.kt)("td",{parentName:"tr",align:null},"Server handshake response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Data"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as ",(0,r.kt)("a",{parentName:"td",href:"./client#data"},"client data"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#exception"},"Exception")),(0,r.kt)("td",{parentName:"tr",align:null},"Query processing exception")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#progress"},"Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Query progress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#pong"},"Pong")),(0,r.kt)("td",{parentName:"tr",align:null},"Ping response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#end-of-stream"},"EndOfStream")),(0,r.kt)("td",{parentName:"tr",align:null},"All packets were transferred")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#profile-info"},"ProfileInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"Profiling data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Totals"),(0,r.kt)("td",{parentName:"tr",align:null},"Total values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Extremes"),(0,r.kt)("td",{parentName:"tr",align:null},"Extreme values (min, max)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"TablesStatusResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"Response to TableStatus request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#log"},"Log")),(0,r.kt)("td",{parentName:"tr",align:null},"Query system log")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"TableColumns"),(0,r.kt)("td",{parentName:"tr",align:null},"Columns description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"UUIDs"),(0,r.kt)("td",{parentName:"tr",align:null},"List of unique parts ids")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"ReadTaskRequest"),(0,r.kt)("td",{parentName:"tr",align:null},"String (UUID) describes a request for which next task is needed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#profile-events"},"ProfileEvents")),(0,r.kt)("td",{parentName:"tr",align:null},"Packet with profile events from server")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Totals")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Extremes")," can be compressed."),(0,r.kt)("h2",{id:"hello"},"Hello"),(0,r.kt)("p",null,"Response to ",(0,r.kt)("a",{parentName:"p",href:"./client#hello"},"client hello"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Clickhouse")),(0,r.kt)("td",{parentName:"tr",align:null},"Server name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version_major"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"21")),(0,r.kt)("td",{parentName:"tr",align:null},"Server major version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version_minor"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"12")),(0,r.kt)("td",{parentName:"tr",align:null},"Server minor version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"revision"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"54452")),(0,r.kt)("td",{parentName:"tr",align:null},"Server revision")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tz"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Europe/Moscow")),(0,r.kt)("td",{parentName:"tr",align:null},"Server timezone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"display_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Clickhouse")),(0,r.kt)("td",{parentName:"tr",align:null},"Server name for UI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version_patch"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3")),(0,r.kt)("td",{parentName:"tr",align:null},"Server patch version")))),(0,r.kt)("h2",{id:"exception"},"Exception"),(0,r.kt)("p",null,"Server exception during query processing."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"Int32"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"60")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://clickhouse.com/codebrowser/ClickHouse/src/Common/ErrorCodes.cpp.html",title:"List of error codes"},"ErrorCodes.cpp"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DB::Exception")),(0,r.kt)("td",{parentName:"tr",align:null},"Server major version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DB::Exception: Table X doesn't exist")),(0,r.kt)("td",{parentName:"tr",align:null},"Server minor version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stack_trace"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"~"),(0,r.kt)("td",{parentName:"tr",align:null},"C++ stack trace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nested"),(0,r.kt)("td",{parentName:"tr",align:null},"Bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"More errors")))),(0,r.kt)("p",null,"Can be continuous list of exceptions until ",(0,r.kt)("inlineCode",{parentName:"p"},"nested")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h2",{id:"progress"},"Progress"),(0,r.kt)("p",null,"Progress of query execution periodically reported by server."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Progress reported in ",(0,r.kt)("strong",{parentName:"p"},"deltas"),". For totals, accumulate it on client.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rows"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"65535")),(0,r.kt)("td",{parentName:"tr",align:null},"Row count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"871799")),(0,r.kt)("td",{parentName:"tr",align:null},"Byte count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total_rows"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"Total rows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wrote_rows"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"Rows from client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wrote_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes from client")))),(0,r.kt)("h2",{id:"pong"},"Pong"),(0,r.kt)("p",null,"Response for ",(0,r.kt)("a",{parentName:"p",href:"./client#ping"},"client ping"),", no packet body."),(0,r.kt)("h2",{id:"end-of-stream"},"End of stream"),(0,r.kt)("p",null,"No more ",(0,r.kt)("strong",{parentName:"p"},"Data")," packets will be sent, query result is fully steamed from server to client."),(0,r.kt)("p",null,"No packet body."),(0,r.kt)("h2",{id:"profile-info"},"Profile info"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field"),(0,r.kt)("th",{parentName:"tr",align:null},"type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rows"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blocks"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"applied_limit"),(0,r.kt)("td",{parentName:"tr",align:null},"Bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rows_before_limit"),(0,r.kt)("td",{parentName:"tr",align:null},"UVarInt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calculated_rows_before_limit"),(0,r.kt)("td",{parentName:"tr",align:null},"Bool")))),(0,r.kt)("h2",{id:"log"},"Log"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data block")," with server log."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Encoded as ",(0,r.kt)("strong",{parentName:"p"},"data block")," of columns, but is never compressed.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"column"),(0,r.kt)("th",{parentName:"tr",align:null},"type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time_micro"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thread_id"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priority"),(0,r.kt)("td",{parentName:"tr",align:null},"Int8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h2",{id:"profile-events"},"Profile events"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data block")," with profile events."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Encoded as ",(0,r.kt)("strong",{parentName:"p"},"data block")," of columns, but is never compressed."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," type is ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt64")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Int64"),", depending on server revision.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"column"),(0,r.kt)("th",{parentName:"tr",align:null},"type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_time"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thread_id"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Int8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt64 or Int64")))))}u.isMDXComponent=!0}}]);