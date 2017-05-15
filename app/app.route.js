export function route ($routeProvider, $locationProvider) {
    
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

    .when('/burger/:id?', {
        controller: 'BurgerController',
        templateUrl: 'views/burger.html',
        controllerAs: '$ctrl'
    })

    .otherwise({
        redirectTo: '/'
        // template: 'PAS TROUVÉ !'
    })

}