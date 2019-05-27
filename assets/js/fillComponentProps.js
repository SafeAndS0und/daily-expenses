export default function(templateInfo){

   let index = 0

   templateInfo.props.forEach(prop => {
      const panel = document.querySelector(templateInfo.selector).children[index]

      panel.querySelector('header > .hour').innerHTML = prop.hour
      panel.querySelector('header > .amount').innerHTML = prop.amount
      panel.querySelector('.event').innerHTML = prop.event

      console.dir(panel)
      if(templateInfo.selector === '.history > div') {
         panel.className = 'history-before'
      }

      index++
   })
}