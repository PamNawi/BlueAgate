---
tags:
  - ArtificialIntelligence
  - AI
  - PeterNorvig
  - StuartRussell
  - Programming
  - GameEngineArchitecture
---
🇧🇷 Você pode ler o inicio do texto original em português em [[3. Estrutura Interna de um Agente | A estrutura de um Agente]]


> "An agent is anything that can viewed as perceiving its environment through sensors and acting upon that environment through actuators" 
> _- Peter Norvig and Stuart Russell in Artificial Intelligence : A Modern Approach Third Edition_


The work of an AI programmer is to create an agent program that implements a function that maps the perceptions into actions. We assume, that in games, the agents will actuate in an environment with sensors and actuators, meaning, he has an architecture well defined. Its important that the architecture and the agent are compatible, for example, if an enemy agent needs to do a patrol between two points its necessary that he has sensors representing his "eyes" and "ears".

The majority of agent programs have the following structure: they perceive the actual state of the environment thought their sensors and return an action thought their actuators. Observe that exist a difference between pereption of the actual state and the function agent that can considers all the perception history.

![[Pasted image 20240502013944.png]]
