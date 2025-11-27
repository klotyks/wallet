let balance = 0
const transactions = []
// const incomes = []
// const outcomes = []

// const historiesList = []
// const historyItem = {}
// const peoplesList = []
// const people = {}

// КОНВЕРГЕНЦИЯ

// function createIncome(category, amount) {
//   const income = { category, amount, type: 'Income' }
//                  { category, amount, type: 'Outcome' }
//                  // ОДИНАКОВЫЕ ПО СТРУКТУРЕ
//                  // называем эту структуру одинаковым словом
//   incomes.push(income)
//   transactions.push(income) // добавляем в общий массив
//   chto_bi_bilo.push(income)
//   updateBalanceAfterIncome(amount)
// }

// function createOutcome(category, amount) {
//   const outcome = { category, amount, type: 'Outcome' }
//   outcomes.push(outcome)
//   transactions.push(outcome)
//   updateBalanceAfterOutcome(amount)
// }

function createTransaction(category, amount, type) {
  const transaction = { category, amount, type }
  transactions.push(transaction)

  if (type === 'income') {
    updateBalanceAfterIncome(amount)
  } else {
    updateBalanceAfterOutcome(amount)
  }
}

function updateBalanceAfterIncome(amount) {
  balance += amount
}
function updateBalanceAfterOutcome(amount) {
  balance -= amount
}
