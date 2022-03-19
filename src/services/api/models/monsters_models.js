export async function get_random_monster() {
  const response = await fetch(
      'https://pixel-encounter-random-svg-monsters.p.rapidapi.com/api/basic/monsters/random',
      {
        'method': 'GET',
        'headers': {
          'x-rapidapi-host':
              'pixel-encounter-random-svg-monsters.p.rapidapi.com',
          'x-rapidapi-key': 'b106dff32fmsh18ae01c8591b9afp1edb33jsnefd11338671d'
        }
      });

  return response;
}