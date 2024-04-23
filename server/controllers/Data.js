const fs = require('fs');

const loadData = async (req, res) => {
  try {
    const pokemonData = fs.readFileSync('/assets/pokemon.json', { encoding: 'utf-8', flag: 'r' });
    const moveData = fs.readFileSync('/assets/moves.json', { encoding: 'utf-8', flag: 'r' });
    const abilityData = fs.readFileSync('/assets/abilities.json', { encoding: 'utf-8', flag: 'r' });
    const itemData = fs.readFileSync('/assets/items.json', { encoding: 'utf-8', flag: 'r' });
    const natureData = fs.readFileSync('/assets/natures.json', { encoding: 'utf-8', flag: 'r' });

    return [pokemonData, moveData, abilityData, itemData, natureData];
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Error loading data!' });
  }
};

module.exports = {
  loadData,
};
