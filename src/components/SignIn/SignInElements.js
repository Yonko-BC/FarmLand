import styled from 'styled-components'

import {Link } from 'react-router-dom'
import background from '../../images/pexels-ákos-szabó-440731.jpeg'
// import { link } from 'ethereum-waffle'

export const Body = styled.body`
     margin: 0px;
     padding: 43px 0px; 
     background-image: url(${background});
    background-size:cover;
    background-position:center;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
`

export const Icon=styled(Link)`
 cursor:pointer;
    margin-left:-0.5rem;
    /* margin-top:77771rem ; */
    width: 5.7em;
    height: 5.7em;

 @media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;

  }
  
`

export const DivContainer=styled.div`
    box-shadow: 0px -4px 14px -1px rgba(255, 255, 255, 0.514);
    /* left: 30rem; */
    width: 27.7em !important;
    /* margin-top: 50px !important; */
    margin: 65px auto !important;
    height: 520px;
    overflow: hidden;
    background-color: rgba(20, 19, 19, 0.754);
    border-radius: 15px;
    position: relative;

`  
export const Form = styled.form`
      transition: 0.5s;
    width: 350px;
    position: absolute;
    top: 130px;
    left: 50px;
`

export const DivTitle = styled.div`
     margin-top: -3em !important;
`

export const H3 = styled.h3`
     
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 5px;
    text-align: center !important;
    color:rgb(202, 201, 201) ; 
`
export const H5 = styled.h5`
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 1px;
    margin-bottom: 30px !important;
    text-align: center !important;
    color:rgb(202, 201, 201) ; 
`
export const DivWrap = styled.div`
     position: relative;
    width: 100%;
    z-index: 1;
`
export const FormInput = styled.input`
      width: 85%;
    padding: 10px 8px;
    margin: 5px 0;
    border: 0;
    color: aliceblue;
    border-bottom: 1px solid rgb(198, 193, 193);
    outline: none;
    background: transparent;
`

export const Checkinput =styled.input`


        &:checked{
            accent-color: #099b24;

        }

`
export const Checklabel = styled.label`
     font-size: 14px;
    font-weight: normal;
    top: 1px;
    color: #999999;
    line-height: 1.2;
    display: block;
    position: relative;
    left: -3rem;
    cursor: pointer;

`

export const TXTa = styled.a`
     color: #999999;
     &:hover{
        color: aliceblue;
    transition: 0.3s;
     }
`

export const Div = styled.div`
       display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 1em;
    justify-content: space-between;
    -ms-align-items: center;
    align-items: center;
`

export const BtnBoxdiv= styled.div`
display: grid;
     text-align: center;
    width: 100%;
    margin-top: 0.7em;
    margin-left: 3rem;
`

export const Button = styled.button`
    border-radius: 1.5rem;
    border: none;
    height: auto;
    width: 15em;
    background: linear-gradient(to right,rgb(0, 0, 0),rgb(8, 74, 5),#10bd4aef,#23eb3483);
    font-weight: 600;
    color: rgb(255, 255, 255);
    margin-top: 15px;
    padding: 10px;
    outline: none;
    cursor: pointer;

    &:hover{
        background: white;
        color: black;
    }
`
export const ButtonR = styled(Link)`
text-decoration: none;

    border-radius: 1.5rem;
    text-align: center;
    border: none;
    height: auto;
    width: 15em;
    background: linear-gradient(to right,rgb(0, 0, 0),rgb(8, 74, 5),#10bd4aef,#23eb3483);
    font-weight: 600;
    color: rgb(255, 255, 255);
    margin-top: 15px;
    padding: 10px;
    outline: none;
    cursor: pointer;

    &:hover{
        background: white;
        color: black;
    }
`
export const TXTp=styled.p`
      position: relative;
    top:21px;
    left: 18%;
    font-size: 15px;
    font-family: 'Roboto Slab', serif;
    color: gray;
`

export const SignA=styled.a`
      position: relative;
    top: -18px;
    left: 58%;
    color: #999999;
    font-size: 15px;
    font-family: 'Roboto Slab', serif;

    &:hover{
        color: aliceblue;
        transition: 0.3s;
    }
`