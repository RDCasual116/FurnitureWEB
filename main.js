import React from "react";
import Pc from "./pcard";
import datac from "./PRODUCTS/product"
import cool from "./PRODUCTS/cooler";
import alna from "./PRODUCTS/alna";
import show from "./PRODUCTS/showcase";
export default function main(){
   const [r,setr]=React.useState(true);
   const [a,seta]=React.useState([]);
  const pc =datac.map(ab=>{
    return(
      <Pc
      key={ab.name}
      name={ab.name}
      pic={ab.pic}
      price={ab.price}
      desc={ab.desc}
      func={seta}
      />
      );
  });
  const cooler =cool.map(cool=>{
    return(
      <Pc
      key={cool.name}
      name={cool.name}
      pic={cool.pic}
      price={cool.price}
      desc={cool.desc}
      func={seta}
      />
      );
  });
  const showcase =show.map(s=>{
    return(
      <Pc
      key={s.name}
      name={s.name}
      pic={s.pic}
      price={s.price}
      desc={s.desc}
      func={seta}
      />
      );
  });
  const aalna=alna.map(al=>{
    return(
      <Pc
      key={al.name}
      name={al.name}
      pic={al.pic}
      price={al.price}
      desc={al.desc}
      func={seta}
      />
      );
  });
 if(r){return(
  <div>
  <p className="main">Closet</p>
  <div
  className="closet" onClick={()=>setr(false)}>{pc}</div>
    <p className="main">Cooler</p>
  <div
  className="closet" onClick={()=>setr(false)}>{cooler}</div>
  
    <p className="main">Showcase</p>
  <div
  className="closet" onClick={()=>setr(false)}>{showcase}</div>
    <p className="main">Alna</p>
  <div
  className="closet" onClick={()=>setr(false)}>{aalna}</div>
  </div>
  );}
  else{
    return(
      <div>{a}</div>
      );
  }
}