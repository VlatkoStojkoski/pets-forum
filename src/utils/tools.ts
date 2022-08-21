export function objectWithoutProperties(obj: { [key: string]: any }, keys: any[]) {
	let target: { [key: string]: any } = {};
	for (const i in obj) {
		if (keys.indexOf(i) >= 0) continue;
		if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
		target[i] = obj[i];
	}
	return target;
};

export const getPreviousWeek = (date = new Date()) =>
	new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);