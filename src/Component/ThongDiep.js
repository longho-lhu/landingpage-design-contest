import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ThongDiep() {
  return (
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
);
}

export default ThongDiep;