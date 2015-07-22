import React from 'react';
import reactMixin from 'react-mixin';
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
          <div className="sub-logan">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
        </div>
        <div style={{width: '900px', margin: '0px auto'}}>
          <form action="#">
            <h4 className="sub-logan" style={{marginLeft: '15px'}}>Short introduction about yourself</h4>
            <div className="mdl-textfield mdl-js-textfield" style={{width: "420px"}}>
              <input className="mdl-textfield__input" type="text" placeholder="Your fullname" />
            </div>
            <div className="mdl-textfield mdl-js-textfield" style={{width: "420px"}}>
              <input className="mdl-textfield__input" type="email" placeholder="Contact email" />
            </div>
            <br/>
            <div className="mdl-textfield mdl-js-textfield" style={{width: "870px"}}>
              <input className="mdl-textfield__input" type="text" placeholder="Address" />
            </div>
            <br/>
            <div className="mdl-textfield mdl-js-textfield" style={{ width: "870px" }}>
              <textarea className="mdl-textfield__input" type="text" rows="5" placeholder="Why you are so hot?"></textarea>
            </div>
            <h4 className="sub-logan" style={{marginLeft: '15px'}}>About your topic</h4>
            <div className="mdl-textfield mdl-js-textfield" style={{width: "870px"}}>
              <input className="mdl-textfield__input" type="text" placeholder="Title of topic" />
            </div>
            <br/>
            <div className="mdl-textfield mdl-js-textfield" style={{ width: "870px" }}>
              <textarea className="mdl-textfield__input" type="text" rows="10" placeholder="Description about topic"></textarea>
            </div>
            <a className="primary-btn mdl-button mdl-js-button mdl-js-ripple-effect">
              Submit
            </a>
          </form>
        </div>
      </div>
		);
	}
}

Submit.defaultProps = {name: 'submit'};

export default Submit;