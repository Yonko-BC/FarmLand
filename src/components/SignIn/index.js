import React from 'react'
import {Icon,DivContainer,ButtonR,Body,Form,DivTitle,H3,H5, DivWrap,FormInput,Div,Checkinput, Checklabel,TXTa,BtnBoxdiv,Button,TXTp,SignA,} from './SignInElements'
import { NavLogo} from '../Navbar/NavbarElements'
import logo from '../../images/logoFL.png'
import { useState } from 'react'
import { ethers } from 'ethers'
import * as FaIcons from 'react-icons/fa';
const SignIn = () => {

  let accounts=null

  
  // const icon = {marginTop: "2rem" }

  const[walletAddress,setWalletAddress] = useState("");




  async function requestAccount(){
    console.log('Requesting account ...');
   //XCheck if Meta Mask Extension exists
    if(window.ethereum){
      console.log('detected');
      try{
         accounts=await window.ethereum.request({
          method:"eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      }catch(error){
        console.log('Error connecting ...');
     }
    }else{
      alert('Meta Mask not detected');
   }
  }


  async function connectWallet(){
    if(typeof window.ethereum!=='undefined'){
      await requestAccount();
      const provider=new ethers.providers.Web3Provider(window.ethereum);
  }
}

  // window.onload=requestAccount()

  window.ethereum.on("accountsChanged", async ()=>{
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_accounts" })      
          setWalletAddress(accounts[0]);
          accounts = await window.ethereum.request({ method: "eth_accounts" })
          window.location.reload()
          console.log("refreshed");

        console.log("refreshed");
      } catch (error) {
      }
   

    } else {
      alert('we cant find metamask installed')
    }
  }) 


  


  return (
 
<Body>
<Icon to='/'>  <NavLogo  src={logo} alt="my logo"/>  </Icon>
<DivContainer >
        
        <Form  >
            <DivTitle >
                 <H3>LOGIN </H3>
            <H5>TO YOUR ACCOUNT</H5>
            </DivTitle>
           
            <DivWrap class="wrap-input100 validate-input m-b-16" data-validate="Valid email is required: ex@abc.xyz">
                  <FormInput type="text" placeholder="Email" required/>
            </DivWrap>
          <DivWrap class="wrap-input100 validate-input m-b-16" data-validate="Password is required"> 
              <FormInput type="password" placeholder="Password" required/>    
          </DivWrap>
          <Div class="flex-sb-m w-full p-b-30">
           
                <Checkinput class="input-checkbox100" id="remember-me" type="checkbox" name="remember-me" value='remember-me'/> 
                <Checklabel class="label-checkbox100" for="remember-me"> Remember me </Checklabel> 
            
            <TXTa href="#" class="txt1" > Forgot Password? </TXTa> 
        </Div>
        <BtnBoxdiv class="btn-box "> 
            <Button class="btn-primary" ><FaIcons.FaSignInAlt/> &nbsp;&nbsp; Login</Button>
            <ButtonR to='/marketplace' class="btn-primary"  
            onClick={connectWallet}
            ><FaIcons.FaWallet/> &nbsp;&nbsp;  Connect Wallet </ButtonR>
            {/* <h3>wallet address {walletAddress}</h3> */}
        </BtnBoxdiv>  
      
        <TXTp id="text3">Not a Member?</TXTp> <SignA id="signup" href="#">Signup Now</SignA>
   </Form>
        </DivContainer>  


    </Body>
  )
}

export default SignIn