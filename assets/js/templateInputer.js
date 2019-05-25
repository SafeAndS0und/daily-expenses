export default function (){

   fetch('/daily-expenses/components/templates/Navbar.html')
      .then(response => {
         return response.text()
      })
      .then(data => {
         document.querySelector("nav").innerHTML = data
      })
}