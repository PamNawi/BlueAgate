---
tags:
  - GameDevelopment
  - GameEngineArchitecture
  - GameDevelopmentBook
  - JasonGregory
draft: "true"
---
![[Pasted image 20261007221915.png]]
# Quotes:

"Content is King"

"The game world is tipically displayed at an oblique top-down viewing angle. A disction is often made between a turn-based strategy game and RTS"

"Prevented from significantly changing the viewing angle in order to see across large distances
- Older games used a grid based world struction and an orthographic projection
	- Each unit is relatively low-res, to that game supports large numbers on screen at once.
	- Height field terrain is usually the canvas upon which the game is designed and played.
	- The player is often allowed to build new structures on the terrain in addition to deploying his forces
	- User interaction is often via single click and area based selection of units, plus menus or toolbars"


"Not every C++ language is created equal. Some featyres are useful and pretty much universally accepted, like nullptr;
- auto may only be used when declaring iterators, in situations where no other approach works (such within template definitions), or in special cases when code quality, readability and maintainability is significantly improved by use"
- Make errors stick out: [Making Wrong Code Look Wrong](https://www.joelonsoftware.com/2005/05/11/making-wrong-code-look-wrong/) : "The cleanest code is not necessarily code that looks neat and tidy on superficial level.
- When an developer error occours, I like to make them obvious"