function renderApp() {
  const elButtonConfirmIncome = document.querySelector('#button-income')
  const elButtonConfirmOutcome = document.querySelector('#button-outcome')
  elButtonConfirmIncome.onclick = onClickConfirmIncome
  elButtonConfirmOutcome.onclick = onClickConfirmOutcome
}

function renderBalance(sum) {
  const elBalance = document.querySelector('#span-balance')
  elBalance.textContent = sum
}

function renderBoxIncome(categoriesIncomes) {
  const elInputIncome = document.querySelector('#income-input')
  elInputIncome.value = ''
  const elSelect = document.querySelector('#inputGroupSelect01')
  elSelect.selectedIndex = 0
  categoriesIncomes.forEach(cat => {
    elSelect.appendChild(generateOption(cat))
  })
}

function renderBoxExpense(categoriesExpenses) {
  const elInputOutcome = document.querySelector('#outcome-input')
  elInputOutcome.value = ''
  const elSelect = document.querySelector('#inputGroupSelect02')
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
