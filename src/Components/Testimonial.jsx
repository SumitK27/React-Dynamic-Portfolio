import React, { Component } from "react";

export default class Testimonial extends Component {
    render() {
        if (this.props.data) {
            var testimonials = this.props.data.testimonials.map(function (
                testimonials
            ) {
                return (
                    <div className="testimonial-slider__slide swiper-slide">
                        <div className="testimonial-slider__author">
                            <img
                                src={testimonials.image}
                                alt="Author"
                                className="testimonial-slider__avatar"
                            />
                            <cite className="testimonial-slider__cite">
                                <strong>{testimonials.user}</strong>
                                <span>{testimonials.designation}</span>
                            </cite>
                        </div>
                        <p>{testimonials.text}</p>
                    </div>
                );
            });
        }
        return (
            <section
                id="testimonials"
                className="s-testimonials target-section"
            >
                <div className="s-testimonials__bg"></div>

                <div className="row s-testimonials__header">
                    <div className="column large-12">
                        <h3>Hear What My Clients Says</h3>
                    </div>
                </div>

                <div className="row s-testimonials__content">
                    <div className="column">
                        <div className="swiper-container testimonial-slider">
                            <div className="swiper-wrapper">{testimonials}</div>

                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
