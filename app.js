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


async function fetchProductsByCategory(categoryName) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
  // console.log(response)
  const products = await response.json()
  // console.log(products)

  const productsSection = document.querySelector('.products')
  let productElements = ''

  products.forEach(product => {
    productElements = productElements + `
    <article class="product">
      <img class="product__image" src="${product.image}" alt="imagen de producto">
      <div class="product__description">
        <h2 class="product__title">${product.title}</h2>
        <p class="product__price" >S/ ${product.price}</p>
      </div>
    </article>
    `
  })

  productsSection.innerHTML = productElements
}