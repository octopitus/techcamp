import React from 'react';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div id="purchase">
        <div className="section-heading mdl-typography--text-center">
          <h2>Time &amp; Location</h2>
          <div className="sub-logan">
            <i className="fa fa-clock-o"></i> September 20th, 2015<br/>
            <i className="fa fa-map-marker"></i> Block A4, Ho Chi Minh University of Technology <br/> 268 Ly Thuong Kiet Street, Ward 14, District 10, Ho Chi Minh City.
          </div>
          <a className="primary-btn mdl-button mdl-js-button mdl-js-ripple-effect">Purchase</a>
        </div>
      </div>
		);
	}
}