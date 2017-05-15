export class GameController {
  constructor (ToppingService, $timeout) {
    this.ToppingService = ToppingService
  
    $timeout(() => {
      console.log('Hello ?')
      this.title = 'Hello'
    }, 1000)

    this.ToppingService.getToppings()
    .then(toppings => this.toppings = toppings)

    this.ToppingService.getRandomRecipe()
    .then(recipe => {
    })
  }
  
}
