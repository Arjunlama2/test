console.log("Hello world")  
// git init
// git add remote 
// git status
// git add .
// git commit -m "message here"
// git push


const tasks=JSON.parse(localStorage.getItem("task")) || []

function addTask(event){
    event.preventDefault()
 let task=event.target.task.value
 if(task){

     tasks.push(task)
     localStorage.setItem("task",JSON.stringify(tasks))
 }

displayTask()
const inputFiled=document.getElementById("task")
inputFiled.value=null

}


displayTask()

function displayTask(){
    const storedItem=  JSON.parse(localStorage.getItem("task"))

const container=document.getElementById("container")
let string=""
storedItem.reverse().forEach((el,index)=>{
  
 string+=`<li>${el} <button  onClick='deleteTask(${index})'>Delete</button> <button onClick=editTask(${index})>Edit</button></li>`
 
})
container.innerHTML=string
}




function deleteTask(index){
    tasks.splice(index,1)
    localStorage.setItem("task",JSON.stringify(tasks))
    displayTask()
}


// const person={
//     name:"skill spark",
//     address:"ktm"
// }


// console.log(
//     JSON.stringify(person))


const editTask=(index)=>{
    const data=JSON.parse(localStorage.getItem("task"))

    const dataToedit=data[index]
    const inputFiled=document.getElementById("task")
   
    inputFiled.value=dataToedit
  
deleteTask(index)


}



const billdata=[]
const addRecord=(event)=>{
    event.preventDefault()
    console.log(event.target.particular.value)
    let data={} 
       data.name=event.target.particular.value
     data.quatity=event.target.quantity.value
     data.rate=event.target.rate.value
     billdata.push(data)


     displayBills()
   
}


const displayBills=()=>{

    const tableData=document.getElementById("tdata")
    let string=""
    
    billdata.forEach((el,index)=>{
    string+=`<tr><td>${el.name}</d><td>${el.quatity}</td><td>${el.rate}</td><tr>   `
    })
    
    
    
    tableData.innerHTML=string
    
}




// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout done!');
// }, 2000);

// console.log('End');



// Promise   async-await




const myPromise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation here (e.g., fetching data)
    setTimeout(() => {
      const success = false; // Simulate success or failure
  
      if (success) {
        resolve("Data fetched successfully!"); // Call resolve with the result
      } else {
        reject("Failed to fetch data."); // Call reject with the error reason
      }
    }, 1500);
  }).then((respose)=>{

console.log(respose)

  }).catch((error)=>{
console.log(error)
  })

// bckend connection is a promise, databse connection ,thridparty api are promise
//   combination of async await and try catch



