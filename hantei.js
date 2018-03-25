"use strict";
const hanteiEvent(){
	let domCallsign = document.getElementById('id_box');
	let domCwPoint = document.getElementById('id_cw_point');

	let CallSignChar = domCallsign.value.split("");
	let changedCWCallSign = new Array;


	for( let i = 0; i <= CallSignChar.length; i++){
		if( CallSignChar[i] == "A") changedCWCallSign[i] = (".-").split("");
		if( CallSignChar[i] == "B") changedCWCallSign[i] = ("-...").split("");
		if( CallSignChar[i] == "C") changedCWCallSign[i] = ("-.-.").split("");
		if( CallSignChar[i] == "D") changedCWCallSign[i] = ("-..").split("");
		if( CallSignChar[i] == "E") changedCWCallSign[i] = (".").split("");
		if( CallSignChar[i] == "F") changedCWCallSign[i] = ("..-.").split("");
		if( CallSignChar[i] == "G") changedCWCallSign[i] = ("--.").split("");
		if( CallSignChar[i] == "H") changedCWCallSign[i] = ("....").split("");
		if( CallSignChar[i] == "I") changedCWCallSign[i] = ("..").split("");
		if( CallSignChar[i] == "J") changedCWCallSign[i] = (".---").split("");
		if( CallSignChar[i] == "K") changedCWCallSign[i] = ("-.-").split("");
		if( CallSignChar[i] == "L") changedCWCallSign[i] = (".-..").split("");
		if( CallSignChar[i] == "M") changedCWCallSign[i] = ("--").split("");
		if( CallSignChar[i] == "N") changedCWCallSign[i] = ("-.").split("");
		if( CallSignChar[i] == "O") changedCWCallSign[i] = ("---").split("");
		if( CallSignChar[i] == "P") changedCWCallSign[i] = (".--.").split("");
		if( CallSignChar[i] == "Q") changedCWCallSign[i] = ("--.-").split("");
		if( CallSignChar[i] == "R") changedCWCallSign[i] = (".-.").split("");
		if( CallSignChar[i] == "S") changedCWCallSign[i] = ("...").split("");
		if( CallSignChar[i] == "T") changedCWCallSign[i] = ("-").split("");
		if( CallSignChar[i] == "U") changedCWCallSign[i] = ("..-").split("");
		if( CallSignChar[i] == "V") changedCWCallSign[i] = ("...-").split("");
		if( CallSignChar[i] == "W") changedCWCallSign[i] = (".--").split("");
		if( CallSignChar[i] == "X") changedCWCallSign[i] = ("-..-").split("");
		if( CallSignChar[i] == "Y") changedCWCallSign[i] = ("-.--").split("");
		if( CallSignChar[i] == "Z") changedCWCallSign[i] = ("--..").split("");
		if( CallSignChar[i] == "1") changedCWCallSign[i] = (".----").split("");
		if( CallSignChar[i] == "2") changedCWCallSign[i] = ("..---").split("");
		if( CallSignChar[i] == "3") changedCWCallSign[i] = ("...--").split("");
		if( CallSignChar[i] == "4") changedCWCallSign[i] = ("....-").split("");
		if( CallSignChar[i] == "5") changedCWCallSign[i] = (".....").split("");
		if( CallSignChar[i] == "6") changedCWCallSign[i] = ("-....").split("");
		if( CallSignChar[i] == "7") changedCWCallSign[i] = ("--...").split("");
		if( CallSignChar[i] == "8") changedCWCallSign[i] = ("---..").split("");
		if( CallSignChar[i] == "9") changedCWCallSign[i] = ("----.").split("");
		if( CallSignChar[i] == "0") changedCWCallSign[i] = ("-----").split("");
	}

	//二次元配列を一次元に直す。
	let changedCWCallSign = Array.prototype.concat.apply([], changedCWCallSign);

	//.の個数を数えてNum_dotに個数を代入する
	let Num_dot = 0;
	i = 0;
	while( i <= changedCWCallSign.length -1 ){
		let index = -1;
		index = changedCWCallSign.indexOf(".", i);
		if( index != -1 ){
			i = index + 1;
			Num_dot++;
		}
	}

	// 30 *  短点の個数 / 頂点の個数
	domCwPoint.value = 30 * ( (changedCWCallSign.length - Num_dot) / Num_dot );
}

//add event hantei
document.getElementById('id_button').addEventListener('click', hanteiEvent, false);
