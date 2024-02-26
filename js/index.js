const adviceText = document.getElementById('advice-text')
const adviceId = document.getElementById('advice-id')
const loadingContainer = document.getElementById('loading')
const errorText = document.getElementById('error')

const displayAdvice = ({ advice, id }) => {
  adviceText.textContent = advice
  adviceId.textContent = id
}

const updateAdvice = () => {
  errorText.textContent = ''
  loadingContainer.classList.add('bouncing-loader')
  const url = "https://api.adviceslip.com/advice"
  fetch(url)
    .then(response => response.json())
    .then(response => displayAdvice(response.slip))
    .catch(() => errorText.textContent = '\u26A0 An error occured, Please try again.')
    .finally(() => loadingContainer.classList.remove('bouncing-loader'))
}

document.getElementById('update-advice').addEventListener("click", updateAdvice)
updateAdvice()