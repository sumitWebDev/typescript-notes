interface Add {
    (a1: number, a2: number) : number;
    }


    let addFunc : Add =  (n1: number, n2: number)=>{
      console.log(n1+n2)
      return n1+n2
    }

    addFunc(3,3)