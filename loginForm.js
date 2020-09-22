const userName = document.createElement('input');
const userEmail = document.createElement('input');
const container = document.createElement('body');
const button = document.createElement('button');

function createForm() {
	container.appendChild(userName);
	container.appendChild(userEmail);
	container.appendChild(button);
}