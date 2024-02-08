import fetch from 'node-fetch';

export const fetchAllPokemon = async () => {

    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=150', options)
    return response.json();
}

// export const fetchPokemonId = async (id) => {
//     const options = {
//         method: 'GET',
//         header: { 'Content-Type': 'application/json'}
//     }
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, options)
//     return response.json();
// }