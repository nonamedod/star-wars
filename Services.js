export default class Services {
  static async getCharacters() {
    const response = await fetch("https://swapi.py4e.com/api/people/");
    const data = await response.json();

    const detailedCharacters = await Promise.all(
      data.results.map(async (char) => {
        const res = await fetch(char.url);
        const details = await res.json();
        return {
          name: details.name,
          height: details.height,
          mass: details.mass,
          hair_color: details.hair_color,
          skin_color: details.skin_color,
          eye_color: details.eye_color,
          birth_year: details.birth_year,
          gender: details.gender,
        };
      }),
    );
    return detailedCharacters;
  }
}
