import {observable} from 'mobx';

class SuppStore {
	@observable supps = [];

  constructor() {
		return;
  }

	addSupp(supp, time) {
		this.supps.push({
			name: supp,
			completed: false,
			timestamp: time
		});
	}
}
export default SuppStore;
