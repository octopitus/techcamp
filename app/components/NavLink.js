import React from 'react';
import scroller from 'react-scroll/lib/mixins/scroller';

class NavLink extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick(e) {
		e.preventDefault();
		let { to, smooth, duration, offset } = this.props;
		this.props.handleClick.call(null, to);
		scroller.scrollTo(to, smooth, duration, offset);
	}

	render() {

		let active = this.props.active === this.props.to ? ' active' : '';

		return (
			<a className={!this.props.classes ? ("mdl-navigation__link mdl-typography--text-uppercase" + active) : this.props.classes.join(" ")} href="#" onClick={this.handleClick.bind(this)} >{this.props.text}</a>
		);
	}
}

export default NavLink;