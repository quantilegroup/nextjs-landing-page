---
title: Minimizing WTFs Per Minute
image: /images/backgrounds/bg7.jpg
date: 2020-05-08
description: "5 tips for writing clean, concise code"
image_alt_text: Robert C. Martin via Unsplash
featured: 1
---

Many data scientists I've worked with spend hours fretting over their modeling pipelines, but won't spend more than 30 minute rethinking and refactoring code they've already written. I held a similar mindset up until a year ago, when a friendly software engineer recommended that I read [Robert C. Martin's *Clean Code*](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882). Robert's guide opened my eyes to how much easier life becomes when your team adopts a few hygienic principles: it's amazing what we can accomplish when we're not stumbling over someone else's arcane code. Utilitarian benefits aside, there's something profoundly beautiful about well-written code:

> "**Clean code always looks like it was written by someone who cares**. There is nothing obvious that you can do to make it better. All of those things were thought about by the code’s author, and if you try to imagine improvements, you’re led back to where you are, sitting in appreciation of the code someone left for you—code left by someone who cares deeply about the craft." <br/><br/>  - Michael Feathers in *Clean Code* 

Though *Clean Code* is full of useful wisdom, here are my top five takeaways from this engineering classic.

![Cartoon depiction of a code review](https://miro.medium.com/max/500/0*6QOl0jlhpfp_ufy1.jpg)

## All variable names should be descriptive and meaningful 

One of the most important aspects of writing good code is following a consistent, well-conceived naming convention. 
Descriptive, meaningful names make your code read like a well-written essay and eliminate the need for excessive commenting. Robert sums it up well: 
	
> "**The name of a variable, function, or class, should answer all the big questions**. It should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent."<br/><br/>  - Robert C. Martin 

It's common to write short, meaningless names like "df" when you're hacking a solution together, but it's important to replace non-descript names to help future readers understand your thought process and search your code for specific steps. Writing relatively long object names should be encouraged if doing so improves readability; it's easy to tab-through longer names using most common IDEs. 

[Google's style guide](https://google.github.io/styleguide/pyguide.html#Naming) offers additional tips and guidelines for standardizing your team's naming conventions.


## Comments are a crutch and should only be used as a last resort

> "Nothing can clutter up a module more than frivolous dogmatic comments. **Nothing can be quite so damaging as an old crufty comment that propagates lies and misinformation**" <br/><br/>  - Robert C. Martin

Before reading Martin's chapter on commenting, I'd never considered how unnecessary and wasteful the average code comment is for both the writer and the reader. Martin believes that all comments are failures; they suggest that you haven’t found a way to express yourself using code. Consider the following example: 

```python
# Import point-of-sale data
df = read_csv(import_path)

# Group dataframe by SKU and get count of products
df1 = df.group_by("SKU").count().show()
```

Now consider what happens when we eliminate the superfluous comments and use proper object names to convey our intent:

```python
raw_sales_data = read_csv(import_path)

SKU_count_in_raw_sales_data = raw_pos_df.group_by("SKU").count().show()
```

The second example is cleaner, takes up less lines, and is easier to read, a win-win for both the developer and reader. Next time you're about to write a comment, ask yourself: can I refactor my code or change an object name to clearly express what I’d want to convey in a comment?


## Wrap your code in nice, tight functions

It's common for data scientists to write loose code in their global environment, but there are several reasons why it's important to package your individual code snippets into functions. First, writing succinct functions makes your code easier to both read and test. Even when we're faced with hideous code and undecipherable naming conventions, we can infer some aspects of the author's intent by examining the way they've logically grouped their code into functions.

Second, wrapping your code in a function makes it easier to follow the traceback all the way to the problem source when a piece of your program breaks. The number of open source libraries we use in data science practically guarantees that our code will stop working every so often; it's important that we make the debugging process as fast as possible.   

Finally, wrapping interim steps in a function means that you don't have to waste precious RAM on storing interim tables. If you don't need it later, simply don't return it in your function call. 

## All functions should be small, do only one thing, and contain no more than 3 parameters maximum 

Wrapping loose code into functions is a great start, but all functions aren't created equal: some are significantly easier to read than others. Robert offers a few actionable tips to help you write better functions:

**Functions should be as small as possible**. If you have a function longer than 5 lines, it's probably doing too much; you can likely split it up until multiple functions.

**Functions should do only one thing**. Functions are easiest to read and understand when they only perform one specific action. If you need to perform multiple actions on a dataframe (e.g., grouping, transforming, and filtering), you should develop a separate function for each step rather than try to combine all three actions into a single function. Splitting the actions into separate functions will make your program significantly easier to debug when something inevitably breaks.

**Functions shouldn't copy logic from other functions**: I see this one a lot: a well-meaning analyst will copy a pre-existing function but add one minor deviation to accomplish their specific goal. The problem? If we ever discover a bug in the function they copied, we'll have to remember to fix the bug in their extension as well. To avoid having to copy-and-paste hotfixes between different functions, write one function that performs the common functionality between the two versions before calling that function in smaller, separate functions so that each individual can accomplish their end goal.

## Files should be maintained on Git (no exceptions)

It's not uncommon for data science teams to share small files back and forth via Slack or email, but this *always* causes problems at some point in the pipeline. "One-time analyses" quickly spiral out of control due to duplicative work and versioning control issues, leading to wasted effort and frustration all around. 

Robert doesn't mention Git in his book, but Git is tailor-made to solve this particular problem: by automatically flagging overwrites and backing-up each commit for safe keeping, your team can easily merge or revert commits to keep everyone working from the same source. Git is also helpful as a management tool, enabling the repository owner to control access rights and granting each team member visibility into everyone else's contributions.

The easiest way to leverage Git in your data science team is via [GitHub](https://www.github.com ) or [GitLab](https://www.gitlab.com).


## Conclusion

There's a reason why [*Clean Code*](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) is an engineering staple; Robert offers hundreds of useful tips to make your life (and the lives of the people you work with) significantly easier. Whenever new people join my team, I ask them to read chapters 1-5 & 17 before they start contributing: Robert's lessons are just that important. If you write code or work with those who do, give this book a read; you won't be disappointed.