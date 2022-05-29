import styled from 'styled-components'
import {Link} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom' 


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=>(primary ? '#01BF71':'#010606')};
    white-space: nowrap;
    padding: ${({big})=>(big ? '16px 58px':'14px 48px')};
    color: ${({dark})=>(dark ? '#010606':'#fff')};
    font-size: ${({fontBig})=>(fontBig ? '20px':'16px')};
    outline: none ;
    border: none;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        text-decoration: none;

        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary ? 'black':'#01BF71')};
        
        color: ${({dark})=>(dark ? '#010606':'white')};

    }
`;


export const ButtonR = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary})=>(primary ? '#01BF71':'#010606')};
    white-space: nowrap;
    padding: ${({big})=>(big ? '16px 58px':'14px 48px')};
    color: ${({dark})=>(dark ? '#010606':'#fff')};
    font-size: ${({fontBig})=>(fontBig ? '20px':'16px')};
    outline: none ;
    border: none;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        text-decoration: none;

        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary ? 'black':'#01BF71')};
        
        color: ${({dark})=>(dark ? '#010606':'white')};

    }
`;
