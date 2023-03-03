"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[34686],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[u]="string"==typeof t?t:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93580:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"Advanced Inserts",sidebar_position:40,keywords:["clickhouse","python","client","connect","integrate","insert"],slug:"/en/integrations/language-clients/python/inserts",description:"ClickHouse Connect Inserts In Depth"},i="Inserting Data with ClickHouse Connect:  Advanced Usage",s={unversionedId:"en/integrations/language-clients/python/inserts",id:"en/integrations/language-clients/python/inserts",title:"Inserting Data with ClickHouse Connect:  Advanced Usage",description:"ClickHouse Connect Inserts In Depth",source:"@site/docs/en/integrations/language-clients/python/inserts.md",sourceDirName:"en/integrations/language-clients/python",slug:"/en/integrations/language-clients/python/inserts",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/language-clients/python/inserts",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/language-clients/python/inserts.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_label:"Advanced Inserts",sidebar_position:40,keywords:["clickhouse","python","client","connect","integrate","insert"],slug:"/en/integrations/language-clients/python/inserts",description:"ClickHouse Connect Inserts In Depth"},sidebar:"english",previous:{title:"Advanced Queries",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/language-clients/python/queries"},next:{title:"Additional Options",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/language-clients/python/options"}},o={},d=[{value:"InsertContexts",id:"insertcontexts",level:2},{value:"Write Formats",id:"write-formats",level:2},{value:"Write Format Options",id:"write-format-options",level:3}],p={toc:d},u="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inserting-data-with-clickhouse-connect--advanced-usage"},"Inserting Data with ClickHouse Connect:  Advanced Usage"),(0,r.kt)("h2",{id:"insertcontexts"},"InsertContexts"),(0,r.kt)("p",null,"ClickHouse Connect executes all inserts within an InsertContext.  The InsertContext includes  all the values sent as arguments to\nthe client ",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),' method.  In addition, when an InsertContext is originally constructed, ClickHouse Connect retrieves the data types\nfor the insert columns required for efficient Native format inserts.  By reusing the  InsertContext for multiple inserts, this "pre-query"\nis avoided and inserts are executed more quickly and efficiently.'),(0,r.kt)("p",null,"An InsertContext can be acquired using the client ",(0,r.kt)("inlineCode",{parentName:"p"},"get_insert_context")," method.  The method takes the same arguments as\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"insert")," function.  Note that only the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," property of InsertContexts should be modified for reuse.  This is consistent\nwith its intended purpose of providing a reusable object for repeated inserts of new data to the same table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"test_data = [[1, 'v1', 'v2'], [2, 'v3', 'v4']]\nic = test_client.create_insert_context(table='test_table', data='test_data')\nclient.insert(context=ic)\nassert client.command('SELECT count() FROM test_table') == 2\nnew_data = [[3, 'v5', 'v6'], [4, 'v7', 'v8']]\nic.data = new_data\nclient.insert(context=ic)\nqr = test_client.query('SELECT * FROM test_table ORDER BY key DESC')\nassert qr.row_count == 4\nassert qr[0][0] == 4\n")),(0,r.kt)("p",null,"InsertContexts include mutable state that is updated during the insert process, so they are not thread safe."),(0,r.kt)("h2",{id:"write-formats"},"Write Formats"),(0,r.kt)("p",null,"Write formats are currently implemented for limited number of types.  In most cases ClickHouse Connect will attempt to\nautomatically determine the correct write format for a column by checking the type of the first (non-null) data value.\nFor example, if inserting into a DateTime column, and the first insert value of the column is a Python integer, ClickHouse\nConnect will directly insert the integer value under the assumption that it's actually an epoch second."),(0,r.kt)("p",null,"In most cases, it is unnecessary to override the write format for a data type, but the associated methods in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse_connect.datatypes.format")," package can be used to do so at a global level."),(0,r.kt)("h3",{id:"write-format-options"},"Write Format Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ClickHouse Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Native Python Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Write Formats"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int","[8-64]",", UInt","[8-32]"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UInt64"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[U]","Int","[128,256]"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Float32"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Float64"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal.Decimal"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FixedString"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"If inserted as a string, additional bytes will be set to zeros")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enum","[8,16]"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime.date"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},'ClickHouse stores Dates as days since 01/01/1970.  int types will be assumed to be this "epoch date" value')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date32"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime.date"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as Date, but for a wider range of dates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime.datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},'ClickHouse stores DateTime in epoch seconds.  int types will be assumed to be this "epoch second" value')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateTime64"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime.datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Python datetime.datetime is limited to microsecond precision. The raw 64 bit int value is available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IPv4"),(0,r.kt)("td",{parentName:"tr",align:null},"ipaddress.IPv4Address"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Properly formatted strings can be inserted as IPv4 addresses")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IPv6"),(0,r.kt)("td",{parentName:"tr",align:null},"ipaddress.IPv6Address"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Properly formatted strings can be inserted as IPv6 addresses")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tuple"),(0,r.kt)("td",{parentName:"tr",align:null},"dict or tuple"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Map"),(0,r.kt)("td",{parentName:"tr",align:null},"dict"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nested"),(0,r.kt)("td",{parentName:"tr",align:null},"Sequence","[dict]"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSON/Object('json')"),(0,r.kt)("td",{parentName:"tr",align:null},"dict"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Either dictionaries or JSON strings can be inserted into JSON Columns.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"uuid.UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Properly formatted strings can be inserted as ClickHouse UUIDs")))))}c.isMDXComponent=!0}}]);