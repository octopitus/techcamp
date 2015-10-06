import React from 'react';
import scroller from 'react-scroll/lib/mixins/scroller';

class Topic extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    scroller.register(this.props.name, React.findDOMNode(this));
  }

  render() {
    return (
      <div id="topics" style={{ backgroundColor : "#f3f3f3" }}> 
        <div className="section-heading mdl-typography--text-center">
          <h2>HOT TOPICS</h2>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <div className="mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title" style={{ backgroundImage: `url(assets/${require('assets/images/techcamp_topic_1.png')})`}}>
              </div>
              <div className="mdl-card__supporting-text">
                Công thức giữ được hải sản biển tươi được lâu hơn (gần 4 tháng) bằng công nghệ 4S.
                <hr/>
                Nguyễn Đức Hiếu
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <div className="mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title" style={{ backgroundImage: `url(assets/${require('assets/images/techcamp_topic_2.png')})`}}>
              </div>
              <div className="mdl-card__supporting-text">
                Thiết bị hỗ trợ định vị vị trí của các thiết bị và vật dụng cá nhân khi được gắn kèm.
                <hr/>
                Võ Tấn Hùng
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <div className="mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title" style={{ backgroundImage: `url(assets/${require('assets/images/techcamp_topic_3.png')})`}}>
              </div>
              <div className="mdl-card__supporting-text">
                Sản xuất ra năng lượng sạch từ năng lượng dư thừa xung quanh chúng ta bằng vật liệu nhiệt điện.
                <hr/>
                Trần Quang Khôi
              </div>
            </div>
          </div>              
        </div>
      </div>
    );
  }
}

Topic.defaultProps = {name: 'topic'};

export default Topic;