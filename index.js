// init
const list = document.querySelector('#my-todo')
const listDone = document.querySelector('#Done-todo')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills', 'buy fruit']
for (let todo of todos) {
  addItem(todo)
}

function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo" class="text">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}
const addBtn = document.querySelector('#addBtn')
const Todo = document.querySelector('#newTodo')

Todo.addEventListener('keypress', function (e) {  //加入鍵盤ENTER也會觸發                                                                       //加入完清空項目
  if (e.keyCode === 13) {
    if (Todo.value === '') {
      alert('請輸入項目')
      return
    } else {
      addItem(Todo.value)
      Todo.value = ""
    }
  }
})
addBtn.addEventListener('click', function () {          //加入按鈕觸發事件
  if (Todo.value === '') {
    alert('請輸入項目')
    return
  } else {
    addItem(Todo.value)
    Todo.value = ""
  }
})
// write your code here
list.addEventListener('click', function (e) {        //監聽TODO觸發事件
  const li = e.target.parentElement
  if (e.target.matches('.delete')) {
    li.remove()
  } else if (e.target.tagName === 'LABEL') {
    DoneItem(e.target.innerText)
    li.remove()
  }
})
function DoneItem(text) {                           //加入完成清單
  let doneItem = document.createElement('li')
  doneItem.innerHTML = `
    <label for="todo" class="text">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  listDone.appendChild(doneItem)
  console.log(doneItem.firstElementChild.classList.toggle('checked'))
}
listDone.addEventListener('click', function (e) {      //完成清單的觸發事件
  const doneDel = e.target.parentElement
  if (e.target.matches('.fa-trash')) {
    doneDel.remove()
  } else if (e.target.matches('.text')) {
    addItem(e.target.innerText)
    doneDel.remove()
  }
})