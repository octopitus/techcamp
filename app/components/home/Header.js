import React from 'react';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="header-section">
			  <div className="section-heading">
			    <h2>Techcamp Saigon Uni 2015</h2>
			    <div className="sub-logan">Come with us to jointly share and create opportunities for yourself.</div>
			    <a className="primary-btn mdl-button mdl-js-button mdl-js-ripple-effect">
			      Submit topic
			    </a>
			    <a className="primary-btn mdl-button mdl-js-button mdl-js-ripple-effect">
			      Purchare ticket
			    </a>
			  </div>
			</div>
		);
	}
}