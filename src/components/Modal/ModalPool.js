
import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { investorBalance, payTheLoan, withdrawPool } from '../../interacting/main';
import { DivWrap } from '../SignIn/SignInElements';
import { budget, delay, idPool, landId, minEntry, statu } from '../PoolLand';
import { FaEthereum } from 'react-icons/fa';
import { id } from '../ContainerLand';

const Background = styled.div`  
  width: 1190px;
  height: 930px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -4rem;
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



function ModalPool({ showModalPool, setShowModalPool }) {
    const modalRef = useRef();



  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModalPool(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModalPool) {
        setShowModalPool(false);
        console.log('I pressed');
      }
    },
    [setShowModalPool, showModalPool]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  // const today = new Date();
  // var dateDelai = new Date();
  // dateDelai.setDate(today.getDate() + delay/3600/24);
  // console.log('today',today);
  // console.log('delai',dateDelai);

var payTheLoanEth = budget+(budget*11/100)
// console.log(payTheLoanEth.toString());
  return (
    <>
    {showModalPool ? (
      <Background onClick={closeModal} ref={modalRef}>
       
          <ModalWrapper showModalPool={showModalPool}>
            {/* <ModalImg src={require('./Modal.png')} alt='camera' /> */}
            {/* <div>detail</div> */}
            <ModalContent>
              <h1>Pool Detail </h1> 
              {/* <p className='para'>Set the project information of your next launch.</p> */}
              <p></p>
              <div className='landId'><h4>Land Id : </h4><p>land#000{landId}</p></div>
              <div className='landId'><h4>&nbsp;Pudget : </h4><p>{budget}&nbsp; Eth &nbsp;&nbsp;&nbsp;&nbsp; <FaEthereum/></p></div>
              <div className='landId'><h4>&nbsp;Min Entry : </h4><p>{minEntry}&nbsp; Eth &nbsp;&nbsp;&nbsp;&nbsp; <FaEthereum/></p></div>

              <div className='landId'><h4>Delay : </h4> <p>{delay/3600/24}  &nbsp;&nbsp;</p><p id="demo"> days </p>&nbsp;&nbsp;&nbsp;</div>

             
        {/* <div className='landId'><h4>ETH invest : </h4> <p>{getPrice()*minEntry}</p><p id="demo"> </p>&nbsp;&nbsp;&nbsp;</div> */}

              { statu === "0" ? (
             <button to='/signup'  primary='true'   onClick={()=>{withdrawPool(idPool)}}>
             Withraw Pool
          </button>) : (
            <button to='/signup'  primary='true'  onClick={()=>{payTheLoan(idPool,payTheLoanEth.toString())}} >
            Pay the loan
         </button> 
          )
           }
            </ModalContent>
            <CloseModalButton
              aria-label='Close modal'
              onClick={() => setShowModalPool(prev => !prev)}
            />
          </ModalWrapper>
        
       </Background>
    ) : null}
  </>
    );
  }
  
  export default ModalPool;