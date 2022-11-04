import CTA from './CTA';
import HeaderSocial from './HeaderSocials';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jenny Deng</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        {/* <CTA /> */}
        <HeaderSocial />

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
