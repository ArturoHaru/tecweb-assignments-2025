let n = 10000

function collatzSequenceStep(n) {
    if(n==2) return 1;

    if (n % 2 == 0) {
        return 1 + collatzSequenceStep(n / 2);
    } else {
        return 1 + collatzSequenceStep(3 * n + 1);
    }
}



for (let i = 2; i < n; i++) {
    console.log(`Collatz proved for n=${i}: sequence converges to 1 in ${collatzSequenceStep(i)} steps`)
}