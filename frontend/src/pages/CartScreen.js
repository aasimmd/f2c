import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux'

const CartScreen = (props) => {
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1; 

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(addToCart(productId, qty));
    }, [dispatch, productId, qty]);

    return (
        <div>
            <hi>
                Cart Screen
            </hi>
            <p>
                ADD TO CART : ProductID : {productId} Qty : {qty}
            </p>
        </div>
    );
};

export default CartScreen;