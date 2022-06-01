import React from 'react'
import MarketLand from '../components/MarketLand';
import Navbar from '../components/SidebarMarket/Navbar';
import { InvestedPool } from '../components/test/card';

const Marketplace = () => {

  return (
    <> 
        
        <Navbar/>
        <MarketLand/>
        <InvestedPool/>

    </>
  )
}

export default Marketplace;