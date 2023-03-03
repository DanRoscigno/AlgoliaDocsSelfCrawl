"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[45585],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),I=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=I(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},U=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=I(n),U=i,m=d["".concat(l,".").concat(U)]||d[U]||g[U]||r;return n?a.createElement(m,s(s({ref:e},c),{},{components:n})):a.createElement(m,s({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,s=new Array(r);s[0]=U;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[d]="string"==typeof t?t:i,s[1]=o;for(var I=2;I<r;I++)s[I]=n[I];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}U.displayName="MDXCreateElement"},15673:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>I});var a=n(87462),i=(n(67294),n(3905));const r={slug:"/en/getting-started/example-datasets/metrica",sidebar_label:"Web Analytics Data",description:"Dataset consisting of two tables containing anonymized web analytics data with hits and visits"},s="Anonymized Web Analytics Data",o={unversionedId:"en/getting-started/example-datasets/metrica",id:"en/getting-started/example-datasets/metrica",title:"Anonymized Web Analytics Data",description:"Dataset consisting of two tables containing anonymized web analytics data with hits and visits",source:"@site/docs/en/getting-started/example-datasets/metrica.md",sourceDirName:"en/getting-started/example-datasets",slug:"/en/getting-started/example-datasets/metrica",permalink:"/docs/en/getting-started/example-datasets/metrica",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/getting-started/example-datasets/metrica.md",tags:[],version:"current",frontMatter:{slug:"/en/getting-started/example-datasets/metrica",sidebar_label:"Web Analytics Data",description:"Dataset consisting of two tables containing anonymized web analytics data with hits and visits"},sidebar:"english",previous:{title:'New York Public Library "What\'s on the Menu?" Dataset',permalink:"/docs/en/getting-started/example-datasets/menus"},next:{title:"NYPD Complaint Data",permalink:"/docs/en/getting-started/example-datasets/nypd_complaint_data"}},l={},I=[{value:"Download and ingest the data",id:"download-and-ingest-the-data",level:2},{value:"Download the hits compressed TSV file:",id:"download-the-hits-compressed-tsv-file",level:3},{value:"Create the database and table",id:"create-the-database-and-table",level:3},{value:"Import the hits data:",id:"import-the-hits-data",level:3},{value:"Download the visits compressed TSV file:",id:"download-the-visits-compressed-tsv-file",level:3},{value:"Create the visits table",id:"create-the-visits-table",level:3},{value:"Import the visits data",id:"import-the-visits-data",level:3},{value:"An example JOIN",id:"an-example-join",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:I},d="wrapper";function g(t){let{components:e,...n}=t;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"anonymized-web-analytics-data"},"Anonymized Web Analytics Data"),(0,i.kt)("p",null,"This dataset consists of two tables containing anonymized web analytics data with hits (",(0,i.kt)("inlineCode",{parentName:"p"},"hits_v1"),") and visits (",(0,i.kt)("inlineCode",{parentName:"p"},"visits_v1"),")."),(0,i.kt)("p",null,"The tables can be downloaded as compressed ",(0,i.kt)("inlineCode",{parentName:"p"},"tsv.xz")," files. In addition to the sample worked with in this document, an extended (7.5GB) version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"hits")," table containing 100 million rows is available as TSV at ",(0,i.kt)("a",{parentName:"p",href:"https://datasets.clickhouse.com/hits/tsv/hits_100m_obfuscated_v1.tsv.xz"},"https://datasets.clickhouse.com/hits/tsv/hits_100m_obfuscated_v1.tsv.xz"),"."),(0,i.kt)("h2",{id:"download-and-ingest-the-data"},"Download and ingest the data"),(0,i.kt)("h3",{id:"download-the-hits-compressed-tsv-file"},"Download the hits compressed TSV file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://datasets.clickhouse.com/hits/tsv/hits_v1.tsv.xz | unxz --threads=`nproc` > hits_v1.tsv\n# Validate the checksum\nmd5sum hits_v1.tsv\n# Checksum should be equal to: f3631b6295bf06989c1437491f7592cb\n")),(0,i.kt)("h3",{id:"create-the-database-and-table"},"Create the database and table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client --query "CREATE DATABASE IF NOT EXISTS datasets"\n')),(0,i.kt)("p",null,"For hits_v1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client --query "CREATE TABLE datasets.hits_v1 ( WatchID UInt64,  JavaEnable UInt8,  Title String,  GoodEvent Int16,  EventTime DateTime,  EventDate Date,  CounterID UInt32,  ClientIP UInt32,  ClientIP6 FixedString(16),  RegionID UInt32,  UserID UInt64,  CounterClass Int8,  OS UInt8,  UserAgent UInt8,  URL String,  Referer String,  URLDomain String,  RefererDomain String,  Refresh UInt8,  IsRobot UInt8,  RefererCategories Array(UInt16),  URLCategories Array(UInt16), URLRegions Array(UInt32),  RefererRegions Array(UInt32),  ResolutionWidth UInt16,  ResolutionHeight UInt16,  ResolutionDepth UInt8,  FlashMajor UInt8, FlashMinor UInt8,  FlashMinor2 String,  NetMajor UInt8,  NetMinor UInt8, UserAgentMajor UInt16,  UserAgentMinor FixedString(2),  CookieEnable UInt8, JavascriptEnable UInt8,  IsMobile UInt8,  MobilePhone UInt8,  MobilePhoneModel String,  Params String,  IPNetworkID UInt32,  TraficSourceID Int8, SearchEngineID UInt16,  SearchPhrase String,  AdvEngineID UInt8,  IsArtifical UInt8,  WindowClientWidth UInt16,  WindowClientHeight UInt16,  ClientTimeZone Int16,  ClientEventTime DateTime,  SilverlightVersion1 UInt8, SilverlightVersion2 UInt8,  SilverlightVersion3 UInt32,  SilverlightVersion4 UInt16,  PageCharset String,  CodeVersion UInt32,  IsLink UInt8,  IsDownload UInt8,  IsNotBounce UInt8,  FUniqID UInt64,  HID UInt32,  IsOldCounter UInt8, IsEvent UInt8,  IsParameter UInt8,  DontCountHits UInt8,  WithHash UInt8, HitColor FixedString(1),  UTCEventTime DateTime,  Age UInt8,  Sex UInt8,  Income UInt8,  Interests UInt16,  Robotness UInt8,  GeneralInterests Array(UInt16), RemoteIP UInt32,  RemoteIP6 FixedString(16),  WindowName Int32,  OpenerName Int32,  HistoryLength Int16,  BrowserLanguage FixedString(2),  BrowserCountry FixedString(2),  SocialNetwork String,  SocialAction String,  HTTPError UInt16, SendTiming Int32,  DNSTiming Int32,  ConnectTiming Int32,  ResponseStartTiming Int32,  ResponseEndTiming Int32,  FetchTiming Int32,  RedirectTiming Int32, DOMInteractiveTiming Int32,  DOMContentLoadedTiming Int32,  DOMCompleteTiming Int32,  LoadEventStartTiming Int32,  LoadEventEndTiming Int32, NSToDOMContentLoadedTiming Int32,  FirstPaintTiming Int32,  RedirectCount Int8, SocialSourceNetworkID UInt8,  SocialSourcePage String,  ParamPrice Int64, ParamOrderID String,  ParamCurrency FixedString(3),  ParamCurrencyID UInt16, GoalsReached Array(UInt32),  OpenstatServiceName String,  OpenstatCampaignID String,  OpenstatAdID String,  OpenstatSourceID String,  UTMSource String, UTMMedium String,  UTMCampaign String,  UTMContent String,  UTMTerm String, FromTag String,  HasGCLID UInt8,  RefererHash UInt64,  URLHash UInt64,  CLID UInt32,  YCLID UInt64,  ShareService String,  ShareURL String,  ShareTitle String,  ParsedParams Nested(Key1 String,  Key2 String, Key3 String, Key4 String, Key5 String,  ValueDouble Float64),  IslandID FixedString(16),  RequestNum UInt32,  RequestTry UInt8) ENGINE = MergeTree() PARTITION BY toYYYYMM(EventDate) ORDER BY (CounterID, EventDate, intHash32(UserID)) SAMPLE BY intHash32(UserID) SETTINGS index_granularity = 8192"\n')),(0,i.kt)("p",null,"Or for hits_100m_obfuscated"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client --query="CREATE TABLE default.hits_100m_obfuscated (WatchID UInt64, JavaEnable UInt8, Title String, GoodEvent Int16, EventTime DateTime, EventDate Date, CounterID UInt32, ClientIP UInt32, RegionID UInt32, UserID UInt64, CounterClass Int8, OS UInt8, UserAgent UInt8, URL String, Referer String, Refresh UInt8, RefererCategoryID UInt16, RefererRegionID UInt32, URLCategoryID UInt16, URLRegionID UInt32, ResolutionWidth UInt16, ResolutionHeight UInt16, ResolutionDepth UInt8, FlashMajor UInt8, FlashMinor UInt8, FlashMinor2 String, NetMajor UInt8, NetMinor UInt8, UserAgentMajor UInt16, UserAgentMinor FixedString(2), CookieEnable UInt8, JavascriptEnable UInt8, IsMobile UInt8, MobilePhone UInt8, MobilePhoneModel String, Params String, IPNetworkID UInt32, TraficSourceID Int8, SearchEngineID UInt16, SearchPhrase String, AdvEngineID UInt8, IsArtifical UInt8, WindowClientWidth UInt16, WindowClientHeight UInt16, ClientTimeZone Int16, ClientEventTime DateTime, SilverlightVersion1 UInt8, SilverlightVersion2 UInt8, SilverlightVersion3 UInt32, SilverlightVersion4 UInt16, PageCharset String, CodeVersion UInt32, IsLink UInt8, IsDownload UInt8, IsNotBounce UInt8, FUniqID UInt64, OriginalURL String, HID UInt32, IsOldCounter UInt8, IsEvent UInt8, IsParameter UInt8, DontCountHits UInt8, WithHash UInt8, HitColor FixedString(1), LocalEventTime DateTime, Age UInt8, Sex UInt8, Income UInt8, Interests UInt16, Robotness UInt8, RemoteIP UInt32, WindowName Int32, OpenerName Int32, HistoryLength Int16, BrowserLanguage FixedString(2), BrowserCountry FixedString(2), SocialNetwork String, SocialAction String, HTTPError UInt16, SendTiming UInt32, DNSTiming UInt32, ConnectTiming UInt32, ResponseStartTiming UInt32, ResponseEndTiming UInt32, FetchTiming UInt32, SocialSourceNetworkID UInt8, SocialSourcePage String, ParamPrice Int64, ParamOrderID String, ParamCurrency FixedString(3), ParamCurrencyID UInt16, OpenstatServiceName String, OpenstatCampaignID String, OpenstatAdID String, OpenstatSourceID String, UTMSource String, UTMMedium String, UTMCampaign String, UTMContent String, UTMTerm String, FromTag String, HasGCLID UInt8, RefererHash UInt64, URLHash UInt64, CLID UInt32) ENGINE = MergeTree() PARTITION BY toYYYYMM(EventDate) ORDER  BY (CounterID, EventDate, intHash32(UserID)) SAMPLE BY intHash32(UserID) SETTINGS index_granularity = 8192"\n')),(0,i.kt)("h3",{id:"import-the-hits-data"},"Import the hits data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cat hits_v1.tsv | clickhouse-client --query "INSERT INTO datasets.hits_v1 FORMAT TSV" --max_insert_block_size=100000\n')),(0,i.kt)("p",null,"Verify the count of rows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client --query "SELECT COUNT(*) FROM datasets.hits_v1"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"8873898\n")),(0,i.kt)("h3",{id:"download-the-visits-compressed-tsv-file"},"Download the visits compressed TSV file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://datasets.clickhouse.com/visits/tsv/visits_v1.tsv.xz | unxz --threads=`nproc` > visits_v1.tsv\n# Validate the checksum\nmd5sum visits_v1.tsv\n# Checksum should be equal to: 6dafe1a0f24e59e3fc2d0fed85601de6\n")),(0,i.kt)("h3",{id:"create-the-visits-table"},"Create the visits table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client --query "CREATE TABLE datasets.visits_v1 ( CounterID UInt32,  StartDate Date,  Sign Int8,  IsNew UInt8,  VisitID UInt64,  UserID UInt64,  StartTime DateTime,  Duration UInt32,  UTCStartTime DateTime,  PageViews Int32,  Hits Int32,  IsBounce UInt8,  Referer String,  StartURL String,  RefererDomain String,  StartURLDomain String,  EndURL String,  LinkURL String,  IsDownload UInt8,  TraficSourceID Int8,  SearchEngineID UInt16,  SearchPhrase String,  AdvEngineID UInt8,  PlaceID Int32,  RefererCategories Array(UInt16),  URLCategories Array(UInt16),  URLRegions Array(UInt32),  RefererRegions Array(UInt32),  IsYandex UInt8,  GoalReachesDepth Int32,  GoalReachesURL Int32,  GoalReachesAny Int32,  SocialSourceNetworkID UInt8,  SocialSourcePage String,  MobilePhoneModel String,  ClientEventTime DateTime,  RegionID UInt32,  ClientIP UInt32,  ClientIP6 FixedString(16),  RemoteIP UInt32,  RemoteIP6 FixedString(16),  IPNetworkID UInt32,  SilverlightVersion3 UInt32,  CodeVersion UInt32,  ResolutionWidth UInt16,  ResolutionHeight UInt16,  UserAgentMajor UInt16,  UserAgentMinor UInt16,  WindowClientWidth UInt16,  WindowClientHeight UInt16,  SilverlightVersion2 UInt8,  SilverlightVersion4 UInt16,  FlashVersion3 UInt16,  FlashVersion4 UInt16,  ClientTimeZone Int16,  OS UInt8,  UserAgent UInt8,  ResolutionDepth UInt8,  FlashMajor UInt8,  FlashMinor UInt8,  NetMajor UInt8,  NetMinor UInt8,  MobilePhone UInt8,  SilverlightVersion1 UInt8,  Age UInt8,  Sex UInt8,  Income UInt8,  JavaEnable UInt8,  CookieEnable UInt8,  JavascriptEnable UInt8,  IsMobile UInt8,  BrowserLanguage UInt16,  BrowserCountry UInt16,  Interests UInt16,  Robotness UInt8,  GeneralInterests Array(UInt16),  Params Array(String),  Goals Nested(ID UInt32, Serial UInt32, EventTime DateTime,  Price Int64,  OrderID String, CurrencyID UInt32),  WatchIDs Array(UInt64),  ParamSumPrice Int64,  ParamCurrency FixedString(3),  ParamCurrencyID UInt16,  ClickLogID UInt64,  ClickEventID Int32,  ClickGoodEvent Int32,  ClickEventTime DateTime,  ClickPriorityID Int32,  ClickPhraseID Int32,  ClickPageID Int32,  ClickPlaceID Int32,  ClickTypeID Int32,  ClickResourceID Int32,  ClickCost UInt32,  ClickClientIP UInt32,  ClickDomainID UInt32,  ClickURL String,  ClickAttempt UInt8,  ClickOrderID UInt32,  ClickBannerID UInt32,  ClickMarketCategoryID UInt32,  ClickMarketPP UInt32,  ClickMarketCategoryName String,  ClickMarketPPName String,  ClickAWAPSCampaignName String,  ClickPageName String,  ClickTargetType UInt16,  ClickTargetPhraseID UInt64,  ClickContextType UInt8,  ClickSelectType Int8,  ClickOptions String,  ClickGroupBannerID Int32,  OpenstatServiceName String,  OpenstatCampaignID String,  OpenstatAdID String,  OpenstatSourceID String,  UTMSource String,  UTMMedium String,  UTMCampaign String,  UTMContent String,  UTMTerm String,  FromTag String,  HasGCLID UInt8,  FirstVisit DateTime,  PredLastVisit Date,  LastVisit Date,  TotalVisits UInt32,  TraficSource    Nested(ID Int8,  SearchEngineID UInt16, AdvEngineID UInt8, PlaceID UInt16, SocialSourceNetworkID UInt8, Domain String, SearchPhrase String, SocialSourcePage String),  Attendance FixedString(16),  CLID UInt32,  YCLID UInt64,  NormalizedRefererHash UInt64,  SearchPhraseHash UInt64,  RefererDomainHash UInt64,  NormalizedStartURLHash UInt64,  StartURLDomainHash UInt64,  NormalizedEndURLHash UInt64,  TopLevelDomain UInt64,  URLScheme UInt64,  OpenstatServiceNameHash UInt64,  OpenstatCampaignIDHash UInt64,  OpenstatAdIDHash UInt64,  OpenstatSourceIDHash UInt64,  UTMSourceHash UInt64,  UTMMediumHash UInt64,  UTMCampaignHash UInt64,  UTMContentHash UInt64,  UTMTermHash UInt64,  FromHash UInt64,  WebVisorEnabled UInt8,  WebVisorActivity UInt32,  ParsedParams    Nested(Key1 String,  Key2 String,  Key3 String,  Key4 String, Key5 String, ValueDouble    Float64),  Market Nested(Type UInt8, GoalID UInt32, OrderID String,  OrderPrice Int64,  PP UInt32,  DirectPlaceID UInt32,  DirectOrderID  UInt32,  DirectBannerID UInt32,  GoodID String, GoodName String, GoodQuantity Int32,  GoodPrice Int64),  IslandID FixedString(16)) ENGINE = CollapsingMergeTree(Sign) PARTITION BY toYYYYMM(StartDate) ORDER BY (CounterID, StartDate, intHash32(UserID), VisitID) SAMPLE BY intHash32(UserID) SETTINGS index_granularity = 8192"\n')),(0,i.kt)("h3",{id:"import-the-visits-data"},"Import the visits data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cat visits_v1.tsv | clickhouse-client --query "INSERT INTO datasets.visits_v1 FORMAT TSV" --max_insert_block_size=100000\n')),(0,i.kt)("p",null,"Verify the count"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client --query "SELECT COUNT(*) FROM datasets.visits_v1"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"1680609\n")),(0,i.kt)("h2",{id:"an-example-join"},"An example JOIN"),(0,i.kt)("p",null,"The hits and visits dataset is used in the ClickHouse test\nroutines, this is one of the queries from the test suite. The rest\nof the tests are referenced in the ",(0,i.kt)("em",{parentName:"p"},"Next Steps")," section at the\nend of this page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'clickhouse-client --query "SELECT\n    EventDate,\n    hits,\n    visits\nFROM\n(\n    SELECT\n        EventDate,\n        count() AS hits\n    FROM datasets.hits_v1\n    GROUP BY EventDate\n) ANY LEFT JOIN\n(\n    SELECT\n        StartDate AS EventDate,\n        sum(Sign) AS visits\n    FROM datasets.visits_v1\n    GROUP BY EventDate\n) USING EventDate\nORDER BY hits DESC\nLIMIT 10\nSETTINGS joined_subquery_requires_alias = 0\nFORMAT PrettyCompact"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500\u2500EventDate\u2500\u252c\u2500\u2500\u2500\u2500hits\u2500\u252c\u2500visits\u2500\u2510\n\u2502 2014-03-17 \u2502 1406958 \u2502 265108 \u2502\n\u2502 2014-03-19 \u2502 1405797 \u2502 261624 \u2502\n\u2502 2014-03-18 \u2502 1383658 \u2502 258723 \u2502\n\u2502 2014-03-20 \u2502 1353623 \u2502 255328 \u2502\n\u2502 2014-03-21 \u2502 1245779 \u2502 236232 \u2502\n\u2502 2014-03-23 \u2502 1046491 \u2502 202212 \u2502\n\u2502 2014-03-22 \u2502 1031592 \u2502 197354 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-intro"},"A Practical Introduction to Sparse Primary Indexes in ClickHouse")," uses the hits dataset to discuss the differences in ClickHouse indexing compared to traditional relational databases, how ClickHouse builds and uses a sparse primary index, and indexing best practices."),(0,i.kt)("p",null,"Additional examples of queries to these tables can be found among the ClickHouse ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/d7129855757f38ceec3e4ecc6dafacdabe9b178f/tests/queries/1_stateful/00172_parallel_join.sql"},"stateful tests"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The test suite uses a database name ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),", and the tables are named ",(0,i.kt)("inlineCode",{parentName:"p"},"hits")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"visits"),".  You can rename your database and tables, or edit the SQL from the test file.  ")))}g.isMDXComponent=!0}}]);