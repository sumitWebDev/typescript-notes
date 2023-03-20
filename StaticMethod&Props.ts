//Class name should start with Capital Letter
class PersonalDetails{
    // name: string; //this defines that class will have a name of type string
    protected employees:string[] = [];

    constructor( private id:number,public name:string){
      console.log(ChildrenDetails.AboveAll);
  console.log(ChildrenDetails.findYourName());
    }

    userID(){
      console.log(this.id)
      return
    }
    set addEmployee(employee:string){
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
    static AboveAll = 'God'
    constructor(id:number, name:string, public married:boolean){
      super(id,name)
    }
    static findYourName(){
      return 'I am lost'
    }
    isMarried(){
      if( this.married) console.log(`${this.name} is married`)
    }
    // get userIDInChild(){
    //   console.log(`My name is ${this.name} with id ${this.id}`);
    //   return
    //   //console.log('My name'+ this.name )
    // }

  }
  console.log(ChildrenDetails.AboveAll);
  console.log(ChildrenDetails.findYourName());
  var details = new ChildrenDetails(10,'Amit',true)


  //var details = new PersonalDetails(10,'Amit')

  details.addEmployee = ('Sumit');
  //details.addEmployee('Manny');
  //details.employees[2] = 'Amit'
  details.printEmployees();

  //details.describe();
  //details.isMarried()
  //details.userID()
