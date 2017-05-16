import angular from 'angular'
import 'bootstrap/dist/css/bootstrap.css'

import CountdownModule from './countdown'

import { BurgerService } from './burger.service'
import { ToppingService } from './topping.service'
import { GameComponent } from './game/game.component'
import { ToppingsComponent } from './toppings/toppings.component'
import { BurgerComponent } from './burger/burger.component'
import { RecipeComponent } from './recipe/recipe.component'


// import { ReverseFilter } from './reverse.filter'

// Création du module app (application)
// faire attention au fait que lorsqu'on declare un module il faut les declarer à la suite les uns des autre pour une meme appliacation
// exemple de declaration de plusieur module pour une même application  :angular.module('app', [ Module1, Module2, Module3 .... ]) on peux egalement n'avoir pas de module specifique angular.module('app', [])
angular.module('app', [ CountdownModule ])

.component('dtaGame', GameComponent)
.component('dtaToppings', ToppingsComponent)
.component('dtaBurger', BurgerComponent)
.component('dtaRecipe', RecipeComponent)

// .filter('reverse', ReverseFilter)

.service('BurgerService', BurgerService)
.service('ToppingService', ToppingService)
