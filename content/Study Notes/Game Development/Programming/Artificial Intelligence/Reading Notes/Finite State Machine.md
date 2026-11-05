---
tags:
  - StateMachine
  - ArtificialIntelligence
  - GameDevelopment
  - FiniteStateMachine
  - TableDrivenAgent
---
# Definition:
🇧🇷 Você pode ler o inicio do texto original em português em [[5. Tomada de Decisões|Máquinas de Estado]]

A finite state machine can be defined by the following:
> 	_“A finite state machine is a device, or a model of a device, which has a finite number of states it can be in at any given time and can operate on input to either make transitions from one state to another or to cause an output or action to take place. A finite state machine can only be in one state at any moment in time”_ 
		_- Mat Buckland in “Programming Game AI by Example”_

From the definition presented some relevant information can be highlighted:
- A state machine has a fixed set of states that a machine can be in.
- The machine can only in one state at a time.
- A sequence of inputs or events is sent to the machine
- Each state has a set of transitions, each associated with an input and a pointing to a state. When an input comes in, if it matches a transition for the current state, the machines to the state that transition points to. This generates a graph where states are the nodes (vertices) and the transitions are the edges between the states.

The finite machine (FSM) are one of the first choices when the objective is to give the illusion of intelligence to an agent. The idea of a finite state machine is the decomposition of the behavior of an agent in states more simple. The utilization of the state machines bring a lot of advantages during the development of a game:
- They are easy and simple to code. There's many ways to program one and they are easy to debug. 
- Each state of the agent is isolated and break in smaller and simple parts, if the agents starts to have a unexpected behavior is easy to localize the source of the error. 
- They  don't require many resources to be implemented
- Are very intuitive, since humans thinks this way.
- Are flexible allowing both programmers and game designers to adjust it.

When creating a state machine is important to understand what is their exactly definition, so there's no mistake in its implementation even being a very simple concept:

> " A state is a description of status of a system that is waiting to execute a transition. A transition is a set of actions to be executed when a condition is fulfilled or when an event is received.
> ...
> In some finite-state machine representations, it is also possible to associate actions with a state:
> 	 - an entry action: performed when entering the state, and
> 	- an exit action: performed when exiting the state."
> 		_- Wikipedia_

The [wikipedia](https://en.wikipedia.org/wiki/Finite-state_machine) give as an example a turnstile used to control access to subways and amusement park rides. Initially the arms are locked, blocking the entry and preventing patrons from passing through. Depositing a coin or a token ins a slot of the turnstile unlocks the arms, allowing a single customer passes through, the arms are locked again until another coin is inserted.

![[Pasted image 20261027151119.png]]
A finite state machine is very easily draw using diagrams and there's many physical world examples that can be seem around, but Ernest Adams and Joris Dormans does a very important point: Every game can be interpreted as an state machine even is is just by a simple set of states: "being played", "player win", "player looses", "player quits". 

> "A game begins in an initial state, and the actions of the player (and the often the mechanics, too) bring about new states until an end state is reached. In the case of many single-player video games, the player either wins, loses or quits. The game's state usually reflects the player's location; the location of other players, allies, and enemies; and the current distribution of vital game resources. By looking at games as state machines, researchers can determine which rules cause the game to progress from one state to another. Several successful methods allow computer scientists to design, model, and implement state machines with a limited (finite) number of states...
>  Finite state machines sometimes used in practice to define the behavior of simple artificially intelligent non-player characters. Units in war game often have states such as attacking, defending, and patrolling." 
> 	_- Ernest Adams and Joris Dormans in "Game Mechanics : Advanced Game Design"_

This translate very well into any menu in a game from a very old until a the new ones.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q_otNc5kkMU?si=LooNGU2vXpq4xhGS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

![[Structure of Agents]]

# Table Driven Approach
Since state machines are graphs, we can construct them using a table driven approach like the following:

`function Table-Driven-Agent(percept) returns an action`
`persistent: percepts, a sequence, initially empty`
		  `table, a table of actions, indexed by percept sequences, initially fully specified`
`append percept to the end of percepts`
`action <- lookup (percepts, table)`
`return action`

Notice how this agent considers that exist a table that maps directly perceptions into actions being taken. This is not a very good approach, since its escalate badly. Considers P the set of perceptions possible and T the total life time of an agent A the table should contain:
![[Pasted image 20240502014022.png]]

The example given on the book is from autonomous taxis that uses only a camera as a sensor.

> "Consider the automated taxi: the visual input from a single camera comes in at the rate of roughly 27 megabytes per second (30 frames per second, 640×480 pixels with 24 bits of color information). This gives a lookup table with over 10250,000,000,000 entries for an hour’s driving. Even the lookup table for chess—a tiny, well-behaved fragment of the real world—would have at least 10150 entries. The daunting size of these tables (the number of atoms in the observable universe is less than 1080) means that (a) no physical agent in this universe will have the space to store the table, (b) the designer would not have time to create the table, (c) no agent could ever learn all the right table entries from its experience, and (d) even if the environment is simple enough to yield a feasible table size, the designer still has no guidance about how to fill in the table entries."
> _- Peter Norvig and Stuart Russell in Artificial Intelligence : A Modern Approach Third Edition_

Its the mostly easy solution to be implemented, yet computationally impossible in environments more complex:
- No agents would be capable of storing this big table
- No human would be capable of creating that many entries

Yet, the agent based on tables does what is desired, since it implements an agent function. On other view, this approach on games is impossible do be done, but we can implement in other way if we think in an Oriented Object approach where the basic state is an object.

# State Design Pattern
Since state machines are graphs we do have other ways to represent them. One way to represent is just using a simple switch case over a variable, but that can get messy very soon, specially when the conditionals needs more than one variable. The [State Pattern](https://en.wikipedia.org/wiki/State_pattern) was set to solve two main problems that arise when the state machine starts to grow:
- An object should change its behavior when its internal state changes
- State-specific behavior should be defined independently. That is, adding new states should not affect the behavior of existing states.

A solution found was encapsulating the state-specific behavior into separate states classes, allowing the object to manage state transitions cleanly. The UML diagram shown into the [wikipedia](https://en.wikipedia.org/wiki/State_pattern) article explain clearly on how inheritance and composition can be used to create this pattern.
![[Pasted image 20261027235939.png]]

> "The pattern is structured around components that separate state-specific behaviors from the main object:
> 	- **Context:** Maintains a reference to the current state, delegates behavior to it, and provides an interface for clients
> 	- **State Interface/Base Class:** Defines common methods for all states, allowing Context to work with them without knowing the concrete types
> 	- **Concrete States:** Implement the State Interface, encapsulating behavior for specific states and defining Context's actions in those states"
>  _- Geeks for Geeks_


> "The `Context` doesn't implement state-specific behaviors directly. Instead, `Context` refers to the `State` interface for performing state-specific behavior (`state.handle()`), which makes `Context` independent of how state specific behavior is implemented. The `ConcreteStateA` and `ConcreteStateB` classes implement the `State` interface, that is, implement (encapsulate) the state-specific behavior for each state.
> The `Context` object delegates state-specific behavior to different `State` objects. First, `Context` calls `handle(this)` on its current (initial) state object (`ConcreteStateA`), which performs the operation and calls `setState(ConcreteStateB)` on `Context` to change context's current state to `ConcreteStateB`. The next time, `Context` again calls `handle(this)` on its current state object (`ConcreteStateB`), which performs the operation and changes context's current state to `ConcreteStateA`."
> _- Wikipedia about the State Pattern Structure_

# On Unity
As a teacher on the past I had a major problem explaining that a State isn't a [MonoBehavior](https://docs.unity.com/en-us/engine/6000.6/script-reference/unityengine/monobehaviour) on Unity. The students would read the word 'behavior', and since each state should encapsulate a behavior, they always connected both. Specially after they learn that inside every state has an method similar to the Update.

An old tutorial that was made by Unity to explain what are the best practices on the engine for this work is the following:

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=KojNgBJGE-JmPWjk&amp;list=PLX2vGYjWbI0TzzLIMnLRHQq8q5SmZGB1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

On this tutorial they choose to create a state machine with [ScriptableObject](https://docs.unity.com/en-us/engine/6000.0/manual/scripting/get-started/fundamental-unity-types/class-scriptable-object) which is a serializable Unity type that was made to exists as assets inside the project, by holding data, independent of the `GameObjects`. Seems to be a very weird way to approach the problem of creating a state machine, only if you didn't think about state machines as being graphs! Its sad that is hard to see how the state machine is constructed since the editor will only show each individual states and what states they can transition to it, and I think that's why some plugins shine on the asset store.

From this tutorial we can create the following structure that would be enough for a small project with a big complexity even without a big editor. Notice this is not exactly UML standard, but will be a good enough diagram to explain:
![[Pasted image 20261028224333.png]]

The `AIBrain` is the actual implementation of the Agent concept that Peter Norvig and Stuart Russell present on their book and is responsible to keep the perceptions captured by the sensors updated on a struct called `EnvironmentView`.  We have a small collection of sensors composed by the `FieldOfView`, the `LightSensor` and the `SoundSensor`. Our actuators are the `Damageable` and the `NavMeshAgent`. The `AIBrain` is also responsible to call the `Update()` method on the actual `State` `ScriptableObject` using their `FixedUpdate()`.

The `State` inherits from `ScriptableObject` and just defines the interfaces that all the concrete objects should implement. The concrete states in the diagram are just suggestions and they can be as many as the game needs. The `AIBrain` will have the reference for the actual state and the concrete state itself should know the possible next states on the state machine. The state itself is responsible to check if the conditions are met, meaning that a transition should be happening, and then they should be calling the `OnEnter(EnvironmentView ev)` method on the next `State` and if everything is fine, they communicate the `AIBrain` that the new actual `State`and run their own `OnExit()`.

This is a very similar implementation to what we do when [represent a graph](https://www.geeksforgeeks.org/dsa/graph-and-its-representations/) that will used as data for a search algorithm like like the [[Busca A* (A-Estrela / A-Star) | A-Star]], or even the [[6. Métodos de Busca Cega | Blind Search algorithms]]. When we do that over the state machine to reach a desired goal, we can actually create a plan, meaning we can have [[Goal Oriented Action Planning (GOAP)]].