const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.results);

      return data.results.map((character) => {
        // console.log(character.origin.name);
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episodes: character.episode.length,
        };
      });
    });
};

export default getDataFromApi;
