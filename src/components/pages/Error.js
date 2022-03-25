import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import logo from '../../img/logo.png';
import classes from '../../styles/Error.module.css';

const Error = () => {
  return (
    <div className={classes.Error}>
      <Helmet>
        <title>Jisun Kim | Error</title>
        <style type='text/css'>{`
        .navbar,
        .footer {
          display: none;
        }

        body {
          background-color: var(--primaryDark);
          color: #ffffff;
          letter-spacing: 1px;
          height: 100%;
        }
    `}</style>
      </Helmet>

      <div className={classes.CenteredError}>
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
            y: 0,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <h1 className={`${classes.TextCenter} ${classes.Msg}`}>
            404 Page Not Found
          </h1>
          <h1 className={classes.TextCenter}>
            <div>
              <img className={classes.Logo} src={logo} alt='Logo' />
            </div>
          </h1>

          <p className={classes.TextCenter}>
            <div className={classes.BtnDiv}>
              <Link className={classes.Safety} to='/'>
                Home
              </Link>
            </div>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Error;
