"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[2805],{7812:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"Overview","metadata":{"permalink":"/SynapseML/blog/overview","source":"@site/blog/overview.md","title":"Overview","description":"SynapseML Overview","date":"2021-12-10T01:42:58.307Z","formattedDate":"December 10, 2021","tags":[],"readingTime":0.66,"truncated":true,"authors":[],"nextItem":{"title":"Publication - Large-Scale Intelligent Microservices","permalink":"/SynapseML/blog/2020/12/01/Large-Scale Intelligent Microservices"}},"content":"Synapse Machine Learning expands the distributed computing framework [Apache Spark](https://github.com/apache/spark) in several new directions. SynapseML adds several machine learning frameworks to the SparkML Ecosystem, including [LightGBM](/docs/features/lightgbm/about), [Vowpal Wabbit](/docs/features/vw/about), [OpenCV](https://opencv.org/), [Isolation Forest](https://github.com/linkedin/isolation-forest), and the [Microsoft Cognitive Toolkit (CNTK)](https://www.microsoft.com/en-us/research/product/cognitive-toolkit/) . These tools allow users to craft powerful and highly-scalable models that span multiple ML ecosystems.\\n\\n\x3c!--truncate--\x3e\\n\\nSynapseML also brings new networking capabilities to the Spark ecosystem. With the HTTP on Spark project, users can embed any web service into their SparkML models and use their Spark clusters for massive networking workflows. In this vein, SynapseML provides easy to use SparkML transformers for a wide variety of Microsoft Cognitive Services. Finally, the Spark Serving project enables high throughput, sub-millisecond latency web services, backed by your Spark cluster.\\n\\nVisit the SynapseML Github repository to learn more."},{"id":"Publication - Large-Scale Intelligent Microservices","metadata":{"permalink":"/SynapseML/blog/2020/12/01/Large-Scale Intelligent Microservices","source":"@site/blog/2020-12-01-Large-Scale Intelligent Microservices.md","title":"Publication - Large-Scale Intelligent Microservices","description":"Large-Scale Intelligent Microservices","date":"2020-12-01T00:00:00.000Z","formattedDate":"December 1, 2020","tags":[],"readingTime":0.805,"truncated":true,"authors":[],"prevItem":{"title":"Overview","permalink":"/SynapseML/blog/overview"},"nextItem":{"title":"MMLSpark: empowering AI for Good with Mark Hamilton","permalink":"/SynapseML/blog/2019/10/02/MMLSpark empowering AI for Good with Mark Hamilton"}},"content":"Deploying Machine Learning (ML) algorithms within databases is a challenge due to the varied computational footprints of modern ML algorithms and the myriad of database technologies each with their own restrictive syntax. We introduce an Apache Spark-based micro-service orchestration \x3c!--truncate--\x3e framework that extends database operations to include web service primitives. Our system can orchestrate web services across hundreds of machines and takes full advantage of cluster, thread, and asynchronous parallelism. Using this framework, we provide large scale clients for intelligent services such as speech, vision, search, anomaly detection, and text analysis. This allows users to integrate ready-to-use intelligence into any datastore with an Apache Spark connector. To eliminate the majority of overhead from network communication, we also introduce a low-latency containerized version of our architecture. Finally, we demonstrate that the services we investigate are competitive on a variety of benchmarks, and present two applications of this framework to create intelligent search engines, and real time auto race analytics systems.\\n\\n[Read More](https://www.microsoft.com/en-us/research/publication/large-scale-services/)"},{"id":"MMLSpark: empowering AI for Good with Mark Hamilton","metadata":{"permalink":"/SynapseML/blog/2019/10/02/MMLSpark empowering AI for Good with Mark Hamilton","source":"@site/blog/2019-10-02-MMLSpark empowering AI for Good with Mark Hamilton.md","title":"MMLSpark: empowering AI for Good with Mark Hamilton","description":"MMLSpark: empowering AI for Good with Mark Hamilton","date":"2019-10-02T00:00:00.000Z","formattedDate":"October 2, 2019","tags":[],"readingTime":0.85,"truncated":true,"authors":[],"prevItem":{"title":"Publication - Large-Scale Intelligent Microservices","permalink":"/SynapseML/blog/2020/12/01/Large-Scale Intelligent Microservices"},"nextItem":{"title":"Dear Spark developers: Welcome to Azure Cognitive Services","permalink":"/SynapseML/blog/2019/08/24/Welcome to Azure Cognitive Services"}},"content":"<img src=\\"https://www.microsoft.com/en-us/research/uploads/prod/2019/09/Mark-Hamilton_Podcast_Site_09_2019_1400x788.png\\" />\\n\\n<h4>Episode 92, October 2, 2019</h4>\\n\\nIf someone asked you what snow leopards and Vincent Van Gogh have in common, you might think it was the beginning of a joke. \x3c!--truncate--\x3e It\u2019s not, but if it were, Mark Hamilton, a software engineer in Microsoft\u2019s Cognitive Services group, budding PhD student and frequent Microsoft Research collaborator, would tell you the punchline is machine learning. More specifically, Microsoft Machine Learning for Apache Spark (MMLSpark for short), a powerful yet elastic open source machine learning library that\u2019s finding its way beyond business and into \u201cAI for Good\u201d applications such as the environment and the arts.\\n\\nToday, Mark talks about his love of mathematics and his desire to solve big, crazy, core knowledge sized problems; tells us all about MMLSpark and how it\u2019s being used by organizations like the Snow Leopard Trust and the Metropolitan Museum of Art; and reveals how the persuasive advice of a really smart big sister helped launch an exciting career in AI research and development.\\n\\n[Read More](https://www.microsoft.com/en-us/research/podcast/mmlspark-empowering-ai-for-good-with-mark-hamilton/)"},{"id":"Dear Spark developers: Welcome to Azure Cognitive Services","metadata":{"permalink":"/SynapseML/blog/2019/08/24/Welcome to Azure Cognitive Services","source":"@site/blog/2019-08-24-Welcome to Azure Cognitive Services.md","title":"Dear Spark developers: Welcome to Azure Cognitive Services","description":"Dear Spark developers: Welcome to Azure Cognitive Services","date":"2019-08-24T00:00:00.000Z","formattedDate":"August 24, 2019","tags":[],"readingTime":0.79,"truncated":true,"authors":[],"prevItem":{"title":"MMLSpark: empowering AI for Good with Mark Hamilton","permalink":"/SynapseML/blog/2019/10/02/MMLSpark empowering AI for Good with Mark Hamilton"},"nextItem":{"title":"Publication - MMLSpark: Unifying Machine Learning Ecosystems at Massive Scales","permalink":"/SynapseML/blog/2019/06/01/MMLSpark Unifying Machine Learning Ecosystems at Massive Scales"}},"content":"Integrating the power of Azure Cognitive Services into your big data workflows on Apache Spark\u2122\\nToday at Spark + AI Summit 2019, we\'re excited to introduce a new set of models in the SparkML ecosystem that make it easy to leverage the Azure Cognitive Services at terabyte scales. \x3c!--truncate--\x3e With only a few lines of code, developers can embed cognitive services within your existing distributed machine learning pipelines in Spark ML. Additionally, these contributions allow Spark users to chain or Pipeline services together with deep networks, gradient boosted trees, and any SparkML model and apply these hybrid models in elastic and serverless distributed systems.\\n\\nFrom image recognition to object detection using speech recognition, translation, and text-to-speech, Azure Cognitive Services makes it easy for developers to add intelligent capabilities to their applications in any scenario. To this date, more than a million developers have already discovered and tried Cognitive Services to accelerate breakthrough experiences in their application.\\n\\n[Read More](https://azure.microsoft.com/en-us/blog/dear-spark-developers-welcome-to-azure-cognitive-services/)"},{"id":"Publication - MMLSpark: Unifying Machine Learning Ecosystems at Massive Scales","metadata":{"permalink":"/SynapseML/blog/2019/06/01/MMLSpark Unifying Machine Learning Ecosystems at Massive Scales","source":"@site/blog/2019-06-01-MMLSpark Unifying Machine Learning Ecosystems at Massive Scales.md","title":"Publication - MMLSpark: Unifying Machine Learning Ecosystems at Massive Scales","description":"MMLSpark: Unifying Machine Learning Ecosystems at Massive Scales","date":"2019-06-01T00:00:00.000Z","formattedDate":"June 1, 2019","tags":[],"readingTime":0.64,"truncated":true,"authors":[],"prevItem":{"title":"Dear Spark developers: Welcome to Azure Cognitive Services","permalink":"/SynapseML/blog/2019/08/24/Welcome to Azure Cognitive Services"},"nextItem":{"title":"Publication - Flexible and Scalable Deep Learning with MMLSpark","permalink":"/SynapseML/blog/2018/04/01/Flexible and Scalable Deep Learning with MMLSpark"}},"content":"We introduce Microsoft Machine Learning for Apache Spark (MMLSpark), an ecosystem of enhancements that expand the Apache Spark distributed computing library to tackle problems in Deep Learning, Micro-Service Orchestration, Gradient Boosting, Model Interpretability, and other areas of modern computation. \x3c!--truncate--\x3e Furthermore, we present a novel system called Spark Serving that allows users to run any Apache Spark program as a distributed, sub-millisecond latency web service backed by their existing Spark Cluster. All MMLSpark contributions have the same API to enable simple composition across frameworks and usage across batch, streaming, and RESTful web serving scenarios on static, elastic, or serverless clusters. We showcase MMLSpark by creating a method for deep object detection capable of learning without human labeled data and demonstrate its effectiveness for Snow Leopard conservation.\\n\\n[Read More](https://www.microsoft.com/en-us/research/publication/mmlspark-unifying-machine-learning-ecosystems-at-massive-scales/)"},{"id":"Publication - Flexible and Scalable Deep Learning with MMLSpark","metadata":{"permalink":"/SynapseML/blog/2018/04/01/Flexible and Scalable Deep Learning with MMLSpark","source":"@site/blog/2018-04-01-Flexible and Scalable Deep Learning with MMLSpark.md","title":"Publication - Flexible and Scalable Deep Learning with MMLSpark","description":"Flexible and Scalable Deep Learning with MMLSpark","date":"2018-04-01T00:00:00.000Z","formattedDate":"April 1, 2018","tags":[],"readingTime":0.705,"truncated":true,"authors":[],"prevItem":{"title":"Publication - MMLSpark: Unifying Machine Learning Ecosystems at Massive Scales","permalink":"/SynapseML/blog/2019/06/01/MMLSpark Unifying Machine Learning Ecosystems at Massive Scales"}},"content":"In this work we detail a novel open source library, called MMLSpark, that combines the flexible deep learning library Cognitive Toolkit, with the distributed computing framework Apache Spark. To achieve this, we have contributed Java Language bindings to the Cognitive Toolkit \x3c!--truncate--\x3e , and added several new components to the Spark ecosystem. In addition, we also integrate the popular image processing library OpenCV with Spark, and present a tool for the automated generation of PySpark wrappers from any SparkML estimator and use this tool to expose all work to the PySpark ecosystem. Finally, we provide a large library of tools for working and developing within the Spark ecosystem. We apply this work to the automated classification of Snow Leopards from camera trap images, and provide an end to end solution for the non-profit conservation organization, the Snow Leopard Trust.\\n\\n[Read More](https://www.microsoft.com/en-us/research/publication/flexible-and-scalable-deep-learning-with-mmlspark/)"}]}')}}]);