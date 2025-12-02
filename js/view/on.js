function onLoadApp() {
  console.log('onLoadApp')
  handleLoadApp()
}

function onClickAddIncome() {
  console.log('test')
  const elInputIncome = document.querySelector('#income-input')
  const elSelect = document.querySelector('#inputGroupSelect01')
  const sum = elInputIncome.value
  const name = elSelect.value

  handleIncome(name, sum)
}

function onClickAddExpense() {
  const elInputOutcome = document.querySelector('#expense-input')
  const elSelect = document.querySelector('#inputGroupSelect02')
  const sum = elInputOutcome.value
  const name = elSelect.value

  handleExpense(name, sum)
}

console.log('ff')
