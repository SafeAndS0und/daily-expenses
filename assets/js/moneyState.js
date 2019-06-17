export default function(){
   const limit = parseInt(localStorage.getItem('limit'))
   const history = JSON.parse(localStorage.getItem('history'))
   const expenses = JSON.parse(localStorage.getItem('expenses'))

   let moneySpent
   if(expenses)
      moneySpent = expenses.concat(history || [])
         .map(({amount}) => parseInt(amount))
         .reduce((prev, curr) => prev + curr, 0)

   return moneySpent

}