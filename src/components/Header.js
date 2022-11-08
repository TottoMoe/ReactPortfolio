import "../style/Header.css";
import Card from 'react-bootstrap/Card';
import HeaderPhoto from '../assets/p1.jpg';

function Header() {
  return (
    <div className="header__container">
      <Card.Img src={HeaderPhoto} alt="Card image" />
      <Card.ImgOverlay className="header__content">
        <h5>Hello I'm</h5>
        <h1>Jenny Deng</h1>
        <h5 className="text-light">Fullstack Developer</h5>
      </Card.ImgOverlay>
    </div>
  );
}

export default Header;
