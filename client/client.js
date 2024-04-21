/* Entry point of our client code. Runs when window.onload fires.
   Sets up the event listeners for each form across the whole app.
*/
const init = () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const changePasswordForm = document.getElementById('changePasswordForm');
    const teamForm = document.getElementById('teamForm');
    const teamMessage = document.getElementById('teamMessage');

    /* If this page has the signupForm, add it's submit event listener.
       Event listener will grab the username, password, and password2
       from the form, validate everything is correct, and then will
       use sendPost to send the data to the server.
    */
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            teamMessage.classList.add('hidden');

            const username = signupForm.querySelector('#user').value;
            const pass = signupForm.querySelector('#pass').value;
            const pass2 = signupForm.querySelector('#pass2').value;

            if (!username || !pass || !pass2) {
                handleError('All fields are required!');
                return false;
            }

            if (pass !== pass2) {
                handleError('Passwords do not match!');
                return false;
            }

            sendPost(signupForm.getAttribute('action'), { username, pass, pass2 });
            return false;
        });
    }

    /* If this page has the loginForm, add it's submit event listener.
       Event listener will grab the username, password, from the form, 
       validate both values have been entered, and will use sendPost 
       to send the data to the server.
    */
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            teamMessage.classList.add('hidden');

            const username = loginForm.querySelector('#user').value;
            const pass = loginForm.querySelector('#pass').value;

            if (!username || !pass) {
                handleError('Username or password is empty!');
                return false;
            }

            sendPost(loginForm.getAttribute('action'), { username, pass });
            return false;
        });
    }

    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            teamMessage.classList.add('hidden');

            const username = changePasswordForm.querySelector('#user').value;
            const oldpass = changePasswordForm.querySelector('#oldpass').value;
            const newpass = changePasswordForm.querySelector('#newpass').value;
            const newpass2 = changePasswordForm.querySelector('#newpass2').value;

            if (!username || !oldpass || !newpass || !newpass2) {
                handleError('All fields are required!');
                return false;
            }

            if (!newpass || !newpass2) {
                handleError('New passwords do not match!');
                return false;
            }

            sendPost(changePasswordForm.getAttribute('action'), { username, oldpass, newpass, newpass2 });
            return false;
        });
    }

    if (teamForm) {
        teamForm.addEventListener('submit', (e) => {
            e.preventDefault();
            teamMessage.classList.add('hidden');

            let teamName = e.target.querySelector(".teamName");
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

            if (!teamName) {
                teamName = "Untitled";
            }

            const team = {
                member1,
                member2,
                member3,
                member4,
                member5,
                member6
            }

            sendPost(teamForm.getAttribute('action'), { teamName, team });
            return false;
        });
    }
};

// Call init when the window loads.
window.onload = init;