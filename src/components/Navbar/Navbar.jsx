import css from "./navbar.module.css";
import items from "./items";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const elements = items.map(({ id, text, link }) => (
      <li key={id}>
        <NavLink className={css.link} to={link}>
          {text}
        </NavLink>
      </li>
    ));

    return (
        <ul className={css.menu}>
            {elements}
        </ul>
    )
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};