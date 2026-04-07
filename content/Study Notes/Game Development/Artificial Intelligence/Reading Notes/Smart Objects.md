---
tags:
  - ArtificialIntelligence
  - SmartAgents
  - SmartObjects
  - AdvancedAI
  - Affordances
---
_“What we did was make the people really dumb and make the environment and objects really smart. […] basically the fridge yells at the player, ‘I can satisfy hunger five!’ and the chair says, ‘But I’m all about comfort four!’ and the bath says, ‘Hygiene seven right here!’”_

On the "Project X" also known as "Project Dollhouse" that eventually became The Sims, 
Will Wright created a prototype of what would became the Smart Objects Pattern that is used to simulate the intelligence of the characters, called sims, on that game. At some point [Don Hopkins](https://donhopkins.com) gathered some of the printed code, scanned, cleaned  and made available to be read with some of [other documents on his site](https://donhopkins.com/home/TheSimsDesignDocuments/) 

The main piece that many will reference is this piece of the original code made by Will Wright: [The Soul of The Sims](https://donhopkins.com/home/TheSimsDesignDocuments/TheSoulOfTheSims.pdf)

The main idea here is that the agents themselves didn't have a very complex behavior. They had necessities that had to be fulfilled and the objects placed on the environments that hold the functions. Basically the sims are dumb, while the objects are the smart ones. This pattern was originally proposed for The Sims, but many other usages where can be applied, one example is to help an agent to find the nearest cover using markers.

This make possible to expand the AI behavior by adjusting/adding/subtracting objects on an environment without the necessity of altering the main code for the agents themselves, which was one of the reasons that The Sims is still popular.

❗ Note how this is so connected with various concepts of oriented object programming. Since naturally all the important aspects will be focused on the objects themselves. That's why I'm calling this a pattern for AI, not many authors will do it.

❗ Seems that Will Wright was inspired by an architect called [Christopher Alexander](https://en.wikipedia.org/wiki/Christopher_Alexander) who are cited by many Computer Scientists by having some mathematical concepts and orientation similar to [Edsger W. Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) which known for his algorithm for pathfinding. This made me notice that a good implementation of this pattern will be naturally following the [SOLID principles](https://en.wikipedia.org/wiki/SOLID) implementation of it.

# Things to keep in mind when using this pattern:
On [Making The Sims the sims : How we make objects and sims behaviors in The Sims 2](https://web.archive.org/web/20260128082255/https://users.cs.northwestern.edu/~forbus/c95-gd/lectures/The_Sims_Under_the_Hood_files/v3_document.htm) Jake Simpson, who was the lead simulator engineer on The Sims 2 he give some important definitions that are presented as following:
- _An object is a collection of data, that has an executable thread within it that when placed in a lot will run code by default."_
- _"Contains localized String lists, executable scripts, common definition meta data, animation lists, routing information, advertising information, interaction definitions,- may also contain model information."_ 
- _"Some objects are physical – cars, toilets etc., some are not – objects that handle visitors arriving on the lot, the weather, time of day, social objects etc."_
- _"Object usage – placed on lot, game engine automatically runs initialization scripts on it, and then will run one ‘main’ script every frame."_
- _"All objects have ‘advertising’ data in them, imported from an Excel spreadsheet – data specific to Sims motives. This allows the in code decision maker to decide what object any given sim might want to use next autonomously, given it’s current motive values, distance from object, sim age etc."_
- _"All data necessary for game usage is contained within an object – excepting outside assets such as models, textures, animations and sounds (objects were designed to have this included, but too much duplication of generic data)."_

On [Under the hood of The Sims](https://web.archive.org/web/20260128082255/https://users.cs.northwestern.edu/~forbus/c95-gd/lectures/The_Sims_Under_the_Hood_files/v3_document.htm) is presented the following structure of what kind of information an Smart Object should hold as for the sims themselves. The [Edith](https://modthesims.info/showthread.php?t=685286) mentioned on that slide is the [software](https://archive.org/details/edith-internal-release) that was built to help the creation of new objects on the game.

![[Pasted image 20260406194604.png]]
![[Pasted image 20260406201123.png]]

# "Find Best Action" Primitive
On the [Chapter 21 of the Game Design Document from The Sims](https://donhopkins.com/home/TheSimsDesignDocuments/Ch21-Happy.pdf) you can see how a primitive called "Find Best Action" that will find the most productive interaction a sim can run at any given moment. Its a Utility based algorithm that will take a look at the available interactions on the environment and score each based on their "advertisement values" and "contribution functions" as well their distance.

### For each object
On the macro level, the primitive is looking at objects. As each object is considered, it is culled based on the following criteria: 
• The person calling the primitive is not considered. TBD: reflexive interactions will probably be a part of game play, but are not currently designed as such. 
• Objects with the “occupied” flag set are not considered. This flag is set voluntarily by object interactions that can only be run by one person at a time. The flag is also set for objects being placed. 
• Objects with a non-zero “use count” field are skipped. This value is voluntarily set by interaction trees when exiting, and is decremented automatically by the simulator each tick. It is essentially an optional, cheap way to help keep objects from getting crowded. 
• Objects without a tree table are skipped. 
TBD: the initial use count could be a per-interaction tuning value. 
TBD: objects may also be culled by type, when “effector” types are implemented. (see person chapter). 
TBD: A subset of objects may be chosen in order to optimize. That is, only a certain subset of objects will be analyzed each time the primitive is called. This may be designed such that the subset is random, and all objects are eventually picked after a number of calls proportional to the number of objects. Or it could be simply sequential, with a contiguous fraction being considered each time.

![[Pasted image 20260406201110.png]]
![[Pasted image 20260406201150.png]]
![[Pasted image 20260406201203.png]]

![[Pasted image 20260407000934.png]]


**Objects should be self-contained:** The objects should store all the information's about themselves. Owning all of their variables like:
	Localized string lists, executable scripts, common definition meta data, animation lists, routing information, advertising information, interaction definitions, model information.”

A one-stop resource for any information relating to objects is very useful to have both during development and at runtime. It makes the whole game much more modular, which explains how easy it is for EA to build expansion packs!

**Use Micro-Threads For Objects:** Because there are so many objects collaborating together to form the gameplay, it's important to make sure they all get a share of computation time if necessary. In "The Sims", this is done using cooperative scheduling. 

Each object has its own micro-thread for execution which gets updated each frame if necessary. The scripting language supports features to help these threads cooperate with the game engine, for example a yield instruction to wait for the path-finder, animation system or even a timer.

**Automate Handling of Objects:** Because there are so many objects and they are usable modularly, the game engine must handle them automatically without any special instructions. When a new object is inserted into the game:
1. The initialization function of the object is executed.
2. Each frame, the object’s main update function is called.    

This differs from the majority of games where objects either contain no logic, or the functionality is implemented centrally in the engine. The advantage of this approach is that extending the game requires fewer changes to the engine (if any).

**Use Objects Uniformly Everywhere:** With an object model as powerful as the one in _The Sims_, it makes sense to use it extensively throughout the game. And indeed, objects are used practically everywhere. They fall into two categories:

- **Physical** — Cars, chairs, electronics, gadgets, toys, toilets, etc.
- **Abstract** — Objects to handle visitors arriving on the lot, change the weather, track time of day, etc.
The only requirement for an “object” is that it conforms to the common API, so its code is executed every frame.

**Add Advertising Data to Objects:** Each object has a public interface that broadcasts its functionality to actors in the game. This is called advertising data in _The Sims_, and contains a list of possible actions and what motives they satisfy. For example:
- Using the **toilet** satisfies the bladder and **increases comfort**.
- **Cleaning** the toilet **improves the atmosphere** in the room.
This information is used by the decision-making code (discussed below) to pick the next object an actor uses autonomously.

**Store Assets Separately:** Despite objects being self-contained, certain assets are stored separately when necessary. Specifically, this prevents duplication of animation data, textures, or models. The references to these assets are still contained in the object itself, but they are saved in a common location.

**Use an Excel Sheet to Store Properties Centrally:** This is another exception to the objects being self-contained, but it makes things more convenient. When tweaking the game, whether in the final stages before shipping or during prototyping, it’s convenient to have a complete overview of the game in one place.

In _The Sims_, a large Excel sheet is used to store the properties of the objects. When the game is built, the information is copied over to each object individually, but the values can be adjusted centrally without having to search for each object.
# Responsibility
Select what agents can use this object. Only cleaners are allowed to water the plants and guards are the only ones allowed to use the weapon locker. More then one dimension of this can be added and one useful one is to tag by area. A guard that founds the player acting strange and follow him across the street should not pick up a guard position at the wrong building. He should only look for GuardIdle objects in the area he is responsible for.

# Ownership
Who owns the object and has the right to use it. If a police officer goes to the water fountain he would not be happy if another agent have stolen his table when he gets back. This ownership often need to include a set of objects. He can own the chair, the phone on the table and the file cabinet.

# Dependency
Smart objects can be chained be setting suggestions for objects to be used after the current one. For example a BathRoomIdle suggest a WashHandsIdle.

# Priority
Some objects are better then other. When the guard is thinking about taking cover behind the metal filing cabinet and the weak wooden table he should pick the more solid one. Each objects can be given a priority.

# Expected State
The current state of the object can be retrieved and that way agents can remember changes to it. A guard can notice a open door or a light left on.

**Reference**

https://archive.org/details/rethinkingsmarto0000rasm/page/n7/mode/2up

https://gamephilosophy.org/wp-content/uploads/confmanuscripts/pcg2012/Tirrell%202012%20-Dumb-People-Smart-Objects-The-Sims-and-the-Distributed-Self.pdf

https://ixdf.org/literature/topics/affordances

https://gdcvault.com/browse?keyword=the+sims

https://iuliu-cosmin-oniscu.medium.com/exploration-and-risk-zones-4d7db73b096b

https://www.gamedevpensieve.com/ai/ai_knowledge/ai_knowledge_smart-objects

https://web.archive.org/web/20150808020833/http://www.donhopkins.com/home/images/Sims/

https://web.archive.org/web/20190401215457/http://aigamedev.com/open/review/the-sims-ai/

https://dn721602.ca.archive.org/0/items/pg-simpson-scripting-and-sims-2/PG_Simpson_ScriptingAndSims2.pdf

https://dn721602.ca.archive.org/0/items/pg-simpson-scripting-and-sims-2/PG_Simpson_ScriptingAndSims2.pdf

https://www.gdcvault.com/play/1020311/Scripting-and-Sims2-Coding-the

https://www.youtube.com/watch?v=F46pwztA_UY
https://gdcvault.com/play/1012450/Modeling-Individual-Personalities-in-The

https://archive.org/details/gdc-2001-those-darned-sims-what-makes-them-tick

https://www.youtube.com/watch?v=9gf2MT-IOsg

