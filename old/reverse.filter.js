export function ReverseFilter () {
    return function (input) {
        if (!angular.isArray(input)) return
        return input
        // const res = angular.copy(input)
        // res.reverse()
        // return res
    }
}