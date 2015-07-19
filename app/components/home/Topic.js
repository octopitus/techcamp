import React from 'react';

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="topics" style={{ backgroundColor : "#f3f3f3" }}>
        <div className="section-heading mdl-typography--text-center">
          <h2>be together. not the same.</h2>
          <div className="sub-logan">welcome to android... be yourself. do your thing. see what's going on.</div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <div className="mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Welcome</h2>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-js-button mdl-js-ripple-effect">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <div className="mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Welcome</h2>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-js-button mdl-js-ripple-effect">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <div className="mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Welcome</h2>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-js-button mdl-js-ripple-effect">
                  Get Started
                </a>
              </div>
            </div>
          </div>              
        </div>
      </div>
    );
  }
}