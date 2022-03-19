import {get_random_monster} from '../models/monsters_models';

export async function get_random_monster_svg() {
  const raw_response = await get_random_monster();
  const svg_code = await raw_response.text();

  return svg_code;
}

export async function get_random_monster_img() {
  const response = await get_random_monster();
  const blob = await response.blob();

  // Then create a local URL for that image and print it
  const image_object_URL = URL.createObjectURL(blob);
  console.log(image_object_URL);
  return image_object_URL;
}