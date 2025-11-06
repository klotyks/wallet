function renderBalance(sum) {
  const elBalance = document.querySelector('#span-balance')
  elBalance.textContent = sum
}

function renderBoxIncome() {
  const elInputIncome = document.querySelector('#income-input')
  elInputIncome.value = ''
  const elSelect = document.querySelector('#inputGroupSelect01')
  elSelect.selectedIndex = 0
}

function renderBoxOutcome() {
  const elInputOutcome = document.querySelector('#outcome-input')
  elInputOutcome.value = ''
  const elSelect = document.querySelector('#inputGroupSelect02')
  elSelect.selectedIndex = 0
}

function generateHistoryList({ type, category, amount }) {
  const elLi = document.createElement('li')
  elLi.textContent = `${type}: ${category}, Amount: ${amount}`
  elLi.classList.add('list-group-item')
  return elLi
}

function renderHistoryListIncome(incomes) {
  const elOl = document.querySelector('ol-history')
  elOl.innerHTML = ''
  for (const income of incomes) {
    const elLi = generateHistoryList(income)
    elOl.appendChild(elLi)
  }
}

function renderHistory() {
  const elOl = document.querySelector('#ol-history')
  elOl.innerHTML = '' // очищаем

  transactions.forEach((transaction, index) => {
    const elLi = generateHistoryList({
      type: transaction.type,
      category: transaction.category,
      amount: transaction.amount,
    })
    elLi.textContent = `${index + 1}. ${elLi.textContent}` // нумеруем
    elOl.appendChild(elLi)
  })
}

function onClickConfirmIncome() {
  const elInputIncome = document.querySelector('#income-input')
  const sum = elInputIncome.value
  const elSelect = document.querySelector('#inputGroupSelect01')
  const name = elSelect.options[elSelect.selectedIndex].text

  handleIncome(name, sum) // передаём имя и сумму
}
function onClickConfirmOutcome() {
  const elInputOutcome = document.querySelector('#outcome-input')
  const sum = elInputOutcome.value
  const elSelect = document.querySelector('#inputGroupSelect02')
  const name = elSelect.options[elSelect.selectedIndex].text

  handleOutcome(name, sum)
}
// const elInputIncome = document.querySelector('#income-input')
// const elInputOutcome = document.querySelector('#outcome-input')
const elButtonConfirmIncome = document.querySelector('#button-income')
const elButtonConfirmOutcome = document.querySelector('#button-outcome')

// elInputIncome.oninput = onInputTextIncome
// elInputOutcome.oninput = onInputTextOutcome
elButtonConfirmIncome.onclick = onClickConfirmIncome
elButtonConfirmOutcome.onclick = onClickConfirmOutcome

// После инициализации
renderBalance(balance)
renderBoxIncome()
renderBoxOutcome()
renderHistory() // добавь
