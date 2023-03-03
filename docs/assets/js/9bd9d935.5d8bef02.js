"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[78899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,f=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/en/engines/table-engines/special/url",sidebar_position:80,sidebar_label:"URL"},o="URL Table Engine",s={unversionedId:"en/engines/table-engines/special/url",id:"en/engines/table-engines/special/url",title:"URL Table Engine",description:"Queries data to/from a remote HTTP/HTTPS server. This engine is similar to the File engine.",source:"@site/docs/en/engines/table-engines/special/url.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/url",permalink:"/docs/en/engines/table-engines/special/url",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/url.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{slug:"/en/engines/table-engines/special/url",sidebar_position:80,sidebar_label:"URL"},sidebar:"english",previous:{title:"Join",permalink:"/docs/en/engines/table-engines/special/join"},next:{title:"View",permalink:"/docs/en/engines/table-engines/special/view"}},l={},p=[{value:"Usage",id:"using-the-engine-in-the-clickhouse-server",level:2},{value:"Example",id:"example",level:2},{value:"Details of Implementation",id:"details-of-implementation",level:2},{value:"PARTITION BY",id:"partition-by",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"url-table-engine"},"URL Table Engine"),(0,r.kt)("p",null,"Queries data to/from a remote HTTP/HTTPS server. This engine is similar to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/file"},"File")," engine."),(0,r.kt)("p",null,"Syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},"URL(URL [,Format] [,CompressionMethod])")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," parameter must conform to the structure of a Uniform Resource Locator. The specified URL must point to a server that uses HTTP or HTTPS. This does not require any additional headers for getting a response from the server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Format")," must be one that ClickHouse can use in ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," queries and, if necessary, in ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERTs"),". For the full list of supported formats, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats#formats"},"Formats"),"."),(0,r.kt)("p",{parentName:"li"},"  If this argument is not specified, ClickHouse detectes the format automatically from the suffix of the ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," parameter. If the suffix of ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," parameter does not match any supported formats, it fails to create table. For example, for engine expression ",(0,r.kt)("inlineCode",{parentName:"p"},"URL('http://localhost/test.json')"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," format is applied.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CompressionMethod")," indicates that whether the HTTP body should be compressed. If the compression is enabled, the HTTP packets sent by the URL engine contain 'Content-Encoding' header to indicate which compression method is used."))),(0,r.kt)("p",null,"To enable compression, please first make sure the remote HTTP endpoint indicated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," parameter supports corresponding compression algorithm."),(0,r.kt)("p",null,"The supported ",(0,r.kt)("inlineCode",{parentName:"p"},"CompressionMethod")," should be one of following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gzip or gz"),(0,r.kt)("li",{parentName:"ul"},"deflate"),(0,r.kt)("li",{parentName:"ul"},"brotli or br"),(0,r.kt)("li",{parentName:"ul"},"lzma or xz"),(0,r.kt)("li",{parentName:"ul"},"zstd or zst"),(0,r.kt)("li",{parentName:"ul"},"lz4"),(0,r.kt)("li",{parentName:"ul"},"bz2"),(0,r.kt)("li",{parentName:"ul"},"snappy"),(0,r.kt)("li",{parentName:"ul"},"none"),(0,r.kt)("li",{parentName:"ul"},"auto")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"CompressionMethod")," is not specified, it defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"auto"),". This means ClickHouse detects compression method from the suffix of ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," parameter automatically. If the suffix matches any of compression method listed above, corresponding compression is applied or there won't be any compression enabled."),(0,r.kt)("p",null,"For example, for engine expression ",(0,r.kt)("inlineCode",{parentName:"p"},"URL('http://localhost/test.gzip')"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gzip")," compression method is applied, but for ",(0,r.kt)("inlineCode",{parentName:"p"},"URL('http://localhost/test.fr')"),", no compression is enabled because the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"fr")," does not match any compression methods above."),(0,r.kt)("h2",{id:"using-the-engine-in-the-clickhouse-server"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," queries are transformed to ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests,\nrespectively. For processing ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," requests, the remote server must support\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chunked_transfer_encoding"},"Chunked transfer encoding"),"."),(0,r.kt)("p",null,"You can limit the maximum number of HTTP GET redirect hops using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#setting-max_http_get_redirects"},"max_http_get_redirects")," setting."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"url_engine_table")," table on the server :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE url_engine_table (word String, value UInt64)\nENGINE=URL('http://127.0.0.1:12345/', CSV)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Create a basic HTTP server using the standard Python 3 tools and\nstart it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python3"},"from http.server import BaseHTTPRequestHandler, HTTPServer\n\nclass CSVHTTPServer(BaseHTTPRequestHandler):\n    def do_GET(self):\n        self.send_response(200)\n        self.send_header('Content-type', 'text/csv')\n        self.end_headers()\n\n        self.wfile.write(bytes('Hello,1\\nWorld,2\\n', \"utf-8\"))\n\nif __name__ == \"__main__\":\n    server_address = ('127.0.0.1', 12345)\n    HTTPServer(server_address, CSVHTTPServer).serve_forever()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python3 server.py\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Request data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM url_engine_table\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500word\u2500\u2500\u252c\u2500value\u2500\u2510\n\u2502 Hello \u2502     1 \u2502\n\u2502 World \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"details-of-implementation"},"Details of Implementation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reads and writes can be parallel"),(0,r.kt)("li",{parentName:"ul"},"Not supported:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALTER")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT...SAMPLE")," operations."),(0,r.kt)("li",{parentName:"ul"},"Indexes."),(0,r.kt)("li",{parentName:"ul"},"Replication.")))),(0,r.kt)("h2",{id:"partition-by"},"PARTITION BY"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PARTITION BY")," \u2014 Optional.  It is possible to create separate files by partitioning the data on a partition key. In most cases, you don't need a partition key, and if it is needed you generally don't need a partition key more granular than by month. Partitioning does not speed up queries (in contrast to the ORDER BY expression). You should never use too granular partitioning. Don't partition your data by client identifiers or names (instead, make client identifier or name the first column in the ORDER BY expression)."),(0,r.kt)("p",null,"For partitioning by month, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"toYYYYMM(date_column)")," expression, where ",(0,r.kt)("inlineCode",{parentName:"p"},"date_column")," is a column with a date of the type ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/date"},"Date"),". The partition names here have the ",(0,r.kt)("inlineCode",{parentName:"p"},'"YYYYMM"')," format."))}d.isMDXComponent=!0}}]);