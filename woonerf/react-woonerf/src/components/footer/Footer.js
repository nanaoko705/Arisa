import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Korean Styled Modern Bonsai Class
                </p>
                <p className="footer-subscription-text">
                    주소나 연락처 등의 정보를 담을 공간입니다.
                </p>
                {/* <div className="input-areas">
                    <form>
                        <input type="email" name = "email" placeholder = "Your Email" 
                        className="footer-input"/>
                        <button buttonStyle = 'btn--outline'>Subscribe</button>
                    </form>
                </div> */}
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>아니면 이 공간을 메뉴 공간으로 만들어도 좋을 듯</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>연락처 정보</Link>
                        <Link to='/'>주소등을 보여줄 공간</Link>
                    </div>
                    </div>
                    <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>네이버 플레이스</Link>
                        <Link to='/'>네이버 샵이나</Link>
                        <Link to='/'>Youtube</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Woonerf <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">회사정보© 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/"
                        target = "_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="/"
                        target = "_blank"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link class='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <i class='fab fa-youtube' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i class='fab fa-twitter' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer