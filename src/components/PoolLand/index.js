   
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
export var idPool,landId,delay,budget,MaxInvestor,minEntry,Owner,statu

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
        console.log('pools',invests);
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




async function getIdPool(e) {
  var  buttonValue = await document.getElementById('PoolDetail').value;
if(buttonValue=e){
  idPool=buttonValue 
}
console.log('idPool : ',idPool)   
} 
///////////////////////
async function getLandId(e) {
  var  buttonValue = await document.getElementById('PoolDetail').getAttribute('landId');
if(buttonValue=e){
  landId=buttonValue 
} 
console.log('landId : ',landId)  
}
///////////////////////
async function getDelay(e) {
  var  buttonValue = await document.getElementById('PoolDetail').getAttribute('data-delay');
if(buttonValue=e){
  delay=buttonValue
}
console.log('delay : ',delay)  
}
///////////////////////
async function getBudget(e) {
  var  buttonValue = await document.getElementById('PoolDetail').getAttribute('data-budget');
if(buttonValue=e){
  budget=buttonValue
}
console.log('budget : ',budget)  
}
///////////////////////
async function getMaxInvestors(e) {
  var  buttonValue = await document.getElementById('PoolDetail').getAttribute('data-MaxInvestor');
if(buttonValue=e){
  MaxInvestor=buttonValue
}
console.log('MaxInvestor : ',MaxInvestor)  
}
///////////////////////
async function getMinEntry(e) {
  var  buttonValue = await document.getElementById('PoolDetail').getAttribute('data-minEntry');
if(buttonValue=e){
  minEntry=buttonValue
}
console.log('minEntry : ',minEntry)  
}
///////////////////////
async function getowner(e) {
  var  buttonValue = await document.getElementById('PoolDetail').getAttribute('data-owner');
if(buttonValue=e){
  Owner=buttonValue
}
console.log('owner : ',Owner)     
}
///////////////////////
async function getstatus(e) {
  var  buttonValue = await document.getElementById('PoolDetail').getAttribute('data-statu');
if(buttonValue=e){
  statu=buttonValue
}
console.log('status : ',statu)  
} 
///////////////////////
 
      return ( 
            
        <LandCard>   
                  
        <Button onClick={()=>{
          getowner(invest.owner.toString())
          getBudget(invest.totalBudget.toString()/Math.pow(10,18))
          getLandId(invest.landId.toString())
          openModalDetail()}}>< AiFillExclamationCircle color="black"/></Button>
          
        <LandIcon src={Icon1}/>    
        <LandH2>Land#000{invest.id.toString()}</LandH2> 
          
        <p>Total Budget : {invest.totalBudget.toString()/Math.pow(10,18)} ETH </p>
        <p>status : {Status(invest.status.toString())}  </p>
 
        
        <Btn to='/signup'  value={invest.id.toString()} data-landId={invest.landId.toString()} data-delay={invest.lastDelayForInvestInDays.toString()} data-MaxInvestor={invest.maxInvestors.toString()} data-minEntry={invest.minEntry.toString()/Math.pow(10,18)} data-owner={invest.owner.toString()} data-statu={invest.status.toString()} data-budget={invest.totalBudget.toString()/Math.pow(10,18)}   primary='true' id='PoolDetail' onClick={()=>{
                    getBudget(invest.totalBudget.toString()/Math.pow(10,18))
                    getstatus(invest.status.toString())
                    getowner(invest.owner.toString())
                    getMinEntry(invest.minEntry.toString()/Math.pow(10,18))
                    getMaxInvestors(invest.maxInvestors.toString())
                    getDelay(invest.lastDelayForInvestInDays.toString())
                    getLandId(invest.landId.toString())
                    getIdPool(invest.id.toString())
                    openModalPool()}}>
                       Pool Detail
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