import React from 'react'
import Particle from '../Components/Particles';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
const HomePage = () => {
  return (
    <HomePageStyled>
        <div className='typographi'>
        <div className='ts-particles-js'>
            <Particle />
        </div>
        <div>
            <div className='title-anim'> 
            {/* <h1 className='title' ><span className='span-title'>Hel</span>lo,</h1> */}
            <h1 className='title2'> 
                <span className='span-title0'> Hi, I'm </span>
                Abidi  
                <span className='span-title2'> Wissam </span>
            </h1>
            <h1 className='title'>
                <span className='span-title'> Full Stack  </span>
                Developer
            </h1>
            
            <h1 className='title1'>
                <span className='span-title1'> I </span> Design
                <span className='span-title1'> & </span> Build 
                <span className='span-title2'> User Interfaces </span> 
            </h1>
            {/* <h1 className='title1'>
                <span className='span-title1'> I </span> Design
                <span className='span-title1'> & </span> Build 
                <span className='span-title2'> User Interfaces </span> 
            </h1> */}
            <br></br>
            </div>
            <hr className='hr-2' />
            <br></br>
            {/* <br></br> */}
            
            <p className='anim-p'>
                I use animation as athird dimension by wich to simplify experiences and building thro each and every interaction .
                I'm not adding motion just to spruce things up, but in ways that
            </p>
            {/* <br></br> */}
            </div>
            <div className='icons'>
                <hr className="hr-h"/>
                <a href='https://github.com/lwis1' className='icon i-github' target='_blank'>
                    <GithubIcon />
                </a>
                
                <hr className="hr-h" />
                
                <a href='https://www.linkedin.com/in/wissam-abidi-05649bba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOv3OXkxsSda4YgIL1zvUwQ%3D%3D' className='icon i-Linkedin' target='_blank'>
                    <LinkedinIcon />
                </a>
            <hr className="hr-h" />
                
                <a href='https://www.facebook.com/profile.php?id=100008112345048' className='icon i-facebook' target='_blank'>
                    <FacebookIcon />
                </a>
            </div>
            <hr />
        
        
    </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
    /* max-height: 100vh ; */
    overflow: none; 
    height: 100vh;
    min-width: 80vh;
    position: relative;
    p{
        color: var(--secondary-color);
        margin-bottom: 25px;
        align-items: flex-start;
        border-left:2px solid var(--border-color);
        /* border-left:2px solid var(--border-color); */
        text-align: left;
        font-size: 1rem;
        margin-left: 150px;
        margin-right: 120px;
        border-spacing:20px;
        opacity: 0.5;
        transition: All 5s cubic-bezier(1,-0.2,0.25,0.95) ease-in-out;
        &:hover{
            opacity: 0.8;
            text-shadow: 1px 1px paleturquoise ;
        }
    }
    h1:hover{
        transform: scale(1.13);
        opacity: 1 !important;
        cursor: cell;
        animation: none;
    }
    span {
        color: var(--primary-color);
        font-size: 3.2rem;
        opacity: 0.8;
    }

    .ts-particles-js{
        position: relative;
        top: 0;
        bottom: 50%;

    }
    .typographi{
        animation: firstIn 5s  ;
        /* 
        width: 100%;
        
        margin-left: 50%;
         */
        /* background-color: red; */
        position: relative;
        top: 12.5%;
        min-width: 50vh;
        text-align: center;
        transform: translate(0%,0%);
        /* .title{
            text-shadow: 2px 2px rgb(24,44,97);
            font-size: 2.4rem;
            color: var(--primary-color);
            opacity: 0.6;
            .span-title{
                font-size: 2.5rem;
                color: white;
                opacity: 0.6;
            }
        } */
        .title{
            text-shadow: 5px 3px black;
            font-size: 2.4rem;
            color: var(--primary-color);
            opacity: 0.6;
            letter-spacing: 2px;
            padding-bottom:0.1rem;
            padding-top:0.1rem;
            margin-left: 200px;
            margin-right:200px;
            .span-title{
                font-size: 2.5rem;
                color: white;
                opacity: 0.6;
                text-shadow: 3px 2px black ;
            }
        }
        .title1{
            font-size: 1.5rem;
            border-top:1px outset var(--border-color);
            border-bottom:none;
            margin:2px 1px;
            letter-spacing: 2px;
            color: white;
            padding-bottom:0.1rem;
            padding-top:0.1rem;
            opacity: 0.6;
            text-shadow: 5px 2px black ;
            margin-left: 280px;
            margin-right: 280px;
            .span-i2{
                color: green;
                font-size: 1.7rem;
                opacity: 1;
            }
            :hover{
                color: green;
            }
            .span-title1{
                font-size: 1.4rem;
                color: var(--secondary-color);
                opacity: 0.6;
                text-shadow: 2px 2px white ;
            }
            .span-title2{
                font-size: 1.7rem;
                color: white;
                opacity: 0.6;
                text-shadow: 5px 3px black ;
                
                
            }
        }
        .title2{
            border-bottom:1px solid var(--border-color);
            /* font-weight:100px; */
            /* font-size:5rem; */
            /* border-top:1px solid var(--border-color); */
            transition: All 0.5s cubic-bezier(1,-0.2,0.25,0.95) ease-in-out;
            :hover{
                color: purple;
                opacity: 0.9;
                }
            .span-title0{
            color: white;
            opacity: 0.4;
            text-shadow: 2px 2px black ;
            font-size: 2.5rem;
            
            }
            .span-i1{
                color: purple;
                opacity: 1;
            }
        }
        .icons{
            display: flex;
            justify-content: center;
            padding: 0.5rem;
            .hr-h{
                color:var(--border-color);
                padding: 2px;
                border-color: var(--border-color) ;
                border-left:10px solid whitesmoke;
                border-top:none;
                border-bottom:none;
                border-right:1px solid whitesmoke;
                opacity: 0.5;
                transition: all 3s ease-in-out;
                :hover{
                    border-color:var(--background-dark-color);
                    transform: 2s ease-in-out;
                }
            }
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                transition: all .6s ease-in-out;
                cursor: pointer;
                :hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                    transform: rotate3d(8, 4, 2, 360deg);
                }
                &:not(:last-child){
                    margin-right: 6.8rem;
                    
                }
                svg{
                    margin: 0.4rem;
                }
            }
            .i-github{
                :hover{
                    border: 2px solid white;
                    color: white;
                    background-color:black;
                }
            }
            .i-Linkedin{
                :hover{
                    border: 2px solid white;
                    color: white;
                    background-color:rgb(10, 102, 194);
                }
            }
            .i-facebook{
                :hover{
                    border: 2px solid white;
                    color: white;
                    background-color:darkblue;
                }
            }
        }
    }

`;

export default HomePage