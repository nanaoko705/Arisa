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
    margin-left: 2.5%;
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

const StyledText = styled.div`
    text-aalign: center;
    font-size: 1.25rem;
    width: 830px;
    margin-bottom:200px;
`
    // font-family: var(--font-poppins);
    // 일단 팝핀즈는 영어 글꼴이니까, 딴거 찾을 때 까지는 빼두는 걸로 하자.
    // 글꼴 치우니까 일단 사이즈 적용 성공

const About_tablet = () => {
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
                </SytledImage>
            </StyledLogo>

            {/* About 구현하기 */}
            <div className="intro" styled="width: 1200px; height:294px; overflow:hidden;">
                <img src="./media/about/about_img.png" alt="about" />
                <StyledText>
                    <h1>Korean Styled Modern Bonsai</h1>
                    <p>
                        1955년부터 하우스의 상징이 된 퀼팅 모티프에서 영감을 얻어 탄생한 컬렉션입니다. 다이아몬드 세팅 유무를 선택할 수 있는 베이지 골드, 예롤우 골드 또는 화이트 골드 소재의 제품을 만나보세요. 위의 글은 예시입니다. ㅎㅎ
                    </p>
                </StyledText>
                <StyledText>
                    <p>
                        1955년부터 하우스의 상징이 된 퀼팅 모티프에서 영감을 얻어 탄생한 컬렉션입니다. 다이아몬드 세팅 유무를 선택할 수 있는 베이지 골드, 예롤우 골드 또는 화이트 골드 소재의 제품을 만나보세요. 위의 글은 예시입니다. ㅎㅎ
                    </p>
                </StyledText>
            </div>

            <div className="crew1" styled="width: 1200px; overflow:hidden;">
                <img src="./media/about/crew_img1.jpg" alt="crew" />
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
                <img src="./media/about/crew_img2.jpg" alt="crew" />
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
                <img src="./media/about/crew_img3.jpg" alt="crew" />
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

export default About_tablet;