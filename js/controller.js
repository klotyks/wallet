function handleIncome(name, amount) {
  createIncome(name, +amount)
  renderBalance(balance)
  renderBoxIncome()
}

function handleOutcome(name, amount) {
  createOutcome(name, +amount)
  renderBalance(balance)
  renderBoxOutcome()
}

function handleIncome(category, amount) {
  createIncome(category, +amount) // +amount → number
  renderBalance(balance)
  renderBoxIncome()
  renderHistory() // новая функция
}

function handleOutcome(category, amount) {
  createOutcome(category, +amount)
  renderBalance(balance)
  renderBoxOutcome()
  renderHistory()
}
// function handleControlHistoryIncome(arrayIncome) {
//   renderHistoryListIncome(arrayIncome)

// }

// function handleControlHistoryOutcome(arrayOutcome) {
//   renderHistoryListOutcome(arrayOutcome)
// }
