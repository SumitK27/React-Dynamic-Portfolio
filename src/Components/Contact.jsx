import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        if (this.props.data) {
            var email = this.props.data.email;
            var phone = this.props.data.phone;
        }
        return (
            <section id="contact" className="s-contact target-section">
                <div className="row s-contact__header">
                    <div className="column large-12">
                        <h3 className="section-header-allcaps">Say Hello</h3>
                    </div>
                </div>

                <div className="row s-contact__content">
                    <div className="column large-7 medium-12">
                        <h4 className="huge-text">
                            Have a new project in mind? Let's collaborate and
                            build something awesome. Let's turn that idea to an
                            even greater product :)
                        </h4>
                    </div>

                    <div className="column large-5 medium-12">
                        <div className="row contact-infos">
                            <div className="column large-12 medium-6 tab-12">
                                <div className="contact-block">
                                    <h5 className="contact-block__header">
                                        Email
                                    </h5>
                                    <p className="contact-block__content">
                                        <a
                                            className="mailtoui"
                                            href={`mailto:${email}`}
                                        >
                                            {email}
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="column large-12 medium-6 tab-12">
                                <div className="contact-block">
                                    <h5 className="contact-block__header">
                                        Phone
                                    </h5>
                                    <p className="contact-block__content">
                                        <a href={`tel:${phone}`}>{phone}</a>
                                    </p>
                                </div>
                            </div>

                            <div className="column large-12">
                                <a
                                    href={`mailto:${email}`}
                                    className="mailtoui btn btn--primary h-full-width"
                                >
                                    Let's Talk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
