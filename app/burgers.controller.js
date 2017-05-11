import {
    uniq,
    clone
} from 'lodash'
import angular from 'angular'
import uuid from 'uuid/v4'

export class BurgersController {
    constructor() {
        this.burgers = [{
                name: 'maxi b',
                toppings: ['steak', 'salad'],
                creator: 'paul@ici.fr'
            },
            {
                name: 'zombie',
                toppings: ['steak', 'tomate'],
                creator: 'paul@ici.fr'
            },
            {
                name: 'hot',
                toppings: ['steak', 'tomate', 'spicy sauce'],
                creator: 'paul@ici.fr'
            },
            {
                name: 'vegan',
                toppings: ['soja steak', 'salad', 'onions'],
                creator: 'paul@ici.fr'
            }

        ]
        this.col = 'name'
        this.desc = false
        //definition de notre nouveau burger avec ces parametres 
        this.newburger = this._initBurger()

    }

    getToppings() {
        return uniq(this.burgers
            // ici on utilise un reduce(qui utilise un accumulateur)
            // ici [...accumulateur, ...toppings] va permettre de prendre a chaque chaque donnée du tableau toppings 
            //  et le stocker dans le tableau accumulateur en concatenant(voir l'explication dans le cahier)
            .reduce((accumulateur, {
                toppings
            }) => [...accumulateur, ...toppings], []))
        /* <=>
.reduce((acc, burger) => {
 let toppings = burger.toppings
 return acc.concat(toppings)
}, [])
*/
    }
    // sortby permet d'inverser les ligne de nos colonnes
    sortBy(col) {
        if (this.col !== col) this.desc = false
        else this.desc = !this.desc
        this.col = col
    }

    getSortBase(burger) {
        if (this.col === 'name') return burger.name
        if (this.col === 'toppings') return burger.toppings.length
    }


    save(form) {

        if (!form.$valid) return
        // On clone le burger et on sauvegarde les toppings
        this.burgers.push(clone(this.newburger))
    }

    // on met le _ avant le nom de la fonction pour la lisibilité de lecture et faire comprendre que c'est une sorte de methode private
    _initBurger() {
        return {
            id: null,
            name: '',
            toppings: [],
            creator: ''
        }
    }

}