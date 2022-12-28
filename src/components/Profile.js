import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Foto from "./../assets/images/image-profile.png";
import upto from "./../assets/images/home.png";
import dedicated from "./../assets/images/gedung.png";
import broadband from "./../assets/images/pabrik.png";

const Profile = () => {
  return (
    <Container className="container-profile" fluid>
      <CardGroup>
        <Card id="image-profile">
          <Card.Body>
            <Card.Title id="h2">Data Centre</Card.Title>
            <Card.Img src={Foto} />
          </Card.Body>
        </Card>

        <Card id="company-profile">
          <Card.Body>
            <Card.Title id="h1">ATHome Net</Card.Title>
            <Card.Text id="company-text">
              Adalah salah satu Internet Service Provider yang mana telah
              berdiri sejak tahun 2007 dibawah manajemen PT. Remala Abadi. Kami
              melayanai kebutuhan Akses Internet, Network & IT Solution yang
              menjadikan sebuah layanan Managed Services yang didukung dengan
              sumber daya manusia yang profesional dan dukungan infrastruktur
              jaringan yang handal yang berupa jaringan Fiber Optic maupun
              Wireless yang menggunakan teknologi terbaru.
              <br />
              <br />
              Dengan selalu berfikir kreatif dan inovatif serta yakin dan
              optimis untuk dapat memberikan layanan serta solusi yang tepat,
              handal dan tentunya efektif dan efisien.
            </Card.Text>
          </Card.Body>
          <Button variant="success">About Us</Button>{" "}
        </Card>
      </CardGroup>

      <CardGroup>
        <Card id="dedicated">
          <Card.Img variant="top" src={dedicated} />
          <Card.Body>
            <Card.Title id="title-paket">Paket Dedicated</Card.Title>
            <Card.Text id="text-paket">
              Layanan internet dedicated untuk perusahaan/corporate dalam
              memenuhi kebutuhan akses internet 24 jam ke internet global dengan
              alokasi bandwidth dedicated (1:1)
            </Card.Text>
          </Card.Body>
          <Button variant="success" className="btn-card">
            Lihat Detail
          </Button>
        </Card>
        <Card id="broadband">
          <Card.Img variant="top" src={broadband} />
          <Card.Body>
            <Card.Title id="title-paket">Paket Broadband</Card.Title>
            <Card.Text id="text-paket">
              Layanan Internet dengan biaya lebih terjangkau dengan dukungan
              Fiber Optic dan teknologi telekomunikasi terbaru yang bersifat
              shared network
            </Card.Text>
          </Card.Body>
          <Button variant="success" className="btn-card">
            Lihat Detail
          </Button>
        </Card>
        <Card id="upto">
          <Card.Img variant="top" src={upto} />
          <Card.Body>
            <Card.Title id="title-paket">Paket Up To</Card.Title>
            <Card.Text id="text-paket">
              Layanan Internet dengan biaya yang cukup murah dan terjangkau
              dengan dukungan FTTH dan teknologi telekomunikasi terbaru untuk
              Internet di dalam rumah yang bersifat shared network
            </Card.Text>
          </Card.Body>
          <Button variant="success" className="btn-card">
            Lihat Detail
          </Button>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Profile;
