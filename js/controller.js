function handleLoadApp() {
  renderApp()
  renderBalance(getBalance())
  renderBoxIncome(categoriesIncomes)
  renderBoxExpense(categoriesExpenses)
  // renderHistory()
}

function handleIncome(category, amount) {
  createTransaction(category, +amount, 'income')
  renderBalance(getBalance())
}

function handleOutcome(category, amount) {
  createTransaction(category, +amount, 'expense')
  renderBalance(getBalance())
}

console.log('controlla')
