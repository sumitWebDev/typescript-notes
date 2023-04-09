interface NormalUser{
    type: 'Normal',
    nameNormal: string
  }

  interface AdminUser{
    type: 'Admin',
    nameAdmin: string
  }

  type UserType = NormalUser | AdminUser

  function userAccess(user:UserType){
    switch(user.type){
      case 'Normal' :
      console.log(user)
      break;
      case 'Admin' :
      console.log(user)
      break;
    }
  }

  userAccess({type:'Normal',nameNormal:'Amit'})