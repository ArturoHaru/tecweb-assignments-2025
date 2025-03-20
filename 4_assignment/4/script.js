
function cachingDecorator(f,n){
    let cacheCounter = -1
    let cachedValue = f()

    return function(){
        if(cacheCounter < n-1){
            cacheCounter++
        }else{
            cachedValue = f() //update f
            cacheCounter = 0
        }
        return cachedValue
    }
}


/* Do not change f() */
function f(){
    let value = Math.random();
    console.log(`f has been invoked, result is ${value}`);
    return value;
}

let g = cachingDecorator(f, 3);


console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())