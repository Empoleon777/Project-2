const mongoose = require('mongoose');
const _ = require('underscore');

const setName = (name) => _.escape(name).trim();

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        set: setName
    },
    team: {
        member1: {
            species: {
                type: String,
                required: true,
                trim: true
            },
            nickname: {
                type: String,
                trim: true
            },
            ability: {
                type: String,
                required: true
            },
            nature: {
                type: String,
                required: true
            },
            heldItem: {
                type: String
            },
            HPIVs: {
                type: Number,
                required: true
            },
            attackIVs: {
                type: Number,
                required: true
            },
            defenseIVs: {
                type: Number,
                required: true
            },
            specialAttackIVs: {
                type: Number,
                required: true
            },
            specialDefenseIVs: {
                type: Number,
                required: true
            },
            speedIVs: {
                type: Number,
                required: true
            },
            HPEVs: {
                type: Number,
                required: true
            },
            attackEVs: {
                type: Number,
                required: true
            },
            defenseEVs: {
                type: Number,
                required: true
            },
            specialAttackEVs: {
                type: Number,
                required: true
            },
            specialDefenseEVs: {
                type: Number,
                required: true
            },
            speedEVs: {
                type: Number,
                required: true
            },
            move1: {
                type: String
            },
            move2: {
                type: String
            },
            move3: {
                type: String
            },
            move4: {
                type: String
            }
        },
        member2: {
            species: {
                type: String,
                required: true,
                trim: true
            },
            nickname: {
                type: String,
                trim: true
            },
            ability: {
                type: String,
                required: true
            },
            nature: {
                type: String,
                required: true
            },
            heldItem: {
                type: String
            },
            HPIVs: {
                type: Number,
                required: true
            },
            attackIVs: {
                type: Number,
                required: true
            },
            defenseIVs: {
                type: Number,
                required: true
            },
            specialAttackIVs: {
                type: Number,
                required: true
            },
            specialDefenseIVs: {
                type: Number,
                required: true
            },
            speedIVs: {
                type: Number,
                required: true
            },
            HPEVs: {
                type: Number,
                required: true
            },
            attackEVs: {
                type: Number,
                required: true
            },
            defenseEVs: {
                type: Number,
                required: true
            },
            specialAttackEVs: {
                type: Number,
                required: true
            },
            specialDefenseEVs: {
                type: Number,
                required: true
            },
            speedEVs: {
                type: Number,
                required: true
            },
            move1: {
                type: String
            },
            move2: {
                type: String
            },
            move3: {
                type: String
            },
            move4: {
                type: String
            }
        },
        member3: {
            species: {
                type: String,
                required: true,
                trim: true
            },
            nickname: {
                type: String,
                trim: true
            },
            ability: {
                type: String,
                required: true
            },
            nature: {
                type: String,
                required: true
            },
            heldItem: {
                type: String
            },
            HPIVs: {
                type: Number,
                required: true
            },
            attackIVs: {
                type: Number,
                required: true
            },
            defenseIVs: {
                type: Number,
                required: true
            },
            specialAttackIVs: {
                type: Number,
                required: true
            },
            specialDefenseIVs: {
                type: Number,
                required: true
            },
            speedIVs: {
                type: Number,
                required: true
            },
            HPEVs: {
                type: Number,
                required: true
            },
            attackEVs: {
                type: Number,
                required: true
            },
            defenseEVs: {
                type: Number,
                required: true
            },
            specialAttackEVs: {
                type: Number,
                required: true
            },
            specialDefenseEVs: {
                type: Number,
                required: true
            },
            speedEVs: {
                type: Number,
                required: true
            },
            move1: {
                type: String
            },
            move2: {
                type: String
            },
            move3: {
                type: String
            },
            move4: {
                type: String
            }
        },
        member4: {
            species: {
                type: String,
                required: true,
                trim: true
            },
            nickname: {
                type: String,
                trim: true
            },
            ability: {
                type: String,
                required: true
            },
            nature: {
                type: String,
                required: true
            },
            heldItem: {
                type: String
            },
            HPIVs: {
                type: Number,
                required: true
            },
            attackIVs: {
                type: Number,
                required: true
            },
            defenseIVs: {
                type: Number,
                required: true
            },
            specialAttackIVs: {
                type: Number,
                required: true
            },
            specialDefenseIVs: {
                type: Number,
                required: true
            },
            speedIVs: {
                type: Number,
                required: true
            },
            HPEVs: {
                type: Number,
                required: true
            },
            attackEVs: {
                type: Number,
                required: true
            },
            defenseEVs: {
                type: Number,
                required: true
            },
            specialAttackEVs: {
                type: Number,
                required: true
            },
            specialDefenseEVs: {
                type: Number,
                required: true
            },
            speedEVs: {
                type: Number,
                required: true
            },
            move1: {
                type: String
            },
            move2: {
                type: String
            },
            move3: {
                type: String
            },
            move4: {
                type: String
            }
        },
        member5: {
            species: {
                type: String,
                required: true,
                trim: true
            },
            nickname: {
                type: String,
                trim: true
            },
            ability: {
                type: String,
                required: true
            },
            nature: {
                type: String,
                required: true
            },
            heldItem: {
                type: String
            },
            HPIVs: {
                type: Number,
                required: true
            },
            attackIVs: {
                type: Number,
                required: true
            },
            defenseIVs: {
                type: Number,
                required: true
            },
            specialAttackIVs: {
                type: Number,
                required: true
            },
            specialDefenseIVs: {
                type: Number,
                required: true
            },
            speedIVs: {
                type: Number,
                required: true
            },
            HPEVs: {
                type: Number,
                required: true
            },
            attackEVs: {
                type: Number,
                required: true
            },
            defenseEVs: {
                type: Number,
                required: true
            },
            specialAttackEVs: {
                type: Number,
                required: true
            },
            specialDefenseEVs: {
                type: Number,
                required: true
            },
            speedEVs: {
                type: Number,
                required: true
            },
            move1: {
                type: String
            },
            move2: {
                type: String
            },
            move3: {
                type: String
            },
            move4: {
                type: String
            }
        },
        member6: {
            species: {
                type: String,
                required: true,
                trim: true
            },
            nickname: {
                type: String,
                trim: true
            },
            ability: {
                type: String,
                required: true
            },
            nature: {
                type: String,
                required: true
            },
            heldItem: {
                type: String
            },
            HPIVs: {
                type: Number,
                required: true
            },
            attackIVs: {
                type: Number,
                required: true
            },
            defenseIVs: {
                type: Number,
                required: true
            },
            specialAttackIVs: {
                type: Number,
                required: true
            },
            specialDefenseIVs: {
                type: Number,
                required: true
            },
            speedIVs: {
                type: Number,
                required: true
            },
            HPEVs: {
                type: Number,
                required: true
            },
            attackEVs: {
                type: Number,
                required: true
            },
            defenseEVs: {
                type: Number,
                required: true
            },
            specialAttackEVs: {
                type: Number,
                required: true
            },
            specialDefenseEVs: {
                type: Number,
                required: true
            },
            speedEVs: {
                type: Number,
                required: true
            },
            move1: {
                type: String
            },
            move2: {
                type: String
            },
            move3: {
                type: String
            },
            move4: {
                type: String
            }
        }
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Account',
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
});

TeamSchema.statics.toAPI = (doc) => ({
    name: doc.name,
    team: doc.team
});

const TeamModel = mongoose.model('Team', TeamSchema);
module.exports = TeamModel;