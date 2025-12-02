function handleLoadApp() {
  renderApp()
  renderBalance(getBalance())
  renderBoxIncome(categoriesIncomes)
  renderBoxExpense(categoriesExpenses)
}

function handleIncome(category, amount) {
  createTransaction(category, +amount, 'income')
  addCategoryIncome(category)
  renderBalance(getBalance())
  renderTransactionsList(transactions)
}

function handleExpense(category, amount) {
  createTransaction(category, +amount, 'expense')
  addCategoryExpense(category)
  renderBalance(getBalance())
  renderTransactionsList(transactions)
}

console.log('controlla')
