import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Link as Links} from 'react-scroll'

export const FooterContainer = styled.footer`
  background-image: linear-gradient(to bottom,#041404
,rgba(0, 0, 0, 0.953),rgb(0, 0, 0));
box-shadow: 40px 50px 195px 75px rgba(1, 31, 2, 0.89);
`
export const Footerwrap = styled.div`
    padding: 48px 24px;
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin:0 auto;
`

export const FooterLinksContainer= styled.div` 
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
  `

export const FooterLinksWrapper= styled.div`
    display: flex;

    @media screen and (max-width: 820px){
    flex-direction: column;
    }
`

export const FooterLinkItems=styled.div` 

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 200px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
 }
 `

export const FooterLinkTitle=styled.h1`
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: bold;
`
export const FooterLink=styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;

    &:hover{
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`


export const SocialMedia= styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap=styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

 @media screen and (max-width: 820px){
    flex-direction: column;
  }
`

export const Sociallogo=styled(Links)`

  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  &:hover{

color: greenyellow;    }
`

export const WebsiteRights=styled.small`
  color: #fff;
  margin-bottom: 16px;
`

export const SocialIcons=styled.div` 
margin-top: -1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
    color:#fff;
    font-size: 24px;

    &:hover{
        color: ${({dark})=>(dark ? 'red':'blue')};

    }
`