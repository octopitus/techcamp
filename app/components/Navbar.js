import React from 'react';
import NavLink from './NavLink';

export default class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = { active: null};
	}

	handleClick(index) {
		this.setState({active: index});
	}

	render() {

		let scrolling = this.props.scrolling ? ' scrolling' : '';

		return (
			<div className={"navbar mdl-layout__header mdl-layout__header--waterfall" + scrolling}>
			  <div className="mdl-layout__header-row">
			  	<a href="/"><span className="navbar-title mdl-layout-title">Techcamp Saigon Uni 2015</span></a>
			    <div className="navbar-spacer mdl-layout-spacer"></div>
			    <div className="navbar-container">
			      <nav className="navbar-nav mdl-navigation">
			      	<NavLink to="about" smooth={true} offset={-28} duration={500} text="About" handleClick={this.handleClick.bind(this, 'about')} active={this.state.active} />
			      	<NavLink to="submit" smooth={true} offset={-28} duration={500} text="Submit topic" handleClick={this.handleClick.bind(this, 'submit')} active={this.state.active} />
			      	<NavLink to="memory" smooth={true} offset={-28} duration={500} text="Photos" handleClick={this.handleClick.bind(this, 'memory')} active={this.state.active} />
			      	<NavLink to="purchase" smooth={true} offset={-28} duration={500} text="Purchase ticket" handleClick={this.handleClick.bind(this, 'purchase')} active={this.state.active} />
			      </nav>
			    </div>
			  </div>
			</div>
		);
	}

}