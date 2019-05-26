export default function(templatesAndSelectors){

   return new Promise((resolve, reject) => {

      templatesAndSelectors.forEach(obj =>{
         let i = 0
         do{
            fetch(`/daily-expenses/components/templates/${obj.template}.html`)
               .then(response => response.text())
               .then(data => {
                  document.querySelector(obj.selector).innerHTML += data
               })
               i++


         } while(obj.props && obj.props[i])

         setTimeout(resolve, 1000) //todo hmm

      })

   })

}