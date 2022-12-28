import Carousel from "react-bootstrap/Carousel";
import hero1 from "./../assets/images/hero1.png";
import hero2 from "./../assets/images/hero2.png";
import hero3 from "./../assets/images/hero3.png";
import hero4 from "./../assets/images/hero4.png";
import hero5 from "./../assets/images/hero5.png";

const Jumbo = () => {
  return (
    <Carousel id="jumbo-tron">
      <Carousel.Item>
        <img className="d-block w-100" src={hero1} alt="First slide" />

        {/* <Carousel.Caption>     // INI CONTOH BUAT MASUKIN CAPTION DI JUMBOTRON
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={hero2} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={hero3} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={hero4} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={hero5} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Jumbo;
