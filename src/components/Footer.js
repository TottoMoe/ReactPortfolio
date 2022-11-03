import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Footer(prop) {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        
      </Card.Body>
    </Card>
  );
}

export default Footer;
