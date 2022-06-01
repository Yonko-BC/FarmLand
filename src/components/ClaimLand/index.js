
import Icon1 from '../../images/crypto.png'
import React, { useEffect } from 'react'
import Icon2 from '../../images/crypto.png'
import Icon3 from '../../images/crypto.png'
import {LandContainer,LandH1,LandWrapper,LandSurface,LandPosition,LandCard,LandIcon,LandH2,LandP} from './ContainerLandElements'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { FaMapMarker } from 'react-icons/fa'

import { Button as Btn } from '../ButtonElement'
import { useState } from 'react'
import ModalClaim from '../Modal/ModalClaim'
import ModalDetail from '../Modal/ModalDetail'
import { contract,signer_address } from '../../interacting/main'


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

/*             --------------------------        */
const [invests, setInvests] = useState([]);
const [pools, setPools] = useState([]);




useEffect(() => {
  const getInvestorInvestments = async () => {
    const allInvestments = await contract._investementIds();
    for (let index = 1; index <= allInvestments; index++) {
      const investDetail = await contract.getInvstementPoolDetail(index);
      const invest_investors = investDetail.investors;
      // console.log("investors ", invest_investors[0]);
      //console.log("signer ", signer_address);
      for (let index_2 = 0; index_2 < invest_investors.length; index_2++) {
        if ((await signer_address) === invest_investors[index_2]) {
          
          let pool = pools;
          pool.push(investDetail);
          setPools(pool);
        }
      }
    }
    const getInvestorInvestments_Tx = await  contract.getInvestorInvestments(
      signer_address
    );
    const invest = await getInvestorInvestments_Tx;
    setInvests(invest);
  };
  
  getInvestorInvestments();
}, []);

/*             --------------------------        */


async function claim(investmentPoolId) {
        const claim_Tx = await contract.claim(investmentPoolId);
        console.log("Claimed");
      }





//  const [openModal,setOpenModal] = useState(false);
const [showModalDetail, setShowModalDetail] = useState(false);

const openModalDetail = () => {
  setShowModalDetail(prev => !prev);
};

// const [showModalClaim, setShowModalClaim] = useState(false);

// const openModalClaim = () => {
//   setShowModalClaim(prev => !prev);
// };

 function Status(statut_number) {
if(  statut_number === '0'){
    console.log("PROJECT CREATED");
    return 'Project Created'
}
else if( statut_number === '1'){
    return 'Withrew'
}
else if( statut_number === '2'){
    return 'Deposit'
}
else if( statut_number === '3'){
    return 'Banned'
}
}

    
    return (
        <>
     
      <LandContainer id='test'>
        
      {/* <Container> */}
        {/* <Button onClick={openModal}>I'm a modal</Button> */}

     
        <ModalDetail showModalDetail={showModalDetail} setShowModalDetail={setShowModalDetail} />
    {/*        <ModalClaim showModalClaim={showModalClaim} setShowModalClaim={setShowModalClaim} /> */}


        {/* <GlobalStyle /> */}
      {/* </Container> */}
          <LandH1>Claimment Lands</LandH1>
          {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
        
          <LandWrapper>
    

          {invests.length > 0 ? (
        invests.map((invest) => {
          // console.log("detailed",pools[invest-1].id.toString());
          // console.log("alndID",invest.toString())
          //console.log("HOW MUCH !");
          return (
            <LandCard>
            {/* <Modal showModal={showModal} setShowModal={setShowModal}/>
            <GlobalStyle /> */}


            <Button onClick={openModalDetail}>< AiFillExclamationCircle color="black"/></Button>
            


            <LandIcon src={Icon1}/>
            <LandH2>Land Id : {pools[invest - 1].id.toString()}</LandH2>
            <div> <LandPosition> <FaMapMarker/> Statue : {Status(pools[invest - 1].status.toString())}</LandPosition>
            <LandSurface>&nbsp;&nbsp;<FaMapMarker/> Time : {(pools[invest - 1].createdAt.toString())} </LandSurface>
            </div>
           { pools[invest - 1].status.toString() === "2" ? (
             <Btn to='/signup'  primary='true' onClick={() => claim(pools[invest - 1].id.toString())} >
             Claim
          </Btn>) : (
            <Btn to='/signup'  primary='true' onClick={() => claim(pools[invest - 1].id.toString())} >
            No Claim
         </Btn> 
          )
           }
              

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
  
  export default ClaimLand