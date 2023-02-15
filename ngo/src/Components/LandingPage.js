import dividerTop from "../images/divider-top.png"
import dividerBottom from "../images/divider-bottom.png"
import ButtonComponent from './ButtonComponent';

function LandingPage() {
    return (
      <section className='landing-page'>
        <img src={dividerTop} alt="NOT FOUND" width="100%"/>
        <div>
          <h1>MINE ACTION</h1>
          <p>Makes the world safer</p>
          <ButtonComponent />
        </div>
        <img src={dividerBottom} alt="NOT FOUND" width="100%"/>
      </section>
    )
  }
  
  export default LandingPage;