function handleLoadApp() {
  renderApp()
  renderBalance(getBalance())
  renderBoxIncome(categoriesIncomes)
  renderBoxExpense(categoriesExpenses)
}

function handleIncomeAdd(category, amount) {
  addTransaction(category, +amount, 'income')
  renderBalance(getBalance())
  renderTransactionsList(transactions)
  renderBoxIncome(categoriesIncomes)
}

function handleExpense(category, amount) {
  addTransaction(category, +amount, 'expense')
  renderBalance(getBalance())
  renderTransactionsList(transactions)
  renderBoxExpense(categoriesExpenses)
}

console.log('controlla')
