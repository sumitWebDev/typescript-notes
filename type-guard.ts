//type guards using typeof
type Combinable = string | number;
type Numeric = number | boolean

type Universal = Combinable & Numeric
function add (a:Combinable , b:Combinable){
  if(typeof a === 'string' || typeof b === 'string' )
  console.log(+a + +b)
  else console.log(a+b)
}

add(10,20)

//Type Guards with In
type Admin = {
name:string,
privileges:string[]
}

type Employee = {
  name:string,
}


type UnknownEmployee = Admin | Employee

function printEmployee (emp:UnknownEmployee){
  if('privileges' in emp)
    console.log(emp.privileges)
}

printEmployee({name:'Sumit',privileges:['Admin']})

//Type guard with instance of operator

class Car{
  drive(){
    console.log('Driving Car')
  }
}

class Truck{
  drive(){
    console.log('Driving Truck')
  }
  loadCargo(){
    console.log('Loading Cargo')
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck ()

function getVehicle(vehicle: Vehicle){

  console.log(vehicle)
}

getVehicle(v1)