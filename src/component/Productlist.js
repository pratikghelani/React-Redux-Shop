import React , { useState, useEffect } from 'react';
import Product from './Product'
import Spinners from './Spinners'


const Productlist = () => {
    
  const [product, setproduct] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
  
    fetch(  
      `https://fakestoreapi.com/products`,
    )
      .then((response) => {
        return response.json()
      })

      .then((data) => {
        setproduct(data)
        // settotalResults(data);
        // console.log(data.totalResults)
        setLoading(false);
      })
  }

  useEffect(() => {
    fetchData()
   
  }, [])
    return (
        <>
{ 
            loading  ? <Spinners /> :
            //  console.log(loading) 
             <div className="row">
             {product.map((data) => 
                 <Product title={data.title} price={data.price} img={data.image} id={data.id} />
             )}
          </div>
          }
        
        </>
    );
}

export default Productlist;
