import { getItemBySlug } from "@/utils/actions/get-data";
import styles from "./styles.module.scss";
import { PostProps } from "@/utils/post.types";
import { Hero } from "@/components/Hero";
import { Phone } from "lucide-react";
import Container from "@/components/container";
import Image from "next/image";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { objects }: PostProps = await getItemBySlug(slug);
  // console.log(JSON.stringify(objects, null, 2));
  return (
    <>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.description.button_url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>
            <p>{objects[0].metadata.description.text}</p>

            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.description.button_url as string}
                className={styles.link}
                target="_blank"
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>
          <div className={styles.bannerAbout}>
            <Image
              src={objects[0].metadata.description.banner.url}
              fill={true}
              quality={100}
              alt={objects[0].metadata.description.title}
              className={styles.imageAbout}
            />
          </div>
        </section>
      </Container>
    </>
  );
}
