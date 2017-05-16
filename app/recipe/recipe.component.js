import template from './recipe.component.html'

class controller {

    constructor ($timeout) {
        this.$timeout = $timeout
        this.flag = false
    }

    $onChanges (changes) {
        if (changes.toppings && changes.toppings.currentValue) {
            // on retourne le tableau (cloné) avant de l'afficher
            this.toppings = angular.copy(this.toppings).reverse();
            // reset timer
            this.flag = !this.flag
            this.time = 3 //{ value: 5 }
        }
    }

//  le onTimeout recupéré dans  game.component.html fait appelo à la fonciton gameOver et permettant
// ainsi de faire afficher le game over et le boutoon restart

//  end () est la fonction appelé quand le temps arrive à 0 et donc on appel dedans le onTimeour
    end () {
        this.onTimeout()
    }

    start (remain) {
        console.log(remain)
    }

}

// ici nous avons l'evenement onTimeout qui est envoyé et recupérer dans game.component.html
export let RecipeComponent = {
    controller,
    template,
    bindings: {
        toppings: '<',
        onTimeout: '&'
    }
}
