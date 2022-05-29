
import Icon1 from '../../images/crypto.png'
import React from 'react'
import Icon2 from '../../images/crypto.png'
import Icon3 from '../../images/crypto.png'
import {LandContainer,LandH1,LandWrapper,LandSurface,LandPosition,LandCard,LandIcon,LandH2,LandP} from './ContainerLandElements'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { FaMapMarker } from 'react-icons/fa'

import { Button as Btn } from '../ButtonElement'
import { useState } from 'react'
import ModalClaim from '../Modal/ModalClaim'
import ModalDetail from '../Modal/ModalDetail'


import styled from 'styled-components';





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

const ClaimLand = () => {


//  const [openModal,setOpenModal] = useState(false);
const [showModalDetail, setShowModalDetail] = useState(false);

const openModalDetail = () => {
  setShowModalDetail(prev => !prev);
};

const [showModalClaim, setShowModalClaim] = useState(false);

const openModalClaim = () => {
  setShowModalClaim(prev => !prev);
};



    
    return (
        <>
     
      <LandContainer id='test'>
        
      {/* <Container> */}
        {/* <Button onClick={openModal}>I'm a modal</Button> */}
        <ModalDetail showModalDetail={showModalDetail} setShowModalDetail={setShowModalDetail} />
        <ModalClaim showModalClaim={showModalClaim} setShowModalClaim={setShowModalClaim} />


        {/* <GlobalStyle /> */}
      {/* </Container> */}
          <LandH1>Claimment Lands</LandH1>
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
                 
                  <Btn to='/signup'  primary='true' onClick={openModalClaim}>
                       Claim
                  </Btn>   

              </LandCard>
              <LandCard>
                  <LandIcon src={Icon1}/>
                  <LandH2>Land#000002</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard> <LandCard>
                  <LandIcon src={Icon1}/>
                  <LandH2>Land#000003</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard>
              <LandCard>
                  <LandIcon src={Icon2}/>
                  <LandH2>Land#000004</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard>
              <LandCard>
                  <LandIcon src={Icon3}/>
                  <LandH2>Land#000005</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard>
              <LandCard>
                  <LandIcon src={Icon3}/>
                  <LandH2>Land#000006</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard>
              <LandCard>
                  <LandIcon src={Icon3}/>
                  <LandH2>Land#000007</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard>
              <LandCard>
                  <LandIcon src={Icon3}/>
                  <LandH2>Land#000008</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard>
              <LandCard>
                  <LandIcon src={Icon3}/>
                  <LandH2>Land#000009</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard>
              <LandCard>
                  <LandIcon src={Icon3}/>
                  <LandH2>Land#0000010</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard>
              <LandCard>
                  <LandIcon src={Icon3}/>
                  <LandH2>Land#0000011</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard>
              <LandCard>
                  <LandIcon src={Icon3}/>
                  <LandH2>Land#0000012</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard>
              <LandCard>
                  <LandIcon src={Icon3}/>
                  <LandH2>Land#0000013</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard>
              <LandCard>
                  <LandIcon src={Icon3}/>
                  <LandH2>Land#0000014</LandH2>
                  <LandP>we help reduce your fees and increase your overall revenue.</LandP>
              </LandCard>
          </LandWrapper>
      </LandContainer>
      </>
  
      )
  }
  
  export default ClaimLand