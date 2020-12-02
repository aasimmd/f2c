import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

const ProductScreen = (props) => {
    
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state)=> state.productDetails);
    const {loading, error, product} = productDetails;

    useEffect(()=>{
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    return (

        <div>

            {
                loading? 
                (<LoadingBox></LoadingBox>)
                : error ? 
                (<MessageBox variant="error">{error}</MessageBox>)
                : (

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
                )
            }
            
        </div>
    );
};

export default ProductScreen;