import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div classNameName="Header">
    <section id="header1412a1" style={{ height: 0, position: "relative" }}>
    <div className="header1412a1">
      <div className="header1412a1-logo">
        <img
          id="header_logo"
          src="https://lh3.googleusercontent.com/d/1vz6JoXDwYQMjRLZ7L8jDmnJAWBxsIL-b"
          style={{ height: 60, width: "auto" }}
        />
      </div>
      <ul className="header1412a1-list" style={{ color: 'white'}}>
    <li className="home">
      <a href="#intro">Giới thiệu</a>
    </li>
    <li className="contact">
      <a href="#prize">Giải thưởng</a>
    </li>
    <li className="create">
      <a href="#timeline">Mốc thời gian</a>
    </li>
    <li className="home">
      <a href="#question">Q&amp;A</a>
    </li>
    <li className="contact">
      <a className="s" href="#dieukien">
        Đăng ký
      </a>
    </li>
  </ul>
    </div>
  </section>
  <section id="intro" style={{ top: 0 }}>
    <div id="intro_background-wrap">
      <img
        src="https://lh3.googleusercontent.com/d/1F15HFj7eTlm8SkJVhp4XXQmZ32SB2j1q"
        id="intro_background"
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.603)",
          top: 0,
          left: 0
        }}
      ></div>
    </div>
    <div className="vam_wrap" style={{ height: "100vh" }}>
      <div
        className="vam_con"
        style={{
          width: "70%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto"
        }}
      >
        <img
          id="intro_logo"
          style={{ animation: "introbanner .8s 1.3s linear forwards" }}
          src="https://lh3.googleusercontent.com/d/14RW8OZtzXa8hSkXL0p0XoyOk-qumuld_"
        />
        <div
          id="itro-spanns"
          style={{ animation: "introbanner .8s 1.5s linear forwards" }}
        >
          “ĐẤU TRƯỜNG AI ĐẦU TIÊN TẠI VN SỬ DỤNG ROBOT HÌNH NGƯỜI”
        </div>
        <h3
          style={{ animation: "introbanner .8s 1.5s linear forwards" }}
          className="vam_title2"
          id="intro_title"
        >
          Cuộc thi toàn quốc ROBOG 2024
        </h3>
        <p
          className="vam_content"
          id="intro_content"
          style={{ animation: "introbanner .8s 1.5s linear forwards" }}
        >
          Nhằm khuyến khích tinh thần sáng tạo và đổi mới trong phương pháp học
          tập của học sinh phổ thông và sinh viên cao đẳng, đại học, đồng thời
          ứng dụng các kiến thức về lập trình, công nghệ Robot và Trí tuệ nhân
          tạo, Ban tổ chức IPPTech &amp; UBTECH &amp; Trường Đại học Văn Lang
          phát động Cuộc thi ''ROBOG 2024'' trên toàn quốc với chủ đề ''KHÁM PHÁ
          AI''. Cuộc thi không chỉ tạo ra sân chơi bổ ích và thú vị mà còn thúc
          đẩy đam mê học tập, nghiên cứu khoa học của các bạn học sinh, sinh
          viên, giúp các em phát triển kỹ năng và khơi dậy tiềm năng sáng tạo.
        </p>
        <div
          id="intro_anim"
          style={{ animation: "introbanner .8s 1.5s linear forwards" }}
        >
          <div>
          <button  className="vam_button1" id="intro_link">
            <a href="#dieukien" style={{textDecoration: 'none', color: 'inherit'}}>Tham gia ngay</a>
          </button>
          </div>
          <div style={{ flexDirection: "column", display: "flex"}}>
            <button
              style={{ justifyContent: "center", display: "flex" }}
              className="vam_button1"
              id="intro_down"
            >
              <a onclick="downloadZip()">Xem thể lệ cuộc thi</a>
            </button>
            <button className="vam_button1" id="intro_link">
              <a target="_blank" rel="noreferrer" href="https://ubtechvietnam.edu.vn/" style={{textDecoration: 'none', color: 'inherit'}}>
                Trang web chính thức
              </a>
            </button>
          </div>
          <button className="vam_button1" id="intro_videosd">
          <i class="bi bi-play-circle"></i>
            <a> Video chủ đề</a>
          </button>
        </div>
        <div></div>
      </div>
    </div>
  </section>
  </div>
  );
}

export default Header;