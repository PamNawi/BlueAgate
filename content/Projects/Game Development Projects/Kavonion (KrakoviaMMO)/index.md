---
tags:
  - Kavonion
  - Krakovia
  - GameJam
private: "true"
aliases:
  - Kavonion
  - KrakoviaMMO
title: Kavonion
---
During the year of 2025 I engaged with a team to participate of [Krakovia Jam]([https://youtu.be/QOFvSpcafLk](https://youtu.be/QOFvSpcafLk "https://youtu.be/QOFvSpcafLk")) which the main objective was to make an MMORPG named Krakovia. I did some basic  Level Design and planning for a city called Venore, which would be starting city of that game, and I also helped creating a small Game Design Document for the project using Obsidian + Github. Its sad that the team is quiet from sometime already so I decided to bring that Obsidian Vault to be inside this so I wouldn't lost the register of it. The pages and the structure where not planned originally to be exibited inside a WebBrowser, but should be used locally by the team, but I'm bringing partly the content to be seen here. On parallel with this project I was doing some of the areas for [[Projects/Game Development Projects/Oneira/index|Oneira]]. That was very intense 2 months.
# Venore

The following text was delivered for me as the main lore of the game and for Venore City, that I didn't translate from Portuguese:

_"Tudo começou quando, em uma noite de oração, demônios emergiram do altar da Grande Catedral, corrompendo padres, fiéis e toda a cidade ao redor. A invasão se espalhou pelo mundo, deixando apenas ruínas e medo._

_A Igreja, desesperada, treinou monges guerreiros — homens e mulheres de fé inabalável — para enfrentar o mal com corpo, espírito e disciplina._

_Os jogadores são esses monges, viajando por terras devastadas para purificar o mundo e fechar o portão infernal aberto sob a Catedral." - Seria algo assim_

With this description I started to gather some references to built the city using the game Dragon Age (Lothering and Redcliff), The Elder Scroll Skyrim (WhiteRun), Stratholme (World of Warcraft) and Ragnarok Online (GlastHeim) in a document. The idea here was to understand how I could create a medieval starting city that was being taken by something like a plague or dark magic. I didn't want a capital or a city that was big, but a city that was growing around the monastery/cathedral. I placed all images inside a canva that you can see in the screenshot bellow.

![[GamesReferenceVenore.png]]

That being done, I started to work in many iterations on how I wanted the terrain to be. The maps on Krakovia where connected by teleports, so I wanted some physical barrier, could be a mountain, river, lake to isolate that area. Another thing that I considered it was the necessity to have another barrier blocking the plague invasion to the city. If the threat was so agressive and surprised everyone in the middle of the night, the city would be vanishing and be taken, like it happens to Lothering in Dragon Age, so I chose a river to separate the city into a "fallen side" and a "survivors side".

After many explorations, and considering all the classes present on the game I got into the following design that was replicated into the Unity. The limits of the city where defined by mountains and on the south of it we would have a lake.

![[VenoreCity_Map.png]]

On the left side of the river we would have all the city taken by enemies and on the right we would be having the city with their refugees and other survivors. On both corners we would have camps where elite monsters, on the top left would be a zombie/demon camp and on the bottom right corner would be having bandits that would be taking this moment of terror to stock pile the farm, where the players could take a quest. Another quest that I was planning to create was one for the hunter house and the fisherman. 

Right next to the cemetery camp, top left, the player would be having a teleport to a new area called the Cathedral/Monastery.
# Cathedral
Something that aligned nicely on this project and the other one that I was working, [[Projects/Game Development Projects/Oneira/index|Oneira]] is that both games had a High [[Gothic Cathedral]], so some of the research I did was useful for both games even though they have a completely different approach and intention with the same.

For Krakovia I didn't had the chance to replicate inside Unity, but I did an area inside a canva just to hold the references that I selected to use. 

![[GamesReferenceCathedral.png]]

The idea was to use the basic schematics for Cologne Cathedral as a reference for make the inside area, having the cross shape design and using the columns between the aisle and the nave  as the transept and the crossing as areas to make a circuit for the players rotate/farm and having the Choir and Apse reserved for and Elite/Bosss.

![[Pasted image 20251201152853.png]]

# Game Design Document
I learned a lot even on how I needed to structure such big document for the future. I know we wanted to add some NPCs and shops for the player to interact, we needed to create a bestiary to document how we would be spreading those monsters and what would be their stats and skills, among for some structure for the quest lines and lore.

This resulted in a very curious structure inside the Obsidian Vault:

> Excalidraw (All the images/icons necessary to create the maps)
 >> Icons
 > Venore
 > > Images
 > > Enemies
 > > > Camps
 > > > > BanditCamp
 > > > > Cemitery
 > > > Bandit Leader
 > > > Bandit Archer
 > > > Bandit Sword
 > > Maps
 > > > VenoreCityMap
 > > > VenoreCathedral
 > > NPCs
 > > >Vendors
 > > > > Apothecary
 > > > > Blacksmith
 > > > > MagicShop
 > > > > Tailor
 > > > > TavernKeeper
 > > > > Utilitary
 > > > Quests
 > > > > Farmer
 > > Lore
 > > Index
 > > Visual References


None of these where actually completely done, but I really liked on how I could use this tool to connect the information. The VenoreCityMap was actually interactable so every time I clicked an icon for an NPC I would be redirected to the note about that NPC.

On general I really enjoyed working on this project, because it was an MMORPG, it was very complex, I enjoyed to work on it and I discovered that I want to work on those behemoths projects with many moving parts, but I need more information or even. 