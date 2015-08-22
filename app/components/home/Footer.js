import React from 'react';

export default class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="footer mdl-mega-footer">
			  <div className="mdl-mega-footer--top-section">
			    <div className="mdl-mega-footer--left-section">
			    	<p>
			    		Mọi chi tiết xin vui lòng liên hệ trực tiếp qua email <a href="mailto:techcampsaigon.uni@gmail.com">techcampsaigon.uni@gmail.com</a>
			    		<br/> 
			    		Fanpage <a href="https://www.facebook.com/TechcampSaigonUNI" target="_blank">https://www.facebook.com/TechcampSaigonUNI</a>
			    	</p>
			    </div>
			    <div className="mdl-mega-footer--right-section">
			      <a className="mdl-typography--font-light" href="#top">
			        Back to Top
			        <i className="material-icons">expand_less</i>
			      </a>
			    </div>
			  </div>
			</footer>
		);
	}
}