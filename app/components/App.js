import React from 'react';
import { RouteHandler } from 'react-router';

import Navbar from './Navbar';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { navbar: Navbar, scrolling: false };
	}

	componentDidMount() {
		document.addEventListener('scroll', this.scrollHandler.bind(this));
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.scrollHandler.bind(this));
	}

	scrollHandler(e) {
		let scrolling = document.querySelector('body').scrollTop > 0;
		this.setState({ scrolling });
	}

	switchNavbar(navbar) {
		console.log('navbar', navbar);
		this.setState({ navbar });
	}

  render() {

    return (
  		<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  			<this.state.navbar scrolling={this.state.scrolling} switch={(navbar) => this.switchNavbar(navbar)} />
        <RouteHandler {...this.props} />
      </div>
    );
  }
};
