"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[35915],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>m});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(l),d=a,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||i;return l?n.createElement(m,r(r({ref:t},c),{},{components:l})):n.createElement(m,r({ref:t},c))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=l[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},14155:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=l(87462),a=(l(67294),l(3905));const i={slug:"/zh/development/continuous-integration"},r="\u6301\u7eed\u96c6\u6210\u68c0\u67e5",o={unversionedId:"zh/development/continuous-integration",id:"zh/development/continuous-integration",title:"\u6301\u7eed\u96c6\u6210\u68c0\u67e5",description:"continuous-integration-checks}",source:"@site/docs/zh/development/continuous-integration.md",sourceDirName:"zh/development",slug:"/zh/development/continuous-integration",permalink:"/AlgoliaDocsSelfCrawl/zh/development/continuous-integration",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/development/continuous-integration.md",tags:[],version:"current",frontMatter:{slug:"/zh/development/continuous-integration"},sidebar:"chinese",previous:{title:"\u5982\u4f55\u6784\u5efa ClickHouse \u53d1\u5e03\u5305",permalink:"/AlgoliaDocsSelfCrawl/zh/development/build"},next:{title:"\u4f7f\u7528\u7684\u4e09\u65b9\u5e93",permalink:"/AlgoliaDocsSelfCrawl/zh/development/contrib"}},s={},p=[{value:"\u4e0eMaster\u5408\u5e76",id:"merge-with-master",level:2},{value:"\u6587\u6863\u68c0\u67e5",id:"docs-check",level:2},{value:"\u62a5\u544a\u8be6\u60c5",id:"report-details",level:3},{value:"\u63cf\u8ff0\u4fe1\u606f\u68c0\u67e5",id:"description-check",level:2},{value:"\u63a8\u9001\u5230DockerHub",id:"push-to-dockerhub",level:2},{value:"\u6807\u8bb0\u68c0\u67e5",id:"marker-check",level:2},{value:"\u62a5\u544a\u8be6\u60c5",id:"report-details",level:3},{value:"\u5feb\u901f\u6d4b\u8bd5",id:"fast-test",level:2},{value:"\u62a5\u544a\u8be6\u60c5",id:"report-details",level:3},{value:"\u72b6\u6001\u9875\u6587\u4ef6",id:"status-page-files",level:4},{value:"\u72b6\u6001\u9875\u5217\u4fe1\u606f",id:"status-page-columns",level:4},{value:"\u5efa\u6784\u68c0\u67e5",id:"build-check",level:2},{value:"\u62a5\u544a\u8be6\u60c5",id:"report-details",level:3},{value:"\u7279\u6b8a\u6784\u5efa\u68c0\u67e5",id:"special-buildcheck",level:2},{value:"\u529f\u80fd\u65e0\u72b6\u6001\u6d4b\u8bd5",id:"functional-stateless-tests",level:2},{value:"\u529f\u80fd\u6709\u72b6\u6001\u6d4b\u8bd5",id:"functional-stateful-tests",level:2},{value:"\u96c6\u6210\u6d4b\u8bd5",id:"integration-tests",level:2},{value:"\u538b\u529b\u6d4b\u8bd5",id:"stress-test",level:2},{value:"\u517c\u5bb9\u6027\u68c0\u67e5",id:"compatibility-check",level:2},{value:"AST\u6a21\u7cca\u5668",id:"ast-fuzzer",level:2},{value:"\u6027\u80fd\u6d4b\u8bd5",id:"performance-tests",level:2}],c={toc:p},u="wrapper";function k(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"continuous-integration-checks"},"\u6301\u7eed\u96c6\u6210\u68c0\u67e5"),(0,a.kt)("p",null,"\u5f53\u4f60\u63d0\u4ea4\u4e00\u4e2apull\u8bf7\u6c42\u65f6, ClickHouse",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/development/tests/#test-automation"},"\u6301\u7eed\u96c6\u6210(CI)\u7cfb\u7edf"),"\u4f1a\u5bf9\u60a8\u7684\u4ee3\u7801\u8fd0\u884c\u4e00\u4e9b\u81ea\u52a8\u68c0\u67e5."),(0,a.kt)("p",null,"\u8fd9\u5728\u5b58\u50a8\u5e93\u7ef4\u62a4\u8005(\u6765\u81eaClickHouse\u56e2\u961f\u7684\u4eba)\u7b5b\u9009\u4e86\u60a8\u7684\u4ee3\u7801\u5e76\u5c06\u53ef\u6d4b\u8bd5\u6807\u7b7e\u6dfb\u52a0\u5230\u60a8\u7684pull\u8bf7\u6c42\u4e4b\u540e\u53d1\u751f."),(0,a.kt)("p",null,"\u68c0\u67e5\u7684\u7ed3\u679c\u88ab\u5217\u5728",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks"},"GitHub\u68c0\u67e5\u6587\u6863"),"\u4e2d\u6240\u8ff0\u7684GitHub pull\u8bf7\u6c42\u9875\u9762."),(0,a.kt)("p",null,"\u5982\u679c\u68c0\u67e5\u5931\u8d25\uff0c\u60a8\u53ef\u80fd\u88ab\u8981\u6c42\u53bb\u4fee\u590d\u5b83. \u8be5\u754c\u9762\u4ecb\u7ecd\u4e86\u60a8\u53ef\u80fd\u9047\u5230\u7684\u68c0\u67e5\uff0c\u4ee5\u53ca\u5982\u4f55\u4fee\u590d\u5b83\u4eec."),(0,a.kt)("p",null,"\u5982\u679c\u68c0\u67e5\u5931\u8d25\u770b\u8d77\u6765\u4e0e\u60a8\u7684\u66f4\u6539\u65e0\u5173, \u90a3\u4e48\u5b83\u53ef\u80fd\u662f\u4e00\u4e9b\u6682\u65f6\u7684\u6545\u969c\u6216\u57fa\u7840\u8bbe\u65bd\u95ee\u9898. \u5411pull\u8bf7\u6c42\u63a8\u4e00\u4e2a\u7a7a\u7684commit\u4ee5\u91cd\u65b0\u542f\u52a8CI\u68c0\u67e5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git reset\ngit commit --allow-empty\ngit push\n")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4e0d\u786e\u5b9a\u8981\u505a\u4ec0\u4e48\uff0c\u53ef\u4ee5\u5411\u7ef4\u62a4\u4eba\u5458\u5bfb\u6c42\u5e2e\u52a9."),(0,a.kt)("h2",{id:"merge-with-master"},"\u4e0eMaster\u5408\u5e76"),(0,a.kt)("p",null,"\u9a8c\u8bc1PR\u662f\u5426\u53ef\u4ee5\u5408\u5e76\u5230master. \u5982\u679c\u6ca1\u6709, \u5b83\u5c06\u5931\u8d25\u5e76\u663e\u793a\u6d88\u606f'Cannot fetch mergecommit'\u7684.\u8bf7\u6309",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github"},"GitHub\u6587\u6863"),"\u4e2d\u63cf\u8ff0\u7684\u51b2\u7a81\u89e3\u51b3, \u6216\u4f7f\u7528git\u5c06\u4e3b\u5206\u652f\u5408\u5e76\u5230\u60a8\u7684pull\u8bf7\u6c42\u5206\u652f\u6765\u4fee\u590d\u8fd9\u4e2a\u68c0\u67e5."),(0,a.kt)("h2",{id:"docs-check"},"\u6587\u6863\u68c0\u67e5"),(0,a.kt)("p",null,"\u5c1d\u8bd5\u6784\u5efaClickHouse\u6587\u6863\u7f51\u7ad9. \u5982\u679c\u60a8\u66f4\u6539\u4e86\u6587\u6863\u4e2d\u7684\u67d0\u4e9b\u5185\u5bb9, \u5b83\u53ef\u80fd\u4f1a\u5931\u8d25. \u6700\u53ef\u80fd\u7684\u539f\u56e0\u662f\u6587\u6863\u4e2d\u7684\u67d0\u4e9b\u4ea4\u53c9\u94fe\u63a5\u662f\u9519\u8bef\u7684. \u8f6c\u5230\u68c0\u67e5\u62a5\u544a\u5e76\u67e5\u627e",(0,a.kt)("inlineCode",{parentName:"p"},"ERROR"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"WARNING"),"\u6d88\u606f."),(0,a.kt)("h3",{id:"report-details"},"\u62a5\u544a\u8be6\u60c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://clickhouse-test-reports.s3.yandex.net/12550/eabcc293eb02214caa6826b7c15f101643f67a6b/docs_check.html"},"\u72b6\u6001\u9875\u793a\u4f8b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docs_output.txt"),"\u5305\u542b\u6784\u5efa\u65e5\u5fd7\u4fe1\u606f. ",(0,a.kt)("a",{parentName:"li",href:"https://clickhouse-test-reports.s3.yandex.net/12550/eabcc293eb02214caa6826b7c15f101643f67a6b/docs_check/docs_output.txt"},"\u6210\u529f\u7ed3\u679c\u6848\u4f8b"))),(0,a.kt)("h2",{id:"description-check"},"\u63cf\u8ff0\u4fe1\u606f\u68c0\u67e5"),(0,a.kt)("p",null,"\u68c0\u67e5pull\u8bf7\u6c42\u7684\u63cf\u8ff0\u662f\u5426\u7b26\u5408",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/.github/PULL_REQUEST_TEMPLATE.md"},"PULL_REQUEST_TEMPLATE.md"),"\u6a21\u677f."),(0,a.kt)("p",null,"\u60a8\u5fc5\u987b\u4e3a\u60a8\u7684\u66f4\u6539\u6307\u5b9a\u4e00\u4e2a\u66f4\u6539\u65e5\u5fd7\u7c7b\u522b(\u4f8b\u5982\uff0cBug\u4fee\u590d), \u5e76\u4e14\u4e3a",(0,a.kt)("a",{parentName:"p",href:"../whats-new/changelog/"},"CHANGELOG.md"),"\u7f16\u5199\u4e00\u6761\u7528\u6237\u53ef\u8bfb\u7684\u6d88\u606f\u7528\u6765\u63cf\u8ff0\u66f4\u6539."),(0,a.kt)("h2",{id:"push-to-dockerhub"},"\u63a8\u9001\u5230DockerHub"),(0,a.kt)("p",null,"\u751f\u6210\u7528\u4e8e\u6784\u5efa\u548c\u6d4b\u8bd5\u7684docker\u6620\u50cf, \u7136\u540e\u5c06\u5b83\u4eec\u63a8\u9001\u5230DockerHub."),(0,a.kt)("h2",{id:"marker-check"},"\u6807\u8bb0\u68c0\u67e5"),(0,a.kt)("p",null,"\u8be5\u68c0\u67e5\u610f\u5473\u7740CI\u7cfb\u7edf\u5df2\u7ecf\u5f00\u59cb\u5904\u7406PR.\u5f53\u5b83\u5904\u4e8e'\u5f85\u5904\u7406'\u72b6\u6001\u65f6\uff0c\u610f\u5473\u7740\u5c1a\u672a\u5f00\u59cb\u6240\u6709\u68c0\u67e5. \u542f\u52a8\u6240\u6709\u68c0\u67e5\u540e\uff0c\u72b6\u6001\u66f4\u6539\u4e3a'\u6210\u529f'."),(0,a.kt)("h1",{id:"style-check"},"\u683c\u5f0f\u68c0\u67e5"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"utils/check-style/check-style"),"\u4e8c\u8fdb\u5236\u6587\u4ef6\u6267\u884c\u4e00\u4e9b\u7b80\u5355\u7684\u57fa\u4e8e\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u4ee3\u7801\u6837\u5f0f\u68c0\u67e5(\u6ce8\u610f, \u5b83\u53ef\u4ee5\u5728\u672c\u5730\u8fd0\u884c).\n\u5982\u679c\u5931\u8d25, \u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/development/style"},"\u4ee3\u7801\u6837\u5f0f\u6307\u5357"),"\u4fee\u590d\u6837\u5f0f\u9519\u8bef."),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/psf/black/"},"black")," \u6aa2\u67e5 python \u4ee3\u78bc."),(0,a.kt)("h3",{id:"report-details"},"\u62a5\u544a\u8be6\u60c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://clickhouse-test-reports.s3.yandex.net/12550/659c78c7abb56141723af6a81bfae39335aa8cb2/style_check.html"},"\u72b6\u6001\u9875\u793a\u4f8b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docs_output.txt"),"\u8bb0\u5f55\u4e86\u67e5\u7ed3\u679c\u9519\u8bef(\u65e0\u6548\u8868\u683c\u7b49), \u7a7a\u767d\u9875\u8868\u793a\u6ca1\u6709\u9519\u8bef. ",(0,a.kt)("a",{parentName:"li",href:"https://clickhouse-test-reports.s3.yandex.net/12550/659c78c7abb56141723af6a81bfae39335aa8cb2/style_check/output.txt"},"\u6210\u529f\u7ed3\u679c\u6848\u4f8b"))),(0,a.kt)("h2",{id:"fast-test"},"\u5feb\u901f\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\u8fd9\u662fPR\u8fd0\u884c\u7684\u7b2c\u4e00\u4e2a\u68c0\u67e5.\u5b83\u6784\u5efaClickHouse\u4ee5\u53ca\u5927\u591a\u6570\u65e0\u72b6\u6001\u8fd0\u884c\u6d4b\u8bd5, \u5176\u4e2d\u7701\u7565\u4e86\u4e00\u4e9b.\u5982\u679c\u5931\u8d25\uff0c\u5728\u4fee\u590d\u4e4b\u524d\u4e0d\u4f1a\u5f00\u59cb\u8fdb\u4e00\u6b65\u7684\u68c0\u67e5. \u67e5\u770b\u62a5\u544a\u4ee5\u4e86\u89e3\u54ea\u4e9b\u6d4b\u8bd5\u5931\u8d25, \u7136\u540e\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/development/tests#functional-test-locally"},"\u6b64\u5904"),"\u63cf\u8ff0\u7684\u5728\u672c\u5730\u91cd\u73b0\u5931\u8d25."),(0,a.kt)("h3",{id:"report-details"},"\u62a5\u544a\u8be6\u60c5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse-test-reports.s3.yandex.net/12550/67d716b5cc3987801996c31a67b31bf141bc3486/fast_test.html"},"\u72b6\u6001\u9875\u793a\u4f8b")),(0,a.kt)("h4",{id:"status-page-files"},"\u72b6\u6001\u9875\u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"runlog.out.log")," \u662f\u5305\u542b\u6240\u6709\u5176\u4ed6\u65e5\u5fd7\u7684\u901a\u7528\u65e5\u5fd7."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test_log.txt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"submodule_log.txt")," \u5305\u542b\u5173\u4e8e\u514b\u9686\u548c\u68c0\u67e5\u6240\u9700\u5b50\u6a21\u5757\u7684\u6d88\u606f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stderr.log")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stdout.log")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse-server.log")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clone_log.txt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"install_log.txt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse-server.err.log")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"build_log.txt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cmake_log.txt")," \u5305\u542b\u5173\u4e8eC/C++\u548cLinux\u6807\u5fd7\u68c0\u67e5\u7684\u6d88\u606f.")),(0,a.kt)("h4",{id:"status-page-columns"},"\u72b6\u6001\u9875\u5217\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u540d\u79f0 -- \u5305\u542b\u6d4b\u8bd5\u7684\u540d\u79f0(\u4e0d\u5e26\u8def\u5f84, \u4f8b\u5982, \u6240\u6709\u7c7b\u578b\u7684\u6d4b\u8bd5\u5c06\u88ab\u5265\u79bb\u5230\u8be5\u540d\u79f0)."),(0,a.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u72b6\u6001 -- \u8df3\u8fc7\u3001\u6210\u529f\u6216\u5931\u8d25\u4e4b\u4e00."),(0,a.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u65f6\u95f4, \u79d2. -- \u8fd9\u4e2a\u6d4b\u8bd5\u662f\u7a7a\u7684.")),(0,a.kt)("h2",{id:"build-check"},"\u5efa\u6784\u68c0\u67e5"),(0,a.kt)("p",null,"\u5728\u5404\u79cd\u914d\u7f6e\u4e2d\u6784\u5efaClickHouse, \u4ee5\u4fbf\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\u4f7f\u7528. \u60a8\u5fc5\u987b\u4fee\u590d\u5931\u8d25\u7684\u6784\u5efa.\u6784\u5efa\u65e5\u5fd7\u901a\u5e38\u6709\u8db3\u591f\u7684\u4fe1\u606f\u6765\u4fee\u590d\u9519\u8bef, \u4f46\u662f\u60a8\u53ef\u80fd\u5fc5\u987b\u5728\u672c\u5730\u91cd\u73b0\u6545\u969c. ",(0,a.kt)("inlineCode",{parentName:"p"},"cmake"),"\u9009\u9879\u53ef\u4ee5\u5728\u6784\u5efa\u65e5\u5fd7\u4e2d\u901a\u8fc7grep ",(0,a.kt)("inlineCode",{parentName:"p"},"cmake"),"\u64cd\u4f5c\u627e\u5230.\u4f7f\u7528\u8fd9\u4e9b\u9009\u9879\u5e76\u9075\u5faa",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/development/build"},"\u4e00\u822c\u7684\u6784\u5efa\u8fc7\u7a0b"),"."),(0,a.kt)("h3",{id:"report-details"},"\u62a5\u544a\u8be6\u60c5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse-builds.s3.yandex.net/12550/67d716b5cc3987801996c31a67b31bf141bc3486/clickhouse_build_check/report.html"},"\u72b6\u6001\u9875\u793a\u4f8b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Compiler"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"gcc-9")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"clang-10")," (\u6216\u5176\u4ed6\u67b6\u6784\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"clang-10-xx"),", \u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"clang-10-freebsd"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Build type"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Debug")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"RelWithDebInfo")," (cmake)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sanitizer"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"none")," (without sanitizers), ",(0,a.kt)("inlineCode",{parentName:"li"},"address")," (ASan), ",(0,a.kt)("inlineCode",{parentName:"li"},"memory")," (MSan), ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," (UBSan), or ",(0,a.kt)("inlineCode",{parentName:"li"},"thread")," (TSan)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bundled"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"bundled")," \u6784\u5efa\u4f7f\u7528\u6765\u81ea ",(0,a.kt)("inlineCode",{parentName:"li"},"contrib")," \u5e93, \u800c ",(0,a.kt)("inlineCode",{parentName:"li"},"unbundled")," \u6784\u5efa\u4f7f\u7528\u7cfb\u7edf\u5e93."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Status"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"\u6210\u529f")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5931\u8d25")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Build log"),": \u94fe\u63a5\u5230\u6784\u5efa\u548c\u6587\u4ef6\u590d\u5236\u65e5\u5fd7, \u5f53\u6784\u5efa\u5931\u8d25\u65f6\u5f88\u6709\u7528."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Build time"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Artifacts"),": \u6784\u5efa\u7ed3\u679c\u6587\u4ef6 (",(0,a.kt)("inlineCode",{parentName:"li"},"XXX"),"\u662f\u670d\u52a1\u5668\u7248\u672c, \u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"20.8.1.4344"),").",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse-client_XXX_amd64.deb"),"\n-",(0,a.kt)("inlineCode",{parentName:"li"}," clickhouse-common-static-dbg_XXX[+asan, +msan, +ubsan, +tsan]_amd64.deb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse-common-staticXXX_amd64.deb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse-server_XXX_amd64.deb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse"),": Main built binary."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clickhouse-odbc-bridge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unit_tests_dbms"),": \u5e26\u6709 ClickHouse \u5355\u5143\u6d4b\u8bd5\u7684 GoogleTest \u4e8c\u8fdb\u5236\u6587\u4ef6."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"performance.tar.zst"),": \u7528\u4e8e\u6027\u80fd\u6d4b\u8bd5\u7684\u7279\u6b8a\u5305.")))),(0,a.kt)("h2",{id:"special-buildcheck"},"\u7279\u6b8a\u6784\u5efa\u68c0\u67e5"),(0,a.kt)("p",null,"\u4f7f\u7528clang-tidy\u6267\u884c\u9759\u6001\u5206\u6790\u548c\u4ee3\u7801\u6837\u5f0f\u68c0\u67e5. \u8be5\u62a5\u544a\u7c7b\u4f3c\u4e8e\u6784\u5efa\u68c0\u67e5. \u4fee\u590d\u5728\u6784\u5efa\u65e5\u5fd7\u4e2d\u53d1\u73b0\u7684\u9519\u8bef."),(0,a.kt)("h2",{id:"functional-stateless-tests"},"\u529f\u80fd\u65e0\u72b6\u6001\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u4e3a\u6784\u5efa\u5728\u4e0d\u540c\u914d\u7f6e\u4e2d\u7684ClickHouse\u4e8c\u8fdb\u5236\u6587\u4ef6\u8fd0\u884c",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/development/tests#functional-tests"},"\u65e0\u72b6\u6001\u529f\u80fd\u6d4b\u8bd5"),"\u2014\u2014\u53d1\u5e03\u3001\u8c03\u8bd5\u3001\u4f7f\u7528\u6740\u6bd2\u8f6f\u4ef6\u7b49.\u901a\u8fc7\u62a5\u544a\u67e5\u770b\u54ea\u4e9b\u6d4b\u8bd5\u5931\u8d25\uff0c\u7136\u540e\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/development/tests#functional-test-locally"},"\u6b64\u5904"),"\u63cf\u8ff0\u7684\u5728\u672c\u5730\u91cd\u73b0\u5931\u8d25.\u6ce8\u610f, \u60a8\u5fc5\u987b\u4f7f\u7528\u6b63\u786e\u7684\u6784\u5efa\u914d\u7f6e\u6765\u91cd\u73b0\u2014\u2014\u5728AddressSanitizer\u4e0b\u6d4b\u8bd5\u53ef\u80fd\u5931\u8d25,\u4f46\u5728Debug\u4e2d\u53ef\u4ee5\u901a\u8fc7.\u4ece",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/development/build#you-dont-have-to-build-clickhouse"},"CI\u6784\u5efa\u68c0\u67e5\u9875\u9762"),"\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u6587\u4ef6, \u6216\u8005\u5728\u672c\u5730\u6784\u5efa\u5b83."),(0,a.kt)("h2",{id:"functional-stateful-tests"},"\u529f\u80fd\u6709\u72b6\u6001\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u8fd0\u884c",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/development/tests#functional-tests"},"\u6709\u72b6\u6001\u529f\u80fd\u6d4b\u8bd5"),".\u4ee5\u65e0\u72b6\u6001\u529f\u80fd\u6d4b\u8bd5\u76f8\u540c\u7684\u65b9\u5f0f\u5bf9\u5f85\u5b83\u4eec.\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5b83\u4eec\u9700\u8981\u4ece",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/getting-started/example-datasets/metrica/"},"Yandex.Metrica\u6570\u636e\u96c6"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"hits"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"visits"),"\u8868\u6765\u8fd0\u884c."),(0,a.kt)("h2",{id:"integration-tests"},"\u96c6\u6210\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u8fd0\u884c",(0,a.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/zh/development/tests#integration-tests"},"\u96c6\u6210\u6d4b\u8bd5"),"."),(0,a.kt)("h2",{id:"stress-test"},"\u538b\u529b\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u4ece\u591a\u4e2a\u5ba2\u6237\u7aef\u5e76\u53d1\u8fd0\u884c\u65e0\u72b6\u6001\u529f\u80fd\u6d4b\u8bd5, \u7528\u4ee5\u68c0\u6d4b\u4e0e\u5e76\u53d1\u76f8\u5173\u7684\u9519\u8bef.\u5982\u679c\u5931\u8d25:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"* Fix all other test failures first;\n* Look at the report to find the server logs and check them for possible causes\n  of error.\n")),(0,a.kt)("h2",{id:"compatibility-check"},"\u517c\u5bb9\u6027\u68c0\u67e5"),(0,a.kt)("p",null,"\u68c0\u67e5",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse"),"\u4e8c\u8fdb\u5236\u6587\u4ef6\u662f\u5426\u53ef\u4ee5\u5728\u5e26\u6709\u65e7libc\u7248\u672c\u7684\u53d1\u884c\u7248\u4e0a\u8fd0\u884c.\u5982\u679c\u5931\u8d25, \u8bf7\u5411\u7ef4\u62a4\u4eba\u5458\u5bfb\u6c42\u5e2e\u52a9."),(0,a.kt)("h2",{id:"ast-fuzzer"},"AST\u6a21\u7cca\u5668"),(0,a.kt)("p",null,"\u8fd0\u884c\u968f\u673a\u751f\u6210\u7684\u67e5\u8be2\u6765\u6355\u83b7\u7a0b\u5e8f\u9519\u8bef.\u5982\u679c\u5931\u8d25, \u8bf7\u5411\u7ef4\u62a4\u4eba\u5458\u5bfb\u6c42\u5e2e\u52a9."),(0,a.kt)("h2",{id:"performance-tests"},"\u6027\u80fd\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u6d4b\u91cf\u67e5\u8be2\u6027\u80fd\u7684\u53d8\u5316. \u8fd9\u662f\u6700\u957f\u7684\u68c0\u67e5, \u53ea\u9700\u4e0d\u5230 6 \u5c0f\u65f6\u5373\u53ef\u8fd0\u884c.\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/docker/test/performance-comparison#how-to-read-the-report"},"\u6b64\u5904"),"\u6709\u8be6\u7ec6\u63cf\u8ff0."))}k.isMDXComponent=!0}}]);