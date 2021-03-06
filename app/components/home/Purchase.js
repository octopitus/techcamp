import React from 'react';
import scroller from 'react-scroll/lib/mixins/scroller';

class Purchase extends React.Component {

	constructor(props) {
		super(props);
	}

  componentDidMount() {
    scroller.register(this.props.name, React.findDOMNode(this));
  }

	render() {
		return (
      <div id="purchase">
        <div className="section-heading mdl-typography--text-center">
          <h2>Time &amp; Location</h2>
          <div className="sub-logan">
            <i className="fa fa-clock-o"></i> October 25th, 2015<br/>
            <i className="fa fa-map-marker"></i> Block A4, Ho Chi Minh University of Technology <br/> 268 Ly Thuong Kiet Street, Ward 14, District 10, Ho Chi Minh City.
          </div>
          <br/>
          <a className="primary-btn mdl-button mdl-js-button mdl-js-ripple-effect" href="https://ticketbox.vn/event/techcamp-saigon-uni-32765" target="_blank">Purchase ticket</a>
        </div>
      </div>
		);
	}
}

Purchase.defaultProps = {name: 'purchase'};

export default Purchase;
