
import Icon1 from '../../images/crypto.png'
import React from 'react'
import Icon2 from '../../images/crypto.png' 
import Icon3 from '../../images/crypto.png'
import {LandContainer,LandH1,LandWrapper,LandSurface,LandPosition,LandCard,LandIcon,LandH2,LandP} from './ContainerLandElements'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { FaMapMarker } from 'react-icons/fa'
  
import { Button as Btn } from '../ButtonElement'
import { useState,useEffect } from 'react'
import ModalInvestor from '../Modal/ModalInvestor'
import ModalDetail from '../Modal/ModalDetail'  

 
import styled from 'styled-components';
import { createInvestmentPool, invest, mintLand, signer_address , contract } from '../../interacting/main'

 

const DivKhawya = styled.div`
margin-bottom: 28rem;
`
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
 
export var idPool,landId,delay,budget,MaxInvestor,minEntry,owner,statu,createdAt

const ContainerLand = () => {


   

const [showModalDetail, setShowModalDetail] = useState(false);

const openModalDetail = () => {
  setShowModalDetail(prev => !prev);
};

const [showModalInvestor, setShowModalInvestor] = useState(false); 

const openModalInvestor = () => {
  setShowModalInvestor(prev => !prev); 
  
};   
const [invests, setInvests] = useState([]);
  
const [newVari, setNewVari] = useState([]);  
const [filtrer, setFilterer] = useState([]);

invests.forEach(i => {
  
if(!filtrer.includes(Number(i.id.toString())) ){
 
  filtrer.push(Number(i.id.toString()))
  newVari.push(i) 
  // console.log('ayyy', newVari);  
} 
});

console.log('Pool All detail',newVari); 
 
 
useEffect(() => {
  const getMarketPlace = async () => {
    
      const allInvestments = await contract._investementIds();
      for(let index = 1; index <= Number(allInvestments); index++){
        const investDetail = await contract.getInvstementPoolDetail(index);
        
        // console.log('yooooooo',investDetail);
        
        let invest =  invests; 
         invest.push( investDetail);
         setInvests( invest); 

      }  
    
  };
  
   getMarketPlace();
}, []);
    
// console.log(invests);      


async function getIdPool(e) {
  var  buttonValue = await document.getElementById('investBtn').value;
if(buttonValue=e){
  idPool=buttonValue
}
console.log('idPool : ',idPool)  
}
///////////////////////
async function getLandId(e) {
  var  buttonValue = await document.getElementById('investBtn').getAttribute('landId');
if(buttonValue=e){
  landId=buttonValue 
}
console.log('landId : ',landId)  
}
///////////////////////
async function getDelay(e) {
  var  buttonValue = await document.getElementById('investBtn').getAttribute('data-delay');
if(buttonValue=e){
  delay=buttonValue
}
console.log('delay : ',delay)  
}
///////////////////////
async function getBudget(e) {
  var  buttonValue = await document.getElementById('investBtn').getAttribute('data-budget');
if(buttonValue=e){
  budget=buttonValue
}
console.log('budget : ',budget)  
}
///////////////////////
async function getMaxInvestors(e) {
  var  buttonValue = await document.getElementById('investBtn').getAttribute('data-MaxInvestor');
if(buttonValue=e){
  MaxInvestor=buttonValue
}
console.log('MaxInvestor : ',MaxInvestor)  
}
///////////////////////
async function getMinEntry(e) {
  var  buttonValue = await document.getElementById('investBtn').getAttribute('data-minEntry');
if(buttonValue=e){
  minEntry=buttonValue
}
console.log('minEntry : ',minEntry)  
}
///////////////////////
async function getowner(e) {
  var  buttonValue = await document.getElementById('investBtn').getAttribute('data-owner');
if(buttonValue=e){
  owner=buttonValue
}
console.log('owner : ',owner)     
}
///////////////////////
async function getstatus(e) {
  var  buttonValue = await document.getElementById('investBtn').getAttribute('data-statu');
if(buttonValue=e){
  statu=buttonValue
}
console.log('status : ',statu)  
}
///////////////////////
 
async function getCreatedAt(e) {
  var  buttonValue = await document.getElementById('investBtn').getAttribute('data-created');
if(buttonValue=e){
  createdAt=buttonValue
} 
console.log('createdAt : ',createdAt)  
} 
 
    return ( 
        <> 
     
      <LandContainer id='test'> 
         
      {/* <Container> */}  
        {/* <Button onClick={openModal}>I'm a modal</Button> */}
        <ModalDetail showModalDetail={showModalDetail} setShowModalDetail={setShowModalDetail} />
        <ModalInvestor showModalInvestor={showModalInvestor} setShowModalInvestor={setShowModalInvestor} />
   
        {/* <GlobalStyle /> */} 
      {/* </Container> */}       
          <LandH1>Marketplace  </LandH1>
          {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
         
          <LandWrapper>
    
          {newVari.length > 0 ? ( 
        newVari.map((invest) => {
          // console.log("detailed",pools[invest-1].id.toString());
          // console.log("alndID",invest.toString()) 
          //console.log("HOW MUCH !"); 
          
          if(invest.status.toString()==='0'){
          return ( 
            <> 
              <LandCard> 
                    
                  <Button onClick={openModalDetail}>< AiFillExclamationCircle color="black"/></Button>
                  
                  <LandIcon src={Icon1}/>  
                  <LandH2><h5>&nbsp;&nbsp;Land#000{invest.id.toString()}</h5></LandH2>
                  
                  <div> <p> </p>
                    {/* <p>  delay : {invest.lastDelayForInvestInDays.toString()}</p> */}
                    <p>Total Budget : {invest.totalBudget.toString()/Math.pow(10,18)} ETH </p>
                    {/* <p> Min Entry : {invest.minEntry.toString()/Math.pow(10,18)} ETH </p> */}
 
                  </div> 
                 
                  <Btn to='/signup' data-created={invest.createdAt.toString()} value={invest.id.toString()} data-landId={invest.landId.toString()} data-delay={invest.lastDelayForInvestInDays.toString()} data-MaxInvestor={invest.maxInvestors.toString()} data-minEntry={invest.minEntry.toString()/Math.pow(10,18)} data-owner={invest.owner.toString()} data-statu={invest.status.toString()} data-budget={invest.totalBudget.toString()/Math.pow(10,18)}   primary='true' id='investBtn' onClick={()=>{
                    getCreatedAt(invest.createdAt.toString())
                  getBudget(invest.totalBudget.toString()/Math.pow(10,18))
                    getstatus(invest.status.toString())
                    getowner(invest.owner.toString())
                    getMinEntry(invest.minEntry.toString()/Math.pow(10,18))
                    getMaxInvestors(invest.maxInvestors.toString())
                    getDelay(invest.lastDelayForInvestInDays.toString())
                    getLandId(invest.landId.toString())
                    getIdPool(invest.id.toString())
                    openModalInvestor()}}>
                       Invest
                  </Btn>   
                  {/* <Btn  primary='true' onClick={invest}>
                       test
                  </Btn>    */}

              </LandCard>
              </>
       );} 
      })
    ) : (
      <DivKhawya></DivKhawya>
      // <h1>NO DATA</h1>
    )}
        
          </LandWrapper>
      </LandContainer>
      </>
    
      ) 
  }
  
  export default ContainerLand  


  