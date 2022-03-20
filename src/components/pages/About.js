import { Helmet } from 'react-helmet';
import { Row, Col, Image } from 'react-bootstrap';
import hk from '../../img/hk.jpg';
import classes from '../../styles/About.module.css';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Jisun Kim | About</title>
      </Helmet>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <h1 className={classes.LeadTitle}>
              <strong>Jisun Kim</strong>
            </h1>
          </Col>
        </Row>

        <Row>
          {/* <Col  md={5}> */}
          <Col lg={5} md={12}>
            <p className={classes.SubTitle}>Seoul, Korea</p>
            <p className={classes.MainText}>
              Jisun Kim is a model who dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </Col>

          {/* <Col md={1}></Col> */}
          <Col lg={1} md={12}></Col>

          {/* <Col md={6}> */}
          <Col lg={6} md={12}>
            <Image className={classes.MainImage} src={hk} fluid />
          </Col>
        </Row>

        {/* <br />

        <hr />

        <br />

        <Row>
          <Col lg={5} md={12}>
            <iframe
              style={{ overflow: 'hidden' }}
              class='embeddedObject shadow resizable'
              name='embedded_content'
              scrolling='no'
              frameborder='0'
              type='text/html'
              src='https://www.screencast.com/users/britvaica/folders/Camtasia%20Studio/media/512b2ba6-7a3b-4a49-84a7-145cac2d5f00/embed'
              width='512'
              height='288'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              title='Standard Chartered Bank 2021 Digital Wealth'
            ></iframe>
          </Col>

          <Col lg={1} md={12}></Col>

          <Col lg={6} md={12}>
            <h3>Standard Chartered Bank 2021 Digital Wealth</h3>
            <p className={classes.MainText}>
              Wafer sweet cookie wafer jelly beans marshmallow. Soufflé marzipan
              liquorice cotton candy oat cake toffee marzipan apple pie jelly.
              Tootsie roll cake powder candy gummies jujubes ice cream cupcake.
              Fruitcake pie bonbon cake jelly beans cookie jelly-o liquorice
              macaroon. Bear claw ice cream chocolate cake jelly caramels.
              Marshmallow tart topping marshmallow jelly. Cotton candy macaroon
              shortbread soufflé soufflé jelly gummi bears pudding.
            </p>
          </Col>
        </Row> */}
      </div>
    </div>
  );
};

export default About;
