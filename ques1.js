function find_pro(num,arr)
{ 
    var mul=1; 
    for(let i=0;i<num;i++)
    {
        mul*=arr[i];
    }
    return mul;

}
// var mul=1;
const arr=[1,2,3,4,5];
console.log(find_pro(arr.length,arr));