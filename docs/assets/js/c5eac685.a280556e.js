"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[26999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=s,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:s,o[1]=a;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(87462),s=(n(67294),n(3905));const i={sidebar_label:"Seeds",sidebar_position:8,slug:"/en/integrations/dbt/dbt-seeds",description:"Using seeds with the dbt ClickHouse plugin"},o="Using Seeds",a={unversionedId:"en/integrations/data-ingestion/etl-tools/dbt/dbt-seeds",id:"en/integrations/data-ingestion/etl-tools/dbt/dbt-seeds",title:"Using Seeds",description:"Using seeds with the dbt ClickHouse plugin",source:"@site/docs/en/integrations/data-ingestion/etl-tools/dbt/dbt-seeds.md",sourceDirName:"en/integrations/data-ingestion/etl-tools/dbt",slug:"/en/integrations/dbt/dbt-seeds",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/dbt/dbt-seeds",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/etl-tools/dbt/dbt-seeds.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Seeds",sidebar_position:8,slug:"/en/integrations/dbt/dbt-seeds",description:"Using seeds with the dbt ClickHouse plugin"},sidebar:"english",previous:{title:"Snapshots",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/dbt/dbt-snapshot"},next:{title:"Limitations",permalink:"/AlgoliaDocsSelfCrawl/en/integrations/dbt/dbt-limitations"}},l={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"using-seeds"},"Using Seeds"),(0,s.kt)("p",null,"dbt provides the ability to load data from CSV files. This capability is not suited to loading large exports of a database and is more designed for small files typically used for code tables and ",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/dictionaries/"},"dictionaries"),", e.g. mapping country codes to country names. For a simple example, we generate and then upload a list of genre codes using the seed functionality."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"We generate a list of genre codes from our existing dataset. From the dbt directory, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," to create a file ",(0,s.kt)("inlineCode",{parentName:"p"},"seeds/genre_codes.csv"),":"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-user@clickhouse:~/imdb$ clickhouse-client --password <password> --query\n"SELECT genre, ucase(substring(genre, 1, 3)) as code FROM imdb.genres GROUP BY genre\nLIMIT 100 FORMAT CSVWithNames" > seeds/genre_codes.csv\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Execute the ",(0,s.kt)("inlineCode",{parentName:"p"},"dbt seed")," command. This will create a new table ",(0,s.kt)("inlineCode",{parentName:"p"},"genre_codes")," in our database ",(0,s.kt)("inlineCode",{parentName:"p"},"imdb_dbt")," (as defined by our schema configuration) with the rows from our csv file."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-user@clickhouse:~/imdb$ dbt seed\n17:03:23  Running with dbt=1.1.0\n17:03:23  Found 1 model, 0 tests, 1 snapshot, 0 analyses, 181 macros, 0 operations, 1 seed file, 6 sources, 0 exposures, 0 metrics\n17:03:23\n17:03:24  Concurrency: 1 threads (target='dev')\n17:03:24\n17:03:24  1 of 1 START seed file imdb_dbt.genre_codes..................................... [RUN]\n17:03:24  1 of 1 OK loaded seed file imdb_dbt.genre_codes................................. [INSERT 21 in 0.65s]\n17:03:24\n17:03:24  Finished running 1 seed in 1.62s.\n17:03:24\n17:03:24  Completed successfully\n17:03:24\n17:03:24  Done. PASS=1 WARN=0 ERROR=0 SKIP=0 TOTAL=1\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Confirm these have been loaded:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM imdb_dbt.genre_codes LIMIT 10;\n")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-response"},"+-------+----+\n|genre  |code|\n+-------+----+\n|Drama  |DRA |\n|Romance|ROM |\n|Short  |SHO |\n|Mystery|MYS |\n|Adult  |ADU |\n|Family |FAM |\n\n|Action |ACT |\n|Sci-Fi |SCI |\n|Horror |HOR |\n|War    |WAR |\n+-------+----+=\n")))))}u.isMDXComponent=!0}}]);