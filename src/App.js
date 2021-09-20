import './App.css';
import Particles from 'react-particles-js'
import logo from './shared/fianllogo14.jpg'
import { useEffect } from 'react'
import Lottie from 'react-lottie';
const SocialHandles = () => {
 
  return (
    <>
      <div className='row justify-content-center align-items-center mt-5 mb-5'>
        <a href="https://www.youtube.com/c/REYASALTO" target="_blank">
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_4uqozfit.json"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }} loop autoplay>
          </lottie-player></a>
        <a href="https://www.youtube.com/c/REYASALTO" target="_blank">
          <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_4uqozfit.json"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }} loop autoplay>
          </lottie-player></a>

      </div>
    </>
  )
}
const LinkTree = () => {
  return (
    <>
      <div className="context container h-100" style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}>

        <div className='row h-100 justify-content-center align-items-center'>
          <div class="col align-self-center">
            <img src={logo} alt="profile" className="profile-picture" />


            <div className="profile-name">REY ASALTO</div>
            <p>✨I am a Graphic Designer, Gamer, Motion Designer, Animator.But that’s just a part of it. Design is my life. It’s my five-star spa. It’s my roller-coaster. Not only that, but it’s something I do before going to bed, and something I can’t wait to do in the mornings. Without it, my world would be black and white.</p>
            <SocialHandles />
            <a href="https://www.youtube.com/c/REYASALTO" target="_blank" rel="noreferrer" className="links">YOUTUBE</a>
            <a href="https://www.instagram.com/rey_asalto_yt/?hl=en" target=" _blank" className="links">INSTAGRAM</a>
            <a href="https://twitter.com/reyasaltoyt?lang=en" target=" _blank" className="links">TWITTER</a>
            <a href="https://www.behance.net/reyasalto" target=" _blank" className="links">BEHANCE</a>
            <a href="https://reyasaltoyt.blogspot.com/" target=" _blank" className="links">WEBSITE</a>
            <a href="https://videohive.net/user/limitless_design_01" target=" _blank" className="links">VIDEOHIVE</a>
            <a href="https://dribbble.com/Rey-Asalto" target=" _blank" className="links">DRIBBLE</a>
            <a href="https://www.fiverr.com/akshay_arora_?up_rollout=true" target=" _blank" className="links">FIVERR</a>
            <a href="https://www.velosofy.com/user/REY%20ASALTO" target=" _blank" className="links">VELOSOFY</a>
            <a href="https://www.facebook.com/reyasaltoyt/" target=" _blank" className="links">FACEBOOK</a>

            <div className="bottom-text">MADE WITH 🧡 BY REY ASALTO</div>
          </div >
        </div>
      </div>


    </>

  )
}
function App() {
  useEffect(() => {
    window.oncontextmenu = (e) => {
      e.preventDefault();
    }
    window.ondragstart = (e) => {
      e.preventDefault();
    }
    window.onmousemove = (e) => {
      e.preventDefault();
    }
  }, [])
  return (
    <div className='container-fluid'>
      <Particles id='particles' height='100vh'
        params={{
          "particles": {
            "number": {
              "value": 150
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />

      <LinkTree />

    </div>
  );
}

export default App;
