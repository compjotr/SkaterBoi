import {observable} from 'mobx';

class SuppStore {
	@observable supps = [];

  constructor() {
		console.log(this.supps);
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
