import React from 'react';
import Main from "./main";
import Cat from "./categories";
import Order from "./order";
import Cart from "./cart";
import About from "./about";
export default function Rd(){
  const[op,setop]=React.useState(1);
  let output;
  if(op==1){
  output=<Main/>;  
  }
  else if(op==2){
    output=<Cat/>;
  }
  else if(op==3){
    output=<Order/>;
  }
  else if(op==4){
    output=<Cart/>;
  }
  else{
    output=<About/>
  }
  return (<div>
  <div className="head">
  <img src="logo.png"/>
  <span><h3>DAS STEEL</h3>
  <i>Storage with elegance</i></span></div>
  <nav>
  <ul className="navi">
  <li><a onClick={()=>setop(1)}><i class='bx bx-home'></i> Home</a></li>
  <li><a onClick={()=>setop(2)}><i class='bx bx-category' ></i> Products</a></li>
  <li><a onClick={()=>setop(4)}><i class='bx bx-cart' ></i> Cart</a></li>
  <li><a onClick={()=>setop(3)}><i class='bx bx-purchase-tag' ></i> Orders</a></li>
  <li><a onClick={()=>setop(5)}><i class='bx bxs-contact' ></i> About</a></li>
  </ul>
  </nav>
  <div>{output}</div>
  <div className="footer">
  <ul className="links">
  <li><a href="https://www.linkedin.com/in/ritish-das-979536277"><i class='bx bxl-linkedin-square' ></i></a></li>
  <li><a href="https://x.com/RDCasual116?t=3jM2lOpd7J5IGErX0naXgQ&s=09"></a><i class='bx bxl-twitter'></i></li>
  <li><a href="https://github.com/RDCasual116"></a><i class='bx bxl-github'></i></li>
  </ul>
  <small>DAS STEEL is a real shop and you can actually purchase these products from there<br/>contact:9406000612</small>
  </div>
  </div>);
}