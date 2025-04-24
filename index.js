console.log("Hello world")  
// git init
// git add remote 
// git status
// git add .
// git commit -m "message here"
// git push


const tasks=[]

function addTask(event){
    event.preventDefault()
 let task=event.target.task.value
 if(task){

     tasks.push(task)
 }
 localStorage.setItem("task",JSON.stringify(tasks))

displayTask()

}


displayTask()

function displayTask(){
    const storedItem=  JSON.parse(localStorage.getItem("task"))

const container=document.getElementById("container")
let string=""
storedItem.forEach((el,index)=>{
  
 string+=`<li>${el} <button  onClick='deleteTask(${index})'>Delete</button> <button>Edit</button></li>`
 
})
container.innerHTML=string
}




function deleteTask(index){
    const updateStoreItem=  JSON.parse(localStorage.getItem("task"))
    updateStoreItem.splice(index,1)
    localStorage.setItem("task",JSON.stringify(updateStoreItem))
    displayTask()
}


const person={
    name:"skill spark",
    address:"ktm"
}



JSON.stringify(person)