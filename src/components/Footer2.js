import { Container } from "react-bootstrap";
import Gopay from "./../assets/images/gopay.png";
import Shopee from "./../assets/images/shopee.png";
import Bca from "./../assets/images/bca.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

const Footer2 = () => {
  return (
    <Container className="body-container" fluid>
      <footer>
        <div className="container">
          <div className="sec aboutus">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              inventore labore aspernatur exercitationem fugit! Porro architecto
              nihil illo! Sequi, distinctio.
            </p>
            <ul className="sci">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Shop</h2>
            <ul>
              <li>
                <a href="#">Man</a>
              </li>
              <li>
                <a href="#">Woman</a>
              </li>
              <li>
                <a href="#">Children</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
              <li>
                <a href="#">Clothing</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2>Contact Us</h2>
            <ul className="info">
              <li>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span>
                  Graha Mustika Ratu
                  <br />
                  Jl Gatot Subroto No.74-75 Lantai 10,
                  <br />
                  Jakarta, DKI Jakarta 12870
                </span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-phone-volume"></i>
                </span>
                <p>
                  <a href="tel:+6289676056762">+62 896 7605 6762</a>
                  <br />
                  <a href="tel:+6289676056762">+62 896 7605 6762</a>
                </p>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <p>
                  <a href="mailto:sunannjaya@gmail.com">Sunannjaya@gmail.com</a>
                  <br />
                  <a href="mailto:sunannjaya@gmail.com">Sunanj57@gmail.com</a>
                  <br />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div class="copyrightText">
        Copyright © 2022 ATHome Net All Right Reserved
      </div>
      <script
        src="https://kit.fontawesome.com/03920cb664.js"
        crossorigin="anonymous"
      ></script>
    </Container>
  );
};

export default Footer2;
