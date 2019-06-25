import React, { Component } from 'react';
import './projects.css';
import iconGlobe from "../../assets/svg/iconfinder_globe.svg";
import iconCode from "../../assets/svg/baseline-code.svg";

class ProjectBig extends Component {
    render() {
        return (

            <div className="row project">
                <img className="col col-lg-5 project__img" src={require('../../assets/img/' + this.props.img)} alt="" />
                <div className="col col-lg-7">
                    <p className="project__title heading heading--sub">{this.props.title}</p>
                    <p className="project__description">
                        {this.props.description}</p>
                    <p className="project__techs">
                        {this.props.techs.map((tech, i) => {
                            return (<span key={i}>{tech}, </span>)
                        })}
                    </p>
                    <button className="btn btn-primary project__button btn-left"><a href={this.props.urlLive}><img className="icon-small"
                        src={iconGlobe} alt="" />Live</a></button>
                    <button className="btn btn-secondary project__button"><a href={this.props.urlCode}><img className="icon-small"
                        src={iconCode} alt="" />Code</a></button>
                </div>
                <hr />
            </div>

        );
    }

}

export default ProjectBig;