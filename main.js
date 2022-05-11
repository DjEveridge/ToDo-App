

import { consoleLog as cl, addListOfNumbers as add, findRandomNumberInRange as randRange, findRandomColor as randColor, reverseString as revStr, consoleError as conErr, findRandomLetter as randLet, joinArray as joinArr, generatePassword as genPass} from './Util.js'
const tasks = [...document.querySelectorAll(".task")];
const taskContents = [...document.querySelectorAll(".task-content")];
const checkBoxes = [...document.querySelectorAll(".selected")]
const deleteButtons = [...document.querySelectorAll('.delete-button')]
const createButton = document.querySelector("#create-btn")
const taskContainer = document.querySelector("#todo-container")
const taskInput = document.querySelector("#input-todo")
let taskToAdd = taskInput.value
let STORED_TASKS
var NUMBER_OF_TASKS = window.localStorage.getItem("Number of tasks") || 0
let taskContentArray = []
if(!window.localStorage.getItem("tasks")) {
    taskContentArray = []
} else if(window.localStorage.getItem("tasks")) {
    taskContentArray = JSON.parse(JSON.stringify(window.localStorage.getItem("tasks")))
    STORED_TASKS = JSON.parse(JSON.stringify(window.localStorage.getItem("tasks")))

    initializeToDoList()
    handleTaskIterations()
}

console.log(taskContentArray)
let taskContentArray_serialized
let taskContentArray_unserialized



console.log(genPass(200))


taskInput.addEventListener('keydown', e => {
    if(e.key === "Enter") {
        createNewTask()
    }
})



for(let i = 0; i < 100; i++) {
    // console.log(randRange(210, 700))
}

console.log(genPass(20))

console.log(add([1,2,4,1,2]))

function createNewTask() {
    // Guard Clause
    if(!taskInput.value) return
    taskToAdd = taskInput.value
    // Create Task
    const task = document.createElement('div')
    task.classList.add("task")
    task.id = `task${tasks.length}`
    const taskContent = document.createElement('span')
    taskContent.classList.add("task-content")
    taskContent.textContent = `${taskToAdd}`
    // Create Check Box Input
    const checkBox = document.createElement('input')
    checkBox.type = "checkbox"
    checkBox.name = "selected"
    checkBox.classList.add("selected")
    checkBox.classList.add('hide')
    checkBoxes.push(checkBox)
    // Create Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "&times"
    deleteButton.classList.add("delete-button")
    deleteButtons.push(deleteButton)
    // Append Children
    taskContainer.appendChild(task)
    task.appendChild(taskContent)
    task.appendChild(checkBox)
    task.appendChild(deleteButton)
    tasks.push(task)
    console.log(taskToAdd)
    taskInput.value = ""
    console.log(deleteButtons)
    handleTaskIterations()
    // Storages
    // taskContentArray_unserialized = JSON.parse(JSON.stringify(taskContentArray_serialized))
    // taskContentArray = taskContentArray_unserialized
    console.log(typeof(taskContentArray))
    taskContentArray.push(task.firstElementChild.textContent)
    taskContentArray_serialized = JSON.stringify(taskContentArray)
    window.localStorage.setItem("tasks", taskContentArray_serialized)
    console.log(typeof(taskContentArray))

    console.log(taskContentArray_unserialized)
    NUMBER_OF_TASKS ++
    window.localStorage.setItem("Number of tasks", NUMBER_OF_TASKS)
    // console.log(task.firstElementChild)
}
cl(taskContentArray)



function handleTaskIterations() {
    for(let i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener('mouseover', () => {
            // console.log(checkBoxes)
            // console.log(tasks[i])
            checkBoxes[i].classList.remove("hide")
            checkBoxes[i].classList.add("active")
        })


        tasks[i].addEventListener('mouseout', () => {
            if(!checkBoxes[i].checked) {
            checkBoxes[i].classList.add("hide")
            checkBoxes[i].classList.remove("active")
            // console.log('out')
            }
        })

        deleteButtons[i].addEventListener('click', () => {
            // deleteButtons.splice(i, 1)
            // taskContentArray = reindex_array_keys(taskContentArray)
            taskContainer.removeChild(tasks[i])
            taskContentArray_serialized = JSON.stringify(taskContentArray)
            window.localStorage.setItem("tasks", JSON.stringify(taskContentArray))
            NUMBER_OF_TASKS--
            window.localStorage.setItem("Number of tasks", NUMBER_OF_TASKS)

        })
        
        // console.log(tasks[i].id)
        
        
        taskInput.addEventListener('keydown', e => {
            if(e.key === "Enter") {
                createNewTask()
            }
        })
    }
}

function reindex_array_keys(array, start){
    var temp = [];
    start = typeof start == 'undefined' ? 0 : start;
    start = typeof start != 'number' ? 0 : start;
    for(var i in array){
        temp[start++] = array[i];
    }
    return temp;
}


createButton.addEventListener('click', createNewTask)


function storeTaskInLocalStorage(task) {

}


function initializeToDoList() {
    cl(window.localStorage.getItem("tasks").length)
    if(typeof(taskContentArray === 'string')) {
        taskContentArray = JSON.parse(taskContentArray)
    }
    for(let i = 0; i < JSON.parse(window.localStorage.getItem("Number of tasks")); i++) {
            // Create Task
    const task = document.createElement('div')
    task.classList.add("task")
    task.id = `task${tasks.length}`
    const taskContent = document.createElement('span')
    taskContent.classList.add("task-content")
    taskContent.textContent = `${taskContentArray[i]}`
    // Create Check Box Input
    const checkBox = document.createElement('input')
    checkBox.type = "checkbox"
    checkBox.name = "selected"
    checkBox.classList.add("selected")
    checkBox.classList.add('hide')
    checkBoxes.push(checkBox)
    // Create Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "&times"
    deleteButton.classList.add("delete-button")
    deleteButtons.push(deleteButton)
    // Append Children
    taskContainer.appendChild(task)
    task.appendChild(taskContent)
    task.appendChild(checkBox)
    task.appendChild(deleteButton)
    tasks.push(task)
    }
}



