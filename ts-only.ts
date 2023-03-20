//Class name should start with Capital Letter
class PersonalDetails{
  // name: string; //this defines that class will have a name of type string
  private employees:string[] = [];

  constructor( public id:number,public name:string){

  }
  addEmployee(employee:string){
    this.employees.push(employee)
  }
  printEmployees(){
    console.log(this.employees.length);
    console.log(this.employees);

  }
  describe(this: PersonalDetails ){
    console.log(`My name is ${this.name} with id ${this.id}`)
    //console.log('My name'+ this.name )
  }

}

class ChildrenDetails extends PersonalDetails{
  constructor(id:number, name:string, public married:boolean){
    super(id,name)
  }
  isMarried(){
    if( this.married) console.log(`${this.name} is married`)
  }

}

var details = new ChildrenDetails(10,'Amit',true)
details.addEmployee('Sumit');
details.addEmployee('Manny');
//details.employees[2] = 'Amit'
details.printEmployees()
details.describe();
details.isMarried()
