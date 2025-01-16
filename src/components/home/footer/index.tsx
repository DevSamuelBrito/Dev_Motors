"use client";
import { HomeProps } from "@/utils/home.types";
import styles from "./styles.module.scss";
import { Clock, Mail, Map, Phone } from "lucide-react";

const Footer = ({ object }: HomeProps) => {
  return (
    <footer id="contatos" className={styles.footer}>
      <section className={styles.section}>
        <h2 className={styles.title}>Contatos</h2>
        <div className={styles.content}>
          <div className={styles.item}>
            <Mail size={24} color="#FFF" />
            <div>
              <strong>Email</strong>
              <p>{object.metadata.contact.email}</p>
            </div>
            <Phone size={24} color="#FFF" />
            <div>
              <strong>Telefone</strong>
              <p>{object.metadata.contact.phone}</p>
            </div>
            <Map size={24} color="#FFF" />
            <div>
              <strong>Endereço</strong>
              <p>{object.metadata.contact.address}</p>
            </div>
            <Clock size={24} color="#FFF" />
            <div>
              <strong>Horário</strong>
              <p>{object.metadata.contact.time}</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
