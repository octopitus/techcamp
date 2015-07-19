import React from 'react';

export default class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="footer mdl-mega-footer">
			  <div className="mdl-mega-footer--top-section">
			    <div className="mdl-mega-footer--left-section">
			      <p className="mdl-typography--font-light">Satellite imagery: © 2014 Astrium, DigitalGlobe</p>
			    </div>
			    <div className="mdl-mega-footer--right-section">
			      <a className="mdl-typography--font-light" href="#top">
			        Back to Top
			        <i className="material-icons">expand_less</i>
			      </a>
			    </div>
			  </div>
			</footer>
		);
	}
}