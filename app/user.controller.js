// export function UserController () {
//     console.log('UserController');
//     this.name = 'John Doe';
// }
// on va remplacer la fonction par une classe
//  juste pour l elegance mais ça fait la même chose

export class UserController {
  constructor () {
    console.log('UserController')
    this.firstname = 'John'
    this.lastname = 'Doe'
  }

  getName () {
    return `${this.firstname} ${this.lastname.toUpperCase()}`
  }
}
