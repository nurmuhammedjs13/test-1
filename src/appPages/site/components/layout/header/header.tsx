"use client";

import React from "react";
import { useRouter } from "next/navigation";
import style from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../../assets/image/logo.png";
import IconRowhead from "@/assets/image/IconRowhead";

const Links = [
  { name: "Главная", href: "/home" },
  { name: "О нас", href: "/aboutUs" },
  { name: "Курсы", href: "/courses" },
  { name: "Контакты", href: "/contacts" },
];

const Header: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.content}>
          <div className={style.logo}>
            <Image src={logo} alt="logo" />
          </div>
          <div className={style.rout}>
            {Links.map((link, index) => (
              <div className={style.routText} key={index}>
                <Link className={style.link} href={link.href}>
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
          <div className={style.boxButton}>
            <button className={style.button1} onClick={handleLogin}>
              Войти
            </button>
            <button className={style.button2}>
              Присоединяйся <IconRowhead />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
