const mdns = require('mdns'),
  browser = mdns.createBrowser(mdns.tcp('googlecast'))

async function search(waitTime = 1000) {

  let services = []

  browser.start()
  browser.on('serviceUp', service => { services.push(service) })
  await new Promise(resolve => setTimeout(resolve, 1000))
  browser.stop()

  return services
    .filter(service => { if(service.txtRecord.md === 'Google Home') return service })
    .map(service => { return Object.assign(service.txtRecord, {address: service.addresses[0]}) })
}

module.exports = search
