const readline  = require("readline");
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

const newArr = [];

function vertData(A,B) {
  
}

rl.on('line',function(line){
  newArr.push(line)
  console.log(newArr)
})