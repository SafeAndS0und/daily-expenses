setTimeout(() =>{
   const panels = document.querySelectorAll('article > .panel-info')


   panels.forEach(panel =>{

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

      panel.addEventListener('touchstart', event =>{
         touchX = event.changedTouches[0].screenX


         panel.addEventListener('touchmove', mobileMoveHandler)
      })

      panel.addEventListener('touchend', () =>{
         panel.style.boxShadow = '0 0 0 0 rgba(0,0,0,0.75)'
         panel.style.transform = `translateX(0px)`
         panel.removeEventListener('touchmove', mobileMoveHandler)


         // put it into history or delete it from history if its dragged enough
         if(mobileDifference > 150){
            panel.parentElement.style.opacity = '0'
            setTimeout(() => panel.parentElement.style.display = 'none', 320)

            const expenses = JSON.parse(localStorage.getItem('expenses'))

            expenses.forEach(panelInfo =>{
               if(panelInfo.event === panel.querySelector('.event').innerHTML)
                  expenses.splice(expenses.indexOf(panelInfo), 1) // deleting this object from localstorage

               localStorage.setItem('expenses', JSON.stringify(expenses))

               const history = localStorage.getItem('history')

               if(history){ // if there is already item in history, just add the deleted item from expenses
                  const historyObjs = JSON.parse(history)
                  historyObjs.push(panelInfo)
                  localStorage.setItem('history', JSON.stringify(historyObjs))
               } else{
                  localStorage.setItem('history', `[${JSON.stringify(panelInfo)}]`)
               }
            })
         }


         icon.className = 'fas fa-shopping-cart icon fa-2x'
      })

   })

}, 1000) //todo yeah