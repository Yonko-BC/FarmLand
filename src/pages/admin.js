
   
import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/SidebarMarket/Navbar';
import { mintLand } from '../interacting/main';
 
const Container = styled.body`
 height: 825px;
 margin-left: 15.6rem;
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top,rgb(2, 27, 3),rgba(12, 104, 7, 0.911),rgb(255, 255, 255));

`


const Div = styled.div`
 box-shadow: 0px -4px 14px -1px rgba(255, 255, 255, 0.514);
    /* left: 30rem; */
    width: 27.7em !important;
    /* margin-top: 50px !important; */
    /* margin: 65px auto !important; */
    margin-left: 23rem;
    margin-top: 8rem;
    height: 440px;
    overflow: hidden;
    background-color: rgba(20, 19, 19, 0.754);
    border-radius: 15px;
    position: relative;
/* margin-top: 10rem;
margin-left: 40rem; */

div{
  margin-top: 5rem;
 margin-left: 5rem;
}
h4{
  margin-left: 2rem;
  color: white;
align-items:center;
justify-content: center;


}
    input{
      
      color: white;
      width: 80%;
    padding: 10px 8px;
    margin-bottom: 40px;
    /* margin: 5px 0; */
    border: 0;
    /* color: aliceblue; */
    border-bottom: 1px solid rgb(198, 193, 193);
    outline: none;
    background: transparent;
    }
  `



const ButtonMint = styled.button`
   border-radius: 50px;
    background: ${({primary})=>(primary ? '#01BF71':'#010606')};
    white-space: nowrap;
    padding: ${({big})=>(big ? '16px 58px':'14px 48px')};
    color: ${({dark})=>(dark ? '#010606':'#fff')};
    font-size: ${({fontBig})=>(fontBig ? '20px':'16px')};
    outline: none ;
    border: none;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
margin-top: 3rem;
margin-left: 8.5rem;

/* margin-left: 50rem; */
    &:hover {
        text-decoration: none;

        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary ? 'black':'#01BF71')};
        
        color: ${({dark})=>(dark ? '#010606':'white')};

    }
`;

 
function Admin() {
var adress
var value

   function getAdress() {
    var  buttonValue =  document.getElementById('adress').value;
    // console.log('id : ',buttonValue)  
  

    adress=buttonValue
    
  
  console.log('adress : ',adress)  
  }  

  function getValue() {
    var  buttonValue =  document.getElementById('value').value;
    // console.log('id : ',buttonValue)  
  

    value=buttonValue
    
  
  console.log('value : ',value)  
  }  


  return (
    <>
    <Navbar/>

    <Container>
         <Div >
<div> <h4>Land Owner adress : </h4>
           <input type="text" id='adress'/>
           <h4>Land value  : </h4>
           <input type="text" id='value'/></div>
          
      <ButtonMint onClick={()=>{getValue()
      getAdress()
        mintLand(adress,value)}}> Mint Land </ButtonMint>


         </Div>
      
    </Container>
    </>
  );
}

export default Admin;