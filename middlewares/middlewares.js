export async function getCharacters() {
  try {
    const res = await api.get("/character");
    const characters = res.data.results;

    for (let character of characters) {
      character.episodes = await getCharacterEps(character.id);
    }

    console.log(characters);
    return characters;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getCharacterEps(characterId) {
  try {
    const res = await api.get(`/character/${characterId}`);
    const character = res.data;
    const episodes = character.episode;
    const episodeNames = [];

    for (let ep of episodes) {
      const res = await api.get(ep);
      episodeNames.push(res);
    }
    return episodeNames;
  } catch (err) {
    console.log(err);
    return [];
  }
}
