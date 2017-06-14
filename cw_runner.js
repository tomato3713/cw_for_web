// this function is to ring the signal
// wpm :speed
//i :short-0, long-1

function Signal(i, wpm) {
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
  gainNode.gain.value = 10;

  // もろもろつなげる
  oscNode.connect(gainNode);
  gainNode.connect(context.destination);

  if (i == 0) {
    // play the shorter signal
    oscNode.start(0);
    oscNode.stop(wpm / (25 * 30));
  }

  // play the longer signal
  if (i == 1) {
    oscNode.start(0);
    oscNode.stop(wpm / (25 * 10));
  }
}