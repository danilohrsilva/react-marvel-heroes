import React from 'react';
import { Link } from "react-router-dom";
import { CONTEXT } from '../../commons/Consts';
import './SideMenu.css';

const SideMenu = () => {
  return (
    <aside className="side-menu" >
      <ul>
        { Object.keys(CONTEXT).map((item, index) => (
          <Link key={index} to={CONTEXT[item].url} >
            <li className="menu-item" >
                {CONTEXT[item].label}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default SideMenu;