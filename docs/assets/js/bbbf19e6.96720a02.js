"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[99688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},72963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/en/getting-started/example-datasets/wikistat",sidebar_label:"WikiStat"},s="WikiStat",o={unversionedId:"en/getting-started/example-datasets/wikistat",id:"en/getting-started/example-datasets/wikistat",title:"WikiStat",description:"The dataset contains 0.5 trillion records.",source:"@site/docs/en/getting-started/example-datasets/wikistat.md",sourceDirName:"en/getting-started/example-datasets",slug:"/en/getting-started/example-datasets/wikistat",permalink:"/AlgoliaDocsSelfCrawl/en/getting-started/example-datasets/wikistat",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/getting-started/example-datasets/wikistat.md",tags:[],version:"current",frontMatter:{slug:"/en/getting-started/example-datasets/wikistat",sidebar_label:"WikiStat"},sidebar:"english",previous:{title:"Star Schema Benchmark",permalink:"/AlgoliaDocsSelfCrawl/en/getting-started/example-datasets/star-schema"},next:{title:"Playground",permalink:"/AlgoliaDocsSelfCrawl/en/getting-started/playground"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wikistat"},"WikiStat"),(0,a.kt)("p",null,"The dataset contains 0.5 trillion records."),(0,a.kt)("p",null,"See the video from FOSDEM 2023: ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=JlcI2Vfz_uk"},"https://www.youtube.com/watch?v=JlcI2Vfz_uk")),(0,a.kt)("p",null,"And the presentation: ",(0,a.kt)("a",{parentName:"p",href:"https://presentations.clickhouse.com/fosdem2023/"},"https://presentations.clickhouse.com/fosdem2023/")),(0,a.kt)("p",null,"Data source: ",(0,a.kt)("a",{parentName:"p",href:"https://dumps.wikimedia.org/other/pageviews/"},"https://dumps.wikimedia.org/other/pageviews/")),(0,a.kt)("p",null,"Getting the list of links:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'for i in {2015..2023}; do\n  for j in {01..12}; do\n    echo "${i}-${j}" >&2\n    curl -sSL "https://dumps.wikimedia.org/other/pageviews/$i/$i-$j/" \\\n      | grep -oE \'pageviews-[0-9]+-[0-9]+\\.gz\'\n  done\ndone | sort | uniq | tee links.txt\n')),(0,a.kt)("p",null,"Downloading the data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sed -r 's!pageviews-([0-9]{4})([0-9]{2})[0-9]{2}-[0-9]+\\.gz!https://dumps.wikimedia.org/other/pageviews/\\1/\\1-\\2/\\0!' \\\n  links.txt | xargs -P3 wget --continue\n")),(0,a.kt)("p",null,"(it will take about 3 days)"),(0,a.kt)("p",null,"Creating a table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE wikistat\n(\n    time DateTime CODEC(Delta, ZSTD(3)),\n    project LowCardinality(String),\n    subproject LowCardinality(String),\n    path String CODEC(ZSTD(3)),\n    hits UInt64 CODEC(ZSTD(3))\n)\nENGINE = MergeTree\nORDER BY (path, time);\n")),(0,a.kt)("p",null,"Loading the data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"clickhouse-local --query \"\n  WITH replaceRegexpOne(_path, '^.+pageviews-(\\\\d{4})(\\\\d{2})(\\\\d{2})-(\\\\d{2})(\\\\d{2})(\\\\d{2}).gz$', '\\1-\\2-\\3 \\4-\\5-\\6')::DateTime AS time, \n       extractGroups(line, '^([^ \\\\.]+)(\\\\.[^ ]+)? +([^ ]+) +(\\\\d+) +(\\\\d+)$') AS values\n  SELECT \n    time, \n    values[1] AS project,\n    values[2] AS subproject,\n    values[3] AS path,\n    (values[4])::UInt64 AS hits,\n    (values[5])::UInt64 AS size\n  FROM file('pageviews*.gz', LineAsString)\n  WHERE length(values) = 5 FORMAT Native\n\" | clickhouse-client --query \"INSERT INTO wikistat FORMAT Native\"\n")))}d.isMDXComponent=!0}}]);