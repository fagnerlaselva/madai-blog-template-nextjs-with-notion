import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src={require("../../images/white-logo.png")} alt="image" />
                                    </a>
                                </div>

                                <ul className="social">
                                    <li>
                                        <Link href="#">
                                        <a target="_blank">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Missão</h3>
                                <p>Escreva algum texto contando um pouco mais sobre o blog/empresa ou qualquer outro tópico que achar relevante.</p>
                            </div>
                        </div>
                        {
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Links</h3>

                                <ul className="quick-links-list">
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#about">
                                            <a>Sobre nós</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        }
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contato</h3>

                                <ul className="footer-contact-list">
                                    <li>
                                        <span>Estamos localizados em:</span> 
                                        Cidade - Estado <br /> Brasil
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        contato@email.com
                                    </li>
                                    <li>
                                        <span>Contato:</span> 
                                        +55 (99) 99999-9999
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>Copyright @{currentYear} Empresa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;