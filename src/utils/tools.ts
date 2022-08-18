export function objectWithoutProperties(obj: { [key: string]: any }, keys: any[]) {
	let target: { [key: string]: any } = {};
	for (const i in obj) {
		if (keys.indexOf(i) >= 0) continue;
		if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
		target[i] = obj[i];
	}
	return target;
};

export function getPreviousDay(date = new Date()) {
	const previous = new Date(date.getTime());
	previous.setDate(date.getDate() - 1);

	return previous;
}