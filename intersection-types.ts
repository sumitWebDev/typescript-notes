//Intersection Types
type Name  = {
    name:string
    }
    type Age ={
      age: number
    }

    type PersonalDetails = Name & Age

    var myDetails:PersonalDetails = {
      name:'Sumit',
      age: 30
    }

    //Intersection Interfaces
    interface Name1   {
      name:string
      }
      interface Age1 {
        age: number
      }

      interface PersonalDetails1 extends Name,Age{}

      var myDetails1:PersonalDetails1 = {
        name:'Sumit',
        age: 30
      }