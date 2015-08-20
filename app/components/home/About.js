import React from 'react';
import scroller from 'react-scroll/lib/mixins/scroller';

export default class About extends React.Component {

	constructor(props) {
		super(props);
	}

  componentDidMount() {
    scroller.register(this.props.name, React.findDOMNode(this));
  }

	render() {
		return (
      <div id="promo">
        <div className="section-heading mdl-typography--text-center">
          <h2>OVERVIEW & OBJECTIVES</h2>
        </div>
        <div className="promo-list">
          <div className="list-item">
            <div className="item-media">
              <img src="data:image/png;base64,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" />
            </div>
            <p className="item-body">
            TechCamp Saigon Uni aims to bring the best people working in
            Technology’s industry together and share their ideas.
            </p>
          </div>
          <div className="list-item">
            <div className="item-media">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAG80lEQVR4Xu1bzVIbRxDuWUlVNpfgJzA8geGYSqSIm6WL8RMEngA4SKmcIp9SQQfgCcBPYHyRfEORksox8ATAE0S+gKuQtlMzuytmRzO73atdUal4Ty5rZnrmm/75unsQ8ETf0UV99aH0/G8pvjK93zzYGoyfYiviKYRKmd3R6zqAdxHI97da1U+Dp9jLVwDyQP3Xv16vlXxvtf1d75K63iIacPhnc2Pq+eOfv/10Q5XnGpeLBhwOG2MhxDc+4tufav1zyqayAvDbsLHtCfEBEMatWu8FRVbSmFwBQMSbdq2/TtmU0poHoTRmWsEN6m12R0156y8R8XO71l+lyFoCAM0dIeA0FPSuVe11KBuTkUCOo0aA7qgp1/1FzkGE3Xatd0aRUzgAgVdvytt8JVWzPL1bpx6KegAJ1qS0cg0CVhHw93a1X6fOXRIAj2FtUvbXqSpNPYQ0mfLEu847bObiA6JDSO8s/02NBkWPp4CbKwAugVJ9p5Vnb3zfq4OADQGggDI/BLgEhEvP8welhy8f8zYjm8xCAZChDkHsCRDblNuYBwTPBeBJkSyxEACkagsfjwBELo4KAAfoiQOqaXHATgVAqi9HFbujpgxTpDDI2Wg4ttOq9t5R51H27gRgFnakNAHHaYLV+PLzD5xbl+EsWF78QD2U1Iby5P5t2qUozoCwJ9dNCstOAOJhRxIPvEGAAxvVValteeXC5dzCw10h4AA8ceZSZRUVfNwRgem8coEinWVlcrdlA0FSZQFwJIRYi+YnheVEEwidWEe/IZPvEw5/BeDvcx1ZmCtIpvfSFTFMEGZ5QjhBapgA7CTJTvUBcq3DYXMHAI9lwmPm7ofD5qkQsGO9LYEHre/7x3T1nh/Z/aOxDyiOrCAgnLVrvd3oNy3BukWEDoUqkwCIBJhOxUQ8GicTFSFwOwl5ZWIPnlLzScW/SmKOShNRnAcXEP9sGpnmH/QVWADoE3Vurv+/PDyURD0pZCngQJxKXq/mIox9wN2kVFr5hykO5kBYMPfIDICemekAUGoCs8RJm0hJcFwaBwDkDNTUoEwAuG4fEN+3an27P9Akd0dNtNl0q9pL3U932DgDIX6MzV9AC1IF2jYqnaKW/wdajPi5Mr1fo9jfIgCE1eQb0xSy1gcyAdAdNs9BwJuY7QOetKv9fYrHXwQAFZVGjWMBQpGc2YfwsVXrsXOObABYVBg92KRy9YUBULkGqJ6CBkCmGiEbgCDRMYQD3LaqvRnzStOCRQGQ60e1wRgGjEuI5rEBsHliigfXN5oHAIejxmA+h+A3WGIAhA4mxsGnFbzVSYoj/LHCkG3zGUCcFUg1cGP7CCvPMSpdmd5f6Y46BoAtPsvF9WTivwKAmcxFIMlEql3tbVpNwHozRnjLA4BlrBH1HebCpVFRnvMBQULx+JUnXy51lbFxAC4TKwoAkwsENYpnsfqjmZ+wnWC8pRUAxbdfvTMcgc1zYIU4wbTwJX+32RanJaaIjCWUcniEWmPYuNaLHqavopxFjmFrQChcNUN1IdxmiBkKKXlAJM9xCZl6hZkAsFFhrh+IOsrKhJiNTqsPWSYVdiRD5M6w0iKNyHB9iE39l5oM5ZGRxdJaYhodmN9imajpGzKZgOLiC+blyhFOg/4BlqBDSaQWrUPYHGNmANxMi54WUz11NM4KusFUuWuSAbC9A3KVxYp49WXjH+FhY/yf+34oFYCATa3sAcJ+UMR8JCzhb/JhRCzhkLwg7e2famAIUKUtRHifVBCN3hSacR8AbsuTu42Iqc5AQhjLblZ5cneSVqFKBMDWZTFv11kaT6gQWWv9CT0EawVIvi40HmWZWpLUzbImQ7r9mGxN9fE8sW9zVg5eEMsiY2uHr8pi9up49eXyNeCI+7ZuVhLLTG6Ollfk683VtC6LMyw6tIBTELHdPqUAG4ZLGWXG5cld3WUKqT6A6lU55IhTEOkOm//MGijhZrKSnlzDoG0xnd5Gv9s4fmhe8kFl5Dxv0YNtq3kZBVgubU67wNw0wKS3keAk+4tqD64eojVrzPGJXOZs0IWqg6iw6oX62vakh9Z9Srv51ChAXSDu3ed5ehjn2a86HZWn3F6IFgKAKxpkAdM2h+L9ubJy9QHKD1iyNe6mXOPz9P6FaEBa0rIQEIyUmSMndw2IhLvoK2dzs0jCaLxy1y8MACeF5e5QPnOb3L1IS2oyLKumFAaAXNxFebmb5RRMuWt/BYCLGGf8/14DbLkBB8CAROXzt0EuuYWagL19xYOAWzLnrV6wE8yDFFGe3XEPrY8vVAMUM7Q9aCLuGAuM/4UyQfN8tjJVEgaUR85EDFOHFa4B+g4oJlEE309CYakAKJOIvTx/3Jp6Ywxin/LCO/VaGQP+BYFCpn0yEl9uAAAAAElFTkSuQmCC" />
            </div>
            <p className="item-body">
            More than 50 topics presented in each events.
            </p>
          </div>
        </div>
        <div className="promo-list">
          <div className="list-item">
            <div className="item-media">
              <img src="data:image/png;base64,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"/>
            </div>
            <p className="item-body">
            TechCamp Saigon Uni will be good chance for students who want to share
            the ideas about new product or technology.
            </p>
          </div>
          <div className="list-item">
            <div className="item-media">
              <img src="data:image/png;base64,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"/>
            </div>
            <p className="item-body">
            Values we bring to you - Finding mentors, partners and potential consumers
            </p>
          </div>
        </div>
      </div>
		);
	}
}

About.defaultProps = {name: 'about'};

export default About;