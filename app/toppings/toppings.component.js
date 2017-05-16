import './toppings.component.css'
import template from './toppings.component.html'

class controller {
    constructor () {}

    $onInit () {
        this.toppings = angular.copy(this.toppings)
    }

    select (topping) {
        // déclenchement de l'evt onSelect
        this.onSelect({
            $event: topping
        })
    }
}

export let ToppingsComponent = {
    template,
    controller,
    bindings: {
        toppings: '<',
        onSelect: '&'
    }
}