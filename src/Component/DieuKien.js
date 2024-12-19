import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function DieuKien() {
  return (
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
            <a href="https://drive.google.com/file/d/1wlqggn8xD0Nayj-7vY0RonP3Oe9aU8CA/preview"  target="_blank"  rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <i className="bi bi-youtube"></i></a>
              <p >Video minh họa đề thi chung kết</p>
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
                rel="noreferrer"
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
            <a href="https://drive.google.com/file/d/1vIBg5cQ9KwG_ILw_DncOvsBfSvoeaLYP/preview"  target="_blank"  rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <i className="bi bi-youtube"></i></a>
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
                target="_blank" rel="noreferrer"
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
            <a href="https://drive.google.com/file/d/1umW2r3VMZOUPFvMkNd3BztCOxeHCE-Tv/preview"  target="_blank"  rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <i className="bi bi-youtube"></i></a>
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
                target="_blank" rel="noreferrer"
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
            <a href="https://drive.google.com/file/d/147-GxDfnohuCWz6SoqAtiKpBPOsgVYwy/preview"  target="_blank"  rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <i className="bi bi-youtube"></i></a>
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
                target="_blank" rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfY6wZCTlaDCpX0vbRdK8zGEsr4TOr0iGqOXP7MYvPm-WAGJg/viewform"
              >
                Đăng ký ngay
              </a>
            </div>
          </div>
        </div>
        <div className="submitExam">
          <a href='https://drive.google.com/file/d/1GxYlSPxiEetecaA6Ab_rgSxfciumEYFZ/view' style={{ textDecoration: 'none', color: 'inherit' }}>
          <button id="button_submitExam">Hướng dẫn nộp bài sơ loại</button></a>
        </div>
      </div>
    </div>
  </section>
);
}

export default DieuKien;