---
title: 'Will It Scale?'
image: https://miro.medium.com/max/3697/1*Pa6-oyyZWPJ1DOundwovEA.jpeg
date: 2019-11-10
description: "The benefits and hidden challenges of moving from pilot to production in Spark"
image_alt_text: Jukan Tateisi via Unsplash
---

Machine learning products and pipelines are a risky investment. While ERP implementations and software roll-outs are likely to succeed given enough time and attention, there are many reasons why a machine learning concept might fail. Should you beat the odds and develop a working pilot that users are excited about, the first question on everyone’s mind will be “Will it scale?”. The answer is usually “In theory, yes”, but it’s hard to predict what integration hurdles you’ll face in practice. After struggling through this process once or twice, you learn to answer their question upfront by building your pilot with scale in mind. Thankfully, our friends at the Apache Foundation have developed an architecture to do just that: Apache Spark.

Spark is a distributed, open-source computing framework that is just as comfortable on your local laptop as it is orchestrating a cluster of hundreds of computers. Building your MVP on Spark makes it easy to scale in production, but Spark’s many benefits are offset by hidden challenges that can sink your roadmap if not prepared for.

## Why Spark?
There are several reasons why Spark is so popular within the computer science community:

### It’s easy to use
No matter what corner of the technical world you come from, you’ll find the Spark ecosystem to be developer-friendly. Spark runs on Hadoop, Mesos, Kubernetes, AWS, Azure, your local laptop, and nearly every other mainstream storage system you’d consider using. This interoperability makes it easy to develop your codebase locally on filtered data before testing at scale on a compute cluster, saving you time and money as you move from pilot to scale.

Spark is written in Scala, but its Python, R, and Java wrappers make it easy for a wide range of users to run distributed jobs in their favorite language. These same people won’t need to compete for space while working independently: Spark can manage multiple, disparate workloads at the same time without paying for separate clusters.

Finally, Spark’s open source community and big tech backers have released hundreds of libraries to accelerate your development. Service providers like Databricks have made it trivially simple to launch, manage, and administrate Spark clusters, granting your team members the independence they crave in a non-local environment. Combined, these conveniences make Spark an easy choice over more flexible frameworks like Dask for most use cases.

### It’s fast (really fast) and scales well
Under the hood, Spark’s Catalyst optimizer converts user inputs into a directed acyclic graph (DAG) of transformations before distributing the optimized “job” across a network of computers (e.g., nodes) for in-memory processing. Visually, this process looks something like this:

!["Spark's workflow"](https://miro.medium.com/max/1935/1*UiLF8AFQppwenQJDEZ7XkQ.png)

If this concept seems confusing, don’t worry about it: Spark handles these optimizations on the back-end, enabling Spark to achieve benchmark speeds more than 100x faster than its predecessor without complicating the user experience for 90%+ of use cases. Should you ever need more memory or processing power, it’s easy to upgrade your existing nodes or add new nodes to your network.

### It’s flexible
Unlike other distributed architectures currently on the market, Spark is built to handle nearly any programming task you throw at it:

* Store your structured data in Resilient Distributed Datasets (RDDs) or Spark SQL's DataFrames for optimized querying
* Leverage Spark’s GraphX API to process and analyze graph databases
* Transform and clean your data using one of Spark’s many language APIs
* Build and deploy machine learning algorithms using MLlib
* Aggregate and analyze data streams using Spark Streaming

Other architectures may be more efficient at one or two of these tasks (e.g., Apache Storm for streaming; Flink for batch processing), but no other offering can own the end-to-end production pipeline quite like Spark.

### It has momentum
When you’re building something to last, you can’t spend time worrying whether your architecture will persist over the coming decade. Given the impressive list of companies currently using Spark, it’s fair to assume that Spark isn’t going away any time soon. Even if the Spark architecture were to disappear in favor of a competing framework, it’d be relatively easy to run your existing Python, R, or Scala code on a new back-end (the same cannot be said for SAS).

## Hidden challenges to working at scale
Spark is a powerful tool, but it hasn’t been as easy to adopt as my team and I initially expected. Though some differences simply required getting used to, three overarching challenges persist today:

### Heavy penalties for inefficient code
Avoiding terminations when working with terabytes of data requires an acute focus on code efficiency. When you’re playing with less than twenty million rows in Jupyter, you don’t have much to worry about; most cells will run instantly, and the worst thing you can do is kill your kernel and force a thirty-second reset. An out-of-memory failure on a Spark cluster is much more disruptive. One poorly-designed join can lead to a half-hour delay as you wait for your Spark cluster to auto-scale, die, and reset itself. To add injury to inconvenience, these resets can be extremely costly if your cluster doesn’t have the right guardrails in place.

Engineers tend to come equipped with this efficiency-focused mindset: we’re used to splitting problems into modular chunks and thinking critically about code before it’s submitted. Statisticians and analysts, on the other hand, tend to debug their code only after they’re thrown an error or exception. These groups struggle with Spark because it forces them to preempt potential issues in a way they aren’t used to. Failing to spot minor cues (such as an unnecessary user-defined function or unintended .collect() method) often equates to massive delays for anyone using the cluster.

### Limited libraries and communal support
Most Python and R users (myself included) have been spoiled by the collaborative communities supporting these languages. We’re used to Googling for libraries to solve our problems and, when none exist, we can usually hack together a solution with a quick visit to Stack Overflow or Medium. When we need to look at docs, we expect to find clean, concise prose that’s been tailored to a non-technical audience over decades of development. We’ll rarely encounter an issue that hasn’t already been solved and written-up by someone else.

These communal crutches don’t yet exist for Spark. There isn’t always a high-level abstraction to solve any given problem, and the quantity and quality of bug support you’ll receive online is much weaker than in Python or R. Spark’s docs are helpful if you know how to read them, but they’re clearly written for computer scientists; statisticians and less-technical practitioners won’t be self-sufficient until they learn a few CS basics.

### Inexpressive language APIs
Initially, our team loved the idea of moving data seamlessly between Python, R, and Scala. After a few weeks in the trenches, however, this feature felt more like a crutch than an enhancement. The problem is that PySpark and SparkR don’t yet stand on their own: while you can Google around for Spark-equivalents to your most-used functions in pandas or dplyr, many of the intuitive methods that make these libraries magical haven’t made their way into Spark. You can write band-aids in Scala while you wait for these APIs to be updated, but doing so adds time, complexity, and technical debt to your build.

Here's an actual documentation snippet I found to bring this point home:
```python
%python

# not currently available in python but bet it's coming...
# will remove if not.

# from pyspark.ml.tuning import TrainValidationSplitModel

# model = TrainValidationSplitModel
# model.transform(test)
```

## “Yes, it will”
Despite these challenges, Spark is an excellent means of closing the gap between pilot and scale. It offers a comprehensive solution to a major pain point in the development lifecycle, and the issues mentioned above will fade over time as Spark and its language APIs mature. The back-end may change, GPUs may become the new norm, but the community behind distributed computing will only grow as engineering teams are pushed towards compute clusters by ever-increasing data volumes. New developers lead to new development and before long, we’ll have an entirely different frontier of issues to write about."