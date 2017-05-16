export function routes ($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true)

    $routeProvider
    
    .when('/', {
        controller: 'BurgersController',
        templateUrl: 'views/burgers.html',
        controllerAs: '$ctrl'
    })

    .when('/game', {
        controller: 'GameController',
        templateUrl: 'views/game.html',
        controllerAs: '$ctrl'
    })
// http://localhost:9000/burger pour afficher la page ou on fait les burger 
// il faut d'abord ramener les templates qui se trouves dans le repertoires old et indiquer les chemins
    .when('/burger/:id?', {
        controller: 'BurgerController',
        templateUrl: 'views/burger.html',
        controllerAs: '$ctrl'
    })
// http://localhost:9000/play pour lancer le jeux dans notrfe navigateur 
     .when('/play', {
        template: '<dta-game></dta-game>'
    })

    .otherwise({
        redirectTo: '/'
        // template: 'PAS TROUVÉ !'
    })

}