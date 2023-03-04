"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[7113,9876],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?i.createElement(g,r(r({ref:t},d),{},{components:a})):i.createElement(g,r({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},23317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const o={sidebar_label:"Billing",slug:"/en/manage/billing",title:"Billing"},r=void 0,l={unversionedId:"en/cloud/manage/billing",id:"en/cloud/manage/billing",title:"Billing",description:"Pricing",source:"@site/docs/en/cloud/manage/billing.md",sourceDirName:"en/cloud/manage",slug:"/en/manage/billing",permalink:"/AlgoliaDocsSelfCrawl/en/manage/billing",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/cloud/manage/billing.md",tags:[],version:"current",frontMatter:{sidebar_label:"Billing",slug:"/en/manage/billing",title:"Billing"}},s={},c=[{value:"Pricing",id:"pricing",level:2},{value:"Examples",id:"examples",level:2},{value:"Development: From $51 per month",id:"development-from-51-per-month",level:3},{value:"Pricing breakdown for this example:",id:"pricing-breakdown-for-this-example",level:4},{value:"Production (Idling, Auto-scaling): From $172 per month",id:"production-idling-auto-scaling-from-172-per-month",level:3},{value:"Best for: Cost-sensitive ad-hoc analytics applications",id:"best-for-cost-sensitive-ad-hoc-analytics-applications",level:4},{value:"Pricing breakdown for this example:",id:"pricing-breakdown-for-this-example-1",level:4},{value:"Production (Always-on, Reserved capacity): From $550 per month\u200b",id:"production-always-on-reserved-capacity-from-550-per-month",level:3},{value:"Pricing breakdown for this example:",id:"pricing-breakdown-for-this-example-2",level:4},{value:"FAQs",id:"faqs",level:2},{value:"How is compute metered?",id:"how-is-compute-metered",level:3},{value:"How is storage on disk calculated?",id:"how-is-storage-on-disk-calculated",level:3},{value:"Do backups count toward total storage?",id:"do-backups-count-toward-total-storage",level:3},{value:"How do I estimate compression?",id:"how-do-i-estimate-compression",level:3},{value:"What tools does ClickHouse offer to estimate the cost of running a service in the cloud if I have a self-managed deployment?",id:"what-tools-does-clickhouse-offer-to-estimate-the-cost-of-running-a-service-in-the-cloud-if-i-have-a-self-managed-deployment",level:3},{value:"What billing options are available for ClickHouse Cloud?",id:"what-billing-options-are-available-for-clickhouse-cloud",level:3},{value:"How long is the billing cycle?",id:"how-long-is-the-billing-cycle",level:3},{value:"What controls does ClickHouse Cloud offer to manage costs for Production services?",id:"what-controls-does-clickhouse-cloud-offer-to-manage-costs-for-production-services",level:3},{value:"What controls does ClickHouse Cloud offer to manage costs for Developer services?",id:"what-controls-does-clickhouse-cloud-offer-to-manage-costs-for-developer-services",level:3},{value:"If I have multiple services, do I get an invoice per service or a consolidated invoice?",id:"if-i-have-multiple-services-do-i-get-an-invoice-per-service-or-a-consolidated-invoice",level:3},{value:"If I add my credit card and upgrade before my trial period and credits expire, will I be charged?",id:"if-i-add-my-credit-card-and-upgrade-before-my-trial-period-and-credits-expire-will-i-be-charged",level:3},{value:"How can I keep track of my spending?",id:"how-can-i-keep-track-of-my-spending",level:3},{value:"How do I access my invoice for my AWS marketplace subscription to the ClickHouse Cloud service?",id:"how-do-i-access-my-invoice-for-my-aws-marketplace-subscription-to-the-clickhouse-cloud-service",level:3},{value:"Why do the dates on the Usage statements not match my AWS Marketplace Invoice?",id:"why-do-the-dates-on-the-usage-statements-not-match-my-aws-marketplace-invoice",level:3},{value:"What are the best practices?",id:"what-are-the-best-practices",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pricing"},"Pricing"),(0,n.kt)("p",null,"For pricing information see the ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.com/pricing"},"ClickHouse Cloud Pricing")," page.  To understand what can affect your bill, and ways that you\ncan manage your spend, keep reading."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Prices reflect AWS ",(0,n.kt)("inlineCode",{parentName:"p"},"us-east-1")," pricing.")),(0,n.kt)("h3",{id:"development-from-51-per-month"},"Development: From $51 per month"),(0,n.kt)("p",null,"Best for: Starter projects & staging"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Development service"),(0,n.kt)("li",{parentName:"ul"},"16 GiB RAM, 2 vCPU"),(0,n.kt)("li",{parentName:"ul"},"1 TB Data")),(0,n.kt)("h4",{id:"pricing-breakdown-for-this-example"},"Pricing breakdown for this example:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:"right"},"10% active"),(0,n.kt)("th",{parentName:"tr",align:"right"},"50% active"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Always on"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compute"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$79"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$158")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$35"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$35"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$35")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Total"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$51"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$114"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$193")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Consumption can be even lower if less than 1TB disk is used")),(0,n.kt)("h3",{id:"production-idling-auto-scaling-from-172-per-month"},"Production (Idling, Auto-scaling): From $172 per month"),(0,n.kt)("h4",{id:"best-for-cost-sensitive-ad-hoc-analytics-applications"},"Best for: Cost-sensitive ad-hoc analytics applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Production Service"),(0,n.kt)("li",{parentName:"ul"},"Active workload ~25% time"),(0,n.kt)("li",{parentName:"ul"},"Idling on with default settings"),(0,n.kt)("li",{parentName:"ul"},"Auto-scaling maximum set to prevent runaway bills")),(0,n.kt)("h4",{id:"pricing-breakdown-for-this-example-1"},"Pricing breakdown for this example:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:"right"},"Small"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Medium"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Large"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compute"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24 GiB RAM, 6 vCPU",(0,n.kt)("br",null),"$125"),(0,n.kt)("td",{parentName:"tr",align:"right"},"192 GiB RAM, 48 vCPU",(0,n.kt)("br",null),"$1000"),(0,n.kt)("td",{parentName:"tr",align:"right"},"720 GiB RAM, 180 vCPU",(0,n.kt)("br",null),"$3750")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1 TB Data",(0,n.kt)("br",null),"$47"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5 TB Data",(0,n.kt)("br",null),"$235"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10 TB Data",(0,n.kt)("br",null),"$470")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Total"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$172"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$1,235"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$4,220")))),(0,n.kt)("h3",{id:"production-always-on-reserved-capacity-from-550-per-month"},"Production (Always-on, Reserved capacity): From $550 per month\u200b"),(0,n.kt)("p",null,"Best for: Latency-sensitive applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Production Service"),(0,n.kt)("li",{parentName:"ul"},"Active workload ~100% time"),(0,n.kt)("li",{parentName:"ul"},"Auto-scaling minimum set to reserve capacity")),(0,n.kt)("h4",{id:"pricing-breakdown-for-this-example-2"},"Pricing breakdown for this example:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:"right"},"Small"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Medium"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Large"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compute"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24 GiB RAM, 6 vCPU",(0,n.kt)("br",null),"$503"),(0,n.kt)("td",{parentName:"tr",align:"right"},"96 GiB RAM, 24 vCPU",(0,n.kt)("br",null),"$2,012"),(0,n.kt)("td",{parentName:"tr",align:"right"},"360 GiB RAM, 90 vCPU",(0,n.kt)("br",null),"$7,545")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1 TB Data",(0,n.kt)("br",null),"$47"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4 TB Data",(0,n.kt)("br",null),"$188"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8 TB Data",(0,n.kt)("br",null),"$376")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Total"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$550"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$2,200"),(0,n.kt)("td",{parentName:"tr",align:"right"},"$7,921")))),(0,n.kt)("p",null,"For help with further estimation, please contact ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.cloud/support"},"support")," if you are already a ClickHouse Cloud user, or ",(0,n.kt)("a",{parentName:"p",href:"mailto:sales@clickhouse.com"},"sales@clickhouse.com")," otherwise."),(0,n.kt)("h2",{id:"faqs"},"FAQs"),(0,n.kt)("h3",{id:"how-is-compute-metered"},"How is compute metered?"),(0,n.kt)("p",null,"ClickHouse Cloud meters compute on a per-minute basis, in 8G RAM increments."),(0,n.kt)("h3",{id:"how-is-storage-on-disk-calculated"},"How is storage on disk calculated?"),(0,n.kt)("p",null,"ClickHouse Cloud uses cloud object storage and is metered on the compressed size of data stored in ClickHouse tables."),(0,n.kt)("h3",{id:"do-backups-count-toward-total-storage"},"Do backups count toward total storage?"),(0,n.kt)("p",null,"ClickHouse Cloud offers two free backups for production services, and one free backup for development services. Backups do not count toward storage."),(0,n.kt)("h3",{id:"how-do-i-estimate-compression"},"How do I estimate compression?"),(0,n.kt)("p",null,"Compression can vary quite a bit by dataset. It is dependent on how compressible the data is in the first place (number of high vs. low cardinality fields), and how the user sets up the schema (using optional codecs or not, for instance). It can be on the order of 10x for common types of analytical data, but it can be significantly lower or higher as well. See the ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/optimize/"},"optimizing")," documentation for guidance and this ",(0,n.kt)("a",{parentName:"p",href:"https://www.uber.com/blog/logging/"},"Uber blog")," for a detailed logging use case example.\nThe only practical way to know exactly is to ingest your dataset into ClickHouse and compare the size of the dataset with the size stored in ClickHouse."),(0,n.kt)("p",null,"You can use the query ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT formatReadableSize(total_bytes) FROM system.tables WHERE name = <your table name>"),"."),(0,n.kt)("h3",{id:"what-tools-does-clickhouse-offer-to-estimate-the-cost-of-running-a-service-in-the-cloud-if-i-have-a-self-managed-deployment"},"What tools does ClickHouse offer to estimate the cost of running a service in the cloud if I have a self-managed deployment?"),(0,n.kt)("p",null,"The ClickHouse query log captures ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/query_log.md"},"key metrics")," that can be used to estimate the cost of running a workload in ClickHouse Cloud.  For details on migrating from self-managed to ClickHouse Cloud please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/AlgoliaDocsSelfCrawl/en/integrations/migration/clickhouse-to-cloud"},"migration documentation"),", and contact ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.cloud/support"},"ClickHouse Cloud support")," if you have further questions."),(0,n.kt)("h3",{id:"what-billing-options-are-available-for-clickhouse-cloud"},"What billing options are available for ClickHouse Cloud?"),(0,n.kt)("p",null,"ClickHouse Cloud supports the following billing options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Self-service monthly (in USD, via credit card)"),(0,n.kt)("li",{parentName:"ul"},'Direct-sales annual / multi-year (through pre-paid "ClickHouse Credits", in USD, with additional payment options)')),(0,n.kt)("h3",{id:"how-long-is-the-billing-cycle"},"How long is the billing cycle?"),(0,n.kt)("p",null,"Billing follows a monthly billing cycle and the start date is tracked as the date when the ClickHouse Cloud organization was created."),(0,n.kt)("h3",{id:"what-controls-does-clickhouse-cloud-offer-to-manage-costs-for-production-services"},"What controls does ClickHouse Cloud offer to manage costs for Production services?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Trial and Annual Commit customers will be notified with automated emails when the consumption hits certain thresholds - 50%, 75%, and 90%, so that users can take action."),(0,n.kt)("li",{parentName:"ul"},"ClickHouse Cloud allows users to set a maximum auto-scaling limit on their compute via ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/manage/scaling"},"Advanced scaling control"),", a significant cost factor for analytical workloads."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/manage/scaling"},"Advanced scaling control")," lets you set memory limits with an option to control the behavior of pausing/idling during inactivity.")),(0,n.kt)("h3",{id:"what-controls-does-clickhouse-cloud-offer-to-manage-costs-for-developer-services"},"What controls does ClickHouse Cloud offer to manage costs for Developer services?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/AlgoliaDocsSelfCrawl/en/manage/scaling"},"Advanced scaling control")," lets you control the behavior of pausing/idling during inactivity. Adjusting memory allocation is not supported for Developer services"),(0,n.kt)("li",{parentName:"ul"},"Note that the default setting pauses the service after a period of inactivity")),(0,n.kt)("h3",{id:"if-i-have-multiple-services-do-i-get-an-invoice-per-service-or-a-consolidated-invoice"},"If I have multiple services, do I get an invoice per service or a consolidated invoice?"),(0,n.kt)("p",null,"A consolidated invoice is generated for all services in a given organization for a billing period."),(0,n.kt)("h3",{id:"if-i-add-my-credit-card-and-upgrade-before-my-trial-period-and-credits-expire-will-i-be-charged"},"If I add my credit card and upgrade before my trial period and credits expire, will I be charged?"),(0,n.kt)("p",null,"When a user converts from trial to paid before the 30-day trial period ends, but with credits remaining from the trial credit allowance, we continue to draw down from the trial credits during the initial 30-day trial period, and then charge the credit card."),(0,n.kt)("h3",{id:"how-can-i-keep-track-of-my-spending"},"How can I keep track of my spending?"),(0,n.kt)("p",null,"ClickHouse Cloud console includes a Usage display that gives detailed information about usage per service on compute and storage. This can be used to understand the cost breakdown by metered units."),(0,n.kt)("h3",{id:"how-do-i-access-my-invoice-for-my-aws-marketplace-subscription-to-the-clickhouse-cloud-service"},"How do I access my invoice for my AWS marketplace subscription to the ClickHouse Cloud service?"),(0,n.kt)("p",null,"All marketplace subscriptions will be billed and invoiced by AWS. You can download the invoice from the AWS Billing Dashboard."),(0,n.kt)("h3",{id:"why-do-the-dates-on-the-usage-statements-not-match-my-aws-marketplace-invoice"},"Why do the dates on the Usage statements not match my AWS Marketplace Invoice?"),(0,n.kt)("p",null,"AWS Marketplace billing follows the calendar month cycle eg: For usage between dates 01-Dec-2022 and 01-Jan-2023, an invoice will be generated between 3-Jan - 5-Jan-2023"),(0,n.kt)("p",null,"ClickHouse Cloud usage statements follow a different billing cycle where usage is metered and reported over 30 days starting from the day of sign up"),(0,n.kt)("p",null,"The usage and invoice dates will differ if these dates are not the same. Since usage statements track usage by day for a given service, users can rely on statements to see the breakdown of costs."),(0,n.kt)("h3",{id:"what-are-the-best-practices"},"What are the best practices?"),(0,n.kt)("p",null,"There are several ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/cloud/bestpractices/"},"areas of optimization"),", some of these are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Batching inserts  in place of frequent small-size inserts"),(0,n.kt)("li",{parentName:"ul"},"Having fewer columns in tables"),(0,n.kt)("li",{parentName:"ul"},"Choosing a ",(0,n.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/custom-partitioning-key.md"},"partition key")," so that inserts go into a fewer number of partitions"),(0,n.kt)("li",{parentName:"ul"},"Avoiding write-heavy operations in ClickHouse, such as mutations, OPTIMIZE FINAL, and Nullable columns")))}p.isMDXComponent=!0},23546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(87462),n=(a(67294),a(3905)),o=a(23317);const r={sidebar_position:1,slug:"/en/faq/billing",title:"Billing"},l=void 0,s={unversionedId:"en/faq/billing",id:"en/faq/billing",title:"Billing",description:"",source:"@site/docs/en/faq/billing.md",sourceDirName:"en/faq",slug:"/en/faq/billing",permalink:"/AlgoliaDocsSelfCrawl/en/faq/billing",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/billing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/en/faq/billing",title:"Billing"}},c={},d=[],u={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.default,{mdxType:"Content"}))}m.isMDXComponent=!0}}]);