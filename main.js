import React from "react";
import Pc from "./pcard";
import data from "./PRODUCTS/product"
export default function main(){
  const pc=data.map(a=>{
    return(
      <Pc
      key={a.name}
      name={a.name}
      pic={a.pic}
      price={a.price}
      />
      );
  });
  return(<div>
  <p>Closet</p>
  <div className="closet">{pc}</div>
  </div>);
  
}