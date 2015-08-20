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
          <h2>SUBMIT TOPIC</h2>
        </div>
        <div style={{width: '900px', margin: '0px auto', textAlign: 'center'}}>
          <br />
          <a className="primary-btn mdl-button mdl-js-button mdl-js-ripple-effect" href="https://nguyentrunghieu18061995.typeform.com/to/KgoOT3" target="_blank">
            Submit topic
          </a>
        </div>
      </div>
		);
	}
}

Submit.defaultProps = {name: 'submit'};

export default Submit;