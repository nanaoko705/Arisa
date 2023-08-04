import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNav = styled(Link)`
    display: flex;
    justify-content: center;  
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: #9b8355;
    font-weight: bold;
    cursor: pointer;
    text-decoration-line: none;

    /* 크기 */
    width: 100%;
    height: 2.25rem;
    font-size: 2rem;

    /* 색상 */
    background: rgba(0,0,0,0);

    /* 기타 */
    & + & {
    margin-top: 5rem;
    }

    font-family: var(--font-poppins);
`;

const Nav = (props) => (
    <nav className="navbar" id="mainNav">
        <div className="container">
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <StyledNav className="nav-item" to="/about">
                    {props.menu[0]}
                </StyledNav>
                <StyledNav className="nav-item" to="/class">
                    {props.menu[1]}
                </StyledNav>
                <StyledNav className="nav-item" to="/shop">
                    {props.menu[2]}
                </StyledNav>
                <StyledNav className="nav-item" to="/archive">
                    {props.menu[3]}
                </StyledNav>
            </div>
        </div>
    </nav>
)

export default Nav;