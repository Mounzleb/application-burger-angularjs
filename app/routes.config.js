export function routes ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $routeProvider

    .when('/', {
        template: '<dta-game-over></dta-game-over>'
    })

    .when('/play', {
        template: '<dta-game></dta-game>'
    })

    .otherwise({
        redirectTo: '/'
    })

}