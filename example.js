const googlehome = require('./index')

googlehome.search(1000)
    .then(resp => console.log(resp))
