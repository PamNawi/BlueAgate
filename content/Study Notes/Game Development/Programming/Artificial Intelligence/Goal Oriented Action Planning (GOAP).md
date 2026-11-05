---
tags:
  - GoalOrientedActionPlanning
  - ArtificialIntelligence
  - SearchAlgorithmWithHeuristics
  - SearchMethods
  - JeffOrkin
  - Heuristics
  - AI
  - AIGameDev
  - GOAP
  - Dijsktra
---
When the game first-person shooter psychological horror game called [F.E.A.R](https://en.wikipedia.org/wiki/F.E.A.R.) was launch on 2005 it was also launched the first game to use Goal Oriented Action Planning (GOAP). It used a STRIPS-based architecture that allowed enemies more autonomy than simply reacting to the player. The enemies decided on a goal from a list of options and don't need to have to be programmed or planned on how to best reach certain goal.

_"With a planning system, we can just toss in goals and actions. We never have to manually specify the transitions between those behaviors. The AI figures out the dependencies themselves at run-time based on the goal state and the preconditions and effects of actions."_ - Jeff Orkin

On [Three States and a Plan: The AI of F.E.A.R.](https://www.gamedevs.org/uploads/three-states-plan-ai-of-fear.pdf) Jeff Orking presents how he used a very simple [[5. Tomada de Decisões#State Machines Máquina de Estados|Finate State Machine (Portuguese)]] with only 3 states and the [[7. Métodos de Busca com Heurística# Busca A* (A-Estrela / A-Star|A-Star Search (Portuguese))]].

The three states in the fsm are: `GoTo`, `Animate`, `UseSmartObject`. On the article Jeff Orkin say that the system implemented at Monolith is just a specialized data-driven version of the Animate state so instead of explicitly tell which animation to play, the animation was specified through a `SmartObject`. This distinction is important, because even today both GOAP and the SmartObjects patterns walk holding hands, the [[Smart Objects]] Pattern has another meaning on the original implementation. This simplified the FSM into becoming just two states: `GoTo` and `Animate`.

![[Pasted image 20260506160435.png]]

The example gave by Jeff makes a lot of sense considering this FSM:
_"An A.I. going for a cover is just moving to some position, and then playing a duck or lean animation. An A.I. attacking just loops a firing animation. Sure there are some implementation details; we assume the animation system has key frames, which may have embedded messages that tell the audio system to paly a footstep sound, or the weapon system to start and stop firing, but as far as the A.I. decision-making is concerned, he is just moving around or playing an animation"_ - Jeff Orkin

In fact, even moving is performed by playing an animation, and many various animations also move the character. This makes the only difference between `GoTo` to `Animate` is that `GoTo` is playing an animation while heading towards some _specific_ destination, while the `Animate` only plays the animation, which may have a side effect of moving the character to some position.
# Managing Complexity
The complex part of modeling a character behavior is to determine when to switch between those two states and what parameters need to be set. On F.E.A.R. they decided to move the logic into a planning system, rather than embedding it in the FSM, since the planning system will gives the A.I. the knowledge they need to be able to make their own decisions about when to transition from one state to another. This helps both programmers and designers by alleviating the burden that gets bigger with each generation of games, since the logic from transition don't need to be written directly inside the code or created on a external tool.

The growing complexity of the growing FSMs was pointed out by many A.I. specialists for shooters by the 2000's that where trying to find solutions to this growing complexity. On Halo 2 they proposed a solution for this problem by using [[1. Behavior Tree Basic Concepts|Behavior Trees]] .

# FSM vs Planning
_"An FSM tells an A.I. how to behave in every situation. A planning system tells the A.I. what his goals and actions are, and let's the A.I. decide how to sequence actions to satisfy goals. FSMs are procedural, while planning is declarative."_

Planning is a formalized process of searching for a sequence of actions to satisfy a goal. The planning process is called plan formulation. The planning system that was implemented for F.E.A.R. resembles the [STRIPS](https://en.wikipedia.org/wiki/Stanford_Research_Institute_Problem_Solver) planning system from the academia.

# Case Study: Applying Planning to F.E.A.R.
_"The designer's job is to create interesting spaces for combat, packed with opportunities for the A.I. to exploit. ... Designers are not responsible for scripting the behavior of individuals, other than for story elements. This means that the A.I. needs to autonomously use the environment to satisfy their goals."_

This transpose to the designer needing to set the goals inside the level editor (WorldEdit) and for the A.I. using the planner to satisfy the highest priority goal of that set. Inside their database editor (GDBEdit) they create Goal Sets for each area as a Set of Actions for each A.I.

The example they gave is for a GoalSet named `GDC06` which contain two smaller goals: `Patrol` and `KillEnemy`. The `KillEnemy` have a higher priority than `Patrol`. When `GDC06` is gave to an soldier he would start to patrolling the area and when he see a player, he would start to fire his weapon. If an assassin was given the same `GDC06` goal, he would behave completely different, since the assassin runs cloaked through the warehouse, jumps up and sticks to the wall, only coming down when the player is spot. He then would jumps down from the wall and lunges at the player, swinging his fists, since he is a melee enemy.

The last example gave is a rat that would receive the same `GDC06` goal, he would be patrolling the ground as the soldier, but since he has a different Action Set he would not be able to attack the player. The soldier's action set include actions for firing weapons, while the assassin's action set has lunges and melee attacks. The rat has no means of attacking at all, so he fails to formulate any plan to satisfy the `KillEnemy` goal and he falls back to the lower priority `Patrol` goal.

![[Pasted image 20260506173817.png]]

This example is good since its shows the major benefits of using a planning system over other techniques:
- **Decouple the goals and actions and allow to different types of characters to satisfy goals in different ways**
- **Facilitate simple behaviors to produce complex observable behaviors**
- **Empowering characters with dynamic problem solving abilities:** He mentions the creation of a working memory for each agent who would be holding the failed actions to fulfill a goal.

_"The third benefit of a planning system is the dynamic problem solving ability that re-planning gives the A.I. Imagine a scenario where we have a patrolling A.I. who walks through a door, sees the player, and starts firing. If we run this scenario again, but this time the player physically holds the door shut with his body, we will see the A.I. try to open the door and fail. He then re-plans and decides to kick the door. When this fails, he re-plans again and decides to dive through the window and ends up close enough to use a melee attack!"_

_"This dynamic behavior arises out of re-planning while taking into account knowledge gained through previous failures. In our previous discussion of decoupling goals and actions, we saw how knowledge can be centralized in shared working memory. As the A.I. discovers obstacles that invalidate his plan, such as the blocked door, he can record this knowledge in working memory, and take it into consideration when re-planning to find alternative solutions to the KillEnemy goal"_

# Differences between F.E.A.R and STRIPS
There's some several modifications made so the planner would be more efficient and controllable comparing with the original algorithm
- Added cost per action,
- Eliminated Add and Delete Lists for Effect
- Added procedural Preconditions and Effects

### Cost per Action
They added a cost per action this allowed to use the A* algorithm to search for a plan. The idea is that the A* can be used to search for the shortest path through any graph of nodes connects by edges. In case of navigation is intuitive to think about the navigational mesh polygons as nodes, in case of planning the nodes are states of the world and we are searching to find a path to the goal state. The edges connecting different states of the world are actions that lead the state of the world change from one to another.

## No Add/Delete Lists
They eliminated the ADD and Delete Lists when specifying effects of actions. They choose to represent the effects and preconditions with a fixed-size array representing the world state, making more trivial to find the action that will have an effect that will satisfy the goal or the precondition.

For example the `Attack` action has a precondition that the weapon is loaded, and the `Reload` action has the effect that the weapon is loaded when its done. So is easier to see the chain of actions. The world states consists of an array of four-byte values. Here a few examples of the type of variables they stored:
- `Target Dead [bool]`
- `Weapon Loaded [bool]`
- `OnVehicleType [enum]`
- `AtNode [HANDLE] - [variable*]`

The two versions of `AtNode` indicate that some variables may have a constant or a variable value. A variable value is a point to the value in the parent goal or action's precondition world state array. For instance, the `GoTo` action can satisfy the `Cover` goal, allowing the A.I. to arrive at the desired cover node. The `Cover` goal specifies which node to `GoTo` in the array of representing the goal world state.

## Procedural Conditions
Its not practical to represent everything is necessary to know about the entire game world all the time, even with the fixed-sized array of variables.

_"For F.E.A.R. an action is a C++ class that has the preconditions both represented as an array of world state variables, and as a function that can do additional filtering. An A.I. trying to escape danger will run away if he can find a path to safety, or hunker down in place if he can’t find anywhere to go. The run away action is preferable, but can only be used if the CheckProceduralPreconditions() function return true after searching for a safe path through the NavMesh. It would be impractical to always keep track of whether an escape path exists in our world state, because pathfinding is expensive. The procedural precondition function allows us to do checks like this on-demand only when necessary."_

## Procedural Effects
_"We don’t want to simply directly apply the effects that we’ve represented as world state variables, because that would indicate that changes are instantaneous. In reality it takes some amount of time to move to a destination, or eliminate a threat. This is where the planning system connects to the FSM. When we execute our plan, we sequentially activate our actions, which in turn set the current state, and any associated parameters."_

```
class Action { 
// Symbolic preconditions and effects, 
// represented as arrays of variables. 
WORLD_STATE m_Preconditions; 
WORLD_STATE m_Effects; 
// Procedural preconditions and effects. 
bool CheckProceduralPreconditions(); 
void ActivateAction(); 
};
```