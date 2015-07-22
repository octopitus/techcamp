import React from 'react';
import reactMixin from 'react-mixin';
import scroller from 'react-scroll/lib/mixins/scroller';

class Memory extends React.Component {

	constructor(props) {
		super(props);
	}

  componentDidMount() {
    scroller.register(this.props.name, React.findDOMNode(this));
  }

	render() {
		return (
      <div id="memories">
        <div className="section-heading mdl-typography--text-center">
          <h2>Memories from 2014</h2>
          <div className="sub-logan">Check out the best moments from 2014 in photos.</div>
        </div>
        <a href=""><img src="http://lorempixel.com/260/320/sports/" /></a>
        <a href=""><img src="http://lorempixel.com/260/320/sports/" /></a>
        <a href=""><img src="http://lorempixel.com/260/320/sports/" /></a>
        <a href=""><img src="http://lorempixel.com/260/320/sports/" /></a>
        <a href=""><img src="http://lorempixel.com/260/320/sports/" /></a>
        <a href=""><img src="http://lorempixel.com/260/320/sports/" /></a>
        <a href=""><img src="http://lorempixel.com/260/320/sports/" /></a>
        <a href=""><img src="http://lorempixel.com/260/320/sports/" /></a>
        <a href=""><img src="http://lorempixel.com/260/320/sports/" /></a>
        <a href=""><img src="http://lorempixel.com/260/320/sports/" /></a>
      </div>
		);
	}
}

Memory.defaultProps = {'name': 'memory'};

export default Memory;