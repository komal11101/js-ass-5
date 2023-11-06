function highage(arr)
{
    const num=  arr.filter(age => age>=18)
      return num;
}
const arr=[6, 11, 23, 3, 45, 72, 68];
console.log(highage(arr));