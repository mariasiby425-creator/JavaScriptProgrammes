//callback hell

function testFunction(){
    return new promise((resolve)=>{

         console.log("Function test calling")
         resolve()
         //cb()
    )}}
function demoTest(cb1){
         console.log("Function demoTest calling")   
         cb1()        
}
function demoTest2(){
         console.log("Function demoTest2 calling")
}
/*test(function(){
    demoTest(function(){
        demoTest2()
    })
})*/
testFunction()
  //  .then(()->demoTest())

//promise: Java Script object| o/p return in any 3 state - fulfill, reject, pending
const promise=new Promise((resolve,reject)=>{
    let sucess=true
    if(!sucess){
        resolve("Operation Sucessfull")
    }
    else{
        reject("Operation Rejected")
    }
})

//promise state handling
promise.then((smsg)=>{
      console.log(smsg)  
})
.catch((errmsg)=>{
    console.log(errmsg)
})
