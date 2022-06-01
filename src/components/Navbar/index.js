import React, { useState } from 'react'
import logo from '../../images/logoFL.png'
import {FaBars} from 'react-icons/fa'


import { Nav,NavLinkR,NavbarContainer,NavLogo,NavLogoContainer, NavItem,MobileIcon,NavLinks,NavMenu, NavBtnLink,NavBtn} from './NavbarElements'
import { ethers } from 'ethers'
// import { icons } from 'react-icons';

const Navbar =  ({toggle}) => {
 ///////////////////////////////////////







// const[path,setPath] = useState("");






///////////////////////////////////////



// HERE 

  const checkIfUserLogged = async ()=>{
      const { ethereum } = window;
    if (window.ethereum) {
  
        try {
          
          
          await window.ethereum.request({ method: "eth_accounts" })
          const accounts = await window.ethereum.request({ method: "eth_accounts" })
          // console.log("THE ACCOUNT IS ",accounts[0]);
          if(accounts[0] === undefined){
            
            // console.log("NO !Not connected");     
                  //  document.getElementById("market").style.marginRight = "20rem"

            document.getElementById("market").style.display = "none"
            document.getElementById("sign").style.display = "block"
            // return'/signin'
            
          }
          else{
            // console.log("YES ! connected");
            // return'/marketplace'
            
            document.getElementById("market").style.display = "block"
            // document.getElementById("sign").style.marginRight = "20rem"
            document.getElementById("sign").style.display = "none"

          }

        }
        catch (error){
          console.log(error);
        }
      }
    }

    checkIfUserLogged()


// path()


//END HERE




 // let path = []
  // const connectedMarket = async () => {
  //   return "/marketplace";
  // }
  // const NotConnected = async () => {
  //   return "/signin";
  // }

  // function connectedMarket() {
  //   return (
  //     "/marketplace"
  //   );}

  // function NotConnected() {
  //     return (
  //       "/signin"
  //     );}


  var provider = new ethers.providers.Web3Provider(window.ethereum);

  const isMetaMaskConnected = async () => {
    const accounts = await provider.listAccounts();
    return accounts.length > 0;
  }


//   const checkIfUserLogged = async ()=>{
//       const { ethereum } = window;
//     if (window.ethereum) {
  
//         try {
//           console.log("worked");
          
//           await window.ethereum.request({ method: "eth_accounts" })
//           const accounts = await window.ethereum.request({ method: "eth_accounts" })
//           console.log(accounts[0]);

//           // if(accounts[0]==='undefined'){return ("/signin")}
            
//           // else{return( "/marketplace")}
            
    


// // let connected

// await isMetaMaskConnected().then((connected) => {
// // return connected
// // }

// if (connected) {
//   console.log("connected");
  
//   return  (
    
//          true
//        );
  
// } 
// else {
//   console.log("not connected");
//   return  (
    
//      false
//   );
// }

// }
// )

//       } catch (error) {

//         }
        
//       } else {
//         alert('we cant find metamask installed')
//       }
   
//   }



  // function path() {

  //  if(checkIfUserLogged()===false){
  //   console.log("not connected fuck");

  //     return (
  //     "/signin"
  //   );
  // } 
  // // else{
  // //   console.log("connected");

  //   return (
      
  //     "/marketplace"
  //   );
  // // }
  // }

//   async function yoo(){
//     console.log('function' ,await checkIfUserLogged());
//     console.log("path", path);

//     path.push(await checkIfUserLogged())
//     // let taz=true
//     //  return ( '/signin')

//   }

// yoo()
// path.push( checkIfUserLogged())

  return  (
    <>
    
        <Nav>

        {/* <NavLogo src={logo} alt="my logo">
            
        </NavLogo>  */}

       <NavLogoContainer to='home' >
            <NavLogo  src={logo} alt="my logo"/>  
       </NavLogoContainer>

            <NavbarContainer>
               
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>

                <NavItem>
                    <NavLinks to="about"> <i class="fa-solid fa-circle-info"></i>  &nbsp;About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="servises"> <i class="fa-solid fa-hand-holding-dollar"></i>  &nbsp;Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact"><i class="fa-solid fa-comments"></i>  &nbsp;Contact</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinkR to="/marketplace"> <i class="fa-solid fa-shop"></i>  &nbsp;Marketplace</NavLinkR>
                </NavItem>
               
                
            </NavMenu>
            {/* {renderAuthButton()} */}
            <NavBtn>
            <NavBtnLink  to='/marketplace' id='market' ><i class="fa-solid fa-arrow-right-to-bracket"></i>  &nbsp;Sign In </NavBtnLink>
          
                <NavBtnLink  to='/signin' id='sign'><i class="fa-solid fa-arrow-right-to-bracket"></i>  &nbsp;Sign In </NavBtnLink>
            </NavBtn>
           
            </NavbarContainer>

            {/* "/signin".  {checkIfUserLogged()} */}
            
        </Nav>
        
    </>
  )
}

export default Navbar