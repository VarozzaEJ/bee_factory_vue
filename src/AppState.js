import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  pollen: 6000,
  clickPower: 1,
  autoClickPower: 0,

  clickUpgrades: [
    new Upgrade({
      name: 'Bee',
      price: 50,
      quantity: 0,
      multiplier: 1.2,
      clickPower: 1,
    }),
    new Upgrade({
      name: 'Hive',
      price: 250,
      quantity: 0,
      multiplier: 1.3,
      clickPower: 5
    }),
  ],

  autoUpgrades: [
    new Upgrade(
      {
        name: 'Superbee',
        price: 1000,
        quantity: 0,
        multiplier: 20,
        clickPower: 0,
      }),
    new Upgrade({
      name: 'Queenbee',
      price: 5000,
      quantity: 0,
      multiplier: 30,
      clickPower: 0,
    }),
  ]
})


// this.id = data.id
// this.name = data.name
// this.price = data.price
// this.quantity = data.quantity
// this.multiplier = data.multiplier