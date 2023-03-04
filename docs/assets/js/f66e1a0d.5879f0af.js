"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[5179],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return o?n.createElement(m,a(a({ref:t},c),{},{components:o})):n.createElement(m,a({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},52217:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const i={slug:"/en/faq/operations/production",title:"Which ClickHouse version to use in production?",toc_hidden:!0,toc_priority:10},a="Which ClickHouse Version to Use in Production?",s={unversionedId:"en/faq/operations/production",id:"en/faq/operations/production",title:"Which ClickHouse version to use in production?",description:"which-clickhouse-version-to-use-in-production}",source:"@site/docs/en/faq/operations/production.md",sourceDirName:"en/faq/operations",slug:"/en/faq/operations/production",permalink:"/AlgoliaDocsSelfCrawl/en/faq/operations/production",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/operations/production.md",tags:[],version:"current",frontMatter:{slug:"/en/faq/operations/production",title:"Which ClickHouse version to use in production?",toc_hidden:!0,toc_priority:10}},l={},u=[{value:"Which ClickHouse Version Do You Recommend?",id:"which-clickhouse-version-do-you-recommend",level:2},{value:"How to Choose Between ClickHouse Releases?",id:"how-to-choose-between-clickhouse-releases",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"which-clickhouse-version-to-use-in-production"},"Which ClickHouse Version to Use in Production?"),(0,r.kt)("p",null,"First of all, let\u2019s discuss why people ask this question in the first place. There are two key reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"ClickHouse is developed with pretty high velocity, and usually there are 10+ stable releases per year. That makes a wide range of releases to choose from, which is not so trivial of a choice."),(0,r.kt)("li",{parentName:"ol"},"Some users want to avoid spending time figuring out which version works best for their use case and just follow someone else\u2019s advice.")),(0,r.kt)("p",null,"The second reason is more fundamental, so we\u2019ll start with that one and then get back to navigating through various ClickHouse releases."),(0,r.kt)("h2",{id:"which-clickhouse-version-do-you-recommend"},"Which ClickHouse Version Do You Recommend?"),(0,r.kt)("p",null,"It\u2019s tempting to hire consultants or trust some known experts to get rid of responsibility for your production environment. You install some specific ClickHouse version that someone else recommended; if there\u2019s some issue with it - it\u2019s not your fault, it\u2019s someone else\u2019s. This line of reasoning is a big trap. No external person knows better than you what\u2019s going on in your company\u2019s production environment."),(0,r.kt)("p",null,"So how do you properly choose which ClickHouse version to upgrade to? Or how do you choose your first ClickHouse version? First of all, you need to invest in setting up a ",(0,r.kt)("strong",{parentName:"p"},"realistic pre-production environment"),". In an ideal world, it could be a completely identical shadow copy, but that\u2019s usually expensive."),(0,r.kt)("p",null,"Here are some key points to get reasonable fidelity in a pre-production environment with not-so-high costs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pre-production environment needs to run an as close of a set of queries as you intend to run in production:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Don\u2019t make it read-only with some frozen data."),(0,r.kt)("li",{parentName:"ul"},"Don\u2019t make it write-only with just copying data without building some typical reports."),(0,r.kt)("li",{parentName:"ul"},"Don\u2019t wipe it clean instead of applying schema migrations."))),(0,r.kt)("li",{parentName:"ul"},"Use a sample of real production data and queries. Try to choose a sample that\u2019s still representative and makes ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT")," queries return reasonable results. Use obfuscation if your data is sensitive and internal policies do not allow it to leave the production environment."),(0,r.kt)("li",{parentName:"ul"},"Make sure that pre-production is covered by your monitoring and alerting software the same way as your production environment does."),(0,r.kt)("li",{parentName:"ul"},"If your production spans across multiple datacenters or regions, make your pre-production do the same."),(0,r.kt)("li",{parentName:"ul"},"If your production uses complex features like replication, distributed tables and cascading materialized views, make sure they are configured similarly in pre-production."),(0,r.kt)("li",{parentName:"ul"},"There\u2019s a trade-off on using the roughly same number of servers or VMs in pre-production as in production but of smaller size, or much less of them but of the same size. The first option might catch extra network-related issues, while the latter is easier to manage.")),(0,r.kt)("p",null,"The second area to invest in is ",(0,r.kt)("strong",{parentName:"p"},"automated testing infrastructure"),". Don\u2019t assume that if some kind of query has executed successfully once, it\u2019ll continue to do so forever. It\u2019s OK to have some unit tests where ClickHouse is mocked, but make sure your product has a reasonable set of automated tests that are run against real ClickHouse and check that all important use cases are still working as expected."),(0,r.kt)("p",null,"An extra step forward could be contributing those automated tests to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/tests"},"ClickHouse\u2019s open-source test infrastructure")," that are continuously used in its day-to-day development. It definitely will take some additional time and effort to learn ",(0,r.kt)("a",{parentName:"p",href:"../../development/tests.md"},"how to run it")," and then how to adapt your tests to this framework, but it\u2019ll pay off by ensuring that ClickHouse releases are already tested against them when they are announced stable, instead of repeatedly losing time on reporting the issue after the fact and then waiting for a bugfix to be implemented, backported and released. Some companies even have such test contributions to infrastructure by its use as an internal policy, (called ",(0,r.kt)("a",{parentName:"p",href:"https://www.oreilly.com/library/view/software-engineering-at/9781492082781/ch01.html#policies_that_scale_well"},"Beyonce\u2019s Rule")," at Google)."),(0,r.kt)("p",null,"When you have your pre-production environment and testing infrastructure in place, choosing the best version is straightforward:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Routinely run your automated tests against new ClickHouse releases. You can do it even for ClickHouse releases that are marked as ",(0,r.kt)("inlineCode",{parentName:"li"},"testing"),", but going forward to the next steps with them is not recommended."),(0,r.kt)("li",{parentName:"ol"},"Deploy the ClickHouse release that passed the tests to pre-production and check that all processes are running as expected."),(0,r.kt)("li",{parentName:"ol"},"Report any issues you discovered to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/ClickHouse/issues"},"ClickHouse GitHub Issues"),"."),(0,r.kt)("li",{parentName:"ol"},"If there were no major issues, it should be safe to start deploying ClickHouse release to your production environment. Investing in gradual release automation that implements an approach similar to ",(0,r.kt)("a",{parentName:"li",href:"https://martinfowler.com/bliki/CanaryRelease.html"},"canary releases")," or ",(0,r.kt)("a",{parentName:"li",href:"https://martinfowler.com/bliki/BlueGreenDeployment.html"},"green-blue deployments")," might further reduce the risk of issues in production.")),(0,r.kt)("p",null,"As you might have noticed, there\u2019s nothing specific to ClickHouse in the approach described above - people do that for any piece of infrastructure they rely on if they take their production environment seriously."),(0,r.kt)("h2",{id:"how-to-choose-between-clickhouse-releases"},"How to Choose Between ClickHouse Releases?"),(0,r.kt)("p",null,"If you look into the contents of the ClickHouse package repository, you\u2019ll see two kinds of packages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"stable")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lts")," (long-term support)")),(0,r.kt)("p",null,"Here is some guidance on how to choose between them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stable")," is the kind of package we recommend by default. They are released roughly monthly (and thus provide new features with reasonable delay) and three latest stable releases are supported in terms of diagnostics and backporting of bugfixes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lts")," are released twice a year and are supported for a year after their initial release. You might prefer them over ",(0,r.kt)("inlineCode",{parentName:"li"},"stable")," in the following cases:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your company has some internal policies that do not allow for frequent upgrades or using non-LTS software."),(0,r.kt)("li",{parentName:"ul"},"You are using ClickHouse in some secondary products that either do not require any complex ClickHouse features or do not have enough resources to keep it updated.")))),(0,r.kt)("p",null,"Many teams who initially think that ",(0,r.kt)("inlineCode",{parentName:"p"},"lts")," is the way to go often switch to ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," anyway because of some recent feature that\u2019s important for their product."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"One more thing to keep in mind when upgrading ClickHouse: we\u2019re always keeping an eye on compatibility across releases, but sometimes it\u2019s not reasonable to keep and some minor details might change. So make sure you check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/whats-new/changelog/index.md"},"changelog")," before upgrading to see if there are any notes about backward-incompatible changes.")))}d.isMDXComponent=!0}}]);