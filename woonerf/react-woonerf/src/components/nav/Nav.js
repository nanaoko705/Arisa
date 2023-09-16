import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer';

const StyledNavbar = styled.div`
    // background-color: #082710;
    // background-color: #000000;
    background-color: #FFFFFF;                        //배경 색상

    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: calc(10px + 2vmin);
    color: white;
`

const StyledLogo = styled.div`
    text-align: center;
    /* 우너프 배경색 */
    // background-color: #082710; 

    // background-color: #000000;
    background-color: #ffffff;                          //배경 색상 Navbar를 따라가게 할 것

    /* min-height: 50vh; */
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    display: block;
    width : 100%;
    text-align : center;
    img {
        width : 100%;
    }
`

const StyledNav = styled(Link)`
    display: flex;
    justify-content: center;  
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;

    //color: #9b8355;
    //color: #FFFFFF;
    color: #000000;                                       //폰트 색상

    font-weight: bold;
    cursor: pointer;
    text-decoration-line: none;

    /* 크기 */
    width: 100%;
    height: 2.25rem;
    font-size: 1.25rem;

    /* 색상 */
    background: rgba(0,0,0,0);

    /* 기타 */
    & + & {
    margin-top: 5rem;
    }   

    font-family: var(--font-poppins);
`;

const Nav = (props) => (
    <div>
    <StyledNavbar className="navbar" id="mainNav">
        <StyledLogo ClassName="MainLogo" id="mainLogo">
            <img src="./media/MainLogo/wnrf_green_black.jpeg" alt="메인 로고입니다. 클릭하면 홈으로 돌아갑니다." />
            {/* <a className="navbar-brand js-scroll-trigger" href="/" >Woonerf</a> */}
        </StyledLogo>
        <div className="container" style={{marginBottom:'10vh'}}>
            <div className="front_img" style={{textAlign:'center'}}>
                <img src="./media/nav/nav_img.jpeg" style={{width: '100%', marginBottom:'10vh'}} alt="대문 사진" />
            </div>
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
    </StyledNavbar> 
    <Footer />
    </div>
)

export default Nav;