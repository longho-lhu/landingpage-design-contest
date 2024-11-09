import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ThietBi() {
  return (
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
);
}

export default ThietBi;