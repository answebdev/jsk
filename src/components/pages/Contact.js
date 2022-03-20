import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import classes from '../../styles/Contact.module.css';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Jisun Kim | Contact</title>
      </Helmet>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <h1 className={classes.LeadTitle}>
              <strong>Contact</strong>
            </h1>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
