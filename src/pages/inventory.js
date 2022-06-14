
import Navbar from '../components/SidebarMarket/Navbar';
import ContainerLand from '../components/ContainerLand';
import React, { useEffect, useState } from 'react';

function Inventory() {

  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
       setCount(1);
     }, 200);
   },[]);
  return (

    <>
         <Navbar/>
         <ContainerLand/>
      
    </>
  );
}

export default Inventory;