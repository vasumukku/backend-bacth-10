let arr1=[1,2,3,4]
console.log("==================push and pop========================")
//syntax :varname.push(value)
arr1.push("kle")
console.log(arr1) 
//syntax :varname.pop()
// console.log(arr1.pop())
arr1.pop()
console.log(arr1)

console.log("==================push and pop========================")

arr1.unshift("kle collgee")
console.log(arr1)

arr1.shift()
console.log(arr1)

//syntax :varname.unshift(value)


console.log("==================Array destructing========================")
let fruits=["Grape","pineapple","orange","badham"]
const[x,y,z,w]=fruits
console.log(x) 


console.log("==================objects========================")
// let obj={
//   key:value,
//   key:value 

// }


let obj={
  name:"kle",
  startyear:2020
}
console.log(obj)


//syntax for access keys  ==> varname.key or var_name["key"]
console.log(obj.name)
console.log(obj["name"])
//syntax for access keys  ==> varname.key=updated value or var_name["key"]=upv
obj.name="santhosh"
console.log(obj)

obj["name"]="riya"
console.log(obj)