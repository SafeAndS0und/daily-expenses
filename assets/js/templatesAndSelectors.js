const templatesAndSelectors = [
   {template: "Navbar", selector: "nav"},
   {template: "Summary", selector: ".summary"},
   {
      template: "Panel",
      selector: ".expenses > div",
      props: []
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


export default templatesAndSelectors