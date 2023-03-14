// var obj:{
//   name : string,
//   age: number
// } = {
//   name : 'Sumit',
//   age: 30
// }

// var arr1:string[] = ['name','age','class']
// console.log(obj.name)

// var arr2:[number,string]=[10,'sdsss']
enum Role {ADMIN, READ}

const person = {
  name : 'Sumit',
  role: Role.ADMIN
}

if(person.role === Role.ADMIN){
  console.log('worked')
}

export {}