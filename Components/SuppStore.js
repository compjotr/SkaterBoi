import {observable} from "mobx";

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

	removeSupp(supp){
		var index = this.supps.indexOf(supp);    // <-- Not supported in <IE9
		if (index !== -1) {
    	array.splice(index, 1);
		}
	}
}
export default SuppStore;
