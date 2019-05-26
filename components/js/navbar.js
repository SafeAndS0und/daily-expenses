
setTimeout(() => {
   const burger = document.querySelector('.burger')
   const menu = document.querySelector('.menu')

   console.log(burger)

   burger.addEventListener('click', () =>{
      console.log('click')
      menu.classList.toggle('menu-active')
   })
}, 1000) //todo yeah
