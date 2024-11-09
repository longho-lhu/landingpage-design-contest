import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function QandA() {
  return (
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
);
}

export default QandA;