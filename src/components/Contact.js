import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

function Contact(prop) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
