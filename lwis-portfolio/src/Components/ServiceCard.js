import React, {useEffect} from 'react'
import styled from '@emotion/styled'
import Aos from 'aos'
import 'aos/dist/aos.css';


const ServiceCard = ({image,title,paragraph}) => {
    useEffect(() => {
        Aos.init({duration: 4000});
    },[])
  return (
    <ServiceCardStyled>
        <div className='container' data-aos="flip-left" data-aos-easing="ease-out-cubic" >
            <img src={image} alt="" />
            <h4>{title}</h4>
            <p>{paragraph}</p>
        </div>
    </ServiceCardStyled>
  )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    margin: 2rem 0.5rem;
    margin-top: 5rem;
    display: flexbox;
    position: relative;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    border-radius: 5px;
    transition: all .4s ease-in-out;
    opacity: 0.9;
    &:hover{
        border-top: 8px solid #6c5ce7;
        transform: translateY(3px);
        opacity: 1;
        border-color: #6c5ce7;
    }
    /* z-index: -1; */
    /* opacity: .9; */
    .container{
        padding: 1.2rem;
        img{
            border-left: 1px solid var(--border-color);
            border-right: 1px solid var(--border-color);
            border-top: 4px solid var(--border-color);
            border-bottom: 1px solid var(--border-color);
            height: 200px;
            width: 250px;
            display: flex;
            justify-items: stretch;
            margin-bottom: 1rem ;
            background-color: var(--background-dark-color);
            border-radius: 20px;
            transition: all .4s ease-in-out;
            opacity: 0.9;
            &:hover{
                border-top: 4px solid #6c5ce7;
                transform: translateY(1.5px);
                opacity: 1;
                border-color: #6c5ce7;
        }
        }
        p{
            padding: .8rem 0;
        }
        h4{
            color: var(--white-color);
            font-size: 1.25rem;
            padding: 0.5rem 0;
            position: relative;
            &::after{
                content: "";
                width: 3rem;
                height: 3px;
                position: absolute;
                background-color: var(--border-color);
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

    }
`;

export default ServiceCard