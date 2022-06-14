
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



const DivKhawya = styled.div`
margin-bottom: 28rem;
`

const BtnDisable = styled.button`

/* cursor: none; */
border-radius: 50px;
    background: ${({primary})=>(primary ? 'black':'#010606')};
    white-space: nowrap;
    padding: ${({big})=>(big ? '16px 58px':'14px 48px')};
    color: ${({dark})=>(dark ? '#010606':'#fff')};
    font-size: ${({fontBig})=>(fontBig ? '20px':'16px')};
    outline: none ;
    border: none;
    /* cursor: pointer; */
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        text-decoration: none;

        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary ? 'red':'#01BF71')};
        
        color: ${({dark})=>(dark ? '#010606':'white')};
        cursor: not-allowed;

    }
`;

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


const [newVari, setNewVari] = useState([]);
const [filtrer, setFilterer] = useState([]);


pools.forEach(i => {
 
if(!filtrer.includes(Number(i.id.toString())) ){
  filtrer.push(Number(i.id.toString()))
  
  
  console.log(Number(i.id.toString()));
  newVari.push(i)
  // yo=Number(i.id.toString())
} 
});
// console.log('yooooo',newVari);
console.log('filter',newVari);

// document.getElementById('disable').style.cursor='not-allowed'

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
    // console.log("PROJECT CREATED");
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
          <LandH1>Claim rewards Lands</LandH1>
          {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
        
          <LandWrapper>
    

          {invests.length > 0 ? (
        invests.map((invest) => {
                // console.log("detailed",pools[invest-1].id.toString());
          // console.log("alndID",invest.toString())
          //console.log("HOW MUCH !");
          const unixTimestamp = newVari[invest - 1].createdAt

          const milliseconds = unixTimestamp * 1000 // 1575909015000
          
          const dateObject = new Date(milliseconds)
          
          const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
          
          return (

            <LandCard>
            {/* <Modal showModal={showModal} setShowModal={setShowModal}/>
            <GlobalStyle /> */}


            <Button onClick={openModalDetail}>< AiFillExclamationCircle color="black"/></Button>
            


            <LandIcon src={Icon1}/> 
            <LandH2>Land Id : {newVari[invest - 1].id.toString()}</LandH2>
            <div> <LandPosition>  Statue : {Status(newVari[invest - 1].status.toString())}</LandPosition>
            <LandSurface>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;Time :&nbsp;&nbsp;{humanDateFormat} 
            </LandSurface>
            </div>
           { newVari[invest - 1].status.toString() === "2" ? (
             <Btn   primary='true' onClick={() => claim(newVari[invest - 1].id.toString())} >
             Claim
          </Btn>) : (
            <BtnDisable  id='disable'  primary='true' >
            Claim
         </BtnDisable> 
          )
           }
              

        </LandCard>
          );
        })
      ) : (
        // <h1>NO DATA</h1>
        <DivKhawya></DivKhawya>
      )}
             
      
          </LandWrapper>
      </LandContainer>
      </>
  
      )
  }
  
  export default ClaimLand