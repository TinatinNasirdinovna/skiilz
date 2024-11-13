"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import Link from "next/link";
import { PiShoppingCart } from "react-icons/pi";
import s from "./Header.module.scss";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header id={s.header}>
      <div className={s.advertising}>
        <p>One week only—50% off all courses with code</p>
      </div>
      <div className={`container ${s.header}`}>
        <Image src={logo} alt="logo-img" width={135} height={44} />
        <nav>
          <Link href={"#"}>Courses</Link>
          <Link href={"#"}>Free Workshops</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Contact</Link>
        </nav>
        <div className={s.basket}>
          <PiShoppingCart />
          <span>0</span>
        </div>
        <div className={s.menu} onClick={() => setOpenMenu(true)}>
        <FiMenu />
        </div>
      </div>
      <div className={s.burgerMenu} style={{display: openMenu ? "flex" : "none"}}>
        <Image src={logo} alt="logo-img" width={135} height={44} />
        <nav onClick={() => setOpenMenu(false)}>
          <Link href={"#"}>Courses</Link>
          <Link href={"#"}>Free Workshops</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Contact</Link>
          <Link href={"#"}>Basket</Link>
        </nav>
        <span onClick={() => setOpenMenu(false)}>X</span>
      </div>
      <div className={s.bg} style={{display: openMenu ? "block" : "none"}} onClick={() => setOpenMenu(false)}></div>
    </header>
  );
};

export default Header;
