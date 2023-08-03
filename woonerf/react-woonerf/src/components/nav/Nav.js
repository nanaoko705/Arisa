import React from 'react';
import styled from 'styled-components'
import './Nav.css';

const StyledNav = styled.button`
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    height: 2.25rem;
    font-size: 1rem;

    /* 색상 */
    background: #228be6;
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
            {/* 타이틀도 그림으로 바꾸자 */}
            {/* <a className="navbar-brand js-scroll-trigger" href="#page-top" >Woonerf</a> */}
            <div classNIame="MainLogo">
                <img src="http://127.0.0.1:8000/media/MainLogo/wnrf_green_gold-removebg-preview.png" alt="메인 로고입니다. 클릭하면 홈으로 돌아갑니다." /> 
            </div>
            
            {/* 일단 메뉴버튼 지우기 */}
            {/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
            </button> */} 
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <button className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">{props.menu[0]}</a>
                    </button>
                    <button className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#news">{props.menu[1]}</a>
                    </button>
                    <button className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#gallery">{props.menu[2]}</a>
                    </button>
                    <button className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#shop">{props.menu[3]}</a>
                    </button>
                </ul>
            </div>
        </div>
    </nav>
)

export default Nav;