export class Event {
	id: number;
	title: string = "";
	complete: boolean = false;
	date: any;

	constructor(values: Object = {}){
		Object.assign(this, values);
	}
}
