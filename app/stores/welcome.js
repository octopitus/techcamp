import Alt from 'utils/alt';

import WelcomeActions from 'actions/welcome';

class WelcomeStore {
	constructor() {
		this.bindActions(WelcomeActions);
		this.message = 'Hello world';
	}

	changeWelcomeMessage(message) {
		this.message = message || 'Hello world';
	}
}

export default Alt.createStore(WelcomeStore, 'WelcomeStore');