console.log("hello")

let timeid=setTimeout(() => {
  console.log("Time executed  1s")

}, 0); 

let a=2
if(a%2==0){
  console.log("divisible")
}else{
  console.log("not divisible")
}


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
