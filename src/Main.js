import {loginFromToken} from './utility/login';
import h from './library/hyperScript';
import Navigation from './components/Navigation';
import Component from './library/Component';

export default class Main extends Component {
	constructor() {
		super();
		this.login();
	}

	login() {
	    this.setState.isLoggedIn = loginFromToken();
  	}

	render() {
		if(this.state.isLoggedIn){
			return h('main', {}, h(Navigation, {showing: true})) ;
		} else {
			return h('main', {}, h(Navigation, {showing: true}));
		}
	}
};





