// import React from 'react'
// import './Modal.css'
// import { Button } from '../ButtonElement'
// import*as AiIcons from 'react-icons/ai';


// function Modal({closeModal}) {
//   return (
//     <div className='modalBackground'>
        
//         <div className='modalContainer'>
//           <button className='close'  onClick={()=>{closeModal(false)}}> <AiIcons.AiOutlineCloseCircle /> </button>
//             <div className='title' > hello bebe </div>
//             <div className='body' > bye bye bebe </div>
//             <div className='footer' >
//                 <div className='btn'> <Button onClick={()=>{closeModal(false)}} primary='true'>cancel</Button> </div>
//                 <div className='btn'> <Button primary='true'>Continue</Button> </div>  
//             </div>
            

//         </div>
//     </div>
//   )
// }

// export default Modal



import React from "react";
import "./Modal.css";
import { Button } from '../ButtonElement'
import * as AiIcons from 'react-icons/ai';

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className='close'
            onClick={() => {
              closeModal(false);
            }}
          >
           <AiIcons.AiOutlineCloseCircle />
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
        <div className='btn'> <Button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel 
           </Button> </div>
         <div className='btn'>    <Button>Continue</Button>  </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;