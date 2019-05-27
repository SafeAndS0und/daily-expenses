import inputTemplates from './assets/js/templateInputer.js'
import fillComponentProps from './assets/js/fillComponentProps.js'
import templatesAndSelectors from './assets/js/templatesAndSelectors.js'


//register a service worker
if('serviceWorker' in navigator){
   navigator.serviceWorker.register('sw.js')
}


const expenses = JSON.parse(localStorage.getItem('expenses'))

async function start(){

   if(expenses)
      expenses.forEach(panelObj =>{
         templatesAndSelectors[2].props.push(panelObj)
      })

   await inputTemplates(templatesAndSelectors)

   templatesAndSelectors
      .filter(obj => obj.props)
      .forEach(fillComponentProps)

}

start()







