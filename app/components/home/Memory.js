import React from 'react';
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
        {Array.apply(null, {length: 10}).map((img, i) => {
          let src = "/assets/" + require(`assets/images/memories/bua-tiec-cong-nghe-${i + 1}.jpg`);
          return (<a key={i} href={`${src}`}><span style={{background: `url('${src}')`}}></span></a>);
        })}
      </div>
		);
	}
}

Memory.defaultProps = {'name': 'memory'};

export default Memory;