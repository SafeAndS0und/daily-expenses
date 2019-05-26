export default function(templateInfo){

   let index = 0

   templateInfo.props.forEach(prop => {
      console.dir(document.querySelector(templateInfo.selector).children[index])
      const panel = document.querySelector(templateInfo.selector).children[index]

      panel.querySelector('header > .hour').innerHTML = prop.hour
      panel.querySelector('header > .amount').innerHTML = prop.amount
      panel.querySelector('.event').innerHTML = prop.event

      index++
   })
}