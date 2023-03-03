"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[30876],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>D});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),g=r,D=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return t?a.createElement(D,l(l({ref:n},c),{},{components:t})):a.createElement(D,l({ref:n},c))}));function D(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},46729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={slug:"/en/getting-started/example-datasets/ontime",sidebar_label:"OnTime Airline Flight Data",description:"Dataset containing the on-time performance of airline flights"},l="OnTime",o={unversionedId:"en/getting-started/example-datasets/ontime",id:"en/getting-started/example-datasets/ontime",title:"OnTime",description:"Dataset containing the on-time performance of airline flights",source:"@site/docs/en/getting-started/example-datasets/ontime.md",sourceDirName:"en/getting-started/example-datasets",slug:"/en/getting-started/example-datasets/ontime",permalink:"/AlgoliaDocsSelfCrawl/en/getting-started/example-datasets/ontime",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/getting-started/example-datasets/ontime.md",tags:[],version:"current",frontMatter:{slug:"/en/getting-started/example-datasets/ontime",sidebar_label:"OnTime Airline Flight Data",description:"Dataset containing the on-time performance of airline flights"},sidebar:"english",previous:{title:"NYPD Complaint Data",permalink:"/AlgoliaDocsSelfCrawl/en/getting-started/example-datasets/nypd_complaint_data"},next:{title:"Air Traffic Data",permalink:"/AlgoliaDocsSelfCrawl/en/getting-started/example-datasets/opensky"}},s={},p=[{value:"Creating a table",id:"creating-a-table",level:2},{value:"Import from Raw Data",id:"import-from-raw-data",level:2},{value:"Import from a saved copy",id:"import-from-a-saved-copy",level:2},{value:"Queries",id:"queries",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ontime"},"OnTime"),(0,r.kt)("p",null,"This dataset contains data from Bureau of Transportation Statistics."),(0,r.kt)("h2",{id:"creating-a-table"},"Creating a table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `ontime`\n(\n    `Year`                            UInt16,\n    `Quarter`                         UInt8,\n    `Month`                           UInt8,\n    `DayofMonth`                      UInt8,\n    `DayOfWeek`                       UInt8,\n    `FlightDate`                      Date,\n    `Reporting_Airline`               LowCardinality(String),\n    `DOT_ID_Reporting_Airline`        Int32,\n    `IATA_CODE_Reporting_Airline`     LowCardinality(String),\n    `Tail_Number`                     LowCardinality(String),\n    `Flight_Number_Reporting_Airline` LowCardinality(String),\n    `OriginAirportID`                 Int32,\n    `OriginAirportSeqID`              Int32,\n    `OriginCityMarketID`              Int32,\n    `Origin`                          FixedString(5),\n    `OriginCityName`                  LowCardinality(String),\n    `OriginState`                     FixedString(2),\n    `OriginStateFips`                 FixedString(2),\n    `OriginStateName`                 LowCardinality(String),\n    `OriginWac`                       Int32,\n    `DestAirportID`                   Int32,\n    `DestAirportSeqID`                Int32,\n    `DestCityMarketID`                Int32,\n    `Dest`                            FixedString(5),\n    `DestCityName`                    LowCardinality(String),\n    `DestState`                       FixedString(2),\n    `DestStateFips`                   FixedString(2),\n    `DestStateName`                   LowCardinality(String),\n    `DestWac`                         Int32,\n    `CRSDepTime`                      Int32,\n    `DepTime`                         Int32,\n    `DepDelay`                        Int32,\n    `DepDelayMinutes`                 Int32,\n    `DepDel15`                        Int32,\n    `DepartureDelayGroups`            LowCardinality(String),\n    `DepTimeBlk`                      LowCardinality(String),\n    `TaxiOut`                         Int32,\n    `WheelsOff`                       LowCardinality(String),\n    `WheelsOn`                        LowCardinality(String),\n    `TaxiIn`                          Int32,\n    `CRSArrTime`                      Int32,\n    `ArrTime`                         Int32,\n    `ArrDelay`                        Int32,\n    `ArrDelayMinutes`                 Int32,\n    `ArrDel15`                        Int32,\n    `ArrivalDelayGroups`              LowCardinality(String),\n    `ArrTimeBlk`                      LowCardinality(String),\n    `Cancelled`                       Int8,\n    `CancellationCode`                FixedString(1),\n    `Diverted`                        Int8,\n    `CRSElapsedTime`                  Int32,\n    `ActualElapsedTime`               Int32,\n    `AirTime`                         Int32,\n    `Flights`                         Int32,\n    `Distance`                        Int32,\n    `DistanceGroup`                   Int8,\n    `CarrierDelay`                    Int32,\n    `WeatherDelay`                    Int32,\n    `NASDelay`                        Int32,\n    `SecurityDelay`                   Int32,\n    `LateAircraftDelay`               Int32,\n    `FirstDepTime`                    Int16,\n    `TotalAddGTime`                   Int16,\n    `LongestAddGTime`                 Int16,\n    `DivAirportLandings`              Int8,\n    `DivReachedDest`                  Int8,\n    `DivActualElapsedTime`            Int16,\n    `DivArrDelay`                     Int16,\n    `DivDistance`                     Int16,\n    `Div1Airport`                     LowCardinality(String),\n    `Div1AirportID`                   Int32,\n    `Div1AirportSeqID`                Int32,\n    `Div1WheelsOn`                    Int16,\n    `Div1TotalGTime`                  Int16,\n    `Div1LongestGTime`                Int16,\n    `Div1WheelsOff`                   Int16,\n    `Div1TailNum`                     LowCardinality(String),\n    `Div2Airport`                     LowCardinality(String),\n    `Div2AirportID`                   Int32,\n    `Div2AirportSeqID`                Int32,\n    `Div2WheelsOn`                    Int16,\n    `Div2TotalGTime`                  Int16,\n    `Div2LongestGTime`                Int16,\n    `Div2WheelsOff`                   Int16,\n    `Div2TailNum`                     LowCardinality(String),\n    `Div3Airport`                     LowCardinality(String),\n    `Div3AirportID`                   Int32,\n    `Div3AirportSeqID`                Int32,\n    `Div3WheelsOn`                    Int16,\n    `Div3TotalGTime`                  Int16,\n    `Div3LongestGTime`                Int16,\n    `Div3WheelsOff`                   Int16,\n    `Div3TailNum`                     LowCardinality(String),\n    `Div4Airport`                     LowCardinality(String),\n    `Div4AirportID`                   Int32,\n    `Div4AirportSeqID`                Int32,\n    `Div4WheelsOn`                    Int16,\n    `Div4TotalGTime`                  Int16,\n    `Div4LongestGTime`                Int16,\n    `Div4WheelsOff`                   Int16,\n    `Div4TailNum`                     LowCardinality(String),\n    `Div5Airport`                     LowCardinality(String),\n    `Div5AirportID`                   Int32,\n    `Div5AirportSeqID`                Int32,\n    `Div5WheelsOn`                    Int16,\n    `Div5TotalGTime`                  Int16,\n    `Div5LongestGTime`                Int16,\n    `Div5WheelsOff`                   Int16,\n    `Div5TailNum`                     LowCardinality(String)\n) ENGINE = MergeTree\n  ORDER BY (Year, Quarter, Month, DayofMonth, FlightDate, IATA_CODE_Reporting_Airline);\n")),(0,r.kt)("h2",{id:"import-from-raw-data"},"Import from Raw Data"),(0,r.kt)("p",null,"Downloading data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget --no-check-certificate --continue https://transtats.bts.gov/PREZIP/On_Time_Reporting_Carrier_On_Time_Performance_1987_present_{1987..2022}_{1..12}.zip\n")),(0,r.kt)("p",null,"Loading data with multiple threads:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -1 *.zip | xargs -I{} -P $(nproc) bash -c \"echo {}; unzip -cq {} '*.csv' | sed 's/\\.00//g' | clickhouse-client --input_format_csv_empty_as_default 1 --query='INSERT INTO ontime FORMAT CSVWithNames'\"\n")),(0,r.kt)("p",null,"(if you will have memory shortage or other issues on your server, remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"-P $(nproc)")," part)"),(0,r.kt)("h2",{id:"import-from-a-saved-copy"},"Import from a saved copy"),(0,r.kt)("p",null,"Alternatively, you can import data from a saved copy by the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO ontime SELECT * FROM s3('https://clickhouse-public-datasets.s3.amazonaws.com/ontime/csv_by_year/*.csv.gz', CSVWithNames) SETTINGS max_insert_threads = 40;\n")),(0,r.kt)("p",null,"The snapshot was created on 2022-05-29."),(0,r.kt)("h2",{id:"queries"},"Queries"),(0,r.kt)("p",null,"Q0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avg(c1)\nFROM\n(\n    SELECT Year, Month, count(*) AS c1\n    FROM ontime\n    GROUP BY Year, Month\n);\n")),(0,r.kt)("p",null,"Q1. The number of flights per day from the year 2000 to 2008"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DayOfWeek, count(*) AS c\nFROM ontime\nWHERE Year>=2000 AND Year<=2008\nGROUP BY DayOfWeek\nORDER BY c DESC;\n")),(0,r.kt)("p",null,"Q2. The number of flights delayed by more than 10 minutes, grouped by the day of the week, for 2000-2008"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DayOfWeek, count(*) AS c\nFROM ontime\nWHERE DepDelay>10 AND Year>=2000 AND Year<=2008\nGROUP BY DayOfWeek\nORDER BY c DESC;\n")),(0,r.kt)("p",null,"Q3. The number of delays by the airport for 2000-2008"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Origin, count(*) AS c\nFROM ontime\nWHERE DepDelay>10 AND Year>=2000 AND Year<=2008\nGROUP BY Origin\nORDER BY c DESC\nLIMIT 10;\n")),(0,r.kt)("p",null,"Q4. The number of delays by carrier for 2007"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IATA_CODE_Reporting_Airline AS Carrier, count(*)\nFROM ontime\nWHERE DepDelay>10 AND Year=2007\nGROUP BY Carrier\nORDER BY count(*) DESC;\n")),(0,r.kt)("p",null,"Q5. The percentage of delays by carrier for 2007"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Carrier, c, c2, c*100/c2 as c3\nFROM\n(\n    SELECT\n        IATA_CODE_Reporting_Airline AS Carrier,\n        count(*) AS c\n    FROM ontime\n    WHERE DepDelay>10\n        AND Year=2007\n    GROUP BY Carrier\n) q\nJOIN\n(\n    SELECT\n        IATA_CODE_Reporting_Airline AS Carrier,\n        count(*) AS c2\n    FROM ontime\n    WHERE Year=2007\n    GROUP BY Carrier\n) qq USING Carrier\nORDER BY c3 DESC;\n")),(0,r.kt)("p",null,"Better version of the same query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IATA_CODE_Reporting_Airline AS Carrier, avg(DepDelay>10)*100 AS c3\nFROM ontime\nWHERE Year=2007\nGROUP BY Carrier\nORDER BY c3 DESC\n")),(0,r.kt)("p",null,"Q6. The previous request for a broader range of years, 2000-2008"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Carrier, c, c2, c*100/c2 as c3\nFROM\n(\n    SELECT\n        IATA_CODE_Reporting_Airline AS Carrier,\n        count(*) AS c\n    FROM ontime\n    WHERE DepDelay>10\n        AND Year>=2000 AND Year<=2008\n    GROUP BY Carrier\n) q\nJOIN\n(\n    SELECT\n        IATA_CODE_Reporting_Airline AS Carrier,\n        count(*) AS c2\n    FROM ontime\n    WHERE Year>=2000 AND Year<=2008\n    GROUP BY Carrier\n) qq USING Carrier\nORDER BY c3 DESC;\n")),(0,r.kt)("p",null,"Better version of the same query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IATA_CODE_Reporting_Airline AS Carrier, avg(DepDelay>10)*100 AS c3\nFROM ontime\nWHERE Year>=2000 AND Year<=2008\nGROUP BY Carrier\nORDER BY c3 DESC;\n")),(0,r.kt)("p",null,"Q7. Percentage of flights delayed for more than 10 minutes, by year"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Year, c1/c2\nFROM\n(\n    select\n        Year,\n        count(*)*100 as c1\n    from ontime\n    WHERE DepDelay>10\n    GROUP BY Year\n) q\nJOIN\n(\n    select\n        Year,\n        count(*) as c2\n    from ontime\n    GROUP BY Year\n) qq USING (Year)\nORDER BY Year;\n")),(0,r.kt)("p",null,"Better version of the same query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Year, avg(DepDelay>10)*100\nFROM ontime\nGROUP BY Year\nORDER BY Year;\n")),(0,r.kt)("p",null,"Q8. The most popular destinations by the number of directly connected cities for various year ranges"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DestCityName, uniqExact(OriginCityName) AS u\nFROM ontime\nWHERE Year >= 2000 and Year <= 2010\nGROUP BY DestCityName\nORDER BY u DESC LIMIT 10;\n")),(0,r.kt)("p",null,"Q9."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Year, count(*) AS c1\nFROM ontime\nGROUP BY Year;\n")),(0,r.kt)("p",null,"Q10."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n   min(Year), max(Year), IATA_CODE_Reporting_Airline AS Carrier, count(*) AS cnt,\n   sum(ArrDelayMinutes>30) AS flights_delayed,\n   round(sum(ArrDelayMinutes>30)/count(*),2) AS rate\nFROM ontime\nWHERE\n   DayOfWeek NOT IN (6,7) AND OriginState NOT IN ('AK', 'HI', 'PR', 'VI')\n   AND DestState NOT IN ('AK', 'HI', 'PR', 'VI')\n   AND FlightDate < '2010-01-01'\nGROUP by Carrier\nHAVING cnt>100000 and max(Year)>1990\nORDER by rate DESC\nLIMIT 1000;\n")),(0,r.kt)("p",null,"Bonus:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avg(cnt)\nFROM\n(\n    SELECT Year,Month,count(*) AS cnt\n    FROM ontime\n    WHERE DepDel15=1\n    GROUP BY Year,Month\n);\n\nSELECT avg(c1) FROM\n(\n    SELECT Year,Month,count(*) AS c1\n    FROM ontime\n    GROUP BY Year,Month\n);\n\nSELECT DestCityName, uniqExact(OriginCityName) AS u\nFROM ontime\nGROUP BY DestCityName\nORDER BY u DESC\nLIMIT 10;\n\nSELECT OriginCityName, DestCityName, count() AS c\nFROM ontime\nGROUP BY OriginCityName, DestCityName\nORDER BY c DESC\nLIMIT 10;\n\nSELECT OriginCityName, count() AS c\nFROM ontime\nGROUP BY OriginCityName\nORDER BY c DESC\nLIMIT 10;\n")),(0,r.kt)("p",null,"You can also play with the data in Playground, ",(0,r.kt)("a",{parentName:"p",href:"https://play.clickhouse.com/play?user=play#U0VMRUNUIERheU9mV2VlaywgY291bnQoKikgQVMgYwpGUk9NIG9udGltZQpXSEVSRSBZZWFyPj0yMDAwIEFORCBZZWFyPD0yMDA4CkdST1VQIEJZIERheU9mV2VlawpPUkRFUiBCWSBjIERFU0M7Cg=="},"example"),"."),(0,r.kt)("p",null,"This performance test was created by Vadim Tkachenko. See:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2009/10/02/analyzing-air-traffic-performance-with-infobright-and-monetdb/"},"https://www.percona.com/blog/2009/10/02/analyzing-air-traffic-performance-with-infobright-and-monetdb/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2009/10/26/air-traffic-queries-in-luciddb/"},"https://www.percona.com/blog/2009/10/26/air-traffic-queries-in-luciddb/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2009/11/02/air-traffic-queries-in-infinidb-early-alpha/"},"https://www.percona.com/blog/2009/11/02/air-traffic-queries-in-infinidb-early-alpha/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2014/04/21/using-apache-hadoop-and-impala-together-with-mysql-for-data-analysis/"},"https://www.percona.com/blog/2014/04/21/using-apache-hadoop-and-impala-together-with-mysql-for-data-analysis/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2016/01/07/apache-spark-with-air-ontime-performance-data/"},"https://www.percona.com/blog/2016/01/07/apache-spark-with-air-ontime-performance-data/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://nickmakos.blogspot.ru/2012/08/analyzing-air-traffic-performance-with.html"},"http://nickmakos.blogspot.ru/2012/08/analyzing-air-traffic-performance-with.html"))))}u.isMDXComponent=!0}}]);