import React from 'react';
import scroller from 'react-scroll/lib/mixins/scroller';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		scroller.register(this.props.name, React.findDOMNode(this));
	}

	render() {
		return (
			<div className="header-section">
			  <div className="section-heading">
			    <h2>Techcamp Saigon Uni 2015</h2>
			    <div className="sub-logan">Come with us to jointly share and create opportunities for yourself.</div>
			    <a className="primary-btn mdl-button mdl-js-button mdl-js-ripple-effect" href="http://goo.gl/forms/3OiKZn1RC4" target="_blank">
			      Submit topic
			    </a>
			    <a className="primary-btn mdl-button mdl-js-button mdl-js-ripple-effect" href="https://ticketbox.vn/event/techcamp-saigon-uni-32765" target="_blank">
			      Purchare ticket
			    </a>
			  </div>
			</div>
		);
	}
}

Header.defaultProps = {name: 'header'};

export default Header;