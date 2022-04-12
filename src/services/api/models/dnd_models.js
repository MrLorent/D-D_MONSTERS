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

export async function get_monsters_list(rank, limit) {
  const headers = {
    'content-type': 'application/json',
  };
  const graphqlQuery = JSON.stringify({
    query: `query($skip: Int, $limit: Int) {
      monsters(skip: $skip, limit: $limit){
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
      skip: rank * limit,
      limit: limit,
    },
  });

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

export async function get_alignments_list() {
  const headers = {
    'content-type': 'application/json',
  };
  const graphqlQuery = JSON.stringify({
    query: `query {
      alignments {
        name
      }
    }`,
  });

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
