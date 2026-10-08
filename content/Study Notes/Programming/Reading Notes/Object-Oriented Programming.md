---
tags:
  - Programming
  - GameProgramming
  - ObjectOriented
  - GameDevelopment
  - JasonGregory
  - GameEngineArchitecture
draft: "true"
---
# Class & Objects:
_"A class is a collection of attributes (data) and behaviors (code) that together form a useful, meaningful whole. A class is a specification describing how individual instances of class, known as objects, should be constructed."_ - Jason Gregory on Game Engine Architecture

# Encapsulation:
_"Encapsulation means that an object presents only a limited interface to the outside world; the object's internal state and implementation details are kept hidden. Encapsulation simplies life for the user of the classes, because he or she needs only to understand the class limited interface, not the potentially intricate details of the implementation. It also allows the programmer who wrote the class ensure that its instances are always in a logically consistent state."_ - Jason Gregory on Game Engine Architecture

Take a look on [[SOLID Principles]], specially at the Open/Closed clause

# Inheritance:
_"Inheritance allows new classes to be defined as extensions to preexisting classes. The new class modifies or extends the data, interface and/or behavior of the existing class. If class Child extends class Parent, we say that child inherits from or is derived from Parent. In this relationship, the class Parent is kown as the base class or superclass, and the class child is derived class or subclass. Clearly the inheritance leads to a hierarchical (tree-structured) relationships between classes"_ - Jason Gregory on Game Engine Architecture

## Multiple Inheritance:
_"Some languages support multiple inheritance (MI), meaning that a class can have more than one parent class. In theory MI can be quite elegant, but in practice this kind of design usually gives rise to a lot of confusion and technical difficulties. This is because multiple inheritance transforms a simple tree of classes into a potentially complex graph. A class graph can have all sorts of problems that never plague a simple tree—for example, the deadly diamond 
...

_Most C++ software developers avoid multiple inheritance completely or only permit it in a limited form. A common rule of thumb is to allow only simple, parentless classes to be multiply inherited into an otherwise strictly single-inheritance hierarchy. Such classes are sometimes called mix-in classes because they can be used to introduce new functionality at arbitrary points in a class tree.
"_ - Jason Gregory on Game Engine Architecture

![[Pasted image 20261007215343.png]]

# Polymorphism:
_"Polymorphism is a language feature that allows a collection of objects of different types to be manipulated through a common interface. The common interface makes a heterogenous collection of objects appear to be homegeneous, from the point of view of the code using the interface."_ - Jason Gregory on Game Engine Architecture

Take a look on [[SOLID Principles]], specially on Liskov Substitution Principle

# Composition and Aggregation:
_"Composition is the practice of using a group of interacting objects to accomplish a high-level task. Composition creates a 'has-a' or 'uses-a' relationship between classes. (Technically speaking, the “has-a” relationship is called composition, while the “uses-a” relationship is called aggregation.)  ... . Composition/aggregation usually results in the individual classes being simpler and more focused. Inexperienced object-oriented programmers often rely too heavily on inheritance and tend to underutilize aggregation and composition."_ - Jason Gregory on Game Engine Architecture

Take a look on [[SOLID Principles]], specially on Single Responsability Principle

# Design Patterns
Jason Gregory on the same book presents a very brief introduction to design patterns that are common used by various authors, including ["Gang of Four"](https://en.wikipedia.org/wiki/Design_Patterns):
-  **Singleton:** This pattern ensures that a particular class has only one instance (the singleton instance) and provides a global point of access to it.
- **Iterator:** An iterator provide an efficient means of accessing the individual elements of a collection, without exposing the collection's underlying implementation. The iterator "knows" the implementation details of the collection so that its users don't have to.
- **Abstract Factory:** An abstract factory provides an interface for creating families of related or dependent classes without specifying their concrete classes.

I recommend reading a book called [Game Programming Patterns by Robert Nystrom](https://gameprogrammingpatterns.com) that is available for free on the website. The ones cited by Gregory are much more independent from the game development than the ones presented by Nystrom on that chapter.

# Coding Standards:

- **Interfaces are king:** Keep your interfaces (.h files) clean, simple, minimal, easy to understand and well-commented. 

- **Good names encourage understanding and avoid confusion:** Stick to intuitive names that map directly to the purpose of the class, function or variable in question. Spend time up-front identifying a good name. Avoid a naming scheme that requires programmers to use a look-up table in order to decipher the meaning of your code. Remember that high-level programming languages like C++ are intended for humans to read. (If you disagree, just ask yourself why you don’t write all your software directly in machine language.) 

- **Don’t clutter the global namespace.:** Use C++ namespaces or a common naming prefix to ensure that your symbols don’t collide with symbols in other libraries. (But be careful not to overuse namespaces, or nest them too deeply.) Name #defined symbols with extra care; remember that C++ preprocessor macros are really just text substitutions, so they cut across all C/C++ scope and namespace boundaries. 

- **Follow C++ best practices:** Books like the Effective C++ series by Scott Meyers [31,32], Meyers’ Effective STL [33] and Large-Scale C++ Software Design 3.1. C++ Review and Best Practices 105 by John Lakos [27] provide excellent guidelines that will help keep you out of trouble. 

- **Be consistent:** The rule I try to use is as follows: If you’re writing a body of code from scratch, feel free to invent any convention you like—then stick to it. When editing preexisting code, try to follow whatever conventions have already been established. 

- **Make errors stick out:** [Making Wrong Code Look Wrong](https://www.joelonsoftware.com/2005/05/11/making-wrong-code-look-wrong/) : "The cleanest code is not necessarily code that looks neat and tidy on superficial level.