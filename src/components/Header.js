import "../style/Header.css";
import Card from 'react-bootstrap/Card';
import HeaderPhoto from '../assets/p1.jpg';

// function Header() {
//   return (
//     <header>
//       <div className="bg-dark text-white">
//         <Card.Img src="./airblloon1.jpg" alt="Card image" />
//         <Card.ImgOverlay>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//             This is a wider card with supporting text below as a natural lead-in
//             to additional content. This content is a little bit longer.
//           </Card.Text>
//           <Card.Text>Last updated 3 mins ago</Card.Text>
//         </Card.ImgOverlay>
//       </div>
//     </header>
//   );
// }

// export default Header;
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
