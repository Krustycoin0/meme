import React from 'react'
import './swap.css';
import { SwapWidget } from "../../bridges/Swapbridge.tsx";
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import ConnectWallet from "../ConnectWallet"; 
const Swap = () => {
  return (
    <div>
        <div className='per__navi'>
          <Sidebar />
          <Navbar />
        </div>
       <div className="sfb__heather">
         <h1 className="gradient__text">BOB 4.0/Bridge Tokens</h1>
       </div>
       <div className="sfb__swap">
        <SwapWidget />
       </div>
    </div>
  )
}

export default Swap
