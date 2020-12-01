import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rating from '../components/Rating';

const ProductScreen = (props) => {
    
    const [products, setProducts] = useState([]);
    //component didmount executes only ones | handler , dependencies
    useEffect(()=>{
        //ajax request
        const fetchData = async ()=>{
            const {data} = await axios.get('/api/products');
            setProducts(data);
        };
        fetchData();
    }, []);

    const product = products.find((x)=> x._id === props.match.params.id);

    if(!product)
    {
        return <div>Product Not Found</div>
    }

    return (

        <div>
            <div className="row top">

                
                <div className="col-2">
                    <img className="large card" src={product.image} alt={product.name}/>
                </div>

                
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                            Price : ₹{product.price}/kg
                        </li>
                        <li>
                            Description :
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>

                
                <div className="col-1">

                    <div className="card card-body">
                        <ul>
                           
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div class="price">₹{product.price}/kg</div>
                                </div>
                            </li>
                            
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div> 
                                        {
                                        product.countInStock>0 ?
                                        (<span className="success">In Stock</span>)
                                        :(<span className="stockerr">Unavailable</span>)
                                        }
                                    </div>
                                </div>
                            </li>

                            <li>
                                <button className="primary block">Add to cart</button>
                            </li>

                        </ul>
                    </div>
                
                </div>

            </div>
        </div>
    );
};

export default ProductScreen;