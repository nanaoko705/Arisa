import React from 'react';
import styled from 'styled-components'

const StyledMain = styled.div`
    background-color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: calc(10px + 2vmin);
    color: black;
`

const StyledNavbar = styled.button`
    float: left;
    margin-left: 20px;
    border:none;
    background-color:transparent;
`

const StyledLogo = styled.div`
    text-align: center;
    background-color: #FFFFFF; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
    margin-top: 20px;
    margin-bottom: 80px;

    display: block;
    width : 100%;
    text-align : center;
`

const SytledImage = styled.div`
    margin-right: 60px; //버튼 크기에 따라서 조정할 필요가 있음
`

const About = () => {
    return (
        <StyledMain >
            <StyledLogo ClassName="MainLogo" id="mainLogo">
                <StyledNavbar>
                    <img src="http://127.0.0.1:8000/media/menu_button.png" alt="메뉴버튼"/>
                </StyledNavbar>
                <SytledImage>    
                    <img src="http://127.0.0.1:8000/media/MainLogo/wnrf_green_black.png" alt="메인 로고입니다. 클릭하면 홈으로 돌아갑니다." />
                </SytledImage>    
               {/* <a className="navbar-brand js-scroll-trigger" href="/" >Woonerf</a> */}
            </StyledLogo>

        </StyledMain>
    )
}

export default About;