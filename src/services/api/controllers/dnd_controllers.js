import {get_monsters_list} from '../models/dnd_models.js';

export async function get_monsters_data() {
  const response = await get_monsters_list();
  const raw_response = await response.json();

  let monsters_data = new Array(raw_response['count']);

  for (let i in raw_response['results']) {
    monsters_data[i] = {
      id: raw_response['results'][i].index,
      name: raw_response['results'][i].name,
    }
  }

  console.log(monsters_data);

  return JSON.parse(JSON.stringify(monsters_data));
}