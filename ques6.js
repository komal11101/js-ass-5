function inc_arr(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        arr[i]+=1;
    }
   return arr;
}
const num=5;
const arr=[1,2,3,4,5];
console.log(inc_arr(arr));