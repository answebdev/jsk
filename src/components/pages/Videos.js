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
                  className={classes.FirstSliderVideo}
                  style={{ display: 'inline' }}
                >
                  <iframe
                    style={{ overflow: 'hidden' }}
                    class='embeddedObject shadow resizable'
                    name='embedded_content'
                    scrolling='no'
                    frameborder='0'
                    type='text/html'
                    src='https://www.screencast.com/users/britvaica/folders/Camtasia%20Studio/media/01abcdef-3acf-4a81-9d2b-5213fe8f7679/embed'
                    width='800'
                    height='450'
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    title='Osaka'
                  ></iframe>
                </div>

                <div
                  className={classes.SliderVideo}
                  style={{ display: 'inline' }}
                >
                  <iframe
                    style={{ overflow: 'hidden' }}
                    class='embeddedObject shadow resizable'
                    name='embedded_content'
                    scrolling='no'
                    frameborder='0'
                    type='text/html'
                    src='https://www.screencast.com/users/britvaica/folders/Camtasia%20Studio/media/6fcd3393-5594-4ae9-811f-5850be0cd3ab/embed'
                    width='800'
                    height='450'
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    title='Top Gear Korea'
                  ></iframe>
                </div>

                <div
                  className={classes.SliderVideo}
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
                  className={classes.LastSliderVideo}
                  style={{ display: 'inline' }}
                >
                  <iframe
                    style={{ overflow: 'hidden' }}
                    class='embeddedObject shadow resizable'
                    name='embedded_content'
                    scrolling='no'
                    frameborder='0'
                    type='text/html'
                    src='https://www.screencast.com/users/britvaica/folders/Camtasia%20Studio/media/68eefa8a-dfae-4227-8852-3629fcf86901/embed'
                    width='800'
                    height='450'
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    title='NS Home Shopping'
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
