"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";

const Submenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const toogleHandle = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", toogleHandle);
    return () => window.addEventListener("resize", toogleHandle);
  }, []);
  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={24} color="#121212" />
        Menu
      </div>

      <ul className={`${styles.ul} ${open ? styles.open : ""}`}>
        {open && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}
        <li>
          <Link href="/home">Página 1</Link>
        </li>
        <li>
          <Link href="/home">Página 2</Link>
        </li>
      </ul>
    </section>
  );
};

export default Submenu;
