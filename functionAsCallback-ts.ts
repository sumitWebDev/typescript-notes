function add (num1:number, num2:number){
    return num1+num2;
  }
  function printResult(result){
    console.log("Result is "+result)
  }

  //Function as type
  let combine:(a:number, b:number)=>number
  combine = add;

  printResult(combine(5,4))

  //Function Call back
  function addHandler(num1:number,num2:number,cb:(result:number)=>void){
    const result = num1+num2;
    printResult(result);
  }
  addHandler(10,20,printResult)
  export {}