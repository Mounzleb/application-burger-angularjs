import angular from 'angular'
import RouteModule from 'angular-route'
import 'bootstrap/dist/css/bootstrap.css'

import GravatarModule from './gravatar'
import { BurgersController } from './burgers.controller'
import { BurgerController } from './burger.controller'
import { BurgerService } from './burger.service'
import { GameController } from './game.controller'
import { ReverseFilter } from './reverse.filter'
import { TabsController } from './tabs.controller'
import { ToppingService } from './topping.service'
import { route } from './app.route'

// Création du module app (application)
angular.module('app', [
    RouteModule, // 'ngRoute'
    GravatarModule
])

.controller('MyController', class MyController {
    constructor () {
        this.thomas = 'tmoyse@gmail.com'
        this.nicolas = 'naholyr@gmail.com'
    }
    talk (word) {
        console.log('TALK', word)
    }
})

.controller('BurgersController', BurgersController)
.controller('BurgerController', BurgerController)
.controller('GameController', GameController)
.controller('TabsController', TabsController)

.filter('reverse', ReverseFilter)

.service('BurgerService', BurgerService)
.service('ToppingService', ToppingService)

.config(route)