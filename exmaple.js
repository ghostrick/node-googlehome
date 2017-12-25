const googlehome = require('./index.js')

//googlehome.search().then(console.log)
let device = new googlehome.Connecter('192.168.11.13')
  device.speak('Hello')//.then(() => device.stopSpeaker())
