import appLoaded from '../../app.js'
import moneyState from '../../assets/js/moneyState.js'


async function initiate(){
   await appLoaded
   const moneyDiv = document.querySelector('.money-status')
   const h1 = moneyDiv.children[0]
   const input = moneyDiv.children[1]
   const button = moneyDiv.children[2]
   const left = moneyDiv.children[3].children[0]

   const limit = parseInt(localStorage.getItem('limit'))

   if(limit){
      const moneySpent = moneyState()

      h1.innerHTML = `${moneySpent} / ${limit}`
      left.innerHTML = limit - moneySpent
   }

   h1.addEventListener('click', () =>{
      input.style.display = 'inline-block'
      button.style.display = 'inline-block'
   })

   button.addEventListener('click', () =>{
      input.style.display = 'none'
      button.style.display = 'none'

      const moneySpent = moneyState()

      if(input.value && input.value > 0){
         h1.innerHTML = `${moneySpent || input.value} / ${input.value}`
         left.innerHTML = input.value - moneySpent || input.value
         localStorage.setItem('limit', input.value)
      }
   })

   drawColumns()
}

initiate()

function drawColumns(){
   const history = JSON.parse(localStorage.getItem('history'))
   const chart = document.querySelector('.chart .columns')

   const moneySpent
      = history
      .map(({amount}) => amount)
      .reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0)

   history.forEach(hObj => {
      const percentage = hObj.amount / moneySpent
      const hour = hObj.hour.substring(0, 2)


      const article = document.createElement('article')
      article.innerHTML = hObj.amount
      article.style.height = 150 * percentage + 'px'
      article.style.gridColumn = Math.floor(hour / 2)
      chart.appendChild(article)
   })
}