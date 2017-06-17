// this function is to ring the signal
//play(i, wpm)
// wpm :speed
//i :playOn-0, playOff 1;
// duration_time: time 1, 3, 7

  // Web Audio APIが使えるか確認しつつ、contextをつくる
  var wpm=25;
  var call_name = new Array( 'A' ,'B','R', 'T', 3, 'J', '/');
  var SupportedAudioContext;
  try {
    SupportedAudioContext = window.AudioContext || window.webkitAudioContext;
  } catch (e) {
    throw new Error('Web Audio API is not supported.');
  }
  var context = new SupportedAudioContext();

  // オシレーターをつくる
  var oscNode = context.createOscillator();
  oscNode.frequency.value = 630;
  oscNode.type = 'sine';

  // 音量調節用のnodeを作成
  var gainNode = context.createGain();
  gainNode.gain.value = 0;

  // もろもろつなげる
  oscNode.connect(gainNode);
  gainNode.connect(context.destination);

  oscNode.start(0);

function Play(i, duration_time) {
  if (i == 0) {
    // play the shorter signal
    gainNode.gain.value=10;
    //play beep sound time
    var start_Time = new Date();
    do{
      var end_Time = new Date();
    } while ((end_Time - start_Time) < (wpm /25) *30 *duration_time)
      gainNode.gain.value=0;
  }

/*
  // play the longer signal
  if (i == 1) {
        gainNode.gain.value=10;
    //play beep sound time
    var start_Time = new Date();
    do{
      var end_Time = new Date();
    } while ((end_Time - start_Time) < (wpm / 25) * 30 * 3)
      gainNode.gain.value=0;
  }
*/
  if (i == 1){
    gainNode.gain.value=0;
    //stop beep sound time
    var start_Time = new Date();
    do{
      var end_Time = new Date();
    } while ((end_Time - start_Time) < (wpm / 25) * 30 * duration_time)
  }
}