function renderApp() {
  const elButtonAddIncome = document.querySelector('#button-income')
  const elButtonAddExpense = document.querySelector('#button-expense')
  elButtonAddIncome.onclick = onClickButtonAddIncome
  elButtonAddExpense.onclick = onClickAddExpense
}

function renderBalance(sum) {
  const elBalance = document.querySelector('#span-balance')
  elBalance.textContent = sum
}

function renderBoxIncome(categoriesIncomes) {
  const elInputIncome = document.querySelector('#input-income')
  const elSelect = document.querySelector('#select-category-income')
  elInputIncome.value = ''
  elSelect.innerHTML = ''
  elSelect.appendChild(generateOption('Choose income category'))
  elSelect.selectedIndex = 0
  categoriesIncomes.forEach(cat => {
    elSelect.appendChild(generateOption(cat))
  })
}

function renderBoxExpense(categoriesExpenses) {
  const elInputExpense = document.querySelector('#input-expense')
  const elSelect = document.querySelector('#select-category-expense')
  elInputExpense.value = ''
  elSelect.innerHTML = ''
  elSelect.appendChild(generateOption('Choose expense category'))
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
