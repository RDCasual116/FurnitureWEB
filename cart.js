import React from "react";
import {tick} from "./purchase.js"
import {log} from "./order";
export let arr=[];
export default function cart() {
  //console.log(tick);
 function empty(){
   for (let key in tick) {
  if (tick.hasOwnProperty(key)) {
    delete tick[key];
  }
}

   var temp=[];
arr=temp;
   setab([]);
 }
 function buy(name,price,pic){
   log.push({
     "name":name,
     "price":price,
     "pic":pic
   });
   
 }
 function buyall(){
   for(let a=0;a<arr.length;a++){
     log.push({
        "name":arr[a].name,
     "price":arr[a].price,
     "pic":arr[a].pic
     })
   }
 }
 
  function remov(name){
  for(let a=0;a<arr.length;a++){
    if(name==arr[a].name){
      for(let b=a;b+1<arr.length;b++){
        arr[b]=arr[b+1];
      }
      arr.pop();
      break;
    }
  }
   setab((prev)=>{
    let re=[];
    for(let a=0;a<prev.length;a++){
     if(prev[a].key!=name){
     re.push(prev[a]);}
     
    }
   // console.log(name)
     return re;
   });
  }
  const [ab,setab]=React.useState(arr.map((a,index)=>
  {
    return(<div className="cart"
    key={a.name}>
      <div>
     <img src={`./PRODUCTS${a.pic}`}/>
    <span>{a.name}</span>
     <big>{a.price}</big>
     </div>
     <span className="cbutton"><button onClick={()=>{
     buy(a.name,a.price,a.pic);
     delete tick[a.name]
     remov(a.name);
     }}>Buy</button>
     <button onClick={()=>{
     //console.log(a.name)
     delete tick[a.name]
     remov(a.name);
     }}>Remove</button>
     </span>
      </div>
      );
  }));
//  console.log([])
  return (<div>{ab.length===0?<h3>YOUR CART IS EMPTY</h3>:ab}
  <button className="buy1"
  onClick={()=>{
  buyall();
  empty();}}>Buy</button>
  <button className="buy2" onClick={empty}>Remove</button>
  </div>);
}