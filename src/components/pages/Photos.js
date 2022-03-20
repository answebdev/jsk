import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import classes from '../../styles/Photos.module.css';

const Photos = () => {
  return (
    <div>
      <Helmet>
        <title>Jisun Kim | Photos</title>
      </Helmet>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <h1 className={classes.LeadTitle}>
              <strong>Photos</strong>
            </h1>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Photos;
