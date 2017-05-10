// ici je recupére angular
import angular from 'angular'
import css from 'bootstrap/dist/css/bootstrap.css'

import { UserController } from './user.controller'
import { ApplicationInfoController } from './application-info.controller'
import { TabsController } from './tabs.controller'
import { TotoFilter } from './toto.filter'
import { MirrorFilter} from './mirror.filter'


// Création du module qui a pour nom app et on lui di qu'il ne dépend d'aucun autre module
//angular.module('app', []);

//------En fonction de l'arité d'une methode (cad le nombre de paramétre de notre méthode), on executera des tache différentes
//------voir différence entre angular.module('app', []); et angular.module('app');
// Récup(getter) du module app, ceci afin de ne pas stocker 'angular.module('app', []);' dans une variable 
//angular.module('app');

angular.module('app', [])

    // je définis mon controller que j'appel UserController
.controller('UserController', UserController)
.controller('ApplicationInfoController', ApplicationInfoController)
.controller('TabsController', TabsController)

.filter('toto', TotoFilter)
.filter('mirror', MirrorFilter)

// .config(function () {
//     console.log('CONFIG ANGULAR');
// })

// .run(function () {
//     console.log('RUN ANGULAR');
// })