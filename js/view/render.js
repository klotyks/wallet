function renderApp() {
  const elButtonAddIncome = document.querySelector('#button-income')
  const elButtonAddExpense = document.querySelector('#button-expense')
  elButtonAddIncome.onclick = onClickAddIncome
  elButtonAddExpense.onclick = onClickAddExpense
}

function renderBalance(sum) {
  const elBalance = document.querySelector('#span-balance')
  elBalance.textContent = sum
}

function renderBoxIncome(categoriesIncomes) {
  const elInputIncome = document.querySelector('#input-income')
  elInputIncome.value = ''
  const elSelect = document.querySelector('#select-category-income')
  elSelect.selectedIndex = 0
  categoriesIncomes.forEach(cat => {
    elSelect.appendChild(generateOption(cat))
  })
}

function renderBoxExpense(categoriesExpenses) {
  const elInputExpense = document.querySelector('#input-expense')
  elInputExpense.value = ''
  const elSelect = document.querySelector('#select-category-expense')
  elSelect.selectedIndex = 0
  categoriesExpenses.forEach(cat => {
    elSelect.appendChild(generateOption(cat))
  })
}

function renderTransactionsList(transactions) {
  const elOl = document.querySelector('#ol-history')
  elOl.innerHTML = ''
  for (const transaction of transactions) {
    const elLi = generateHistoryList(transaction)
    elOl.appendChild(elLi)
  }
}
