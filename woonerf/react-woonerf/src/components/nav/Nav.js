import React from 'react';
import styled from 'styled-components'

const StyledNav = styled.button`
    display: flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: #9b8355;
    font-weight: bold;
    cursor: pointer;

    /* 크기 */
    width: 100%;
    height: 2.25rem;
    font-size: 2rem;

    /* 색상 */
    background: rgba(0,0,0,0);
    &:hover {
    background: #3e4528;
    }
    &:active {
    background: rgba(31,31,31);
    }

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

                <StyledNav className="nav-item">
                    {props.menu[0]}
                </StyledNav>
                <StyledNav className="nav-item">
                    {props.menu[1]}
                </StyledNav>
                <StyledNav className="nav-item">
                    {props.menu[2]}
                </StyledNav>
                <StyledNav className="nav-item">
                    {props.menu[3]}
                </StyledNav>

            </div>
        </div>
    </nav>
)

export default Nav;