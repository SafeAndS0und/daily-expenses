import inputTemplates from './assets/js/templateInputer.js'
import fillComponentProps from './assets/js/fillComponentProps.js'


//register a service worker
if('serviceWorker' in navigator){
   navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('sw registered', reg))
      .catch(err => console.log('sw NOT registered', err))
}

const templatesAndSelectors = [
   {template: "Navbar", selector: "nav"},
   {template: "Summary", selector: ".summary"},
   {
      template: "Panel",
      selector: ".expenses > div",
      props: [
         {hour: '9:00', amount: '80,00', event: `Buy a gift for Ted's birthday`},
         {hour: '16:30', amount: '35,00', event: `Do some groceries`},
      ]
   },
   {
      template: "Panel",
      selector: ".history > div",
      props: [
         {hour: '14:33', amount: '12,00', event: `Buy a asdf`},
         {hour: '16:30', amount: '35,00', event: `Do some groceries`},
      ]
   }
]

async function start(){

   await inputTemplates(templatesAndSelectors)

   templatesAndSelectors
      .filter(obj => obj.props)
      .forEach(fillComponentProps)

}

start()







