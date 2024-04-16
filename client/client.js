/* Entry point of our client code. Runs when window.onload fires.
   Sets up the event listeners for each form across the whole app.
*/
const init = () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const changePasswordForm = document.getElementById('changePasswordForm');

    /* If this page has the signupForm, add it's submit event listener.
       Event listener will grab the username, password, and password2
       from the form, validate everything is correct, and then will
       use sendPost to send the data to the server.
    */
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            domoMessage.classList.add('hidden');

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
            domoMessage.classList.add('hidden');

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
            domoMessage.classList.add('hidden');

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
};

// Call init when the window loads.
window.onload = init;