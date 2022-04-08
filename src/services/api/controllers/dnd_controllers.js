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
  const min_color = {
    r: 116,
    g: 0,
    b: 184,
  };
  const max_color = {
    r: 247,
    g: 47,
    b: 133,
  };

  const response = await get_alignments_list();
  const raw_response = await response.json();
  const alignments = raw_response['data']['alignments'];

  let alignments_colors = {};
  const r_step = parseInt((max_color.r - min_color.r) / alignments.length);
  const g_step = parseInt((max_color.g - min_color.g) / alignments.length);
  const b_step = parseInt((max_color.b - min_color.b) / alignments.length);

  for (let i = 0; i < alignments.length; i++) {
    alignments_colors[alignments[i].name.toLowerCase()] = 'rgb(' +
        (min_color.r + i * r_step) + ',' + (min_color.g + i * g_step) + ',' +
        (min_color.b + i * b_step) + ')';
  }

  // SPECIAL CASES
  alignments_colors['any alignment'] = 'rgb(6, 255, 140)';            // GREEN
  alignments_colors['any non-lawful alignment'] = 'rgb(255,255,60)';  // YELLOW
  alignments_colors['any non-good alignment'] = 'rgb(251, 133, 40)';  // ORANGE
  alignments_colors['neutral good (50%) or neutral evil (50%)'] =
      'rgb(0, 180, 216)';                                          // BLUE
  alignments_colors['any evil alignment'] = 'rgb(208, 0, 0)';      // RED
  alignments_colors['any chaotic alignment'] = 'rgb(180, 5, 10)';  // DARK RED
  alignments_colors['unaligned'] = 'rgb(64, 255, 245)';            // LIGTH BLUE

  return alignments_colors;
}