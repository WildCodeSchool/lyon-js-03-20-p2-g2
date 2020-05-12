import React, { Component } from 'react';
import '../style/about.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Footer from '../components/Footer';
import Header from '../components/Header';

class About extends Component {
  render () {
    return (
      <>
        <section className='about'>
          <Link className='back-home' id='ancre' to='/'><i class='fas fa-chevron-circle-left fa-3x' /></Link>
          <Header />
          <h1>About us</h1>
          <div className='our-story'>
            <h3>Our story</h3>
            <p className='paragraphs'>We are a team of 5 students at Wild Code School Lyon and we are following the Web Development program since March 2020.
            </p>
            <p className='paragraphs'>In order to answer our program, we are asked to launch 3 work projects during the 5 months. We decided then to launch WeatherSuggest in React.js.
            </p>
            <p className='paragraphs'>
              WeatherSuggest is a web application that will display the weather forecasts according to the users' preferences whether it be by geolocating or by choosing a position.
              Our aim is also to provide air quality indices in order to enrich the service we are willing to offer.
            </p>

            <p className='paragraphs'>After reading that, you could wonder what we suggest more than a traditionnal weather forecast app and what is our objective to launch such an application that we can find by thousands on the web.
            And we understand what we are wondering.
            </p>

            <p className='paragraphs'>
              But, WeatherSuggest is more than a weather forecasts application. We are thriving to deliver the best insights and advice to our users.
          To do that, we provide personalized content according to the weather.<br />
          Will it be raining tomorrow in London? No problem, we will tell you what to wear and what to do !
            </p>
          </div>

          <div className='team'>
            <h3>Our team</h3>
            <Container className='container-about'>
              <Row>
                <Col xs={6} md={4} className='team-card'>
                  <Image className='our_pics' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png' roundedCircle />
                  <h2 className='us'>Abdel</h2>
                  <p><strong>Abdel</strong> our Mister Weather is always ready to introduce the forecasts to come !</p>
                </Col>
                <Col xs={6} md={4} className='team-card'>
                  <Image className='our_pics' src={require('../images/nathan.png')} alt='Nathan' roundedCircle />
                  <h2 className='us'>Nathan</h2>
                  <p><strong>Nathan</strong> is our special correspondent for our special forecasts !</p>
                </Col>
                <Col xs={6} md={4} className='team-card'>
                  <Image className='our_pics' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png' roundedCircle />
                  <h2 className='us'>Ikram</h2>
                  <p><strong>Ikram</strong> will offer clothing suggestions and advice if you are willing to !</p>
                </Col>
                <Col xs={6} md={4} className='team-card'>
                  <Image className='our_pics' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png' roundedCircle />
                  <h2 className='us'>Armin</h2>
                  <p><strong>Armin</strong> is here tor receive all your suggestions and to work in order to improve the service we offer.</p>
                </Col>
                <Col xs={6} md={4} className='team-card'>
                  <Image className='our_pics' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png' roundedCircle />
                  <h2 className='us'>Camille</h2>
                  <p><strong>Camille</strong> will inform you about the air polution information and more to come.</p>
                </Col>
                <Col xs={6} md={4} className='team-card'>
                  <Image className='our_pics' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png' roundedCircle />
                  <h2 className='us'>Our users</h2>
                  <p>Last but not least, we consider each user to be part of our team. Indeed, we are happy to receive you on our website and to receive all your suggestions.</p>
                </Col>
              </Row>
            </Container>

          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default About;
