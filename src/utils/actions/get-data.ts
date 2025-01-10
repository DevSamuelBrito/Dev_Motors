export async function getDataHome() {
  try {
    const rest = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/67804f69971b263cbc8fafd3?pretty=true&read_key=D1o9wGEweEk3UCKFuZQvw2GV80WAA1WS5AZcr0aZrCgTfo0Rib&depth=1&props=slug,title,metadata,type`
    );

    if (!rest.ok) {
      throw new Error("Failed to fetch data");
    }

    return rest.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
