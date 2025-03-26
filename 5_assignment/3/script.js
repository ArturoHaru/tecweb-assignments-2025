let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterer = createMultiStepFilterer(arr);

function createMultiStepFilterer(arr){
    return function(filtererCriterion){
        let arr2 = []
        for(let n of arr){
            if(filtererCriterion(n)){
                arr2.push(n)
            }
        }
        return arr2
    }
}

console.log(filterer(x => x % 2 !== 0))

//nice ✅