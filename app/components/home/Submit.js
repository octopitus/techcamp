import React from 'react';
import scroller from 'react-scroll/lib/mixins/scroller';

class Submit extends React.Component {

	constructor(props) {
		super(props);
	}
  
  componentDidMount() {
    scroller.register(this.props.name, React.findDOMNode(this));
  }

	render() {
		return (
      <div id="submit">
        <div className="section-heading mdl-typography--text-center" style={{paddingBottom: '0px'}}>
          <h2 style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            SUBMIT TOPIC
            <a className="primary-btn mdl-button mdl-js-button mdl-js-ripple-effect" href="http://goo.gl/forms/3OiKZn1RC4" target="_blank">
              Submit topic
            </a>
          </h2>
        </div>
      </div>
		);
	}
}

Submit.defaultProps = {name: 'submit'};

export default Submit;