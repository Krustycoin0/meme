import React from 'react'
import './withdraw.css';
import { WidgetSwap } from "../../bridges/Bridgeswap.tsx";
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import ConnectWallet from "../ConnectWallet"; 
const Withdraw = () => {
  return (
    <div>
        <div className='per__navi'>
          <Sidebar />
          <Navbar />
        </div>
       <div className="sfb__heather">
         <h1 className="gradient__text">Exchange BOB 4.0</h1>
       </div>
       <div className="sfb__swap">
        <WidgetSwap />
       </div>
    </div>
  )
}

export default Withdraw
