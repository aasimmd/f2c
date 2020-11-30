import React from 'react';
import Product from './components/Product';
import data from './data';

function App() {
  return (
    <div className="grid-container">
        
        <header className="row">
            <div>
                <a href="index.html" className='brand'>Farmer to Consumer</a>
            </div>
            <div>
                <a id="cart" href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>

        <main>
            <div className="row center">

                {
                    data.products.map((product)=>
                    
                        <Product key={product._id} product={product}></Product>

                    )
                }

                
            </div>
        </main>

        <footer className='row center'>
            This is new
        </footer>
        
    </div>
  );
}

export default App;
