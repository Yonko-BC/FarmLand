import Icon1 from "../../images/crypto.png";
import React from "react";
import Icon2 from "../../images/crypto.png";
import Icon3 from "../../images/crypto.png";
import {
  LandContainer,  
  LandH1,
  LandWrapper, 
  LandSurface,
  LandPosition,
  LandCard, 
  LandIcon,
  LandH2,
  LandP, 
} from "./ContainerLandElements";
import { AiFillExclamationCircle } from "react-icons/ai";
import { FaMapMarker } from "react-icons/fa";

import { Button as Btn } from "../ButtonElement";
import { useState, useEffect } from "react";
import ModalInvest from "../Modal/ModalInvest";
import ModalDetail from "../Modal/ModalDetail";
import { contract, signer_address } from "../../interacting/main";

import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* height: 100vh; */
//   /* margin-top: 40rem; */
// `;
const DivKhawya = styled.div`
margin-bottom: 28rem;
`
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

export let id=[]; 
export let owner=[];  
export let value=[]; 
 
const ContainerLand = () => {
  //  const [openModal,setOpenModal] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);


  const openModalDetail = () => {    

    setShowModalDetail((prev) => !prev);
    
  };    
 
  const [showModalInvest, setShowModalInvest] = useState(false);

  const openModalInvest = () => {
    setShowModalInvest((prev) => !prev);
  };

  const [lands, setLand] = useState([]);
  const [counter, setCounter] = useState([]);
  const [newVari, setNewVari] = useState([]);
  counter.forEach(i => {
  
    if(!lands.includes(Number(i.id.toString())) ){
     
      lands.push(Number(i.id.toString())) 
      newVari.push(i)
      console.log('ayyy', newVari);     
    }  
    });
    // console.log('ayyy', newVari );  
 
  useEffect(() => {
    const getUserLands = async () => {
      const allTokens = await contract._tokenIds();

      for (let index = 1; index <= allTokens; index++) {
        const ownerO = await contract.ownerOf(index);

        if (ownerO === (await signer_address)) {
          const landDetail = await contract.IdToLand(index);
        //   let land = lands; 
        //   land.push(landDetail);
        //   setLand(land);

            let count = counter
            count.push(landDetail) 
            setCounter(count)
            // console.log(counter); 
        // console.log("landDetail ", landDetail);
       
        }
      }  
      // var buttonValue = document.getElementById('detailBtn').value;

      // console.log('id : ',buttonValue) 

      
    };

    getUserLands();
  }, []);
            // console.log(counter.length);


  
/*********/

// useEffect( 
//   () => { 
//     btnDetail=document.getElementById('detailBtn')
//     btnDetail.addEventListener('click', );
//   },
// );

/*********/

async function getId(e) {
  var  buttonValue = await document.getElementById('detailBtn').value;
  // console.log('id : ',buttonValue)  

if(buttonValue=e){
  id=buttonValue
  
}
console.log('id : ',id)  
}
async function getOwner(e) {
  var  buttonValue = await document.getElementById('detailBtn').getAttribute('data-owner');
  // console.log('id : ',buttonValue)  
  
if(buttonValue=e){  
  owner=buttonValue
       
}  
console.log('owner : ',owner)  
}  

async function getValue(e) {
  var  buttonValue = await document.getElementById('detailBtn').getAttribute('data-value');
  // console.log('id : ',buttonValue)  

if(buttonValue=e){
  value=buttonValue
  
}
console.log('value : ',value)  
}   
  return (
    <>
 
  <LandContainer id='test'>
     
  {/* <Container> */} 
    {/* <Button onClick={openModal}>I'm a modal</Button> */}
    <ModalDetail showModalDetail={showModalDetail} setShowModalDetail={setShowModalDetail} />
    <ModalInvest showModalInvest={showModalInvest} setShowModalInvest={setShowModalInvest} />

  
    {/* <GlobalStyle /> */}
  {/* </Container> */} 
      <LandH1>  Inventory   </LandH1>
      {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
    
      <LandWrapper>
 
      {newVari.length > 0 ? ( 
    newVari.map((invest) => {   
      // console.log("detailed",pools[invest-1].id.toString());
      // console.log("alndID",invest.toString())  
      //console.log("HOW MUCH !");     
      return (  
               
          <LandCard>   
              <Button value={invest.id.toString()} data-owner={invest.owner} data-value={invest.value.toString()/Math.pow(10,18)}     id='detailBtn' onClick= {()=>{   
getId(invest.id.toString()) 
getOwner(invest.owner)
getValue(invest.value.toString()/Math.pow(10,18))
openModalDetail()    
  }}>< AiFillExclamationCircle color="black"/></Button>     
              <LandIcon src={Icon1}/> 
              <LandH2>Land# {invest.id.toString()}</LandH2>
 
              {/* <LandH2>Land#. {invest.value.toString()/Math.pow(10,18)}</LandH2> */}
              {/* <div> <LandPosition> <FaMapMarker/> Position : ( 2.333 , 3.476 )</LandPosition>
              <LandSurface>&nbsp;&nbsp;<FaMapMarker/> Surface : 1530 m2 </LandSurface>
              </div>  */} 
             
              <Btn to='/signup'  primary='true' onClick={()=>{getId(invest.id.toString()) 
                openModalInvest()}}>
                   Create Project 
              </Btn>   
              {/* <Btn  primary='true' onClick={invest}>
                   test  
              </Btn>    */}
  
          </LandCard>
   );  
  })
) : ( 
  <DivKhawya></DivKhawya>
  // <h1>NO DATAaa</h1> 
)}    
    
      </LandWrapper>
  </LandContainer>
  </>

  ) 

  // jdida

  //   return (
  //     <>

  //   <LandContainer id='test'>

  //   {/* <Container> */}
  //     {/* <Button onClick={openModal}>I'm a modal</Button> */}

  //     <ModalDetail showModalDetail={showModalDetail} setShowModalDetail={setShowModalDetail} />
  // {/*        <ModalClaim showModalClaim={showModalClaim} setShowModalClaim={setShowModalClaim} /> */}

  //     {/* <GlobalStyle /> */}
  //   {/* </Container> */}
  //       <LandH1>Claimment Lands</LandH1>
  //       {/* {openModal && <Modal closeModal={setOpenModal}/>} */}

  //       <LandWrapper>

  //       {invests.length > 0 ? (
  //     invests.map((invest) => {
  //       // console.log("detailed",pools[invest-1].id.toString());
  //       // console.log("alndID",invest.toString())
  //       //console.log("HOW MUCH !");
  //       return (
  //         <LandCard>
  //         {/* <Modal showModal={showModal} setShowModal={setShowModal}/>
  //         <GlobalStyle /> */}

  //         <Button onClick={openModalDetail}>< AiFillExclamationCircle color="black"/></Button>

  //         <LandIcon src={Icon1}/>
  //         <LandH2>Land Id : {pools[invest - 1].id.toString()}</LandH2>
  //         <div> <LandPosition> <FaMapMarker/> Statue : {Status(pools[invest - 1].status.toString())}</LandPosition>
  //         <LandSurface>&nbsp;&nbsp;<FaMapMarker/> Time : {(pools[invest - 1].createdAt.toString())} </LandSurface>
  //         </div>
  //        { pools[invest - 1].status.toString() === "2" ? (
  //          <Btn to='/signup'  primary='true' onClick={() => claim(pools[invest - 1].id.toString())} >
  //          Claim
  //       </Btn>) : (
  //         <Btn to='/signup'  primary='true' onClick={() => claim(pools[invest - 1].id.toString())} >
  //         No Claim
  //      </Btn> 
  //       )
  //        }

  //     </LandCard>
  //       );
  //     })
  //   ) : (
  //     <h1>NO DATA</h1>
  //   )}

  //       </LandWrapper>
  //   </LandContainer>
  //   </>

  //   )

  /// RETURN 9dima

  // return (
  //     <>

  //   <LandContainer id='test'>

  //   {/* <Container> */}
  //     {/* <Button onClick={openModal}>I'm a modal</Button> */}
  //     <ModalDetail showModalDetail={showModalDetail} setShowModalDetail={setShowModalDetail} />
  //     <ModalInvest showModalInvest={showModalInvest} setShowModalInvest={setShowModalInvest} />

  //     {/* <GlobalStyle /> */}
  //   {/* </Container> */}
  //       <LandH1>Your LandsDD</LandH1>
  //       {/* {openModal && <Modal closeModal={setOpenModal}/>} */}

  //       <LandWrapper>

  //           <LandCard>
  //               {/* <Modal showModal={showModal} setShowModal={setShowModal}/>
  //               <GlobalStyle /> */}

  //               <Button onClick={openModalDetail}>< AiFillExclamationCircle color="black"/></Button>

  //               <LandIcon src={Icon1}/>
  //               <LandH2>Land#000001</LandH2>
  //               <div> <LandPosition> <FaMapMarker/> Position : ( 2.333 , 3.476 )</LandPosition>
  //               <LandSurface>&nbsp;&nbsp;<FaMapMarker/> Surface : 1530 m2 </LandSurface>
  //               </div>

  //               <Btn to='/signup'  primary='true' onClick={openModalInvest}>
  //                    Project
  //               </Btn>

  //           </LandCard>

  //       </LandWrapper>
  //   </LandContainer>
  //   </>

  //   )
};
export default ContainerLand;