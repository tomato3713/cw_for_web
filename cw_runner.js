// this function is to ring the signal
// wpm :speed
//i :short-0, long-1

  // Web Audio APIが使えるか確認しつつ、contextをつくる
  var SupportedAudioContext;
  try {
    SupportedAudioContext = window.AudioContext || window.webkitAudioContext;
  } catch (e) {
    throw new Error('Web Audio API is not supported.');
  }
  var context = new SupportedAudioContext();

  // オシレーターをつくる
  var oscNode = context.createOscillator();
  oscNode.frequency.value = 880;
  oscNode.type = 'triangle';

  // 音量調節用のnodeを作成
  var gainNode = context.createGain();
  gainNode.gain.value = 0;

  // もろもろつなげる
  oscNode.connect(gainNode);
  gainNode.connect(context.destination);

  oscNode.start(0);

function Play(i, wpm) {
  if (i == 0) {
    // play the shorter signal
    gainNode.gain.value=10;
    var start_Time = new Date();
    do{
      var end_Time = new Date();
    } while ((end_Time - start_Time) < wpm /25 *10)
      gainNode.gain.value=0;
  }

  // play the longer signal
  if (i == 1) {
        gainNode.gain.value=10;
    var start_Time = new Date();
    do{
      var end_Time = new Date();
    } while ((end_Time - start_Time) < wpm / 25 * 10 * 3)
      gainNode.gain.value=0;
  }
}