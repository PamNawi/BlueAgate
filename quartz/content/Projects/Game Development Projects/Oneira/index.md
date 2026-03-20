---
title: Oneira
aliases:
  - Dreamwalker
  - Oneira
tags:
  - Oneira
  - Unreal
  - LevelDesign
private: "true"
---

![[Pasted image 20250624193931.png]]

I started to work late 2024 on [Oneira](https://dreammatterlabs.com/ "https://dreammatterlabs.com/") which is a 3D puzzle platform game. I was invited to work as a level designer on this team, but I got on difficult spot to help the team since my computer broke so I started doing some blockage using some fake lego. You can check our developing on our [discord server](https://discord.gg/XAYvJhkkqE)

<div style="width: 100%; max-width: 560px; margin-bottom: 10px; background-color: #000; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
  <video controls style="width: 100%; height: 315px; display: block;">
    <source src="https://video.fastly.steamstatic.com/store_trailers/257150605/movie480_vp9.webm?t=1750760865" type="video/webm">
    Seu navegador não suporta a reprodução de vídeos no formato WebM.
  </video>
</div>

<div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
  <a href="https://store.steampowered.com/app/3521080/ONEiRA/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png" style="height: 40px;">
  </a>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Unreal_Engine_Logo.svg/512px-Unreal_Engine_Logo.svg.png" style="height: 40px;">
  <img src="https://git-scm.com/images/logos/1color-orange-lightbg@2x.png" style="height: 40px;">
</div>

# Stage 1: Mushroom Forest

<iframe src="https://shroom.ink/guard.html/?site=Mushroom Forest&shroom=2" height="250px" width="200px" scrolling="no" frameborder="0"></iframe>

The first stage on the game is called the Mushroom Forest and is centered around a dream made by a man called Edmund a 30-something years old. The description provided by the narrative team around the mushroom forest is:

_"The Forest is one of the newer additions to AR's dream roster. Sporting large mushrooms, strange plants and creatures, and complex architecture built by its inhabitants, this world is aimed at clients looking for a more calm, meditative experience in and around nature. At its core stands the village, a meeting of two peoples circling a large tower. However, peace was broken once the two factions of inhabitants - one aligned with the Temple of the Mother, and one with the Temple of the Father - began feuding. The Host was quickly pulled offline and isolated to avoid harming clients, and the Dreamwalker has been sent in to deal with the matter."_

## Gameplay elements present on this stage

On this stage it is presented each of the mushrooms powers that the player will use as the game progress. All the original mushrooms effects, except for the bounce mushroom and water walking, would loose effect when the player touch water:

- _Reality Mushroom:_ When the player gets the reality mushroom he can see hidden platforms and other objects. It is introduced on the Temple of Father Area.

![[Pasted image 20250826154027.png]]

- _Bounce Mushroom (Abandoned):_ A mushroom that when a player step on it, make him jump with a spring like motion. It was introduced on the Trench Area.
![[Pasted image 20250826154414.png]]

- _Water Walking Mushroom:_ A player having this power could touch water without losing the others effects and could walk and jump on water. It is introduced on the Bath house.
![[Pasted image 20250826155426.png]]

- _Gravity Mushroom: (Abandoned)_ A mushroom that when the player jumped, he could get much more higher and had a very slow fall. It was originally introduced inside the mushroom stem, inside the old version of the village.
![[Pasted image 20250826154924.png]]

- _Gravity Pad:_  It is still in development, but the idea is to have a pad where the gravity is inverted. The player can walk on celling if placed on a floor or if is put on a wall, the player will be pushed away from it. The visuals are still on development, so no screenshot about it, at this moment. It will be introduced on the new version of The Trench.

## Back in my days...

The following image is a top-down view of the old version:
![[Pasted image 20250826163806.png]]

The areas present on this screen shot (The colors are relative to which power was introduced at the said time):
- Pink = Temple of Father
- Violet = Green room
- Yellow = The Trench
- Blue = Bath house
- Green = Village
- Red = Temple of Mother (Exterior)

This stage is being completely remade now that we have more people working on the project, the final version delivered for the players still on development.
For more details on the areas that I worked directly you see the progress and the versions for each area that I worked:

- [[Temple of Father - Old Version]]
- [[The Trench - Old Version]]
- [[The Village - Old Version]]
- [[The Village - New Version]]
- [[Temple of Mother (Exterior Area) - New Version]]
- [[Temple of Mother (Interior Area) - New Version]]

### Why did you guys are remaking the Mushroom Forest?
There's a lot of reasons on why we are remaking it completely, but I will try to enumerate it:
- Performance was too low. The majority of the team couldn't enter the game to play direct from engine
- Narrative was thrown out of the window, because we didn't have a visual timeline of events so the environment wasn't being planned around it.
- The powers where being polished while the level design was being made. This made me and others level designers to re-iterate on the same area a couple of times.
- The overall visual weren't consistent inside the level. On Oneira, each level will have their own visuals still they need to be consistent inside the game. We had a Cambodian temple assets beside a Japanese Bath house...
- Some areas felt very complicated to make some transitions or wasn't well defined.
- The player could see too far, making us to think a lot on how to conduct the player from up to bottom areas and top to bottom.
- The light was a beast that nobody was taming. Some areas where too bright others too dark, depending of the player configuration it was impossible to play on some areas.
- The team was missing the feeling of the old mushroom forest... It drifted too far from the game jam version.

When our team of programmers got on vacation, well...

<iframe width="560" height="315" src="https://www.youtube.com/embed/dE7DCF_s7HQ?si=qCMHvKO32sloqm9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### How it is being made this rework?
We have a couple of fronts while re-doing this level from the ground. We have the level design front that I'm conducting and we have the art team taking decisions on the art, this is being conduct by Bella.

What were the steps I made during this level design rework? First, I panicked. Kidding. Not so much. I took a deep breath and got all the information that was scattered around multiples platforms and tried to unify on the same one creating a timeline on Miro. This timeline is important to separate the narrative on chunks, helping me to visualize what are the areas the need to be created a good example is the village that has three major areas, a main quest and some side quests. Each post it is a encounter, the red ones are the obligatory ones, while the yellow ones are the optional ones. All of these are defined by narrative.

![[Patchwork 1.jpg]]
Bellow the narrative section, a simple beat analysis is made, just so we can more or less know what is being expected for the area it self. This beat analysis is being made as we progress inside the areas on the stage.

After this big timeline of events and segmentation of the stage was made. I called the narrative department to present the timeline and we started to talk about some Points of interest and did some... AMAZING sketches that clearly can be understood by anyone out of context. Notice the map inside the box present on this first sketch

![[Pasted image 20250826174155.png]]

I like my team members, I like them enough to make a new draw inside Miro to clean the visuals of the map presented above. This version of the map I started to think on how the water should shape the terrain, since water is a major theme inside this map it was important to start to think around the geography that the level would be following. 

![[Pasted image 20250826174256.png]]

Note that at this moment I wasn't worried about the proportions of the objects or areas, it was more an exploration trying to think how the areas will be divided, my entire focus was to understand some of the geography around each area, where the water would be falling, how the waterfalls could be positioned on the map. 

I didn't entered on Unreal until the next map version. The next map version is made inside Unreal and was focused on defining some important views that we had before. Still out of proportion, but I wanted to understand more about the shapes and the terrain that we would build. Notice that we are not using the terrain tool on Unreal yet. I literally got a stone on the project, some cubes and faith. Called the team to talk around it before moving to the next steps.

There was some major points that made be sure that it was the right path:
- The map was constructed based on the highest point of the map: The Bath house top
- We couldn't see the Temple of Father (ToF) from the Village, neither the other way around.
- The Bath house couldn't be seen anymore from the Village bottom area.
- The Trench had space to grew if necessary and it was not straight anymore, making much more easy to add puzzles in the area.
- The transition from the village to the Temple of Mother (ToM) was very straight forward, I didn't need to make a player come from the top of a mushroom to a deep trench, so it was less work for the team since we don't need to have a cut-scene there.
- Except for the Bath House exterior, all the other areas had space to growth without interfering with other areas. This is important, we will have all our four level designers working at some point on this map. Having the tranquility of knowing that we don't interfere on each other work is just nice.

![[Pasted image 20250826180633.png]]

On the next step, another level designer create a brand new map, where he set the illumination and set the bath house on the center, and the owner of the Bath house start to bring their stuff into this new map with the art team. Meanwhile, I started to make some areas being more proportional with what we would actually have inside the map.  I knew the size of the Temple of Mother entrance from the other map, so I started to make everything proportional based on it.
At the same time the art team already started to talk with the level design team around the architecture that was going to be used on each area. 

![[Pasted image 20250826192411.png]]

![[Pasted image 20250826192433.png]]

![[Pasted image 20250826192657.png]]


![[Pasted image 20250826192242.png]]

After this point, each area owner could get back into their areas and start to work. I started to work on the new version of the Village with the concept art team as I worked on the frame view from the exterior of the Temple of Father to the Bath house and Village and the Bath house exterior. I played a little of Monster Hunter: World to understand how they built their maps with so much richness and specially, because we wanted to create a fungi forest with more texture and size difference. At some point during this whole process I started to take the [[Study Notes/Art & Design/Reading Notes/Courses/Especialização em Arte Conceitual - Design Criativo de Personagens/index|Design de Concept Art e World Building]] course which helped me a lot to talk with the concept artists of the team.

At this point I took sometime to observe the possible spaces that could be used to create nice vistas:
![[Pasted image 20250826185337.png]]

![[Pasted image 20251121164336.png]]

Observe that at this moment we still had a lot of models to convey our divisions inside the terrain. At some point of the development we switched to use [Gaea](https://quadspinner.com) combined with the terrain tool from Unreal. Meanwhile our team was divided, so we could work in parallel in more areas than just the inside of the Bath-House. My computer was screaming at me every time I had to move a mountain here. Each icon is to indicate where each member is working at the moment.

![[Pasted image 20251121164600.png]]
