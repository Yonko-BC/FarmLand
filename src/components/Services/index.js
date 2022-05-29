import React from 'react'
import { ServicesContainer,ServicesIcon,ServicesP,ServicesH2, ServicesCard,ServicesWrapper, ServicesH1} from './ServicesElements'
import Icon1 from '../../images/crypto.png'
import Icon2 from '../../images/crypto.png'
import Icon3 from '../../images/crypto.png'
const Services = () => {
    
  return (
    <ServicesContainer id='servises'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>we help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>we help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>we help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>we help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>

    )
}

export default Services