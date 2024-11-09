import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function GiaiThuong() {
  return (
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
        {/*  */}
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
              alt="Vòng sơ loại"
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
                <strong style={{ fontSize: 34 }}>03</strong> Giải Nhất
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
    
    {/* Vòng chung kết */}
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
              alt="Vòng chung kết"
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
                      alt="Giải Nhất"
                    />
                    <strong style={{ fontSize: 34 }}>03</strong> Giải Nhất
                  </span>
                  <p className="chuthichall">- Mỗi giải -</p>
                  <h3 style={{ fontSize: 34 }}>60.000.000 VNĐ</h3>
                  <p style={{ textAlign: "center" }}>
                    Mỗi đội 2 cái đồng hồ đeo tay của thương hiệu STORM và DM. Trị giá 5.000.000 đ/cái.
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
                  <strong>09</strong> giải khuyến khích: mỗi giải 2 set quà của IPPTR (1 set gồm 1 Bình nước giữ nhiệt và 1 Sạc dự phòng). Trị giá 900.000 đ/set.
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
                      alt="Giải Đặc Biệt"
                    />
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
);
}

export default GiaiThuong;