import React,{useEffect} from 'react'
import styled from '@emotion/styled'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
import ServiceCard from './ServiceCard'
import Design from '../img/logo-design.png'
import Design1 from '../img/frontend.png'
import Design2 from '../img/mern-stack-development.png'
import Aos from 'aos'
import 'aos/dist/aos.css';


const ServiceSection = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    },[])
  return (
    <InnerLayout>
        <ServicesSectionStyled>
            <Title title={'services'} span={'services'} />
            <br></br><br></br>
            <br></br>
            <div className='services' data-aos="fade-up">
                <ServiceCard image={Design} title={'web Design'} paragraph={'i build design n all thing about web application'}/>
                <ServiceCard image={Design1} title={'Frontend Development'} paragraph={'i build design n all thing about web application'}/>
                <ServiceCard image={Design2} title={'Build MERN application'} paragraph={'i build design n all thing about web application'}/>
            </div>
        </ServicesSectionStyled>
    </InnerLayout>
  )
}

const ServicesSectionStyled = styled.div`
    .services{
        display: flex;
        justify-content: space-between;
    }

`;

export default ServiceSection