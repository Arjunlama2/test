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