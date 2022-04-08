/*#########################################*/
/*###############| DND API |###############*/
/*#########################################*/
/*-----| https://www.dnd5eapi.co/api |-----*/
/*--| https://studio.apollographql.com/ |--*/
/*#########################################*/

import {get_alignments_list, get_monsters_list} from '../models/dnd_models.js';

export async function get_monsters_data() {
  const response = await get_monsters_list();
  const raw_response = await response.json();

  return raw_response['data']['monsters'];
}

export async function get_alignments_data() {
  const colors = [
    '#7400B8',
    '#6930C3',
    '#5E60CE',
    '#5390D9',
    '#4EA8DE',
    '#48BFE3',
    '#56CFE1',
    '#64DFDF',
    '#72EFDD',
    '#80FFDB',
  ];
  const response = await get_alignments_list();
  const raw_response = await response.json();
  const alignments = raw_response['data']['alignments'];

  let alignments_colors = {};
  let count = 0;
  alignments.map(element => {
    alignments_colors[element.name.toLowerCase().split(' ').join('_')] =
        colors[count];
    count++;
  });

  alignments_colors['any_alignment'] = '#f72585';  // PINK

  return alignments_colors;
}