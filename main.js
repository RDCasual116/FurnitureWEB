import React from "react";
import Pc from "./pcard";
import data from "./PRODUCTS/product"
export default function main(){
   const [r,setr]=React.useState(true);
   const [a,seta]=React.useState([]);
  const pc =data.map(a=>{
    return(
      <Pc
      key={a.name}
      name={a.name}
      pic={a.pic}
      price={a.price}
      func={seta}
      />
      );
  });
 if(r){return(
  <div>
  <p>Closet</p>
  <div
  className="closet" onClick={()=>setr(false)}>{pc}</div>
  </div>);}
  else{
    return(
      <div>{a}</div>
      );
  }
}