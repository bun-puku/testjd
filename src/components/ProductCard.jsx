import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


export default function ProductCard({product}){
const { addItem } = useContext(CartContext)
return (
<article className="card">
<img src={product.imageURL} alt={product.name} />
<div className="card-body">
<h3 className="card-title">{product.name}</h3>
<div className="card-price">${product.price.toFixed(2)}</div>
<button style={{marginTop:8}} onClick={()=>addItem(product)}>Add to cart</button>
</div>
</article>
)
}