const pokemonRouter = require("express").Router();
const { Pokemon, Type } = require("../db");
const { validate } = require("uuid");
const { getPokemonTypesFromDb } = require("../utils/helpers");
const getPokemonData = require("../Controllers/getPokemonData");
const getPokemonById = require("../controllers/getPokemonById");
const getPokemonByName = require("../controllers/getPokemonByName");
pokemonRouter.get("/", async (req, res) => {
    let { name } = req.query;
    try {
      // no query
      if (!name) {
        const allPokemons = await getPokemonData();
        return res.status(200).json(allPokemons);
      }
      // query
      const pokemon = await getPokemonByName(name);
      if (!pokemon) throw Error(`There is no pokemon named "${name}".`);
      return res.status(200).json(pokemon);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
  pokemonRouter.post("/", async (req, res) => {
    try {
      const { name, image, hp, attack, defense, speed, height, weight, types } =
        req.body;
  
      const filteredDbTypes = (await Type.findAll()).filter((type) =>
        types.includes(type.name)
      );
      const typeIds = filteredDbTypes.map((type) => type.id);
      console.log(typeIds);
  
      if (!typeIds.length)
        throw Error(`Types table must be initialized before Pokemons table.`);
  
      const newPokemon = await Pokemon.create({
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
      });
      await newPokemon.addTypes(typeIds);
  
      res.status(200).json({ ...newPokemon.dataValues, types: types });
    } catch (error) {
      res.status(404).json(error.message);
    }
  });
  pokemonRouter.get("/:idPokemon", async (req, res) => {
    const { idPokemon } = req.params;
    try {
      // Primero valido el UUID
      if (validate(idPokemon)) {
        // En db
        const pokemonInDb = await Pokemon.findByPk(idPokemon);
  
        if (pokemonInDb) {
          const pokemonTypes = await getPokemonTypesFromDb(pokemonInDb);
          console.log(pokemonTypes);
          return res
            .status(200)
            .json({ ...pokemonInDb.dataValues, types: pokemonTypes });
        }
      }
      if (!parseInt(idPokemon)) throw Error(`ID must be an integer or a UUID.`);
      // En api
      const pokemonInApi = await getPokemonById(idPokemon);
      if (!pokemonInApi)
        throw Error(`The pokemon with ID ${idPokemon} does not exist.`);
      return res.status(200).json(pokemonInApi);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
  
  module.exports = pokemonRouter;
  