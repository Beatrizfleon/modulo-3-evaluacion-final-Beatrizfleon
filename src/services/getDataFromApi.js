const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.results);

      return data.results.map((character) => {
        // console.log(character.species);
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
        };
      });
    });
};

export default getDataFromApi;
