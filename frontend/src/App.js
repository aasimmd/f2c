import logo from './logo.svg';

function App() {
  return (
    <div className="grid-container">
        
        <header className="row">
            <div>
                <a href="index.html" className='brand'>Farmer to Consumer</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>

        <main>
            <div className="row center">

                <div className="card">

                    <a href="product.html">
                        <img className='medium' src="./images/tomato.jpg" alt="tomato"/>
                    </a>

                    <div className="card-body">

                        <a href="product.html">
                            <h2>Tomato</h2>
                        </a>

                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>

                        <div className='price'>
                            30rs/kg
                        </div>
                        
                    </div>

                </div>


                <div className="card">

                    <a href="product.html">
                        <img className='medium' src="./images/potato.jpg" alt="tomato"/>
                    </a>

                    <div className="card-body">

                        <a href="product.html">
                            <h2>Tomato</h2>
                        </a>

                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>

                        <div className='price'>
                            30rs/kg
                        </div>
                        
                    </div>

                </div>

                
                <div className="card">

                    <a href="product.html">
                        <img className='medium' src="./images/apple.jpg" alt="tomato"/>
                    </a>

                    <div className="card-body">

                        <a href="product.html">
                            <h2>Tomato</h2>
                        </a>

                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>

                        <div className='price'>
                            30rs/kg
                        </div>
                        
                    </div>

                </div>


            </div>
        </main>

        <footer className='row center'>
            This is new
        </footer>
        
    </div>
  );
}

export default App;
