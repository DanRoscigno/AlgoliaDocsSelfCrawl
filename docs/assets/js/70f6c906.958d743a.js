"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[85420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=i,g=p["".concat(a,".").concat(d)]||p[d]||f[d]||s;return r?n.createElement(g,c(c({ref:t},u),{},{components:r})):n.createElement(g,c({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,c=new Array(s);c[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[p]="string"==typeof e?e:i,c[1]=o;for(var l=2;l<s;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66998:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const s={slug:"/en/manage/security/ip-egress-traffic-list",sidebar_label:"IP Egress Traffic List",title:"IP Egress Traffic List"},c=void 0,o={unversionedId:"en/cloud/security/ip-egress-traffic-list",id:"en/cloud/security/ip-egress-traffic-list",title:"IP Egress Traffic List",description:"Integrations could require egress access",source:"@site/docs/en/cloud/security/ip-egress-traffic-list.md",sourceDirName:"en/cloud/security",slug:"/en/manage/security/ip-egress-traffic-list",permalink:"/AlgoliaDocsSelfCrawl/en/manage/security/ip-egress-traffic-list",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/cloud/security/ip-egress-traffic-list.md",tags:[],version:"current",frontMatter:{slug:"/en/manage/security/ip-egress-traffic-list",sidebar_label:"IP Egress Traffic List",title:"IP Egress Traffic List"},sidebar:"english",previous:{title:"Setting up AWS PrivateLink",permalink:"/AlgoliaDocsSelfCrawl/en/manage/security/aws-privatelink"},next:{title:"Cloud Support",permalink:"/AlgoliaDocsSelfCrawl/en/cloud/support"}},a={},l=[{value:"Integrations could require egress access",id:"integrations-could-require-egress-access",level:2}],u={toc:l},p="wrapper";function f(e){let{components:t,...s}=e;return(0,i.kt)(p,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"integrations-could-require-egress-access"},"Integrations could require egress access"),(0,i.kt)("p",null,"If you are using integration like the MySQL or PostgreSQL Engine, It's possible that you need to authorize ClickHouse Cloud to access to your instances."),(0,i.kt)("p",null,"You could use this list of public IPs in ",(0,i.kt)("inlineCode",{parentName:"p"},"firewalls")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorized networks")," in GCP or in ",(0,i.kt)("inlineCode",{parentName:"p"},"Security Groups")," for Azure, AWS or in any other infrastrucutre egrees management system you are using."),(0,i.kt)("p",null,"According to the region your ClickHouse Service is using, add the three IP address that match with this list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'us-east-1\n  "public-a" = "52.205.46.187"\n  "public-b" = "44.208.152.165"\n  "public-c" = "52.22.199.32"\n\nus-east-2\n  "public-a" = "18.117.209.120"\n  "public-b" = "3.21.42.89"\n  "public-c" = "3.135.147.1"\n\nus-west-2\n  "public-a" = "54.244.160.153"\n  "public-b" = "35.165.97.55"\n  "public-c" = "44.236.63.111"\n\nap-south-1\n  "public-a" = "3.110.39.68"\n  "public-b" = "15.206.7.77"\n  "public-c" = "3.6.83.17"\n\nap-southeast-1\n  "public-a" = "54.254.37.170"\n  "public-b" = "46.137.240.41"\n  "public-c" = "52.74.24.166"\n\neu-central-1\n  "public-a" = "18.197.49.136"\n  "public-b" = "3.74.177.59"\n  "public-c" = "3.64.109.93"\n\neu-west-1\n  "public-a" = "54.73.98.215"\n  "public-b" = "108.128.86.193"\n  "public-c" = "34.240.176.195"\n')),(0,i.kt)("p",null,"For example a ClickHouse cloud service running in ",(0,i.kt)("inlineCode",{parentName:"p"},"us-east-2")," using the integration to connect to an RDS in AWS, should have the following Inbound security group rules:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Security group rules",src:r(51911).Z,width:"2316",height:"568"})),(0,i.kt)("p",null,"For the same ClickHouse cloud service running in ",(0,i.kt)("inlineCode",{parentName:"p"},"us-east-2"),", but this time connected to an MySQL in GCP, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorized networks")," should look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Authorized networks",src:r(99570).Z,width:"1172",height:"1382"})))}f.isMDXComponent=!0},51911:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/aws-rds-mysql-480320c5280561362b1e7ff15cc2117f.png"},99570:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gcp-authorized-network-32e675cf68be1f8c63e3326d060db353.png"}}]);