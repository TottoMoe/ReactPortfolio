import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaStackOverflow } from 'react-icons/fa'
import "../style/HeaderSocials.css";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/jennyhjdeng/" target="__blank">
        <BsLinkedin />
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
  );
}

export default HeaderSocials