let balance = 0
let income = []
let outcome = []

function setCurrent(currentBalance) {
  balance = currentBalance
}

function createIncome(name, num) {
  const newIncome = { income: name, amount: num }
  income.push(newIncome)
}

function createOutcome(name, num) {
  const newOutcome = { outcome: name, amount: num }
  outcome.push(newOutcome)
}

function updateBalanceAfterIncome(amount) {
  balance += amount
  return balance
}

function updateBalanceAfterOutcome(amount) {
  balance -= amount
  return balance
}

function history(array) {
  return array.reduce((acc, item) => acc + item.sum, 0)
}
