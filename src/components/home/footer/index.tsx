"use client"
import { HomeProps } from "@/utils/home.types";
import styles from "./styles.module.scss"

const Footer = ({object}:HomeProps) => {
    return (
        <footer id="contatos" className={styles.footer}>
            <section className={styles.section}>

            </section>
        </footer>
    );
}

export default Footer;