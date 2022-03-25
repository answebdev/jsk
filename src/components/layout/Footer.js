import classes from '../../styles/Footer.module.css';

const Footer = () => (
  <div className='footer'>
    <div className={classes.Footer}>
      {/* <span className={classes.FooterText}>
        &copy; Copyright 2022 Jisun Kim
      </span> */}
      <span className={classes.FooterText}>
        &copy; 2022 Jisun Kim | Website by{' '}
        <a
          style={{ textDecoration: 'none' }}
          className={classes.Link}
          href='https://adolfschmuck.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          Adolf Schmuck
        </a>
      </span>
    </div>
  </div>
);

export default Footer;
