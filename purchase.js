import React from 'react';
import {arr} from "./cart";
export default function purchase(props){
  function cart(){
    arr.push({...props});
  }
  return(
    <div className="purchase">
      <img src={`./PRODUCTS${props.pic}`}/>
      <h2>{props.name}
      </h2>
      <h4>{props.price}</h4>
      <p>{props.desc}</p>
      <span><button onClick={cart}>Add to cart</button><button>Buy</button></span>
      </div>
    );
}