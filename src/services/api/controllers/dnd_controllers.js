/*#########################################*/
/*###############| DND API |###############*/
/*#########################################*/
/*-----| https://www.dnd5eapi.co/api |-----*/
/*--| https://studio.apollographql.com/ |--*/
/*#########################################*/

import {get_monsters_list} from '../models/dnd_models.js';

export async function get_monsters_data() {
  const response = await get_monsters_list();
  const raw_response = await response.json();

  console.log(raw_response);

  let monsters_data = raw_response['data']['monsters'];

  return JSON.parse(JSON.stringify(monsters_data));
}