// console.log("Hello world") 

// if condition {
//   //boc
// }


// keyword var_name=value 

// keyword-var,let,const


// let age=17

// if (age>18){
//   console.log("Your are not eligible vote.")
// }

// console.log("end")


// if condition {
//   //boc
// }
// else{
//   //boc
// }


// let age=21

// if (age>18){
//   console.log("Your are  eligible vote.")
// }else{
//     console.log("Your are not eligible vote.")

// }

// console.log("end")


// let marks=95

// if (marks>90){
//   console.log("Grade A")
// }
// else if (marks>75){
//   console.log("Grade B")
// }
// else if (marks>60){
//   console.log("Grade c")
// }
// else{
//   console.log("fail")
// }

// console.log("end")



// Ternary condition

// keyword var_name = condition?true:false

// let age=20
// let result =age>18?"you are eligible" : "you not eligible"
// console.log(result) 

// k=number*number
// for (let number=0; (number<11);k){
//   console.log(number++)
// } 



// for (let i=0;i<8;i++){
//   if(i==5){
//     continue
//   }
//   console.log(i)
// }

// console.log("end")


// name() 
// let age=20
// function name() {
//   console.log("hello")
// }


// console.log("end")



// function name() {
//   console.log("hello")    //Declaration
// } 

//name() //calling function  
 


// let add=function (a=2,b) {
//   return a+b 
// }
 
// console.log(add(0,90))  



// function outer() {
//   console.log("outer is calling....")
// } 

// function inner(a) {
//   console.log("inner is callled")
//   a() 
// }
// inner(outer)



// let ab=()=>console.log("hello")
// ab()

// let ab=()=>console.log("hello")
// ab() 


// let name="    kle"
// console.log(name.length)
// // console.log(name.toUpperCase()) 
// // console.log(name.toLowerCase()) 

// console.log(name.trim().length) 


// let name ="vasu"
// console.log(`my name is ${name}`) 


let arr=[1,2.3,"kle",true]
console.log(arr)
console.log(typeof(arr[0]))
console.log(typeof(arr[1]))


// access array Elements syntax  : var_name[index]
// slicing syntax: var_name[startindex : endindex] 
// updation syntax : var_name[index]=updated value 
console.log("=====================string indexing===========================")

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[5])
console.log("=====================array slicing===========================")
console.log(arr.slice(0,5))

console.log("=====================array updation===========================")
arr[500]="my student are good"
console.log(arr)
console.log("=====================array splice===========================")

let arr1=[1,2,3,4]
console.log(arr1.splice(0,2,"kle"))