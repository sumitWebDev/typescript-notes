//Class name should start with Capital Letter
class PersonalDetails{
  name: string; //this defines that class will have a name of type string

  constructor(n:string){
    this.name = n
  }
}

var details = new PersonalDetails('Sumit')
console.log(details)