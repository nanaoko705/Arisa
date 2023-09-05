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
    margin-left: 70px;
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
    margin-top: 2.5%;
    margin-bottom: 5%;
    margin-right: 130px;
    display: block;
    width : 100%;
    text-align : center;
`

const SytledImage = styled.div`
    img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }
`

const StyledText = styled.div`
    text-align: center;
    font-size: 1.25rem;
    width: 830px;
    margin-bottom:200px;
`
    // font-family: var(--font-poppins);
    // 일단 팝핀즈는 영어 글꼴이니까, 딴거 찾을 때 까지는 빼두는 걸로 하자.
    // 글꼴 치우니까 일단 사이즈 적용 성공

// styled component를 한번 쓰면, 이제 css태그 적용 못함 ㅈ댐ㅋ
// 그래도 쓸거임ㅋ

const StyledClassButton = styled.button`
    background-color: transparent;
    border: none;
`

const Class = () => {
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
                    <img onClick={showMenu}src="./media/menu_button.png" alt="메뉴버튼"/>
                </StyledNavbar>
                <SytledImage>    
                    <img onClick={goMain} src="./media/MainLogo/wnrf_green_black.png" alt="메인 로고입니다. 클릭하면 홈으로 돌아갑니다." />
                    <StyledClassButton onClick={goMain}>클래스 예약하기</StyledClassButton>
                </SytledImage>
            </StyledLogo>
        
            {/* 클래스 구현하기 */}
            <div className="intro">
                <SytledImage>
                    <img src="./media/class/class_img.png" alt="class" />
                </SytledImage>
                <StyledText>
                    <h1>Korean Styled Modern Bonsai Class</h1>
                    <p>
                        Class 설명
                    </p>
                </StyledText>
            </div>

            <div className="crew1" styled="width: 1200px; overflow:hidden;">
                <SytledImage>
                    <img src="./media/class/class_img1.jpg" alt="class" />
                </SytledImage>
                <StyledText>
                    <h1>Woon Young Choi1</h1>
                </StyledText>
                <StyledText>
                    <p>
                        2003년 MBC 드라마 위풍당당 그녀로 연기자로서 처음 모습을 드러냈다. 2004년 영화 그녀를 믿지마세요 에서 김하늘과 연인으로 호흡을 맞추며 스크린 데뷔하여, 같은 해 백상예술대상 인기상을 수상했다.
                    </p>
                </StyledText>
            </div>
            
            <div className="crew2" styled="width: 1200px; overflow:hidden;">
                <SytledImage>
                    <img src="./media/class/class_img2.jpg" alt="class" />
                </SytledImage>
                <StyledText>
                    <h1>Woon Young Choi2</h1>
                </StyledText>
                <StyledText>
                    <p>
                        2003년 MBC 드라마 위풍당당 그녀로 연기자로서 처음 모습을 드러냈다. 2004년 영화 그녀를 믿지마세요 에서 김하늘과 연인으로 호흡을 맞추며 스크린 데뷔하여, 같은 해 백상예술대상 인기상을 수상했다.
                    </p>
                </StyledText>
            </div>

            <div className="crew3" styled="width: 1200px; overflow:hidden;">
                <SytledImage>
                    <img src="./media/class/class_img3.jpg" alt="class" />
                </SytledImage>
                <StyledText>
                    <h1>Woon Young Choi3</h1>
                </StyledText>
                <StyledText>
                    <p>
                        2003년 MBC 드라마 위풍당당 그녀로 연기자로서 처음 모습을 드러냈다. 2004년 영화 그녀를 믿지마세요 에서 김하늘과 연인으로 호흡을 맞추며 스크린 데뷔하여, 같은 해 백상예술대상 인기상을 수상했다.
                    </p>
                </StyledText>
            </div>
        </StyledMain>
    )
}

export default Class;