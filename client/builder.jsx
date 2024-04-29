// import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
const helper = require('./helper.js');
const React = require('react');
const ReactDOM = require('react-dom');
const { find } = require('underscore');

let pokemonData;
let abilityData;
let moveData;
let natureData;
let itemData;
let typeData;

let premiumStatus;

const loadData = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
    });
    const data = await response.json();

    return data;
}

const reformatName = (name) => {
    // This section will remove unnecessary dashes. However, there are some cases where they're part of the name.
    for (let i = 0; i < name.length; i++) {
        if (name[i] === '-' &&
            (name != "porygon-z" ||
                name != "jangmo-o" ||
                name != "hakamo-o" ||
                name != "kommo-o" ||
                name != "u-turn" ||
                name != "x-scissor" ||
                name != "topsy-turvy" ||
                (name != "baby-doll-eyes" && name.indexOf("-") != i) ||
                (name != "power-up-punch" && name.indexOf("-") != i) ||
                (name != "wake-up-slap" && name.indexOf("-") != i) ||
                name != "v-create" ||
                name != "will-o-wisp" ||
                name != "trick-or-treat" ||
                name != "freeze-dry" ||
                name != "double-edge" ||
                name != "multi-attack" ||
                name != "self-destruct" ||
                name != "soft-boiled" ||
                (name != "heavy-duty-boots" && name.indexOf("-") != i) ||
                (name != "never-melt-ice" && name.indexOf("-") != i) ||
                (name != "twice-spiced-radish" && name.indexOf("-") != i) ||
                (name != "fresh-start-mochi" && name.indexOf("-") != i) ||
                name != "go-goggles" ||
                (name != "make-up-bag" && name.indexOf("-") != i) ||
                name != "n-solarizer" ||
                name != "n-lunarizer" ||
                (name != "z-power-ring" && name.indexOf("-") != i) ||
                name != "z-ring" ||
                name != "up-grade")) {
            name != " ";
        }

        // This section capitalizes words.
        name = name.charAt(0).toUpperCase() + name.slice(1);

        if ((name[i] === '-' ||
            name[i] === " ") &&
            (name != "u-turn" ||
                name != "v-create")) {
            name = name.slice(0, i + 1) + name.charAt(i + 1).toUpperCase() + name.slice(i + 2);
        }
    }

    // The reformatted name is returned.
    return name;
}

const handleTeam = (e) => {
    e.preventDefault();
    helper.hideError();

    const teamName = e.target.querySelector(".teamName");

    const speciesSelectors = document.querySelectorAll(".speciesSelector");
    const nicknameBars = document.querySelectorAll(".nicknameBar");
    const levelBars = document.querySelectorAll(".levelBar");
    const abilitySelectors = document.querySelectorAll(".abilitySelector");
    const natureSelectors = document.querySelectorAll(".natureSelector");
    const itemSelectors = document.querySelectorAll(".itemSelector");
    const HPIVBars = document.querySelectorAll(".HPIVBar");
    const HPEVBars = document.querySelectorAll(".HPEVBar");
    const attackIVBars = document.querySelectorAll(".attackIVBar");
    const attackEVBars = document.querySelectorAll(".attackEVBar");
    const defenseIVBars = document.querySelectorAll(".defenseIVBar");
    const defenseEVBars = document.querySelectorAll(".defenseEVBar");
    const specialAttackIVBars = document.querySelectorAll(".specialAttackIVBar");
    const specialAttackEVBars = document.querySelectorAll(".specialAttackEVBar");
    const specialDefenseIVBars = document.querySelectorAll(".specialDefenseIVBar");
    const specialDefenseEVBars = document.querySelectorAll(".specialDefenseEVBar");
    const speedIVBars = document.querySelectorAll(".speedIVBar");
    const speedEVBars = document.querySelectorAll(".speedEVBar");
    const moveSelectors = document.querySelectorAll(".moveSelector1") + document.querySelectorAll(".moveSelector2") + document.querySelectorAll(".moveSelector3") + document.querySelectorAll(".moveSelector4");

    const member1 = {
        species: speciesSelectors[0].value.name,
        nickname: nicknameBars[0].value,
        level: levelBars[0].value,
        ability: abilitySelectors[0].value,
        nature: natureSelectors[0].value.name,
        held_item: itemSelectors[0].value.name,
        HP_IVs: HPIVBars[0].value,
        HP_EVs: HPEVBars[0].value,
        attack_IVs: attackIVBars[0].value,
        attack_EVs: attackEVBars[0].value,
        defense_IVs: defenseIVBars[0].value,
        defense_EVs: defenseEVBars[0].value,
        special_attack_IVs: specialAttackIVBars[0].value,
        special_attack_EVs: specialAttackEVBars[0].value,
        special_defense_IVs: specialDefenseIVBars[0].value,
        special_defense_EVs: specialDefenseEVBars[0].value,
        speed_IVs: speedIVBars[0].value,
        speed_EVs: speedEVBars[0].value,
        move_1: moveSelectors[0].value,
        move_2: moveSelectors[1].value,
        move_3: moveSelectors[2].value,
        move_4: moveSelectors[3].value
    };

    const member2 = {
        species: speciesSelectors[1].value.name,
        nickname: nicknameBars[1].value,
        level: levelBars[1].value,
        ability: abilitySelectors[1].value,
        nature: natureSelectors[1].value.name,
        held_item: itemSelectors[1].value.name,
        HP_IVs: HPIVBars[1].value,
        HP_EVs: HPEVBars[1].value,
        attack_IVs: attackIVBars[1].value,
        attack_EVs: attackEVBars[1].value,
        defense_IVs: defenseIVBars[1].value,
        defense_EVs: defenseEVBars[1].value,
        special_attack_IVs: specialAttackIVBars[1].value,
        special_attack_EVs: specialAttackEVBars[1].value,
        special_defense_IVs: specialDefenseIVBars[1].value,
        special_defense_EVs: specialDefenseEVBars[1].value,
        speed_IVs: speedIVBars[1].value,
        speed_EVs: speedEVBars[1].value,
        move_1: moveSelectors[4].value,
        move_2: moveSelectors[5].value,
        move_3: moveSelectors[6].value,
        move_4: moveSelectors[7].value
    };

    const member3 = {
        species: speciesSelectors[2].value.name,
        nickname: nicknameBars[2].value,
        level: levelBars[2].value,
        ability: abilitySelectors[2].value,
        nature: natureSelectors[2].value.name,
        held_item: itemSelectors[2].value.name,
        HP_IVs: HPIVBars[2].value,
        HP_EVs: HPEVBars[2].value,
        attack_IVs: attackIVBars[2].value,
        attack_EVs: attackEVBars[2].value,
        defense_IVs: defenseIVBars[2].value,
        defense_EVs: defenseEVBars[2].value,
        special_attack_IVs: specialAttackIVBars[2].value,
        special_attack_EVs: specialAttackEVBars[2].value,
        special_defense_IVs: specialDefenseIVBars[2].value,
        special_defense_EVs: specialDefenseEVBars[2].value,
        speed_IVs: speedIVBars[2].value,
        speed_EVs: speedEVBars[2].value,
        move_1: moveSelectors[8].value,
        move_2: moveSelectors[9].value,
        move_3: moveSelectors[10].value,
        move_4: moveSelectors[11].value
    };

    const member4 = {
        species: speciesSelectors[3].value.name,
        nickname: nicknameBars[3].value,
        level: levelBars[3].value,
        ability: abilitySelectors[3].value,
        nature: natureSelectors[3].value.name,
        held_item: itemSelectors[3].value.name,
        HP_IVs: HPIVBars[3].value,
        HP_EVs: HPEVBars[3].value,
        attack_IVs: attackIVBars[3].value,
        attack_EVs: attackEVBars[3].value,
        defense_IVs: defenseIVBars[3].value,
        defense_EVs: defenseEVBars[3].value,
        special_attack_IVs: specialAttackIVBars[3].value,
        special_attack_EVs: specialAttackEVBars[3].value,
        special_defense_IVs: specialDefenseIVBars[3].value,
        special_defense_EVs: specialDefenseEVBars[3].value,
        speed_IVs: speedIVBars[3].value,
        speed_EVs: speedEVBars[3].value,
        move_1: moveSelectors[12].value,
        move_2: moveSelectors[13].value,
        move_3: moveSelectors[14].value,
        move_4: moveSelectors[15].value
    };

    const member5 = {
        species: speciesSelectors[4].value.name,
        nickname: nicknameBars[4].value,
        level: levelBars[4].value,
        ability: abilitySelectors[4].value,
        nature: natureSelectors[4].value.name,
        held_item: itemSelectors[4].value.name,
        HP_IVs: HPIVBars[4].value,
        HP_EVs: HPEVBars[4].value,
        attack_IVs: attackIVBars[4].value,
        attack_EVs: attackEVBars[4].value,
        defense_IVs: defenseIVBars[4].value,
        defense_EVs: defenseEVBars[4].value,
        special_attack_IVs: specialAttackIVBars[4].value,
        special_attack_EVs: specialAttackEVBars[4].value,
        special_defense_IVs: specialDefenseIVBars[4].value,
        special_defense_EVs: specialDefenseEVBars[4].value,
        speed_IVs: speedIVBars[4].value,
        speed_EVs: speedEVBars[4].value,
        move_1: moveSelectors[16].value,
        move_2: moveSelectors[17].value,
        move_3: moveSelectors[18].value,
        move_4: moveSelectors[19].value
    };

    const member6 = {
        species: speciesSelectors[5].value.name,
        nickname: nicknameBars[5].value,
        level: levelBars[5].value,
        ability: abilitySelectors[5].value,
        nature: natureSelectors[5].value.name,
        held_item: itemSelectors[5].value.name,
        HP_IVs: HPIVBars[5].value,
        HP_EVs: HPEVBars[5].value,
        attack_IVs: attackIVBars[5].value,
        attack_EVs: attackEVBars[5].value,
        defense_IVs: defenseIVBars[5].value,
        defense_EVs: defenseEVBars[5].value,
        special_attack_IVs: specialAttackIVBars[5].value,
        special_attack_EVs: specialAttackEVBars[5].value,
        special_defense_IVs: specialDefenseIVBars[5].value,
        special_defense_EVs: specialDefenseEVBars[5].value,
        speed_IVs: speedIVBars[5].value,
        speed_EVs: speedEVBars[5].value,
        move_1: moveSelectors[20].value,
        move_2: moveSelectors[21].value,
        move_3: moveSelectors[22].value,
        move_4: moveSelectors[23].value
    };

    helper.sendPost(e.target.action,
        {
            teamName,
            member1,
            member2,
            member3,
            member4,
            member5,
            member6
        },
        loadTeamsFromServer
    );

    return false
}

const addTeam = (e) => {
    const speciesSelectors = document.querySelectorAll(".speciesSelector");

    for (let i = 0; i < speciesSelectors.length; i++) {
        speciesSelectors[i].value = "NONE";
        loadSpecies(i);
    }
}

const deleteTeam = async (e, team) => {
    e.preventDefault();
    helper.hideError();

    const response = await fetch(`/deleteTeam?_id=${team._id}`, {
        method: 'DELETE',
    });
    const data = await response.json();

    loadTeamsFromServer();

    return false;
}

const styleTypes = () => {
    const typeBlocks = document.querySelectorAll(".type");

    for (let i = 0; i < typeBlocks.length; i++) {
        if (typeBlocks[i].innerHTML == "Normal") {
            typeBlocks[i].style.backgroundColor = "#aca594";
            typeBlocks[i].style.borderColor = "#aca594";
        }
        else if (typeBlocks[i].innerHTML == "Fire") {
            typeBlocks[i].style.backgroundColor = "#ec502a";
            typeBlocks[i].style.borderColor = "#ec502a";
        }
        else if (typeBlocks[i].innerHTML == "Water") {
            typeBlocks[i].style.backgroundColor = "#4f9eff";
            typeBlocks[i].style.borderColor = "#4f9eff";
        }
        else if (typeBlocks[i].innerHTML == "Electric") {
            typeBlocks[i].style.backgroundColor = "#f9c52d";
            typeBlocks[i].style.borderColor = "#f9c52d";
        }
        else if (typeBlocks[i].innerHTML == "Grass") {
            typeBlocks[i].style.backgroundColor = "#86cd54";
            typeBlocks[i].style.borderColor = "#86cd54";
        }
        else if (typeBlocks[i].innerHTML == "Ice") {
            typeBlocks[i].style.backgroundColor = "#6fcfe8";
            typeBlocks[i].style.borderColor = "#6fcfe8";
        }
        else if (typeBlocks[i].innerHTML == "Fighting") {
            typeBlocks[i].style.backgroundColor = "#9e5137";
            typeBlocks[i].style.borderColor = "#9e5137";
        }
        else if (typeBlocks[i].innerHTML == "Poison") {
            typeBlocks[i].style.backgroundColor = "#ae5ba4";
            typeBlocks[i].style.borderColor = "#ae5ba4";
        }
        else if (typeBlocks[i].innerHTML == "Ground") {
            typeBlocks[i].style.backgroundColor = "#e0cb8b";
            typeBlocks[i].style.borderColor = "#e0cb8b";
        }
        else if (typeBlocks[i].innerHTML == "Flying") {
            typeBlocks[i].style.backgroundColor = "#9faef7";
            typeBlocks[i].style.borderColor = "#9faef7";
        }
        else if (typeBlocks[i].innerHTML == "Psychic") {
            typeBlocks[i].style.backgroundColor = "#f573a4";
            typeBlocks[i].style.borderColor = "#f573a4";
        }
        else if (typeBlocks[i].innerHTML == "Bug") {
            typeBlocks[i].style.backgroundColor = "#aebc21";
            typeBlocks[i].style.borderColor = "#aebc21";
        }
        else if (typeBlocks[i].innerHTML == "Rock") {
            typeBlocks[i].style.backgroundColor = "#baa459";
            typeBlocks[i].style.borderColor = "#baa459";
        }
        else if (typeBlocks[i].innerHTML == "Ghost") {
            typeBlocks[i].style.backgroundColor = "#6465b5";
            typeBlocks[i].style.borderColor = "#6465b5";
        }
        else if (typeBlocks[i].innerHTML == "Dragon") {
            typeBlocks[i].style.backgroundColor = "#7a66e7";
            typeBlocks[i].style.borderColor = "#7a66e7";
        }
        else if (typeBlocks[i].innerHTML == "Dark") {
            typeBlocks[i].style.backgroundColor = "#715a4a";
            typeBlocks[i].style.borderColor = "#715a4a";
        }
        else if (typeBlocks[i].innerHTML == "Steel") {
            typeBlocks[i].style.backgroundColor = "#adadc6";
            typeBlocks[i].style.borderColor = "#adadc6";
        }
        else {
            typeBlocks[i].style.backgroundColor = "#f1b6f7";
            typeBlocks[i].style.borderColor = "#f1b6f7";
        }
    }
}

const loadSpecies = (memberNumber) => {
    const speciesSelectors = document.querySelectorAll(".speciesSelector");
    const nicknameBars = document.querySelectorAll(".nicknameBar");
    const sprites = document.querySelectorAll(".sprite");
    const types = document.querySelectorAll(".types");
    const levelBars = document.querySelectorAll(".levelBar");
    const abilitySelectors = document.querySelectorAll(".abilitySelector");
    const natureSelectors = document.querySelectorAll(".natureSelector");
    const itemSelectors = document.querySelectorAll(".itemSelector");
    const baseHPSections = document.querySelectorAll(".baseHP");
    const HPIVBars = document.querySelectorAll(".HPIVBar");
    const HPEVBars = document.querySelectorAll(".HPEVBar");
    const finalHPSections = document.querySelectorAll(".finalHP");
    const baseAttackSections = document.querySelectorAll(".baseAttack");
    const attackIVBars = document.querySelectorAll(".attackIVBar");
    const attackEVBars = document.querySelectorAll(".attackEVBar");
    const finalAttackSections = document.querySelectorAll(".finalAttack");
    const baseDefenseSections = document.querySelectorAll(".baseDefense");
    const defenseIVBars = document.querySelectorAll(".defenseIVBar");
    const defenseEVBars = document.querySelectorAll(".defenseEVBar");
    const finalDefenseSections = document.querySelectorAll(".finalDefense");
    const baseSpecialAttackSections = document.querySelectorAll(".baseSpecialAttack");
    const specialAttackIVBars = document.querySelectorAll(".specialAttackIVBar");
    const specialAttackEVBars = document.querySelectorAll(".specialAttackEVBar");
    const finalSpecialAttackSections = document.querySelectorAll(".finalSpecialAttack");
    const baseSpecialDefenseSections = document.querySelectorAll(".baseSpecialDefense");
    const specialDefenseIVBars = document.querySelectorAll(".specialDefenseIVBar");
    const specialDefenseEVBars = document.querySelectorAll(".specialDefenseEVBar");
    const finalSpecialDefenseSections = document.querySelectorAll(".finalSpecialDefense");
    const baseSpeedSections = document.querySelectorAll(".baseSpeed");
    const speedIVBars = document.querySelectorAll(".speedIVBar");
    const speedEVBars = document.querySelectorAll(".speedEVBar");
    const finalSpeedSections = document.querySelectorAll(".finalSpeed");
    const moveSelectors = document.querySelectorAll(".moveSelector1") + document.querySelectorAll(".moveSelector2") + document.querySelectorAll(".moveSelector3") + document.querySelectorAll(".moveSelector4");

    if (speciesSelectors[memberNumber].value != "NONE") {
        const species = JSON.parse(speciesSelectors[memberNumber].value);

        nicknameBars[memberNumber].value = "";

        sprites[memberNumber].src = species["sprites"]["home"]["front_default"];
        types[memberNumber].innerHTML = `${species["types"].map(type => `<div className="type">${reformatName(type["type"]["name"])}</div>`).join("")}`;
        styleTypes(memberNumber);

        levelBars[memberNumber].value = 100;
        natureSelectors[memberNumber].value = natureSelectors[memberNumber].find((nature) => { nature.value.name == "serious" });
        itemSelectors[memberNumber].value = "NONE";

        baseHPSections[memberNumber].innerHTML = species["stats"][0][base_stat];
        baseAttackSections[memberNumber].innerHTML = species["stats"][1][base_stat];
        baseDefenseSections[memberNumber].innerHTML = species["stats"][2][base_stat];
        baseSpecialAttackSections[memberNumber].innerHTML = species["stats"][3][base_stat];
        baseSpecialDefenseSections[memberNumber].innerHTML = species["stats"][4][base_stat];
        baseSpeedSections[memberNumber].innerHTML = species["stats"][5][base_stat];

        HPIVBars[memberNumber].value = 31;
        attackIVBars[memberNumber].value = 31;
        defenseIVBars[memberNumber].value = 31;
        specialAttackIVBars[memberNumber].value = 31;
        specialDefenseIVBars[memberNumber].value = 31;
        speedIVBars[memberNumber].value = 31;

        HPEVBars[memberNumber].value = 0;
        attackEVBars[memberNumber].value = 0;
        defenseEVBars[memberNumber].value = 0;
        specialAttackEVBars[memberNumber].value = 0;
        specialDefenseEVBars[memberNumber].value = 0;
        speedEVBars[memberNumber].value = 0;

        calcStats(memberNumber);

        let abilities = [];
        species["abilities"].forEach(ability => {
            abilities.push(abilityData.find(data => data.name === ability.name));
        });
        abilitySelectors[memberNumber].innerHTML = `${abilities.map(ability => `<option value="${ability}">${reformatName(ability.name)}</option>`).join("")}`;

        let moves = [];
        species["moves"].forEach(move => {
            moves.push(moveData.find(data => data.name === move.name));
        });

        moveSelectors[memberNumber * 4].innerHTML = `<option value="NONE">---Select Move---</option>`;
        moveSelectors[(memberNumber * 4) + 1].innerHTML = `<option value="NONE">---Select Move---</option>`;
        moveSelectors[(memberNumber * 4) + 2].innerHTML = `<option value="NONE">---Select Move---</option>`;
        moveSelectors[(memberNumber * 4) + 3].innerHTML = `<option value="NONE">---Select Move---</option>`;

        moveSelectors[memberNumber * 4].innerHTML += `${moves.map(move => `<option value="${move}">${reformatName(move.name)}</option>`).join("")}`;
        moveSelectors[(memberNumber * 4) + 1].innerHTML += `${moves.map(move => `<option value="${move}">${reformatName(move.name)}</option>`).join("")}`;
        moveSelectors[(memberNumber * 4) + 2].innerHTML += `${moves.map(move => `<option value="${move}">${reformatName(move.name)}</option>`).join("")}`;
        moveSelectors[(memberNumber * 4) + 3].innerHTML += `${moves.map(move => `<option value="${move}">${reformatName(move.name)}</option>`).join("")}`;
    }
    else {
        nicknameBars[memberNumber].value = "";
        sprites[innerHTML].src = "";
        types[memberNumber].innerHTML = "";
        levelBars[memberNumber].value = 100;
        abilitySelectors[memberNumber].innerHTML = "";
        natureSelectors[memberNumber].value = natureSelectors[memberNumber].find((nature) => { nature.value.name == "serious" });
        itemSelectors[memberNumber].value = "NONE";

        baseHPSections[memberNumber].innerHTML = "";
        baseAttackSections[memberNumber].innerHTML = "";
        baseDefenseSections[memberNumber].innerHTML = "";
        baseSpecialAttackSections[memberNumber].innerHTML = "";
        baseSpecialDefenseSections[memberNumber].innerHTML = "";
        baseSpeedSections[memberNumber].innerHTML = "";

        HPIVBars[memberNumber].value = 31;
        attackIVBars[memberNumber].value = 31;
        defenseIVBars[memberNumber].value = 31;
        specialAttackIVBars[memberNumber].value = 31;
        specialDefenseIVBars[memberNumber].value = 31;
        speedIVBars[memberNumber].value = 31;

        HPEVBars[memberNumber].value = 0;
        attackEVBars[memberNumber].value = 0;
        defenseEVBars[memberNumber].value = 0;
        specialAttackEVBars[memberNumber].value = 0;
        specialDefenseEVBars[memberNumber].value = 0;
        speedEVBars[memberNumber].value = 0;

        finalHPSections[memberNumber].innerHTML = "";
        finalAttackSections[memberNumber].innerHTML = "";
        finalDefenseSections[memberNumber].innerHTML = "";
        finalSpecialAttackSections[memberNumber].innerHTML = "";
        finalSpecialDefenseSections[memberNumber].innerHTML = "";
        finalSpeedSections[memberNumber].innerHTML = "";

        moveSelectors[memberNumber * 4].innerHTML = `<option value="NONE">---Select Move---</option>`;
        moveSelectors[(memberNumber * 4) + 1].innerHTML = `<option value="NONE">---Select Move---</option>`;
        moveSelectors[(memberNumber * 4) + 2].innerHTML = `<option value="NONE">---Select Move---</option>`;
        moveSelectors[(memberNumber * 4) + 3].innerHTML = `<option value="NONE">---Select Move---</option>`;
    }
}

const calcStats = (memberNumber) => {
    const levelBars = document.querySelectorAll(".levelBar");
    const natureSelectors = document.querySelectorAll(".natureSelector");
    const baseHPSections = document.querySelectorAll(".baseHP");
    const HPIVBars = document.querySelectorAll(".HPIVBar");
    const HPEVBars = document.querySelectorAll(".HPEVBar");
    const finalHPSections = document.querySelectorAll(".finalHP");
    const baseAttackSections = document.querySelectorAll(".baseAttack");
    const attackIVBars = document.querySelectorAll(".attackIVBar");
    const attackEVBars = document.querySelectorAll(".attackEVBar");
    const finalAttackSections = document.querySelectorAll(".finalAttack");
    const baseDefenseSections = document.querySelectorAll(".baseDefense");
    const defenseIVBars = document.querySelectorAll(".defenseIVBar");
    const defenseEVBars = document.querySelectorAll(".defenseEVBar");
    const finalDefenseSections = document.querySelectorAll(".finalDefense");
    const baseSpecialAttackSections = document.querySelectorAll(".baseSpecialAttack");
    const specialAttackIVBars = document.querySelectorAll(".specialAttackIVBar");
    const specialAttackEVBars = document.querySelectorAll(".specialAttackEVBar");
    const finalSpecialAttackSections = document.querySelectorAll(".finalSpecialAttack");
    const baseSpecialDefenseSections = document.querySelectorAll(".baseSpecialDefense");
    const specialDefenseIVBars = document.querySelectorAll(".specialDefenseIVBar");
    const specialDefenseEVBars = document.querySelectorAll(".specialDefenseEVBar");
    const finalSpecialDefenseSections = document.querySelectorAll(".finalSpecialDefense");
    const baseSpeedSections = document.querySelectorAll(".baseSpeed");
    const speedIVBars = document.querySelectorAll(".speedIVBar");
    const speedEVBars = document.querySelectorAll(".speedEVBar");
    const finalSpeedSections = document.querySelectorAll(".finalSpeed");

    const nature = JSON.parse(natureSelectors[memberNumber].value);

    if (baseHPSections[memberNumber] && baseAttackSections[memberNumber] && baseDefenseSections[memberNumber] && baseSpecialAttackSections[memberNumber] && baseSpecialDefenseSections[memberNumber] && baseSpeedSections[memberNumber]) {
        let attackNatureMultiplier = 1.0;
        let defenseNatureMultiplier = 1.0;
        let specialAttackNatureMultiplier = 1.0;
        let specialDefenseNatureMultiplier = 1.0;
        let speedNatureMultiplier = 1.0;

        if (nature.increased_stat.name === "attack") {
            attackNatureMultiplier = 1.1;
        }
        else if (nature.increased_stat.name === "defense") {
            defenseNatureMultiplier = 1.1;
        }
        else if (nature.increased_stat.name === "special-attack") {
            specialAttackNatureMultiplier = 1.1;
        }
        else if (nature.increased_stat.name === "special-defense") {
            specialDefenseNatureMultiplier = 1.1;
        }
        else if (nature.increased_stat.name === "speed") {
            speedNatureMultiplier = 1.1;
        }

        if (nature.decreased_stat.name === "attack") {
            attackNatureMultiplier = 0.9;
        }
        else if (nature.decreased_stat.name === "defense") {
            defenseNatureMultiplier = 0.9;
        }
        else if (nature.decreased_stat.name === "special-attack") {
            specialAttackNatureMultiplier = 0.9;
        }
        else if (nature.decreased_stat.name === "special-defense") {
            specialDefenseNatureMultiplier = 0.9;
        }
        else if (nature.decreased_stat.name === "speed") {
            speedNatureMultiplier = 0.9;
        }

        finalHPSections[memberNumber].innerHTML = Math.floor(((2 * Number(baseHPSections[memberNumber].innerHTML) + HPIVBars[memberNumber].value + Math.floor(HPEVBars[memberNumber] / 4)) * levelBars[memberNumber]) / 100) + levelBars[memberNumber] + 10;
        finalAttackSections[memberNumber].innerHTML = Math.floor((Math.floor(((2 * Number(baseAttackSections[memberNumber].innerHTML) + attackIVBars[memberNumber].value + Math.floor(attackEVBars[memberNumber].value / 4)) * levelBars[memberNumber]) / 100) + 5) * Number(attackNatureMultiplier));
        finalDefenseSections[memberNumber].innerHTML = Math.floor((Math.floor(((2 * Number(baseDefenseSections[memberNumber].innerHTML) + defenseIVBars[memberNumber].value + Math.floor(defenseEVBars[memberNumber].value / 4)) * levelBars[memberNumber]) / 100) + 5) * Number(defenseNatureMultiplier));
        finalSpecialAttackSections[memberNumber].innerHTML = Math.floor((Math.floor(((2 * Number(baseSpecialAttackSections[memberNumber].innerHTML) + specialAttackIVBars[memberNumber].value + Math.floor(specialAttackEVBars[memberNumber].value / 4)) * levelBars[memberNumber]) / 100) + 5) * Number(specialAttackNatureMultiplier));
        finalSpecialDefenseSections[memberNumber].innerHTML = Math.floor((Math.floor(((2 * Number(baseSpecialDefenseSections[memberNumber].innerHTML) + specialDefenseIVBars[memberNumber].value + Math.floor(specialDefenseEVBars[memberNumber].value / 4)) * levelBars[memberNumber]) / 100) + 5) * Number(specialDefenseNatureMultiplier));
        finalSpeedSections[memberNumber].innerHTML = Math.floor((Math.floor(((2 * Number(baseSpeedSections[memberNumber].innerHTML) + speedIVBars[memberNumber].value + Math.floor(speedEVBars[memberNumber].value / 4)) * levelBars[memberNumber]) / 100) + 5) * Number(speedNatureMultiplier));
    }
}

const TeamBuilder = (props) => {
    return (
        <form id="teamBuilder"
            onChange={handleTeam}
            name="teamForm"
            action="/builder"
            method="POST"
            className="teamForm"
        >
            <div id="nameSpace">
                <label htmlFor="name">Team Name: </label>
                <input className="teamName" type="text" name="name" />
            </div>
            <div id="builderSpace">
                <Splide hasTrack={false}>
                    <SplideSlide>
                        <div className="member">
                            <h3 className="memberNumber">Member 1</h3>
                            <label htmlFor="species">Species: </label>
                            <select className="speciesSelector" name="species" onChange={loadSpecies(0)}>
                                <option value="NONE">---Species---</option>
                            </select>
                            <label htmlFor="nickname">Nickname: </label>
                            <input className="nicknameBar" type="text" name="nickname" placeholder="nickname" />
                            <img className="sprite" src=""></img>
                            <div className="types">
                            </div>
                            <label htmlFor="level">Level: </label>
                            <input className="levelBar" type="number" name="level" min="0" max="100" value="100" onChange={calcStats(0)} />
                            <label htmlFor="ability">Ability: </label>
                            <select className="abilitySelector" name="ability">
                            </select>
                            <label htmlFor="nature">Nature: </label>
                            <select className="natureSelector" name="nature" onChange={calcStats(0)}>
                            </select>
                            <label htmlFor="item">Held Item: </label>
                            <select className="itemSelector" name="item">
                            </select>
                            <label>HP: </label>
                            <div className="baseHP"></div>
                            <label htmlFor="HPIVs">IVs: </label>
                            <input className="HPIVBar" type="number" name="HPIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="HPEVs">EVs: </label>
                            <input className="HPEVBar" type="number" name="HPEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalHP"></div>
                            <label>Attack: </label>
                            <div className="baseAttack"></div>
                            <label htmlFor="attackIVs">IVs: </label>
                            <input className="attackIVBar" type="number" name="attackIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="attackEVs">EVs: </label>
                            <input className="attackEVBar" type="number" name="attackEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalAttack"></div>
                            <label>Defense: </label>
                            <div className="baseDefense"></div>
                            <label htmlFor="defenseIVs">IVs: </label>
                            <input className="defenseIVBar" type="number" name="defenseIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="defenseEVs">EVs: </label>
                            <input className="defenseEVBar" type="number" name="defenseEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalDefense"></div>
                            <label>Special Attack: </label>
                            <div className="baseSpecialAttack"></div>
                            <label htmlFor="specialAttackIVs">IVs: </label>
                            <input className="specialAttackIVBar" type="number" name="specialAttackIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="specialAttackEVs">EVs: </label>
                            <input className="specialAttackEVBar" type="number" name="specialAttackEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpecialAttack"></div>
                            <label>Special Defense: </label>
                            <div className="baseSpecialDefense"></div>
                            <label htmlFor="specialDefenseIVs">IVs: </label>
                            <input className="specialDefenseIVBar" type="number" name="specialDefenseIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="specialDefenseEVs">EVs: </label>
                            <input className="specialDefenseEVBar" type="number" name="specialDefenseEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpecialDefense"></div>
                            <label>Speed: </label>
                            <div className="baseSpeed"></div>
                            <label htmlFor="speedIVs">IVs: </label>
                            <input className="speedIVBar" type="number" name="speedIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="speedEVs">EVs: </label>
                            <input className="speedEVBar" type="number" name="speedEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpeed"></div>
                            <label htmlFor="moves">Moves: </label>
                            <select className="moveSelector1" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector2" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector3" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector4" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="member">
                            <h3 className="memberNumber">Member 2</h3>
                            <label htmlFor="species">Species: </label>
                            <select className="speciesSelector" name="species" onChange={loadSpecies(0)}>
                                <option value="NONE">---Species---</option>
                            </select>
                            <label htmlFor="nickname">Nickname: </label>
                            <input className="nicknameBar" type="text" name="nickname" placeholder="nickname" />
                            <img className="sprite" src=""></img>
                            <div className="types">
                            </div>
                            <label htmlFor="level">Level: </label>
                            <input className="levelBar" type="number" name="level" min="0" max="100" value="100" onChange={calcStats(0)} />
                            <label htmlFor="ability">Ability: </label>
                            <select className="abilitySelector" name="ability">
                            </select>
                            <label htmlFor="nature">Nature: </label>
                            <select className="natureSelector" name="nature" onChange={calcStats(0)}>
                            </select>
                            <label htmlFor="item">Held Item: </label>
                            <select className="itemSelector" name="item">
                            </select>
                            <label>HP: </label>
                            <div className="baseHP"></div>
                            <label htmlFor="HPIVs">IVs: </label>
                            <input className="HPIVBar" type="number" name="HPIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="HPEVs">EVs: </label>
                            <input className="HPEVBar" type="number" name="HPEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalHP"></div>
                            <label>Attack: </label>
                            <div className="baseAttack"></div>
                            <label htmlFor="attackIVs">IVs: </label>
                            <input className="attackIVBar" type="number" name="attackIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="attackEVs">EVs: </label>
                            <input className="attackEVBar" type="number" name="attackEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalAttack"></div>
                            <label>Defense: </label>
                            <div className="baseDefense"></div>
                            <label htmlFor="defenseIVs">IVs: </label>
                            <input className="defenseIVBar" type="number" name="defenseIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="defenseEVs">EVs: </label>
                            <input className="defenseEVBar" type="number" name="defenseEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalDefense"></div>
                            <label>Special Attack: </label>
                            <div className="baseSpecialAttack"></div>
                            <label htmlFor="specialAttackIVs">IVs: </label>
                            <input className="specialAttackIVBar" type="number" name="specialAttackIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="specialAttackEVs">EVs: </label>
                            <input className="specialAttackEVBar" type="number" name="specialAttackEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpecialAttack"></div>
                            <label>Special Defense: </label>
                            <div className="baseSpecialDefense"></div>
                            <label htmlFor="specialDefenseIVs">IVs: </label>
                            <input className="specialDefenseIVBar" type="number" name="specialDefenseIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="specialDefenseEVs">EVs: </label>
                            <input className="specialDefenseEVBar" type="number" name="specialDefenseEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpecialDefense"></div>
                            <label>Speed: </label>
                            <div className="baseSpeed"></div>
                            <label htmlFor="speedIVs">IVs: </label>
                            <input className="speedIVBar" type="number" name="speedIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="speedEVs">EVs: </label>
                            <input className="speedEVBar" type="number" name="speedEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpeed"></div>
                            <label htmlFor="moves">Moves: </label>
                            <select className="moveSelector1" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector2" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector3" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector4" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="member">
                            <h3 className="memberNumber">Member 3</h3>
                            <label htmlFor="species">Species: </label>
                            <select className="speciesSelector" name="species" onChange={loadSpecies(0)}>
                                <option value="NONE">---Species---</option>
                            </select>
                            <label htmlFor="nickname">Nickname: </label>
                            <input className="nicknameBar" type="text" name="nickname" placeholder="nickname" />
                            <img className="sprite" src=""></img>
                            <div className="types">
                            </div>
                            <label htmlFor="level">Level: </label>
                            <input className="levelBar" type="number" name="level" min="0" max="100" value="100" onChange={calcStats(0)} />
                            <label htmlFor="ability">Ability: </label>
                            <select className="abilitySelector" name="ability">
                            </select>
                            <label htmlFor="nature">Nature: </label>
                            <select className="natureSelector" name="nature" onChange={calcStats(0)}>
                            </select>
                            <label htmlFor="item">Held Item: </label>
                            <select className="itemSelector" name="item">
                            </select>
                            <label>HP: </label>
                            <div className="baseHP"></div>
                            <label htmlFor="HPIVs">IVs: </label>
                            <input className="HPIVBar" type="number" name="HPIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="HPEVs">EVs: </label>
                            <input className="HPEVBar" type="number" name="HPEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalHP"></div>
                            <label>Attack: </label>
                            <div className="baseAttack"></div>
                            <label htmlFor="attackIVs">IVs: </label>
                            <input className="attackIVBar" type="number" name="attackIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="attackEVs">EVs: </label>
                            <input className="attackEVBar" type="number" name="attackEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalAttack"></div>
                            <label>Defense: </label>
                            <div className="baseDefense"></div>
                            <label htmlFor="defenseIVs">IVs: </label>
                            <input className="defenseIVBar" type="number" name="defenseIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="defenseEVs">EVs: </label>
                            <input className="defenseEVBar" type="number" name="defenseEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalDefense"></div>
                            <label>Special Attack: </label>
                            <div className="baseSpecialAttack"></div>
                            <label htmlFor="specialAttackIVs">IVs: </label>
                            <input className="specialAttackIVBar" type="number" name="specialAttackIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="specialAttackEVs">EVs: </label>
                            <input className="specialAttackEVBar" type="number" name="specialAttackEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpecialAttack"></div>
                            <label>Special Defense: </label>
                            <div className="baseSpecialDefense"></div>
                            <label htmlFor="specialDefenseIVs">IVs: </label>
                            <input className="specialDefenseIVBar" type="number" name="specialDefenseIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="specialDefenseEVs">EVs: </label>
                            <input className="specialDefenseEVBar" type="number" name="specialDefenseEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpecialDefense"></div>
                            <label>Speed: </label>
                            <div className="baseSpeed"></div>
                            <label htmlFor="speedIVs">IVs: </label>
                            <input className="speedIVBar" type="number" name="speedIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="speedEVs">EVs: </label>
                            <input className="speedEVBar" type="number" name="speedEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpeed"></div>
                            <label htmlFor="moves">Moves: </label>
                            <select className="moveSelector1" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector2" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector3" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector4" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="member">
                            <h3 className="memberNumber">Member 4</h3>
                            <label htmlFor="species">Species: </label>
                            <select className="speciesSelector" name="species" onChange={loadSpecies(0)}>
                                <option value="NONE">---Species---</option>
                            </select>
                            <label htmlFor="nickname">Nickname: </label>
                            <input className="nicknameBar" type="text" name="nickname" placeholder="nickname" />
                            <img className="sprite" src=""></img>
                            <div className="types">
                            </div>
                            <label htmlFor="level">Level: </label>
                            <input className="levelBar" type="number" name="level" min="0" max="100" value="100" onChange={calcStats(0)} />
                            <label htmlFor="ability">Ability: </label>
                            <select className="abilitySelector" name="ability">
                            </select>
                            <label htmlFor="nature">Nature: </label>
                            <select className="natureSelector" name="nature" onChange={calcStats(0)}>
                            </select>
                            <label htmlFor="item">Held Item: </label>
                            <select className="itemSelector" name="item">
                            </select>
                            <label>HP: </label>
                            <div className="baseHP"></div>
                            <label htmlFor="HPIVs">IVs: </label>
                            <input className="HPIVBar" type="number" name="HPIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="HPEVs">EVs: </label>
                            <input className="HPEVBar" type="number" name="HPEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalHP"></div>
                            <label>Attack: </label>
                            <div className="baseAttack"></div>
                            <label htmlFor="attackIVs">IVs: </label>
                            <input className="attackIVBar" type="number" name="attackIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="attackEVs">EVs: </label>
                            <input className="attackEVBar" type="number" name="attackEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalAttack"></div>
                            <label>Defense: </label>
                            <div className="baseDefense"></div>
                            <label htmlFor="defenseIVs">IVs: </label>
                            <input className="defenseIVBar" type="number" name="defenseIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="defenseEVs">EVs: </label>
                            <input className="defenseEVBar" type="number" name="defenseEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalDefense"></div>
                            <label>Special Attack: </label>
                            <div className="baseSpecialAttack"></div>
                            <label htmlFor="specialAttackIVs">IVs: </label>
                            <input className="specialAttackIVBar" type="number" name="specialAttackIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="specialAttackEVs">EVs: </label>
                            <input className="specialAttackEVBar" type="number" name="specialAttackEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpecialAttack"></div>
                            <label>Special Defense: </label>
                            <div className="baseSpecialDefense"></div>
                            <label htmlFor="specialDefenseIVs">IVs: </label>
                            <input className="specialDefenseIVBar" type="number" name="specialDefenseIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="specialDefenseEVs">EVs: </label>
                            <input className="specialDefenseEVBar" type="number" name="specialDefenseEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpecialDefense"></div>
                            <label>Speed: </label>
                            <div className="baseSpeed"></div>
                            <label htmlFor="speedIVs">IVs: </label>
                            <input className="speedIVBar" type="number" name="speedIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="speedEVs">EVs: </label>
                            <input className="speedEVBar" type="number" name="speedEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpeed"></div>
                            <label htmlFor="moves">Moves: </label>
                            <select className="moveSelector1" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector2" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector3" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector4" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="member">
                            <h3 className="memberNumber">Member 5</h3>
                            <label htmlFor="species">Species: </label>
                            <select className="speciesSelector" name="species" onChange={loadSpecies(0)}>
                                <option value="NONE">---Species---</option>
                            </select>
                            <label htmlFor="nickname">Nickname: </label>
                            <input className="nicknameBar" type="text" name="nickname" placeholder="nickname" />
                            <img className="sprite" src=""></img>
                            <div className="types">
                            </div>
                            <label htmlFor="level">Level: </label>
                            <input className="levelBar" type="number" name="level" min="0" max="100" value="100" onChange={calcStats(0)} />
                            <label htmlFor="ability">Ability: </label>
                            <select className="abilitySelector" name="ability">
                            </select>
                            <label htmlFor="nature">Nature: </label>
                            <select className="natureSelector" name="nature" onChange={calcStats(0)}>
                            </select>
                            <label htmlFor="item">Held Item: </label>
                            <select className="itemSelector" name="item">
                            </select>
                            <label>HP: </label>
                            <div className="baseHP"></div>
                            <label htmlFor="HPIVs">IVs: </label>
                            <input className="HPIVBar" type="number" name="HPIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="HPEVs">EVs: </label>
                            <input className="HPEVBar" type="number" name="HPEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalHP"></div>
                            <label>Attack: </label>
                            <div className="baseAttack"></div>
                            <label htmlFor="attackIVs">IVs: </label>
                            <input className="attackIVBar" type="number" name="attackIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="attackEVs">EVs: </label>
                            <input className="attackEVBar" type="number" name="attackEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalAttack"></div>
                            <label>Defense: </label>
                            <div className="baseDefense"></div>
                            <label htmlFor="defenseIVs">IVs: </label>
                            <input className="defenseIVBar" type="number" name="defenseIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="defenseEVs">EVs: </label>
                            <input className="defenseEVBar" type="number" name="defenseEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalDefense"></div>
                            <label>Special Attack: </label>
                            <div className="baseSpecialAttack"></div>
                            <label htmlFor="specialAttackIVs">IVs: </label>
                            <input className="specialAttackIVBar" type="number" name="specialAttackIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="specialAttackEVs">EVs: </label>
                            <input className="specialAttackEVBar" type="number" name="specialAttackEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpecialAttack"></div>
                            <label>Special Defense: </label>
                            <div className="baseSpecialDefense"></div>
                            <label htmlFor="specialDefenseIVs">IVs: </label>
                            <input className="specialDefenseIVBar" type="number" name="specialDefenseIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="specialDefenseEVs">EVs: </label>
                            <input className="specialDefenseEVBar" type="number" name="specialDefenseEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpecialDefense"></div>
                            <label>Speed: </label>
                            <div className="baseSpeed"></div>
                            <label htmlFor="speedIVs">IVs: </label>
                            <input className="speedIVBar" type="number" name="speedIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="speedEVs">EVs: </label>
                            <input className="speedEVBar" type="number" name="speedEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpeed"></div>
                            <label htmlFor="moves">Moves: </label>
                            <select className="moveSelector1" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector2" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector3" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector4" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="member">
                            <h3 className="memberNumber">Member 6</h3>
                            <label htmlFor="species">Species: </label>
                            <select className="speciesSelector" name="species" onChange={loadSpecies(0)}>
                                <option value="NONE">---Species---</option>
                            </select>
                            <label htmlFor="nickname">Nickname: </label>
                            <input className="nicknameBar" type="text" name="nickname" placeholder="nickname" />
                            <img className="sprite" src=""></img>
                            <div className="types">
                            </div>
                            <label htmlFor="level">Level: </label>
                            <input className="levelBar" type="number" name="level" min="0" max="100" value="100" onChange={calcStats(0)} />
                            <label htmlFor="ability">Ability: </label>
                            <select className="abilitySelector" name="ability">
                            </select>
                            <label htmlFor="nature">Nature: </label>
                            <select className="natureSelector" name="nature" onChange={calcStats(0)}>
                            </select>
                            <label htmlFor="item">Held Item: </label>
                            <select className="itemSelector" name="item">
                            </select>
                            <label>HP: </label>
                            <div className="baseHP"></div>
                            <label htmlFor="HPIVs">IVs: </label>
                            <input className="HPIVBar" type="number" name="HPIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="HPEVs">EVs: </label>
                            <input className="HPEVBar" type="number" name="HPEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalHP"></div>
                            <label>Attack: </label>
                            <div className="baseAttack"></div>
                            <label htmlFor="attackIVs">IVs: </label>
                            <input className="attackIVBar" type="number" name="attackIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="attackEVs">EVs: </label>
                            <input className="attackEVBar" type="number" name="attackEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalAttack"></div>
                            <label>Defense: </label>
                            <div className="baseDefense"></div>
                            <label htmlFor="defenseIVs">IVs: </label>
                            <input className="defenseIVBar" type="number" name="defenseIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="defenseEVs">EVs: </label>
                            <input className="defenseEVBar" type="number" name="defenseEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalDefense"></div>
                            <label>Special Attack: </label>
                            <div className="baseSpecialAttack"></div>
                            <label htmlFor="specialAttackIVs">IVs: </label>
                            <input className="specialAttackIVBar" type="number" name="specialAttackIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="specialAttackEVs">EVs: </label>
                            <input className="specialAttackEVBar" type="number" name="specialAttackEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpecialAttack"></div>
                            <label>Special Defense: </label>
                            <div className="baseSpecialDefense"></div>
                            <label htmlFor="specialDefenseIVs">IVs: </label>
                            <input className="specialDefenseIVBar" type="number" name="specialDefenseIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="specialDefenseEVs">EVs: </label>
                            <input className="specialDefenseEVBar" type="number" name="specialDefenseEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpecialDefense"></div>
                            <label>Speed: </label>
                            <div className="baseSpeed"></div>
                            <label htmlFor="speedIVs">IVs: </label>
                            <input className="speedIVBar" type="number" name="speedIVs" min="0" max="31" value="31" onChange={calcStats(0)} />
                            <label htmlFor="speedEVs">EVs: </label>
                            <input className="speedEVBar" type="number" name="speedEVs" min="0" max="252" value="0" onChange={calcStats(0)} />
                            <div className="finalSpeed"></div>
                            <label htmlFor="moves">Moves: </label>
                            <select className="moveSelector1" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector2" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector3" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                            <select className="moveSelector4" name="moves">
                                <option value="NONE">---Select Move---</option>
                            </select>
                        </div>
                    </SplideSlide>

                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev">Prev</button>
                        <button className="splide__arrow splide__arrow--next">Next</button>
                    </div>
                </Splide>
            </div>
        </form>
    );
}

const loadTeam = (props, team) => {
    const speciesSelectors = document.querySelectorAll(".speciesSelector");
    const nicknameBars = document.querySelectorAll(".nicknameBar");
    const levelBars = document.querySelectorAll(".levelBar");
    const abilitySelectors = document.querySelectorAll(".abilitySelector");
    const natureSelectors = document.querySelectorAll(".natureSelector");
    const itemSelectors = document.querySelectorAll(".itemSelector");
    const HPIVBars = document.querySelectorAll(".HPIVBar");
    const HPEVBars = document.querySelectorAll(".HPEVBar");
    const attackIVBars = document.querySelectorAll(".attackIVBar");
    const attackEVBars = document.querySelectorAll(".attackEVBar");
    const defenseIVBars = document.querySelectorAll(".defenseIVBar");
    const defenseEVBars = document.querySelectorAll(".defenseEVBar");
    const specialAttackIVBars = document.querySelectorAll(".specialAttackIVBar");
    const specialAttackEVBars = document.querySelectorAll(".specialAttackEVBar");
    const specialDefenseIVBars = document.querySelectorAll(".specialDefenseIVBar");
    const specialDefenseEVBars = document.querySelectorAll(".specialDefenseEVBar");
    const speedIVBars = document.querySelectorAll(".speedIVBar");
    const speedEVBars = document.querySelectorAll(".speedEVBar");
    const moveSelectors = document.querySelectorAll(".moveSelector1") + document.querySelectorAll(".moveSelector2") + document.querySelectorAll(".moveSelector3") + document.querySelectorAll(".moveSelector4");

    for (let i = 0; i < speciesSelectors.length; i++) {
        speciesSelectors[i].value = pokemonData.find(pokemon => { pokemon.name === team.team[i].species });
        loadSpecies(i);
        nicknameBars[i].value = team.team[i].nickname;
        levelBars[i].value = team.team[i].level;
        abilitySelectors[i].value = abilityData.find(ability => { ability.name === team.team[i].ability });
        natureSelectors[i].value = natureData.find(nature => { nature.name === team.team[i].nature });
        itemSelectors[i].value = itemData.find(item => { item.name === team.team[i].held_item });
        HPIVBars[i].value = team.team[i].HP_IVs;
        HPEVBars[i].value = team.team[i].HP_EVs;
        attackIVBars[i].value = team.team[i].attack_IVs;
        attackEVBars[i].value = team.team[i].attack_EVs;
        defenseIVBars[i].value = team.team[i].defense_IVs;
        defenseEVBars[i].value = team.team[i].defense_EVs;
        specialAttackIVBars[i].value = team.team[i].special_attack_IVs;
        specialAttackEVBars[i].value = team.team[i].special_attack_EVs;
        specialDefenseIVBars[i].value = team.team[i].special_defense_IVs;
        specialDefenseEVBars[i].value = team.team[i].special_defense_EVs;
        speedIVBars[i].value = team.team[i].speed_IVs;
        speedEVBars[i].value = team.team[i].speed_EVs;
        moveSelectors[i * 4].value = moveData.find(move => { move.name === team.team[i].move_1 });
        moveSelectors[(i * 4) + 1].value = moveData.find(move => { move.name === team.team[i].move_2 });
        moveSelectors[(i * 4) + 2].value = moveData.find(move => { move.name === team.team[i].move_3 });
        moveSelectors[(i * 4) + 3].value = moveData.find(move => { move.name === team.team[i].move_4 });
        calcStats(i);
    }
}

const TeamList = (props) => {
    if (props.teams.length === 0) {
        return (
            <div className="TeamList">
                <button className="addTeam" onClick={addTeam}>+</button>
                <h3 className="noTeams">No Teams Yet!</h3>
            </div>
        );
    }

    const teamNodes = props.teams.map(team => {
        let member1;
        let member2;
        let member3;
        let member4;
        let member5;
        let member6;

        let partySprite1;
        let partySprite2;
        let partySprite3;
        let partySprite4;
        let partySprite5;
        let partySprite6;

        if (team.member1) {
            member1 = pokemonData.find((pokemon) => { pokemon.name === team.member1.species });
            partySprite1 = member1["sprites"]["front_default"];
        }

        if (team.member2) {
            member2 = pokemonData.find((pokemon) => { pokemon.name === team.member2.species });
            partySprite2 = member2["sprites"]["front_default"];
        }

        if (team.member3) {
            member3 = pokemonData.find((pokemon) => { pokemon.name === team.member3.species });
            partySprite3 = member3["sprites"]["front_default"];
        }

        if (team.member4) {
            member4 = pokemonData.find((pokemon) => { pokemon.name === team.member4.species });
            partySprite4 = member4["sprites"]["front_default"];
        }

        if (team.member5) {
            member5 = pokemonData.find((pokemon) => { pokemon.name === team.member5.species });
            partySprite5 = member5["sprites"]["front_default"];
        }

        if (team.member6) {
            member6 = pokemonData.find((pokemon) => { pokemon.name === team.member6.species });
            partySprite6 = member6["sprites"]["front_default"];
        }

        return (
            <div key={team._id} className="team" onclick={loadTeam(team)}>
                <h3 className="teamName">{team.name}</h3>
                <div className="partySprites">
                    <img className="partySprite" src={partySprite1}></img>
                    <img className="partySprite" src={partySprite2}></img>
                    <img className="partySprite" src={partySprite3}></img>
                    <img className="partySprite" src={partySprite4}></img>
                    <img className="partySprite" src={partySprite5}></img>
                    <img className="partySprite" src={partySprite6}></img>
                </div>
                <button className="deleteTeam" onClick={(e) => deleteTeam(e, team)}>Delete</button>
            </div>
        );
    });

    return (
        <div className="TeamList">
            <button className="addTeam" onClick={addTeam}>+</button>
            {teamNodes}
        </div>
    );
}

const handlePasswordChange = (e) => {
    e.preventDefault();
    helper.hideError();

    const username = e.target.querySelector('#user').value;
    const oldpass = e.target.querySelector('#oldpass').value;
    const newpass = e.target.querySelector('#newpass').value;
    const newpass2 = e.target.querySelector('#newpass2').value;

    if (!username || !oldpass || !newpass || !newpass2) {
        helper.handleError('All fields are required!');
        return false;
    }

    if (newpass !== newpass2) {
        helper.handleError('New passwords do not match!');
        return false;
    }

    helper.sendPost(e.target.action, { username, oldpass, newpass, newpass2 });

    return false;
}

const ChangePasswordWindow = (props) => {
    return (
        <form id="changePasswordForm"
            name="changePasswordForm"
            onSubmit={handlePasswordChange}
            action="/changePassword"
            method="POST"
            className="mainForm"
        >
            <div id="labels">
                <label htmlFor="username">Username: </label>
                <label htmlFor="oldpass">Old Password: </label>
                <label htmlFor="newpass">New Password: </label>
                <label htmlFor="newpass2">Confirm New Password: </label>
            </div>
            <div id="inputs">
                <input id="user" type="text" name="username" placeholder="username" />
                <input id="oldpass" type="password" name="oldpass" placeholder="Old Password" />
                <input id="newpass" type="password" name="newpass" placeholder="New Password" />
                <input id="newpass2" type="password" name="newpass2" placeholder="Confirm New Password" />
            </div>
            <input className="formSubmit" type="submit" value="Change Password" />
        </form>
    );
}

const loadTeamsFromServer = async () => {
    const response = await fetch('/getTeams');
    const data = await response.json();
    ReactDOM.render(
        <TeamList teams={data.teams} />,
        document.getElementById('TeamList')
    );
}

const PremiumWindow = (props) => {
    if (premiumStatus === true) {
        return (
            <div id="PremiumWindow">
                <p id="text">
                    Purchase the premium model to make use of this team builder's built-in damage calculator!
                </p>
                <button id="toggle">Turn Premium Mode Off</button>
            </div>
        );
    }
    else {
        return (
            <div id="PremiumWindow">
                <p id="text">
                    Purchase the premium model to make use of this team builder's built-in damage calculator!
                </p>
                <button id="toggle">Turn Premium Mode On</button>
            </div>
        );
    }
}

const highlightMove = (damage) => {
    const calcs = document.querySelector("#calcs");

    calcs.innerHTML = "";

    for (let i = 0.85; i <= 1; i += 0.01) {
        calcs.innerHTML += damage * i;

        if (i != 1) {
            calcs.innerHTML += ", ";
        }
    }
}

const loadSpecies_DC_Edition = (member) => {
    const speciesSelectors = document.querySelectorAll(".speciesSelector");
    const levelBars = document.querySelectorAll(".levelBar");
    const abilitySelectors = document.querySelectorAll(".abilitySelector");
    const natureSelectors = document.querySelectorAll(".natureSelector");
    const itemSelectors = document.querySelectorAll(".itemSelector");
    const baseHPSections = document.querySelectorAll(".baseHP");
    const HPIVBars = document.querySelectorAll(".HPIVBar");
    const HPEVBars = document.querySelectorAll(".HPEVBar");
    const finalHPSections = document.querySelectorAll(".finalHP");
    const baseAttackSections = document.querySelectorAll(".baseAttack");
    const attackIVBars = document.querySelectorAll(".attackIVBar");
    const attackEVBars = document.querySelectorAll(".attackEVBar");
    const attackStageBars = document.querySelectorAll(".attackStageBar");
    const finalAttackSections = document.querySelectorAll(".finalAttack");
    const baseDefenseSections = document.querySelectorAll(".baseDefense");
    const defenseIVBars = document.querySelectorAll(".defenseIVBar");
    const defenseEVBars = document.querySelectorAll(".defenseEVBar");
    const defenseStageBars = document.querySelectorAll(".defenseStageBar");
    const finalDefenseSections = document.querySelectorAll(".finalDefense");
    const baseSpecialAttackSections = document.querySelectorAll(".baseSpecialAttack");
    const specialAttackIVBars = document.querySelectorAll(".specialAttackIVBar");
    const specialAttackEVBars = document.querySelectorAll(".specialAttackEVBar");
    const specialAttackStageBars = document.querySelectorAll(".specialAttackStageBar");
    const finalSpecialAttackSections = document.querySelectorAll(".finalSpecialAttack");
    const baseSpecialDefenseSections = document.querySelectorAll(".baseSpecialDefense");
    const specialDefenseIVBars = document.querySelectorAll(".specialDefenseIVBar");
    const specialDefenseEVBars = document.querySelectorAll(".specialDefenseEVBar");
    const specialDefenseStageBars = document.querySelectorAll(".specialDefenseStageBar");
    const finalSpecialDefenseSections = document.querySelectorAll(".finalSpecialDefense");
    const baseSpeedSections = document.querySelectorAll(".baseSpeed");
    const speedIVBars = document.querySelectorAll(".speedIVBar");
    const speedEVBars = document.querySelectorAll(".speedEVBar");
    const speedStageBars = document.querySelectorAll(".speedStageBar");
    const finalSpeedSections = document.querySelectorAll(".finalSpeed");
    const moveSelectors = document.querySelectorAll(".moveSelector1") + document.querySelectorAll(".moveSelector2") + document.querySelectorAll(".moveSelector3") + document.querySelectorAll(".moveSelector4");

    if (speciesSelectors[memberNumber].value != "NONE") {
        const species = JSON.parse(speciesSelectors[memberNumber].value);

        levelBars[memberNumber].value = 100;
        natureSelectors[memberNumber].value = natureSelectors[memberNumber].find((nature) => { nature.value.name == "serious" });
        itemSelectors[memberNumber].value = "NONE";

        baseHPSections[memberNumber].innerHTML = species["stats"][0][base_stat];
        baseAttackSections[memberNumber].innerHTML = species["stats"][1][base_stat];
        baseDefenseSections[memberNumber].innerHTML = species["stats"][2][base_stat];
        baseSpecialAttackSections[memberNumber].innerHTML = species["stats"][3][base_stat];
        baseSpecialDefenseSections[memberNumber].innerHTML = species["stats"][4][base_stat];
        baseSpeedSections[memberNumber].innerHTML = species["stats"][5][base_stat];

        HPIVBars[memberNumber].value = 31;
        attackIVBars[memberNumber].value = 31;
        defenseIVBars[memberNumber].value = 31;
        specialAttackIVBars[memberNumber].value = 31;
        specialDefenseIVBars[memberNumber].value = 31;
        speedIVBars[memberNumber].value = 31;

        HPEVBars[memberNumber].value = 0;
        attackEVBars[memberNumber].value = 0;
        defenseEVBars[memberNumber].value = 0;
        specialAttackEVBars[memberNumber].value = 0;
        specialDefenseEVBars[memberNumber].value = 0;
        speedEVBars[memberNumber].value = 0;

        attackStageBars[memberNumber].value = 0;
        defenseStageBars[memberNumber].value = 0;
        specialAttackStageBars[memberNumber].value = 0;
        specialDefenseStageBars[memberNumber].value = 0;
        speedStageBars[memberNumber].value = 0;

        calcStats_DC_Edition(memberNumber);

        let abilities = [];
        species["abilities"].forEach(ability => {
            abilities.push(abilityData.find(data => data.name === ability.name));
        });
        abilitySelectors[memberNumber].innerHTML = `${abilities.map(ability => `<option value="${ability}">${reformatName(ability.name)}</option>`).join("")}`;

        let moves = [];
        species["moves"].forEach(move => {
            moves.push(moveData.find(data => data.name === move.name));
        });

        moveSelectors[memberNumber * 4].innerHTML = `<option value="NONE">---Select Move---</option>`;
        moveSelectors[(memberNumber * 4) + 1].innerHTML = `<option value="NONE">---Select Move---</option>`;
        moveSelectors[(memberNumber * 4) + 2].innerHTML = `<option value="NONE">---Select Move---</option>`;
        moveSelectors[(memberNumber * 4) + 3].innerHTML = `<option value="NONE">---Select Move---</option>`;

        moveSelectors[memberNumber * 4].innerHTML += `${moves.map(move => `<option value="${move}">${reformatName(move.name)}</option>`).join("")}`;
        moveSelectors[(memberNumber * 4) + 1].innerHTML += `${moves.map(move => `<option value="${move}">${reformatName(move.name)}</option>`).join("")}`;
        moveSelectors[(memberNumber * 4) + 2].innerHTML += `${moves.map(move => `<option value="${move}">${reformatName(move.name)}</option>`).join("")}`;
        moveSelectors[(memberNumber * 4) + 3].innerHTML += `${moves.map(move => `<option value="${move}">${reformatName(move.name)}</option>`).join("")}`;
    }
    else {
        levelBars[memberNumber].value = 100;
        abilitySelectors[memberNumber].innerHTML = "";
        natureSelectors[memberNumber].value = natureSelectors[memberNumber].find((nature) => { nature.value.name == "serious" });
        itemSelectors[memberNumber].value = "NONE";

        baseHPSections[memberNumber].innerHTML = "";
        baseAttackSections[memberNumber].innerHTML = "";
        baseDefenseSections[memberNumber].innerHTML = "";
        baseSpecialAttackSections[memberNumber].innerHTML = "";
        baseSpecialDefenseSections[memberNumber].innerHTML = "";
        baseSpeedSections[memberNumber].innerHTML = "";

        HPIVBars[memberNumber].value = 31;
        attackIVBars[memberNumber].value = 31;
        defenseIVBars[memberNumber].value = 31;
        specialAttackIVBars[memberNumber].value = 31;
        specialDefenseIVBars[memberNumber].value = 31;
        speedIVBars[memberNumber].value = 31;

        HPEVBars[memberNumber].value = 0;
        attackEVBars[memberNumber].value = 0;
        defenseEVBars[memberNumber].value = 0;
        specialAttackEVBars[memberNumber].value = 0;
        specialDefenseEVBars[memberNumber].value = 0;
        speedEVBars[memberNumber].value = 0;

        attackStageBars[memberNumber].value = 0;
        defenseStageBars[memberNumber].value = 0;
        specialAttackStageBars[memberNumber].value = 0;
        specialDefenseStageBars[memberNumber].value = 0;
        speedStageBars[memberNumber].value = 0;

        finalHPSections[memberNumber].innerHTML = "";
        finalAttackSections[memberNumber].innerHTML = "";
        finalDefenseSections[memberNumber].innerHTML = "";
        finalSpecialAttackSections[memberNumber].innerHTML = "";
        finalSpecialDefenseSections[memberNumber].innerHTML = "";
        finalSpeedSections[memberNumber].innerHTML = "";

        moveSelectors[memberNumber * 4].innerHTML = `<option value="NONE">---Select Move---</option>`;
        moveSelectors[(memberNumber * 4) + 1].innerHTML = `<option value="NONE">---Select Move---</option>`;
        moveSelectors[(memberNumber * 4) + 2].innerHTML = `<option value="NONE">---Select Move---</option>`;
        moveSelectors[(memberNumber * 4) + 3].innerHTML = `<option value="NONE">---Select Move---</option>`;
    }
}

const calcStats_DC_Edition = (member) => {
    const levelBars = document.querySelectorAll(".levelBar");
    const natureSelectors = document.querySelectorAll(".natureSelector");
    const baseHPSections = document.querySelectorAll(".baseHP");
    const HPIVBars = document.querySelectorAll(".HPIVBar");
    const HPEVBars = document.querySelectorAll(".HPEVBar");
    const finalHPSections = document.querySelectorAll(".finalHP");
    const baseAttackSections = document.querySelectorAll(".baseAttack");
    const attackIVBars = document.querySelectorAll(".attackIVBar");
    const attackEVBars = document.querySelectorAll(".attackEVBar");
    const attackStageBars = document.querySelectorAll(".attackStageBar");
    const finalAttackSections = document.querySelectorAll(".finalAttack");
    const baseDefenseSections = document.querySelectorAll(".baseDefense");
    const defenseIVBars = document.querySelectorAll(".defenseIVBar");
    const defenseEVBars = document.querySelectorAll(".defenseEVBar");
    const defenseStageBars = document.querySelectorAll(".defenseStageBar");
    const finalDefenseSections = document.querySelectorAll(".finalDefense");
    const baseSpecialAttackSections = document.querySelectorAll(".baseSpecialAttack");
    const specialAttackIVBars = document.querySelectorAll(".specialAttackIVBar");
    const specialAttackEVBars = document.querySelectorAll(".specialAttackEVBar");
    const specialAttackStageBars = document.querySelectorAll(".specialAttackStageBar");
    const finalSpecialAttackSections = document.querySelectorAll(".finalSpecialAttack");
    const baseSpecialDefenseSections = document.querySelectorAll(".baseSpecialDefense");
    const specialDefenseIVBars = document.querySelectorAll(".specialDefenseIVBar");
    const specialDefenseEVBars = document.querySelectorAll(".specialDefenseEVBar");
    const specialDefenseStageBars = document.querySelectorAll(".specialDefenseStageBar");
    const finalSpecialDefenseSections = document.querySelectorAll(".finalSpecialDefense");
    const baseSpeedSections = document.querySelectorAll(".baseSpeed");
    const speedIVBars = document.querySelectorAll(".speedIVBar");
    const speedEVBars = document.querySelectorAll(".speedEVBar");
    const speedStageBars = document.querySelectorAll(".speedStageBar");
    const finalSpeedSections = document.querySelectorAll(".finalSpeed");

    const nature = JSON.parse(natureSelectors[memberNumber].value);

    if (baseHPSections[memberNumber] && baseAttackSections[memberNumber] && baseDefenseSections[memberNumber] && baseSpecialAttackSections[memberNumber] && baseSpecialDefenseSections[memberNumber] && baseSpeedSections[memberNumber]) {
        let attackNatureMultiplier = 1.0;
        let defenseNatureMultiplier = 1.0;
        let specialAttackNatureMultiplier = 1.0;
        let specialDefenseNatureMultiplier = 1.0;
        let speedNatureMultiplier = 1.0;

        if (nature.increased_stat.name === "attack") {
            attackNatureMultiplier = 1.1;
        }
        else if (nature.increased_stat.name === "defense") {
            defenseNatureMultiplier = 1.1;
        }
        else if (nature.increased_stat.name === "special-attack") {
            specialAttackNatureMultiplier = 1.1;
        }
        else if (nature.increased_stat.name === "special-defense") {
            specialDefenseNatureMultiplier = 1.1;
        }
        else if (nature.increased_stat.name === "speed") {
            speedNatureMultiplier = 1.1;
        }

        if (nature.decreased_stat.name === "attack") {
            attackNatureMultiplier = 0.9;
        }
        else if (nature.decreased_stat.name === "defense") {
            defenseNatureMultiplier = 0.9;
        }
        else if (nature.decreased_stat.name === "special-attack") {
            specialAttackNatureMultiplier = 0.9;
        }
        else if (nature.decreased_stat.name === "special-defense") {
            specialDefenseNatureMultiplier = 0.9;
        }
        else if (nature.decreased_stat.name === "speed") {
            speedNatureMultiplier = 0.9;
        }

        finalHPSections[memberNumber].innerHTML = Math.floor(((2 * Number(baseHPSections[memberNumber].innerHTML) + HPIVBars[memberNumber].value + Math.floor(HPEVBars[memberNumber] / 4)) * levelBars[memberNumber]) / 100) + levelBars[memberNumber] + 10;
        finalAttackSections[memberNumber].innerHTML = Math.floor((Math.floor(((2 * Number(baseAttackSections[memberNumber].innerHTML) + attackIVBars[memberNumber].value + Math.floor(attackEVBars[memberNumber].value / 4)) * levelBars[memberNumber]) / 100) + 5) * Number(attackNatureMultiplier));
        finalDefenseSections[memberNumber].innerHTML = Math.floor((Math.floor(((2 * Number(baseDefenseSections[memberNumber].innerHTML) + defenseIVBars[memberNumber].value + Math.floor(defenseEVBars[memberNumber].value / 4)) * levelBars[memberNumber]) / 100) + 5) * Number(defenseNatureMultiplier));
        finalSpecialAttackSections[memberNumber].innerHTML = Math.floor((Math.floor(((2 * Number(baseSpecialAttackSections[memberNumber].innerHTML) + specialAttackIVBars[memberNumber].value + Math.floor(specialAttackEVBars[memberNumber].value / 4)) * levelBars[memberNumber]) / 100) + 5) * Number(specialAttackNatureMultiplier));
        finalSpecialDefenseSections[memberNumber].innerHTML = Math.floor((Math.floor(((2 * Number(baseSpecialDefenseSections[memberNumber].innerHTML) + specialDefenseIVBars[memberNumber].value + Math.floor(specialDefenseEVBars[memberNumber].value / 4)) * levelBars[memberNumber]) / 100) + 5) * Number(specialDefenseNatureMultiplier));
        finalSpeedSections[memberNumber].innerHTML = Math.floor((Math.floor(((2 * Number(baseSpeedSections[memberNumber].innerHTML) + speedIVBars[memberNumber].value + Math.floor(speedEVBars[memberNumber].value / 4)) * levelBars[memberNumber]) / 100) + 5) * Number(speedNatureMultiplier));

        if (attackStageBars[memberNumber].value === 1) {
            finalAttackSections[memberNumber].innerHTML = Number(finalAttackSections[memberNumber].innerHTML) * 1.5;
        }
        else if (attackStageBars[memberNumber].value === 2) {
            finalAttackSections[memberNumber].innerHTML = Number(finalAttackSections[memberNumber].innerHTML) * 2;
        }
        else if (attackStageBars[memberNumber].value === 3) {
            finalAttackSections[memberNumber].innerHTML = Number(finalAttackSections[memberNumber].innerHTML) * 2.5;
        }
        else if (attackStageBars[memberNumber].value === 4) {
            finalAttackSections[memberNumber].innerHTML = Number(finalAttackSections[memberNumber].innerHTML) * 3;
        }
        else if (attackStageBars[memberNumber].value === 5) {
            finalAttackSections[memberNumber].innerHTML = Number(finalAttackSections[memberNumber].innerHTML) * 3.5;
        }
        else if (attackStageBars[memberNumber].value === 6) {
            finalAttackSections[memberNumber].innerHTML = Number(finalAttackSections[memberNumber].innerHTML) * 4;
        }
        if (attackStageBars[memberNumber].value === -1) {
            finalAttackSections[memberNumber].innerHTML = Number(finalAttackSections[memberNumber].innerHTML) / 1.5;
        }
        else if (attackStageBars[memberNumber].value === -2) {
            finalAttackSections[memberNumber].innerHTML = Number(finalAttackSections[memberNumber].innerHTML) / 2;
        }
        else if (attackStageBars[memberNumber].value === -3) {
            finalAttackSections[memberNumber].innerHTML = Number(finalAttackSections[memberNumber].innerHTML) / 2.5;
        }
        else if (attackStageBars[memberNumber].value === -4) {
            finalAttackSections[memberNumber].innerHTML = Number(finalAttackSections[memberNumber].innerHTML) / 3;
        }
        else if (attackStageBars[memberNumber].value === -5) {
            finalAttackSections[memberNumber].innerHTML = Number(finalAttackSections[memberNumber].innerHTML) / 3.5;
        }
        else if (attackStageBars[memberNumber].value === -6) {
            finalAttackSections[memberNumber].innerHTML = Number(finalAttackSections[memberNumber].innerHTML) / 4;
        }

        if (defenseStageBars[memberNumber].value === 1) {
            finalDefenseSections[memberNumber].innerHTML = Number(finalDefenseSections[memberNumber].innerHTML) * 1.5;
        }
        else if (defenseStageBars[memberNumber].value === 2) {
            finalDefenseSections[memberNumber].innerHTML = Number(finalDefenseSections[memberNumber].innerHTML) * 2;
        }
        else if (defenseStageBars[memberNumber].value === 3) {
            finalDefenseSections[memberNumber].innerHTML = Number(finalDefenseSections[memberNumber].innerHTML) * 2.5;
        }
        else if (defenseStageBars[memberNumber].value === 4) {
            finalDefenseSections[memberNumber].innerHTML = Number(finalDefenseSections[memberNumber].innerHTML) * 3;
        }
        else if (defenseStageBars[memberNumber].value === 5) {
            finalDefenseSections[memberNumber].innerHTML = Number(finalDefenseSections[memberNumber].innerHTML) * 3.5;
        }
        else if (defenseStageBars[memberNumber].value === 6) {
            finalDefenseSections[memberNumber].innerHTML = Number(finalDefenseSections[memberNumber].innerHTML) * 4;
        }
        if (defenseStageBars[memberNumber].value === -1) {
            finalDefenseSections[memberNumber].innerHTML = Number(finalDefenseSections[memberNumber].innerHTML) / 1.5;
        }
        else if (defenseStageBars[memberNumber].value === -2) {
            finalDefenseSections[memberNumber].innerHTML = Number(finalDefenseSections[memberNumber].innerHTML) / 2;
        }
        else if (defenseStageBars[memberNumber].value === -3) {
            finalDefenseSections[memberNumber].innerHTML = Number(finalDefenseSections[memberNumber].innerHTML) / 2.5;
        }
        else if (defenseStageBars[memberNumber].value === -4) {
            finalDefenseSections[memberNumber].innerHTML = Number(finalDefenseSections[memberNumber].innerHTML) / 3;
        }
        else if (defenseStageBars[memberNumber].value === -5) {
            finalDefenseSections[memberNumber].innerHTML = Number(finalDefenseSections[memberNumber].innerHTML) / 3.5;
        }
        else if (defenseStageBars[memberNumber].value === -6) {
            finalDefenseSections[memberNumber].innerHTML = Number(finalDefenseSections[memberNumber].innerHTML) / 4;
        }

        if (specialAttackStageBars[memberNumber].value === 1) {
            finalSpecialAttackSections[memberNumber].innerHTML = Number(finalSpecialAttackSections[memberNumber].innerHTML) * 1.5;
        }
        else if (specialAttackStageBars[memberNumber].value === 2) {
            finalSpecialAttackSections[memberNumber].innerHTML = Number(finalSpecialAttackSections[memberNumber].innerHTML) * 2;
        }
        else if (specialAttackStageBars[memberNumber].value === 3) {
            finalSpecialAttackSections[memberNumber].innerHTML = Number(finalSpecialAttackSections[memberNumber].innerHTML) * 2.5;
        }
        else if (specialAttackStageBars[memberNumber].value === 4) {
            finalSpecialAttackSections[memberNumber].innerHTML = Number(finalSpecialAttackSections[memberNumber].innerHTML) * 3;
        }
        else if (specialAttackStageBars[memberNumber].value === 5) {
            finalSpecialAttackSections[memberNumber].innerHTML = Number(finalSpecialAttackSections[memberNumber].innerHTML) * 3.5;
        }
        else if (specialAttackStageBars[memberNumber].value === 6) {
            finalSpecialAttackSections[memberNumber].innerHTML = Number(finalSpecialAttackSections[memberNumber].innerHTML) * 4;
        }
        if (specialAttackStageBars[memberNumber].value === -1) {
            finalSpecialAttackSections[memberNumber].innerHTML = Number(finalSpecialAttackSections[memberNumber].innerHTML) / 1.5;
        }
        else if (specialAttackStageBars[memberNumber].value === -2) {
            finalSpecialAttackSections[memberNumber].innerHTML = Number(finalSpecialAttackSections[memberNumber].innerHTML) / 2;
        }
        else if (specialAttackStageBars[memberNumber].value === -3) {
            finalSpecialAttackSections[memberNumber].innerHTML = Number(finalSpecialAttackSections[memberNumber].innerHTML) / 2.5;
        }
        else if (specialAttackStageBars[memberNumber].value === -4) {
            finalSpecialAttackSections[memberNumber].innerHTML = Number(finalSpecialAttackSections[memberNumber].innerHTML) / 3;
        }
        else if (specialAttackStageBars[memberNumber].value === -5) {
            finalSpecialAttackSections[memberNumber].innerHTML = Number(finalSpecialAttackSections[memberNumber].innerHTML) / 3.5;
        }
        else if (specialAttackStageBars[memberNumber].value === -6) {
            finalSpecialAttackSections[memberNumber].innerHTML = Number(finalSpecialAttackSections[memberNumber].innerHTML) / 4;
        }

        if (specialDefenseStageBars[memberNumber].value === 1) {
            finalSpecialDefenseSections[memberNumber].innerHTML = Number(finalSpecialDefenseSections[memberNumber].innerHTML) * 1.5;
        }
        else if (specialDefenseStageBars[memberNumber].value === 2) {
            finalSpecialDefenseSections[memberNumber].innerHTML = Number(finalSpecialDefenseSections[memberNumber].innerHTML) * 2;
        }
        else if (specialDefenseStageBars[memberNumber].value === 3) {
            finalSpecialDefenseSections[memberNumber].innerHTML = Number(finalSpecialDefenseSections[memberNumber].innerHTML) * 2.5;
        }
        else if (specialDefenseStageBars[memberNumber].value === 4) {
            finalSpecialDefenseSections[memberNumber].innerHTML = Number(finalSpecialDefenseSections[memberNumber].innerHTML) * 3;
        }
        else if (specialDefenseStageBars[memberNumber].value === 5) {
            finalSpecialDefenseSections[memberNumber].innerHTML = Number(finalSpecialDefenseSections[memberNumber].innerHTML) * 3.5;
        }
        else if (specialDefenseStageBars[memberNumber].value === 6) {
            finalSpecialDefenseSections[memberNumber].innerHTML = Number(finalSpecialDefenseSections[memberNumber].innerHTML) * 4;
        }
        if (specialDefenseStageBars[memberNumber].value === -1) {
            finalSpecialDefenseSections[memberNumber].innerHTML = Number(finalSpecialDefenseSections[memberNumber].innerHTML) / 1.5;
        }
        else if (specialDefenseStageBars[memberNumber].value === -2) {
            finalSpecialDefenseSections[memberNumber].innerHTML = Number(finalSpecialDefenseSections[memberNumber].innerHTML) / 2;
        }
        else if (specialDefenseStageBars[memberNumber].value === -3) {
            finalSpecialDefenseSections[memberNumber].innerHTML = Number(finalSpecialDefenseSections[memberNumber].innerHTML) / 2.5;
        }
        else if (specialDefenseStageBars[memberNumber].value === -4) {
            finalSpecialDefenseSections[memberNumber].innerHTML = Number(finalSpecialDefenseSections[memberNumber].innerHTML) / 3;
        }
        else if (specialDefenseStageBars[memberNumber].value === -5) {
            finalSpecialDefenseSections[memberNumber].innerHTML = Number(finalSpecialDefenseSections[memberNumber].innerHTML) / 3.5;
        }
        else if (specialDefenseStageBars[memberNumber].value === -6) {
            finalSpecialDefenseSections[memberNumber].innerHTML = Number(finalSpecialDefenseSections[memberNumber].innerHTML) / 4;
        }

        if (speedStageBars[memberNumber].value === 1) {
            finalSpeedSections[memberNumber].innerHTML = Number(finalSpeedSections[memberNumber].innerHTML) * 1.5;
        }
        else if (speedStageBars[memberNumber].value === 2) {
            finalSpeedSections[memberNumber].innerHTML = Number(finalSpeedSections[memberNumber].innerHTML) * 2;
        }
        else if (speedStageBars[memberNumber].value === 3) {
            finalSpeedSections[memberNumber].innerHTML = Number(finalSpeedSections[memberNumber].innerHTML) * 2.5;
        }
        else if (speedStageBars[memberNumber].value === 4) {
            finalSpeedSections[memberNumber].innerHTML = Number(finalSpeedSections[memberNumber].innerHTML) * 3;
        }
        else if (speedStageBars[memberNumber].value === 5) {
            finalSpeedSections[memberNumber].innerHTML = Number(finalSpeedSections[memberNumber].innerHTML) * 3.5;
        }
        else if (speedStageBars[memberNumber].value === 6) {
            finalSpeedSections[memberNumber].innerHTML = Number(finalSpeedSections[memberNumber].innerHTML) * 4;
        }
        if (speedStageBars[memberNumber].value === -1) {
            finalSpeedSections[memberNumber].innerHTML = Number(finalSpeedSections[memberNumber].innerHTML) / 1.5;
        }
        else if (speedStageBars[memberNumber].value === -2) {
            finalSpeedSections[memberNumber].innerHTML = Number(finalSpeedSections[memberNumber].innerHTML) / 2;
        }
        else if (speedStageBars[memberNumber].value === -3) {
            finalSpeedSections[memberNumber].innerHTML = Number(finalSpeedSections[memberNumber].innerHTML) / 2.5;
        }
        else if (speedStageBars[memberNumber].value === -4) {
            finalSpeedSections[memberNumber].innerHTML = Number(finalSpeedSections[memberNumber].innerHTML) / 3;
        }
        else if (speedStageBars[memberNumber].value === -5) {
            finalSpeedSections[memberNumber].innerHTML = Number(finalSpeedSections[memberNumber].innerHTML) / 3.5;
        }
        else if (speedStageBars[memberNumber].value === -6) {
            finalSpeedSections[memberNumber].innerHTML = Number(finalSpeedSections[memberNumber].innerHTML) / 4;
        }
    }
}

const calcDamage = (attackerNumber, defenderNumber) => {
    const speciesSelectors = document.querySelectorAll(".speciesSelector");
    const finalHPSections = document.querySelectorAll(".finalHP");
    const currHPSections = document.querySelectorAll(".currHP");
    const finalAttackSections = document.querySelectorAll(".finalAttack");
    const finalDefenseSections = document.querySelectorAll(".finalDefense");
    const finalSpecialAttackSections = document.querySelectorAll(".finalSpecialAttack");
    const finalSpecialDefenseSections = document.querySelectorAll(".finalSpecialDefense");
    const finalSpeedSections = document.querySelectorAll(".finalSpeed");
    const moveButtons = document.querySelectorAll(".moveButton");
    const moveSelectors = document.querySelectorAll(".moveSelector");
    const individualCalcAreas = document.querySelectorAll(".individualCalc");
    const weather = document.querySelector("#weather");
    const terrain = document.querySelector("#terrain");


    for (let i = attackerNumber * 4; i < (attackerNumber * 4 + 3); i++) {
        moveButtons[i].innerHTML = reformatName(moveSelectors[i].value.name);
    }

    let attackingStat;
    let defendingStat;
    let attackerSpeed;
    let defenderSpeed;
    let basePower;
    let damage;

    for (let i = attackerNumber * 4; i < (attackerNumber * 4) + 3; i++) {
        if (moveSelectors[i].value.damage_class === "status") {
            individualCalcAreas[i].innerHTML = `0%-0%`;
        }
        else {
            if (moveSelectors[i].value.damage_class === "physical") {
                attackingStat = finalAttackSections[attackerNumber];
                defendingStat = finalDefenseSections[defenderNumber];
            }
            else if (moveSelectors[i].value.damage_class === "special") {
                attackingStat = finalSpecialAttackSections[attackerNumber];
                defendingStat = finalSpecialDefenseSections[defenderNumber];

                if (moveSelectors[i].value.name === "psyshock" || moveSelectors[i].value.name === "psystrike") {
                    defendingStat = finalDefenseSections[defenderNumber];
                }
            }

            if (moveSelectors[i].value.name === "electro-ball") {
                attackerSpeed = finalSpeedSections[attackerNumber];
                defenderSpeed = finalSpeedSections[defenderNumber];

                if (attackerSpeed - defenderSpeed <= 0) {
                    basePower = 40;
                }
                else if ((defenderSpeed / attackerSpeed > 50) && attackerSpeed - defenderSpeed >= 0) {
                    basePower = 60;
                }
                else if (defenderSpeed / attackerSpeed > 33.34) {
                    basePower = 80;
                }
                else if (defenderSpeed / attackerSpeed > 25) {
                    basePower = 120;
                }
                else {
                    basePower = 150;
                }
            }
            else if (moveSelectors[i].value.name === "gyro-ball") {
                basePower = Math.floor((25 * defenderSpeed / attackerSpeed) + 1);
            }
            else if (moveSelectors[i].value.name === "return" || moveSelectors[i].value.name === "frustration") {
                basePower = 102;
            }
            else if (moveSelectors[i].value.name === "wring-out") {
                basePower = 120 * (Number(currHPSections[defenderNumber].innerHTML) / finalHPSections[defenderNumber]);
            }
            else if (moveSelectors[i].value.name === "eruption" || moveSelectors[i].value.name === "water-spout") {
                basePower = (Number(currHPSections[attackerNumber].innerHTML) * 150) / finalHPSections[attackerNumber].value;
            }
            else {
                basePower = moveSelectors[i].value.power;
            }

            damage = ((((((2 * levelBars[attackerNumber].value) / 5) + 2) * basePower) * (attackingStat / defendingStat) / 50) + 2);

            if (moveSelectors[i].value.type === speciesSelectors[attackerNumber].value.types[0].type.name || moveSelectors[i].value.type === speciesSelectors[attackerNumber].value.types[1].type.name) {
                damage *= 1.5;
            }

            if (moveSelectors[i].value.type === "water" && weather.value === "Rain") {
                damage *= 1.5;
            }

            if (moveSelectors[i].value.type === "fire" && weather.value === "Rain") {
                damage / 2;
            }

            if (moveSelectors[i].value.type === "water" && weather.value === "Sun") {
                damage / 2;
            }

            if (moveSelectors[i].value.type === "fire" && weather.value === "Sun") {
                damage *= 1.5;
            }

            if (moveSelectors[i].value.type === "electric" && terrain.value === "Electric Terrain") {
                damage *= 1.5;
            }

            if (moveSelectors[i].value.type === "psychic" && terrain.value === "Psychic Terrain") {
                damage *= 1.5;
            }

            if (moveSelectors[i].value.type === "grass" && terrain.value === "Grassy Terrain") {
                damage *= 1.5;
            }

            if (moveSelectors[i].value.type === "fairy" && terrain.value === "Misty Terrain") {
                damage *= 1.5;
            }

            let defendingTypeA, defendingTypeB;

            defendingTypeA = speciesSelectors[defenderNumber].value.type[0].type.name;

            defendingTypeA = typeData.find((type) => { type.name === speciesSelectors[defenderNumber].value.type[0].type.name });

            if (speciesSelectors[defenderNumber].value.type[1]) {
                defendingTypeB = typeData.find((type) => { type.name === speciesSelectors[defenderNumber].value.type[1].type.name });
            }

            if (defendingTypeA["double_damage_from"].find((type) => { type.name === moveSelectors[i].value.type })) {
                damage *= 2;
            }

            if (defendingTypeA["half_damage_from"].find((type) => { type.name === moveSelectors[i].value.type })) {
                damage /= 2;
            }

            if (moveSelectors[i].value.name === "freeze-dry" && defendingTypeA.name === "water") {
                damage *= 2;
            }

            if (defendingTypeB) {
                if (defendingTypeB["double_damage_from"].find((type) => { type.name === moveSelectors[i].value.type })) {
                    damage *= 2;
                }

                if (defendingTypeB["half_damage_from"].find((type) => { type.name === moveSelectors[i].value.type })) {
                    damage /= 2;
                }

                if (moveSelectors[i].value.name === "freeze-dry" && defendingTypeB.name === "water") {
                    damage *= 2;
                }
            }

            if (defendingTypeA["no_damage_from"].find((type) => { type.name === moveSelectors[i].value.type })) {
                damage *= 0;
            }

            individualCalcAreas[i].innerHTML = `${damage * 0.85}-${damage}`;

            moveButtons[i].onClick = highlightMove(damage);
        }
    }
}

const calcCurrHP = (fighterNumber) => {
    const finalHPSections = document.querySelectorAll(".finalHP");
    const currHPPercentageBars = document.querySelectorAll(".currHPPercentageBar");
    const currHPSections = document.querySelectorAll(".currHP");

    currHPSections[fighterNumber].innerHTML = Number(finalHPSections[fighterNumber]) * (currHPPercentageBars[fighterNumber].value / 100);
}

const DamageCalculatorWindow = (props) => {
    return (
        <div id="calculator">
            <div id="pokemon1Moves">
                <div className="moveButton">---No Move---</div>
                <p className="individualCalc">0%-0%</p>
                <div className="moveButton">---No Move---</div>
                <p className="individualCalc">0%-0%</p>
                <div className="moveButton">---No Move---</div>
                <p className="individualCalc">0%-0%</p>
                <div className="moveButton">---No Move---</div>
                <p className="individualCalc">0%-0%</p>
            </div>
            <div id="pokemon2Moves">
                <div className="moveButton">---No Move---</div>
                <p className="individualCalc">0%-0%</p>
                <div className="moveButton">---No Move---</div>
                <p className="individualCalc">0%-0%</p>
                <div className="moveButton">---No Move---</div>
                <p className="individualCalc">0%-0%</p>
                <div className="moveButton">---No Move---</div>
                <p className="individualCalc">0%-0%</p>
            </div>
            <div id="calcs">

            </div>
            <div id="pokemon1Data" className="pokemonData">
                <label htmlFor="species">Species: </label>
                <select className="speciesSelector" name="species" onChange={loadSpecies_DC_Edition(0)}>
                    <option value="NONE">---Species---</option>
                </select>
                {/* <select className="setSelector">
                    <option value="NONE">---BLANK---</option>
                </select> */}
                <label htmlFor="level">Level: </label>
                <input className="levelBar" type="number" name="level" min="0" max="100" value="100" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <label htmlFor="ability">Ability: </label>
                <select className="abilitySelector" name="ability">
                </select>
                <label htmlFor="nature">Nature: </label>
                <select className="natureSelector" name="nature" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]}>
                </select>
                <label htmlFor="item">Held Item: </label>
                <select className="itemSelector" name="item" onChange={calcDamage(0, 1)}>
                </select>
                <label>HP: </label>
                <div className="baseHP"></div>
                <label htmlFor="HPIVs">IVs: </label>
                <input className="HPIVBar" type="number" name="HPIVs" min="0" max="31" value="31" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <label htmlFor="HPEVs">EVs: </label>
                <input className="HPEVBar" type="number" name="HPEVs" min="0" max="252" value="0" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <div className="finalHP"></div>
                <label>Attack: </label>
                <div className="baseAttack"></div>
                <label htmlFor="attackIVs">IVs: </label>
                <input className="attackIVBar" type="number" name="attackIVs" min="0" max="31" value="31" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <label htmlFor="attackEVs">EVs: </label>
                <input className="attackEVBar" type="number" name="attackEVs" min="0" max="252" value="0" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <input className="attackStageBar" type="number" name="attackStage" min="-6" max="6" value="0" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <div className="finalAttack"></div>
                <label>Defense: </label>
                <div className="baseDefense"></div>
                <label htmlFor="defenseIVs">IVs: </label>
                <input className="defenseIVBar" type="number" name="defenseIVs" min="0" max="31" value="31" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <label htmlFor="defenseEVs">EVs: </label>
                <input className="defenseEVBar" type="number" name="defenseEVs" min="0" max="252" value="0" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <input className="defenseStageBar" type="number" name="defenseStage" min="-6" max="6" value="0" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <div className="finalDefense"></div>
                <label>Special Attack: </label>
                <div className="baseSpecialAttack"></div>
                <label htmlFor="specialAttackIVs">IVs: </label>
                <input className="specialAttackIVBar" type="number" name="specialAttackIVs" min="0" max="31" value="31" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <label htmlFor="specialAttackEVs">EVs: </label>
                <input className="specialAttackEVBar" type="number" name="specialAttackEVs" min="0" max="252" value="0" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <input className="specialAttackStageBar" type="number" name="specialAttackStage" min="-6" max="6" value="0" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <div className="finalSpecialAttack"></div>
                <label>Special Defense: </label>
                <div className="baseSpecialDefense"></div>
                <label htmlFor="specialDefenseIVs">IVs: </label>
                <input className="specialDefenseIVBar" type="number" name="specialDefenseIVs" min="0" max="31" value="31" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <label htmlFor="specialDefenseEVs">EVs: </label>
                <input className="specialDefenseEVBar" type="number" name="specialDefenseEVs" min="0" max="252" value="0" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <input className="specialDefenseStageBar" type="number" name="specialDefenseStage" min="-6" max="6" value="0" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <div className="finalSpecialDefense"></div>
                <label>Speed: </label>
                <div className="baseSpeed"></div>
                <label htmlFor="speedIVs">IVs: </label>
                <input className="speedIVBar" type="number" name="speedIVs" min="0" max="31" value="31" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <label htmlFor="speedEVs">EVs: </label>
                <input className="speedEVBar" type="number" name="speedEVs" min="0" max="252" value="0" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <input className="speedStageBar" type="number" name="speedStage" min="-6" max="6" value="0" onChange={[calcStats_DC_Edition(0), calcDamage(0, 1)]} />
                <div className="finalSpeed"></div>
                <label htmlFor="currHP">Current HP: </label>
                <div className="currHP"></div>
                <input className="currHPPercentageBar" type="number" name="currHP" min="0" max="100" value="100" onChange={[calcCurrHP(0), calcDamage(0, 1)]} />
                <label htmlFor="moves">Moves: </label>
                <select className="moveSelector" name="moves">
                    <option value="NONE">---Select Move---</option>
                </select>
                <select className="moveSelector" name="moves">
                    <option value="NONE">---Select Move---</option>
                </select>
                <select className="moveSelector" name="moves">
                    <option value="NONE">---Select Move---</option>
                </select>
                <select className="moveSelector" name="moves">
                    <option value="NONE">---Select Move---</option>
                </select>
            </div>
            <div id="fieldStates">
                <div id="field">
                    <select id="weather" onChange={[calcDamage(0, 1), calcDamage(1, 0)]}>
                        <option value="None">None</option>
                        <option value="Sun">Sun</option>
                        <option value="Rain">Rain</option>
                        <option value="Sand">Sand</option>
                        <option value="Snow">Snow</option>
                        <option value="Desolate Land">Desolate Land</option>
                        <option value="Primordial Sea">Primordial Sea</option>
                        <option value="Delta Stream">Delta Stream</option>
                    </select>
                    <select id="terrain" onChange={[calcDamage(0, 1), calcDamage(1, 0)]}>
                        <option value="None">None</option>
                        <option value="Electric Terrain">Electric Terrain</option>
                        <option value="Psychic Terrain">Psychic Terrain</option>
                        <option value="Grassy Terrain">Grassy Terrain</option>
                        <option value="Misty Terrain">Misty Terrain</option>
                    </select>
                </div>
                <div id="side1effects">
                    <input type="checkbox" name="reflect" onChange={calcDamage(0, 1)} />
                    <label htmlFor="reflect">Reflect</label>
                    <input type="checkbox" name="lightscreen" onChange={calcDamage(0, 1)} />
                    <label htmlFor="lightscreen">Light Screen</label>
                    <input type="checkbox" name="auroraveil" onChange={calcDamage(0, 1)} />
                    <label htmlFor="auroraveil">Aurora Veil</label>
                </div>
                <div id="side2effects">
                    <label htmlFor="reflect">Reflect</label>
                    <input type="checkbox" name="reflect" onChange={calcDamage(1, 0)} />
                    <label htmlFor="lightscreen">Light Screen</label>
                    <input type="checkbox" name="lightscreen" onChange={calcDamage(1, 0)} />
                    <label htmlFor="auroraveil">Aurora Veil</label>
                    <input type="checkbox" name="auroraveil" onChange={calcDamage(1, 0)} />
                </div>
            </div>
            <div id="pokemon2Data" className="pokemonData">
                <label htmlFor="species">Species: </label>
                <select className="speciesSelector" name="species" onChange={loadSpecies_DC_Edition(1)}>
                    <option value="NONE">---Species---</option>
                </select>
                {/* <select className="setSelector">
                    <option value="NONE">---BLANK---</option>
                </select> */}
                <label htmlFor="level">Level: </label>
                <input className="levelBar" type="number" name="level" min="0" max="100" value="100" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <label htmlFor="ability">Ability: </label>
                <select className="abilitySelector" name="ability">
                </select>
                <label htmlFor="nature">Nature: </label>
                <select className="natureSelector" name="nature" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]}>
                </select>
                <label htmlFor="item">Held Item: </label>
                <select className="itemSelector" name="item" onChange={calcDamage(0, 1)}>
                </select>
                <label>HP: </label>
                <div className="baseHP"></div>
                <label htmlFor="HPIVs">IVs: </label>
                <input className="HPIVBar" type="number" name="HPIVs" min="0" max="31" value="31" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <label htmlFor="HPEVs">EVs: </label>
                <input className="HPEVBar" type="number" name="HPEVs" min="0" max="252" value="0" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <div className="finalHP"></div>
                <label>Attack: </label>
                <div className="baseAttack"></div>
                <label htmlFor="attackIVs">IVs: </label>
                <input className="attackIVBar" type="number" name="attackIVs" min="0" max="31" value="31" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <label htmlFor="attackEVs">EVs: </label>
                <input className="attackEVBar" type="number" name="attackEVs" min="0" max="252" value="0" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <input className="attackStageBar" type="number" name="attackStage" min="-6" max="6" value="0" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <div className="finalAttack"></div>
                <label>Defense: </label>
                <div className="baseDefense"></div>
                <label htmlFor="defenseIVs">IVs: </label>
                <input className="defenseIVBar" type="number" name="defenseIVs" min="0" max="31" value="31" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <label htmlFor="defenseEVs">EVs: </label>
                <input className="defenseEVBar" type="number" name="defenseEVs" min="0" max="252" value="0" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <input className="defenseStageBar" type="number" name="defenseStage" min="-6" max="6" value="0" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <div className="finalDefense"></div>
                <label>Special Attack: </label>
                <div className="baseSpecialAttack"></div>
                <label htmlFor="specialAttackIVs">IVs: </label>
                <input className="specialAttackIVBar" type="number" name="specialAttackIVs" min="0" max="31" value="31" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <label htmlFor="specialAttackEVs">EVs: </label>
                <input className="specialAttackEVBar" type="number" name="specialAttackEVs" min="0" max="252" value="0" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <input className="specialAttackStageBar" type="number" name="specialAttackStage" min="-6" max="6" value="0" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <div className="finalSpecialAttack"></div>
                <label>Special Defense: </label>
                <div className="baseSpecialDefense"></div>
                <label htmlFor="specialDefenseIVs">IVs: </label>
                <input className="specialDefenseIVBar" type="number" name="specialDefenseIVs" min="0" max="31" value="31" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <label htmlFor="specialDefenseEVs">EVs: </label>
                <input className="specialDefenseEVBar" type="number" name="specialDefenseEVs" min="0" max="252" value="0" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <input className="specialDefenseStageBar" type="number" name="specialDefenseStage" min="-6" max="6" value="0" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <div className="finalSpecialDefense"></div>
                <label>Speed: </label>
                <div className="baseSpeed"></div>
                <label htmlFor="speedIVs">IVs: </label>
                <input className="speedIVBar" type="number" name="speedIVs" min="0" max="31" value="31" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <label htmlFor="speedEVs">EVs: </label>
                <input className="speedEVBar" type="number" name="speedEVs" min="0" max="252" value="0" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <input className="speedStageBar" type="number" name="speedStage" min="-6" max="6" value="0" onChange={[calcStats_DC_Edition(1), calcDamage(1, 0)]} />
                <div className="finalSpeed"></div>
                <label htmlFor="moves">Moves: </label>
                <select className="moveSelector" name="moves">
                    <option value="NONE" onChange={calcDamage(1, 0)}>---Select Move---</option>
                </select>
                <select className="moveSelector" name="moves">
                    <option value="NONE" onChange={calcDamage(1, 0)}>---Select Move---</option>
                </select>
                <select className="moveSelector" name="moves">
                    <option value="NONE" onChange={calcDamage(1, 0)}>---Select Move---</option>
                </select>
                <select className="moveSelector" name="moves">
                    <option value="NONE" onChange={calcDamage(1, 0)}>---Select Move---</option>
                </select>
            </div>
        </div>
    );
}

const init = async () => {
    const changePasswordButton = document.getElementById('changePassword');
    const premiumButton = document.getElementById('premium');
    const calculatorButton = document.getElementById('calculator');

    changePasswordButton.addEventListener('click', (e) => {
        e.preventDefault();
        ReactDOM.render(<ChangePasswordWindow />,
            document.getElementById('content'));
        return false;
    });

    premiumButton.addEventListener('click', (e) => {
        e.preventDefault();
        ReactDOM.render(<PremiumWindow />,
            document.getElementById('content'));
        return false;
    });

    calculatorButton.addEventListener('click', (e) => {
        e.preventDefault();
        ReactDOM.render(<DamageCalculatorWindow />,
            document.getElementById('content'));
        return false;
    });

    ReactDOM.render(
        <TeamList teams={[]} />,
        document.getElementById('TeamList')
    );

    ReactDOM.render(
        <TeamBuilder />,
        document.getElementById('Team')
    );

    pokemonData = loadData(`/pokemonData`);
    moveData = loadData(`/moveData`);
    abilityData = loadData(`/abilityData`);
    itemData = loadData(`/itemData`);
    natureData = loadData(`/natureData`);
    typeData = loadData(`/typeData`);

    const speciesSelectors = document.querySelectorAll(".speciesSelector");
    const natureSelectors = document.querySelectorAll(".natureSelector");
    const itemSelectors = document.querySelectorAll(".itemSelector");

    speciesSelectors.forEach(selector => {
        selector.innerHTML += pokemonData.map(pokemon => `<option value="${pokemon}">${reformatName(pokemon.name)}</option>`).join("");
    });

    natureSelectors.forEach(selector => {
        selector.innerHTML += natureData.map(nature => `<option value="${nature}">${reformatName(nature.name)} (+${reformatName(nature["increased_stat"].name)}, ${reformatName(nature["decreased_stat"].name)})</option>`).join("");
    });

    itemSelectors.forEach(selector => {
        selector.innerHTML += itemData.map(item => `<option value="${item}">${reformatName(item.name)}</option>`).join("");
    });

    loadTeamsFromServer();
}

window.onload = init;