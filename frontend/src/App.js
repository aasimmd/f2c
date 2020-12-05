import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import CartScreen from './pages/CartScreen';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';

function App() {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    return (
    <BrowserRouter>
    <div className="grid-container">
        
        <header className="row">
            
            <div>
                <Link to="/" className='brand'>
                    Farmer to Consumer
                </Link>
            </div>
            <div>
                <Link to="/cart" id="cart">Cart
                {
                    cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                    )
                }
                </Link>
                <Link to="/signin" >Sign In</Link>
            </div>
        </header>

        <main>

            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>

        </main>

        <footer className='row center'>
            This is new
        </footer>
        
    </div>

    </BrowserRouter>
    );
}

export default App;
