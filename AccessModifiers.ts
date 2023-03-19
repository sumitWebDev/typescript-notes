//Class name should start with Capital Letter
class PersonalDetails{
    // name: string; //this defines that class will have a name of type string
    private employees:string[] = [];

    constructor(private name:string){

    }
    addEmployee(employee:string){
      this.employees.push(employee)
    }
    printEmployees(){
      console.log(this.employees.length);
      console.log(this.employees);

    }
    describe(this: PersonalDetails ){
      console.log(`My name is ${this.name}`)
      //console.log('My name'+ this.name )
    }
  }

  var details = new PersonalDetails('Sumit')
  details.addEmployee('Sumit');
  details.addEmployee('Manny');
  //details.employees[2] = 'Amit'
  details.printEmployees()

  details.describe();

  // var newDetails = {name:'Chingaa', describe:details.describe}
  // //console.log(details)
  // newDetails.describe()