const transactions = []
const categoriesIncome = ['зарплата', 'подарок', 'контерстрайк2']
const categoriesExpense = ['конфеты', 'бензин', 'контерстрайк2']

function addCategoryIncome(category) {
  categoriesIncome.push(category)
}
function addCategoryExpense(category) {
  categoriesExpense.push(category)
}

function getBalance() {
  let result = 0
  for (const transaction of transactions) {
    if (transaction.type === 'income') result += transaction.amount
    else result -= transaction.amount
  }
  return result
}

function createTransaction(category, amount, type) {
  return { category, amount, type }
}

function addTransaction(category, amount, type) {
  const transaction = createTransaction(category, amount, type)
  transactions.push(transaction)
}

// TESTS
categoriesIncome
addCategoryIncome('нашел')
categoriesIncome

categoriesExpense
addCategoryExpense('потерял')
categoriesExpense

//

// addTransaction('конфеты', 500, 'expense')
// addTransaction('контерстрайк2', 300, 'income')
// console.log(getBalance())
// transactions[0].amount = 1001
// transactions
// console.log(getBalance())
