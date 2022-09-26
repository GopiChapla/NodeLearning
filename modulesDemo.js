const myModule=require('./myModule');
const {no,color}=require('./myModule');

console.log(myModule.no)
console.log(myModule.color)
console.log(no)
console.log(color)

const fs=require('fs');
fs.writeFile('./Files/demoFile.txt',"Hello",()=>{
    console.log("created")
})