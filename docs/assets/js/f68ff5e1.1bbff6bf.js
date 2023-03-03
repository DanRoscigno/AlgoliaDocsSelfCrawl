"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[91723],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),p=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return l.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?l.createElement(f,r(r({ref:n},u),{},{components:t})):l.createElement(f,r({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70162:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var l=t(87462),a=(t(67294),t(3905));const o={slug:"/en/native-protocol/columns",sidebar_position:4},r="Column Types",i={unversionedId:"en/native-protocol/columns",id:"en/native-protocol/columns",title:"Column Types",description:"See Data Types for general reference.",source:"@site/docs/en/native-protocol/columns.md",sourceDirName:"en/native-protocol",slug:"/en/native-protocol/columns",permalink:"/AlgoliaDocsSelfCrawl/en/native-protocol/columns",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/native-protocol/columns.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/en/native-protocol/columns",sidebar_position:4},sidebar:"english",previous:{title:"Server packets",permalink:"/AlgoliaDocsSelfCrawl/en/native-protocol/server"},next:{title:"CityHash",permalink:"/AlgoliaDocsSelfCrawl/en/native-protocol/hash"}},s={},p=[{value:"Numeric types",id:"numeric-types",level:2},{value:"Integers",id:"integers",level:3},{value:"Floats",id:"floats",level:3},{value:"String",id:"string",level:2},{value:"FixedString(N)",id:"fixedstringn",level:2},{value:"IP",id:"ip",level:2},{value:"Tuple",id:"tuple",level:2},{value:"Map",id:"map",level:2},{value:"Array",id:"array",level:2},{value:"Nullable",id:"nullable",level:2},{value:"UUID",id:"uuid",level:2},{value:"Enum",id:"enum",level:2},{value:"Low Cardinality",id:"low-cardinality",level:2},{value:"Bool",id:"bool",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"column-types"},"Column Types"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/data-types/"},"Data Types")," for general reference."),(0,a.kt)("h2",{id:"numeric-types"},"Numeric types"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Numeric types encoding matches memory layout of little endian cpus like AMD64 or ARM64."),(0,a.kt)("p",{parentName:"admonition"},"This allows to implement very efficient encoding and decoding.")),(0,a.kt)("h3",{id:"integers"},"Integers"),(0,a.kt)("p",null,"String of Int and UInt of 8, 16, 32, 64, 128 or 256 bits, in little endian."),(0,a.kt)("h3",{id:"floats"},"Floats"),(0,a.kt)("p",null,"Float32 and Float64 in IEEE 754 binary representation."),(0,a.kt)("h2",{id:"string"},"String"),(0,a.kt)("p",null,"Just an array of String, i.e. (len, value)."),(0,a.kt)("h2",{id:"fixedstringn"},"FixedString(N)"),(0,a.kt)("p",null,"An array of N-byte sequences."),(0,a.kt)("h2",{id:"ip"},"IP"),(0,a.kt)("p",null,"IPv4 is alias of ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt32")," numeric type and represented as UInt32."),(0,a.kt)("p",null,"IPv6 is alias of ",(0,a.kt)("inlineCode",{parentName:"p"},"FixedString(16)")," and represented as binary directly."),(0,a.kt)("h2",{id:"tuple"},"Tuple"),(0,a.kt)("p",null,"Tuple is just an array of columns. For example, Tuple(String, UInt8) is just two columns\nencoded continuously."),(0,a.kt)("h2",{id:"map"},"Map"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Map(K, V)")," consists of three columns: ",(0,a.kt)("inlineCode",{parentName:"p"},"Offsets ColUInt64, Keys K, Values V"),"."),(0,a.kt)("p",null,"Rows count in ",(0,a.kt)("inlineCode",{parentName:"p"},"Keys")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Values")," column is last value from ",(0,a.kt)("inlineCode",{parentName:"p"},"Offsets"),"."),(0,a.kt)("h2",{id:"array"},"Array"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Array(T)")," consists of two columns: ",(0,a.kt)("inlineCode",{parentName:"p"},"Offsets ColUInt64, Data T"),"."),(0,a.kt)("p",null,"Rows count in ",(0,a.kt)("inlineCode",{parentName:"p"},"Data")," is last value from ",(0,a.kt)("inlineCode",{parentName:"p"},"Offsets"),"."),(0,a.kt)("h2",{id:"nullable"},"Nullable"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Nullable(T)")," consists of ",(0,a.kt)("inlineCode",{parentName:"p"},"Nulls ColUInt8, Values T")," with same rows count."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Nulls is nullable "mask" on Values column.\n// For example, to encode [null, "", "hello", null, "world"]\n//  Values: ["", "", "hello", "", "world"] (len: 5)\n//  Nulls:  [ 1,  0,       0,  1,       0] (len: 5)\n')),(0,a.kt)("h2",{id:"uuid"},"UUID"),(0,a.kt)("p",null,"Alias of ",(0,a.kt)("inlineCode",{parentName:"p"},"FixedString(16)"),", UUID value represented as binary."),(0,a.kt)("h2",{id:"enum"},"Enum"),(0,a.kt)("p",null,"Alias of ",(0,a.kt)("inlineCode",{parentName:"p"},"Int8")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Int16"),", but each integer is mapped to some ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," value."),(0,a.kt)("h2",{id:"low-cardinality"},"Low Cardinality"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LowCardinality(T)")," consists of ",(0,a.kt)("inlineCode",{parentName:"p"},"Index T, Keys K"),",\nwhere ",(0,a.kt)("inlineCode",{parentName:"p"},"K")," is one of (UInt8, UInt16, UInt32, UInt64) depending on size of ",(0,a.kt)("inlineCode",{parentName:"p"},"Index"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Index (i.e. dictionary) column contains unique values, Keys column contains\n// sequence of indexes in Index column that represent actual values.\n//\n// For example, ["Eko", "Eko", "Amadela", "Amadela", "Amadela", "Amadela"] can\n// be encoded as:\n//  Index: ["Eko", "Amadela"] (String)\n//  Keys:  [0, 0, 1, 1, 1, 1] (UInt8)\n//\n// The CardinalityKey is chosen depending on Index size, i.e. maximum value\n// of chosen type should be able to represent any index of Index element.\n')),(0,a.kt)("h2",{id:"bool"},"Bool"),(0,a.kt)("p",null,"Alias of ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt8"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," is false and ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," is true."))}d.isMDXComponent=!0}}]);