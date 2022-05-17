import React from 'react'
import { useDispatch } from "react-redux";

import {pricedecrement} from "../redux/Action/action";
import {priceincrement} from "../redux/Action/action";
import {incrementcart} from "../redux/Action/action";
import {decrementcart} from "../redux/Action/action";

export default function Product(props) {
    const dispatch = useDispatch();
    function add (number){
      // alert(number);
      dispatch(incrementcart(1));
      dispatch(priceincrement(number));
    }

    function remove (number){
      // alert(number);
      dispatch(decrementcart(1));
      dispatch(pricedecrement(number));
    }

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
              <button button type="button" className="btn btn-primary"   style={{ width: '70%' }} onClick={() => add(props.price) }> Add To Cart</button>
              <button type="button" className="btn btn-danger"  style={{ width: '20%' }} onClick={() => remove(props.price)}><i className="bi bi-trash3-fill"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

