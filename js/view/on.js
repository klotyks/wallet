function onLoadApp() {
  console.log('onLoadApp')
  handleLoadApp()
}

function onClickConfirmIncome() {
  const elInputIncome = document.querySelector('#income-input')
  const elSelect = document.querySelector('#inputGroupSelect01')

  const sum = elInputIncome.value
  const name = elSelect.value

  handleIncome(name, sum) // передаём имя и сумму
}

function onClickConfirmOutcome() {
  const elInputOutcome = document.querySelector('#outcome-input')
  const sum = elInputOutcome.value
  const elSelect = document.querySelector('#inputGroupSelect02')
  const name = elSelect.options[elSelect.selectedIndex].text

  handleOutcome(name, sum)
}

console.log('ff')
