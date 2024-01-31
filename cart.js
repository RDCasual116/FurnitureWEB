import React from "react";
export let arr=[];
export default function cart() {
 function empty(){
   var temp=[];
arr=temp;
   setab([]);
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
     <span className="cbutton"><button>Buy</button>
     <button onClick={()=>{
     //console.log(a.name)
     remov(a.name);
     }}>Remove</button>
     </span>
      </div>
      );
  }));
  return (<div>{ab}
  <button className="buy1">Buy</button>
  <button className="buy2" onClick={empty}>Remove</button>
  </div>);
}