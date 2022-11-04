import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaStackOverflow } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com">
        <BsLinkedin />
      </a>
      <a href="https://linkedin.com">
        <FaGithub />
      </a>
      <a href="https://linkedin.com">
        <FaStackOverflow />
      </a>
    </div>
  );
}

export default HeaderSocials