import template from './recipe.component.html'

class controller {

    $onChanges (changes) {
        if (changes.toppings && changes.toppings.currentValue) {
            // on retourne le tableau (cloné) avant de l'afficher
            this.toppings = angular.copy(this.toppings).reverse();
        }
    }

}

export let RecipeComponent = {
    controller,
    template,
    bindings: {
        toppings: '<'
    }
}