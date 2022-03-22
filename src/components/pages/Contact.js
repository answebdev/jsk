import { Helmet } from 'react-helmet';
import { Row, Col, Form, Button } from 'react-bootstrap';
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

        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <h3>
              <strong>Contact Form</strong>
            </h3>
            <hr />
            <div className='content'>
              <p>
                For ideas or suggestions on how the site can be improved, or if
                you spot a bug or an error, feel free to send a message here.
              </p>
              <Form
                action='/success'
                name='jisun-portfolio-contact-form'
                method='POST'
                data-netlify='true'
              >
                <input
                  type='hidden'
                  name='form-name'
                  value='jisun-portfolio-contact-form'
                />
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='name'
                    name='name'
                    placeholder='Name'
                    required
                  />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    placeholder='email@example.com'
                    required
                  />
                  <Form.Text className='text-muted'>
                    Your email will never be shared with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId='exampleForm.ControlTextarea1'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as='textarea'
                    name='message'
                    rows='5'
                    required
                  />
                </Form.Group>
                <div className='field'>
                  <div data-netlify-recaptcha='true'></div>
                </div>
                <Button
                  className='actions'
                  variant='success'
                  type='submit'
                  value='Send Message'
                  id='submit-btn'
                >
                  Send Message
                </Button>
              </Form>
              <br />
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
