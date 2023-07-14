// footer가 뭔가? : 페이지 맨 밑에 있는 contact나 회사 주소, 대표자 이름 등 업체의 정보들을 보여주는 부분

import React from "react";
import styles from './Footer.modules.scss'

const Footer = () => {
    return (
        <footer className={StyleSheet.footer}>
            <div className={styles.contents}>
                <h2 className={styles.title}>
                    woonerf, 연락처 등의 정보 입력하기
                </h2>
            </div>
        </footer>
    )
}

export default Footer;