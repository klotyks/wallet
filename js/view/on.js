function onLoadApp() {
  console.log('onLoadApp')
  handleLoadApp()
}

function onClickAddIncome() {
  console.log('test')
  const elInputIncome = document.querySelector('#input-income')
  const elSelect = document.querySelector('#select-category-income')
  const sum = elInputIncome.value
  const name = elSelect.value

  handleIncome(name, sum)
}

function onClickAddExpense() {
  const elInputExpense = document.querySelector('#input-expense')
  const elSelect = document.querySelector('#select-category-expense')
  const sum = elInputExpense.value
  const name = elSelect.value

  handleExpense(name, sum)
}

console.log('ff')
