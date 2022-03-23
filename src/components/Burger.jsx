import React from 'react';
import { useState, useEffect } from 'react';
import Categories from './Categories';

function Burger(props) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      <button className="burger" onClick={() => setMenuActive(!menuActive)}>
        <span className="burger__item">Menu</span>
      </button>

      <Categories active={menuActive} setActive={setMenuActive} activeCategory={props.activeCategory} onClickCategory={props.onClickCategory} items={props.items} />
    </div>

  )
}

export default Burger;