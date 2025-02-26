let task=["Task1","Task2","Task3","Task4","Task5"]
let newtask =[]
newtask[0]= "New High-Priority Task-1"
newtask[1]= "New High-Priority Task-2"

for(let i=1;i<task.length-1;i++){
    newtask[i+1]=task[i]
}
newtask[newtask.length]= "New Task"
console.log(newtask)