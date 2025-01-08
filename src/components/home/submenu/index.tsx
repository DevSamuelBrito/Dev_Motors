import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";

const Submenu = () => {
  return (
    <section className={styles.submenu}>
      <div className={styles.menuIcon}>
        <Menu size={24} color="#121212" />
        Menu
      </div>
      <ul className={styles.ul}>
        <li>
          <Link href="/home">Página 1</Link>
          <Link href="/home">Página 2</Link>
        </li>
      </ul>
    </section>
  );
};

export default Submenu;
