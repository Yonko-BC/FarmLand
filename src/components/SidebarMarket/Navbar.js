import React,{useState} from 'react'
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData'
import { NavLogo} from '../Navbar/NavbarElements'
import logo from '../../images/logoFL.png'
import { ButtonR } from '../ButtonElement'

import { Link } from 'react-router-dom';
import './Navbar.css';
import { ethers } from 'ethers';

function Navbar() {

    // const [sidebar, setSidebar]=useState(false) 
      
    // const showSidebar=() => setSidebar(!sidebar) 
    const style = {fontSize: "1.2lem" , strokeWidth: "80" }





const { ethereum } = window;

var provider = new ethers.providers.Web3Provider(ethereum);

const isMetaMaskConnected = async () => {
  const accounts = await provider.listAccounts();
  return accounts.length > 0;
}


//////

let accounts=null



const[walletAddress,setWalletAddress] = useState("");




async function requestAccount(){
  // console.log('Requesting account ...');
 //XCheck if Meta Mask Extension exists
  if(window.ethereum){
    // console.log('detected');
    try{
       accounts=await window.ethereum.request({
        method:"eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    }catch(error){
      // console.log('Error connecting ...');
   }
  }else{
    alert('Meta Mask not detected');
 }
}

window.onload=requestAccount()

/////////////

window.ethereum.on("accountsChanged", async ()=>{
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_accounts" })      
        setWalletAddress(accounts[0]);
        accounts = await window.ethereum.request({ method: "eth_accounts" })
        window.location.reload()
        // console.log("refreshed");

      // console.log("refreshed");
    } catch (error) {
    }
 

  } else {
    alert('we cant find metamask installed')
  }
}) 


///////


const checkIfUserLogged = async ()=>{
      
      if (ethereum) {
    //  var provider = new ethers.providers.Web3Provider(ethereum);
    
          try {
            
            await window.ethereum.request({ method: "eth_accounts" })
            const accounts = await window.ethereum.request({ method: "eth_accounts" })
            // console.log(accounts[0]);
            setWalletAddress(accounts[0]);

            // if (accounts[0] !== "undefined"){

            //   console.log(accounts[0]);            console.log(accounts[0]);

            //   console.log("connect wallet");
            //   loginBtn.textContent = "Connect wallet"
            //    loginBtn.style.marginLeft = "-2rem"


            //   console.log(accounts[0]);
            //    loginBtn.textContent = accounts[0]
            //    loginBtn.style.marginLeft = "-20rem"
              

              
            // }
            // else{
            //   const loginBtn = document.getElementById("loginBtn")

            //   console.log(accounts[0]);
            //    loginBtn.textContent = accounts[0]
            //    loginBtn.style.marginLeft = "-20rem"
              
            // }


await isMetaMaskConnected().then((connected) => {
  const loginBtn = document.getElementById("loginBtn")

  if (connected) {
    
    // console.log("connected");
    // console.log(accounts[0]);
      // metamask is connected
      loginBtn.textContent = walletAddress
      
         loginBtn.style.marginLeft = "-14rem"
         loginBtn.style.background='#01BF71'
         loginBtn.style.borderRadius='50px'
         loginBtn.style.padding='0.3rem 1rem'
         loginBtn.style.color='#fff'


  } 
//   else {
//     console.log("not connected");

//     loginBtn.innerHTML = `  <ButtonR to='/signin'  primary='true' >
//     <AiIcons.AiOutlineLogout  onClick={showSidebar} style={style}/>
//     &nbsp;&nbsp; Connect
//  </ButtonR>
//     `

//       // metamask is not connected
//   }
});

          } catch (error) {
          }
          
        } else {
          alert('we cant find metamask installed')
        }
     
    }


    window.onload = checkIfUserLogged() 
// window.onload=isMetaMaskConnected()
  return (
    <>
    

        <div className="navbar">
        <div className="login"  >
                     {/* <Link to='/signin'>
                          <AiIcons.AiOutlineLogout  onClick={showSidebar} style={style}/>
                          <span>Log In</span>
                     </Link> */}

                     <div id='loginBtn'>
                       <ButtonR to='/signin'  primary='true' >
                     <AiIcons.AiOutlineLogout   style={style}/>
                     &nbsp;&nbsp; Connect
                  </ButtonR>
                     </div>
                      
                     

             </div>
        </div>
        <div className='sidebar' >
        {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> */}
        <nav className='nav-menu active'>

           <ul className='nav-menu-items' >
             {/* <li className="navbar-toggle">
                  <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose   style={style}/>
                  </Link>
             </li> */}
             <div className='logo'><NavLogo  src={logo} alt="my logo"/></div>

             {SidebarData.map((item, index) =>{
                return(
                <li key={index} className={item.cName}>
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                </li>
                );
                })} 


            {/* <li className="logout">
                     <Link to='/signin'>
                          <AiIcons.AiOutlineLogout  onClick={showSidebar} style={style}/>
                          <span>Log Out</span>
                     </Link>
             </li> */}
            </ul>
        </nav>
        </div>
       
    </>
  )
}

export default Navbar
