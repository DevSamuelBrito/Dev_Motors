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

//https://api.cosmicjs.com/v3/buckets/devmotors-production-06810ac0-ced9-11ef-bcc2-85e21e485f09/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=D1o9wGEweEk3UCKFuZQvw2GV80WAA1WS5AZcr0aZrCgTfo0Rib&depth=1&props=slug,title,
