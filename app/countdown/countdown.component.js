class controller {
    constructor ($interval) {
        this.$interval = $interval
        this.remain = 0
    }

    $onChanges (changes) {
        if (changes.time && changes.time.currentValue || changes.flag) {
            if (this.timer) this.$interval.cancel(this.timer)
            this.onStart({ $event: this.remain })
            this.remain = this.time
            this.timer = this.$interval(() => {
                this.remain--
                if (this.remain === 0) {
                    this.$interval.cancel(this.timer)
                    this.onEnd()
                    //  a la fin du chrono on a appel à la fonction onEnd() (qui va envoyer un evenbement, voir en bas)
                }
            }, 1000)
        }
    }
    //  hook permettant de nettoyer la memoire quand le component est supprimé
    // dans notre exemple même si on faisait un restart, le timer continué en console et donc on avait une dissosiation
    //  entre le timer en console et celui affiché sur la page web
     $onDestroy () {
        if (this.timer) this.$interval.cancel(this.timer)
    }
}

const template = `
<span class="badge">{{ $ctrl.remain }}</span>
`

// ici le onEnd qui est là quand le minuteur arrive à 0, 
// va nous envoyer un evenement qui est recupéré dans recipe.component.html
export let CountdownComponent = {
    controller,
    template,
    bindings: {
        time: '<',
        onEnd: '&',
        onStart: '&',
        start: '<'
    }
}