---
title: Books We Love
date: 2019-08-08
image: https://miro.medium.com/max/2245/1*CgZiEhAyh_sepRNEpUqwJA.jpeg
description: "The top ~20 most impactful books we've read on data and computer science."
image_alt_text: Silvia Yang via Unsplash
---
 
Taking the plunge into data science can be a daunting task: with so many excellent (and, unfortunately, superfluous) resources available on the web, it can be difficult to know where to spend your valuable time. After struggling down this same path and gathering recommendations from dozens of practitioners in the field, I’ve synthesized my favorite resources in this post in hopes of paying it forward.

> "When you’ve written the same code 3 times, write a function. When you’ve given the same in-person advice 3 times, write a blog post." <br/> David Robinson (@drob) <a href="https://twitter.com/drob/status/928447584712253440?ref_src=twsrc%5Etfw">

## Why textbooks?

There are many great ways to learn programming and machine learning, and [one method isn’t necessarily better than all the rest](https://twitter.com/adammgrant/status/868082524018413568?lang=en). After much trial and error, I’ve found textbook content to have a significantly higher learning-to-time-spent ratio than other mediums for a few key reasons:

* **Textbook authors are generally professors with deeper knowledge and stronger incentives** than the typical MOOC producer or blogger

* **Taking notes while you read requires continuous focus; **it’s far too easy to tune-out when sitting in a classroom or watching an online tutorial

* **A wealth of amazing textbooks are available for free on the web**, as are interesting datasets with which you can apply your learnings

In order for this learning process to be effective, I’d highly recommend that you apply your readings to a real-world challenge or Kaggle dataset immediately after finishing each book. This final step will ensure that you’ve mentally digested what you’ve read and give you a codebase to work off of should you need to revisit the book in the future. [Here’s a recent example](http://htmlpreview.github.io/?https://github.com/ntlind/store_forcasting/blob/master/main.html) that I wrote after reading *Forecasting: Principles & Practice *(see my review below).

## Starting Your Journey

![](https://cdn-images-1.medium.com/max/2000/1*bpvFw5ZqaFjd0bLGREOMDQ.png)

If you’re new to the field, the links below should be all you need to reach an intermediate level of proficiency. Each book builds on the last, so I’d recommend going through them in listed order.

### [Introduction to Statistical Learning in R (ISLR)](https://www-bcf.usc.edu/~gareth/ISL/)

*Gareth James, Daniela Witten, Trevor Hastie and Robert Tibshirani*

This is the classic introduction to machine learning, with plenty of easy-to-follow visualizations and R code to get you up and running. I can’t recommend this book enough: it’s easily the most digestible textbook I’ve read on either statistics or programming. Start here!

### [R for Data Science](http://r4ds.had.co.nz/)

*Garrett Grolemund, Hadley Wickham*

An excellent resource for those who want to understand data wrangling and visualization in R, [two skills which will easily occupy 60%](https://www.forbes.com/sites/gilpress/2016/03/23/data-preparation-most-time-consuming-least-enjoyable-data-science-task-survey-says/#3014395f6f63) of your working time. After you take a dip into R while learning statistics via ISLR, this site will help you bring your basic programming skills up to speed.

### [Hands-On with Scikit-Learn & TensorFlow](https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1491962291)

*Aurélien Géron*

Undoubtedly the most useful textbook I’ve read on machine learning in Python. Chapter 1, organized as a high-level FAQ on various ML topics, was a particularly strong overview of a number of different niches. You can find it on [Amazon](https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1491962291), but I’d recommend asking your school or employer if they offer free access through [O’Reilly’s media site](https://www.oreilly.com/online-learning/index.html).

### [Machine Learning](https://www.coursera.org/learn/machine-learning)

*Andrew Ng*

The classic MOOC from the master himself. This course taught me that I prefer reading books to watching MOOCs, but Andrew’s engaging teaching style and deep level of expertise makes this series a must-watch. This class is taught in MATLAB, so you’ll want to learn programming basics before giving it a try. If you want to put your new-found skills to the test, try each assignment in Python and compare to your answers in MATLAB.

## Growing Into Your Niche

![](https://cdn-images-1.medium.com/max/2000/1*ICDcIqDobSZ3cfHdj6oiJQ.png)

After you learn the basics via the resources above, you’ll want to let your personal interests and use cases point you to the next step in your learning journey. Listed below are a few of my favorite deep-dives, organized by subject area.

### AI: [Artificial Intelligence: A Modern Approach](http://aima.cs.berkeley.edu/)

*Stuart Russell, Peter Norvig*

Written by Stanford and Google heavyweights, this tome is a comprehensive, well-written guide on the building blocks of ML and, most interestingly, reinforcement learning. At over 1,000 pages, this book is one that I’d skim selectively rather than consume wholly.

### Bayesian Methods: [Bayesian Data Analysis](https://www.amazon.com/Bayesian-Analysis-Chapman-Statistical-Science/dp/1439840954)

*Andrew Gelman*

A massive reference on all things Bayes with accompanying code in R. Understanding Bayesian inference will complement the frequentist perspective that you developed in the ‘Getting Started’ section of this list. Again, this book is more of a skim-worthy title than one that is made for cover-to-cover reading. For a quick overview of Bayesian statistics, [our friends at Analytics Vidhya have you covered](https://www.analyticsvidhya.com/blog/2016/06/bayesian-statistics-beginners-simple-english/).

### Causal Inference: [Mostly Harmless Econometrics](https://www.mostlyharmlesseconometrics.com/)

*Joshua D. Angrist, Jörn-Steffen Pischke*

In this accessible guide to modern causal inference modeling, Angrist and Pischke explore how regression can be a invaluable tool for understanding causal relationships. Other topics of interest include matching, propensity scoring, and fixed-effect modeling. This book is much easier to understand than Gelman and Hill’s tome in my “Advanced Reading” list, but they pair well together and cover similar topics at different levels of granularity.

### Data Science in Python: [Introduction to Machine Learning](http://shop.oreilly.com/product/0636920030515.do)

*Sarah Guido, Andreas Müller*

The authors cover everything from basic unsupervised methods to natural language processing in Python. Consider this the Python-equivalent of ISLR with more of a focus on intermediate users. This read also comes free with an O’Reilly subscription.

### Deep Learning: [Deep Learning](http://www.deeplearningbook.org/)

*Ian Goodfellow, Yoshua Bengio, Aaron Courville*

Our list wouldn’t be complete without the technical bible of deep learning, covering everything from perceptrons to convolutional neural networks. This tome is “the only comprehensive book on the subject” according to Elon Musk and, unlike the other massive reference titles on this list, I’d recommend reading it from cover-to-cover.

### Generalized Additive Models: [Statistical Learning from a Regression Perspective](https://www.springer.com/gp/book/9780387775005)

*Richard Berk*

The most thorough textbook I’ve read on generalized additive models and regressional analysis. Extremely useful overview of GAMs and their interpretability, with a great deal of R code to smoothen the learning process. Professor Berk also covers more modern predictive techniques (e.g., boosting), but his thoughtful approach to inference modeling is what makes this book a must-read.

### On Programming Well: [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)

*Robert C. Martin*

Though this book was originally written for software engineers, it’s equally important for data scientists to read and understand. If you aspire to write production-ready code, this book offers a number of high-level suggestions to guide your thinking.

### RNNs: [Deep Time Series Forecasting](https://www.amazon.com/Deep-Time-Forecasting-Python-Introduction/dp/1540809080)

*N.D. Lewis*

The author begins with a high-level overview of neural networks before diving into LSTMs and GRUs. This book provides a useful, high-level introduction to these nets, but the accompanying Keras code is a few generations old and, frankly, isn’t very useful.

### Time-Series Analysis: [Forecasting: Principles and Practice](https://otexts.org/fpp2/)

*Rob J Hyndman, George Athanasopoulos*

Great read on time series forecasting in R, with helpful code and visuals to explain the end-to-end modeling process. If you need a little motivation to dive into this text, Hyndman’s R library, *forecast, *was recently used to [win the high-value Walmart competition ](https://github.com/davidthaler/Walmart_competition_code)on Kaggle.

### Understanding “Black-Box” Models: [Interpretive Machine Learning](https://christophm.github.io/interpretable-ml-book/)

*Christoph Molnar*

Christoph does an excellent job at capturing visualization best practices for everything from linear regression to XGBoost. His guide is short, practical, and engaging, and I’ve added Shapley values, PDPs, and ICE plots to my normal workflow as a direct result of his e-book.

## Advanced Reading

![](https://cdn-images-1.medium.com/max/2000/1*vX4jy0TWA300SlYi-6t1OA.png)

If you can read, understand, and apply your learnings from the books listed above, then you may enjoy a few of my more recent favorites. **These recommendations are *extremely *technical**; if you’re looking for pages filled with math notation and code samples, then you’re in the right place.

### Advanced Regressions: [Data Analysis Using Regression and Multilevel/Hierarchical Models](https://www.amazon.com/Analysis-Regression-Multilevel-Hierarchical-Models/dp/052168689X)

*Andrew Gelman, Jennifer Hill*

I’d never paid multilevel regression much thought until I read Richard McElreath say “multilevel models deserve to be the default mode of regression.” After reading this text, I finally understand why we almost always prefer to run a multilevel model (linear, logistic, generalized, etc.) to an ordinary regression. This text is extremely thorough and offers hands-on examples in both R (frequentist) and Buds (Bayesian), but is probably 150 pages longer than necessary.

### Bayesian Statistics: [Statistical Rethinking](https://xcelab.net/rm/statistical-rethinking/)

*Richard McElreath*

If you’re excited to learn about Bayesian statistics but haven’t quite found the right guide, this extremely well-written textbook should be at the top of your reading list. The author begins with a thorough overview of Bayesian statistics before sharing several techniques to help improve your causal inference game.

### Functional Programming: [Functional Programming in Scala](https://www.amazon.com/Functional-Programming-Scala-Paul-Chiusano/dp/1617290653)

*Paul Chiusano, Rúnar Bjarnason*

This book combines functional programming best practices with an engaging introduction to Scala, a general-purpose programming language that forms the backbone of [Apache Spark](https://spark.apache.org/).

### Programming in Python: [Fluent Python](https://www.amazon.com/Fluent-Python-Concise-Effective-Programming/dp/1491946008)

*Luciano Ramalho*

This book took my Python skills to the next level. Consider this a must-read if you spend a significant amount of time in Python, though most of Ramalho’s suggestions won’t generalize well to other programming languages.

## Wrapping-Up

One of my favorite things about this field is how quickly it’s evolving. No matter how much we read, there will always be more for us to digest and learn. After you make it through this list, you’ll finally be ready for the best part: poring over research papers on arXiv. Exciting times ahead!

![](https://cdn-images-1.medium.com/max/2000/1*ZLGbwNUGE5ogyTOEILd_LA.gif)

*Originally posted on [Medium](https://towardsdatascience.com/beyond-the-mooc-a-bookworms-guide-to-data-science-e87271cb0572).*