import styled from 'styled-components'

import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav =styled.nav`
 /* background-color: rgba(0, 0, 0, 0.297); */
height:100%;
    /* margin-top:555px; */
    /* display:flex; */
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index : 10;
    min-width: 32em;
    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }

`

export const NavbarContainer =styled.div`

       height:55px;
       max-width:1260px;
    // display:flex;
    // justify-content:space-between;
    // width:100%;
    // padding:0 24px;
    // top:0;
    // z-index : 1;
    background-color: rgba(16, 14, 14, 0.794);
    box-shadow: 0px -4px 14px -1px rgba(255, 255, 255, 0.514);
    border-radius: 15px;
    margin-top: -4.3em;
    margin-left: 9em;
    margin-right: 4em;
    overflow: hidden;


 `
// export const NavLogo =styled(LinkR)`

//     color:red;
//     display:flex;
//     justify-content:flex-start;
//     cursor:pointer;
//     font-size:1.5rem;
//     align-items:center;
//     margin-left:24px;
//     font-weight:bold;
//     text-decoration:none;
//`

export const NavLogo =styled.img`
    cursor:pointer;
    margin-left:2em;
    /* margin-top:em !important; */
    width: 5.7em;
    height: 5.7em;
    
`


export const NavLogoContainer =styled(LinkS)`
    cursor:pointer;
    margin-left:-0.5%;
    /* margin-top:em !important; */
    width: 5.7em;
    height: 5.7em;
    
`


export const MobileIcon =styled.div`
    display:none;
   

    @media screen and (max-width:891px){
        color:#fff;
        display:block;
        position:absolute;
        top:-0.43em;
        right:0.7rem;
        transform: translate(-100%,60%);
        font-size:1.9rem;
        cursor:pointer;
        padding:0.19em 0.7rem;
        margin:auto;

        &:hover{

            border-radius: 15px;
            background-color: #ddd;
            color: black;    }
    }
    
`

export const NavMenu =styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-left: -2rem;
   @media screen and (max-width:891px){
        display:none;
        
      
    }
`

export const NavItem =styled.li`
    height:80px;   
    margin-top:1em;
    
`

export const NavLinks =styled(LinkS)`

    display:center;
    align-items:center;
    text-decoration:none;
    padding:1.135em 1.4rem;
    height:100%;
    cursor:pointer;
    color:#fff;
    &:hover{
        border-radius: 15px;
        background-color: #ddd;
        color: black;    }
    &.active{
        border-bottom:3px solid #01bf71;
    }

`

export const NavBtn =styled.nav`
    display:flex;
    align-items:center;
     margin-top:-6.66em;
     margin-left:auto ;
     margin-right:2rem;

    width:5.9em;
    @media screen and (max-width:770px){
        display:none;
        

    }

`

export const NavBtnLink =styled(LinkR)`
display: block;
    border-radius: 23px;
    background: #01BF71;
    text-decoration: none;
    white-space:nowrap;
    padding:10px 22px;
    color:#fff;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;


    &:hover{
       
        background:#fff;
        color:#010606;

    }

    

`


export const NavLinkR =styled(LinkR)`

    display:center;
    align-items:center;
    text-decoration:none;
    padding:1.135em 1.4rem;
    height:100%;
    cursor:pointer;
    color:#fff;
    &:hover{
        border-radius: 15px;
        background-color: #ddd;
        color: black;    }
    &.active{
        border-bottom:3px solid #01bf71;
    }

`