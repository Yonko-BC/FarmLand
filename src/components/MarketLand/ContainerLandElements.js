import styled from 'styled-components'


export const LandContainer=styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
    margin-left: 15.64rem;
    /* margin-top: -37rem; */
  align-items: center;
  background-image: linear-gradient(to top,rgb(2, 27, 3),rgba(12, 104, 7, 0.911),rgb(255, 255, 255));
  /* width: auto; */

 /* @media screen and (max-width: 768px){
    height: 1800px;
  }
 @media screen and (max-width: 480px){
    height: 1300px;
 } */
 `

export const LandWrapper = styled.div` 

max-width: 1400px;
margin:auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
align-items: center;
grid-gap: 16px;
padding:0 50px;
margin-bottom: 3rem !important;
/* margin-left: 3rem; */


@media screen and (max-width: 1300px){
  grid-template-columns: 1fr 1fr  ;
  
}

@media screen and (max-width: 1000px){
  grid-template-columns: 1fr ;
  
}

@media screen and (max-width: 768px){
  grid-template-columns: 1fr;
  padding:0 20px;
  max-width: 400px;

}
`

export const LandCard=styled.div`
min-width: 15rem !important;
width: 17rem ;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  /* max-height: 340px; */
  padding: 30px ;
  box-shadow:0 1px 77px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  margin-left: 3rem;
  margin-top: 2rem;

/* min-width: 400rem; */
/* right: 34rem !important; */

  &:hover{
    overflow: visible;
box-shadow: 40px 50px 60px black;
    /* transform: scale(1.02); */
    transition: all 0.6s ease-in-out;
    cursor: pointer;
  }
`

export const LandIcon=styled.img`
 height: 160px;
 width: 160px;
 margin-bottom: 10px;
 /* margin-top: -2rem; */
 `

export const LandH1=styled.h1` 
    font-size: 2.5rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
    font-size: 2rem;
    }
`

export const LandH2=styled.h2` 
  font-size: 1rem;
  font-weight: bold;

  margin-bottom: 10px;
`

export const LandP=styled.p`
  font-size: 1rem;
  text-align: center;
  /* margin-left: -5.5rem; */
  
`


export const LandSurface=styled.p`
  font-size: 1rem;
  text-align: center;
  margin-left: -6.5rem;
  
`


export const LandPosition=styled.p`
  font-size: 1rem;
  text-align: center;
  margin-left: -3rem;
  
`



export const LandDetail=styled.a`
  font-size: 1.5rem;
  /* text-align: center; */
  margin-left: 13rem;
  margin-top: -1rem;


  
`

// export const GlobalStyle=styled.div`

//   box-sizing: border-box;
//   margin: 20rem 0;
//   padding: 0;
//   font-family: 'Arial', sans-serif;

  

  
// `
