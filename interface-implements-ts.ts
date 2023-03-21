interface Person{
    name : string,
    greet() : void
  }

  class PersonDetails implements Person {
    name:string;
    age:number = 30;

    constructor(name:string){
      this.name = name
    }

    greet(): void {
        console.log(this.name + this.age)
    }
  }

  var person1 = new PersonDetails('Sumit')
  person1.greet()