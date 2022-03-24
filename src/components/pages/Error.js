import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from '../../img/logo.png';
import classes from '../../styles/Error.module.css';

const Error = () => {
  return (
    <div className={classes.Error}>
      <Helmet>
        <title>Jisun Kim | Error</title>
        <style type='text/css'>{`
        .navbar {
          display: none;
        }

        body {
          letter-spacing: 1px;
          height: 100%;
        }
    `}</style>
      </Helmet>
      <header className={classes.AppHeader}>
        <img src={logo} className={classes.AppLogo} alt='logo' />
        <br />
        <p>404 Page Not Found</p>
        <p className={classes.Message}>
          Sorry, the page you are looking for
          <br />
          does not exist.
        </p>
        <div className={classes.Buttons}>
          <Link className={classes.Safety} to='/'>
            Home
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Error;
