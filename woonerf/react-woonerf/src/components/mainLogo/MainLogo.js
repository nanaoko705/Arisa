import React from 'react';
import './MainLogo.css';

const MainLogo = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
            <img src="http://127.0.0.1:8000/media/MainLogo/wnrf_green_gold-removebg-preview.png" alt="메인 로고입니다. 클릭하면 홈으로 돌아갑니다." />
            <a className="navbar-brand js-scroll-trigger" href="/" >Woonerf</a>
        </div>
    </nav>
)

export default MainLogo;