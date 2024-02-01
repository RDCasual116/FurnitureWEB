import React from 'react';
import {arr} from "./cart";
export let tick={}
export default function purchase(props){
  const d=
  <button onClick={()=>{cart();
    tick[props.name]=true;
    test();
  }}>Add to cart</button>
  const real=(!tick[props.name])?d:<div></div>
  
  function test(){
    let rea=(!tick[props.name])?d:<div></div>
    setrd(rea);
  }
  
  const[rd,setrd]=React.useState(real);
  function cart(){
    arr.push({...props});
  }
  return(
    <div className="purchase">
      {props.func&&<button className="back" onClick={props.func}>Back</button>}
    
      <img src={`./PRODUCTS${props.pic}`}/>
      <h2>{props.name}
      </h2>
      <h4>{props.price}</h4>
      <p>{props.desc}</p>
      <span>{rd}<button>Buy</button></span>
      </div>
    );
}