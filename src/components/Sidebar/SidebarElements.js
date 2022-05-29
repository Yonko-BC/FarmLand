import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside `

    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    /* left: 9rem !important; */
    background:#0d0d0d;
    display: grid;
    align-items: center;
    top:0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    @media screen and (min-width:892px ) {
        display:none;    
        }
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;

`
export const Icon = styled.div`

    position: absolute;
    top:1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;

`
export const SidebarMenu = styled.ul`
    display: grid;
    padding:18px 130px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,70px);
    text-align: center;
margin:auto !important;
    @media screen and (max-width:480px ) {
        grid-template-rows: repeat(6,50px);
    }

`

export const SidebarLink = styled(LinkS)`
    display: flex;
    border-radius: 35px;
    align-items: center;

    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color:#fff;
    cursor: pointer;
    &:hover{
    
        border-radius: 35px;
        background-color: #ddd;
        color: black;    }
`
export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;

`
export const SidebarRoute = styled(LinkR)`

border-radius: 38px;
background: #01BF71;
    text-decoration: none;
    white-space:nowrap;
    padding:18px 29px;
    color:#fff;
    font-size:20px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;


    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color:#010606;

    }


`


export const SidebarLinkR = styled(LinkR)`
    display: flex;
    border-radius: 35px;
    align-items: center;

    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color:#fff;
    cursor: pointer;
    &:hover{
    
        border-radius: 35px;
        background-color: #ddd;
        color: black;    }
`