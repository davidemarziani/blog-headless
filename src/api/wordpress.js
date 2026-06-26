const API_BASE_URL = "https://new.goonitalia.it/wp-json/wp/v2";

export async function getPosts() {
  const response = await fetch(`${API_BASE_URL}/posts?_embed&per_page=6`);

  if (!response.ok) {
    throw new Error("Errore nel recupero degli articoli da WordPress");
  }

  const postsData = await response.json();

  return postsData;
}

export async function getPostBySlug(slug) {
  const response = await fetch(`${API_BASE_URL}/posts?_embed&slug=${slug}`);

  if (!response.ok) {
    throw new Error("Errore nel recupero dell'articolo da WordPress");
  }

  const postsData = await response.json();

  if (postsData.length === 0) {
    throw new Error("Articolo non trovato");
  }

  return postsData[0];
}