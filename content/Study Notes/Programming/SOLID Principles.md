---
tags:
  - Programming
  - SOLID
---
This is another note that I'm just digitalizing from an old notebook. I don't remember the context.
# Single-responsibility Principle
A class should have one and only one reason to change, meaning a class should ==have only one job==.

# Open Closed Principle
Objects or entities should be open to extension but closed for modification

! Why use interfaces over abstract classes?
An abstract class allow you to create functionality that subclasses can implement or override. An interface only allows you to define a functionality, not implement it. And where's a class can extend only one abstract class, it can take advantage of multiple interfaces.

# Liskov Substitution Principle
Let q(x) be a property provable about objects, of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.

This means that every subclass or derived class should be a substitutable for their base or parent class.

# Interface Segregation Principle
A client should never be forced to implement an interface that it doesn't use, or clients should be forced to depend on methods they don't use

# Dependency Inversion Principle
Entities must depend on abstractions, not on concretions, Its states that high level module must not depend on the low-level module, but they should depend on abstractions.

This principle allows decoupling

# On Unity...

**S:** "Instead of a monobehaviour that had all of the things we have a separate script for each functionality"
**O:** Use interfaces to expand monobehaviours

Weapon.cs
```
public class Weapon : Monobehaviour{
	private ILauncher launcher;

	[Serialized Field]
	private float fireRefreshRate = 1f;
	private float nextFireTime;

	private void Awake(){
	launcher = GetComponent<ILauncher>();
}
...

	private void FireWeapon(){
		nextFireTime = Time.time + fireRefreshRate;
		launcher.Launch(this);
	}
}
```

ILauncher.cs
```
internal interface ILauncher{
void launch(Weapon weapon);
}
```

BulletLauncher.cs
```
public class BulletLauncher : MonoBehaviour, ILauncher{
[SerializeField]
private Bullet bulletPrefab;

public void Launch(Weapon weapon){
var bullet = Instantiate(bulletPrefab);
bullet.Launch(weapon.transform.forward);
}
}
```

MissileLauncher.cs
```
public class MissileLauncher : Monobehaviour, ILauncher{
[SerializeField]
private Missile missilePrefab;

public void Launch(Weapon weapon){
Transform target = FindObjectOfType<Transform>();
var missile = Instatiate(missiblePrefab);
missile.SetTarget(target);
}
}

```

**L:** a classes that inherits from another class should be able to be used as if were the base class
There's a character, an NPC, and a player that both basic derivatives of the character. We should be able to use them as if them were a character from anything that's calling it without having to know what the actual implementation is so.

! You're violating Liskov is just to check and see if you have statements where your code that's calling something care about the object that is calling... its cares about the subclasses that is is ...

**I:** No client should be forced to depend on methods it does not 
Basically the suggestion is to split a big interface into smaller ones, this way its more easy to personalize. By splitting interfaces, we allow each object to only implement what it actually needs, making the system more flexible and easier to extend. Don’t force behavior. Compose it.

There's a door that needs to take a damage, but don't need to take debuffs, or have attack speed.

- Original Implementation
```
public interface IEntity{
BuffController BuffController {get; }
void Mesmerize(Entity ownerEntity);
int STR{get;}
int STA{get;}
int CON{get;}
...
int CHA {get;}
FloatStack<object> AttackSpeedStack{get;}
float Health {get;}
int ModifyHealth(int amount);
DamageShieldController{get;}

}
```

- Better Implementation that respect ISP:
```
public interface IHaveBuffs{
BuffController BuffController{get;}
}

public interface ICanBeMesmerized{
void Mesmerize(Entity ownerEntity);
}

public interface IHaveStats : IHaveHealth{
int STR {get;}
int STA {get;}
int CON{get;}
int CHA{get;}
FloatStack <object> AttackSpeedStack{get;}
}

public interface IHaveDamageShield{
DamageShieldController DamageShieldController{get;}
}
```

**D:** High-level systems like `Weapon` should not depend on concrete implementations like `BulletLauncher` or `MissileLauncher`, but on abstractions such as `ILauncher`.

By injecting the dependency (via Inspector or initialization), we decouple the behavior from the object, allowing greater flexibility, easier testing, and runtime composition.

This allows us to swap behaviors without modifying the high-level code.