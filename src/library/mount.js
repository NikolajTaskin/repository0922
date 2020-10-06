import {createNode} from './createNode';

// virtualNode - object
// parent - DOM element


// export function mount(element) {
// 	const app = document.getElementById('app');
// 	app.innerHTML = '';
// 	app.append(element);
// }

// Task 1
export function mount(virtualNode, parent) {  				////accepts virtualNode and parent
	const element = createNode(virtualNode);
	parent.append(element);
}

