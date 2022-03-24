import React from 'react';
import { useState, useEffect } from 'react';
import Categories from './Categories';
import { useMediaQuery } from 'react-responsive';


function Burger(props) {
  const [menuActive, setMenuActive] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 1300px)` });
  const sortRef = React.useRef();

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setMenuActive(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

  }, []);

  return (
    <div ref={sortRef}>
      <button className="burger" onClick={() => setMenuActive(!menuActive)}>
        <span className="burger__item">Menu</span>
      </button>

      <Categories active={menuActive} setActive={setMenuActive} activeCategory={props.activeCategory} onClickCategory={props.onClickCategory} items={props.items} isMobile={isMobile}/>
    </div>

  )
}

export default Burger;