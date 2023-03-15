
//type unknown
let userInput :unknown
userInput = 5;
userInput = 'max'

let userString:string
if(typeof userInput === 'string')
  userString = userInput

//type never
function error(message,code){
  throw{message: message, code:code}
}

error('Its an error', 404)
