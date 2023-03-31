//Select all Elements
const form=document.querySelector('#new-item-form')
const list=document.querySelector('#list')
const input=document.querySelector('#item-input')

//When I submit the form add a new element
form.addEventListener('submit', e=>{
    e.preventDefault()
})
//1.Create a new item
const item = document.createElement('div')
item.innerText = input.value
item.classList.add('list-item')

//console.log(item)

//2.Add that item to the list
list.appendChild(item)