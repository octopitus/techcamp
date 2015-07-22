import React from 'react';
import reactMixin from 'react-mixin';
import { Helpers } from 'react-scroll';

class NavLink extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick(e) {
		e.preventDefault();
		this.props.handleClick.call(null, this.props.to);
		this.scrollTo.call(this, this.props.to);
	}

	render() {

		let active = this.props.active === this.props.to ? ' active' : '';

		return (
			<a className={"mdl-navigation__link mdl-typography--text-uppercase" + active} href="#" onClick={this.handleClick.bind(this)} >{this.props.text}</a>
		);
	}
}

reactMixin.onClass(NavLink, Helpers.Scroll);

export default NavLink;