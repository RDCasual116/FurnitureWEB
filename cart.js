import React from "react";
export let arr=[];
export default function cart() {
  function remov(i){
   for(let a=i+1;a<arr.length;a++){ 
   arr[a-1]=arr[a];}
   arr.pop();
   setab((prev)=>{
    let re=[];
    for(let a=0;a<prev.length;a++){
     if(re.length!=i)
     re.push(prev[a]);}
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
     <span className="cbutton"><button>Buy</button>
     <button onClick={()=>{remov(index);
     }}>Remove</button>
     </span>
      </div>
      );
  }));
  return (<div>{ab}</div>);
}