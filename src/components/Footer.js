import Card from "react-bootstrap/Card";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Let's connect</Card.Title>
        <Card.Text>jennydhj@gmail.com</Card.Text>

        <div className="social-icon">
          <a href="https://www.linkedin.com/in/jennyhjdeng/" target="__blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/TottoMoe" target="__blank">
            <FaGithub />
          </a>
          <a
            href="https://stackoverflow.com/users/19169363/jd12345"
            target="__blank"
          >
            <FaStackOverflow />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Footer;
