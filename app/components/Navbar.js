import React from 'react';
import { Link } from 'react-scroll';

export default class Navbar extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let scrolling = this.props.scrolling ? ' scrolling' : '';

		return (
			<div className={"navbar mdl-layout__header mdl-layout__header--waterfall" + scrolling}>
			  <div className="mdl-layout__header-row">
			    <span className="navbar-title mdl-layout-title">Techcamp Saigon Uni 2015</span>
			    <div className="navbar-spacer mdl-layout-spacer"></div>
			    <div className="navbar-container">
			      <nav className="android-navigation mdl-navigation">
			        <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#home">Home</a>
			        <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#submit">Submit topic</a>
			      </nav>
			    </div>
			  </div>
			</div>
		);
	}

}