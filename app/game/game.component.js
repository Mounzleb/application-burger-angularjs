import './game.component.css'
import template from './game.component.html'

//  code factorisé par rapport à la version précédente et on a l'ajout de la fonction restart
 class controller {
    constructor (ToppingService) {
        this.ToppingService = ToppingService
    }

    $onInit () {
        this.restart()
        this.ToppingService.getToppings()
        .then(toppings => this.toppings = toppings)
    }

    selectTopping (topping) {
        this.burger = [...this.burger, topping.name]
        switch (this.ToppingService.checkRecipe(this.burger, this.recipe)) {
            case 'VALID' :
                this.restart()
                break
            case 'INVALID' :
                this.gameover()
                break
        }
    }

    restart () {
        this.burger = []
        this.recipe = []
        this.running = true
        this.ToppingService.getRandomRecipe()
        .then(recipe => this.recipe = recipe)
    }

 gameover () {
        this.running = false
    }
}

export let GameComponent = {
    template,
    controller,
    bindings: {}
}