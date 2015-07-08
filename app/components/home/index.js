import React from 'react';
import { Link } from 'react-router';

export default React.createClass({

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <Link to="welcome">Click here</Link>
      </div>
    );
  }

});