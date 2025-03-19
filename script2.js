// Given an array of numbers, find and print the maximum number

const largeNumber = [800,452,147,908,2000,1010];
let max = 0;

largeNumber.forEach((item)=> {
 if (item > max) {
    max = item;
 }
    
})
//console.log("The maximum number of array is = " , max);


// Practice of reduce method 

const arrReduce = [
    {
        course: 'c++ course',
        price: 3000
    },
    {
        course: 'java course',
        price: 4500
    },
    {
        course: 'mobile app course',
        price: 2500
    },
    {
        course: 'data science course',
        price: 10000
    },
    
]

const totalPrice = arrReduce.reduce( (arr, index)=> {
        return arr+index.price 

},0)
//console.log(totalPrice);

const numArr = [1,2,5,4,85,47];
const total = numArr.reduce( (arr, index) =>{
   return arr + index;
},100)
// console.log(total);

const mapMeth = [1,5,74,85,649,17,54];
const oddArr = [];

mapMeth.forEach((index)=> {
    if(index % 2 == 1) {
       oddArr.push(index);
    }
})
console.log("Odd numbers from given array are = " , oddArr);