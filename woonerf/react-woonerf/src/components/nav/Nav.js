import React from 'react';
import styled from 'styled-components'
import './Nav.css';

const StyledNav = styled.button`
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: #9b8355;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    width: 10rem;
    height: 2.25rem;
    font-size: 1rem;

    /* 색상 */
    background: rgba(0,0,0,0);
    &:hover {
    background: #339af0;
    }
    &:active {
    background: #1c7ed6;
    }

    /* 기타 */
    & + & {
    margin-left: 1rem;
    }
`;

const Nav = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <StyledNav className="nav-item">
                    <a className="nav-link" >{props.menu[0]}</a>
                </StyledNav>
                <StyledNav className="nav-item">
                    <a className="nav-link" >{props.menu[1]}</a>
                </StyledNav>
                <StyledNav className="nav-item">
                    <a className="nav-link">{props.menu[2]}</a>
                </StyledNav>
                <StyledNav className="nav-item">
                    <a className="nav-link">{props.menu[3]}</a>
                </StyledNav>
            </div>
        </div>
    </nav>
)

export default Nav;