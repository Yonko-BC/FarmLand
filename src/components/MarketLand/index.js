
import Icon1 from '../../images/crypto.png'
import React from 'react'
import Icon2 from '../../images/crypto.png'
import Icon3 from '../../images/crypto.png'
import {LandContainer,LandH1,LandWrapper,LandSurface,LandPosition,LandCard,LandIcon,LandH2,LandP} from './ContainerLandElements'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { FaMapMarker } from 'react-icons/fa'

import { Button as Btn } from '../ButtonElement'
import { useState } from 'react'
import ModalInvestor from '../Modal/ModalInvestor'
import ModalDetail from '../Modal/ModalDetail'


import styled from 'styled-components';
import { createInvestmentPool, invest, mintLand, signer_address , contract } from '../../interacting/main'




// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* height: 100vh; */
//   /* margin-top: 40rem; */
// `;

const Button = styled.button`
  /* min-width: 100px; */
  /* padding: 16px 32px; */
  background-color: transparent;
  border-radius: 4px;
  border: none;
  /* background: #141414; */
  /* color: #fff; */
  font-size: 28px;
  cursor: pointer;
  margin-left: 13rem !important;
  margin-top: -1.5rem;
`;

const ContainerLand = () => {


    


const [showModalDetail, setShowModalDetail] = useState(false);

const openModalDetail = () => {
  setShowModalDetail(prev => !prev);
};

const [showModalInvestor, setShowModalInvestor] = useState(false);

const openModalInvestor = () => {
  setShowModalInvestor(prev => !prev);

};






    return (
        <>
     
      <LandContainer id='test'>
        
      {/* <Container> */}
        {/* <Button onClick={openModal}>I'm a modal</Button> */}
        <ModalDetail showModalDetail={showModalDetail} setShowModalDetail={setShowModalDetail} />
        <ModalInvestor showModalInvestor={showModalInvestor} setShowModalInvestor={setShowModalInvestor} />


        {/* <GlobalStyle /> */}
      {/* </Container> */}
          <LandH1>WE WANT IT HERE </LandH1>
          {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
        
          <LandWrapper>
    

        
              <LandCard>
                  {/* <Modal showModal={showModal} setShowModal={setShowModal}/>
                  <GlobalStyle /> */}

      
                  <Button onClick={openModalDetail}>< AiFillExclamationCircle color="black"/></Button>
                  
     

                  <LandIcon src={Icon1}/>
                  <LandH2>Land#000001</LandH2>
                  <div> <LandPosition> <FaMapMarker/> Position : ( 2.333 , 3.476 )</LandPosition>
                  <LandSurface>&nbsp;&nbsp;<FaMapMarker/> Surface : 1530 m2 </LandSurface>
                  </div>
                 
                  <Btn to='/signup'  primary='true' onClick={openModalInvestor}>
                       Invest
                  </Btn>   
                  {/* <Btn  primary='true' onClick={invest}>
                       test
                  </Btn>    */}

              </LandCard>
 
          </LandWrapper>
      </LandContainer>
      </>
  
      )
  }
  
  export default ContainerLand