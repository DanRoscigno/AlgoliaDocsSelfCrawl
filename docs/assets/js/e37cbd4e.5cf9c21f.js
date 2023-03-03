"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[83783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_label:"Additional Options",sidebar_position:70,keywords:["clickhouse","python","client","connect","integrate"],slug:"/en/integrations/language-clients/python/options",description:"Advanced Usage Patterns in ClickHouse Connect"},o="Additional Options",l={unversionedId:"en/integrations/language-clients/python/options",id:"en/integrations/language-clients/python/options",title:"Additional Options",description:"Advanced Usage Patterns in ClickHouse Connect",source:"@site/docs/en/integrations/language-clients/python/options.md",sourceDirName:"en/integrations/language-clients/python",slug:"/en/integrations/language-clients/python/options",permalink:"/docs/en/integrations/language-clients/python/options",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/language-clients/python/options.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_label:"Additional Options",sidebar_position:70,keywords:["clickhouse","python","client","connect","integrate"],slug:"/en/integrations/language-clients/python/options",description:"Advanced Usage Patterns in ClickHouse Connect"},sidebar:"english",previous:{title:"Advanced Inserts",permalink:"/docs/en/integrations/language-clients/python/inserts"},next:{title:"Java",permalink:"/docs/en/integrations/language-clients/java"}},s={},p=[{value:"Global Settings",id:"global-settings",level:2},{value:"Compression",id:"compression",level:2},{value:"HTTP Proxy Support",id:"http-proxy-support",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"additional-options"},"Additional Options"),(0,r.kt)("p",null,"ClickHouse Connect provides a number of additional options for advanced use cases"),(0,r.kt)("h2",{id:"global-settings"},"Global Settings"),(0,r.kt)("p",null,"There are a small number of settings that control ClickHouse Connect behavior globally.  They are accessed from the top\nlevel ",(0,r.kt)("inlineCode",{parentName:"p"},"common")," package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from clickhouse_connect import common\n\ncommon.set_setting('autogenerate_session_id', False)\ncommon.get_setting('invalid_setting_action')\n'drop'\n")),(0,r.kt)("p",null,"Four global settings are currently defined:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autogenerate_session_id"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True, False"),(0,r.kt)("td",{parentName:"tr",align:null},"Autogenerate a new UUID(1) session id (if not provided) for each client session.  If no session id is provided (either at the client or query level, ClickHouse will generate random internal id for each query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invalid_setting_action"),(0,r.kt)("td",{parentName:"tr",align:null},"'error'"),(0,r.kt)("td",{parentName:"tr",align:null},"'drop', 'send', 'error'"),(0,r.kt)("td",{parentName:"tr",align:null},"Action to take when an invalid or readonly setting is provided (either for the client session or query).  If ",(0,r.kt)("inlineCode",{parentName:"td"},"drop"),", the setting will be ignored, if ",(0,r.kt)("inlineCode",{parentName:"td"},"send"),", the setting will be sent to ClickHouse, if ",(0,r.kt)("inlineCode",{parentName:"td"},"error")," a client side ProgrammingError will be raised")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dict_parameter_format"),(0,r.kt)("td",{parentName:"tr",align:null},"'json'"),(0,r.kt)("td",{parentName:"tr",align:null},"'json', 'map'"),(0,r.kt)("td",{parentName:"tr",align:null},"This controls whether parameterized queries convert a Python dictionary to JSON or ClickHouse Map syntax. ",(0,r.kt)("inlineCode",{parentName:"td"},"json")," should be used for inserts into JSON columns, ",(0,r.kt)("inlineCode",{parentName:"td"},"map")," for ClickHouse Map columns")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"product_name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"A string that is passed with the query to clickhouse for tracking the app using ClickHouse Connect.  Should be in the form ","<","product name;&gl/","<","product version",">")))),(0,r.kt)("h2",{id:"compression"},"Compression"),(0,r.kt)("p",null,"ClickHouse Connect supports lz4, zstd, brotli, and gzip compression for both query results and inserts.  Always keep in mind\nthat using compression usually involves a tradeoff between network bandwidth/transfer speed against CPU usage (both on the\nclient and the server.)"),(0,r.kt)("p",null,"To receive compressed data, the ClickHouse server ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_http_compression"),' must be set to 1, or the user must have\npermission to change the setting on a "per query" basis.'),(0,r.kt)("p",null,"Compression is controlled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"compress")," parameter when calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse_connect.get_client")," factory method.\nBy default, ",(0,r.kt)("inlineCode",{parentName:"p"},"compress")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),", which will trigger the default compression settings.  For queries executed\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"query_np"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"query_df")," client methods,  ClickHouse Connect will add the ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept-Encoding")," header with\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"lz4"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"zstd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"br")," (brotli, if the brotli library is installed), ",(0,r.kt)("inlineCode",{parentName:"p"},"gzip"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"deflate")," encodings to queries executed\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," client method (and indirectly, ",(0,r.kt)("inlineCode",{parentName:"p"},"query_np")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"query_df"),".  (For the majority of requests the ClickHouse\nserver will return with a ",(0,r.kt)("inlineCode",{parentName:"p"},"zstd")," compressed payload.)  For inserts, by default ClickHouse Connect will compress insert\nblocks with ",(0,r.kt)("inlineCode",{parentName:"p"},"lz4")," compression, and send the ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Encoding: lz4")," HTTP header."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"get_client")," ",(0,r.kt)("inlineCode",{parentName:"p"},"compress")," parameter can also be set to a specific compression method, one of ",(0,r.kt)("inlineCode",{parentName:"p"},"lz4"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"zstd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"br"),", or\n",(0,r.kt)("inlineCode",{parentName:"p"},"gzip"),".  That method will then be used for both inserts and query results (if supported by the ClickHouse server.)  The required\n",(0,r.kt)("inlineCode",{parentName:"p"},"zstd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lz4")," compression libraries are now installed by default with ClickHouse Connect.  If ",(0,r.kt)("inlineCode",{parentName:"p"},"br"),"/brotli is specified,\nthe brotli library must be installed separately."),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"raw*")," client methods don't use the compression specified by the client configuration."),(0,r.kt)("p",null,"We also recommend against using ",(0,r.kt)("inlineCode",{parentName:"p"},"gzip")," compression, as it is significantly slower than the alternatives for both compressing\nand decompressing data."),(0,r.kt)("h2",{id:"http-proxy-support"},"HTTP Proxy Support"),(0,r.kt)("p",null,"ClickHouse Connect adds basic HTTP proxy support using the urllib3 library.  It recognizes the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," environment variables.  Note that using these environment variables will apply to any client created with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse_connect.get_client")," method.  Alternatively, to configure per client, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"http_proxy")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"https_proxy"),"\narguments to the get_client method. For details on the implementation of HTTP Proxy support, see the ",(0,r.kt)("a",{parentName:"p",href:"https://urllib3.readthedocs.io/en/stable/advanced-usage.html#http-and-https-proxies"},"urllib3"),"\ndocumentation."),(0,r.kt)("p",null,"To use a Socks proxy, you can send a urllib3 SOCKSProxyManager as the ",(0,r.kt)("inlineCode",{parentName:"p"},"pool_mgr")," argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"get_client"),".  Note that\nthis will require installing the PySocks library either directly or using the ",(0,r.kt)("inlineCode",{parentName:"p"},"[socks]")," option for the urllib3 dependency."))}u.isMDXComponent=!0}}]);