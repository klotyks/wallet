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
  createIncome(category, +amount)
  renderBalance(balance)
  renderBoxIncome()
  renderHistory()
}

function handleOutcome(category, amount) {
  createOutcome(category, +amount)
  renderBalance(balance)
  renderBoxOutcome()
  renderHistory()
}
