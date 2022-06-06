
import Icon1 from '../../images/crypto.png'
import React from 'react'
import Icon2 from '../../images/crypto.png'
import Icon3 from '../../images/crypto.png'
import {LandContainer,LandH1,LandWrapper,LandSurface,LandPosition,LandCard,LandIcon,LandH2,LandP} from './ContainerLandElements'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { FaMapMarker } from 'react-icons/fa'

import { Button as Btn } from '../ButtonElement'
import { useState,useEffect } from 'react'
import ModalPool from '../Modal/ModalPool'
import ModalDetail from '../Modal/ModalDetail'
import { createInvestmentPool, invest, mintLand, signer_address , contract } from '../../interacting/main'


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

const ContainerLand = () => {


//  const [openModal,setOpenModal] = useState(false);
const [showModalDetail, setShowModalDetail] = useState(false);

const openModalDetail = () => {
  setShowModalDetail(prev => !prev);
};

const [showModalPool, setShowModalPool] = useState(false);

const openModalPool = () => {
  setShowModalPool(prev => !prev);
};


const [invests, setInvests] = useState([]);

const [lands, setLand] = useState([]);
const [newVari, setNewVari] = useState([]);

invests.forEach(i => {

  if(!lands.includes(Number(i.id.toString())) ){
   
    lands.push(Number(i.id.toString()))
    newVari.push(i)
    console.log('ayyy', newVari);  
  }  
  });  
  console.log('ayyy', newVari);  


useEffect(() => {
  const getUserPools = async () => { 
    
    const allTokens = await contract._investementIds();
    for (let index = 1; index <= allTokens; index++) {
      const investDetail = await contract.getInvstementPoolDetail(index);
  
      if (investDetail.owner === await signer_address) {
        const investDetail = await contract.getInvstementPoolDetail(index);
        let count = invests
            count.push(investDetail) 
            setInvests(count) 
        console.log('idodididi',invests);
      }
    } 
    
    
  };
  
  getUserPools();
}, []);
    
    return (
        <>
      
      <LandContainer id='test'>
        
      {/* <Container> */}
        {/* <Button onClick={openModal}>I'm a modal</Button> */}
        <ModalDetail showModalDetail={showModalDetail} setShowModalDetail={setShowModalDetail} />
        <ModalPool showModalPool={showModalPool} setShowModalPool={setShowModalPool} />


        {/* <GlobalStyle /> */}
      {/* </Container> */}
          <LandH1>Your Pools Lands </LandH1>
          {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
        
          <LandWrapper>
    

        
          {newVari.length > 0 ? (
    newVari.map((invest) => {
      // console.log("detailed",pools[invest-1].id.toString());
      // console.log("alndID",invest.toString())
      //console.log("HOW MUCH !");    
      return ( 
            
        <LandCard>  
                  
        <Button onClick={openModalDetail}>< AiFillExclamationCircle color="black"/></Button>
         
        <LandIcon src={Icon1}/>    
        <LandH2>Land#.  {invest.id.toString()}</LandH2>
        <div> <LandPosition> <FaMapMarker/> Position : ( 2.333 , 3.476 )</LandPosition>
        <LandSurface>&nbsp;&nbsp;<FaMapMarker/> Surface : 1530 m2 </LandSurface>
        </div>
       
        <Btn to='/signup'  primary='true' onClick={openModalPool}>
             Invest
        </Btn>   
        {/* <Btn  primary='true' onClick={invest}>
             test 
        </Btn>    */}
  
    </LandCard>
   );
  }) 
) : (
  <h1>NO DATA</h1>
)} 
 
          </LandWrapper>
      </LandContainer>
      </>
  
      ) 
  }
  
  export default ContainerLand