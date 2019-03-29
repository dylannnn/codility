function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let tempArray = A;
    let i = 0;
    while (i < K) {
        tempArray = oneTime(A);
        i++;
    }
    return tempArray;
}

function oneTime(A) {
    if (A.length > 0) {
        A.unshift(A.pop());
    }
    return A;
}