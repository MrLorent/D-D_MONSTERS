export async function get_monsters_list() {
  const response = await fetch('https://www.dnd5eapi.co/api/monsters/');

  return response;
};

export async function get_monster_details(id) {
  const response = await fetch('https://www.dnd5eapi.co/api/monsters/' + id);

  return response;
};