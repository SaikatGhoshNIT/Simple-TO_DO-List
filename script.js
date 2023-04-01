//Select all Elements
const form=document.querySelector('#new-item-form')
const list=document.querySelector('#list')
const input=document.querySelector('#item-input')

//When I submit the form add a new element
form.addEventListener('submit', e=>{
    e.preventDefault()

    //1.Create a new item
const newItem = document.createElement('div')
newItem.innerText = input.value
newItem.classList.add("list-item")

console.log(newItem)

//2.Add that item to the list
list.appendChild(newItem)

//3.Clear input after submitting on "Add Item" button
input.value=""

//4.Setup event listner to delete item when clicked
newItem.addEventListener('click', e=>{
    newItem.remove()
})
})
