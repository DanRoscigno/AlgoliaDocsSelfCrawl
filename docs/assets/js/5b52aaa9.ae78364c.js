"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[9270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||g[m]||r;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const r={sidebar_label:"Installation",sidebar_position:2,keywords:["clickhouse","go","client","high-level","installation","versioning"],slug:"/en/integrations/go/clickhouse-go/installation",description:"Installing the high level client"},l="Installation",a={unversionedId:"en/integrations/language-clients/go/clickhouse-go/installation",id:"en/integrations/language-clients/go/clickhouse-go/installation",title:"Installation",description:"Installing the high level client",source:"@site/docs/en/integrations/language-clients/go/clickhouse-go/installation.md",sourceDirName:"en/integrations/language-clients/go/clickhouse-go",slug:"/en/integrations/go/clickhouse-go/installation",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/go/clickhouse-go/installation",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/language-clients/go/clickhouse-go/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Installation",sidebar_position:2,keywords:["clickhouse","go","client","high-level","installation","versioning"],slug:"/en/integrations/go/clickhouse-go/installation",description:"Installing the high level client"}},c={},s=[{value:"Versioning &amp; compatibility",id:"versioning--compatibility",level:2},{value:"ClickHouse compatibility",id:"clickhouse-compatibility",level:3},{value:"Golang compatibility",id:"golang-compatibility",level:3}],u={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"v1 of the driver is deprecated and will not reach feature updates or support for new ClickHouse types. Users should migrate to v2, which offers superior performance."),(0,o.kt)("p",null,"To install the 2.x version of the client, add the package to your go.mod file:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"require github.com/ClickHouse/clickhouse-go/v2 main")),(0,o.kt)("p",null,"Or, clone the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --branch v2 https://github.com/clickhouse/clickhouse-go.git $GOPATH/src/github\n")),(0,o.kt)("p",null,"To install another version, modify the path or the branch name accordingly. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mkdir my-clickhouse-app && cd my-clickhouse-app\n\ncat > go.mod <<-END\n  module my-clickhouse-app\n \n  go 1.18\n  \n  require github.com/ClickHouse/clickhouse-go/v2 main\nEND\n\ncat > main.go <<-END\n  package main\n\n  import (\n    "fmt"\n    "github.com/ClickHouse/clickhouse-go/v2"\n  )\n\n  func main() {\n   conn, _ := clickhouse.Open(&clickhouse.Options{Addr: []string{"127.0.0.1:9000"}})\n    v, _ := conn.ServerVersion()\n    fmt.Println(v.String())\n  }\nEND\n\ngo mod tidy\ngo run main.go\n\n')),(0,o.kt)("h2",{id:"versioning--compatibility"},"Versioning & compatibility"),(0,o.kt)("p",null,"The client is released independently of ClickHouse. 2.x represents the current major under development. All versions of 2.x should be compatibile with each other."),(0,o.kt)("h3",{id:"clickhouse-compatibility"},"ClickHouse compatibility"),(0,o.kt)("p",null,"The client supports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All currently supported versions of ClickHouse as recorded ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/ClickHouse/blob/master/SECURITY.md"},"here"),". As ClickHouse versions are no longer supported they are also no longer actively tested against client releases."),(0,o.kt)("li",{parentName:"ul"},"All versions of ClickHouse 2 years from the release date of the client. Note only LTS versions are actively tested.")),(0,o.kt)("h3",{id:"golang-compatibility"},"Golang compatibility"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Client Version"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Golang Versions"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"=> 2.0 <= 2.2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"1.17, 1.18")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},">= 2.3"),(0,o.kt)("td",{parentName:"tr",align:"center"},"1.18")))))}g.isMDXComponent=!0}}]);