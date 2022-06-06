
import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { withdrawPool } from '../../interacting/main';

const Background = styled.div`  
  width: 1190px;
  height: 930px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -90rem;
`;

const ModalWrapper = styled.div`
  display: block;
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  margin-top: 60rem;
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
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
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


  return (
    <>
      {showModalPool ? (
        <Background onClick={closeModal} ref={modalRef}>
         
            <ModalWrapper showModalPool={showModalPool}>
              {/* <ModalImg src={require('./Modal.png')} alt='camera' /> */}
              {/* <div>detail</div> */}
              <ModalContent>
                <h1>Are you ready? Pool Money </h1>
                <p>Get exclusive access to our next launch.</p>
                <button onClick={withdrawPool}>withdrawPool</button>
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