import React from 'react'

const ProductCategories = () => {

    fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);
  return (
    <div>
        Categories
    </div>
  )
}

export default ProductCategories