import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const RegistrasiData = () => {
  return (
    <Container className="container-regist" fluid>
      <div className="form-regist">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nama Depan</Form.Label>
              <Form.Control type="email" placeholder="Masukan Nama Depan" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nama Belakang</Form.Label>
              <Form.Control type="email" placeholder="Masukan Nama Belakang" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukan email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Telephone</Form.Label>
              <Form.Control type="number" placeholder="Masukan Nomor" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Alamat</Form.Label>
            <Form.Control placeholder="Alamat" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Kota</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Provinsi</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>DKI Jakarta</option>
                <option>Jawa Barat</option>
                <option>Jawa Selatan</option>
                <option>Jawa Timur</option>
                <option>Sumatera</option>
                <option>Kalimantan</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Kode Pos</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="success"  >Registrasi</Button>
        </Form>
      </div>
    </Container>
  );
};

export default RegistrasiData;
