import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import wissam1 from '../img/wissam1.jpg'
const Navigation = () => {
  return (
    <NavigationStyled>
        <div className='avatar'>
            <img src={wissam1} alt=""/>
        </div>
        <ul className='nav-items'>
            <li className="nav-item">
                <NavLink to="/" className={({isActive}) => (isActive ? 'active' : 'inactive')}  >Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className={({isActive}) => (isActive ? 'active' : 'inactive')}  >About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/resume" className={({isActive}) => (isActive ? 'active' : 'inactive')}  >Resume</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/porftolios" className={({isActive}) => (isActive ? 'active' : 'inactive')}  >Portfolio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" className={({isActive}) => (isActive ? 'active' : 'inactive')}  >Contact</NavLink>
            </li>
        </ul>
        <footer className='footer'>
            <p>&copy; Abidi Wissam Portfolio 2022</p>
        </footer>
    </NavigationStyled>
  )
}
const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 2px solid var(--border-color);


    .avatar{
        width: 90%;
        text-align: center;
        border-bottom: 1px solid var(--border-color);
        padding: 2rem 0;
        transition: transform 10s;
        img{
            width: 70%;
            height: 120%;
            border-radius: 50%;
            border: 2px solid var(--border-color);
        }
    }
    .avatar:hover{
        transform: scale(1.13);
        cursor: none;
    }

    .nav-items{
        width:  100%;
        text-align: center;
        .active{
            background-color: var(--background-dark-color);
            color: green;
            transition: transform 0.6s;
            &:hover{
                transform: rotate3d(0, 4, 0, 360deg);
            }
        }
        li{
            display: block;
            a{
                display: block;
                padding: 0.2rem ;
                position: relative;
                transition: transform 0.1s;
                margin-bottom: 10px;
                z-index: 10;
                &:hover{
                    cursor:pointer;
                    transform: scale(1.03);
                    text-shadow: 1px 1px green;
                    
                }
                &:before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: All 0.3s cubic-bezier(1,-0.2,0.25,0.95);
                    opacity: 0.13;
                    z-index: 3;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
                
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 90%;
        /* transition: transform 3s; */
        p{
            padding: 1rem 1rem;
            font-size: 0.65rem;
            display: block;
            direction: rtl;
            unicode-bidi: bidi-override;
            text-align: center;
            text-shadow: 1px 1px green;
            &:hover{
                transform: rotate3d(0, 4, 0, 180deg);
                
            }
        }
        
    }
`;
export default Navigation