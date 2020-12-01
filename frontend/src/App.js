import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        
        <header className="row">
            
            <div>
                <a className='brand'>
                    <Link to="/">Farmer to Consumer</Link>
                </a>
            </div>
            <div>
                <a id="cart" href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>

        <main>

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
