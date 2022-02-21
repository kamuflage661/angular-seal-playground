let array1 = [{ v1: "1", v2: "11" }, { v1: "1", v2: "11" }, { v2: "11" }];
let array2 = [{ v1: "2", v2: "22" }, { v1: "2", v2: "2" }, { v2: "22" }];


let modificationsResult = array1.map(value => value.v1).filter(value => value != null);
console.log(modificationsResult[0])
console.log(modificationsResult[5])

let arrayToFlat = [array1, array2]


console.log(arrayToFlat.reduce((previous, current) => current.concat(previous)))