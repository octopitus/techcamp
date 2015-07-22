import React from 'react';

import Header from './Header';
import Welcome from './Welcome';
import Topic from './Topic';
import Submit from './Submit';
import Memory from './Memory';
import Purchase from './Purchase';
import Footer from './Footer';

import { Link, Element } from 'react-scroll';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

  render() {
    return (
    	<div className="mdl-layout__content">
      	<a name="top"></a>
    		<Header />
    		<Welcome />
    		<Topic />
    		<Submit />
    		<Memory />
    		<Purchase />
    		<Footer />
      </div>
    );
  }
};

export default Home;