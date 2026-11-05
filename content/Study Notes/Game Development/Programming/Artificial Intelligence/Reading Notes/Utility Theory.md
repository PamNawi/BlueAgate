---
tags:
  - UtilityAI
  - ArtificialIntelligence
  - AIGameDev
  - GameDesign
draft: "true"
---
Utility theory is a concept that is been around long before games or even computers. The core idea behind the utility theory is that every possible action or state within a given model can be described with a single, uniform value. This value, usually referred to as utility, describes the usefulness of that action within the given context. 

Notice that utility is not the same as value. Value is measurable quantity, while utility measures how much we desire something. This can change based on personality or context of the situation. 

When calculating utility scores, it's important to be consistent. Because utility scores are compared to each other to come up with a final decision, they must all be on the same scale across the entire system. Therefore, using normalized score's provide a reasonable starting point. Normalized scores combine very easily through averaging, can be easily calculated given any value within a set range of numbers, and are easily comparable since they are on the same scale. It's important to note that any value range will work, as long there's consistency across the different variables. If an AI agent scores an action with a value of 15, you should know immediately what that means in context of the whole system. 

The key to decision making using utility-based AI is to calculate a utility score for every action the AI agent can take and then choose the action with the highest score. Of course, most game worlds are nondeterministic so calculating the exact utility is not usually possible. It's hard to know if an action will be preferable if you can't determine the results of performing that action. This is the heart of the utility theory and where it is most useful. The most common technique is to multiply the utility score by the probability of each possible outcome and sum these weighted scores. This will give you the expected utility of the action:

![[Pasted image 20260801204730.png]]

In this case, D is the desire for that outcome, and P is the probability that outcome will occur. This probability is normalized so that the sum of all the probabilities is 1. This is applied to every possible action that can be chosen, and the action with the highest expected utility is chosen. This is called the principle of maximum expected utility.

Calculating the initial utility for a decision factor is highly subjective; two different programmers will write two different utility functions that produce different outputs, even given the same inputs. The key to utility theory is to understand the relationship between the input and the output, and being able to describe that resulting curve [Mark 09]. This can be thought of as a conversion process, where you are converting one or more values from the game to utility. Coming up with the proper function is really more art than science and is usually where you’ll spend most of your time. There are a huge number of different formulas you could use to generate reasonable utility curves, but a few of them crop up often enough that they warrant some discussion.

Once the utility has been calculated for each action, the next step is to choose one of those actions. There are a number of ways you can do this. The simplest is to just choose the highest scoring option. For some games, this may be exactly what you want. A chess AI should definitely choose the highest scoring move. A strategy game might do the same. For some games (like The Sims), choosing the absolute best action can feel very robotic due to the likelihood that the action will always be selected in that situation. Another solution is to use the utility scores as weight, and randomly choose one of the actions based on the weights. This can be accomplished by dividing each score with the sum of all scores to get the percentage chance that the action will be chosen. Then you generate a random number and select the action that number corresponds to. This tends to have the opposite problem, however. Your AI agents will behave reasonably well most of the time, but every now and then, they’ll choose something utterly stupid.

You can get the best of both worlds by taking a subset of the highest scoring actions and choosing one of those with a weighted random. This can either be a tuned value, such as choosing from among the top five scoring actions, or it can be percentile based where you take the highest score and also consider things that scored within, say, 10% of it.