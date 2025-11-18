let balance = 0

const incomes = []
const outcomes = []

const transactions = []

function createIncome(category, amount) {
  const income = { category, amount, type: 'Income' }
  incomes.push(income)
  transactions.push(income) // добавляем в общий массив
  updateBalanceAfterIncome(amount)
}

function createOutcome(category, amount) {
  const outcome = { category, amount, type: 'Outcome' }
  outcomes.push(outcome)
  transactions.push(outcome)
  updateBalanceAfterOutcome(amount)
}
function updateBalanceAfterIncome(amount) {
  balance += amount
}
function updateBalanceAfterOutcome(amount) {
  balance -= amount
}
