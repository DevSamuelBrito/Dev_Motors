import Container from "@/components/container";
import { Hero } from "@/components/Hero";
import Submenu from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.types";
import { Phone } from "lucide-react";
import { Services } from "@/components/home/services";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <main>
      <Submenu />
      <Hero
        heading={object.metadata.heading}
        buttonUrl={object.metadata.cta_button.url}
        buttonTitle={object.metadata.cta_button.title}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#fff" />}
      />
      <Container>
        <Services  object={object}/>
      </Container>
    </main>
  );
}
