import React , {useState} from 'react'
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroBtnWrapper,HeroH1,HeroP,ArrowForward,ArrowRight} from './HeroElements'
import video from '../../videos/video3.mp4'
import { ButtonR } from '../ButtonElement'

const HeroSection = () => {

    const [hover,setHover] = useState(false)


    const onHover = () =>{
        setHover(!hover)
    }
  return (
      <HeroContainer id='home'>
          <HeroBg>
              <VideoBg autoPlay loop muted src={video}
               type='video/mp4'/>
          </HeroBg>
          <HeroContent>
              <HeroH1>
                    Virtual Banking Made Easy
              </HeroH1>
              <HeroP>
              Virtual Banking Made EasyVirtual Banking Made
               Virtual Banking Made EasyEasyVirtual 
               Banking Made EasyVirtual Banking Made EasyVirtu
               al Banking Made Easy.
              </HeroP>
              <HeroBtnWrapper>
                  <ButtonR to='/signup' onMouseEnter={onHover} onMouseLeave={onHover}
                   primary='true' >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
                  </ButtonR>
              </HeroBtnWrapper>
          </HeroContent>

      </HeroContainer>
  )
}

export default HeroSection