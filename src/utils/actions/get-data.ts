export async function getDataHome() {
  try {
    const rest = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/67804f69971b263cbc8fafd3?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`,
      { next: { revalidate: 120 } }
    );

    if (!rest.ok) {
      throw new Error("Failed to fetch data");
    }

    return rest.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export async function getSubMenu() {
  try {
    const rest = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`,
      { next: { revalidate: 120 } }
    );
    if (!rest.ok) {
      throw new Error("Failed to fetch data");
    }
    return rest.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export async function getItemBySlug(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  //definindo o objeto de consulta por slug
  const queryParams = new URLSearchParams({
    query: JSON.stringify({ slug: itemSlug }),
    props: "slug,title,metadata,type",
    read_key: process.env.READ_KEY as string,
  });
  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 120 } });

    if (!res.ok) {
      throw new Error("Failed to fetch Slug");
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch Slug");
  }
}
