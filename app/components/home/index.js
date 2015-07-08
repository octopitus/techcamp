import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <Link to="welcome">Click here</Link>
      </div>
    );
  }
};

export default Home;