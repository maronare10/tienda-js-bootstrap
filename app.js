async function renderCategories() {
  const response = await fetch ('https://fakestoreapi.com/products/categories')
  const categories =  await response.json()
  // console.log(response)
  // console.log(categories)
  
  const categoriesSection = document.querySelector('.categories')
  let categoryButtons = ''
  
  categories.forEach(category => {
    categoryButtons = categoryButtons + `<button>${category}</button>`
  })
  // console.log(categoryButtons)
  
  categoriesSection.innerHTML = categoryButtons

  const buttons = document.querySelectorAll('button')

  buttons.forEach(button => {
    button.addEventListener('click', event => {
      console.log(event)
      fetchProductsByCategory(event.target.textContent)
    })

  })
}
renderCategories()


