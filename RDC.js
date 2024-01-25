import React from "react";

export default function Rdc(props){
  const[bool,setbool]=React.useState(false);
  function click(){
    setbool(!bool);
  }
  return(<div>{props.setup&&<div>Setup:{props.setup}</div>}
{bool&&<div> Punchline:{props.punchline}</div>}
    <button onClick={click}>Show punchline</button>
  </div>
  );
}