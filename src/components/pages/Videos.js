import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import classes from '../../styles/Videos.module.css';

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
      </div>
    </div>
  );
};

export default Videos;
