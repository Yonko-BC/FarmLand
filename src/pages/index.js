import React,{useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection';
import { homeObj0ne } from '../components/InfoSection/Data.js';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
const [isOpen,setIsopen]=useState(false)

const toggle =()=>{
    setIsopen(!isOpen)
}
  return (
    <>
        <Sidebar isOpen={isOpen}  toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObj0ne}/>
        <Services/>
        <Footer/>
    </>
  );
};

export default Home;