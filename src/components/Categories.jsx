import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory, active, setActive, isMobile }) {

  return (
    <div className={active && isMobile ? 'categories__active' : 'categories'} onClick={() => setActive(false)}>
      <ul>
        <li
          className={activeCategory === null ? 'active' : '`'}
          onClick={() => onClickCategory(null)}>Все
        </li>

        {items && items.map((name, index) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onClickCategory(index)} key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories; 