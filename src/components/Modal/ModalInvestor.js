
import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import {FaEthereum} from 'react-icons/fa';

import { DivWrap, FormInput } from '../SignIn/SignInElements';


const Background = styled.div`
  width: 1190px;
  height: 930px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: -90rem; */
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
  position: relative;
  z-index: 10;
  border-radius: 10px;
  /* margin-top: 60rem; */
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


function ModalInvestor({ showModalInvestor, setShowModalInvestor }) {
    const modalRef = useRef();



  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModalInvestor(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModalInvestor) {
        setShowModalInvestor(false);
        console.log('I pressed');
      }
    },
    [setShowModalInvestor, showModalInvestor]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );


  /* ********************************************** */
//   /** Cont down */
//   // Set the date we're counting down to
// var countDownDate = new Date("Jun 2, 2022 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);


  /* ********************************************** */

  return (
    <>
      {showModalInvestor ? (
        <Background onClick={closeModal} ref={modalRef}>
         
            <ModalWrapper showModalInvestor={showModalInvestor}>
              {/* <ModalImg src={require('./Modal.png')} alt='camera' /> */}
              {/* <div>detail</div> */}
              <ModalContent>
                <h1>Invest project </h1>
                <p className='para'>Set the project information of your next launch.</p>
                <div className='landId'><h4>Land Id : </h4><p>land#00001</p></div>
                <div className='landId'><h4>Pudget : </h4><p>21 &nbsp;&nbsp; Eth &nbsp;&nbsp;&nbsp;&nbsp; <FaEthereum/></p></div>
                <div className='landId'><h4>Time : </h4><p id="demo"> </p></div>

                {/* <DivWrap className="wrap-input100 validate-input m-b-16" data-validate="Valid Number is required">
                <h5>Pudget :  </h5><FormInput className='inputForm' type="number" placeholder="ETH" min="10" max="100" required/>
            </DivWrap> */}
          <DivWrap className="wrap-input100 validate-input m-b-16" data-validate="Password is required"> 
          <h5>Delay : &nbsp;&nbsp;  </h5> <FormInput className='inputForm' type="number" placeholder="day" min="1" max="30"  required/>    
          </DivWrap>
          <DivWrap className="wrap-input100 validate-input m-b-16" data-validate="Password is required"> 
          <h5>number of investor : &nbsp;&nbsp;  </h5> <FormInput  type="number" placeholder="Max number" min="1" max="30"  required/>    
          </DivWrap>
                <button>Join Now</button>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModalInvestor(prev => !prev)}
              />
            </ModalWrapper>
        
         </Background>
      ) : null}
    </>
    );
  }
  
  export default ModalInvestor;