async function renderCategories() {
  const response = await fetch ('https://rickandmortyapi.com/api/character')
  const categories =  await response.json()
  console.log(response)
  console.log(categories)
}

renderCategories()
