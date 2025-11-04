function renderBalance(sum) {
  const elBalance = document.querySelector('#span-balance')
  elBalance.textContent = sum
}

function renderBoxIncome() {
  const elInputIncome = document.querySelector('#income-input')
  elInputIncome.value = ''
  const elSelect = document.querySelector('#inputGroupSelect01')
  elSelect.selectedIndex = 0
}

function renderBoxOutcome() {
  const elInputOutcome = document.querySelector('#outcome-input')
  elInputOutcome.value = ''
  const elSelect = document.querySelector('#inputGroupSelect02')
  elSelect.selectedIndex = 0
}

function generateHistoryList(sum) {
  const elLi = document.createElement('li')
  elLi.textContent = sum
  elLi.classList.add('list-group-item')
  return elLi
}

function renderHistoryListIncome(arrays) {
  const elOl = document.querySelector('ol-history')
  elOl.innerHTML = ''
  for (const array of arrays) {
    const elLi = generateHistoryList(array)
    elOl.appendChild(elLi)
  }
}
function renderHistoryListOutcome(arrays) {
  const elOl = document.querySelector('ol-history')
  elOl.innerHTML = ''
  for (const array of arrays) {
    const elLi = generateHistoryList(array)
    elOl.appendChild(elLi)
  }
}
// function onInputTextIncome(e) {
//   const incomeNum = e.target.value
//   console.log(incomeNum)
// }
// function onInputTextOutcome(e) {
//   const outcomeNum = e.target.value
//   console.log(outcomeNum)
// }
function onClickConfirmIncome() {
  const elInputIncome = document.querySelector('#income-input')
  const sum = elInputIncome.value
  const elSelect = document.querySelector('#inputGroupSelect01')
  const selectedValue = elSelect.value
  const name = elSelect.options[elSelect.selectedIndex].text
  handleIncome(name, sum)
}
function onClickConfirmOutcome(e) {
  const elInputOutcome = document.querySelector('#outcome-input')
  const sum = elInputOutcome.value
  const elSelect = document.querySelector('#inputGroupSelect02')
  const selectedValue = elSelect.value
  const name = elSelect.options[elSelect.selectedIndex].text
  handleOutcome(name, sum)
}

// const elInputIncome = document.querySelector('#income-input')
// const elInputOutcome = document.querySelector('#outcome-input')
const elButtonConfirmIncome = document.querySelector('#button-income')
const elButtonConfirmOutcome = document.querySelector('#button-outcome')

// elInputIncome.oninput = onInputTextIncome
// elInputOutcome.oninput = onInputTextOutcome
elButtonConfirmIncome.onclick = onClickConfirmIncome
elButtonConfirmOutcome.onclick = onClickConfirmOutcome
