import React from 'react'
// import { Button } from 'react-scroll/modules';
import { Button } from '../ButtonElement'

import { InfoWrapper,InfoRow,BtnWrap,Column1,TopLine,Heading,Subtitle,TextWrapper,Column2, Img, ImgWrap ,InfoContainer} from './InfoElements';

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,lightTextDesc,dark,primary,description,primaryH,buttonLabel,img,alt}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine> {topLine} </TopLine>
                <Heading lightText={lightText}> {headline} </Heading>
                <Subtitle darkText={lightTextDesc}>{description}</Subtitle>
                <BtnWrap>
                  <Button to='home' dark={dark} primaryH={primaryH} primary={primary}  smooth={true} duration={500} spy={true} exact='true' offset={-80} >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection