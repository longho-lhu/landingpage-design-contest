import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function QandA() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    // Toggle câu trả lời hiển thị khi câu hỏi được nhấn
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: "Tham dự có mất chi phí không?", answer: "Việc đăng ký tham gia cuộc thi hoàn toàn miễn phí." },
    { question: "Cần kiến thức gì để tham gia cuộc thi không?", answer: "Để tham gia cuộc thi hiệu quả, thí sinh nên chuẩn bị một số kiến thức cơ bản về tư duy lập trình." },
    { question: "Cần chuẩn bị những gì để tham gia cuộc thi?", answer: "Để tham gia cuộc thi, thí sinh cần liên hệ với 1 giáo viên hướng dẫn để được đăng ký và hướng dẫn trong suốt cuộc thi." },
    { question: "Tôi muốn có thêm thông tin thì xem thêm ở đâu?", answer: "Để có thêm thông tin về cuộc thi, vui lòng xem thêm tại các kênh thông tin sau:\n- Website UBTECH Việt Nam: https://ubtechvietnam.com\n- Mạng xã hội Facebook (UBTECH Việt Nam): https://www.facebook.com/ubtechvietnam/" },
    { question: "Quy mô một nhóm tham dự gồm bao nhiêu người?", answer: "Mỗi bảng thi có quy định quy mô thí sinh tham gia ở mỗi đội. Cụ thể, bảng A và bảng B quy định mỗi đội phải có đúng 2 thí sinh. Bảng C và bảng C++ Đặc biệt quy định mỗi đội có từ 2 đến 6 thí sinh." },
    { question: "Tôi có thể tham gia cuộc thi với nhiều lĩnh vực được không?", answer: "Thí sinh chỉ có thể tham gia 1 đội thi, ngoại trừ trường hợp thí sinh có thể tham gia đồng thời 1 đội ở bảng C và 1 đội ở bảng C++ Đặc biệt.\nGiáo viên hướng dẫn có thể tham gia nhiều đội thi." },
    { question: "Chưa có kinh nghiệm có thể tham gia cuộc thi được không?", answer: "Thí sinh chưa có kinh nghiệm vẫn có thể tham gia cuộc thi. Trong suốt thời gian tổ chức cuộc thi, Ban tổ chức có sắp xếp các buổi tập huấn trực tuyến về nội dung cuộc thi và các thiết bị có thể sử dụng trong cuộc thi. Ngoài ra, Ban tổ chức cũng sắp xếp các buổi trải nghiệm trực tiếp các thiết bị tại TPHCM." },
    { question: "Làm sao biết đã đăng ký thành công?", answer: "Sau khi đăng ký, đội thi sẽ nhận được xác nhận qua email." },
    { question: "Có thể thay đổi thành viên sau khi đăng ký không?", answer: "Đội thi có thể thay đổi thành viên qua email sau khi đăng ký, miễn là trước hạn chót đăng ký." },
    { question: "Các thành viên trong đội có thể khác trường học hoặc cấp lớp không?", answer: "Các thành viên trong đội có thể khác trường học hoặc cấp lớp, miễn là trong nhóm tuổi (theo năm sinh) quy định." },
    { question: "Tôi không ở TPHCM thì có thể tham gia cuộc thi được không?", answer: "Cuộc thi được tổ chức quy mô toàn quốc nên thí sinh ở bất kì tỉnh thành nào cũng có thể tham gia cuộc thi." },
    { question: "Cuộc thi có tính chất quốc tế không?", answer: "Bên cạnh việc trao các giải thưởng ở cấp độ quốc gia, cuộc thi cũng nhằm tuyển chọn các đội xuất sắc đại diện Việt Nam tham gia vòng chung kết cuộc thi ROBOG 2024 thế giới dự kiến tại Thẩm Quyến vào cuối tháng 11/2024. Chính vì thế, các quy định và nội dung cuộc thi toàn quốc cũng bám sát với cuộc thi ROBOG 2024 thế giới." },
    { question: "Ban tổ chức có hỗ trợ gì cho các đội thi quốc tế không?", answer: "Mỗi đội đạt kết quả cao nhất của từng bảng sau bài kiểm tra tập huấn thi quốc tế sẽ được tài trợ toàn bộ chi phí (di chuyển và ăn ở) cho chuyến thi quốc tế." },
    { question: "Đội thi chưa tìm được giáo viên hướng dẫn thì thế nào?", answer: "Đội thi liên hệ Ban tổ chức để được hướng dẫn hỗ trợ cụ thể." },
    { question: "Giáo viên chưa có chứng chỉ giáo viên chương trình giáo dục AI Robotics hoặc huấn luyện viên của UBTECH thì thế nào?", answer: "Giáo viên liên hệ Ban tổ chức để được hướng dẫn hỗ trợ cụ thể." },
    { question: "Thí sinh chưa tìm đủ thành viên để tham gia đội thi thì thế nào?", answer: "Thí sinh liên hệ Ban tổ chức để được hướng dẫn hỗ trợ cụ thể." },
    { question: "Để đội thi được vào Vòng chung kết thì cần đạt kết quả thế nào ở Vòng sơ loại?", answer: "Để được vào Vòng chung kết, đội thi cần đạt kết quả trên 50% điểm số của đội thi đạt điểm cao nhất tương ứng mỗi bảng ở Vòng sơ loại." },
  ];

  return (
    <section id="question">
      <div className="vam_wrap2">
        <h3 className="vam_title">Q&amp;A: Một số câu hỏi thường gặp</h3>
        {questions.map((item, index) => (
          <div key={index}>
            <div
              className={`question_div ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <p className="vam_content1">{item.question}</p>
              <i className={`bi ${openIndex === index ? 'bi-arrow-down-circle-fill' : 'bi-arrow-up-circle-fill'}`} />
            </div>
            {openIndex === index && (
              <div className="question_load">
                <p className="vam_content1">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default QandA;
