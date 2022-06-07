import React , {useState} from 'react'
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroBtnWrapper,HeroH1,HeroP,ArrowForward,ArrowRight} from './HeroElements'
// import video from '../../videos/video1.mp4'
import { ButtonR } from '../ButtonElement'

const HeroSection = () => {
// const [i,seti] = useState('1')
    const [hover,setHover] = useState(false)


    const onHover = () =>{
        setHover(!hover)
    }
  
    
  return (
      <HeroContainer id='home'>
          <HeroBg>
              <VideoBg autoPlay loop muted src={require('../../videos/video2.mp4')}
               type='video/mp4'/>
          </HeroBg>
          <HeroContent>
              <HeroH1>
                    Virtual Land Registration Made Easy
              </HeroH1>
              <HeroP>
              Land registry in morocco as well as in many parts of the world is a very slow and inconvenient process.
and here where our app's take place.
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