const data = "Learning Node";

console.log(data);

setTimeout(()=>{
console.log(data);

},4000)

const showData=(data)=>{
console.log(data);
}
showData("Good Morning");
showData("Have a nice day");

console.log(__dirname);
console.log(__filename)