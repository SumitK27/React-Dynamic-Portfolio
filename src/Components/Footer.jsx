import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var networks = this.props.data.social.map(function (network) {
                return (
                    <li key={network.name}>
                        <a href={network.url} key={network.name}>
                            <i
                                className={network.className}
                                aria-hidden="true"
                            ></i>
                        </a>
                    </li>
                );
            });
        }
        return (
            <footer className="s-footer">
                <div className="row">
                    <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
                        <ul className="s-footer__social">{networks}</ul>
                    </div>

                    <div className="column large-7 medium-6 w-1000-stack ss-copyright">
                        <span>© Copyright {name} 2021</span>
                        <span>
                            Design by{" "}
                            <a href="https://www.styleshout.com/">{name}</a>
                        </span>
                    </div>
                </div>

                <div className="ss-go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z" />
                        </svg>
                    </a>
                </div>
            </footer>
        );
    }
}
