---
draft: "true"
tags:
  - UserStories
  - Oneira
  - Ticket
---
# User Story:
As a player, I want to have multiple chances to make progress, so that I don't need to restart the level every time I do a mistake.

As a player, I want to respawn near to where I died, so that I can continue to progress inside the game. 

As a player, I want to respawn near where I ended the last session so that I can continue to progress inside the game.

As a Level Designer, I want to be able to place respawn points where the player will be respawning inside the game when the player dies, so that I have a better control on how far the player respawn from where he died.

As a Game Designer, I want to be able to adjust how much life the player has, so that I can adjust how difficult and punishing are the obstacles inside the game

As a Game Designer, I want to be able to adjust how much damage an obstacle does to a player, so I can adjust how punishing some obstacles are

# Acceptance Criteria:
- When the player health is equal or bellow 0, the player should respawn on the last activated checkpoint or elevator.
- When the player takes a non fatal damage, should be some effect (game feel) to indicate that the player took a damage. Not sure if we are having SFX here too.
- When the player respawn, any puzzle that wasn't solved yet, should return to the original state (levers, box, jars, buttons... all those nice and dandy objects)
- The player should regen all his health as he trigger a checkpoint or respawn
- The black goo should **block** the player path (there's a bug at this moment where the player can enter the ToF exterior structure if we keep pushing to trespass the black goo - I can create the ticket if needed)

**Reference:**
Minecraft : https://www.youtube.com/watch?v=z9-uhJby3L8
Portal : https://www.youtube.com/shorts/wlr46SunQIo

### Where the player can die?
If his HP turn into zero doing:
- Touch the black goo
- Touch poisoned water (https://youtu.be/EblKHidx4ds?si=XjZuaCgcOc5mqAEP)

Instant kill on:
- Instant kill box trigger (Micah's jump)
- Any jump where the player would be rewinding
- Walk too far on deep water.


