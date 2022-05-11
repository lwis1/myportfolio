import styled from '@emotion/styled'
import Title  from '../Components/Title'
import React, { useEffect } from 'react'
import { MainLayout } from '../styles/Layouts'
import ImageSection from '../Components/ImageSection'
import PrimaryButton from '../Components/PrimaryButton'
import ServiceSection from '../Components/ServiceSection'
import Aos from 'aos'
import 'aos/dist/aos.css';
// import Abidi_Cv from '../data/Abidi__Wissam_CV_Eng.pdf'
const AboutPage = () => {
  useEffect(() => {
    Aos.init({duration: 3000});
},[])
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={'About Me'} span={"About Me"} />
        <ImageSection />
        <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
          <div style={{textAlign:"center"}}>
          <a href='https://drive.google.com/file/d/1-SYoluWEUpGDknpAWOyTPSXyltTVUz1Z/view?usp=sharing' target="_blank" >
            <PrimaryButton title={'Curriculum Vitae'} />
          </a>
          </div>
          <hr></hr><hr></hr>
        </div>
        <br></br><br></br>
        <ServiceSection/>
      </AboutStyled>
    </MainLayout>
  )
}

const AboutStyled = styled.section`
position: relative ;
hr{
  animation: none;
  max-width:200%;
  padding: 0.1rem;
  margin: 0;
}

  /* position: relative;
    h2{
        position: relative;
        color: #c8d6e5;
        font-size: 3.1rem ;
        font-weight: 600;
        text-transform: uppercase ;
        padding: 0.7 rem ;
        &::before{
            content: "";
            position: absolute ;
            bottom: 0;
            width: 7.4rem ;
            height: .31rem ;
            background-color: #04bbff ;
            border-radius: 20px;
            left:0;
        }
        &::after{
            content: "";
            position: absolute ;
            bottom: 0;
            width: 3.5rem ;
            height: .33rem ;
            background-color: var(--primary-color) ;
            border-radius: 15px;
            left:0; 
        }
        span{
            position: absolute ;
            font-weight: 900;
            color: rgb(25,29,43,.44);
            font-size: 5rem;
            left: 0;
            top: 30%;
            z-index: -1;
        }
    } */
`

export default AboutPage