import React, {Component} from "react";

export default class News extends Component {

    render() {
        return (
            <section class="page-section bg-light" id="news">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">news</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">

                        <div class="news-item">
                            <a class="news-link" data-bs-toggle="modal" href="#newsModal1">
                                <div class="news-hover">
                                    <div class="news-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/news/1.jpg" alt="..." />
                            </a>
                            <div class="news-caption">
                                <div class="news-caption-heading">Threads</div>
                                <div class="news-caption-subheading text-muted">Illustration</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">

                        <div class="news-item">
                            <a class="news-link" data-bs-toggle="modal" href="#newsModal2">
                                <div class="news-hover">
                                    <div class="news-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/news/2.jpg" alt="..." />
                            </a>
                            <div class="news-caption">
                                <div class="news-caption-heading">Explore</div>
                                <div class="news-caption-subheading text-muted">Graphic Design</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">

                        <div class="news-item">
                            <a class="news-link" data-bs-toggle="modal" href="#newsModal3">
                                <div class="news-hover">
                                    <div class="news-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/news/3.jpg" alt="..." />
                            </a>
                            <div class="news-caption">
                                <div class="news-caption-heading">Finish</div>
                                <div class="news-caption-subheading text-muted">Identity</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">

                        <div class="news-item">
                            <a class="news-link" data-bs-toggle="modal" href="#newsModal4">
                                <div class="news-hover">
                                    <div class="news-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/news/4.jpg" alt="..." />
                            </a>
                            <div class="news-caption">
                                <div class="news-caption-heading">Lines</div>
                                <div class="news-caption-subheading text-muted">Branding</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">

                        <div class="news-item">
                            <a class="news-link" data-bs-toggle="modal" href="#newsModal5">
                                <div class="news-hover">
                                    <div class="news-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/news/5.jpg" alt="..." />
                            </a>
                            <div class="news-caption">
                                <div class="news-caption-heading">Southwest</div>
                                <div class="news-caption-subheading text-muted">Website Design</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">

                        <div class="news-item">
                            <a class="news-link" data-bs-toggle="modal" href="#newsModal6">
                                <div class="news-hover">
                                    <div class="news-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/news/6.jpg" alt="..." />
                            </a>
                            <div class="news-caption">
                                <div class="news-caption-heading">Window</div>
                                <div class="news-caption-subheading text-muted">Photography</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        );
    }
}