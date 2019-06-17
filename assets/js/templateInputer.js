export default function(templatesAndSelectors){

   return new Promise((resolve, reject) =>{

      templatesAndSelectors.forEach(obj =>{

         if(obj.props && obj.props.length === 0) // don't draw empty panels
            return

         let i = 0
         do{
            fetch(`/daily-expenses/components/templates/${obj.template}.html`)
               .then(response => response.text())
               .then(data =>{
                  document.querySelector(obj.selector).innerHTML += data
               })
            i++

         } while(obj.props && obj.props[i])
         {

         }

         setTimeout(resolve, 1000) //todo hmm

      })

   })

}