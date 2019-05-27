
document.querySelector('button').addEventListener('click', () => {
   const inputs = document.querySelectorAll('input')
   const values = Array.from(inputs).map(input => input.value)
   const panelObj = {
      hour: values[0],
      amount: values[2],
      event: values[1],
   }

   // adding to localstorage the data
   // creating new item or appending to the existing one
   const expensesStr = localStorage.getItem('expenses')
   const expenses = JSON.parse(expensesStr)
   const newExpensesString = expenses
      ? localStorage.getItem('expenses').substring(0, expensesStr.length - 1) + ',' + JSON.stringify(panelObj) + ']'
      : ''
   const expensesRefreshed = expenses ? newExpensesString : `[${JSON.stringify(panelObj)}]`
   localStorage.setItem('expenses', expensesRefreshed)

})