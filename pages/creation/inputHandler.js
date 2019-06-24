document.querySelector('button').addEventListener('click', () =>{
   const inputs = document.querySelectorAll('input')
   const values = Array.from(inputs).map(input => input.value)
   const p = document.querySelector('p')


   const panelObj = {
      hour: values[2],
      amount: values[1],
      event: values[0],
   }


   p.style.opacity = '1'

   setTimeout(() => p.style.opacity = '0', 1500)

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