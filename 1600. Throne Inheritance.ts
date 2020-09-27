class ThroneInheritance {
  map = new Map<string, Person>();
  king: Person;

  constructor(kingName: string) {
    let king = new Person(kingName);
    this.king = king;
    this.map.set(kingName, king);
  }

  birth(parentName: string, childName: string): void {
    const child = new Person(childName, parentName);
    const parent = this.map.get(parentName);
    parent?.addChild(child);
    this.map.set(childName, child);
  }

  death(name: string): void {
    let person = this.map.get(name);
    if (person) {
      person.dead();
    }
  }

  getInheritanceOrder(): string[] {
    const dfs = (root: Person) => {
      if (!root) {
        return;
      }
      if (root.alive) {
        result.push(root.name);
      }
      for (const child of root.children) {
        dfs(child);
      }
    };

    const result: string[] = [];
    dfs(this.king);
    return result;
  }
}

class Person {
  children: Person[];
  alive: boolean;
  constructor(public name: string, public parentName?: string) {
    this.children = [];
    this.alive = true;
  }

  addChild(child: Person) {
    this.children.push(child);
  }
  dead() {
    this.alive = false;
  }
}

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
