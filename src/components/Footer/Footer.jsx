import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12" >© Viktor Österholm 2019</div>
                    <div className="col-lg-4 col-md-12">Built with React and Bootstrap 4</div>
                    <div className="col-lg-4 col-md-12"><a href="https://github.com/ViktorOster/portfolio-ver3/tree/master" target="_blank" rel="noopener noreferrer">Code on Github</a></div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
