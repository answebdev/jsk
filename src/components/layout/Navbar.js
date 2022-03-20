import { Link } from 'react-router-dom';
import classes from '../../styles/Navbar.module.css';

const Navbar = () => (
  <div className='navbar'>
    <header className={classes.Navbar}>
      <div className={`${classes.NavbarTitle} ${classes.NavbarItem}`}>
        <div>
          <span>Jisun Kim</span>
        </div>
      </div>
      <ul>
        <li className={classes.NavbarItem}>
          <Link className={classes.NavLink} to='/'>
            Home
          </Link>
        </li>
        <li className={classes.NavbarItem}>
          <Link className={classes.NavLink} to='/about'>
            About
          </Link>
        </li>
        <li className={classes.NavbarItem}>
          <Link className={classes.NavLink} to='/contact'>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  </div>
);

export default Navbar;
