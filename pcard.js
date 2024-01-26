import React from 'react';
import Purchase from "./purchase"
export default function pcard(props){

  return(
    <div
    className="pcard"
    onClick={()=>props.func([<Purchase
    name={props.name}
    price={props.price}
    pic={props.pic}
    desc={props.desc}
    />])}
    >
    <img src={`./PRODUCTS${props.pic}`}/>
    <p>{props.name}</p>
    <h3>{props.price}</h3>
    </div>
    );
}