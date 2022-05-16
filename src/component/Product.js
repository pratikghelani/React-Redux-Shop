import React from 'react'
// import {Link } from "react-router-dom";
import { increment,decrement } from '../redux/Action/action';
import { useSelector, useDispatch } from 'react-redux'
export default function Product(props) {
  const readucer = useSelector(state => state.readucer);
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-md-3 col-sm-1 mt-4">
        <div className="card" key={props.id}>
          <img src={props.img} style={{ height: 334, padding: 20 }} className="card-img-top" alt="product img" />
          <div className="card-body">
            <div className="text-center">
              <div>   <h6 className="card-title"> {props.title.substring(1, 30)}...</h6></div>
              <h5 className="card-title">$. {props.price}</h5>
              {/* <h5 className="card-title">Rs. 100</h5> */}
            </div>
            {/* <Link to="/" className="btn btn-primary" style={{width: '100%'}}> Add To Cart</Link> */}
            <div className="d-flex justify-content-between">
              <button button type="button" className="btn btn-primary" onClick={() => dispatch(increment())} style={{ width: '70%' }}> Add To Cart</button>
              <button type="button" className="btn btn-danger" onClick={() => dispatch(decrement(props.price))} style={{ width: '20%' }}><i className="bi bi-trash3-fill"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

