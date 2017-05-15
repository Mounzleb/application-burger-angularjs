import template from './gravatar.component.html'
import './gravatar.component.css'

import md5 from 'md5'

class controller {
    constructor () {
        this.displayGravatar = true
    }

    $onInit () {
        this.md5 = md5(this.email)
    }

    toggleGravatar () {
        this.displayGravatar = !this.displayGravatar
    }

    talk (form) {
        if (form.$invalid) return

        this.onTalk({
            $event: this.text
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