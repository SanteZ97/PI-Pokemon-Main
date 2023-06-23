import axios from "axios";

// Constantes
const URL = "http://localhost:3001";

export const FETCH_TYPES = "FETCH_TYPES";
export const FETCH_POKEMONS = "FETCH_POKEMONS";
export const SEARCH_POKEMONS = "SEARCH_POKEMONS";
export const ORDER_POKEMONS = "ORDER_POKEMONS";
export const FILTER_POKEMONS = "FILTER_POKEMONS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const CREATE_POKEMON = "CREATE_POKEMON";

// Acciones
// Acción para obtener los tipos de pokémon
export const fetchTypes = () => {
  return async (dispatch) => {
    try {
      // Realizar una solicitud HTTP GET para obtener los tipos de pokémon desde el servidor
      const fetchedTypes = (await axios(`${URL}/type`)).data;
      // Despachar una acción con los tipos de pokémon obtenidos
      return dispatch({ type: FETCH_TYPES, payload: fetchedTypes });
    } catch (error) {
      console.log(error.message);
    }
  };
};

// Acción para obtener los pokémon
export const fetchPokemons = () => {
  return async (dispatch) => {
    try {
      // Realizar una solicitud HTTP GET para obtener los pokémon desde el servidor
      const fetchedPokemons = (await axios(`${URL}/pokemon`)).data;
      // Despachar una acción con los pokémon obtenidos
      return dispatch({ type: FETCH_POKEMONS, payload: fetchedPokemons });
    } catch (error) {
      console.log(error.message);
    }
  };
};

// Acción para buscar pokémon por nombre
export const searchPokemons = (name) => {
  return { type: SEARCH_POKEMONS, payload: name };
};

// Acción para ordenar los pokémon
export const orderPokemons = (rules) => {
  return { type: ORDER_POKEMONS, payload: rules };
};

// Acción para filtrar los pokémon
export const filterPokemons = (filters) => {
  return { type: FILTER_POKEMONS, payload: filters };
};

// Acción para establecer la página actual
export const setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, payload: page };
};

// Acción para crear un nuevo pokémon
export const createPokemon = (pokemon) => {
  return async (dispatch) => {
    try {
      // Realizar una solicitud HTTP POST para crear un nuevo pokémon en el servidor
      const createdPokemon = (
        await axios({ method: "post", url: `${URL}/pokemon`, data: pokemon })
      ).data;
      // Despachar una acción con el nuevo pokémon creado
      return dispatch({ type: CREATE_POKEMON, payload: createdPokemon });
    } catch (error) {
      console.log(error.message);
    }
  };
};
