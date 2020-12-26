export async function useFetch(url, metodo, conteudo, token = null) {
  const response = await fetch(url, {
    method: metodo,
    headers: {
      "Content-Type": "application/json",
      Authorization: token && `Bearer ${token}`,
    },
    body: JSON.stringify(conteudo),
  });
  return response.json();
}
