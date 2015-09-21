import React from 'react';
import { Link } from 'react-router';

import MainNavBar from '../Navbar';

export default class Navbar extends React.Component {
	render() {

		let scrolling = this.props.scrolling ? ' scrolling' : '';

		return (
			<div className={"navbar mdl-layout__header mdl-layout__header--waterfall" + scrolling}>
			  <div className="mdl-layout__header-row">
			  	<a href="/"><span className="navbar-title mdl-layout-title">Techcamp Saigon Uni 2015</span></a>
			    <div className="navbar-spacer mdl-layout-spacer"></div>
			    <div className="navbar-container">
			    	<Link to="/" className="mdl-navigation__link mdl-typography--text-uppercase" onClick={() => this.props.switch(MainNavBar)}>BACK TO HOME</Link>
			    </div>
			  </div>
		  </div>
		);
	}
}
