# cw_for_web
====
## 概論
どんなデバイスでもcw（モールス符号）の聞き取り練習を行えるようにします。

## 対象
アマチュア無線家でcwの練習をしたい方。モールス符号に興味を持っている方。

## 機能
### CW WEB RUNNER
basic:一文字単位での聞き取り
japan: 日本のアマチュア無線局のコールサイン
world: 海外のアマチュア無線局のコールサイン
上記の三つのモードでのモールス符号の聞き取り練習を行えます。

#### Add De
再生する信号の前にDEをつけて再生します。この場合はDEの後のコールを聞き取って回答します。

#### repeat wrong signal
有効にすると間違えた信号を回答できるまで再生します。

### CW TUTOR FOR WEB
ボタンをクリックすると、そのボタンに対応した文字のモールス符号が再生されます。
PLAYボタンをクリックすると、今までに入力した文字列をすべて再生します。

## 対応ブラウザ
Web audio apiを使っているため、IEには対応していません。

## 使用法
### CW WEB RUNNER
ページ下側にあるラジオボタンでモードを選択します。
ページ上側にあるplayボタンで音を流します。
聞き取れた符号をキーボードでテキストボックスに入力します。
answerボタンをクリックし、答え合わせをします。

PCで使用する場合はEnter keyを押すことで再生、答え合わせがされます。
また、ESCkeyを押すことで符号の再生を中断できます。

回答履歴はページの一番下にあるテキストボックス中に記録されていきます。

こちら[CW WEB RUNNER](https://homedm.eim.world/cw_for_web/ "CW_FOR_WEB"), [CW TUTOR FOR WEB](https://homedm.eim.world/cw_for_web/cwTutor.html)をブラウザで開けば使用できます。


# License
Copyright (c) 2019 Taichi Watanabe
Released-under the MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
