export default function(templatesAndSelectors){

   let promises = []

   templatesAndSelectors.forEach(obj =>{

      if(obj.props && obj.props.length === 0) // don't draw empty panels
         return

      let i = 0

      do{
         let promise = fetch(`/daily-expenses/components/templates/${obj.template}.html`)
            .then(async res =>{
               const data = await res.text()
               document.querySelector(obj.selector).innerHTML += data
            })
         promises.push(promise)
         i++
      } while(obj.props && obj.props[i])


   })

   return Promise.all(promises)
}