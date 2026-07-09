let pr=new Promise((resolve,reject)=>{
  let status=false;
  if(status){
    resolve("Pizza delivered")
  }else{
    reject("not delivered") 
  }
})
pr.
then((r)=>{console.log(r)})
.catch((e)=>{console.log(e)}) 



// let result =fetch("https://jsonplaceholder.typicode.com/comments")
// result
// .then((r)=>{
//   console.log(r)
// }) 
// .catch((e)=>{
//   console.log(e.message)
// }) 

// console.log("hello ......1")
// let ar=[1,2,3]
// console.log(ar)
// function result(){
//   return new Promise((resolve,reject)=>{
//     let status=true
//     if(status){
//       resolve("success")
//     }else{
//       reject("failed")
//     }
//   })
// }
// async function display() {
//   try {
//     let PromiseStatus=await result()
//     console.log(PromiseStatus)
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// display()

// console.log("hello ...3")
// console.log("hello ...3")
// console.log("hello ...3")
// console.log("hello ...3")
// console.log("hello ...3")
// console.log("hello ...3")
// console.log("hello ...3")


// let count=0
// let time=setInterval(()=>{
//   console.log(count)
//   count++

//   if (count==5){
//     clearInterval(time) 
//   }
// }, 1000);  


let count=5
let timeid=setTimeout(() => {
  console.log("Time executed")

}, 1000);
 


