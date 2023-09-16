import React, { useState }  from 'react';
import styled from 'styled-components'
import axios from "axios";

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

const heightPercentage = 100;


const Archive = () => {
    function goMain(e) {
        window.location.href = "/"
    }
    function showMenu(e) {
        // 나중에 구현하기
    }

    const [text, setText] = useState([]);
  const onClick_get = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/blog/",
      );
      setText(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  //포스트는 아직 제대로 동작 안함. -> 글 올리는 건 django admin에서 우리가 노가다로 올리는 걸로
  const onClick_post = async () => {
    try {
      const response = await axios.post(
        "https://127.0.0.1:8000/blog/", {
          tetle: "리액트 테스트용",
          body: "test",
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }
    return (
        <StyledMain >
            <StyledLogo ClassName="MainLogo" id="mainLogo">
                <StyledNavbar>
                    <img onClick={showMenu}src="./media/menu_button.png" alt="메뉴버튼"/>
                </StyledNavbar>
                <SytledImage>    
                    <img onClick={goMain} src="./media/MainLogo/wnrf_green_black.jpeg" alt="메인 로고입니다. 클릭하면 홈으로 돌아갑니다." />
                </SytledImage>
            </StyledLogo>
            {/* 아카이브 구현하기 */}
            <button onClick={onClick_post}>post</button>
            <button onClick={onClick_get}>load</button>
            {text && <textarea style={{ height: `${heightPercentage}%` }} value={JSON.stringify(text, null, 2)} readOnly={true}/>}

            <h1>list</h1>
            {text && <img src="http://127.0.0.1:8000/media/2023/07/23/header-bg.jpg" alt="" />}
        </StyledMain>
    )
}

export default Archive;