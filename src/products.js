import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from './redux/slice/productSlice';


const Products =() => {
  const product=useSelector(state=>state.product)
  const {id}=useSelector(state=>state.product.products.products[0])
console.log("sfs",product.products.products[0].id)
console.log("hi",id)

  const dispatch = useDispatch();
 const fetchProducts=async(id)=>{
  const res=await fetch('https://dummyjson.com/products')
const data=await res.json()
console.log(data)
dispatch(setProduct(data))
 }

const triggerDelete=(id)=>{
  fetch(`https://dummyjson.com/products/${id}`, {
  method: 'DELETE',
})
.then(res => res.json())
.then(data => {
  console.log(data);
});
}

useEffect(() => {
  fetchProducts()
}, []);


  return (
    <div>
        Products Title
        {product.products.products && product.products.products.map((item,id)=>{
          return <li key={item.id}>{item.title}</li>
        })}

        <button onClick={()=>triggerDelete()}>Delete</button>
    </div>
  )
}

export default Products