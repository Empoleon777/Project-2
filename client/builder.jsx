const helper = require('./helper.js');
const React = require('react');
const ReactDOM = require('react-dom');

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

const init = () => {
    const changePasswordButton = document.getElementById('changePassword');

    changePasswordButton.addEventListener('click', (e) => {
        e.preventDefault();
        ReactDOM.render(<ChangePasswordWindow />,
            document.getElementById('content'));
        return false;
    });

    ReactDOM.render(
        <DomoForm />,
        document.getElementById('makeDomo')
    );

    ReactDOM.render(
        <DomoList domos={[]} />,
        document.getElementById('domos')
    );

    loadDomosFromServer();
}

window.onload = init;