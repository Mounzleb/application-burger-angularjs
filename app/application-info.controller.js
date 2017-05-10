export class ApplicationInfoController {
  constructor () {
    this.name = 'Burger'
    this.version = '1.0.0'
    this.showVersion = false

    this.users = [
      { name: 'John', email: 'test@ici' },
      { name: 'lzkejflkez', email: 'sdfsd@ici' },
      { name: 'frezfezf', email: 'tedgfdgdst@ici' },
      { name: 'regergre', email: 'ouliu@ici' }
    ]
  }

  toggleVersion () {
    this.showVersion = !this.showVersion
  }
}