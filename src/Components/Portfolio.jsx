import React, { Component } from "react";

export default class Portfolio extends Component {
    render() {
        if (this.props.data) {
            var projects = this.props.data.projects.map(function (project) {
                return (
                    <div className="column folio-item" key={project.title}>
                        <a href={project.url} className="folio-item__thumb">
                            <img
                                src={project.url}
                                srcSet={`${project.image} 1x, 
                                     ${project.image2} 2x`}
                                alt=""
                            />
                        </a>
                    </div>
                );
            });
            var modals = this.props.data.projects.map(function (modal) {
                return (
                    <div id={modal.modal} key={modal.title} hidden>
                        <div className="modal-popup">
                            <img src={modal.image} alt="" />

                            <div className="modal-popup__desc">
                                <h5>{modal.title}</h5>
                                <p>{modal.description}</p>
                                <ul className="modal-popup__cat">
                                    {modal.tags}
                                </ul>
                            </div>

                            <a
                                href={modal.url}
                                className="modal-popup__details"
                            >
                                Project link
                            </a>
                        </div>
                    </div>
                );
            });
        }
        return (
            <section id="portfolio" className="s-portfolio target-section">
                <div className="row s-portfolio__header">
                    <div className="column large-12">
                        <h3>A Few Of My Latest Creations</h3>
                    </div>
                </div>

                <div className="row collapse folio-list">{projects}</div>

                {/* Modal */}
                {modals}
            </section>
        );
    }
}
