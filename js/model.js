const transactions = [{}]
let categoriesIncomes = ['зарплата', 'подарок', 'контерстрайк2']
let categoriesExpenses = ['конфеты', 'бензин', 'контерстрайк2']

function addCategoryIncome(category) {
  categoriesIncomes.push(category)
}
function addCategoryExpense(category) {
  categoriesExpenses.push(category)
}

function removeCategoryIncome(category) {
  categoriesIncomes = categoriesIncomes.filter(c => c !== category)
}
function removeCategoryExpense(category) {
  categoriesExpenses = categoriesExpenses.filter(c => c !== category)
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
categoriesIncomes
addCategoryIncome('нашел')
categoriesIncomes

categoriesExpenses
addCategoryExpense('потерял')
categoriesExpenses

categoriesIncomes
removeCategoryIncome('контерстрайк2')
categoriesIncomes

//

// addTransaction('конфеты', 500, 'expense')
// addTransaction('контерстрайк2', 300, 'income')
// console.log(getBalance())
// transactions[0].amount = 1001
// transactions
// console.log(getBalance())
