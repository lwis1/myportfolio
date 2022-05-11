import React from 'react'
import styled from '@emotion/styled'

const PrimaryButton = ({title}) => {
  return (
    <PrimaryButtonStyled>
        {title}
    </PrimaryButtonStyled>
  )
}
const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2rem;
  margin: 2.5rem ;
  margin-bottom: 0;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform:  uppercase;
  position: relative ;
  border-radius: 5px;
  /* justify-self: center; */
  /* justify-content: center; */
  /* justify-items: center; */
  /* align-items: center ; */
  transition: all .4s ease-in-out;
  opacity: 0.9;
  &::after{
    content: "";
    position: absolute;
    transition: all 1.2s ease-in-out;
    width: 0;
    height: 7%;
    left: 0;
    bottom: 0;
    opacity: 0.5;
    border-radius: 10px;
  }
  &:hover::after{
    background-color: var(--white-color);
    width: 100%;
    opacity: 1;
  }
`;

export default PrimaryButton