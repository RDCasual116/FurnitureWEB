import React from 'react';
import Main from "./main"
export default function Rd(){
  return (<div>
  <div className="head">
  <img src="logo.png"/>
  <span><h3>DAS STEEL</h3>
  <i>Storage with elegance</i></span></div>
  <nav>
  <ul className="navi">
  <li><a href="">Home</a></li>
  <li><a href="">Products</a></li>
  <li><a href="">Cart</a></li>
  <li><a href="">Orders</a></li>
  <li><a href="">About</a></li>
  </ul>
  </nav>
  <div><Main/></div>
  </div>);
}