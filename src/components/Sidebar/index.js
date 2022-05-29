import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarLinkR,SidebarMenu,SidebarLink,SidebarBtnWrap,SidebarRoute} from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
  return (

    <>
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                    <i class="fa-solid fa-circle-info"></i> &nbsp;&nbsp; About
                    </SidebarLink>
                    <SidebarLink to="servises" onClick={toggle}>
                    <i class="fa-solid fa-hand-holding-dollar"></i>&nbsp;&nbsp; Servises
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}> 
                    <i class="fa-solid fa-comments"> </i> &nbsp;&nbsp;Contact
                    </SidebarLink>
                    <SidebarLinkR to="/marketplace" onClick={toggle}>
                    <i class="fa-solid fa-shop"></i>&nbsp;&nbsp;Marketplace
                    </SidebarLinkR>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='signin'>
                    <i class="fa-solid fa-arrow-right-to-bracket"></i>&nbsp; &nbsp;Sign In
                    </SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    
    </>

    )
}

export default Sidebar