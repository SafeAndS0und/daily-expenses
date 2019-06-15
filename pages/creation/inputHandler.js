document.querySelector('button').addEventListener('click', () =>{
   const inputs = document.querySelectorAll('input')
   const values = Array.from(inputs).map(input => input.value)
   const panelObj = {
      hour: values[0],
      amount: values[2],
      event: values[1],
   }

   // adding to localstorage the data
   // creating new item or appending to the existing one
   const expenses = JSON.parse(localStorage.getItem('expenses'))
   if(expenses){
      expenses.push(panelObj)
      localStorage.setItem('expenses', JSON.stringify(expenses))
   }
   else
      localStorage.setItem('expenses', `[${JSON.stringify(panelObj)}]`)


})