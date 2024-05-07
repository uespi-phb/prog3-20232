
window.addEventListener('load', () => {
  document.forms.student.addEventListener('submit', formSubmit)
})

const formSubmit = (event) => {
  let validForm = true
  const form = event.target

  const studentId = form['student-id']
  if (studentId.value.length != 6) {
    studentId.nextElementSibling.textContent = 'A matrícula deve possuir 6 caracteres'
    validForm = false
  }

  const studentName = form['student-name']
  if (studentName.value.length < 10) {
    studentName.nextElementSibling.textContent = 'O nome deve possuir, no mínimo, 10 caracteres'
    validForm = false
  }

  const studentEmail = form['student-email']
  const reEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/
  if (!reEmail.test(studentEmail.value)) {
    studentEmail.nextElementSibling.textContent = 'O e-mail inválido'
    validForm = false
  }

  if (!validForm) {
    event.preventDefault()
  }
}