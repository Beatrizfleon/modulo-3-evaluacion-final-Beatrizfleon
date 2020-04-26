const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.results);

      let characterList = data.results.map((character) => {
        // console.log(character.origin.name);
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episodes: character.episode.length,
          gender: character.gender,
        };
      });

      return characterList.sort((o1, o2) => (o1.name > o2.name ? 1 : -1));

      // return characterList.sort((o1, o2) => (o1.episodes < o2.episodes ? 1 : -1));
    });
};

export default getDataFromApi;
