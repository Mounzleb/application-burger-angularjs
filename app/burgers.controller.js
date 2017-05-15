import { uniq } from 'lodash'

export class BurgersController {
  constructor (BurgerService) {
    this.BurgerService = BurgerService
    this.burgers = []
    this.col = 'name'
    this.desc = false

    this.fetchBurgers()
  }

  fetchBurgers() {
    this.BurgerService.getBurgers()
    .then(burgers => this.burgers = burgers)
  }

  getToppings () {
    return uniq(this.burgers
    .reduce((acc, {toppings}) => [...acc, ...toppings], []))
  }

  sortBy (col) {
    if (this.col !== col) this.desc = false
    else this.desc = !this.desc
    this.col = col
  }

  applySort (burger) {
    if (this.col === 'name') return burger.name
    if (this.col === 'toppings') return burger.toppings.length
  }

  removeBurger (burger) {
    this.BurgerService.remove(burger)
    .then(() => this.fetchBurgers())
  }

}