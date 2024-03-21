const KEY = "f62b9690";

function fetchAPI(query) {
  return fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`).then(
    async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error("something wrong with fetching");
      }
    },
  );
}

export { fetchAPI };
