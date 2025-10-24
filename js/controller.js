function handleIncome(name, amount) {
  updateBalanceAfterIncome(+amount)
  createIncome(name, +amount)
  renderBalance(balance)
  renderBoxIncome()
}

function handleOutcome(name, amount) {
  updateBalanceAfterOutcome(+amount)
  createOutcome(name, +amount)
  renderBalance(balance)
  renderBoxOutcome()
}
