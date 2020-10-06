import h from '../library/hyperScript';
import Component from '../library/Component';

export default class Navigation extends Component {
	constructor(props) {
    super(props);
    this.state = {
      navigationLinks: ['Home', 'Login', 'Register'],
      isActive: false
    };
  }

  activate(e) {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    console.log(this.props.showing)
  	const links = this.state.navigationLinks.map(link => {
  		return h('li', {}, h('a', {href: '#'}, link));
    });
    const ul = h('ul', {}, ...links);
    const burger = h(
      'div',
      {class: 'burger', click: () => this.activate()},
      h('div', {class: 'burger-line'}),
      h('div', {class: 'burger-line'}),
      h('div', {class: 'burger-line'}),
    );

    return h('nav', {}, this.state.isActive ? ul : '', burger);
  }
}

