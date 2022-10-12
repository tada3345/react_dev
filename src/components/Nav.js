import React from 'react';

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center space-x-12 font-secondary">
        <li className="nav-link">
          <a href="#">スキル</a>
        </li>
        <li className="nav-link">
          <a href="#">実績</a>
        </li>
        <li className="nav-link">
          <a href="#">ポートフォリオ</a>
        </li>
        <li className="btn">
          <a href="#">資格</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
