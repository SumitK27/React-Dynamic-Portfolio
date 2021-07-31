import React, { Component } from "react";

export default class Resume extends Component {
    render() {
        if (this.props.data) {
            var skills = this.props.data.skills.map(function (skill) {
                return (
                    <li key={skill.name}>
                        <div
                            className={`progress percent${skill.level.replace(
                                "%",
                                ""
                            )}`}
                        ></div>
                        <strong>{skill.name}</strong>
                    </li>
                );
            });
            var works = this.props.data.work.map(function (work) {
                return (
                    <div className="resume-block" key={work.company}>
                        <div className="resume-block__header">
                            <h4 className="h3">{work.company}</h4>
                            <p className="resume-block__header-meta">
                                <span>{work.title}</span>
                                <span className="resume-block__header-date">
                                    {work.years}
                                </span>
                            </p>
                        </div>

                        <p>{work.description}</p>
                    </div>
                );
            });
            var educations = this.props.data.education.map(function (edu) {
                return (
                    <div className="resume-block" key={edu.school}>
                        <div className="resume-block__header">
                            <h4 className="h3">{edu.school}</h4>
                            <p className="resume-block__header-meta">
                                <span>{edu.degree}</span>
                                <span className="resume-block__header-date">
                                    {edu.graduated}
                                </span>
                            </p>
                        </div>

                        <p>{edu.description}</p>
                    </div>
                );
            });
        }
        return (
            <section id="resume" className="s-resume target-section">
                <div className="row s-resume__section">
                    <div className="column large-3 tab-12">
                        <h3 className="section-header-allcaps">Career</h3>
                    </div>
                    <div className="column large-9 tab-12">{works}</div>
                </div>

                <div className="row s-resume__section">
                    <div className="column large-3 tab-12">
                        <h3 className="section-header-allcaps">Education</h3>
                    </div>
                    <div className="column large-9 tab-12">{educations}</div>
                </div>

                <div className="row s-resume__section">
                    <div className="column large-3 tab-12">
                        <h3 className="section-header-allcaps">Skills</h3>
                    </div>
                    <div className="column large-9 tab-12">
                        <div className="resume-block">
                            <p>Something Here.</p>

                            <ul className="skill-bars-fat">{skills}</ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
