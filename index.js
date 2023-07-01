const arr = [7, 3, 7, 3, 7, 8, 3]

function solution(A) {
    let obj = {}

    for (let i = 0; i < A.length; i ++){
        obj[A[i]] = (obj[A[i]] || 0) + 1
    }
    const result = Object.entries(obj).find(([key, value]) => value === 1);
    console.log(result[0])
}

solution(arr)