import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div classNameName="App">
      <section id="header1412a1" style={{ height: 0, position: "relative" }}>
        <div className="header1412a1">
          <div className="header1412a1-logo">
            <img
              id="header_logo"
              src="https://lh3.googleusercontent.com/d/1vz6JoXDwYQMjRLZ7L8jDmnJAWBxsIL-b"
              style={{ height: 60, width: "auto" }}
            />
          </div>
          <ul className="header1412a1-list" style={{ color: "white" }}>
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
              <button className="vam_button1" id="intro_link">
                <a href="#dieukien">Tham gia ngay</a>
              </button>
              <div style={{ flexDirection: "column", display: "flex" }}>
                <button
                  style={{ justifyContent: "center", display: "flex" }}
                  className="vam_button1"
                  id="intro_down"
                >
                  <a onclick="downloadZip()">Xem thể lệ cuộc thi</a>
                </button>
                <button className="vam_button1" id="intro_link">
                  <a target="_blank" href="https://ubtechvietnam.edu.vn/">
                    Trang web chính thức
                  </a>
                </button>
              </div>
              <button className="vam_button1" id="intro_videosd">
                <i className="bi bi-play-circle-fill" />
                <a> Video chủ đề</a>
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      {/* <div class="background1">
  <div class="header123" style="height: max-content;position: sticky;">
      <div class="header123-logo">
          <img class="me-2" src="https://lh3.googleusercontent.com/d/1vz6JoXDwYQMjRLZ7L8jDmnJAWBxsIL-b" alt=""
              height="60">
      </div>
      <ul class="header123-list">
          <li class="gioithieu"><a href="">Giới thiệu</a></li>
          <li class="giaithuong"><a href="">Giải thưởng</a></li>
          <li class="mocthoigian"><a href="">Mốc thời gian</a></li>
          <li class="Q&A"><a href="">Q&amp;A</a></li>
          <button class="dangky"><a class="s" href="">Đăng ký</a></button>
      </ul>
  </div>

  <div class="content">
      <div class="viewport"></div>

      <img class="me-2" src="https://lh3.googleusercontent.com/d/14RW8OZtzXa8hSkXL0p0XoyOk-qumuld_" alt=""
          width="20%">

      <div id="tieude">“ĐẤU TRƯỜNG AI ĐẦU TIÊN TẠI VN SỬ DỤNG ROBOT HÌNH NGƯỜI”</div>
      <h3 class="large-heading">Cuộc thi toàn quốc ROBOG 2024</h3>
      <p class="chu">
          Nhằm khuyến khích tinh thần sáng tạo và đổi mới trong phương pháp học tập của học sinh phổ thông và sinh
          viên cao đẳng, đại học, đồng thời ứng dụng các kiến thức về lập trình, công nghệ Robot và Trí tuệ nhân
          tạo, Ban tổ chức IPPTech &amp; UBTECH &amp; Trường Đại học Văn Lang phát động Cuộc thi ''ROBOG 2024''
          trên toàn quốc với chủ đề ''KHÁM PHÁ AI''. Cuộc thi không chỉ tạo ra sân chơi bổ ích và thú vị mà còn
          thúc đẩy đam mê học tập, nghiên cứu khoa học của các bạn học sinh, sinh viên, giúp các em phát triển kỹ
          năng và khơi dậy tiềm năng sáng tạo.
      </p>
      <div id="intro_button"
          style="gap: 5px; margin: 20px auto; border-radius: 12px; width: 60%; display: flex; justify-content: center; align-items: start;">
          <button class="vam_button1" id="intro_link" style="background: transparent; border: none; ">
              <a href=""
                  style="text-decoration: none; color: white; border: 2px solid white; border-radius: 12px; font-size: 18px; padding: 8px 20px; display: inline-block; text-align: center;">Tham
                  gia ngay</a>
          </button>
          <div id="intro_anim"
              style="gap: 20px; display: flex; justify-content: center; animation: introbanner .8s 1.5s linear forwards;">
              <div style="flex-direction: column; display: flex; ">
                  <button class="vam_button1" id="intro_down" style="margin-bottom: 10px;border-radius: 12px;">
                      <a onclick="downloadZip()"
                          style="text-decoration: none; color: black; font-size: 18px; padding: 8px 20px; display: inline-block; text-align: center;border-radius: 12px;">Xem
                          thể lệ cuộc thi</a>
                  </button>
                  <button class="vam_button1" id="intro_link"
                      style="margin-bottom: 5px;background: transparent; border: none;">
                      <a target="_blank" href=""
                          style="text-decoration: none; color: white; border: 2px solid white; border-radius: 12px; font-size: 18px; padding: 8px 20px; display: inline-block; text-align: center;">Trang
                          web chính thức</a>
                  </button>
              </div>
          </div>
          <button class="vam_button1" id="intro_videosd" style="background: transparent; border: none;">
              <i class="bi bi-play-circle-fill"></i>
              <a
                  style="text-decoration: none; color: white; border: 2px solid white; border-radius: 12px; font-size: 18px; padding: 8px 20px; display: inline-block; text-align: center;">Video
                  chủ đề</a>
          </button>
      </div>
  </div>
    </div>*/}
      <div
        className="introduce"
        style={{ position: "relative", paddingBottom: 80 }}
      >
        <div
          className="vam_wrap"
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div
            className="scroll-thongdiep_title"
            style={{ padding: "50px 0", textAlign: "center" }}
          >
            <h2 id="introduce_sTitle">Mục tiêu</h2>
            <h1 id="introduce_title" style={{ color: "#00a4e3" }}>
              Mục tiêu của cuộc thi ROBOG 2024
            </h1>
          </div>
          {/* <p style="margin: 16px 0;" class="vam_content" id="introduce_content"></p> */}
          <div className="introduce_mt-wrap row">
            <div className="col-lg-4 col-md-6 introd-vam_boxwrap">
              <div>
                <div className="avatar_i">
                  <i className="bi bi-fire" />
                </div>
                <h1>Lan Tỏa Tinh Thần Khoa Học Và Đổi Mới Sáng Tạo</h1>
                <p>
                  Truyền cảm hứng, lan tỏa tinh thần khoa học và đổi mới sáng tạo
                  tới người dân nói chung và học sinh/sinh viên, giáo viên nói
                  riêng.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 introd-vam_boxwrap">
              <div>
                <div className="avatar_i">
                  <i className="bi bi-cpu-fill" />
                </div>
                <h1>Tiếp Cận Công Nghệ</h1>
                <p>
                  Tiếp cận với các tiến bộ khoa học công nghệ kỹ thuật thông qua các
                  bộ giáo cụ AI Robotics của UBTECH.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 introd-vam_boxwrap">
              <div>
                <div className="avatar_i">
                  <i className="bi bi-people-fill" />
                </div>
                <h1>Sân Chơi Hiện Đại</h1>
                <p>
                  Tạo sân chơi và nền tảng giao lưu thi đấu hiện đại, nơi học
                  sinh/sinh viên có thể đưa những kiến thức và kỹ năng đạt được vào
                  thực tiễn, chuẩn bị tốt hơn cho tương lai và có khả năng biến đổi
                  thế giới.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 introd-vam_boxwrap">
              <div>
                <div className="avatar_i">
                  <i className="bi bi-award-fill" />
                </div>
                <h1>Bồi Dưỡng Tài Năng</h1>
                <p>
                  Phát hiện, bồi dưỡng các tài năng và phát huy hết tiềm năng của
                  học sinh/sinh viên để trau dồi khoa học kỹ thuật công nghệ và đổi
                  mới sáng tạo cho tương lai.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 introd-vam_boxwrap">
              <div>
                <div className="avatar_i">
                  <i className="bi bi-globe-central-south-asia" />
                </div>
                <h1>Tuyển Chọn Đội Tuyển</h1>
                <p>
                  Tuyển chọn các đội đại diện Việt Nam tham gia vòng chung kết cuộc
                  thi ROBOG 2024 thế giới.
                </p>
                <p
                  id="loadtg"
                  style={{
                    color: "var(--color-text)",
                    cursor: "pointer",
                    marginTop: 10
                  }}
                >
                  Xem Thêm Thông Tin Cuộc Thi ROBOG 2024 Thế Giới
                </p>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="dieukien">
        <div className="dieukien_top-wrap vam_wrap">
          <div className="scroll-thongdiep_title">
            <span>Điều kiện tham gia</span>
            <h1>Cuộc thi dành cho tất cả thí sinh đang học tập tại Việt Nam</h1>
            <ul id="loaddieukienall">
              <li>
                <p style={{ fontWeight: 600 }}>
                  <span style={{ color: "var(--color-main)", fontWeight: 600 }}>
                    *
                  </span>
                  Tất cả thí sinh tham gia đăng ký thi đều được miễn phí 2 tháng học
                  Toán Phần Lan Eduten, Học Toán hiệu quả với Eduten - nền tảng trí
                  tuệ nhân tạo từ Phần Lan. Giáo viên hướng dẫn tham gia cuộc thi
                  được miễn phí trải nghiệm nền tảng dạy toán số 1 thế giới
                  (Eduten).{" "}
                </p>
              </li>
              <li>
                <p>
                  <span style={{ color: "var(--color-main)", fontWeight: 600 }}>
                    1.{" "}
                  </span>
                  Thí sinh chỉ có thể là thành viên của 01 đội thi duy nhất (ngoại
                  trừ trường hợp có thể tham gia đồng thời 01 đội thi ở bảng C và 01
                  đội thi ở bảng C++ Đặc biệt). Tất cả thành viên trong đội thi phải
                  trong phạm vi độ tuổi cho phép.
                </p>
                <p />
              </li>
              <li>
                <p>
                  <span style={{ color: "var(--color-main)", fontWeight: 600 }}>
                    2.{" "}
                  </span>
                  Giáo viên hướng dẫn có thể tham gia nhiều đội thi. Giáo viên hướng
                  dẫn phải có chứng chỉ giáo viên chương trình AI Robotics hoặc huấn
                  luyện viên của UBTECH.
                </p>
              </li>
              <li>
                <p>
                  <span style={{ color: "var(--color-main)", fontWeight: 600 }}>
                    3.{" "}
                  </span>
                  Khi đăng ký tham gia thi đấu, các thí sinh phải chấp thuận các
                  luật lệ, quy tắc, nội quy và điều kiện của cuộc thi cùng các vấn
                  đề liên quan.{" "}
                  <span
                    id="linktl"
                    style={{ fontWeight: 600 }}
                    onclick="downloadZip()"
                  >
                    {" "}
                    (Xem thêm thông tin Thể lệ thi đấu)
                  </span>
                </p>
              </li>
              <li>
                <p style={{ fontWeight: 600, color: "#c30000" }}>
                  <span style={{ color: "var(--color-main)", fontWeight: 600 }}>
                    4.{" "}
                  </span>
                  <b>
                    Các tài liệu hướng dẫn chi tiết và thông tin cập nhập về cuộc
                    thi sẽ được gửi đến email của giáo viên hướng dẫn của mỗi đội
                    thi ngay sau khi đăng ký thành công.
                  </b>
                </p>
              </li>
              <li>
                <p style={{ fontWeight: 600 }}>
                  <span style={{ color: "var(--color-main)", fontWeight: 600 }}>
                    **
                  </span>
                  Các đội thi được tham gia các buổi tập huấn trực tuyến và trải
                  nghiệm trực tiếp các bộ giáo cụ AI Robotics của UBTECH.
                  <span id="linkg">
                    {" "}
                    (Xem thêm thông tin tập huấn và trải nghiệm)
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <div className="row dieukien_bottom">
            <div className="col-12">
              <h1 style={{ color: "var(--color-h1)", fontSize: 18 }}>
                Cuộc thi được diễn ra với 2 vòng thi là
                <span style={{ color: "#c30000" }}>vòng sơ loại</span> (trực tuyến,
                thiết kế sáng tạo mô hình AI Robotics) và{" "}
                <span style={{ color: "#c30000" }}>vòng chung kết</span> (trực tiếp
                tại TPHCM, lập trình nhiệm vụ với Robot AI), với vòng thi vòng loại
                các bảng đều có chung đề thi{" "}
                <span id="desoloai" style={{ color: "#c30000" }}>
                  (xem thêm đề thi và bảng điểm vòng sơ loại)
                </span>
                . Đối với vòng chung kết, mỗi bảng có đề thi và bảng điểm riêng,
                thông tin chi tiết như sau:
              </h1>
            </div>
            <div className="col-xxl-3 col-lg-6 col-12" style={{ width: "25%" }}>
              <div>
                <div className="videodieukien" index={1}>
                  <i className="bi bi-youtube"></i>
                  <p>Video minh họa đề thi chung kết</p>
                </div>
                <div id="dieukien1" className="dieukiendiv">
                  <div className="dieukien_title-bang">
                    <h1>Bảng</h1>
                    <img src="https://lh3.googleusercontent.com/d/1clJh1S7jwzUcACcod6TPdFWdKeik8S-J" />
                  </div>
                  <p>
                    Dành cho thí sinh trong nhóm tuổi 7-14 (sinh năm 2010-2017), mỗi
                    đội thi gồm 2 thí sinh và 1 giáo viên hướng dẫn.
                  </p>
                </div>
                <div style={{ width: "100%" }}>
                  <div style={{ display: "flex", marginBottom: "-20px" }}>
                    <button
                      className="showdetail"
                      index={1}
                      style={{ width: "90%", marginRight: 5 }}
                    >
                      <a style={{ textAlign: "center" }}>Đề thi</a>
                    </button>
                    <button
                      className="showpoin"
                      index={1}
                      style={{ width: "90%", marginLeft: 5 }}
                    >
                      <a style={{ textAlign: "center" }}>Bảng điểm</a>
                    </button>
                  </div>
                  <a
                    className="dkthamgia"
                    target="_blank"
                    index={1}
                    href="https://docs.google.com/forms/d/e/1FAIpQLScKDUHNVTjSmaQSBIOz3kQvYJGORUEkSa7et0cKCkNQfjGNRw/viewform"
                  >
                    Đăng ký ngay
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-6 col-12" style={{ width: "25%" }}>
              <div>
                <div className="videodieukien" index={2}>
                  <i className="bi bi-youtube"></i>
                  <p>Video minh họa đề thi chung kết</p>
                </div>
                <div id="dieukien2" className="dieukiendiv">
                  <div className="dieukien_title-bang">
                    <h1>Bảng</h1>
                    <img src="https://lh3.googleusercontent.com/d/17HVlvHdkR5qvfesLEJ6HH4HCb_cYb7FX" />
                  </div>
                  <p>
                    Dành cho thí sinh trong nhóm tuổi 13-18 (sinh năm 2006-2011),
                    mỗi đội thi gồm 2 thí sinh và 1 giáo viên hướng dẫn.
                  </p>
                </div>
                <div style={{ width: "100%" }}>
                  <div style={{ display: "flex", marginBottom: "-20px" }}>
                    <button
                      className="showdetail"
                      index={2}
                      style={{ width: "90%", marginRight: 5 }}
                    >
                      <a style={{ textAlign: "center" }}>Đề thi</a>
                    </button>
                    <button
                      className="showpoin"
                      index={2}
                      style={{ width: "90%", marginLeft: 5 }}
                    >
                      <a style={{ textAlign: "center" }}>Bảng điểm</a>
                    </button>
                  </div>
                  <a
                    className="dkthamgia"
                    index={2}
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSccJGr9aCpqDWEC708P4iAuBBygx2vociu4fIbZ5dQNDpForA/viewform"
                  >
                    Đăng ký ngay
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-6 col-12" style={{ width: "25%" }}>
              <div>
                <div className="videodieukien" index={3}>
                  <i className="bi bi-youtube"></i>
                  <p>Video minh họa đề thi chung kết</p>
                </div>
                <div id="dieukien3" className="dieukiendiv">
                  <div className="dieukien_title-bang">
                    <h1>Bảng</h1>
                    <img src="https://lh3.googleusercontent.com/d/1vy0sgs7Cp66SX51zK6ISaxEO1A6HHfwq" />
                  </div>
                  <p>
                    Dành cho thí sinh trong nhóm tuổi 15-23 (sinh năm 2001-2009),
                    mỗi đội thi gồm 2-6 thí sinh và 1 giáo viên hướng dẫn.{" "}
                  </p>
                </div>
                <div style={{ width: "100%" }}>
                  <div style={{ display: "flex", marginBottom: "-20px" }}>
                    <button
                      className="showdetail"
                      index={3}
                      style={{ width: "90%", marginRight: 5 }}
                    >
                      <a style={{ textAlign: "center" }}>Đề thi</a>
                    </button>
                    <button
                      className="showpoin"
                      index={3}
                      style={{ width: "90%", marginLeft: 5 }}
                    >
                      <a style={{ textAlign: "center" }}>Bảng điểm</a>
                    </button>
                  </div>
                  <a
                    className="dkthamgia"
                    index={3}
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeYM_lcd7XqaQuw7B3uSd4J00X8FD6Su_t3bfa-XCbgoBJ_nA/viewform"
                  >
                    Đăng ký ngay
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-6 col-12" style={{ width: "25%" }}>
              <div>
                <div className="videodieukien" index={4}>
                  <i className="bi bi-youtube"></i>
                  <p>Video minh họa đề thi chung kết</p>
                </div>
                <div id="dieukien4" className="dieukiendiv">
                  <div className="dieukien_title-bang">
                    <h1>Bảng</h1>
                    <img src="https://lh3.googleusercontent.com/d/1XbxlzwhGFNfxr0uCilYn61eIjzSUG6eG" />
                  </div>
                  <p>
                    Dành cho thí sinh trong nhóm tuổi 15-23 (sinh năm 2001-2009),
                    mỗi đội thi gồm 2-6 thí sinh và 1 giáo viên hướng dẫn.{" "}
                  </p>
                </div>
                <div style={{ width: "100%" }}>
                  <div style={{ display: "flex", marginBottom: "-20px" }}>
                    <button
                      className="showdetail"
                      index={4}
                      style={{ width: "90%", marginRight: 5 }}
                    >
                      <a style={{ textAlign: "center" }}>Đề thi</a>
                    </button>
                    <button
                      className="showpoin"
                      index={4}
                      style={{ width: "90%", marginLeft: 5 }}
                    >
                      <a style={{ textAlign: "center" }}>Bảng điểm</a>
                    </button>
                  </div>
                  <a
                    className="dkthamgia"
                    index={4}
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfY6wZCTlaDCpX0vbRdK8zGEsr4TOr0iGqOXP7MYvPm-WAGJg/viewform"
                  >
                    Đăng ký ngay
                  </a>
                </div>
              </div>
            </div>
            <div className="submitExam">
              <button id="button_submitExam">Hướng dẫn nộp bài sơ loại</button>
            </div>
          </div>
        </div>
      </section>
      <section id="scroll">
        <div className="vam_wrap">
          <div className="scroll-thongdiep_title">
            <span>Thông điệp ý nghĩa</span>
            <h1 id="scroll_title">Thông điệp của cuộc thi ROBOG 2024</h1>
            <p id="scroll_mContent">
              Ban tổ chức (BTC) phát động cuộc thi “ROBOG 2024” với chủ đề “KHÁM PHÁ
              AI” trên toàn quốc, nhằm tạo sân chơi khoa học và công nghệ cho học
              sinh/sinh viên. Thông qua cuộc thi, học sinh/sinh viên sẽ trực tiếp
              thiết kế sáng tạo các mô hình AI theo yêu cầu của BTC, trên tinh thần
              giáo dục thực hành tích hợp và tiến bộ của công nghệ Robot và AI. Qua
              các hoạt động trong cuộc thi, người tham gia sẽ có cơ hội được tìm
              hiểu và luyện tập về:
            </p>
          </div>
        </div>
        <div className="vam_wrap scroll-tuduy">
          <div className="scroll-td_content" id="logic" style={{ flex: "1.3" }}>
            <h1>1. Các hệ thống tư duy</h1>
            <div>
              <i className="bi bi-amd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-amd"
                  viewBox="0 0 16 16"
                ></svg>
              </i>
              <p>
                Tư duy logic: cách thức để xác định vấn đề đang xảy ra trong ngành
                khoa học.
              </p>
            </div>
            <div>
              <i className="bi bi-amd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-amd"
                  viewBox="0 0 16 16"
                ></svg>
              </i>
              <p>
                Tư duy hệ thống: nâng cao khả năng nhìn nhận vấn đề một cách hệ
                thống, thông qua đó đưa ra các yêu cầu đầy đủ và cần thiết để giải
                quyết các vấn đề được đặt ra một cách toàn diện.
              </p>
            </div>
            <div>
              <i className="bi bi-amd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-amd"
                  viewBox="0 0 16 16"
                ></svg>
              </i>
              <p>
                Tư duy thiết kế: nâng cao khả năng thiết kế sản phẩm một cách hiệu
                quả dựa trên yêu cầu thiết kế.
              </p>
            </div>
            <div>
              <i className="bi bi-amd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-amd"
                  viewBox="0 0 16 16"
                ></svg>
              </i>
              <p>
                Tư duy sáng tạo: nâng cao khả năng đưa ra các ý tưởng sáng tạo nhằm
                phục vụ giải quyết các vấn đề về khoa học cũng như cuộc sống thường
                ngày.
              </p>
            </div>
          </div>
          <div
            id="dotmb"
            style={{
              height: 400,
              width: 3,
              backgroundColor: "var(--color-p)",
              margin: "0 16px"
            }}
          />
          <div className="scroll-td_content" id="skill" style={{ flex: "1.3" }}>
            <h1>2. Các kỹ năng</h1>
            <div>
              <i className="bi bi-amd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-amd"
                  viewBox="0 0 16 16"
                ></svg>
              </i>
              <p>
                Kỹ năng toán học và vật lý: rèn luyện các kiến thức toán, lý trong
                việc tính toán khoảng cách, bài toán quỹ đạo chuyển động, v.v.
              </p>
            </div>
            <div>
              <i className="bi bi-amd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-amd"
                  viewBox="0 0 16 16"
                ></svg>
              </i>
              <p>
                Kỹ năng thiết kế và chế tạo: rèn luyện việc hiện thực hóa các giải
                pháp, ý tưởng, đưa ra các sản phẩm mẫu.
              </p>
            </div>
            <div>
              <i className="bi bi-amd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-amd"
                  viewBox="0 0 16 16"
                ></svg>
              </i>
              <p>
                Kỹ năng lập trình cơ bản: sử dụng các ngôn ngữ lập trình phổ thông
                trên các thiết bị máy tính bảng/điện thoại, máy tính.
              </p>
            </div>
            <div>
              <i className="bi bi-amd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-amd"
                  viewBox="0 0 16 16"
                ></svg>
              </i>
              <p>
                Kỹ năng quản lý công việc và làm việc nhóm: rèn luyện khả năng nhận
                định khối lượng công việc, phân công, xây dựng dự án đạt được hiệu
                quả cao.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="scroll-add" style={{ padding: "30px 0" }}>
        <div className="vam_wrap2">
          <div className="scroll-device_title scroll-thongdiep_title">
            <h2 id="scroll-add_title">Thiết bị thi đấu</h2>
            <h1 id="scroll-add_title" style={{ color: "#00a4e3" }}>
              Yêu cầu về thiết bị dự thi ROBOG 2024
            </h1>
            <p style={{ paddingBottom: 16 }}>
              Ở các vòng thi sẽ có các yêu cầu về thiết bị khác nhau cho từng bảng.
              <span id="device_1" style={{ color: "#00a4e3" }}>
                (Thiết bị thi đấu cuộc thi)
              </span>
            </p>
            <div className="device_box">
              <div className="device_box-nav">
                <div className="device_box-nav_con acc" index={1}>
                  <h3>Thiết bị</h3>
                  <p>SƠ LOẠI</p>
                </div>
                <div className="device_box-nav_con" index={2}>
                  <h3>Thiết bị</h3>
                  <p>CHUNG KẾT</p>
                </div>
              </div>
              <div className="device_box-content">
                <div className="device_box-content-wrap">
                  <div style={{ textAlign: "justify" }} className="contentdevice">
                    <h1>Ở Vòng sơ loại bảng A, B, C/C++</h1>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        padding: "10px 0"
                      }}
                    >
                      <div className="iconvam" />
                      <p style={{ flex: 1 }}>
                        Các đội thi có thể sử dụng một hoặc nhiều phần cứng/phần mềm
                        của các bộ giáo cụ AI Robotics của UBTECH trong sản phẩm AI
                        Robotics của mình.
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        padding: "10px 0"
                      }}
                    >
                      <div className="iconvam" />
                      <p style={{ flex: 1 }}>
                        Các đội thi được phép bổ sung phần cứng của mình bằng các
                        vật liệu thông thường của nhà sản xuất hoặc các vật phẩm
                        khác, chẳng hạn như vật liệu cắt laser hoặc vật liệu in 3D.
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        padding: "10px 0"
                      }}
                    >
                      <div className="iconvam" />
                      <p style={{ flex: 1 }}>
                        Về nguyên tắc, không có hạn chế nào đối với việc sử dụng các
                        thiết bị kết hợp với các bộ giáo cụ AI Robotics của UBTECH,
                        ngoài những thiết bị gây ô nhiễm môi trường và có hại cho
                        sức khỏe hoặc an toàn xã hội.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="device_box-img">
                  <img src="https://lh3.googleusercontent.com/d/1jGKEoVVhylTpKoFLWk4gSzxQMm3kBm5V" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="prize" style={{ padding: "50px 0", overflow: "hidden" }}>
        <div className="vam_wrap" style={{ padding: "50px 0" }}>
          <div className="scroll-thongdiep_title device">
            <span id="prize_sTitle">Giải thưởng</span>
            <h1 id="prize_title">Cơ cấu giải thưởng của cuộc thi</h1>
            <p id="prize_mContent">
              Các đội đạt giải cao ở mỗi bảng của Vòng chung kết sẽ được tập huấn
              nội dung thi quốc tế để đáp ứng yêu cầu của Cuộc thi ROBOG 2024 thế
              giới. Đặc biệt, mỗi đội đạt kết quả cao nhất của từng bảng sau bài
              kiểm tra tập huấn thi quốc tế sẽ được tài trợ
              <b>toàn bộ chi phí (di chuyển và ăn ở) cho chuyến thi quốc tế.</b>
            </p>
          </div>
        </div>
        <div className="vam_wrap row">
          {/**/}
          <div className="col-lg-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%"
              }}
              className="glowing-border b"
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 99,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  width: "100%"
                }}
              >
                <div className="name-ct">ROBOG 2024</div>
                <div className="name-vong">
                  <img
                    src="https://lh3.googleusercontent.com/d/1SeN9ppu2DzOQGDMRXQhEND1l1LsshmJu"
                    alt=""
                  />
                  <p>Vòng sơ loại</p>
                  <span id="d76" style={{ fontWeight: 600 }}>
                    *Giải thưởng dành cho bảng A, B, C/C++
                  </span>
                </div>
                <div className="giaithuong" style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: 16
                    }}
                  >
                    <span className="p67" style={{ fontSize: 32 }}>
                      {" "}
                      <strong style={{ fontSize: 34 }}>03</strong>
                      Giải Nhất
                    </span>
                    <p className="chuthichall">- Mỗi giải -</p>
                    <h3 style={{ fontSize: 34 }}>30.000.000 VNĐ</h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      borderTop: "2px solid #00a4e3",
                      width: "100%"
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        padding: "5px 16px",
                        display: "flex",
                        borderRight: ".5px solid #00a4e3",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                    >
                      <span>
                        <strong style={{ fontSize: 22 }}>03</strong> Giải Nhì
                      </span>
                      <p className="chuthichall">- Mỗi giải -</p>
                      <h3 style={{ fontSize: 18 }}>10.000.000 VNĐ</h3>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        padding: "5px 16px",
                        display: "flex",
                        borderLeft: ".5px solid #00a4e3",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                    >
                      <span>
                        <strong style={{ fontSize: 22 }}>06</strong> giải ba
                      </span>
                      <p className="chuthichall">- Mỗi giải -</p>
                      <h3 style={{ fontSize: 18 }}>2.000.000 VNĐ</h3>
                    </div>
                  </div>
                </div>
                <ul className="giaithuongp">
                  <li>
                    <strong>06</strong> giải khuyến khích: mỗi giải 1.000.000 VNĐ
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8" id="giathuong">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%"
              }}
              className="glowing-border v"
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 99,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  width: "100%"
                }}
              >
                <div className="name-ct v">ROBOG 2024</div>
                <div className="name-vong" style={{ width: "80%" }}>
                  <img
                    src="https://lh3.googleusercontent.com/d/1gqmiS6DFUKJ1jD_TcVSnmL-UbwEwuEnM"
                    alt=""
                  />
                  <p>Vòng chung kết</p>
                  <div
                    id="chuthichmb"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>
                      *Giải thưởng dành cho bảng A, B, C/C++
                    </span>
                    <span style={{ fontWeight: 600 }} id="cdacbietmb">
                      *Giải thưởng dành cho bảng C++ Đặc Biệt
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex" }} id="chunketmb">
                  <div style={{ flex: 1 }}>
                    <div className="giaithuong v" style={{ width: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          padding: 16
                        }}
                      >
                        <span className="p67" style={{ fontSize: 32 }}>
                          <img
                            style={{ width: 70, height: "auto" }}
                            src="https://lh3.googleusercontent.com/d/1OA6q11fBBDuW55hvsmZmCIY-Uu670YnS"
                            alt=""
                          />{" "}
                          <strong style={{ fontSize: 34 }}>03</strong>
                          Giải Nhất
                        </span>
                        <p className="chuthichall">- Mỗi giải -</p>
                        <h3 style={{ fontSize: 34 }}>60.000.000 VNĐ</h3>
                        <p style={{ textAlign: "center" }}>
                          Mỗi đội 2 cái đồng hồ đeo tay của thương hiệu STORM và DM.
                          Trị giá 5.000.000 đ/cái.
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          borderTop: "2px solid var(--color-yellow)",
                          width: "100%"
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            padding: "5px 16px",
                            display: "flex",
                            borderRight: ".5px solid var(--color-yellow)",
                            flexDirection: "column",
                            alignItems: "center"
                          }}
                        >
                          <span>
                            <strong style={{ fontSize: 22 }}>03</strong> Giải Nhì
                          </span>
                          <p className="chuthichall">- Mỗi giải -</p>
                          <h3 style={{ fontSize: 18 }}>10.000.000 VNĐ</h3>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            padding: "5px 16px",
                            display: "flex",
                            borderLeft: ".5px solid var(--color-yellow)",
                            flexDirection: "column",
                            alignItems: "center"
                          }}
                        >
                          <span>
                            <strong style={{ fontSize: 22 }}>06</strong> giải ba
                          </span>
                          <p className="chuthichall">- Mỗi giải -</p>
                          <h3 style={{ fontSize: 18 }}>5.000.000 VNĐ</h3>
                        </div>
                      </div>
                    </div>
                    <ul className="giaithuongp">
                      <li>
                        <strong>09</strong> giải khuyến khích: mỗi giải 2 set quà
                        của IPPTR (1 set gồm 1 Bình nước giữ nhiệt và 1 Sạc dự
                        phòng). Trị giá 900.000 đ/set.
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{
                      height: 300,
                      width: 3,
                      backgroundColor: "var(--color-yellow)",
                      margin: "0 16px"
                    }}
                    id="fotmb"
                  ></div>
                  <div style={{ flex: 1, position: "relative" }} id="imgugot">
                    <div className="giaithuong v" style={{ width: "100%" }}>
                      <div
                        id="prive_mb"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          padding: 16
                        }}
                      >
                        <span className="p67" style={{ fontSize: 32 }}>
                          <img
                            style={{ width: 70, height: "auto" }}
                            src="https://lh3.googleusercontent.com/d/1s8c5ZHa1XPI6JfrFvEH3qlMX3pdS9efi"
                            alt=""
                          />{" "}
                          <strong style={{ fontSize: 34, marginLeft: "-10px" }}>
                            01
                          </strong>
                          Giải Đặc Biệt
                        </span>
                        <p className="chuthichall">
                          - Học bổng đại học VLU trị giá -{" "}
                        </p>
                        <h3 style={{ fontSize: 34 }}>100.000.000 VNĐ</h3>
                        <p style={{ marginTop: 10 }}>
                          Kèm theo đó là 1 bộ Robot AI module UGOT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*    <ul class="giaithuongp">
                      <li style="margin: 0 30px;">Ở vòng chung kết, các giải có thêm kỷ niệm chương và các phần
                          quà tặng từ BTC và nhà tài
                          trợ.
                          Đối
                          với
                          giải nhất sẽ được tặng kèm cúp vô địch.</li>
                  </ul>*/}
                <p />
              </div>
            </div>
          </div>
        </div>
        <div className="vam_wrap" style={{ padding: "30px 0" }}>
          <div className="col-lg-12" style={{ padding: "0 10px" }}>
            <div
              style={{
                height: "100%",
                border: "3px solid var(--color-yellow)",
                padding: "10px 20px"
              }}
              className="glowing-border"
            >
              <p>
                - Ngoài ra, các đội thi còn nhận được giấy chứng nhận tham gia cuộc
                thi và nhiều quà tặng khác từ BTC và nhà tài trợ.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="timeline" style={{ padding: "50px 0" }}>
        <div className="vam_wrap">
          <img
            id="timeline_img"
            style={{ width: "100%" }}
            src="https://lh3.googleusercontent.com/d/1vnlF7jIapT0eExt3Jg1KrlMIzmEqv-8k"
          />
        </div>
      </section>
      <section id="c661412b2" data-scroll-section="">
        <div className="c661412b2 vam_wrap2">
          <div className="row c661412b2-wrap">
            <div className="col-lg-6 c661412b2-left">
              <div className="c661412b2-contents">
                <div className="c661412b2-items-wrap">
                  <div className="col-lg-12 c661412b2-title">
                    <span>Thời gian đăng ký</span>
                    <h1>Thời gian đăng ký còn lại</h1>
                  </div>
                  <div id="countdown" className="time_clock">
                    <div id="days">00</div>
                    <div id="hours">00</div>
                    <div id="minutes">00</div>
                    <div id="seconds">00</div>
                  </div>
                </div>
              </div>
              <div className="c661412b2-posi-ab">
                <i
                  id="c661412b2-iframe_click2"
                  className="bi bi-play-circle-fill"
                />
                <div className="c661412b2-posi-ab_bg" />
                <img
                  className="c661412b2-posi-ab_img"
                  src="https://lh3.googleusercontent.com/d/1ePDLxG8CfG7oICcJb_k4pQOMAaJxgqJU"
                />
              </div>
            </div>
            <div className="col-lg-6 c661412b2-right">
              <div className="c661412b2-posi-ab">
                <img
                  src="https://lh3.googleusercontent.com/d/1ePDLxG8CfG7oICcJb_k4pQOMAaJxgqJU"
                  alt=""
                />
                <div className="c661412b2-posi-ab_bg" />
              </div>
              <div className="c661412b2-video">
                <i id="c661412b2-iframe_click" className="bi bi-play-circle-fill" />
              </div>
            </div>
          </div>
          <div className="c661412b2-background_click" style={{ display: "none" }} />
          <div className="c661412b2-iframe_click" style={{ display: "none" }}>
            <iframe
              className="c661412b2-iframe"
              src="https://www.youtube.com/embed/u4gbjq9RiBs"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
        </div>
      </section>
      <section id="doitac" style={{ padding: "50px 0" }}>
        <div className="vam_wrap2">
          <h3
            className="title-non"
            style={{
              textAlign: "center",
              color: "var(--color-text)",
              paddingTop: 40
            }}
          >
            Đơn vị chỉ đạo
          </h3>
          <div
            id="chidao_load"
            style={{
              padding: 50,
              display: "flex",
              flexWrap: "wrap",
              gap: ".6%",
              justifyContent: "center"
            }}
          >
            <a
              href="http://www.ioit.ac.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "120%" }}
                src="https://lh3.googleusercontent.com/d/1LK7mOK-47mcdy2TNYpcJ_12p6BgdIqRg"
              />
            </a>
            <a
              href="http://vnies.edu.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "85%" }}
                src="https://lh3.googleusercontent.com/d/1mewY3QTVsRRrVviVBTiifSR3cnBMiiMp"
              />
            </a>
          </div>
        </div>
        <div className="vam_wrap2">
          <h3
            className="title-non"
            style={{
              textAlign: "center",
              color: "var(--color-text)",
              paddingTop: 40
            }}
          >
            Đơn vị tổ chức và đồng tổ chức
          </h3>
          <div
            id="tochuc_load"
            style={{
              padding: 50,
              display: "flex",
              flexWrap: "wrap",
              gap: ".6%",
              justifyContent: "center"
            }}
          >
            <a
              href="https://ippgroup.vn/vi/kinh-doanh/ipp-technology"
              target="_blank"
              className="donvi_load-wrap"
              style={{ justifyContent: "start", margin: "0px 25px" }}
            >
              <img
                style={{ width: "120%" }}
                src="https://lh3.googleusercontent.com/d/1VuiqvBCVAYz0vvFh7oENwAo08moqJnPD"
              />
            </a>
            <a
              href="https://www.facebook.com/aicenter.itp/?locale=vi_VN"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "80%" }}
                src="https://lh3.googleusercontent.com/d/1HPAkLmWQIKVdfsy34Ro0usY9x9ULtZj9"
              />
            </a>
            <a
              href="https://ubtechvietnam.com/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "100%" }}
                src="https://lh3.googleusercontent.com/d/1OQ5zDVNzcbx9tk6c2qpT3osg51q0mONE"
              />
            </a>
            <a
              href="https://www.vlu.edu.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "100%" }}
                src="https://lh3.googleusercontent.com/d/1FMaQ3VWCNzxNwHrX09FyY-J9OvkYIL2g"
              />
            </a>
            <a
              href="https://airobotic.edu.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "120%" }}
                src="https://s4h.edu.vn/wp-content/uploads/2024/01/logo-ngang.png"
              />
            </a>
            <a
              href="https://lhu.edu.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "80%" }}
                src="https://lh3.googleusercontent.com/d/1qdPpyoBEl4sCVF0e4USMqGoO3wkacFfc"
              />
            </a>
            <a
              href="https://dlu.edu.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "60%", objectFit: "cover" }}
                src="https://lh3.googleusercontent.com/d/1-QWnNnM2_tMFl_cH3GPlJJmX6ep0bXix"
              />
            </a>
            <a
              href="https://www.hcmue.edu.vn/vi/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "80%" }}
                src="https://lh3.googleusercontent.com/d/1jgoFUrlWgw5pkPO-f4dM8U6bGI6mvxsK"
              />
            </a>
          </div>
        </div>
        <div className="vam_wrap2">
          <h3
            className="title-non"
            style={{
              textAlign: "center",
              color: "var(--color-text)",
              paddingTop: 40
            }}
          >
            Đơn vị đồng hành và tài trợ
          </h3>
          <div
            id="donghanh_load"
            style={{
              padding: 50,
              display: "flex",
              flexWrap: "wrap",
              gap: ".6%",
              justifyContent: "center"
            }}
          >
            <a
              href="https://www.dafc.com.vn/vi/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "80%" }}
                src="https://lh3.googleusercontent.com/d/15E4Rk2gUI0RSFdkkKJ8VqSfa0OtVuuzj"
              />
            </a>
            <a
              href="https://ipptravelretail.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "160%" }}
                src="https://lh3.googleusercontent.com/d/1DDI6TOqrKJdvH4dnz8qEcVSDoBq1EIPV"
              />
            </a>
            <a
              href="https://burgerking.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "50%" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png"
              />
            </a>
            <a
              href="https://dominos.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "60%" }}
                src="https://lh3.googleusercontent.com/d/1NfwY9GRsXKt7Dn9ofDM1SC3f7QOAb0Xt"
              />
            </a>
            <a
              href="https://popeyes.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "100%" }}
                src="https://lh3.googleusercontent.com/d/1qimLEcP9ihd4CDAyDtRu-IQtrkYn1mf1"
              />
            </a>
            <a
              href="https://vsss.edu.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "60%" }}
                src="https://lh3.googleusercontent.com/d/15HHGz0OgAFDHr3G6XVtmWqlp5DzZeRWt"
              />
            </a>
            <a
              href="https://ispschools.edu.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "90%" }}
                src="https://lh3.googleusercontent.com/d/10vHKsZ4UCmECQ4duhDdNQPJbVw2mHfCZ"
              />
            </a>
            <a
              href="https://kapla.edu.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "80%" }}
                src="https://lh3.googleusercontent.com/d/1lD7Vbw52UpUtey5f9vgYOOHPb0neTb7u"
              />
            </a>
            <a
              href="https://ngothoinhiem.edu.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "80%" }}
                src="https://lh3.googleusercontent.com/d/1ihvi9OHptmNQniafQf-JDu-i9XV7U1Af"
              />
            </a>
            <a
              href="https://kidkul.com/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "80%", objectFit: "cover" }}
                src="https://lh3.googleusercontent.com/d/1weTzQ03jQxUqHmogEK0Bl2y1XT9YeFSe"
              />
            </a>
            <a
              href="https://eduten.com/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "65%" }}
                src="https://lh3.googleusercontent.com/d/1-_fAH2PETHvktG9ekVHA55ux2HQ0ITyS"
              />
            </a>
            <a
              href="https://steam.goldena.edu.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "140%" }}
                src="https://lh3.googleusercontent.com/d/1NHfWpp0N7rskl9y2PeHXgL5lG5CwUASS"
              />
            </a>
          </div>
        </div>
        <div className="vam_wrap2">
          <h3
            className="title-non"
            style={{
              textAlign: "center",
              color: "var(--color-text)",
              paddingTop: 40
            }}
          >
            Đơn vị truyền thông
          </h3>
          <div
            id="truyenthong_load"
            style={{
              padding: 50,
              display: "flex",
              flexWrap: "wrap",
              gap: ".6%",
              justifyContent: "center"
            }}
          >
            <a
              href="https://is.uel.edu.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "60%" }}
                src="https://lh3.googleusercontent.com/d/1DLZBM7JL_lkrj1Rvxs1Q3j8Hev1KjIBu"
              />
            </a>
            <a
              href="https://doanthanhnien.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "60%" }}
                src="https://lh3.googleusercontent.com/d/1gFZ0O1-sKe7jMjuXe3Xlf_KR810MBJSE"
              />
            </a>
            <a
              href="https://lhu.edu.vn/"
              target="_blank"
              className="donvi_load-wrap"
            >
              <img
                style={{ width: "80%" }}
                src="https://lh3.googleusercontent.com/d/1qdPpyoBEl4sCVF0e4USMqGoO3wkacFfc"
              />
            </a>
          </div>
        </div>
      </section>
      <section id="question">
        <div className="vam_wrap2" id="question_load">
          <h3 className="vam_title">Q&amp;A: Một số câu hỏi thường gặp</h3>
          <div className="question_div" index={0}>
            <p className="vam_content1">Tham dự có mất chi phí không?</p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={0}>
            <p className="vam_content1">
              Việc đăng ký tham gia cuộc thi hoàn toàn miễn phí.
            </p>
          </div>
          <div className="question_div" index={1}>
            <p className="vam_content1">
              Cần kiến thức gì để tham gia cuộc thi không ?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={1}>
            <p className="vam_content1">
              Để tham gia cuộc thi hiệu quả, thí sinh nên chuẩn bị một số kiến thức
              cơ bản về tư duy lập trình.
            </p>
          </div>
          <div className="question_div" index={2}>
            <p className="vam_content1">
              Cần chuẩn bị những gì để tham gia cuộc thi?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={2}>
            <p className="vam_content1">
              Để tham gia cuộc thi, thí sinh cần liên hệ với 1 giáo viên hướng dẫn
              để được đăng ký và hướng dẫn trong suốt cuộc thi.
            </p>
          </div>
          <div className="question_div" index={3}>
            <p className="vam_content1">
              Tôi muốn có thêm thông tin thì xem thêm ở đâu?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={3}>
            <p className="vam_content1">
              Để có thêm thông tin về cuộc thi, vui lòng xem thêm tại các kênh thông
              tin sau: <br />
              - Website UBTECH Việt Nam: https://ubtechvietnam.com
              <br />
              - Mạng xã hội Facebook (UBTECH Việt Nam):
              https://www.facebook.com/ubtechvietnam/
              <br />
            </p>
          </div>
          <div className="question_div" index={4}>
            <p className="vam_content1">
              Quy mô một nhóm tham dự gồm bao nhiêu người?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={4}>
            <p className="vam_content1">
              Mỗi bảng thi có quy định quy mô thí sinh tham gia ở mỗi đội. Cụ thể,
              bảng A và bảng B quy định mỗi đội phải có đúng 2 thí sinh. Bảng C và
              bảng C++ Đặc biệt quy định mỗi đội có từ 2 đến 6 thí sinh.
            </p>
          </div>
          <div className="question_div" index={5}>
            <p className="vam_content1">
              Tôi có thể tham gia cuộc thi với nhiều lĩnh vực được không?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={5}>
            <p className="vam_content1">
              Thí sinh chỉ có thể tham gia 1 đội thi, ngoại trừ trường hợp thí sinh
              có thể tham gia đồng thời 1 đội ở bảng C và 1 đội ở bảng C++ Đặc biệt.
              Giáo viên hướng dẫn có thể tham gia nhiều đội thi.
            </p>
          </div>
          <div className="question_div" index={6}>
            <p className="vam_content1">
              Chưa có kinh nghiệm có thể tham gia cuộc thi được không?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={6}>
            <p className="vam_content1">
              Thí sinh chưa có kinh nghiệm vẫn có thể tham gia cuộc thi. Trong suốt
              thời gian tổ chức cuộc thi, Ban tổ chức có sắp xếp các buổi tập huấn
              trực tuyến về nội dung cuộc thi và các thiết bị có thể sử dụng trong
              cuộc thi. Ngoài ra, Ban tổ chức cũng sắp xếp các buổi trải nghiệm trực
              tiếp các thiết bị tại TPHCM.
            </p>
          </div>
          <div className="question_div" index={7}>
            <p className="vam_content1">Làm sao biết đã đăng ký thành công?</p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={7}>
            <p className="vam_content1">
              Sau khi đăng ký, đội thi sẽ nhận được xác nhận qua email.
            </p>
          </div>
          <div className="question_div" index={8}>
            <p className="vam_content1">
              Có thể thay đổi thành viên sau khi đăng ký không?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={8}>
            <p className="vam_content1">
              Đội thi có thể thay đổi thành viên qua email sau khi đăng ký, miễn là
              trước hạn chót đăng ký.
            </p>
          </div>
          <div className="question_div" index={9}>
            <p className="vam_content1">
              Các thành viên trong đội có thể khác trường học hoặc cấp lớp không?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={9}>
            <p className="vam_content1">
              Các thành viên trong đội có thể khác trường học hoặc cấp lớp, miễn là
              trong nhóm tuổi (theo năm sinh) quy định.
            </p>
          </div>
          <div className="question_div" index={10}>
            <p className="vam_content1">
              Tôi không ở TPHCM thì có thể tham gia cuộc thi được không?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={10}>
            <p className="vam_content1">
              Cuộc thi được tổ chức quy mô toàn quốc nên thí sinh ở bất kì tỉnh
              thành nào cũng có thể tham gia cuộc thi.
            </p>
          </div>
          <div className="question_div" index={11}>
            <p className="vam_content1">Cuộc thi có tính chất quốc tế không?</p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={11}>
            <p className="vam_content1">
              Bên cạnh việc trao các giải thưởng ở cấp độ quốc gia, cuộc thi cũng
              nhằm tuyển chọn các đội xuất sắc đại diện Việt Nam tham gia vòng chung
              kết cuộc thi ROBOG 2024 thế giới dự kiến tại Thẩm Quyến vào cuối tháng
              11/2024. Chính vì thế, các quy định và nội dung cuộc thi toàn quốc
              cũng bám sát với cuộc thi ROBOG 2024 thế giới.{" "}
            </p>
          </div>
          <div className="question_div" index={12}>
            <p className="vam_content1">
              Ban tổ chức có hỗ trợ gì cho các đội thi quốc tế không?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={12}>
            <p className="vam_content1">
              Mỗi đội đạt kết quả cao nhất của từng bảng sau bài kiểm tra tập huấn
              thi quốc tế sẽ được tài trợ toàn bộ chi phí (di chuyển và ăn ở) cho
              chuyến thi quốc tế.
            </p>
          </div>
          <div className="question_div" index={13}>
            <p className="vam_content1">
              Đội thi chưa tìm được giáo viên hướng dẫn thì thế nào?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={13}>
            <p className="vam_content1">
              Đội thi liên hệ Ban tổ chức để được hướng dẫn hỗ trợ cụ thể.
            </p>
          </div>
          <div className="question_div" index={14}>
            <p className="vam_content1">
              Giáo viên chưa có chứng chỉ giáo viên chương trình giáo dục AI
              Robotics hoặc huấn luyện viên của UBTECH thì thế nào?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={14}>
            <p className="vam_content1">
              Giáo viên liên hệ Ban tổ chức để được hướng dẫn hỗ trợ cụ thể.
            </p>
          </div>
          <div className="question_div" index={15}>
            <p className="vam_content1">
              Thí sinh chưa tìm đủ thành viên để tham gia đội thi thì thế nào?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={15}>
            <p className="vam_content1">
              Thí sinh liên hệ Ban tổ chức để được hướng dẫn hỗ trợ cụ thể.
            </p>
          </div>
          <div className="question_div" index={16}>
            <p className="vam_content1">
              Để đội thi được vào Vòng chung kết thì cần đạt kết quả thế nào ở Vòng
              sơ loại?
            </p>
            <i className="bi bi-arrow-up-circle-fill" />
          </div>
          <div className="question_load" index={16}>
            <p className="vam_content1">
              Để được vào Vòng chung kết, đội thi cần đạt kết quả trên 50% điểm số
              của đội thi đạt điểm cao nhất tương ứng mỗi bảng ở Vòng sơ loại.
            </p>
          </div>
        </div>
      </section>
      <section id="footer">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "var(--color-text)",
            position: "relative"
          }}
        >
          {/*<img style="height: 100%;width: auto;"
          src="https://edustorge.ubtrobot.com/ucode-new-website/ubt-competition-official-website/v1.5.2/cdn-statics/img/footer-1.0afcd93.png">
      <div
          style="width: 2px;background-color: white;height: 90%;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);">
      </div>*/}
          <img
            style={{ height: "100%", width: "auto" }}
            src="https://edustorge.ubtrobot.com/ucode-new-website/ubt-competition-official-website/v1.5.2/cdn-statics/img/footer-1.0afcd93.png"
          />
        </div>
        <div
          className="vam_wrap2 footer_wrap"
          style={{ color: "white", padding: "50px 0" }}
        >
          <div style={{ flex: ".6" }} id="ft_logo-wrap">
            <img
              id="ft_logo"
              src="https://lh3.googleusercontent.com/d/1geSRPy5LX4ygeNcbOPZK1CIefhyHVIPQ"
              alt=""
            />
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                padding: "30px 0"
              }}
            >
              <a
                style={{
                  padding: 15,
                  aspectRatio: "1 / 1",
                  border: "1px solid",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                target="_blank"
                href="https://www.facebook.com/ubtechvietnam/"
              >
                <i
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  className="bi bi-facebook"
                />
              </a>
              <a
                style={{
                  padding: 15,
                  aspectRatio: "1 / 1",
                  border: "1px solid",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                target="_blank"
                href="https://www.youtube.com/@ubtechvietnam"
              >
                <i
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  className="bi bi-youtube"
                />
              </a>
              <a
                style={{
                  padding: 15,
                  aspectRatio: "1 / 1",
                  border: "1px solid",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                target="_blank"
                href="https://www.linkedin.com/company/ubtechvietnam/"
              >
                <i
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  className="bi bi-linkedin"
                />
              </a>
            </div>
          </div>
          <div id="load_about">
            <h2>Về Cuộc Thi ROBOG</h2>
            <p>
              Chào mừng bạn đến với cuộc thi ROBOG 2024 “Khám phá AI” do IPPG &amp;
              UBTECH &amp; Trường Đại học Văn Lang phối hợp tổ chức. Nhằm phát huy
              tinh thần đổi mới sáng tạo trong phương pháp học của học sinh/sinh
              viên và ứng dụng các kiến thức, kỹ năng về Lập trình, Công nghệ Robot
              và Trí tuệ nhân tạo đồng thời tạo sân chơi hữu ích, thú vị cho các bạn
              học sinh/sinh viên và nhà trường, từ đó tiếp thêm động lực để cổ vũ
              cho sự sáng tạo, đam mê học tập và nghiên cứu khoa học của các bạn học
              sinh/sinh viên.
            </p>
          </div>
          <div>
            <h2>Thông Tin Liên Hệ</h2>
            <p id="linkpage" style={{ display: "flex", gap: 10 }}>
              <i
                style={{ fontSize: "12px !important" }}
                className="bi bi-facebook"
              />
              <a href="https://www.facebook.com/ubtechvietnam/" target="_blank">
                Fanpage: UBTECH AI &amp; Robotics Việt Nam.
              </a>
            </p>
            <p style={{ display: "flex", gap: 10 }}>
              <i
                style={{ fontSize: "12px !important" }}
                className="bi bi-envelope-fill"
              />
              Email:
              <a
                href="/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="8edce1ece1c9cee7fefefaebede6a0ede1e3a0f8e0"
              >
                [email&nbsp;protected]
              </a>
              .
            </p>
            <p style={{ display: "flex", gap: 10 }}>
              <i
                style={{ fontSize: "12px !important" }}
                className="bi bi-telephone-fill"
              />
              Phone: 0915 594 103 (Hotline: UBTECH Việt Nam).
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                padding: 10,
                backgroundColor: "white",
                width: "80%",
                marginTop: 20
              }}
            >
              <img src="https://lh3.googleusercontent.com/d/1Py3V8hJbbo1Ev-N9qmjpRr9hFLcRB-hC" />
            </div>
          </div>
        </div>
        <div className="bottom_ft">
          <p style={{ margin: 0, padding: "0 16px" }}>
            @2024 Được tổ chức bởi IPPTECH, UBTECH và Trường Đại học Văn Lang để tạo
            ra cuộc thi (ROBOG 2024) Đấu trường AI đầu tiên tại Việt Nam sử dụng
            robot hình người.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
