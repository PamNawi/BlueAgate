---
draft: "true"
tags:
  - UserStories
  - Oneira
  - Ticket
---
Type: ✨ **Feature**
Status: 🆕 **To Triage**
─────────────────────────────────────

**PRIORITY — How urgent is it?**
🔵 **Low** — Nice to have. No urgency. Addressed when bandwidth allows.

(Pam why are you placing on low even tho its blocks LD? We can ship without this and we don't have all the GD/UI questions answered. I'm not pushing this as a high priority until we have all of this ticket known)
# User Story:
As a player, I want to be able to select a place inside the map so I can fast travel to that location that I already visited before.

As a player, I want to respawn near to where I died, so that I can continue my progress inside the game.

As a Level Designer, I want to be able to place respawn points where the player will be respawning inside the game when the player dies, so that I have a better control on how far the player respawn from where he died.
# Acceptance Criteria:

### Fast Travel
- The player should be able to open a menu using a podium inside the elevator and then select a location where he wants to fast travel inside the map.
- This menu should be available to be used inside the hub on the elevator there allowing him to fast travel to any elevator inside the Mushroom Forest.
- Before the player fast travel to an area, the player should confirm if he wants to teleport to that place
- The fast travel will be only unlocked by the players as he pass the a trigger to unlock it (first time a data-layer is loaded possibly)
- When the player arrive at certain location the map should be into the default state (all the objects/npcs should be on their original position/state if they didn't had any alteration saved) (Good luck with that for resetting levers, boxes, buttons... every door puzzle that wasn't solved yet).

**Reference:** The Elder Scrolls : Skyrim
https://www.youtube.com/watch?v=aHb1Ljno2EY&t=16s
### Loading Screen during Teleport
- During the teleport there should be rendered a loading screen guaranteeing that the player vision is blocked while the datalayer loads. The progress of the load should be shown somewhere on the screen and a icon should indicate that the game is still running. (Suggestion: we could use our concept arts as loading screens, something similar on how they do on Ragnarok Eternal Love, but I would only show the concept art for the region where the player is arriving so we guarantee that we don't give any spoiler from the narrative.)
- During the teleport the player body should be static in the defined position until all the content is loaded and running.
- During the teleport the player should hear... what John? Elevator music... The area theme, the next area theme...? Should we disturb Claudio for this?
- Not sure if there's any SFX being played during the teleport, I would recommend a SFX for when the load screen end and the elevator open.
### Elevator Appearance
- The fast travel points/teleports are also known as elevators, because they resemble elevators on their function and appearance. 
- They are already present inside the game. You can see the model used on the ToF. The player spawn already inside one.
- When the load ends the elevator should be open in a similar fashion on how Portal does so a small animation should be played for it.

**Reference:** Portal 1 & Portal 2 for the loading
https://youtu.be/E43Evi9oXvA?si=FdGVmYmnUuhND9Ku&t=140

### Elevators as respawn points:
- When the player dies he should be respawning on an elevator or on the last trigger the player activated

### Locations:
We are placing elevators in many areas of the game that not necessarily are attached with the main map.

- ToF Underground
- ToF Exterior
- Caverns Entrance
- Caverns Middle (Micah's polemic jump)
- BH Exterior
- BH middle (????)
- Village Father side
- Village Underground
- Village Mother side
- ToM Entrance
