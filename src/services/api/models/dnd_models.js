export async function get_monsters_list() {
  const response = await fetch('https://www.dnd5eapi.co/api/monsters/');

  return response;
}

// export async function get_monsters_list() {
//   const headers = {
//     'content-type': 'application/json',
//   };
//   const graphqlQuery = {
//     'query': `query { monsters { index, name, alignement } }`,
//   };

//   // monsters {
//   //   _id
//   //   name
//   //   alignment
//   //   type
//   //   size
//   //   strength
//   //   dexterity
//   //   constitution
//   //   intelligence
//   // }

//   const options = {
//     'method': 'POST',
//     'headers': headers,
//     'body': JSON.stringify(graphqlQuery)
//   };
//   const response = await fetch(
//       'https://www.dnd5eapi.co/graphql',
//       options,
//   );

//   return response;
// }

export async function get_monster_details(id) {
  const response = await fetch('https://www.dnd5eapi.co/api/monsters/' + id);

  return response;
}