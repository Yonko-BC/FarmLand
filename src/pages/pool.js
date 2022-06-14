
import Navbar from '../components/SidebarMarket/Navbar';
import PoolLand from '../components/PoolLand';
import React, { useEffect, useState } from 'react';

function Pool() {
  
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
       setCount(1);
     }, 200);
   },[]);

  return (
    <>
         <Navbar/>
         <PoolLand/>
      
    </>
  );
}

export default Pool;