function find_sum(num,arr)
{
    let sum=0;
    for(let i=0;i<num;i++)

    {
        sum +=arr[i];
    }
    return sum;
}
const arr=[1,2,3,4,5];
console.log(find_sum(arr.length,arr));