const elForm = document.querySelector(".form")
const elFormInput = elForm.querySelector(".form_input")
const elPaper = document.querySelector(".paper")
const elTemplate = document.querySelector(".template").content;

let todoArr = []

function renderTodo(arr, Paper) {
    Paper.innerHTML = null
    arr.map(subject => {
        let cloneTemplate = elTemplate.cloneNode(true)

        let paperSubjectContent = cloneTemplate.querySelector(".content")

        paperSubjectContent.textContent = subject.content
        elPaper.appendChild(cloneTemplate)
    });
}

renderTodo(todoArr, elPaper)






elForm.addEventListener("submit", e => {
    e.preventDefault()
    let inputValue = elFormInput.value.trim()

    todoArr.push({
        id: new Date().getMilliseconds(),
        content: inputValue,
        isCompleted: false
    })

    console.log(todoArr);

    renderTodo(todoArr, elPaper);

    elFormInput.value = null
    elFormInput.focus()
})