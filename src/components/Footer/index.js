import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarker, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer,FooterLinksWrapper,FooterLink,FooterLinkTitle,FooterLinkItems , Footerwrap,Sociallogo,FooterLinksContainer, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'


const Footer = () => {
  return (
    <FooterContainer id='contact'>

        <Footerwrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>

                    <FooterLinkItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>

                            <FooterLink to='/signin'>Register Land</FooterLink>
                            <FooterLink to='/signin'>Buy/Sell Land</FooterLink>
                            <FooterLink to='/signin'>Renting Land</FooterLink>
                            <FooterLink to='/signin'>Lanch investment</FooterLink>

                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Contact </FooterLinkTitle>
                            <FooterLink to='/support@farm-land.com'> <FaEnvelope/> &nbsp;support@farm-land.com</FooterLink>
                            
                            <FooterLink to=''><FaPhone/> &nbsp;(+212) 5246-12914</FooterLink>
                            <FooterLink to='//www.google.com/maps/place/Ecole+Sup%C3%A9rieure+de+Technologie/@32.3081412,-9.2190333,16.93z/data=!4m12!1m6!3m5!1s0xdac20c13554a6a3:0xe0bcd1e33a700800!2sEcole+Sup%C3%A9rieure+de+Technologie!8m2!3d32.3078107!4d-9.2165602!3m4!1s0xdac20c13554a6a3:0xe0bcd1e33a700800!8m2!3d32.3078107!4d-9.2165602?hl=fr'> <FaMapMarker/> 
                            &nbsp;Route Dar Si-Aïssa BP. 89 
                             &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Av. Echahid Mbarek  
                             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; El Mokhtar, Safi
                             </FooterLink>
                            {/* <FooterLink to='/signin'>About us</FooterLink>
                            <FooterLink to='/signin'>About us</FooterLink> */}

                    </FooterLinkItems>

                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <Sociallogo to='home'>
                    FarmLand
                    </Sociallogo>
                    <WebsiteRights>
                      Copyright © {new Date().getFullYear()} FarmLand. all rights reserved.
                    </WebsiteRights>

                    <SocialIcons>
                        <SocialIconLink  href='//fr-fr.facebook.com/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                        <SocialIconLink dark='red' href='/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
                        <SocialIconLink dark='red' href='//www.youtube.com' target='_blank' aria-label='Youtube'><FaYoutube/></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'><FaLinkedin/></SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

        </Footerwrap>
    </FooterContainer>
  )
}

export default Footer