const mongoose = require('mongoose');
const _ = require('underscore');

const setName = (name) => _.escape(name).trim();

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    set: setName,
  },
  team: {
    member1: {
      species: {
        type: String,
        required: true,
        trim: true,
      },
      nickname: {
        type: String,
        trim: true,
      },
      level: {
        type: Number,
        required: true,
      },
      ability: {
        type: String,
        required: true,
      },
      nature: {
        type: String,
        required: true,
      },
      held_item: {
        type: String,
      },
      HP_IVs: {
        type: Number,
        required: true,
      },
      attack_IVs: {
        type: Number,
        required: true,
      },
      defense_IVs: {
        type: Number,
        required: true,
      },
      special_attack_IVs: {
        type: Number,
        required: true,
      },
      special_defense_IVs: {
        type: Number,
        required: true,
      },
      speed_IVs: {
        type: Number,
        required: true,
      },
      HP_EVs: {
        type: Number,
        required: true,
      },
      attack_EVs: {
        type: Number,
        required: true,
      },
      defense_EVs: {
        type: Number,
        required: true,
      },
      special_attack_EVs: {
        type: Number,
        required: true,
      },
      special_defense_EVs: {
        type: Number,
        required: true,
      },
      speed_EVs: {
        type: Number,
        required: true,
      },
      move_1: {
        type: String,
      },
      move_2: {
        type: String,
      },
      move_3: {
        type: String,
      },
      move_4: {
        type: String,
      },
    },
    member2: {
      species: {
        type: String,
        required: true,
        trim: true,
      },
      nickname: {
        type: String,
        trim: true,
      },
      level: {
        type: Number,
        required: true,
      },
      ability: {
        type: String,
        required: true,
      },
      nature: {
        type: String,
        required: true,
      },
      held_item: {
        type: String,
      },
      HP_IVs: {
        type: Number,
        required: true,
      },
      attack_IVs: {
        type: Number,
        required: true,
      },
      defense_IVs: {
        type: Number,
        required: true,
      },
      special_attack_IVs: {
        type: Number,
        required: true,
      },
      special_defense_IVs: {
        type: Number,
        required: true,
      },
      speed_IVs: {
        type: Number,
        required: true,
      },
      HP_EVs: {
        type: Number,
        required: true,
      },
      attack_EVs: {
        type: Number,
        required: true,
      },
      defense_EVs: {
        type: Number,
        required: true,
      },
      special_attack_EVs: {
        type: Number,
        required: true,
      },
      special_defense_EVs: {
        type: Number,
        required: true,
      },
      speed_EVs: {
        type: Number,
        required: true,
      },
      move_1: {
        type: String,
      },
      move_2: {
        type: String,
      },
      move_3: {
        type: String,
      },
      move_4: {
        type: String,
      },
    },
    member3: {
      species: {
        type: String,
        required: true,
        trim: true,
      },
      nickname: {
        type: String,
        trim: true,
      },
      level: {
        type: Number,
        required: true,
      },
      ability: {
        type: String,
        required: true,
      },
      nature: {
        type: String,
        required: true,
      },
      held_item: {
        type: String,
      },
      HP_IVs: {
        type: Number,
        required: true,
      },
      attack_IVs: {
        type: Number,
        required: true,
      },
      defense_IVs: {
        type: Number,
        required: true,
      },
      special_attack_IVs: {
        type: Number,
        required: true,
      },
      special_defense_IVs: {
        type: Number,
        required: true,
      },
      speed_IVs: {
        type: Number,
        required: true,
      },
      HP_EVs: {
        type: Number,
        required: true,
      },
      attack_EVs: {
        type: Number,
        required: true,
      },
      defense_EVs: {
        type: Number,
        required: true,
      },
      special_attack_EVs: {
        type: Number,
        required: true,
      },
      special_defense_EVs: {
        type: Number,
        required: true,
      },
      speed_EVs: {
        type: Number,
        required: true,
      },
      move_1: {
        type: String,
      },
      move_2: {
        type: String,
      },
      move_3: {
        type: String,
      },
      move_4: {
        type: String,
      },
    },
    member4: {
      species: {
        type: String,
        required: true,
        trim: true,
      },
      nickname: {
        type: String,
        trim: true,
      },
      level: {
        type: Number,
        required: true,
      },
      ability: {
        type: String,
        required: true,
      },
      nature: {
        type: String,
        required: true,
      },
      held_item: {
        type: String,
      },
      HP_IVs: {
        type: Number,
        required: true,
      },
      attack_IVs: {
        type: Number,
        required: true,
      },
      defense_IVs: {
        type: Number,
        required: true,
      },
      special_attack_IVs: {
        type: Number,
        required: true,
      },
      special_defense_IVs: {
        type: Number,
        required: true,
      },
      speed_IVs: {
        type: Number,
        required: true,
      },
      HP_EVs: {
        type: Number,
        required: true,
      },
      attack_EVs: {
        type: Number,
        required: true,
      },
      defense_EVs: {
        type: Number,
        required: true,
      },
      special_attack_EVs: {
        type: Number,
        required: true,
      },
      special_defense_EVs: {
        type: Number,
        required: true,
      },
      speed_EVs: {
        type: Number,
        required: true,
      },
      move_1: {
        type: String,
      },
      move_2: {
        type: String,
      },
      move_3: {
        type: String,
      },
      move_4: {
        type: String,
      },
    },
    member5: {
      species: {
        type: String,
        required: true,
        trim: true,
      },
      nickname: {
        type: String,
        trim: true,
      },
      level: {
        type: Number,
        required: true,
      },
      ability: {
        type: String,
        required: true,
      },
      nature: {
        type: String,
        required: true,
      },
      held_item: {
        type: String,
      },
      HP_IVs: {
        type: Number,
        required: true,
      },
      attack_IVs: {
        type: Number,
        required: true,
      },
      defense_IVs: {
        type: Number,
        required: true,
      },
      special_attack_IVs: {
        type: Number,
        required: true,
      },
      special_defense_IVs: {
        type: Number,
        required: true,
      },
      speed_IVs: {
        type: Number,
        required: true,
      },
      HP_EVs: {
        type: Number,
        required: true,
      },
      attack_EVs: {
        type: Number,
        required: true,
      },
      defense_EVs: {
        type: Number,
        required: true,
      },
      special_attack_EVs: {
        type: Number,
        required: true,
      },
      special_defense_EVs: {
        type: Number,
        required: true,
      },
      speed_EVs: {
        type: Number,
        required: true,
      },
      move_1: {
        type: String,
      },
      move_2: {
        type: String,
      },
      move_3: {
        type: String,
      },
      move_4: {
        type: String,
      },
    },
    member6: {
      species: {
        type: String,
        required: true,
        trim: true,
      },
      nickname: {
        type: String,
        trim: true,
      },
      level: {
        type: Number,
        required: true,
      },
      ability: {
        type: String,
        required: true,
      },
      nature: {
        type: String,
        required: true,
      },
      held_item: {
        type: String,
      },
      HP_IVs: {
        type: Number,
        required: true,
      },
      attack_IVs: {
        type: Number,
        required: true,
      },
      defense_IVs: {
        type: Number,
        required: true,
      },
      special_attack_IVs: {
        type: Number,
        required: true,
      },
      special_defense_IVs: {
        type: Number,
        required: true,
      },
      speed_IVs: {
        type: Number,
        required: true,
      },
      HP_EVs: {
        type: Number,
        required: true,
      },
      attack_EVs: {
        type: Number,
        required: true,
      },
      defense_EVs: {
        type: Number,
        required: true,
      },
      special_attack_EVs: {
        type: Number,
        required: true,
      },
      special_defense_EVs: {
        type: Number,
        required: true,
      },
      speed_EVs: {
        type: Number,
        required: true,
      },
      move_1: {
        type: String,
      },
      move_2: {
        type: String,
      },
      move_3: {
        type: String,
      },
      move_4: {
        type: String,
      },
    },
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

TeamSchema.statics.toAPI = (doc) => ({
  name: doc.name,
  team: doc.team,
});

const TeamModel = mongoose.model('Team', TeamSchema);
module.exports = TeamModel;
