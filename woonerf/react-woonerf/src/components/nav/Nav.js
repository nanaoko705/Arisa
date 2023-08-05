import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLogo = styled.div`
    text-align: center;
    /* 우너프 배경색 */
    background-color: #082710; 
    /* min-height: 50vh; */
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    margin-top: 20px;
    margin-bottom: 80px;
`

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
        <StyledLogo ClassName="MainLogo" id="mainLogo">
            <img src="http://127.0.0.1:8000/media/MainLogo/wnrf_green_gold.png" alt="메인 로고입니다. 클릭하면 홈으로 돌아갑니다." />
            {/* <a className="navbar-brand js-scroll-trigger" href="/" >Woonerf</a> */}
        </StyledLogo>

        <div className="container">
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <StyledNav className="nav-item" to="/about">
                    {props.menu[0]}
                </StyledNav>
                <StyledNav className="nav-item" to="/class">
                    {props.menu[1]}
                </StyledNav>
                <StyledNav className="nav-item" to="https://naver.me/5Ilwhzrp">
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