import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer(prop) {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Let's connect</Card.Title>
        <Card.Text>
          jennydhj@gmail.com
        </Card.Text>

        <div className="social-icon">
          <a href="flex justify-between items-center w-full text-white">
            <FaLinkedin />
          </a>
          <a href="flex justify-between items-center w-full text-white">
            <FaGithub />
          </a>
          <a href="https://stackoverflow.com/users/19169363/jd12345">
            <FaStackOverflow />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Footer;
