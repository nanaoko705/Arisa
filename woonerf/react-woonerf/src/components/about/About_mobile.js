import React from 'react';
import styled from 'styled-components'

import Footer from '../footer/Footer';

const StyledMain = styled.div`
    background-color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: calc(10px + 2vmin);
    color: black;
`

// const StyledNavBarContainer = styled.div`
//     display: flex;
//     justify-content: space-betwwen;
//     align-items: center;
//     padding: 50px;
// `

const StyledLogo = styled.div`
    background-color: #FFFFFF; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;

    display: block;
    width : 70%;
    text-align : center;

    img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }
    

`
//position: fixed;

const SytledImage = styled.div`
    img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }
`
    //margin-right: 60px; //버튼 크기에 따라서 조정할 필요가 있음
const StyledText = styled.div`
    text-align: center;
    font-size: 0.65rem;
    margin-bottom: 20%;
    margin-left: 5%;
    margin-right: 5%;
    max-width: 100%;
    height: auto;
`
    // font-family: var(--font-poppins);
    // 일단 팝핀즈는 영어 글꼴이니까, 딴거 찾을 때 까지는 빼두는 걸로 하자.
    // 글꼴 치우니까 일단 사이즈 적용 성공

const About_mobile = () => {
    function goMain(e) {
        window.location.href = "/"
    }
    function showMenu(e) {
        // 나중에 구현하기
    }
    return (
        <div>
        <StyledMain >
            <StyledLogo ClassName="MainLogo" id="mainLogo">
                <SytledImage>    
                    <img onClick={goMain} src="./media/MainLogo/wnrf_green_black.jpeg" style={{maxWidth: '100%', height:'auto'}} alt="메인 로고입니다. 클릭하면 홈으로 돌아갑니다." />
                </SytledImage>
            </StyledLogo>  

            {/* About 구현하기 */}
            <div className="intro" styled="width: 1200px; height:294px; overflow:hidden;">
                <SytledImage>
                    <img src="./media/about/about_img1.jpeg" alt="about" />
                </SytledImage>
                <StyledText>
                    <h2>Korean Styled Modern Bonsai</h2>
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
                <SytledImage>
                    <img src="./media/about/about_img2.jpeg" alt="crew" />
                </SytledImage>
                <StyledText>
                    <h2>Woon Young Choi1</h2>
                </StyledText>
                <StyledText>
                    <p>
                        2003년 MBC 드라마 위풍당당 그녀로 연기자로서 처음 모습을 드러냈다. 2004년 영화 그녀를 믿지마세요 에서 김하늘과 연인으로 호흡을 맞추며 스크린 데뷔하여, 같은 해 백상예술대상 인기상을 수상했다.
                    </p>
                </StyledText>
            </div>
            
            <div className="crew2" styled="width: 1200px; overflow:hidden;">
                <SytledImage>
                    <img src="./media/about/crew_img1.jpeg" alt="crew" />
                </SytledImage>
                <StyledText>
                    <h2>Woon Young Choi2</h2>
                </StyledText>
                <StyledText>
                    <p>
                        2003년 MBC 드라마 위풍당당 그녀로 연기자로서 처음 모습을 드러냈다. 2004년 영화 그녀를 믿지마세요 에서 김하늘과 연인으로 호흡을 맞추며 스크린 데뷔하여, 같은 해 백상예술대상 인기상을 수상했다.
                    </p>
                </StyledText>
            </div>

            <div className="crew3" styled="width: 1200px; overflow:hidden;">
                <SytledImage>
                    <img src="./media/about/crew_img3.jpeg" alt="crew" />
                </SytledImage>
                <StyledText>
                    <h2>Woon Young Choi3</h2>
                </StyledText>
                <StyledText>
                    <p>
                        2003년 MBC 드라마 위풍당당 그녀로 연기자로서 처음 모습을 드러냈다. 2004년 영화 그녀를 믿지마세요 에서 김하늘과 연인으로 호흡을 맞추며 스크린 데뷔하여, 같은 해 백상예술대상 인기상을 수상했다.
                    </p>
                </StyledText>
                
            </div>
        </StyledMain>
        <Footer/>
        </div>
    )
}

export default About_mobile;