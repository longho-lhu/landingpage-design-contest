import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MucTieu() {
  return (
    
    <div className="introduce"
    style={{ position: "relative", paddingBottom: 80 }}>
    
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
);
}

export default MucTieu;