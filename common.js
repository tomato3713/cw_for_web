//数字かそれ以外かを判定する. 数字ならtrue, それ以外はfalseを返す。
const isNumber = (value) => {
	"use strict";
	let result = Boolean(false);
	if (value || value === 0) {
		const typeValue = typeof (value);
		if (typeValue.match(/^(number|string)$/) && value !== NaN) {
			result = true;
		}
	}
	return result;
}

// id:Speedの要素に入力された値が適正かどうかを判断する。
// 適正でない場合はその入力を無効にする。
// 数値:　適正
// 非数値: 不適正
const speedCheck = () => {
	"use strict";
	const inputLine = document.getElementById('Speed').value;
	//入力された値が適正か判定する。
	//数値でない場合、Speedのvalueに元の値を代入する。
	if (!(isNumber(inputLine))) {
		document.getElementById('Speed').value = wpm;
	}
}
