import { ReactNode } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface HeroProps {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon: ReactNode;
}

const Hero = ({
  heading,
  bannerUrl,
  buttonTitle,
  buttonUrl,
  icon,
}: HeroProps) => {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>
        <a target="_blank" href={buttonUrl} className={styles.link}>
          {icon}
          {buttonTitle}
        </a>
        <div className={styles.contentBanner}>
          <Image
            className={styles.banner}
            alt={heading}
            src={bannerUrl}
            priority={true}
            quality={100}
            fill={true}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
