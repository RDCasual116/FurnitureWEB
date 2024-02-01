import React from "react";
import Pc from "./pcard";
import closet from "./PRODUCTS/product"
import cooler from "./PRODUCTS/cooler";
import alna from "./PRODUCTS/alna";
import showcase from "./PRODUCTS/showcase";
export default function cate() {
  const[mode,setmode]=React.useState(1);
  const pc = [{
    name: "ALNA",
    pic: "./productcat/alna.png",
    no:1
  }, {
    name: "SHOWCASE",
    pic: "./productcat/showcase.png",
    no:2
  }, {
    name: "CLOSET",
    pic: "./productcat/closet.png",
    no:3
  },
  {
    name:"COOLER",
    pic:"./productcat/cooler.png",
    no:4
  },
  {
    name:"DRESSER",
    pic:"./productcat/dresser.png",
    no:5
  }]
  const r=<div className="catbox">
{pc.map(
  (a)=>{return (
      <div className="cat"
      key={a.no}
      onClick={()=>{change(a.no)}}>
      <img src={a.pic}/>
      <span>{a.name}</span>
      </div>);
  }
  )}
  </div>
  const [a,seta]=React.useState(r);
  function change(av){
   console.log(av)
   let choice;
   if(av==1)
   choice=alna;
   else if(av==2)
   choice=showcase;
   else if(av==3)
   choice=closet;
   else if(av==4)
   choice=cooler;
   else{
     choice=[];
   }
   //console.log(choice)
  const d=choice.map((ab)=>{
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
  setmode(2);
  seta(<div>{d}</div>);
  }

if(mode==1)
  return (<div>{a}</div>);
  else if(mode==2)
  return (<div><button className="back" onClick={()=>{seta(r)}}>Back</button>{a}</div>);
}