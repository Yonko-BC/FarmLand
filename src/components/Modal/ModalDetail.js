
import React, { useRef, useEffect,useState, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { contract, signer_address } from "../../interacting/main";
import { id, owner, value } from '../ContainerLand';
import { budget, landId, Owner } from '../PoolLand';
import {FaEthereum} from 'react-icons/fa';


 
const Background = styled.div`
  width: 1190px;
  height: 930px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2rem;
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
  /* margin-top: 60rem; */
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
    /* display: none; */
  }
  .landId{
    display: flex;
    margin-left: -2rem;
margin-top: 2rem;
  }
  .h4{
    margin-right: 1rem;
  }

  h1{
  
    margin-top:-3rem;
    margin-bottom: 2rem;
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



function ModalDetail({ showModalDetail, setShowModalDetail }) {
    const modalRef = useRef();



  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModalDetail(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModalDetail) {
        setShowModalDetail(false);
        console.log('I pressed');
      }
    },
    [setShowModalDetail, showModalDetail] 
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  /**
  **************** Get Detail ****************
  **/

  const [counter, setCounter] = useState([]);

  const [lands, setLand] = useState([]);
  const [newVari, setNewVari] = useState([]);
  counter.forEach(i => {
  
    if(!lands.includes(Number(i.id.toString())) ){
     
      lands.push(Number(i.id.toString())) 
      newVari.push(i)
      console.log('test array', newVari[0].owner);   
    }  
    });
    // console.log('ayyy', counter );  



  useEffect(() => {
    const getUserLands = async () => {
      
      // const allTokens = await contract._tokenIds();
      // console.log('allTokens',allTokens);
      // for (let index = 1; index <= allTokens; index++) {
        const ownerO = await contract.ownerOf(id.toString(16)); 

        if (ownerO === (await signer_address)) {
          const landDetail = await contract.IdToLand(id.toString(16));
        //   let land = lands; 
        //   land.push(landDetail);
        //   setLand(land); 

            let count = counter   
            count.push(landDetail) 
            setCounter(count)
            // console.log(counter); 
        // console.log("landDetail modal ", landDetail);
        }
      }  


      
    

    getUserLands();
  }, []);
            // console.log(counter.length);

 /**
  ********************************************
   */


  console.log('landId yoo',landId);

 
  return (
    <>
      {showModalDetail ? (
        <Background onClick={closeModal} ref={modalRef}>
          
            <ModalWrapper showModalDetail={showModalDetail}>
              <ModalImg src={require('./Modal.png')} alt='camera' />
              <ModalContent>
                <h1>Land details</h1>
                {/* <p>Get exclusive access to our next launch.</p> */}
               <div className='landId'><h4>id :&nbsp;&nbsp;&nbsp;&nbsp;</h4> <p> {id}{landId}</p></div> 
               <div className='landId'><h4>owner address :</h4>
                </div> <p>{owner}{Owner}</p>
                <div className='landId'><h4>&nbsp;Approximate Land Value : </h4><p>&nbsp;&nbsp;&nbsp;&nbsp; {value}{budget}&nbsp; Eth &nbsp;&nbsp;&nbsp;&nbsp; <FaEthereum/></p></div>
                {/* <button>Join Now</button> */}
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModalDetail(prev => !prev)}
              />
            </ModalWrapper>
        
         </Background>
      ) : null}
    </>
    );
  }
  
  export default ModalDetail;