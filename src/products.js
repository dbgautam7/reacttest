// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { setProduct } from './redux/slice/productSlice';


// const Products =() => {
//   const dispatch = useDispatch();
//  const fetchProducts=async()=>{
//   const res=await fetch('https://dummyjson.com/products')
// const data=await res.json()
// console.log(data)
// dispatch(setProduct(data))
//  }


// useEffect(() => {
//   fetchProducts()
// }, []);
// const product=useSelector(state=>state.product)
// console.log(product)

//   return (
//     <div>
//         Products Title
//         {product.products.products && product.products.products.map((item,id)=>{
//           return <li key={item.id}>{item.title}</li>
//         })}
//     </div>
//   )
// }

// export default Products