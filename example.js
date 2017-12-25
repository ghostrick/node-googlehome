const GoogleHome = require('./index')

let device = new GoogleHome.Connecter('192.168.11.13')
device.speak('Hello').then(console.log)
