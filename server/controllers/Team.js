const models = require('../models');

const { Team } = models;

const makerPage = async (req, res) => res.render('app');

const makeTeam = async (req, res) => {
  const teamData = {
    name: req.body.name,
    team: {
      member1: {
        species: req.body.team.member1.species,
        nickname: req.body.team.member1.nickname,
        level: req.body.team.member1.level,
        ability: req.body.team.member1.ability,
        nature: req.body.team.member1.nature,
        held_item: req.body.team.member1.held_item,
        HP_IVs: req.body.team.member1.HP_IVs,
        attack_IVs: req.body.team.member1.attack_IVs,
        defense_IVs: req.body.team.member1.defense_IVs,
        special_attack_IVs: req.body.team.member1.special_attack_IVs,
        special_defense_IVs: req.body.team.member1.special_defense_IVs,
        speed_IVs: req.body.team.member1.speed_IVs,
        HP_EVs: req.body.team.member1.HP_EVs,
        attack_EVs: req.body.team.member1.attack_EVs,
        defense_EVs: req.body.team.member1.defense_EVs,
        special_attack_EVs: req.body.team.member1.special_attack_EVs,
        special_defense_EVs: req.body.team.member1.special_defense_EVs,
        speed_EVs: req.body.team.member1.speed_EVs,
        move_1: req.body.team.member1.move_1,
        move_2: req.body.team.member1.move_2,
        move_3: req.body.team.member1.move_3,
        move_4: req.body.team.member1.move_4,
      },
      member2: {
        species: req.body.team.member2.species,
        nickname: req.body.team.member2.nickname,
        level: req.body.team.member2.level,
        ability: req.body.team.member2.ability,
        nature: req.body.team.member2.nature,
        held_item: req.body.team.member2.held_item,
        HP_IVs: req.body.team.member2.HP_IVs,
        attack_IVs: req.body.team.member2.attack_IVs,
        defense_IVs: req.body.team.member2.defense_IVs,
        special_attack_IVs: req.body.team.member2.special_attack_IVs,
        special_defense_IVs: req.body.team.member2.special_defense_IVs,
        speed_IVs: req.body.team.member2.speed_IVs,
        HP_EVs: req.body.team.member2.HP_EVs,
        attack_EVs: req.body.team.member2.attack_EVs,
        defense_EVs: req.body.team.member2.defense_EVs,
        special_attack_EVs: req.body.team.member2.special_attack_EVs,
        special_defense_EVs: req.body.team.member2.special_defense_EVs,
        speed_EVs: req.body.team.member2.speed_EVs,
        move_1: req.body.team.member2.move_1,
        move_2: req.body.team.member2.move_2,
        move_3: req.body.team.member2.move_3,
        move_4: req.body.team.member2.move_4,
      },
      member3: {
        species: req.body.team.member3.species,
        nickname: req.body.team.member3.nickname,
        level: req.body.team.member3.level,
        ability: req.body.team.member3.ability,
        nature: req.body.team.member3.nature,
        held_item: req.body.team.member3.held_item,
        HP_IVs: req.body.team.member3.HP_IVs,
        attack_IVs: req.body.team.member3.attack_IVs,
        defense_IVs: req.body.team.member3.defense_IVs,
        special_attack_IVs: req.body.team.member3.special_attack_IVs,
        special_defense_IVs: req.body.team.member3.special_defense_IVs,
        speed_IVs: req.body.team.member3.speed_IVs,
        HP_EVs: req.body.team.member3.HP_EVs,
        attack_EVs: req.body.team.member3.attack_EVs,
        defense_EVs: req.body.team.member3.defense_EVs,
        special_attack_EVs: req.body.team.member3.special_attack_EVs,
        special_defense_EVs: req.body.team.member3.special_defense_EVs,
        speed_EVs: req.body.team.member3.speed_EVs,
        move_1: req.body.team.member3.move_1,
        move_2: req.body.team.member3.move_2,
        move_3: req.body.team.member3.move_3,
        move_4: req.body.team.member3.move_4,
      },
      member4: {
        species: req.body.team.member4.species,
        nickname: req.body.team.member4.nickname,
        level: req.body.team.member4.level,
        ability: req.body.team.member4.ability,
        nature: req.body.team.member4.nature,
        held_item: req.body.team.member4.held_item,
        HP_IVs: req.body.team.member4.HP_IVs,
        attack_IVs: req.body.team.member4.attack_IVs,
        defense_IVs: req.body.team.member4.defense_IVs,
        special_attack_IVs: req.body.team.member4.special_attack_IVs,
        special_defense_IVs: req.body.team.member4.special_defense_IVs,
        speed_IVs: req.body.team.member4.speed_IVs,
        HP_EVs: req.body.team.member4.HP_EVs,
        attack_EVs: req.body.team.member4.attack_EVs,
        defense_EVs: req.body.team.member4.defense_EVs,
        special_attack_EVs: req.body.team.member4.special_attack_EVs,
        special_defense_EVs: req.body.team.member4.special_defense_EVs,
        speed_EVs: req.body.team.member4.speed_EVs,
        move_1: req.body.team.member4.move_1,
        move_2: req.body.team.member4.move_2,
        move_3: req.body.team.member4.move_3,
        move_4: req.body.team.member4.move_4,
      },
      member5: {
        species: req.body.team.member5.species,
        nickname: req.body.team.member5.nickname,
        level: req.body.team.member5.level,
        ability: req.body.team.member5.ability,
        nature: req.body.team.member5.nature,
        held_item: req.body.team.member5.held_item,
        HP_IVs: req.body.team.member5.HP_IVs,
        attack_IVs: req.body.team.member5.attack_IVs,
        defense_IVs: req.body.team.member5.defense_IVs,
        special_attack_IVs: req.body.team.member5.special_attack_IVs,
        special_defense_IVs: req.body.team.member5.special_defense_IVs,
        speed_IVs: req.body.team.member5.speed_IVs,
        HP_EVs: req.body.team.member5.HP_EVs,
        attack_EVs: req.body.team.member5.attack_EVs,
        defense_EVs: req.body.team.member5.defense_EVs,
        special_attack_EVs: req.body.team.member5.special_attack_EVs,
        special_defense_EVs: req.body.team.member5.special_defense_EVs,
        speed_EVs: req.body.team.member5.speed_EVs,
        move_1: req.body.team.member5.move_1,
        move_2: req.body.team.member5.move_2,
        move_3: req.body.team.member5.move_3,
        move_4: req.body.team.member5.move_4,
      },
      member6: {
        species: req.body.team.member6.species,
        nickname: req.body.team.member6.nickname,
        level: req.body.team.member6.level,
        ability: req.body.team.member6.ability,
        nature: req.body.team.member6.nature,
        held_item: req.body.team.member6.held_item,
        HP_IVs: req.body.team.member6.HP_IVs,
        attack_IVs: req.body.team.member6.attack_IVs,
        defense_IVs: req.body.team.member6.defense_IVs,
        special_attack_IVs: req.body.team.member6.special_attack_IVs,
        special_defense_IVs: req.body.team.member6.special_defense_IVs,
        speed_IVs: req.body.team.member6.speed_IVs,
        HP_EVs: req.body.team.member6.HP_EVs,
        attack_EVs: req.body.team.member6.attack_EVs,
        defense_EVs: req.body.team.member6.defense_EVs,
        special_attack_EVs: req.body.team.member6.special_attack_EVs,
        special_defense_EVs: req.body.team.member6.special_defense_EVs,
        speed_EVs: req.body.team.member6.speed_EVs,
        move_1: req.body.team.member6.move_1,
        move_2: req.body.team.member6.move_2,
        move_3: req.body.team.member6.move_3,
        move_4: req.body.team.member6.move_4,
      },
    },
  };

  try {
    const newTeam = new Team(teamData);
    await newTeam.save();
    return res.status(201).json({ name: newTeam.name, team: newTeam.team });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'An error occurred making this team!' });
  }
};

const getTeams = async (req, res) => {
  try {
    const query = { owner: req.session.account._id };
    const docs = await Team.find(query).select('name team').lean().exec();

    return res.json({ teams: docs });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Error retrieving teams!' });
  }
};

const deleteTeam = async (req, res) => {
  try {
    const docs = await Team.findOneAndDelete({
      owner: req.session.account._id, _id: req.query._id,
    }).exec();
    return res.json({ teams: docs });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Error deleting team!' });
  }
};

module.exports = {
  makerPage,
  makeTeam,
  getTeams,
  deleteTeam,
};
