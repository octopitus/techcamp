import React from 'react';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div id="purchase">
        <div className="section-heading mdl-typography--text-center">
          <h2>be together. not the same.</h2>
          <div className="sub-logan">welcome to android... be yourself. do your thing. see what's going on.</div>
          <a className="primary-btn mdl-button mdl-js-button mdl-js-ripple-effect">
            Purchase
          </a>
        </div>
      </div>
		);
	}
}