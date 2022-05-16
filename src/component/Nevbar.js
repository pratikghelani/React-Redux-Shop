import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Link } from "react-router-dom";

export default function Nevbar() {

    const cartItem = useSelector(state => state.readucer);
    const cartprice = useSelector(state => state.cartprice);
    
        return (
    <>
        <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="badge bg-primary  text-wrap navbar-brand" href="/">My Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/cart">Cart</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link to="/cart" class="btn btn-warning"> <i class="bi bi-cart-fill"></i> :<b> {cartItem}</b></Link>
                        <Link to="/cart" class="btn btn-warning" style={{marginLeft: 20}}> <i class="bi bi-cash-coin"></i> : <b>$: {cartprice}   </b></Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
