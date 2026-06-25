const API_BASE_URL = "https://learn.goonitalia.it/wp-json/wp/v2";

export async function getPosts() {
    const response = await fetch(`${API_BASE_URL}/posts?_embed&per_page=10`);

    if (!response.ok) {
        throw new Error("Errore nel recupero degli articoli da WordPress");
    }

    const posts = await response.json();

    return posts;
}