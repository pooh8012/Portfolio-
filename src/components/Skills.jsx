import { Carousel, Col, Container, Row } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css'
import meter1 from '../assets/image/meter1.svg'
import meter2 from '../assets/image/meter2.svg'
import meter3 from '../assets/image/meter3.svg'
import arrow1 from '../assets/image/arrow1.svg'
import arrow2 from '../assets/image/arrow2.svg'
import colorSharp from '../assets/image/color-sharp.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Skills () {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skills-bx'>
              <h2>Skills</h2>
              <p>
                With a keen eye for design and a strong command of programming
                languages and frameworks, I specialize in creating websites that
                not only look stunning but also provide seamless user
                experiences. Whether it's front-end development with HTML, CSS,
                and JavaScript or back-end work using technologies like Node.js
                and databases, I have the skills and creativity to bring your
                web projects to life. Let's collaborate to turn your ideas into
                beautifully designed and responsive websites that engage and
                captivate your audience
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >
                <Carousel.Item>
                  <img src={meter1} alt='' />
                  <h5>Web Development</h5>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={meter2} alt='' />
                  <h5>Brand Identity</h5>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={meter3} alt='' />
                  <h5>Web Development</h5>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={meter1} alt='' />
                  <h5>Web Development</h5>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt='' />
    </section>
  )
}

export default Skills
