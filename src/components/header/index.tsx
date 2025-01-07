"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const Header = () => {
  const [top, setTop] = useState(true);

  function scrollHandler() {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [top]);

  return (
    <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLogo}>
            <Link href="/">Dev Motors </Link>
          </div>
          <nav className={styles.contentNav}>
            <Link href="/">HOME</Link>
            <Link href="/#serviços">SERVIÇOS</Link>
            <Link href="/contatos">CONTATOS</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
