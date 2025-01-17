"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { MenuProps } from "@/utils/menu.types";
import { X, Menu } from "lucide-react";

interface SubMenuProps {
  menu: MenuProps;
}

const Submenu = ({ menu }: SubMenuProps) => {
  const [open, setOpen] = useState(false);
  console.log(menu);
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

        {menu.objects.map((item) => (
          <li>
            <Link href={`/post/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Submenu;
