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
                <ServicesH2>Register Land</ServicesH2>
                <ServicesP>register your land in our Blockchain without all the paperwork in the real life.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Buy / Sell Land</ServicesH2>
                <ServicesP>buy and sell lands easier than ever without any intermediary in between to verify the transaction process.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Rent Land</ServicesH2>
                <ServicesP>find land for rent without any problems that you may deal with in the real life process.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Investment Land</ServicesH2>
                <ServicesP>make an investment in a project where you register your property and make an announcement that describes your project.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>

    )
}

export default Services