import inputTemplates from './assets/js/templateInputer.js'
import fillComponentProps from './assets/js/fillComponentProps.js'
import templatesAndSelectors from './assets/js/templatesAndSelectors.js'




//register a service worker
if('serviceWorker' in navigator){
   navigator.serviceWorker.register('sw.js')
}


async function drawPage(){

   const expenses = JSON.parse(localStorage.getItem('expenses'))
   const history = JSON.parse(localStorage.getItem('history'))

   // pushing data from localstorage to one object
   if(expenses)
      expenses.forEach(panelObj =>{
         templatesAndSelectors[2].props.push(panelObj)
      })

   if(history)
      history.forEach(panelObj =>{
         templatesAndSelectors[3].props.push(panelObj)
      })

   // use the mentioned object to create the html elements (without data)
   await inputTemplates(templatesAndSelectors)

   // fill the data to the created elements above - only these ones that have props (data)
   templatesAndSelectors
      .filter(obj => obj.props)
      .forEach(fillComponentProps)

}

export default drawPage()








