const fs = require('fs');

const pokemonData = fs.readFileSync(`${__dirname}/../../hosted/pokemon.json`, { encoding: 'utf-8', flag: 'r' });
const moveData = fs.readFileSync(`${__dirname}/../../hosted/moves.json`, { encoding: 'utf-8', flag: 'r' });
const abilityData = fs.readFileSync(`${__dirname}/../../hosted/abilities.json`, { encoding: 'utf-8', flag: 'r' });
const itemData = fs.readFileSync(`${__dirname}/../../hosted/items.json`, { encoding: 'utf-8', flag: 'r' });
const natureData = fs.readFileSync(`${__dirname}/../../hosted/natures.json`, { encoding: 'utf-8', flag: 'r' });

const loadPokemon = async (req, res) => {
  return res.json(
    pokemonData
  );
};

const loadMoves = async (req, res) => {
  return res.json(
    moveData
  );
};

const loadAbilities = async (req, res) => {
  return res.json(
    abilityData
  );
};

const loadItems = async (req, res) => {
  return res.json(
    itemData
  );
};

const loadNatures = async (req, res) => {
  return res.json(
    natureData
  );
};

module.exports = {
  loadPokemon,
  loadMoves,
  loadAbilities,
  loadItems,
  loadNatures
};
