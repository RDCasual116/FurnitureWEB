import React from "react";
export const log=[];
export default function about() {
  console.log(log[0].name)
  const order=log.map((a,index)=>{return (
    <div className="order" key={index}>
    <img src={`./PRODUCTS${a.pic}`}/>
    <h4>{a.name}</h4>
    <h3>{a.price}</h3>
    </div>
 ) });
  return (<div>{order}</div>);
}