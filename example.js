const GoogleHome = require('./index')

let device = new GoogleHome.Connecter('192.168.11.13')
device.playMedia('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4').then(console.log).catch(console.log)
