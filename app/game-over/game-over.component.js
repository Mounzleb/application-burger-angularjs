import template from './game-over.component.html'

class controller {
    constructor ($location) {
        this.$location = $location
    }

    restart () {
        this.$location.path('/play')
    }
}

export const GameOverComponent = {
    template,
    controller
}