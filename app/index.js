import angular from 'angular'
import 'bootstrap/dist/css/bootstrap.css'

import { BurgerService } from './burger.service'
import { ToppingService } from './topping.service'

import { GameComponent } from './game/game.component'
import { ToppingsComponent } from './toppings/toppings.component'
import { BurgerComponent } from './burger/burger.component'
import { RecipeComponent } from './recipe/recipe.component'

// import { ReverseFilter } from './reverse.filter'

// Création du module app (application)
angular.module('app', [])

.component('dtaGame', GameComponent)
.component('dtaToppings', ToppingsComponent)
.component('dtaBurger', BurgerComponent)
.component('dtaRecipe', RecipeComponent)

// .filter('reverse', ReverseFilter)

.service('BurgerService', BurgerService)
.service('ToppingService', ToppingService)
