import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import classes from '../../styles/Videos.module.css';

// import jisun from '../../img/jisun.jpg';

// Video Players:
// https://video-react.js.org/
// https://www.npmjs.com/package/react-player
// https://cookpete.com/react-player/

const Videos = () => {
  return (
    <div>
      <Helmet>
        <title>Jisun Kim | Videos</title>
      </Helmet>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <h1 className={classes.LeadTitle}>
              <strong>Videos</strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className={classes.MainText}>
              Bacon ipsum dolor amet beef ham hock corned beef, shank strip
              steak hamburger jowl alcatra picanha biltong doner ribeye
              capicola.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {/* Horizontal Scrollbar: Source:
            https://stackoverflow.com/questions/30507510/how-to-display-image-horizontally-in-scroll-bar
            Fiddle: http://jsfiddle.net/suraj_mewada/3zgmfkx0/ */}

            <div className={classes.Wrapper}>
              <div className={classes.Slider}>
                <div
                  className={classes.FirstSliderImage}
                  style={{ display: 'inline' }}
                >
                  <iframe
                    style={{ overflow: 'hidden' }}
                    class='embeddedObject shadow resizable'
                    name='embedded_content'
                    scrolling='no'
                    frameborder='0'
                    type='text/html'
                    src='https://www.screencast.com/users/britvaica/folders/Camtasia%20Studio/media/512b2ba6-7a3b-4a49-84a7-145cac2d5f00/embed'
                    width='800'
                    height='450'
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    title='Standard Chartered Bank 2021 Digital Wealth'
                  ></iframe>
                </div>

                <div
                  className={classes.SliderImage}
                  style={{ display: 'inline' }}
                >
                  <iframe
                    style={{ overflow: 'hidden' }}
                    class='embeddedObject shadow resizable'
                    name='embedded_content'
                    scrolling='no'
                    frameborder='0'
                    type='text/html'
                    src='https://www.screencast.com/users/britvaica/folders/Camtasia%20Studio/media/512b2ba6-7a3b-4a49-84a7-145cac2d5f00/embed'
                    width='800'
                    height='450'
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    title='Standard Chartered Bank 2021 Digital Wealth'
                  ></iframe>
                </div>

                <div
                  className={classes.SliderImage}
                  style={{ display: 'inline' }}
                >
                  <iframe
                    style={{ overflow: 'hidden' }}
                    class='embeddedObject shadow resizable'
                    name='embedded_content'
                    scrolling='no'
                    frameborder='0'
                    type='text/html'
                    src='https://www.screencast.com/users/britvaica/folders/Camtasia%20Studio/media/512b2ba6-7a3b-4a49-84a7-145cac2d5f00/embed'
                    width='800'
                    height='450'
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    title='Standard Chartered Bank 2021 Digital Wealth'
                  ></iframe>
                </div>

                <div
                  className={classes.LastImage}
                  style={{ display: 'inline' }}
                >
                  <iframe
                    style={{ overflow: 'hidden' }}
                    class='embeddedObject shadow resizable'
                    name='embedded_content'
                    scrolling='no'
                    frameborder='0'
                    type='text/html'
                    src='https://www.screencast.com/users/britvaica/folders/Camtasia%20Studio/media/512b2ba6-7a3b-4a49-84a7-145cac2d5f00/embed'
                    width='800'
                    height='450'
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    title='Standard Chartered Bank 2021 Digital Wealth'
                  ></iframe>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Videos;
