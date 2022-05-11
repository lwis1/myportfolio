import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation';

function Sidebar() {
  return (
    <SidebarStyle>
        <Navigation />
    </SidebarStyle>
  )
}
const SidebarStyle = styled.div`
    width: 18%;
    height: 100%;
    position: fixed;
    background-color: var(--sidebar-dark-color);
`;
export default Sidebar 