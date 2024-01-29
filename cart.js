import React from "react";
export const arr=[];
export default function cart() {
  function remov(i){
   for(let a=i+1;a<arr.length;a++) 
   arr[a-1]=arr[a];
   arr.pop();
  }
  const ab=arr.map((a,index)=>
  {
    return(
      <div className="cart">
     <img src={`./PRODUCTS${a.pic}`}/>
    <span>{a.name}</span>
     <big>{a.price}</big>
     <span className="cbutton"><button>Buy</button>
     <button onClick={()=>remov({index})}>Remove</button>
     </span>
      </div>
      );
  });
  return (<div>{ab}</div>);
}