import React from 'react';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
      <div id="submit">
        <div className="section-heading mdl-typography--text-center">
          <h2>be together. not the same.</h2>
          <div className="sub-logan">welcome to android... be yourself. do your thing. see what's going on.</div>
        </div>
        <form action="#" className="mdl-typography--text-center">
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" />
            <label className="mdl-textfield__label">Number...</label>
            <span className="mdl-textfield__error">Input is not a number!</span>
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" />
            <label className="mdl-textfield__label">Number...</label>
            <span className="mdl-textfield__error">Input is not a number!</span>
          </div>
          <div className="mdl-textfield mdl-js-textfield" style={{ width: "870px" }}>
            <textarea className="mdl-textfield__input" type="text" rows="10"></textarea>
            <label className="mdl-textfield__label">Full address</label>
          </div>                            
        </form>
      </div>
		);
	}
}