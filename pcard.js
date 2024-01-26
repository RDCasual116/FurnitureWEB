import React from 'react';
export default function pcard(props){
  return(
    <div className="pcard">
    <img src={`./PRODUCTS${props.pic}`}/>
    <p>{props.name}</p>
    <h3>{props.price}</h3>
    </div>
    );
}