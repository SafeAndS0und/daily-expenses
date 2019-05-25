export default function (templatesAndSelectors){

   templatesAndSelectors.forEach(obj => {

      fetch(`/daily-expenses/components/templates/${obj.template}.html`)
         .then(response => {
            return response.text()
         })
         .then(data => {
            document.querySelector(obj.selector).innerHTML = data
         })

   })
}