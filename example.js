const GoogleHome = require('./index')

let device = new GoogleHome.Connecter('192.168.11.13')
device.playMp3('http://www.hypertrombones.jp/sample/system7.mp3').then(console.log).catch(console.log)
