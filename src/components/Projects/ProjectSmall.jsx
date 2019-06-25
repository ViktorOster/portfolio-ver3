import React, { Component } from 'react';
import './projects.css';

class ProjectSmall extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 project-small" >
                <p className="project-small__title heading">{this.props.title}</p>
                <p className="project-small__description">
                    {this.props.description}</p>
                <p className="project__techs project-small__techs">
                    {this.props.techs.map((tech, i) => {
                        return (<span className="tech" key={i}>{tech}</span>)
                    })}
                </p>
                <a className="f-underline btn-left" href={this.props.urlLive}>View Live</a>
                <a className="f-underline" href={this.props.urlCode}>View Code</a>
                <hr />
            </div>
        );
    }
}

export default ProjectSmall;