function renderBalance(sum) {
  const elBalance = document.querySelector('#span-balance')
  elBalance.textContent = sum
}

function renderCategoryIncome(categoriesIncomes) {
  const elIncomeA = document.querySelector('#income-value-a')
  const elIncomeB = document.querySelector('#income-value-b')
  const elIncomeC = document.querySelector('#income-value-c')
  elIncomeA.textContent = categoriesIncomes[0]
  elIncomeB.textContent = categoriesIncomes[1]
  elIncomeC.textContent = categoriesIncomes[2]
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

function renderTransactionsList(transactions) {
  const elOl = document.querySelector('#ol-history')
  elOl.innerHTML = ''
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
  elOl.innerHTML = ''

  transactions.forEach((transaction, index) => {
    const elLi = generateHistoryList({
      type: transaction.type,
      category: transaction.category,
      amount: transaction.amount,
    })
    elLi.textContent = `${elLi.textContent}`
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

// СЛУШАТЕЛЬ СОБЫТИЙ - event listener
// [выковыриваем данные, которые ввел юзер] и отправляем в контроллер
// РЕНДЕР - render
// перерисовывает html часть страницы
// ГЕНЕРАТОР - generator
// генератор - генерирует html код

// onClickButtonAddOutcome(e)

function onClickConfirmOutcome() {
  const elInputOutcome = document.querySelector('#outcome-input')
  const sum = elInputOutcome.value
  const elSelect = document.querySelector('#inputGroupSelect02')
  const name = elSelect.options[elSelect.selectedIndex].text

  handleOutcome(name, sum)
}

const elButtonConfirmIncome = document.querySelector('#button-income')
const elButtonConfirmOutcome = document.querySelector('#button-outcome')

elButtonConfirmIncome.onclick = onClickConfirmIncome
elButtonConfirmOutcome.onclick = onClickConfirmOutcome

// renderBalance(balance)
// renderCategoryIncome(categoriesIncomes)
renderBoxIncome()
renderBoxOutcome()
renderHistory()
