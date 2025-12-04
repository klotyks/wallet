function generateHistoryList({ type, category, amount }) {
  const elLi = document.createElement('li')
  elLi.textContent = `${type}: ${category}, Amount: ${amount}`
  elLi.classList.add('list-group-item')
  return elLi
}

function generateOption(category) {
  const elOption = document.createElement('option')
  elOption.textContent = category
  return elOption
}

function generateButtonDeleteCategory(e) {
  // body
}
