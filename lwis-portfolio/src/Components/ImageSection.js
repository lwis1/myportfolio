import React, { useEffect } from 'react'
import styled from 'styled-components'
import wissem from '../img/wissem.png'
import Aos from 'aos'
import 'aos/dist/aos.css';

const ImageSection = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    },[])
  return (
    <ImageSectionStyled>
        
        <div className='right-content' data-aos="fade-up">
            <div className='sub-title' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            <h4 className='paragraph'>
            FullStack Developer </h4>
            <h4>***** <span>****</span> ***** <span>****</span>  </h4>
            <h4> Senior Technician in Industrial IT</h4>
                <h4>***** <span>****</span> ***** <span>****</span> ***** <span>****</span> **</h4>
            </div>
            <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">As a young developer graduated from GoMyCode training institute as a Full Stack Javascript developer, I am looking forward as a
            to elaborate new development strategies, to  access and contribute to new projects within the field.
            My passion for coding will help me carry out my new tasks. Equally, a graduate in Industrial Computer Science (LAII) at ISSATSO in 2017. Curious, creative computer scientist who seeks to learn and master new technologies.</p>
            <div className="about-info" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <div className="info-title">
                    <p>Full Name :</p>
                    <p>Age :</p>
                    <p>Nationality :</p>
                    <p>Languages :</p>
                    <p>Location :</p>
                    <p>Services :</p>
                </div>
                <div className="info">
                    <p>Abidi Wissem</p>
                    <p>30</p>
                    <p>Tunisien</p>
                    <p>English, french, Arabic</p>
                    <p>Kef Tunisia</p>
                    <p>freelance web developer</p>
                </div>
            </div>
            
        </div >
        <div className='left-content' data-aos="fade-left"data-aos-anchor="#example-anchor"data-aos-offset="500"data-aos-duration="5000">
            <img src={wissem} alt=""/>
        </div>
        
        
    </ImageSectionStyled>
  )
}

const ImageSectionStyled = styled.div`
    margin-top: 1rem;
    display: flex;
    overflow-y: scroll; 
    .left-content{
        padding-bottom: 1.4 rem;
        width: 200%;
        margin-left: 5rem;
        margin-right: 0px;
        img{
            width: 90% ;
            height: 85%;
            padding: 15px 10px;
            margin-top: 10rem;
            padding-bottom: 0px;
            z-index: -1;
            /* object-fit: cover; */
            filter: drop-shadow(10px 10px 5px rgb(25,29,43,.94));
            opacity: 0.75;
            flex:1;
            border-bottom: 8px solid var(--border-color);
            border-right: 2px solid var(--border-color);
            border-top-right-radius: 45%;
            border-top-left-radius: 85%;
            background-color: rgb(25,29,43,.44) ;
            border-left: 2px none var(--border-color);
            /* animation: fadeImage 1s  alternate; */
        }
    }
    .right-content{
        padding-top: 15%;
        padding-left: 5%;
        padding-bottom: 1.4 rem;
        /* padding-bottom: 10%; */
        h4{
            padding-bottom: 0;
            margin-bottom: 0;
            font-size:2rem;
            color: var(--white-color);
            span{
                font-size:2rem;
                color: blanchedalmond; 
            }
        }
        .paragraph{
            padding-top: 0rem ;
            padding-bottom: 0rem;

        }
        .about-info{
        display: flex;
        .info-title{
            padding-right: 6rem;
            p{
                padding: 5rem 3rem;
            }
        }
        .info-title, .info{
            p{
                padding: .3rem 0;
                padding-top: 1rem;
            }
        }
        }
    }
`;

export default ImageSection