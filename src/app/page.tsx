import Submenu from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import {HomeProps} from "@/utils/home.types";

export default async function Home() {
  const { object }:HomeProps = await getDataHome();
  console.log();

  return (
    <main>
      <Submenu />
    </main>
  );
}
