import { Container } from "react-bootstrap";
import Gopay from "./../assets/images/gopay.png";
import Shopee from "./../assets/images/shopee.png";
import Bca from "./../assets/images/bca.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="container-footer" fluid>
      <footer className="footer">
        <div className="footer-left">
          <h3>Payment Method</h3>
          <div className="credit-cards">
            <img src={Bca} />
            <img src={Gopay} />
            <img src={Shopee} />
          </div>
        </div>

        <div className="footer-center">
          <h3>ATHome Net</h3>
          <p className="alamat">
            <span className="maps">
              <FaMapMarkerAlt />
              &nbsp;&nbsp;&nbsp;&nbsp;Graha Mustika Ratu
            </span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jl Gatot Subroto No.74-75
            Lantai 10,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jakarta, DKI Jakarta 12870
          </p>
          <br />
          <br />
          <p>
            <FaPhoneAlt />
            &nbsp;&nbsp;: +62 896 7605 6762
          </p>
          <br />
          <br />
          <p>
            <FaMailBulk />
            &nbsp;&nbsp;: Sunannjaya@gmail.com
          </p>
          <br />
          <br />
          <p className="work-office">
            Visit Our Office : <br />
            Monday – Saturday 09 AM – 05 PM
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
