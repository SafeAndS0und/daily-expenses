export default function(templatesAndSelectors){

   return new Promise((resolve, reject) =>{

      templatesAndSelectors.forEach(obj =>{

         if(obj.props && obj.props.length === 0) // don't draw empty panels
            return

         let i = 0
         let promises = []
         do{
            promises.push(fetch(`/daily-expenses/components/templates/${obj.template}.html`))
            i++
         } while(obj.props && obj.props[i])

         Promise.all(promises)
            .then(resArr =>{
               resArr.forEach(async res =>{
                  const data = await res.text()
                  document.querySelector(obj.selector).innerHTML += data
               })
            })

         setTimeout(resolve, 1000) //todo hmm

      })

   })

}