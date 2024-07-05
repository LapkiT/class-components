// src/api/api.ts
export async function fetchItems(query: string): Promise<any[]> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?search=${query}`,
  );
  const data = await response.json();
  return data.results;
}
