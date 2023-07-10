import React, {Component} from "react";

export default class Masthead extends Component {

    render() {
        return (
            <section className="Masthead bg-primary text-center" id="Masthead">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <h2 className="section-heading">여기서 사진 보여주기</h2>
                            <p>대충 설명, 버튼 아직, 이미지 문제 있음</p>
                            <div className="badges">
                                <a className="badge-link" href="#"><img src="img/header-bg.jpg"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}