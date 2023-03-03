"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[93072,58471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10331:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]},i="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This page is not applicable to ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),". The feature documented here is not available in ClickHouse Cloud services.\nSee the ClickHouse ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," guide for more information.")))}s.isMDXComponent=!0},59782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(10331);const i={slug:"/en/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication"},s=void 0,c={unversionedId:"en/operations/external-authenticators/ssl-x509",id:"en/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication",description:"SSL 'strict' option enables mandatory certificate validation for the incoming connections. In this case, only connections with trusted certificates can be established. Connections with untrusted certificates will be rejected. Thus, certificate validation allows to uniquely authenticate an incoming connection. Common Name field of the certificate is used to identify connected user. This allows to associate multiple certificates with the same user. Additionally, reissuing and revoking of the certificates does not affect the ClickHouse configuration.",source:"@site/docs/en/operations/external-authenticators/ssl-x509.md",sourceDirName:"en/operations/external-authenticators",slug:"/en/operations/external-authenticators/ssl-x509",permalink:"/AlgoliaDocsSelfCrawl/en/operations/external-authenticators/ssl-x509",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/external-authenticators/ssl-x509.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication"},sidebar:"english",previous:{title:"LDAP",permalink:"/AlgoliaDocsSelfCrawl/en/operations/external-authenticators/ldap"},next:{title:"Security",permalink:"/AlgoliaDocsSelfCrawl/en/manage/security"}},l={},u=[],p={toc:u},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{mdxType:"SelfManaged"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/server-configuration-parameters/settings#server_configuration_parameters-openssl"},"SSL 'strict' option")," enables mandatory certificate validation for the incoming connections. In this case, only connections with trusted certificates can be established. Connections with untrusted certificates will be rejected. Thus, certificate validation allows to uniquely authenticate an incoming connection. ",(0,r.kt)("inlineCode",{parentName:"p"},"Common Name")," field of the certificate is used to identify connected user. This allows to associate multiple certificates with the same user. Additionally, reissuing and revoking of the certificates does not affect the ClickHouse configuration."),(0,r.kt)("p",null,"To enable SSL certificate authentication, a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"Common Name"),"'s for each ClickHouse user must be specified in the settings file ",(0,r.kt)("inlineCode",{parentName:"p"},"users.xml "),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <users>\n        <user_name>\n            <ssl_certificates>\n                <common_name>host.domain.com:example_user</common_name>\n                <common_name>host.domain.com:example_user_dev</common_name>\n                \x3c!-- More names --\x3e\n            </ssl_certificates>\n            \x3c!-- Other settings --\x3e\n        </user_name>\n    </users>\n</clickhouse>\n")),(0,r.kt)("p",null,"For the SSL ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chain_of_trust"},(0,r.kt)("inlineCode",{parentName:"a"},"chain of trust"))," to work correctly, it is also important to make sure that the ",(0,r.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/operations/server-configuration-parameters/settings#server_configuration_parameters-openssl"},(0,r.kt)("inlineCode",{parentName:"a"},"caConfig"))," parameter is configured properly."))}f.isMDXComponent=!0},91364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(59782);const i={sidebar_label:"SSL X.509 certificate authentication",slug:"/zh/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication"},s=void 0,c={unversionedId:"zh/operations/external-authenticators/ssl-x509",id:"zh/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication",description:"",source:"@site/docs/zh/operations/external-authenticators/ssl-x509.mdx",sourceDirName:"zh/operations/external-authenticators",slug:"/zh/operations/external-authenticators/ssl-x509",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/external-authenticators/ssl-x509",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/external-authenticators/ssl-x509.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"SSL X.509 certificate authentication",slug:"/zh/operations/external-authenticators/ssl-x509",title:"SSL X.509 certificate authentication"},sidebar:"chinese",previous:{title:"LDAP",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/external-authenticators/ldap"},next:{title:"\u6570\u636e\u5907\u4efd",permalink:"/AlgoliaDocsSelfCrawl/zh/operations/backup"}},l={},u=[],p={toc:u},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.default,{mdxType:"Content"}))}f.isMDXComponent=!0}}]);