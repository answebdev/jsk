import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import classes from '../../styles/Home.module.css';

// Adapted from: https://codepen.io/akash-1618/pen/rNwxOWX

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Jisun Kim</title>
        <style type='text/css'>{`        
        .navbar{
          display: none;
        }
    `}</style>
      </Helmet>
      <div className={classes.Landing}>
        <div className={classes.Bg}></div>
        <div className={`${classes.Container} ${classes.LandingFlex}`}>
          <h1 className={classes.Title}>Jisun Kim</h1>
          <div className={classes.Description}>Model | Traveler</div>
          <div className={classes.ButtonContainer}>
            <Link className={classes.Button} to='/about'>
              Details
            </Link>
            <Link className={classes.Button} to='/contact'>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
