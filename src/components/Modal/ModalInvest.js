
import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { DivWrap, FormInput } from '../SignIn/SignInElements';
import { createInvestmentPool, invest, mintLand, signer_address , contract,contract_address } from '../../interacting/main'
import { id } from '../ContainerLand';
import { ethers } from "ethers";

const Background = styled.div`
  width: 1190px;
  height: 930px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2rem;
`;

const ModalWrapper = styled.div`
  /* display: block; */
  width: 500px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  justify-content: center;
  align-items: center;
  /* grid-template-columns: 1fr ; */
  position: relative;
  z-index: 10;
  border-radius: 10px;
  margin-top: 2rem;
`;

// const ModalImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  .landId{
    display: flex;
    margin-left: -2rem;

  }

  .landId h4{
    margin-right: 1rem;
  }

  h1{
  
    margin-top:3rem;
    margin-bottom: 2rem;
  }
  
  input{
    margin-top: -1rem;
    margin-left: 2rem;
    width: 10rem;
    color: #141414;
  }
  .inputForm{
    margin-left: 9.2rem;
  }

  .para {
    margin-bottom: 3rem;
  }
  
  .wrap-input100{
    /* margin-left: 10rem; */
    margin-top: 1rem;
    display: flex;
    margin-bottom: 1rem;

  }
  button {
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
    &:hover {
        text-decoration: none;

        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary ? 'black':'#01BF71')};
        
        color: ${({dark})=>(dark ? '#010606':'white')};

    }
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


function ModalInvest({ showModalInvest, setShowModalInvest }) {
    const modalRef = useRef();



  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModalInvest(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModalInvest) {
        setShowModalInvest(false);
        console.log('I pressed');
      }
    },
    [setShowModalInvest, showModalInvest]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  async function createInvestmentPool(landId,budgeteth,delayDay,MaxInvestor){
    // const landId = 4
    const budget = ethers.utils.parseEther(budgeteth)
    const last_delay_for_investment_in_day = delayDay
    const max_investor = MaxInvestor
    // approving ...
    const approve = await contract.approve(contract_address, landId)
    console.log("PROVED");
    const createInvestmentPool_TX = await contract.createInvestmentPool(landId, budget, last_delay_for_investment_in_day, max_investor)
    console.log("Pool created!");
}

var delay
var budget
var numberinvestor

function getDelay() {
  var  buttonValue =  document.getElementById('delay').value;
  // console.log('id : ',buttonValue)  


  delay=buttonValue
  

console.log('delay : ',delay)  
}  

   function getBudget() {
    var  buttonValue =  document.getElementById('budget').value;
    // console.log('id : ',buttonValue)  
  

    budget=buttonValue
    
  
  console.log('budget : ',budget)  
  }  

  function getNumberInvestor() {
    var  buttonValue =  document.getElementById('number').value;
    // console.log('id : ',buttonValue)  
  

    numberinvestor=buttonValue
    
  
  console.log('number investor : ',numberinvestor)  
  }  



  return ( 
    <>{console.log('id modal',id)}
      {
      showModalInvest ? (
        <Background onClick={closeModal} ref={modalRef}>
         
            <ModalWrapper showModalInvest={showModalInvest}>
              {/* <ModalImg src={require('./Modal.png')} alt='camera' /> */}
              {/* <div>detail</div> */}
              <ModalContent> 
                <h1>Launch land Project</h1>
                <p className='para'>Set the project information of your next launch.</p>
                <div className='landId'><h4>Land Id : </h4><p>{id}</p></div>
                
                <DivWrap className="wrap-input100 validate-input m-b-16" data-validate="Valid Number is required">
                <h5>Pudget :  </h5><FormInput id='budget' className='inputForm' type="number" placeholder="ETH" min="10" max="100" required/>
            </DivWrap>
          <DivWrap className="wrap-input100 validate-input m-b-16" data-validate="Password is required"> 
          <h5>Delay : &nbsp;&nbsp;  </h5> <FormInput id='delay' className='inputForm' type="number" placeholder="day" min="1" max="30"  required/>    
          </DivWrap>
          <DivWrap className="wrap-input100 validate-input m-b-16" data-validate="Password is required"> 
          <h5>number of investor : &nbsp;&nbsp;  </h5> <FormInput id='number'  type="number" placeholder="Max number" min="1" max="30"  required/>    
          </DivWrap>
                <button onClick={()=>{
                  getNumberInvestor()
                  getBudget()
                  getDelay()
                  createInvestmentPool(id,budget,delay,numberinvestor)}} >creat Project Pool</button>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModalInvest(prev => !prev)}
              />
            </ModalWrapper>
        
         </Background>
      ) : null}
    </>
    );
  }
  
  export default ModalInvest;