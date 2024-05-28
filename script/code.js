// The Array:
let data = ['firstName: Nusaibah', 4, 6, 9, 11, 'lastName: Charif',]
// console.log(data)

// 1.Adding my age
data.push('Age:19')

//2. Displaying all current elements
console.log(data)

//3. a variable that just holds the data array of type of numbers:
var arrayDataTypeHolder = data.map(function(value) {
    return Number.isInteger(value)? 'integer' : 'non-integer';
})
// displaying number types 
console.log(arrayDataTypeHolder)



//  4. find my firstName 
console.log(data.find(value => value == 'firstName: Nusaibah'))

// 5.My firstNames index
console.log(data.findIndex( value => value == 'firstName: Nusaibah'))

// 6. The total of all the numbers from the data array.


/* 7. Two features which enable one to merge arrays and generate a new array:
-Spread Operator
-Concat
*/

// 8. Retrieve only the elements from index 1 through 3 
console.log(data.slice(1, 4));





