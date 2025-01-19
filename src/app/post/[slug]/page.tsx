import { getItemBySlug } from "@/utils/actions/get-data";
import styles from "./styles.module.scss";
import { PostProps } from "@/utils/post.types";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { objects }: PostProps = await getItemBySlug(slug);
  console.log(JSON.stringify(objects, null, 2));
  return (
    <div className="mt-32 pt-80">
      <h1>Pagina do {slug}</h1>
    </div>
  );
}
