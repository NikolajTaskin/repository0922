import {mount} from './library/mount';
import h from './library/hyperScript';
import Main from './Main';
import "./style.scss";

const root = document.getElementById('app');
mount(h(Main), root);

