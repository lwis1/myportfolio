import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Title = ({title, span}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
    },[])
  return (
    <TitleStyled>
        <div data-aos="zoom-in-down">
        <h2>{title} <b><span>{span}</span></b> </h2>
        </div>
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
   position: relative;
    h2{
        position: relative;
        color: #dfe6e9;
        font-size: 3.1rem ;
        font-weight: 600;
        text-transform: uppercase ;
        padding: 0.7 rem ;
        padding-bottom: 0.8rem ;
        opacity:0.8;

        &::before{
            content: "";
            position: absolute ;
            bottom: 0;
            width: 7.4rem ;
            height: .31rem ;
            background-color: #a29bfe ;
            border-radius: 20px;
            left:0;
            opacity:0.4;
        }
        &::after{
            content: "";
            position: absolute ;
            bottom: 0;
            width: 3rem ;
            height: .33rem ;
            background-color: #6c5ce7 ;
            border-radius: 15px;
            opacity: 0.8;
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
    }
`

export default Title