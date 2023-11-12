const elForm = document.querySelector(".form")
const elFormInput = document.querySelector(".form_input")
const elpaper = document.querySelector(".paper")
const elTemplate = document.querySelector(".template ")

let todoArr = [1, 2, 3]

function renderTodo(arr, paper) {  
      elpaper.innerHTML = null

    arr.map(item => {
        let cloneTemplate = elTemplate.cloneNode(true)

        paperContent = cloneTemplate.querySelector(".content")
        elpaper.appendChild(cloneTemplate)
    })
}  

renderTodo(todoArr, elpaper)


elForm.addEventListener("submit", e => {
    e.preventDefault()
    let inputValue = elFormInput.value.trim()

    todoArr.push({
        id: new Date().getMilliseconds(),
        content: inputValue,
        isCompleted: false, elpaper
    })
    elFormInput.value = null
    elFormInput.focus()

    renderTodo(todoArr)
})