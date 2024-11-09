import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import MucTieu from './MucTieu.js';
import DieuKien from './DieuKien.js';
import ThongDiep from './ThongDiep.js';
import ThietBi from './ThietBi.js';
import GiaiThuong from './GiaiThuong.js';
import ThoiGian from './ThoiGian.js';
import DoiTac from './DoiTac.js';
import QandA from './QandA.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
        <Header></Header>
        <MucTieu></MucTieu>
        <DieuKien></DieuKien>
        <ThongDiep></ThongDiep>
        <ThietBi></ThietBi>
        <GiaiThuong></GiaiThuong>
        <ThoiGian></ThoiGian>
        <DoiTac></DoiTac>
        <QandA></QandA>
        <Footer></Footer>

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
                      <a target="_blank" rel="noreferrer" href=""
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
     </div>
  );
}

export default App;
