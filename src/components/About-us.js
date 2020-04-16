import React, { Component } from 'react';
import '../style/About-us.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class About extends Component {
  render () {
    return (
      <div className='about'>
        <h1>About us</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at autem dolorem impedit natus quis rem temporibus voluptatem. Assumenda beatae cumque inventore neque nihil nisi pariatur, ut vel!</p>

        <h3>Our team</h3>


        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" roundedCircle />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at autem dolorem impedit natus quis rem temporibus voluptatem.</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" roundedCircle />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at autem dolorem impedit natus quis rem temporibus voluptatem.</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" roundedCircle />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at autem dolorem impedit natus quis rem temporibus voluptatem.</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" roundedCircle />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at autem dolorem impedit natus quis rem temporibus voluptatem.</p>
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" roundedCircle />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto at autem dolorem impedit natus quis rem temporibus voluptatem.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
