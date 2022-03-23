/*#########################################*/
/*###############| DND API |###############*/
/*#########################################*/
/*-----| https://www.dnd5eapi.co/api |-----*/
/*---| https://www.dnd5eapi.co/graphql |---*/
/*#########################################*/

// export async function get_monsters_list() {
//   const response = await fetch('https://www.dnd5eapi.co/api/monsters/');

//   return response;
// }

export async function get_monsters_list() {
  const headers = {
    'content-type': 'application/json',
  };
  const graphqlQuery = JSON.stringify({
    query: `query($limit: Int) {
      monsters(limit: $limit){
        index
        name
        alignment
        type
        size
        strength
        dexterity
        constitution
        intelligence
      }
    }`,
    variables: {
      limit: null,
    },
  });

  // monsters {
  //   index
  //   name
  //   alignment
  //   type
  //   size
  //   strength
  //   dexterity
  //   constitution
  //   intelligence
  // }

  const params = {
    method: 'POST',
    headers: headers,
    body: graphqlQuery,
  };
  const response = await fetch(
      'https://www.dnd5eapi.co/graphql',
      params,
  );

  return response;
}

export async function get_monster_details(id) {
  const response = await fetch('https://www.dnd5eapi.co/api/monsters/' + id);

  return response;
}