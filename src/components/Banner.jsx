import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/image/header-img.svg'
import TrackVisibility from 'react-on-screen'

function Banner()  {

  const toRotate = ['Web Developer', 'Web Designer', 'Software Engineer']
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(0)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      } else if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      }
    };
  
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}> 
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Pooja `} <span className="txt-rotate" data-period="1000" data-rotate='["Web Developer", "Web Designer", "UI/UX Designer"]'><span className="wrap">{text}</span></span></h1>
                    <p>Welcome to my corner of the web! I am a passionate web developer who crafts visually stunning and highly functional websites. With a keen eye for design and a knack for coding, I bring your digital dreams to life. Explore my portfolio and discover the art and science of web development. Let's turn your ideas into exceptional online experiences.</p>
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}> 
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };

  export default Banner;