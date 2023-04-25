const receivesAFunction = function(callback) {
    callback();
}

function returnsANamedFunction(namedFunction) {
    return function namedFunction(){
        return "name?"
    }
}

function returnsAnAnonymousFunction() {
    return function () {
    }
}