---
title: Predicting Demand in a Crisis
image: https://cdn-images-1.medium.com/max/750/0*EI4HNOGOIANBgu-e
date: 2020-03-30
description: "Making better demand planning decisions in a world of uncertainty"
image_alt_text: Fikri Rasyid via Unsplash
---

Given the fragile state of our global supply chain, predicting what to make, ship, and stock is more important today than in recent memory. Ensuring that consumers are able to find the products they need in their local grocery stores is exceedingly difficult given the shift in purchasing behavior we've seen over the past three weeks:
- The COVID-19 lockdown has drastically changed all aspects of our lives, including what, how, where, when, and why we shop
- We're entering a recession after more than a decade of sustained growth
- Many people are making purchase decisions out of fear rather than need

With their supply chains back in the spotlight, many businesses are struggling to understand why their demand planning processes aren't working and what they can do to fix them. Here's my perspective after talking with others about this issue.

## In the short-term, forecasting should take the back-seat 
Consumer demand is fundamentally different in the lockdown world: historical data and modeling infrastructure built on that data are no longer representative of the world we live in today. Certain product categories will feel the effect of this shift more than others, but we can assume that most product-store observations before February 2020 are biased. Many have asked whether other crisis events might be representative of our current situation (e.g., hurricanes or blizzards that kept people indoors for a week; early observations from China in December/January), but there are too many differences between these events and today's sustained, global lockdown for us to believe that's the case. 

Unfortunately, that leaves us with a very small set of representative data samples on which to draw from. Ensemble models (e.g., XGBoost) are likely to underfit given such a small sample size, while time-series models (e.g., ARIMA) will overfit given the extreme sales variance that retailers have observed over the past two weeks. What can be done in such a situation?
Given how few observations we have and how fast the situation is evolving, we shouldn't expect to reliably forecast the future in the short-term. The cultural and economic challenges posed by this pandemic are only beginning: any point estimates we develop now will be wildly inaccurate. Even if we did get lucky during the modeling phase, we don't have enough observations to reliably measure our out-of-sample errors. Until we have enough data to validate our forecasting approach, our time is better spent elsewhere.

## Making smart decisions in uncertainty
Given we can no longer generate accurate forecasts, the question becomes "How can we make better supply chain decisions in a world of uncertainty?".

First, we should emphasize that there is no 'correct' answer to many of the hard decisions we'll make over the coming weeks. "Perfect is the enemy of good" certainly applies in this situation: mitigating biases, keeping an open-mind, and staying nimble is more important than agonizing over the data at this stage. 

Second, we should purposefully adjust our mental models for demand planning. Historical data and stable forecasts should be discounted in favor of recency-weighted models, real-time analytics, and informed assumptions that have been validated at the executive level. The way we measure success will likely have to change to a) maintain availability of critical consumer products on shelves and b) avoid cash flow issues that could impact our core business. Choices like these require trade-offs, and embedded data science teams are in a great position to advise on the risks associated with each decision. 

Finally, we can build expert systems and ML infrastructure to alert us when we should reconsider our assumptions. Generative models like the Pareto/NBD and Pareto/GGG, in particular, can tell rich narratives behind seemingly-erratic purchase behavior. By visualizing their posterior distributions over time and watching as they shift and change shape, we can watch for switchpoints in demand and draw inferences about what's really happening in stores across America. These probabilistic models won't give us accurate point estimates, either, but that's alright: looking at probability distributions will help planners to bound their decisions with confidence. All models are wrong, but ours can still be useful.

As the lockdown lifts and our lives become more certain, we can improve our ensemble models with short-term Bayesian predictions, custom loss functions, and new coronavirus-related features. Until then, we'll get by making smart decisions that minimize our risk of ruin.