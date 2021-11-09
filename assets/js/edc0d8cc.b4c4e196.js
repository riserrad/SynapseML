(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[9664],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,m=u["".concat(l,".").concat(g)]||u[g]||h[g]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},581:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(4034),r=a(9973),i=(a(7294),a(3905)),o=["components"],s={title:"LightGBM",hide_title:!0,sidebar_label:"About",name:"about"},l="LightGBM on Apache Spark",p={unversionedId:"features/lightgbm/about",id:"features/lightgbm/about",isDocsHomePage:!1,title:"LightGBM",description:"LightGBM",source:"@site/docs/features/lightgbm/about.md",sourceDirName:"features/lightgbm",slug:"/features/lightgbm/about",permalink:"/SynapseML/docs/next/features/lightgbm/about",tags:[],version:"current",frontMatter:{title:"LightGBM",hide_title:!0,sidebar_label:"About"},sidebar:"docs",previous:{title:"LightGBM - Overview",permalink:"/SynapseML/docs/next/features/lightgbm/LightGBM - Overview"},next:{title:"Data Balance Analysis",permalink:"/SynapseML/docs/next/features/responsible_ai/Data Balance Analysis"}},c=[{value:"LightGBM",id:"lightgbm",children:[],level:3},{value:"Advantages of LightGBM",id:"advantages-of-lightgbm",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"Architecture",id:"architecture",children:[],level:3},{value:"Barrier Execution Mode",id:"barrier-execution-mode",children:[],level:3}],h={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lightgbm-on-apache-spark"},"LightGBM on Apache Spark"),(0,i.kt)("h3",{id:"lightgbm"},"LightGBM"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/LightGBM"},"LightGBM")," is an open-source,\ndistributed, high-performance gradient boosting (GBDT, GBRT, GBM, or\nMART) framework. This framework specializes in creating high-quality and\nGPU enabled decision tree algorithms for ranking, classification, and\nmany other machine learning tasks. LightGBM is part of Microsoft's\n",(0,i.kt)("a",{parentName:"p",href:"http://github.com/microsoft/dmtk"},"DMTK")," project."),(0,i.kt)("h3",{id:"advantages-of-lightgbm"},"Advantages of LightGBM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Composability"),": LightGBM models can be incorporated into existing\nSparkML Pipelines, and used for batch, streaming, and serving\nworkloads."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Performance"),": LightGBM on Spark is 10-30% faster than SparkML on\nthe Higgs dataset, and achieves a 15% increase in AUC.  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/LightGBM/blob/master/docs/Experiments.rst#parallel-experiment"},"Parallel\nexperiments"),"\nhave verified that LightGBM can achieve a linear speed-up by using\nmultiple machines for training in specific settings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Functionality"),": LightGBM offers a wide array of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/LightGBM/blob/master/docs/Parameters.rst"},"tunable\nparameters"),",\nthat one can use to customize their decision tree system. LightGBM on\nSpark also supports new types of problems such as quantile regression."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cross platform")," LightGBM on Spark is available on Spark, PySpark, and SparklyR")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"In PySpark, you can run the ",(0,i.kt)("inlineCode",{parentName:"p"},"LightGBMClassifier")," via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.lightgbm import LightGBMClassifier\nmodel = LightGBMClassifier(learningRate=0.3,\n                           numIterations=100,\n                           numLeaves=31).fit(train)\n")),(0,i.kt)("p",null,"Similarly, you can run the ",(0,i.kt)("inlineCode",{parentName:"p"},"LightGBMRegressor")," by setting the\n",(0,i.kt)("inlineCode",{parentName:"p"},"application")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"alpha")," parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.lightgbm import LightGBMRegressor\nmodel = LightGBMRegressor(application='quantile',\n                          alpha=0.3,\n                          learningRate=0.3,\n                          numIterations=100,\n                          numLeaves=31).fit(train)\n")),(0,i.kt)("p",null,"For an end to end application, check out the LightGBM ",(0,i.kt)("a",{parentName:"p",href:"../LightGBM%20-%20Overview"},"notebook\nexample"),"."),(0,i.kt)("h3",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"LightGBM on Spark uses the Simple Wrapper and Interface Generator (SWIG)\nto add Java support for LightGBM. These Java Binding use the Java Native\nInterface call into the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/LightGBM/blob/master/include/LightGBM/c_api.h"},"distributed C++\nAPI"),"."),(0,i.kt)("p",null,"We initialize LightGBM by calling\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/LightGBM/blob/master/include/LightGBM/c_api.h"},(0,i.kt)("inlineCode",{parentName:"a"},"LGBM_NetworkInit")),"\nwith the Spark executors within a MapPartitions call. We then pass each\nworkers partitions into LightGBM to create the in-memory distributed\ndataset for LightGBM.  We can then train LightGBM to produce a model\nthat can then be used for inference."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"LightGBMClassifier")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"LightGBMRegressor")," use the SparkML API,\ninherit from the same base classes, integrate with SparkML pipelines,\nand can be tuned with ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/ml-tuning.html"},"SparkML's cross\nvalidators"),"."),(0,i.kt)("p",null,"Models built can be saved as SparkML pipeline with native LightGBM model\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"saveNativeModel()"),". Additionally, they are fully compatible with ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Predictive_Model_Markup_Language"},"PMML")," and\ncan be converted to PMML format through the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alipay/jpmml-sparkml-lightgbm"},"JPMML-SparkML-LightGBM")," plugin."),(0,i.kt)("h3",{id:"barrier-execution-mode"},"Barrier Execution Mode"),(0,i.kt)("p",null,"By default LightGBM uses regular spark paradigm for launching tasks and communicates with the driver to coordinate task execution.\nThe driver thread aggregates all task host:port information and then communicates the full list back to the workers in order for NetworkInit to be called.\nThis requires the driver to know how many tasks there are, and if the expected number of tasks is different from actual this will cause the initialization to deadlock.\nThere is a new UseBarrierExecutionMode flag, which when activated uses the barrier() stage to block all tasks.\nThe barrier execution mode simplifies the logic to aggregate host:port information across all tasks.\nTo use it in scala, you can call setUseBarrierExecutionMode(true), for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"val lgbm = new LightGBMClassifier()\n    .setLabelCol(labelColumn)\n    .setObjective(binaryObjective)\n    .setUseBarrierExecutionMode(true)\n...\n<train classifier>\n")))}u.isMDXComponent=!0}}]);