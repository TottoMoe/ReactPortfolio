import CV from '../../assets/Jenny_Deng_Resume_SD.pdf'
import './Resume.css'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-secondary">
        Download CV
      </a>
      {/* <a href='#contact' className='btn btn-primary'>Let's Talk</a> */}
    </div>
  );
}

export default CTA;
