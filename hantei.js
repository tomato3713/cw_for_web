window.onload(){
  var domCalsign = document.getElementById('id_box')
  var domCwPoint = document.getElementById('id_cw_point')
  var domPhPoint = document.getElementById('id_ph_point')

  var CallSignChar = domCalsign.value.split("")
  for( var i = 0; i <= CallSignChar.length; i++){
    if( CallSignChar[i] == "A") changedCWCallSign[i] == (".-").split("");
    if( CallSignChar[i] == "B") changedCWCallSign[i] == ("-...").split("");
    if( CallSignChar[i] == "C") changedCWCallSign[i] == ("-.-.").split("");
    if( CallSignChar[i] == "D") changedCWCallSign[i] == ("-..").split(""); 
    if( CallSignChar[i] == "E") changedCWCallSign[i] == (".").split("");
    if( CallSignChar[i] == "F") changedCWCallSign[i] == ("..-.").split("");
    if( CallSignChar[i] == "G") changedCWCallSign[i] == ("--.").split(""); 
    if( CallSignChar[i] == "H") changedCWCallSign[i] == ("....").split("");
    if( CallSignChar[i] == "I") changedCWCallSign[i] == ("..").split("");
    if( CallSignChar[i] == "J") changedCWCallSign[i] == (".---").split("");
    if( CallSignChar[i] == "K") changedCWCallSign[i] == ("-.-").split(""); 
    if( CallSignChar[i] == "L") changedCWCallSign[i] == (".-..").split("");
    if( CallSignChar[i] == "M") changedCWCallSign[i] == ("--").split("");
    if( CallSignChar[i] == "N") changedCWCallSign[i] == ("-.").split("");
    if( CallSignChar[i] == "O") changedCWCallSign[i] == ("---").split(""); 
    if( CallSignChar[i] == "P") changedCWCallSign[i] == (".--.").split("");
    if( CallSignChar[i] == "Q") changedCWCallSign[i] == ("--.-").split("");
    if( CallSignChar[i] == "R") changedCWCallSign[i] == (".-.").split(""); 
    if( CallSignChar[i] == "S") changedCWCallSign[i] == ("...").split(""); 
    if( CallSignChar[i] == "T") changedCWCallSign[i] == ("-").split("");
    if( CallSignChar[i] == "U") changedCWCallSign[i] == ("..-").split(""); 
    if( CallSignChar[i] == "V") changedCWCallSign[i] == ("...-").split("");
    if( CallSignChar[i] == "W") changedCWCallSign[i] == (".--").split(""); 
    if( CallSignChar[i] == "X") changedCWCallSign[i] == ("-..-").split("");
    if( CallSignChar[i] == "Y") changedCWCallSign[i] == ("-.--").split("");
    if( CallSignChar[i] == "Z") changedCWCallSign[i] == ("--..").split("");
    if( CallSignChar[i] == "1") changedCWCallSign[i] == (".----").split("");
    if( CallSignChar[i] == "2") changedCWCallSign[i] == ("..---").split("");
    if( CallSignChar[i] == "3") changedCWCallSign[i] == ("...--").split("");
    if( CallSignChar[i] == "4") changedCWCallSign[i] == ("....-").split("");
    if( CallSignChar[i] == "5") changedCWCallSign[i] == (".....").split("");
    if( CallSignChar[i] == "6") changedCWCallSign[i] == ("-....").split("");
    if( CallSignChar[i] == "7") changedCWCallSign[i] == ("--...").split("");
    if( CallSignChar[i] == "8") changedCWCallSign[i] == ("---..").split("");
    if( CallSignChar[i] == "9") changedCWCallSign[i] == ("----.").split("");
    if( CallSignChar[i] == "0") changedCWCallSign[i] == ("-----").split("");
  }

"$BFs<!85G[Ns$r0l<!85$KD>$9!#(B
  var changedCWCallSign = Array.prototype.concat.apply([], changedCWCallSign);

  ".$B$N8D?t$r?t$($F(BNum_dot$B$K8D?t$rBeF~$9$k(B
  var Num_dot = 0;
  i = 0;
  while( i <= changedCWCallSign.length -1 ){
  var index = -1;
    index = changedCWCallSign.indexOf(".", i);
    if( index != -1 ){
      i = index + 1;
      Num_dot++;
    }
  }

  "$BD:E@$N8D?t(B - $BC;E@$N8D?t(B
  domCwPoint = (changedCWCallSign.length - Num_dot ) * 1.5 Num_dot * (-0.7);
