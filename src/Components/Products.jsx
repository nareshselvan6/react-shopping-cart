import React, { useState } from 'react';

const Products = ({foodmenu,setCartQuantity} ) => {

    const [cartcount,setCartcount]=useState([])

    return (
        <>
            <div className="container px-4 px-lg-5 mt-0">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {foodmenu?.map((element,index)=>{
                        return(
                              <div className="col mb-5" key={element.id}>
                        <div className="card h-100 mt-4 mb-4 ">
                            
                        <img className="card-img-top" src="https://www.shutterstock.com/image-vector/rice-dish-deep-bowl-herbs-600nw-2277508955.jpg" alt="FriedRice" />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                   
                                    <h5 className="fw-bolder">{element.dish}</h5>
                                   
                                    <h5 className="fw-bolder">{element.cost}</h5>
                                </div>
                            </div>
                          {console.log(cartcount)}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                               
                                    {cartcount.filter((e)=>e.id===element.id).length !== 0?  <button className="btn btn-outline-dark mt-auto btn-danger " onClick={()=>{
                                      const res=  cartcount.filter((e)=>e.id!==element.id)
                                      setCartcount([...res])
                                      setCartQuantity([...res])
                                         }}>Remove From Cart</button>: <button className="btn btn-outline-dark mt-auto" onClick={()=>{ setCartcount([...cartcount,element])
                                         setCartQuantity([...cartcount,element])}}>Add to Cart</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    })}
                  
                </div>
            </div>
                 
        </>
    );
};

export default Products;