import inputTemplates from './assets/js/templateInputer.js'


//register a service worker
if('serviceWorker' in navigator){
   navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('sw registered', reg))
      .catch(err => console.log('sw NOT registered', err))
}

const templatesAndSelectors = [
   {template: "Navbar", selector: "nav"},
   {template: "Summary", selector: ".summary"}
]
inputTemplates(templatesAndSelectors) //fill the index.html with templates

