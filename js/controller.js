function handleLoadApp() {
  renderApp()
  renderBalance(getBalance())
  renderBoxIncome(categoriesIncomes)
  renderBoxExpense(categoriesExpenses)
}

function handleIncomeAdd(category, amount) {
  console.log('handleIncomeAdd')
  addTransaction(category, +amount, 'income')
  renderBalance(getBalance())
  renderTransactionsList(transactions)
}

function handleExpense(category, amount) {
  addTransaction(category, +amount, 'expense')
  renderBalance(getBalance())
  renderTransactionsList(transactions)
}

console.log('controlla')
