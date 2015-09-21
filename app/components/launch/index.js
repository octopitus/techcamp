import React from 'react';

export default class Launch extends React.Component {

	render() {

		let sources = [1, 2, 3, 4, 5].map(i => {
			return "/assets/" + require(`assets/images/memories/bua-tiec-cong-nghe-${i}.jpg`);
		});

		return (
			<div className="mdl-layout__content">

				<div style={{width: '900px', margin: '0px auto', padding: '30px'}}>

					<div className="section-heading" style={{paddingBottom: '0px'}}>
						<h3 style={{borderBottom: '2px solid #ccc'}}>BUỔI RA MẮT TECHCAMP SAIGON UNI 2015</h3>
					</div>

					<p>Ngày 23 tháng 8 năm 2015, tại Hội Quán Sinh Viên Bách Khoa, Trường ĐH Bách Khoa Tp.HCM,  buổi ra mắt chương trình Techcamp Saigon Uni 2015 đã diễn ra thành công với sự tham gia đông đảo các bạn sinh viên đến các trường đại học đam mê công nghệ trên địa bàn Tp Hồ Chí Minh. Đây là sự kiện mở đầu nhằm cung cấp cho các bạn sinh viên có cái nhìn tổng quan về Techcamp Saigon Uni sẽ được tổ chức vào ngày 25/10/2015 sắp tới.</p>
					<p> Techcamp Saigon Uni là chương trình được CLB BKEVENT tổ chức thường niên, nhằm tạo cơ hội cho các diễn giả (đa phần là sinh viên) chia sẽ về các sản phẩm, ý tưởng mới về lĩnh vực khoa học kĩ thuật, khởi nghiệp kinh doanh.</p>

					<div style={{marginBottom: '16px', textAlign: 'center'}}>
						<img src={sources[0]} />
					</div>

					<p> Chương trình có sự góp mặt của ba vị khách mời, là những người có kinh nghiệm thực tế trong khởi nghiệp và phát triển ý tưởng công nghệ vào cuộc sống. Họ đã có những chia sẻ đầy thuyết phục và bổ ích cho các bạn sinh viên đam mê công nghệ tại đây.</p>

					<p>Mở đầu bằng phần trò chuyện là của anh Nguyễn Văn Hóa Vũ, người có topic được bình chọn cao nhất Techcamp Saigon Uni năm 2014. Anh đã chia sẻ những khó khăn trong quá trình biến ý tưởng từ lí thuyết vào sản phẩm thực tế ngoài ra anh đã chia sẻ hướng phát triển sản phẩm trong tương lai của anh đã được nêu lên một cách chân thực, rõ ràng nhất.</p>

					<div style={{marginBottom: '16px', textAlign: 'center'}}>
						<img src={sources[1]} />
						<br /><br />
						<em>Nguyễn Văn Hóa Vũ – Sinh viên chương trình Tiên Tiến ĐH Bách Khoa Tp. HCM</em>
					</div>

					<p>Trong phần chia sẻ của ông Vũ Tuấn Anh, GĐ Điều hành Viện nghiên cứu và Đào tạo về quản lí (VIM), ông đã thảo luận với các bạn sinh viên về câu hỏi “tại sao ta phải chia sẻ ý tưởng để thành công”. Ông cho rằng không có ý tưởng nào hoàn hảo ngay từ đầu, phải chia sẻ để nhận được sự phản hồi góp ý của mọi người nhằm hoàn thiện nó.</p>

					<div style={{marginBottom: '16px', textAlign: 'center'}}>
						<img src={sources[2]} />
						<br /><br />
						<em>Ông Vũ Tuấn Anh – GĐ Điều hành Viện nghiên cứu và Đào tạo về quản lí (VIM)</em>
					</div>

					<p>Tiếp theo là anh Hoàng Đức Thịnh, một nhà StartUp trẻ tuổi đang trên bước đường khẳng định khả năng của mình trong khu vực. Anh đã chia sẻ với các bạn sinh viên những khó khăn gặp phải trong quá trình khởi nghiệp cũng như những phương án giải quyết khi gặp những khó khăn đó.</p>
					
					<div style={{marginBottom: '16px', textAlign: 'center'}}>
						<img src={sources[3]} />
						<br /><br />
						<em>Anh Hoàng Đức Thịnh – StartUp trẻ đến từ Công ty HEPA</em>
					</div>

					<p>Cuối cùng là phần chia sẻ của anh Trần Nguyễn Lê Văn, sáng lập đồng thời là CEO của vexere.com, trả lời những câu hỏi về khó khăn trong khởi nghiệp của các bạn sinh viên bằng chính những kinh nghiệm và câu chuyện thực tế của bản thân. Ông đã phân tích tầm quan trọng của“sự đam mê” trong lý tưởng mà các bạn đang theo đuổi và ý chí bản thân khi đối diện với thất bại.</p>

					<div style={{marginBottom: '16px', textAlign: 'center'}}>
						<img src={sources[4]} />
						<br /><br />
						<em>Ông Trần Nguyễn Lê Văn – sáng lập đồng thời là CEO của vexere.com</em>
					</div>

					<p>Góp phần không nhỏ vào sự thành công của buổi ra mắt chính là sự tham gia của hơn 100 sinh viên đến từ nhiều trường đại học khác nhau. Buổi ra mắt chương trình là dịp mà các bạn sinh viên tháo gõ những khúc mắc về chương trình, các bạn sinh viên đưa ra những câu hỏi xoay quanh vấn đề start-up, bản quyền ý tưởng hay có nên tìm một cộng sự trước khi khỏi nghiệp… và bàn luận một cách sôi nổi.</p>

					<p>Sự thành công của buổi ra mắt chính là điểm khởi đầu thuận lợi, hứa hẹn sự kiện chính thức của chương trình Techcamp Saigon Uni 2015 sẽ đem lại nhiều lợi ích thiết thực cho cộng đồng sinh viên.</p>

				</div>
			</div>
		);
	}
}
