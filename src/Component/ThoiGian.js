import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ThoiGian() {
  return (
    <div className='ThoiGian'>

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
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
      </div>
    </div>
  </section>
  </div>
);
}

export default ThoiGian;