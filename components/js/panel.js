
setTimeout(() => {
   const panels = document.querySelectorAll('article')


   panels.forEach(panel => {

      // pc
      let mouseX
      let difference

      function moveHandler(e) {
         console.log(event)
         difference = event.x - mouseX // calculate difference to move the element
         panel.style.transform = `translateX(${difference}px)`
      }



      panel.addEventListener('mousedown', event => {
         mouseX = event.x
         panel.style.boxShadow = '2px 2px 6px 0px rgba(0,0,0,0.75)'

         panel.addEventListener('mousemove', moveHandler)
      })

      panel.addEventListener('mouseup', () => {
         panel.style.boxShadow = '0 0 0 0 rgba(0,0,0,0.75)'
         panel.style.transform = `translateX(0px)`
         panel.removeEventListener('mousemove', moveHandler)
      })



      // mobile
      let touchX
      let mobileDifference

      function mobileMoveHandler(e) {
         mobileDifference = event.changedTouches[0].screenX - touchX // calculate difference to move the element
         panel.style.transform = `translateX(${mobileDifference}px)`
      }

      panel.addEventListener('touchstart', event => {
         touchX = event.changedTouches[0].screenX
         panel.style.boxShadow = '2px 2px 6px 0px rgba(0,0,0,0.75)'

         panel.addEventListener('touchmove', mobileMoveHandler)
      })

      panel.addEventListener('touchend', () => {
         panel.style.boxShadow = '0 0 0 0 rgba(0,0,0,0.75)'
         panel.style.transform = `translateX(0px)`
         panel.removeEventListener('touchmove', mobileMoveHandler)
      })

   })

}, 1000) //todo yeah