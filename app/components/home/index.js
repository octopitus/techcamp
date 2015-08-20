import React from 'react';

import Header from './Header';
import About from './About';
import Topic from './Topic';
import Submit from './Submit';
import Memory from './Memory';
import Purchase from './Purchase';
import Footer from './Footer';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

  render() {
    return (
    	<div className="mdl-layout__content">
      	<a name="top"></a>
    		<Header />
    		<About />
    		<Submit />
    		<Memory />
    		<Purchase />
    		<Footer />
      </div>
    );
  }
};

export default Home;