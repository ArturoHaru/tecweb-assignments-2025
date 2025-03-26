let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterer = createMultiStepFilterer(arr);

function createMultiStepFilterer(arr){
    return function(filtererCriterion){
        return arr.filter(filtererCriterion)
    }
}

console.log(filterer(x => x % 2 == 0))

//nice ✅