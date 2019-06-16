const createPanels = () =>{
   const panels = document.querySelectorAll('article > .panel-info')
   panels.forEach(panel =>{

      panel.removeEventListener('touchstart', mobileTouchStartHandler)
      panel.removeEventListener('touchend', touchEndHandler)

      //find the icon to the corresponding panel
      const icon = panel.parentElement.querySelector('i')

      // pc
      let mouseX
      let difference

      function moveHandler(e){
         difference = event.x - mouseX // calculate difference to move the element
         panel.style.transform = `translateX(${difference}px)`
         panel.style.boxShadow = '2px 2px 6px 0px rgba(0,0,0,0.75)'
         icon.className = 'fas fa-check-square fa-2x icon moving'
      }


      panel.addEventListener('mousedown', event =>{
         mouseX = event.x
         panel.addEventListener('mousemove', moveHandler)
      })

      panel.addEventListener('mouseup', () =>{
         panel.style.boxShadow = '0 0 0 0 rgba(0,0,0,0.75)'
         panel.style.transform = `translateX(0px)`
         panel.removeEventListener('mousemove', moveHandler)
         icon.className = 'fas fa-shopping-cart icon fa-2x'
      })


      // mobile
      let touchX
      let mobileDifference

      function mobileMoveHandler(e){
         mobileDifference = event.changedTouches[0].screenX - touchX // calculate difference to move the element
         panel.style.transform = `translateX(${mobileDifference}px)`

         panel.style.boxShadow = '2px 2px 6px 0px rgba(0,0,0,0.75)'
         icon.className = 'fas fa-check-square fa-2x icon moving'
      }

      function mobileTouchStartHandler(event){
         touchX = event.changedTouches[0].screenX
         panel.addEventListener('touchmove', mobileMoveHandler)
      }

      function touchEndHandler(event){
         {
            panel.style.boxShadow = '0 0 0 0 rgba(0,0,0,0.75)'
            panel.style.transform = `translateX(0px)`
            panel.removeEventListener('touchmove', mobileMoveHandler)


            // put it into history or delete it from history if its dragged enough
            if(mobileDifference > 150){

               // make the expense disappear
               function removeExpense(){
                  // visually
                  panel.parentElement.style.opacity = '0'
                  setTimeout(() => panel.parentElement.style.display = 'none', 320)

                  // from storage
                  let expenses = JSON.parse(localStorage.getItem('expenses'))

                  let removedExpense = null

                  expenses = expenses.filter(expense => { // compare to the html
                     if(expense.event !== panel.children[1].innerText)
                        return true
                     else
                        removedExpense = expense
                  })

                  localStorage.setItem('expenses', JSON.stringify(expenses))

                  return removedExpense
               }

               // make it appear in the history
               function moveToHistory(expense){
                  // visually
                  const article = document.createElement('article')
                  article.className = 'history-before'
                  article.innerHTML = `
                             <div class="panel-info">
                                <header>
                                    <p class="hour">
                                    ${expense.hour}
                                    </p>
                                    <p class="amount">${expense.amount}</p>
                                </header>

                                <h4 class="event">${expense.event}</h4>
                             </div>

                             <i class="fas fa-shopping-cart icon fa-2x"></i>
               `
                  document.querySelector('.history div').appendChild(article)

                  // to storage
                  const history = JSON.parse(localStorage.getItem('history'))
                  history.push(expense)
                  localStorage.setItem('history', JSON.stringify(history))

               }

               moveToHistory(removeExpense())

            }

            icon.className = 'fas fa-shopping-cart icon fa-2x'
         }
      }

      panel.addEventListener('touchstart', mobileTouchStartHandler)
      panel.addEventListener('touchend', touchEndHandler)
   })
}


setTimeout(createPanels, 1000) //todo yeah


//
//
// const fromExpToHis = (expenses, panelInfo) =>{
//    expenses.splice(expenses.indexOf(panelInfo), 1) // from expenses => history
//    localStorage.setItem('expenses', JSON.stringify(expenses))
//
//    console.log(expenses, panelInfo)
//
//    const article = document.createElement('article')
//    article.className = 'history-before'
//    article.innerHTML = `
//                              <div class="panel-info">
//                                 <header>
//                                     <p class="hour">
//                                     ${panelInfo.hour}
//                                     </p>
//                                     <p class="amount">${panelInfo.amount}</p>
//                                 </header>
//
//                                 <h4 class="event">${panelInfo.event}</h4>
//                              </div>
//
//                              <i class="fas fa-shopping-cart icon fa-2x"></i>
//                `
//    document.querySelector('.history div').appendChild(article)
//    createPanels()
//
// }
//
// panel.parentElement.style.opacity = '0'
// setTimeout(() => panel.parentElement.style.display = 'none', 320)
//
// const expenses = JSON.parse(localStorage.getItem('expenses'))
// const history = JSON.parse(localStorage.getItem('history'))
//
// expenses.concat(history).forEach(panelInfo =>{
//    if(panelInfo.event === panel.querySelector('.event').innerHTML){
//       const history = localStorage.getItem('history')
//
//
//       if(history){ // if there is already item in history, just add the deleted item from expenses
//
//          // if it's a history element delete it entirely
//          if(panel.parentElement.className === 'history-before'){
//
//             const historyObjs = JSON.parse(history)
//             const index = historyObjs.findIndex(obj => obj.event === panelInfo.event)
//             historyObjs.splice(index, 1)
//             localStorage.setItem('history', JSON.stringify(historyObjs))
//
//          } else{ // else put it into the history folder
//             const historyObjs = JSON.parse(history)
//             historyObjs.push(panelInfo)
//             localStorage.setItem('history', JSON.stringify(historyObjs))
//
//             fromExpToHis(expenses, panelInfo)
//          }
//
//       } else{
//          localStorage.setItem('history', `[${JSON.stringify(panelInfo)}]`)
//
//          fromExpToHis(expenses, panelInfo)
//       }
//    }
// })