import React, { useEffect, useState } from 'react'
import axios from 'axios'


function ProductListing() {
    const [product, setProduct] = useState([])
    {    useEffect(() => {
        axios.get(`https://store.rebune.net/api/products.json`).then((response)=>{
            
            console.log(response.data);
            setProduct(response.data);
            
                
        })
     }, [])
     }
    return (
        <div>
          {product.map(products => (
            <h1 className='title' key={products.id}>hi{ product.name }</h1>
        ))}
        </div>
    )
}

export default ProductListing
