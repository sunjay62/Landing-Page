import { Container } from "react-bootstrap";
import fitur1 from "./../assets/images/fitur1.png";
import fitur2 from "./../assets/images/fitur2.png";
import fitur3 from "./../assets/images/fitur3.png";
import fitur4 from "./../assets/images/fitur4.png";
import fitur5 from "./../assets/images/fitur5.png";
import fitur6 from "./../assets/images/fitur6.png";

const Fitur = () => {
  return (
    <Container className="fitur-tag" fluid>
      <h1>Terkoneksi Dengan Internet Yang Tepat & Cepat</h1>
      <p>
        Kami provider internet dan wifi rumah yang memahami kebutuhan Anda. Kini
        bukan hanya internet yang cepat dan dengan fitur yang lengkap.
      </p>
      <div className="grid-container">
        <div className="item1">
          <p>
            <img src={fitur1} />
            100% Fiber Optic
          </p>
        </div>
        <div className="item2">
          <p>
            <img src={fitur2} />
            Modem WiFi
          </p>
        </div>
        <div className="item3">
          <p>
            <img src={fitur3} />
            Tanpa Kuota
          </p>
        </div>
        <div className="item4">
          <p>
            <img src={fitur4} />
            Premium Channel
          </p>
        </div>
        <div className="item5">
          <p>
            <img src={fitur5} />
            Video On Demand
          </p>
        </div>
        <div className="item6">
          <p>
            <img src={fitur6} />
            TV Apps
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Fitur;
