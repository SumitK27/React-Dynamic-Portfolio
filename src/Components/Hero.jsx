import React, { Component } from "react";

export default class Hero extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var city = this.props.data.address.city;
            var networks = this.props.data.social.map(function (network) {
                return (
                    <a href={network.url} key={network.name}>
                        <i className={network.className} aria-hidden="true"></i>
                    </a>
                );
            });
        }
        return (
            <section id="hero" className="s-hero target-section">
                <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>

                <div className="row s-hero__content">
                    <div className="column">
                        <div className="s-hero__content-about">
                            <h1>I'm {name}.</h1>

                            <h3>
                                I'm a {city} based <span>{occupation}</span>{" "}
                                {description}
                            </h3>

                            <div className="s-hero__content-social">
                                {networks}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="s-hero__scroll">
                    <a
                        href="#about"
                        className="s-hero__scroll-link smoothscroll"
                    >
                        <span className="scroll-arrow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"></path>
                            </svg>
                        </span>
                        <span className="scroll-text">Scroll Down</span>
                    </a>
                </div>
            </section>
        );
    }
}
