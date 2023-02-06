const A = [1,2,3,3]
const B = [1,2,3,4,5,6] 

function getC(arr1, arr2) {
  const minArr = arr1.length < arr2.length ? arr1 : arr2 
  const maxArr = arr1.length > arr2.length ? arr1 : arr2 
  const setMinArr = new Set(minArr)
  return maxArr.filter(e => !setMinArr.has(e))
}

function getD(arr1, arr2) {
  const minArr = arr1.length < arr2.length ? arr1 : arr2
  const maxArr = arr1.length > arr2.length ? arr1 : arr2
  const setMinArr = new Set(minArr)
  return maxArr.filter(e => setMinArr.has(e))
}

const C = getC(A, B)
const D = getD(A, B)

console.log(C)
console.log(D)