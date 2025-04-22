console.log("Hello world")  
// git init
// git add remote 
// git status
// git add .
// git commit -m "message here"
// git push


const tasks=[
   
]


function addTask(event){
    event.preventDefault()
   
 let task=event.target.task.value

 
 tasks.push(task)
 console.log(tasks)

 displayTask()

}




function displayTask(){
const container=document.getElementById("container")
let string=""
 const stringTask=tasks.reverse().forEach((el)=>{
 string+=`<li>${el} <button  onClick="deleteTask()">Delete</button></li>`

})

container.innerHTML=string

}




function deleteTask(index){
    console.log("Delete")

    console.log(index)
}