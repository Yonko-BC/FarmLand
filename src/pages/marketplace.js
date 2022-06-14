import React, { useEffect, useState } from 'react'
import MarketLand from '../components/MarketLand';
import Navbar from '../components/SidebarMarket/Navbar';
// import { InvestedPool } from '../components/test/card';

const Marketplace = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
       setCount(1);
     }, 200);
   },[]);
  return (
    <> 
        
        <Navbar/>
        <MarketLand/>
        {/* <InvestedPool/> */}

    </>
  )
}

export default Marketplace;