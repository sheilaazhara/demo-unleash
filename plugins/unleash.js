import { UnleashClient } from 'unleash-proxy-client'

export default ({ $config }, inject) => {
  const unleash = new UnleashClient({
    url: $config.unleashURL,
    clientKey: $config.unleashKey,
    refreshInterval: 30,
    appName: 'demo-unleash',
  })

  inject('unleash', unleash)
  unleash.start()
}