---
tags:
  - GameDevelopment
  - AIGameDev
  - ArtificialIntelligence
  - SteveRabin
  - GameProgrammingGems2
---
# Strategies for Optimizing AI
(Steve Rabin, Nintendo of America)
- **Use Event-Driven Behavior Rather than Polling:** Autonomous agents will often monitor the world so they can react to it, this can cause that every frame those agents will poll the world for the events, creating a enormous amount of redundant computation. So instead of using individual polling, its better to have event-driven techniques whenever is possible

- **Reduce Redundant Calculations:** The goal of this strategy is to reduce the redundant calculations by sharing the results between several AI agents so many cycles can be saved. 

- **Centralize Cooperation with Managers:** Agents often need to cooperate with other agents, this is much faster and simpler done by a manager entity making the complex decisions. These complex decisions usually determine each member's role, while the agent is left to autonomously execute the role. It's important to remember that with this strategy, managers don't need to be represented on-screen. 
*"Usually these managers are just fictious entities that organize the complex cooperation among AI agents. You can even imagine transient managers that dynamically form around groups of monsters that have banded together. If that group then divides or combines with another group, each newly formed group can be assigned its own manager. With these monster managers, individual monsters can be coordinated so that optimal targets are chosen and everyone doesn't mob the same enemy."*

- **Run the AI Less Often:** Its not uncommon that the player's experience will not suffer if the agents don't do their decision making routines every frame, real life creatures have reaction times, so is not unreasonable for AI agents to have less than lightning reflexes. Using an agent architecture that supports arbitrary timer callbacks is a great way to implement this strategy. If an agent can easily set a timer and be notified when it expires, flexible systems can be built that are easily tunable. A problem that might arise is that AI could cause processing peaks. 
_"This would occur if a majority of the agents became synchronous with their callback executions, simultaneously executing every TV seconds or so. The simple solution is to randomize the window of processing for each agent. For exemple, an agent might execute his invader-detection code every 0.3 to 0.5 seconds, randomly picking a new delay within that window after each callback. This random window of execution virtually guarantees that agents won't become synchronous with each other, accidentally causing a processing peak"_

- **Distribute the Processing over Several Frames:** Some algorithms are very expensive, but depending of the pacing of the game, its possible for an agent to spread the calculations over several frames, by saving the results from each frame and resuming it on the next one. This results in a lower per-frame processing load. Any algorithm that can take an unspecified amount of time can be broken up in this manner.

- **Employ Level-of-Detail AI:** There's some strategies that a programmer might employ depending on the game they are implementing. One could vary the processing frequency of an agent by how close it is to the camera, player or action. The second is to vary the complexity of an agent's algorithm depending of their relevance, like removing precise pathfinding if the agent is offscreen. The third is to represent multiple agents in a single simulation algorithm as their individual importance decreases to the player. The sims 3 did that with all the sims that where not on the land where the player was playing.

- **Solve Only Part of the Problem:** If given a large problem, sometimes its suffices to solve only part of it right away and let the rest of the solution be computed in the future when its actually needed. Sometimes, the environment might change enough so that the rest of the evaluation if irrelevant and was needed to be computed

... There's more points on this articles, but I will take the following list from his conclusion as I expand this on the future:

1. Use event-driven behavior rather than polling. 
2. Reduce redundant calculations. 
3. Centralize cooperation with managers.
4. Run the AI less often.
5. Distribute the processing over several frames. 
6. Employ level-of-detail AI. 
7. Solve only part of the problem. 
8. Do the hard work offline. 
9. Use emergent behavior to avoid scripting. 
10. Amortize query costs with continuous bookkeeping. 
11. Rethink the problem.
