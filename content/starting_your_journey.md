---
title: Learning Data Science
date: 2019-09-16
description: "Answering that age-old question of 'What should I learn first?'"
image: https://images.unsplash.com/photo-1519125038816-609c7e525b26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80
image_alt_text: Image via Unsplash
---

A client recently posed the following questions:

>  I've been exposed to pieces of data / analytics / technology throughout my career, but don’t have much formal training. I don't necessarily want to become a data scientist, but I'd like to learn advanced analytics and AI so that I can spot an opportunity when one presents itself. If I had to narrow down all of my questions to just the top three... 
> - What languages should I learn first?
> - What fundamental concepts should I study?
> - What other resources should I wade through to be able to work with technical teams and build / test solutions?

## What languages should I learn first?

Learning a programming language is an important first step on your journey: the only way to absorb the conceptual building blocks of data science is to play with real data. That said, the specific language that you choose to learn first isn't really that important. There are a few reasons why this is true:

- You can learn and apply 99% of data transformation techniques in any language you choose after learning the techniques themselves
- Once you learn the core concepts in one language, it's relatively easy to learn and apply those same ideas in other languages
- Different (products / clients / teams / etc.) will expect you to conform to the tools they use; data people are expected to be tool agnostic

The only thing that really matters is that you pick one and dive in. With that said, I'd recommend that you start with SQL and Python before diversifying into other, more niche languages like Scala. Let's walk-through why we care about SQL and Python in particular:

### **SQL**

#### Example Code 

```sql
SELECT NAME, AGE, SCHOOL 
INTO new_table
FROM school_roster
WHERE NAME == "PAUL"
ORDER BY AGE DESC
```
#### Advantages
- SQL reads most like English and was designed to be easy for lay people to pick up
- SQL is used all over the world, so there's a high probability you'll be able to use it in the future
- SQL is integrated into nearly every language; you can easily write SQL statements into more advanced languages like Scala and Python
- There is a ton of great learning content available on the internet to get you started

#### Drawbacks
- SQL isn't a 'real' programming language; it can only be used for querying databases and won't translate to other use cases (scraping websites, building mobile apps, etc.)
- SQL is more verbose than other languages; it's easy to read but painful to write, and doesn't translate well when you want to learn other languages
- SQL can handle data transformation tasks with ease, but it isn't expressive enough to handle more complicated tasks like advanced visualizations or machine learning

#### Starting Resources
- [Free tutorial](https://sqlzoo.net/)
- [MOOC](https://www.datacamp.com/courses/intro-to-sql-for-data-science?tap_a=5644-dce66f&tap_s=384177-0102f2)

### **Python**


#### Example Code

```python
new_table = school_roster.loc[school_roster["NAME"] == PAUL, 
                              ["NAME", "AGE", "SCHOOL"]] \ 
                         .sort_values("AGE")

```

#### Advantages
- Python code is very concise; once you learn how to express your ideas in Python, you'll find writing SQL to be a chore
- Python integrates well with nearly every other language and, through its extensive library of open source packages, you'll find that you can do almost anything in Python
- Python is an object-oriented language, so learning Python will make it easier for you to understand other, more advanced development languages like JavaScript and Scala
- Python is viewed as the standard language for data science, and many new packages / tools are only available in Python
- There is a ton of great learning content available on the internet to get you started

#### Drawbacks
- Python can be complicated and confusing to new practitioners; there are a lot of advanced functionalities that seem alien when you're first starting out
- Python code can be very inefficient when poorly written; it's a lot easier to write bad Python code than it is to write bad SQL code

#### Starting Resources
- [Free tutorial](https://automatetheboringstuff.com/)
- [MOOC](https://www.datacamp.com/courses/intro-to-python-for-data-science)
- [Additional recommendations](https://github.com/learnbyexample/scripting_course/blob/master/Python_curated_resources.md)

### Why not R?

R was created by academics, for academics, which means it's a bit easier for a non-CS person to grasp than Python. That said, I regret choosing R as my first language for a few reasons:
- 90%+ of R tutorials use poorly-written code because CS best practices are not well-known in the R community (e.g., very few people are properly using arrays or mapping lambda functions in R vs. writing complicated for loops). You'll end up learning bad habits that you'll have to break if you want anything you write to scale in production.
- R reads and writes very differently from object-oriented languages, which means you'll have a harder time picking-up additional languages if all you know is R. Choosing Python will give you a headstart should you ever need to branch out.
-  R felt easier to read and write at first, but much worse after I learned what I was doing in Python; Python's syntax feels cleaner and considerably more consistant than R's syntax (note: syntax preferances may be a matter of taste, but I've heard similar statements from other engineers that I've met over the years).

The R vs. Python debate will continue to rage for years to come, but it doesn't really matter which one you choose; learning either will make you wish you'd transititioned off of Excel sooner.


## What fundamental concepts should I study?

Machine learning gets all the glory, but data cleaning, exploration, transformation, and preprocessing account for 80%+ of the value in any ML pipeline: without understanding and trusting your data, you can't hope to unlock anything useful at the tail-end of your pipeline. To that end, here are the first five concepts I'd start with (in prioritized order):

- [**Linear algebra**](https://www.coursera.org/learn/linear-algebra-machine-learning): Linear algebra is what makes R and Python so much more efficient than Excel. Understanding what vectors, matrices, and arrays are, how they're coded, and why they're useful is vital to doing anything real in R / Python.
- [**Visualization techniques**](https://codewords.recurse.com/issues/six/telling-stories-with-data-using-the-grammar-of-graphics): Knowing how to build visualizations in Python will make it much easier to identify patterns and issues during data exploration.
- [**Foundational statistics**](https://lagunita.stanford.edu/courses/HumanitiesScience/StatLearning/Winter2014/about): If you don't understand the "why" vs. just the "how", you'll have a hard time knowing whether that 'insight' you just found is real or not.
- [**Database basics**](https://lagunita.stanford.edu/courses/DB/2014/SelfPaced/about): Understanding database design will make it significantly easier for you to explore and understand other peoples' data architectures.
- [**Hierarchical regression**](http://www.stat.columbia.edu/~gelman/arm/): After you have a firm grasp on all of the above, becoming an expert in linear and logistic regression will serve you well in your journey to understand ML. 
 
## What other resources should I wade through to be able to work with technical teams and build / test solutions?

There are thousands of books, articles, and MOOCs that would fit the bill here, but the best advice I can give you is to shift out of 'reading mode' and into 'doing mode'. Build that next PowerPoint visualization in Python and Tableau instead of Excel. Query your own data using SQL. Find someone in your company or community that's building something interesting and help them with it. If you don't have any real-world problems to solve, try your hand at a [Kaggle competition](https://www.kaggle.com/) or walk-through a [book exercise](](https://ntlind.github.io/posts/bookworms-guide-to-data-science/)). You'll soon find that there's no better way to learn this stuff than by solving problems through persistent Googling, and you'll earn the respect of your technical counterparts by doing so.