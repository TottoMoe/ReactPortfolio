import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import './Contact.css';

function Contact(prop) {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <Form>
          <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="Your Full Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="name@example.com" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={7} placeholder="Your Message" required/>
          </Form.Group>
          <Button type="submit" className="btn btn-primary">
            Send Message
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default Contact;
