import React from "react";
import Das from "./RDC";
import joke from "./joke";
export default function rd(){
  
  const a=joke.map(ab=>{
    return (<div><Das
    {...ab}
    /></div>)

  });
  
  return(<div>{a}</div>);
}