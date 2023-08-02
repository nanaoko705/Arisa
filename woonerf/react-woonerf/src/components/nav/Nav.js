import React from 'react';
import './Nav.css';

const Nav = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
            {/* 타이틀도 그림으로 바꾸자 */}
            {/* <a className="navbar-brand js-scroll-trigger" href="#page-top" >Woonerf</a> */}
            <img src="http://127.0.0.1:8000/media/MainLogo/wnrf_green_gold-removebg-preview.png" alt="메인 로고입니다. 클릭하면 홈으로 돌아갑니다." />
            {/* 일단 메뉴버튼 지우기 */}
            {/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
            </button> */} 
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <div className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">{props.menu[0]}</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#news">{props.menu[1]}</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#gallery">{props.menu[2]}</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#shop">{props.menu[3]}</a>
                    </div>
                    <div className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">{props.menu[4]}</a>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
)

export default Nav;