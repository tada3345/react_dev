import React from 'react';

//icons
import { IoClose } from 'react-icons/io5';

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden bg-[#251f3f] w-full h-full">
      <IoClose
        onClick={() => {
          setNavMobile(false);
        }}
        className="text-3xl absolute left-4 top-6 cursor-pointer"
      />
      <ul className="flex flex-col items-center justify-center space-y-8 font-secondary h-full">
        <li className="text-lg">
          <a href="#">スキル</a>
        </li>
        <li className="text-lg">
          <a href="#">実績</a>
        </li>
        <li className="text-lg">
          <a href="#">ポートフォリオ</a>
        </li>
        <li className="btn">
          <a href="#">資格</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
