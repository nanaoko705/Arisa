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
<<<<<<< HEAD
    margin-right: 60px; //버튼 크기에 따라서 조정할 필요가 있음
=======
    margin-right: 68px; //버튼 크기에 따라서 조정할 필요가 있음
>>>>>>> 28447c2764538735db13dbd9eb4c3365594ebc1a
`

const About = () => {
    function goMain(e) {
        window.location.href = "/"
    }
    function showMenu(e) {
        // 나중에 구현하기
    }
    return (
        <StyledMain >
            <StyledLogo ClassName="MainLogo" id="mainLogo">
                <StyledNavbar>
                    <img onClick={showMenu}src="http://127.0.0.1:8000/media/menu_button.png" alt="메뉴버튼"/>
                </StyledNavbar>
                <SytledImage>    
                    <img onClick={goMain} src="http://127.0.0.1:8000/media/MainLogo/wnrf_green_black.png" alt="메인 로고입니다. 클릭하면 홈으로 돌아갑니다." />
                </SytledImage>
            </StyledLogo>


            {/* About 구현하기 */}
        </StyledMain>
    )
}

export default About;