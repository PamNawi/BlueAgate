For the final assignment for the Game Urbanism Course I chose to revisit an older project that I did for the CGMA course ([[Week 05 - Assignment]] and [[Week 06 - Assignment]]) that I felt somewhat subpar on it fundamental structure. The original assignment was to do open world map where a lunar base was built to mine some kind of mineral and the the command bridge received  a distress signal from a unknown spacecraft. This time I chose to do this horizontal slice on Godot, because I'm spiteful towards both Unity and Unreal.

# The 11 Questions:
- Where is the city?
After some research on [Nasa-Explorer](https://nasa-explorer.earth/exoplanets) I learned the existence of a planet called Centauri b that has a suspicion that is habitable so I'm picking this planet.

![[Pasted image 20260322182605.png]]

I did some research too on some places where on earth that Amethyst is extracted and there's some city called "Ametista do Sul", literally South Amethyst in Portuguese. On this city they covered even the church with the stone. I used [this site](https://manticorp.github.io/unrealheightmap/index.html#latitude/-27.378169701137438/longitude/-53.1877326965332/zoom/12/outputzoom/15/width/2017/height/2017/outputformat/png16) to extract the height map of the region.

![[Pasted image 20260421220657.png]]

- When is the city?
Very far on the future, we should be having already some cities settled in deeper space. The important thing here is that I knew from the original assignment that I wanted this city to be able to move, since extraction leave the area bare of the resource. If we are space traveling this far, why we are staying when the resource we want is empty?

- Why was this city founded?
Mining the pretty crystal

- How Big is the city?  
Originally I wanted a very small villa, with around 50 people, but it was too small even considering that everything is automatized, so we expanded for 500 people. The area reserved was around 5km^2 and I didn't need expansion.

![[Pasted image 20260421232332.png]]

- Where do people Live and Work?
On the original project I took inspiration on the walking cities by Ron Herron and started with a big structure. Yet I didn't like to carve it on Unreal. 
![[Pasted image 20260322182450.png]]

So on the original assignment I already choose to split the big machine into smaller ones, each one with a specialization. Which emerged the gigantic problem that made my project feel impossible to finish with the expected quality: *there was no solution on transport between modules*.

<div class="carousel-container">
<section class="slider" id="week06"> 
<input id="week06-slide1" name="slideweek06" type="radio"> <input id="week06-slide2" name="slideweek06" type="radio" checked> 
<input id="week06-slide3" name="slideweek06" type="radio">

<div class="slider-content"> 
<div class="slider-item">
      <img src="https://i.imgur.com/R7NSwLd.png" alt="01" title="Space Station 01"/>
</div> 
<div class="slider-item">
	<img src="https://i.imgur.com/JGoHEi1.png" alt="02" title="Space Station"/>
</div> 
<div class="slider-item">
    <img src="https://i.imgur.com/xUQjdIc.png" alt="03" title="Space Station 03">
</div>
</div> 
</section>
</div>

My new version now on Godot has a similar spider structure. The head is where the structure where the control for the movement is made and the rest of the body is used for the function that its specializes in. The following image shows the smaller spider that I made to use as a base for the houses. All the other machines where based on it with color and size alteration depending on the function. 

![[Pasted image 20260421223718.png]]

I didn't placed the windows and other architectural details, expect for the division of the 2th floor on the small spiders and the "transportation egg". The image above and the map don't help much of the viewer to have a notion of size.

![[Pasted image 20260421225032.png]]

My original proposal of having a tinier structure with 6m for the body radius shown up inside the engine too constricted as I expanded the detailing. Since I could playtest the movement inside Godot, I expanded everything to be bigger.

- How do people and things move around?
Here is the question where the older project failed. On the original version we had corridors between spiders which created a major problem on how to position those structures and I had to make many hubs that where just empty connections. It was very hard to plan, since the position of each spider was dependent of the ones surrounding it and where they would lead.

The structure should be transporting people between modules and even if Proxima B is probable habitable, don't mean that humans should be breathing that air.

My reference here was monorails (the algorithm presented some beautiful ones on Busan, South Korea) and a very curious novelty that became a tourist attraction: The Shweeb.

![[Pasted image 20260322175613.png]]

<iframe width="560" height="315" src="https://www.youtube.com/embed/7qNOtgrIjO4?si=blUV5E844Iumi3Up" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

![[Pasted image 20260421225910.png]]

Yet the shweeb cylindrical shape didn't attracted me visually and the algorithm presented me the Seed Prisons Pods by Karl Lenton.

![[Pasted image 20260421230035.png]]

With a quick modeling session inside Blender I made the transportation egg:
![[Pasted image 20260421230905.png]]

Yes, its just an egg that would be attached on the top to the trails.

Another problem that the original system had and I tried to find a better solution here is that the connections demanded always to arrive at the same level of the rest of the building through a fixed door. My solution here was to bring for the rest of the structures that weren't houses a small bump on the top of the body of the spider, allowing a 360º entrance area for any rail that came from other structures. 

![[Pasted image 20260421230423.png]]

This solution also allow me to create some capillarity with the transportation system. The route made between House -> public space can be made by a single person inside a transportation egg as the other way around. The person get her egg and park it on the public space. On medium public spaces -> big public spaces we can have a a bigger cart like the following one. Same thing between bigger structures. This naturally create a size system and a capillarity for transport inside the city.

![[Pasted image 20260421231621.png]]

From the Cargo Bay + Storage Hub I also want to use other types of transportation, this is where the player get to explore the planet itself. Here I want something less dramatic, just a car or motorcycle.

- What is the city's Structure?
The main idea is that each structure is specialized and connected with others through those monorail like structure and as the resource is depleted from one site, the city moves to reposition itself on the planet. Each small spider is connected to a medium structure that will have a small commerce, a children park, maybe even a restaurant... and those medium structure would be connecting with the gigantic ones who would be having other functions. Those gigantic structures would be connecting with medium and big structures that where also specialized like a mechanical area (if you even live inside a robot, image how many mechanics you will need to keep the city working...), school, market fair ... or even the medical bay and the research facility. See the map above.

- What's the Architecture like?
On [[Study Notes/Art & Design/Reading Notes/Courses/Especialização em Arte Conceitual - Design Criativo de Personagens/index|Design de Concept Art e World Building]] I learned that we need to define 4 structures to be able to point out where a civilization construct their buildings: doors, arch, windows and columns. On the PureRef we have some examples of what I'm thinking. I also added a section for materials.

- Can you describe the Society and the city's Theme?
Its a city that should work like a well "oiled machine" that has a certain flow and adaptability through the space. I also sense that this city will not think and care much with the environment footprint impact that she leaves where she passes.

- What Stories does this city tell?
	- As all future fantasy theme I would like to talk about "what is a human", but also "fear of the other" (prejudice).
	- I also would love to talk about those rhythmic movements imposed by productivity.

- What Game is this place for? 
	- The original project was a third person 3D game. I had some NPCs created for each module, but not much of story arch on the whole environment.
	- Now the idea changed to a first person game, just because it was more comfortable to implement the movement and I expect that the gameplay inside the city would not have much of combat

- What makes your city memorable?
	- Each module is a gigantic spider and the others small bioinspired constructions
	- What are the Points of Interest on those maps? See the concept drawing.
