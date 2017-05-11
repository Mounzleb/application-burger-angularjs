export class BurgerService {
  constructor ($http) {
    this.$http = $http
  }

  getBurgers () {
    return this.$http.get('http://localhost:3000/burgers')
    .then(response => response.data) 
  }
}