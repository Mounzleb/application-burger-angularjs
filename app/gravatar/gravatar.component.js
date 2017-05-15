import template from './gravatar.component.html'
import './gravatar.component.css'

import md5 from 'md5'

class controller {
    constructor ($timeout) {
        this.displayGravatar = true
    }

//  ici on utilise un hook pour initialiser notre componnent
    $onInit () {
        this.md5 = md5(this.email)
    }

    toggleGravatar () {
        this.displayGravatar = !this.displayGravatar
    }

  clicYo () {
        this.onTalk({
            $event: 'YO'
        })
    }

    clicHi () {
        this.onTalk({
            $event: 'HI'
        })
    }
}

export let GravatarComponent = {
    template,
    controller,
    bindings: {
        email: '<',
        onTalk: '&'
    }
}