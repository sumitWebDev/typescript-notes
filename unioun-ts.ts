
function combine (n1: number | string, n2:number|string){

    if(typeof n1 === 'number' && typeof n2 === 'number')
    console.log(n1+n2)

    else
    console.log(n1.toString()+n2.toString())
  }
  combine(1,2)
  combine ('sumit','das')