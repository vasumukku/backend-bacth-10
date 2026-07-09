console.log("hello")
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





let timeid=setTimeout(() => {
  console.log("Time executed  1s")

}, 1000);


let pr2=new Promise((resolve,reject)=>{
  let status=false;
  if(status){
    resolve("Pizza delivered")
  }else{
    reject("not delivered-2") 
  }
})
pr2.
then((r)=>{console.log(r)})
.catch((e)=>{console.log(e)})
 

let count=5
let timeid1=setTimeout(() => {
  console.log("Time executed  os")

}, 0);
 


let pr1=new Promise((resolve,reject)=>{
  let status=true;
  if(status){
    setTimeout(() => {
      resolve("Pizza delivered")
    }, 5000);
  }else{
    reject("not delivered") 
  }
})
pr1.
then((r)=>{
 console.log(r)
})
.catch((e)=>{console.log(e)})