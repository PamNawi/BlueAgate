---
tags:
  - ArtificialIntelligence
  - GameDevelopment
  - AIGameDev
  - GameProgrammingGems2
  - GameAIPRO
  - PaulTozour
---
> "An influence map is a spatial representation of an AI agent's knowledge about the world ... The structure of the influence map also makes it possible to make intelligent inferences about the characteristics of different locations in the environment. Influence maps can pick out areas of high strategic control, pinpoint weak spots in an opponents defenses identify prime 'camping' locations or strategically vulnerable areas, find choke points on the terrain, and identify other meaningful features that human players would choose through intuition or practice.
>  There's no single, standard algorithm for creating influence maps, nor a single way to apply the technique. ... The way you construct and employ the influence maps will depend heavily on the specific strategic and tactical needs for your particular game and the design of the game world that your AI agents inhabit" 
> 	 - Tozour in Game Programming Gems.

I love how Tozour open his gem speaking that an influence map is nothing more than data. Its just that, what the agent, how the agent will extract this information and decide how they will be using is a very different problem. That's something that Dave Mark also reinforce in [Modular Tactial Influence Maps](https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter30_Modular_Tactical_Influence_Maps.pdf) making very clear by his first paragraphs is that an influence map only provides information that can be used for other systems for decision making. They can be shared among agents, which is something that Steve Sabin recommends on [[Strategies for Optimizing AI]] on his article. 

> "The influence map doesn’t actually provide instruction—it only provides information that is used by the decision making structures of the agents. One particular advantage to using influence maps is that they can represent information that all characters could potentially have knowledge of. By calculating and storing this information once for all characters, it prevents the expensive and possibly redundant calculation of information by each individual agent."
> 	- Dave Mark in GameAIPro 2 - Chapter 30

# Simple Influence Map
The most simple way of creating an influence map is making a 2D grid dividing the space into sections and assign values to the cells. The values of the cells can represent a wide variety of concepts such as “strength,” “danger,” “value,” or anything else that can be measured. Typically, a value has a locus that the “influence” radiates out from. 

The example given by Tozour is by positioning two insects (he assumes that the combat effectiveness of all units are1) and two cars in a board and then propagate their influence to the neighboring cells. Something similar on what is done by some image processing algorithms.

![[Pasted image 20260812175250.png]]

![[Pasted image 20260812175643.png]]

From the grid is possible to see where the map "belongs" to the insects and where they "belongs" to the cars, making easy to define their frontiers.

# Influence Map Cell Data
One suggestion from Tozour is to treat each cell inside the grid as a repository for some amount of data about the game world, almost like a small database for all units and resources that occupy it. Some suggestions made by Tozour are:
- **Combat Strength :** The estimated combat effectiveness of the units currently in the cell.
- **Vulnerable Assets :** This is an estimate of the value of a player's current assets in the cell, such a part of a village or a military base in a typical strategy game.
- **Area Visibility :** The number indicating how long the area has been visible or insivisible to the player
- **Body Count :** Indicates how many units have died in the cell in the past. 
- **Resources :** The total resources still available for exploitation (gold, lumber...)
- **Passability :** An estimate of the difficulty of moving through the cell, possibly broken down by movement type (flying, walking, tracked...). This obviously connects with any Pathfinding algorithm that can be employed.

Its possible to combine all those values and create a single one called "desirability value" and then compare desirability of different cells, allowing us to select the best cell for the selected task. Tozour sugest a simple weighted sum, which is a common tool inside the [[Utility Theory]]. Some of the possible desirable values.

> "Rather than dealing with the n² problem of calculating multiple distance vectors between agents, we can look at the influence map and determine where the combined influence is. Now we can ask group-based questions such as 'what could _they_ hit?' or 'where is it crowded?'
> Additionally, the questions needed by game agents are often not "where is this," but rather "where is this not." The questions now become:
> - Where can they _not_ hit?
> - Where can I _not_ be reached in the next few seconds?
> - Where will I _not_ be too close to people?"
> 	- Dave Mark in GameAIPro 2 - Chapter 30
# Determining Optimal Cell Size:
The size of the influence map cells is always a trade-off between accuracy and efficiency. If the cells are too large, the influence map will loose some details, but if the cells are too small, it will requires more cycles to complete the pass. 

Tozour recommends that we make the cells large enough to fit between 10 - 20 of the game standard "units" side by side and then start to fine tune from there.

# Influence Propagation
After the initial value for each cell inside the influence map is calculated, is common to propagate the value of each cell to to the nearby cells in a process very similar to the techniques used for smoothing or blurring for 2D image processing.

> "Influence propagation gives us a much more accurate picture of the current tactical situation. We don't care only where the units are what they're doing; we care about what they might do- what areas they potentially "influence". ..."
> "Propagation is just a matter of spreading the influence of each cell to neighboring cells using a "falloff rule" that determines how the influence of a given cell decreases with distance as it spreads across the map. The selection of a particular falloff rule is subjective and there is no single accepted technique - as always, you will need to tweak and tune for optimal results. I typically find exponential falloff the most useful: pick a falloff constant between 0 and 1 (typically 0.6 < n < 0.8), and each time you spread influence to a neighboring cell, us this constant as multiplier. Given a falloff constant of 0.75 (=75%), a neighboring cell will have 0.75 = 75% of the original value. A cell two squares away will have (0.75)² ~0.56 = 56% of the original value, a cell three squares away will have (0.75)³ ~0.42 = 42%, and so on. The fall off constant should be proportional to the cell size: smaller influence map cells require a larger falloff value to spread the influence the same distance"
> 	 - Tozour in Game Programming Gems.

From Dave Mark article we can see how the influence radiate out from the location of a single agent:
![[Pasted image 20260814212541.png]]


On his article Dave suggest the following formula to defines:
> "For each cell, the influence is determined by using the distance from the agent to the center of that cell, passed through a response curve that defines the propagation decay of the distance. For example, the formula for linear propagation of influence is shown in the following equation:
> ![[Pasted image 20260814213250.png]]
> "Note that influence propagation does not have to be a linear formula. In fact, different types of influence propagation might be better represented by other response curves. Another common type is an inverse polynomial defined by a formula similar to the one shown in the following equation:
> ![[Pasted image 20260814220043.png]]
	- Dave Mark in GameAIPro 2 - Chapter 30


![[Pasted image 20260814220113.png]]

# Accounting for Terrain
On this section Tozour explains that if we don't add data about the terrain in the grid, our agents will be capturing false data from the influence map. The example he gives is the following:

![[Pasted image 20260813113330.png]]

From the grid is possible to precompute all possible paths between nearby neighbors. The is idea is that for each cell, we can use a pathfinding to determine which are the shortest path from that cell to all the neighbor cells up to maximum path distance.

![[Pasted image 20260813113537.png]]

This is hard to apply in dynamic environments. If the game world allows the players to build extended walls or to block passes, the precomputed propagation values will no longer reflect the reality, making it difficult to update the influence map in real time.

# Special Considerations
Its important to consider that how an agent traverse the map alters his influence map. A flying unit can cross/stay above the water, so the influence map should contemplate this possibility. The influence map need to track different unit types separately depending on how they can act in the map. A ranged class should have a higher range of influence than a meele and so.

Tozour also recomends adding dead reckoning to very mobile units, or even simply look at the future position of an unit when they are performing a pathfinding (cheat your way).

# Refreshing the influence map
Tozour suggest that we refresh the influence map not as frequently as would be expected for a game, something 1 - 10 seconds, he argues that on a typical strategy game, a faster refresh rate wouldn't have a more effective AI.

Another approach would be creating a demand-based refreshing, a sort of lazy evaluation technique. This is a more flexible and is more efficient when is needed to perform less extensive influence maps analysis.

> "With this variant, you compute the values in a given cell only when the cell is actually queried, searching all the neighboring cells within a given maximum distance to see how their values propagate back to the original cell. This technique has the added advantage that you can specify the propagation parameters and desirability value coefficients at query time"
	- Dave Mark in GameAIPro 2 - Chapter 30

# References:
- Tozour, P. 2001. Influence mapping. In Game Programming Gems 2, ed. M. DeLoura, pp. 287–297. Charles River Media, Hingham, MA.
- Mark, D. . Modular Tactical Influence Maps. In GameAIPRO 2, Chapter 30.
- Woodcock S., Wyrks W.. Recognizing Strategic Dispositions : Engaging the Enemy. In AI Game Programming Wisdom, pp 221-232

