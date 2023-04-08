interface Named {
    readonly name:string
}

interface Greeting {
    greet() : void
  }

  class PersonDetails implements Person {
    age:number = 30;

    constructor(public name:string){
      this.name = name
    }

    greet(): void {
        console.log(this.name + this.age)
    }
  }

  var person1 = new PersonDetails('Sumit')
  //person1.name = 'Sss'
  person1.greet()